describe("Mumbling", () => {
  it("should barbar", () => {
    function accum(s: string): string {
      // your code
      let temp: string[] = s.split("");
      for (let i = 0; i < s.length; i++) {
        const upper : string = temp[i];
        temp[i] = upper.toUpperCase();
      }
      for (let i = 0; i < s.length; i++) {
        const lower : string = temp[i];
        for (let j = 0; j < i; j++) {
          temp[i] += lower.toLowerCase();
        }
      }
      return temp.join("-");
    }

    expect(accum("ZpglnRxqenU")).toBe(
      "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
    );
  });

  it("should barbar", () => {
    function accum(s: string): string {
      return s.split('').map((val, i) => val.toUpperCase() + val.toLowerCase().repeat(i)).join('-')
    }

    expect(accum("ZpglnRxqenU")).toBe(
      "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"
    );
  });
});
