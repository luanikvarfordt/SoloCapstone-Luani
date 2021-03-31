import { WebDriver, until, By, Capabilities, Builder } from "selenium-webdriver";
/** pageObject is pointing to Nike's page.
 * It has the methods to navigate there, to enter input and to receive matching results.
 */
export class pageObject {
    /** the page's driver object */
    driver: WebDriver;
    /** the url for the website */
    url: string = "https://www.nike.com/";
    /** browser */
    browser: "chrome";

    /** SEARCH TEST SELECTORS */
    /** the selector for the search bar */
    SearchBar: By = By.css('input[id="VisualSearchInput"]');
    /** the selector for the search button */
    SearchButton: By = By.css('svg[class="pre-search-input-icon"]');
    /** the selector to check the results of the search for soccer shoes - Nike Mercurial Dream Speed Superfly 8 Elite FG */
    SoccerShoeResults: By = By.css('a[aria-label="Nike Mercurial Dream Speed Superfly 8 Elite FG"]');


    /** ADD TO BAG TEST SELECTORS  */
    /** the selector for men size 8 of the soccer shoe searched - Nike Mercurial */
    ShoeSize: By = By.xpath('//label[text()="M 12.5 / W 14"]');
    /** the selector for "add to bag" button */
    AddToBagButton: By = By.xpath('(//button[@aria-label="Add to Bag"])');
    /** the selector to view items added in the bag */
    ViewItems: By = By.xpath('(//button[@data-test="qa-cart-view"])');
    /** the selector for the soccer shoe just added to the bag - Nike Mercurial */
    BagItem: By = By.css('p[class="product-title css-frggik e5pihrt0"]');
    /** the selector for the remove button to remove the soccer shoe from bag */
    RemoveButton: By = By.css('button[data-automation="desktop-remove-item-button"]');
    /** the selector for the message "there are no items in your bag" to verify that item was removed from bag */
    EmptyBag: By = By.xpath('(//p[@data-automation="no-items"])');


    /** SIGN UP TEST SELECTORS */
    /** the selector for the Join Us header button */
    JoinUsHeader: By = By.xpath('(//span[text()="Join Us"])[1]');
    /** the selector for the Join Us button on the membership page */
    JoinUsMembPage: By = By.xpath('(//a[@aria-label="Join Us"])[2]');
    /** the selector for the email address field to be able to add an input */
    EmailField: By = By.xpath('(//input[@placeholder="Email address"])');
    /** the selector for the password field to be able to add an input */
    PasswordField: By = By.xpath('(//input[@type="password"])');
    /** the selector for the First Name field to be able to add an input */
    FirstNameField: By = By.xpath('(//input[@placeholder="First Name"])');
    /** the selector for the Last Name field to be able to add an input */
    LastNameField: By = By.xpath('(//input[@placeholder="Last Name"])');
    /** the selector for Date of Birth field to be able to add an input */
    DateOfBirthField: By = By.xpath('(//input[@placeholder="Date of Birth"])');
    /** the selector to choose sex, female in this case */
    FemaleSexOption: By = By.xpath('(//span[text()="Female"])');
    /** the selector for sign up button, join us */
    JoinUsFinalButton: By = By.xpath('(//input[@value="JOIN US"])');
    /** the selector to verify that now I am signed up */
    SignUpSuccesful: By = By.css('div[id="AccountMenu"]');
    /** the selector to verify that email is duplicated */
    DuplicatedEmail: By = By.css('div[class="nike-unite-component action-link duplicateEmailSignIn"]');


    /** SIGN IN TEST SELECTORS */
    /** the selector for the Sign in button on header */
    SignInHeader: By = By.xpath('(//button[@data-path="sign in"])[1]');
    /** the selector for email address field to be able to sign in to account */
    EmailFieldSignIn: By = By.xpath('(//input[@placeholder="Email address"])');
    /** the selctor for password field to be able to sign in to account */
    PasswordFieldSignIn: By = By.xpath('(//input[@placeholder="Password"])');
    /** the selector for the sign in button to be able to finish signing in to account */
    SignInButton: By = By.xpath('(//input[@value="SIGN IN"])');
    /** the selector to verify that now I am signed up */
    SignInSuccesful: By = By.css('div[id="AccountMenu"]');

    // SHOULD I HAVE ANY SELECTOR TO BE ABLE TO VERIFY THAT I AM SIGNED IN NOW?

    constructor (driver?: WebDriver) {
        if (driver) this.driver=driver
        else this.driver = new Builder()
        .withCapabilities(Capabilities.chrome()).build()
}   

