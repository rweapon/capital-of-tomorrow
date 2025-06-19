interface ITimelineEvent {
  date: string;
  month: string;
  subtitle: string;
  description: string;
}

export interface ITimelineContent {
  title: string;
  events: ITimelineEvent[];
}
