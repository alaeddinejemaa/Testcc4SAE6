import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsComponentComponent } from './albums-component.component';

describe('AlbumsComponentComponent', () => {
  let component: AlbumsComponentComponent;
  let fixture: ComponentFixture<AlbumsComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumsComponentComponent]
    });
    fixture = TestBed.createComponent(AlbumsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
