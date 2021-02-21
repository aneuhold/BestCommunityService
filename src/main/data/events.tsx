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

export const exampleCalendarEvents = [
  {
    title: 'DnD Night',
    startDate: new Date(2018, 6, 23, 9, 30),
    endDate: new Date(2018, 6, 23, 11, 30),
  },
  {
    title: 'College Info Session',
    startDate: new Date(2018, 6, 23, 12, 0),
    endDate: new Date(2018, 6, 23, 13, 0),
  },
  {
    title: 'Community Organizer Meeting',
    startDate: new Date(2018, 6, 23, 14, 30),
    endDate: new Date(2018, 6, 23, 15, 30),
  },
  {
    title: 'Boy Scout Meeting - Troop 404',
    startDate: new Date(2018, 6, 24, 10, 0),
    endDate: new Date(2018, 6, 24, 11, 0),
  },
  {
    title: 'Why are parrots multi-color? An info session.',
    startDate: new Date(2018, 6, 24, 12, 0),
    endDate: new Date(2018, 6, 24, 13, 35),
  },
  {
    title: 'Python Bootcamp',
    startDate: new Date(2018, 6, 27, 16, 30),
    endDate: new Date(2018, 6, 27, 18, 0),
  },
  {
    title: 'Hiking Preparation Workshop',
    startDate: new Date(2018, 6, 16, 9, 30),
    endDate: new Date(2018, 6, 16, 15, 30),
  },
  {
    title: 'How to build a Dyson Sphere',
    startDate: new Date(2018, 6, 20, 14, 10),
    endDate: new Date(2018, 6, 20, 15, 30),
  },
  {
    title: 'Art Class',
    startDate: new Date(2018, 5, 22),
    endDate: new Date(2018, 6, 1),
  },
  {
    title: 'Computer Class',
    startDate: new Date(2018, 6, 28),
    endDate: new Date(2018, 7, 7),
  },
];
