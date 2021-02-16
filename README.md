# API testing examples with Cypress

## Summary

This is a simple API test automation project using one of the most popular browser testing frameworks to date - [Cypress.io](https://github.com/cypress-io/cypress).

The test API endpoints used for the purpose of this project are provided for free usage by [Ben Howdle](https://benhowdle.im/) via the website [regres.in](https://reqres.in/).

## Setup

In order to run this project follow this simple steps:

- Clone the project;
- In the root directory: run `npm install` command in order to download the general dependencies;
- Then download cypress using the `npm install cypress --save-dev` command;

## Running the tests

Once the setup is done correctly, there are two basic ways to run the tests: Headlessly in the Electron browser or via Cypress Test Runner.

To run the tests headlessly use the `npm run cy:run` command;

To run the tests via Cypress Test Runner use - `npm run cy:open`
