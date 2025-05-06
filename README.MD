### Viva Questions on HTML, CSS, and Bootstrap

#### HTML Questions:
1. **What is HTML and what is its purpose?**  
   - **Answer:** HTML stands for HyperText Markup Language. It is the standard markup language for creating web pages. It describes the structure of a web page using elements that tell the browser how to display content (e.g., headings, paragraphs, links).

2. **Explain the basic structure of an HTML document.**  
   - **Answer:**  
     ```html
     <!DOCTYPE html>
     <html>
     <head>
         <title>Page Title</title>
     </head>
     <body>
         <h1>My First Heading</h1>
         <p>My first paragraph.</p>
     </body>
     </html>
     ```
   - `<!DOCTYPE html>` declares the document type.  
   - `<html>` is the root element.  
   - `<head>` contains meta-information.  
   - `<body>` contains visible content.

3. **What is the role of the `<head>` tag in HTML?**  
   - **Answer:** The `<head>` tag contains meta-information about the HTML document, such as the title, links to stylesheets (CSS), scripts, and other metadata not displayed on the page.

---

#### CSS Questions:
4. **What is CSS, and why is it used?**  
   - **Answer:** CSS (Cascading Style Sheets) describes how HTML elements are displayed on screen. It controls layout, colors, fonts, and responsiveness, enabling consistent styling across multiple web pages.

5. **How do you link an external CSS file to an HTML document?**  
   - **Answer:** Use the `<link>` tag in the `<head>` section:  
     ```html
     <link rel="stylesheet" href="styles.css">
     ```

6. **Explain the CSS box model.**  
   - **Answer:** The box model consists of:  
     - **Content**: The actual text/image.  
     - **Padding**: Space around the content.  
     - **Border**: Outline around padding.  
     - **Margin**: Space outside the border.  

---

#### Bootstrap Questions:
7. **What is Bootstrap, and what are its advantages?**  
   - **Answer:** Bootstrap is a front-end framework for creating responsive, mobile-first websites. Advantages:  
     - Faster development with pre-built components.  
     - Cross-browser compatibility.  
     - Responsive grids for all screen sizes.  

8. **How do you include Bootstrap in a project?**  
   - **Answer:** Use the Bootstrap CDN in the `<head>`:  
     ```html
     <!-- CSS -->
     <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
     <!-- JS/jQuery -->
     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
     <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
     ```

9. **What is the Bootstrap grid system?**  
   - **Answer:** The grid system divides the screen into 12 columns. Classes like `col-md-6` create responsive layouts that adjust based on screen size (e.g., `md` for medium devices).

10. **How does Bootstrap ensure responsiveness?**  
    - **Answer:** Bootstrap uses fluid containers, flexible grids, and media queries to adapt layouts to different screen sizes (e.g., phones, tablets, desktops).

---

#### Practical Questions:
11. **How would you create a responsive navigation bar using Bootstrap?**  
    - **Answer:** Use the `navbar` component:  
      ```html
      <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="#">My Site</a>
          </div>
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">Home</a></li>
          </ul>
        </div>
      </nav>
      ```

12. **How do you create a card layout in Bootstrap?**  
    - **Answer:** Use the `card` class:  
      ```html
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Card Title</h5>
          <p class="card-text">Sample text.</p>
        </div>
      </div>
      ```

### Viva Questions on JavaScript and AJAX

#### JavaScript Basics:
1. **What is JavaScript, and how is it used in web development?**  
   - **Answer:** JavaScript is a loosely typed scripting language used to make web pages interactive. It handles dynamic content, form validation, and asynchronous operations like AJAX calls.

2. **What is the role of `localStorage` in JavaScript?**  
   - **Answer:** `localStorage` is a web storage API that allows data to be stored persistently in the browser (even after closing the tab/window). Data is saved as key-value pairs.

3. **How do you store and retrieve data in `localStorage`?**  
   - **Answer:**  
     ```javascript
     // Store data
     localStorage.setItem('key', 'value');
     // Retrieve data
     const data = localStorage.getItem('key');
     ```

---

#### AJAX Concepts:
4. **What is AJAX, and why is it used?**  
   - **Answer:** AJAX (Asynchronous JavaScript and XML) is a technique for creating fast, dynamic web pages. It allows asynchronous communication with a server (without page reloads), improving user experience.

