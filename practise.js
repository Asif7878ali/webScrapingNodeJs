const puppeteer = require('puppeteer');

async function getAllLinks(){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://books.toscrape.com/');
   const links  =await page.$$eval('.product_pod .image_container a' , link => link.map(a => a.href));
   await browser.close();
   return links;

}

async function mainInfo(){
        const alllinks = await getAllLinks();
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        const data = [];
        for(let link of alllinks) {
            await getPageData(link, page);
            page.waitFor(2000);
            data.push();
        }
        console.log(data);
       
}

async function getPageData(link, page){
   
         await page.goto(link);
       const title = await page.$eval('.product_main h1' , h1 => h1.textContext);
       const price = await page.$eval('.price_color' , pr =>pr.textContext);
       const stock = await page.$eval('.instock.availabiity' , stk => stk.textContext);
  
        return {
            Title: title,
            Price : price,
            Stock : stock
        }
};
mainInfo();