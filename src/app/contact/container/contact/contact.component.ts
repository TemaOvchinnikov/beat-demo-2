import { Breadcrumb } from './../../../shared/breadcrumb/model/breadcrumb';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  public breadcrumb!: Breadcrumb;

  constructor() {}

  ngOnInit(): void {
    this.breadcrumb = {
      title: 'Contact Us',
      text: 'Check out our Contact Us',
      link: 'Contact Us',
    };
  }
}
