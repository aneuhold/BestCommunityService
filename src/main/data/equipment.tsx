import electricWelder from '../../assets/equipment/lincoln-electric-mig-welders-k2514-1-64_600.jpg';
import oscilatingTool from '../../assets/equipment/makita-oscillating-tools-xmt03z-64_600.jpg';
import jigsaw from '../../assets/equipment/milwaukee-jigsaws-2737-20-77_1000.jpg';
import discOrbitalSander from '../../assets/equipment/ridgid-disc-orbital-sanders-r8606b-64_600.jpg';
import portableTableSaw from '../../assets/equipment/ridgid-portable-table-saws-r4514-64_600.jpg';
import miterSaw from '../../assets/equipment/ryobi-miter-saws-tss103-64_600.jpg';
import djEquipment from '../../assets/equipment/DJ-Equipment.jpg';

export interface EquipmentItem {
  assetId: string;
  displayName: string;
  image: string;
}

export type Equipment = EquipmentItem[];

export const equipment: Equipment = [
  {
    assetId: '154we46w',
    displayName: 'Electric Welder',
    image: electricWelder,
  },
  {
    assetId: '579sd79w6',
    displayName: 'Oscilating Tool',
    image: oscilatingTool,
  },
  {
    assetId: '216wer46w',
    displayName: 'Jigsaw',
    image: jigsaw,
  },
  {
    assetId: '54sd8e97',
    displayName: 'Disc Orbital Sander',
    image: discOrbitalSander,
  },
  {
    assetId: 'sd579w646',
    displayName: 'Portable Table Saw',
    image: portableTableSaw,
  },
  {
    assetId: '10546s79w',
    displayName: 'Miter Saw',
    image: miterSaw,
  },
  {
    assetId: '159w8e7rw6',
    displayName: 'DJ Equipment',
    image: djEquipment,
  },
];
