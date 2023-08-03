let firstName = document.querySelector("#Firstname");
let lastName = document.querySelector("#Lastname");
let college = document.querySelector("#college");
let phone = document.querySelector("#phone")
let email = document.querySelector("#email")
let city = document.querySelector("#city")
let course = document.querySelector("#course")

let indexx = document.querySelectorAll("input[name='member']")
console.log(indexx)

let display = document.createElement('p');

function validate(){
    if (firstName.value == ""){
        document.querySelectorAll(".form_set")[0].appendChild(display)
        display.innerHTML = "Name cannot be empty"
        return false
    }
    else if (lastName.value == ""){
        document.querySelectorAll(".form_set")[1].appendChild(display)
        display.innerHTML = "Name cannot be empty"
        return false;
    }
    else if(college.value == ""){
        document.querySelectorAll(".form_set")[2].appendChild(display)
        display.innerHTML = "Please choose your college"
        return false;

    }
    else if (email.value == ""){
        document.querySelectorAll(".form_set")[3].appendChild(display)
        display.innerHTML = "Email cannot be empty"
        return false;
    }
    else if(phone.value == ""){
        document.querySelectorAll(".form_set")[4].appendChild(display)
        display.innerHTML = "Fill contact area"
        return false;
    }
    else if (city.value == "#"){
        document.querySelectorAll(".form_set")[5].appendChild(display)
        display.innerHTML = "Please choose your city"
        return false;
    }
    else if(course.value == "#"){
        document.querySelectorAll(".form_set")[6].appendChild(display)
        display.innerHTML = "Please choose your course"
        return false; 

    }
    else if (indexx[0].checked == false && indexx[1].checked == false){
        document.querySelectorAll(".form_set")[7].appendChild(display)
        display.innerHTML = "Please choose yes or No"
        return false;
    }

    else {
        document.querySelector(".form-display").innerHTML = "Form sucessfully submitted"
        return true;
        
    }
}
