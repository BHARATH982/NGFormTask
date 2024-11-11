import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeclarationDetailsComponent } from './declaration-details/declaration-details.component';
import { EducationDetailsComponent } from './education-details/education-details.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';

const routes: Routes = [
  { path: '', component: PersonalDetailsComponent },
  { path:'personalDetails',component: PersonalDetailsComponent},
  { path: 'educationDetails', component: EducationDetailsComponent },
  { path: 'declarationDetails', component: DeclarationDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
