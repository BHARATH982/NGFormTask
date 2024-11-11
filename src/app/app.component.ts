import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';;
import {BreakpointObserver} from '@angular/cdk/layout';
import {StepperOrientation} from '@angular/material/stepper';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { MyServiceService } from './my-service.service';
import { StepperSelectionEvent } from '@angular/cdk/stepper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
   

  fatherName : string = '';
  isResetEducationalDetailsForm : number = 0;
  forwardbutclicked: boolean = false;
  constructor(private service: MyServiceService, breakpointObserver: BreakpointObserver) {

    this.stepperOrientation = breakpointObserver
      .observe('(min-width: 800px)')
      .pipe(map(({matches}) => (matches ? 'horizontal' : 'vertical'))); 
    }
    
   
    ngOnInit() {

      // this.service.PersonalDetailsformStatus$.subscribe((isValid) => {
      //   this.personalDetailsFormValid = isValid;
      //   console.log("app comp person "+ this.personalDetailsFormValid)
      // }); 
      
      // this.service.EducationDetailsformStatus$.subscribe((isValid) => {
      //   this.educationDetailsFormValid = isValid;
      //   console.log("app comp edu "+ this.educationDetailsFormValid)
      // }); 
       
      // this.service.DecalrationDetailsformStatus$.subscribe((isValid) => {
      //   this.declarationDetailsFormValid = isValid;
      //   console.log("app comp "+ this.declarationDetailsFormValid)
      // }); 
        
    }

    title = "Angular Practice"
    date = new Date();

    // personalDetailsFormValid = false;
    // educationDetailsFormValid = false;
    // declarationDetailsFormValid = false;
    
    genders : string[] = ['Male','Female','Others'];
    languages: string[] = ['English','Tamil','Spanish'];
    selectedLanguages: string[] = [];
    years : string[] = ['3','4'];

    stepperOrientation: Observable<StepperOrientation>;
 
    onStepChange(event: StepperSelectionEvent,stepper:any) {
      //&& !this.educationDetailsFormValid
      if (event.previouslySelectedIndex > event.selectedIndex ) {   
         if (event.previouslySelectedIndex === 1) {
              this.isResetEducationalDetailsForm += 1
         } else if (event.previouslySelectedIndex === 0) {
         
         }
      }
      stepper.selected.interacted = false;
    }
   
    receiveFatherNamefromPersonal(val:string){
         this.fatherName = val;
    }
 
    @ViewChild('myDiv') myDiv!: ElementRef;

  //  ngAfterViewInit() {
  //   // Now you can safely access the DOM element
  //   this.myDiv.nativeElement.style.color = 'blue';
  //   console.log('Element is now available:', this.myDiv.nativeElement);
  //   }

    // forwardButtonClicked(){
    //    this.forwardbutclicked = true;
    // }
 
}

