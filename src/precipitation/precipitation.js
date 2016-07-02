import {PrecipitationType} from 'weather-type';

import {firstPoint, secondPoint} from './precipitation-dimensions';
import {drawRaindrop}            from './raindrop';
import {drawHail}                from './hail';
import {drawSnowflake}           from './snowflake';
import {applyAll}                from '../utils/functional';

const drawingFunctions = {
  [PrecipitationType.Rain]: drawRaindrop,
  [PrecipitationType.Hail]: drawHail,
  [PrecipitationType.Snow]: drawSnowflake
}

const drawSleet = applyAll(drawSnowflake(firstPoint), drawRaindrop(secondPoint));

export function drawPrecipitation({ precipitation }, svg) {
  if (!precipitation.isApplicable())
    return;
  if (precipitation.isSleet())
    return drawSleet(svg);
  return drawPrecipitationParts(precipitation)(svg);
}

function drawPrecipitationParts(precipitation) {
  const drawPart = drawingFunctions[precipitation.type];
  if (precipitation.isLight())
    return drawPart(firstPoint);
  else
    return applyAll(drawPart(firstPoint), drawPart(secondPoint));
}
