import {CloudLevel} from 'weather-type';

import {colours}       from '../colours';
import {circles, rect} from './cloud-dimensions';
import {drawCircle}    from '../utils/svg-utils';

export function drawCloud(colour) {
  return drawCloudFromWeatherType;
}

function drawCloudFromWeatherType(svg, weatherType) {
  const colour = getCloudColour(weatherType);
  if (colour)
    return drawColouredCloud(colour, svg);
}

function drawColouredCloud(colour, svg) {
  const cloudCircles = circles.map(circle => (
    drawCircle(circle.centre, circle.radius)(svg).attr('fill', colour)
  ));

  const cloudRect = svg.append('rect').attr(rect).attr('fill', colour);
  return [cloudRect, ...cloudCircles];
}

function getCloudColour(weatherType) {
  const level = weatherType.clouds.level;
  if (level === CloudLevel.Broken || level === CloudLevel.Light)
    return colours.lightGrey;
  if (level === CloudLevel.Heavy)
    return colours.darkGrey;
}
