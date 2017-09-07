$(function () {
    $('#submitBtn').on('click', function(){
        submit()
    })
    $('#password').on('focus', function(){
        $('#password').val('');
        $('#loginError').hide();
    })
})
//表单校验
function submit(){
    var userName = $('#username').val();
    var userPsd = $('#password').val();
    console.log(userName, userPsd)
    if(userName !== '' && userPsd !== ''){
        sendForm();
    }else{
        $('#loginError').show();
    }
}

function sendForm(){

}