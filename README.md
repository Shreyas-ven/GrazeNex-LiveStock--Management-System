# 🐄 GrazeNex - Intelligent Livestock Management System

GrazeNex is a Java Full Stack web application developed using Servlets, JSP, JDBC, MySQL, HTML, CSS, and JavaScript. The system helps livestock owners and farmers manage cattle records, income, expenses, and lost animal reports through a centralized digital platform.

---

## 🚀 Features

### 👤 User Authentication
- User Registration
- User Login
- Session Management
- Secure Logout

### 🐄 Livestock Management
- Add Cattle Information
- View Registered Cattle
- Delete Cattle Records
- Categorize livestock (Cow, Goat, Sheep, Ox)

### 💰 Income Management
- Add Income Records
- View Income Details
- Delete Income Entries

### 💸 Expense Management
- Add Expense Records
- View Expense Details
- Delete Expense Entries

### 🔍 Lost Animal Reporting
- Report Missing Animals
- Enter Animal Details
- Specify Reward Amount
- Add Recognition Information
- Store Shed/Location Details

### 📊 Reports Module
- View Farm Data
- Monitor Livestock Activities
- Track Financial Records

---

## 🛠 Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript
- JSP

### Backend
- Java
- Servlets
- JDBC

### Database
- MySQL

### Server
- Apache Tomcat 10

### Development Tools
- Eclipse IDE
- Git
- GitHub

---

## 🏗 Project Architecture

The project follows the MVC (Model View Controller) architecture.

```text
View (JSP Pages)
        ↓
Controller (Servlets)
        ↓
Model (Java Beans)
        ↓
DAO (Database Operations)
        ↓
MySQL Database
```

### MVC Components

#### 📄 View
- index.jsp
- login.jsp
- signup.jsp
- cattle.jsp
- income.jsp
- expense.jsp
- reports.jsp
- addAnimal.jsp

#### 🎮 Controller
- LoginServlet
- SignupServlet
- LogoutServlet
- AddCattleServlet
- DeleteCattleServlet
- AddIncomeServlet
- DeleteIncomeServlet
- AddExpenseServlet
- DeleteExpenseServlet
- AddLostAnimalServlet

#### 📦 Model
- User.java
- Cattle.java
- Income.java
- Expense.java
- LostAnimal.java

#### 🗄 DAO Layer
- UserDAO.java
- CattleDAO.java
- IncomeDAO.java
- ExpenseDAO.java
- LostAnimalDAO.java

---

## 🗃 Database Tables

### users

| Column | Type |
|----------|----------|
| id | INT |
| name | VARCHAR |
| email | VARCHAR |
| password | VARCHAR |

### cattle

| Column | Type |
|----------|----------|
| id | INT |
| user_id | INT |
| cattle_name | VARCHAR |
| breed | VARCHAR |

### income

| Column | Type |
|----------|----------|
| id | INT |
| user_id | INT |
| income_source | VARCHAR |
| amount | DOUBLE |

### expense

| Column | Type |
|----------|----------|
| id | INT |
| user_id | INT |
| expense_name | VARCHAR |
| amount | DOUBLE |

### lost_animals

| Column | Type |
|----------|----------|
| id | INT |
| user_id | INT |
| animal_name | VARCHAR |
| category | VARCHAR |
| reward | DOUBLE |
| location | TEXT |
| recognition | TEXT |

---

## 📚 Learning Outcomes

Through this project, I gained practical experience in:

- Java Full Stack Development
- Servlets and JSP
- JDBC Connectivity
- Session Management
- MVC Architecture
- DAO Design Pattern
- CRUD Operations
- MySQL Database Integration
- Git and GitHub Version Control

---

## 👨‍🏫 Acknowledgements

Special thanks to:

- Mr. Ashank David for excellent Java Full Stack Development training.
- Guru Charan Sir for guidance and support.
- Jayachandran Sir for providing this learning opportunity.

---

## 🤝 Team Members

- Yathish
- Sujith
- Varun
- Shreyas V

---

## 📌 Future Enhancements

- Animal Vaccination Tracking
- Milk Production Reports
- Dashboard Analytics
- PDF Report Generation
- Image Upload for Lost Animals
- Mobile Responsive UI
- Email Notifications

---

## 📧 Contact

Project: GrazeNex - Intelligent Livestock Management System

Developer: Shreyas V

Email: shreyasvbangera@gmail.com

---

⭐ If you found this project useful, feel free to star the repository.
