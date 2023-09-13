import { Body, Controller, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { CalculateBMIDto } from './calculateBMI.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('calculateBMI')
  calculateBMI(@Body() calculateBMIDto: CalculateBMIDto): {
    status: string;
    bmi: number;
    message: string;
  } {
    return this.appService.calculateBMI(calculateBMIDto);
  }
}
