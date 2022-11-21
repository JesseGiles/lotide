# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @jessegiles/lotide`

**Require it:**

`const _ = require('@jessegiles/lotide');`

**Call it:**

`const results = _.head([1, 2, 3]) // => [1]`
`const results = _.tail([1, 2, 3]) // => [2, 3]`
`const results = _.middle([1, 2, 3]) // => [2]`

## Documentation

The following functions are currently implemented:

* `head`: takes an array and returns only the first element
* `tail`: takes an array and returns only the elements found *after* index 0
* `middle`: takes an array and returns only the middle-most element(s)