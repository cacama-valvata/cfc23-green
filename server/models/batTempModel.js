// export default db;
module.exports = (sequelize, Sequelize) => {
  const Data = sequelize.define('sqlt_data_1_2023_11', {
    tagid: {
      type: Sequelize.INTEGER
    },
    floatvalue: {
      type: Sequelize.FLOAT
    }
  },
  {
    freezeTableName: true
  });

  return Data;
}