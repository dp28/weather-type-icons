import d3 from 'd3';

import {colours}          from './colours';
import * as dimensions    from './dimensions';
import * as precipitation from './precipitation/precipitation-dimensions';
import {drawRaindrop}     from './precipitation/raindrop';
import {drawHail}         from './precipitation/hail';
import {drawSnowflake}    from './precipitation/snowflake';
import * as suns          from './sun/sun-dimensions';
import {drawSun}          from './sun/sun';
import {drawCloud}        from './cloud/cloud';
import {drawLightning}    from './lightning/lightning';

export function draw(selector) {
  drawOn(buildRootElement(selector));
}

function drawOn(svg) {
  [
    drawSun(suns.small),
    drawCloud(colours.darkGrey),
    drawRaindrop(precipitation.firstPoint),
    drawHail(precipitation.secondPoint),
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
