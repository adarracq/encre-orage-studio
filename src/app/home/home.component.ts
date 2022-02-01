import { Component, OnInit } from '@angular/core';

import {NgxGalleryOptions} from '@kolkov/ngx-gallery';
import {NgxGalleryImage} from '@kolkov/ngx-gallery';
import {NgxGalleryAnimation} from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    // Images var
    galleryOptions: NgxGalleryOptions[];
    gallery: NgxGalleryImage[];

  constructor() { }

  ngOnInit(): void {
    this.galleryOptions = [
      {
        width: '50vw',
        height: '80vh',
        thumbnailsColumns: 5,
        thumbnailsRows: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        thumbnailsPercent: 50,
        imageArrowsAutoHide: true,
        imageAutoPlay: true,
        imageAutoPlayInterval: 5000,
        imageAutoPlayPauseOnHover: true,
        thumbnailsOrder: 2,
        previewCloseOnClick: true,
        previewCloseOnEsc: true,
        previewKeyboardNavigation: true,
        previewZoom: true,
        previewDownload: true,
        previewRotate: true,
        previewBullets: true
        
      }
    ];
  
    this.gallery = [
      {
        small: 'assets/resources/tat5.jpg',
        medium: 'assets/resources/tat5.jpg',
        big: 'assets/resources/tat5.jpg'
      },
      {
        small: 'assets/resources/tat2.jpg',
        medium: 'assets/resources/tat2.jpg',
        big: 'assets/resources/tat2.jpg'
      },
      {
        small: 'assets/resources/tat3.jpg',
        medium: 'assets/resources/tat3.jpg',
        big: 'assets/resources/tat3.jpg'
      },{
        small: 'assets/resources/tat4.jpg',
        medium: 'assets/resources/tat4.jpg',
        big: 'assets/resources/tat2.jpg'
      },{
        small: 'assets/resources/tat5.jpg',
        medium: 'assets/resources/tat5.jpg',
        big: 'assets/resources/tat5.jpg'
      },{
        small: 'assets/resources/tat6.jpg',
        medium: 'assets/resources/tat6.jpg',
        big: 'assets/resources/tat6.jpg'
      },{
        small: 'assets/resources/tat7.jpg',
        medium: 'assets/resources/tat7.jpg',
        big: 'assets/resources/tat7.jpg'
      },{
        small: 'assets/resources/tat1.jpg',
        medium: 'assets/resources/tat1.jpg',
        big: 'assets/resources/tat1.jpg'
      },{
        small: 'assets/resources/tat2.jpg',
        medium: 'assets/resources/tat2.jpg',
        big: 'assets/resources/tat2.jpg'
      },{
        small: 'assets/resources/tat3.jpg',
        medium: 'assets/resources/tat3.jpg',
        big: 'assets/resources/tat3.jpg'
      },{
        small: 'assets/resources/tat4.jpg',
        medium: 'assets/resources/tat4.jpg',
        big: 'assets/resources/tat4.jpg'
      }
      ,{
        small: 'assets/resources/tat5.jpg',
        medium: 'assets/resources/tat5.jpg',
        big: 'assets/resources/tat5.jpg'
      }
      ,{
        small: 'assets/resources/tat6.jpg',
        medium: 'assets/resources/tat6.jpg',
        big: 'assets/resources/tat6.jpg'
      }
      ,{
        small: 'assets/resources/tat7.jpg',
        medium: 'assets/resources/tat7.jpg',
        big: 'assets/resources/tat7.jpg'
      }
      ,{
        small: 'assets/resources/tat1.jpg',
        medium: 'assets/resources/tat1.jpg',
        big: 'assets/resources/tat1.jpg'
      }
      ,{
        small: 'assets/resources/tat2.jpg',
        medium: 'assets/resources/tat2.jpg',
        big: 'assets/resources/tat2.jpg'
      }
      ,{
        small: 'assets/resources/tat3.jpg',
        medium: 'assets/resources/tat3.jpg',
        big: 'assets/resources/tat3.jpg'
      },{
        small: 'assets/resources/tat3.jpg',
        medium: 'assets/resources/tat3.jpg',
        big: 'assets/resources/tat3.jpg'
      },{
        small: 'assets/resources/tat4.jpg',
        medium: 'assets/resources/tat4.jpg',
        big: 'assets/resources/tat4.jpg'
      },{
        small: 'assets/resources/tat5.jpg',
        medium: 'assets/resources/tat5.jpg',
        big: 'assets/resources/tat5.jpg'
      }
    ];
  }

}
