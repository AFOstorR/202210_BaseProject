import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {faker} from '@faker-js/faker'
import { Vehiculo } from '../model/vehiculo';
import { ListarVehiculosComponent } from './listar-vehiculos.component';
import { Observable, of } from 'rxjs';
import { ListarVehiculosService } from '../service/listar-vehiculos.service';
import { FormsModule } from '@angular/forms';

export class MockVehiculosService {
  getVehiculos(): Observable<Array<Vehiculo>> {
    let vehiculos: Array<Vehiculo> = [];
    for (let i=0; i<3; i++){
      vehiculos.push(new Vehiculo(1,faker.company.companyName(), faker.commerce.product(),faker.datatype.string(),faker.datatype.number({'min': 1990, 'max': 2022}),faker.datatype.number({'min': 0, 'max': 1000000}),faker.word.noun(),faker.image.business()));
    }
    return of(vehiculos);
  }
}

describe('ListarVehiculosComponent', () => {
  let component: ListarVehiculosComponent;
  let fixture: ComponentFixture<ListarVehiculosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      providers:  [ { provide: ListarVehiculosService, useClass: MockVehiculosService }
      ],
      declarations: [ListarVehiculosComponent],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarVehiculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should mostrar la lista de los vehiculos', () => {
    expect(fixture.debugElement.nativeElement.querySelector('table.table-dark').childNodes.length).toBe(2);
    expect(fixture.debugElement.nativeElement.querySelector('#datos').childNodes.length).toBe(4);
  } );

  afterEach(() => {
    TestBed.resetTestingModule();
  });
});
