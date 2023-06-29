import { Request, Response } from 'express';
import { ConversationService } from '../services/ConversationService';

class ConversationsController {
  private conversationService: ConversationService;

  constructor(conversationService: ConversationService) {
    this.conversationService = conversationService;
  }

  public async createConversation(req: Request, res: Response): Promise<void> {
    const { userId } = req.body;
    try {
      const conversation = await this.conversationService.createConversation(userId);
      res.status(201).json(conversation);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  public async getConversations(req: Request, res: Response): Promise<void> {
    const { userId } = req.params;
    try {
      const conversations = await this.conversationService.getConversations(userId);
      res.status(200).json(conversations);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  public async getConversation(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    try {
      const conversation = await this.conversationService.getConversation(id);
      res.status(200).json(conversation);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
}

export { ConversationsController };
