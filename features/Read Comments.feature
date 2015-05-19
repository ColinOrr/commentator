Feature: Read Comments

Scenario: Single Comment

  Given the following comment in "data/article/2001-02-03 00:00:00 user@domain.com.md":
    """
    ---
    Author: Forename Surname
    ---
    *Comment* body.
    """
  When I retrieve comments from "/article"
  Then the author is "Forename Surname"
    And the email is "user@domain.com"
    And the posted date is "3rd February 2001"
    And the body is:
      """
      *Comment* body.
      """

@ignore
Scenario: Multiple Comments
@ignore
Scenario: No Comments
@ignore
Scenario: Invalid Path
@ignore
Scenario: Invalid Content
