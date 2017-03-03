# Weather Cities

## Summary

This application can be used to display a weather summary for a given city.

## Installation

Use the Node Package Manager (npm) to install from github. On a BASH-like command line shell:

```
$ git clone git@github.com:bbc/bbc-academy-codesample.git
$ cd bbc-academy-codesample.git
$ npm install
```

## Usage

Required: `node` version >= 4.3

```
$ node -v
  v4.3.0
```

Run script from the command line:

```
$ node scripts/run.js -c london
  {
    "title": "London, United Kingdom",
    "summary": "Heavy Rain, 7°C (45°F)"
  }
```

## Testing

Use npm to run the tests, which are written using Mocha and TAP.

```
npm test

  > weather-cities@0.0.0 test bbc-academy-codesample
  > mocha --reporter mocha-tap-reporter

  1..3
  ok 1 Weather City should return weather title and summary for a given city.
  ok 2 Weather City should return weather publication date for a given city. # SKIP -
  ok 3 Weather City should return weather summaries for all the cities. # SKIP -
  # tests 3
  # pass 1
  # fail 0
  # skip 2
```

## Exercises

### A: Running the application

- Fork the apllication on github into your own github repository
- Install the application onto a local machine which you have access to
- Run the application and confirm that it works as you expect
- Run the tests for the application and ensure that the `# fail 0` result is shown (no failures)

### B: Extend the application

- Notice that the test folder contains several tests that are currently skipped.
- Make changes to the code such that the test marked "TEST B" can run and pass.

### C: Add a new feature to the application

- Notice that the test folder contains several tests that are currently skipped.
- Make further changes to the code such that the test marked "TEST C" can run and pass.
