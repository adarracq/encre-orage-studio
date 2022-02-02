import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allImages = [];    

  pictures = [    
    { "id": 1, "url": "assets/img1.jpg", "url2": "assets/img2.jpg" },    
    { "id": 2, "url": "assets/img3.jpg", "url2": "assets/img4.jpg" },    
    { "id": 3, "url": "assets/img5.jpg", "url2": "assets/img6.jpg" },
    { "id": 4, "url": "assets/img1.jpg", "url2": "assets/img2.jpg" },    
    { "id": 5, "url": "assets/img3.jpg", "url2": "assets/img4.jpg" },    
    { "id": 6, "url": "assets/img5.jpg", "url2": "assets/img6.jpg" } 
  ];     


  constructor() { }

  ngOnInit(): void {

  }

}
