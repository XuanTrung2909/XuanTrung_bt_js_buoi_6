function giaiToan(){
    var tong = 0;
    var n = 0;

    do{
        n++;
        tong += n;
    }while(tong <= 10000)


    document.getElementById("footer__snnn").innerHTML = "Số Nguyên nhỏ nhất là: " + n;
}