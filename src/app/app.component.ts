import { Component } from '@angular/core';
import { faBars, faBarsStaggered, faChevronUp, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first-aid';
  faBars = faBars
  faBarsStaggered = faBarsStaggered
  faXmark = faXmark
  faChevronUp = faChevronUp
  SVB: boolean = false
  isOpen: boolean = false
  about: boolean = false 

  openMenu(){
    this.isOpen = !this.isOpen
  }
}
