const object = {
    "fruits": ["Apple","Pear", "Orange", "Grape"],
    "cities": ["New York", "Paris", "Orange", "Abu Dhabi"],
    "colors": ["Blue", "Green", "Orange", "Yellow"]
}

function findValue(searchValue, ObjectToSearch) {
    const resultKey = [];
    const iterable = Object.keys(ObjectToSearch).map((entry) => { 
        if (object[entry].includes(searchValue)){
            resultKey.push(entry); 
        } 
    })
    if (resultKey.length == 0){
        return "None found"
    }
    return resultKey
}

findValue("Test", object)

/*
    This could have been done with a for..of loop to iterate other an array of arrays (created through Object.entries(object))
*/