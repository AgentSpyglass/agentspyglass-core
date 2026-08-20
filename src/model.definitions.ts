export type TokenBreakdown = {
    total: number;
    input: number;
    output: number;
    reasoning: number;
    cache: { read: number; write: number };
};

export type Agent = {
    sessionId: string;
    role: 'primary' | 'subagent';
    name: string;
    model: string;
    brand: Brand;
    status?: 'reasoning' | 'completed';
    cost?: number;
    tokens?: number;
    targetSessionId?: string;
}

export type Tool = {
    callId: string;
    name: string;
    input: any;
    status: 'running' | 'completed';
}

export type MCP = {
    name: string;
    brand: Brand;
    tools: Tool[];
}

export type Brand = {
    logo: string | null;
    name: string;

}

export type Todo = {
    content: string;
    status: 'pending' | 'in_progress' | 'completed' | 'cancelled';
    priority: 'high' | 'medium' | 'low';
}
