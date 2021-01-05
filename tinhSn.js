function tinhSn(){
    var coSo = document.getElementById("co__so").value;
    var muSo = document.getElementById("mu__so").value;

    coSo = parseInt(coSo);
    muSo = parseInt(muSo);

    var Sn = 0;

    for (var i = 1; i<= muSo; i++){
        Sn += xuLyLuyThua(coSo, i);
    }

    //có thể dung hàm Math.pow

    document.getElementById("footer__Sn").innerHTML = "S(n) = " + Sn;
}


function xuLyLuyThua(a, b){
    return (a**b);
}