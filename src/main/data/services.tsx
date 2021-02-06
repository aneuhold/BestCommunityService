type ServiceType = 'inHouseService' | 'externalService';

export interface Service {
  type: ServiceType;
  name: string;
  displayName: string;
  description: string;
}

export type Services = Service[];

const services: Services = [
  {
    name: 'catering',
    displayName: 'Catering',
    type: 'externalService',
    description: 'Catering for all your events. Big or small.',
  },
  {
    name: 'homeCare',
    displayName: 'Home Care',
    type: 'externalService',
    description: 'In-home care for elderly, and handicapped.',
  },
  {
    name: 'spaceRentals',
    displayName: 'Space for Rent',
    type: 'inHouseService',
    description:
      'Rent a space with varying sized rooms for any event. Business meetings, weddings, community meetings, or funerals are just a few examples.',
  },
  {
    name: 'equipmentRental',
    displayName: 'Equipment Rental',
    type: 'inHouseService',
    description:
      'Rent or reserve equipment for events at the building, or at your own location.',
  },
  {
    name: 'classes',
    displayName: 'Classes',
    type: 'inHouseService',
    description:
      'Take classes on various topics such as Spanish, Arts & Crafts, and Painting put on by our very own Volunteers!',
  },
];

export default services;
