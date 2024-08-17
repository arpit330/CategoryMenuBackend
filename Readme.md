# Category Menu Management API

## Overview

This project is a Node.js backend server for category menu management, built with Nodejs, Express.js and MongoDB using Mongoose. 
The API supports operations for managing categories, sub-categories, and items in a menu.

## Features

- Create, read, update, and delete categories, sub-categories, and items
- Search items by name
- Validates request data and ensures consistency
- Provides detailed error messages

## Demo (Postman)
[Link to Postman workspace](https://www.postman.com/supply-candidate-80681068/workspace/menu-management-apis)

### Prerequisites

- Node.js
- Express.js
- MongoDB 

### Setup

**Clone the Repository**

   ```
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name 
   ```

**Install dependencies**

   ``` 
   npm install
   ```
**Create a .env file**

   Add following environment variables

   ```
   PORT=3000
   DB_URI=mongodb_connection_uri
   ```

**Start the server**

   ```
   npm start
   ```

## QnA

**1. Which database you have chosen and why?**

I picked MongoDB for this project because it is a NoSQL database that offers flexibility in handling hierarchical data structures like categories, sub-categories, and items. Its schema-less nature makes it well-suited for rapidly evolving data models and it integrates seamlessly with Mongoose for easy data manipulation and validation.

**2. Three things that you learned from this assignment:**

- Schema Design and Validation: Implementing complex data relationships and ensuring data integrity through Mongoose schema design and validation.
- Error Handling and Response Formatting: Creating structured error responses and handling various error scenarios effectively in Express.js.
- Serverless and Deployment Options: Exploring different hosting platforms for Node.js applications and understanding their free-tier limitations and capabilities.

**3. What was the most difficult part of the assignment?**

Ensuring Data Consistency: Enforcing unique constraints for sub-category names within a category and ensuring that sub-categories and items are correctly linked and validated was challenging, particularly in a NoSQL context where schema enforcement is less rigid compared to relational databases.

**4. What would you have done differently given more time?**

Enhanced Error Handling and Logging: I would implement more sophisticated error handling and logging mechanisms, possibly integrating with a logging service or tool for better monitoring and debugging. Additionally, optimizing performance and implementing more advanced search functionalities could be considered.