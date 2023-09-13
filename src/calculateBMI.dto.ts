import { IsNotEmpty, IsEnum } from 'class-validator';

enum Gender {
  'male',
  'female',
}

export class CalculateBMIDto {
  @IsNotEmpty()
  height: string;
  @IsNotEmpty()
  weight: string;
  @IsNotEmpty()
  age: number;
  @IsNotEmpty()
  @IsEnum(Gender)
  gender: Gender;
}
