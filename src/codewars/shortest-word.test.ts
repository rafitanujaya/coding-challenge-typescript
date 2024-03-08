describe('Shortest-word', () => {
  it('should option barbar', () => {
    function findShort(s: string): number{
        let temp: number[] = s.split(' ').map(val => val.length);
        let sortWord : number =  temp[0]

        for(let i = 0; i < temp.length; i++) {
            if(sortWord > temp[i]) {
                sortWord = temp[i]
            }
        }
        return sortWord
    }

    expect(findShort('"turns out random test cases are easier than writing out basic ones"'))
        .toBe(3)
  });

  it('should one line', () => {
    function findShort(s: string): number{
        return Math.min(...s.split(' ').map(val => val.length))
    }

    expect(findShort('"turns out random test cases are easier than writing out basic ones"'))
        .toBe(3)
  });
})
