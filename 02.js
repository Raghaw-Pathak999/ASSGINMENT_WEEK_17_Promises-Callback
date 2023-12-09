function mainuplateString(value){
    const mainuplatedString = value.toUpperCase()

    function logSting() {
        console.log(`The Mainuplated String =>> ${mainuplatedString}`);
    }
        return logSting
}

const originalString = "Hello, World!";
const callbackFunction = mainuplateString(originalString);

callbackFunction();