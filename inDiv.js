function inDiv(){
    document.getElementById("footer__div").innerHTML= ""
    for(var i = 1; i <= 10; i++){
        var tagresult = addDiv(i);
        document.getElementById("footer__div").appendChild(tagresult);
    }
}

function addDiv(n){
    var tag = document.createElement("div");
    if(n % 2 == 0){
        tag.style.background = "red";
        tag.style.height = "20px"
    }else{
        tag.style.background = "green";
        tag.style.height = "20px"
    }
    return tag;
}