// 访问之前先：
//   在host文件（C:\Windows\System32\drivers\etc）中加入以下语句，即可通过 a.jrg.com:8080/xxxx.html 访问
//   127.0.0.1       a.jrg.com
//   127.0.0.1       b.jrg.com
//   127.0.0.1       jrg.com 
//  *如果当前页面的url和请求页面的url不统一，那就是跨域

// 访问地址：
// http://a.jrg.com:8080/a.html
// http://b.jrg.com:8080/b.html

router.get('/', function(req, res) {
  res.send('hello world');
});
