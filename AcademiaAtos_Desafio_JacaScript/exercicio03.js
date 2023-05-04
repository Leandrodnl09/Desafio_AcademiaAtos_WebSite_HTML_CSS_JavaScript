document.addEventListener('DOMContentLoaded', function() {
  const inputs = document.querySelectorAll('input[name="color"]');
  inputs.forEach(function(input) {
      input.addEventListener('change', function() {
          if (this.value === 'red') {
              document.body.style.backgroundColor = 'red';
          } else if (this.value === 'green') {
              document.body.style.backgroundColor = 'green';
          } else if (this.value === 'blue') {
              document.body.style.backgroundColor = 'blue';
          } else if (this.value === 'yellow') {
              document.body.style.backgroundColor = 'yellow';
          }
      });
  });
});