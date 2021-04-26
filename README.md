<img src="./images/logo.sample.png" alt="Logo of the project" align="right">

# NodeJs Boilerplate &middot; [![Build Status](https://img.shields.io/travis/npm/npm/latest.svg?style=flat-square)](https://travis-ci.org/npm/npm) [![npm](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/npm) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/your/your-project/blob/master/LICENSE)

> Nodejs starter kit, using Express, Postgres, and Sequelize for ORM:

## Configuration

Setting up `.env`

```shell
cp .env.example .env

```

## Installing Service / Getting started

A quick introduction of the minimal setup you need to get a hello world up & running. Assuming client and node installed on your machine.

Installing Dependency

```shell
npm install
```

Running Service

```shell
npm run dev
```

or with hot reload (assuming nodemon installed globally [Nodemon](https://www.npmjs.com/package/nodemon)

```shell
nodemon
```

## Installing Client / Getting started

A quick introduction of the minimal setup you need to get a hello world up & running. Assuming client and node installed on your machine.
Running Client

Installing Dependency

```shell
cd client-chat && npm install
```

Running Client

```shell
cd client-chat
npm run serve
```

## Developing

### Commit Message

Commit message should follow this pattern:`*type commit*(*scope*): *detail message*` (without asterisk)
Example:

```shell
chore(project): initial commit
fix(user): change encryption method on login
feat(media): add media API
```

### Built With
[Express](https://www.npmjs.com/package/express) web Framework.

[Sequelize](https://www.npmjs.com/package/sequelize) for database ORM.
