function randomnumber(){
    let max= document.getElementById("num").value
    let r=Math.floor(Math.random()*max)
    document.getElementById("selectedNum").innerText=r
    if(r>1000){
        document.getElementById("selectedNum").style.color="blue"
    }
    else{
        document.getElementById("selectedNum").style.color="red"
    }

}

