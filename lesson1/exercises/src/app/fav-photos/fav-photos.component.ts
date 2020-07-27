import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Random Images';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://i.redd.it/rm6sqwpmesb41.jpg';
  image3 = 'https://wl-brightside.cf.tsp.li/resize/728x/jpg/637/974/b84c0e573e91d52ded84291c09.jpg';

  constructor() { }

  ngOnInit() {
  }

}