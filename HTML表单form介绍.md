# HTML表单form介绍

  这里介绍一下form表单的相关特性

## 一.form表单有什么作用？有哪些常用的input 标签，分别有什么作用？

- 表单在网页中主要负责数据采集功能。
 
- 一个表单有三个基本组成部分：
 
  **表单标签**：这里面包含了处理表单数据所用CGI程序的URL以及数据提交到服务器的方法。
   
  **表单域**：包含了文本框、密码框、隐藏域、多行文本框、复选框、单选框、下拉选择框和文件上传框等。
   
  **表单按钮**：包括提交按钮、复位按钮和一般按钮；用于将数据传送到服务器上的CGI脚本或者取消输入，还可以用表单按钮来控制其他定义了处理脚本的处理工作

- 常用的input标签有哪些？
 
  1.**文本框**是一种让访问者自己输入内容的表单对象，通常被用来填写单个字或者简短的回答，如姓名、地址等。
 
  代码格式：````<input type="text" name="..." size="..." maxlength="..." value="...">````
 
  属性解释：
 
  type="text"定义单行文本输入框；
    
  name属性定义文本框的名称，要保证数据的准确采集，必须定义一个独一无二的名称；
    
  size属性定义文本框的宽度，单位是单个字符宽度；
    
  maxlength属性定义最多输入的字符数。
    
  value属性定义文本框的初始值
    
  例1代码：````<input type="text" name="example1" size="20" maxlength="15" />````
    
  2.**多行文本框**也是一种让访问者自己输入内容的表单对象，只不过能让访问者填写较长的内容。
 
  代码格式：````<TEXTAREA name="..." cols="..." rows="..." wrap="VIRTUAL"></TEXTAREA>````

  属性解释：

  name属性定义多行文本框的名称，要保证数据的准确采集，必须定义一个独一无二的名称；

  cols属性定义多行文本框的宽度，单位是单个字符宽度；rows属性定义多行文本框的高度，单位是单个字符宽度；

  wrap属性定义输入内容大于文本域时显示的方式，可选值如下：
 
  默认值是文本自动换行；当输入内容超过文本域的右边界时会自动转到下一行，而数据在被提交处理时自动换行的地方不会有换行符出现； Off，用来避免文本换行，当输入的内容超过文本域右边界时，文本将向左滚动，必须用Return才能将插入点移到下一行； Virtual，允许文本自动换行。 Physical，让文本换行，当数据被提交处理时换行符也将被一起提交处理。
 
  例2代码：````<TEXTAREA name="example2" cols="20" rows="2" wrap="PHYSICAL"></TEXTAREA>````
  
  3.**密码框**是一种特殊的文本域，用于输入密码。当访问者输入文字时，文字会被星号或其它符号代替，而输入的文字会被隐藏。
 
  代码格式：````<input type="password" name="..." size="..." maxlength="...">````
 
  属性解释：
 
  ````type="password"````定义密码框；name属性定义密码框的名称，要保证数据的准确采集，必须定义一个独一无二的名称；
 
  size属性定义密码框的宽度，单位是单个字符宽度；maxlength属性定义最多输入的字符数。
 
  例3代码：````<input type="password" name="example3" size="20" maxlength="15">````

  4.**隐藏域**是用来收集或发送信息的不可见元素，对于网页的访问者来说，隐藏域是看不见的。当表单被提交时，隐藏域就会将信息用你设置时定义的名称和值发送
 到服务器上。
 
  代码格式： ````<input type="hidden" name="..." value="...">````
  
  属性解释：

  type="hidden"定义隐藏域；name属性定义隐藏域的名称，要保证数据的准确采集，必须定义一个独一无二的名称；
  
  value属性定义隐藏域的值
  
  例4代码：：````<input type="hidden" name="ExPws" value="dd">````
  
  5.**复选框**允许在待选项中选中一项以上的选项。每个复选框都是一个独立的元素，都必须有一个唯一的名称。
 
  代码格式：````<INPUT type="checkbox" name="..." value="...">````

  属性解释：
  
  ````type="checkbox"````定义复选框；
  
  name属性定义复选框的名称，要保证数据的准确采集，必须定义一个独一无二的名称；value属性定义复选框的值
  
  例5代码：
  
  ````<input type="checkbox" name="yesky" value="09">````

  ````<input type="checkbox" name="Chinabyte" value="08">````

  6.**单选框**:当需要访问者在待选项中选择唯一的答案时，就需要用到单选框了。

  代码格式：````<input type="radio" name="..." value="...">````
  
  属性解释：
  
  ````type="radio"````定义单选框；
  
  name属性定义单选框的名称，要保证数据的准确采集，单选框都是以组为单位使用的，在同一组中的单选项都必须用同一个名称；
  
  value属性定义单选框的值，在同一组中，它们的域值必须是不同的。
  
  例6代码：
  
  ````<input type="radio" name="myFavor" value="1">````
  
  ````<input type="radio" name="myFavor" value="2">````

  7.**文件上传框**

  定义：有时候，需要用户上传自己的文件，文件上传框看上去和其它文本域差不多，只是它还包含了一个浏览按钮。访问者可以通过输入需要上传的文件的路径或者点击浏览按钮选择需要上传的文件。
   
  注意：在使用文件域以前，请先确定你的服务器是否允许匿名上传文件。表单标签中必须设置ENCTYPE="multipart/form-data"来确保文件被正确编码；另外，表单的传送方式必须设置成POST。
  
  代码格式：````<input type="file" name="..." size="15" maxlength="100">````
  
  属性解释：
  
  type="file"定义文件上传框；
  
  name属性定义文件上传框的名称，要保证数据的准确采集，必须定义一个独一无二的名称；
  
  size属性定义文件上传框的宽度，单位是单个字符宽度；maxlength属性定义最多输入的字符数。
  
  例6代码：
 
  ````<input type="file" name="myfile" size="15" maxlength="100">````

  8.**下拉选择框**允许你在一个有限的空间设置多种选项。

  代码格式：
	
  ````<select name="..." size="..." multiple>````
  
  ````<option value="..." selected>...</option>````
 
  ````...````     
 
  ````</select>````
 
  属性解释：
	
  size属性定义下拉选择框的行数；name属性定义下拉选择框的名称；
	
  multiple属性表示可以多选，如果不设置本属性，那么只能单选；
	
  value属性定义选择项的值；selected属性表示默认已经选择本选项。         
	
  例8代码：
	
  ````<select name="mySel" size="1">````
	
  ````<option value="1" selected></option>````
	
  ````<option value="d2"></option>````
	
  ````</select>````
	
  例8：按Ctrl可以多选
	
  例8代码2：
	
   ````<select name="mySelt" size="3" multiple>````
	
   ````<option value="1" selected></option>````
	
   ````<option value="d2"></option>````
	
   ````<option value="3"></option>````
	
   ````</select>````

