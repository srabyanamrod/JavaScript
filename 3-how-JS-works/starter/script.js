///////////////////////////////////////
// Lecture: Hoisting



calculateAge(1985);

function calculateAge(year) {
    console.log(2016 - year);
    console.log(this);
}


var john = {
    name: 'John',
    yearofBirth: 1998,
    calculateAge: function() {
        console.log(this);
        console.log( 2016 - this.yearofBirth);
    }
}

john.calculateAge();

var mike = {
    name: 'Mike',
    yearofBirth:1984
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();











///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword









