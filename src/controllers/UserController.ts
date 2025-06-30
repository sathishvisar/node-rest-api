import { Request, Response } from 'express';
import { IUserService } from '../interfaces/IUserService';
import { IEmailService } from '../interfaces/IEmailService';
import { IPDFReportService } from '../interfaces/IPDFReportService';
import fs from 'fs';

export class UserController {
  constructor(
    private userService: IUserService,
    private emailService: IEmailService,
    private pdfService: IPDFReportService
  ) {}

  register = async (req: Request, res: Response) => {
    const user = await this.userService.register(req.body);
    await this.emailService.send(user.email, 'Welcome!', 'Thanks for joining.');
    res.status(201).json(user);
  };

  login = async (req: Request, res: Response) => {
    const token = await this.userService.login(req.body.email, req.body.password);
    res.json({ token });
  };

  list = async (req: Request, res: Response) => {
    const users = await this.userService.findAll();
    res.json(users);
  };

  update = async (req: Request, res: Response) => {
    const updated = await this.userService.update(req.params.id, req.body);
    res.json(updated);
  };

  remove = async (req: Request, res: Response) => {
    const deleted = await this.userService.delete(req.params.id);
    res.json({ success: deleted });
  };

  report = async (req: Request, res: Response) => {
    const users = await this.userService.findAll();
    const filePath = await this.pdfService.generateReport(JSON.stringify(users, null, 2));
    res.download(filePath);
  };
}
