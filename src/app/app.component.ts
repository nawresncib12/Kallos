import {Component, OnInit} from '@angular/core';
import {ProfileService} from "./data/profile.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'kallos';

  constructor(private profileService: ProfileService) {
  }

  ngOnInit(): void {
    const token = localStorage.getItem('token')

    if (token) {
      this.profileService.getProfile().subscribe()
    }
  }
}
