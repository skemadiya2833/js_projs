// Write a program to find a particular object based on the specified property or properties

let tmp = {
    key: 'value',
    key1: 'Value1',
    key2: {
        key2_1: 'Value',
        key2_2: 'Value1'
    }
}

function searchObj(obj, query) {
    for (let key in obj) {
        let value = obj[key];
        if (value === query) console.log('property=' + key + ' value=' + value);
        if (typeof(value) === 'object') searchObj(value, query);
    }
}

searchObj(tmp, "Value1");