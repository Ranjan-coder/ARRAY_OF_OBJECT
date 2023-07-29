let studentRecords = [ {name: 'John', id: 123, marks : 98 },
        {name: 'Baba', id: 101, marks : 23 },
        {name: 'yaga', id: 200, marks : 45 },
        {name: 'Wick', id: 115, marks : 75 } ] 

// Q-1
        let ans = studentRecords.map((item)=>item.name.toUpperCase())
        console.log(ans)

        // ------------
// Q-2
        let ans2 = studentRecords.filter((item)=>item.marks>50)
        console.log(ans2) 
        // ----------
// Q-3
        let ans3 = studentRecords.filter((item)=>item.marks>50 && item.id>120)
        console.log(ans3)
        
        // ----------
// Q-4
        let ans4 = 0;
        studentRecords.filter((item)=>ans4+=item.marks);
        console.log(ans4);

        // --------

// Q-5
        let ans5 = studentRecords.filter((item)=>item.marks>50).map((item)=>item.name.toUpperCase())
        console.log(ans5)

        // -------

// Q-6
        let ans6 = 0;
        studentRecords.filter((item)=>item.id>120).map((item)=>ans6+=item.marks);
        console.log(ans6);


        // ----------

// Q-7

let ans7 = 0;
        let lessmarks = studentRecords.map((item)=>{
            if(item.marks<50)
            item.marks+=15
                return item

        }).map((item)=>item.marks>50? ans7 +=item.marks:null)

        console.log(ans7);

        // ---------


// Q-8
        function student(name,clas,rollno){
            this.name = name
            this.clas = clas
            this.rollno = rollno
        }

        let newstudent = new student('Ram',2,1);
        let newstudent2 = new student('shyam',2,2);
        let newstudent3 = new student('Gopal',2,3);
        let newstudent4 = new student('priya',5,4);
        let newstudent5 = new student('laxman',5,5);
        let newstudent6 = new student('sonali',2,6);

        console.log(newstudent.name);
        console.log(newstudent.clas);
        console.log(newstudent.rollno);

        