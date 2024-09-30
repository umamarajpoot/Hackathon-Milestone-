// Get references to form elements and display area
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplay = document.getElementById('generated-resume') as HTMLDivElement;

// Add event listener to handle form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault();  // Prevent form from submitting and refreshing the page

    // Get input values
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

    // Generate dynamic resume content
    const resumeHTML = `
        <h3>${name}</h3>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Work Experience</h3>
        <p>${experience}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
    `;

    // Display the resume on the page
    resumeDisplay.innerHTML = resumeHTML;
});
