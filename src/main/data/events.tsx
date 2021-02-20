type EventTypeInfo = {
  name: string;
  displayName: string;
  standardLengthUnit: 'days' | 'hours';
  standardLength: number;
};

// TODO: Replace the length with a date object of some kind

export const EVENT_TYPE: {
  [eventTypeName: string]: EventTypeInfo;
} = {
  wedding: {
    name: 'wedding',
    displayName: 'Wedding',
    standardLengthUnit: 'days',
    standardLength: 1,
  },
  businessMeeting: {
    name: 'businessMeeting',
    displayName: 'Business Meeting',
    standardLengthUnit: 'hours',
    standardLength: 1,
  },
  familyGathering: {
    name: 'familyGathering',
    displayName: 'Family Gathering',
    standardLengthUnit: 'hours',
    standardLength: 3,
  },
};

export type ScheduledEvent = {
  type: EventTypeInfo;
  name: string;
  dateRange: [Date, Date];
};

export const scheduledEvents: Array<ScheduledEvent> = [
  {
    type: EVENT_TYPE.familyGathering,
    name: 'test',
    dateRange: [new Date(2021, 1, 12, 12), new Date(2021, 1, 12, 13)],
  },
  {
    type: EVENT_TYPE.businessMeeting,
    name: 'test 2',
    dateRange: [new Date(2021, 1, 13, 12), new Date(2021, 1, 13, 13)],
  },
  {
    type: EVENT_TYPE.businessMeeting,
    name: 'test 3',
    dateRange: [new Date(2021, 1, 13, 13), new Date(2021, 1, 13, 14)],
  },
  {
    type: EVENT_TYPE.businessMeeting,
    name: 'test 4',
    dateRange: [new Date(2021, 1, 13, 14), new Date(2021, 1, 13, 15)],
  },
];
