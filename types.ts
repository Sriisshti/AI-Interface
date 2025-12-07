// lib/types.ts

export interface AIModel {
  id: string;
  name: string;
  provider: string;
  maxTokens: number;
}

export interface PromptTemplate {
  id: string;
  name: string;
  content: string;
  createdAt: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}

export interface Parameters {
  temperature: number;
  maxTokens: number;
  topP: number;
  frequencyPenalty: number;
}

export interface AppState {
  selectedModel: string;
  prompt: string;
  parameters: Parameters;
  messages: ChatMessage[];
  templates: PromptTemplate[];
  theme: 'light' | 'dark';
}
