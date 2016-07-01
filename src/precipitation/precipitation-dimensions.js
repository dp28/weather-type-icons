import {centre as cloudCentre} from '../cloud/cloud-dimensions';

export const raindropRadius = 7;

export const firstPoint = {
  x: cloudCentre.bottomLeft.x + cloudCentre.width * 0.75,
  y: cloudCentre.bottomLeft.y
}

export const secondPoint = {
  x: cloudCentre.bottomLeft.x + cloudCentre.width * 0.25,
  y: cloudCentre.bottomLeft.y + raindropRadius
}
