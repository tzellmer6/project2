This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project 2 for ITDEV-154 

This project is a list app that lets you add and remove items from a list. We were to utilize the following technologies: React, Styled Components, Rebass, Styles Icons and Theming, all while focusing on clean components design. I accomplished these tasks by creating a "To Do List" style website. You still add an item to the list by clicking on the add bar, typing a task, and hitting the enter button or "add" and it pops down into this list. You can then delete an item by clicking on it. I added styling and theming by having color change over hover and added a flip to the app, so when an item is added, it creates a flipping motion. 

The features in this project are fairly basic. The website contains a form that grabs the task, and appends it into an item array that holds all the tasks. There is then a "add" button that is styled with styled components, that submits the form and adds the item to the task array. Then the list of tasks is displayed under these two components, which can be deleted by clicking on. 

I was originally planning on creating a components folder, but due to the simplicstic nature of the website, I decided against it, as the only componenets that would be in that folder are TodoItems.js and TodoList.js, alongside the Todolist.css, which styles the project. Speaking of styling, the Todolist.css class holds the styling of Rebass, Styled Components and Theming. Unfortunately, I couldn't use styled-icons, as every time I attempted to download the package, it would get stuck halfway through downloading and never finish. This problem progressed through utilizing both NPM and Yarn to install the package. This is not a huge deal, as the only styled icon I was seeking to use was a task icon that would've sat next to the add button.

