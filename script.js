/*
COMPLETE THE FOLLOWING TASKS WITHOUT MODIFYING ANY OF THE CODE IN THE HTML OR CSS FILE.

You should only write code in the JavaScript functions below, 
as well as update the `studentInformation` object with your personal information.

Each function is annotated with a comment explaining what it should do.

By the end of the lab, all tests in the report should be passing.
*/

const studentInformation = {
  name: "Emily Sturman",
  grade: "Sophomore",
  advisor: "Morgan Baggiano",
  major: "Computer Science",
  graduationYear: "2025",
  imageUrl: "./cat.jpg",
}

let semester = "Spring Semester";

const studentData = {
  "Spring Semester": [
    { code: "LIT 101", name: "English Literature 101", semester: "Spring 2021", credits: 5, grade: "B+" },
    { code: "CS 50", name: "Intro to Computer Science", semester: "Spring 2021", credits: 5, grade: "A-" },
    { code: "WD 140", name: "Modern Web Development", semester: "Spring 2021", credits: 5, grade: "A+" },
    { code: "JS 2.0", name: "Serverside JavaScript", semester: "Spring 2021", credits: 10, grade: "A-" },
  ],
  "Fall Semester": [
    { code: "Math 600", name: "Differential Equations", semester: "Fall 2020", credits: 5, grade: "A-" },
    { code: "CS 10", name: "Python Programming", semester: "Fall 2020", credits: 5, grade: "A" },
    { code: "History 99", name: "History of Computers", semester: "Fall 2020", credits: 5, grade: "A-" },
    { code: "MD 00", name: "Meditation and Mindfullness", semester: "Fall 2020", credits: 5, grade: "A+" },
  ],
  "Winter Term": [
    { code: "PHYS ED", name: "Physical Activity", semester: "Winter 2020", credits: 5, grade: "A-" },
    { code: "GEN ED", name: "General Education Requirement", semester: "Winter 2020", credits: 5, grade: "A+" },
  ],
};

const gpaPointsLookup = {
  "A+": 4.0,
  A: 4.0,
  "A-": 3.7,
  "B+": 3.3,
  B: 3.0,
  "B-": 2.7,
  "C+": 2.3,
  C: 2.0,
  "C-": 1.7,
  "D+": 1.3,
  D: 1.0,
  "D-": 0.7,
  F: 0.0,
}

/**
 * QUERY SELECTORS VARIABLES GO HERE
 */
const dropdownEl = document.querySelector(".dropdown");
const dropdownLabelEl = document.querySelector(".dropdown-label");
const fallSemesterEl = document.querySelector("#fall-semester");
const springSemesterEl = document.querySelector("#spring-semester");
const winterTermEl = document.querySelector("#winter-term");
const studentNameEl = document.querySelector("#student-name");
const studentGradeEl = document.querySelector("#student-grade-level");
const studentAdvisorEl = document.querySelector("#student-advisor");
const studentMajorEl = document.querySelector("#student-major");
const studentGraduationEl = document.querySelector("#student-graduation-year");
const studentImageEl = document.querySelector("#student-image");
const reportCardEl = document.querySelector("#report-card-table");

/**
 * SOLUTIONS FOR STUDENT INFO DOM UPDATES
 */

/**
 * Modify the report card to display the correct grade level from the lookup table above.
 *
 * @param {String} studentName - the name of the student
 */
function updateStudentName(studentName) {
  studentNameEl.innerHTML = studentName;
}

/**
 * Modify the report card to display the correct grade level from the lookup table above.
 *
 * @param {String|Number} studentGradeLevel - the grade level of the student
 */
function updateStudentGradeLevel(studentGradeLevel) {
  studentGradeEl.innerHTML = studentGradeLevel;
}

/**
 * Modify the report card to display the correct advisor from the lookup table above.
 *
 * @param {String} studentAdvisor - the advisor of the student
 */
function updateStudentAdvisor(studentAdvisor) {
  studentAdvisorEl.innerHTML = studentAdvisor;
}

/**
 * Modify the report card to display the correct major from the lookup table above.
 *
 * @param {String} studentMajor - the major of the student
 */
