var namespace = "http://www.w3.org/2000/svg";

function getX(shape) {
    if (shape.hasAttribute("x")) {
        return parseFloat(shape.getAttribute("x"));
    } else {
        return parseFloat(shape.getAttribute("cx"));
    }
}

function getY(shape) {
    if (shape.hasAttribute("y")) {
        return parseFloat(shape.getAttribute("y"));
    } else {
        return parseFloat(shape.getAttribute("cy"));
    }
}

function setX(shape, x) {
    if (shape.hasAttribute("x")) {
        shape.setAttribute("x", x);
    } else {
        shape.setAttribute("cx", x);
    }
}

function setY(shape, y) {
    if (shape.hasAttribute("y")) {
        shape.setAttribute("y", y);
    } else {
        shape.setAttribute("cy", y);
    }
}

function move(shape, dx, dy) {
    if (shape.hasAttribute("x") && shape.hasAttribute("y")) {
        var x = parseFloat(shape.getAttribute("x"));
        var y = parseFloat(shape.getAttribute("y"));
        shape.setAttribute("x", x + dx);
        shape.setAttribute("y", y + dy);
    } else {
        var cx = parseFloat(shape.getAttribute("cx"));
        var cy = parseFloat(shape.getAttribute("cy"));
        shape.setAttribute("cx", cx + dx);
        shape.setAttribute("cy", cy + dy);
    }
}

function makeCircle(cx, cy, r, fill, opacity) {
    var circle = document.createElementNS(namespace, "circle");
    circle.setAttribute("cx", cx);
    circle.setAttribute("cy", cy);
    circle.setAttribute("r", r);
    circle.setAttribute("fill", fill);
    circle.setAttribute("opacity", opacity);

    var canvas = document.getElementById("canvas");
    canvas.appendChild(circle);
    return circle;
}

function makeRect(x, y, width, height, fill, opacity) {
    var rect = document.createElementNS(namespace, "rect");
    rect.setAttribute("x", x);
    rect.setAttribute("y", y);
    rect.setAttribute("width", width);
    rect.setAttribute("height", height);
    rect.setAttribute("fill", fill);
    rect.setAttribute("opacity", opacity);

    var canvas = document.getElementById("canvas");
    canvas.appendChild(rect);
    return rect;
}

function makeRectid(x, y, width, height, fill, opacity, id) {
    var rect = document.createElementNS(namespace, "rect");
    rect.setAttribute("x", x);
    rect.setAttribute("y", y);
    rect.setAttribute("width", width);
    rect.setAttribute("height", height);
    rect.setAttribute("fill", fill);
    rect.setAttribute("opacity", opacity);
    rect.setAttribute("id", id);

    var canvas = document.getElementById("canvas");
    canvas.appendChild(rect);
    return rect;
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
    var ellipse = document.createElementNS(namespace, "ellipse");
    ellipse.setAttribute("cx", cx);
    ellipse.setAttribute("cy", cy);
    ellipse.setAttribute("rx", rx);
    ellipse.setAttribute("ry", ry);
    ellipse.setAttribute("fill", fill);
    ellipse.setAttribute("opacity", opacity);

    var canvas = document.getElementById("canvas");
    canvas.appendChild(ellipse);
    return ellipse;
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
    var line = document.createElementNS(namespace, "line");
    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);
    line.setAttribute("stroke", stroke);
    line.setAttribute("stroke-width", strokeWidth);
    line.setAttribute("opacity", opacity);

    var canvas = document.getElementById("canvas");
    canvas.appendChild(line);
    return line;
}

function makePolyline(points, stroke, strokeWidth, opacity) {
    var polyline = document.createElementNS(namespace, "polyline");
    polyline.setAttribute("points", points);
    polyline.setAttribute("stroke", stroke);
    polyline.setAttribute("stroke-width", strokeWidth);
    polyline.setAttribute("opacity", opacity);
    polyline.setAttribute("fill", "none");

    var canvas = document.getElementById("canvas");
    canvas.appendChild(polyline);
    return polyline;
}

function makePolygon(points, fill, opacity) {
    var polygon = document.createElementNS(namespace, "polygon");
    polygon.setAttribute("points", points);
    polygon.setAttribute("opacity", opacity);
    polygon.setAttribute("fill", fill);
    
    var canvas = document.getElementById("canvas");
    canvas.appendChild(polygon);
    return polygon;
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
    var text = document.createElementNS(namespace, "text");
    text.innerHTML = message;
    text.setAttribute("x", x);
    text.setAttribute("y", y);
    text.setAttribute("font-size", fontSize);
    text.setAttribute("font-family", fontFamily);
    text.setAttribute("fill", fill);
    text.setAttribute("opacity", opacity);

    var canvas = document.getElementById("canvas");
    canvas.appendChild(text);
    return text;
}

