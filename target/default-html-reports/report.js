$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/newContact.feature");
formatter.feature({
  "name": "The user can create a new contact",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user logged in",
  "keyword": "Given "
});
formatter.match({
  "location": "com.briteerp.stepdefinitions.newContactStepDefs.the_user_logged_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigate to \"Contacts\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.briteerp.stepdefinitions.newContactStepDefs.the_user_navigate_to(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click \"Create\" button",
  "keyword": "And "
});
formatter.match({
  "location": "com.briteerp.stepdefinitions.newContactStepDefs.the_user_click_button(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "the user create a new contact with using proper data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "the user click company radio button",
  "keyword": "When "
});
formatter.match({
  "location": "com.briteerp.stepdefinitions.newContactStepDefs.the_user_click_company_radio_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters the following information",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "com.briteerp.stepdefinitions.newContactStepDefs.the_user_enters_the_following_information(java.util.Map\u003cjava.lang.String, java.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click \"Save\" button",
  "keyword": "And "
});
formatter.match({
  "location": "com.briteerp.stepdefinitions.newContactStepDefs.the_user_click_button(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "title contains \"Kuscubasi Company\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.briteerp.stepdefinitions.newContactStepDefs.title_contains(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});