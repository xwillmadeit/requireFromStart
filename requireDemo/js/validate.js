define(['jquery'],function($){
	return {
		isEqual: function(str1,str2){
			return str1 === str2;
		},
		getVal: function(input){
			return $('#'+input).val();
		}
	}
});