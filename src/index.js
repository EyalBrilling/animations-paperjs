import paper from 'paper';

paper.setup('myCanvas');

// Create a circle at the center of the canvas
var circle = new paper.Path.Circle({
    center: paper.view.center,
    radius: 50,
    fillColor: 'blue'
});

// Animation function
paper.view.onFrame = function(event) {
    circle.scale(Math.sin(event.count / 10) * 0.01 + 1);
};