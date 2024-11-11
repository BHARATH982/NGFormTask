import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { EducationDetailsComponent } from './education-details/education-details.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { DeclarationDetailsComponent } from './declaration-details/declaration-details.component';
import { ParentDetailsComponent } from './parent-details/parent-details.component';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


// const routes: Routes = [
//   { path: 'kkl', component: PersonalDetailsComponent },
//   { path: 'educationDetails', component: EducationDetailsComponent },
//   { path: 'declarationDetails', component: DeclarationDetailsComponent },
// ];

// const routes : Routes = []

@NgModule({
  declarations: [
    AppComponent,
    EducationDetailsComponent,
    PersonalDetailsComponent,
    DeclarationDetailsComponent,
    ParentDetailsComponent
  ],
  imports: [
  // RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatGridListModule,
    MatFormFieldModule,
    MatStepperModule,
    MatSelectModule,
    MatRadioModule,
    MatCheckboxModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatTableModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