function makeImage(url, x, y, width, height, opacity) {
    var image = document.createElementNS(namespace, "image");
    image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url);
    image.setAttribute("x", x);
    image.setAttribute("y", y);
    image.setAttribute("width", width);
    image.setAttribute("height", height);
    image.setAttribute("opacity", opacity);

    var canvas = document.getElementById("canvas");
    canvas.appendChild(image);
    return image;
}

function collides(rect1, rect2) {
    var x;
    var y;
    var w;
    var h;

    if (rect2.hasAttribute("x")) {
        x = getX(rect2);
        y = getY(rect2);
        w = parseFloat(rect2.getAttribute("width"));
        h = parseFloat(rect2.getAttribute("height"));
    } else if (rect2.hasAttribute("cx")) {
        x = getX(rect2) - parseFloat(rect2.getAttribute("r"));
        y = getY(rect2) - parseFloat(rect2.getAttribute("r"));
        w = 2 * parseFloat(rect2.getAttribute("r"));
        h = w;
    }
    var centerX = getX(rect1) + parseFloat(rect1.getAttribute("width")) / 2;
    var centerY = getY(rect1) + parseFloat(rect1.getAttribute("height")) / 2;
    return (centerX > x && centerX < x + w &&
    centerY > y && centerY < y + h);
}

