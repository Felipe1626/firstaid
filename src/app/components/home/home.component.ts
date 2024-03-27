import { Component } from '@angular/core';
import { faBackwardStep, faChevronLeft, faChevronRight, faForwardStep } from '@fortawesome/free-solid-svg-icons';
import { slider } from 'src/app/models/slider.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  currentVIndex: number = 0;
  faAngleRight = faChevronRight
  faAngleLeft = faChevronLeft
  itemsVToShow: number = 4; 
  
  videos: slider[] = [
    {'name': 'Vista de Usuario','url': '../../../assets/../../../assets/7.png' , 'link': 'https://template-pi-six.vercel.app'},
    {'name': 'Pedidos','url': '../../../assets/../../../assets/7.png', 'link': 'https://template-pi-six.vercel.app'},
    {'name': 'Nuevos Productos','url': '../../../assets/../../../assets/7.png' , 'link': 'https://template-pi-six.vercel.app/admin'},
    {'name': 'Administración de Productos','url': '../../../assets/../../../assets/7.png' , 'link': 'https://template-pi-six.vercel.app/admin'},
    {'name': 'Administración de Reseñas','url': '../../../assets/../../../assets/8.png' , 'link': 'https://template-pi-six.vercel.app/admin'},
    {'name': 'Disponibilidad de Productos','url': '../../../assets/../../../assets/9.png' , 'link': 'https://template-pi-six.vercel.app/admin'},
    {'name': 'Administración de Promociones','url': '../../../assets/../../../assets/10.png' , 'link': 'https://template-pi-six.vercel.app/admin'}  

  ];


  get displayVideos(): slider[]{

    const length = this.videos.length;
    const startIndex = this.currentVIndex;
    const endIndex = (this.currentVIndex + this.itemsVToShow) % length;

    let displayedVideos: slider[];

    if (startIndex < endIndex) {
      displayedVideos = this.videos.slice(startIndex, endIndex);
    } else {
      displayedVideos = [...this.videos.slice(startIndex), ...this.videos.slice(0, endIndex)];
    }
    
    return displayedVideos;
  }


  selectVideo(name: string){
    if (name == 'Vista de Usuario') {
      this.currentVIndex = 0
    }

    if (name == 'Pedidos') {
      this.currentVIndex = 1
    } 
    
    if (name == 'Nuevos Productos') {
      this.currentVIndex = 2
    }

    if (name == 'Administración de Productos') {
      this.currentVIndex = 3
    } 

    if (name == 'Administración de Reseñas') {
      this.currentVIndex = 4
    } 

    if (name == 'Administración de Promociones') {
      this.currentVIndex = 6
    } 

    if (name == 'Disponibilidad de Productos') {
      this.currentVIndex = 5
    } 
  }

  nextV() {
    this.currentVIndex = (this.currentVIndex + 1) % this.videos.length;
  }

  prevV() {
    this.currentVIndex = (this.currentVIndex - 1 + this.videos.length) % this.videos.length;
  }
}
