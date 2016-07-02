import {colours}                  from '../colours';
import {raindropRadius as radius} from './precipitation-dimensions';
import {drawCircle}               from '../utils/svg-utils';

export function drawRaindrop(centre) {
  return svg => {
    const group = svg.append('g').attr({ class: 'raindrop', fill: colours.blue });
    drawRaindropUncurried(centre, group);
    return group;
  };
}

function drawRaindropUncurried(centre, svg) {
  drawCircle(centre, radius)(svg);
  drawTail(centre, svg);
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
