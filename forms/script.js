class RailwayForm{
   
    submit(){
        alert(this.name + " : Your form is submitted for train number :"+ this.trainno)
    }
    cancel(){
        alert(this.name + " : Your form is cancelled for train number :" +this.trainno)
    }
    fill(givenname, trainno){
        this.name = givenname;
        this.trainno = trainno;
    }
}

//Creat a form for Harry
let HarryForm = new RailwayForm();
//Fill the form with Harry's details
HarryForm.fill('Harry', 13151)

//Creat a form for Rohan
let RohanForm1 = new RailwayForm();
let RohanForm2 = new RailwayForm();
//Fill the form with Rohan's details
RohanForm1.fill("Rohan", 13152)
RohanForm2.fill("Rohan", 13420)

HarryForm.submit();
RohanForm2.submit();
RohanForm1.submit();
RohanForm1.cancel();

