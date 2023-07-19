const { chromium } = require('playwright');

describe('Shadow DOM Test', () => {
  let browser;
  let context;
  let page;

  beforeAll(async () => {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto('http://localhost:3001/');
  });

  afterAll(async () => {
    await browser.close();
  });

  test('Access and click element within Shadow DOM - Passing', async () => {
      await page.click('#my-button');
      await page.waitForTimeout(3000);
  });
});
