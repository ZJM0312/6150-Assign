# 6150-cssign

WEB DESIGN

#WEEK11
1.Front-end & Back-end  

Login Page:
# User Authentication System

This project is a user authentication system that includes a login feature. It utilizes Node.js, Express, and MongoDB for the backend with a simple front-end login form.

## Project Structure

- `controllers/`: Contains controller files like `authController.js` for handling authentication logic and `userController.js` for user-related actions.
- `models/`: Contains Mongoose models for the application; `User.js` is the user model.
- `routes/`: Includes routing files like `authRoutes.js` for authentication routes and `userRoutes.js` for user-related routes.
- `services/`: Contains service files like `authService.js` that handle business logic.
- `public/`: Holds front-end static files, including the `login.html` for the login interface.
- `img/`: Stores image files used in the project, such as `nat-2.jpg`.
- `server.js`: The main server file that initializes and runs the Express app.

## Setup Instructions

Ensure you have Node.js and MongoDB installed on your system and that MongoDB is running.

### Installing Dependencies

Navigate to the project root directory and run the following command to install the necessary dependencies:

```bash
npm install

Testing with Postman
You can also test the backend authentication API directly using Postman:

Set up a new POST request to http://localhost:3000/login.
Set the header Content-Type to application/json.
In the request body, input the login credentials in JSON format:json

{
    "fullName": "YourFullName",
    "password": "YourPassword"
}
Send the request and observe the response. A successful login will result in a status code of 200 and, typically, a user object or token in the response body.


//作业二
// http://localhost:3000/login.html

// postman：
// http://localhost:3000/login

// {
//   "username": "Jinming",
//   "password": "123456"
// }

// Content-Type 为 application/json
// http://localhost:3000/api/login?Content-Type=application/json

2-4.React

# React Components and Router Example

## Project Structure

This project is structured to contain separate components for each page along with the usage of React Router for navigation. Here's the breakdown of the folder structure:

- `src/`: The source directory for all the project's code.
  - `assets/`: Contains all the static files such as images used in the project.
  - `components/`: Includes reusable components that can be shared across different pages.
  - `layout/`: Houses the layout components that wrap the application or specific pages.
  - `pages/`: Contains the individual page components for the application.
    - `AboutUs/`: Components specific to the About Us page.
    - `Contact/`: Components specific to the Contact page.
    - `Home/`: Components specific to the Home page.
    - `Jobs/`: Components specific to the Jobs page.
  - `App.jsx`: The main React component that includes the router setup.
  - `index.css`: Global styles for the project.
  - `index.js`: The entry point for the React application.
  - `logo.svg`: The logo file used in the application.
  - `reportWebVitals.js`: Used for logging performance of the app (part of Create React App scaffold).
  - `routes.jsx`: Defines the routes for the application using React Router.
  - `setupTests.js`: Setup file for tests using Jest.

## Setup Instructions

To run this project, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the root directory of the project in your terminal.
3. Install the dependencies with `npm install`.
4. Start the development server with `npm start`.
5. Open your browser and go to `http://localhost:3000` to view the application.

## Components

- **Card Component**: A reusable component displayed on each page with specific details. It's implemented following the "complex_component_single.htm" example from the class.
- **Dynamic Component**: Utilize the `map()` function to render a list of items dynamically on at least one of the pages.

## Styling

Feel free to apply additional CSS to enhance the aesthetics of the pages. You can modify `index.css` or add new style sheets specific to each component.

## Additional Notes

- Make sure to follow the React best practices as shown in the lab.
- The project structure is modular, allowing for easy expansion and maintenance.

## Support

For any additional help or clarification, please refer to the React documentation or the resources provided in the classroom.




WEEK 2

This is my week 2 assignment. I have used all pointed HTML and HTML5 controls and further optimize last week webiste.
Beginning with the second page of this website, we can see that the self-adapting navigation, titles, paragraghs, summary, image gallery, form from up to down. In order to achieve these functions and make the website responsive, I tried to use float, overflow, column layout, position, psudo-class, selectors, and media. Here are some screenshots about my website:
<img width="1512" alt="截屏2023-09-20 22 23 42" src="https://github.com/ZJM0312/6150_Jinming_Zhang_Assignments/assets/144468085/85f14312-ec98-4c4f-8361-c20c6040a2bc">
<img width="1512" alt="截屏2023-09-20 22 23 36" src="https://github.com/ZJM0312/6150_Jinming_Zhang_Assignments/assets/144468085/30ee1178-b2e2-4f2d-8080-bd32c59df3b6">
<img width="1512" alt="截屏2023-09-20 22 23 34" src="https://github.com/ZJM0312/6150_Jinming_Zhang_Assignments/assets/144468085/ced8555f-e714-483b-94ba-bf2df0d2bbf3">
<img width="1512" alt="截屏2023-09-20 22 23 20" src="https://github.com/ZJM0312/6150_Jinming_Zhang_Assignments/assets/144468085/344880ee-fe00-4f5b-bdd8-78e25145ee08">
<img width="1512" alt="截屏2023-09-20 22 23 14" src="https://github.com/ZJM0312/6150_Jinming_Zhang_Assignments/assets/144468085/a453acc8-e9d4-44f3-b67d-0f191b0f054f">
<img width="1512" alt="截屏2023-09-20 22 22 59" src="https://github.com/ZJM0312/6150_Jinming_Zhang_Assignments/assets/144468085/f4e8290d-bf2d-4091-a3b7-4dbefc5d2020">
<img width="1512" alt="截屏2023-09-20 22 22 50" src="https://github.com/ZJM0312/6150_Jinming_Zhang_Assignments/assets/144468085/4de96c2a-fc76-4d74-87ae-2bd5542e4f1d">







