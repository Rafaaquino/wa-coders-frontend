import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
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
export class IndexComponent implements OnInit {
  id = 'JlvxDa7Sges';
  logged: boolean;
  private player;
  private ytEvent;
  currentSection = 'home';

  constructor(private route: Router, private modalService: NgbModal) {}

  ngOnInit() {
    this.verifyToken();
  }

  /**
   * Window scroll method
   */
  // tslint:disable-next-line: typedef
  verifyToken() {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    if (token && userId) {
      this.logged = true;
    }
  }

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

  navigate() {
    this.route.navigateByUrl('/login');
  }

  navigateDash() {
    this.route.navigateByUrl('/dashboard');
  }
}
