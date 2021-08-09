import { TestBed } from '@angular/core/testing';

import { NgxTypedFormBuilder } from './ngx-typed-form-builder.service';

describe('NgxTypedFormBuilderService', () => {
  let service: NgxTypedFormBuilder;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxTypedFormBuilder);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
