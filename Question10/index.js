// Write a function that will display the array of objects into tabular form.
//  Object could be anything and can have any properties(dynamic object).
// 

function table(arr) {
    let headers = "";
    let keys = [];
    Object.keys(arr[0]).forEach((elem) => {
        keys.push(elem);
        headers = headers + "     |    " + elem;
    });
    console.log(headers);
    for (let i = 0; i < arr.length; i++) {
        var row = "";
        keys.forEach((elem) => {
            row += "   " + arr[i][elem];
        })
        console.log(row);
    }
}

table([
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }]
);