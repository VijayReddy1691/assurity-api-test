
# API Automation Using Cypress Testing Tool

## Overview

 In this project, we will be using Cypress to automate an API test for a given API.
 API: https://api.tmsandbox.co.nz/v1/Categories/6327/Details.json?catalogue=false

## Prerequisites
- Visual Studio Code or Any developer tool
- Node.js (v10 or above)
- NPM package Manager - used 
- Cypress install

## Installation
- Clone the repository using following command 
    **'git clone https://github.com/VijayReddy1691/assurity-api-test.git'**
- Navigate into the cloned repository and run **'npm init'**
- Run **'npm install cypress --save-dev'** to create node_modules and package-lock.json
- Once installation process is finished successfully, start running the tests using the command **'npx cypress open'**

## Test Description
The test will perform the following actions:
    1. Invoke given GET Request API using cy.request() method
    2. Verify that the API response status code should give 200 OK
    3. Verify that the API response contains a **"Name"** property with the value **"Carbon credits"**
    4. Verify that the API response contains a **"CanRelist"** property with the value **true**.
    5. Verify that the API response contains a Promotions array.
    6. Iterate the Promotions array and check object with a **"Name"** property with the value **"Gallery"**
    7. Verify that the object found in step 5 has a **"Description"** property that contains the text **"Good position in category"**.

## Test Results for Given API

![image](https://user-images.githubusercontent.com/129804885/229696627-1724794b-141d-4af6-9e44-407b9032fce6.png)

## Author
- Vijay Reddy
- https://github.com/VijayReddy1691


