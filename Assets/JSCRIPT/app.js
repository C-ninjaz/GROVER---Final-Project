const menuToggler = document.querySelector('.menu-toggler');
const navbar = document.querySelector('.navbar');
const collapsibleMenu = document.querySelector('.collapsible-menu');

menuToggler.addEventListener('click', () => {
    navbar.classList.toggle('show-menu');
    if (navbar.classList.contains('show-menu')) {
        collapsibleMenu.style.maxHeight = collapsibleMenu.scrollHeight + 'px';
        setTimeout(() => {
            collapsibleMenu.style.overflow ='visible';
        }, 300);
    } else {
        collapsibleMenu.style.maxHeight = '0px';
        collapsibleMenu.style.overflow = 'hidden';
    }
});

function showForm(formType) {
    const signinForm = document.querySelector('.signin-form');
    const signupForm = document.querySelector('.signup-form');
    const signinLabel = document.getElementById('signin-tab');
    const signupLabel = document.getElementById('signup-tab');

    if (formType === 'signin') {
        signinForm.style.display = 'block';
        signupForm.style.display = 'none';
        signinLabel.classList.add('active');
        signupLabel.classList.remove('active');
    } else {
        signinForm.style.display = 'none';
        signupForm.style.display = 'block';
        signupLabel.classList.add('active');
        signinLabel.classList.remove('active');
    }
}

/* function showForm(formType) {
    const signinForm = document.querySelector('.signin-form');
    const signupForm = document.querySelector('.signup-form');
    const signinLabel = document.getElementById('signin-tab');
    const signupLabel = document.getElementById('signup-tab');

    if (formType === 'signin') {
        signinForm.style.display = 'block';
        signupForm.style.display = 'none';
        signinLabel.classList.add('active');
        signupLabel.classList.remove('active');
    } else {
        signinForm.style.display = 'none';
        signupForm.style.display = 'block';
        signupLabel.classList.add('active');
        signinLabel.classList.remove('active');
    }
}
 */
function handleSignin(event) {
    event.preventDefault(); // Prevent the default form submission

    const form = event.target;
    const username = form.username.value;
    const password = form.password.value;

    // Here you can add your login logic, e.g., API call
    console.log('Sign In:', { username, password });

    // Simulate successful login
    if (username && password) {
        // Redirect to home page (replace 'home.html' with your actual home page)
        window.location.href = 'index.html';
    }

    // Optionally, you can clear the form after submission
    form.reset();
}

function handleSignup(event) {
    event.preventDefault(); // Prevent the default form submission

    const form = event.target;
    const fullname = form.fullname.value;
    const email = form.email.value;
    const password = form.password.value;

    // Here you can add your signup logic, e.g., API call
    console.log('Sign Up:', { fullname, email, password });

    // Optionally, you can clear the form after submission
    form.reset();
}
