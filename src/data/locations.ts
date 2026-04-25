import type { Location } from '@/types';

export const locations: Location[] = [
  { slug: 'arnprior', name: 'Arnprior', frName: 'Arnprior', area: 'West', postalCode: 'K7S', coordinates: { lat: 45.4333, lng: -76.3500 }, neighbours: ['renfrew', 'mississippi-mills', 'dunrobin'] },
  { slug: 'ashton', name: 'Ashton', frName: 'Ashton', area: 'South-East', postalCode: 'K0A', coordinates: { lat: 45.2833, lng: -75.6167 }, neighbours: ['carleton-place', 'kemptville', 'osgoode'] },
  { slug: 'barrhaven', name: 'Barrhaven', frName: 'Barrhaven', area: 'South', postalCode: 'K2J', coordinates: { lat: 45.2833, lng: -75.7333 }, neighbours: ['nepean', 'riverside-south', 'bells-corners'] },
  { slug: 'bells-corners', name: 'Bells Corners', frName: 'Bells Corners', area: 'West', postalCode: 'K2H', coordinates: { lat: 45.3000, lng: -75.8000 }, neighbours: ['nepean', 'barrhaven', 'kanata'] },
  { slug: 'blackburn-hamlet', name: 'Blackburn Hamlet', frName: 'Blackburn Hamlet', area: 'East', postalCode: 'K1B', coordinates: { lat: 45.4333, lng: -75.5833 }, neighbours: ['orleans', 'gloucester', 'vanier'] },
  { slug: 'bridlewood', name: 'Bridlewood', frName: 'Bridlewood', area: 'West', postalCode: 'K2M', coordinates: { lat: 45.2833, lng: -75.8833 }, neighbours: ['kanata', 'south-march', 'stittsville'] },
  { slug: 'carleton-place', name: 'Carleton Place', frName: 'Carleton Place', area: 'South-West', postalCode: 'K7C', coordinates: { lat: 45.2667, lng: -76.1500 }, neighbours: ['ashton', 'mississippi-mills', 'stittsville'] },
  { slug: 'carp', name: 'Carp', frName: 'Carp', area: 'West', postalCode: 'K0A', coordinates: { lat: 45.3500, lng: -76.0167 }, neighbours: ['dunrobin', 'kanata', 'constance-bay'] },
  { slug: 'clarence-rockland', name: 'Clarence-Rockland', frName: 'Clarence-Rockland', area: 'East', postalCode: 'K4K', coordinates: { lat: 45.5500, lng: -75.2833 }, neighbours: ['cumberland', 'russell', 'vars'] },
  { slug: 'constance-bay', name: 'Constance Bay', frName: 'Constance Bay', area: 'West', postalCode: 'K0A', coordinates: { lat: 45.4833, lng: -76.1000 }, neighbours: ['dunrobin', 'carp'] },
  { slug: 'cumberland', name: 'Cumberland', frName: 'Cumberland', area: 'East', postalCode: 'K4C', coordinates: { lat: 45.5000, lng: -75.4500 }, neighbours: ['orleans', 'navan', 'clarence-rockland'] },
  { slug: 'downtown-ottawa', name: 'Downtown Ottawa', frName: "Centre-ville d'Ottawa", area: 'Central', postalCode: 'K1P', coordinates: { lat: 45.4217, lng: -75.6917 }, neighbours: ['ottawa-central', 'glebe', 'vanier'] },
  { slug: 'dunrobin', name: 'Dunrobin', frName: 'Dunrobin', area: 'West', postalCode: 'K0A', coordinates: { lat: 45.4000, lng: -76.0500 }, neighbours: ['carp', 'arnprior', 'constance-bay'] },
  { slug: 'embrun', name: 'Embrun', frName: 'Embrun', area: 'East', postalCode: 'K0A', coordinates: { lat: 45.2667, lng: -75.0833 }, neighbours: ['russell', 'limoges'] },
  { slug: 'glebe', name: 'Glebe', frName: 'The Glebe', area: 'Central', postalCode: 'K1S', coordinates: { lat: 45.4000, lng: -75.6833 }, neighbours: ['downtown-ottawa', 'ottawa-south', 'ottawa-east'] },
  { slug: 'gloucester', name: 'Gloucester', frName: 'Gloucester', area: 'East', postalCode: 'K1B', coordinates: { lat: 45.4167, lng: -75.5833 }, neighbours: ['orleans', 'blackburn-hamlet', 'vanier'] },
  { slug: 'greely', name: 'Greely', frName: 'Greely', area: 'South', postalCode: 'K4P', coordinates: { lat: 45.3333, lng: -75.5833 }, neighbours: ['riverside-south', 'metcalfe', 'osgoode'] },
  { slug: 'kanata', name: 'Kanata', frName: 'Kanata', area: 'West', postalCode: 'K2K', coordinates: { lat: 45.3500, lng: -75.9000 }, neighbours: ['stittsville', 'bridlewood', 'bells-corners', 'south-march'] },
  { slug: 'kars', name: 'Kars', frName: 'Kars', area: 'South', postalCode: 'K0A', coordinates: { lat: 45.2000, lng: -75.7000 }, neighbours: ['north-gower', 'manotick', 'richmond'] },
  { slug: 'kemptville', name: 'Kemptville', frName: 'Kemptville', area: 'South', postalCode: 'K0G', coordinates: { lat: 45.0167, lng: -75.6500 }, neighbours: ['ashton', 'osgoode', 'winchester'] },
  { slug: 'limoges', name: 'Limoges', frName: 'Limoges', area: 'East', postalCode: 'K0A', coordinates: { lat: 45.2000, lng: -75.0333 }, neighbours: ['embrun', 'russell'] },
  { slug: 'manotick', name: 'Manotick', frName: 'Manotick', area: 'South', postalCode: 'K4M', coordinates: { lat: 45.2333, lng: -75.6833 }, neighbours: ['riverside-south', 'north-gower', 'kars'] },
  { slug: 'metcalfe', name: 'Metcalfe', frName: 'Metcalfe', area: 'South', postalCode: 'K0A', coordinates: { lat: 45.2333, lng: -75.4667 }, neighbours: ['greely', 'osgoode', 'vars'] },
  { slug: 'mississippi-mills', name: 'Mississippi Mills', frName: 'Mississippi Mills', area: 'West', postalCode: 'K0A', coordinates: { lat: 45.2167, lng: -76.3500 }, neighbours: ['arnprior', 'carleton-place'] },
  { slug: 'navan', name: 'Navan', frName: 'Navan', area: 'East', postalCode: 'K4B', coordinates: { lat: 45.4833, lng: -75.4167 }, neighbours: ['cumberland', 'orleans', 'vars'] },
  { slug: 'nepean', name: 'Nepean', frName: 'Nepean', area: 'South-West', postalCode: 'K2H', coordinates: { lat: 45.3333, lng: -75.7667 }, neighbours: ['barrhaven', 'bells-corners', 'ottawa-west', 'kanata'] },
  { slug: 'north-gower', name: 'North Gower', frName: 'North Gower', area: 'South', postalCode: 'K0A', coordinates: { lat: 45.2000, lng: -75.7500 }, neighbours: ['manotick', 'kars', 'richmond'] },
  { slug: 'orleans', name: 'Orléans', frName: 'Orléans', area: 'East', postalCode: 'K1E', coordinates: { lat: 45.4667, lng: -75.5167 }, neighbours: ['blackburn-hamlet', 'gloucester', 'cumberland', 'navan'] },
  { slug: 'osgoode', name: 'Osgoode', frName: 'Osgoode', area: 'South', postalCode: 'K0A', coordinates: { lat: 45.1833, lng: -75.6000 }, neighbours: ['metcalfe', 'greely', 'kemptville', 'ashton'] },
  { slug: 'ottawa', name: 'Ottawa', frName: 'Ottawa', area: 'Central', postalCode: 'K1P', coordinates: { lat: 45.4215, lng: -75.6972 }, neighbours: ['downtown-ottawa', 'ottawa-central', 'ottawa-east', 'ottawa-west'] },
  { slug: 'ottawa-central', name: 'Ottawa Central', frName: 'Ottawa Centre', area: 'Central', postalCode: 'K1R', coordinates: { lat: 45.4100, lng: -75.7000 }, neighbours: ['downtown-ottawa', 'ottawa', 'westboro'] },
  { slug: 'ottawa-east', name: 'Ottawa East', frName: 'Ottawa Est', area: 'Central', postalCode: 'K1N', coordinates: { lat: 45.4200, lng: -75.6500 }, neighbours: ['glebe', 'vanier', 'rockliffe-park'] },
  { slug: 'ottawa-south', name: 'Ottawa South', frName: 'Ottawa Sud', area: 'Central', postalCode: 'K1S', coordinates: { lat: 45.3833, lng: -75.6833 }, neighbours: ['glebe', 'ottawa-west', 'riverside-south'] },
  { slug: 'ottawa-west', name: 'Ottawa West', frName: 'Ottawa Ouest', area: 'Central', postalCode: 'K1Z', coordinates: { lat: 45.3833, lng: -75.7500 }, neighbours: ['westboro', 'nepean', 'ottawa-south'] },
  { slug: 'renfrew', name: 'Renfrew', frName: 'Renfrew', area: 'West', postalCode: 'K7V', coordinates: { lat: 45.4667, lng: -76.6833 }, neighbours: ['arnprior'] },
  { slug: 'richmond', name: 'Richmond', frName: 'Richmond', area: 'South-West', postalCode: 'K0A', coordinates: { lat: 45.1833, lng: -75.8333 }, neighbours: ['kars', 'north-gower', 'stittsville'] },
  { slug: 'riverside-south', name: 'Riverside South', frName: 'Riverside Sud', area: 'South', postalCode: 'K1V', coordinates: { lat: 45.3167, lng: -75.6500 }, neighbours: ['barrhaven', 'manotick', 'greely', 'ottawa-south'] },
  { slug: 'rockliffe-park', name: 'Rockliffe Park', frName: 'Parc Rockcliffe', area: 'East-Central', postalCode: 'K1M', coordinates: { lat: 45.4500, lng: -75.6500 }, neighbours: ['vanier', 'ottawa-east', 'orleans'] },
  { slug: 'russell', name: 'Russell', frName: 'Russell', area: 'East', postalCode: 'K4R', coordinates: { lat: 45.2333, lng: -75.1667 }, neighbours: ['embrun', 'limoges', 'clarence-rockland'] },
  { slug: 'south-march', name: 'South March', frName: 'South March', area: 'West', postalCode: 'K2L', coordinates: { lat: 45.3500, lng: -75.9500 }, neighbours: ['kanata', 'bridlewood', 'stittsville'] },
  { slug: 'stittsville', name: 'Stittsville', frName: 'Stittsville', area: 'West', postalCode: 'K2S', coordinates: { lat: 45.2500, lng: -75.9167 }, neighbours: ['kanata', 'bridlewood', 'carleton-place'] },
  { slug: 'westboro', name: 'Westboro', frName: 'Westboro', area: 'Central', postalCode: 'K1Y', coordinates: { lat: 45.3917, lng: -75.7500 }, neighbours: ['ottawa-west', 'nepean', 'ottawa-central'] },
  { slug: 'winchester', name: 'Winchester', frName: 'Winchester', area: 'South-East', postalCode: 'K0C', coordinates: { lat: 45.1000, lng: -75.3500 }, neighbours: ['kemptville', 'metcalfe'] },
  { slug: 'vanier', name: 'Vanier', frName: 'Vanier', area: 'East-Central', postalCode: 'K1L', coordinates: { lat: 45.4417, lng: -75.6500 }, neighbours: ['rockliffe-park', 'ottawa-east', 'gloucester', 'downtown-ottawa'] },
  { slug: 'vars', name: 'Vars', frName: 'Vars', area: 'East', postalCode: 'K0A', coordinates: { lat: 45.3500, lng: -75.3000 }, neighbours: ['navan', 'cumberland', 'clarence-rockland', 'metcalfe'] },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
export function getLocationSlugs(): string[] {
  return locations.map((l) => l.slug);
}
export function getLocationsByArea(area: string): Location[] {
  return locations.filter((l) => l.area.toLowerCase() === area.toLowerCase());
}
