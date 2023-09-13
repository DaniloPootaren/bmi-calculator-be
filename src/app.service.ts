import { Injectable } from '@nestjs/common';
import { CalculateBMIDto } from './calculateBMI.dto';

@Injectable()
export class AppService {
  calculateBMI(data: CalculateBMIDto): {
    status: string;
    bmi: number;
    message: string;
  } {
    const { height, weight } = data;
    const heightInMeters = (height as any) / 100;
    const bmi = (weight as any) / (heightInMeters * heightInMeters);
    let status = '';
    let message = '';

    if (bmi < 18.5) {
      status = 'underweight';
      message =
        'You are underweight. You may want to consider gaining some weight for better health.';
    } else if (bmi < 24.9) {
      status = 'normal';
      message = 'You have a normal body weight. Good job!';
    } else if (bmi < 29.9) {
      status = 'overweight';
      message =
        'You are overweight. Consider maintaining a balanced diet and regular exercise.';
    } else {
      status = 'obese';
      message =
        'You are obese. It is important to consult a healthcare professional for guidance.';
    }

    return { status, bmi, message };
  }
}
