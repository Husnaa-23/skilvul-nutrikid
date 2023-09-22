//form 

function handleGetFormData() {
    const name= document.getElementById('name').value;
    const email= document.getElementById('email').value; 
    const city= document.getElementById('city').value;
    const zipCode= document.getElementById('zip-code').value;
    const status= document.getElementById('status').checked;
 
  return {
       name,
       email,
       city,
       zipCode,
       status,
  };
}

function isNumber(string) { return !isNaN(string) }

function checkboxIsChecked() {
const checkBox = document.getElementById('status');

if (checkBox.checked) {
 return true;
} else {
 return false;
}
}

function validateFormData(formData) {
if (!formData) {
 return false;
}
if (!isNumber(formData.zipCode)) {
 return false;
}
if (!checkboxIsChecked()) {
 return false;
}
return true;
}

function submit(){
  event.preventDefault();
  const warningDiv = document.getElementById('warning');
  const formData = handleGetFormData();

  if (validateFormData(formData) == false) {
       warningDiv.innerText = 'Periksa form anda sekali lagi';
  } else {
       warningDiv.innerText = '';
  }
}