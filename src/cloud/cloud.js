import {circles, rect} from './cloud-dimensions';
import {drawCircle}    from '../utils/svg-utils';

export function drawCloud(colour) {
  return svg => drawCloudUncurried(colour, svg);
}

function drawCloudUncurried(colour, svg) {
  const cloudCircles = circles.map(circle => (
    drawCircle(circle.centre, circle.radius)(svg).attr('fill', colour)
  ));

  const cloudRect = svg.append('rect').attr(rect).attr('fill', colour);
  return [cloudRect, ...cloudCircles];
}
