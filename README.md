# Find Andrew - API

## General

This is API for Find Andrew App. Enables reading data from database and adding new objects (documents) to database.

**To get from db:**
```
GET /locations
```
You must add `apiKey` to `Header` (for request).

**To post to db:**

```
POST /locations
```
You must add `apiKey` to `Header` (for request).

## Technologies

**Server:** Node.js (Express.js)

**DB:** mongoDB

## Installation

You need node.js (you can download [there](https://nodejs.org/en/download/)).

```sh
git clone https://github.com/kwojtas172/find-andrew-api.git

npm install

node index.js
```

## Status
In working (server created, now building db).