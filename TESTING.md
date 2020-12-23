# Milestone Project 2 - Hiking with children on Södertörn - Testing details

[Link to README file](README.md/)

[View live website](https://mmmangooo.github.io/Milestone-Project2/)

## Testing

The page has been manually tested on the functionality of the following:

* Link from landing page to map page

* Links in navigation menu, including logo link to the left in navigation bar

* 




### User stories testing


### Further testing

* HTML code has been validated using the [W3C Markup Validation](https://validator.w3.org/) with the following result:

* CSS code has been validated using the [W3C CSS Validaton - Jigsaw](https://jigsaw.w3.org/css-validator/) with the following result:

* Javascript code has been validated using [JSHint](https://jshint.com/) with the following result:

### Known bugs

#### During development

* Code for fading landing page to show map page failed to work. With help from tutor support I decided to change the way of creating landing page from 
  having a separate index.html and map.html respectively, to creating a landing page by using an overlay div. This allowed for the use of jquery fadeOut 
  effect to fade the overlay div out, showing the map page underneath.

* The functionality of the user clicking a link inside the info window and by that triggering a function exchanging the content in the info window displayed
  did not work because the id of the link was not possible to obtain and add to an event listener, since it does not exist prior to the info window 
  being loaded. After several attempts of solving this, and a lengthy contact with to different people on tutor support, not being able to find a solution
  to work around this issue, I decided to opt out of this functionality altogether in favor of being able to focus on implementing other functions and
  design and finish this project on time. 

* Links in navigation bar in not collapsed mode (full screen) became uncklickable at some point during development. Tried finding the error by comparing the navbar code with previously commited
  code, while the navbar links worked. Also compared code to bootstrap documentation and didn't find the issue. After some help from tutor support, the issue was found to be the nav logo 
  container overflowing the navbar links. This was solved by setting a fixed width to the nav logo container. 

* Cursor for links had an arrow insted of a pointer on hover on all pages except for index.html. Since index.html doesn't have any links to script files, I concluded
  that the code responsible for this error must be in the script files and not in css file. The error was solved by adding a general rule (using a:hover) in style.css with
  attribute cursor and value pointer.

#### During testing

* While testing the site on mobile device issues with how the site was displaying on Iphone6S and IphoneX where discovered: Both these models had previously been tested for responsiveness
  in the dev tools in Chrome web browser without issues. 
