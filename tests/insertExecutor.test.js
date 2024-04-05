const { executeINSERTQuery, executeDELETEQuery } = require("../src/index.js");
const { readCSV, writeCSV } = require("../src/csvReader");
const fs = require("fs");
const { parseDeleteQuery } = require("../src/queryParser.js");

// Helper function to create grades.csv with initial data
async function createGradesCSV() {
  const initialData = [
    { student_id: "1", course: "Mathematics", grade: "A" },
    { student_id: "2", course: "Chemistry", grade: "B" },
    { student_id: "3", course: "Mathematics", grade: "C" },
  ];

  await writeCSV("grades.csv", initialData);
}

// Test to INSERT a new grade and verify
test("Execute INSERT INTO Query for grades.csv", async () => {
  // Create grades.csv with initial data
  await createGradesCSV();

  // Execute INSERT statement
  const insertQuery =
    "INSERT INTO grades (student_id, course, grade) VALUES ('4', 'Physics', 'A')";
  await executeINSERTQuery(insertQuery);

  // Verify the new entry
  const updatedData = await readCSV("grades.csv");
  const newEntry = updatedData.find(
    (row) => row.student_id === "4" && row.course === "Physics"
  );
  expect(newEntry).toBeDefined();
  expect(newEntry.grade).toEqual("A");

  // Cleanup: Delete grades.csv
  fs.unlinkSync("grades.csv");
});

// Helper function to create courses.csv with initial data
async function createCoursesCSV() {
  const initialData = [
    { course_id: "1", course_name: "Mathematics", instructor: "Dr. Smith" },
    { course_id: "2", course_name: "Chemistry", instructor: "Dr. Jones" },
    { course_id: "3", course_name: "Physics", instructor: "Dr. Taylor" },
  ];
  await writeCSV("courses.csv", initialData);
}

// Test to DELETE a course and verify
test("Execute DELETE FROM Query for courses.csv", async () => {
  // Create courses.csv with initial data
  await createCoursesCSV();

  // Execute DELETE statement
  const deleteQuery = "DELETE FROM courses WHERE course_id = '2'";
  // console.log(parseDeleteQuery(deleteQuery));
  await executeDELETEQuery(deleteQuery);

  // // Verify the course was removed
  const updatedData = await readCSV("courses.csv");
  const deletedCourse = updatedData.find((course) => course.course_id === "2");
  expect(deletedCourse).toBeUndefined();

  // Cleanup: Delete courses.csv
  fs.unlinkSync("courses.csv");
});
