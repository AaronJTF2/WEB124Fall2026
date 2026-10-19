
/* Aaron Cole */

/* Part 1: Logging the Browser Information */
console.log("Pages URL:", window.location.href);

console.log("Browsers Language:", navigator.language);

console.log("Browser Online", navigator.onLine);

console.log("Width of Screen:", screen.width);

console.log("Height of Screen:", screen.height);


/*Part 2 Window Logs*/

console.log("Window Width", window.innerWidth);

console.log("Window Height", window.innerHeight);


/* Part 3: Form Properties */

// Select the form and output section
const form = document.querySelector("#dashboardForm");
const output = document.querySelector("#output");

// Access the form fields
const nameField = form.elements["userName"];
const websiteField = form.elements["favoriteWebsite"];

// Listen for form submission
form.addEventListener("submit", function(event) {

    // Prevents the page from reloading
    event.preventDefault();

    // Gets the entered values
    const userName = nameField.value;
    const favoriteWebsite = websiteField.value;

    // This displays the information on the page
    output.textContent = "Your Name: " + userName + " | Favorite Website: " + favoriteWebsite;


    /* Part 5 URL Objects */

    try {
        const websiteURL = new URL(favoriteWebsite);

        console.log("Hostname:", websiteURL.hostname);
        console.log("Protocol:", websiteURL.protocol);
        console.log("Pathname:", websiteURL.pathname);

    } catch (error) {
        console.log("Please enter a valid website URL.");
    }


    /* Part 6: Local Storage */

    localStorage.setItem("userName", userName);

    const storedName = localStorage.getItem("userName");

    console.log("Stored Name:", storedName);


    /* Part 7: This is the Session Storage */

    sessionStorage.setItem("favoriteWebsite", favoriteWebsite);

    const storedWebsite = sessionStorage.getItem("favoriteWebsite");

    console.log("Stored Website:", storedWebsite);

});


/* Part 4: Focus & Blur */

// When the name field is selected
nameField.addEventListener("focus", function() {
    console.log("The name field was selected.");
});

// When the name field is left
nameField.addEventListener("blur", function() {
    console.log("The name field was left.");
});
