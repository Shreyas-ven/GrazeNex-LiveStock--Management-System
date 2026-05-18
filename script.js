//Feature 1 : SignUp Page
let signupForm=document.getElementById("signupForm");
if (signupForm ){
    signupForm.addEventListener("submit", function(event) {
        event.preventDefault();
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;

    // Password validation
    let pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[@#$&!/])(?=.*\d).{8,}$/

    if(name =="" || email =="" || password ==""){
        alert("All Fields Required")
        return false;
    }
    if(!pattern.test(password)){
        alert("Password must contain 1 capital letter, 1 small letter, 1 special character, 1 Digit and minimum 8 length");
        return false;
    }

let user={name:name,email:email, password:password};

//Storing user credentials
localStorage.setItem("user",JSON.stringify(user));
alert("Sign Up Successful !")
window.location.href="login.html";
});
}

//Feature 2 : Login Page
let loginForm=document.getElementById("loginForm");

if(loginForm){
    loginForm.addEventListener("submit", function(event){
        event.preventDefault();
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        //reding the data from local storage 
        let user = JSON.parse(localStorage.getItem("user"));

        if(email==user.email && password == user.password){
            alert("Login Successfull!");
            //redirect to home page
            localStorage.setItem("isLoggedIn","true")
            window.location.href="index.html";
        }else{
            alert("Invalid Email or Password!");
        }
    });
}

//Feature 3: Updating daashboard heading after login
let heading=document.getElementById("welcomeMessage");

if(heading){
    let user=JSON.parse(localStorage.getItem("user"));
    let isLoggedIn = localStorage.getItem("isLoggedIn");

    if(user && isLoggedIn === "true"){
    heading.innerHTML = "Welcome " + user.name + "!";
}
}

//Feature 4: Protecting the reports.html from opening without log in
let currentPage=window.location.pathname;

if(currentPage.includes("reports.html")){
    let loginStatus = JSON.parse(localStorage.getItem("isLoggedIn"));

    if (!loginStatus){
        alert("Please Log In First!");
        window.location.href = "login.html";
    }
}


//Feature 5: Logout button login
let LogoutButton = document.getElementById("logoutBtn");

if(LogoutButton){
    LogoutButton.addEventListener("click",function(){
        localStorage.removeItem("isLoggedIn");
        alert("Logged Out Successfully!");
        window.location.href = "index.html";
    });
}

//Feature 6:Dynamic NavBar Logic
let signuplink = document.getElementById("signupLink");
let loginlink = document.getElementById("loginLink");
let logoutBtn = document.getElementById("logoutBtn");

let loginStatus = localStorage.getItem("isLoggedIn");

if(loginStatus == "true"){
    if(signuplink){
        signuplink.style.display = "none";
    }

    if(loginlink){
        loginlink.style.display = "none";
    }
}else{
    if(logoutBtn){
        logoutBtn.style.display="none";
    }
}


//Feature 7: Cattle adding
let addCattleBtn = document.getElementById("addCattleBtn");

if(addCattleBtn){

    addCattleBtn.addEventListener("click", function(){

        let cattleName = document.getElementById("cattleName").value;

        let breed = document.getElementById("breed").value;

        if(cattleName == ""){
            alert("Please enter cattle name!");
            return;
        }

        let cattleArray =
        JSON.parse(localStorage.getItem("cattle")) || [];

        cattleArray.push({
            name: cattleName,
            breed: breed
        });

        localStorage.setItem("cattle",
        JSON.stringify(cattleArray));

        alert("Cattle Added Successfully!");

        document.getElementById("cattleName").value = "";

        showCattle();
    });
}

showCattle();

function showCattle(){

    let cattleList = document.getElementById("cattleList");

    cattleList.innerHTML = "";

    let cattleArray =
    JSON.parse(localStorage.getItem("cattle")) || [];

    for(let i = 0; i < cattleArray.length; i++){

        cattleList.innerHTML += `
        <tr>
            <td>${cattleArray[i].name}</td>

            <td>${cattleArray[i].breed}</td>

            <td>
                <button onclick="deleteCattle(${i})">
                    Delete
                </button>
            </td>
        </tr>
        `;
    }
}

function deleteCattle(index){

    let cattleArray =
    JSON.parse(localStorage.getItem("cattle")) || [];

    cattleArray.splice(index, 1);

    localStorage.setItem("cattle",
    JSON.stringify(cattleArray));

    showCattle();
}


//Feature 8: Expenditure
let addExpenseBtn =
document.getElementById("addExpenseBtn");

if(addExpenseBtn){

    addExpenseBtn.addEventListener("click", function(){

        let item =
        document.getElementById("expenseItem").value;

        let amount =
        document.getElementById("expenseAmount").value;

        let date =
        document.getElementById("expenseDate").value;

        if(item == "" || amount == "" || date == ""){
            alert("Please fill all fields!");
            return;
        }

        let expenseArray =
        JSON.parse(localStorage.getItem("expenses")) || [];

        expenseArray.push({
            item: item,
            amount: amount,
            date: date
        });

        localStorage.setItem("expenses",
        JSON.stringify(expenseArray));

        alert("Expense Added!");

        showExpenses();
    });
}

showExpenses();

function showExpenses(){

    let expenseList =
    document.getElementById("expenseList");

    expenseList.innerHTML = "";

    let expenseArray =
    JSON.parse(localStorage.getItem("expenses")) || [];

    for(let i = 0; i < expenseArray.length; i++){

        expenseList.innerHTML += `
        <tr>
            <td>${expenseArray[i].item}</td>

            <td>${expenseArray[i].amount}</td>

            <td>${expenseArray[i].date}</td>

            <td>
                <button onclick="deleteExpense(${i})">
                    Delete
                </button>
            </td>
        </tr>
        `;
    }
}

function deleteExpense(index){

    let expenseArray =
    JSON.parse(localStorage.getItem("expenses")) || [];

    expenseArray.splice(index, 1);

    localStorage.setItem("expenses",
    JSON.stringify(expenseArray));

    showExpenses();
}



//Feature 9: Income
let addIncomeBtn =
document.getElementById("addIncomeBtn");

if(addIncomeBtn){

    addIncomeBtn.addEventListener("click", function(){

        let source =
        document.getElementById("incomeSource").value;

        let amount =
        document.getElementById("incomeAmount").value;

        let date =
        document.getElementById("incomeDate").value;

        if(source == "" || amount == "" || date == ""){
            alert("Please fill all fields!");
            return;
        }

        let incomeArray =
        JSON.parse(localStorage.getItem("income")) || [];

        incomeArray.push({
            source: source,
            amount: amount,
            date: date
        });

        localStorage.setItem("income",
        JSON.stringify(incomeArray));

        alert("Income Added!");

        showIncome();
    });
}

showIncome();

function showIncome(){

    let incomeList =
    document.getElementById("incomeList");

    incomeList.innerHTML = "";

    let incomeArray =
    JSON.parse(localStorage.getItem("income")) || [];

    for(let i = 0; i < incomeArray.length; i++){

        incomeList.innerHTML += `
        <tr>
            <td>${incomeArray[i].source}</td>

            <td>${incomeArray[i].amount}</td>

            <td>${incomeArray[i].date}</td>

            <td>
                <button onclick="deleteIncome(${i})">
                    Delete
                </button>
            </td>
        </tr>
        `;
    }
}

function deleteIncome(index){

    let incomeArray =
    JSON.parse(localStorage.getItem("income")) || [];

    incomeArray.splice(index, 1);

    localStorage.setItem("income",
    JSON.stringify(incomeArray));

    showIncome();
}