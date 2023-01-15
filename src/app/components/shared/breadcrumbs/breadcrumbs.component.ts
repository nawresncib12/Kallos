import { Component, Input, OnInit } from '@angular/core';

type BreadcrumbsItem = {
  label: string;
  link?: string[];
};

export type BreadcrumbsItems = BreadcrumbsItem[]

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnInit {
  @Input() items: BreadcrumbsItem[] = [];
  constructor() {}

  ngOnInit(): void {}
}
