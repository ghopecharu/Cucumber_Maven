$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/FbSignUp.feature");
formatter.feature({
  "name": "FB SignUp Feature to validate the add new user functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@FBSignUp"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Verify that the user is able to create new account",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User has launched the FB application",
  "keyword": "Given "
});
formatter.step({
  "name": "User clicks on Create New Account link",
  "keyword": "When "
});
formatter.step({
  "name": "User enters \"\u003cFirstName\u003e\" \"\u003cLastName\u003e\" \"\u003cMobileNum\u003e\" \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User selects \"\u003cMonth\u003e\" \"\u003cDate\u003e\" \"\u003cYear\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User clicks on SignUp button",
  "keyword": "And "
});
formatter.step({
  "name": "User should be able to see success message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "FirstName",
        "LastName",
        "MobileNum",
        "Password",
        "Month",
        "Date",
        "Year"
      ]
    },
    {
      "cells": [
        "Raj",
        "Sharma",
        "9999999999",
        "abc123@abc",
        "8",
        "12",
        "1990"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify that the user is able to create new account",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FBSignUp"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has launched the FB application",
  "keyword": "Given "
});
formatter.match({
  "location": "FBSignUpSteps.user_has_launched_the_fb_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Create New Account link",
  "keyword": "When "
});
formatter.match({
  "location": "FBSignUpSteps.user_clicks_on_create_new_account_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Raj\" \"Sharma\" \"9999999999\" \"abc123@abc\"",
  "keyword": "And "
});
formatter.match({
  "location": "FBSignUpSteps.user_enters_something_something_something_something(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User selects \"8\" \"12\" \"1990\"",
  "keyword": "And "
});
formatter.match({
  "location": "FBSignUpSteps.user_selects_something_something_something(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on SignUp button",
  "keyword": "And "
});
formatter.match({
  "location": "FBSignUpSteps.user_clicks_on_signup_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to see success message",
  "keyword": "Then "
});
formatter.match({
  "location": "FBSignUpSteps.user_should_be_able_to_see_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that the user is able to create new account using cucumber datatable",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FBSignUp"
    },
    {
      "name": "@DataTable"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has launched the FB application",
  "keyword": "Given "
});
formatter.match({
  "location": "FBSignUpSteps.user_has_launched_the_fb_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Create New Account link",
  "keyword": "When "
});
formatter.match({
  "location": "FBSignUpSteps.user_clicks_on_create_new_account_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User creates new account",
  "rows": [
    {
      "cells": [
        "Field",
        "Value"
      ]
    },
    {
      "cells": [
        "FirstName",
        "Raj"
      ]
    },
    {
      "cells": [
        "LastName",
        "Sharma"
      ]
    },
    {
      "cells": [
        "MobileNum",
        "999999999"
      ]
    },
    {
      "cells": [
        "Password",
        "anc123@xyz"
      ]
    },
    {
      "cells": [
        "Month",
        "9"
      ]
    },
    {
      "cells": [
        "Date",
        "10"
      ]
    },
    {
      "cells": [
        "Year",
        "1990"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "FBSignUpSteps.user_creates_new_account(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on SignUp button",
  "keyword": "And "
});
formatter.match({
  "location": "FBSignUpSteps.user_clicks_on_signup_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to see success message",
  "keyword": "Then "
});
formatter.match({
  "location": "FBSignUpSteps.user_should_be_able_to_see_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});