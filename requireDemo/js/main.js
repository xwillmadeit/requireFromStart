require.config({
	paths: {
		'jquery': '../bower_components/jquery/dist/jquery.min'
	}
	//如果 jquery 在 main.js 文件同级目录且叫 jquery.js 则不需要指定 path 和别名
});
require(['jquery','validate'],function($,validate){
	$('body').css('background-color','red');
	$('#getVal').click(function(){
		console.log(validate.getVal('input'));
	});
	console.log(validate.isEqual('xwill','xwill2'));
});