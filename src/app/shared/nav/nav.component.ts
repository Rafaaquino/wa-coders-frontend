import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      .dark-modal .modal-content {
        background-color: transparent;
        color: white;
        border-radius: 10px;
      }
      .dark-modal .modal-header {
        border: none;
      }
      .dark-modal .close {
        color: white;
      }
    `,
  ],
})

/**
 * Index-1 component
 */
export class NavComponent implements OnInit {
  id = 'JlvxDa7Sges';

  private player;
  private ytEvent;
  constructor(private modalService: NgbModal) {}
  currentSection = 'home';

  ngOnInit(): void {}
  /**
   * Window scroll method
   */
  // tslint:disable-next-line: typedef
  windowScroll() {
    const navbar = document.getElementById('navbar');
    if (
      document.body.scrollTop > 40 ||
      document.documentElement.scrollTop > 40
    ) {
      navbar.style.backgroundColor = '#272a33';
      navbar.style.padding = '10px';
    } else {
      navbar.style.backgroundColor = '';
      navbar.style.padding = '20px';
    }
  }

  /**
   * Open modal
   * @param content content
   */
  openModal(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg' });
  }
  onStateChange(event) {
    this.ytEvent = event.data;
  }
  savePlayer(player) {
    this.player = player;
  }
  playVideo() {
    this.player.playVideo();
  }
  pauseVideo() {
    this.player.pauseVideo();
  }

  /**
   * Section changed method
   * @param sectionId specify the current sectionID
   */
  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }
  /**
   * Toggle navbar
   */
  toggleMenu() {
    document.getElementById('navbarCollapse').classList.toggle('show');
  }
}
