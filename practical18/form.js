function validateForm() {

    var fName =document.getElementById("firstName").value;
    var lName=document.getElementById("lastName").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    if (fName==""||lName==""||email==""||password==""){
        alert("please fill out the fields");
    }
    else {
        alert("proceed");
    }
}