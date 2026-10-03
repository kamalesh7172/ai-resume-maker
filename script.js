let selectedTemplate = "template1";
let photoData = "";


/* =========================
   GET ELEMENT VALUE
========================= */

function getValue(id) {
    const element = document.getElementById(id);

    if (!element) {
        return "";
    }

    return element.value.trim();
}


/* =========================
   CHANGE TEMPLATE
========================= */

function changeTemplate(template, button) {

    selectedTemplate = template;

    document.querySelectorAll(".template").forEach(function(item) {
        item.classList.remove("active");
    });

    if (button) {
        button.classList.add("active");
    }

    updateResume();
}


/* =========================
   UPDATE RESUME
========================= */

function updateResume() {

    const resume = document.getElementById("resume");

    if (!resume) {
        return;
    }

    const data = {

        name: getValue("name") || "Your Name",

        title: getValue("title") || "Software Developer",

        email: getValue("email") || "email@example.com",

        phone: getValue("phone") || "+91 XXXXX XXXXX",

        location: getValue("location") || "Tamil Nadu, India",

        summary: getValue("summary") ||
            "A motivated professional seeking an opportunity to apply knowledge, develop new skills and contribute effectively to an organization.",

        degree: getValue("degree"),

        college: getValue("college"),

        eduYear: getValue("eduYear"),

        grade: getValue("grade"),

        job: getValue("job"),

        company: getValue("company"),

        experience: getValue("experience"),

        skills: getValue("skills"),

        project: getValue("project"),

        technology: getValue("technology"),

        projectDescription: getValue("projectDescription")
    };


    if (selectedTemplate === "template1") {

        resume.innerHTML = createTemplate1(data);

    }

    else if (selectedTemplate === "template2") {

        resume.innerHTML = createTemplate2(data);

    }

    else if (selectedTemplate === "template3") {

        resume.innerHTML = createTemplate3(data);

    }

    else if (selectedTemplate === "template4") {

        resume.innerHTML = createTemplate4(data);

    }


    resume.className = "resume " + selectedTemplate;

    applyPhoto();
}


/* =========================
   ESCAPE TEXT
========================= */

