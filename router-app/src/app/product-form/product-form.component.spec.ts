import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFOrmComponent } from './product-form.component';

describe('ProductFOrmComponent', () => {
  let component: ProductFOrmComponent;
  let fixture: ComponentFixture<ProductFOrmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductFOrmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFOrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
