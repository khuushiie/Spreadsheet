import React, { useState } from 'react';
import Navbar from './components/Navbar';
import JobTable from './components/JobTable';
import TableFooter from './components/TableFooter';

export type RowType = {
  jobRequest: string;
  submitted: string;
  status: string;
  submitter: string;
  url: string;
  assigned: string;
  priority: string;
  dueDate: string;
  estValue: string;
  add: string;
  [key: string]: string;
};

const createEmptyRow = (): RowType => ({
  jobRequest: '',
  submitted: '',
  status: '',
  submitter: '',
  url: '',
  assigned: '',
  priority: '',
  dueDate: '',
  estValue: '',
  add: '',
});

function App(): React.ReactElement {
  const [rows, setRows] = useState<RowType[]>(
    Array.from({ length: 15 }, createEmptyRow)
  );

  const handleAddRow = (): void => {
    setRows([...rows, createEmptyRow()]);
  };

  return React.createElement(
    'div',
    { className: 'w-full min-h-screen bg-white' },
    React.createElement(Navbar, null),
    React.createElement(JobTable, { rows, setRows }),
    React.createElement(TableFooter, { onAddRow: handleAddRow })
  );
}

export default App;