var sea = makeRectid(0, 0, 1001.5, 527.5, "skyblue", 1, "ocean");
makeLine(0, 10.5, 1001.5, 10.5, "gray", 1, 0.75);
makeLine(10.5, 0, 10.5, 527.5, "gray", 1, 0.75);
makeLine(0, 21.5, 1001.5, 21.5, "gray", 1, 0.75);
makeLine(21.5, 0, 21.5, 527.5, "gray", 1, 0.75);
makeLine(0, 32.5, 1001.5, 32.5, "gray", 1, 0.75);
makeLine(32.5, 0, 32.5, 527.5, "gray", 1, 0.75);
makeLine(0, 43.5, 1001.5, 43.5, "gray", 1, 0.75);
makeLine(43.5, 0, 43.5, 527.5, "gray", 1, 0.75);
makeLine(0, 54.5, 1001.5, 54.5, "gray", 1, 0.75);
makeLine(54.5, 0, 54.5, 527.5, "gray", 1, 0.75);
makeLine(0, 65.5, 1001.5, 65.5, "gray", 1, 0.75);
makeLine(65.5, 0, 65.5, 527.5, "gray", 1, 0.75);
makeLine(0, 76.5, 1001.5, 76.5, "gray", 1, 0.75);
makeLine(76.5, 0, 76.5, 527.5, "gray", 1, 0.75);
makeLine(0, 87.5, 1001.5, 87.5, "gray", 1, 0.75);
makeLine(87.5, 0, 87.5, 527.5, "gray", 1, 0.75);
makeLine(0, 98.5, 1001.5, 98.5, "gray", 1, 0.75);
makeLine(98.5, 0, 98.5, 527.5, "gray", 1, 0.75);
makeLine(0, 109.5, 1001.5, 109.5, "gray", 1, 0.75);
makeLine(109.5, 0, 109.5, 527.5, "gray", 1, 0.75);
makeLine(0, 120.5, 1001.5, 120.5, "gray", 1, 0.75);
makeLine(120.5, 0, 120.5, 527.5, "gray", 1, 0.75);
makeLine(0, 131.5, 1001.5, 131.5, "gray", 1, 0.75);
makeLine(131.5, 0, 131.5, 527.5, "gray", 1, 0.75);
makeLine(0, 142.5, 1001.5, 142.5, "gray", 1, 0.75);
makeLine(142.5, 0, 142.5, 527.5, "gray", 1, 0.75);
makeLine(0, 153.5, 1001.5, 153.5, "gray", 1, 0.75);
makeLine(153.5, 0, 153.5, 527.5, "gray", 1, 0.75);
makeLine(0, 164.5, 1001.5, 164.5, "gray", 1, 0.75);
makeLine(164.5, 0, 164.5, 527.5, "gray", 1, 0.75);
makeLine(0, 175.5, 1001.5, 175.5, "gray", 1, 0.75);
makeLine(175.5, 0, 175.5, 527.5, "gray", 1, 0.75);
makeLine(0, 186.5, 1001.5, 186.5, "gray", 1, 0.75);
makeLine(186.5, 0, 186.5, 527.5, "gray", 1, 0.75);
makeLine(0, 197.5, 1001.5, 197.5, "gray", 1, 0.75);
makeLine(197.5, 0, 197.5, 527.5, "gray", 1, 0.75);
makeLine(0, 208.5, 1001.5, 208.5, "gray", 1, 0.75);
makeLine(208.5, 0, 208.5, 527.5, "gray", 1, 0.75);
makeLine(0, 219.5, 1001.5, 219.5, "gray", 1, 0.75);
makeLine(219.5, 0, 219.5, 527.5, "gray", 1, 0.75);
makeLine(0, 230.5, 1001.5, 230.5, "gray", 1, 0.75);
makeLine(230.5, 0, 230.5, 527.5, "gray", 1, 0.75);
makeLine(0, 241.5, 1001.5, 241.5, "gray", 1, 0.75);
makeLine(241.5, 0, 241.5, 527.5, "gray", 1, 0.75);
makeLine(0, 252.5, 1001.5, 252.5, "gray", 1, 0.75);
makeLine(252.5, 0, 252.5, 527.5, "gray", 1, 0.75);
makeLine(0, 263.5, 1001.5, 263.5, "gray", 1, 0.75);
makeLine(263.5, 0, 263.5, 527.5, "gray", 1, 0.75);
makeLine(0, 274.5, 1001.5, 274.5, "gray", 1, 0.75);
makeLine(274.5, 0, 274.5, 527.5, "gray", 1, 0.75);
makeLine(0, 285.5, 1001.5, 285.5, "gray", 1, 0.75);
makeLine(285.5, 0, 285.5, 527.5, "gray", 1, 0.75);
makeLine(0, 296.5, 1001.5, 296.5, "gray", 1, 0.75);
makeLine(296.5, 0, 296.5, 527.5, "gray", 1, 0.75);
makeLine(0, 307.5, 1001.5, 307.5, "gray", 1, 0.75);
makeLine(307.5, 0, 307.5, 527.5, "gray", 1, 0.75);
makeLine(0, 318.5, 1001.5, 318.5, "gray", 1, 0.75);
makeLine(318.5, 0, 318.5, 527.5, "gray", 1, 0.75);
makeLine(0, 329.5, 1001.5, 329.5, "gray", 1, 0.75);
makeLine(329.5, 0, 329.5, 527.5, "gray", 1, 0.75);
makeLine(0, 340.5, 1001.5, 340.5, "gray", 1, 0.75);
makeLine(340.5, 0, 340.5, 527.5, "gray", 1, 0.75);
makeLine(0, 351.5, 1001.5, 351.5, "gray", 1, 0.75);
makeLine(351.5, 0, 351.5, 527.5, "gray", 1, 0.75);
makeLine(0, 362.5, 1001.5, 362.5, "gray", 1, 0.75);
makeLine(362.5, 0, 362.5, 527.5, "gray", 1, 0.75);
makeLine(0, 373.5, 1001.5, 373.5, "gray", 1, 0.75);
makeLine(373.5, 0, 373.5, 527.5, "gray", 1, 0.75);
makeLine(0, 384.5, 1001.5, 384.5, "gray", 1, 0.75);
makeLine(384.5, 0, 384.5, 527.5, "gray", 1, 0.75);
makeLine(0, 395.5, 1001.5, 395.5, "gray", 1, 0.75);
makeLine(395.5, 0, 395.5, 527.5, "gray", 1, 0.75);
makeLine(0, 406.5, 1001.5, 406.5, "gray", 1, 0.75);
makeLine(406.5, 0, 406.5, 527.5, "gray", 1, 0.75);
makeLine(0, 417.5, 1001.5, 417.5, "gray", 1, 0.75);
makeLine(417.5, 0, 417.5, 527.5, "gray", 1, 0.75);
makeLine(0, 428.5, 1001.5, 428.5, "gray", 1, 0.75);
makeLine(428.5, 0, 428.5, 527.5, "gray", 1, 0.75);
makeLine(0, 439.5, 1001.5, 439.5, "gray", 1, 0.75);
makeLine(439.5, 0, 439.5, 527.5, "gray", 1, 0.75);
makeLine(0, 450.5, 1001.5, 450.5, "gray", 1, 0.75);
makeLine(450.5, 0, 450.5, 527.5, "gray", 1, 0.75);
makeLine(0, 461.5, 1001.5, 461.5, "gray", 1, 0.75);
makeLine(461.5, 0, 461.5, 527.5, "gray", 1, 0.75);
makeLine(0, 472.5, 1001.5, 472.5, "gray", 1, 0.75);
makeLine(472.5, 0, 472.5, 527.5, "gray", 1, 0.75);
makeLine(0, 483.5, 1001.5, 483.5, "gray", 1, 0.75);
makeLine(483.5, 0, 483.5, 527.5, "gray", 1, 0.75);
  //makeLine(0, 494.5, 1001.5, 494.5, "gray", 1, 0.75);
