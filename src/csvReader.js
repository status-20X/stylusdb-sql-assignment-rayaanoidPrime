// src/csvReader.js

const fs = require("fs");
const csv = require("csv-parser");

function readCSV(filePath) {
  const results = [];

  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csv())
      .on("data", (data) => results.push(data))
      .on("end", () => {
        resolve(results);
      })
      .on("error", (error) => {
        reject(error);
      });
  });
}

async function readCSVHeader(filePath) {
  return new Promise((resolve, reject) => {
    fs.createReadStream(filePath)
      .pipe(csv())
      .on("headers", (headers) => {
        resolve(headers); // Resolve with the header fields
      })
      .on("error", (error) => {
        reject(error);
      });
  });
}

async function writeCSV(filename, data) {
  if (data.lenght < 1) throw new Error("No data to write to csv");
  const fields = Object.keys(data[0]);
  let orderedFields = fields;
  const outputStream = fs.createWriteStream(filename, { flags: "a" });
  if (!fs.existsSync(filename)) {
    // File does not exist, create new file with header
    outputStream.write(fields.join(","));
  } else {
    const filedata = await readCSV("grades.csv");
    orderedFields = filedata.length > 1 ? Object.keys(filedata[0]) : fields;
    if (filedata.length < 1) {
      outputStream.write(fields.join(","));
    }
    // console.log("orderedFields: ", orderedFields);
  }

  data.forEach((row) => {
    const writeRow = orderedFields.map((field) => {
      return row[field];
    });
    // console.log("writeRow: ", writeRow);
    outputStream.write("\n" + writeRow.join(","));
  });

  outputStream.end();

  return new Promise((resolve, reject) => {
    try {
      outputStream.on("finish", () => {
        resolve();
      });

      outputStream.on("error", (err) => {
        console.error(
          `Error occurred while writing CSV file "${filename}":`,
          err
        );
        reject(err);
      });
    } catch (error) {
      throw error;
    }
  });
}

module.exports = { readCSV, writeCSV };
