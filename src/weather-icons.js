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
  drawOn(buildRootElement(selector));
}

function drawOn(svg) {
  [
    drawSun(dimensions.sun.small),
    drawCloud(colours.darkGrey),
    drawRaindrop(dimensions.raindrop.firstCentre),
    drawSnowflake(dimensions.raindrop.secondCentre),
    drawLightning()
  ].forEach(drawComponent => drawComponent(svg));
}

const rootElementAttributes = {
  viewBox: `${dimensions.left} ${dimensions.top} ${dimensions.width} ${dimensions.height}`,
  preserveAspectRatio: 'xMidYMid meet'
}

function buildRootElement(selector) {
  return d3
    .select(selector)
    .append('svg')
    .attr(rootElementAttributes)
    .append('g');
}
