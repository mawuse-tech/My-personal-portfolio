const btnMenuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const icon = btnMenuToggle.querySelector('i'); // Select the icon inside the button
const portForm = document.getElementById('port-form')
const prompt = document.getElementById('prompt')
const closeService = document.getElementById('close-btn')
const contactBtn = document.getElementById('contact-btn')
const moreDetails = document.getElementById('more-details')
const skill = document.getElementById('skill')
const interest = document.getElementById('interest')
const skillBtn = document.getElementById('skill-btn')
const interestBtn = document.getElementById('interest-btn')
const colseInt = document.getElementById('close-int')
const colseSkill = document.getElementById('close-skill')


btnMenuToggle.addEventListener('click', () => {
  // Show/hide the menu
  mobileMenu.classList.toggle('hidden');

  // Toggle between 'fa-caret-down' and 'fa-caret-up'
  if (icon.classList.contains('fa-caret-down')) {
    icon.classList.remove('fa-caret-down');
    icon.classList.add('fa-caret-up');
  } else {
    icon.classList.remove('fa-caret-up');
    icon.classList.add('fa-caret-down');
  }
});

//skill
skillBtn.addEventListener('click', function () {
  skill.style.display = 'inline'
})

colseSkill.addEventListener("click", function () {
  skill.style.display = 'none';
})

//interest
interestBtn.addEventListener('click', function () {
  interest.style.display = 'inline'
})

colseInt.addEventListener("click", function () {
  interest.style.display = 'none';
})

//service page
contactBtn.addEventListener('click', function () {
  moreDetails.style.display = 'inline'
})

closeService.addEventListener("click", function () {
  moreDetails.style.display = 'none';

})

//the form page logic
portForm.addEventListener('submit', function (e) {
  e.preventDefault()
  const formDetails = new FormData(portForm)
  const name = formDetails.get('name')

  prompt.innerHTML = `
    <img src="assets/images/loading.svg" style="width: 200px; display: block; margin: 0 auto; color: white">
    <p style="text-align: center; color: white margin-top: 10px;" id="upload-text">submitting your information</p>
    `

  setTimeout(function () {
    document.getElementById("div-form").innerHTML = `
  <div style="text-align: center; padding: 10px;  box-shadow: 0 4px 8px rgba(0,0,0,0.2);">
      <p style="font-size: 18px; color: ; margin-bottom: 10px; 10px;">
         Hey <span style="color: #EAB308"> ${name} </span>,
      Thank you for reaching out! <br> I appreciate your interest in my skills and experience.<br>I’m thrilled at the opportunity to connect with you <br> and discuss how I can contribute to your team.
      </p>
      <img src="assets/images/giphy.gif" style="max-width: 350px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.2); display: block; margin: 0 auto;">
  </div>
  `
    closeBtn.disabled = false

  }, 1000)
})








