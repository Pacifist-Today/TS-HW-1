class School {

    directions: [][][][][] = [];

    addDirection(direction: []): void {
        this.directions.push(direction);
    }
}

class Direction {

    levels: [][][][] = [];

    get name(): string {
        return this._name;
    }

    constructor(name: string) {
        this._name = name;
    }

    addLevel(level: [][][]): void {
        this.levels.push(level);
    }
}

class Level {

    groups: [][][] = [];

    constructor(name: string, program: string) {
        this.name = name;
        this._program = program;
    }

    get name(): string {
        return this._name;
    }

    get program(): string {
        return this._program;
    }

    addGroup(group: [][]): void {
        this.groups.push(group);
    }
}

class Group {

    _students: [][] = [];

    get students(): [][] {
        return this._students;
    }

    constructor(directionName: string, levelName: string) {
        this.directionName = directionName;
        this.levelName = levelName;
    }

    addStudent(student: []): void {
        this._students.push(student);
    }

    showPerformance(): [] {
        const sortedStudents: [] = this.students.toSorted(
            (a:[], b:[]) => b.getPerformanceRating() - a.getPerformanceRating()
        );
        return sortedStudents;
    }
}

class Student {
    grades: {[computedProperty: string]: number} = {};
    attendance: boolean[] = [];

    constructor(firstName: string, lastName: string, birthYear: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
    }

    get fullName(): string {
        return `${this.lastName} ${this.firstName}`;
    }

    set fullName(value: string) {
        [this.lastName, this.firstName] = value.split(" ");
    }

    get age(): number {
        return new Date().getFullYear() - this.birthYear;
    }

    setGrade(subject: string, grade: number): void {
        this.grades[subject] = grade;
    }

    markAttendance(present: boolean): void {
        this.attendance.push(present);
    }

    getPerformanceRating(): number {
        const gradeValues = Object.values(this.grades);

        if (gradeValues.length === 0) return 0;

        const averageGrade =
            gradeValues.reduce((sum: number, grade: number) => sum + grade, 0) / gradeValues.length;

        const attendancePercentage: number =
            (this.attendance.filter((present: boolean) => present).length /
                this.attendance.length) *
            100;

        return (averageGrade + attendancePercentage) / 2;
    }
}

// class School {
//     // Если directions это условная "Специализация", то мы получаем пятимерный массив данных
//     // levels это градация классов, например от 1 по 4, то это четырёхмерный массив данных
//     // где levels включает в себя массив данных
//     // groups содержащий в себе массив каждой группы _students,
//     // в котором массив данных каждого студента
//
//     directions: [][][][][] = [];
//
//     addDirection(direction: []): void {
//         this.directions.push(direction);
//     }
// }
//
// class Direction {
//     // если levels это градация классов, например от 1 по 4, то это четырёхмерный массив данных
//     // где levels включает в себя массив данных
//     // groups содержащий в себе массив каждой группы _students,
//     // в котором массив данных каждого студента
//     levels: [][][][] = [];
//
//     get name(): string {
//         return this._name;
//     }
//
//     constructor(name: string) {
//         this._name = name;
//     }
//
//     addLevel(level: [][][]): void {
//         this.levels.push(level);
//     }
// }
//
// class Level {
//     // groups это трёхмерный массив содержащий в себе массив каждой группы _students,
//     // в котором массив данных каждого студента
//
//     groups: [][][] = [];
//
//     constructor(name: string, program: string) {
//         this.name = name;
//         this._program = program;
//     }
//
//     get name(): string {
//         return this._name;
//     }
//
//     get program(): string {
//         return this._program;
//     }
//
//     addGroup(group: [][]): void {
//         // group это двумерный массив, в котором вложены массивы данных студентов
//         this.groups.push(group);
//     }
// }
//
// class Group {
//     // _students это двумерный массив содержащий в себе массив данных каждого студента
//
//     _students: [][] = [];
//
//     get students(): [][] {
//         return this._students;
//     }
//
//     constructor(directionName: string, levelName: string) {
//         this.directionName = directionName;
//         this.levelName = levelName;
//     }
//
//     addStudent(student: []): void {
//         // student это одномерный массив данных каждого студента
//
//         this._students.push(student);
//     }
//
//     showPerformance(): [][] {
//         const sortedStudents: [] = this.students.toSorted(
//             (a:[], b:[]) => b.getPerformanceRating() - a.getPerformanceRating()
//         );
//
//         return sortedStudents;
//     }
// }
//
// class Student {
//     grades: {[computedProperty: string]: number} = {};
//     attendance: boolean[] = [];
//
//     constructor(firstName: string, lastName: string, birthYear: number) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.birthYear = birthYear;
//     }
//
//     get fullName(): string {
//         return `${this.lastName} ${this.firstName}`;
//     }
//
//     set fullName(value: string) {
//         [this.lastName, this.firstName] = value.split(" ");
//     }
//
//     get age(): number {
//         return new Date().getFullYear() - this.birthYear;
//     }
//
//     setGrade(subject: string, grade: number): void {
//         this.grades[subject] = grade;
//     }
//
//     markAttendance(present: boolean): void {
//         this.attendance.push(present);
//     }
//
//     getPerformanceRating(): number {
//         const gradeValues = Object.values(this.grades);
//
//         if (gradeValues.length === 0) return 0;
//
//         const averageGrade =
//             gradeValues.reduce((sum: number, grade: number) => sum + grade, 0) / gradeValues.length;
//
//         const attendancePercentage: number =
//             (this.attendance.filter((present: boolean) => present).length /
//                 this.attendance.length) *
//             100;
//
//         return (averageGrade + attendancePercentage) / 2;
//     }
// }
