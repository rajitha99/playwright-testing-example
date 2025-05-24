const {test,expect}=require('@playwright/test');





test('browser context Playeright test',async ({browser})=>
{
const context = await browser.newContext();
const open= await browser.newPage();
await open.goto("https://rahulshettyacademy.com/")

});

test.only('Page Playwright test',async ({page})=>
{

    //await page.goto("https://rahulshettyacademy.com/");
   //console.log(await page.title());
// await  expect(page).toHaveTitle("Selenium, API Testing, Software Testing & More QA Tutorials | Rahul Shetty Academy");
// await page.locator(".theme-btn.register-btn]").click();
// await page.locator("#email").fill("anshika@gmail.com");
// await page.locator("#userPassword").fill("Iamking@000");
//await page.locator("[value='Login']").click();

const email = "anshika@gmail.com";
   const productName = 'zara coat 3';
   const products = page.locator(".card-body");
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").fill("Iamking@000");
   await page.locator("[value='Login']").click();
   await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();
   const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles); 

});