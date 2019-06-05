import React from 'react';
import { Link, OtTable, significantFigures } from 'ot-ui';

const tableColumns = [
  // {
  //   id: 'type',
  //   label: 'Molecular Trait',
  //   renderCell: d => 'eQTL',
  // },
  {
    id: 'gene.symbol',
    label: 'Gene',
    renderCell: d => <Link to={`/gene/${d.gene.id}`}>{d.gene.symbol}</Link>,
  },
  {
    id: 'phenotypeId',
    label: 'Phenotype',
    // renderCell: d => (d.phenotypeId !== d.gene.id ? d.phenotypeId : null),
  },
  {
    id: 'tissue.name',
    label: 'Tissue',
    renderCell: d => d.tissue.name,
  },
  {
    id: 'qtlStudyName',
    label: 'Source',
  },
  {
    id: 'beta',
    label: 'QTL beta',
    renderCell: d => significantFigures(d.beta),
  },
  {
    id: 'h3',
    label: 'H3',
    renderCell: d => significantFigures(d.h3),
  },
  {
    id: 'h4',
    label: 'H4',
    renderCell: d => significantFigures(d.h4),
  },
  {
    id: 'log2h4h3',
    label: 'log2(H4/H3)',
    renderCell: d => significantFigures(d.log2h4h3),
  },
];

const ColocTable = ({ loading, error, filenameStem, data }) => (
  <OtTable
    loading={loading}
    error={error}
    columns={tableColumns}
    data={data}
    sortBy="log2h4h3"
    order="desc"
    downloadFileStem={filenameStem}
  />
);

export default ColocTable;
