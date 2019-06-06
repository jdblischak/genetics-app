import React from 'react';
import { Link } from 'ot-ui';

const PmidOrBiobankLink = ({ studyId, pmid }) =>
  studyId && studyId.startsWith('NEALE') ? (
    <Link external to="https://www.nealelab.is/uk-biobank">
      UK Biobank
    </Link>
  ) : pmid ? (
    <Link
      external
      to={`https://europepmc.org/abstract/med/${pmid.replace('PMID:', '')}`}
    >
      {pmid}
    </Link>
  ) : null;

export default PmidOrBiobankLink;