function updateMajor(studentMajor) {
  studentMajorEl.innerHTML = studentMajor;
}

/**
 * Modify the report card to display the correct graduation year from the lookup table above
 *
 * @param {Number} graduationYear - the year the student graduates
 */
function updateStudentGraduationYear(graduationYear) {
  studentGraduationEl.innerHTML = graduationYear;
}

/**
 * Modify the img element using `setAttribute` so that that the src attribute
 * stores the link to your image.
 *
 * @param {String} url - a link to an image
 */
function updateStudentImage(imageUrl) {
  studentImageEl.src = imageUrl;
}

/**
 * This function should run as soon as the page loads and update the correct student info
 */
function populateStudentInfo(studentInformationObject) {
  updateStudentName(studentInformationObject.name)
  updateStudentGradeLevel(studentInformationObject.grade)
  updateStudentAdvisor(studentInformationObject.advisor)
  updateMajor(studentInformationObject.major)
  updateStudentGraduationYear(studentInformationObject.graduationYear)
  updateStudentImage(studentInformationObject.imageUrl)
}

/**
 * SOLUTION FOR INNER HTML DOM UPDATES
 */

/**
 * This function should add a headers row to the report card table
 */
function addReportCardHeaders(reportCardTableElement) {
  reportCardTableElement.innerHTML += `
    <div class="table-row table-header">
      <h4 class="code-col">Code</h4>
      <h4 class="name-col">Name</h4>
      <h4 class="sem-col">Semester</h4>
      <h4 class="cred-col">Credits</h4>
      <h4 class="lett-col">Letter</h4>
      <h4 class="pts-col">Points</h4>
    </div>
  `;
}

/**
 * This function should take in a single course and create a row with the
 * course code, course name, course semester, course credits, course letter grade, and course points columns.
 *
 * @param {Object} course
 * @param {Number} rowNum
 */
function addCourseRowToReportCard(reportCardTableElement, course, rowNum) {
  reportCardTableElement.innerHTML += `
    <div class="table-row course-row row-${rowNum + 1} ${rowNum % 2 === 1 ? "odd" : "even"}">
      <h4 class="code-col">${course.code}</h4>
      <h4 class="name-col">${course.name}</h4>
      <h4 class="sem-col">${course.semester}</h4>
      <h4 class="cred-col">${course.credits} credits</h4>
      <h4 class="lett-col">${course.grade}</h4>
      <h4 class="pts-col">${gpaPointsLookup[course.grade]}</h4>
    </div>
  `;
}

/**
 * This function should add HTML for the totals row in the report card.
 */
function addTotalsRow(reportCardTableElement) {
  const totalCredits = addUpStudentCredits(reportCardTableElement);
  const totalPts = studentData[semester].map(({ grade }) => gpaPointsLookup[grade]).reduce((prev, cur) => prev + cur, 0);
  reportCardTableElement.innerHTML += `
    <div class="table-row totals even">
      <h4 class="code-col"></h4>
      <h4 class="name-col"></h4>
      <h4 class="sem-col">Totals:</h4>
      <h4 id="total-credits" class="cred-col">${totalCredits} credits</h4>
      <h4 class="lett-col"></h4>
      <h4 id="total-pts" class="pts-col">${totalPts}</h4>
    </div>
  `
}

/**
 * This function should add HTML for the final row in the report card.
 */
function addGpaRow(reportCardTableElement) {
  reportCardTableElement.innerHTML += `
    <div class="table-row gpa odd">
      <h4 class="code-col"></h4>
      <h4 class="name-col"></h4>
      <h4 class="sem-col">GPA:</h4>
      <h4 class="cred-col"></h4>
      <h4 class="lett-col"></h4>
      <h4 id="gpa" class="pts-col">${calculateSemesterGpa(reportCardTableElement)}</h4>               
    </div>
  `
}

/**
 * This is the primary function used to update the report card when the semester changes
 *
 * It should call the other functions responsible for creating the necessary HTML
 *
 */
