import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
/**
 * Footer component
 */
export class SidebarComponent implements OnInit {
  @ViewChild('openBtn', { static: true }) openBtn!: ElementRef;
  @ViewChild('sidebar', { static: true }) sidebar!: ElementRef;

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.openBtn.nativeElement.addEventListener('click', () => {
      this.sidebar.nativeElement.classList.toggle('open-sidebar');
    });
  }
}
