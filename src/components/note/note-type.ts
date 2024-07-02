export type Priority = 'high' | 'medium' | 'low'

export type NoteType = {
    id: string,
    text: string,
    priority: Priority
}

export enum Color{
    high='rgb(197, 237, 197)',
    medium='rgb(235, 214, 175)',
    low='rgb(237, 232, 232)'
}