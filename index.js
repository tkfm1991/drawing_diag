
function createRect(x, y, rx, ry, width, height, style) {
    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('x', x);
    rect.setAttribute('y', y);
    rect.setAttribute('rx', rx);
    rect.setAttribute('ry', ry);
    rect.setAttribute('width', width);
    rect.setAttribute('height', height);
    rect.setAttribute('style', style);
    return rect;
} 


function createLine(x1, y1, x2, y2, stroke_width, stroke) {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', x1);
    line.setAttribute('y1', y1);
    line.setAttribute('x2', x2);
    line.setAttribute('y2', y2);
    line.setAttribute('stroke-width', stroke_width);
    line.setAttribute('stroke', stroke);
    return line;
}



const nodes = document.getElementById('nodes');
const rect = createRect(0, 100, 10, 10, 100, 50, 'fill: rgb(174, 199, 232);');
nodes.appendChild(rect);
const rect2 = createRect(200, 100, 10, 10, 100, 50, 'fill: rgb(174, 199, 232);');
nodes.appendChild(rect2);

const lines = document.getElementById('lines');
const line = createLine(100, 125, 200, 125, 3, '#7a4e4e');
lines.appendChild(line);
