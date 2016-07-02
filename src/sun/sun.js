import {width, height} from '../dimensions';
import {drawCircle}    from '../utils/svg-utils';
import {colours}       from '../colours';

export function drawSun(weatherType, svg) {
  const sun = getSun(weatherType);
  if (sun) {
    const group = svg.append('g').attr( { fill: colours.yellow, class: 'sun' });
    return drawSunUncurried(sun, group);
  }
}

const centre = { x: width / 2, y: height / 2 };

export const smallSun = {
  radius:         15,
  centre:         { x: centre.x + 22, y: centre.y - 25 },
  sunburstRadius: 22
};

export const largeSun = {
  radius:         24,
  centre:         centre,
  sunburstRadius: 38
};

function getSun(weather) {
  if (weather.clouds.isClear())
    return largeSun;
  if (showSmallSun(weather))
    return smallSun;
}

function showSmallSun({ clouds, precipitation }) {
  return clouds.isBroken() || (precipitation.isApplicable() && precipitation.isShowers());
}

const sunburstNumber = 12;

function drawSunUncurried(sun, svg) {
  const circle = drawCircle(sun.centre, sun.radius)(svg);
  const bursts = buildSunbursts(sun, svg);
  return [circle, ...bursts];
}

function buildSunbursts(sun, svg) {
  return Array(sunburstNumber).fill().map((_, i) => (
    buildSunburst(sun, svg)
      .attr('transform', `rotate(${i * 360 / sunburstNumber}, ${sun.centre.x}, ${sun.centre.y})`)
  ));
}

function buildSunburst({ centre, radius, sunburstRadius }, svg) {
   const sunburstPoint = {
    x: centre.x + (sunburstRadius * Math.sin(0)),
    y: centre.y - (sunburstRadius * Math.cos(0)),
  }

  const halfSunburstWidth = sunburstRadius / 22;

  return svg.append('rect').attr({
    x: sunburstPoint.x - halfSunburstWidth,
    y: sunburstPoint.y - halfSunburstWidth,
    width: halfSunburstWidth * 2,
    height: sunburstRadius - radius
  });
};
