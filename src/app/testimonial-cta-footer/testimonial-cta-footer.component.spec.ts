import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialCtaFooterComponent } from './testimonial-cta-footer.component';

describe('TestimonialCtaFooterComponent', () => {
  let component: TestimonialCtaFooterComponent;
  let fixture: ComponentFixture<TestimonialCtaFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestimonialCtaFooterComponent]
    });
    fixture = TestBed.createComponent(TestimonialCtaFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
