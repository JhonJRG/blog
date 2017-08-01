// 访问
// http://a.jrg.com:8080/a.html
// http://b.jrg.com:8080/b.html

router.get('/', function(req, res) {
  res.send('hello world');
});
