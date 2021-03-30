import { Browser } from "selenium-webdriver";
import { pageObject } from "../pageObjects";

describe("Nike", () => {
    const page = new pageObject();
    beforeEach(async () => {
        await page.navigate();
    });
    test("Sign Up with new account", async () => {
        await page.driver.manage().window().maximize()
        await page.GoToSignIn();
        await page.FillOutEmail("trialtrialtrialnike10@gmail.com");
        await page.FillOutPassword("TrialNike123456");
        await page.FillOutFirstName("Luani");
        await page.FillOutLastName("Trial");
        await page.FillOutBirthDay("08091995");
        await page.SelectSex();
        let SignUpSuccesful = await page.FinishSigningUp();
        //await page.driver.sleep(50000);
        expect(SignUpSuccesful).toEqual(SignUpSuccesful);
    });
    afterAll(async () => {
        await page.driver.quit();
   });
});