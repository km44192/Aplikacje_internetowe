const double = x => 2*x;
const init= (e,x) =>
{
    console.log("Container:",document.getElementById('container'));
    console.log(typeof e);
    console.log(double (x));
}
const fields = [
   { text:1,row:4, column:1},
    {text:2,row: 4, column:2},
    {text: 3,row: 4, column:3},
    { text:4,row:3, column:1},
    {text:5,row: 3, column:2},
    {text: 6,row: 3, column:3},
    { text:7,row:2, column:1},
    {text:8,row: 2, column:2},
    {text: 9,row: 2, column:3},
    { text:0,row:5, column:'1/3'},
    {text:'+',row: 3, column:4},
    {text:'-',row: 4, column:4},
    { text:'.',row:5, column:3},
    {text:'C',row: 2, column:4},
    {text:'=',row:5,column:4},
    {text: 'display',row: 1, column:'1/5'}
];
const init1=()=>
{
    const zmienna= document.createElement('div');
    zmienna.id="cialo";
    fields.forEach(each_array_element=>{
        const div = document.createElement('div');

        div.textContent= each_array_element.text;
        div.style.gridColumn=each_array_element.column;
        div.style.gridRow=each_array_element.row;
        if(each_array_element.text==='display')
        {
            div.id='display';
        }
        else{
        div.addEventListener('click',event=>{
            const d =document.getElementById('display');
            d.textContent=event.target.textContent;
        });

    }
        zmienna.appendChild(div);
        console.log('div');});
document.body.appendChild(zmienna);
}

window.addEventListener("DOMContentLoaded",init1);
 /*var s="";
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
                c=c+s;
                console.log("Suma",c);
                s=s.toString();

                s="";
                z=8;
                break;
    case '12': // przycisk odejmowania -

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
*/


