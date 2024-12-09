function generateResume() {
    var name = document.getElementById("name").value;
    var title = document.getElementById("title").value;
    var experience = document.getElementById("experience").value;
    var education = document.getElementById("education").value;
    var skills = document.getElementById("skills").value;
    var resumeOutput = document.getElementById("resumeOutput");
    resumeOutput.innerHTML = "\n        <h2>".concat(name, "</h2>\n        <h3>").concat(title, "</h3>\n        <h4>Work Experience</h4>\n        <p>").concat(experience, "</p>\n        <h4>Education</h4>\n        <p>").concat(education, "</p>\n        <h4>Skills</h4>\n        <p>").concat(skills, "</p>\n    ");
}
