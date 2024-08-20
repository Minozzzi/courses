import { describe, it, expect } from "vitest";
import { getInitials } from ".";

describe("getInitials", () => {
  it("should return the initials of a full name", () => {
    const result = getInitials("John Doe");
    expect(result).toBe("JD");
  });

  it("should return the initial of a single word", () => {
    const result = getInitials("John");
    expect(result).toBe("J");
  });

  it("should ignore extra spaces between words", () => {
    const result = getInitials("John    Doe");
    expect(result).toBe("JD");
  });

  it("should throw an error if the string is empty", () => {
    expect(() => getInitials("")).toThrow(
      "getInitials function value must be a non-empty string"
    );
  });

  it("should throw an error if the string contains only whitespace", () => {
    expect(() => getInitials("   ")).toThrow(
      "getInitials function value must be a non-empty string"
    );
  });
});
