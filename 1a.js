const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
];
const [frontEnd, backEnd] = fullStack;
console.log(frontEnd, backEnd);

const student = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];
const [
  name,
  [html, css, js, react],
  [htmlScore, cssScore, jsScore, reactScore],
] = student;

console.log(
  name,
  html,
  css,
  js,
  react,
  htmlScore,
  cssScore,
  jsScore,
  reactScore
);

const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];

const convertArrayToObject = (arr) => {
    const newArray = [];
    for( const [name, skills, scores] of arr) {
        newArray.push({ name, skills, scores })
    }
    return newArray;
}


console.log(convertArrayToObject(students));

const studentObj = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node',level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase:[
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience:['Python', 'R', 'D3.js']
    }
}

// console.log(studentObj);

const newStudentObj = {
    ...studentObj,
    skills: {
        ...studentObj.skills,
        frontEnd: [...studentObj.skills.frontEnd, {skill: 'BootStrap',level: 8}],
        backEnd: [...studentObj.skills.backEnd, {skill: 'Express',level: 8}],
        dataBase: [...studentObj.skills.dataBase, { skill: 'SQL',level: 8}],
        dataScience: [...studentObj.skills.dataScience, 'SQL']
    }
}

console.log(newStudentObj);