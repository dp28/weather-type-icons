import {colours}        from '../colours';
import {raindropRadius} from './precipitation-dimensions';
import {drawCircle}     from '../utils/svg-utils';

export function drawSnowflake(centre) {
  return svg => {
    const group = svg.append('g').attr({ class: 'snowflake', fill: colours.white });
    drawSnowflakeUncurried(centre, group);
    return group;
  };
}

const radius            = raindropRadius * 1.2;
const innerRadius       = radius / 2;
const numSnowflakeParts = 6;

function drawSnowflakeUncurried(centre, svg) {
  return Array(numSnowflakeParts).fill().map((_, i) => (
    buildSnowflakePart(centre, innerRadius, innerRadius, svg)
      .attr('transform', `rotate(${i * 360 / numSnowflakeParts}, ${centre.x}, ${centre.y})`)
  ));
};

function buildSnowflakePart(centre, radius, height, svg) {
  const halfWidth = height / 3;

  return svg.append('rect').attr({
    x: centre.x - halfWidth,
    y: centre.y,
    width: halfWidth * 2,
    height: height * 2
  });
};
