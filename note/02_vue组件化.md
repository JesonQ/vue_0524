## 1. 模块与组件, 模块化与组件化
	模块: 提供特定功能的js文件
	模块化: 项目中的js功能代码是多模块编写的, 那这个项目就是一个模块化的项目, 这种开发方式就是模块化的开发方式 
	组件: 实现一个局部界面功能的所有代码的集合(html/js/css/image)
	组件化: 项目中的功能界面是多组件组合编写, 那这个项目就是一个组件化的项目, 这种开发方式就是组件化的开发方式 

## 2. 定义使用Vue组件

### 1)    原始方式
	定义并注册组件
		方法一: 
			Vue.component('组件标签名', 配置对象): 注册组件(内部会自动生成组件函数)
			1) 生成一个组件的构造函数VueComponent (调用Vue.extend()产生的)
			2) 以组件标签名为标识名称, 保存这个对应的组件构造函数  
			    ==> 用于解析组件标签时查找到对应的组件函数来创建其实例
			3) 返回组件函数  ==> 一般不用
		方式二
			Vue.extend(配置对象): 生成组件构造函数返回
			Vue.component('组件标签名', 组件构造函数)
	注册组件:
		局部
			components: { 
				'组件标签名': 配置对象/组件构造函数
			}
		全局: Vue.component('组件标签名', 配置对象/组件构造函数)
	
	组件标签
		一个组件标签就是一个组件函数的实例对象
		同名的多个组件标签就是一个组件函数的多个实例对象
	
	data配置 必须是一个函数
		一个组件的多个标签实例的data对象应该是独立的, 不能是共享的
		简单表达: 
			如果data配置对象: 直接通过.data得到对象(同一个)  ==> vue直接给你报错
			如果data配置函数: 通过调用data函数返回的data对象(不同的)  ==> 只能写函数的形式
	
	组件与Vue的关系:
		组件是Vue的"子类型"
		组件对象的原型对象的原型对象是Vue的原型对象 ==> 组件对象能访问Vue原型对象上的方法/属性
		// 生成组件构造函数的方法
		Vue.extend = function (extendOptions) {
		    var Super = this;
		    var Sub = function VueComponent () {
		    };
		    Sub.prototype = Object.create(Super.prototype);
			return Sub
		};

### 2)  单文件组件
	一个vue组件就是一个.vue的文件
	需要下载一个vscode插件: Vetur
	单文件组件的特点:
		必须编译处理后才能运行  ==> 需要有一个webpack的打包环境 ==> 自定义的/脚手架生成的
		相对于原始方式的好处:
			提示补全 / 高亮
			可以写css样式
			可以进行编译预处理提高运行效率

## 3. package.json的整体结构:
	{
		// 应用的标识
		// 名称
		"name": "vue-component",
		// 版本号
		"version": "1.0.0",
		
		// 打包/运行项目的脚本命令
		"scripts": {
		"build": "webpack"
		},
		
		// 运行时依赖包声明
		"dependencies": {
		
		},
		// 开发时(编译打包)依赖包声明
		"devDependencies": {
		
		}
	}
## 4. 脚手架
	    之前自己去搭建环境 配置webpack 只是一些基本的功能
	    4/3
	    2
	    区别:
	
	1)	创建脚手架4/3的vue项目, 并运行
		npm install -g @vue/cli
		vue create vue-demo
		npm run serve
	
	2)	创建脚手架2的vue项目
		npm install -g @vue/cli-init
		vue init webpack vue-demo
		npm run dev


## 5. eslint的配置的错误级别
	1.
	/* eslint-disable no-unused-vars */
	// 局部禁用某个错误提示
	
	2.
	//package.json当中找到eslintConfig项，全局配置禁用某些错误提示
	"rules": {
		"no-unused-vars":"off"
		}
	
	3.
	//开发阶段直接关闭eslint的提示功能
	手动创建vue.config.js
	module.exports = {
		//  写自己想要配置的东西去覆盖系统自带的
		// 关闭ESLint的规则
	 		lintOnSave: false
		}

