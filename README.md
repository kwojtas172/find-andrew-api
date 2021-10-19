# Find Andrew - API

## General

This is API for Find Andrew App. Enables reading data from database and adding new objects (documents) to database.

[Demo](https://find-andrew-api.herokuapp.com/locations) is available.

**To get from db:**
```
GET /locations
```
You must add `apiKey` to `header` (for request).

```
GET /
redirect to /locations
```


**To post to db:**

```
POST /locations
```
You must add `apiKey` to `header` (for request).

Format data (for each endpoint) is `JSON`.

**To delete of db:**

```
DELETE /locations
```
You must add `apiKey` to `header` (for request).

Format data (for each endpoint) is `JSON`:

``` 
{"id": "61641c0fcf5bc0a1776d8e0d"} 
```

## Technologies

**Server:** Node.js (Express.js)

**DB:** mongoDB

## Installation

You need node.js (you can download [there](https://nodejs.org/en/download/)).

```sh
git clone https://github.com/kwojtas172/find-andrew-api.git

cd .\find-andrew-api\

npm install

node index.js
```

## Status
In working (server and db created).