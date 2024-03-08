### Introduction
 
Welcome to this technical assessment repository. Please follow instructions below carefully for a smooth completion of the assessment.

### Prerequisites
* Node.js v20
* NPM
* Latest version of Angular

### Setup
1) Clone this repository.
2) Create a branch from 'main' and name it [your name]-[your-surname], e.g., thomas-edison
3) Run 'npm install'

### Current Setup
As a starting point, we have created an entry file for the application which is index.js.
The current functionality of this file is to periodically add a new line entry to the data.csv file.

You can run this file by running the following command and observe the console output:
```shell
node index.js
```

### The Assessment
We would like you to extend this simple Node.js Application to host a web server using 'express'. 
By browsing to localhost:8080, a single-page Angular application needs to be served.
This simple web page needs to display the data stored in data.csv file in a table styled using Bootstrap 5.

### Important Requirements
#### On the server side
* The express server should host an HTTP GET endpoint called ./taxables to serve the CSV data
* The CSV data should first be parsed into an array of JSON objects before being shared with the frontend:

**data.csv**

```csv
Item, Cost, Tax, Total
item1, 1, 0.15, 1.15
item2, 2, 0.30, 2.30
```
**JSON Output**

```json
[
  {
    "Item": "item1",
    "Cost": 1,
    "Tax": 0.15,
    "Total": 1.15
  },
  {
    "Item": "item2",
    "Cost": 2,
    "Tax": 0.30,
    "Total": 2.30
  }
]
```


#### On the Angular side
* Make sure that all your HTTP requests are placed in an Angular Service and not the main Component
* The Component should be using the Angular service to query for its table data
* The frontend should continually refresh the table data without the user having to refresh the page
* Attempt to use Observables in the Component to subscribe to table data changes which will be continually updated by the Angular Service
