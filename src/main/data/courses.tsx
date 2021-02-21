import { LoremIpsum } from 'lorem-ipsum';
import { nameByRace } from 'fantasy-name-generator';

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
});

function getRandomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max));
}

function getRandomName() {
  const result = nameByRace('human');
  if (typeof result === 'string') {
    return result;
  }
  return 'Joe Schmoe';
}

export type Course = {
  name: string;
  instructor: string;
  date: Date;
  maximumSeats: number;
  filledSeats: number;
  shortDescription: string;
  longDescription: string;
};

export const courses: Array<Course> = [
  {
    name: 'The Battle-Axe and You',
    instructor: getRandomName(),
    date: new Date('March 17, 2021 14:30:00'),
    maximumSeats: 30,
    filledSeats: getRandomInt(30),
    shortDescription: lorem.generateSentences(1),
    longDescription: lorem.generateParagraphs(1),
  },
  {
    name: 'What to do when your cleric dies',
    instructor: getRandomName(),
    date: new Date('March 13, 2021 14:30:00'),
    maximumSeats: 30,
    filledSeats: getRandomInt(30),
    shortDescription: lorem.generateSentences(1),
    longDescription: lorem.generateParagraphs(1),
  },
  {
    name: 'So you want to be a Tinkerer',
    instructor: getRandomName(),
    date: new Date('March 2, 2021 12:30:00'),
    maximumSeats: 30,
    filledSeats: getRandomInt(30),
    shortDescription: lorem.generateSentences(1),
    longDescription: lorem.generateParagraphs(1),
  },
  {
    name: 'Familiar Summoning 101',
    instructor: getRandomName(),
    date: new Date('March 28, 2021 14:30:00'),
    maximumSeats: 30,
    filledSeats: getRandomInt(30),
    shortDescription: lorem.generateSentences(1),
    longDescription: lorem.generateParagraphs(1),
  },
  {
    name:
      'Making Friends in the Astral Plane - An Advanced Course on Plane Shift',
    instructor: getRandomName(),
    date: new Date('March 18, 2021 19:30:00'),
    maximumSeats: 30,
    filledSeats: getRandomInt(30),
    shortDescription: lorem.generateSentences(1),
    longDescription: lorem.generateParagraphs(1),
  },
];
