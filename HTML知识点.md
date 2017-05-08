# HTML知识点概述
## 一、HTML、XHTML、XML概念特点及区别
**1.什么是[HTML](http://baike.baidu.com/item/HTML)**

  HTML 是用来描述网页的一种语言
  
  HTML 指的是超文本标记语言 (Hyper Text Markup Language)，是标准通用标记语言（SGML）下的一个应用
  
  HTML 不是一种编程语言，而是一种标记语言 (markup language)
  
  标记语言是一套标记标签 (markup tag)
  
  HTML 使用标记标签来描述网页

**2.[XHTML](http://baike.baidu.com/item/XHTML) 是什么？**

  XHTML 指可扩展超文本标签语言（EXtensible HyperText Markup Language）
  
  XHTML 的目标是取代 HTML
  
  XHTML 与 HTML 4.01 几乎是相同的，所有新的浏览器都支持 XHTML
  
  XHTML 是更严格更纯净的 HTML 版本
  
  XHTML 是作为一种 XML 应用被重新定义的 HTML
  
  XHTML 是 HTML 与 XML（扩展标记语言）的结合物
  
  XHTML 是一个 W3C 标准
   
  语言特性：
  
           XHTML 元素必须被正确地嵌套。
  
           XHTML 元素必须被关闭。
           
           标签名必须用小写字母。
           
           XHTML 文档必须拥有根元素。
           
           属性名称必须小写。
           
           属性值必须加引号。
           
           属性不能简写。
           
           用 Id 属性代替 name 属性。
           
           XHTML DTD 定义了强制使用的 HTML 元素。

**3.什么是 [XML](http://baike.baidu.com/item/%E5%8F%AF%E6%89%A9%E5%B1%95%E6%A0%87%E8%AE%B0%E8%AF%AD%E8%A8%80?fromtitle=xml&fromid=86251)?**

  XML 指可扩展标记语言（EXtensible Markup Language）,标准通用标记语言（SGML）的子集
    
  XML 是一种标记化语言，很类似 HTML，其中所有的东西都要被正确的标记，以产生形式良好的文档。
    
  XML 的设计宗旨是传输数据，而非显示数据。
    
  XML 标签没有被预定义。您需要自行定义标签。
    
  XML 是 W3C 的推荐标准。
    
  XML 被设计用来传输和存储数据。
    
  XML 不会做任何事情，XML 被设计用来结构化、存储以及传输信息。

  总结：
  
  三者相同之处从字面可以看出，它们都是标记语言（Markup Language）。
  
  不同点：HTML，超文本标记语言，是语法较为松散的、不严格的Web语言，属于标准通用标记语言（SGML）下的一种；

   XML，可扩展标记语言，主要用于存储数据和结构，可扩展，属于标准通用标记语言（SGML）下的一种；
              
   XHTML，可扩展超文本标记语言，基于XML，作用与HTML类似，但语法更严格
              
## 二、如何理解 HTML 语义化

 - 语义化的HTML就是正确的标签做正确的事情，能够便于开发者阅读和写出更优雅的代码的同时让网络爬虫很好地解析。

 - 语义化的意义：

   1、有利于SEO，有利于搜索引擎爬虫更好的理解我们的网页，从而获取更多的有效信息，提升网页的权重。

   2、在没有CSS的时候能够清晰的看出网页的结构，增强可读性。

   3、便于团队开发和维护，语义化的HTML可以让开发者更容易的看明白，从而提高团队的效率和协调能力。

   4、支持多终端设备的浏览器渲染。
   
## 三、怎样理解内容与样式分离的原则

 - HTML 告诉我们一块内容是什么（或其意义），而不是它长的什么样子，它的样子应该由CSS来决定。
 
 - 将样式与结构分离有很多的好处：
 
   利用CSS中的重用、组合、继承等特性减少样式的代码量，样式结构上非常清晰；
   
   页面视觉有变动只需要修改相应的CSS文件，不用或者基本上不用改动html文档中的标签结构；
   
   方便JavaScript脚本编写，比如用js控制标签的className来方便的、动态的改变元素的样式，而不是直接修改其具体样式
   
   适合产品级、模块化的开发   
   
## 四、有哪些常见的meta标签

>      <meta charset="UTF-8">：设定网页字符编码，常用的有utf-8和gb2312；
    
>      <meta http-equiv="keywords" content="keyword1,keyword2,keyword3"> ：关键词，给搜索引擎用的；
    
>      <meta name="description" content="网站开发">：页面内容描述；
  
>      <meta http-equiv="Window-target" content="_top">：强制页面在当前窗口以独立页面显示，
    
>       用来防止别人在框架里调用自己的页面；

>      <meta name="renderer" content="webkit">：优先使用chrome内核渲染页面；
    
>      <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">：优先使用最新版ie和chrome浏览器；
    
>      <meta http-equiv="Refresh" content="2；URL=http://www.net.cn/">：Refresh(刷新)自动刷新并指向新页面；
    
>      <meta http-equiv="Set-Cookie" content="cookievalue=xxx;expires=Wednesday,20-Jun-2007 22:33:00 GMT；

>       path=/">：Set-Cookie(cookie设定)，如果网页过期，那么存盘的cookie将被删除（注意：必须使用GMT的时间格式）； 
       
>   
    
>      <meta http-equiv="cache-control" content="no-cache"> ：清除缓存（再访问这个网站要重新下载！）
    
>      <meta name="format-detection" content="telphone=no, email=no"/>
    
>      <!-- 手机端 -->

>      <!-- 忽略页面中的数字识别为电话，忽略email识别 -->

>      <meta name="format-detection" content="telphone=no, email=no"/>
       
>      <!-- 设置苹果工具栏颜色 -->
       
>      <meta name="apple-mobile-web-app-status-bar-style" content="black"/>  
    
>      <!-- 不让百度转码 -->
       
>      <meta http-equiv="Cache-Control" content="no-siteapp" /> 
  
>      <!-- 不缓存 -->
   
>      <meta http-equiv="cache-control" content="no-cache" /> 
    
 >     <!-- 初始化设备 -->
       
>      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, minimal-ui" /> 
      
>      <!-- 网站开启对iphone私有 web app 程序的支持 -->
    
>      <meta content="yes" name="apple-mobile-web-app-capable" />

>      <!-- 改变顶部状态条的颜色 iphone私有的属性-->
       
>      <meta content="black" name="apple-mobile-web-app-status-bar-style" /> 

## 五、文档声明的作用?严格模式和混杂模式指什么?<!doctype html> 的作用?

   -  ````<!DOCTYPE>````声明叫做文件类型定义（DTD），声明的作用为了告诉浏览器该文件的类型。让浏览器解析器知道应该用哪个规范来解析文档。
 
      ```` <!DOCTYPE>````声明必须在 HTML 文档的第一行，这并不是一个 HTML 标签。
    
   -  严格模式：又称标准模式，是指浏览器按照 W3C 标准解析代码。
   
      混杂模式：又称怪异模式或兼容模式，是指浏览器用自己的方式解析代码。
     
   **如何区分：浏览器解析时到底使用严格模式还是混杂模式，与网页中的 DTD 直接相关。**
     
  - <!doctype html> 的作用：
    
    document.compatMode：
      
    BackCompat：怪异模式，浏览器使用自己的怪异模式解析渲染页面。
    
    CSS1Compat：标准模式，浏览器使用W3C的标准解析渲染页面。
      
    这个属性会被浏览器识别并使用，但是如果你的页面没有DOCTYPE的声明，那么compatMode默认就是BackCompat，浏览器按照自己的方式解析渲染页面，那么，在不同的浏览器就会显示不同的样式。
    
    如果你的页面添加了````<!DOCTYPE html>````，那么就等同于开启了标准模式，那么浏览器就得老老实实的按照W3C的标准解析渲染页面，这样一来，你的页面在所有的浏览器里显示的就都是一个样子了。

## 六、浏览器乱码的原因是什么？如何解决

   从开发者角度看，我们写入文件到展示文件的简单描述这个流程是：
   1.我们使用编辑器编写 HTML 文件
   2.保存编写的HTML文件
   3.使用浏览器打开HTML文件
   4.HTML文件在浏览器展示
   
   乱码产生的根源就在与第2步骤和第4步。
   在第2步保持文件时会把我们写入的文字使用编辑器默认的编码方式进行保存。如果使用的是vscode编辑器，默认的编码方式是utf-8。
   在第4步浏览器打开网页时，它并不知道你这个文件是使用什么编码方式，于是使用了默认解码方式。导致编码和解码不匹配，产生乱码。
    
- 解决方式：
  文件保存的时候你自己要清楚是用哪种编码方式保存的。如果你的文件是保存为utf-8格式，那么一定要在html 的````<head>````里添加````<meta charset="utf-8">````，
  这句话的意思是告诉浏览器在打开这个页面的时候不要去猜了，直接用utf-8去解码。 同理，如果你的文件保存为gbk格式，一定在文件里添加````<meta charset="gbk">````。

## 七、常见的浏览器有哪些，什么内核

  1.使用Trident的是internet explorer，国产的绝大部分浏览器。Trident是就是ie内核  
  
  2.使用Gecko的是Mozilla Firefox，使用 Gecko 内核的浏览器也有不少，如 Netscape MozillaSuite/SeaMonkey 等  
  
  3.使用Presto的是opera，这是目前公认网页浏览速度最快的浏览器内核  
  
  4.使用WebKit的有苹果的safari，谷歌的chrome，还有国产的大部分双核浏览器其中一核就是WebKit
  
## 八、常见的标签及应用场景

 - 内容详细标签：

 ````<h1>~<h6>````标题标签

 ````<pre>````格式化文本
   
 ````<u>````下划线（underline)
   
 ````<i>````斜体字（italics）
    
 ````<cite>````引用，通常为斜体

 ````<em>````强调文本通常为斜体

 ````<strong>````加重文本，通常为黑体

 ````<font>````设置字体、字体大小、颜色等

 ````<big><small>````字体变大和字体变小

 ````<del>````加删除线

 ````<code>````程序码

 ````<kbd>````定义键盘文本

 ````<blockquote>````块引用，通常是缩进

 ````<address>````地址标签

 ````<sup>````上标 ````<sub>````下标

 ````<br>````换行

 ````<hr>````水平线

- 列表标签：

 ````<dl>、<dt>````和````<dd>````是定义列表的标签

 ````<ul>````和````<li>````无序列表

 ````<ol>和<li>````有序列表

- 表格标签：

 ````<table>、<tbody>、<tr>、<th>````和````<td>````
  
![HTML标签一览](/c/Users/MRzha/.ssh/blog/img)  
    
      
