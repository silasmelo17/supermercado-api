
import { Options, Sequelize } from 'sequelize';
import dbConfig from '@Config/db.config';



interface EnvironmentOptions  {
    development: Options,
    production: Options
}

type EnvironmentNameOptions = 'development'| 'production';

const configurations = dbConfig as EnvironmentOptions;
const connectionName = (process.env.CONNECTION || 'development') as EnvironmentNameOptions
const connection: Options = configurations[connectionName];



const sequelize = new Sequelize(connection);

export default sequelize;
