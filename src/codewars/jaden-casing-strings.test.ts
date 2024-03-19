interface String {
      toJadenCase(): string;
}
describe('Jaden Casing Strings', () => {
  it('should barbar', () => {
    String.prototype.toJadenCase = function (): string {
        let words: string[] = this.split(' ');
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i][0].toUpperCase() + words[i].slice(1);
        }
        return words.join(' ');
    };

      expect("How can mirrors be real if our eyes aren't real".toJadenCase()).toBe("How Can Mirrors Be Real If Our Eyes Aren't Real")
  });

  it('should one line', () => {
    String.prototype.toJadenCase = function (this: string): string {
        return this.split(' ').map(val => val[0].toUpperCase() + val.slice(1)).join(' ');
    };

      expect("How can mirrors be real if our eyes aren't real".toJadenCase()).toBe("How Can Mirrors Be Real If Our Eyes Aren't Real")
  });

  
})