5. **Explain the `XMLHttpRequest` object in AJAX.**  
   - **Answer:** The `XMLHttpRequest` object is used to interact with servers. Key properties/methods:  
     - `open(method, url, async)`: Configures the request.  
     - `send()`: Sends the request.  
     - `onreadystatechange`: Event handler for state changes.  
     - `readyState`: Tracks request state (0 to 4).  

6. **What are the different `readyState` values in AJAX?**  
   - **Answer:**  
     - `0`: Request not initialized.  
     - `1`: Server connection established.  
     - `2`: Request received.  
     - `3`: Processing request.  
     - `4`: Request finished (response ready).  

7. **How do you handle errors in AJAX?**  
   - **Answer:** Check the `status` property:  
     ```javascript
     if (xhr.status === 200) { /* Success */ } 
     else { console.error("Error:", xhr.statusText); }
     ```

---

#### Practical AJAX Implementation:
8. **Write a code snippet to make a POST request using AJAX.**  
   - **Answer:**  
     ```javascript
     const xhr = new XMLHttpRequest();
     xhr.open('POST', 'https://api.example.com/register', true);
     xhr.setRequestHeader('Content-Type', 'application/json');
     xhr.onreadystatechange = function() {
       if (xhr.readyState === 4 && xhr.status === 200) {
         console.log('Response:', xhr.responseText);
       }
     };
     xhr.send(JSON.stringify({ name: 'John', email: 'john@example.com' }));
     ```

9. **How do you fetch data from a server and display it on a webpage using AJAX?**  
   - **Answer:**  
     ```javascript
     const xhr = new XMLHttpRequest();
     xhr.open('GET', 'data.txt', true);
     xhr.onload = function() {
       if (xhr.status === 200) {
         document.getElementById('output').innerHTML = xhr.responseText;
       }
     };
     xhr.send();
     ```

10. **What is the difference between synchronous and asynchronous requests in AJAX?**  
    - **Answer:**  
      - **Synchronous:** Blocks code execution until the request completes (not recommended).  
      - **Asynchronous:** Allows other code to run while waiting for the response (default in AJAX).  

---

#### Data Handling:
11. **How would you push user registration data to an array and store it in `localStorage`?**  
    - **Answer:**  
      ```javascript
      let users = JSON.parse(localStorage.getItem('users')) || [];
      function registerUser(name, email) {
        users.push({ name, email });
        localStorage.setItem('users', JSON.stringify(users));
      }
      ```

12. **How do you retrieve and display stored data on a new page?**  
    - **Answer:**  
      ```javascript
      const users = JSON.parse(localStorage.getItem('users'));
      users.forEach(user => {
        console.log(`Name: ${user.name}, Email: ${user.email}`);
      });
      ```

---

#### Advanced Questions:
13. **What are the security concerns with AJAX?**  
    - **Answer:**  
      - **Cross-Site Scripting (XSS):** Sanitize user inputs to prevent malicious script injection.  
      - **Cross-Origin Requests (CORS):** Ensure server-side CORS policies restrict unauthorized domains.  

14. **Explain the Fetch API vs. `XMLHttpRequest`.**  
    - **Answer:** Fetch API is modern and promise-based, simplifying asynchronous calls. Example:  
      ```javascript
      fetch('url')
        .then(response => response.json())
        .then(data => console.log(data));
      ```

### Git & GitHub Questions:

1. **What is Git and how is it different from GitHub?**
   - **Answer:** Git is a distributed version control system that tracks changes in source code. GitHub is a cloud-based hosting service that uses Git for version control and adds collaboration features like issue tracking and pull requests.

2. **Explain the basic Git workflow.**
   - **Answer:** The basic workflow is:
     1. `git init` - Initialize repository
     2. Make changes to files
     3. `git add` - Stage changes
     4. `git commit` - Commit changes with message
     5. `git push` - Push to remote repository
     6. `git pull` - Fetch and merge changes from remote

3. **What is the purpose of `git branch` and `git checkout`?**
   - **Answer:** 
     - `git branch` creates new branches for parallel development
     - `git checkout` switches between branches or commits

### Docker Questions:

4. **What is Docker and why is it used?**
   - **Answer:** Docker is a containerization platform that packages applications and dependencies into containers. It provides consistent environments across development, testing, and production.

5. **Explain the difference between Docker image and container.**
   - **Answer:** 
     - Image: Blueprint/template with application code and dependencies
     - Container: Running instance of an image (isolated process)

### Angular Questions:

