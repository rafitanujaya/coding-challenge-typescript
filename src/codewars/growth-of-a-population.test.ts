describe('Growth of a Population', () => {
  it('should barbar', () => {

    function nbYear(p0: number, percent: number, aug:number, p:number): number {
        const presentase : number = percent / 100;
        let years: number = 0;
        while (p0 < p) {
            p0 = Math.floor(p0 + p0 * presentase + aug);
            years++
        }
        return years;
    }

    expect(nbYear(1500, 5, 100, 5000)).toBe(15)
  });
})
