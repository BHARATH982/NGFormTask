import { Component, Input, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MyServiceService } from '../my-service.service';
import { MatTableModule } from '@angular/material/table';
import { Router } from '@angular/router';
@Component({
  selector: 'app-education-details',
  templateUrl: './education-details.component.html',
  styleUrls: ['./education-details.component.css'],
  // imports: [MatTableModule]
})
export class EducationDetailsComponent {
      
  years : string[] = ['3','4'];
  pdeData : any  = 'rhbjjhb'
  boo : boolean = false;
  displayedColumns: string[] = COLUMNS_SCHEMA.map((col) => col.key);
  dataSource: any = [{firstName: 'jkdf', lastName: 'fjd', email: 1.0079, phoneNumber: 'H32',gender:'male'}]
  columnsSchema: any = COLUMNS_SCHEMA;
  educationDetailsFormValid = false;
  //dataSource = [{firstName: 'jkdf', lastName: 'fjd', email: 1.0079, phoneNumber: 'H32',gender:'male'}]
  @Input() isResetForm : number = 0;
   rsForm = false
    
  constructor(
    private router : Router,
    private service: MyServiceService,  // Use Angular DI
    private _formBuilder: FormBuilder   // Use Angular  
  ) {
    const navigation = this.router.getCurrentNavigation();
    console.log("dur dat",navigation?.extras.state as { PDFData: any })
     const state = navigation?.extras.state as { PDFData: any };
     this.dataSource=[state.PDFData]
    console.log("after navigation 2332",this.dataSource);
  }
   
  EducationDetailGroup!:FormGroup;
  
  // displayedColumns: string[] = ['lastName', 'phoneNumber','gender'];

  createForm(){

    this.EducationDetailGroup = this._formBuilder.group({
      collegeName: ['',Validators.required],
      degree:['',Validators.required],
      years:['',Validators.required],
      city:['',Validators.required],
      dummy:['']
    });
  
   }


  ngOnChanges(changes: SimpleChanges) {
   
    console.log("ngonChange Section");
    this.createForm();
    console.log(this.EducationDetailGroup);
    setTimeout(()=>{
     this.EducationDetailGroup.reset();
     this.EducationDetailGroup.get('collegeName')?.removeValidators([])
     this.EducationDetailGroup.get('degree')?.removeValidators([]);
     this.EducationDetailGroup.get('years')?.removeValidators([]);
     this.EducationDetailGroup.get('city')?.removeValidators([]);
    },0)

    if (changes['isResetForm']&&this.isResetForm) {
      this.setUnTouch();
      this.rsForm = true;

      console.log("$$$$$$$$$ reset educaton form ",this.rsForm);     

     
      this.EducationDetailGroup.markAsPristine();  // Marks form as pristine
    this.EducationDetailGroup.markAsUntouched();  // Marks form as untouched
    this.EducationDetailGroup.setErrors(null);  // Clears any validation errors
      // this.EducationDetailGroup.get('collegeName')?.removeValidators([])
      // this.EducationDetailGroup.get('degree')?.removeValidators([]);
      // this.EducationDetailGroup.get('years')?.removeValidators([]);
      // this.EducationDetailGroup.get('city')?.removeValidators([]);
      // this.EducationDetailGroup.updateValueAndValidity();   

      // this.EducationDetailGroup.removeValidators()
      // this.EducationDetailGroup.setValidators(null);
      // this.EducationDetailGroup.markAsUntouched();


      // this.EducationDetailGroup.markAsPristine();
      // this.EducationDetailGroup.markAsUntouched();

      // this.EducationDetailGroup.get('collegeName')?.setValidators([Validators.required]);
      // this.EducationDetailGroup.get('degree')?.setValidators([Validators.required]);
      // this.EducationDetailGroup.get('years')?.setValidators([Validators.required]);
      // this.EducationDetailGroup.get('city')?.setValidators([Validators.required]);
      // this.EducationDetailGroup.get('dummy')?.setValidators([]);
      // this.EducationDetailGroup.updateValueAndValidity();

      // this.EducationDetailGroup.setValue({
      //   collegeName: 'kce',
      //   degree: '',
      //   years:'',
      //   city:'',
      //   dummy:''
      // });
      
      // this.EducationDetailGroup.markAsPristine();
      // this.EducationDetailGroup.markAsUntouched();
      // this.EducationDetailGroup.updateValueAndValidity();
    }
  }

