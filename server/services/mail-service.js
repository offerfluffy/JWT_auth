const nodemailer = require("nodemailer");

class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });
  }

  async sendActivationMail(to, link) {
    console.log("SMTP Host:", process.env.SMTP_HOST);

    try {
      const info = await this.transporter.sendMail({
        from: process.env.SMTP_USER,
        to,
        subject: "Activation of account on " + process.env.API_URL,
        text: "",
        html: `
        <div>
          <h1>To activate click the link</h1>
          <a href="${link}">${link}</a>
        </div>
      `,
      });

      console.log("INFO", info.messageId);
    } catch (error) {
      console.log("ERROR sending mail", error);
    }
  }
}

module.exports = new MailService();
