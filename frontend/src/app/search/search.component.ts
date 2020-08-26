import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  fragment: string = '';

  results: object[] = [];

  constructor(private api: ApiCallService) { 
  }

  ngOnInit() {
    this.api.getListings().then(res => this.results = res)
      .catch(err => {
        console.log(err)
      });
  }

  handleChange(fragment) {
    this.fragment = fragment;

    if (fragment === '') {
      this.api.getListings().then(res => this.results = res)
        .catch(err => {
          console.log(err)
        });
    } else {
      this.api.searchListings(fragment).then(res => this.results = res)
        .catch(err => {
          console.log(err)
        });
    }
  }

  seedDb() {
    this.api.seedData()
      .then(() => console.log('Success'))
      .catch(err => console.log(err))
  }
}