WEEK 1
1. Design web's construction

2. Achieve functions and using pointed HTML and HTML5 controls, such as :
   
Favicon <img width="402" alt="截屏2023-09-13 22 46 08" src="https://github.com/ZJM0312/6150_Jinming_Zhang_Assignments/assets/144468085/0d0cd09c-a862-44bf-923b-76f5346b522d">
   
Table<img width="1511" alt="截屏2023-09-13 22 49 19" src="https://github.com/ZJM0312/6150_Jinming_Zhang_Assignments/assets/144468085/0c3a340a-b91d-4dc3-83df-056d5e6921a3">

Form<img width="1511" alt="截屏2023-09-13 22 49 59" src="https://github.com/ZJM0312/6150_Jinming_Zhang_Assignments/assets/144468085/bc1ba691-9b05-4c78-b880-edc00b1a4754">

Images<img width="1511" alt="截屏2023-09-13 22 50 39" src="https://github.com/ZJM0312/6150_Jinming_Zhang_Assignments/assets/144468085/d6f1ae62-7d0a-4b7d-874b-d6c88a1e0391">

Hyperlink<img width="1511" alt="截屏2023-09-13 22 51 41" src="https://github.com/ZJM0312/6150_Jinming_Zhang_Assignments/assets/144468085/d898591a-c5f1-4496-a612-62dc4292f3a7">

Button<img width="1512" alt="截屏2023-09-13 22 53 12" src="https://github.com/ZJM0312/6150_Jinming_Zhang_Assignments/assets/144468085/a8a6eb90-7e43-40f2-a6ea-e38f4cc64260">

audio<img width="301" alt="截屏2023-09-13 22 54 12" src="https://github.com/ZJM0312/6150_Jinming_Zhang_Assignments/assets/144468085/3dd5f32a-c61c-403c-867a-b51aae6d2aa2">

video<img width="1109" alt="截屏2023-09-13 22 54 25" src="https://github.com/ZJM0312/6150_Jinming_Zhang_Assignments/assets/144468085/cde645e6-fd4e-4675-bd4c-51d6c90faa9f">

header
    <header>
        <div class="container">
            <nav class="related-nav">
                <img src="img/WechatIMG817(已去底).jpg" alt="ticket" class="phlio">
                <ul>
                    <li><a href="page02.html">Home</a></li>
                    <li><a href="preparations.html">Preparations</a></li>
                    <li><a href="newstart.html">New start</a></li>
                    <li><a href="#">Challenges</a></li>
                    <li><a href="#">Opportunities</a></li>
                    <li><a href="page01.html">Back</a></li>
              
                </ul>
            </nav>
        </div>

    </header>
   
footer<img width="434" alt="截屏2023-09-13 22 56 33" src="https://github.com/ZJM0312/6150_Jinming_Zhang_Assignments/assets/144468085/f7208ab2-4947-4f69-8a61-b36f62a996ed">

summary<img width="1508" alt="截屏2023-09-13 22 57 43" src="https://github.com/ZJM0312/6150_Jinming_Zhang_Assignments/assets/144468085/614c0c06-7815-4c7d-97e4-2f0dd46f5c58">

menu<img width="558" alt="截屏2023-09-13 22 58 00" src="https://github.com/ZJM0312/6150_Jinming_Zhang_Assignments/assets/144468085/68edd0c8-760c-4478-aee8-b3edaefcea41">

tel for contact information
mailto for contact information<img width="461" alt="截屏2023-09-13 22 56 56" src="https://github.com/ZJM0312/6150_Jinming_Zhang_Assignments/assets/144468085/9528cf83-ec8c-47a5-ba16-abd70ba49188">

3.Use an external CSS file to make up which in the file of Week 1.

4.Use appropriate colors for the website, headings,layouts and use relevant images. Meantime, I break the page into sections for better visual appeal.

