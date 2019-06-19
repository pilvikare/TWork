var ta = document.getElementById("ta");
var th = document.getElementById("th");

function thSiirra () {
    location.href = "/hakemus-th";
}
 function taSiirra () {
    location.href = "/hakemus_ta";
 }

th.onclick = thSiirra;
ta.onclick = taSiirra;