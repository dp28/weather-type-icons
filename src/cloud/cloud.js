import {CloudLevel} from 'weather-type';

import {colours}              from '../colours';
import {circles, rect}        from './cloud-dimensions';
import {drawCircle, drawText} from '../utils/svg-utils';

export const drawFog  = drawText('FOG');
export const drawMist = drawText('MIST');

export function drawCloud(weatherType, svg) {
  const colour = getCloudColour(weatherType);
  if (colour) {
    const level = CloudLevel[weatherType.clouds.level].toLowerCase();
    const group = svg.append('g').attr({ fill: colour, class: `cloud ${level}` });
    return drawColouredCloud(colour, group);
  }
}

function drawColouredCloud(colour, svg) {
  const cloudCircles = circles.map(circle => (
    drawCircle(circle.centre, circle.radius)(svg)
  ));

  const cloudRect = svg.append('rect').attr(rect);
  return [cloudRect, ...cloudCircles];
}

function getCloudColour({ clouds }) {
  if (clouds.isBroken() || clouds.isLight())
    return colours.lightGrey;
  if (clouds.isHeavy())
    return colours.darkGrey;
}
