
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
    var mouseAnchorDist = mousePos.subtract(innerCircle.position);
    console.log(mouseAnchorDist.length);
    if(mouseAnchorDist.length > outerRadius){
        console.log("out");
    innerCircle.position = distConstrant(outerCircle.center,innerCircle.center,outerRadius);
    }
}

function distConstrant(center,anchorPoint,distance){
    return ((anchorPoint.subtract(center))* distance) + anchorPoint;

}


// // Create a circle at the center of the canvas
// var circle = new paper.Path.Circle({
//     center: paper.view.center,
//     radius: 50,
//     fillColor: 'blue'
// });

// // Animation function
// paper.view.onFrame = function(event) {
//     circle.scale(Math.sin(event.count / 10) * 0.01 + 1);
// };