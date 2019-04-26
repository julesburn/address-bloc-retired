const MenuController = require("../controllers/MenuController");

//#1
describe("MenuController", () => {

  beforeEach(() => {
    this.menu = new MenuController();
  });

//#3
  describe("#remindMe()", () => {

    it("should returnpm  'Learning is a life-long pursuit'", () =>{
      expect(this.menu.remindMe()).toBe("Learning is a life-long pursuit");
    });

  });
});
