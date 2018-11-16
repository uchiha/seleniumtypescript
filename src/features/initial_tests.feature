Feature: Twitter login

   Background: expect twitter login is opened
      Given "https://twitter.com" is opened
      # And some random stuff was generated here


   Scenario: Login with existing username and password
      Given that user is in the twitter login page
      When the registered user provided "johndoe310718@yahoo.com" and password "testaccount#1"
      Then the profile dashboard should display "John Doez"
