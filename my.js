function chuyen_doi_tien_te() {
    let moNey = +document.getElementById('money').value;
    let Fcurrency = document.getElementById('Fcur').value;
    let Tcurrency = document.getElementById('Tcur').value;
    if(Fcurrency=='USD' && Tcurrency=='USD' || Tcurrency=='VND' && Fcurrency=='VND') {
        document.getElementById('result').innerHTML = moNey;
    } else if (Fcurrency=='USD' && Tcurrency=='VND') {
        document.getElementById('result').innerHTML = moNey * 23000;
    } else {
        document.getElementById('result').innerHTML = moNey / 23000;
    }
}