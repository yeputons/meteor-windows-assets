if (Meteor.isServer) {
  console.log(Assets.getText('directory\\file.txt'));
  console.log(Assets.getText('directory/file.txt'));
}
