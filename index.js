const puppeteer = require('puppeteer');

(async function() {
     try {
           // this line open Browser
           const browserLaunch = await puppeteer.launch();
           console.log("Launch Browser");
      
          //this line open the tab and return the pages array
           const pages = await browserLaunch.pages();
           console.log("Open Tab");

         //this line you are using the first page
         const page = pages[0];
         console.log('We are Using 1st Page');

        //this line Navigate the google url
        await page.goto('https://www.google.com/');
        console.log("Reached Gogle Page");
      
       // this line wait for selctor to load in browser
       await page.waitForSelector('textarea.gLFyf');
       console.log('Waiting for Selector Google Input Box...');

       //this line type into seach box after selector is on Page
       await page.type('textarea.gLFyf' ,'Adimudra');
       console.log('Search into Seach Box');
      
      //this line print keyboard Enter Buttons
      await page.keyboard.press('Enter');
      console.log('Press Enter Button');
      
      //this line Wait For Selector
      await page.waitForSelector('h3.LC20lb.MBeuO.DKV0Md');
      console.log('Wait for Another Selector');
       
      //CLick the Link of adimudra link
      await page.click('h3.LC20lb.MBeuO.DKV0Md');
      console.log('CLick the Actual Link');

      await page.waitForSelector('input#your_name');
      console.log('input is find ID');
      await page.type('input#your_name' , 'TEST001108R');

      await page.waitForSelector('input#your_pass');
      console.log('input is find Password');
      await page.type('input#your_pass' , 'Test@123');

      await page.waitForSelector('input.h6.m-0.py-0.tab');
      console.log('Input is Find Capcha');

   } catch (error) {
            console.log('The error is' , error);
          }
   
 })();
 