---
title: "Docker 常用方法整理一下 (WIP)"
date: "2021-03-28 16:13:46"
author: ahacad
category: "developing"
tags: [""]
description: ""
language: zh
mainpanel: true
published: true
---

记录一下 Docker 的常用命令，本页面时常更新。

### 打包

为 Nodejs 写一个 Dockerfile:
 
```dockerfile
# 基镜像
FROM node:14
# 工作目录
WORKDIR /usr/src/app
# 复制当前项目到镜像里
COPY . .
# 安装 npm 依赖
RUN npm install
# 开放端口 4000
EXPOSE 4000
# 启动后端服务
CMD ["npm", "run", "dev"]
```

然后来优化它:

```dockerfile
FROM node:14 as build
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install
# 以上类似，之后转用 alpine-based node 服务，更加轻量
FROM node:14-alpine
WORKDIR /app
COPY --from=build /usr/src/app /app
EXPOSE 4000
CMD ["npm", "run", "dev"]
```

转用 alpine 之后，打包体积从 `994 MB` 降为 `114 MB`，非常可观的下降。

### 启动

```bash
docker run -d -p 80:80 docker/getting-started
```

- `-d`: 后台运行
- `-p 80:80` 系统端口:镜像端口 映射


### 镜像管理 (containers)

查看所有镜像:

```bash
docker ps -a
```

删除已经退出的镜像:

```bash
docker container prune
```

或者使用 bash:

```bash
docker ps --filter "status=exited" | grep 'weeks ago' | awk '{print $1}' | xargs --no-run-if-empty docker rm
```