## 二.post 和 get 方式的区别？	

   **表单提交中get和post方式的区别有5点** 
    
   1.本质上讲get是从服务器上获取数据，post是向服务器传送数据。 
    
   2.get是把参数数据队列加到提交表单的action属性所指的URL中，如：````http://www.xxx.com?sessonid=db23434&name=hongten&age=20````。在URl中，值和表单各个字段一一对应，并且这些在URL中对用户来说是可见的，即用户是可以看到的。如：name=hongten。post是通过HTTP post机制，将表单内各个字段与其内容放置在HTML HEADER内一起传送到action属性所指的URL地址，对于用户来说，这是透明的。
    
   3.对于get方式，服务器端用Request.QueryString获取变量的值，对于post方式，服务器端用Request.Form获取提交的数据。 
    
   4.get传送的数据量较小，由于URL的长度限制，使用get方式传送的数据量一般限制在1KB以下。post传送的数据量较大，一般被默认为不受限制，起限制作用的是服务器的处理程序的处理能力。 
    
   5.get安全性非常低，post安全性较高。但是post方式执行效率要比get方式差一些。

## 三. 在input里，name 有什么作用？

   1.作为可与服务器交互数据的HTML元素的服务器端的标示，比如input、select、textarea、和button等。我们可以在服务器端根据其Name通过Request.Params取得元素提交的值。
    
   2.HTML元素Input type='radio'分组，我们知道radio button控件在同一个分组类，check操作是mutex的，同一时间只能选中一个radio，这个分组就是根据相同的Name属性来实现的。

   3.建立页面中的锚点，我们知道````<a href="URL">link</a>````是获得一个页面超级链接，如果不用href属性，而改用Name，如：````<a name="PageBottom"></a>````，我们就获得了一个页面锚点。

   4.作为对象的Identity，如Applet、Object、Embed等元素。比如在Applet对象实例中，我们将使用其Name来引用该对象。

   5.在IMG元素和MAP元素之间关联的时候，如果要定义IMG的热点区域，需要使用其属性usemap，使usemap="#name"(被关联的MAP元素的Name)。

   6.某些特定元素的属性，如attribute，meta和param。例如为Object定义参数````<PARAM NAME = "appletParameter" VALUE = "value">````或Meta中````<META NAME = "Author" CONTENT = "Dave Raggett">````。
    
## 四.radio 如何 分组?

   **name的属性值写成一样即为分组**
    
   ````<input type="radio" name="a" value="张三" id="a1" />````
      
   ````<input type="radio" name="a" value="曾四" id="a2"/>````
    
## 五.placeholder 属性有什么作用?

   定义和用法：

   placeholder 属性提供可描述输入字段预期值的提示信息（hint）。该提示会在输入字段为空时显示，并会在字段获得焦点时消失。

   注释：placeholder 属性适用于以下的 ````<input>```` 类型：text, search, url, telephone, email 以及 password。

