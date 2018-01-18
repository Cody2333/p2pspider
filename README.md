## 介绍

p2pspider 是一个种子爬虫, 它从全球 P2P 网络下载当前活跃的种子。

## 使用

请在在带公网ip的主机上运行。

#### 构建docker image

`cd p2psipder`

`docker build -t p2pspider . `

#### 运行镜像

`docker run -d -p 6881:6881/udp -v /tmp/docker:/home/nodejs/app/torrents p2pspider`

注意，需要对6881端口做udp映射，并且将保存下载到的种子的文件夹挂载到主机上

## 协议

[bep_0005](http://www.bittorrent.org/beps/bep_0005.html), [bep_0003](http://www.bittorrent.org/beps/bep_0003.html), [bep_0010](http://www.bittorrent.org/beps/bep_0010.html), [bep_0009](http://www.bittorrent.org/beps/bep_0009.html)

## 感谢

在开发这个项目时, 从 [bittorrent-protocol](https://github.com/feross/bittorrent-protocol) 和  [ut_metadata](https://github.com/feross/ut_metadata) 借鉴了一些实现代码. 非常感谢其作者 [@feross](https://github.com/feross) 指点迷津.

## 许可证
MIT
tp://www.bittorrent.org/beps/bep_0003.html), [bep_0010](http://www.bittorrent.org/beps/bep_0010.html), [bep_0009](http://www.bittorrent.org/beps/bep_0009.html)
