import {CloudLevel} from 'weather-type';

import {colours}       from '../colours';
import {circles, rect} from './cloud-dimensions';
import {drawCircle}    from '../utils/svg-utils';

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

function getCloudColour(weatherType) {
  const level = weatherType.clouds.level;
  if (level === CloudLevel.Broken || level === CloudLevel.Light)
    return colours.lightGrey;
  if (level === CloudLevel.Heavy)
    return colours.darkGrey;
}
