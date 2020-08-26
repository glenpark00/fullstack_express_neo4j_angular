import { Injectable } from '@angular/core';
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  private url = 'http://oakland-airbnb.herokuapp.com';
  // private url = 'http://localhost:5000';

  constructor() {
  }

  getListings = async () => {
    return axios({
      method: 'get',
      url: `${this.url}/api/listings/`
    }).then(res => {
      console.log(res)
      return (res.data.records ? res.data.records.map(listing => listing._fields[0].properties) : [])
    })
  }

  searchListings = fragment => {
    return axios({
      method: 'get',
      url: `${this.url}/api/listings/search/${fragment}`,
    }).then(res => {
      return (res.data.records ? res.data.records.map(listing => listing._fields[0].properties) : [])
    })
  }
}
