import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudAddComponent } from './crud-add.component';

describe('CrudAddComponent', () => {
  let component: CrudAddComponent;
  let fixture: ComponentFixture<CrudAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrudAddComponent]
    });
    fixture = TestBed.createComponent(CrudAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
