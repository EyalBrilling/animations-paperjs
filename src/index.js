
var mousePos = view.center;
var outerRadius= 50;
var innerRadius= 10;
var outerCircle = new Path.Circle({
    center: mousePos,
    radius: outerRadius,
    strokeColor: 'black'
});

var innerCircle = new Path.Circle({
    center: view.center,
    radius: innerRadius,
    fillColor: 'purple'
});

view.onMouseMove = function(event){
    mousePos = event.point;

    outerCircle.position = mousePos;
    var mouseAnchorDist = mousePos - innerCircle.position;
    if(mouseAnchorDist.length > outerRadius){
    innerCircle.position = distConstrant(outerCircle.position,innerCircle.position,outerRadius);
    }
}

function distConstrant(center,anchorPoint,distance){
    return ((anchorPoint - center).normalize() * distance) + center;

}