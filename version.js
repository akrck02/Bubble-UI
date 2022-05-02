function main(name = false){
    const fs = require("fs");

    // Read version.json
    const versionFile = fs.openSync("version.json", "r");
    const versionJsonFile = JSON.parse(fs.readFileSync(versionFile, "utf8"));
    fs.closeSync(versionFile);

    // update version
    if(name){
        console.log(versionJsonFile.NAME);
    } else {
        console.log(versionJsonFile.VERSION);
    }
    
} 

const args = process.argv.slice(2);
main(args[0]);