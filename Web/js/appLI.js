const form = document.getElementById('form');
const errormsg = document.getElementById('error')


function Alphacheck(x){
    let val = true
    for(let i = 0; i < x.length; i++){
        let y = x[i];
        if(y >= 'A' && y <= 'Z'){
            val = false;
            break;
        }
    }

    return val
}

function alphacheck(x){
    let val = true
    for(let i= 0; i < x.length; i++){
        let y = x[i];
        if(y >= 'a' && y <= 'z'){
            val = false;
            break;
        }
    }

    return val
}

function numcheck(x){
    let val = true
    for(let i= 0; i < x.length; i++){
        let y = x[i];
        if(y >= '0' && y <= '9'){
            val = false;
            break;
        }
    }

    return val
}

const handleForm = (event)=>{
    event.preventDefault();
    
    const usernameE = document.getElementById('username');
    const emailE = document.getElementById('email');
    const phE = document.getElementById('number');
    const passE = document.getElementById('pass');
    const cpassE = document.getElementById('confirm-pass');
    const boxE = document.getElementById('terms');

    if(usernameE.value == '' || emailE.value == '' || phE.value == ''||passE.value == ''||cpassE.value == ''){
        console.log('masuk kosong')
        errormsg.innerHTML = 'Please Fill Every Field'
        return
    }

    if(usernameE.value.length <= 5){
        console.log('masuk panjang')
        errormsg.innerHTML = 'Username must be more than 5 characters'
        return
    }

    const spacecount = usernameE.value.split(' ')

    if(spacecount.length > 1){
        console.log('error usn space')
        errormsg.innerHTML = 'Username must not contain spaces'
        return
    }

    if(emailE.value.indexOf('@') == -1 || !emailE.value.indexOf('.') == -1 || emailE.value.length <=5){
        console.log('masuk email error')
        errormsg.innerHTML = 'Please enter the email format correctly'
        return;
    }

    const spacenumber = phE.value.split(' ')
    if(spacenumber.length > 1){
        console.log('nomor ada spasi')
        errormsg.innerHTML = 'Phone Number must no contain space'
        return
    }

    if(phE.value.length <  10 || phE.value.length > 13){
        console.log('error nomor pendek')
        errormsg.innerHTML = 'Phone Number must contain 10-13 numbers'
        return
    }

    if(!alphacheck(phE.value) || !Alphacheck(phE.value)){
        console.log('error nomor az')
        errormsg.innerHTML = 'Phone Number must not contain letters'
        return
    }

    if(passE.value.length < 6){
        console.log('error pass pendek')
        errormsg.innerHTML = 'Password must be more than 6 characters'
        return
    }
    if(Alphacheck(passE.value) || alphacheck(passE.value) || numcheck(phE.value)){
        console.log('error pass unique')
        errormsg.innerHTML = 'Password must contain uppercase letters, lowercase letters and numbers'
        return
    }

    if(passE.value != cpassE.value){
        console.log('error pass no match')
        errormsg.innerHTML = 'Passwords do not match'
        return
    }

    if(!boxE.checked){
        console.log('error t&c')
        errormsg.innerHTML = 'You must agree to the terms & conditions to continue'
        return
    }
    errormsg.innerHTML = ''
    window.location.href = '/html/cars.html'

}

form.addEventListener('submit', handleForm);