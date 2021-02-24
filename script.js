//selector
const gridContainer = document.querySelector(".grid-container")


//create GRID   
const createGrid = (size) => {
    for (let i=0; i<size; i++) {
        for (let j=0; j<size; j++) {
            let id = `${i+1}-${j+1}`
            const element = document.createElement("div");
            element.setAttribute("class", "grid-unit")
            element.setAttribute("id", id)
            gridContainer.appendChild(element)
            console.log("hi")
        }
    }
}

const fill = (e) => {
    const unit = e.target;
    unit.style.backgroundColor = "grey"        
}

const gridUnits = [...document.querySelectorAll(".grid-unit")];
console.log(gridUnits)
gridUnits.forEach(unit => unit.addEventListener('mouseover', fill))

createGrid(16);

const reset = () => {
    gridUnits.forEach(unit => unit.style.backgroundColor= "");
    let answer = prompt("How many squares?")
    console.log(answer);
    newSize = parseInt(answer)
    createGrid(newSize);
}


