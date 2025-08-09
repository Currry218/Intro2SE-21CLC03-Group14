# Intro2SE-21CLC03-Group14

A web application built as part of the Introduction to Software Engineering course project.  
This project follows the **MVC architecture** and is developed using **Express.js**, **Handlebars**, and **Sequelize** with a **PostgreSQL** database.

---

## Features
- **MVC Architecture**: Clear separation between Models, Views, and Controllers.
- **Server-Side Rendering**: Dynamic HTML rendering using Handlebars templates.
- **Database Integration**: Sequelize ORM with PostgreSQL for structured data management.
- **RESTful Routes**: Organized endpoints for CRUD operations.
- **Responsive Views**: Handlebars layouts for a consistent user interface.

---

## Tech Stack
- **Backend Framework:** [Express.js](https://expressjs.com/)
- **View Engine:** [Handlebars](https://handlebarsjs.com/)
- **ORM:** [Sequelize](https://sequelize.org/)
- **Database:** PostgreSQL
- **Language:** JavaScript (Node.js runtime)
- **Version Control:** Git & GitHub

---

## Project Structure
- **controllers:** Handle business logic & route control

- **models:** Sequelize models for database tables

- **views:** Handlebars templates for UI

- **public:** Static assets (CSS, JS, images)

- **routes:** Express route definitions

- **config:** Database & app configuration

- **app.js:** Main application entry point

---

## Installation & Setup
#### 1. Clone the repository
```bash
git clone https://github.com/Currry218/Intro2SE-21CLC03-Group14.git
cd Intro2SE-21CLC03-Group14
```
#### 2. Install dependencies
```bash
npm install
```

#### 3. Configure environment variables
Create a .env file in the root directory:
```bash
env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=your_database
DB_USER=your_username
DB_PASS=your_password
PORT=3000
```
#### 4. Run database migrations (if any)
```bash
npx sequelize-cli db:migrate
```
#### 5. Start the application
```bash
npm start
```
The app will be available at http://localhost:3000

