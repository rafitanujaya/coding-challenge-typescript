describe("Get Middle char in word", () => {
  it("should get middle char if word odd return 1 middle char if even return 2 middle char", () => {
    function getMiddle(s: string): string {
      let middle: string = "";
      if (s.length % 2 == 0) {
        middle += s[s.length / 2 - 1];
        middle += s[s.length / 2];
        return middle;
      } else {
        middle += s[Math.floor(s.length / 2)];
        return middle;
      }
    }

    expect(getMiddle("testing")).toBe("t");
    expect(getMiddle("test")).toBe("es");
  });

  it("should non temp", () => {
    function getMiddle(s: string): string {
      return s.length % 2 == 0
        ? s.substring(s.length / 2 - 1, s.length / 2 + 1)
        : s.substring(Math.floor(s.length / 2), Math.ceil(s.length / 2));
    }

    expect(getMiddle("testing")).toBe("t");
    expect(getMiddle("test")).toBe("es");
  });
});
