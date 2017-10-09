# talkReactReflux
Slides for a talk given at code.talks Hamburg and TopConf Düsseldorf in 2017 about using React and Reflux for state 
handling in web applications. Use the build.sh script to produce the slides as PDF file (requires XeLaTeX being 
installed).

## Abstract
React is currently one of the most popular ingredients of modern web applications. It is a component-based JavaScript 
library supporting the decomposition of big web applications into small parts, especially following principles like 
single responsibility and separation of concerns. However, on its own it lacks concise support for transversal state 
handling when parts of an application should alter the state of another part and these parts are not in a 
father-child-like relationship. To this end, the Reflux JavaScript library adds actions and stores for state handling.

In this talk, we will have a look at general patterns how to use React components together with Reflux stores and 
actions to build a responsive web application. Here, the focus is on state: When and where to (not) have it and how to 
deal with it using the facilities React and Reflux are offering. We illustrate these concepts with a small web shop 
example. In addition to that, we also address common mistakes and how to avoid them.

