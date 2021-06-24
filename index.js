#!/usr/bin/env node

"use strict";

const forEach = require("lodash.foreach");
const request = require("request");
const async = require("async");
const chalk = require("chalk");
const path = require("path");
const fs = require("fs");
const concurrency = 4;
const testsFile = path.join(process.cwd(), "test-redirects.json");

try {
  fs.statSync(testsFile);
} catch (e) {
  console.log(chalk.yellow("⚠") + " Unable to find test-redirects.json");
  process.exit(1);
}

const tests = require(testsFile);
var errors = 0;

const q = async.queue(function(task, callback) {
  request({
    url: task.from,
    rejectUnauthorized: false
  }, function(error, response, body) {
    if (error) {
      errorHandler(error);
      callback();
      return;
    }
    validateResult(task.from, task.to, response.request.uri.href);
    callback();
  });
}, concurrency);

q.drain = function() {
  if (errors > 0) {
    process.exit(1);
  }
};

function errorHandler(error) {
  console.log(chalk.red("✘") + " " + error);
}

function validateResult(from, to, result) {
  if (to === result) {
    console.log(chalk.green("✓") + " " + from + " → " + to);
    return;
  }
  errors++;
  console.log(
    chalk.red("✘") + " " + from + " → " + to + chalk.gray(" : " + result)
  );
}

forEach(tests, function(value, key) {
  q.push({ from: key, to: value });
});
