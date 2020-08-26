import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {
  @Input() results: object[];

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(listing) {
    document.querySelector('.listing-none').innerHTML = '';
    document.querySelector<HTMLElement>('.listing-display > div').style.border = '1px solid #929292';

    const name = document.querySelector('.listing-name'),
      hostName = document.querySelector('.listing-host-name'),
      roomType = document.querySelector('.listing-type'),
      price = document.querySelector('.listing-price'),
      numReviews = document.querySelector('.listing-reviews')

    name.innerHTML = listing.name;
    hostName.innerHTML = 'Host:' + listing.hostName;
    roomType.innerHTML = 'Type:' + listing.roomType;
    price.innerHTML = '$' + listing.price;
    numReviews.innerHTML = 'Number of Reviews:' + listing.numReviews;
    
  }  
}
