import {
  IsString,
  IsNotEmpty,
  MinLength,
  IsNumberString,
  IsUrl,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAdvertDto {
  @ApiProperty({
    example: 'Advert Buy',
  })
  @IsNumberString()
  @MinLength(1)
  @IsNotEmpty()
  advert_buy: string;

  @ApiProperty({
    example: 'Advert sell',
  }) 
  @IsNumberString()
  @MinLength(1)
  @IsNotEmpty()
  advert_sell: string;

  @ApiProperty({
    example: 'Advert Url',
  })
  @IsString()
  @MinLength(1)
  @IsNotEmpty()
  @IsUrl()
  url: string;

  @ApiProperty({
    example: 'Advert Picture',
  })
  picture: string;
}
