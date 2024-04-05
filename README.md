<h1 align="center">CsvDB SQL</h1>
<p align="center">
A SQL database query engine for csv files written in JavaScript.

[![GitHub Repo](https://img.shields.io/badge/GitHub-Repo-green.svg)](https://github.com/ChakshuGautam/stylusdb-sql)
[![GitHub Repo](https://img.shields.io/github/stars/ChakshuGautam/stylusdb-sql?style=social)](https://github.com/ChakshuGautam/stylusdb-sql)

</p>

This is an implementation of the StylusDB SQL engine written in Javascript. It is a lightweight query engine for querying csv files. You can refer to a more complete implementation @ [ChakshuGautam/stylusdb-sql](https://github.com/ChakshuGautam/stylusdb-sql).

> **Disclaimer**:
> This database is for educational purposes only. It is not intended for production use. It is written ground up in JavaScript and is a great way to learn how databases work. You can find the tutorial in the [docs](./docs) directory.

## Installation

You can install 'csvdb-sql' globally using npm:

```bash
npm i -g npm
npm install -g csvdb-sql
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