6. **What are the key components of an Angular application?**
   - **Answer:**
     - Components (UI building blocks)
     - Modules (organizational units)
     - Services (reusable business logic)
     - Templates (HTML views)
     - Directives (DOM manipulation)
     - Dependency Injection

7. **Explain data binding in Angular.**
   - **Answer:** Angular provides:
     - One-way binding: `{{value}}` or `[property]="value"`
     - Two-way binding: `[(ngModel)]="property"`
     - Event binding: `(event)="handler()"`

8. **What is Angular CLI and why is it useful?**
   - **Answer:** Angular CLI is a command-line interface tool that automates:
     - Project scaffolding (`ng new`)
     - Development server (`ng serve`)
     - Building (`ng build`)
     - Testing (`ng test`)
     - Code generation (`ng generate`)

### Practical Implementation Questions:

9. **How would you create a user registration form in Angular?**
   - **Answer:**
     1. Create a component (`ng generate component registration`)
     2. Design form in template with `[(ngModel)]`
     3. Add validation
     4. Create service to handle HTTP requests
     5. Connect form to service method

10. **How would you implement user authentication in Angular?**
    - **Answer:**
      1. Create AuthService with login/logout methods
      2. Use JWT for token-based authentication
      3. Implement route guards (`canActivate`)
      4. Store tokens securely
      5. Add interceptors for auth headers

11. **What is the purpose of Angular modules?**
    - **Answer:** Angular modules (`@NgModule`):
      - Organize related components/directives/pipes
      - Bundle features together
      - Manage dependencies
      - Control compilation context

12. **How do you share data between Angular components?**
    - **Answer:** Multiple ways:
      - Parent to child: `@Input()`
      - Child to parent: `@Output()` with `EventEmitter`
      - Services (singleton pattern)
      - RxJS Subjects/BehaviorSubjects
      - State management (NgRx)

### Version Control Best Practices:

13. **Why is branching important in Git?**
    - **Answer:** Branches allow:
      - Parallel development
      - Feature isolation
      - Experimentation without affecting main code
      - Easier collaboration
      - Release management

14. **What is the difference between `git pull` and `git fetch`?**
    - **Answer:**
      - `git fetch` downloads changes without merging
      - `git pull` does `fetch` + `merge` automatically

15. **How would you handle merge conflicts in Git?**
    - **Answer:**
      1. Identify conflicted files (`git status`)
      2. Open files and resolve conflicts (choose between versions)
      3. Mark as resolved (`git add`)
      4. Complete merge (`git commit`)


### AngularJS Viva Questions and Answers

#### 1. What is AngularJS?
**Answer:**  
AngularJS is an open-source JavaScript framework maintained by Google, used for building dynamic single-page web applications (SPAs). It extends HTML with additional attributes and binds data to HTML using expressions.

---

#### 2. What is the role of `ng-app` in AngularJS?
**Answer:**  
The `ng-app` directive initializes an AngularJS application. It tells AngularJS where the application starts and is typically placed in the `<html>` or `<body>` tag.

---

#### 3. Explain MVC architecture in the context of AngularJS.
**Answer:**  
- **Model**: Manages the application data.
- **View**: Represents the UI and displays data from the model.
- **Controller**: Acts as a bridge between the model and view. It contains business logic and updates the model and view accordingly.

AngularJS uses a variation called MVVM (Model-View-ViewModel) but loosely follows MVC principles.

---

#### 4. What are directives in AngularJS? Give examples.
**Answer:**  
Directives are special tokens in the markup that tell the library to do something to a DOM element. Examples include:
- `ng-model`: Binds HTML controls to application data.
- `ng-bind`: Binds application data to HTML.
- `ng-repeat`: Repeats a set of HTML elements for each item in a collection.

---

#### 5. What is two-way data binding?
**Answer:**  
Two-way data binding means that changes in the UI automatically update the model and vice versa. AngularJS achieves this using the `ng-model` directive.

---

#### 6. What are AngularJS filters? Provide an example.
**Answer:**  
Filters are used to format the value of an expression for display to the user.  
**Example:** `{{ 1234.5678 | number:2 }}` displays `1,234.57`.

---

#### 7. How does AngularJS handle HTTP requests?
**Answer:**  
AngularJS uses the `$http` service to communicate with remote servers via the browser's XMLHttpRequest object or via JSONP.

---

#### 8. What is the use of `ng-controller`?
**Answer:**  
The `ng-controller` directive attaches a controller class to the view. It defines the application behavior and exposes it to the view using `$scope`.

