import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../model/vehiculo'
import { ListarVehiculosService } from '../service/listar-vehiculos.service';

@Component({
  selector: 'app-listar-vehiculos',
  templateUrl: './listar-vehiculos.component.html',
  styleUrls: ['./listar-vehiculos.component.css']
})

export class ListarVehiculosComponent implements OnInit {
  vehiculos: Array<Vehiculo> = [];

  constructor(private listarVehiculosService: ListarVehiculosService) { }

  ngOnInit() {
    this.getVehiculos()
  }

  getVehiculos(){
    this.listarVehiculosService.getVehiculos().subscribe( (vehiculos) => this.vehiculos = vehiculos);
  }

}
