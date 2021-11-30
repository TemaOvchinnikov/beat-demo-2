import { Component, Input, OnInit } from '@angular/core';
import { Breadcrumb } from '../model/breadcrumb';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css'],
})
export class BreadcrumbComponent implements OnInit {
  @Input() public breadcrumb!: Breadcrumb;

  constructor() {}

  ngOnInit(): void {}
}
