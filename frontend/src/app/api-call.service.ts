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
    })
    .then(res => {
      console.log(res)
      return (res.data.records ? res.data.records.map(listing => listing._fields[0].properties) : [])
    })
    .catch(err => console.log(err))
  }

  searchListings = fragment => {
    return axios({
      method: 'get',
      url: `${this.url}/api/listings/search/${fragment}`,
    })
    .then(res => {
      return (res.data.records ? res.data.records.map(listing => listing._fields[0].properties) : [])
    })
    .catch(err => console.log(err))
  }

  seedData = () => {
    return axios({
      method: 'post',
      url: `${this.url}/api/listings/seed`,
    })
      .then(res => {
        console.log('Database seeded')
      })
      .catch(err => console.log('Something went wrong in the seed axios call'))
  }

  dropData = () => {
    return axios({
      method: 'delete',
      url: `${this.url}/api/listings/`,
    })
      .then(res => {
        console.log('Database dropped')
      })
      .catch(err => console.log('Something went wrong in the delete axios call'))
  }
}
