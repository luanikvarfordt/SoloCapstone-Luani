import { pageObject } from "../pageObjects";

describe("Nike", () => {
    const page = new pageObject();
    beforeEach(async () => {
        await page.navigate();
    });
    test("Add/Remove Item from Bag", async () => {
        await page.searchFor("soccer shoe");
        await page.getResultsSearch();
        await page.AddToBag();
        await page.VerifyBag();
        await page.RemoveItemFromBag();
        expect(await page.RemoveItemFromBag()).toContain("There are no items in your bag");

    });
    afterAll(async () => {
        await page.driver.quit();
    });
});