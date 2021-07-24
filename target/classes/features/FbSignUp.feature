@FBSignUp
Feature: FB SignUp Feature to validate the add new user functionality

  Scenario Outline: Verify that the user is able to create new account
    Given User has launched the FB application
    When User clicks on Create New Account link
    And User enters "<FirstName>" "<LastName>" "<MobileNum>" "<Password>"
    And User selects "<Month>" "<Date>" "<Year>"
    And User clicks on SignUp button
    Then User should be able to see success message

    Examples: 
      | FirstName | LastName | MobileNum  | Password   | Month | Date | Year |
      | Raj       | Sharma   | 9999999999 | abc123@abc |     8 |   12 | 1990 |

  @DataTable
  Scenario: Verify that the user is able to create new account using cucumber datatable
    Given User has launched the FB application
    When User clicks on Create New Account link
    And User creates new account
      | Field     | Value      |
      | FirstName | Raj        |
      | LastName  | Sharma     |
      | MobileNum |  999999999 |
      | Password  | anc123@xyz |
      | Month     |          9 |
      | Date      |         10 |
      | Year      |       1990 |
    And User clicks on SignUp button
    Then User should be able to see success message
