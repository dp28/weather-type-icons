import {StormLevel} from 'weather-type';

import {colours}               from '../colours';
import {centre as cloudCentre} from '../cloud/cloud-dimensions';

const width      = cloudCentre.width / 2;
const height     = width;
const fifthWidth = width / 5;

const left = {
  x: cloudCentre.bottomLeft.x + width / 2,
  y: cloudCentre.bottomLeft.y + width / 8
}

const points = [
  `${left.x} ${left.y}`,
  `${left.x + fifthWidth} ${left.y - height}`,
  `${left.x + 3 * fifthWidth} ${left.y - height}`,
  `${left.x + width / 2} ${left.y - height / 2}`,
  `${left.x + width} ${left.y - height / 2}`,
  `${left.x + fifthWidth} ${left.y + height}`,
  `${left.x + 2 * fifthWidth} ${left.y}`,
  `${left.x} ${left.y}`
]

const attributes = {
  points: points,
  fill:   colours.yellow,
  class:  'lightning'
}

export function drawLightning(weatherType, svg) {
  if (weatherType.storm.level === StormLevel.Thunderstorm)
    return svg.append('polyline').attr(attributes);
}
