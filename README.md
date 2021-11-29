# sortingproject
Sorting project for Project signature 

- Ricardo Pedreros
- Diego Bonilla


## Description
This is a project that uses an UI to allow the user to type an array in an input field and the app will sort the array for the user and show it to them.
It was built using React and the algorithms Merge sort, Quick Sort, Bubble Sort, Selection Sort that sorts the array.

## Testing
The project was tested using Cypress and could be tested using the following command: ```npm run cypress:open``` inside the front folder.
After the cypress window has opened you can run the only test that is available in the project, this tests all the sorting algorithms with a predefined array.


## Installation
1. Download the project
2. Access the front folder
3. Run the command: ```npm install```


## Usage:
Once the project is installed you can run the following command: ```npm start``` inside the front folder.
Access to http://localhost:3000/ to see the project.
When it loads it will show a card with an input field and 4 buttons, one for each sorting algorithm.
The array that is wanted to be sorted needs to be typed in the input field separated by commas, no spaces are needed, but even if there are spaces they will be ignored. The array typed should look like this:

3,5,1,7,9,4,7,3

After that the user can click on a button to sort the array, depending the button that has been clicked then the app will use one or other algorithm.


## Deployment:
The app has been deployed in: https://diego7785.github.io/sortingproject/