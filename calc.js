const double = x => 2*x;
const init= (e,x) =>
{
    console.log("Container:",document.getElementById('container'));
    console.log(typeof e);
    console.log(double (x));
}

window.addEventListener("DOMContentLoaded",e=> init(e,5));
var a;
function klik()
{

 a = parseInt(document.getElementById('Display').value)+a;
a=
document.getElementById('Display').innerHTML=a;
}

