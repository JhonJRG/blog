## JS函数与作用域

**如题，本文介绍函数与作用域的相关知识**
   
 ### 1.函数声明和函数表达式有什么区别
 
 * 函数声明：使用function关键字可以声明一个函数
 
   例：````function foo(){}````
 
*  函数表达式：意即将一个匿名函数赋值给一个变量
 
   例：````var foo=function(){}````
 
* 区别：
 
  （1）函数声明必须有标识符，也就是常说的函数名；函数表达式可以省略函数名

  （2）函数的声明不必放到调用的前面，函数调用的时候才会被执行。函数的表达式则必须放到调用的前面。
 
  （3）函数声明在JS解析时进行函数提升，因此在同一个作用域内，不管函数声明在哪里定义，该函数都可以进行调用。而函数表达式的值是在JS运行时确定，并且在表达式赋值完成后，该函数才能调用
    
  （4）在程序执行前，会先获取函数声明声明的函数，获取变量的声明，这里变量的声明只是先开辟一个空间，然后给了个名字，之后到该变量名赋值的时候，才有值，也就是说，在未得到该变量的赋值前，使用该变量会得到undefined。

### 2.什么是变量的声明前置？什么是函数的声明前置
  
   * javascript的变量声明具有hoisting机制，JavaScript引擎在执行的时候，会把所有的声明都提升到当前作用域的最前面
   
   * 变量声明前置就是在一个作用域块中，所有的变量都被放在块的开始处声明
   
     变量的声明前置，在程序运行前，先获取变量的名字，到该变量的赋值语句，才为该变量赋值，再此前都是undefined
     
   * 函数的声明前置：function 函数名(){}声明了一个函数，在程序运行前，提取所有函数声明的函数，之后才正式开始运行函数，所以，无论函数声明的函数执行语句放在程序的最前面，或者程序的最后面，都能够正常执行
   
### 3.arguments 是什么

  **arguments是函数内部的一个对象，对应着传进来的参数，是一个类数组对象，没有数组的操作方法。**
  
   * 特点：
  
   （1）对象有length属性且length的值就是对象里属性的数量
 
   （2）每个传进来的参数对应着arguments[0],arguments[1]，有先后顺序之分，通过下标获取到对应值
 
   比如
  
 > function fn(name,age){
 
 > console.log(arguments[0];);
 
 > console.log(arguments[1];);
 
 > }
 
### 4.函数的"重载"怎样实现
  
  * 定义：重载函数就是在同一作用域内，可以有一组具有相同函数名，不同参数列表的函数**

  * 在JS中没有重载，同名函数后面的会覆盖前面的。

### 5.立即执行函数表达式是什么？有什么作用
  
  * 写法
   
  （1）````(function(){ /* code */ }());```` // Crockford 推荐这个
  
  （2）```` (function(){ /* code */ })();```` // 这个同样运行正常
  
  * 作用
  
  （1） 函数会立即执行。
  
  （2） 隔离作用域（这个匿名函数中的变量与外部环境的变量隔离，防止了变量的命名冲突，形成了一个独立的空间，有助于代码模块化。）
  
### 6.求n!，用递归来实现

 * 递归4个特点：
 
 （1）自己调用自己

 （2）设定终止条件

 （3）优点：算法简单

 （4）缺点：效率低
  
* 例子

      function factor(n){
      if(n===1){
      console.log(n);
      return n;
      }
      var nn=n*factor(n-1)
      console.log(nn)
      return nn
      }  
      factor(5)````
    ````//1*2*3*4*5 结果：1 2 6 24 120````

### 7.以下代码输出什么？（PS: //注释就是结果）

       function getInfo(name, age, sex){
       console.log('name:',name);     //饥人谷-->小谷-->男
       console.log('age:', age);      //2-->3-->undefined
       console.log('sex:', sex);      //男-->undefined-->undefined
       console.log(arguments);        //空（没有指定下标）
       arguments[0] = 'valley';   
       console.log('name', name);     //name valley 
       }
       getInfo('饥人谷', 2, '男');
       getInfo('小谷', 3);
       getInfo('男');

### 8. 写一个函数，返回参数的平方和？

       <script>
       function sumOfSquares(){
       var result = 0;
       if(arguments.length>0){
       for(var i=0;i<arguments.length;i++){
       result += arguments[i]*arguments[i];
       }
       }
       return result 
       }
       var result =sumOfSquares(2,3,4)
       var result2 =sumOfSquares(1,3)
       console.log(result)
       console.log(result2)
       </script>  

