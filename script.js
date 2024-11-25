var cars=document.getElementById('cars')
let a=document.getElementById('select');
var s1=document.getElementById('s1');
var t2=document.getElementById('t2');
let container=document.getElementById('container');
let score=document.getElementById('score');
let buttons=document.getElementById('buttons');
var cy=document.getElementById('count');
score.style.display="none";
container.style.display="none";
buttons.style.display="none";
cars.style.display="none";
a.style.display="none";
var web = document.getElementById("web");
function aoc()
{ let m=document.getElementById('logo');
  m.style.display="none";
cars.style.display="block";

a.style.display="block";
 
 }
setTimeout(aoc,2000);
function rof()
{ s1.disabled=true;
 }
function credit()
{ let select=document.getElementById('select');
let cars=document.getElementById('cars');
var t2=document.getElementById('t2');
 let container=document.getElementById('container');
let score=document.getElementById('score');
let buttons=document.getElementById('buttons');
t2.style.display="flex"; 
  t2.innerHTML="Total Rounds is:"+cars.options[cars.selectedIndex].text;
cars.style.display="none";
  select.style.display="none";
 score.style.display="block";

container.style.display="block";

buttons.style.display="flex";


  }

var cp=0;
var cc=0;
var cou=0;
function count()
{ let p=document.getElementById('ps');
 let com=document.getElementById('cs');
 var cars=document.getElementById('cars');
let container=document.getElementById('container');
let score=document.getElementById('score');
let buttons=document.getElementById('buttons');
 let boy=document.getElementById('boy');
 let t2=document.getElementById('t2');
  let color=["hotpink","aqua","orange","skyblue"];
 let colour=color[Math.floor(Math.random()*4)];
 if(k=="Rock" && co=="Scissor")
    { cp+=2;
     }
 if(k=="Paper" && co=="Rock")
    { cp+=2;
     }
 if(k=="Scissor" && co=="Paper")
    { cp+=2;
     }
 if(k=="Scissor" && co=="Rock")
    { cc+=2;
     }
 if(k=="Rock" && co=="Paper")
    { cc+=2;
     }
 if(k=="Paper" && co=="Scissor")
    { cc+=2;
     }
 if(k=="Rock" && co=="Rock")
   { cp+=1;
     cc+=1;
    }
 if(k=="Scissor" && co=="Scissor")
   { cp+=1;
     cc+=1;
    }
 if(k=="Paper" && co=="Paper")
   { cp+=1;
     cc+=1;
    }
 p.innerHTML=cp;
 com.innerHTML=cc;
cou++;
  cy.style.display="flex";
 cy.innerHTML="Round Number is:"+cou;

 if(cou==cars.options[cars.selectedIndex].text)
   { 
  cy.style.display="none";
score.style.display="none";
container.style.display="none";
buttons.style.display="none";
   t2.style.display="none";
   boy.style.display="flex";
    web.style.display="block";
     boy.style.backgroundColor=colour;
   if(cp>cc)
     { boy.innerHTML="You Win"+"<br>"+"You:-  "+cp+"<br>"+"Computer:- "+cc;
} 
     if(cp<cc)

     { boy.innerHTML="Computer Win"+"<br>"+"You:-  "+cp+"<br>"+"Computer:- "+cc;

} 
     if(cp==cc)

     { boy.innerHTML="Match Draw"+"<br>"+"You:-  "+cp+"<br>"+"Computer:- "+cc;

} 
 }
 }
var k,co;

function scores(val)

{ var m=document.getElementById('player');

  var  r=document.getElementById('comp');

 var value=["Rock","Paper","Scissor"];

 k=value[val-1];

  m.innerHTML="<img src='"+k+".jpg' id='gao'>";

 co=value[Math.floor(Math.random()*3)];

  r.innerHTML="<img src='"+co+".jpg' id='gao'>";

 count();

 }
