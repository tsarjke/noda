import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SwiperDirective } from './directives/swiper.directive';
import { register } from 'swiper/element/bundle';
import { FormsModule } from '@angular/forms';
import { TextInputComponent } from '../core/modules/UI/text-input/text-input..component';
import { CheckboxComponent } from '../core/modules/UI/checkbox/checkbox.component';
import { SelectComponent } from '../core/modules/UI/select/select.component';
import { ButtonComponent } from '../core/modules/UI/button/button.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { MainScreenComponent } from './components/main-screen/main-screen.component';
import { PreFooterComponent } from './components/pre-footer/pre-footer.component';
import { FooterComponent } from './components/footer/footer.component';
import { WelcomeFormComponent } from './components/welcome/welcome-form/welcome-form.component';

register();

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SwiperDirective,
    TextInputComponent,
    CheckboxComponent,
    SelectComponent,
    ButtonComponent,
    WelcomeComponent,
    MainScreenComponent,
    PreFooterComponent,
    FooterComponent,
    WelcomeFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
