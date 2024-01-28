function path(root: string, sublink: string) {
  return `${root}${sublink}`;
}

const ROOTS_FLIGHTS = '/flights';
const ROOT_STAYS = '/stays';
const ROOT_CAR_RENTALS = '/car-rentals';

export const PATH_FLIGHTS = {
  root: ROOTS_FLIGHTS,
};

export const PATH_STAYS = {
  root: ROOT_STAYS,
};

export const PATH_CAR_RENTALS = {
  root: ROOT_CAR_RENTALS,
};
