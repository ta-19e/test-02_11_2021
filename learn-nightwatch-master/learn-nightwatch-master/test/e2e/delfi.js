const config = require("../../nightwatch.conf.js");

module.exports = {
  "Open delfi.ee": function (browser) {
    browser
        .url("https://www.delfi.ee/")
        .waitForElementVisible("body")
        .saveScreenshot(`${config.imgpath(browser)}delfiPage_screenshot.png`)

    browser
        .assert.title('Delfi')
        .saveScreenshot(`${config.imgpath(browser)}delfiPageTitle_screenshot.png`)

    browser
        .setWindowSize(500, 800)
        .saveScreenshot(`${config.imgpath(browser)}delfiPageSize_screenshot.png`)
    

    browser
        .click('div.C-block-type-4-headline__title h5 a')
        .waitForElementVisible('body')
        .saveScreenshot(`${config.imgpath(browser)}delfiPageClick_screenshot.png`)
  }
}
