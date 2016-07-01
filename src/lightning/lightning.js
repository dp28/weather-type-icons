import {colours}    from '../colours';
import {lightning}  from '../dimensions';
import {drawCircle} from '../utils/svg-utils';

export function drawLightning() {
  return svg => drawLightningOn(svg);
}

const left       = lightning.centreLeft;
const width      = lightning.width;
const height     = width;
const fifthWidth = width / 5;

const lightningPoints = [
  `${left.x} ${left.y}`,
  `${left.x + fifthWidth} ${left.y - height}`,
  `${left.x + 3 * fifthWidth} ${left.y - height}`,
  `${left.x + width / 2} ${left.y - height / 2}`,
  `${left.x + width} ${left.y - height / 2}`,
  `${left.x + fifthWidth} ${left.y + height}`,
  `${left.x + 2 * fifthWidth} ${left.y}`
]

const attributes = {
  points: lightningPoints,
  fill:   colours.yellow
}

function drawLightningOn(svg) {
  return svg.append('polyline').attr(attributes);
}
