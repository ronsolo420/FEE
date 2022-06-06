var person = {
    firstname: 'Default',
    lastname: 'Default',
    getFullName: function() {
        return this.firstname + '' + this.lastname;
    }
}

var luis = {
    firstname: 'Luis ',
    lastname: 'Reynoso'
}

// don't do this EVER! for demo Only
luis.__proto__ = person;
console.log(luis.getFullName());

var jane = {
    firstname: 'Jane '
}

jane.__proto__ = person;
console.log(jane.getFullName());