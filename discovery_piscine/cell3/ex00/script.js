function changeColor(){

    // creamos un array de colores 
    var color = new Array('red','green','blue','yellow', 'black', 'white', 'purple', 'grey', 'pink', 'aquamarine', 'beige');

    // iniciamos una variable que recorra el array y saque los colores de forma aleatoria
	var cambiaColor = Math.round(Math.random()*color.length);

    // cambiamos el color de fondo del body
	document.body.style.backgroundColor = color[cambiaColor];

}
