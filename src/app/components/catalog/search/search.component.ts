import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() search = new EventEmitter()
  @Output() onClose = new EventEmitter()

  @Input() onSearch: boolean = false
  searchInput: string = ""

  constructor() { }

  ngOnInit(): void {

  }
  performSearch() {
    this.search.emit(this.searchInput)
    this.searchInput = ""
  }
  close() {
    this.onClose.emit(this.searchInput)
    this.onSearch = false
  }
}
