import type { Location } from '@/types';

export const locations: Location[] = [
  { slug: 'barrhaven', name: 'Barrhaven', frName: 'Barrhaven', area: 'South', postalCode: 'K2J', coordinates: { lat: 45.2833, lng: -75.7333 }, neighbours: ['nepean', 'riverside-south', 'manotick'] },
  { slug: 'kanata', name: 'Kanata', frName: 'Kanata', area: 'West', postalCode: 'K2K', coordinates: { lat: 45.35, lng: -75.9 }, neighbours: ['stittsville', 'nepean', 'downtown-ottawa'] },
  { slug: 'orleans', name: 'Orléans', frName: 'Orléans', area: 'East', postalCode: 'K1E', coordinates: { lat: 45.4667, lng: -75.5167 }, neighbours: ['beacon-hill', 'gloucester', 'cumberland'] },
  { slug: 'nepean', name: 'Nepean', frName: 'Nepean', area: 'South-West', postalCode: 'K2H', coordinates: { lat: 45.3333, lng: -75.7667 }, neighbours: ['barrhaven', 'kanata', 'downtown-ottawa', 'centrepointe'] },
  { slug: 'gloucester', name: 'Gloucester', frName: 'Gloucester', area: 'East', postalCode: 'K1B', coordinates: { lat: 45.4167, lng: -75.5833 }, neighbours: ['orleans', 'beacon-hill', 'downtown-ottawa'] },
  { slug: 'stittsville', name: 'Stittsville', frName: 'Stittsville', area: 'West', postalCode: 'K2S', coordinates: { lat: 45.25, lng: -75.9167 }, neighbours: ['kanata', 'richmond'] },
  { slug: 'riverside-south', name: 'Riverside South', frName: 'Riverside Sud', area: 'South', postalCode: 'K1V', coordinates: { lat: 45.3167, lng: -75.65 }, neighbours: ['barrhaven', 'findlay-creek', 'manotick'] },
  { slug: 'manotick', name: 'Manotick', frName: 'Manotick', area: 'South', postalCode: 'K4M', coordinates: { lat: 45.2333, lng: -75.6833 }, neighbours: ['barrhaven', 'riverside-south', 'north-gower'] },
  { slug: 'beacon-hill', name: 'Beacon Hill', frName: 'Beacon Hill', area: 'East', postalCode: 'K1K', coordinates: { lat: 45.45, lng: -75.6 }, neighbours: ['orleans', 'gloucester', 'vanier'] },
  { slug: 'centretown', name: 'Centretown', frName: 'Centre-ville', area: 'Central', postalCode: 'K1P', coordinates: { lat: 45.4167, lng: -75.7 }, neighbours: ['downtown-ottawa', 'the-glebe', 'hintonburg'] },
  { slug: 'the-glebe', name: 'The Glebe', frName: 'The Glebe', area: 'Central', postalCode: 'K1S', coordinates: { lat: 45.4, lng: -75.6833 }, neighbours: ['centretown', 'old-ottawa-south', 'old-ottawa-east'] },
  { slug: 'hintonburg', name: 'Hintonburg', frName: 'Hintonburg', area: 'Central', postalCode: 'K1Y', coordinates: { lat: 45.4083, lng: -75.725 }, neighbours: ['centretown', 'wellington-village', 'mechanicsville'] },
  { slug: 'wellington-village', name: 'Wellington Village', frName: 'Village Wellington', area: 'West-Central', postalCode: 'K1Y', coordinates: { lat: 45.405, lng: -75.75 }, neighbours: ['hintonburg', 'nepean', 'westboro'] },
  { slug: 'westboro', name: 'Westboro', frName: 'Westboro', area: 'West-Central', postalCode: 'K1Y', coordinates: { lat: 45.3917, lng: -75.75 }, neighbours: ['wellington-village', 'nepean', 'hampton-park'] },
  { slug: 'hampton-park', name: 'Hampton Park', frName: 'Parc Hampton', area: 'West-Central', postalCode: 'K1Z', coordinates: { lat: 45.3833, lng: -75.7667 }, neighbours: ['westboro', 'nepean'] },
  { slug: 'old-ottawa-south', name: 'Old Ottawa South', frName: 'Vieux Ottawa Sud', area: 'Central', postalCode: 'K1S', coordinates: { lat: 45.3833, lng: -75.6833 }, neighbours: ['the-glebe', 'alta-vista', 'riverview'] },
  { slug: 'old-ottawa-east', name: 'Old Ottawa East', frName: 'Vieux Ottawa Est', area: 'Central', postalCode: 'K1N', coordinates: { lat: 45.4, lng: -75.6667 }, neighbours: ['the-glebe', 'sandy-hill', 'old-ottawa-south'] },
  { slug: 'sandy-hill', name: 'Sandy Hill', frName: 'Sandy Hill', area: 'Central', postalCode: 'K1N', coordinates: { lat: 45.425, lng: -75.675 }, neighbours: ['old-ottawa-east', 'vanier', 'lowertown'] },
  { slug: 'lowertown', name: 'Lowertown', frName: 'Basse-ville', area: 'Central', postalCode: 'K1N', coordinates: { lat: 45.4333, lng: -75.6917 }, neighbours: ['sandy-hill', 'byward-market', 'vanier'] },
  { slug: 'byward-market', name: 'ByWard Market', frName: 'Marché By', area: 'Central', postalCode: 'K1N', coordinates: { lat: 45.4333, lng: -75.7 }, neighbours: ['lowertown', 'downtown-ottawa', 'sandy-hill'] },
  { slug: 'vanier', name: 'Vanier', frName: 'Vanier', area: 'East-Central', postalCode: 'K1L', coordinates: { lat: 45.4417, lng: -75.65 }, neighbours: ['beacon-hill', 'sandy-hill', 'lowertown'] },
  { slug: 'alta-vista', name: 'Alta Vista', frName: 'Alta Vista', area: 'South-Central', postalCode: 'K1G', coordinates: { lat: 45.3833, lng: -75.65 }, neighbours: ['old-ottawa-south', 'riverview', 'heron-park'] },
  { slug: 'riverview', name: 'Riverview', frName: 'Riverview', area: 'South-Central', postalCode: 'K1G', coordinates: { lat: 45.3667, lng: -75.65 }, neighbours: ['alta-vista', 'heron-park', 'hunt-club'] },
  { slug: 'heron-park', name: 'Heron Park', frName: 'Parc Heron', area: 'South-Central', postalCode: 'K1V', coordinates: { lat: 45.375, lng: -75.6667 }, neighbours: ['alta-vista', 'riverview', 'hunt-club'] },
  { slug: 'hunt-club', name: 'Hunt Club', frName: 'Hunt Club', area: 'South', postalCode: 'K1V', coordinates: { lat: 45.35, lng: -75.6667 }, neighbours: ['heron-park', 'riverview', 'south-keys'] },
  { slug: 'south-keys', name: 'South Keys', frName: 'South Keys', area: 'South', postalCode: 'K1V', coordinates: { lat: 45.3333, lng: -75.65 }, neighbours: ['hunt-club', 'riverside-south', 'greenboro'] },
  { slug: 'greenboro', name: 'Greenboro', frName: 'Greenboro', area: 'South', postalCode: 'K1T', coordinates: { lat: 45.35, lng: -75.6333 }, neighbours: ['south-keys', 'hunt-club'] },
  { slug: 'findlay-creek', name: 'Findlay Creek', frName: 'Findlay Creek', area: 'South', postalCode: 'K1T', coordinates: { lat: 45.3, lng: -75.6 }, neighbours: ['riverside-south', 'south-keys'] },
  { slug: 'centrepointe', name: 'Centrepointe', frName: 'Centrepointe', area: 'South-West', postalCode: 'K2G', coordinates: { lat: 45.35, lng: -75.75 }, neighbours: ['nepean', 'barrhaven'] },
  { slug: 'fisher-heights', name: 'Fisher Heights', frName: 'Fisher Heights', area: 'South-West', postalCode: 'K2G', coordinates: { lat: 45.3417, lng: -75.7333 }, neighbours: ['centrepointe', 'nepean'] },
  { slug: 'cumberland', name: 'Cumberland', frName: 'Cumberland', area: 'East', postalCode: 'K4C', coordinates: { lat: 45.5, lng: -75.45 }, neighbours: ['orleans', 'navan'] },
  { slug: 'navan', name: 'Navan', frName: 'Navan', area: 'East', postalCode: 'K4B', coordinates: { lat: 45.4833, lng: -75.4167 }, neighbours: ['cumberland', 'orleans'] },
  { slug: 'richmond', name: 'Richmond', frName: 'Richmond', area: 'South-West', postalCode: 'K0A', coordinates: { lat: 45.1833, lng: -75.8333 }, neighbours: ['stittsville', 'north-gower'] },
  { slug: 'north-gower', name: 'North Gower', frName: 'North Gower', area: 'South', postalCode: 'K0A', coordinates: { lat: 45.2, lng: -75.75 }, neighbours: ['manotick', 'richmond'] },
  { slug: 'mechanicsville', name: 'Mechanicsville', frName: 'Mechanicsville', area: 'Central', postalCode: 'K1Y', coordinates: { lat: 45.4167, lng: -75.725 }, neighbours: ['hintonburg', 'centretown', 'lebreton-flats'] },
  { slug: 'lebreton-flats', name: 'LeBreton Flats', frName: 'LeBreton Flats', area: 'Central', postalCode: 'K1P', coordinates: { lat: 45.42, lng: -75.725 }, neighbours: ['mechanicsville', 'centretown'] },
  { slug: 'downtown-ottawa', name: 'Downtown Ottawa', frName: "Centre-ville d'Ottawa", area: 'Central', postalCode: 'K1P', coordinates: { lat: 45.4217, lng: -75.6917 }, neighbours: ['centretown', 'byward-market', 'nepean', 'kanata'] },
  { slug: 'rockcliffe-park', name: 'Rockcliffe Park', frName: 'Parc Rockcliffe', area: 'East-Central', postalCode: 'K1M', coordinates: { lat: 45.45, lng: -75.65 }, neighbours: ['vanier', 'new-edinburgh', 'beacon-hill'] },
  { slug: 'new-edinburgh', name: 'New Edinburgh', frName: 'Nouvelle-Édimbourg', area: 'East-Central', postalCode: 'K1M', coordinates: { lat: 45.4417, lng: -75.6667 }, neighbours: ['rockcliffe-park', 'sandy-hill', 'lowertown'] },
  { slug: 'rothewell', name: 'Rothewell', frName: 'Rothewell', area: 'South', postalCode: 'K1V', coordinates: { lat: 45.325, lng: -75.6833 }, neighbours: ['hunt-club', 'riverside-south'] },
  { slug: 'carlington', name: 'Carlington', frName: 'Carlington', area: 'West-Central', postalCode: 'K1Z', coordinates: { lat: 45.375, lng: -75.75 }, neighbours: ['westboro', 'hampton-park', 'centrepointe'] },
  { slug: 'carson-grove', name: 'Carson Grove', frName: 'Carson Grove', area: 'East', postalCode: 'K1K', coordinates: { lat: 45.4417, lng: -75.6167 }, neighbours: ['beacon-hill', 'gloucester'] },
  { slug: 'pinecrest', name: 'Pinecrest', frName: 'Pinecrest', area: 'West', postalCode: 'K2H', coordinates: { lat: 45.3667, lng: -75.8 }, neighbours: ['nepean', 'kanata'] },
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
