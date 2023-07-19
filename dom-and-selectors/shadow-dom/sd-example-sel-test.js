const { Builder, By, Key, until } = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://localhost:3001/');
    
    const h1Element = await driver.findElement(By.css('h1'));
    console.log(await h1Element.getText());

    const buttonElement = await driver.findElement(By.id('my-button'));
    await buttonElement.click();

  } finally {
    await driver.quit();
  }
})();
