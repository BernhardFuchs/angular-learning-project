import { CapitalizedPipe } from './capitalized.pipe';

describe('CapitalizedPipe', () => {
  it('should format correctly in capitals', () => {
    const pipe = new CapitalizedPipe();
    expect(pipe.transform('max mustermann')).toEqual('Max Mustermann');
  });
});
