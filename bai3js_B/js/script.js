var BarChart = function(options) {
    this.options = options;
    //color
    var color = options.color;
    //context
    var ct = options.ct;
    //titles
    var title = options.title;
    //data
    var data = options.data;
    var nameData = options.nameData;
    var scale = 0.6;//tỉ l
    //Find max data
    var maxData = findMax(data);
    //position y of main line
    const top = 600;

    //The length of the brick door is below
    var width = data.length * 100 + (data.length - 1) * 50;
    //find position begin draw chart
    var startX = (1000 - width * scale) / 2 + 100; 
    //annotation distance
    var endX = startX + width + 100;
    ct.scale(scale, scale);
    // draw the title
    this.drawTitle = function() {
        ct.font = "40px Arial";
        ct.fillText(title.titleTop, startX + 20 + (width - 800) / 2, 100);
        ct.beginPath();
        ct.fillStyle = "black";
    }
    // Line below
    this.drawMainLine = function() {
        ct.beginPath();
        ct.moveTo(startX, top);
        ct.lineTo(startX + width + 100, top);
        ct.fillStyle = "black";
        ct.font = "30px Arial";
        ct.lineWidth = 1;
        ct.stroke();
        ct.fillText("0", startX - 60, top + 10);
        ct.closePath();
    }
    // line above
    this.drawLines = function() {
        ct.beginPath();
        ct.lineWidth = 1;
        ct.fillStyle = "black";
        var i;
        var moveY = top - 100;
        for (i = 0; i < 4; i++) {
            ct.moveTo(startX, moveY);
            ct.lineTo(startX + width + 100, moveY);
            ct.stroke();
            ct.fillText(maxData / 4 * (i + 1), startX - 60, moveY + 10);
            moveY -= 100;
        }
        ct.closePath();
    }
    //draw columns
    this.drawColumns = function() {
        ct.restore();
        ct.beginPath();
        ct.fillStyle = color;
        var i;
        var moveX = startX;
        var height = 100 * 4 / maxData;
        for (i = 0; i < data.length; i++) {
            ct.fillRect(moveX, top, 100, -(data[i] * height));
            moveX += 150;
        }
        ct.fillRect(moveX + 100 + 30, 200, 100, 30);
        moveX = startX + 40;
        ct.fillStyle = "black";
        ct.font = "30px Arial";
        for (i = 0; i < data.length; i++) {
            ct.fillText(nameData[i], moveX, top + 50);
            moveX += 150;
        }
        ct.closePath();
    }

    this.drawText = function() {
        ct.beginPath();
        ct.fillStyle = "gray";
        ct.font = "italic 30px Arial";
        ct.fillText(title.titleBotom, 700, top + 150);
        ct.fillStyle = "black";
        ct.font = "30px Arial"; 
        ct.fillText("LEVEL", endX + 80, 300);
        ct.fillText("OF", endX + 80, 350);
        ct.fillText("POSITION", endX + 80, 400);
        ct.translate(0, 600);
        ct.rotate(-Math.PI / 2);
        ct.textAlign = "center";
        ct.fillStyle = "gray";
        ct.fillText(title.titleLeftRight, 200, 200);
    }

    this.draw = function() {
        this.drawTitle();
        this.drawMainLine();
        this.drawLines();
        this.drawColumns();
        this.drawText();
    }
}
//Find the highest column
function findMax(data) {
    var i;
    var max = data[0];
    for (i = 1; i < data.length; i++) {
        if (data[i] > max) {
            max = data[i];
        }
    }
    return max;
}