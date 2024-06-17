import { Component } from '@angular/core';
import { MotionComponent } from '../motion/motion.component';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../shared/components/card/card.component';
import { TitleComponent } from '../../shared/components/title/title.component';
import { AccountService } from '../../core/services/account.service';
import { ContainerComponent } from '../../shared/components/container/container.component';
import { GridComponent } from '../../shared/components/grid/grid.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule,
    MotionComponent,
    CardComponent,
    TitleComponent,
    ContainerComponent,
    GridComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  datosDelBackend: any;
  constructor(private servicio: AccountService) {}

  ngOnInit() {
    this.servicio.obtenerDatos().subscribe(
      (data) => {
        this.datosDelBackend = data.sort(
          (a, b) => b.valorDisponible - a.valorDisponible
        );
      },
      (error) => {
        console.error('Error al obtener datos del backend:', error);
      }
    );
  }
}
