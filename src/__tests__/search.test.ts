import { pageObject } from "../pageObjects";

describe("Nike", () => {
    const page = new pageObject();
    beforeEach(async () => {
        await page.navigate();
    });
    test("Searching a product", async () => {
        await page.searchFor("soccer shoe");
        let SoccerShoeResults = await page.getResultsSearch();
        expect(SoccerShoeResults).toEqual(SoccerShoeResults);
    });
    afterAll(async () => {
        await page.driver.quit();
    });
});