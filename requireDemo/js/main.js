require.config({
	//baseUrl: '', 所有模块基于该前缀
	
	//如果 jquery 在 main.js 文件同级目录且叫 jquery.js 则不需要指定 path 和别名
	paths: {
		'jquery': '../bower_components/jquery/dist/jquery.min'
	},
	deps: ['app'], // ① 指定依赖，初始化加载 app.js 文件
});

//初始化加载main.js中定义的 require 方法下的代码。① 如何将下面代码放到其他文件初始化？
// require([
// 	'jquery',
// 	'validate'
// ],function($,validate){
// 	$('body').css('background-color','red');
// 	$('#getVal').click(function(){
// 		console.log(validate.getVal('input'));
// 	});
// 	console.log(validate.isEqual('xwill','xwill2'));
// });