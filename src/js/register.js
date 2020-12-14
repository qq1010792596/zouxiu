window.onload = function(){
    let arr = [false,false,false];
    $('#user').blur(function(){
        let re = /^(15|13|17|19|18)\d{9}$/;
        if(re.test($(this).val())){
            arr[0] = true;
            alert("手机号格式正确")
            $('#tip').css("display","none");
        }else{
            arr[0] = false;
            $('#tip').css("display","block");
        }
    })
    $('#tel').blur(function(){
        let re = /^\d{6}$/;
        if(re.test($(this).val())){
            arr[1] = true;
            alert("验证码格式正确");
        }else{
            arr[1] = false;
            alert("验证码错误，格式为6位数字");
        }
    })
    $('#upwd').blur(function(){
        let re = /^\w{6,12}$/;
        if(re.test($(this).val())){
            arr[2] = true;
            alert("密码格式正确");
        }else{
            arr[2] = false;
            alert("密码由数字，字母，下划线组成");
        }
    })
    $('#log-btn').click(function(){
        if(arr.indexOf(false) === -1){
            let utel = $('#tel').val();
            let upwd = $('#upwd').val();
            let user = $('#user').val();
            
            let cookie_str =getCookie('users') ? getCookie('users'):'';
            let cookie_obj = convertStrToObj(cookie_str);

            if(user in cookie_obj){
                alert("此手机号已经注册");
                return;
            }else{
                cookie_obj[user] = upwd;
                alert('注册成功，请登录');
                location.href = '../pages/login.html';
                createCookie('users',JSON.stringify(cookie_obj),{expires : 10,path : '/'});
            }
        }else{
            alert('信息不完整');
        }
    })
}