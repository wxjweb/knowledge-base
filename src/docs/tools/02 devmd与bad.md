# devmd与bad


```python 
X:\ba3\src\basite\task\object\ba_sec_tpl_task.py
定义任务类

class baSecTplTask(DeviceTask, DBTask):
    last_updated_time = datetime.datetime.now()

    def __init__(self, job_id, job_name, task_id, task_type, plan, ne_id, parameters, logger=taskLog):
        super(baSecTplTask, self).__init__(job_id, job_name, task_id, task_type, plan, ne_id, parameters, logger)
        self.diff_keys = []
        baSecTplTask.last_updated_time = datetime.datetime.now()
        self.seq = 0
        self.task_completed = False
        self.config_type = ba_TPL_SET

```

```python 
X:\ba3\src\basite\task\object\ba_sec_tpl_task.py
任务开始

    def start(self):
        super(baSecTplTask, self).start()
        config_db = SgDB(logger=self.logger)
        try:
            # get the config
            c = CommonMessage(ne_id=self.ne_id, category="config", type="get_tpl_config",
                              message_from="tpl_config", task_id=self.task_id)
            self.set_progress(10)
            response_msg = sync_invoke(c)
            self.logger.debug("response_msg: %s" % response_msg)

            if not response_msg:
                self.error = locale.TASK_CANNOT_GET_CONFIG_FILE_REPLY_FROM_FW % (ne_info_cache.get_single_ne_by_ne_id(self.ne_id)['nename'])
                return self

            parsed_response = parser_common_message(response_msg)
            config_file = parsed_response.payload.get("file_name")
            self.logger.info("device config file = [%s]" % (config_file))
            if config_file:
                target_file_path = get_config_commit_data_path(self.task_id) + "/" + basename(config_file)
                self.logger.info("move config file for %s from %s to %s for config task" %
                                 (self.ne_id, config_file, target_file_path))
                shutil.move(config_file, target_file_path)
                self.set_progress(25)
                self.message = locale.TASK_GET_CONFIG_SUCCESS
                self.logger.info("Move done. the config file is put in: %s" % (target_file_path))
                try:
                    dict_of_device_moi = load_config(target_file_path, ne_id=self.ne_id, config_type=self.config_type)
                    self.set_progress(30)
                    self.message = locale.TASK_GET_CONFIG_COMPLETED
                except Exception as msg:
                    self.logger.exception("ERROR: parse device config to moi tree, msg = [%s]" % (msg))
                    self.error = locale.TASK_CONFIG_FILE_RETURNED_FROM_FW_IS_WRONG
                    raise Exception("didn't get config file")
            else:
                self.logger.error("ERROR: response of the device [ne_id = %d] has no path of config file" % (self.ne_id))
                self.error = locale.TASK_CANNOT_GET_CONFIG_FILE_REPLY_FROM_FW % (ne_info_cache.get_single_ne_by_ne_id(self.ne_id)['nename'])
                raise Exception("can't find the config_file")

            config_db.open()
            # get the diff file
            diff = self.prepare_diff(config_db, dict_of_device_moi)

            # write diff to diff file
            try:
                diff_file_path = get_config_commit_task_diff_file_path(self.task_id, self.ne_id)
                self.logger.info("write diff result to diff file")
                with open(diff_file_path, 'w+') as diff_file:
                    diff_file.writelines(diff)
            except Exception as msg:
                self.logger.error("open file [%s] error, msg = [%s]" % (diff_file_path, msg))
                self.error = locale.TASK_INTERNAL_ERROR_WHEN_WRITE_DIFF_FILE_INTO_DISK
                raise Exception("diff config error")

            self.set_progress(45)
            self.message = locale.TASK_CREATE_DIFF_SUCCESS

            # Initialize the sequence before the command is sent.
            # For some times, the command is returned before the response is got.
            self.task_completed = False
            self.seq = 0
            # wait util the responses are received.
            self.waiting = True

            # commit diff file to device
            try:
                self.set_progress(50)
                self.message = locale.TASK_START_TO_DEPLOY
                self.logger.info("commit diff file to dev")
                c = CommonMessage(ne_id=self.ne_id, category="config", type="set_tpl_config", payload=diff_file_path,
                                  ne_sn=ne_info_cache.get_ne_sn_by_ne_id(self.ne_id, config_db),
                                  message_from="tpl_config", task_id=self.task_id)
                response_msg = asyc_invoke(c)
                self.logger.info("response msg = [%s]" % (response_msg))
            except Exception as msg:
                self.logger.exception(msg)
                self.error = locale.TASK_SEND_DIFF_FILE_EXCEPTION
                raise Exception("diff config error")

            self.log_task_start()
            # add the timeout setting after the commands are sent.
            self.timeout_value = 90
            baSecTplTask.last_updated_time = datetime.datetime.now()
        except Exception as msg:
            self.logger.exception(msg)
        finally:
            config_db.close()
            return self

```

