import { TokenBreakdown } from './model.definitions';

export interface Event {
    type: string;
    sessionId: string;
}

export interface AgentEvent extends Event {
    role: 'primary' | 'subagent';
    name: string;
    model: string;
    provider: string;
    prompt: string;
    cost?: number;
    tokens?: number;
    targetSessionId?: string;
}

export interface ToolEvent extends Event {
    name: string;
    callId: string;
    input?: any;
    status: 'running' | 'completed';
}

export interface StatusEvent extends Event {
    status: 'step-start' | 'reasoning' | 'step-finish';
    tokens?: TokenBreakdown;
    cost?: number;
}

export interface MessageEvent extends Event {
    content: string;
}

export interface TodoEvent extends Event {
    todos: {
        content: string;
        priority: 'high' | 'medium' | 'low';
        status: 'pending' | 'in_progress' | 'completed' | 'cancelled';
    }[]
}

export type EventType = 'agent' | 'tool' | 'status' | 'message' | 'todo';
