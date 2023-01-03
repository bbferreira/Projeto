const form = document.getElementById('form');
const campo = document.querySelectorAll('.required');
const span = document.querySelectorAll('.span-required');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*([-.]\w+)*$/;



function setError(index){
    campo[index].style.border='2px solid #e63636';
    span[index].style.display='block';
}

function removeError(index){
    campo[index].style.border='';
    span[index].style.display='none';
}


function emailValidate(){
    if(!emailRegex.test(campo[0].value))
    {
        setError(0);
    } else{
        removeError(0);
    }

}