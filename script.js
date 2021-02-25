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
        }
    }
    markUp()
}
createGrid(16);

//grid unit event listeners

function markUp() {
    const gridUnits = [...document.querySelectorAll("div.grid-unit")]
    gridUnits.forEach(unit => unit.addEventListener('mouseover', fill))
    console.log(gridUnits)
}

//paint units
function fill(e){
    const unit = e.target;
    unit.style.backgroundColor = "grey"        
}

//reset grid
const reset = () => {
    [...document.querySelectorAll("div.grid-unit")].forEach(unit => unit.style.backgroundColor = "");
    const size = prompt("What size? (N^2)")
    gridContainer.innerHTML = "";
    createGrid(size);
}