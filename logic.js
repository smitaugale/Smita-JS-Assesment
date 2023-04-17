const form = document.getElementById('form');
const username = document.getElementById('uname1');
const email = document.getElementById('email');
const password1 = document.getElementById('pass');
const password2 = document.getElementById('cpass');
const birthDate = document.getElementById('dob');
const mobileNumber = document.getElementById('mobile');

let isValid = false;
  

form.addEventListener('submit', e=> {
    e.preventDefault(); // Prevent form submission

    //validateInputs();
    if (isValid) {
        form.submit();
        window.location.href = 'Success.html'; // Replace '/next-page' with the actual URL of the next page
    }
    else
    {
        validateInputs();
    }
});

const setError = (element, message) =>{
    //alert(element+message);
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

   
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');

}

const setSuccess = element =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');


}

function validateEmail(emailValue) {
    
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    
    if (!emailValue.match(emailRegex)) {
        setError(email, 'Invalid email address');
    } else {
        setSuccess(email);
    }
}

function validateDateOfBirth(dobValue) {
    // Regular expression for date of birth validation in yyyy-mm-dd format
    const dobRegex = /^\d{4}-\d{2}-\d{2}$/;
    
    if (!dobValue.match(dobRegex)) {
        setError(dob, 'Invalid date of birth. Please enter a valid date in yyyy-mm-dd format');
    } else {
        const currentDate = new Date();
        const inputDate = new Date(dobValue);
        var age = currentDate.getFullYear() - inputDate.getFullYear();

        if (inputDate > currentDate) {
            setError(dob, 'Date of birth cannot be a future date');
        } else {
            setSuccess(dob);
        }
    }
    if(age <=15)
    {
        setError(dob, 'You should be 15 years old to book!');
    }

}


function validateInputs()
{
    const userValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue1 = password1.value.trim();
    const passwordValue2 = password2.value.trim();
    const dobValue = birthDate.value.trim();
    const mobileValue = mobileNumber.value.trim();
    const mobileNumberPattern = /^\d{10}$/;

    isValid = true;

// Validations for User Name
                 
    if (userValue== "null" || userValue == "")
    {
        setError(username,'User name is required');
        isValid = false;
    }else
    {
        setSuccess(username);
    }

 // Validation for Email ID
        
    
    if (emailValue == '' || emailValue == null) {
        setError(email, 'Email is required');
        isValid = false;
    } else {
        validateEmail(emailValue);
    }
//Validation for Passwords
    if(passwordValue1 === '')
    {
        setError(password1,'Password is Required!');
        isValid = false;
    }else if(passwordValue1.length<8)
    {
        setError(password1,'Password must be at least 8 characters!');
        isValid = false;
    }else
    {
        setSuccess(password1);
    }
//Validation for Confirm Password

   if(passwordValue2 === '')
    {
        setError(password2,'Password is Required!');
        isValid = false;
    } else if(passwordValue2.length<8)
    {
        setError(password2,'Password must be at least 8 characters!');
        isValid = false;
    }else
    {
        setSuccess(password2);
    }
    if (passwordValue1 !== passwordValue2) 
    {
        setError(password2,'Password do not match!');
        setError(pass,'Password do not match!');
        isValid = false;
    }
// Validation for Date of Birth

    if(dobValue === '') {
        setError(dob, 'Date of Birth is required');
        isValid = false;
    } else {
        validateDateOfBirth(dobValue);
    }
// Validations for Mobile Number
    if(mobileValue === '')
    {
        setError(mobileNumber,'Mobile number is required!')
        isValid = false;
    }else
// Test the input mobile number against the pattern
    if (mobileNumberPattern.test(mobileValue)) 
    {
        setSuccess(mobileNumber);
    } else {
      
      setError(mobileNumber,'Mobile number is invalid');
      isValid = false;
    }
    

}