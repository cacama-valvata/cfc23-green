const Sequelize = require("sequelize");
const dotenv = require('dotenv');
path = require('path');

dotenv.config({ path: path.join(__dirname, '../../config.env') });

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "mysql"
  }
);

const sequelizeDer = new Sequelize(
  process.env.DER_DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "mysql"
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.sequelizeDer = sequelizeDer;

db.users = require('./userModel.js')(sequelize, Sequelize);
db.batteryTemp = require('./batTempModel.js')(sequelizeDer, Sequelize);

module.exports = db;