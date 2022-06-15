export interface Blog {
    id: string;
    title: string;
    description: string;
    author: string;
    status: BlogStatus;
    created_at: Date;
    updated_at: Date;

}

export enum BlogStatus {
    OPEN = 'OPEN',
    IN_PROGRESS = 'IN_PROGESS',
    DONE = 'DONE'
}