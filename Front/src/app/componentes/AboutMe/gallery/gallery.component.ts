import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/model/image';
import { ImageService } from 'src/app/service/image.service';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images: Image[] = [];
  selectedImage: Image;
  constructor(private imageService:ImageService) { }

  ngOnInit(): void {
    this.images = this.imageService.getImages();
  }

  onSelect(image: Image){
    this.selectedImage = image;
  }
}
