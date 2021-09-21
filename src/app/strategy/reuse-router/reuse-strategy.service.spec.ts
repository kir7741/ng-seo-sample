import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ReuseStrategySerivce } from './reuse-strategy.service';

describe('ReuseStrategySerivce', () => {

  let service: ReuseStrategySerivce;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RouterTestingModule
    ],
    providers: [
      ReuseStrategySerivce
    ]
  }));

  beforeEach(() => {
    service = TestBed.inject(ReuseStrategySerivce);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
