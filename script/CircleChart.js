function CircleChart() {

    var context = null;
    var canvasWidth = 120;
    var canvasHeight = 120;
    var chartPercent = 0;
    var lightColor = '#c2d56a';
    var darkColor = '#8abc4b';
    var inc = true;
    var mouseX = -10;
    var mouseY = -10;

    window.requestAnimFrame = (function(callback) {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function(callback) {
                window.setTimeout(callback, 1000 / 60);
            };
    })();

    function setWidth(width) {
        canvasWidth = width;
    }

    function getWidth() {
        return canvasWidth;
    }

    function setHeight(height) {
        canvasWidth = height;
    }

    function getHeight() {
        return canvasHeight;
    }

    function setPercent(percent) {
        chartPercent = percent;
    }

    function getPercent() {
        return chartPercent;
    }

    function shadowOff() {
        context.shadowBlur = 0;
        context.shadowOffsetX = 0;
        context.shadowOffsetY = 0;
    }

    function shadowOn() {
        context.shadowBlur = 3;
        context.shadowOffsetX = 3;
        context.shadowOffsetY = 3;
        context.shadowColor = 'grey';
    }

    function drawText() {
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.font = 'normal normal 100 20pt Raleway-bold';
        context.fillText(getPercent() + '%', canvasWidth / 2, canvasHeight / 2);
    }

    function draw() {
        shadowOff();

        context.clearRect(0, 0, canvasWidth, canvasHeight);
        var x = canvasWidth / 2;
        var y = canvasHeight / 2;
        var startAngle = 1.5 * Math.PI;
        var stopAngle = 2 * (getPercent() / 100) * Math.PI + startAngle;

        drawText();

        context.beginPath();

        context.arc(x, y, canvasHeight / 2.5, 0, 2 * Math.PI, false);
        context.strokeStyle = lightColor;
        context.lineWidth = 5; // TODO: Make a param.
        context.stroke();
        shadowOn();

        context.beginPath();

        context.arc(x, y, canvasHeight / 2.5, startAngle, stopAngle, false);
        context.strokeStyle = darkColor;
        context.lineWidth = 12; // TODO: Make a param.
        context.stroke();

        shadowOff();

        context.beginPath();
        context.arc(mouseX, mouseY, 3, 0, 2 * Math.PI, false);
        context.fillStyle = 'white';
        context.fill();
    }

    function animate() {
        requestAnimFrame(animate);

        draw();
    }

    function enhanceContext(canvas, context) {
        var ratio = window.devicePixelRatio || 1,
            width = canvas.width,
            height = canvas.height;
        if (ratio > 1) {
            canvas.width = width * ratio;
            canvas.height = height * ratio;
            canvas.style.width = width + 'px';
            canvas.style.height = height + 'px';
            context.scale(ratio, ratio);
        }
    }

    function setColors(lightCol, darkCol) {
        lightColor = lightCol;
        darkColor = darkCol;
    }

    function setCallbacks(canvasElement) {}

    function init(canvasId, initialPercent) {
        if (initialPercent != null) {
            setPercent(initialPercent)
        }
        var canvasElement = document.getElementById(canvasId);
        setCallbacks(canvasElement);
        canvasElement.width = canvasWidth;
        canvasElement.height = canvasHeight;
        context = canvasElement.getContext('2d');
        enhanceContext(canvasElement, context);
        animate();
    }

    return {
        init: init,
        setWidth: setWidth,
        getWidth: getWidth,
        setHeight: setHeight,
        getHeight: getHeight,
        getPercent: getPercent,
        setPercent: setPercent,
        setColors: setColors
    }

}
