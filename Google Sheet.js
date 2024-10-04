const scriptURL = 'https://script.google.com/macros/s/AKfycbxbQQBbxGcFocqHVC6OanZL30XvNN5eZuozfDvWrG0GusPi4r6R_nGdYjH8uovCiV2VUA/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})