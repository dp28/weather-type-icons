import {colours}                  from '../colours';
import {raindropRadius as radius} from './precipitation-dimensions';
import {drawCircle}               from '../utils/svg-utils';

export function drawRaindrop(centre) {
  return svg => drawRaindropUncurried(centre, svg);
}

function drawRaindropUncurried(centre, svg) {
  const parts = [
    drawCircle(centre, radius)(svg),
    drawTail(centre, svg)
  ];
  return parts.map(part => part.attr('fill', colours.blue));
}

function drawTail(raindropCentre, svg) {
  const params = {
    width:      radius * 1.9,
    height:     -radius * 2,
    bottomLeft: {
      x: raindropCentre.x - radius * 0.95,
      y: raindropCentre.y  - radius * 0.325
    }
  };
  return drawIsoscelesTriangle(params, svg)
    .attr('transform', `rotate(15, ${raindropCentre.x}, ${raindropCentre.y})`);
}

function drawIsoscelesTriangle({ width, height, bottomLeft }, svg) {
  return svg
    .append('polyline')
    .attr('points', [
      `${bottomLeft.x} ${bottomLeft.y}`,
      `${bottomLeft.x + width / 2} ${bottomLeft.y + height}`,
      `${bottomLeft.x + width} ${bottomLeft.y}`
    ]);
};
