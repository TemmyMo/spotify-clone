var emailError = document.getElementById('email-error');
var passwordError = document.getElementById('password-error');
var nameError = document.getElementById('name-error');
var dobError= document.getElementById('dob-error');

function validateEmail() {
    var email = document.getElementById('contact-email').value;

    if (email.length==0){
        emailError.innerHTML='Email is required'
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML='Email Invalid'
        return false;

    }
    emailError.innerHTML='<i class="fa-solid fa-circle-check"></i>'
    return true;

    
}

    

   

function validatePassword(){
    var password = document.getElementById('confirm-password').value;

    if(password==""){
        passwordError.innerHTML="**Fill the password please!"
        return false;
    }
    if(password.length<8){
        passwordError.innerHTML="**Password length must be atleast 8 characters"
        return false;
    }
    if(password.length>15){
        passwordError.innerHTML="**Password length must not exceed 15 characters"
        return false;
    }
    passwordError.innerHTML='<i class="fa-solid fa-circle-check"></i>'
    return true;
}
function validateName(){
    var name = document.getElementById('confirm-name').value;

    if(name==""){
        nameError.innerHTML="**Input your name please!"
        return false;
    }
    if(name.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        nameError.innerHTML="**wrong name format!"
        return false;
    }
    nameError.innerHTML='<i class="fa-solid fa-circle-check"></i>'
    return true;
}

function validateDob(){
    var dob = document.getElementById('confirm-dob').value;

    if(dob==""){
        dobError.innerHTML="**input your date of birth!"
        return false;
    }
   else (dob.match(/^[0-9]*[\.]/))
        dobError.innerHTML='<i class="fa-solid fa-circle-check"></i>'
        return true;
    
}
function validateForm(){
    if(!validateEmail()|| !validatePassword() || !validateName() || !validateDob()){
        signupError.style.display='block'
        signupError.innerHTML= 'please fix error to Signup';
        setTimeout(function(){signupError.style.display='none';},3000);
        return false;
    }
}
