Feature: Read Comments

Scenario: Single Comment

  Given the following file in "data/article/2001-02-03 00:00:00 user@domain.com.md":
    """
    ---
    author: Forename Surname
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

@current
Scenario: Multiple Comments

  Given the following files:
    | Path                                                  | Content   |
    | data/article-A/2001-02-03 00:00:03 user@domain.com.md | Comment A |
    | data/article-A/2001-02-03 00:00:02 user@domain.com.md | Comment B |
    | data/article-B/2001-02-03 00:00:01 user@domain.com.md | Comment C |
  When I retrieve comments from "/article-A"
  Then the comments are displayed in the following order:
    | Comment   |
    | Comment B |
    | Comment A |
  And "Comment C" is not displayed

@ignore
Scenario: No Comments
@ignore
Scenario: Invalid Path
@ignore
Scenario: Invalid Content
