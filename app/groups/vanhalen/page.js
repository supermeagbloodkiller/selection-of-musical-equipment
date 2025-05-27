'use client';

import BandTemplate from '../../../components/BandTemplate';
import { bandsData } from '../../../data/bandsData';

export default function VanHalenPage() {
  return (
    <BandTemplate bandData={bandsData.vanhalen} />
  );
}
