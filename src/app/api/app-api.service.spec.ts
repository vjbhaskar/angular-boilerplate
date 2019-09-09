import { Injectable } from '@angular/core';
import { CommonApiService } from './common-api.service';

@Injectable()
export class GradingAppApiService {

  constructor(private api: CommonApiService) { }

  login(data) {
    return this.api.postRequest('auth-jwt/', data);
  };
}