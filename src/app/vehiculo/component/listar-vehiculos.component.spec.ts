import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {faker} from '@faker-js/faker'
import { Vehiculo } from '../model/vehiculo';
import { ListarVehiculosComponent } from './listar-vehiculos.component';

describe('ListarVehiculosComponent', () => {
  let component: ListarVehiculosComponent;
  let fixture: ComponentFixture<ListarVehiculosComponent>;



  export class MockVehiculosService {
    getAllVehiculos(): Observable<Array<Vehiculo>> {
      let vehiculos: Array<Vehiculoso> = [];
      return of(museos);
    }
  }
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarVehiculosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generar lista de vehiculos', () => {
    expect(component).toBeTruthy();
  });
});
