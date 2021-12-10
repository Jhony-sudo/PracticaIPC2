function Validate(){
    let Password = document.getElementById("Password").value;
    let Password2 = document.getElementById("Password2").value;
    if(Password == Password2){
        console.log("Contrase;as iguales");
    } else alert("Las contrase;as no coinciden");

}

function Print(){
    let User = document.getElementById("User").value;
    let Password = document.getElementById("Password").value;

    console.log("Usuario " + User);
    console.log("Password " + Password);

}