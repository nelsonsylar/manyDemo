# nodejs-test
用nodejs实现if else路由来加深对JSONP的理解
## 如何使用
1. 修改host  frank.com:8001 和 jack.com:8002 为127.0.0.1
2. 分别启动`node server.js 8002` `node server.js 8001`
3. 打开frank.com:8001，点击按钮，会向jack.com:8002发起请求，并返回回调函数实现跨域访问

## 增加用ajax发送请求
访问  http://localhost:8002/useAJAX
## 增加用js封装简单的jQuery.ajax的api
- 实现jQuery.ajax(url,method,body,success, fail)
- 将传参修改为对象的形式
- 升级jQuery.ajax 满足 Promise 规则