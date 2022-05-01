/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ListarVehiculosService } from './listar-vehiculos.service';

describe('Service: ListarVehiculos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListarVehiculosService]
    });
  });

  it('should ...', inject([ListarVehiculosService], (service: ListarVehiculosService) => {
    expect(service).toBeTruthy();
  }));
});
