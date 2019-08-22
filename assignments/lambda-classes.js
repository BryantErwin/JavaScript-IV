// CODE here for your Lambda Classes
class Person {
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
    }
    speak(){
        return `Hello my name is ${this.name} and I am from ${this.location}.`
    }
}

const David = new Person({
    name:'David',
    age:22,
    location:'Maryland'
});
const Tom = new Person({
    name:'Bryant',
    age:19,
    location: 'Florida'
});

class Instructor extends Person{
    constructor(instrAttr){
        super(instrAttr);
        this.specialty = instrAttr.specialty;
        this.favLang = instrAttr.favLang;
        this.catchPhrase = instrAttr.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}.`;
    }
    grade(student,subject){
        return `${student.name} receives a perfect score on ${subject}.`;
    }
}

const Ellie = new Instructor({
    name:'Ellie',
    age:35,
    location:'Utah',
    favLang:'Java',
    catchPhrase:'Math is cool',
    subject:'Java'
});

class TeamLead extends Instructor{
    constructor(teamAttr){
        super(teamAttr);
        this.gradClassName = teamAttr.gradClassName;
        this.favInstructor = teamAttr.favInstructor;
    }
    standup(TL, channel){
        return `${TL.name} announces to ${channel} @ channel standy times!`;
    }
    debugscode(TL, student, subject){
        return `${TL.name} debugs ${student.name}'s code on ${subject}.`;
    }
}

const Charles = new TeamLead({
    name:'Charles',
    age:32,
    location:'Oklahoma',
    favLang:'HTML',
    catchPhrase:'Peace',
    gradClassName:'WebPT9',
    favInstructor:'Josh Knell'
});

class Students extends TeamLead{
    constructor(studAttr){
        super(studAttr);
        this.prevBackground = studAttr.prevBackground;
        this.className = studAttr.className;
        this.favSubjects = studAttr.favSubjects;
    }
    listSubjects(){
        return `${this.favSubjects}`
    }
    PRAssignments(Student,subject){
        return `${Student.name} has submitted a PR for ${subject}.`;
    }
    sprintChallenge(Student, subject){
        return `${Student.name} has begun their sprint challenge on ${subject}`
    }

}

const Bryant = new Students({
    name:'Bryant',
    age:19,
    location:'Florida',
    prevBackground:'Warehouse',
    className:'Web23',
    favSubjects:'Math, Java, Python'
});

console.log(David.speak());
console.log(Tom.speak());
console.log(Charles.standup(Charles, "WebPT9"));
console.log(Ellie.demo('css'));
console.log(Bryant.listSubjects());
console.log(Bryant.sprintChallenge(Bryant, 'Java'));
console.log(Bryant.prevBackground);