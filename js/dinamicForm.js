const username = document.querySelector("#username")
const password = document.querySelector("#password")
const check = document.querySelector("#check")
const spinner = document.querySelector("#spinner")
const btn = document.querySelector("#connect")

let username_valid = false
let password_valid = false
let rx_mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/

username.oninput = function(){
    if(this.value.length > 4 && rx_mail.test(this.value)){
        username_valid = true
    }else{
        username_valid = false
    }
    form_valid(username_valid, password_valid)
}

password.addEventListener("input", () => {
    if(password.value.length > 6){
        password_valid = true
    }else{
        password_valid = false
    }
    form_valid(username_valid, password_valid)
})

function form_valid(username_valid, password_valid){
    if(username_valid && password_valid){
        spinner.style.display = 'none'
        check.style.display = 'block'

        btn.classList.add('valid')
        check.classList.add('up')
    }else{
        spinner.style.display = 'block'
        check.style.display = 'none'

        btn.classList.remove('valid')
        check.classList.remove('up')
    }
}