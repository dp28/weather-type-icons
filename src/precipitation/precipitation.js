import {PrecipitationLevel, PrecipitationDuration, PrecipitationType} from 'weather-type';

import {firstPoint, secondPoint} from './precipitation-dimensions';
import {drawRaindrop}            from './raindrop';
import {drawHail}                from './hail';
import {drawSnowflake}           from './snowflake';

export function drawPrecipitation(svg, { precipitation }) {
  if (precipitation.level === PrecipitationLevel.None)
    return;
  if (precipitation.type === PrecipitationType.Sleet)
    return drawSleet(svg);
  return drawPrecipitationParts(svg, precipitation);
}

function drawSleet(svg) {
  drawSnowflake(firstPoint)(svg);
  drawRaindrop(secondPoint)(svg);
}

function drawPrecipitationParts(svg, precipitation) {
  const drawPart = selectDrawingFunction(precipitation);
  if (precipitation.level === PrecipitationLevel.Heavy)
    drawPart(secondPoint)(svg);
  drawPart(firstPoint)(svg);
}

function selectDrawingFunction(precipitation) {
  switch(precipitation.type) {
    case PrecipitationType.Rain: return drawRaindrop;
    case PrecipitationType.Hail: return drawHail;
    default:                     return drawSnowflake;
  }
}
