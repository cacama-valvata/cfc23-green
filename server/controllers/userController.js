const catchAsync = require('../utils/catchAsync');
const db = require('../models');
const Battery = db.batteryTemp;
const Op = db.Sequelize.Op;

exports.getSQL = catchAsync(async (req, res, next) => {
  res.status(200).json({
    data: {
       data: [
         {avg_usage: 0, avg_pwr_gen: 0},
         {avg_usage: 0, avg_pwr_gen: 0},
         {avg_usage: 0, avg_pwr_gen: 0},
         {avg_usage: 0, avg_pwr_gen: 0},
         {avg_usage: 0, avg_pwr_gen: 0},
         {avg_usage: 0, avg_pwr_gen: 0},
         {avg_usage: 0, avg_pwr_gen: 0},
         {avg_usage: 0, avg_pwr_gen: 0},
         {avg_usage: 40, avg_pwr_gen: 96.4},
         {avg_usage: 47, avg_pwr_gen: 91.2},
         {avg_usage: 53, avg_pwr_gen: 90.5},
         {avg_usage: 0, avg_pwr_gen: 0}
       ]
     }
   });
});

exports.getBat = catchAsync(async (req, res, next) => {
  const TempData = await Battery.findOne({
    attributes: ['floatvalue'],
    where: {tagid: 15},
    order: [['t_stamp', 'desc']]
  });
  const EffData = await Battery.findOne({
    attributes: ['floatvalue'],
    where: {tagid: 19},
    order: [['t_stamp', 'desc']]
  })

  res.status(200).json({
    data: {
       temp: [{battery_temp: TempData.dataValues.floatvalue}],
       eff: [{inv_eff: Math.floor(EffData.dataValues.floatvalue * 100)}]
     }
   });
});
