import * as d3 from 'd3';

import {colours}       from './colours';
import * as dimensions from './dimensions';
import {drawRaindrop}  from './precipitation/raindrop';
import {drawHail}      from './precipitation/hail';
import {drawSnowflake} from './precipitation/snowflake';
import {drawSun}       from './sun/sun';
import {drawCloud}     from './cloud/cloud';
import {drawLightning} from './lightning/lightning';

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
  drawLightning()(svg);
}

draw('body');
