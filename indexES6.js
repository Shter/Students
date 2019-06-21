class Student{
    constructor(firstname,lastname,birthYear){
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthYear = birthYear;
        this.marks = [];
        this.attendance = new Array(25);
        this.averageAttendance = function average() {
            var needles = this.enoughSpace().length
            var sum = 0
            for(let i=0; i < needles; i++) {
                sum = +this.attendance[i] + sum
            }
            return sum/this.enoughSpace().length
        };
    }

    getBirthYear(){
        console.log(this.birthYear)
    };
    getAverageMarks(){
        var sum = 0;
        for(let i=0; i < this.marks.length; i++){
            sum = this.marks[i] + sum
        }
        return sum/this.marks.length
    };
    enoughSpace(){
        var filtered = this.attendance.filter(function (el) {
            return el != null;
        });
        return filtered
    };
    present(){
        if(this.enoughSpace().length < this.attendance.length) {
            for(let i=0; i < this.attendance.length; i++) {
                if(this.attendance[i] === undefined) {
                    this.attendance[i] = true
                    return
                }

            }
        }
    };
    absent(){
        if(this.enoughSpace().length < this.attendance.length) {
            for(let i=0; i < this.attendance.length; i++) {
                if(this.attendance[i] === undefined) {
                    this.attendance[i] = false
                    return
                }

            }
        }
    };
    averageAttendance() {
        var needles = this.enoughSpace().length
        var sum = 0
        for(let i=0; i < needles; i++) {
            sum = +this.attendance[i] + sum
        }
        return sum/this.enoughSpace().length
    };

    summary () {
        var averageAttendance = this.averageAttendance()
        var getAverageMarks = this.getAverageMarks()
        if(averageAttendance > 0.9 && getAverageMarks > 90) {
            console.log("Ути какой молодчинка!")
        }else if (averageAttendance < 90 || getAverageMarks < 0.9 ) {
            console.log("Норм, но можно лучше")
        }else if (averageAttendance < 90 && getAverageMarks < 0.9) {
            console.log("Редиска!")
        }
    };
}

const student1 = new Student('Vasek', 'Piligrim', 1991)
const student2 = new Student('Crom', 'Frol', 1999)
const student3 = new Student('Blok', 'Gardev', 1981)
student1.marks = [39,56,85,52,78]
student2.marks = [39,13,85,65,20]
student3.marks = [41,78,85,52,78]
student1.present()
student1.absent()
student1.present()
student1.absent()
student1.present()
student1.absent()
student2.absent()
student2.absent()
student2.absent()
student2.absent()
student2.present()
student2.present()
student3.absent()
student3.present()
student3.present()
student3.present()
student3.present()
student3.present()
student2.summary()

class Group extends Array{
    constructor(){
        super()
    }

    attendance(lastname){
        if(arguments.length === 0) {
            var sum = 0
            for(i=0; i < this.length; i++){
                sum = +this[i].attendance[0] + sum
            }
            console.log(sum/group.length)
        }else{
            this.rateAttendence(lastname)
        }
    };
    performance(lastname){
        if(arguments.length === 0) {
            var sum = 0
            for(i=0; i < this.length; i++){
                sum = +this[i].marks[0] + sum
            }
            console.log(sum/group.length)
        }else{
            this.rateMarks(lastname)
        }
    };
    rateMarks(lastname){
        var hisRate = ''
        var arr = []
        for (var i=0; i < this.length; i++){
            arr.push(this[i].getAverageMarks())
            if(this[i].lastname === lastname){
                hisRate = this[i].getAverageMarks()

            }
        }
        arr.sort(this.sort)
        console.log(arr.indexOf(hisRate)+1)
    };
    rateAttendence(lastname){
        var hisRate = ''
        var arr = []
        for (var i=0; i < this.length; i++){
            arr.push(this[i].averageAttendance())
            if(this[i].lastname === lastname){
                hisRate = this[i].averageAttendance()
            }
        }
        arr.sort(this.sort)
        console.log(arr)
        console.log(arr.indexOf(hisRate)+1)
    };
    sort(a,b){
        if (a > b) return 1;
        if (a < b) return -1;
    };

}

var group = new Group();
group.push(student1,student2, student3)
group.attendance('Piligrim')

