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

export interface TimelineStep {
  number: string;
  title: string;
  description: string;
}
