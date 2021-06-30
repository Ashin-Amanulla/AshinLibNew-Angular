import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorCollectionComponent } from './author-collection.component';

describe('AuthorCollectionComponent', () => {
  let component: AuthorCollectionComponent;
  let fixture: ComponentFixture<AuthorCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
