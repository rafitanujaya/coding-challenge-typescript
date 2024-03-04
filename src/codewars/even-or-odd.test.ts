describe('Even or Odd', () => {
  it('should ', () => {
    function evenOrOdd (numbers : number) : string {
        return numbers % 2 == 0 ? 'Even' : 'Odd'
    }

    expect(evenOrOdd(2)).toBe('Even')
    expect(evenOrOdd(1)).toBe('Odd')
  });
})
