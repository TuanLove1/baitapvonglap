// Bài 1 tìm số nguyên dương nhỏ nhất
function timSoNguyenDuongMin() {
    let i = 1;
    let s = 0;
    while (s < 10000) {
        s = s + i;
        i++;
    }
    let kq = document.getElementById('ketqua');
    kq.value = 'Số nguyên dương nhỏ nhât là: ' + i;
}
// Bài 2, tính tổng
document.getElementById('btnTong').onclick = function () {
    let x = document.getElementById('soX').value * 1;
    let n = document.getElementById('soN').value * 1;
    let tich = 1;
    let s = 0;
    for (let i = 1; i <= n; i++) {
        tich *= x;
        s += tich;
    }
    document.getElementById('outputTong').innerHTML = s;
}
// Bài 3, tính lũy thừa
function tinhGiaiThua() {
    let a = document.getElementById('number').value;
    let tich = 1;
    for (let i = 1; i <= a; i++) {
        tich = tich * i;
    }
    document.getElementById('outputLuyThua').innerHTML = tich;
}
// Bài 4, tạo thẻ div,
function taoDiv() {
    let html = '';
    for (let i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            html += `<div style="background-color:red;width:100%;height:50px">Div chẵn ${i}</div>`;
        }
        else {
            html += `<div style="background-color:blue;width:100%;height:50px">Div lẻ ${i}</div>`;
        }
    }
    document.querySelector('.inblack').innerHTML = html;
}

