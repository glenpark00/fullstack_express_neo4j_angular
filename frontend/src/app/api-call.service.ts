import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor() { }

  getListings = () => {
    axios({
      method: 'get',
      url: `http://localhost:5000/api/listings/`,
      data: {
      }
    }).then(res => {
      return res.data.records.map(listing => listing._fields[0].properties);
    })
  }

  searchListings = fragment => {
    axios({
      method: 'get',
      url: `http://localhost:5000/api/listings/search/${fragment}`,
      data: {
      }
    }).then(res => {
      return res.data.records.map(listing => listing._fields[0].properties);
    })
  }
}
