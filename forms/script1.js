class RailwayForm{
    constructor(givenname, trainno){
        console.log("CONSTRUCTOR CALLED " + givenname + " " + trainno)
        this.name = givenname;
        this.trainno = trainno;
    }
    
    submit(){
        alert(this.name + " : Your form is submitted for train number :"+ this.trainno)
    }
    cancel(){
        alert(this.name + " : Your form is cancelled for train number :" +this.trainno)
    }
}

//Creat and fill form for Harry
let HarryForm = new RailwayForm('Harry', 13151);
//No nee to fill the form with Harry's details
// HarryForm.fill('Harry', 13151)

//Creat and fill form for Rohan
let RohanForm1 = new RailwayForm("Rohan", 13152);
let RohanForm2 = new RailwayForm("Rohan", 13420);


HarryForm.submit();
RohanForm2.submit();
RohanForm1.submit();
RohanForm1.cancel();

