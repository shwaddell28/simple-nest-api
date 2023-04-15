import { Injectable } from '@nestjs/common';
import { AppResponse } from './app.interface';

@Injectable()
export class AppService {
  getResponse(): AppResponse {
    const appResponse: AppResponse = {
      message: 'Automate all the things!',
      timestamp: Math.floor(Date.now() / 1000),
    };
    return appResponse;
  }
}
