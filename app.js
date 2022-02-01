const gridContainer = document.querySelector('.grid-container');
gridContainer.style = 'border: 2px solid purple; height: 50vh; width: 50vh; display: flex;';

let size = 10;

function changeGrid(){
    // Create grid
    for(let i = 0; i < size; i++){
        let column = document.createElement('div');
        column.style = 'display: flex; flex-direction: column; flex: 1';
        for(let j = 0; j < size; j++){
            let row = document.createElement('div');
            row.id = `grid`;
            //row.innerHTML = `${i},${j}`;
            row.style = 'display: inline; border: 1px solid black; flex: 1';

            column.appendChild(row);
        }
        gridContainer.appendChild(column);

    }

    // Listen for mouseover event
    const grid = document.querySelectorAll('#grid');
    grid.forEach((square) => {
        square.addEventListener('mouseover', function(e){
            e.target.style.background = 'yellow';
        });
    });
}

function resetGrid(){
    while(gridContainer.firstChild){
        gridContainer.firstChild.remove();
    }
}

changeGrid();

const btnContainer = document.querySelector('.btn-container');
const changeSizeBtn = document.createElement('button');
changeSizeBtn.classList.add('sizebtn');
changeSizeBtn.innerHTML = 'Change Grid Size';
btnContainer.appendChild(changeSizeBtn);

// Change size of grid
changeSizeBtn.addEventListener('click', () => {
    size = prompt("Enter size of grid");
    resetGrid();
    changeGrid();
})

