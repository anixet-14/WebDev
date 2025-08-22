let person={
        name: 'Aniket',
        age:23,
        college: 'MSRIT',
        '': "Empty String", //Dot operators can't be used with them to retrieve
        " ": "Space Key Ki Value", //Dot operators can't be used with them to retrieve
        'last name': "Gupta" //Same dot operator invalid here
}

//For-In Loop
for(let key in person){
    console.log(key, ':', person[key]);
}

//To add another key value
person['country']="India"
console.log(person);

//To delete
delete person.country
console.log(person)