makeLine(494.5, 0, 494.5, 527.5, "gray", 1, 0.75);
  //makeLine(0, 505.5, 1001.5, 505.5, "gray", 1, 0.75);
makeLine(505.5, 0, 505.5, 527.5, "gray", 1, 0.75);
  //makeLine(0, 516.5, 1001.5, 516.5, "gray", 1, 0.75);
makeLine(516.5, 0, 516.5, 527.5, "gray", 1, 0.75);
makeLine(527.5, 0, 527.5, 527.5, "gray", 1, 0.75);
makeLine(538.5, 0, 538.5, 527.5, "gray", 1, 0.75);
makeLine(549.5, 0, 549.5, 527.5, "gray", 1, 0.75);
makeLine(560.5, 0, 560.5, 527.5, "gray", 1, 0.75);
makeLine(571.5, 0, 571.5, 527.5, "gray", 1, 0.75);
makeLine(582.5, 0, 582.5, 527.5, "gray", 1, 0.75);
makeLine(593.5, 0, 593.5, 527.5, "gray", 1, 0.75);
makeLine(604.5, 0, 604.5, 527.5, "gray", 1, 0.75);
makeLine(615.5, 0, 615.5, 527.5, "gray", 1, 0.75);
makeLine(626.5, 0, 626.5, 527.5, "gray", 1, 0.75);
makeLine(637.5, 0, 637.5, 527.5, "gray", 1, 0.75);
makeLine(648.5, 0, 648.5, 527.5, "gray", 1, 0.75);
makeLine(659.5, 0, 659.5, 527.5, "gray", 1, 0.75);
makeLine(670.5, 0, 670.5, 527.5, "gray", 1, 0.75);
makeLine(681.5, 0, 681.5, 527.5, "gray", 1, 0.75);
makeLine(692.5, 0, 692.5, 527.5, "gray", 1, 0.75);
makeLine(703.5, 0, 703.5, 527.5, "gray", 1, 0.75);
makeLine(714.5, 0, 714.5, 527.5, "gray", 1, 0.75);
makeLine(725.5, 0, 725.5, 527.5, "gray", 1, 0.75);
makeLine(736.5, 0, 736.5, 527.5, "gray", 1, 0.75);
makeLine(747.5, 0, 747.5, 527.5, "gray", 1, 0.75);
makeLine(758.5, 0, 758.5, 527.5, "gray", 1, 0.75);
makeLine(769.5, 0, 769.5, 527.5, "gray", 1, 0.75);
makeLine(780.5, 0, 780.5, 527.5, "gray", 1, 0.75);
makeLine(791.5, 0, 791.5, 527.5, "gray", 1, 0.75);
makeLine(802.5, 0, 802.5, 527.5, "gray", 1, 0.75);
makeLine(813.5, 0, 813.5, 527.5, "gray", 1, 0.75);
makeLine(824.5, 0, 824.5, 527.5, "gray", 1, 0.75);
makeLine(835.5, 0, 835.5, 527.5, "gray", 1, 0.75);
makeLine(846.5, 0, 846.5, 527.5, "gray", 1, 0.75);
makeLine(857.5, 0, 857.5, 527.5, "gray", 1, 0.75);
makeLine(868.5, 0, 868.5, 527.5, "gray", 1, 0.75);
makeLine(879.5, 0, 879.5, 527.5, "gray", 1, 0.75);
makeLine(890.5, 0, 890.5, 527.5, "gray", 1, 0.75);
makeLine(901.5, 0, 901.5, 527.5, "gray", 1, 0.75);
makeLine(912.5, 0, 912.5, 527.5, "gray", 1, 0.75);
makeLine(923.5, 0, 923.5, 527.5, "gray", 1, 0.75);
makeLine(934.5, 0, 934.5, 527.5, "gray", 1, 0.75);
makeLine(945.5, 0, 945.5, 527.5, "gray", 1, 0.75);
makeLine(956.5, 0, 956.5, 527.5, "gray", 1, 0.75);
makeLine(967.5, 0, 967.5, 527.5, "gray", 1, 0.75);
makeLine(978.5, 0, 978.5, 527.5, "gray", 1, 0.75);
makeLine(989.5, 0, 989.5, 527.5, "gray", 1, 0.75);
makeRectid(33, 66, 10, 12, "black", 1, "wh");
makeRectid(33, 77, 10, 12, "black", 1, "wh");
makeRectid(33, 88, 10, 10, "black", 1, "wh");

