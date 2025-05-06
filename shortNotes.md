# Web Application Development - Comprehensive Notes

## HTML (HyperText Markup Language)
- **Purpose**: Standard markup language for creating web pages and applications
- **Document Structure**:
  ```html
  <!DOCTYPE html> <!-- Declares HTML5 document type -->
  <html lang="en"> <!-- Root element with language attribute -->
  <head> <!-- Contains meta information -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body> <!-- Contains visible content -->
    <h1>Heading</h1>
    <p>Paragraph text</p>
  </body>
  </html>
  ```
- **Key Elements**:
  - Semantic elements: `<header>`, `<nav>`, `<section>`, `<article>`, `<footer>`
  - Form elements: `<input>`, `<select>`, `<textarea>`, `<button>`
  - Media elements: `<img>`, `<video>`, `<audio>`

## CSS (Cascading Style Sheets)
- **Purpose**: Stylesheet language for describing presentation of HTML documents
- **Box Model Components**:
  - Content: Actual text/images (width/height)
  - Padding: Space around content (padding)
  - Border: Outline around padding (border)
  - Margin: Space outside border (margin)
- **Layout Techniques**:
  - Flexbox: `display: flex` for 1D layouts
  - Grid: `display: grid` for 2D layouts
  - Positioning: `relative`, `absolute`, `fixed`
- **Responsive Design**:
  ```css
  @media (max-width: 768px) {
    /* Mobile-specific styles */
  }
  ```

## Bootstrap Framework
- **Current Version**: Bootstrap 5 (as of knowledge cutoff)
- **Grid System**:
  ```html
  <div class="container">
    <div class="row">
      <div class="col-md-6">50% width on medium+ screens</div>
      <div class="col-md-6">50% width on medium+ screens</div>
    </div>
  </div>
  ```
- **Key Components**:
  - Navigation: `navbar`, `nav-tabs`
  - Cards: `card`, `card-body`, `card-title`
  - Modals: `modal`, `modal-dialog`
  - Forms: `form-control`, `form-select`

## JavaScript Fundamentals
- **Core Concepts**:
  - Variables: `let` (block-scoped), `const` (constant), `var` (function-scoped)
  - Functions: Regular vs arrow functions (`() => {}`)
  - Objects: Key-value pairs with methods
  - Arrays: Methods like `map()`, `filter()`, `reduce()`
- **DOM Manipulation**:
  ```javascript
  document.getElementById('demo').innerHTML = 'New content';
  document.querySelector('.class').style.color = 'red';
  ```
- **ES6+ Features**:
  - Template literals: `` `Hello ${name}` ``
  - Destructuring: `const { prop } = object`
  - Spread operator: `[...array]`

## jQuery Library
- **Purpose**: Simplify DOM manipulation and AJAX
- **Common Methods**:
  - Selection: `$('selector')`
  - Events: `.click()`, `.on()`
  - Effects: `.show()`, `.hide()`, `.toggle()`
  - AJAX:
    ```javascript
    $.ajax({
      url: 'endpoint',
      method: 'GET',
      success: function(data) {...}
    });
    ```

## Angular Framework
- **Architecture**:
  - Components: UI building blocks with `@Component` decorator
  - Services: `@Injectable` for shared logic
  - Modules: `@NgModule` for organization
  - Routing: `RouterModule.forRoot()`
- **Data Binding**:
  - Interpolation: `{{ value }}`
  - Property: `[property]="value"`
  - Event: `(event)="handler()"`
  - Two-way: `[(ngModel)]="property"`

## React Library
- **Core Concepts**:
  - JSX: JavaScript syntax extension
  - Components: Functional (with Hooks) and Class
  - Props: Pass data to components
  - State: `useState()` hook for local state
- **Lifecycle** (Class Components):
  - `componentDidMount()`, `componentDidUpdate()`, `componentWillUnmount()`
- **Hooks**:
  - `useState()`: Local state management
  - `useEffect()`: Side effects
  - `useContext()`: Global state

## Node.js & Express
- **Node.js Features**:
  - Event-driven, non-blocking I/O
  - NPM: Package management
  - Built-in modules: `fs`, `http`, `path`
- **Express Basics**:
  ```javascript
  const express = require('express');
  const app = express();
  
  app.get('/', (req, res) => {
    res.send('Hello World');
  });
  
  app.listen(3000);
  ```
- **Middleware**:
  - `app.use(express.json())` for JSON parsing
  - `app.use(cors())` for CORS
  - Custom middleware functions

## MongoDB (NoSQL Database)
- **Document Structure**:
  ```json
  {
    "_id": ObjectId("..."),
    "name": "John",
    "age": 30,
    "hobbies": ["reading", "coding"]
  }
  ```
- **Mongoose ODM**:
  ```javascript
  const mongoose = require('mongoose');
  const Schema = mongoose.Schema;
  
  const userSchema = new Schema({
    name: String,
    age: Number
  });
  
  module.exports = mongoose.model('User', userSchema);
  ```

## Deployment (AWS)
- **Common Services**:
  - EC2: Virtual servers
  - S3: File storage
  - RDS: Managed databases
  - Lambda: Serverless functions
- **Elastic Beanstalk**:
  - Platform-as-a-Service (PaaS)
  - Handles deployment, scaling, monitoring

## Version Control (Git)
- **Workflow**:
  1. `git init` - Initialize repository
  2. `git add .` - Stage changes
  3. `git commit -m "message"` - Commit changes
  4. `git push origin main` - Push to remote
- **Branching**:
  - `git branch feature-x` - Create branch
  - `git checkout feature-x` - Switch branch
  - `git merge feature-x` - Merge branch

## Docker Containers
- **Key Concepts**:
  - Images: Immutable templates (`Dockerfile`)
  - Containers: Running instances of images
  - Volumes: Persistent data storage
- **Basic Commands**:
  - `docker build -t image-name .`
  - `docker run -p 4000:80 image-name`
  - `docker ps` - List running containers
