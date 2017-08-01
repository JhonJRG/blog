
//甚至可以通过file协议访问，执行程序
//可以在URL框中输入：http://localhost:8080/getNews?callback=appendHtml

router.get('/getNews',function(req,res){
  var news = [
    "1.这是第1行",
    "2.这是第2行",
    "3.这是第3行",
    "4.这是第4行",
    "5.这是第5行",
    "6.这是第6行",
    "7.这是第7行",
    "8.这是第8行"
  ]
  var data = [];
  for(var i=0; i<3; i++){
    var index = parseInt(Math.random()*news.length);
    data.push(news[index]);
    news.splice(index,1);
  }
  var cb = req.query.callback;
  if(cb){
    res.send(cb + '(' + JSON.stringify(data) + ')');
  }else{
    res.send(data);
  }
})