makeRectid(121,77,10,10,"lawngreen",1,"land")//b
makeRectid(110,77,10,10,"lawngreen",1,"land")//b
makeRectid(154, 110, 10, 10, "lawngreen", 1, "land"); //border
makeRectid(154, 99, 10, 10, "lawngreen", 1, "land"); //border
makeRectid(154, 88, 10, 10, "lawngreen", 1, "land"); //border
makeRectid(154, 77, 10, 10, "lawngreen", 1, "land"); //border
makeRectid(154, 66, 10, 10, "lawngreen", 1, "land"); //bordercenteright
makeRectid(154, 55, 10, 10, "lawngreen", 1, "land"); //border
makeRectid(154, 44, 10, 10, "lawngreen", 1, "land"); //border
makeRectid(143, 33, 10, 10, "lawngreen", 1, "land"); //border
makeRectid(132, 22, 10, 10, "lawngreen", 1, "land"); //border
makeRectid(121, 11, 10, 10, "lawngreen", 1, "land"); //border
makeRectid(110, 0, 10, 10, "lawngreen", 1, "land"); //border
makeRectid(99, 0, 10, 10, "lawngreen", 1, "land"); //border
makeRectid(88, 0, 10, 10, "lawngreen", 1, "land"); //border
makeRectid(77, 0, 10, 10, "lawngreen", 1, "land"); //border
makeRectid(66, 0, 10, 10, "lawngreen", 1, "land"); //border
makeRectid(55, 0, 10, 10, "lawngreen", 1, "land"); //border
makeRectid(44, 0, 10, 10, "lawngreen", 1, "land"); //border
makeRectid(33, 11, 10, 10, "lawngreen", 1, "land"); //border
makeRectid(22, 22, 10, 10, "lawngreen", 1, "land"); //border
makeRectid(11, 33, 10, 10, "lawngreen", 1, "land"); //border
makeRectid(0, 44, 10, 10, "lawngreen", 1, "land"); //border
makeRectid(0, 55, 10, 10, "lawngreen", 1, "land"); //border
makeRectid(0, 66, 10, 10, "lawngreen", 1, "land"); //border
makeRectid(0, 77, 10, 10, "lawngreen", 1, "land"); //border
makeRectid(0, 88, 10, 10, "lawngreen", 1, "land"); //border
makeRectid(0, 99, 10, 10, "lawngreen", 1, "land"); //border
makeRectid(0, 110, 10, 10, "lawngreen", 1, "land"); //border
makeRectid(11, 121, 10, 10, "lawngreen", 1, "land"); //border
makeRectid(22, 132, 10, 10, "lawngreen", 1, "land"); //border
makeRectid(33, 143, 10, 10, "lawngreen", 1, "land"); //border
makeRectid(44, 154, 10, 10, "lawngreen", 1, "land"); //border
makeRectid(55, 154, 10, 10, "lawngreen", 1, "land"); //border
makeRectid(66, 154, 10, 10, "lawngreen", 1, "land"); //border
makeRectid(77, 154, 10, 10, "lawngreen", 1, "land"); //border
makeRectid(88, 154, 10, 10, "lawngreen", 1, "land"); //border
makeRectid(99, 154, 10, 10, "lawngreen", 1, "land"); //border
makeRectid(110, 154, 10, 10, "lawngreen", 1, "land"); //border
makeRectid(121, 143, 10, 10, "lawngreen", 1, "land"); //border
makeRectid(132, 132, 10, 10, "lawngreen", 1, "land"); //border
makeRectid(143, 121, 10, 10, "lawngreen", 1, "land"); //border

