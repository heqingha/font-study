# Canvas

1. <canvas>是一个可以使用脚本(通常为JavaScript)在其中绘制图形的 HTML 元素.它可以用于制作照片集或者制作简单(也不是那么简单)的动画.
Canvas 的默认大小为300像素×150像素（宽×高，像素的单位是px）
2. 设置一个 canvas 2D 上下文;只有两个属性width, height;如果没有设置这两个属性，会使用默认的width： 300px height: 150px;
3. canvas起初是空白的,首先脚本需要找到渲染上下文，然后在它的上面绘制。<canvas> 元素有一个叫做getContext()的方法，这个方法是用来获得渲染上下文和它的绘画功能。getContext()只有一个参数，上下文的格式。
4. canvas提供了三种方法绘制矩形：
4.1 fillRect(x, y, width, height) 绘制一个填充的矩形
4.2 strokeRect(x, y, width, height) 绘制一个矩形的边框
4.3 clearRect(x, y,width,height)清除指定矩形区域，让清除部分完全透明。
5. 绘制路径：图形的基本元素是路径。路径是通过不同颜色和宽度的线段或曲线相连形成的不同形状的点的集合。一个路径，甚至一个子路径，都是闭合的。使用路径绘制图形需要一些额外的步骤。
5.1 创建路径起始点
5.2 使用画图命令去画出路径
5.3 把路径封闭
5.4 一旦路径生成，你就能通过描边或填充路径区域来渲染图形
6. 绘制图形命令
6.1 beginPath()
    新建一条路径，生成之后，图形绘制命令被指向到路径上生成路径
6.2 closePath()
    闭合路径之后图形绘制命令又重新指向到上下文中。
6.3 stroke()
    通过线条来绘制图形轮廓。
6.4 fill()
    通过填充路径的内容区域生成实心的图形。
7. 当你调用fill()函数时，所有没有闭合的形状都会自动闭合，所以你不需    要调用closePath()函数。但是调用stroke()时不会自动闭合。
8. 移动笔触 moveTo();将笔触移动到指定的坐标x以及y上。当canvas初始化或者beginPath()调用后，你通常会使用moveTo()函数设置起点。我们也能够使用moveTo()绘制一些不连续的路径。
9. 线 lineTo(x, y)
    开始点和之前的绘制路径有关，之前路径的结束点就是接下来的开始点
    开始点也可以通过moveTo()函数改变
   绘制一条从当前位置到指定x以及y位置的直线
10. 圆弧 绘制圆弧或者圆，我们使用arc()方法，也可以使用arcTo()；
11. 二次贝塞尔曲线及三次贝塞尔曲线：用来绘制复杂有规律的图形
quadraticCurveTo(cp1x,cp1y,x,y)绘制二次贝塞尔曲线，cp1x,cp1y为一个控制点，x,y为结束点。
bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)绘制三次贝塞尔曲线，cp1x,cp1y为控制点一，cp2x,cp2y为控制点二，x,y为结束点。
12. 矩形 rect(x, y, w, h);
13. Path2D 对象: 为了简化代码和提高性能,用来缓存或记录绘画命令，这    样你将能快速地回顾路径。
    new Path2D();     // 空的Path对象
    new Path2D(path); // 克隆Path对象
    new Path2D(d);    // 从SVG建立Path对象
14. fillStyle 设置图形的填充颜色
    strokeStyle 设置图形轮廓的颜色
15. Transparency 透明度
16. createLinearGradient(x1, y1, x2, y2)
    createLinearGradient 方法接受 4 个参数，表示渐变的起点 (x1,y1)     与终点 (x2,y2)。
    createRadialGradient(x1, y1, r1, x2, y2, r2)
    createRadialGradient 方法接受 6 个参数，前三个定义一个以           (x1,y1) 为原点，半径为 r1 的圆，后三个参数则定义另一个以           (x2,y2) 为原点，半径为 r2 的圆。
    gradient.addColorStop(position, color)
    addColorStop 方法接受 2 个参数，position 参数必须是一个 0.0 与     1.0 之间的数值，表示渐变中颜色所在的相对位置。例如，0.5            表示颜色会出现在正中间。color 参数必须是一个有效的 CSS             颜色值（如 #FFF， rgba(0,0,0,1)，等等）。
17. 阴影 shadows
    shadowOffsetX = float
    shadowOffsetX 和 shadowOffsetY 用来设定阴影在 X 和 Y               轴的延伸距离，它们是不受变换矩阵所影响的。负值表示阴影会往上或     左延伸，正值则表示会往下或右延伸，它们默认都为 0。
    
    shadowOffsetY = float
    shadowOffsetX 和 shadowOffsetY 用来设定阴影在 X 和 Y               轴的延伸距离，它们是不受变换矩阵所影响的。负值表示阴影会往上或     左延伸，正值则表示会往下或右延伸，它们默认都为 0。
    shadowBlur = float
    shadowBlur 用于设定阴影的模糊程度，其数值并不跟像素数量挂钩，也     不受变换矩阵的影响，默认为 0。
    shadowColor = color
    shadowColor 是标准的CSS颜色值，用于设定阴影颜色效果，默认是全透     明的黑色。



