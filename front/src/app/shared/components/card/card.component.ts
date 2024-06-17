import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgClass, RouterModule],
  template: `
    <div class="card">
      <div
        [ngClass]="{
          ' card-blue': accountType === 'Cuenta de Ahorro',
          ' card-pink': accountType === 'Cuenta Corriente',
          ' card-green': accountType === 'Tarjeta de Crédito'
        }"
      >
        <div class="card-header">
          <p>{{ id }}</p>
          <p>{{ accountType }}</p>
        </div>
        <div class="card-body">
          <h3>$ {{ cardNumber }}</h3>
          <p>Saldo disponible</p>
        </div>
        <div class="card-footer">
           <a class="btn" [routerLink]="['/details', id]">Ver Detalles</a>
        </div>
      </div>
    </div>
    
  `,
  styles: [
    `
      .card {
        height: auto;
        margin: 10px auto;
        
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        transition: transform 0.2s;
      }
      .card-blue {
        background-image: url('/assets/background.png');
        background-size: cover;
        padding: 20px;
        color: white;
        background-color: var(--primary-color);
        border: 1px solid #ddd;
        border-radius: 10px;
      }
      .card-pink {
        padding: 20px;
        color: white;
        background-image: url('/assets/background-3.png');
        background-size: cover;
        background-color: var(--pink-color);
        border: 1px solid #ddd;
        border-radius: 10px;
      }
      .card-green {
        padding: 20px;
        background-color: var(--green-color);
        background-size: cover;
        color: white;
        background-image: url('/assets/background-2.png');
        border: 1px solid #ddd;
        border-radius: 10px;
      }
      .card:hover {
        transform: translateY(-0.5rem);
      }

      .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
      }
      .card-body {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .card-body h3 {
        font-size: 2.25rem;
        font-weight: 700;
        margin-bottom: 0.75rem;
        color: white;
      }

      .card-footer {
        padding: 0px;
        padding-top: 20px;
        text-align: center;
      }

      .btn {
        background: #ffffff17;
        border: 2px solid #fff;
        color: #fff;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
      }

      .btn:hover {
    
        background: #ffffff37

        
      }
    `,
  ],
})
export class CardComponent {
  @Input() id: string = '';
  @Input() accountType: string = '';
  @Input() cardNumber: Number = 0;

 
}
