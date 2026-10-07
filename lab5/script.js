// ===============================
// Get HTML Elements
// ===============================

const form = document.getElementById("studentForm");

const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const program = document.getElementById("program");
const semester = document.getElementById("semester");

const studentList = document.getElementById("studentList");


// ===============================
// Live Preview
// input event
// ===============================

fullName.addEventListener("input", function () {
    document.getElementById("previewName").textContent =
        fullName.value || "---";
});

email.addEventListener("input", function () {
    document.getElementById("previewEmail").textContent =
        email.value || "---";
});

program.addEventListener("input", function () {
    document.getElementById("previewProgram").textContent =
        program.value || "---";
});

semester.addEventListener("input", function () {
    document.getElementById("previewSemester").textContent =
        semester.value || "---";
});


// ===============================
// Form Submit
// ===============================

form.addEventListener("submit", function (event) {

    // Page refresh ko rokna
    event.preventDefault();


    // Error elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const programError = document.getElementById("programError");
    const semesterError = document.getElementById("semesterError");


    // Purane errors clear
    nameError.textContent = "";
    emailError.textContent = "";
    programError.textContent = "";
    semesterError.textContent = "";


    let isValid = true;


    // ===============================
    // Full Name Validation
    // ===============================

    if (fullName.value.trim() === "") {

        nameError.textContent = "Full Name is required.";

        isValid = false;

    } else if (fullName.value.trim().length < 3) {

        nameError.textContent =
            "Name must contain at least 3 characters.";

        isValid = false;
    }


    // ===============================
    // Email Validation
    // ===============================

    if (email.value.trim() === "") {

        emailError.textContent = "Email is required.";

        isValid = false;

    } else if (!email.value.includes("@")) {

        emailError.textContent =
            "Please enter a valid email.";

        isValid = false;
    }


    // ===============================
    // Program Validation
    // ===============================

    if (program.value === "") {

        programError.textContent =
            "Please select a program.";

        isValid = false;
    }


    // ===============================
    // Semester Validation
    // ===============================

    const semesterValue = Number(semester.value);

    if (semester.value === "") {

        semesterError.textContent =
            "Semester is required.";

        isValid = false;

    } else if (semesterValue < 1 || semesterValue > 8) {

        semesterError.textContent =
            "Semester must be between 1 and 8.";

        isValid = false;
    }


    // ===============================
    // If Everything Is Correct
    // ===============================

    if (isValid) {

        // New div create
        const student = document.createElement("div");

        // CSS class add
        student.classList.add("student");

        // Student information
        student.textContent =
            fullName.value.trim() +
            " | " +
            email.value.trim() +
            " | " +
            program.value +
            " | Semester " +
            semester.value;


        // List mein student add
        studentList.appendChild(student);


        // Form clear
        form.reset();


        // Preview clear
        document.getElementById("previewName").textContent = "---";
        document.getElementById("previewEmail").textContent = "---";
        document.getElementById("previewProgram").textContent = "---";
        document.getElementById("previewSemester").textContent = "---";

        alert("Student Registered Successfully!");
    }

});


// ===============================
// Dark Mode
// classList.toggle()
// ===============================

const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

});