makeRectid(110, 11, 10, 10, "lawngreen", 1, "land");
makeRectid(99, 11, 10, 10, "lawngreen", 1, "land");
makeRectid(88, 11, 10, 10, "lawngreen", 1, "land");
makeRectid(77, 11, 10, 10, "lawngreen", 1, "land");
makeRectid(66, 11, 10, 10, "lawngreen", 1, "land");
makeRectid(55, 11, 10, 10, "lawngreen", 1, "land");
makeRectid(44, 11, 10, 10, "lawngreen", 1, "land");
makeRectid(121, 22, 10, 10, "lawngreen", 1, "land");
makeRectid(110, 22, 10, 10, "lawngreen", 1, "land");
makeRectid(99, 22, 10, 10, "lawngreen", 1, "land");
makeRectid(88, 22, 10, 10, "lawngreen", 1, "land");
makeRectid(77, 22, 10, 10, "lawngreen", 1, "land");
makeRectid(66, 22, 10, 10, "lawngreen", 1, "land");
makeRectid(55, 22, 10, 10, "lawngreen", 1, "land");
makeRectid(44, 22, 10, 10, "lawngreen", 1, "land");
makeRectid(33, 22, 10, 10, "lawngreen", 1, "land");
makeRectid(132, 33, 10, 10, "lawngreen", 1, "land");
makeRectid(121, 33, 10, 10, "lawngreen", 1, "land");
makeRectid(110, 33, 10, 10, "lawngreen", 1, "land");
makeRectid(99, 33, 10, 10, "lawngreen", 1, "land");
makeRectid(88, 33, 10, 10, "lawngreen", 1, "land");
makeRectid(77, 33, 10, 10, "lawngreen", 1, "land");
makeRectid(66, 33, 10, 10, "lawngreen", 1, "land");
makeRectid(55, 33, 10, 10, "lawngreen", 1, "land");
makeRectid(44, 33, 10, 10, "lawngreen", 1, "land");
makeRectid(33, 33, 10, 10, "lawngreen", 1, "land");
makeRectid(22, 33, 10, 10, "lawngreen", 1, "land");
makeRectid(143, 44, 10, 10, "lawngreen", 1, "land");
makeRectid(132, 44, 10, 10, "lawngreen", 1, "land");
makeRectid(121, 44, 10, 10, "lawngreen", 1, "land");
makeRectid(110, 44, 10, 10, "lawngreen", 1, "land");
makeRectid(99, 44, 10, 10, "lawngreen", 1, "land");
makeRectid(88, 44, 10, 10, "lawngreen", 1, "land");
makeRectid(77, 44, 10, 10, "lawngreen", 1, "land");
makeRectid(66, 44, 10, 10, "lawngreen", 1, "land");
makeRectid(55, 44, 10, 10, "lawngreen", 1, "land");
makeRectid(44, 44, 10, 10, "lawngreen", 1, "land");
makeRectid(33, 44, 10, 10, "lawngreen", 1, "land");
makeRectid(22, 44, 10, 10, "lawngreen", 1, "land");
makeRectid(11, 44, 10, 10, "lawngreen", 1, "land");
makeRectid(143, 55, 10, 10, "lawngreen", 1, "land");
makeRectid(132, 55, 10, 10, "lawngreen", 1, "land");
makeRectid(121, 55, 10, 10, "lawngreen", 1, "land");
makeRectid(110, 55, 10, 10, "lawngreen", 1, "land");
makeRectid(99, 55, 10, 10, "lawngreen", 1, "land");
makeRectid(88, 55, 10, 10, "lawngreen", 1, "land");
makeRectid(77, 55, 10, 10, "lawngreen", 1, "land");
makeRectid(66, 55, 10, 10, "lawngreen", 1, "land");
makeRectid(55, 55, 10, 10, "lawngreen", 1, "land");
makeRectid(44, 55, 10, 10, "lawngreen", 1, "land");
makeRectid(33, 55, 10, 10, "lawngreen", 1, "land");
makeRectid(22, 55, 10, 10, "lawngreen", 1, "land");
makeRectid(11, 55, 10, 10, "lawngreen", 1, "land");
makeRectid(143, 66, 10, 10, "lawngreen", 1, "land");
makeRectid(132, 66, 10, 10, "lawngreen", 1, "land");
makeRectid(121, 66, 10, 10, "lawngreen", 1, "land");
makeRectid(110, 66, 10, 10, "lawngreen", 1, "land");
makeRectid(99, 66, 10, 10, "lawngreen", 1, "land");
makeRectid(88, 66, 10, 10, "lawngreen", 1, "land");
makeRectid(77, 66, 10, 10, "lawngreen", 1, "land");
makeRectid(66, 66, 10, 10, "lawngreen", 1, "land");
makeRectid(55, 66, 10, 10, "lawngreen", 1, "land");
makeRectid(44, 66, 10, 10, "lawngreen", 1, "land");
makeRectid(22, 66, 10, 10, "lawngreen", 1, "land");
makeRectid(11, 66, 10, 10, "lawngreen", 1, "land");
makeRectid(143, 77, 10, 10, "lawngreen", 1, "land");
makeRectid(132, 77, 10, 10, "lawngreen", 1, "land");
makeRectid(99, 77, 10, 10, "lawngreen", 1, "land");
makeRectid(88, 77, 10, 10, "lawngreen", 1, "land");
makeRectid(77, 77, 10, 10, "lawngreen", 1, "land");
makeRectid(66, 77, 10, 10, "lawngreen", 1, "land");
makeRectid(55, 77, 10, 10, "lawngreen", 1, "land");
makeRectid(44, 77, 10, 10, "lawngreen", 1, "land");
makeRectid(22, 77, 10, 10, "lawngreen", 1, "land");
makeRectid(11, 77, 10, 10, "lawngreen", 1, "land");
makeRectid(143, 88, 10, 10, "lawngreen", 1, "land");
makeRectid(132, 88, 10, 10, "lawngreen", 1, "land");
makeRectid(121, 88, 10, 10, "lawngreen", 1, "land");
makeRectid(110, 88, 10, 10, "lawngreen", 1, "land");
makeRectid(99, 88, 10, 10, "lawngreen", 1, "land");
makeRectid(88, 88, 10, 10, "lawngreen", 1, "land");
makeRectid(77, 88, 10, 10, "lawngreen", 1, "land");
makeRectid(66, 88, 10, 10, "lawngreen", 1, "land");
makeRectid(55, 88, 10, 10, "lawngreen", 1, "land");
makeRectid(44, 88, 10, 10, "lawngreen", 1, "land");
makeRectid(22, 88, 10, 10, "lawngreen", 1, "land");
makeRectid(11, 88, 10, 10, "lawngreen", 1, "land");
makeRectid(143, 99, 10, 10, "lawngreen", 1, "land");
makeRectid(132, 99, 10, 10, "lawngreen", 1, "land");
makeRectid(121, 99, 10, 10, "lawngreen", 1, "land");
makeRectid(110, 99, 10, 10, "lawngreen", 1, "land");
makeRectid(99, 99, 10, 10, "lawngreen", 1, "land");
makeRectid(88, 99, 10, 10, "lawngreen", 1, "land");
makeRectid(77, 99, 10, 10, "lawngreen", 1, "land");
makeRectid(66, 99, 10, 10, "lawngreen", 1, "land");
makeRectid(55, 99, 10, 10, "lawngreen", 1, "land");
makeRectid(44, 99, 10, 10, "lawngreen", 1, "land");
makeRectid(33, 99, 10, 10, "lawngreen", 1, "land");
makeRectid(22, 99, 10, 10, "lawngreen", 1, "land");
makeRectid(11, 99, 10, 10, "lawngreen", 1, "land");
makeRectid(143, 110, 10, 10, "lawngreen", 1, "land");
makeRectid(132, 110, 10, 10, "lawngreen", 1, "land");
makeRectid(121, 110, 10, 10, "lawngreen", 1, "land");
makeRectid(110, 110, 10, 10, "lawngreen", 1, "land");
makeRectid(99, 110, 10, 10, "lawngreen", 1, "land");
makeRectid(88, 110, 10, 10, "lawngreen", 1, "land");
makeRectid(77, 110, 10, 10, "lawngreen", 1, "land");
makeRectid(66, 110, 10, 10, "lawngreen", 1, "land");
makeRectid(55, 110, 10, 10, "lawngreen", 1, "land");
makeRectid(44, 110, 10, 10, "lawngreen", 1, "land");
makeRectid(33, 110, 10, 10, "lawngreen", 1, "land");
makeRectid(22, 110, 10, 10, "lawngreen", 1, "land");
makeRectid(11, 110, 10, 10, "lawngreen", 1, "land");
makeRectid(132, 121, 10, 10, "lawngreen", 1, "land");
makeRectid(121, 121, 10, 10, "lawngreen", 1, "land");
makeRectid(110, 121, 10, 10, "lawngreen", 1, "land");
makeRectid(99, 121, 10, 10, "lawngreen", 1, "land");
makeRectid(88, 121, 10, 10, "lawngreen", 1, "land");
makeRectid(77, 121, 10, 10, "lawngreen", 1, "land");
makeRectid(66, 121, 10, 10, "lawngreen", 1, "land");
makeRectid(55, 121, 10, 10, "lawngreen", 1, "land");
makeRectid(44, 121, 10, 10, "lawngreen", 1, "land");
makeRectid(33, 121, 10, 10, "lawngreen", 1, "land");
makeRectid(22, 121, 10, 10, "lawngreen", 1, "land");
makeRectid(121, 132, 10, 10, "lawngreen", 1, "land");
makeRectid(110, 132, 10, 10, "lawngreen", 1, "land");
makeRectid(99, 132, 10, 10, "lawngreen", 1, "land");
makeRectid(88, 132, 10, 10, "lawngreen", 1, "land");
makeRectid(77, 132, 10, 10, "lawngreen", 1, "land");
makeRectid(66, 132, 10, 10, "lawngreen", 1, "land");
makeRectid(55, 132, 10, 10, "lawngreen", 1, "land");
makeRectid(44, 132, 10, 10, "lawngreen", 1, "land");
makeRectid(33, 132, 10, 10, "lawngreen", 1, "land");
makeRectid(110, 143, 10, 10, "lawngreen", 1, "land");
makeRectid(99, 143, 10, 10, "lawngreen", 1, "land");
makeRectid(88, 143, 10, 10, "lawngreen", 1, "land");
makeRectid(77, 143, 10, 10, "lawngreen", 1, "land");
makeRectid(66, 143, 10, 10, "lawngreen", 1, "land");
makeRectid(55, 143, 10, 10, "lawngreen", 1, "land");
makeRectid(44, 143, 10, 10, "lawngreen", 1, "land");

