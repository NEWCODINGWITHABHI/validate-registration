function validate(){

    let firstName=document.getElementById("first-name").value;
    let lastName=document.getElementById("last-name").value;
    let email=document.getElementById("email").value;;
    let city=document.getElementById("city").value;
    let state=document.getElementById("state").value;
    let zipCode=document.getElementById("zip-code").value;
    let tnc=document.getElementById("tnc").checked;

 
    let firstNameValid=false;
    let lastNameValid=false;
    let emailValid=false;
    let cityValid=false;
    let stateValid=false;
    let zipValid=false;
    let tncValid=false;
    if(firstName.length>=2){
        document.getElementById("first-name-valid").style.display="block";
        document.getElementById("first-name-invalid").style.display="none";
         firstNameValid=true;
    }
    else{
        document.getElementById("first-name-invalid").style.display="block"; 
        document.getElementById("first-name-valid").style.display="none"; 
        
    }

    if(lastName.length>=2){
        document.getElementById("last-name-valid").style.display="block";
        document.getElementById("last-name-invalid").style.display="none";
        lastNameValid=true;
    }
    else{
        document.getElementById("last-name-invalid").style.display="block"; 
        document.getElementById("last-name-valid").style.display="none"; 
    }

    if(email.includes('@') && email.includes('.')&& email.indexOf("@">0)&&
    email.substr(email.lastIndexOf(".")+1).length>=2){
        document.getElementById("email-valid").style.display="block";
        document.getElementById("email-invalid").style.display="none";
        emailValid=true;
    }
    else{
        document.getElementById("email-invalid").style.display="block";
        document.getElementById("email-valid").style.display="none"; 
    }

    if(city.length>=3){
        document.getElementById("city-valid").style.display="block";
        document.getElementById("city-invalid").style.display="none";
        cityValid=true;
    }
    else{
        document.getElementById("city-invalid").style.display="block";
        document.getElementById("city-valid").style.display="none"; 
    }
     
    if(state!='none'){
        document.getElementById("state-valid").style.display="block";
        document.getElementById("state-invalid").style.display="none";
        stateValid=true;
    }
    else{
        document.getElementById("state-invalid").style.display="block";
        document.getElementById("state-valid").style.display="none"; 
    }
     
    let numberZip=parseInt(zipCode);

    if( !isNaN(numberZip)
    && numberZip>100000 && numberZip<=999999){
        document.getElementById("zip-valid").style.display="block";
        document.getElementById("zip-invalid").style.display="none";
        zipValid=true;
    }
    else{
        document.getElementById("zip-invalid").style.display="block";
        document.getElementById("zip-valid").style.display="none"; 
    }

    if(tnc){
        document.getElementById("tnc-invalid").style.display="block";
        tncValid=true;
    }
    else{
        document.getElementById("tnc-invalid").style.display="none";
    }

    if(firstNameValid && lastNameValid &&emailValid&&cityValid &&stateValid&&zipValid&&tncValid){
        window.alert("form submitted successfully");
    }
    // else{
    //     window.alert("some field is invalid");
    // }
}