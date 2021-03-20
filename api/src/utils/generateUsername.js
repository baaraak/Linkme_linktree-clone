/**
 * Generate random username from email
 * admin@gmail.com -> admin-324583409583
 */
exports.generateUsername = (email) =>
  `${email.split("@")[0]}-${Math.round(Date.now() + Math.random())}`;
