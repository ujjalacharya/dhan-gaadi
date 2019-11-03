const CronJob = require("cron").CronJob;
const Bus = require("../models/Bus");

exports.checkDateAvailability = date => {
  if (new Date(date) < new Date()) {
    return false;
  } else {
    return true;
  }
};

exports.runEveryMidnight = () => {

  new CronJob(
    "0 0 0 * * *",
    async function() {
      console.log("You will see this message every midnight", new Date());
      const buses = await Bus.find({});

      buses.map(async bus => {
     
       if(bus.journeyDate){
         if(!exports.checkDateAvailability(bus.journeyDate)){
           bus.isAvailable = false;
         }
       }
     
       await bus.save();
     
       })
    },
    null,
    true,
    "Asia/Katmandu"
  );
};
