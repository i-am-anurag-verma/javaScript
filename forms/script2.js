class RailwayForm{
    constructor(givenname, trainno,address){
        console.log("CONSTRUCTOR CALLED " + givenname + " " + trainno)
        this.name = givenname;
        this.trainno = trainno;
        this.address = address;
    }
    preview(){
        alert(this.name + " : Your form is for train number :" + this.trainno + " and your Address is " + this.address)
    }
    submit(){
        alert(this.name + " : Your form is submitted for train number :"+ this.trainno)
    }
    cancel(){
        alert(this.name + " : Your form is cancelled for train number :" +this.trainno)
        this.trainno == 0
    }
}

let harryForm = new RailwayForm("Harry", 13151, "Pacific Ocean, Bihar- 000000");
harryForm.preview()
harryForm.submit()
harryForm.cancel()