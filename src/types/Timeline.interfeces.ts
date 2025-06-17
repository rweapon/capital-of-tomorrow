interface ITimelineEvent {
    date: string;
    month: string;
    subtitle: string;
    description: string;
}

export interface ITimelineContent {
    title: string;
    subtitle: string;
    events: ITimelineEvent[];
}
