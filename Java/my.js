


function chuyendoi() {
    let sothang = +document.getElementById("inputThang").value;
    switch (sothang) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            document.getElementById("ketqua").innerHTML=("thang "+ sothang +" co 31 ngay")
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            document.getElementById("ketqua").innerHTML=("thang "+ sothang+ " co 30 ngay");
            break;
        case 2:
            document.getElementById("ketqua").innerHTML=("thang "+ sothang+ " co 28 hoac 29 ngay");
            break;
    }
}
