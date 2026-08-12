export type Agent = {
    sessionId: string;
    role: 'primary' | 'subagent';
    name: string;
    prompt: string;
    model: string;
    brand: Brand;
    status?: 'reasoning' | 'completed';
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
    status: 'pending' | 'completed';
    priority: 'high' | 'medium' | 'low';
}
