import React from 'react';
import { Link } from 'react-router-dom';
import { OtTable, commaSeparate } from 'ot-ui';

const tableColumns = [
  {
    id: 'indexVariantId',
    label: 'Variant',
    renderCell: rowData => (
      <Link to={`/variant/${rowData.indexVariantId}`}>
        {rowData.indexVariantId}
      </Link>
    ),
  },
  { id: 'indexVariantRsId', label: 'rsID' },
  {
    id: 'studyId',
    label: 'Study ID',
    renderCell: rowData => (
      <Link to={`/study/${rowData.studyId}`}>{rowData.studyId}</Link>
    ),
  },
  { id: 'traitReported', label: 'Trait' },
  {
    id: 'pval',
    label: 'P-value',
    renderCell: rowData => rowData.pval.toPrecision(3),
  },
  {
    id: 'pmid',
    label: 'PMID',
    renderCell: rowData => (
      <a
        href={`http://europepmc.org/abstract/med/${rowData.pmid}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {rowData.pmid}
      </a>
    ),
  },
  {
    id: 'pubAuthor',
    label: 'Author (Year)',
    renderCell: rowData =>
      `${rowData.pubAuthor} et al (${new Date(rowData.pubDate).getFullYear()})`,
  },
  {
    id: 'nTotal',
    label: 'Study N',
    renderCell: rowData => commaSeparate(rowData.nTotal),
  },
  {
    id: 'overallR2',
    label: 'LD (R-squared)',
    tooltip: 'Linkage disequilibrium with the queried variant',
    renderCell: rowData => rowData.overallR2.toPrecision(3),
  },
  {
    id: 'isInCredibleSet',
    label: 'Is in 95% Credible Set',
    renderCell: rowData => {
      switch (rowData.isInCredibleSet) {
        case true:
          return 'True';
        case false:
          return 'False';
        default:
          return 'No information';
      }
    },
  },
];

const AssociatedIndexVariantsTable = ({ loading, error, data }) => (
  <OtTable columns={tableColumns} data={data} sortBy="pval" order="asc" />
);

export default AssociatedIndexVariantsTable;
