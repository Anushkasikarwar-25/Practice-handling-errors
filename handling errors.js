
//Create an array of 5 numbers
const numbers = [10, 20, 30, 40, 50];

//Create a function
function getElementAtIndex(arr, index) {

    // Try to access the array element
    try {

         // Check if index is out of bounds
        if (index < 0 || index >= arr.length) {
            throw new Error("Invalid-index: " + index);
        }

        // Access the element
        console.log("Element:", arr[index]);

    }

    //Handle errors
    catch (error) {
        console.log(error.message);
    }

    //Finally block
    finally {
        console.log("Access attempt finished");
    }
}
//Function calls
getElementAtIndex(numbers, 2);

getElementAtIndex(numbers, 5);
