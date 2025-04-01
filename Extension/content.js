function autoFillAndSubmit() {
    let userData = {
        name: "John Doe",
        email: "johndoe@example.com",
        phone: "1234567890",
        resume: "path/to/resume.pdf",
        coverLetter: "I am a highly motivated candidate..."
    };

    let nameField = document.querySelector("input[name='fullName'], input[name='name']");
    let emailField = document.querySelector("input[name='email']");
    let phoneField = document.querySelector("input[name='phone']");
    let resumeUpload = document.querySelector("input[type='file']");
    let applyButton = document.querySelector("button[type='submit'], input[type='submit']");

    if (nameField) nameField.value = userData.name;
    if (emailField) emailField.value = userData.email;
    if (phoneField) phoneField.value = userData.phone;
    if (resumeUpload) console.log("Resume needs manual upload");
    
    if (applyButton) {
        applyButton.click(); // Automatically submits the form
        console.log("Auto-applied to the job!");
    } else {
        console.log("No apply button found.");
    }
}

autoFillAndSubmit();
