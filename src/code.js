// Select all category elements
const categories = document.querySelectorAll('.nav-link');

// Loop through each category
categories.forEach((category) => {
  // Add a click event listener to each category
  category.addEventListener('click', function() {
    // Remove the 'active' class from all categories
    categories.forEach((item) => item.classList.remove('active'));

    // Add the 'active' class to the clicked category
    this.classList.add('active');
  });
});
