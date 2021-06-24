### test-redirects

> Write automated tests for your redirects.

![Screenshot](https://raw.githubusercontent.com/wayneashleyberry/test-redirects/master/media/screenshot.png)

[![npm](http://img.shields.io/npm/v/test-redirects.svg?style=flat)](https://www.npmjs.com/package/test-redirects)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Build Status](https://travis-ci.org/wayneashleyberry/test-redirects.svg?branch=master)](https://travis-ci.org/wayneashleyberry/test-redirects)
[![Code Climate](https://codeclimate.com/github/wayneashleyberry/test-redirects/badges/gpa.svg)](https://codeclimate.com/github/wayneashleyberry/test-redirects)
[![Dependency Status](https://david-dm.org/wayneashleyberry/test-redirects.svg)](https://david-dm.org/wayneashleyberry/test-redirects)

Testing that your web server is configured correctly can be a pain. You want to
make sure your users will always get to the correct location but manually
testing this is slow, tedious and error-prone.

#### Installation

```sh
npm install -g test-redirects
```

#### Usage

```sh
test-redirects
```

The script will look for a file called `test-redirects.json`. This file should
contain an object where the keys are the origin url and values are the expected
destination after being redirected.

```json
{
  "http://npmjs.com": "https://www.npmjs.com/",
  "http://www.npmjs.com": "https://www.npmjs.com/",
  "https://npmjs.com": "https://www.npmjs.com/",
  "https://www.npmjs.com": "https://www.npmjs.com/",
  "https://www.npmjs.com/": "https://www.npmjs.com/"
}
```

#### Related

- [Why use www? - www. is not deprecated](http://www.yes-www.org/why-use-www/)
- [To slash or not to slash](https://webmasters.googleblog.com/2010/04/to-slash-or-not-to-slash.html)

#### License

MIT © [Wayne Ashley Berry](http://www.wayneashleyberry.com)
