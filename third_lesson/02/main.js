function namecheck(){
    let name= document.getElementById("texte").value
    alert(name)
    document.getElementById("FirstName").innerText=name
    if(name[0]=='a'||name=='A'){
        document.getElementById("FirstName").style.color="red"
    }
    else{
        document.getElementById("FirstName").style.color="blue"
    }
}