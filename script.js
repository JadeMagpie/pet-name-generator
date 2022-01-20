
// These will hold arrays of strings that will be filterd from objects that will be pulled from parsed CSV file
let femTitles = [];
let maleTitles = [];
let nbTitles = [];

// Generates a random number between 0 and the array length -1 (cos Math.floor rounds down)
function randomIndex(array) {
    return Math.floor(Math.random() * array.length)
};

// Kinda don't use this anymore, but it's here just in case
function selectRandom(array) {
    let word = "";
    word = array[randomIndex(array)];
    return word;
};

/* 
* This will hold the function callback for printing to the dom - this needs extra planning!
* It needs to work with the sorting algorithm to select the right sort for user selections
* and then do all the randomizations accordingly, and print the correct combination on the screen.
* To make the app re-usable, I may need to clear out previously sorted arrays? 
* Perhaps that's a final 'then' statement that clears the arrays once the whole promise chain is finished.
*/

var printToDom = function (array, data) {
    selectThenPrint(array);
    return data;
};

// Gets the div element with the ID 'output' and inserts a word pulled from the given array at random. 
function selectThenPrint(array) {
    document.getElementById("output").innerHTML = array[randomIndex(array)];
};

var gotDataCallback = function (data) {
    console.log('This is the data I successfully got:');
    console.table(data);
    console.log(data);
    return data
 };

var sortDataCallback = function (data) {
    data.forEach(element => {
        if (element.category === "title") {
            if (element.gender === "F") {
                femTitles.push(element.word);
            } else if (element.gender === "M") {
                maleTitles.push(element.word);
            } else if (element.gender === "NB") {
                nbTitles.push(element.word);
            };
        };
    });
    return data;
 };

var sortedArrayCheckCallback = function (data) {
    console.log("The arrays are:");
    console.log("femTitles: " + femTitles);
    console.log("maleTitles: " + maleTitles);
    console.log("nbTitles: " + nbTitles);
    return data
};

// *Use D3 to fetch my CSV file and turn it into an array of objects
// Columns: category (title, name), word (unique), gender(M, F, NB)
var data = d3.csv("name_gen_words.csv", function (data) {
    return {
        category: data.category,
        word: data.word,
        gender: data.gender
    };
})
    .then(gotDataCallback)
    .then(sortDataCallback)
    .then(sortedArrayCheckCallback)
    .then(function () { 
        selectThenPrint(nbTitles)
    });

/*
var data = d3.csv("name_gen_words.csv", function (data) {
    return {
        category: data.category,
        word: data.word,
        gender: data.gender
    };
})
    .then(function (data) {
        console.log(`why won't this work: ${data}`);
        console.table(data);
        console.log(data);
        return data
    })
    .then(function (data) {
        data.forEach(element => {
            if (element.category === "title") {
                if (element.gender === "F") {
                    femTitles.push(element.word);
                } else if (element.gender === "M") {
                    maleTitles.push(element.word);
                } else if (element.gender === "NB") {
                    nbTitles.push(element.word);
                };
            };
        });
    })
    .then(function () {
        console.log(femTitles)
    })
    .then(function () { 
        selectThenPrint(nbTitles)
    });

    */

/* var data = d3.csv("/projects/tests_and_experiments/PetNameGenerator/name_gen_words.csv",function(data){
    let nameDataArray = [{
        category: data.category,
        word: data.word,
        gender: data.gender
    }]
}); */