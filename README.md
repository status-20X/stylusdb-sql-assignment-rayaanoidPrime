<h1 align="center">StylusDB SQL</h1>
<p align="center">
A SQL database engine written in JavaScript.

[![GitHub Repo](https://img.shields.io/badge/GitHub-Repo-green.svg)](https://github.com/ChakshuGautam/stylusdb-sql)
[![GitHub Repo](https://img.shields.io/github/stars/ChakshuGautam/stylusdb-sql?style=social)](https://github.com/ChakshuGautam/stylusdb-sql)

</p>

This is the base repository for cohort members to follow the tutorial and send in their own StylusDB SQL implementations. You can refer to a more complete implementation @ [ChakshuGautam/stylusdb-sql](https://github.com/ChakshuGautam/stylusdb-sql).

> **Disclaimer**:
> This database is for educational purposes only. It is not intended for production use. It is written ground up in JavaScript and is a great way to learn how databases work. You can find the tutorial in the [docs](./docs) directory.

## Usage

SELECT queries

```bash
const { executeSELECTQuery } = require('csvdb-sql');
const query = 'SELECT id, name FROM student WHERE age < 25';
const result = await executeSELECTQuery(query);
```

INSERT queries

```bash
const { executeINSERTquery } = require('csvdb-sql');
const insertQuery = "INSERT INTO grades (student_id, course, grade) VALUES ('4', 'Physics', 'A')";
await executeINSERTQuery(insertQuery);
```

DELETE queries

```bash
const {executeDELETEquery} = require('csvdb-sql');
const deleteQuery = "DELETE FROM courses WHERE course_id = '2'";
await executeDELETEQuery(deleteQuery);
```

# Development

### Running Tests

You can run tests using :

```bash
npm run test
```

or specific tests for specific features like :

```bash
npm run test:queryParser
```

### CLI

you can use the cli using

```bash
node src/cli
```

### Feature Roadmap

- [x] Support for [Prisma](https://www.prisma.io/)
- [x] `INSERT`, `DELETE`, `SELECT`
- [x] CLI
- [x] Server/Client Basic Protocol
- [x] NPM Package for StylusDB-SQL
- [ ] `UPDATE`, `CREATE TABLE`, `DROP TABLE`
- [ ] SQL Spec Tracker
- [ ] Minimal PostgreSQL Protocol for Server/Client Communication
