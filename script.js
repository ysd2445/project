function mask(pass) {
    str = ""
    for (let index = 0; index < pass.length; index++) {
        str += "*";

    }
    return str
}
function copytext(txt) {
    navigator.clipboard.writeText(txt).then(
        () => {
            document.getElementById("alert").style.display = "inline"
            setTimeout(() => {
                document.getElementById("alert").style.display = "none"
            }, 2000);
        },
        () => {
            alert("copy fail")
        }
    )
}
const deletepassword = (website) => {
    let data = localStorage.getItem("passwords")
    let arr = JSON.parse(data)
    arrupdate = arr.filter((e) => {
        return e.website != website
    })
    localStorage.setItem("passwords", JSON.stringify(arrupdate))
    alert("You Want To Delete Password")
    showpasword()
}

const showpasword = () => {
    let table = document.querySelector("table")
    let data = localStorage.getItem("passwords");
    if (data == null || JSON.parse(data).length == 0) {
        table.innerHTML = `Sorry, But you never Save any Password here<br>
        <button class="start"><a class="black"href="http://127.0.0.1:5500/index.html#services">start now</a><button>`
    } else {
        table.innerHTML = ` <tr>

        <th>Website name</th>
        <th>Username</th>
        <th>Password</th>
        <th>Delete</th>
    </tr>`
        let arr = JSON.parse(data)
        str = ""
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            str += `<tr>
<td>${element.website}<img onclick="copytext('${element.website}')" src="copy.svg" height="20" width="20"></td>
<td>${element.username}<img onclick="copytext('${element.username}')" src="copy.svg" height="20" width="20"></td>
<td>${mask(element.password)}<img onclick="copytext(${element.password})" src="copy.svg" height="20" width="20"></td>
<td><button class="smbtn" onclick="deletepassword('${element.website}')">delete</button></td>
</tr>`
        }
        table.innerHTML = table.innerHTML + str
    }
    website.value = ""
    username.value = ""
    password.value = ""
}


console.log("helo world");
showpasword()
document.querySelector(".btn").addEventListener("click", (e) => {
    e.preventDefault()
    console.log(website.value, username.value, password.value);
    let passwords = localStorage.getItem("passwords");
    console.log(passwords);
    if (passwords == null) {
        let json = []
        json.push({ website: website.value, username: username.value, password: password.value })
        // alert("pasword saved")
        // document.getElementById("msg").style.display="none"
        setTimeout(() => {
            document.getElementById("msg").style.display = "inline"
            // document.getElementById("msg").style.display="none"
        }, 0.5);
        setTimeout(() => {
            // document.getElementById("msg").style.display="inline"
            document.getElementById("msg").style.display = "none"
        }, 2000);
    } else {
        let json = JSON.parse(localStorage.getItem("passwords"))
        json.push({ website: website.value, username: username.value, password: password.value })
        // document.getElementById("msg").style.display="none"
        setTimeout(() => {
            document.getElementById("msg").style.display = "inline"
            // document.getElementById("msg").style.display="none"
        }, 0.5);
        setTimeout(() => {
            // document.getElementById("msg").style.display="inline"
            document.getElementById("msg").style.display = "none"
        }, 2000);
        localStorage.setItem("passwords", JSON.stringify(json));
    }
    showpasword()
})

// document.querySelector("#Login").addEventListener(
//     "click",()=>{
//         console.log("hello");
//     }
// )