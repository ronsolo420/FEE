function greet(firstname, lastname, language) {

    language = language || 'en';

    if (language === 'en') {
        console.log ('Hello ' + firstname + '' + lastname);
    }
    if (language === 'es') {
        console.log ('Hola ' + firstname + '' + lastname);
    }

}

greet('Luis ', 'Joe', 'en');
greet('Luis ', 'Joe', 'es');