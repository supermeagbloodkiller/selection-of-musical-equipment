'use client';

import BandTemplate from '../../../components/BandTemplate';
import { bandsData } from '../../../data/bandsData';

export default function ACDCPage() {
  return (
    <BandTemplate bandData={bandsData.acdc} />
  );
}
