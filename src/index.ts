import * as ex from 'ts2-example'

const s = new ex.Student('Chuckles', 'Humphrey', 'McSnorty')
const t = new ex.Teacher('Charlotte', 'Furbrawl')
t.addStudent(s)

ex.helloWorld()

console.log(`Student: ${s}`)
console.log(`Teacher: ${t}`)
