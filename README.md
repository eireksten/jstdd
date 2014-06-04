Javascript - Test-Driven Development Workshop
=====

This code is used in the Javascript TDD workshop run in Steria Norway.

## Exercise 1 - Setting up the environment

First, we will set up Karma (http://karma-runner.github.io/0.12/index.html) and Mocha (http://visionmedia.github.io/mocha/) on our project. Chai.js (http://chaijs.com/) is already included as part of the project. Run the following commands in a shell (ie. Git Bash).

```shell
npm install -g karma-cli
npm install karma --save-dev
npm install karma-mocha karma-chrome-launcher --save-dev
```

You'd now usually have to create a `karma.conf.js` file (http://karma-runner.github.io/0.12/intro/configuration.html), but this is already done for this project. You should now be ready to TDD!


## Exercise 2 - Prime Factorization

We will now run some tests. Open the folder `exercise2` and run the command `karma start`.

The test runner will open and capture a browser (Chrome), start running the tests, and output something like `Executed 1 of 7 (1 FAILED) (skipped 6) ERROR`. Everytime you update either a test or source file, as specified in the `karma.conf.js` file in this folder, Karma will rerun the tests automatically.

Next, open `src/factorizer.js` and `test/factorizer-test.js` in your favorite editor. The test file contains a bunch of tests, most of which are ignored using the `.skip()` method. Write code in the source file to pass these tests one by one, "unskipping" each when all previous ones have passed.


## Exercise 3 - Bowling Game Kata

In this exercise we will, through test-driven development, create an object that can keep track of bowling scores. We need at least

- A method for creating a new bowling game object.
- A method `roll` on this object for adding the result of the next roll.
- A method `score` on this object for returning the current score of the game.

The rules of bowling are as follows:
- The game consists of 10 frames as shown above.  In each frame the player has two opportunities to knock down 10 pins.  The score for the frame is the total number of pins knocked down, plus bonuses for strikes and spares.
- A spare is when the player knocks down all 10 pins in two tries.  The bonus for that frame is the number of pins knocked down by the next roll.  So in frame 3 above, the score is 10 (the total number knocked down) plus a bonus of 5 (the number of pins knocked down on the next roll.)
- A strike is when the player knocks down all 10 pins on his first try.  The bonus for that frame is the value of the next two balls rolled.
- In the tenth frame a player who rolls a spare or strike is allowed to roll the extra balls to complete the frame.  However no more than three balls can be rolled in tenth frame.

Open the folder `exercise3` and run the command `karma start`. Remember the red-green-refactor cycle! Feel free to pair up with someone.


## Exercise 4 - Testing a UI Component

In this exercise you will have access to the test library sinon.js (http://sinonjs.org/) and the source library jQuery (http://jquery.com/).

In exercise 4 we're going to test the UI component located in `src/reverse.js`. This is a self-contained component. It uses client side templating (http://handlebarsjs.com/) for generating its HTML and is not dependent on the existence of any other components. Due to this, we can test this component entirely in isolation. We now want to enhance this amazing application! The tests can be found in `test/reverse-test.js`

1. This app should output the reversed input in the span with class result (`span.result`). Test-drive this enhancement! You can either ask or look at the jQuery docs (http://api.jquery.com/) if you are unsure about how to work with the DOM.
2. When the user types `I am a little princess`, it should be logged using `console.log()`. Test-drive this using a sinon.js spy (http://sinonjs.org/docs/#spies)!
3. When the user has typed a palindrome (a word that spells the same when reversed) of at least 5 characters, send an ajax GET request for the file `palindrome.txt` and fill the results span with its contents. You might want to have a look at sinon.js' Fake server (http://sinonjs.org/docs/#fakeServer) and jQuery's API for ajax (http://api.jquery.com/jquery.ajax/).
4. Wait until the user stops typing before generating the result. window.setTimeout (https://developer.mozilla.org/en/docs/Web/API/window.setTimeout) and sinon.js' fake timers (http://sinonjs.org/docs/#clock) could be of great help.


Open the folder `exercise4` and run the command `karma start`. Remember the red-green-refactor cycle! Feel free to pair up with someone. If you want to try out your component in practice, open the `index.html` file in the browser.