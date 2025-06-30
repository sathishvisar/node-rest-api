import { IEmailService } from '../interfaces/IEmailService';

export class EmailService implements IEmailService {
  async send(to: string, subject: string, body: string): Promise<void> {
    console.log(`Sending email to ${to}: ${subject}\n${body}`);
    // Integrate with nodemailer or external service
  }
}
