import d3 from 'd3';

import {colours}           from './colours';
import * as dimensions     from './dimensions';
import {drawPrecipitation} from './precipitation/precipitation';
import {drawSun}           from './sun/sun';
import {drawCloud}         from './cloud/cloud';
import {drawLightning}     from './lightning/lightning';

export function draw(weatherType, selector) {
  drawOn(weatherType, buildRootElement(selector));
}

function drawOn(weatherType, svg) {
  [
    drawSun(),
    drawCloud(),
    drawPrecipitation,
    drawLightning()
  ].forEach(drawComponent => drawComponent(svg, weatherType));
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
