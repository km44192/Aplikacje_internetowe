const double = x => 2*x;
const init= (e,x) =>
{
    console.log("Container:",document.getElementById('container'));
    console.log(typeof e);
    console.log(double (x));
}

window.addEventListener("DOMContentLoaded",e=> init(e,5));
var s="";
var c=0;
var z;
function klik(a)
{

    x=a;
    
    switch(x)
    {
                case '1':
                case '2':
                case '3':
                case '5':
                case '6':
                case '7':
                case '9':
                case '10':
                case '11':
                case '13': ///przyciski numeryczne
                var b =document.getElementById(x).innerHTML;
                
                s=s+b;
                document.getElementById('Display').innerHTML=s;
                break;
                        case '4': ///przycisk C
                        s="";
                        document.getElementById('Display').innerHTML=s;
                        c=0;
                        break;
                case '8': //przycisk +
                c=c+0;
                s=parseInt(s);

                console.log(s);

        

                c=c+s;
                console.log("Suma",c);

                s=s.toString();

                console.log(s);

                s="";

                z=8;
                break;
    case '12': // przycisk odejmowania - 
    c=c+0;
    s=parseInt(s);
    c=c-s;
    console.log("Róznica",c);

    s=s.toString();
s="";
    z=12;
    break;

        case '15'://przycisk =
        if (z==8 && s!="")
        {
        s=parseInt(s);
            c=s+c;
        s=s.toString();
        s="";
    }
    else if(z==12 && s!="")
    { 
        s=parseInt(s);
        c=c-s;
        s=s.toString();
        s="";
    }
        document.getElementById('Display').innerHTML=c;
        break;
        
    }
    
    
}