## 5. 区分使用生产环境与开发环境
	使用生产环境:
	    npm run build   ==> webpack
	    1). 在内存中进行编译打包, 生成内存中的打包文件
	    2). 保存到本地(在本地生成打包文件)   ===> 此时还不能通过浏览器来访问, 需要启动服务器运行
	使用开发环境
	    npm run dev   ==> webpack-dev-server
	    1). 在内存中进行编译打包, 生成内存中的打包文件
	    2). 启动服务器, 运行内存中的打包文件(不生成本地打包文件)   ===> 可以通过浏览器虚拟路径访问
## 6. vue单文件组件的结构

	<template>
	  <div>xxx</div>
	</template>
	<script>
	  export default {
	    props: []/{}
	    data(){},
	    computed: {}
	    methods: {},
	    watch: {}
	    filters: {}
	    directives: {}
	    components: {}
	  }
	</script>
	<style scoped>  // 作用域样式, 限制css只能当前组件有效
	</style>
## 7. vue.config.js一些常用设置
	在vue.config.js中加入如下配置
	
	1. 引入path
	   const path = require('path');
	   function resolve (dir) {
	     return path.join(__dirname, dir)
	   }
	2. 配置属性
	   configureWebpack:{
	        resolve: { //引入模块的解析
			   extensions: ['.js', '.vue', '.json'], // 可以省略的后缀名
	            alias: {  // 配置别名,减少文件夹层数多带来的烦扰
				   '@': resolve('src'),
	                'components': resolve('src/components'),
	                'pages': resolve('src/pages'),
	                'store': resolve('src/store')
	            }
	        }
	    }
	
	3.关于自动打开浏览器端口的配置
	   devServer:{
	    port:3001,
	    open:true,
	   },

## 8. 组件化编码的基本流程(任务清单案例)
	1). 拆分组件: 拆分界面, 抽取/定义组件
	2). 实现静态组件界面
	3). 实现动态组件
		3.1). 初始化数据动态显示
			初始化数据设计
			将数据传递给相应组件显示
		3.2). 交互
			Header: 添加
			Item: 
				移入移出
				删除
				选中
			Footer:
				是否选中全选 / 完成数量/总数量 / 是否显示删除按钮
				全选/全不选
				删除所有已完成

## 9. 初始化数据设计
	类型? [{id: 1, title: 'A', complete: false/true}]
	名称? todos / todoList / todoArray
	保存在哪个组件?
		判断方法: 看是哪个组件需要(就这个组件), 还是哪些组件需要(共同的父组件)?
		===> 因为Header/List/Item/Footer都需要它, 保存到App组件

## 10. 通过标签属性向子组件传递数据
	父组件中: 通过标签属性向子组件传递数据
		<Item :todo="todo" :index="index">
	子组件中: 接收读取显示数据
		接收: props声明 ==> 声明接收的所有属性都会成为组件对象的属性
			props: ['todo', 'index']
			props: {todo: Object, index: Number} 
			props: {todo: {type: Object, required: true, default: {}, validator: value => true/false}} 
		模板中读取显示

## 11. 子组件更新父组件的数据
	Header组件中要去更新App组件中的todos(添加一个todo)
	数据在哪个组件, 更新数据的行为函数就应该定义在哪个组件
	子组件想更新父组件的数据
		父组件:
			定义更新的函数
			将函数以props传递给子组件
		子组件:
			声明接收props
			在一定条件下, 调用此函数来更新父组件的数据
	一个组件向孙子组件传递属性必须要逐级传递
	子组件不要直接更新父组传递给它的数据, 而是要调用其传递过来的函数去更新


## 12. 组件化编码的基本流程
	1). 拆分组件: 拆分界面, 抽取/定义组件
		App
		CommentAdd
		CommentList
			CommentItem
	2). 实现静态组件界面
	3). 实现动态组件
		3.1). 初始化数据动态显示
			初始化数据设计
				App组件中的data数据: commentArr = [{id: 1, username:'tom', content: 'xxx'}]
			将数据传递给相应组件显示
				App ==commentArr==> CommentList(遍历commentArr) ==comment==> CommentItem
		3.2). 交互
			添加:
			删除
	可以给组件对象添加非响应式数据, 用于组件的方法中可以反复访问

