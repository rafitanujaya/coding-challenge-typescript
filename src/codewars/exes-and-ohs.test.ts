describe("Exes and Ohs", () => {
  it("should barbar", () => {
    function XO(str: string): boolean {
      let xCount: number = 0,
        oCount: number = 0;

      for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() == "x") {
          xCount++;
        } else if (str[i].toLowerCase() == "o") {
          oCount++;
        }
      }

      if (xCount == oCount) {
        return true;
      }
      return false;
    }

    expect(XO("xo")).toBe(true);
    expect(XO("ooom")).toBe(false);
  });

  it("should short line", () => {
    function XO(str: string): boolean {
      let temp: string[] = str.split('');
      return (temp.filter(val => val.toLowerCase() == 'x').length) === (temp.filter(val => val.toLowerCase() == 'o').length)
    }

    expect(XO("xo")).toBe(true);
    expect(XO("ooom")).toBe(false);
  });
});
