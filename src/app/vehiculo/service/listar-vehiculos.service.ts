import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Vehiculo } from '../model/vehiculo';
import { environment } from '../../../../src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListarVehiculosService {
  constructor(private http: HttpClient) {}

  getVehiculos(): Observable<Vehiculo[]>{
  return this.http.get<Vehiculo[]>(environment.baseUrl);
  }
}