## 13. 组件标签名与标签属性名大小写的问题 
	组件标签名与注册的名称的对应关系?    完全一样 或者 大写转小写, 中间用-连接
		注册组件名		标签名
		CommentAdd		<CommentAdd>|<comment-add>|<commentAdd>      <Comment-add>|<Comment-Add>(可以, 但不用)
		comment-add     <comment-add>
		Commentadd		<Commentadd>|<commentadd>
	
		commentAdd		<commentAdd>|<comment-add>
		commentadd		<commentadd>
		注意: 小写名称不要与html的标签名重名
	声明的属性名与标签属性名的对应关系?  完全一样 或者 大写转小写, 中间用-连接
		声明名称		标签属性名
		commentArr	commentArr|comment-arr
		commentarr  commentarr
	
		CommentArr	CommentArr|comment-arr
		Commentarr	Commentarr|commentarr

## 14.实现关闭浏览器再打开访问看到的还是最后的数据界面?
	存储数据
		哪个数据?  todos
		保存在哪?   localStorage/sessionStorage ==> 选择localStorage
			用来在浏览器端保存文本数据的对象, 如果要保存对象/数组, 必须保存其json格式数据
			刷新界面, 保存的数据都还在
			语法: setItem(key, value)/getItem(key)/removeItem(key)/clear()
			区别: 
				sessionStorage保存的数据在关闭浏览器后自动清除(保存在内存中)
				localStorage保存的数据在关闭后还存在(保存在本地文本)
		什么时候存?  只要todos有任何变化都保存一下todos数据 ==> 深度watch
	读取数据
		一上来就读取 ==> 读取作为初始值

## 15.组件间通信/传值的理解
	一个组件向另一个组件传递数据  ==> 组件间通信/传值
	不要在子组件中直接修改父组件传递给你的状态数据
	数据在哪, 更新数据的行为(函数)就应该定义在哪

## 16.组件之间的关系
	1)父子
	2)祖孙
	3)兄弟
	4)其它

## 17.组件间通信的方式(还有更多)
	1) props
	2) vue的自定义事件  
	3) 全局事件总线
	4) 消息订阅与发布
	5) slot

## 18.通信方式1: props
	通过标签属性传递, 
	最最基本的通信方式, 也是用得最多的
	用于实现父子之间相互通信
	2种情况: 
		函数属性         ===> 子==>父, 子组件调用父组件的方法, 更新父组件的数据, 需要的数据通过参数传递给父组件
		非函数/一般属性   ===> 父==>子, 父组件向组件传递数据
	不足:
		祖孙组件通信?  必须逐级传递 ==> 麻烦
		兄弟/其它? 必须借助于共同的父组件  ==> 麻烦

## 19.vue的自定义事件 
	理解事件的2个操作:
		绑定事件监听: 事件名和回调函数
		分发/触发事件: 事件名和数据
	原生的DOM事件
		绑定事件监听:
			事件名: 固定有限的一些事件名
			回调函数: 用来处理事件的, 接收一个event对象
		触发事件:  当用户操作时, 浏览器自动触发  ==> 就会自动调用对应的监听回调函数, 并将event传递进去
			事件名: 浏览器根据用户操作的类型指定相应的事件名
			数据: 就是event对象(包含了所有相关的数据: target/offsetX/offsety/keyCode)
		理解event对象: 包含事件相关信息数据的对象
	Vue自定义的事件
		绑定事件监听
			事件名: 任意标识名称
			回调函数: 用来处理事件的, 可以接收任意多个参数数据
		分发事件: 必须执行分发的函数代码才可以
			事件名: 需要与绑定监听的事件名要一致
			数据:  可以指定任意多个数据
					@eventName="fn"
		绑定事件监听: $on('eventName', (data) => {}) ==> 用来接收数据
		分发事件:  $emit('eventName', 'abc')  ==> 用来传递数据
	通信:
		用来实现子组件向父组件通信, 功能类似于函数属性
	事件监听相关方法:
		$on(eventName, callback): 监听事件监听
		$emit(eventName, data): 分发事件 
		$off(eventName): 解绑事件监听
		$once(): 监听事件监听,但只响应一次
	事件处理的方法是定义在Vue原型对象上的
	所有的组件对象都可以直接调用这些方法进行事件处理
	同一个组件对象来绑定监听后分发事件, 回调函数才执行

