import 'jest-extended';
import { getCoverageOfSensor } from './getCoverageOfSensor';
import { Coord, Sensor } from './types';

describe('getCoverageOfSensor()', () => {
  it.each<[Sensor, number, Coord[]]>([
    [
      { sensor: [0, 18], range: 2 },
      18,
      [
        [-2, 18],
        [-1, 18],
        [1, 18],
        [2, 18],
      ],
    ],
  ])(
    'Should return all coords covered by the sensor',
    (sensor, targetRow, expected) => {
      const coverage = new Set<string>();
      getCoverageOfSensor(sensor, targetRow, coverage);
      expect([...coverage]).toIncludeSameMembers(
        expected.map((r) => r.join(','))
      );
    }
  );
});
