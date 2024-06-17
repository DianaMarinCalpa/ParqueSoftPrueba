import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  template: `
    <div class="header">
      <h2>{{title}}</h2>
      <p>
        {{description}}
      </p>
    </div>
  `,
  styles: [
    `
      .header {
        text-align: left;
        margin-bottom: 2rem;
      }

      .header h2 {
        font-size: 1.25rem;
        font-weight: 700;
        color: var(--primary-color);
        margin-bottom: 1rem;
      }

      .header p {
        font-size: 1.125rem;
        color: #718096;
      }
    `,
  ],
})
export class TitleComponent {
  @Input() title: string='';
  @Input() description: string='';
}
