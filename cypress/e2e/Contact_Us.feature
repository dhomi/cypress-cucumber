Feature: WebdriverUniversity - Contact Us Page

    Scenario: Valid Contact Us Form Submission
        Given I navigate to the webdriverUniversity homepage
        When I click on the contact us button
        And I type a first name
        And I type a last name
        And I enter an email adress
        And I type a comment

    Scenario: Invalid Contact Us Form Submission
        Given I navigate to the webdriverUniversity homepage
        When I click on the contact us button
        And I type a first name
        And I type a last name
        And I type a comment
