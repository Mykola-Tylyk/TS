class CoursesAndDuration {
    title: string;
    monthDuration: number

    constructor(title: string, monthDuration: number) {
        this.title = title;
        this.monthDuration = monthDuration;
    }
}

let coursesAndDurationArray: CoursesAndDuration [] = [
    new CoursesAndDuration('JavaScript Complex', 5),
    new CoursesAndDuration('Java Complex', 6),
    new CoursesAndDuration('Python Complex', 6),
    new CoursesAndDuration('QA Complex', 4),
    new CoursesAndDuration('FullStack', 7),
    new CoursesAndDuration('Frontend', 4),
]


if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Супер')
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Супер')
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Супер')
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Супер')
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Супер')
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Супер')
}