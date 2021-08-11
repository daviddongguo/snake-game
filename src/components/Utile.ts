export type Position = {
  x: number;
  y: number;
};

export type Direction = 0 | 1 | 2 | 3;

export const modelTurn = (direct: Direction, value: -1 | 1): Direction =>
  // eslint-disable-next-line implicit-arrow-linebreak
  ((direct + 4 + value) % 4) as Direction;

export const randomPosition = (): Position => {
  function rnd() {
    return Math.floor(Math.random() * 30) * 10;
  }
  const x = rnd();
  const y = rnd();
  return { x, y };
};

export const isInStage = (p: Position): boolean => p.x >= 0 && p.x <= 290 && p.y >= 0 && p.y <= 290;

export const move = (header: Position, direct: number): Position => {
  switch (direct) {
    case 0:
      return { x: header.x, y: header.y - 10 };
    case 1:
      return { x: header.x + 10, y: header.y };
    case 2:
      return { x: header.x, y: header.y + 10 };
    case 3:
      return { x: header.x - 10, y: header.y };
    default:
      return header;
  }
};

export const isSame = (p1: Position, p2: Position): boolean => p1.x === p2.x && p1.y === p2.y;