## 六.type="hidden"隐藏域有什么作用? 举例说明

 - hidden隐藏域也是表单元素之一，它的语法和其他表单元素一样：

   ````<input type="hidden" name="field＿name" value="value"> ````

 - 那么hidden隐藏域到底有什么作用呢？有6点作用：

   1.隐藏域在页面中对于用户是不可见的，在表单中插入隐藏域的目的在于收集或发送信息，以利于被处理表单的程序所使用。浏览者单击发送按钮发送表单的时候，隐藏域的信息也被一起发送到服务器。 
    
   2.有些时候我们要给用户一信息，让他在提交表单时提交上来以确定用户身份，如sessionkey，等等．当然这些东西也能用cookie实现，但使用隐藏域就简单的多了．而且不会有浏览器不支持，用户禁用cookie的烦恼。 
    
   3.有些时候一个form里有多个提交按钮，怎样使程序能够分清楚到底用户是按那一个按钮提交上来的呢？我们就可以写一个隐藏域，然后在每一个按钮处加上onclick="document.form.command.value="xx""然后我们接到数据后先检查command的值就会知道用户是按的那个按钮提交上来的。 
    
   4.有时候一个网页中有多个form，我们知道多个form是不能同时提交的，但有时这些form确实相互作用，我们就可以在form中添加隐藏域来使它们联系起来。 
    
   5.javascript不支持全局变量，但有时我们必须用全局变量，我们就可以把值先存在隐藏域里，它的值就不会丢失了。 
    
   6.还有个例子，比如按一个按钮弹出四个小窗口，当点击其中的一个小窗口时其他三个自动关闭．可是IE不支持小窗口相互调用，所以只有在父窗口写个隐藏域，当小窗口看到那个隐藏域的值是close时就自己关掉。

## 七.HTML 表单的用法

　　1.表单的作用

　　HTML 表单用于接收不同类型的用户输入，用户提交表单时向服务器传输数据，从而实现用户与Web服务器的交互。HTML中表单可以用来搜集用户各种类型的输入信息。表单实际上是包含表单元素的区域，在这个区域中的各种元素的输入信息最终都将通过表单提交到程序脚本中。
  
   表单的区域是使用````<form>````标签定义表单的范围，在````<form></form>````中的元素的值会被通过这个表单提交到对应的地址中。
  
   例如常见的有用户登录、注册、发布文章等等，都是通过表单提交到动态程序进行处理的。
   
   表单的格式如下：

 >     <form name=""  method="" action="" enctype="">

 >        表单项，文字，图片等（````<input/>````各种type属性、文本域、提交按钮等）

 >     </form>

描述：name表示表单的名称；action用来指定接收表彰数据的服务器页面（JSP，PHP)等等；methos是指定表彰的传输方式，post或get;enctype指定传递数据的编码方式。

　　2.表单的工作机制
  
   ![image](http://pic002.cnblogs.com/images/2012/287602/2012080516253421.jpg)
  
   3.表单的常用信息

   - 输入信息
   一般表单内多以使用````<input>````标签收集用户的输入信息，其输入类型是由type决定的。
   多数情况下被用到的表单标签是输入标签````<input>````。输入类型是由类型属性（type）定义的。常见的输入类型有文本域、单选按钮、复选框、下拉菜单等等。
   
   - 文本域
   文本域可以为用户提供输入文字的功能，浏览器会将文本域解译为一个矩形框，用户将光标移动到该框体，并点击即可将光标移动到框体内。用户可以在表单中键入字母、数字等内容。文本域的定义方法是在````<input>````标签中为type属性设置text值
   
   - 单选按钮
   单选按钮多数情况下出现在用户注册时录入资料的选项中，该类型多用户只允许用户选择一项结果时使用。单选按钮的定义方法是在````<input>````标签中将type属性的值设置为radio

   - 复选框
   复选框可让用户勾选某些对应的一个或多个选项。常见的一般是在用户登录时，为用户提供记住登录帐号等功能。也可以在用户调查的页面中，搜集用户的多项意见。
   复选框定义方法是在````<input>````标签中将type属性的值设置为checkbox

   - 下拉菜单在信息选择上与单选类似，但是下拉菜单可以容纳更多的信息。并且下拉菜单在选择菜单值后可以执行额外的脚本。
   下拉菜单以````<select>````为起始标签，在````<select>````标签中的每一个````<option>````标签都是下拉菜单中的一个值。

   - 提交按钮
   提交按钮是每个表单的必要组成部分。用户将对应的信息录入完毕后，需要通过点击提交按钮触发动作，将表单的值提交到下一个页面。当````<form>````标签中的action属性设置了对应的提交地址时，提交按钮会将该表单中获得的所有数据提交到这个地址的页面中。
   提交按钮的定义方法是在````<input>````标签中将type的值设置为submit。
