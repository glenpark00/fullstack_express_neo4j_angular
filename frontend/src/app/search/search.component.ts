import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  fragment: string = '';
  roomType: string = 'Any';
  priceLow: number = 0;
  priceHigh: number = 999999;
  results: object[] = [];

  roomTypes: any[] = [];

  constructor(private api: ApiCallService) { 
    
  }

  ngOnInit() {
    this.api.getListings()
      .then(res => {
        this.results = res;
        this.roomTypes = [...new Set(res.map(listing => listing.roomType))];
      })
      .catch(err => {
        console.log(err)
      });
  }

  handleNameChange(fragment) {
    this.fragment = fragment;
    this.search();
  }

  handlePriceChange(number, type) {
    if (type === 'low') {
      this.priceLow = number;
    } else {
      this.priceHigh = number;
    }
    this.search();
  }

  handleRoomTypeChange(type) {
    this.roomType = type;
    this.search();
  }

  search() {
    this.api.searchListings(this.fragment, this.priceLow, this.priceHigh, this.roomType)
      .then(res => this.results = res)
      .catch(err => {
        console.log(err)
      });
  }

  seedDb() {
    this.api.seedData()
      .then(() => console.log('Successfully seeded'))
      .catch(err => console.log(err))
  }

  dropDb() {
    this.api.seedData()
      .then(() => console.log('Successfully dropped'))
      .catch(err => console.log(err))
  }
}
