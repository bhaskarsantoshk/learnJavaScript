let username = prompt("Enter username?", "username");
if(username == "Admin"){
    let password = prompt("Enter password ?" , "password");
    if ( password == "TheMaster"){
        alert("Welcome");
    }
    else if(password == '' || password == null ){
        alert("Canceled");
    }
    else{
        alert("Wrong password");
    }
}
else if(username == '' || username == null ){
    alert("Canceled");
}
else{
    alert("I don't know you");
}