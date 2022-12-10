var students = [['David', 80], ['Vinod', 77], ['Divya', 88], ['Ishitha', 95], ['John', 68]];

var AvgMarks = 0;

for (var i=0; i < students.length; i++) {
        AvgMarks += students[i][1];
        console.log("====>",AvgMarks)
        var avg = (AvgMarks/students.length);
}

console.log("Average grade: " + avg);

        if (avg < 60){
          console.log("Grade : F");      
          } 
        else if (avg < 70) {
                console.log("Grade : D"); 
                  } 
        else if (avg < 80) 
             {
                console.log("Grade : C"); 
        } else if (avg < 90) {
                console.log("Grade : B"); 
        } else if (avg < 100) {
                console.log("Grade : A"); 
}