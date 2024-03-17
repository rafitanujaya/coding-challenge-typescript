describe("Isograms", () => {
  it("should barbar", () => {
    function isIsogram(str: string): boolean {
      if (str.length == 0) {
        return true;
      }
      
      str = str.toLowerCase();
      for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
          if (str[i].toLowerCase() == str[j].toLowerCase()) {
            return false;
          }
        }
      }
      return true;
    }

    expect(isIsogram("isogram")).toBe(true);
    expect(isIsogram("isIsogram")).toBe(false);
  });
});
