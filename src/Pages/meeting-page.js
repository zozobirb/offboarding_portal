const manBtn = document.querySelector("#man-log");
const manTitle = document.querySelector("#man-title");
const oneBtn = document.querySelector("#one-log");
const oneTitle = document.querySelector("#one-title");

const cancelBtn = document.querySelector(".cancel-btn");
const btnReq = document.querySelector(".btn-request");
const subBtn = document.querySelector("#sub-btn");


cancelBtn.addEventListener('click', (e) => {
    const formC = document.querySelector(".form-container-meeting");
    formC.style.display = "none";
});

btnReq.addEventListener('click', (e) => {
    const formC = document.querySelector(".form-container-meeting");
    formC.style.display = "revert";
});

subBtn.addEventListener('click', (e) => {
    const formC = document.querySelector(".form-container-meeting");
    formC.style.display = "none";
});



manBtn.addEventListener('click', (e) => {

    const man_circles = document.querySelectorAll(".man-cir");

    for (const circle of man_circles) {
       
        const currentFill = window.getComputedStyle(circle).fill;

        if (currentFill === "none" || circle.getAttribute("fill") === "none") {
            circle.style.fill = "green";

            if(circle.id ==="last-cir"){
                manTitle.textContent = "Mandatory Meeting (Complete 8/8)"
            }

            break; 
        }
    }

    
});



oneBtn.addEventListener('click', (e) => {

    const one_circles = document.querySelectorAll(".one-cir");

    for (const circle of one_circles) {
       
        const currentFill = window.getComputedStyle(circle).fill;

        if (currentFill === "none" || circle.getAttribute("fill") === "none") {
            circle.style.fill = "green";

              if(circle.id ==="min-cir"){
                oneTitle.textContent = "1:1 Meeting (Minimum Complete 4/5)"
            }

            if(circle.id ==="last-one-cir"){
                oneTitle.textContent = "1:1 Meeting (Complete 5/5)"
            }

            break; 
        }
    }

    
});