import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsModule } from '@ngxs/store';
import { MockHttpState } from 'state/mock-http.state';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestableComponent } from './testable/testable.component';

@NgModule({
  declarations: [
    AppComponent,
    TestableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxsModule.forRoot([MockHttpState]),
    NgxsReduxDevtoolsPluginModule.forRoot({
      maxAge: 5000
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
