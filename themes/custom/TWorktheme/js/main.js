var ta = document.getElementById("ta");
var th = document.getElementById("th");

function thSiirra () {
    location.href = "http://twork.test/form/tyontekijan-tiedot";
}
 function taSiirra () {
    location.href = "http://twork.test/form/tyonantajan-tiedot";
 }

th.onclick = thSiirra;
ta.onclick = taSiirra;