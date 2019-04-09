/*Import from Angular*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/*Service*/
import { DataService } from './shared/data.service';

/*App Components*/
import { AppComponent } from './app.component';
import { LinkformComponent } from './linkform/linkform.component';
import { FormeremploymentComponent } from './formeremployment/formeremployment.component';
import { SkillsComponent } from './skills/skills.component';


@NgModule({
  declarations: [
    AppComponent,
    LinkformComponent,
    FormeremploymentComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