  ngOnInit() {

    console.log("ng  init eudcation form 99999",this.dataSource);
      this.createForm();

    this.EducationDetailGroup.statusChanges.subscribe(()=>{
      this.educationDetailsFormValid = this.EducationDetailGroup.valid;
    })
  }

   ngAfterViewInit() {
     
    // this.service.sendPDFData$.subscribe((data:any)=>{
    //   // console.log("in ng oninit @@ educatoin form", data);
    //   // this.pdeData = data;
    //   // this.dataSource = [data];
    //   // this.boo = true;
    //   // console.log("after data from personal",this.dataSource)
    // })

    this.EducationDetailGroup.statusChanges.subscribe((status) => {
      // this.service.isEducationDetailsFormValid(this.EducationDetailGroup.valid);
      console.log("education comp status changed " +this.EducationDetailGroup.valid )
    });
    console.log("ng after content init ",this.rsForm);
    //   this.EducationDetailGroup.reset();
    //   // this.EducationDetailGroup.get('collegeName')?.markAsUntouched;
    //  // this.EducationDetailGroup.
    //   ;
    //   // this.EducationDetailGroup
    //   this.EducationDetailGroup.setErrors(null);

 }
     
 ngOnDestroy() {
  // Reset the form when the component is destroyed or when navigating away
  console.log("ng destroy");
  this.EducationDetailGroup.reset();
}


  // secondFormGroup:FormGroup = this._formBuilder.group({
  //   collegeName: ['', Validators.required],
  //   degree:['',Validators.required],
  //   years:['',Validators.required],
  //   city:['']
  // });
   
  setUnTouch(){
     console.log('untouched button clikced');
     this.EducationDetailGroup?.reset();
     this.EducationDetailGroup.markAsUntouched();
     this.EducationDetailGroup.markAsPristine();
     this.EducationDetailGroup.setErrors(null);  
  }
   
  onStepChanged(event: any) {
    // You can handle any logic here when the step changes
    console.log('@@@@@@@ Step Changed:', event);
    
    // Optionally, reset the form state
    this.setUnTouch();
  }

  doneBtnClicked(){
     console.log("done btn clicked",this.dataSource[0])
   //   this.service.sendEdittedPdfDatafunc(this.dataSource[0]);
  }


  EDFBackButtonClicked(){

    this.router.navigate(['/personalDetails'],{state:{editedPDFData:this.dataSource[0]}});
  }
  // receivePDFDate(data:any){
  //   console.log("in educatoin form", data);
  //   this.pdeData = data;
  //   this.boo = true;

  // }

   
  //  COLUMNS_SCHEM = [
    // {
    //     key: "lastName",
    //     type: "text",
    //     label: "LastName"
    // },
    // {
    //     key: "gender",
    //     type: "text",
    //     label: "Gender"
    // },
    // {
    //     key: "phoneNumber",
    //     type: "number",
    //     label: "Phone Number"
    // },
    // {
    //     key: "isEdit",
    //     type: "isEdit",
    //     label: ""
    // }
  // ]
  
}

// const USER_DATA = [
//   // {"name": "John Smith", "occupation": "Advisor", "age": 36},
//   // {"name": "Muhi Masri", "occupation": "Developer", "age": 28},
//   // {"name": "Peter Adams", "occupation": "HR", "age": 20},
//   // {"name": "Lora Bay", "occupation": "Marketing", "age": 43}
// ];

const COLUMNS_SCHEMA = [
  {
    key: "firstName",
    type: "text",
    label: "firstName"
},
  {
    key: "lastName",
    type: "text",
    label: "LastName"
},
{
    key: "gender",
    type: "text",
    label: "Gender"
},
{
  key: "email",
  type: "text",
  label: "Email"
},
{
    key: "phoneNumber",
    type: "number",
    label: "Phone Number"
},
{
    key: "isEdit",
    type: "isEdit",
    label: ""
}

]