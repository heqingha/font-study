// window.setTimeout(draw, 3000);
draw();

function draw() {
	var canvas = document.getElementById('tutorial');
	if(canvas.getContext) {
		var ctx = canvas.getContext('2d');
		// console.log(ctx, 'ctx');
		ctx.fillStyle = 'rgb(200, 0, 0)';
		// ctx.fillRect(10, 10, 55, 50);
		// ctx.fillStyle = 'rgb(255, 0, 0)';
		// ctx.strokeRect(20, 20, 55, 50);

		// ctx.fillStyle= 'rgba(0, 0, 200, 0.5)';
		// ctx.fillRect(30, 30, 55, 50);
		// ctx.clearRect(15, 15, 55, 50);
		
	    // ctx.fillRect(25,25,100,100);  // 绘制一个填充的矩形
	    // ctx.clearRect(45,45,60,60);	  // 清除指定矩形区域
	    // ctx.strokeRect(50,50,50,50);  // 绘制矩形边框


	    // 绘制三角形
	    // ctx.beginPath();
	    // ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
	    // ctx.moveTo(65, 0);  // 起始位置
	    // ctx.lineTo(0, 65);	// 中间点位置 
	    // ctx.lineTo(130, 65);// 终点位置
	    // ctx.lineTo(65,0);
	    // ctx.fill(); 		// 填充图形
	    // ctx.closePath();
	    // ctx.stroke();
	    
	    // 移动笔触
	    // ctx.beginPath();
	    // ctx.moveTo(50, 50);
	    // ctx.lineTo(200, 50);
	    // ctx.moveTo(50, 200);
	    // ctx.lineTo(200,200);
	    // ctx.stroke();


	    // 绘制笑脸
	 // 	ctx.beginPath();
	 // 	ctx.arc(75,75,50,0,Math.PI*2,true);  // 圆的中心
	 // 	ctx.moveTo(110,75);
		// ctx.arc(75,75,35,0,Math.PI,false);
		// ctx.moveTo(65,65);
		// ctx.arc(60,65,5,0,Math.PI*2,true);
	 // 	ctx.moveTo(95,65);
	 // 	ctx.arc(90,65,5,0,Math.PI*2,true);
	 //    ctx.closePath();  // ???
		// ctx.stroke();
		


		// 绘制描边三角形
		// ctx.beginPath();
		// ctx.moveTo(65, 35);
		// ctx.lineTo(25, 95);
		// ctx.lineTo(125, 105);
		// ctx.closePath();
		// ctx.stroke();

		// 绘制填充三角形
		// ctx.beginPath();
		// ctx.moveTo(65, 35);
		// ctx.lineTo(25, 95);
		// ctx.lineTo(125, 125);
		// ctx.fillStyle = 'rgba(0, 255, 0, 0.3)';
		// ctx.fill();
		
		
	    // for(var i=0;i<4;i++){
	    //   	for(var j=0;j<3;j++){
	    //      ctx.beginPath();
		   //   var x              = 25+j*50;               // x 坐标值
		   //   var y              = 25+i*50;               // y 坐标值
		   //   var radius         = 20;                    // 圆弧半径
		   //   var startAngle     = 0;                     // 开始点
		   //   var endAngle       = Math.PI+(Math.PI*j)/2; // 结束点
		   //   var anticlockwise  = i%2==0 ? false : true; // 顺时针或逆时针

		   //   ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

		   //   if (i>1){
		   //     	ctx.fill();
		   //   } else {
		   //     	ctx.stroke();
		   //   }
	    //   	}
	    // } 
	    
	    // 二次贝尔赛曲线
	    // ctx.beginPath();
	    // ctx.moveTo(75, 25);
	    // ctx.quadraticCurveTo(25,25,25,62.5);
	    // ctx.quadraticCurveTo(25,100,50,100);
	    // ctx.quadraticCurveTo(50,120,30,125);
	    // ctx.quadraticCurveTo(60,120,65,100);
	    // ctx.quadraticCurveTo(125,100,125,62.5);
	    // ctx.quadraticCurveTo(125,25,75,25);
	    // ctx.stroke();
	
	    //三次贝塞尔曲线
	    // ctx.beginPath();
	    // ctx.fillStyle = 'rgba(255, 0, 0, 0.4)';
	    // ctx.moveTo(75,40);
	    // ctx.bezierCurveTo(75,37,70,25,50,25);
	    // ctx.bezierCurveTo(20,25,20,62.5,20,62.5);
	    // ctx.bezierCurveTo(20,80,40,102,75,120);
	    // ctx.bezierCurveTo(110,102,130,80,130,62.5);
	    // ctx.bezierCurveTo(130,62.5,130,25,100,25);
	    // ctx.bezierCurveTo(85,25,75,37,75,40);
	    // ctx.fill();

	    // 矩形
	    // ctx.rect(0, 0, 100, 80);
	    // ctx.fillStyle = 'rgb(0, 0, 255)';
	    // ctx.fill();
		

		roundedRect(ctx,12,12,150,150,15);
		roundedRect(ctx,19,19,150,150,9);
	    roundedRect(ctx,53,53,49,33,10);
	    roundedRect(ctx,53,119,49,16,6);
	    roundedRect(ctx,135,53,49,33,10);
	    roundedRect(ctx,135,119,25,49,10);

	    ctx.beginPath();
	    ctx.arc(37,37,13,Math.PI/7,-Math.PI/7,false);
	    ctx.lineTo(31,37);
	    // ctx.closePath();
	    // ctx.stroke();
	    ctx.fill();

        for(var i=0;i<8;i++){
	      	ctx.fillRect(51+i*16,35,4,4);
	    }

	    for(i=0;i<6;i++){
      		ctx.fillRect(115,51+i*16,4,4);
    	}

	    for(i=0;i<8;i++){
	      	ctx.fillRect(51+i*16,99,4,4);
	    }

        ctx.beginPath();
	    ctx.moveTo(83,116);
	    ctx.lineTo(83,102);
	    ctx.bezierCurveTo(83,94,89,88,97,88);
	    ctx.bezierCurveTo(105,88,111,94,111,102);
	    ctx.lineTo(111,116);
	    ctx.lineTo(106.333,111.333);
	    ctx.lineTo(101.666,116);
	    ctx.lineTo(97,111.333);
	    ctx.lineTo(92.333,116);
	    ctx.lineTo(87.666,111.333);
	    ctx.lineTo(83,116);
	    ctx.fill();

	    ctx.fillStyle = "white";
	    ctx.beginPath();
	    ctx.moveTo(91,96);
	    ctx.bezierCurveTo(88,96,87,99,87,101);
	    ctx.bezierCurveTo(87,103,88,106,91,106);
	    ctx.bezierCurveTo(94,106,95,103,95,101);
	    ctx.bezierCurveTo(95,99,94,96,91,96);
	    ctx.moveTo(103,96);
	    ctx.bezierCurveTo(100,96,99,99,99,101);
	    ctx.bezierCurveTo(99,103,100,106,103,106);
	    ctx.bezierCurveTo(106,106,107,103,107,101);
	    ctx.bezierCurveTo(107,99,106,96,103,96);
	    ctx.fill();

        ctx.fillStyle = "black";
	    ctx.beginPath();
	    ctx.arc(101,102,2,0,Math.PI*2,true);
	    ctx.fill();    

	    ctx.beginPath();
	    ctx.arc(92,102,2,0,Math.PI*2,true);
	    ctx.fill();
	 

	 // var rectangle = new Path2D();
	 // rectangle.rect(10, 10, 80, 80);

	 // var circle = new Path2D();
	 // circle.moveTo(75, 75);
	 // circle.arc(75, 75, 50, 0, Math.PI, false);
	 // ctx.stroke(rectangle);
	 // ctx.fill(circle);
	 
	// for (var i=0;i<6;i++){
	//     for (var j=0;j<6;j++){
	//       	ctx.fillStyle = 'rgb(' + Math.floor(255-42.5*i) + ',' + Math.floor(255-42.5*j) + ',0)';
	//       	ctx.fillRect(j*25,i*25,25,25);
	//     }
	// }
	 	// for (var i=0;i<6;i++){
	  //     	for (var j=0;j<6;j++){
		 //        ctx.strokeStyle = 'rgb(0,' + Math.floor(255-42.5*i) + ',' + 
		 //                         Math.floor(255-42.5*j) + ')';
		 //        ctx.beginPath();
		 //        ctx.arc(12.5+j*25,12.5+i*25,10,0,Math.PI*2,true);
		 //        ctx.stroke();
	  //     	}
	  //   }
	  // 画背景
	//   ctx.fillStyle = '#FD0';
	//   ctx.fillRect(0,0,75,75);
	//   ctx.fillStyle = '#6C0';
	//   ctx.fillRect(75,0,75,75);
	//   ctx.fillStyle = '#09F';
	//   ctx.fillRect(0,75,75,75);
	//   ctx.fillStyle = '#F30';
	//   ctx.fillRect(75,75,75,75);
	//   ctx.fillStyle = '#FFF';

	//   // 设置透明度值
	//   ctx.globalAlpha = 0.2;

	//   // 画半透明圆
	//   for (var i=0;i<7;i++){
	//       ctx.beginPath();
	//       ctx.arc(75,75,10+10*i,0,Math.PI*2,true);
	//       ctx.fill();
	//   }   
	// }
	
	// 画背景
	// ctx.fillStyle = 'rgb(255,221,0)';
	// ctx.fillRect(0,0,150,37.5);
	// ctx.fillStyle = 'rgb(102,204,0)';
	// ctx.fillRect(0,37.5,150,37.5);
	// ctx.fillStyle = 'rgb(0,153,255)';
	// ctx.fillRect(0,75,150,37.5);
	// ctx.fillStyle = 'rgb(255,51,0)';
	// ctx.fillRect(0,112.5,150,37.5);

	// // 画半透明矩形
	// for (var i=0;i<10;i++){
	//     ctx.fillStyle = 'rgba(255,255,255,'+(i+1)/10+')';
	//     for (var j=0;j<4;j++){
	//       ctx.fillRect(5+i*14,5+j*37.5,14,27.5)
	//     }
	// }
	

		// var lineCap = ['butt','round','square'];

		// // 创建路径
		// ctx.strokeStyle = '#09f';
		// ctx.beginPath();
		// ctx.moveTo(10,10);
		// ctx.lineTo(140,10);
		// ctx.moveTo(10,140);
		// ctx.lineTo(140,140);
		// ctx.stroke();

		// // 画线条
		// ctx.strokeStyle = 'black';
		// for (var i=0;i<lineCap.length;i++){
		//     ctx.lineWidth = 15;
		//     ctx.lineCap = lineCap[i];
		//     ctx.beginPath();
		//     ctx.moveTo(25+i*50,10);
		//     ctx.lineTo(25+i*50,140);
		//     ctx.stroke();
		// }
		

		// //  线性渐变
		// var lineargradient = ctx.createLinearGradient(0,0,150,150);
		// lineargradient.addColorStop(0,'#f00');
		// lineargradient.addColorStop(1,'#000');

		// ctx.fillStyle = lineargradient;
		// ctx.fillRect(10, 10, 150, 150);

		// // 圆形渐变
		// var createRadialGradient = ctx.createRadialGradient(0,0,50,0,0,100);
		// createRadialGradient.addColorStop(0,'#f00');
		// createRadialGradient.addColorStop(1,'#000');

		// ctx.fillStyle = createRadialGradient;
		// ctx.fillRect(10, 10, 150, 150);

		// var createRadialGradient1 = ctx.createRadialGradient(20,20,50,50,50,100);
		// createRadialGradient1.addColorStop(0, '#0f0');
		// createRadialGradient1.addColorStop(0.8, '#00f');
		// createRadialGradient1.addColorStop(1, '#f00');
		// ctx.fillStyle = createRadialGradient1;
		// ctx.fillRect(50,50,80,80);

	 //    // Create gradients
		// var lingrad = ctx.createLinearGradient(0,0,0,150);
		// lingrad.addColorStop(0, '#00ABEB');
		// lingrad.addColorStop(0.5, '#fff');
		// lingrad.addColorStop(0.5, '#26C000');
		// lingrad.addColorStop(1, '#fff');

		// var lingrad2 = ctx.createLinearGradient(0,50,0,100);
		// lingrad2.addColorStop(0.5, '#000');
		// lingrad2.addColorStop(1, 'rgba(255,0,0,1)');

		// // assign gradients to fill and stroke styles
		// ctx.fillStyle = lingrad;
		// ctx.strokeStyle = lingrad2;
		  
		// // draw shapes
		// ctx.fillRect(0,0,150,150);
		// ctx.strokeRect(50,50,50,50);
		
		// ctx.shadowOffsetX = 2;
		// ctx.shadowOffsetY = 2;
		// ctx.shadowBlur = 2;
		// ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
		 
		// ctx.font = "20px Times New Roman";
		// ctx.fillStyle = "Black";
		// ctx.fillText("Sample String", 5, 30);

	}
}

function roundedRect(ctx,x,y,width,height,radius){
  ctx.beginPath();
  ctx.moveTo(x,y+radius);
  ctx.lineTo(x,y+height-radius);
  ctx.quadraticCurveTo(x,y+height,x+radius,y+height);
  ctx.lineTo(x+width-radius,y+height);
  ctx.quadraticCurveTo(x+width,y+height,x+width,y+height-radius);
  ctx.lineTo(x+width,y+radius);
  ctx.quadraticCurveTo(x+width,y,x+width-radius,y);
  ctx.lineTo(x+radius,y);
  ctx.quadraticCurveTo(x,y,x,y+radius);
  ctx.stroke();
}