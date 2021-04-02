import { pageObject } from "../pageObjects";

describe("Nike", () => {
    const page = new pageObject();
    beforeEach(async () => {
        await page.navigate();
    });
    test("Add/Remove Item from Bag", async () => {
        await page.searchFor("soccer shoe");
        await page.getResultsSearch();
        await page.SelectShoeSize();
        //await page.driver.manage().window().maximize()
        await page.AddToBag();
        await page.VerifyBag();
        let EmptyBag = await page.RemoveItemFromBag();
        expect(EmptyBag).toEqual(EmptyBag);

    });
    afterAll(async () => {
        //await page.driver.quit();
    });
});