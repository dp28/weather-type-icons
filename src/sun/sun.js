import {colours}       from '../colours';
import * as dimensions from '../dimensions';
import {drawCircle}    from '../utils/svg-utils';

export function drawSun(sun) {
  return svg => drawSunUncurried(sun, svg);
}

const sunburstNumber = 12;

function drawSunUncurried(sun, svg) {
  const circle = drawCircle(sun.centre, sun.radius)(svg).attr('fill', colours.yellow);
  const bursts = buildSunbursts(sun, svg);
  return [circle, ...bursts];
}

function buildSunbursts(sun, svg) {
  return Array(sunburstNumber).fill().map((_, i) => (
    buildSunburst(sun, svg)
      .attr('transform', `rotate(${i * 360 / sunburstNumber}, ${sun.centre.x}, ${sun.centre.y})`)
  ));
}

function buildSunburst({ centre, radius, sunburstRadius }, svg) {
   const sunburstPoint = {
    x: centre.x + (sunburstRadius * Math.sin(0)),
    y: centre.y - (sunburstRadius * Math.cos(0)),
  }

  const halfSunburstWidth = sunburstRadius / 22;

  return svg.append('rect').attr({
    x: sunburstPoint.x - halfSunburstWidth,
    y: sunburstPoint.y - halfSunburstWidth,
    width: halfSunburstWidth * 2,
    height: sunburstRadius - radius,
    fill: colours.yellow
  });
};
