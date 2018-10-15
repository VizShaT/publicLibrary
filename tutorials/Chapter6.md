[Chapter 6: Constraint validation in Plain JS Front-End App](https://web-engineering.info/tech/JsFrontendApp/book/ch06.html#d5e2653)

1. Introduction
2. Using the HTML5 Form Validation API
3. New Issues
4. Make a JavaScript Data Model
5. Set up the folder structure with Library Files
   1. Style the user interface with css
   2. Provide general utility functions and JavaScript fixes in library files
   3. Create a start page
6. Write the model code
   1. Summary
   2. Encode the model class as constructor function
   3. Encode the property check
   4. Encode the property setters
   5. Add a serialization function
   6. Data management operations
7. The View and controller layers
   1. The data management UI pages
   2. Intialize the app
   3. Intialize the data management use cases
   4. Setup the user interfaces
8. Run the app and get the code
9. Evaluation
10. Possible Variation and Extentions
    1. Adding a object-level custom validation function
    2. Simplifying forms with implicit labels
11. Points of attention
    1. Database size and memory management
    2. Boilerplate code
12. Quiz

## Main

1. [Introduction](https://web-engineering.info/tech/JsFrontendApp/book/ch06.html#d5e2653)

   ```
   Book
   isbn[1]: NonEmptyString {id}
   title[1]: NonEmptyString {50}
   year[1]: integer
   edition[0..1]: PositiveInteger
   ```

2. [Using the HTML5 Form Validation API](https://web-engineering.info/tech/JsFrontendApp/book/ch06s02.html)

   ```
   setCustomValidity()
   checkValidity()
   ```

3. New Issues
4. Make a JavaScript Data Model
5. Set up the folder structure with Library Files
   1. Style the user interface with css
   2. Provide general utility functions and JavaScript fixes in library files
   3. Create a start page
6. Write the model code
   1. Summary
   2. Encode the model class as constructor function
   3. Encode the property check
   4. Encode the property setters
   5. Add a serialization function
   6. Data management operations
7. The View and controller layers
   1. The data management UI pages
   2. Intialize the app
   3. Intialize the data management use cases
   4. Setup the user interfaces
8. Run the app and get the code
9. Evaluation
10. Possible Variation and Extentions
    1. Adding a object-level custom validation function
    2. Simplifying forms with implicit labels
11. Points of attention
    1. Database size and memory management
    2. Boilerplate code
12. Quiz
