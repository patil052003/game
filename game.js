let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newgame=document.querySelector("#new");
let msg1=document.querySelector(".ms");
let msg2=document.querySelector("#msg");
let turnO = true;

const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "o";
            turnO = false;
        } else {
            box.innerText = "x";
            turnO = true;
        }
        box.disabled = true;
        checkWin();
    });
});

resetbtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    turnO = true;
});

// const showwinner=(winner)=>{

//     msg.innerText='winner is ${winner}';
//     ms.classlist.remove("hide");

// };
 

function checkWin() {
    // Here you can implement the logic to check the win condition
    // by iterating over winpattern and checking the innerText of boxes
    const boxTexts = Array.from(boxes).map(box => box.innerText);
    winpattern.forEach(pattern => {
        const [a, b, c] = pattern;
        if (boxTexts[a] && boxTexts[a] === boxTexts[b] && boxTexts[a] === boxTexts[c]) {
           console.log("winner is ",a);
            // showwinner(a);
            boxes.forEach(box => box.disabled = true);
            alert("congrats !tumhi jinkalat!!");
     }
    //  showwinner(a);
    });
}

// const checkWin=()=>{
//   

//     
//     
//        for (let pattern of winpattern){
        
//         const []=pattern;
//         let pos1val=boxes[pattren[0]].innerText;
//         let pos2val=boxes[pattren[1]].innerText;
//         let pos3val=boxes[pattren[2]].innerText;

//         if(pos1val!=""&&pos2val!=""&&pos3val!=""){
//             if(pos1val==pos2val&&pos2val==pos3val){
//                 console.log("winner is",pos1val);
//                 boxes.forEach(box => box.disabled = true);
//                 showwinner(pos1val);
//             }
           
//         }
//     }
// }

newgame.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    turnO = true;
});