import {colours}        from '../colours';
import {raindropRadius} from './precipitation-dimensions';
import {drawCircle}     from '../utils/svg-utils';

export function drawHail(centre) {
  return svg => (
    drawCircle(centre, raindropRadius)(svg).attr('fill', colours.white)
  );
}
