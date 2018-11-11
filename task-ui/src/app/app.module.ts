import { TaskService } from './service/task.service';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ViewComponent} from './view/view.component';
import {AddComponent} from './add/add.component';
import {AppRoutingModule} from './app-routing.module';
import {EditComponent} from './edit/edit.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {TaskFilter} from './pipes/task-filter.pipe';
import { ViewModule } from './view/view.module';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    AddComponent,
    EditComponent,
    TaskFilter
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [TaskService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
