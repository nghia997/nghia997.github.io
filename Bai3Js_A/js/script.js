var Piechart = function (options) {
    this.options = options;
    // x,y center of Pie
    var centerX = options.centerX;
    var centerY = options.centerY;
    //radius of pie
    var radius = options.radius;
    //color of pie,text
    var color = options.colors;
    var tct = options.tct;
    //data rate
    var myrate = options.data;
    //title
    var title = options.title;
    //circle radius
    var scale = 0.45;
    var Height = 150; //sum of slice draw
    //Edit coordinates
    var fixX = 20; 
    var fixY = -20;

    var check = myrate.success >= myrate.fail ? true : false;
    var lineSuccess = [300, 130, 200, 130]; //position draw line success
    var lineFail = [800, 130, 900, 130]; //position draw line fail

    if (!check) {
        fixX = -fixX;
        var t = lineSuccess;
        lineSuccess = lineFail;
        lineFail = t;
    }
    
    tct.scale(1, scale);

    //Draw success and fail part
    this.drawChart = function(i) {
        if (i < Height) {
            tct.fillStyle = color.botSuccess;
        }
        else {
            tct.fillStyle = color.topSuccess;
        }
        tct.beginPath();
        tct.moveTo(centerX, centerY - i);
        tct.arc(centerX, centerY - i, radius, 0, myrate.success * 2 * Math.PI);
        tct.fill();
        tct.closePath();

        if (i < Height) {
            tct.fillStyle = color.botFail;
        } else {
            tct.fillStyle = color.topFail;
        }
        tct.beginPath();
        tct.moveTo(centerX + fixX, centerY + fixY - i);
        tct.arc(centerX + fixX, centerY + fixY - i, radius, myrate.success * 2 * Math.PI, 0);
        tct.fill();
        tct.closePath();
    }



    //draw Title
        this.drawTitle = function() {
        tct.scale(1, 3);
        tct.restore();
        tct.beginPath();
        tct.font = "20px Arial";
        tct.fillStyle = "blue";
        tct.fillText(title, 380, 450);
        tct.stroke();
    }

    this.drawLineSuccess = function() {
        var moveX, moveY;
        var angle = myrate.success * 100 * 3.6;
        //Find position begin draw line
        if (myrate.success <= 0.25) {
            moveX = centerX + 200 - angle;
            moveY = (centerY - Height + angle) / 3;
        } else if (myrate.success <= 0.5) {
            moveX = centerX + 200 - 100 - angle / 2;
            moveY = (centerY - Height + 100) / 3;
        } else {
            moveX = centerX - (angle - 180) / 2;
            moveY = (centerY - Height + 100) / 3;  
        }
        tct.restore();
        tct.beginPath();
        tct.moveTo(moveX, moveY);
        tct.lineTo(lineSuccess[0], lineSuccess[1]);
        tct.lineTo(lineSuccess[2], lineSuccess[3]);
        tct.lineWidth = 3;
        tct.strokeStyle = color.botSuccess;
        tct.stroke();
    }

    this.drawLineFail = function() {
        var moveX, moveY;
        var angle = myrate.fail * 100 * 3.6;
        //Find position begin draw line
        if (myrate.fail <= 0.25) {
            moveX = centerX + fixX + 200 - angle;
            moveY = (centerY + fixY - Height - angle) / 3;
        } else if (myrate.fail <= 0.5) {
            moveX = centerX + fixX + 200 - 100 - angle / 2;
            moveY = (centerY + fixY - Height - 100) / 3;
        } else {
            moveX = centerX + fixX - (angle - 180) / 2;
            moveY = (centerY + fixY - Height - 100) / 3;
        }
        tct.restore();
        tct.beginPath();
        tct.moveTo(moveX, moveY);
        tct.lineTo(lineFail[0], lineFail[1]);
        tct.lineTo(lineFail[2], lineFail[3]);
        tct.lineWidth = 3;
        tct.strokeStyle = color.botFail;
        tct.stroke();
    }

    this.drawText = function() {
        tct.beginPath();
        tct.font = "14px Arial";
        tct.fillStyle = "black";
        if (!check) {
            tct.fillText(myrate.success * 100 + "% ĐÃ ĐẠT", lineSuccess[0], lineSuccess[3] - 10);
            tct.fillText(myrate.fail * 100 + "% CHƯA ĐẠT", lineFail[2], lineFail[3] - 10);
        } else {
            tct.fillText(myrate.success * 100 + "% ĐÃ ĐẠT", lineSuccess[2], lineSuccess[3] - 10);
            tct.fillText(myrate.fail * 100 + "% CHƯA ĐẠT", lineFail[0], lineFail[3] - 10);
        }   
    }
        //Draw title of charts
    this.draw = function() {
        for (i = 0; i <= Height; i++) {
            this.drawChart(i);
        }
        this.drawTitle();;
        this.drawLineSuccess();
        this.drawLineFail();
        this.drawText();
    }
};
