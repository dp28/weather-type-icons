import {PrecipitationType} from 'weather-type';

import {firstPoint, secondPoint} from './precipitation-dimensions';
import {drawRaindrop}            from './raindrop';
import {drawHail}                from './hail';
import {drawSnowflake}           from './snowflake';

const drawingFunctions = {
  [PrecipitationType.Rain]: drawRaindrop,
  [PrecipitationType.Hail]: drawHail,
  [PrecipitationType.Snow]: drawSnowflake
}

export function drawPrecipitation({ precipitation }, svg) {
  if (!precipitation.isApplicable())
    return;
  if (precipitation.isSleet())
    return drawSleet(svg);
  return drawPrecipitationParts(svg, precipitation);
}

function drawSleet(svg) {
  drawSnowflake(firstPoint)(svg);
  drawRaindrop(secondPoint)(svg);
}

function drawPrecipitationParts(svg, precipitation) {
  const drawPart = drawingFunctions[precipitation.type];
  if (precipitation.isHeavy())
    drawPart(secondPoint)(svg);
  drawPart(firstPoint)(svg);
}
