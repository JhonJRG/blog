//访问
//http://a.jrg.com:8080/aa.html
//http://b.jrg.com:8080/bb.html

router.get('/', function(req, res) {
  res.send('hello world');
});
