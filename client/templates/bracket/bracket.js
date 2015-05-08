var dateNow = new Date()
var lockDate = new Date("February 28, 2015 14:00:00")
function afterLockDate() {
  return dateNow > lockDate
}

Template.bracket.helpers({
  "predictionsLocked": function() {
    return afterLockDate()
  }
});

Template.bracket.events({
  'submit form': function(e) {
    e.preventDefault();

    var predictions = {
      winner:     $(e.target).find('[name=winner]').val(),
      finalist1:  $(e.target).find('[name=finalist1]').val(),
      finalist2:  $(e.target).find('[name=finalist2]').val(),
      A1B4:       $(e.target).find('[name=A1B4]').val(),
      A3B2:       $(e.target).find('[name=A3B2]').val(),
      A2B3:       $(e.target).find('[name=A2B3]').val(),
      A4B1:       $(e.target).find('[name=A4B1]').val(),
      userId:     Meteor.userId(),
      createdBy:  Meteor.user().username
    }

    var existingPredictions = Predictions.find({createdBy: Meteor.user().username}).fetch();

    if (existingPredictions == false) {
      Predictions.insert(predictions);
    } else {
      Predictions.update({_id: existingPredictions[0]._id}, predictions);
    }
    Router.go("predictions");
  }
});