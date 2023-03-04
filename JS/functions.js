
const h = document.querySelector("#hCnv");
const h2d = h.getContext("2d");

h2d.fillStyle = "rgb(230,230,230)";
h2d.fillRect(5,5,290,140);

let gradient = h2d.createLinearGradient(1, 4, h.width, 2);
gradient.addColorStop("0", "RGB(150, 170, 0)");
gradient.addColorStop("0.4", "darkgreen");
gradient.addColorStop("1.0", "RGB(0, 140, 160)");
h2d.font = "60px Arial";
h2d.strokeStyle = gradient;
h2d.strokeText("CANVAS !", 10, 90);

//Ex.1
const s = document.querySelector("#square");
const s2d = s.getContext("2d");

s2d.fillRect(0,0,300,150);    

s2d.beginPath();
s2d.lineWidth = "5";
s2d.strokeStyle = "white";
s2d.rect(70, 5, 160, 140);  
s2d.stroke();

s2d.fillStyle = "white";
s2d.fillRect(100, 30, 100, 90);

s2d.beginPath();
s2d.lineWidth = "5";
s2d.strokeStyle = "black";
s2d.rect(110, 40, 80, 70);  
s2d.stroke();

//Ex.2
const c = document.querySelector("#circle");
const c2d = c.getContext("2d");

c2d.beginPath();
c2d.lineWidth = "5";
c2d.strokeStyle = "red";
c2d.arc(150, 75, 65, 0, 2 * Math.PI);
c2d.stroke();

let grd = c2d.createRadialGradient(75,50,5,90,60,100);
grd.addColorStop(0,"red"); 
grd.addColorStop(1,"white");
c2d.fillStyle = grd;
c2d.beginPath();
c2d.arc(150, 75, 64, 0, 2 * Math.PI);
c2d.fill();

//Ex.3
const i = document.querySelector("#intersect");
const i2d = i.getContext("2d");

i2d.beginPath();
i2d.rect(35, 20, 150, 80);
i2d.fillStyle = "rgb(0, 170, 255)";
i2d.fill();

i2d.beginPath();
i2d.rect(115, 50, 150, 80);
i2d.fillStyle = "rgba(255, 255, 0, 0.5)";
i2d.fill();

//Ex.4
const t = document.querySelector("#triangle");
const t2d = t.getContext("2d");

t2d.fillRect(0,0,300,150); 

t2d.fillStyle = "white";
t2d.fillRect(90, 30, 120, 90);

t2d.fillStyle = "black";
t2d.beginPath();
t2d.moveTo(100, 40);
t2d.lineTo(100, 110);
t2d.lineTo(200, 110);
t2d.fill();

//Ex.5
const e = document.querySelector("#smile");
const e2d = e.getContext("2d");

e2d.fillStyle = "grey";
e2d.fillRect(0,0,300,150); 

e2d.fillStyle = "white";
e2d.fillRect(50, 20, 200, 110);

e2d.beginPath();
e2d.lineWidth = "2";
e2d.arc(150, 75, 50, 0, Math.PI * 2, true); // Outer circle
e2d.moveTo(185, 75);
e2d.arc(150, 75, 35, 0, Math.PI, false);    // Mouth (clockwise)
e2d.moveTo(140, 65);
e2d.arc(135, 65, 5, 0, Math.PI * 2, true);  // Left eye
e2d.moveTo(130, 65);
e2d.arc(165, 65, 5, 0, Math.PI * 2, true);  // Right eye
e2d.stroke();

//Ex.6
const a = document.querySelector("#rain");
const r2d = a.getContext("2d");

r2d.fillStyle = "rgb(0,0,140)";
r2d.fillRect(0, 0, 300, 150); 

r2d.fillStyle = "rgb(215,235,255)";
r2d.fillRect(50, 5, 200, 140);

const radius = 10;
const startAngle = 0;
const endAngle = Math.PI * 2;
for(let i=0; i<6; i++)
{
    r2d.beginPath();

    let x = 60 + i*36;
    let y = 15 + i*24;

    r2d.lineWidth = "2";
    r2d.strokeStyle = "blue";
    r2d.arc(x, y, radius, startAngle, endAngle);
    r2d.stroke();

    let r = 255 - i*51;    
    let g = 255 - i*51;
    let b = 255 - i*23;
 
    r2d.fillStyle = `rgb(${r},${g},${b})`; 
    r2d.fill();
}