import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TranslationService } from '../../services/translation.service';

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
      .language-selector {
        display: flex !important;
        align-items: center;
        gap: 8px;
        margin-right: 15px;
        list-style: none;
        padding: 0;
        margin-bottom: 0;
      }
      .language-flag {
        cursor: pointer;
        opacity: 0.7;
        transition: opacity 0.3s, transform 0.2s;
        display: inline-block;
        font-size: 1.5em !important;
        line-height: 1em;
        border-radius: 4px;
        vertical-align: middle;
      }
      .language-flag:hover {
        opacity: 1;
        transform: scale(1.1);
      }
      .language-flag.active {
        opacity: 1;
        border: 2px solid #4341cc;
        border-radius: 4px;
        box-shadow: 0 0 8px rgba(67, 65, 204, 0.5);
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
  currentLanguage: string = 'pt';

  constructor(
    private route: Router,
    private modalService: NgbModal,
    private translationService: TranslationService
  ) {}

  ngOnInit() {
    this.verifyToken();
    this.currentLanguage = this.translationService.getCurrentLanguage();
  }

  changeLanguage(language: string): void {
    this.translationService.changeLanguage(language);
    this.currentLanguage = language;
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
