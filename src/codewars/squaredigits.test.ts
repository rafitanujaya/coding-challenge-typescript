describe('squareDigits', () => {
  it('should barbar', () => {
    function squareDigits(num: number) : number{
        let numStr: string = String(num)
        let temp: number[] = [];

        for(let i = 0; i < numStr.length ; i++) {
            let n: number = Number(numStr[i])
            temp.push(n * n)
        }
        numStr = '';
        for(let i = 0; i < temp.length; i++) {
            numStr += String(temp[i]);
        }

        return Number(numStr)
      }

      expect(squareDigits(3212)).toBe(9414)
    
  });

  it('should one line', () => {
    function squareDigits(num: number) : number{
        return Number(num.toString().split('').map(val => Number(val) * Number(val)).join(''))
      }

      expect(squareDigits(3212)).toBe(9414)
    
  });
})
