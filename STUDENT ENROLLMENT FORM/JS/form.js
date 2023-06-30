(() => {
  'use strict';

  const forms = document.querySelectorAll('.needs-validation');

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
      storedata(); // Store the form data when submitted
    }, false);
  });

})();

function checkText(event) {
  let sample1 = document.querySelector('.formName').value;
  if (!isNaN(sample1)) {
    alert("Text input required");
  }
}

function radio() {
  let value = document.getElementsByName('genderinput');
  var selectValue = Array.from(value).find(radio => radio.checked);
  document.querySelector('.gender').innerHTML = `${selectValue.value}`;
}

function readURL(input) {
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.querySelector('#showImage').setAttribute('src', e.target.result);
      storeImageData(e.target.result); // Store the image data in local storage
    };
    reader.readAsDataURL(input.files[0]);
  }
}

function storedata() {
  let name = document.querySelector('.formName').value;
  let email = document.querySelector('.formEmail').value;
  let github = document.querySelector('.formGithub').value;
  let Softskill1 = document.querySelector('.formSoftskill1').value;
  let Softskill2 = document.querySelector('.formSoftskill2').value;
  let Softskill3 = document.querySelector('.formSoftskill3').value;
  let Techskill1 = document.querySelector('.formTechskill1').value;
  let Techskill2 = document.querySelector('.formTechskill2').value;
  let Techskill3 = document.querySelector('.formTechskill3').value;

  localStorage.setItem('name', name);
  localStorage.setItem('email', email);
  localStorage.setItem('github', github);
  localStorage.setItem('ss1', Softskill1);
  localStorage.setItem('ss2', Softskill2);
  localStorage.setItem('ss3', Softskill3);
  localStorage.setItem('ts1', Techskill1);
  localStorage.setItem('ts2', Techskill2);
  localStorage.setItem('ts3', Techskill3);
}

function storeImageData(imageData) {
  localStorage.setItem('imageData', imageData);
}

document.getElementById('studentform').addEventListener('submit', function (event) {
  event.preventDefault();
  storedata();
  radio();
  displayData(); // Display the stored data on the webpage
});

// Display the stored data on the webpage
function displayData() {
  document.querySelector('.name').innerHTML = `<b>${localStorage.getItem('name')}</b>`;
  document.querySelector('.email').innerHTML = `${localStorage.getItem('email')}`;
  document.querySelector('.github').innerHTML = `${localStorage.getItem('github')}`;
  document.querySelector('.softskill1').innerText = `${localStorage.getItem('ss1')}`;
  document.querySelector('.softskill2').innerText = `${localStorage.getItem('ss2')}`;
  document.querySelector('.softskill3').innerText = `${localStorage.getItem('ss3')}`;
  document.querySelector('.techskill1').innerText = `${localStorage.getItem('ts1')}`;
  document.querySelector('.techskill2').innerText = `${localStorage.getItem('ts2')}`;
  document.querySelector('.techskill3').innerText = `${localStorage.getItem('ts3')}`;

  const imageData = localStorage.getItem('imageData');
  if (imageData) {
    document.querySelector('#showImage').setAttribute('src', imageData);
  }
}
//console.log(localStorage.value);
// Call the displayData function on page load
displayData();