---

#### 9. What are scopes in AngularJS?
**Answer:**  
Scopes are objects that refer to the model and act as a glue between the controller and the view. They are available for both the controller and the HTML.

---

#### 10. How do you include AngularJS in your project?
**Answer:**  
You can include AngularJS by adding the following script in the HTML `<head>`:
```html
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.2/angular.min.js"></script>
```

---

#### 11. What is dependency injection in AngularJS?
**Answer:**  
Dependency injection (DI) is a design pattern used in AngularJS to deal with how components get hold of their dependencies. It makes components reusable, maintainable, and testable.

---

#### 12. What is `$scope` and how is it used?
**Answer:**  
`$scope` is an object that binds the controller and the view. It allows you to pass data between the controller and the HTML using directives like `ng-model` and `ng-bind`.

---

#### 13. What is routing in AngularJS?
**Answer:**  
Routing is used to create Single Page Applications with multiple views. AngularJS uses `ngRoute` to navigate between views without reloading the page.

---

#### 14. What are templates in AngularJS?
**Answer:**  
Templates are HTML files that include AngularJS-specific elements and attributes. They define the user interface and are rendered based on data from the model.

---

#### 15. What are services in AngularJS?
**Answer:**  
Services are singleton objects used to organize and share code across the application. AngularJS has built-in services like `$http`, `$location`, etc., and you can also create custom services.

---
```

```
# 📚 Viva Questions with Answers – Node.js, Express.js, MongoDB

## Q1. What is Node.js?

**A:** Node.js is an open-source, cross-platform runtime environment that allows JavaScript to run on the server side. It uses the V8 JavaScript engine and is designed for building scalable, event-driven applications.

---

## Q2. What are some key features of Node.js?

**A:** Key features include:
- Event-driven, non-blocking I/O model
- Lightweight and fast
- Uses JavaScript on the server
- Built-in support for modules
- Highly scalable
- Zero buffering

---

## Q3. What is Express.js?

**A:** Express.js is a minimal and flexible Node.js web application framework that provides robust features for building web and mobile applications. It simplifies server-side coding using Node.js.

---

## Q4. How do you serve static files using Express.js?

**A:** Use `express.static()` middleware. Example:

```js
app.use(express.static('public'));
```

This serves static files like HTML, CSS, JS, and images from the `public` directory.

---

## Q5. What are the steps to set up an Express.js project?

**A:**
1. Install Node.js
2. Create project folder
3. Run `npm init -y`
4. Create `index.js` file
5. Install Express using `npm install express`
6. Use Express to create a server and serve static files
7. Run server with `npm start`

---

## Q6. What is `package.json` and why is it important?

**A:** `package.json` is the manifest file that contains metadata about the Node.js project, such as name, version, dependencies, and scripts. It allows npm to install and manage packages.

---

## Q7. How do you run a Node.js application?

**A:** Add a script in `package.json`:
```json
"scripts": {
  "start": "node index.js"
}
```
Then run:
```bash
npm start
```

---

## Q8. How is Express.js different from Node.js?

**A:** Node.js is the runtime environment, whereas Express.js is a framework built on top of Node.js to simplify HTTP server creation and routing.

---

## Q9. What is MongoDB and why is it used?

**A:** MongoDB is a NoSQL database that stores data in JSON-like BSON format. It’s schema-less, highly scalable, and works well with Node.js for full JavaScript-based development.

---

## Q10. What does CRUD mean?

**A:** CRUD stands for:
- **C**reate: Add new data
- **R**ead: Retrieve existing data
- **U**pdate: Modify existing data
- **D**elete: Remove data

---

## Q11. How do you connect Node.js to MongoDB?

**A:** Using the MongoDB Node.js driver or Mongoose. Example with Mongoose:

```js
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mydb');
```

---

## Q12. What is the purpose of `app.listen()`?

**A:** It starts the server and listens for incoming HTTP requests on the specified port.

```js
app.listen(3000, () => console.log('Server running'));
```

---

## Q13. What is middleware in Express?

**A:** Middleware functions are functions that have access to the request and response objects. They are used for tasks like logging, authentication, error handling, etc.

---

## Q14. How can you define routes in Express.js?

**A:** Using route methods:

```js
app.get('/', (req, res) => res.send('Home Page'));
app.post('/submit', (req, res) => res.send('Form Submitted'));
```

---

