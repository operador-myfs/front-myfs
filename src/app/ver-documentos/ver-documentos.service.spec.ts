import { TestBed } from '@angular/core/testing';

import { VerDocumentosService } from '../ver-documentos/ver-documentos.service';

describe('VerDocumentosService', () => {
  let service: VerDocumentosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerDocumentosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
