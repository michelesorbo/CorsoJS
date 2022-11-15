/*
Username: min 4 caratteri e senza numeri e caratteri speciali

Email: controllare che sia in un formato valido

Password: min 8 caratteri e almeno 1 carattere maiusco, uno numerico e un carattere speciale

Conrollare che la password e la password di conferma siano uguali

Per il css creare una regola per visualizzare l'errore sotto la line bianca
Se non si riesce usare alert

Tutto deveaccadere qundo premo Registrati
*/

const username = document.querySelector("#username")
const error_user = document.querySelector("#error_user")
const email = document.querySelector("#email")
const error_mail = document.querySelector("#error_mail")
const pwd = document.querySelector("#pwd1")
const pwd_c = document.querySelector("#pwd2")
const error_pwd = document.querySelector("#error_pwd")
const btn = document.querySelector("#submit")

let rx_user = /^[^0-9!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]+$/
let rx_mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
let rx_pwd = /^[A-Z]+$/

let user_ok = false
let email_ok = false
let pwd_ok = false

btn.addEventListener("click", () =>{
    //Controllo UserName
    if(username.value.length > 3 && rx_user.test(username.value)){
        //alert("ok")
        error_user.innerHTML = "" //Cancello il messaggio
        error_user.style.display = "none" //Nascondere il tag p
        user_ok = true
    }else{
        error_user.innerHTML = "Username non valido"
        error_user.style.display = "block"
        user_ok = false
    }

    //Cntrollo EMail
    if(rx_mail.test(email.value)){
        error_mail.innerHTML = "" //Cancello il messaggio
        error_mail.style.display = "none" //Nascondere il tag p
        email_ok = true
    }else{
        error_mail.innerHTML = "Email non valido"
        error_mail.style.display = "block"
        email_ok = false
    } 

    //Controllo Password
    if(pwd.value == pwd_c.value && pwd.value.length > 7){
        error_pwd.innerHTML = "" //Cancello il messaggio
        error_pwd.style.display = "none" //Nascondere il tag p
        pwd_ok = true
    }else{
        error_pwd.innerHTML = "Password non coincidono"
        error_pwd.style.display = "block"
        pwd_ok = false
    } 
    
    if(user_ok && pwd_ok && email_ok){
        alert("Bravo")
    }
})