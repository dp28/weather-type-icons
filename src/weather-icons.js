import * as d3 from 'd3';

import {colours}       from './colours';
import * as dimensions from './dimensions';
import {drawRaindrop}  from './precipitation/raindrop';
import {drawCircle}    from './utils/svg-utils';

export function draw(selector) {
  const svg = d3
    .select(selector)
    .append('svg')
    .attr('viewBox', `${dimensions.left} ${dimensions.top} ${dimensions.width} ${dimensions.height}`)
    .attr('preserveAspectRatio', 'xMidYMid meet')
    .attr('width', 500)
    .append('g');

  drawSun();

  function drawSun() {
    const sun = dimensions.sun.small;

    drawCircle(sun.centre, sun.radius)(svg)
      .attr('fill', colours.yellow);

    function buildSunburst() {
       const sunburstPoint = {
        x: sun.centre.x + (sun.sunburst.radius * Math.sin(0)),
        y: sun.centre.y - (sun.sunburst.radius * Math.cos(0)),
      }

      const halfSunburstWidth = sun.sunburst.width / 2;

      return svg.append('rect').attr({
        x: sunburstPoint.x - halfSunburstWidth,
        y: sunburstPoint.y - halfSunburstWidth,
        width: sun.sunburst.width,
        height: sun.sunburst.radius - sun.radius,
        fill: colours.yellow
      });
    };
    Array(sun.sunburst.number).fill().forEach((_, i) => (
      buildSunburst()
        .attr('transform', `rotate(${i * 360 / sun.sunburst.number}, ${sun.centre.x}, ${sun.centre.y})`)
    ));
  }

  function drawCloudCircle({ centre, radius }) {
    return drawCircle(centre, radius)(svg).attr('fill', colours.darkGrey);
  }

  dimensions.cloud.circles.forEach(drawCloudCircle)

  svg.append('rect')
    .attr(dimensions.cloud.rect)
    .attr('fill', colours.darkGrey);

  drawRaindrop(dimensions.raindrop.firstCentre)(svg);
  drawRaindrop(dimensions.raindrop.secondCentre)(svg);

  drawLightning();

  function drawLightning() {
    const left   = dimensions.lightning.centreLeft;
    const width  = dimensions.lightning.width;
    const height = width;
    const fifthWidth = width / 5;
    return svg
      .append('polyline')
      .attr('points', [
        `${left.x} ${left.y}`,
        `${left.x + fifthWidth} ${left.y - height}`,
        `${left.x + 3 * fifthWidth} ${left.y - height}`,
        `${left.x + width / 2} ${left.y - height / 2}`,
        `${left.x + width} ${left.y - height / 2}`,
        `${left.x + fifthWidth} ${left.y + height}`,
        `${left.x + 2 * fifthWidth} ${left.y}`
      ])
      .attr('fill', colours.yellow);
  }

  function drawHail(centre) {
    drawCircle(centre, dimensions.raindrop.radius)(svg).attr('fill', colours.white);
  }

  function drawSnowflake(centre, radius) {
    const innerRadius = radius / 2;

    const numSnowflakeParts = 6;
    Array(numSnowflakeParts).fill().forEach((_, i) => (
      buildSnowflakePart(centre, innerRadius, innerRadius)
        .attr('transform', `rotate(${i * 360 / numSnowflakeParts}, ${centre.x}, ${centre.y})`)
        .attr('fill', colours.white)
    ));
  };

  function buildSnowflakePart(centre, radius, height) {
    const point = {
      x: centre.x,
      y: centre.y,
    }

    const halfWidth = height / 3;

    return svg.append('rect').attr({
      x: point.x - halfWidth,
      y: point.y,
      width: halfWidth * 2,
      height: height * 2
    });
  };
}

draw('body');
