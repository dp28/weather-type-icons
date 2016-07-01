import {cloud}      from '../dimensions';
import {drawCircle} from '../utils/svg-utils';

export function drawCloud(colour) {
  return svg => drawCloudUncurried(colour, svg);
}

function drawCloudUncurried(colour, svg) {
  const circles = cloud.circles.map(circle => (
    drawCircle(circle.centre, circle.radius)(svg).attr('fill', colour)
  ));

  const rect = svg.append('rect').attr(cloud.rect).attr('fill', colour);
  return [rect, ...circles];
}
