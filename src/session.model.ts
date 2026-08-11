export type SessionHold = {
    id: string;
    agent: string;
    model: string;
    role: 'primary' | 'subagent' | string;
}
