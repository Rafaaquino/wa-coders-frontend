import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ServicesComponent } from './myService/services.component';
import { PricingComponent } from './pricing/pricing.component';
import { FeaturesComponent } from './features/features.component';
import { TeamComponent } from './team/team.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';

import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { StackComponent } from './stack/stack.component';
import { QuoteComponent } from './quote/quote.component';

import { DialogModule } from 'primeng/dialog';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ProgressBarModule } from 'primeng/progressbar';
import { CalendarModule } from 'primeng/calendar';

import { ScrollspyDirective } from './scrollspy.directive';

import { SendEmailService } from '../services/send-email.service';

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [
    ServicesComponent,
    PricingComponent,
    FeaturesComponent,
    TeamComponent,
    BlogComponent,
    ContactComponent,
    ScrollspyDirective,
    FooterComponent,
    NavComponent,
    StackComponent,
    QuoteComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    MessageModule,
    MessagesModule,
    ProgressBarModule,
    CalendarModule,
  ],
  // tslint:disable-next-line: max-line-length
  exports: [
    ServicesComponent,
    PricingComponent,
    FeaturesComponent,
    TeamComponent,
    BlogComponent,
    ContactComponent,
    ScrollspyDirective,
    FooterComponent,
    NavComponent,
    StackComponent,
    QuoteComponent,
  ],
  providers: [SendEmailService],
})
export class SharedModule {}
