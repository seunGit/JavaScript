// canvas 요소를 가져와서 ctx에 2D 그래픽 컨텍스트를 설정합니다.
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// 캔버스의 높이와 너비를 설정합니다.
canvas.height = 800;
canvas.width = 800;

// 첫 번째 세로줄에 세 개의 사각형을 그립니다.
ctx.rect(50, 50, 100, 100); // (x, y, width, height)
ctx.rect(150, 150, 100, 100);
ctx.rect(250, 250, 100, 100);

// 현재 그리기 경로의 사각형들을 채웁니다.
ctx.fill();

// 새로운 경로를 시작해서 두 개의 사각형을 그립니다.
ctx.beginPath();
ctx.rect(350, 350, 100, 100);
ctx.rect(450, 450, 100, 100);

// 사각형들의 색상을 빨간색으로 설정하고, 현재 그리기 경로의 사각형들을 채웁니다.
ctx.fillStyle = "red";
ctx.fill();

//---------------------------------------------------------//

// 시작점을 (50, 50)으로 이동합니다.
ctx.moveTo(50, 50);

// 현재 위치에서 (150, 50)까지 선을 그립니다.
ctx.lineTo(150, 50);

// (150, 50)에서 (150, 150)까지 선을 그립니다.
ctx.lineTo(150, 150);

// (150, 150)에서 (50, 150)까지 선을 그립니다.
ctx.lineTo(50, 150);

// (50, 150)에서 시작점 (50, 50)까지 선을 그려 도형을 완성합니다.
ctx.lineTo(50, 50);

// 선을 그려 도형의 테두리를 표시합니다.
ctx.stroke();

// 도형을 채워 색상을 표시합니다.
ctx.fill();

//---------------------------------------------------------//

// canvas 요소를 가져와서 ctx에 2D 그래픽 컨텍스트를 설정합니다.
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

// 캔버스의 높이와 너비를 설정합니다.
canvas.height = 800;
canvas.width = 800;

// 집 기둥 
ctx.fillRect(200, 200, 50, 200);
ctx.fillRect(400, 200, 50, 200);
// 집 문
ctx.lineWidth = 2;
ctx.strokeRect(300, 300, 50, 100);
// 천장
ctx.fillRect(200, 200, 200, 20);

// 지붕
ctx.moveTo(200, 200);
ctx.lineTo(325, 100)
ctx.lineTo(450, 200)
ctx.fill();

// drawing emergency exit

// canvas
canvas.width = 800;
canvas.height = 800;
canvas.style.backgroundColor = "#00AF6B";

// background
ctx.fillStyle = "white";
ctx.fillRect(150, 50, 500, 700);

// head
ctx.beginPath();
ctx.arc(300, 150, 60, 0, 2 * Math.PI);
ctx.fillStyle = "#00AF6B";
ctx.fill();

// body
ctx.moveTo(150, 350);
ctx.lineTo(200, 350);
ctx.arcTo(310, 240, 540, 240, 70);
ctx.arcTo(540, 240, 590, 380, 70);
ctx.arcTo(590, 380, 530, 380, 30);
ctx.arcTo(530, 380, 500, 300, 30);
ctx.lineTo(500, 300);
ctx.lineTo(430, 300);
ctx.lineTo(480, 450);
ctx.lineTo(490, 550);
ctx.arcTo(650, 550, 640, 590, 50);
ctx.lineTo(430, 610);
ctx.lineTo(420, 470);
ctx.arcTo(300, 700, 240, 700, 40);
ctx.lineTo(240, 700);
ctx.lineTo(350, 450);
ctx.lineTo(310, 320);
ctx.arcTo(220, 410, 150, 410, 40);
ctx.lineTo(150, 410);
ctx.fill();