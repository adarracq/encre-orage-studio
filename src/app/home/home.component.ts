import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allImages = [];    

  pictures = [    
    { "id": 1, "url": "assets/resources/img1.jpg", "url2": "assets/resources/img2.jpg" },    
    { "id": 2, "url": "assets/resources/img3.jpg", "url2": "assets/resources/img4.jpg" },    
    { "id": 3, "url": "assets/resources/img5.jpg", "url2": "assets/resources/img6.jpg" },
    { "id": 4, "url": "assets/resources/img1.jpg", "url2": "assets/resources/img2.jpg" },    
    { "id": 5, "url": "assets/resources/img3.jpg", "url2": "assets/resources/img4.jpg" },    
    { "id": 6, "url": "assets/resources/img5.jpg", "url2": "assets/resources/img6.jpg" } 
  ];     


  constructor() { }

  ngOnInit(): void {

  }

}
