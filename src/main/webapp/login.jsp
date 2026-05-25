<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>GrazeNex</title>
</head>
<body>
    <header>
        <h1>Login Here</h1>
        <p id = "slogan">Access your account</p>
    </header>
    <nav>
            <a href="index.jsp">Home</a>
            <a href="reports.jsp">Reports</a>
            <a href="signup.jsp"id="signupLink">Sign Up</a>
            <a href="login.jsp" id="loginLink">Login</a>
        </nav><br><br><br>

        <section class="register-section">
            <form class="register-form" id="loginForm">
            <div class="input-group">
            <label>Email</label>
            <input type="email" id ="email" placeholder="Enter your email">
        </div>

        <div class="input-group">
            <label>Password</label>
            <input type="password" id="password" placeholder="Enter your password">
        </div>

        <button type="submit">Login</button>
            </form>
        </section>

        <br><br><br>
        <footer>
        <p>&copy; 2026 GrazeNex | All Rights Reserved</p>
        <p>Email: support@grazenex.com | Phone: +91 80733 18562</p>
    </footer>
        <script src="script.js"></script>
</body>
</html>