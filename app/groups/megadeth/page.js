'use client';

import BandTemplate from '../../../components/BandTemplate';
import { bandsData } from '../../../data/bandsData';

export default function MegadethPage() {
  return (
    <BandTemplate bandData={bandsData.megadeth} />
  );
}
