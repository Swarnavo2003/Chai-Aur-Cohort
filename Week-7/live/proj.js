async function registerUser() {
  await collectData();
  validateUserEmail();

  await insertInDb();

  sendEmail();
  sendPushNotification();
}
