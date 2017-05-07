从URL输入 到 页面展现
====================
如题，本文将介绍一下用户在浏览器里输入网址到看到一个网站页面的过程。

1.浏览器输入URL
--------------
用户访问某一个网站时首先需要的就是在浏览器输入对应的网址，这里涉及到一些概念：

**（1）[URL](http://baike.baidu.com/item/url)（Uniform / Universal Resource Locator，常缩写为URL）**
定义：统一资源定位符，俗称为网页地址（网址），如同在网络上的门牌，用于定义互联网上的资源，这个资源可能是一个图片，可能是一个文件，通过URL才可以找到。

**（2）对应的协议：http https ftp file**

   [http](http://baike.baidu.com/link?url=mTmnU5VZTmrr0rC5av2M0ISq8CToV2oKTCFNwUNwRy3WGx0bpoZOU16iW6eQq7WYgjPRtXeqmOGjp-GrNEE8g_,"饥人谷_海瀚的博客")://  超文本传输协议资源，获取网络资源，明文传输。

   [https](http://baike.baidu.com/item/https)://  安全加密之后的超文本传输协议。

   [file](http://baike.baidu.com/item/File)://  定位本地资源，本地电脑或网上分享的文件。

   [ftp](http://baike.baidu.com/item/ftp/13839)://  文件传输协议（File Transfer Protocol，缩写：FTP）是用于在网络上进行文件传输的一套标准协议，使用客户/服务器模式。

    另外，有时我们打开一个网站引入一个类似src="//code/"没有前面的［http:]的路径文件，这个表示当前文件URL的协议和当前页面保持一致。
 
2.域名解析
----------

     概念解释：对于http://jirengu.com，浏览器实际是不知道jirengu.com到底是什么东西，需要查找jirengu.com网站所在的服务器IP地址，才能找到目标。
  
**（1）[域名](http://baike.baidu.com/item/%E5%9F%9F%E5%90%8D) 是什么？**

       对于http://jirengu.com:8080/blog，jirengu.com就是域名。http，是协议；8080，是服务器上的网络端口号；blog，是页面路径。
  
**（2）为什么要发明域名，不用IP？**

       域名语义化，好记。    

**（3）[IP地址](http://baike.baidu.com/item/IP%E5%9C%B0%E5%9D%80) 是什么？**

- 每个处于互联网的设备都有IP地址，没有就找不到，形如 192.168.0.1

- 局域网IP和公网IP是有差别的
       
  局域网IP 举例：办公室中的同一路由器的WiFi，所有连到这个WiFi的机器都处于同一局域网，IP就是局域网的IP，同一局域网内可以通过这个IP地址访问到这个局域网内的其他机器。但别人是无法通过这个IP找到你的，因为这个IP是假的IP，只有在小圈子里可以用。

  实践：例如开发中需要手机界面测试，电脑和手机连到同一WiFi下，电脑有一个IP地址，手机浏览器可以通过这个IP地址访问这个服务器。

  公网IP是需要申请的，127.0.0.1代表本机IP。
  
**（4）[域名解析](http://baike.baidu.com/item/%E5%9F%9F%E5%90%8D%E8%A7%A3%E6%9E%90)流程**

     1 浏览器缓存- 浏览器会缓存DNS记录一段时间

     2 系统缓存- 从Hosts文件查找是否有该域名和对应IP

      用处：当开发一个网站时，文件资源在本地，线上的域名测试，当开启服务器测试不想找远程服务器的资源，希望找到本地资源时，那就可以把网址对应到127.0.0.1，当打开html文件时，所有的文件的请求资源都是通过网址找到的本地IP地址，这个IP就是本机地址，相当于定位到本机服务器

     3 路由器缓存- 一般路由器也会缓存域名信息

     4 ISP DNS缓存- 比如到电信DNS上查找缓存

     5 如果都没有找到，则向根域名（链接）服务器查找域名对应IP，根域名服务器把请求转发到下一级，直到找到IP，IP会寻址

 
 问题：

- 电脑上不了网，为什么修改到DNS为8.8.8.8或者114.114.114.114？

    8.8.8.8是谷歌提供的一个服务器，例如baidu.com对应的域名找不到时，把电脑的DNS服务器改为谷歌的服务器，那时就不会遵循上面的几部，会直接通过谷歌的服务器来逐级找IP地址。

- 什么是DNS劫持？

    当黑客攻击到某一个节点，比如根域名服务器，把某个网站域名指向的IP改成一个恶意网站IP，此时如果你去访问该网站就会得到一个假网站。
         
3.服务器处理
-----------

- **[服务器](http://baike.baidu.com/item/%E6%9C%8D%E5%8A%A1%E5%99%A8)定义**：是一台安装系统的机器，常见的系统如Linux（无图形界面）、windows server 2012，系统里安装的处理请求的应用叫Web server。服务器系统和普通电脑系统是有差别的。


- **[Web服务器](http://baike.baidu.com/item/WEB%E6%9C%8D%E5%8A%A1%E5%99%A8/8390210)** ：常见的Web服务器有Apache、Nginx，IIS，Lighttpd

  Web服务器接受用户的Request交给网站代码，或者接受请求反向代理到其他Web服务器

  Web服务器实际是个管理的入口，[服务器配置](http://baike.baidu.com/item/%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%85%8D%E7%BD%AE)文件，接收不同请求时返回不同的页面

- **网站处理流程（如下图）**：

    [MVC](http://baike.baidu.com/item/MVC%E6%A1%86%E6%9E%B6?fromtitle=mvc&fromid=85990)： 模型（model）——>视图（view）——>控制器（controller）
    
    ![image](http://upload-images.jianshu.io/upload_images/5909560-9fdd550d49acf2d6.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
      
- **流程描述（参上图）**：用户的请求发送到路由，路由进行匹配，然后交给对应的控制器，控制器需要管理，比如需要查找全部的用户，那就会找到模型处理，模型再来操作数据库，控制器调用模型提供的接口来得到对应数据。

    视图则为html的模板，之后把数据填到模板里生成html文件，再展现到浏览器界面。

    前端就是视图模块，以前较为简单，现在复杂程度堪比后端，包含html、css、js以及各种框架等。

- **浏览器处理**：

    HTML字符串被浏览器接收后被一句句读取解析

    例如解析到<link  href="css.css">标签时，href对应的是css的地址，它会重新发请求得到这个css地址；例如解析到script标签后发送请求获取js，并执行代码；例如解析到img标签后发送请求获取图片资源

    浏览器得到html时，会再次请求一遍，所以审查元素时会看到很多请求

    获取到所有资源之后，浏览器会根据HTML和CSS得到渲染树，绘制到屏幕，JS会被执行
