
let mem=0;
let clearflag=false;
let op=0;
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
class Calc{
    constructor(){
    console.log("calc got constructed");
    this.clearflag = false;
    this.mem=0;
    this.op=0;
    this.container=document.createElement('div');
    this.container.id='container';
    fields.forEach(each_array_element=>{
        const div = document.createElement('div');

        div.textContent= each_array_element.text;
        div.style.gridColumn=each_array_element.column;
        div.style.gridRow=each_array_element.row;
        if(each_array_element.text==='display')
        {
            div.id='display';
            div.textContent="";
        }
        else{
        div.addEventListener('click',ev => this.handleClick(ev));
        }
            this.container.appendChild(div);
                            })};

    handleClick(ev)
    {
    const disp = document.getElementById('display');
    const key = ev.target.textContent;
    switch (key)
    {
        case 'C':
        disp.textContent='0';
        this.op=0;
        this.clearFlag=false;
        this.mem=0;
        break;
        case '+':
        case '-':
        if(this.op===0)
        this.mem=parseFloat(disp.textContent);
        else{
           this.mem+=this.op * parseFloat(disp.textContent);
        }
        this.op=key==='+' ? 1: -1;
        this.clearflag =true;
        break;
        case '=':
    disp.textContent=this.mem+parseFloat(disp.textContent) *this.op;

        this.op=0;

        break;
    default:
    if(key=='.'&&disp.textContent.includes('.'))
    return;
    if(key=='0'&&disp.textConetent==='0')
    return;
    if((key!=='.'&& disp.textContent=='0')||this.clearflag)
    {
        disp.textContent= key;
        this.clearflag=false;
    }
    else
    disp.textContent+=key;
    break;
    }


    }
    init()
    {
        document.body.appendChild(this.container);
    }

};

const calc =new Calc();
window.addEventListener("DOMContentLoaded",()=> calc.init());



