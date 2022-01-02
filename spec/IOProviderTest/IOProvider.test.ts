import { IOProvider } from '../../src/IOProvider';

describe('IO Provider', () => {
  describe('Read file', () => {
    const fileName = 'spec/IOProviderTest/IODataReadProvider.txt';
    const notExistFileName = 'spec/IOProviderTest/IODataReadProvider1.txt';

    it('Read', () => {
      const expected =
        '[[0,0,1,1,1],[1,0,0,1,0],[1,0,0,0,1],[0,0,1,1,0],[0,0,1,0,0]]';

      const provider = new IOProvider(fileName);
      const [actual] = provider.readFileSync();

      expect(actual).toBe(expected);
    });

    it('Show return `File not found` error', () => {
      const provider = new IOProvider(notExistFileName);

      const [, actual] = provider.readFileSync();

      expect(actual).toEqual(new Error('File not found'));
    });

    describe('Write file', () => {
      const fileName = 'spec/IOProviderTest/IODataWriteProvider.txt';

      it('Write file', () => {
        const expected = 'Test data';

        const provider = new IOProvider(fileName);
        const [actual] = provider.writeFileSync(expected);

        expect(actual).toBe(expected);
      });
    });
  });
});
