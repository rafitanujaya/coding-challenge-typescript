describe('Disemvowel Trolls', () => {
  it('should remove troll vowel', () => {
    function disemvowel(str: string) : string {
        const vowel:string = 'aiueoAIUEO'
        let temp : string = ''
        for(let i = 0; i < str.length; i++) {
          if(!vowel.includes(str[i])) {
            temp += str[i]
          }
        }
        return temp;
      }

      expect(disemvowel("No offense but,\nYour writing is among the worst I've ever read")).toBe("N ffns bt,\nYr wrtng s mng th wrst 'v vr rd");
  });
})
