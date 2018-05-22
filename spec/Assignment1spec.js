//q1 
describe("sumOfNumbers", function () {
  it("should return addition of all positve numbers", function () {
    expect(positiveSum([6, 7])).toBe(13);
  })

  it("should exclude all the negative numbers in addition", function () {
    expect(positiveSum([-1, 5])).toBe(5);
  })

  it("should return 0 if there is an empty array", function () {
    expect(positiveSum([])).toBe(0);
  })

  it("should return 0 when there is no positive number", function () {
    expect(positiveSum([-1, -6])).toBe(0);
  })


});



//q2
describe("divisionofNumbers", function () {
  it("should return true when number is divisible by both divisors", function () {
    expect(isDivisible([8, 4, 2])).toBe(true);
  })

  it("should  return false when the number is smaller than divisors", function () {
    expect(isDivisible([2, 8, 10])).toBe(false);
  })

  it("should return false when the number is not divisible by any one of the two", function () {
    expect(isDivisible([8, 2, 3])).toBe(false);
  })

  it("should return false when the number is not divisible by any of them", function () {
    expect(isDivisible([8, 6, 10])).toBe(false);
  })


});

//q3

describe("characterProblem", function () {
  it("should return itself when  there is only 1 character in the string", function () {
    expect(solution("A")).toBe("A");
  })

  it("should  return itself as reversed when there are multiple characters in the string", function () {
    expect(solution("Gagandeep SIngh")).toBe("hgnIS peednagaG");
  })

  it("should return empty string if there are no characters in the string", function () {
    expect(solution("")).toBe("");
  })


});


//q4
describe("answerProvider", function () {
  it("should return add the looped character to the provided string", function () {
    expect(reverseSeq([1, 2, 3, 5], 5)).toBe("[1, 2, 3, 5, 5");
  })

  it("should  return itself when there are no characters to be added", function () {
    expect(reverseSeq(["Gagandeep SIngh"], "")).toBe("Gagandeep SIngh");
  })

  it("should return 0 when there is nothing provided", function () {
    expect(reverseSeq([])).toBe(0);
  })


});