## 20.全局事件总线(globalEventBus)
	什么是全局事件总线?
		它是一个对象
		它必须要有绑定监听/分发事件/解绑监听的3个方法   ==> vm/组件对象
		任意的组件都能访问这个对象
	利用globalEventBus实现任意关系组件A向B通信
		初始化事件总线:
			方式一: 创建一个新的vm作为总线对象保存到Vue的原型对象上
				Vue.prototype.$globalEventBus = new Vue()
			方式二: 直接将最外层vm对象作为事件总线对象
				beforeCreate() { // 这个生命周期勾子最早执行
				    Vue.prototype.$globalEventBus = this 
				},
		A: 通过总线对象来分发事件   Item
		B: 给总线对象绑定事件监听   App
	为什么组件对象能直接到Vue原型对象上的属性和方法?  
		组件对象的原型对象的原型对象是Vue的原型对象
	通信: 任意组件间通信

## 21.消息订阅与发布
	提供一个全局对象能进行订阅消息与发布消息的操作
		订阅消息 ---绑定事件监听
		发布消息 ---分发事件
	下载消息订阅与发布的工具包: npm install pubsub-js
	语法:
		订阅消息: const token = PubSub.subcribe('msgName', (msg, data) => {})
		发布消息: PubSub.publish('msgName', data)
		取消订阅: PubSub.unsubcribe(token)
	Vue项目开发中很少用PubSub库,  因为可以用全局事件总线
	通信: 任意组件间通信

## 22.slot/插槽
	vue中用来实现父组件向子组件传递标签内容
	插槽分类
		默认插槽: 没有取名的插槽
		命名插槽: 取了名称的插槽, 有n个插槽<slot>时, 至少应该有n-1个命名插槽
		作用域插槽: 父组件读取子组件中的数据来决定向子组件传递什么样的结构内容
	插槽模板内容是在父组件解析好后, 再传递给子组件
	插槽模板内容是通过子组件标签体传递过去的
	作用域插槽编码:
		子组件: 通过slot标签属性向父组件传递数据
			<slot :row="item" :index="index"></slot> 
		父组件: 通过slot-scope属性来接收所有传递过来的数据, 根据数据决定要传递的结构内容
			<template slot-scope="xxx">
		       <span>{{xxx.index + 1}}--{{xxx.row.text}}</span>
		    </template>

## 23.数组声明式系列方法
	forEach() / filter() / reduce() / map() / find() / findIndex() / every() / some()

## 24.在vue项目中与后台交互(发送ajax, 配置代理服务器)
	1) 如何发ajax请求?
		vue-resource: vue的插件(不是官方提供), 基本只用于vue1.x
		axios: 专门用来发ajax请求的独立库, vue2.x开始建议使用axios    react也是基本用它
	2) 在哪/什么时候发ajax请求?
		一打开页面就要去请求数据: mounted() / created()
		用户进行了特定操作后才去请求数据: 在事件回调函数中/及相关回调中发请求 / 也可以watch的回调中发ajax
	3). 配置代理解决ajax请求跨域问题
		注意: 
			开发环境中已经有代理服务器了, 只是需要通过配置告诉它一此必要的信息
			webpack-dev-server中的http-proxy-middleware就是代理服务器
		配置: 
		// ngix 在开发环境中的替身
	    devServer:{
	        port:3001,
	        open:true,
	        proxy:{
	            //请求是可以找到4000服务器 可是4000服务没有对应的接口  devserve会主动返回index.html
	            '/api': {
	                target: 'http://localhost:4000',
	                changeOrigin: true, //允许跨域
	                pathRewrite:{
	                    "^/api":""
	                }
	            },
	        }
	    },
	4). 使用async&await来简化promise的使用
		不用再使用.then()来指定成功或失败的回调来得到异步成功或失败的结果数据
		使用await: 在结果为promise的表达式左侧使用
		使用async: await所在函数定义的左侧使用
		问题: 当前打包处理不了async&await的语法
		解决: 使用@babel/polyfill包来提供async&await的编译实现
			办法一: import '@babel/polyfill'
			入口配置: xxx: ['@babel/polyfill', resolve(SRC_DIR + '/index.js')]

