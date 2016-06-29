import * as d3 from 'd3';

export function draw(selector, width = 200, height = 200) {
  const svg = d3
    .select(selector)
    .append('svg')
    .attr('width', width)
    .attr('height', height);

  const centre = { x: width / 2, y: height / 2 };
  const sunColour = 'gold';

  function drawCircle({ x, y }, radius) {
    return svg
      .append('circle')
      .attr('cx', x)
      .attr('cy', y)
      .attr('r', radius)
  };

  const innerRadius = 20;
  const outerRadius = 30;

  drawCircle(centre, innerRadius)
    .attr('fill', sunColour);

  function buildSunburst() {
     const sunburstPoint = {
      x: centre.x + (outerRadius * Math.sin(0)),
      y: centre.y - (outerRadius * Math.cos(0)),
    }

    const halfSunburstPointWidth = 2;

    return svg.append('rect').attr({
      x: sunburstPoint.x - halfSunburstPointWidth,
      y: sunburstPoint.y - halfSunburstPointWidth,
      width: halfSunburstPointWidth * 2,
      height: outerRadius - innerRadius,
      fill: sunColour
    });
  };

  const numSunbursts = 12;
  Array(numSunbursts).fill().forEach((_, i) => (
    buildSunburst().attr('transform', `rotate(${i * 360 / numSunbursts}, ${centre.x}, ${centre.y})`)
  ));

  const cloudBaseY = 150;
  const cloudRightRadius = 25;
  const cloudLeftRadius = 20;
  const cloudColour = 'grey';
  const cloudCentreWidth = 55;
  const cloudCentreStart = 50;

  function drawCloudCircle(centre, radius) {
    return drawCircle(centre, radius).attr('fill', cloudColour);
  }

  drawCloudCircle({ x: cloudCentreStart, y: cloudBaseY - cloudLeftRadius}, cloudLeftRadius);
  drawCloudCircle({ x: cloudCentreStart + cloudCentreWidth, y: cloudBaseY - cloudRightRadius}, cloudRightRadius);
  drawCloudCircle({ x: cloudCentreStart + cloudCentreWidth / 2, y: cloudBaseY - 1.65 * cloudRightRadius}, 1.1 * cloudRightRadius);
  svg.append('rect').attr({
    x: cloudCentreStart,
    y: cloudBaseY - cloudLeftRadius * 2,
    width: cloudCentreWidth,
    height: cloudLeftRadius * 2,
    fill: cloudColour
  });

  const raindropRadius = cloudLeftRadius / 2.5;
  const raindropColour = 'dodgerblue';

  drawRaindrop({ x: cloudCentreStart + cloudCentreWidth * 0.75, y: cloudBaseY }, raindropRadius * 1.2);
  drawRaindrop({ x: cloudCentreStart + cloudCentreWidth / 4, y: cloudBaseY + raindropRadius });

  const lightningWidth = cloudCentreWidth / 2;
  drawLightning({
    x: cloudCentreStart + cloudCentreWidth / 4,
    y: cloudBaseY + lightningWidth / 4
  }, lightningWidth);

  function drawRaindrop(raindropCentre) {
    drawCircle(raindropCentre, raindropRadius).attr('fill', raindropColour);

    drawIsoscelesTriangle(raindropRadius * 1.9, -raindropRadius * 2, { x: raindropCentre.x - raindropRadius * 0.95, y: raindropCentre.y  - raindropRadius * 0.325 })
      .attr('fill', raindropColour)
      .attr('transform', `rotate(15, ${raindropCentre.x}, ${raindropCentre.y})`);
  };

  function drawIsoscelesTriangle(width, height, bottomLeft) {
    return svg
      .append('polyline')
      .attr('points', [
        `${bottomLeft.x} ${bottomLeft.y}`,
        `${bottomLeft.x + width / 2} ${bottomLeft.y + height}`,
        `${bottomLeft.x + width} ${bottomLeft.y}`
      ]);
  };

  function drawLightning(left, width) {
    const height = width;
    const fifthWidth = width / 5;
    return svg
      .append('polyline')
      .attr('points', [
        `${left.x} ${left.y}`,
        `${left.x + fifthWidth} ${left.y - height}`,
        `${left.x + 3 * fifthWidth} ${left.y - height}`,
        `${left.x + width / 2} ${left.y - height / 2}`,
        `${left.x + width} ${left.y - height / 2}`,
        `${left.x + fifthWidth} ${left.y + height}`,
        `${left.x + 2 * fifthWidth} ${left.y}`
      ])
      .attr('fill', sunColour);
  }

  function drawHail(centre) {
    const colour = 'white';
    drawCircle(centre, raindropRadius).attr('fill', colour);
  }

  function drawSnowflake(centre, radius) {
    const innerRadius = radius / 2;
    const colour = 'white';

    const numSnowflakeParts = 6;
    Array(numSnowflakeParts).fill().forEach((_, i) => (
      buildSnowflakePart(centre, innerRadius, innerRadius)
        .attr('transform', `rotate(${i * 360 / numSnowflakeParts}, ${centre.x}, ${centre.y})`)
        .attr('fill', colour)
    ));
  };

  function buildSnowflakePart(centre, radius, height) {
    const point = {
      x: centre.x,
      y: centre.y,
    }

    const halfWidth = height / 3;

    return svg.append('rect').attr({
      x: point.x - halfWidth,
      y: point.y,
      width: halfWidth * 2,
      height: height * 2
    });
  };
}

draw('body');
