function changeGrid(){
    // Create grid
    for(let i = 0; i < size; i++){
        let column = document.createElement('div');
        column.style = 'display: flex; flex-direction: column; flex: 1';
        for(let j = 0; j < size; j++){
            let row = document.createElement('div');
            row.id = `grid`;
            row.style = 'display: flex; background-color: white; flex: 1';

            column.appendChild(row);
        }
        gridContainer.appendChild(column);

    }

    // Listen for mouseover event
    const grid = document.querySelectorAll('#grid');
    grid.forEach((square) => {
        square.addEventListener('mouseover', function(e){
            e.target.style.background = 'black';
        });
    });

}

function resetGrid(){
    while(gridContainer.firstChild){
        gridContainer.firstChild.remove();
    }
}

const gridContainer = document.querySelector('.grid-container');
gridContainer.style = 'border: 10px solid white; box-shadow: 0 0 10px yellow; border-style: ridge; height: 50vh; width: 50vh; display: flex;';
let size = 10;

const textSize = document.querySelector('.text-size');
textSize.innerHTML = `${size} x ${size}`;

// Getting the button to change the size of the grid.
const sizeBtn = document.querySelector('.size-btn');

// Change size of grid
sizeBtn.addEventListener('click', () => {
    let input = prompt("Enter size of grid, limited to size (1 - 100)");
    if(input > 0 && input <= 100){
        size = input;
        textSize.innerHTML = `${size} x ${size}`;
        resetGrid();
        changeGrid();        
    }

})

changeGrid();

