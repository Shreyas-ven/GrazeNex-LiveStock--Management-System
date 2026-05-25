<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>GrazeNex</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
            <h1>Create your Account</h1>
            <p id = "slogan">Register Here!</p>
    </header>
    <nav>
            <a href="index.jsp">Home</a>
            <a href="reports.jsp">Reports</a>
            <a href="signup.jsp"id="signupLink">Sign Up</a>
            <a href="login.jsp" id="loginLink">Login</a>
        </nav><br><br>
        <section class="register-section">
            <form class="register-form"  action="signup" method="post">
                <div class="input-group">
            <label>Full Name</label>
            <input type="text" id="name" placeholder="Enter your full name" name="name">
        </div>

        <div class="input-group">
            <label>Email</label>
            <input type="email" id ="email" placeholder="Enter your email" name= "email">
        </div>

        <div class="input-group">
            <label>Password</label>
            <input type="password" id="password" placeholder="Enter your password" name= "pass">
        </div>

        <button type="submit">Register</button>


            </form>
        </section>

        <footer>
        <p>&copy; 2026 GrazeNex | All Rights Reserved</p>
        <p>Email: support@grazenex.com | Phone: +91 80733 18562</p>
    </footer>
        <script src="script.js"></script>
</body>
</html>