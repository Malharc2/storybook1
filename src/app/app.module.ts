import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OurStoryComponent } from './our-story/our-story.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HeaderComponent } from './header/header.component';
import { MainContentComponent } from './main-content/main-content.component';

import { ServicesComponent } from './services/services.component';
import { DeclarationComponent } from './declaration/declaration.component';
import { WhyChooseUsComponent } from './why-choose-us/why-choose-us.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';
import { TestimonialCtaFooterComponent } from './testimonial-cta-footer/testimonial-cta-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    OurStoryComponent,
    ContactFormComponent,
    HeaderComponent,
    MainContentComponent,
 
    ServicesComponent,
      DeclarationComponent,
      WhyChooseUsComponent,
      CaseStudiesComponent,
      TestimonialCtaFooterComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