```python 
X:\ba3\src\basite\device\common\common_message.py
消息初始化

class CommonMessage(object):
    '''
    The category could be monitor, common.
    For common category:
    1)load_config
    2)deploy_config
    3)common config

    For monitor:
    1)
    '''
    def __init__(self, ne_id='', ne_sn='', category="", type="", payload="",
                 vsys_id=0, message_id=0, message_from=0, common_json="", task_id=0):
        self.ne_id = ne_id
        self.category = category
        self.type = type
        self.payload = payload
        self.vsys_id = vsys_id
        self.message_id = message_id
        self.message_from = message_from
        self.ne_sn = ne_sn
        self.common_json = common_json
        self.task_id = random.randint(0x8000, 0xffff) if task_id == 0 else task_id & 0x7fff
    
    def get_message_header(self, message_id):
        content = dict()
        content['category'] = self.category
        content['type'] = self.type
        content['message_id'] = self.message_id
        content['vsys_id'] = self.vsys_id
        content['message_from'] = self.message_from
        if not self.ne_sn:
            content['ne_sn'] = get_ne_sn_by_ne_id(self.ne_id)
            self.ne_sn = content['ne_sn']
        else:
            content['ne_sn'] = self.ne_sn
        content["task_id"] = self.task_id
        return content

    def get_message_body(self):
        content = {}
        if self.category == 'common':
            if self.type in ('commit_config', 'commit_license', "tpl_config"):
                content['file'] = self.payload
            elif self.type == 'common':
                content['common_json'] = self.common_json
        return content

    def get_message_content(self):
        data = dict()
        data['head'] = self.get_message_header(get_new_message_id())
        data['body'] = self.get_message_body()
        json_data = json.dumps(data)
        return json_data


```

```python 
X:\ba3\src\basite\device\ipc\dev_ipc.py
同步发送消息

def sync_invoke(common_message, timeout=60):
    return invoke(common_message, multiprocessing.Event(), timeout)
```

```python 
X:\ba3\src\basite\device\ipc\dev_ipc.py
消息下发

# the controller parameter could be Event object or callback method.
def invoke(common_message, controller=None, timeout=0):
    logger.debug("in func invoke, type of controllor = [%s]" % (type(controller)))
    json_data = common_message.get_message_content()
    response = ""
    if type(controller) is multiprocessing.synchronize.Event:
        logger.debug("controller is multiprocessing.synchronize.Event!!!")
        ne_sn = common_message.ne_sn
        task_id = common_message.task_id
        if not ne_sn:
            logger.error("can not find the ne_id=%s" %(common_message.ne_id))
            return response
        response_key = get_ne_sn_task_id_response_key(ne_sn, task_id)
        logger.info("[%s][%s] register waiting key into redis(%s)\n%s",
                    common_message.category, common_message.type,
                    response_key, json_data)

        redis_conn = redis_pool.get_redis_conn()
        redis_conn.set(response_key, '')
        # NE_SN_EVENT_DICT[ne_sn] = controllor

        logger.debug("call event's wait method")
        # REQUEST_QUEUE.put(json_data)
        send_msg_to_devmd(json_data, logger)
        # NE_SN_EVENT_DICT[ne_sn].wait()
        wait_seq = 0
        timeout *= 100
        while not redis_conn.get(response_key):
            if wait_seq % 100 == 0:
                logger.debug("timeout = %d, wait_seq = %d", timeout, wait_seq)
            if 0 < timeout < wait_seq:
                break
            wait_seq += 1
            time.sleep(0.01)

        logger.debug("got notify from handle response method")
        response = redis_conn.get(response_key)
        if not response:
            logger.error("no response is got since %dS" %(timeout/100))
        else:
            logger.debug("got notify, move on, response is: " + response)
        redis_conn.delete(response_key)
        # del NE_SN_EVENT_DICT[ne_sn]
    else:
        # REQUEST_QUEUE.put(json_data)
        send_msg_to_devmd(json_data, logger)

    return response

```

