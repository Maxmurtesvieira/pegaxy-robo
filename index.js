const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto('https://play.pegaxy.io/renting?tab=share-profit');
  await page.setViewport({ width: 1280, height: 800 });

 
                await page.waitForSelector(".action-button");
                let click = await page.click(".action-button"); 
                
                await page.waitForSelector(".button-game.pinks");
                let click2 = await page.click(".button-game.pinks");              
  }
)
();

