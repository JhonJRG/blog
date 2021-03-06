## 如题，本文介绍一下css编码规范

### 一.命名技巧（遵循原则）

1.语义化

2.语义化标签优先

3.基于功能命名、基于内容命名、基于表现命名

4.简略、明了、无后患

### 二.命名范例

**1.所有命名都使用英文小写**

推荐：`<div class="main"></div> `

不推荐： `<div class="Main"></div> `

**2.命名用引号包裹**

推荐：`<div id="header"></div> `

不推荐： `<div id=header></div> `

**3.用中横线连接**

推荐：`<div class="mod-modal"></div> `

不推荐： `<div class="modModal"></div> `

**4.命名体现功能，不涉及表现样式(颜色、字体、边框、背景等)**

推荐：`<div class="text-lesser"></div>`

不推荐： `<div class="light-grey"></div>`

### 三.常见命名

- 常见命名1

> .wrap或.wrapper -- 用于外侧包裹

> .container或 .ct -- 包裹容器

> .header -- 用于头部

> .body -- 页面 body

> .footer -- 页面尾部

> aside、sidebar -- 用于侧边栏

> .content -- 和header footer 对应，用于主要内容

> .navigation -- 导航元素

> .pagination -- 分页

- 常见命名2

> .tabs > .tab -- tab 切换

> .breadcrumbs -- 导航列表、面包屑

> .dropdown -- 下拉菜单

> .article -- 文章

> .main -- 用于主体

> .thumbnail -- 头像，小图像

> .media -- 媒体资源

> .panel -- 面板

> .tooltip -- 鼠标放置上去的提示

> .popup -- 鼠标点击弹出的提示


- 常见命名3

> .button、.btn -- 按钮

> .ad -- 广告

> .subnav -- 二级导航

> .menu -- 菜单

> .tag -- 标签

> .message或者.notice -- 提示消息

> .summary -- 摘要

> .logo -- logo

> .search -- 搜索框

> .login -- 登录


- 常见命名4

> .register -- 注册

> .username -- 用户名

> .password -- 密码

> .banner -- 广告条

> .copyright -- 版权

> .modal或者 .dialog -- 弹窗


- 常见命名5

> var 名字 = {

> 状态: [
  
> 'inverse',

> 'toggled',

> 'switched',

> 'original',

> 'initial',

> 'identified',

> 'disabled',

> 'loading',

> 'pending',

> 'syncing',

> 'default'

>  ],

>  修饰: [
  
> 'dark',

> 'light',

> 'shaded',

> 'flat',

> 'ghost',

> 'maroon',

> 'pale',

> 'intense',

> 'twisted',

> 'narrow',

> 'wide',

> 'smooth',

> 'separate',

> 'clean',

> 'sharp',

> 'aligned'

>  ],

> 元素: [

> 'pagination',

> 'modal',

> 'popup',

> 'article',

> 'story',

> 'flash',

> 'status',

> 'state',

> 'media',

> 'block',

> 'card',

> 'teaser',

> 'badge',

> 'label',

> 'sheet',

> 'poster',

> 'notice',

> 'record',

> 'entry',

> 'item',

> 'figure',

> 'square',

> 'module',

> 'bar',

> 'button',

> 'action',

> 'knob'

> ],

> 布局: [

> 'navigation',

> 'wrapper',

> 'inner',

> 'header',

> 'footer',

> 'aside',

> 'section',

> 'divider',

> 'content',

> 'container',

> 'panel',

> 'pane',

> 'construct',

> 'composition',

> 'spacing',

> 'frame'

> ]

> }



### 四.css书写规范

tab 用两个空格表示

css的 :后加个空格， {前加个空格

每条声明后都加上分号

换行，而不是放到一行

颜色用小写，用缩写, #fff

小数不用写前缀, 0.5s -> .5s；0不用加单位

尽量缩写， margin: 5px 10px 5px 10px -> margin: 5px 10px
