// https://duckduckgo.com/?q=${query}&ia=web

async function AutoRefresh(Sec) {

    setTimeout(() => {
        window.location.reload();
        console.log("Page Automatically Refresh 3 Sec");

    }, Sec);
}

function UserPassCheck() {

    let UsernameAccess = localStorage.getItem("UsernameForce")
    let PassWordAccess = localStorage.getItem("PasswordForce")

    let UserName = JSON.parse(localStorage.getItem("Username"));
    let PassWord = JSON.parse(localStorage.getItem("Password"));

    localStorage.setItem("Username", JSON.stringify(document.getElementById("Username1").value))
    localStorage.setItem("Password", JSON.stringify(document.getElementById("Password1").value))

    if (document.getElementById("Username1").value == UserName && UsernameAccess == "True" && document.getElementById("Password1").value == PassWord && PassWordAccess == "True") {
        document.getElementById("RegisterSection").style.display = "flex"
        document.querySelector("main").style.display = "none"

        document.getElementById("Username1Status").textContent = "Username Is Already Exists"

    }

    else if (UsernameAccess == "True" && PassWordAccess == "True") {

        document.getElementById("SignupDiv").style.display = "none"
        document.getElementById("LoginDiv").style.display = "flex"
        localStorage.removeItem("UsernameForce")
        localStorage.removeItem("PasswordForce")

    }

    else {
        document.getElementById("SignupDiv").style.display = "flex"
        document.getElementById("LoginDiv").style.display = "none"
    }

}

// Html Page Load

window.addEventListener("DOMContentLoaded", () => {

    let CheckLogin = localStorage.getItem("AccountGranted");

    if (CheckLogin == "True") {
        document.getElementById("RegisterSection").style.display = "none"
        document.querySelector("main").style.display = "flex"

        document.getElementById("AccountName").textContent = `${JSON.parse(localStorage.getItem("Username"))}`

    } else {
        document.getElementById("RegisterSection").style.display = "flex"
        document.querySelector("main").style.display = "none"
    }



})

// Username Load 

window.document.getElementById("Username1").addEventListener("keyup", () => {

    if (document.getElementById("Username1").value.length <= 2) {
        document.getElementById("Username1Status").textContent = "UserName Is Invalid";
        document.getElementById("Username1Status").style.color = "red"
    }
    else {
        document.getElementById("Username1Status").textContent = "Valid Username"
        document.getElementById("Username1Status").style.color = "green"
        localStorage.setItem("UsernameForce", "True")
    }


})

// PassWord Load

window.document.getElementById("Password1").addEventListener("keyup", () => {

    if (document.getElementById("Password1").value.length <= 4) {
        document.getElementById("Password1Status").textContent = "Weak Password"
        document.getElementById("Password1Status").style.color = "red"
    }
    else if (document.getElementById("Password1").value.length <= 7) {
        document.getElementById("Password1Status").textContent = "Medium Password"
        document.getElementById("Password1Status").style.color = "orange"
    }
    else if (document.getElementById("Password1").value.length >= 10) {
        document.getElementById("Password1Status").textContent = "Strong Password"
        document.getElementById("Password1Status").style.color = "green"

        setTimeout(() => {
            document.getElementById("Password1Status").textContent = "Valid Password"
            document.getElementById("Password1Status").style.color = "green"
            localStorage.setItem("PasswordForce", "True")

            document.getElementById("Username2").value = JSON.parse(localStorage.getItem("Username"));
            document.getElementById("Password2").value = JSON.parse(localStorage.getItem("Password"));

        }, 1000);


    }

})


// Register Button        

document.getElementById("RegisterBtn").addEventListener("click", () => {

    UserPassCheck();

})

// LogIn Button

document.getElementById("LoginBtn").addEventListener("click", () => {

    let UserName = JSON.parse(localStorage.getItem("Username"));
    let PassWord = JSON.parse(localStorage.getItem("Password"));

    console.log(" Username : " + UserName + " Password : " + PassWord);


    if (document.getElementById("Username2").value == UserName && document.getElementById("Password2").value == PassWord) {

        document.getElementById("Username2Status").textContent = "Username is Correct"
        document.getElementById("Username2Status").style.color="green"

        document.getElementById("Password2Status").textContent = "Password Is Corect" 
        document.getElementById("Password2Status").style.color="green"

        setTimeout(() => {
            document.getElementById("RegisterSection").style.display = "none"
            document.querySelector("main").style.display = "flex"
            localStorage.setItem("AccountGranted", "True")
            console.log(localStorage.getItem("AccountGranted"));
    
        }, 2000);

        // Login Successfull Show Account Name

        document.getElementById("AccountName").textContent = `${UserName}`


    }
    else if (!document.getElementById("Username2").value == !UserName) {
        document.getElementById("Username2Status").textContent = "Username is Incorect"
        document.getElementById("Username2Status").style.color="red"
    }

    else if (!document.getElementById("Password2").value == !PassWord) {
        document.getElementById("Password2Status").textContent = "Password Is Incorect"
        document.getElementById("Password2Status").style.color="red"
    }


})

// LogOut Button

document.getElementById("LogOut").addEventListener("click", () => {

    document.getElementById("RegisterSection").style.display = "flex"
    document.querySelector("main").style.display = "none"

    localStorage.clear()

})


// Show Username And Password

document.getElementById("ShowUserPass").addEventListener("click", () => {
    alert("Username : " + JSON.parse(localStorage.getItem("Username")) + " Password : " + JSON.parse(localStorage.getItem("Password")))
})