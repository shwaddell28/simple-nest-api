import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { AppResponse } from './app.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getResponse(): AppResponse {
    return this.appService.getResponse();
  }
}
