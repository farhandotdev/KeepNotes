export type Priority = 'high' | 'medium' | 'low'

export type NoteType = {
    id: string,
    text: string,
    priority: Priority
}

export enum ColorLight{
    high='rgb(197, 237, 197)',
    medium='rgb(235, 214, 175)',
    low='rgb(237, 232, 232)'
}

export enum ColorDark{
    high='rgb(93, 140, 93)',
    medium='rgb(152, 138, 111)',
    low='rgb(148, 144, 144)'
}