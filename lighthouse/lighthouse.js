

//Make sure Lighthouse NPM is started and run 'lighthouse/lighthouse.js' for this to start.
(async () => {
    const fs = require('fs');
    const lighthouse = require('lighthouse');
    const chromeLauncher = require('chrome-launcher');
    const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });
    const options = { logLevel: 'info', output: 'html', port: chrome.port };
    const runnerResult = await lighthouse('https://petersvirtualservices.github.io/storylinecreatorvanillajavascript/', options);

    // `.report` is the HTML report as a string
    const reportHtml = runnerResult.report;
    fs.writeFileSync('lhreport.html', reportHtml);

    // `.lhr` is the Lighthouse Result as a JS object
    console.log('Report is done for', runnerResult.lhr.finalUrl);
    console.log('Performance score was', runnerResult.lhr.categories.performance.score * 100);

    await chrome.kill();
})();