function safe(text) {

    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =========================
   SKILLS
========================= */

function createSkills(skills) {

    if (!skills) {

        return `
            <span class="skill">HTML</span>
            <span class="skill">CSS</span>
            <span class="skill">JavaScript</span>
        `;

    }


    return skills
        .split(",")
        .map(function(skill) {

            skill = skill.trim();

            if (!skill) {
                return "";
            }

            return `
                <span class="skill">
                    ${safe(skill)}
                </span>
            `;

        })
        .join("");
}


/* =========================
   EDUCATION
========================= */

function createEducation(data) {

    if (
        !data.degree &&
        !data.college &&
        !data.eduYear &&
        !data.grade
    ) {

        return `
            <div class="resume-item">
                <strong>Education</strong>
                <p class="resume-empty">
                    Add your education details.
                </p>
            </div>
        `;

    }


    return `

        <div class="resume-item">

            <strong>
                ${safe(data.degree || "Degree / Course")}
            </strong>

            <br>

            <small>
                ${safe(data.college || "College / University")}
            </small>

            <br>

            <small>
                ${safe(data.eduYear)}
                ${data.grade ? " • " + safe(data.grade) : ""}
            </small>

        </div>
    `;
}


/* =========================
   EXPERIENCE
========================= */

function createExperience(data) {

    if (
        !data.job &&
        !data.company &&
        !data.experience
    ) {

        return `
            <div class="resume-item">
                <strong>Experience</strong>
                <p class="resume-empty">
                    Add your internship or work experience.
                </p>
            </div>
        `;

    }


    return `

        <div class="resume-item">

            <strong>
                ${safe(data.job || "Job / Internship")}
            </strong>

            <br>

            <small>
                ${safe(data.company || "Company")}
            </small>

            <p>
                ${safe(
                    data.experience ||
                    "Describe your responsibilities and achievements."
                )}
            </p>

        </div>
    `;
}


/* =========================
   PROJECT
========================= */

function createProject(data) {

    if (
        !data.project &&
        !data.technology &&
        !data.projectDescription
    ) {

        return `
            <div class="resume-item">
                <strong>Project</strong>
                <p class="resume-empty">
                    Add your project details.
                </p>
            </div>
        `;

    }


    return `

        <div class="resume-item">

            <strong>
                ${safe(data.project || "Project Name")}
            </strong>

            <br>

            <small>
                ${safe(data.technology)}
            </small>

            <p>
                ${safe(
                    data.projectDescription ||
                    "Project description."
                )}
            </p>

        </div>
    `;
}


/* =====================================================
   TEMPLATE 1 — CORPORATE
===================================================== */

function createTemplate1(data) {

    return `

        <div class="resume-header">

            <div class="photo">

                <img
                    id="resumePhoto"
                    alt="Profile Photo">

            </div>


            <div>

                <h1>
                    ${safe(data.name)}
                </h1>

                <h2>
                    ${safe(data.title)}
                </h2>

            </div>


            <div class="contact">

                <div>${safe(data.email)}</div>

                <div>${safe(data.phone)}</div>

                <div>${safe(data.location)}</div>

            </div>

        </div>


        <div class="resume-section">

            <h3>PROFILE</h3>

            <p>
                ${safe(data.summary)}
            </p>

        </div>


        <div class="resume-section">

            <h3>EDUCATION</h3>

            ${createEducation(data)}

        </div>


        <div class="resume-section">

            <h3>EXPERIENCE</h3>

            ${createExperience(data)}

        </div>


        <div class="resume-section">

            <h3>SKILLS</h3>

            <div>
                ${createSkills(data.skills)}
            </div>

        </div>


        <div class="resume-section">

            <h3>PROJECT</h3>

            ${createProject(data)}

        </div>

    `;
}


/* =====================================================
   TEMPLATE 2 — MODERN
===================================================== */

function createTemplate2(data) {

    return `

        <div class="side">

            <div class="photo">

                <img
                    id="resumePhoto"
                    alt="Profile Photo">

            </div>


            <h1>
                ${safe(data.name)}
            </h1>


            <h2>
                ${safe(data.title)}
            </h2>


            <div class="side-section">

                <h3>CONTACT</h3>

                <p>
                    ${safe(data.email)}
                </p>

                <p>
                    ${safe(data.phone)}
                </p>

                <p>
                    ${safe(data.location)}
                </p>

            </div>


            <div class="side-section">

                <h3>SKILLS</h3>

                ${createSkills(data.skills)}

            </div>

        </div>


        <div class="main">

            <div class="resume-section">

                <h3>PROFILE</h3>

                <p>
                    ${safe(data.summary)}
                </p>

            </div>


            <div class="resume-section">

                <h3>EXPERIENCE</h3>

                ${createExperience(data)}

            </div>


            <div class="resume-section">

                <h3>EDUCATION</h3>

                ${createEducation(data)}

            </div>


            <div class="resume-section">

                <h3>PROJECT</h3>

                ${createProject(data)}

            </div>

        </div>

    `;
}


/* =====================================================
   TEMPLATE 3 — MINIMAL
===================================================== */

function createTemplate3(data) {

    return `

        <div class="resume-header">

            <h1>
                ${safe(data.name)}
            </h1>

            <h2>
                ${safe(data.title)}
            </h2>


            <div class="contact">

                ${safe(data.email)}
                &nbsp; | &nbsp;

                ${safe(data.phone)}
                &nbsp; | &nbsp;

                ${safe(data.location)}

            </div>

        </div>


        <div class="resume-section">

            <h3>PROFESSIONAL SUMMARY</h3>

            <p>
                ${safe(data.summary)}
            </p>

        </div>


        <div class="resume-section">

            <h3>EDUCATION</h3>

            ${createEducation(data)}

        </div>


        <div class="resume-section">

            <h3>EXPERIENCE</h3>

            ${createExperience(data)}

        </div>


        <div class="resume-section">

            <h3>TECHNICAL SKILLS</h3>

            ${createSkills(data.skills)}

        </div>


        <div class="resume-section">

            <h3>PROJECT</h3>

            ${createProject(data)}

        </div>

    `;
}


/* =====================================================
   TEMPLATE 4 — CREATIVE
===================================================== */

function createTemplate4(data) {

    return `

        <div class="resume-header">

            <div class="photo">

                <img
                    id="resumePhoto"
                    alt="Profile Photo">

            </div>


            <div>

                <h1>
                    ${safe(data.name)}
                </h1>

                <h2>
                    ${safe(data.title)}
                </h2>

            </div>

        </div>


        <div class="contact">

            ${safe(data.email)}
            &nbsp;&nbsp; | &nbsp;&nbsp;

            ${safe(data.phone)}
            &nbsp;&nbsp; | &nbsp;&nbsp;

            ${safe(data.location)}

        </div>


        <div class="columns">

            <div>

                <div class="resume-section">

                    <h3>ABOUT ME</h3>

                    <p>
                        ${safe(data.summary)}
                    </p>

                </div>


                <div class="resume-section">

                    <h3>EXPERIENCE</h3>

                    ${createExperience(data)}

                </div>


                <div class="resume-section">

                    <h3>PROJECT</h3>

                    ${createProject(data)}

                </div>

            </div>


            <div>

                <div class="resume-section">

                    <h3>EDUCATION</h3>

                    ${createEducation(data)}

                </div>


                <div class="resume-section">

                    <h3>SKILLS</h3>

                    ${createSkills(data.skills)}

                </div>

            </div>

        </div>

    `;
}


/* =========================
   PHOTO UPLOAD
========================= */

document.addEventListener("DOMContentLoaded", function() {

    const photoInput =
        document.getElementById("photo");


    if (photoInput) {

        photoInput.addEventListener(
            "change",
            function() {

                const file =
                    this.files[0];


                if (!file) {
                    return;
                }


                if (!file.type.startsWith("image/")) {

                    alert(
                        "Please select an image file."
                    );

                    this.value = "";

                    return;
                }


                const reader =
                    new FileReader();


                reader.onload =
                    function(event) {

                        photoData =
                            event.target.result;

                        updateResume();

                    };


                reader.readAsDataURL(file);

            }
        );

    }


    /* LIVE UPDATE */

    const inputs =
        document.querySelectorAll(
            "input:not(#photo), textarea"
        );


    inputs.forEach(function(input) {

        input.addEventListener(
            "input",
            updateResume
        );

    });


    loadResume();

    updateResume();

});


/* =========================
   APPLY PHOTO
========================= */

function applyPhoto() {

    if (!photoData) {
        return;
    }


    const image =
        document.getElementById(
            "resumePhoto"
        );


    if (image) {

        image.src = photoData;

    }

}


/* =========================
   AI SUMMARY
========================= */

function generateSummary() {

    const name =
        getValue("name") ||
        "a motivated candidate";


    const title =
        getValue("title") ||
        "professional";


    const summary =

        "I am " +
        name +
        ", a motivated " +
        title +
        " with a strong interest in developing professional skills. " +
        "I am eager to apply my knowledge, learn new technologies, " +
        "work effectively with a team and contribute to organizational growth.";


    document.getElementById(
        "summary"
    ).value = summary;


    updateResume();

}


/* =========================
   SAVE RESUME
========================= */

function saveResume() {

    const data = {

        template: selectedTemplate,

        photo: photoData,

        name: getValue("name"),

        title: getValue("title"),

        email: getValue("email"),

        phone: getValue("phone"),

        location: getValue("location"),

        summary: getValue("summary"),

        degree: getValue("degree"),

        college: getValue("college"),

        eduYear: getValue("eduYear"),

        grade: getValue("grade"),

        job: getValue("job"),

        company: getValue("company"),

        experience: getValue("experience"),

        skills: getValue("skills"),

        project: getValue("project"),

        technology: getValue("technology"),

        projectDescription:
            getValue("projectDescription")

    };


    localStorage.setItem(
        "resumeMakerData",
        JSON.stringify(data)
    );


    alert(
        "Resume saved successfully!"
    );

}


/* =========================
   LOAD RESUME
========================= */

function loadResume() {

    const saved =
        localStorage.getItem(
            "resumeMakerData"
        );


    if (!saved) {
        return;
    }


    try {

        const data =
            JSON.parse(saved);


        const fields = [

            "name",
            "title",
            "email",
            "phone",
            "location",
            "summary",

            "degree",
            "college",
            "eduYear",
            "grade",

            "job",
            "company",
            "experience",

            "skills",

            "project",
            "technology",
            "projectDescription"

        ];


        fields.forEach(function(id) {

            const element =
                document.getElementById(id);


            if (
                element &&
                data[id] !== undefined
            ) {

                element.value =
                    data[id];

            }

        });


        if (data.photo) {

            photoData =
                data.photo;

        }


        if (
            data.template === "template1" ||
            data.template === "template2" ||
            data.template === "template3" ||
            data.template === "template4"
        ) {

            selectedTemplate =
                data.template;


            document.querySelectorAll(
                ".template"
            ).forEach(function(button, index) {

                button.classList.remove(
                    "active"
                );


                if (
                    (selectedTemplate === "template1" && index === 0) ||
                    (selectedTemplate === "template2" && index === 1) ||
                    (selectedTemplate === "template3" && index === 2) ||
                    (selectedTemplate === "template4" && index === 3)
                ) {

                    button.classList.add(
                        "active"
                    );

                }

            });

        }

    }

    catch (error) {

        console.log(
            "Could not load saved resume."
        );

    }

}


/* =========================
   CLEAR
========================= */

function clearResume() {

    const answer =
        confirm(
            "Are you sure you want to clear the resume?"
        );


    if (!answer) {
        return;
    }


    document.querySelectorAll(
        "input, textarea"
    ).forEach(function(element) {

        element.value = "";

    });


    photoData = "";

    selectedTemplate =
        "template1";


    document.querySelectorAll(
        ".template"
    ).forEach(function(button, index) {

        button.classList.remove(
            "active"
        );


        if (index === 0) {

            button.classList.add(
                "active"
            );

        }

    });


    localStorage.removeItem(
        "resumeMakerData"
    );


    updateResume();

}


/* =========================
   SCROLL TO PREVIEW
========================= */

function scrollToPreview() {

    const preview =
        document.getElementById(
            "previewArea"
        );


    if (preview) {

        preview.scrollIntoView({
            behavior: "smooth"
        });

    }

}