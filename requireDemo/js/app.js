require([
    'jquery',
    'validate'
],function($,validate){
    $('body').css('background-color','red');
    $('#getVal').click(function(){
        console.log(validate.getVal('input'));
    });
    console.log(validate.isEqual('xwill','xwill2'));
});