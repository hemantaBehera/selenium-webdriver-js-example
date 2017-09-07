'use strict'

var assert = require('assert');
var mocha = require('mocha');
var describe = mocha.describe;
var text;
var webdriver = require('selenium-webdriver'),
        By= webdriver.By,
        until = webdriver.until;


describe('AMEX Succesful Login', function () {


    it('should have the correct page title', function(done)  {
        var driver= new webdriver.Builder()
            .forBrowser('chrome')
            .build();


        driver.get("https://global.americanexpress.com/login")
            .then(function(){
                driver.findElement(By.id('eliloUserID')).sendKeys('xxxxxx');
            })
            .then(function () {
                driver.findElement(By.id('eliloPassword')).sendKeys('xxxxxx');
            })
            .then(function () {
                driver.findElement(By.css('.btn-fluid')).click();
            })
            .then(function () {
                driver.sleep(2000);
            })
            .then(function () {
                return driver.getTitle();
            })
            // .then(driver.getTitle().then(function(title) {
            //     assert.equal(title,'American Express - Dashboard');
            //
            // }))
            .then(function (text) {
                assert.equal(text,'American Express - Dashboard');
            })
            .then(function () {
                driver.quit();
            })
            .then(done)
            .catch(function (err) {
                driver.quit();
                done(err);
            });

    });

});