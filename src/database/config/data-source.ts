import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { MainSeeder } from '../seeds/Main.seeder';

const port = Number(process.env.DB_PORT);

const options: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: port,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: true,
  entities: [`${__dirname}/../entities/*.{ts,js}`],
  migrations: [`${__dirname}/../migrations/*.{ts,js}`],
  seeds: [MainSeeder],
}

export const AppDataSource = new DataSource(options);
