// Get references to form elements and display area
var form = document.getElementById('resume-form');
var resumeDisplay = document.getElementById('generated-resume');
// Add event listener to handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting and refreshing the page
    // Get input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Generate dynamic resume content
    var resumeHTML = "\n        <h3><span contenditable=\"true\">".concat(name, "</span></h3>\n        <p><b>Email:</b><span contenditable=\"true\"> ").concat(email, "</span></p>\n        <p><b>Phone:</b><span contenditable=\"true\"> ").concat(phone, "</span></p>\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n        <h3>Work Experience</h3>\n        <p>").concat(experience, "</p>\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n    ");
    // Display the resume on the page
    resumeDisplay.innerHTML = resumeHTML;
});
