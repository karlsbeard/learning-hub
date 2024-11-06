
# HTTP相关问题

## 跨资源共享(CORS)问题

### 问题背景

在微前端项目中，需要将子应用配置进入对应的基座应用中，然而在嵌入过程中遇到了一些报错信息
:::info{title=背景信息}
- 基座应用: S
- 子应用: react + vite
- 微前端框架: micro-app
:::

### 报错信息

``` js
Access to fetch at 'http:xxx' from origin 'http://xxxb' has been blocked by CORS policy: Response to preflight request doesn't pass access control check: The value of the 'Access-Control-Allow-Origin' header in the response must not be the wildcard '*' when the request's credentials mode is 'include'.
```

### 问题分析

- 请求中的 credentials 模式被设置为 include，这通常是为了支持带有用户认证的请求（如 Cookie）。
- 当使用 credentials: 'include' 进行跨域请求时，后端的 Access-Control-Allow-Origin 头不能设置为通配符 *，而必须指定明确的域。
