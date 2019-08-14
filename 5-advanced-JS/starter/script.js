
// Function constructor

var Aybars = {
    name: 'aybars',
    yearofBirth: 1995,
    job: 'teacher'

};

var Person = function(name, yearofBirth,job) {
    this.name = name;
    this.yearofBirth = yearofBirth;
    this.job= job;
};
// we can show this codeline up side within Person,but this usage is so common
Person.prototype.calculateAge = function() {
    console.log( 2019 - this.yearofBirth);
};

// this code line ensures all objects within person objest's sub objects so inheritances 
//get new variable as dorman for all lastName will be Dorman henceforth
Person.prototype.lastName = 'Dorman';

var aybars= new Person('Aybars',1995,'Lecturer');
var murat = new Person('murat',1997,'student');
var ayse = new Person('ayşe',1998,'cashier');

aybars.calculateAge();
murat.calculateAge();
ayse.calculateAge();

console.log(aybars.lastName,murat.lastName,ayse.lastName);

