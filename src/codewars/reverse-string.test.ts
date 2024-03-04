describe('Reverse String', () => {
  it('should ', () => {
    const reverseString = (str : string) :string => {
        return str.split('').reverse().join('')
    }

    expect(reverseString('hai')).toBe('iah');
  });

  it('should ', () => {
    const reverseString = (str : string) :string => {
        let temp: string = ''
        for (let i = str.length - 1; i >= 0 ; i--) {
            temp += str[i];
        }
        return temp;
    }
    expect(reverseString('hai')).toBe('iah');
  });
})
