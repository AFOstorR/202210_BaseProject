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
  vehiculosMock: Array<Vehiculo> =[];
  estadisticas: Array<Array<any>>=[[]]

  constructor(private listarVehiculosService: ListarVehiculosService) { }

  ngOnInit() {
    this.getVehiculos();
  }

  getVehiculos(){
    this.listarVehiculosService.getVehiculos().subscribe( (vehiculos) => {
      this.sacarEstadisticas(vehiculos);
      this.vehiculos = vehiculos;
   });
  }

  sacarEstadisticas(vehiculos: Array<Vehiculo>){
    let marcas: Array<string> = [];
    let estadisticas: Array<Array<any>> =[[]];
    for(let i=0; i<vehiculos.length; i++ ){
      if (marcas.filter((x) => x==vehiculos[i].marca && x.length>0).length == 0){
        marcas.push(vehiculos[i].marca);
      }
    }
    for(let i=0; i<marcas.length; i++){
      let nVehiculos = 0;
      for(let j=0; j<vehiculos.length; j++){
        if (vehiculos[j].marca==marcas[i]){
          nVehiculos++;
        }
      }
      estadisticas.push([marcas[i], nVehiculos]);
    }
    this.estadisticas = estadisticas;
  }

}
