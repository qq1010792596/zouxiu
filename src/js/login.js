window.onload = function(){
    let arr = [false,false];
    //前端正则验证
    $('#user').blur(function(){
        let re = /^(15|19|17|13|18)\d{9}$/;
        if (re.test($(this).val())) {
            arr[0] = true;
            alert('手机号格式正确')
            $('#tip').css("display","none");
        } else {
            arr[0] = false;
            $('#tip').css("display","block");
        }
    })
    $('#upwd').blur(function(){
        let re = /^\w{6,18}$/;
        if(re.test($(this).val())){
             arr[1] = true;
        }else{
            arr[1] = false;
            alert('密码错误，格式为6-18位数字，字母，符号组成');
         }
    })
    $('#log-btn').click(function(){
        if(arr.indexOf(false) === -1){
            //后端验证
            let user = $('#user').val();
            let upwd = $('#upwd').val();
            //获取cookie
            let cookie_str =getCookie('users') ? getCookie('users'):'';
            //转为对象
            let cookie_obj = convertStrToObj(cookie_str);
            //判断对象中是否存在当前用户
            if(user in cookie_obj){
                //判断密码是否正确
               
                if(upwd === cookie_obj[user]){
                    alert('登录成功');
                    createCookie('users',JSON.stringify(cookie_obj),{expires : 10,path : '/'});
                    location.href = '../../dist/index.html';
                   
                }else{
                    alert('密码错误');
                }
            }else{
                alert('未注册');
            }
        }else{
            alert('信息不完整');
        }
    })
}