## 25.使用element-ui
	下载: npm install element-ui
	完整引入使用
		引入
			import ElementUI from 'element-ui';  // 引入整个element-ui
			import 'element-ui/lib/theme-chalk/index.css'; // 引入整个element-ui的样式
			Vue.use(ElementUI)
		使用:  根据文档的demo和API来编写
			<el-button> / this.$message()/this.$message.success()
		
	按需引入使用
		下载: npm install babel-plugin-component -D
		配置:(只需要在babel.config.js中加入以下内容,切勿根据官网全部复制)
			plugins: [
			  [
			    "component",  // 为babel-plugin-component配置
			    {
			      "libraryName": "element-ui",
			      "styleLibraryName": "theme-chalk"
			    }
			  ]
			]
		按需引入注册:
			import Vue from 'vue'
			import {Button, Message} from 'element-ui'
			// 注册全局组件
			Vue.component(Button.name, Button)  // el-button
			// 将Message组件函数挂载到vue原型对象上
			Vue.prototype.$message = Message;
		使用:
			<el-button> / this.$message()/this.$message.success()
	2种UI组件
		标签组件
		函数/对象组件

## 26.自定义事件总线
    1). 相关语法
        a. eventBus: 包含所有功能的全局事件总线对象
        b. eventBus.on(eventName, listener): 绑定事件监听
        c. eventBus.emit(eventName, data): 分发事件(同步)
        d. eventBus.off(eventName): 解绑事件监听
    2). 内部容器结构
        {
            "add": [callback1, callback2],
            "delete": [callback3]
        }
    3). 思路
    	1. 分别在eventBus对象身上绑定三种方法(on/emit/off)
    	2. on方法中根据结构,在对象中定义一个数组,数组名为eventName,若无创建数组,若有则添加
    	3. emit方法中根据结构,根据eventName判断对象中是否有此属性,并且不为空,遍历数组调用数组中每个回调并传参data
    	4. off方法中需要根据用户传入的eventName来删除eventName, 若没传eventName将对象置为空,传了找到对应的属性数			组删除,其他情况给与提示

## 27.vue-router
	一个用来实现单页应用(SPA)的vue插件

## 28.SPA
	Single Page Application 单页web应用  ==> 整个应用中只有一个完整页面
	点击路由链接, 不发http请求, 只更新局部界面, 而不是刷新当前整个页面

## 29.路由
	什么是路由
		就是一个映射/对应关系(key:value)
		key是path/路径, value是函数(function)或者组件(component)
	分类:
		后台路由: value是回调函数, 用来处理请求, 返回响应数据
		前台路由: value是路由组件, 用来更新显示当前路由界面

## 30.路由的基本使用
	1). 安装 npm i vue-router (若脚手架选择了安装则不再需要安装)
	2). 定义路由组件(路由组件一般放到views/pages中)
	3). 注册路由组件
		export default new VueRouter({
			mode: 'hash/history', // 路由的2种模式
			routes: [ // 注册项目中的多个路由
				{ // 一般路由
					path: '/about',
					component: About
				},
				{ // 自动跳转的路由
					path: '/',
					redirect: '/about'
				}
			]
		})
	4). 注册路由器
		import router from './router'
		new Vue({
			router,
		})
	5). 使用<router-link> / <router-view>
		<router-link>: 路由链接, 当点击路由链接时, 就能自动显示对应的路由组件界面
		<router-view>: 显示当前路由组件界面
	
	当访问项目根路径时, 自动转向到about路由
		{ // 自动跳转的路由
			path: '/',
			redirect: '/about'
		}
	当前路由链接有特定样式: 文本是红色
		给当前链接类名添加样式
		.router-link-active { /* 当前路由链接的类名 */
	      color: red !important;
	    }
