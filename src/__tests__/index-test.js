jest.dontMock("../index");

var hello = require("../index").hello;

describe("index", function() {
  it("should say hello", function() {
    expect(hello("Martin")).toBe("Hello Martin");
  });
});
