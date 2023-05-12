import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateAdvertDto } from './dto/create-advert.dto';
import { UpdateAdvertDto } from './dto/update-advert.dto';
import { Knex } from 'knex';

@Injectable()
export class AdvertService {
  constructor(@Inject('KnexConnection') private knex: Knex) {}
  async create(body: CreateAdvertDto, file: Express.Multer.File): Promise<any> {
    let { advert_buy, advert_sell, url } = body;
    let { filename } = file;

    let [rows] = await this.knex('advert')
      .insert({
        advert_buy,
        advert_sell,
        url,
        picture: filename,
      })
      .returning('*');

    return { message: 'posted', rows };
  }

  async findAll(): Promise<any> {
    let data = await this.knex('advert')
      .select('*')
      .orderBy('advert_id', 'asc');

    return { message: 'Adverts', data };
  }

  async findOne(id: string) {
    let data = await this.knex('advert').where({ advert_id: id }).first();

    if (!data) {
      throw new NotFoundException('Not Found');
    }

    return { message: 'advert', data };
  }

  async update(id: string, updateAdvertDto: UpdateAdvertDto) {
    let { advert_buy, advert_sell, url } = updateAdvertDto;
    let data = await this.knex('advert')
      .update({
        advert_buy,
        advert_sell,
        url,
      })
      .where({ advert_id: id })
      .returning('*');

    if (!data) {
      throw new NotFoundException('Not Found');
    }

    return { message: 'updated', data };
  }

  async remove(id: string) {
    await this.knex('advert').del().where({ advert_id: id });
    return { message: 'deleted' };
  }
}
