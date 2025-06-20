import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BairrosComponent } from './cadastro.bairros.component';

describe('BairrosComponent', () => {
  let component: BairrosComponent;
  let fixture: ComponentFixture<BairrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BairrosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BairrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
