import * as d3 from 'd3';

import {colours}       from './colours';
import * as dimensions from './dimensions';
import {drawRaindrop}  from './precipitation/raindrop';
import {drawHail}      from './precipitation/hail';
import {drawSnowflake} from './precipitation/snowflake';
import {drawSun}       from './sun/sun';
import {drawCloud}     from './cloud/cloud';

export function draw(selector) {
  const svg = d3
    .select(selector)
    .append('svg')
    .attr('viewBox', `${dimensions.left} ${dimensions.top} ${dimensions.width} ${dimensions.height}`)
    .attr('preserveAspectRatio', 'xMidYMid meet')
    .attr('width', 500)
    .append('g');

  drawSun(dimensions.sun.small)(svg);
  drawCloud(colours.darkGrey)(svg);

  drawRaindrop(dimensions.raindrop.firstCentre)(svg);
  drawSnowflake(dimensions.raindrop.secondCentre)(svg);

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
  };
}

draw('body');