### 9.如下代码的输出？为什么

       console.log(a);
       var a = 1;   //undefined
       console.log(b); //报错
   * 结果：undefined和报错
   * 原因： 
      （1）变量a的定义 var a = 1;  应该放到 console.log(a); 的前面，变量应该先定义后输出。
      （2）b没有被声明就直接输出显然是大错特错

### 10.如下代码的输出？为什么
 
       sayName('world');
       sayAge(10);
       function sayName(name){
	       console.log('hello ', name);
       }
       var sayAge = function(age){
	   	console.log(age);
	   }
  输出 ：hello,world以及报错  
  原因：  
  ````function sayName(name){}```` 是一个函数，它可以直接调用赋值，声明和调用不分先后，没有顺序
    ````var sayAge = function(age){}```` 是一个函数表达式，想要赋值必须先要声明，应该放到````function(age){}````后面  
  
### 11.如下代码输出什么? 写出作用域链查找过程伪代码
	  var x = 10 
	  bar() 
	  function foo() {
	    console.log(x)
	  }
	  function bar(){
	    var x = 30
	    foo()
	  }

       /*
	 1.第一步：执行上下文

	  globalContext{
	    AO:{
         x=10;
         foo:function();
         bar:function();
       },
        Scope:null
      }

      foo.[[scope]]=globalContext.AO
      bar.[[scope]]=globalContext.AO

     2.第二步：执行bar()

      barContext={
        AO:{
         x:30
         foo:function
        },
        Scope:bar.[[scope]]//globalContext.AO
      }

       bar()  //结果 x:30

     3.第三步：执行foo()

      fooContext={
        AO:{}
        Scope:foo.[[scope]]=globalContext.AO
       }
        foo()  //结果 x:10

        //最终结果： x:10
       */
### 12. 如下代码输出什么? 写出作用域链查找过程伪代码

       var x = 10;
       bar() 
       function bar(){
       var x = 30;
       function foo(){
       console.log(x) 
      }
      foo();
      }  


     /*
      第一步：执行上下文
      globalContext{
        AO:{
         x:10
         bar:function
        }
        Scope:null
      }
      bar.[[scope]]=globalContext.AO

      第二步：调用bar()

       barContext={
         AO:{
          x:30
          foo:function
         }
         Scope:bar.[[scope]]=globalContext.AO
       }
   
      bar()  //结果 x:30

      第三步：调用foo()

      fooContext={
        A0:{ }
        Scope:foo.[[scope]]=barContext.AO
      }

      foo() //结果 x:30
  
    //  bar(){
    //  foo()
    //  }
    //  最终结果 x:30
    */

### 13. 以下代码输出什么? 写出作用域链的查找过程伪代码

       var x = 10;
       bar() 
       function bar(){
       var x = 30;
       (function (){
       console.log(x)
       })()
       }


       /*
       第一步：执行上下文

       globalContext{
         AO:{
           x:10;
           bar:function
         }
         Scope:null
       }

       bar.[[scope]]=globalContext.AO

       第二步：调用bar()

       barContext={
         AO:{
           x=30
           :function
         }
         Scope:bar.[[scope]]=globalContext.AO
       }

       第三步：立即执行function ()

       functionContext={
         AO:{  }
         Scope:function.[[scope]]//barContext.AO
       }

     //  最终结果  x:30
    */
    
### 14. 以下代码输出什么？ 写出作用域链查找过程伪代码

       var a = 1;

       function fn(){
         console.log(a)
         var a = 5
         console.log(a)
         a++
         var a
         fn3()
         fn2()
         console.log(a)

         function fn2(){
           console.log(a)
           a = 20
         }
       }

       function fn3(){
         console.log(a)
         a = 200
       }

       fn()
       console.log(a)


       /*
       //第一步：执行上下文
       globalContext:{
         AO:{
           a:1
           fn:function
           fn3:function
         } 
         Scope:null
       }

        fn.[[scope]]=globalContext.A0
        fn3.[[scope]]=globalContext.AO

       //调用 fn()
       fnContext:{
         AO:{
           a:6
           fn3:function
           fn2:function
         }
        Scope:null
       }
        fn3[[scope]]=fnContext.AO
        fn2[[scope]]=fnContext.AO

       //调用 fn2()
       fn2Context:{ 
         AO:{  
        }
         Scope:fn2.[[scope]]=fnContext.AO
       }

       //调用 fn3()
       fn3Context:{
         AO:{
         } 
         Scope:fn3.[[scope]]=globalContext.AO
       }

       // 最终结果 a：undefined 5 1 6  20 200

     */
