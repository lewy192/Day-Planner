# Day-Planner

## Intro

Helping you keep your days planned out to fit in more programming :).

## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

## Intro

This project is to help keep your days planned out to fit in more programming :) during the current day, or other acctivities.
The planner saves what you have entered to each block, so if you refresh you will still have your day planned out.

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## Comments

I decided to construct the timeblocks staticaly incase an error was to occur with any of the javascript content,
say the Jquery CDN goes down then the user will still have something to view asside from an empty page.

## ChangeLog

-   Added the timeblocks to the html
-   Removed 'color:white;' from css class selectors .past, .present, .future
-   Other minor css tweaks
-   Added Jquery functionality of the project

## ScreenShot

![displays a screenshot of the deployed project at 17:12](/assets/images/deployed-screenshot.png)

## Live Version

The live version of the product can be found [here](https://lewy192.github.io/Day-Planner/)

## Acknowledgements

-   [Open Padlock Author](https://www.flaticon.com/authors/prosymbols)
-   [Closed Padlock Author](https://www.freepik.com)
-   [Icon Website](https://www.flaticon.com/)
-   [jQuery Docs](https://api.jquery.com/)
-   [Bootstrap Docs](https://getbootstrap.com/docs/4.0/getting-started/introduction/)
-   [General Research](https://www.w3schools.com/)
