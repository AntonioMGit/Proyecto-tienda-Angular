import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaCatalogoComponent } from './tienda-catalogo.component';

describe('TiendaCatalogoComponent', () => {
  let component: TiendaCatalogoComponent;
  let fixture: ComponentFixture<TiendaCatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiendaCatalogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiendaCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
