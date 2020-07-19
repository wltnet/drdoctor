import { todayDate, isEmpty, isValidDate, isValidPostcode } from ".";

describe("pages > Login", () => {
  describe("isValidDate", () => {
    it("should return true if date is before today date", () => {
      const date = "20/05/1989";

      const validDate = isValidDate(date);

      expect(validDate).toBe(true);
    });

    it("should return false if date is after today date", () => {
      const date = "20/08/2020";

      const validDate = isValidDate(date);

      expect(validDate).toBe(false);
    });

    it("should return false if date is invalid date", () => {
      const date = "29/02/20219";

      const validDate = isValidDate(date);

      expect(validDate).toBe(false);
    });

    it("should return false if input is nor a date format", () => {
      const date = "1234567890";

      const validDate = isValidDate(date);

      expect(validDate).toBe(false);
    });
  });
});
