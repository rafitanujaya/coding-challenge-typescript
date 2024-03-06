describe('descendingOrder', () => {
  it('should ', () => {
    function descendingOrder (n : number ) : number {
        return Number(n.toString().split('').sort().reverse().join(''))
    }

    expect(descendingOrder(123456789)).toBe(987654321)

  });
})
