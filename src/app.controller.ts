import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { AppResponse } from './app.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): AppResponse {
    return this.appService.getResponse();
  }
}
