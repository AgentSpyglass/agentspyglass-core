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
}

export interface ToolEvent extends Event {
    name: string;
    callId: string;
    input?: any;
    status: 'running' | 'completed';
}

export interface StatusEvent extends Event {
    status: 'step-start' | 'reasoning' | 'step-finished';
}

export interface MessageEvent extends Event {
    content: string;
}

export type EventType = 'agent' | 'tool' | 'status' | 'message';