var shark1 = makeCircle(137, 412, 5, "gray", 1)

var shark2 = makeCircle(236, 313, 5, "gray", 1)

var shark3 = makeCircle(335, 214, 5, "gray", 1);
var onLand;
var direction;
var land = document.getElementById("land")

var player = makeCircle(82, 82, 5, "blue", 1);
var bm = 0;
var bp = 0;
var xscore = 82;
var yscore = 82;
var xscoreText = makeText(xscore, 969, 20, 20, "sans-serif", "red");
var yscoreText = makeText(yscore, 969, 50, 20, "sans-serif", "red");
var bscoreText = makeText(bm, 969, 80, 20, "sans-serif", "red");

var x = getX(player);
var y = getY(player);

addEventListener('keydown', movePlayer);

function movePlayer(event) {

    if (event.key === "a" && x > 5) {
        move(player, -11, 0);
        direction = "left";
    } else if (event.key === "d" && x < 994.5) {
        move(player, 11, 0);
        direction = "right";
    } else if (event.key === "w" && y > 5) {
        move(player, 0, -11);
        direction = "up";
    } else if (event.key === "s" && y < 473.5) {
        move(player, 0, 11);
        direction = "down";
    } else if (event.key === "i" && bm > 0) {
        makeRectid(x - 5, y - 16, 10, 10, "brown", 1, "blt");
        bm = bm - 1;
        bp = bp + 1;
    } else if (event.key === "j" && bm > 0) {
        makeRectid(x - 16, y - 5, 10, 10, "brown", 1, "blt");
        bm = bm - 1;
        bp = bp + 1;
    } else if (event.key === "k" && bm > 0) {
        makeRectid(x - 5, y + 6, 10, 10, "brown", 1, "blt");
        bm = bm - 1;
        bp = bp + 1;
    } else if (event.key === "l" && bm > 0) {
        makeRectid(x + 6, y - 5, 10, 10, "brown", 1, "blt");
        bm = bm - 1;
        bp = bp + 1;
    }

    x = getX(player);
    y = getY(player);
    player.setAttribute("opacity", 0);
    player = makeCircle(x, y, 5, "blue", 1);

}