function updateReportCard(reportCardTableElement, currentSemester) {
  // update the dropdown label
  updateDropdownLabel();
  // reset the report card table's inner html to an empty string
  if (reportCardTableElement) reportCardTableElement.innerHTML = ``

  addReportCardHeaders(reportCardTableElement);
  studentData[currentSemester]?.forEach((course, i) =>
    addCourseRowToReportCard(reportCardTableElement, course, i)
  );
  addTotalsRow(reportCardTableElement);
  addGpaRow(reportCardTableElement);
}

/**
 * SOLUTION FOR DROPDOWN EVENT HANDLERS
 */

/**
 * These two functions should be used to toggle the dropdown.
 *
 * If the dropdown classList contains the "closed" class, the 'openDropdown' function should remove it.
 * If the dropdown classList doesn't contain the "closed" class, 'closeDropdown' function should add it.
 */
function closeDropdown(dropdownElement) {
  dropdownElement?.classList.add("closed");
}

function openDropdown(dropdownElement) {
  if (dropdownElement.classList.contains("closed"))
    dropdownElement.classList.remove("closed");
  else
    closeDropdown(dropdownElement);
}

/**
 * This function should update the inner html of the dropdown label to be the current
 * value stored in the `semester` variable.
 *
 */
function updateDropdownLabel() {
  dropdownLabelEl.innerHTML = semester;
}

function updateSemester(newSemester, reportCardTableElement) {
  semester = newSemester;
  updateReportCard(reportCardTableElement, semester);
  closeDropdown();
}

/**
 * This function should add the proper event listeners to the correct DOM elements
 * responsible for managing the state of the dropdown menu.
 *
 */
function addEventListeners(
  dropdownElement,
  dropdownButtonElement,
  reportCardTableElement,
  fallSemesterElement,
  springSemesterElement,
  winterTermElement
) {
  dropdownElement.addEventListener("click", () => openDropdown(dropdownElement));
  fallSemesterElement.addEventListener("click", () => updateSemester("Fall Semester", reportCardTableElement));
  springSemesterElement.addEventListener("click", () => updateSemester("Spring Semester", reportCardTableElement));
  winterTermElement.addEventListener("click", () => updateSemester("Winter Term", reportCardTableElement));
}

/***************
   CALCULATIONS
****************/

/**
 * Use query selectors on the `reportCardTableElement` element
 * to access the credits the student has earned for each course.
 * Add them up and display the total in the proper location.
 *
 * It may be useful to check for the existence of certain elements
 * before updating the DOM.
 *
 */
function addUpStudentCredits(reportCardTableElement) {
  return studentData[semester].reduce((prev, cur) => prev + cur.credits, 0);
}

/**
 * Use query selectors on the `reportCardTableElement` element
 * to access the letter grades for each course and convert them to GPA points using
 * the `pointsLookup` object.
 *
 * That English Literature grade is keeping us from all A's! Let's see if we can't update that to an A-
 * since we definitely deserve it after a hard semester of work.
 *
 * Then perform a quick calculation and update the report card with the total points and
 * cumulative grade point average for the semester.
 *
 */

function calculateSemesterGpa(reportCardTableElement) {
  const totalCredits = addUpStudentCredits(reportCardTableElement);
  return studentData[semester]
    .map(({ credits, grade }) => gpaPointsLookup[grade] * credits)
    .reduce((prev, cur) => prev + cur, 0) / totalCredits;
}

function changeEnglishGrade() {
  if (semester !== "Spring Semester") return;
  const course = studentData[semester][0];
  document.querySelector(".row-1").innerHTML = `
    <h4 class="code-col">${course.code}</h4>
    <h4 class="name-col">${course.name}</h4>
    <h4 class="sem-col">${course.semester}</h4>
    <h4 class="cred-col">${course.credits} credits</h4>
    <h4 class="lett-col">A-</h4>
    <h4 class="pts-col">${gpaPointsLookup["A-"]}</h4>
  `;
}

window.onload = function () {
  populateStudentInfo(studentInformation);
  updateReportCard(reportCardEl, semester);
  addEventListeners(dropdownEl, null, reportCardEl, fallSemesterEl, springSemesterEl, winterTermEl);
  changeEnglishGrade();
}
