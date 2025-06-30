import express from 'express';
import { UserRepository } from '../repositories/UserRepository';
import { UserService } from '../services/UserService';
import { EmailService } from '../services/EmailService';
import { PDFReportService } from '../services/PDFReportService';
import { UserController } from '../controllers/UserController';

const repo = new UserRepository();
const userService = new UserService(repo);
const emailService = new EmailService();
const pdfService = new PDFReportService();

const controller = new UserController(userService, emailService, pdfService);

const router = express.Router();

router.post('/register', controller.register);
router.post('/login', controller.login);
router.get('/', controller.list);
router.put('/:id', controller.update);
router.delete('/:id', controller.remove);
router.get('/report/pdf', controller.report);

export default router;
