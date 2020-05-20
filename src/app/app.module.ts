import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { es_ES } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { InitialComponent } from './pages/initial/initial.component';
import { AppRoutingModule } from './app-routing.module';
//import { AppNgZorroAntdModule } from './ng-zorro-module';
//import { NzIconTestModule } from './ng-zorro-icon-module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { BabyIconsComponent } from './components/baby-icons/baby-icons.component';

registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    InitialComponent,
    BabyIconsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  //  NzIconTestModule,
    //AppNgZorroAntdModule,
    AngularSvgIconModule.forRoot()
  ],
  providers: [{ provide: NZ_I18N, useValue: es_ES }],
  bootstrap: [AppComponent]
})
export class AppModule { }
