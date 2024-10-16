document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLink = document.querySelector('.nav-link');
    const navIcon = navToggle.querySelector('i');
    const dropdown = document.querySelector('.dropdown');
    const dropdownContent = document.querySelector('.dropdown-content');
    const homeLink = document.getElementById('home-link');

    navToggle.addEventListener('click', () => {
        navLink.classList.toggle('active');
        navToggle.classList.toggle('active');


        if (navToggle.classList.contains('active')) {
            navIcon.classList.remove('fa-bars');
            navIcon.classList.add('fa-times');
        } else {
            navIcon.classList.remove('fa-times');
            navIcon.classList.add('fa-bars');
        }
    });

    homeLink.addEventListener('mouseover', function () {
        console.log('hovered on home')
        homeLink.style.setProperty('background-color', 'red', 'important');
    });
    homeLink.addEventListener('mouseout', function () {
        console.log('Not hovering on Home');
        homeLink.style.removeProperty('background-color'); // Reset the color back to default when not hovering
    });


    // Mouse enter event for showing the products dropdown
    dropdown.addEventListener('mouseenter', () => {
        dropdownContent.style.display = 'block'; // Show the dropdown
    });

    // Mouse leave event for hiding the products dropdown
    dropdown.addEventListener('mouseleave', () => {
        dropdownContent.style.display = 'none'; // Hide the dropdown
    });

});