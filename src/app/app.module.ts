import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PurphaseComponent } from './purphase/purphase.component';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {PurphaseService} from './purphase.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PurphaseIntentionsComponent } from './purphase-intentions/purphase-intentions.component';
import {MatTableModule} from '@angular/material/table';
import { GdprComponent } from './gdpr/gdpr.component';
import {MatIconModule} from '@angular/material/icon';
import { UserComponent } from './user/user.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';



const appRoutes: Routes = [
  { path: '', component: PurphaseComponent },
  {path: 'listpurphase' , component: PurphaseIntentionsComponent},
  {path: 'gdpr', component: GdprComponent},
  {path: 'user', component: UserComponent}


];
@NgModule({
  declarations: [
    AppComponent,
    PurphaseComponent,
    PurphaseIntentionsComponent,
    GdprComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [PurphaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
