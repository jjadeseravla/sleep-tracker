import 'grid' from '../grid.js';

describe('Grid Tests', () => {

  it('should give back array', () => {
    const MONTH_LENGTH = 30;
    const result = createMonthLength(MONTH_LENGTH);
    const expected = [];
    expect(result).toEqual(expected);
  })

})
