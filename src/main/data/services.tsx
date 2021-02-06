type ServiceType = 'inHouseService' | 'externalService';

export interface Service {
  type: ServiceType;
  name: string;
  displayName: string;
  description: string;
}

type Services = Service[];

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
];

export default services;
