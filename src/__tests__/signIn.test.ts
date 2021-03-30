import { pageObject } from "../pageObjects";

describe("Nike", () => {
    const page = new pageObject();
    beforeEach(async () => {
        await page.navigate();
    });
    test("Signing into account", async () => {
        await page.driver.manage().window().maximize()
        await page.SigningIn();
        await page.EnterEmail("trialtrialtrialnike10@gmail.com");
        await page.EnterPassword("TrialNike123456")
        let SignInSuccesful = await page.FinishSigningIn();
        //await page.driver.sleep(50000);
        expect(SignInSuccesful).toEqual(SignInSuccesful);
    });
    afterAll(async () => {
        await page.driver.quit();
    });
});