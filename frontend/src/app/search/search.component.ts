import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  fragment: string = '';

  results: object[] = [];

  constructor() { 
  }

  ngOnInit(): void {
    axios({
      method: 'get',
      url: `http://localhost:5000/api/listings/`,
      data: {
      }
    }).then(res => {
      this.results = res.data.records.map(listing => listing._fields[0].properties);
    })
  }

  handleChange(fragment) {
    this.fragment = fragment;

    if (fragment === '') {
      axios({
        method: 'get',
        url: `http://localhost:5000/api/listings/`,
        data: {
        }
      }).then(res => {
        this.results = res.data.records.map(listing => listing._fields[0].properties);
      })
        .catch(err => {
          console.log(err)
        });
    } else {
      axios({
        method: 'get',
        url: `http://localhost:5000/api/listings/search/${fragment}`,
        data: {
        }
      }).then(res => {
        this.results = res.data.records.map(listing => listing._fields[0].properties);
      })
        .catch(err => {
          console.log(err)
        });
    }
  }
}
