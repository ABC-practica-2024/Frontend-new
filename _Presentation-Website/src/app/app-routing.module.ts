import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CalendarComponent} from "./calendar/calendar.component";
import {EchipaComponent} from "./echipa/echipa.component";
import {TeamMemberDetailsComponent} from "./team-member-details/team-member-details.component";

const routes: Routes = [
    {path: 'calendar', component: CalendarComponent},
    {path: 'echipa', component: EchipaComponent},
    {path: 'team-member-details/:name', component: TeamMemberDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
