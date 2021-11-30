import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './container/contact/contact.component';
import { BreadcrumbModule } from '../shared/breadcrumb/breadcrumb.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, BreadcrumbModule],
})
export class ContactModule {}
