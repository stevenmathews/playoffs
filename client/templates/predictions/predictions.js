Template.predictions.helpers({
  "prediction": function() {
    return Predictions.find();
  },
  "userPrediction": function() {
    return Predictions.find();
  },
  "afterLockDate": function() {
    var dateNow = new Date()
    var lockDate = new Date("February 28, 2015 14:00:00")
    return dateNow > lockDate
  }
});