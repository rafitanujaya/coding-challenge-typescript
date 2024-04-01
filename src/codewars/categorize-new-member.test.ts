describe('Categorize New Member', () => {
  it('should barbar', () => {
    function openOrSenior(data: number[][]): string[]{
        const category: string[] = [];
        for(let i = 0; i < data.length ; i++) {
          if(data[i][0] >= 55 && data[i][1] > 7) {
            category.push('Senior')
          } else {
            category.push('Open')
          }
        }
        return category
      }

    expect(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]])).toEqual(['Open', 'Senior', 'Open', 'Senior'])
  });
})
