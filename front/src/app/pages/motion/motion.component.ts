import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MotionService } from '../../core/services/motion.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { TitleComponent } from '../../shared/components/title/title.component';
import { ContainerComponent } from '../../shared/components/container/container.component';

@Component({
  selector: 'app-motion',
  standalone: true,
  imports: [CommonModule,  TitleComponent, RouterModule, ContainerComponent],
  templateUrl: './motion.component.html',
  styleUrl: './motion.component.css',
})
export class MotionComponent {
  id: number = 0;
  datosDelBackend: any;
  constructor(private servicio: MotionService,private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.params['id']);
    this.servicio.obtenerDatos(this.id).subscribe(
      (data) => {
        this.datosDelBackend = data;
        console.log(data);
      },
      (error) => {
        console.error('Error al obtener datos del backend:', error);
      }
    );
  }
}
