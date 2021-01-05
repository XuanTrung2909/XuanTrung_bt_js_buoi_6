function tinhGiaiThua(){
    var soGiaiThua = document.getElementById("so__giai__thua").value;

    var i = 1;

    var kq = 1;
    
    while(i <= soGiaiThua){
        kq *= i;
        i++;
    }


    document.getElementById("footer__gt").innerHTML = "Kết Quả tính giai thừa: " + kq;
}