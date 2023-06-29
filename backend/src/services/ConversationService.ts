import axios from 'axios';

class ConversationService {
  private apiBaseUrl: string;

  constructor(apiBaseUrl: string) {
    this.apiBaseUrl = apiBaseUrl;
  }

  public async createConversation(userId: string): Promise<any> {
    try {
      const response = await axios.post(`${this.apiBaseUrl}/conversations`, { userId });
      return response.data;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  public async getConversations(userId: string): Promise<any> {
    try {
      const response = await axios.get(`${this.apiBaseUrl}/conversations?userId=${userId}`);
      return response.data;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  public async getConversation(id: string): Promise<any> {
    try {
      const response = await axios.get(`${this.apiBaseUrl}/conversations/${id}`);
      return response.data;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}

export { ConversationService };
