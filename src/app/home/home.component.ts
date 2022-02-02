import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  pictures = [    
    { "url": "assets/img1.jpg", "url2": "assets/img2.jpg" },    
    { "url": "assets/img3.jpg", "url2": "assets/img4.jpg" },    
    { "url": "assets/img5.jpg", "url2": "assets/img6.jpg" },
    { "url": "assets/img1.jpg", "url2": "assets/img2.jpg" },    
    { "url": "assets/img3.jpg", "url2": "assets/img4.jpg" },    
    { "url": "assets/img5.jpg", "url2": "assets/img6.jpg" } 
  ]; 



  constructor() { }

  ngOnInit(): void {

  }

}
