
import { Options, Sequelize } from 'sequelize';
import dbConfig from '@Config/db.config';



const sequelize = new Sequelize(dbConfig.development as Options);



export default sequelize;