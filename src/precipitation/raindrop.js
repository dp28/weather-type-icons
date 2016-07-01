import {colours}       from '../colours';
import * as dimensions from '../dimensions';
import {drawCircle}    from '../utils/svg-utils';

export function drawRaindrop(centre) {
  return svg => drawRaindropUncurried(centre, svg);
}

function drawRaindropUncurried(centre, svg) {
  const parts = [
    drawCircle(centre, dimensions.raindrop.radius)(svg),
    drawTail(centre, svg)
  ];
  return parts.map(part => part.attr('fill', colours.blue));
}

function drawTail(raindropCentre, svg) {
  const params = {
    width:      dimensions.raindrop.radius * 1.9,
    height:     -dimensions.raindrop.radius * 2,
    bottomLeft: {
      x: raindropCentre.x - dimensions.raindrop.radius * 0.95,
      y: raindropCentre.y  - dimensions.raindrop.radius * 0.325
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
