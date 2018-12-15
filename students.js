const NUM_STUDENTS = 20

const firstNames = ['Emma', 'Noah', 'Olivia'];

const lastNames = ['Smith', 'Jones', 'Brown'];

// generate a random number between min and max
export const rand = (max, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min

// generate a name
const generateName = () => `${firstNames[rand(firstNames.length - 1)]} ${lastNames[rand(lastNames.length - 1)]}`

// generate a phone number
const generatePhoneNumber = () => `${rand(999, 100)}-${rand(999, 100)}-${rand(9999, 1000)}`

// create a person
const createStudent = () => ({ name: generateName(), number: generatePhoneNumber() })

// compare two students' name for alphabetizing
export const compareNames = (student1, student2) => student1.name > student2.name

// add key to a student object based on index
const addKeys = (val, key) => ({ key, ...val }) // ({key:key, ...val})

// create an array of length NUM_STUDENTS
export default Array.from({ length: NUM_STUDENTS }, createStudent).map(addKeys)
