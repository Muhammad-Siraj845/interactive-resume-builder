function generateResume() {
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const title = (document.getElementById("title") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const linkedin = (document.getElementById("linkedin") as HTMLInputElement).value;
    const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;
    const education = (document.getElementById("education") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;
    const certifications = (document.getElementById("certifications") as HTMLTextAreaElement).value;
    const projects = (document.getElementById("projects") as HTMLTextAreaElement).value;

    const resumeOutput = document.getElementById("resumeOutput") as HTMLElement;
    resumeOutput.innerHTML = `
        <h2>${name}</h2>
        <h3>${title}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>LinkedIn:</strong> <a href="${linkedin}" target="_blank">${linkedin}</a></p>
        <h4>Work Experience</h4>
        <p>${experience}</p>
        <h4>Education</h4>
        <p>${education}</p>
        <h4>Skills</h4>
        <p>${skills}</p>
        <h4>Certifications</h4>
        <p>${certifications}</p>
        <h4>Projects</h4>
        <p>${projects}</p>
    `;
}