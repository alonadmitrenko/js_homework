function validate(properties, values) {
    for (i = 0; i < properties.length; i++) {
        if (values[properties[i]] == undefined) {
            throw console.error('Propetry ' + '"' + properties[i] + '"' + ' is not enter!');
        }
    }
    return true;
}
try {
    console.log(validate(['name', 'surname'], { name: 'ALona', surname: 'DMytrenko' }));
    console.log(validate(['name', 'surname', 'age'], { name: 'ALona', surname: 'DMytrenko' }));
} catch (e) {

} {
    console.log();
}

