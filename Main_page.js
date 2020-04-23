//import abc from "E:/GITP/js_Login/Identifiers.js";
const puppeteer = require('puppeteer');

//const iden= require('abc');
// console.log(abc.login_button);
console.log("hi");
 (async () => {

 const browser = await puppeteer.launch({"headless":false,defaultViewport: null});
 await page.goto(abc.login_link);
 const page = await browser.newPage(login_link);
  await page.click(abc.Cross_icon);
  await page.type(abc.user_name,abc.user_name_vaue);
  await page.type(abc.user_Pass,abc.user_pass_value);
  await page.click(abc.login_button);
  


 });