    /** will navigate to https://www.nike.com/ and locate search bar */
    async navigate() {
        await this.driver.get(this.url);
        await this.driver.wait(until.elementLocated(this.SearchBar));
        await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.SearchBar)));
    }


 /** SEARCH TEST */    
    /** will find search bar, enter input to search and search */
    async searchFor(searchTerm: string) {
        await this.driver.findElement(this.SearchBar).sendKeys(`${searchTerm}`);
        await this.driver.findElement(this.SearchButton).click();
    }

    async sendKeys(elementBy: By, keys) {
    await this.driver.wait(until.elementLocated(elementBy));
    return this.driver.findElement(elementBy).sendKeys(keys);
    }

    /** will show the results of the search for Soccer Shoe */
    async getResultsSearch() {
        await this.driver.wait(until.elementsLocated(this.SoccerShoeResults));
    }

    async click(elementBy: By) {
        await this.driver.wait(until.elementLocated(elementBy));
        return (await this.driver.findElement(elementBy)).click();
    }


/** ADD TO BAG TEST */    
    /** will click on the soccer shoe desired - Nike Mercurial -, add to bag and
     * click on pop up view items in bag */
    async SelectShoeSize(){
        await this.driver.findElement(this.SoccerShoeResults).click();
        await this.driver.sleep(5000);
        await this.driver.wait(until.elementLocated(this.ShoeSize));
        await this.driver.findElement(this.ShoeSize).click();
    }
    async AddToBag() {
        await this.driver.wait(until.elementLocated(this.AddToBagButton));
        await this.driver.findElement(this.AddToBagButton).click();
        await this.driver.findElement(this.ViewItems).click();
    }

    async VerifyBag() {
        await this.driver.wait(until.elementLocated(this.BagItem));
        await this.driver.wait(until.elementIsVisible(await this.driver.findElement(this.BagItem)));
    }

    async RemoveItemFromBag() {
        await this.driver.wait(until.elementLocated(this.RemoveButton));
        await this.driver.findElement(this.RemoveButton).click();
        await this.driver.wait(until.elementLocated(this.EmptyBag));
    }


 /** SIGN UP TEST */   
    async GoToSignUp() {
        await this.driver.wait(until.elementLocated(this.JoinUsHeader));
        await this.driver.findElement(this.JoinUsHeader).click();
        await this.driver.sleep(1000);
        await this.driver.wait(until.elementLocated(this.JoinUsMembPage));
        await this.driver.findElement(this.JoinUsMembPage).click();
    }

    async FillOutEmail(searchTerm: string) {
        await this.driver.wait(until.elementLocated(this.EmailField));
        await this.driver.findElement(this.EmailField).sendKeys(`${searchTerm}`);
    }
    async DuplicatedEmailError() {
        await this.driver.wait(until.elementLocated(this.DuplicatedEmail));
    }

    async FillOutPassword(searchTerm: string) {
        await this.driver.wait(until.elementLocated(this.PasswordField));
        await this.driver.findElement(this.PasswordField).sendKeys(`${searchTerm}`);
    }

    async FillOutFirstName(searchTerm: string) {
        await this.driver.wait(until.elementLocated(this.FirstNameField));
        await this.driver.findElement(this.FirstNameField).sendKeys(`${searchTerm}`);
    }

    async FillOutLastName(searchTerm: string) {
        await this.driver.wait(until.elementLocated(this.LastNameField));
        await this.driver.findElement(this.LastNameField).sendKeys(`${searchTerm}`);
    }

    async FillOutBirthDay(searchTerm: string) {
        await this.driver.wait(until.elementLocated(this.DateOfBirthField));
        await this.driver.findElement(this.DateOfBirthField).sendKeys(`${searchTerm}`);
    }

    async SelectSex(){
        await this.driver.wait(until.elementLocated(this.FemaleSexOption));
        await this.driver.findElement(this.FemaleSexOption).click();
    }

    async FinishSigningUp() {
        await this.driver.findElement(this.JoinUsFinalButton).click();
        await this.driver.wait(until.elementLocated(this.SignUpSuccesful));
    }


/** SIGN IN TEST */       
    async SigningIn() {
        await this.driver.wait(until.elementLocated(this.SignInHeader));
        await this.driver.findElement(this.SignInHeader).click();
    }

    async EnterEmail(searchTerm: string) {
        await this.driver.wait(until.elementLocated(this.EmailFieldSignIn));
        await this.driver.findElement(this.EmailFieldSignIn).sendKeys(`${searchTerm}`);
    }

    async EnterPassword(searchTerm: string) {
        await this.driver.wait(until.elementLocated(this.PasswordFieldSignIn));
        await this.driver.findElement(this.PasswordFieldSignIn).sendKeys(`${searchTerm}`);
    }

    async FinishSigningIn() {
        await this.driver.findElement(this.SignInButton).click();
        await this.driver.wait(until.elementLocated(this.SignInSuccesful));
    }
};
