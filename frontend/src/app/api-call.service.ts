import { Injectable } from '@angular/core';
import axios from "axios";
import { AxiosInstance } from "axios";
import creds from '../../../config/credentials';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {
  private axiosClient: AxiosInstance;

  constructor() {
    this.axiosClient = axios.create({
      timeout: 3000,
      headers: {
        "X-Initialized-At": Date.now().toString()
      }
    });
  }

  // getListings = () => {
  //   return axios({
  //     method: 'get',
  //     url: `${creds.url}/api/listings/`,
  //   }).then(res => {
  //     return res.data.records.map(listing => listing._fields[0].properties);
  //   })
  // }

  getListings = async () => {
    let axiosResponse = await this.axiosClient.request({
      method: "get",
      url: `${creds.url}/api/listings/`
    });

    return (axiosResponse.data);
  }

  searchListings = fragment => {
    return axios({
      method: 'get',
      url: `${creds.url}/api/listings/search/${fragment}`,
    }).then(res => {
      return res.data.records.map(listing => listing._fields[0].properties);
    })
  }
}
