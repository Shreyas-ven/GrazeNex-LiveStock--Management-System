<!DOCTYPE html>
<html>
<head>
    <title>GrazeNex Expense</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <header>
        <h1>GrazeNex</h1>
        <p>Livestock Expense Management</p>
    </header>

    <nav>
        <a href="index.jsp">Home</a>
            <a href="reports.jsp">Tasks</a>
            <a href="cattle.jsp">Cattle</a>
            <a href="income.jsp">Income</a>
            <a href="#" id="logoutBtn">Logout</a>
    </nav><br><br><br>

    <section class="register-section">
        <div class="register-form">
        <h2 id = "form-head">Expenditure Management</h2>

        <input type="text"
        id="expenseItem"
        placeholder="Expense Item">

        <input type="number"
        id="expenseAmount"
        placeholder="Amount">

        <input type="date"
        id="expenseDate">

        <button id="addExpenseBtn">
            Add Expense
        </button>

        <table border="1">

            <thead>
                <tr>
                    <th>Item</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody id="expenseList">

            </tbody>

        </table>

        </div>
    </section>

    <script src="script.js"></script>

</body>
</html>