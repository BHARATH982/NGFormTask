import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MyServiceService {

  // private personalDetailsformStatusSubject = new BehaviorSubject<boolean>(false);
  // private EducationDetailsformStatusSubject = new BehaviorSubject<boolean>(false);
  // private DecalrationDetailsformStatusSubject = new BehaviorSubject<boolean>(false);
  
  // sendPDFDataSubject = new Subject();
  // sendPDFData$ = this.sendPDFDataSubject.asObservable();
  
  // sendEdittedPDFDataSubject = new Subject();
  // sendEdittedPDFData$ = this.sendEdittedPDFDataSubject.asObservable();

  // PersonalDetailsformStatus$ = this.personalDetailsformStatusSubject.asObservable();
  // EducationDetailsformStatus$ = this.EducationDetailsformStatusSubject.asObservable();
  // DecalrationDetailsformStatus$ = this.personalDetailsformStatusSubject.asObservable();

  constructor() { }

  // isPersonalDetailsFormValid(isValid:boolean){
  //   if(isValid){
  //     console.log("service section  PersonalDetails the form is true");
  //   }
  //   this.personalDetailsformStatusSubject.next(isValid);
  // }

  // isEducationDetailsFormValid(isValid:boolean){
  //   if(isValid){
  //     console.log("service section  EducationDetails the form is true");
  //   }
  //   this.EducationDetailsformStatusSubject.next(isValid);
  // }

  // isDecalarationDetailsFormValid(isValid:boolean){
  //   if(isValid){
  //     console.log("service section  DecalrationDetails the form is true");
  //   }
  //   this.DecalrationDetailsformStatusSubject.next(isValid);
  // }


  // sendPDFData(data:any){
  //   console.log("service in pdf",data)
  //   this.sendPDFDataSubject.next(data);
  // }
  
  // sendEdittedPdfDatafunc(data:any){

  //   console.log("recive in service",data);
  //   this.sendEdittedPDFDataSubject.next(data);
  // }
  clearEducationForm()
  {

  }
   
}
