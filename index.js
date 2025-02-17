function rollDice(){
    const numOfDices = document.getElementById("numOfDices").value;
    const res1 = document.getElementById("res1");
    const res2 = document.getElementById("res2");

    const values = [];
    const images = [];
for(let i = 0; i < numOfDices; i++){
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src="dice_images/${value}.png">`);   
}
//console.log(values);
res1.textContent = `numbers are : ${values.join(`, `)}`;
res2.innerHTML = images.join(``);
}