import { Injectable } from '@angular/core';
import { Image } from '../model/image';
@Injectable({
  providedIn: 'root'
})
export class ImageService {
  images: Image[] = [
    new Image ('1', 'primera imagen', 'descripcion', '../../../../../assets/Certificados/algoritmosDiagramaFlujos.jpg', '../../../../../assets/Certificados/algoritmosDiagramaFlujos.jpg'),
    new Image ('2', 'primera imagen', 'descripcion', '../../../../../assets/Certificados/computacionBasica.jpg', '../../../../../assets/Certificados/computacionBasica.jpg'),
    new Image ('3', 'primera imagen', 'descripcion', '../../../../../assets/Certificados/diploma-solidity-celo.jpg', '../../../../../assets/Certificados/diploma-solidity-celo.jpg'),
    new Image ('4', 'primera imagen', 'descripcion', '../../../../../assets/Certificados/introReact.jpg', '../../../../../assets/Certificados/introReact.jpg'),
    new Image ('5', 'primera imagen', 'descripcion', '../../../../../assets/Certificados/introWeb.jpg', '../../../../../assets/Certificados/introWeb.jpg'),
    new Image ('6', 'primera imagen', 'descripcion', '../../../../../assets/Certificados/pensamientoLogicoEstructuras.jpg', '../../../../../assets/Certificados/pensamientoLogicoEstructuras.jpg'),
    new Image ('7', 'primera imagen', 'descripcion', '../../../../../assets/Certificados/pensamientoLogicoLenguajes.jpg', '../../../../../assets/Certificados/pensamientoLogicoLenguajes.jpg'),
    new Image ('8', 'primera imagen', 'descripcion', '../../../../../assets/Certificados/preworkWindows.jpg', '../../../../../assets/Certificados/preworkWindows.jpg'),
    new Image ('9', 'primera imagen', 'descripcion', '../../../../../assets/Certificados/programacionBasica.jpg', '../../../../../assets/Certificados/programacionBasica.jpg'),
    new Image ('10', 'primera imagen', 'descripcion', '../../../../../assets/Certificados/programacionBasica.jpg', '../../../../../assets/Certificados/git&github.jpg')
  ]
  constructor() { }
    getImages(){
      return this.images;
    }
}

