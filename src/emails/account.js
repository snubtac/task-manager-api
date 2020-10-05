const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'cardoso528@gmail.com',
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}. Let us know how you get along with the app.`
  })
}

const sendGoodbyeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'cardoso528@gmail.com',
    subject: 'Account deletion',
    text: `Sorry to see you go, ${name}. Let us know how we can improve the app!`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendGoodbyeEmail
}
