describe('descendingOrder', () => {
  it('should ', () => {
    function descendingOrder (n : number ) : number {
        return Number(n.toString().split('').sort().reverse().join(''))
    }

    expect(descendingOrder(123456789)).toBe(987654321)

  });

  it('should barbar', () => {
    function descendingOrder (n : number ) : number {

        let arr = n.toString().split('').map(val => Number(val))

        for(let i = 0; i < arr.length; i++) {
            for(let j = i+1; j < arr.length; j++) {
                if(arr[i] < arr[j]) {
                    let temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp
                }
            }
        }

        return Number(arr.join(''))
    }

    expect(descendingOrder(123)).toBe(321)
    expect(descendingOrder(123456789)).toBe(987654321)
  });
})
