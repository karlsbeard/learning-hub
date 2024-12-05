# cookie

## 基础知识

### cookie是什么

1. Cookie 是一种由服务器发送到用户浏览器的小数据块，通常用于存储用户的会话状态、偏好设置或其他信息。Cookie 在客户端存储，可以在后续的请求中发送回服务器。


#### cookie谁来创建

- 服务器：当用户访问网站时，服务器可以通过 HTTP 响应头中的 Set-Cookie 指令发送一个 Cookie 给浏览器。浏览器随后会将这个 Cookie 存储在本地。
- 客户端：前端 JavaScript 也可以通过 document.cookie 来创建或修改 Cookie。