function moreConditions() {
    if (x === 38 && y === 71 && bm < 11) {
        bm = bm + 1;
    } else if (x === 38 && y === 82 && bm < 11) {
        bm = bm + 1;
    } else if (x === 38 && y === 93 && bm < 11) {
        bm = bm + 1;
    }


    xscore = x;
    yscore = y;

    xscoreText.innerHTML = xscore;
    yscoreText.innerHTML = yscore;
    bscoreText.innerHTML = bm;

    requestAnimationFrame(moreConditions);
}
moreConditions();

function sharkz() {
    var s1x = getX(shark1);
    var s1y = getY(shark1);
    var s2x = getX(shark2);
    var s2y = getY(shark2);
    var s3x = getX(shark3);
    var s3y = getY(shark3);
    
    if (onLand === 1) {
    
        if (s1x > x) {//if right go left{
            move(shark3, -10, 0);
        } else if (s1x < x) {//if left go right
            move(shark1, 10, 0);
        }
        if (s1y > y) { //if below go up
            move(shark1, 0, -10);
        } else if (s1y < y) { //if above go down
            move(shark1, 0, 10);
        }
        if (s2x > x) {//if right go left{
            move(shark1, -10, 0);
        } else if (s2x < x) {//if left go right
            move(shark2, 10, 0);
        }
        if (s2y > y) { //if below go up
            move(shark2, 0, -10);
        } else if (s2y < y) { //if above go down
            move(shark2, 0, 10);
        }
        if (s3x > x) {//if right go left{
            move(shark3, -10, 0);
        } else if (s3x < x) {//if left go right
            move(shark3, 10, 0);
        }
        if (s3y > y) { //if below go up
            move(shark3, 0, -10);
        } else if (s3y < y) { //if above go down
            move(shark3, 0, 10);
        }
    }
    requestAnimationFrame(sharkz);

}
sharkz();

function collisionz() {
    if (collides(player, sea)) {
        onLand = 0;
    } else if (collides(player, land)) {
        onLand = 1;
    }
    requestAnimationFrame(collisionz)
}
collisionz();