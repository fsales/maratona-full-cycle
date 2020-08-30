export default{
   type: process.env.TYPEORM_CONNECTION || 'mysql',
   host: process.env.TYPEORM_HOST,
   username: process.env.TYPEORM_USERNAME,
   password: process.env.TYPEORM_PASSWORD,
   database: process.env.TYPEORM_DATABASE,
   port: Number(process.env.TYPEORM_PORT),
   entities: [__dirname + '/../**/*.entity{.ts,.js}'],
   synchronize: process.env.TYPEORM_SYNCHRONIZE,
   migrations: process.env.TYPEORM_MIGRATIONS
}