describe("Sum of two lowest positive integers", () => {
  it("should barbar", () => {
    function sumTwoSmallestNumbers(numbers: number[]): number {
      for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
          if (numbers[i] > numbers[j]) {
            let temp = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = temp;
          }
        }
      }
      return numbers[0] + numbers[1];
    }

    expect(sumTwoSmallestNumbers([5, 8, 12, 19, 22])).toBe(13);
  });

  it("should one line", () => {
    function sumTwoSmallestNumbers(numbers: number[]): number {
      let sum : number[] = numbers.sort((a,b) => a-b)
      return sum[0] + sum[1]
    }

    expect(sumTwoSmallestNumbers([5, 8, 12, 19, 22])).toBe(13);
  });
});
