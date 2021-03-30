import { Browser } from "selenium-webdriver";
import { pageObject } from "../pageObjects";

describe("Nike", () => {
    const page = new pageObject();
    beforeEach(async () => {
        await page.navigate();
    });
    test("Sign Up with used email", async () => {
        await page.driver.manage().window().maximize()
        await page.GoToSignIn();
        await page.FillOutEmail("trialtrialtrialnike10@gmail.com");
        await page.FillOutPassword("TrialNike123456");
        let DuplicatedEmail = await page.DuplicatedEmailError();
        expect(DuplicatedEmail).toEqual(DuplicatedEmail);
    })
    afterAll(async () => {
        await page.driver.quit();
   });
});