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

    const name = document.querySelector('.listing-name'),
      hostName = document.querySelector('.listing-host-name'),
      roomType = document.querySelector('.listing-type'),
      price = document.querySelector('.listing-price'),
      numReviews = document.querySelector('.listing-reviews')

    name.innerHTML = listing.name;
    hostName.innerHTML = listing.hostName;
    roomType.innerHTML = listing.roomType;
    price.innerHTML = '$' + listing.price;
    numReviews.innerHTML = listing.numReviews;
  }  
}
