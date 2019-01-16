window.onload = eventWindowLoaded;
function eventWindowLoaded() {
    Canvas();
}
function Canvas() {
        var color = {
        topSuccess: "#3333FF", //change color
        botSuccess: "#009ED5",
        topFail: "#E4322B",
        botFail: "#FF6464"
    };
    var myRate = {
        fail: 0.7,      //change percent
        success: 0.3
    };

    var canvas = document.getElementById('myCanvas');
    var tct = canvas.getContext("2d");
    var myPiechart = new Piechart(
            {
                tct,
                centerX: 600,
                centerY: 1000,
                radius: 200,
                title: " BIỂU ĐỒ TỔNG QUAN KHUNG NĂNG LỰC",
                canvas: canvas,
                data: myRate,
                colors: color
            }
    );
        myPiechart.draw();
}