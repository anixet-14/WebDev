    //Onject stores key and value pair
    //By default keys are string.
    let person={
        name: 'Aniket',
        age:23,
        college: 'MSRIT',
        '': "Empty String", //Dot operators can't be used with them to retrieve
        " ": "Space Key Ki Value", //Dot operators can't be used with them to retrieve
        'last name': "Gupta" //Same dot operator invalid here
    }
    console.log(person)
    //Below method to help us to find the values in constant time O(1)
    console.log("Name: ", person.name)

    //Another way
    console.log("Person: ", person["name"])

    //On '' and " " can't be used with dot operators
    //console.log(person.'') This will throw error

    console.log(person[''])
    console.log(person[" "])
    //console.log(person.last name) //Throws error
    console.log(person['last name']) //When key has space in between, we use [] method to retrieve

