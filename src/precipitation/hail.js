import {colours}    from '../colours';
import {raindrop}   from '../dimensions';
import {drawCircle} from '../utils/svg-utils';

export function drawHail(centre) {
  return svg => (
    drawCircle(centre, raindrop.radius)(svg).attr('fill', colours.white)
  );
}
