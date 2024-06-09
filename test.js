// let page;
// //puppeteer.Launch() ye hame brower open ka promise return krega
// const browserLaunch = puppeteer.launch({headless : false});
// // humne is promise ko consume kiya browserLaunch variable me
// browserLaunch.then(function (browser) {
//     //currently opened tabs  yani browser ka first tab
//        const tab = browser.pages();
//        //browser.pages() ne hame return kiya promise tabsArray ka
//        console.log("Open Tab" , tab);
//        return tab;
//        // humne browser ke 1st page ya tabs to consume kiya
// }).then(function(browerPages) {
//          // humne yaha current tab ko accees kiya
//        page = browerPages[0]; 
//        //phir humne ise google ke home page pr bhej diya yeh bhi return krega promise
//         const goGoogleHomePage = page.goto('https://www.google.com/');
//         console.log("Reached Home Page" , goGoogleHomePage);
//         return goGoogleHomePage;
       
// }).then(function() {
//     //wait for element to appear on page
//     let findSearchinput =  page.waitForSelector('textarea.gLFyf', { visible: true });
//     console.log("Search input found" , findSearchinput);
//     return findSearchinput;
  
// }).then(function() {
//        //typr any element on the page with selector
//        //google ka Search input Box ko select kiya
//       let searchinputbox = page.type('textarea.gLFyf', 'Adimudra');
//       console.log("Typed search query", searchinputbox);
//       return searchinputbox;
     
// }).then(function() {
//         // page keyboard to the specail charector
//        let pressEnterBtn = page.keyboard.press('Enter');
//        console.log("Pressed Enter",pressEnterBtn);
//        return pressEnterBtn;
      
// }).then(function() {
//     //select the selector of adimudra link
//     let selectActualLink = page.waitForSelector("h3.LC20lb.MBeuO.DKV0Md" , {visible : true});
//     console.log("Found search results" , selectActualLink);
//     return selectActualLink;
// }).then(function(){
//     //Mouse CLick Event
//     //press the adimdra link
//     let clickLink= page.click("h3.LC20lb.MBeuO.DKV0Md");
//      console.log("Clicked on search result",clickLink);
//      return clickLink;
// }).catch(function(err) {
//        console.log("Error During..".err);
// })