## 31.嵌套/子路由
	children: [  //谁的子路由children就放在哪
		// 1. 一般写法
		{
		  path: '/home/news',  
		  component: News,
		}
		// 2. 简便写法,千万不要加 /
		{
		  path: 'news',  
		  component: News,
		}
	]
	显示子路由界面的<router-view>必须写在父路由组件中
	需求: 自动显示子路由 news
		{ // 自动跳转的路由
			path: '',
			redirect: '/home/news'
		}
	news/message 样式类名 class="nav nav tabs"

## 32.向路由组件传递数据
	1) params参数
		注册路由的路径:  'detail/:id/:name'
		路由链接的路径: 'detail/3/tom'
		读取数据: 
			this.$route.params.id    
			this.$route.params.name
	2). query参数
		路由链接的路径: 'detail/3?id2=5&name=tom'
		读取数据: 
			this.$route.query.id2
			this.$route.query.name
	3). 监视参数的变化
		watch: {
			// 路由参数发生了变化
			$route (to, from) {}
		}

## 33.2种路由跳转(导航)的方式
	声明式: 使用路由链接进行路由跳转 <router-link to="/xxx">
	编程式: router.push/replace(location)

## 34.组件对象能使用2个路由相关对象
	$route: 代表当前路由信息对象, 包含以下属性
		path: 请求的路径
		query:包含所有query参数的对象
		params:包含所有params参数的对象
	$router: 路由器对象, 它包含控制路由跳转的一些方法: 
		push(): push方式跳转路由
		replace(): replace方式跳转路由
		back(): 回到上一个路由
		forward(): 前进到下一个路由

## 35.区别push路由跳转与replace路由跳转
	是否可以返回到原来的路由组件
	push可以, 但replace不能
	push居多, 如果不想有返回的效果, 用replace

## 36.路由跳转的location的2种值
	<router-link :to="location">
	push(location)/replace(location)
	1). 字符串
		需要携带的prams与query参数需要拼在哪个串中
		例如: /home/message/detail/${m.id}?id2=${m.id}&title=${m.title}`
	2). 对象:
		1). 简单写路径不携带参数 :to="{path:'/home'}"
			<router-link :to="{path:'/home'}" class="list-group-item">home</router-link>
		2). 携带参数对象写法
		{
			name: 'Detail'  // 一旦通过params配置携带参数必须指定name
			// path: '/home/message/detail', // 不可以  
			params: {id: 1},  // 指定params参数
			query: {} // 指定query参数
		}

## 37.将路由参数映射成路由组件的props
路由传参： 
		使用props简化路由传参给子组件操作（路由当中传参的三种操作）
				1）布尔值  
				路由当中需要配置 props:true，它会把路由当中接收的params参数，置为子组件的属性     
				2）对象
				很少用，只能给子组件传递默认静态值
				3）函数
				用的比较多，比较灵活，可以把params和query的参数都映射为子组件的属性
				props(route){ //route就是当前我这个路由对象
						//把路由对象当中的参数，不管什么参数
						//全部拿到作为子组件的属性去使用
						return {
									msgId:route.params.msgId,
									msgContent:route.query.msgContent
						}
				}

## 38.缓存路由组件
	<keep-alive><router-view/></keep-alive>
	缓存路由组件 ==> 离开时不会销毁 ==> 再次进入不用重新创建   ===> 提高性能

## 39.路由的2种mode/模式:
	hash: 带#号
	history: 不带#号
	
	hash的模式在任意路由下刷新没有问题
	
	问题: history模式刷新页面会出样式丢失的错误
		 index页面引入静态资源(css)
	解决: 去掉.就可以, 总是在项目根路径下找


