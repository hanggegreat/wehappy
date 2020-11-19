## `wehappy` 是一个利用 `Spring Cloud` 微服务框架搭建的即时通信系统

### TodoList

 - [x] `user` 点赞 
 - [x] `chat` 把用户整合进聊天
 - [x] `chat` 把群组整合进聊天
 - [x] `message` 从 `mq` 拉取推送消息，落入 `db` 并推送给客户端，并更新消息未读数
 - [x] `message` 提供总消息未读数和会话消息未读数查询、更新接口
 - [x] `message` 提供会话增删改查接口，并且在删除时更新会话未读数
 - [x] `message` 提供聊天记录查询接口
 - [x] `message` 提供聊天记录删除接口
 - [x] `account` 用户账户信息查看
 - [x] `account` 用户账户充值、支付
 - [ ] `account` 发私聊红包、群聊运气红包
 - [ ] `account` 抢红包接口
 - [ ] `account` 定时退回未领取的红包
 - [ ] `gateway` 推送消息加上客户端确认逻辑，防止数据丢失
 - [ ] `group` 维护管理员人数字段

### 环境搭建

#### `linux & mac`

1. 安装 `jdk11`, 不兼容 `jdk8`
2. 安装 `docker` 和 `docker-compose`
3. 运行 `start_db.sh` 启动 `mysql`
4. 连接 `mysql`
5. 执行 `config/sql` 下的两个数据库脚本
6. 进入 `config` 目录
7. 执行 `start_env.sh` 启动项目运行环境

### 启动服务

1. `auth`: `AuthApplication`, 鉴权服务
2. `user`: `UserApplication`, 用户服务
3. `sms`: `SmsApplication`, 邮件服务
4. `group`: `GroupApplication`, 群组服务
5. `chat`: `ChatApplication`, 聊天服务
6. `media`: `MediaApplication`, 媒体服务
7. `message`: `MessageApplication`, 消息服务
8. `account`: `AccountApplication`, 账户服务

### 访问 `swagger` 文档

1. `url`: `localhost:9901/doc.html`
2. 聊天页面: `portal/index.html`

#### 架构设计

![image-20201021005206055](doc/image/image-20201021005206055.png)

#### 详细功能：

![image-20201021005206013](doc/image/image-20201021005206013.png)

#### 数据库设计：

![image-20201021231238096](doc/image/image-20201021231238096.png)
