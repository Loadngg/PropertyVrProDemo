const modal = document.getElementById("form-overflow")
const form = document.getElementById("form")
const send_form_button = document.getElementById("send-form")
const form_button = document.getElementById("form-button")

form_button.onclick = () => {
    modal.classList.remove('hidden'); 
    setTimeout(function(){
        modal.classList.remove('transparent')
    }, 20)
};

function hideOverflow() {
    modal.classList.add('transparent'); 
    setTimeout(function(){
        modal.classList.add('hidden')
    }, 500);
}

send_form_button.onclick = () => {
    form.reset();
    hideOverflow();
}