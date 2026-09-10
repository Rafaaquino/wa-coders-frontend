import { Component } from '@angular/core';

interface SapSolutionItem {
  key: 'reports' | 'payments' | 'clients' | 'projects';
  icon: string;
}

@Component({
  selector: 'app-sap-solution',
  templateUrl: './sap-solution.component.html',
  styleUrls: ['./sap-solution.component.css'],
})
export class SapSolutionComponent {
  displayModal = false;

  readonly items: SapSolutionItem[] = [
    { key: 'reports', icon: 'pe-7s-graph3' },
    { key: 'payments', icon: 'pe-7s-wallet' },
    { key: 'clients', icon: 'pe-7s-users' },
    { key: 'projects', icon: 'pe-7s-portfolio' },
  ];

  openModal(): void {
    this.displayModal = true;
  }
}
