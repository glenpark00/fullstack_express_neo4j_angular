import { Injectable } from '@angular/core';
import axios from 'axios';
import creds from '../../../config/credentials';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor() { }

  getListings = () => {
    return axios({
      method: 'get',
      url: `${creds.url}/api/listings/`,
      data: {
      },
      headers: { 'Access-Control-Allow-Origin': '*' }
    }).then(res => {
      return res.data.records.map(listing => listing._fields[0].properties);
    })
  }

  searchListings = fragment => {
    return axios({
      method: 'get',
      url: `${creds.url}/api/listings/search/${fragment}`,
      data: {
      }
    }).then(res => {
      return res.data.records.map(listing => listing._fields[0].properties);
    })
  }
}
