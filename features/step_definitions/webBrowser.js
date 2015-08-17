var zombie = require('zombie'),
    chai   = require('chai').should(),
    moment = require('moment');

module.exports = function(){

  var browser;

  //
  //  When Steps

  this.When(/^I retrieve comments from "([^"]*)"$/, function (relativeURL, callback) {
    browser.visit(relativeURL)
      .then(function() { browser.assert.success; })
      .then(callback);
  });

  //
  //  Then Steps

  this.Then(/^the author is "([^"]*)"$/, function (expectedAuthor, callback) {
    var comment = JSON.parse(browser.document.body.innerHTML)[0];
    comment.attributes.author.should.equal(expectedAuthor);
    callback();
  });

  this.Then(/^the email is "([^"]*)"$/, function (expectedEmail, callback) {
    var comment = JSON.parse(browser.document.body.innerHTML)[0];
    comment.attributes.email.should.equal(expectedEmail);
    callback();
  });

  this.Then(/^the posted date is "([^"]*)"$/, function (expectedPosted, callback) {

    //  Format the date
    expectedPosted = moment(expectedPosted, 'Do MMMM YYYY').format('YYYY-MM-DD HH:mm:ss');

    var comment = JSON.parse(browser.document.body.innerHTML)[0];
    comment.attributes.posted.should.equal(expectedPosted);
    callback();
  });

  this.Then(/^the body is:$/, function (expectedBody, callback) {
    var comment = JSON.parse(browser.document.body.innerHTML)[0];
    comment.body.should.equal(expectedBody);
    callback();
  });

  this.Then(/^the comments are displayed in the following order:$/, function (table, callback) {
    var comments = JSON.parse(browser.document.body.innerHTML);
    var expected = table.hashes();

    for (var i = 0; i < expected.length; i++) {
      comments[i].body.should.equal(expected[i].Comment);
    }

    callback();
  });

  this.Then(/^"([^"]*)" is not displayed$/, function (expectedComment, callback) {
    var comments = JSON.parse(browser.document.body.innerHTML);
    comments.map(function(c) { return c.body; }).should.not.include(expectedComment);
    callback();
  });

  this.Then(/^no comments are returned$/, function (callback) {
    var comments = JSON.parse(browser.document.body.innerHTML);
    comments.should.be.empty;
    callback();
  });

  //
  //  Hooks

  this.Before(function(callback) {
    zombie.localhost('localhost', 3000);
    browser = new zombie();
    callback();
  });

};
