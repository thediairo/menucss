let an=document.querySelector("#ancho");
let va=document.querySelector("#dv");
let al=document.querySelector("#alto");
let bor=document.querySelector("#anchob");
let col=document.querySelector("#color");
let colo=document.querySelector("#colorb");
let tbo=document.querySelector("#selectbor");
an.oninput=()=>{dibjuar()};
al.oninput=()=>{dibjuar()};
bor.oninput=()=>{dibjuar()};
col.oninput=()=>{dibjuar()};
colo.oninput=()=>{dibjuar()};
tbo.oninput=()=>{dibjuar()};
const dibjuar=()=>{
    let a=parseInt(an.value);
    va.style.width= a + "px";
    let alto=parseInt(al.value);
    va.style.height= alto + "px";

    let t=tbo.value;
    va.style.border= t ;

    let bo=parseInt(bor.value);
    va.style.borderWidth= bo + "px";

    

    let co=col.value;
    va.style.backgroundColor= co;

    

    let c=colo.value;
    va.style.borderColor= c ;
    
}