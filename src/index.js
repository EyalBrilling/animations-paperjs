import paper from 'paper';

window.onload = function() {
    paper.setup('myCanvas');

    // Draw a circle at position (100, 100) with radius 50
    var center = new paper.Point(100, 100);
    var circle = new paper.Path.Circle(center, 50);
    circle.fillColor = 'red';

    // Optional: Animate the circle
    paper.view.onFrame = function(event) {
        circle.position.x += Math.sin(event.time * 2) * 2;
        circle.position.y += Math.cos(event.time * 3) * 1;
    };
};
