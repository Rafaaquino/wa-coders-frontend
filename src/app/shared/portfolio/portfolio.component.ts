import { Component } from '@angular/core';

type ProjectCategory = 'enterprise' | 'saas' | 'ai';
type Filter = 'all' | ProjectCategory;

interface PortfolioProject {
  key: string;
  category: ProjectCategory;
  logo: 'opportunity' | 'jurione' | 'upsee';
  url: string;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  displayModal = false;

  readonly filters: Filter[] = ['all', 'enterprise', 'saas', 'ai'];
  activeFilter: Filter = 'all';

  readonly projects: PortfolioProject[] = [
    {
      key: 'opportunity',
      category: 'enterprise',
      logo: 'opportunity',
      url: 'https://www.getopportunity.com.br/',
    },
    {
      key: 'jurione',
      category: 'saas',
      logo: 'jurione',
      url: 'https://jurione.com.br/',
    },
    {
      key: 'upsee',
      category: 'ai',
      logo: 'upsee',
      url: 'https://www.upsee.com.br/',
    },
  ];

  setFilter(filter: Filter): void {
    this.activeFilter = filter;
  }

  get filteredProjects(): PortfolioProject[] {
    return this.activeFilter === 'all'
      ? this.projects
      : this.projects.filter((project) => project.category === this.activeFilter);
  }

  openModal(): void {
    this.displayModal = true;
  }
}
