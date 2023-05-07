
var elemento = document.getElementById("lienzo");
lienzo = elemento.getContext("2d");
lienzo.lineWidth = 5;
lienzo.lineCap = "round";
lienzo.beginPath();
lienzo.moveTo(50,50);
lienzo.bezierCurveTo(50, 100, 150, 100, 150, 50);
lienzo.stroke();

var elemento = document.getElementById("lienzo1");
lienzo1=elemento.getContext("2d");
lienzo1.lineWidth = 5;
lienzo1.lineCap = "round"
lienzo1.beginPath();
lienzo1.moveTo(50,50);
lienzo1.bezierCurveTo(75, 100, 125, 100, 150, 50);
lienzo1.stroke();

var canvas = document.getElementById("lienzo2");
lienzo2 = canvas.getContext("2d");
lienzo2.lineWidth = 5;
lienzo2.lineCap = "round"
lienzo2.beginPath();
lienzo2.moveTo(150,300);
lienzo2.quadraticCurveTo(300, 150, 450, 300);
lienzo2.stroke();

var canvas = document.getElementById("lienzo3");
lienzo3 = canvas.getContext("2d");
lienzo3.lineWidth = 5;
lienzo3.lineCap = "round"
lienzo3.beginPath();
lienzo3.moveTo(50,200);
lienzo3.bezierCurveTo(200, 50, 350, 200, 500, 50);
lienzo3.stroke();

var canvas = document.getElementById("lienzo4");
lienzo4 = canvas.getContext("2d");
lienzo4.lineWidth = 5;
lienzo4.beginPath();
lienzo4.moveTo(50,50);
lienzo4.bezierCurveTo(75, 75, 125, 75, 150, 50);
lienzo4.bezierCurveTo(125,25,75,25,50,50)
lienzo4.stroke();

var canvas = document.getElementById("lienzo5");
lienzo5 = canvas.getContext("2d");
var x0 = 50;
var y0 = 100;
var x1 = 150;
var y1 = 100;
var x2 = 200;
var y2 = 250;
lienzo5.beginPath();
lienzo5.moveTo(x0,y0);
lienzo5.arcTo(x1,y1,x2,y2,150);
lienzo5.stroke();
lienzo5.beginPath();
lienzo5.strokeStyle = "red"
lienzo5.moveTo(x0, y0);
lienzo5.lineTo(x1, y1);
lienzo5.lineTo(x2, y2);
lienzo5.stroke();