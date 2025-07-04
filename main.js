document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('form-status').textContent = "Thanks for reaching out!";
  this.reset();
});
