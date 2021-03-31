function validateForm() {

    var fName =document.getElementById("firstName").value;
    var lName=document.getElementById("lastName").value;
    var age=document.getElementById("age").value;
    var dob=document.getElementById("date of birth").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
    if (fName==""||lName==""||age==""||dob==""||email==""||password==""){
        alert('please fill out the fields');
    }
    else if(age<=18){
        alert('eligible above 18 years');
    }
    else {
        alert('proceed');
    }
}