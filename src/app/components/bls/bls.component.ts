import { Component } from '@angular/core';
import { faArrowRight, faCaretRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { slider } from 'src/app/models/slider.model';

@Component({
  selector: 'app-bls',
  templateUrl: './bls.component.html',
  styleUrls: ['./bls.component.scss']
})
export class BLSComponent {
  faCaretRight = faCaretRight
  faAngleRight = faChevronRight
  faAngleLeft = faChevronLeft
  faArrowRight = faArrowRight
  currentVIndex: number = 0;
  currentHIndex: number = 0;
  currentCPR: number = 0;
  itemsVToShow: number = 4; 
  CPRtoShow: number = 3;
  videos: slider[] = [
    {'name': 'Vista de Usuario','url': '../../../assets/22.png' , 'link': 'https://template-pi-six.vercel.app'},
    {'name': 'Pedidos','url': '../../../assets/24.png', 'link': 'https://template-pi-six.vercel.app'},
    {'name': 'Nuevos Productos','url': '../../../assets/27.png' , 'link': 'https://template-pi-six.vercel.app/admin'},
    {'name': 'Administración de Productos','url': '../../../assets/29.png' , 'link': 'https://template-pi-six.vercel.app/admin'},
  ];

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

  CRPV: slider[] = [
    {'name': '1.Abrir Vias Respiratorias','url': '../../../assets/EXEL.png' , 'link': 'https://template-pi-six.vercel.app'},
    {'name': '2.Verificar Respiracion','url': '../../../assets/VOS.png', 'link': 'https://template-pi-six.vercel.app'},
    {'name': '3.Realizar compresiones toraicas','url': '../../../assets/Comprsiones.png' , 'link': 'https://template-pi-six.vercel.app/admin'},
    {'name': '4.Respiraciones de rescate','url': '../../../assets/Respiracion artificial.png' , 'link': 'https://template-pi-six.vercel.app/admin'},
  ];

  CRP(name: number){
    if (name == 1) {
      this.currentCPR = 0
    }

    if (name == 2) {
      this.currentCPR = 1
    } 
    
    if (name == 3) {
      this.currentCPR = 2
    }

    if (name == 4) {
      this.currentCPR = 3
    } 
  }

  displayH: slider[] = [
    {'name': '1.Abrir Vias Respiratorias','url': '../../../assets/EXEL.png' , 'link': 'https://template-pi-six.vercel.app'},
    {'name': '2.Verificar Respiracion','url': '../../../assets/VOS.png', 'link': 'https://template-pi-six.vercel.app'},
    {'name': '3.Realizar compresiones toraicas','url': '../../../assets/Comprsiones.png' , 'link': 'https://template-pi-six.vercel.app/admin'},
    {'name': '4.Respiraciones de rescate','url': '../../../assets/Respiracion artificial.png' , 'link': 'https://template-pi-six.vercel.app/admin'},
  ];

  Hdisplayed(name: number){
    if (name == 1) {
      this.currentHIndex = 0
    }

    if (name == 2) {
      this.currentHIndex = 1
    } 
    
    if (name == 3) {
      this.currentHIndex = 2
    }

    if (name == 4) {
      this.currentHIndex = 3
    } 
  }


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

  get displayCPR(): slider[]{

    const length = this.CRPV.length;
    const startIndex = this.currentCPR;
    const endIndex = (this.currentCPR + this.CPRtoShow) % length;

    let displayedCRP: slider[];

    if (startIndex < endIndex) {
      displayedCRP = this.CRPV.slice(startIndex, endIndex);
    } else {
      displayedCRP = [...this.CRPV.slice(startIndex), ...this.CRPV.slice(0, endIndex)];
    }
    
    return displayedCRP;
  }

  nextV() {
    this.currentVIndex = (this.currentVIndex + 1) % this.videos.length;
  }

  prevV() {
    this.currentVIndex = (this.currentVIndex - 1 + this.videos.length) % this.videos.length;
  }
  nextH() {
    this.currentHIndex = (this.currentHIndex + 1) % this.displayH.length;
  }

  prevH() {
    this.currentHIndex = (this.currentHIndex - 1 + this.displayH.length) % this.displayH.length;
  }
  nextCRP() {
    this.currentCPR = (this.currentCPR + 1) % this.CRPV.length;
  }

  prevCRP() {
    this.currentCPR = (this.currentCPR - 1 + this.CRPV.length) % this.CRPV.length;
  }

  ngOnInit(){
    setInterval(() => {
      this.nextCRP()
      this.nextV()
    }, 20000);
  }
}