import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { MyServiceService } from '../my-service.service';
import { StepperSelectionEvent } from '@angular/cdk/stepper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent {
  
   
  genders : string[] = ['Male','Female','Others'];
  languages: string[] = ['English','Tamil','Spanish'];
  fatherName : string = '';
   
  personalDetailGroup!: FormGroup;
  personalDetailsFormValid = false;
  setFormData : any = {};
  isSetFormData = false;
  @Output() sendFatherNametoApp = new EventEmitter<string>();
  @Input() forwardbutclicked1! : boolean;

  constructor(
    private router: Router,
    private service: MyServiceService,  // Use Angular DI
    private _formBuilder: FormBuilder   // Use Angular Di

  ) {

    const navigation = this.router.getCurrentNavigation();
    if(navigation?.extras.state){
    const state = navigation?.extras.state as {editedPDFData:any}
    console.log("PDf recieve edit",state.editedPDFData );
    this.setFormData = state.editedPDFData;
    this.isSetFormData = true;
    // this.createForm();
    // this.personalDetailGroup.setValue({
    //   firstName: 'John',
    //   lastName: 'Doe',
    //   gender: 'Male',
    //   email: 'john.doe@example.com',
    //   phoneNumber: '123-456-7890',
    //   languages: ['English', 'Spanish']
    // });
    //this.personalDetailGroup.setValue(state.editedPDFData)
    }
    // if(state)
    // this.personalDetailGroup.setValue(state.edittedPDFData);
  }

  ngOnInit() {

   
   this.createForm();
    this.personalDetailGroup.statusChanges.subscribe((status) => {
      this.personalDetailsFormValid = this.personalDetailGroup.valid;
      // this.service.isPersonalDetailsFormValid(this.personalDetailGroup.valid);
      // console.log("person comp status changed " +this.personalDetailGroup.valid )
    });
  
    // this.service.sendEdittedPDFData$.subscribe((data:any)=>{
    //   console.log("recevied eddited value ",data);
    //   this.personalDetailGroup.setValue(data);
    // })
  }
 
  ngOnChanges(changes: SimpleChanges) {
    // if (changes['forwardbutclicked1']) {
    //   if(this.personalDetailGroup)
    //   this.service.sendPDFData(this.personalDetailGroup.value);
    //  }
   }

 createForm(){

  this.personalDetailGroup = this._formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    gender: ['',Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', [Validators.required, this.phoneNumberValidator]],
    languages:[[]]

    // firstName: ['', Validators.required],
    // lastName: ['', Validators.required],
    // gender: ['',Validators.required],
    // email: ['', [Validators.required, Validators.email]],
    // phoneNumber: ['', [Validators.required, this.phoneNumberValidator]],
  });
  if(this.isSetFormData)
   this.personalDetailGroup.patchValue(this.setFormData);
 }
  phoneNumberValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const phoneNumberPattern = /^[0-9]{10,15}$/;
    if (control.value && !phoneNumberPattern.test(control.value)) {
      return { invalidPhoneNumber: true };
    }
    return null;
  }

  receiveFatherName(val:string){
     this.fatherName = val;
     this.sendFatherNametoApp.emit(this.fatherName);
  } 
 
  forwardButtonClicked(){
    this.router.navigate(['/educationDetails'], { state: { PDFData: this.personalDetailGroup.value} });
    // console.log("pdf",this.personalDetailGroup.value);
    // this.service.sendPDFData(this.personalDetailGroup.value);
  }




}
