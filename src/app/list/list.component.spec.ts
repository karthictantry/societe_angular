import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize  and dataSource at ngOnInit', () => {
    let spy = spyOn(component, 'ngOnInit').and.callThrough();
    expect(component.ngOnInit).toHaveBeenCalled();
    expect(component.employees).toBeDefined();
    expect(component.dataSource).toBeDefined();
  });
});
