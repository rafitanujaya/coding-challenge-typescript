describe('remove string', () => {
  it('should remove last and first string', () => {
    
    function removeChar (str : string) : string {
        return str.substring(1, str.length -1 )
         
    }

    expect(removeChar('hello')).toBe('ell')
  });

  it('should remove last and first string non build in function string', () => {
    
    function removeChar (str : string) : string {
        let temp : string = ''

        for(let i=1; i < str.length -1; i++) {
            temp += str[i]
        }
         
        return temp
    }

    expect(removeChar('hello')).toBe('ell')
    expect(removeChar('h')).toBe('')

  });
})
