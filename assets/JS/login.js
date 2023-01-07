let psswrd = $('#register-password');
let login = $('#login-password');
if(psswrd.val().length > 8 && psswrd.val().match(/[A-Z]/) && psswrd.val().match(/\d/) && psswrd.val().match(/[A-z]/)){
    $('.weak-password').text('Strong password')
}
$('.password-button').click(function(){
    if(psswrd.val().length > 8 && psswrd.val().match(/[A-Z]/) && psswrd.val().match(/\d/) && psswrd.val().match(/[A-z]/)){
        $('.weak-password').removeClass('fail');
        $('.weak-password').text('Strong password')
        $('.weak-password').addClass('success');
        $('.weak-password').show();
        $('.password-instructions').hide();

    }
    else{
        $('.weak-password').text('Weak password')
        $('.weak-password').addClass('fail')
        $('.weak-password').show();
        $('.password-instructions').show();
    }
    
})
$('.login-button').click(function(){
    if(login.val().length > 8 && login.val().match(/[A-Z]/) && login.val().match(/\d/) && login.val().match(/[A-z]/)){
        $('.lpassword-instructions').hide();
        $('.weak-lpassword').hide();

    }
    else{
        $('.weak-lpassword').text('Wrong password')
        $('.weak-lpassword').addClass('fail')
        $('.weak-lpassword').show();
        $('.lpassword-instructions').show();
    }
})


function submitForm(event){
    event.preventDefault();
}