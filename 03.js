function AgeInDay(person) {
    let FullNAme = `${person.FirstName} ${person.LastName}`
    let CalCulate = person.Age * 365
    return function logMASSAGE() {
        console.log(`The person's full name is ${FullNAme} and their age in days is ${CalCulate}.`);
    }
}

const DataOFPerson = {
    FirstName: "Raghaw",
    LastName: "Pathak",
    Age: 23
}

let result = AgeInDay(DataOFPerson)
result()