// 模拟慢网速  慢网速延时加载有两种解决方案：1.阻止用户重复点击（数据没到之前再点是无效的） 2.不阻止用户的重复点击，但需要显示给用户正确的数据

router.get('/loadMore',function(req,res){
  var curIdx = req.query.index
  var len = req.query.length
  var data = []
  for (var i=0; i<len; i++){
    data.push('内容'+ (parseInt(curIdx) + i))
  }
//   延时加载代码
//  setTimeout(function(){
//   res.send(data);
//  },1000)
   res.send(data);
})
