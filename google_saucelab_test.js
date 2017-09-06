var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;
var username= "XXXXX",
	accessKey="xxxx";


    var capabilities= {

    	'browserName': 'Firefox',
    	'platfrom': 'Windows XP',
    	'username' : username,
    	'accessKey': accessKey

    };
    

var driver = new webdriver.Builder().withCapabilities(capabilities)
					.usingServer("https://" + username + ":" + accessKey +
          "@ondemand.saucelabs.com:443/wd/hub")
          .build();

driver.get('http://www.google.com');

driver.findElement(By.name('q')).sendKeys('webdriver');

driver.sleep(1000).then(function() {
  driver.findElement(By.name('q')).sendKeys(webdriver.Key.TAB);
});

driver.findElement(By.name('btnK')).click();

driver.sleep(2000).then(function() {
  driver.getTitle().then(function(title) {
    if(title === 'webdriver - Google Search') {
      console.log('Test passed');
    } else {
      console.log('Test failed');
    }
  });
});

driver.quit();

