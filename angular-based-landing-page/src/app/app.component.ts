import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { PerformanceStatsComponent } from './components/performance-stats/performance-stats.component';
import { CollectionComponent } from './components/collection/collection.component';
import { TechnicalExcellenceComponent } from './components/technical-excellence/technical-excellence.component';
import { ExperienceCenterComponent } from './components/experience-center/experience-center.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    PerformanceStatsComponent,
    CollectionComponent,
    TechnicalExcellenceComponent,
    ExperienceCenterComponent,
    FooterComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-navbar />
    <main>
      <app-hero />
      <app-performance-stats />
      <app-collection />
      <app-technical-excellence />
      <app-experience-center />
    </main>
    <app-footer />
  `,
})
export class AppComponent {}
