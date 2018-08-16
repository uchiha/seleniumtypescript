Feature: Twitter login

   Background: expect twitter login is opened
      When "https://twitter.com" is opened

   Scenario: Login with existing username and password
      Given that user is in the twitter login page
      And that the registered user provided "johndoe310718@yahoo.com" and password "testaccount#1"