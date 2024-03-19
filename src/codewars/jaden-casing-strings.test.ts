describe('Jaden Casing Strings', () => {
  it('should barbar', () => {
     function toJadenCase (input : string): string {
        let words = input.split(' ');
        for(let i = 0; i < words.length; i++) {
         words[i] = words[i][0].toUpperCase() + words[i].slice(1)
        }
        return words.join(' ')
      };

      expect(toJadenCase("How can mirrors be real if our eyes aren't real")).toBe("How Can Mirrors Be Real If Our Eyes Aren't Real")
  });
})
