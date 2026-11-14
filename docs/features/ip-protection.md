# 真实 IP 防护

<!-- 适用版本：v0.2.3；配文：glm2 -->

一句话：开着代理上网时，网站仍可能借助 WebRTC 绕过代理拿到你的真实 IP，进而判断大致位置和运营商；开启防护后，网站只能看到代理的 IP。

<!-- TODO(glm2)：GLM 特别要求——开启前确认弹窗全文讲解：实际改了什么、会影响哪些网页功能（网页会议 / 语音通话 / P2P）、出问题怎么恢复；防护级别对比（不防护 / 隐藏 VPN / 隐藏局域网 / 隐藏真实 IP 推荐 / 禁用音视频通话 / 隐藏摄像头麦克风）；「检测一下」自测的用法。确认弹窗截图需人工补：shots/0.2.3/manual/ip-confirm.png -->

<img src="/shots/0.2.3/zh-CN/light/options-network.png" alt="网络设置：真实 IP 防护">

<img src="/shots/0.2.3/zh-CN/dark/options-network.png" alt="深色网络设置">
