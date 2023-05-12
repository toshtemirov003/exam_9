import { Injectable, Inject } from '@nestjs/common';
import { Knex } from 'knex';

@Injectable()
export class AppService {
  constructor(@Inject('KnexConnection') private knex: Knex) {}

  getHello(): string {
    return 'Hello World!';
  }
}
