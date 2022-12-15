import { getCoords } from './getCoords';
import { Coord } from './types';

describe('getCoords()', () => {
  it.each<[string, Coord[]]>([
    [
      'Sensor at x=2, y=18: closest beacon is at x=-2, y=15',
      [
        [2, 18],
        [-2, 15],
      ],
    ],
    [
      'Sensor at x=9, y=16: closest beacon is at x=10, y=16',
      [
        [9, 16],
        [10, 16],
      ],
    ],
    [
      'Sensor at x=13, y=2: closest beacon is at x=15, y=3',
      [
        [13, 2],
        [15, 3],
      ],
    ],
    [
      'Sensor at x=12, y=14: closest beacon is at x=10, y=16',
      [
        [12, 14],
        [10, 16],
      ],
    ],
    [
      'Sensor at x=10, y=20: closest beacon is at x=10, y=16',
      [
        [10, 20],
        [10, 16],
      ],
    ],
    [
      'Sensor at x=14, y=17: closest beacon is at x=10, y=16',
      [
        [14, 17],
        [10, 16],
      ],
    ],
    [
      'Sensor at x=8, y=7: closest beacon is at x=2, y=10',
      [
        [8, 7],
        [2, 10],
      ],
    ],
    [
      'Sensor at x=2, y=0: closest beacon is at x=2, y=10',
      [
        [2, 0],
        [2, 10],
      ],
    ],
    [
      'Sensor at x=0, y=11: closest beacon is at x=2, y=10',
      [
        [0, 11],
        [2, 10],
      ],
    ],
    [
      'Sensor at x=20, y=14: closest beacon is at x=25, y=17',
      [
        [20, 14],
        [25, 17],
      ],
    ],
    [
      'Sensor at x=17, y=20: closest beacon is at x=21, y=22',
      [
        [17, 20],
        [21, 22],
      ],
    ],
    [
      'Sensor at x=16, y=7: closest beacon is at x=15, y=3',
      [
        [16, 7],
        [15, 3],
      ],
    ],
    [
      'Sensor at x=14, y=3: closest beacon is at x=15, y=3',
      [
        [14, 3],
        [15, 3],
      ],
    ],
    [
      'Sensor at x=20, y=1: closest beacon is at x=15, y=3',
      [
        [20, 1],
        [15, 3],
      ],
    ],
  ])(
    'should return the coords of the sensor and the beacon',
    (input, expected) => {
      expect(getCoords(input)).toStrictEqual(expected);
    }
  );
});
