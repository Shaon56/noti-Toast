document.addEventListener('DOMContentLoaded', () =>{
    let toastBox = document.getElementById('toastBox');
    let successMsg = document.getElementById('success');
    let invalidMsg = document.getElementById('invalid');
    let errorMsg = document.getElementById('error');

    function showToast(msg){
        let toast = document.createElement('div');
        toast.classList.add('toast');
        toast.innerHTML = msg;
        toastBox.appendChild(toast);

        if(msg.includes('Invalid')){
            toast.classList.add('invalid');
        }
        if(msg.includes('error')){
            toast.classList.add('error');
        }

        setTimeout(()=>{
            toast.remove();
        },4000);
    }


    successMsg.addEventListener('click', () =>{
        showToast('<i class="fa-solid fa-circle-check"></i> Successfully Submitted!');
    })

    invalidMsg.addEventListener('click', () =>{
        showToast('<i class="fa-solid fa-circle-exclamation"></i> Invalid Input, Check again.');
    })

    errorMsg.addEventListener('click', () =>{
        showToast('<i class="fa-solid fa-circle-xmark"></i> Please fix the error.');
    })

})