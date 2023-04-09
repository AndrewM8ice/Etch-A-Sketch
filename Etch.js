const container = document.querySelector('#container');

//loop inside of a loop to create the 16x16 grid
//after inside loop will need to start on a new line

//need each div to have different id's so they can each change colour
for(i = 1; i <= 16; i++){
   
    for(j = 1; j <= 16; j++){
        const div = document.createElement('div');
        div.classList.add(i.toString() + "div" + j.toString());
        console.log(div);
    }
}


