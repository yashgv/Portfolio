
for(var i=100;i>0;i--){
    var boxes= document.createElement('div');
    boxes.className="boxes";
    boxes.id="box"+i;
    document.querySelector(".board").appendChild(boxes);
    var h=document.createElement('h5');
    boxes.appendChild(h);
    h.innerHTML=i;
    h.className="h5";
    if(i%10==1){
        for(let j=i-10;j<i;j++){
            var boxes= document.createElement('div');
            boxes.className="boxes";
            boxes.id="box"+j;
            document.querySelector(".board").appendChild(boxes);
            var h=document.createElement('h5');
            boxes.appendChild(h);
            h.innerHTML=j;
            h.className="h5";
        }
        i-=10;
    }
}

function css(element, style) {
    for (const property in style)
        element.style[property] = style[property];
}

//Initalize
var red=1,yellow=1; //current position

var current=false;
var position=document.querySelector("#box"+((current)?red:yellow));
var goti = document.createElement('div');
position.appendChild(goti);
goti.id="yellow";

current=true;

var position=document.querySelector("#box"+((current)?red:yellow));
var goti = document.createElement('div');
position.appendChild(goti);
goti.id="red";

//Check

function check(pos){
    let temp=pos,flag;
    if(pos==2) pos=18;
    else if(pos==11) pos=31;
    else if(pos==12) pos=28;
    else if(pos==21) pos=15;
    else if(pos==22) pos=40;
    else if(pos==23) pos=6;
    else if(pos==29) pos=15;
    else if(pos==22) pos=40;
    else if(pos==36) pos=62;
    else if(pos==41) pos=59;
    else if(pos==46) pos=55;
    else if(pos==52) pos=38;
    else if(pos==70) pos=94;
    else if(pos==71) pos=34;
    else if(pos==77) pos=84;
    else if(pos==82) pos=59;
    else if(pos==85) pos=97;
    else if(pos==95) pos=78;
    else if(pos==99) pos=79;
    flag=!(temp==pos);
    return {flag,pos};
    
}

function move(Turn){
    document.querySelector("#"+((current)?"red":"yellow")).remove();
    var position=document.querySelector("#box"+Turn);
    var goti = document.createElement('div');
    position.appendChild(goti);
    goti.id=(current)?"red":"yellow";
    // console.log(Turn+((current)?"red":"yellow"));
}
//Roll and Move forward
document.querySelector(".roll-btn").style.background=((current)?"red":"yellow");
function roll(){
    var rolled=Math.floor(Math.random()*6)+1;
    document.querySelector(".dice h1").innerHTML=rolled;
    if(((current)?red:yellow)+rolled>100){
        current=(current)?false:true;
        document.querySelector(".roll-btn").style.background=((current)?"rgb(255, 60, 60)":"rgb(255, 255, 70)");
        return;
    }
    (current)?red+=rolled:yellow+=rolled;
    move((current)?red:yellow);
    let ch=check((current)?red:yellow);
    // console.log(ch.flag);
    if(ch.flag){
        (current)?red=ch.pos:yellow=ch.pos;
        move(ch.pos);
    }

    if(((current)?red:yellow)==100){
        css(document.querySelector(".roll-btn"),{
            "z-index": 0
        })
        css(document.querySelector(".replay-btn"),{
            "z-index": 1
        })
        css(document.querySelector(".winner ."+((current)?"red":"yellow")),{
            "opacity": 1
        })
        return;
    }
    current=(current)?false:true;
    document.querySelector(".roll-btn").style.background=((current)?"rgb(255, 60, 60)":"rgb(255, 255, 70)");
}

function replay(){
    location.reload();
}