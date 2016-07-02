import d3 from 'd3';

import {colours}           from './colours';
import * as dimensions     from './dimensions';
import {drawPrecipitation} from './precipitation/precipitation';
import {drawSun}           from './sun/sun';
import {drawCloud}         from './cloud/cloud';
import {drawLightning}     from './lightning/lightning';

const partDrawingFunctions = [ drawSun, drawCloud, drawPrecipitation, drawLightning ];

export function draw(weatherType, selector) {
  const rootElement = buildRootElement(selector);
  partDrawingFunctions.forEach(drawPart => drawPart(weatherType, rootElement));
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
