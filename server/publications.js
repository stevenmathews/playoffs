var dateNow = new Date()
var lockDate = new Date("February 28, 2015 14:00:00")
function afterLockDate() {
  return dateNow > lockDate
}

if(afterLockDate()) {
  Meteor.publish('predictions', function() {
    return Predictions.find();
  });
} else {
  Meteor.publish('userPrediction', function() {
    return Predictions.find({userId: this.userId});
  });
}