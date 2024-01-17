input = [
    "The Great New York Rapid Transit Tunnel - Giant work in street, partly underneath",
    "Snooze alarms - Alas! No more Zs",
    "Clint Eastwood - Old East Action",
    "Eleven plus two - Twelve plus one"
]

function anagramArray(arr) {
    const wordRegex = /[a-z]/g;
    if (typeof arr !== "object") {
        return "Please add an array of strings."
    }
    const resultArr = arr.map((sentences) => anagramString(sentences));
    return resultArr
}

function anagramString(string){
    let result = false;
    const wordRegex = /[a-z]/g;
    const splitedString = string.split("-").map((sentence) => sentence.toLowerCase().match(wordRegex).toSorted().join(''))
    if (splitedString[0] === splitedString[1]){
        result = true;
    }
    return result
}

function isAnagram(string1, string2){
    let result = false;
    const wordRegex = /[a-z]/g;
    const splitedString1 = string1.toLowerCase().match(wordRegex).toSorted().join('');
    const splitedString2 = string2.toLowerCase().match(wordRegex).toSorted().join('');

    if (splitedString1 === splitedString2){
        result = true;
    }
    return result
}

/*
    The primary function only takes an array of strings as argument, otherwise it won't work.
    If a string input doesn't include a "-" character, the function will return automatically false.
*/