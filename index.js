const fs = require('fs').promises;
let counter = 1;
const TAXABLE_ITEMS_FILE = 'data.csv';
const UPDATE_INTERVAL = 1000;
var MyData = [];
var http = require('http'); //for loading http server 

// Function to add a new line to a file
async function addLineToFile(filename, line) {
    try {
        // Read the existing content of the file
        let data = await fs.readFile(filename, 'utf8');
        readData(line) 

        // Append the new line
        const newData = data + '\n' + line;

        // Write the updated content back to the file
        await fs.writeFile(filename, newData);

        console.log(`${TAXABLE_ITEMS_FILE} updated`)
    } catch (err) {
        console.error('File read or write error', err);
    }

}

async function clearFile(filename) {
    try {
        await fs.writeFile(filename, 'Item, Cost, Tax, Total');

        console.log('Cleared file');

    } catch (err) {
        console.error('Error writing file:', err);
    }
}

async function start() {
    await clearFile(TAXABLE_ITEMS_FILE);

    setInterval(async () => {
        const newLine = `item${counter}, ${counter}, ${Math.round(counter * 0.15 * 100) / 100}, ${Math.round((counter + counter * 0.15) * 100) / 100}`;

        await addLineToFile(TAXABLE_ITEMS_FILE, newLine);

        counter++;
    }, UPDATE_INTERVAL);
}

//function to create object dynamically
function test(value) {
    this.Item = value[0];
    this.Cost = value[1];
    this.Tax = value[2];
    this.Total = value[3];
};

// function to add the newly added line to create a data object into array of Object
function readData(data) {
    let dataArray = data.split(', ');
    MyData.push(new test(dataArray));
}

// Create a webserver with a request listener callback.  This will write the response header with the content type as json, and end the response by sending the array in JSON format.
function server() {
    var server = http.createServer(function (req, resp) {
        resp.writeHead(200, { 'content-type': 'application/json' });
        resp.end(JSON.stringify(MyData));
    });
    server.listen(8080);
}

start();
server();
