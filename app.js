let boxes=document.querySelectorAll(".box");
let btn=document.getElementById("#reset");
let turno=true;
const  patterns=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];
boxes.forEach((box)=>{
   box.addEventListener("click",()=>{
   if(turno){
    box.innerText="O"
    turno=false;
   }
   else{
    box.innerText="X";
    turno=true;
   }
   box.disabled=true;
checkWinner();
   });
});
const checkWinner=()=>{
    for( let pattern of patterns){
let pos1Val=boxes[pattern[0]].innerText;
   let pos2Val=boxes[pattern[1]].innerText;
   let pos3Val=boxes[pattern[2]].innerText
}
}