```python 
X:\ba3\src\basite\device\ipc\dev_ipc.py
将消息发送给设备

def send_msg_to_devmd(msg, log):
    ipc = SgIPC(logger=log)
    ipc.create_socket()
    ipc.set_timeout()
    log.info('send to devmd, message:\n%s', msg)
    ret = ipc.send_message(msg)
    ipc.close()
    return ret


```

```python 
IPC 通信
X:\ba3\src\basite\common\sg_ipc.py

class SgIPC:
    def __init__(self, so_name="devmd", so_path=RUN_DIR, logger=defLog):
        self.so_path = so_path
        self.so_name = so_name
        self.so_file = None
        self.md_socket = None
        self.sock_addr = None
        self.so_file_last_modified_time = None
        self.log = logger

    def _get_so_file(self, name):
        return os.path.join(self.so_path, name)

    def _get_srv_sockaddr(self, srv_name):
        # print '''Read peer port from file '''
        peer_port_file = self._get_so_file(srv_name)
        try:
            f = open(peer_port_file, "r")
        except IOError as err:
            self.log.error('read pid of [%s] failure, File Error: %s', srv_name, str(err))
            return None
        sockaddr = f.readline()
        f.close()

        """
        # 什么时候写的devmd，需要查看代码
        [root@ba run]# pwd
        /ba/var/run
        [root@ba run]# ls
        10.1  11.1  14.2  19.2  20.2  21.2  25.1  26.1  6.1  7.1  9.1
        10.2  11.2  19.1  20.1  21.1  24.1  25.2  26.2  6.2  7.2  devmd
        [root@ba run]# cat devmd 
        ('127.0.0.1', 38658)
        [root@ba run]# 

        [root@ba run]# python 
        Python 2.7.11 (default, Jun 14 2018, 02:02:08) 
        [GCC 4.4.7 20120313 (Red Hat 4.4.7-3)] on linux2
        Type "help", "copyright", "credits" or "license" for more information.
        >>> import os
        >>> import time
        >>> print(time.ctime(os.path.getmtime("/ba/var/run/devmd")))
        Thu Feb 13 08:53:23 2020
        >>> exit()
        """

        return sockaddr
    
    def check_sockaddr_changed(self):
        so_file_last_modified_time = time.ctime(os.path.getmtime(self._get_so_file(self.so_name)))

        if self.so_file_last_modified_time is None or \
                        so_file_last_modified_time != self.so_file_last_modified_time:
            
            self.sock_addr = self._get_srv_sockaddr(self.so_name)
            self.so_file_last_modified_time = so_file_last_modified_time
            return True
        else:
            # logger.debug("old sock_addr is %s, new sock_addr is %s" %(self.sock_addr, sock_addr))
            return False

    def create_socket(self):
        self.log.debug("so_name is %s", self.so_name)
        if self.sock_addr is None:
            self.log.debug("sock address of %s is None, get it again", self.so_name)
            self.check_sockaddr_changed()
            
        if self.md_socket:
            self.close()

        try:
            self.md_socket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        except Exception as msg:
            self.log.warning("socket create failed, %s", msg)
            return False, msg

        self.md_socket.connect(tuple(eval(self.sock_addr)))
        self.log.debug("connect to %s", self.sock_addr)
        # md_socket.send(in_buf)
        return True, None

    def receive_message(self):
        
        try:
            flag, out_buf = True, self.md_socket.recv(1024)
        except Exception as msg:
            flag, out_buf = False, msg
        return flag, out_buf

    def set_timeout(self, timeout=10):
        self.md_socket.settimeout(timeout)

    def send_message(self, message):
        try:
            self.md_socket.send(message)
            return True
        except Exception as e:
            self.log(e)
            return False

    def close(self):
        self.log.debug("to close connection to devmd")
        try:            
            if self.md_socket:
                self.md_socket.shutdown(socket.SHUT_RDWR)
                self.md_socket.close()
                self.md_socket = None
        except Exception as msg:
            self.log.exception(msg)

    def connect_to_devmd(self):  
        # It's for EVENT receive process
        self.create_socket()        
        self.md_socket.setsockopt(socket.SOL_SOCKET, socket.SO_KEEPALIVE, 1)
        self.md_socket.setsockopt(socket.SOL_TCP, socket.TCP_KEEPIDLE, 1)
        self.md_socket.setsockopt(socket.SOL_TCP, socket.TCP_KEEPINTVL, 1)
        self.md_socket.setsockopt(socket.SOL_TCP, socket.TCP_KEEPCNT, 5)
        
        self.md_socket.settimeout(2)
        self.md_socket.setblocking(False)

```

















































































