


var EmailCorrect = false;
const mdpActuel = '123456789'

function VerifeEmail() {
    const email = document.getElementById('email').value
    const emailVerif = document.getElementById('confirmEmail').value
    const pass = document.getElementById('pass').value
    const confirmPass = document.getElementById('confirmMdp').value
    const newMdp = document.getElementById('newMdp').value

    console.log(email)

    // verification de l'email 
    if (email == '' || emailVerif == '') {
        //  console.log(document.getElementById('messageVrai').innerHTML)
        document.getElementById('containerMessageError').style.display = "block"
        document.getElementById('messageVrai').style.color = "red"
        document.getElementById('messageVrai').innerHTML = "Email S'il vous plait insérer votre Email"
        preventDefault();
    }
    // verification si le symbole @ existe dans l'email ou pas 
    if (email.indexOf('@') == -1 || emailVerif.indexOf('@') == -1) {
        // console.log(document.getElementById('messageVrai').innerHTML)
        document.getElementById('containerMessageError').style.display = "block"
        document.getElementById('messageVrai').style.color = "red"
        document.getElementById('messageVrai').innerHTML = "Le Format de l'email n'est pas valide"
        preventDefault();

    }
    // verification si le symbole . existe dans l'email ou pas 

    if (email.indexOf('.') == -1 || emailVerif.indexOf('.') == -1) {
        // console.log(document.getElementById('messageVrai').innerHTML)
        document.getElementById('containerMessageError').style.display = "block"
        document.getElementById('messageVrai').style.color = "red"
        document.getElementById('messageVrai').innerHTML = "Le Format de l'email n'est pas valide"
        preventDefault();

    }

    if (email != emailVerif) {
        document.getElementById('containerMessageError').style.display = "block"
        document.getElementById('messageVrai').style.color = "red"
        document.getElementById('messageVrai').innerHTML = "Les deux email n'sont pas identiques"
        preventDefault();
    }





    if (pass != mdpActuel) {

        document.getElementById('containerMessageErrorMdp').style.display = "block"
        document.getElementById('messageVraiMdp').style.color = "red"
        document.getElementById('messageVraiMdp').innerHTML = "Le mot du passe actuel n'est pas valide"

        preventDefault();
    }


    /*     if (newMdp.match(/[a-z]/g)) {
            document.getElementById('containerMessageErrorMdp').style.display = "block"
            document.getElementById('messageVraiMdp').style.color = "red"
            document.getElementById('messageVraiMdp').innerHTML = "Le mot du passe doit contenir une lettre en miniscule"
    
        } */

    if (newMdp.length < 8) {
        document.getElementById('containerMessageErrorMdp').style.display = "block"
        document.getElementById('messageVraiMdp').style.color = "red"
        document.getElementById('messageVraiMdp').innerHTML = "La longueur du mot de passe doit être supérieur à 8"

        preventDefault();
    }

    if (newMdp != confirmPass) {
        document.getElementById('containerMessageErrorMdp').style.display = "block"
        document.getElementById('messageVraiMdp').style.color = "red"
        document.getElementById('messageVraiMdp').innerHTML = "Le deux mot du passe ne sont pas identiques"

        preventDefault();
    }

    alert('Les Modification ont été pris en compte !')
    preventDefault();

}