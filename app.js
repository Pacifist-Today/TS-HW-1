var School = /** @class */ (function () {
    function School() {
        this.directions = [];
    }
    School.prototype.addDirection = function (direction) {
        this.directions.push(direction);
    };
    return School;
}());
var Direction = /** @class */ (function () {
    function Direction(name) {
        this.levels = [];
        this._name = name;
    }
    Object.defineProperty(Direction.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Direction.prototype.addLevel = function (level) {
        this.levels.push(level);
    };
    return Direction;
}());
var Level = /** @class */ (function () {
    function Level(name, program) {
        this.groups = [];
        this.name = name;
        this._program = program;
    }
    Object.defineProperty(Level.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Level.prototype, "program", {
        get: function () {
            return this._program;
        },
        enumerable: false,
        configurable: true
    });
    Level.prototype.addGroup = function (group) {
        this.groups.push(group);
    };
    return Level;
}());
var Group = /** @class */ (function () {
    function Group(directionName, levelName) {
        this._students = [];
        this.directionName = directionName;
        this.levelName = levelName;
    }
    Object.defineProperty(Group.prototype, "students", {
        get: function () {
            return this._students;
        },
        enumerable: false,
        configurable: true
    });
    Group.prototype.addStudent = function (student) {
        this._students.push(student);
    };
    Group.prototype.showPerformance = function () {
        var sortedStudents = this.students.toSorted(function (a, b) { return b.getPerformanceRating() - a.getPerformanceRating(); });
        return sortedStudents;
    };
    return Group;
}());
var Student = /** @class */ (function () {
    function Student(firstName, lastName, birthYear) {
        this.grades = {};
        this.attendance = [];
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
    }
    Object.defineProperty(Student.prototype, "fullName", {
        get: function () {
            return "".concat(this.lastName, " ").concat(this.firstName);
        },
        set: function (value) {
            var _a;
            _a = value.split(" "), this.lastName = _a[0], this.firstName = _a[1];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "age", {
        get: function () {
            return new Date().getFullYear() - this.birthYear;
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.setGrade = function (subject, grade) {
        this.grades[subject] = grade;
    };
    Student.prototype.markAttendance = function (present) {
        this.attendance.push(present);
    };
    Student.prototype.getPerformanceRating = function () {
        var gradeValues = Object.values(this.grades);
        if (gradeValues.length === 0)
            return 0;
        var averageGrade = gradeValues.reduce(function (sum, grade) { return sum + grade; }, 0) / gradeValues.length;
        var attendancePercentage = (this.attendance.filter(function (present) { return present; }).length /
            this.attendance.length) *
            100;
        return (averageGrade + attendancePercentage) / 2;
    };
    return Student;
}());
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
