import express, { Request, Response } from 'express';
import { ConversationsController } from '../controllers/ConversationsController';
import { ConversationService } from '../services/ConversationService';
// get the API_BASE_URL from .env
const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:8090/api';

const router = express.Router();

const conversationService = new ConversationService(API_BASE_URL);
const conversationsController = new ConversationsController(conversationService);

router.post('/api/conversations', (req: Request, res: Response) => conversationsController.createConversation(req, res));
router.get('/api/conversations', (req: Request, res: Response) => conversationsController.getConversations(req, res));
router.get('/api/conversations/:id', (req: Request, res: Response) => conversationsController.getConversation(req, res));

export default router;
