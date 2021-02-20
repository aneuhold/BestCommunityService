type EventInfo = {
  name: string;
  displayName: string;
  standardLengthUnit: 'days' | 'hours';
  standardLength: number;
};

// TODO: Replace the length with a date object of some kind

const EVENT_TYPE: {
  [eventTypeName: string]: EventInfo;
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

export default EVENT_TYPE;
