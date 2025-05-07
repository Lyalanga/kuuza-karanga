// script.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
      e.preventDefault();
  
      const messageBox = document.createElement('div');
      messageBox.innerHTML = 'Asante kwa kutuma oda yako. Tutawasiliana nawe hivi karibuni! au Wasiliana nasi kupitia <span style="color: #007bff; font-weight: bold;">0742694916</span>';
      messageBox.style.backgroundColor = '#d4edda';
      messageBox.style.color = '#155724';
      messageBox.style.padding = '1em';
      messageBox.style.border = '1px solid #c3e6cb';
      messageBox.style.borderRadius = '8px';
      messageBox.style.margin = '1em auto';
      messageBox.style.maxWidth = '400px';
      messageBox.style.textAlign = 'center';
  
      form.style.display = 'none';
      form.parentNode.insertBefore(messageBox, form);
  
      setTimeout(() => {
        messageBox.remove();
        form.style.display = 'block';
      }, 60000); // 60 seconds = 1 minute
  
      form.reset();
    });
