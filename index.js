const fs = require('fs').promises;
let counter = 1;
const TAXABLE_ITEMS_FILE = 'data.csv';
const UPDATE_INTERVAL = 1000;

// Function to add a new line to a file
async function addLineToFile(filename, line) {
    try {
        // Read the existing content of the file
        let data = await fs.readFile(filename, 'utf8');

        // Append the new line
        const newData = data + '\n' + line;

        // Write the updated content back to the file
        await  fs.writeFile(filename, newData);

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

async function start () {
    await clearFile(TAXABLE_ITEMS_FILE);

    setInterval(async () => {
        const newLine = `item${counter}, ${counter}, ${Math.round(counter * 0.15 * 100) / 100}, ${Math.round((counter + counter * 0.15) * 100) / 100}`;

        await addLineToFile(TAXABLE_ITEMS_FILE, newLine);

        counter++;
    }, UPDATE_INTERVAL);
}

start();