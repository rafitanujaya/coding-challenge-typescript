describe('List Filtering', () => {
  it('should filter number or string of array', () => {
    function filter_list(l: Array<number|string>) : number[] {
        let temp: number[] = []
        for(let i = 0; i < l.length ; i++) {
            if(typeof l[i] == 'number') {
                temp.push(l[i] as number)
            }
        }
        return temp
      }


      expect(filter_list([1,2,'aasf','1','123',123])).toEqual([1,2,123])
  });

  it('should one line', () => {
    function filter_list(l: Array<number|string>) : number[] {
        return l.filter(val => typeof val == 'number') as number[]
      }


      expect(filter_list([1,2,'aasf','1','123',123])).toEqual([1,2,123])
  });
})
