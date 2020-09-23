import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';

//charts and schematics
import { ChartsModule} from 'ng2-charts';
import { UserNavComponent } from './user-nav/user-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { UserDashComponent } from './user-dash/user-dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { CardComponent } from './card/card.component';
import { TechnicalSkillsChartComponent } from './charts/technical-skills-chart/technical-skills-chart.component';
import { ProgressOfSkillsComponent } from './charts/progress-of-skills/progress-of-skills.component';


@NgModule({
  declarations: [UserComponent, UserNavComponent, UserDashComponent, CardComponent, TechnicalSkillsChartComponent, ProgressOfSkillsComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    ChartsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
  ]
})
export class UserModule { }