## Q15. Why is Node.js suitable for real-time applications?

**A:** Because of its event-driven and non-blocking I/O model, Node.js is highly performant and ideal for applications like chat, games, or live updates.




### jQuery Mobile (Part a)
1. **What is jQuery Mobile?**  
   *Answer:* jQuery Mobile is a user interface framework built on jQuery Core, used for developing responsive websites or applications accessible on mobile, tablet, and desktop devices. It combines features of jQuery and jQueryUI to provide APIs for mobile web applications.

2. **Why use jQuery Mobile?**  
   *Answer:*  
   - It ensures consistent functionality across mobile, tablet, and desktop devices.  
   - It is compatible with frameworks like PhoneGap and Whitelight.  
   - It provides touch-friendly UI widgets and form inputs.  

3. **What are the key features of jQuery Mobile?**  
   *Answer:*  
   - Built on jQuery Core with a "write less, do more" philosophy.  
   - Open-source, cross-platform, and cross-browser compatible.  
   - Uses JavaScript and integrates jQuery and jQuery UI features.  

4. **How do you download jQuery Mobile?**  
   *Answer:* Visit [jQuery Mobile's official website](https://jquerymobile.com/), click the "Stable" button to download a ZIP file containing CSS and JavaScript files. Extract the files to a directory for use.  

5. **What is the advantage of using jQuery Mobile for web development?**  
   *Answer:* It simplifies the creation of responsive, touch-optimized web applications that work seamlessly across all devices without requiring separate codebases.  

---

### AWS & Deployment (Part b)
6. **What is cloud computing?**  
   *Answer:* Cloud computing refers to storing and accessing data over the internet instead of local hard drives. It relies on remote servers for data processing and storage.  

7. **What is AWS?**  
   *Answer:* AWS (Amazon Web Services) is a cloud computing platform offering scalable, cost-effective solutions like IaaS, PaaS, and SaaS. It provides services like compute power, database storage, and content delivery.  

8. **What are the key applications of AWS?**  
   *Answer:*  
   - Web/application hosting  
   - Media sharing (images/videos)  
   - Storage, backup, and disaster recovery  
   - Development/testing environments  
   - Academic computing and social networking  

9. **How do you create an AWS account?**  
   *Answer:*  
   1. Visit [AWS Signup Page](https://aws.amazon.com).  
   2. Enter user details (email, password, account name).  
   3. Provide contact and payment (credit card) information.  
   4. Verify identity via phone/email.  
   5. Select a support plan (e.g., Basic Free plan).  

10. **What are the steps to deploy a web application on AWS?**  
    *Answer:*  
    1. Launch an EC2 instance (e.g., Windows Server).  
    2. Configure source content for deployment.  
    3. Upload application files (e.g., "hello, world!").  
    4. Deploy the application.  
    5. Update and redeploy as needed.  
    6. Clean up resources post-deployment.  

11. **What is AWS Elastic Beanstalk?**  
    *Answer:* AWS Elastic Beanstalk is a PaaS service that automates deployment, scaling, and management of web applications. Developers upload code, and AWS handles infrastructure setup.  

12. **What is the difference between AWS VPC and Elastic Beanstalk?**  
    *Answer:*  
    - **VPC (Virtual Private Cloud):** Provides isolated network infrastructure for AWS resources.  
    - **Elastic Beanstalk:** Focuses on deploying and managing applications without handling underlying infrastructure.  

13. **Name three important AWS services.**  
    *Answer:*  
    - Amazon EC2 (Elastic Compute Cloud)  
    - Amazon S3 (Simple Storage Service)  
    - Amazon RDS (Relational Database Service)  

---

### Mini Project (Full Stack Development)
14. **What technologies would you use for a full-stack e-commerce web app?**  
    *Answer:*  
    - Frontend: HTML/CSS, JavaScript, React/jQuery Mobile  
    - Backend: Node.js (Express) or Django  
    - Database: MongoDB (NoSQL) or PostgreSQL  
    - Deployment: AWS Elastic Beanstalk or VPC  

15. **How would you ensure responsiveness in your web app?**  
    *Answer:* Use frameworks like jQuery Mobile or Bootstrap, and design layouts with flexible grids/media queries.  

16. **What security measures would you implement in your project?**  
    *Answer:*  
    - HTTPS for data encryption.  
    - Input validation to prevent SQL injection/XSS.  
    - Authentication (OAuth/JWT) and role-based access control.  
