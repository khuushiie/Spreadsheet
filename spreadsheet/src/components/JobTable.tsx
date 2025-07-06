import * as React from 'react';
import type { RowType } from '../App';

// Define interfaces for column and row data
interface Column {
  key: string;
  title: string | React.ReactElement;
}

// interface Row {
//   [key: string]: string | undefined;
//   jobRequest?: string;
//   submitted?: string;
//   status?: string;
//   submitter?: string;
//   url?: string;
//   assigned?: string;
//   priority?: string;
//   dueDate?: string;
//   estValue?: string;
// }

interface JobTableProps {
  rows: RowType[];
  setRows: React.Dispatch<React.SetStateAction<RowType[]>>;
}

const initialColumns: Column[] = [
  { key: '#', title: '#' },
  {
    key: 'jobRequest',
    title: (
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <i className="fa-solid fa-briefcase mr-1" />
          <span>Job Request</span>
        </div>
        <i
          className="fa-solid fa-angle-down cursor-pointer"
          onClick={() => console.log('Sort Job Request clicked')}
        />
      </div>
    ),
  },
  {
    key: 'submitted',
    title: (
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <i className="fa-solid fa-calendar-days mr-1" />
          <span>Submitted</span>
        </div>
        <i
          className="fa-solid fa-angle-down cursor-pointer"
          onClick={() => console.log('Sort Submitted clicked')}
        />
      </div>
    ),
  },
  {
    key: 'status',
    title: (
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <i className="fa-solid fa-circle-down mr-1" />
          <span>Status</span>
        </div>
        <i
          className="fa-solid fa-angle-down cursor-pointer"
          onClick={() => console.log('Sort Status clicked')}
        />
      </div>
    ),
  },
  {
    key: 'submitter',
    title: (
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <i className="fa-solid fa-user mr-1" />
          <span>Submitter</span>
        </div>
        <i
          className="fa-solid fa-angle-down cursor-pointer"
          onClick={() => console.log('Sort Submitter clicked')}
        />
      </div>
    ),
  },
  {
    key: 'url',
    title: (
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <i className="fa-solid fa-globe mr-1" />
          <span>URL</span>
        </div>
        <i
          className="fa-solid fa-angle-down cursor-pointer"
          onClick={() => console.log('Sort URL clicked')}
        />
      </div>
    ),
  },
  {
    key: 'assigned',
    title: (
      <>
        <i className="fa-solid fa-user-check mr-1" /> Assigned
      </>
    ),
  },
  {
    key: 'priority',
    title: <>Priority</>,
  },
  {
    key: 'dueDate',
    title: <>Due Date</>,
  },
  {
    key: 'estValue',
    title: <>Est. Value</>,
  },
  { key: 'add', title: '' },
];

const getStatusStyle = (status: string | undefined): string => {
  switch (status) {
    case 'In-process':
      return 'bg-yellow-100 text-yellow-800';
    case 'Need to start':
      return 'bg-blue-100 text-blue-800';
    case 'Complete':
      return 'bg-green-100 text-green-800';
    case 'Blocked':
      return 'bg-red-100 text-red-800';
    default:
      return '';
  }
};

const getPriorityStyle = (priority: string | undefined): string => {
  switch (priority) {
    case 'High':
      return 'text-red-600';
    case 'Medium':
      return 'text-yellow-600';
    case 'Low':
      return 'text-blue-600';
    default:
      return '';
  }
};

const JobTable: React.FC<JobTableProps> = ({ rows, setRows }) => {
  const [columns] = React.useState<Column[]>(initialColumns);
  const [activeCell, setActiveCell] = React.useState<string | null>(null);

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeCell) return;
      const [row, colKey] = activeCell.split('-');
      const rowIndex = parseInt(row);
      let newRow = rowIndex;
      let newCol = columns.findIndex((c) => c.key === colKey);
      if (e.key === 'ArrowUp' && rowIndex > 0) newRow = rowIndex - 1;
      if (e.key === 'ArrowDown' && rowIndex < rows.length - 1) newRow = rowIndex + 1;
      if (e.key === 'ArrowLeft' && newCol > 0) newCol -= 1;
      if (e.key === 'ArrowRight' && newCol < columns.length - 1) newCol += 1;
      setActiveCell(`${newRow}-${columns[newCol].key}`);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeCell, rows.length, columns]);

  const handleStatusChange = (rowIndex: number, value: string) => {
    const newRows = [...rows];
    newRows[rowIndex].status = value;
    setRows(newRows);
  };

  const handlePriorityChange = (rowIndex: number, value: string) => {
    const newRows = [...rows];
    newRows[rowIndex].priority = value;
    setRows(newRows);
  };

  const handleInputChange = (rowIndex: number, colKey: string, value: string) => {
    const newRows = [...rows];
    newRows[rowIndex][colKey] = value;
    setRows(newRows);
  };

  const handleCellClick = (rowIndex: number, colKey: string) => {
    setActiveCell(`${rowIndex}-${colKey}`);
  };

  return (
    <div className="w-full overflow-x-auto bg-white">
      <table className="min-w-[1200px] w-full table-fixed border-collapse text-sm">
        <thead>
          {/* Group Row */}
          <tr className="text-xs text-gray-700 bg-gray-200">
            <th className="w-[2%] py-2 px-3 border border-white bg-white"></th>
            <th
              className="w-[33%] py-2 px-3 border border-white text-left"
              colSpan={5}
              onClick={() => console.log('Q3 Financial Overview header clicked')}
            >
              <div className="flex items-center gap-2">
                <span className="py-1 px-2 border border-white rounded-md bg-gray-100">
                  <i
                    className="fa-solid fa-link text-blue-500 cursor-pointer"
                    onClick={() => console.log('Link icon clicked')}
                  />{' '}
                  Q3 Financial Overview
                </span>
                <i
                  className="fa-solid fa-arrow-rotate-right w-2 h-2 text-red-500 cursor-pointer"
                  onClick={() => console.log('Refresh icon clicked')}
                />
              </div>
            </th>
            <th className="w-[7%] py-2 px-3 border border-white bg-white" />
            <th
              className="w-[8.33%] py-2 px-3 border border-white text-left bg-green-200 text-green-800 text-center"
              colSpan={1}
              onClick={() => console.log('ABC header clicked')}
            >
              <i
                className="fa-solid fa-arrows-split-up-and-left cursor-pointer"
                onClick={() => console.log('ABC split icon clicked')}
              />{' '}
              ABC{' '}
              <i
                className="fa-solid fa-ellipsis cursor-pointer"
                onClick={() => console.log('ABC ellipsis clicked')}
              />
            </th>
            <th
              className="w-[16.66%] py-2 px-3 border border-white bg-purple-200 text-purple-800 text-left text-center"
              colSpan={2}
              onClick={() => console.log('Answer the question header clicked')}
            >
              <i
                className="fa-solid fa-arrows-split-up-and-left cursor-pointer"
                onClick={() => console.log('Answer split icon clicked')}
              />{' '}
              Answer the question{' '}
              <i
                className="fa-solid fa-ellipsis cursor-pointer"
                onClick={() => console.log('Answer ellipsis clicked')}
              />
            </th>
            <th
              className="w-[8.33%] py-2 px-3 border border-white text-left bg-red-200 text-red-800 text-center"
              onClick={() => console.log('Extract header clicked')}
            >
              <i
                className="fa-solid fa-arrows-split-up-and-left cursor-pointer"
                onClick={() => console.log('Extract split icon clicked')}
              />{' '}
              Extract{' '}
              <i
                className="fa-solid fa-ellipsis cursor-pointer"
                onClick={() => console.log('Extract ellipsis clicked')}
              />
            </th>
            <th
              className="w-[4%] py-2 px-3 border border-white text-base text-left text-center"
              onClick={() => console.log('Add new row clicked')}
            >
              <i className="fa-solid fa-plus cursor-pointer" />
            </th>
          </tr>

          {/* Column Header Row */}
          <tr className="text-xs font-medium text-gray-500 bg-gray-100">
            {columns.map((col) => {
              if (col.key === 'jobRequest') {
                return (
                  <th
                    key={col.key}
                    colSpan={2}
                    className="w-[16.66%] py-2 px-3 border border-white text-left font-semibold"
                    onClick={() => console.log('Job Request header clicked')}
                  >
                    {col.title}
                  </th>
                );
              }

              if (col.key === 'jobRequestPlaceholder') return null;

              let customClass = '';
              if (col.key === '#') customClass = 'w-[3%] text-center';
              if (col.key === 'status') customClass = 'w-[10%]';
              if (col.key === 'assigned') customClass = 'bg-green-100 text-green-800 font-semibold';
              if (col.key === 'priority') customClass = 'bg-purple-100 text-purple-800 font-semibold';
              if (col.key === 'estValue') customClass = 'bg-red-100 text-red-800 font-semibold';
              if (col.key === 'dueDate') customClass = 'bg-purple-100 text-purple-800 font-semibold';
              if (col.key.startsWith('col-')) customClass = 'w-[8.33%]';
              if (col.key === 'add') customClass = 'w-[4%]';

              return (
                <th
                  key={col.key}
                  className={`py-2 px-3 border border-white text-left truncate ${customClass}`}
                  onClick={() => console.log(`${col.key} header clicked`)}
                >
                  {col.title}
                </th>
              );
            })}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((col) => {
                const cellId = `${rowIndex}-${col.key}`;
                const isActive = activeCell === cellId;
                const borderClass = isActive ? 'border-2 border-green-500' : 'border-gray-100';
                if (col.key === 'jobRequestPlaceholder') {
                  return null;
                }
                if (col.key === 'status') {
                  return (
                    <td
                      key={col.key}
                      className={`py-2 px-3 border ${borderClass}`}
                      onClick={() => handleCellClick(rowIndex, col.key)}
                    >
                      <select
                        value={row.status || ''}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleStatusChange(rowIndex, e.target.value)}
                        className={`w-full rounded-xl px-1 py-1 text-xs focus:outline-none focus:ring-0 ${getStatusStyle(row.status)}`}
                      >
                        <option value=""></option>
                        <option value="In-process">In-process</option>
                        <option value="Need to start">Need to start</option>
                        <option value="Complete">Complete</option>
                        <option value="Blocked">Blocked</option>
                      </select>
                    </td>
                  );
                }
                if (col.key === 'priority') {
                  return (
                    <td
                      key={col.key}
                      className={`py-2 px-3 border ${borderClass}`}
                      onClick={() => handleCellClick(rowIndex, col.key)}
                    >
                      <select
                        value={row.priority || ''}
                        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handlePriorityChange(rowIndex, e.target.value)}
                        className={`w-full bg-white px-2 py-1 font-bold text-xs focus:outline-none focus:ring-0 ${getPriorityStyle(row.priority)}`}
                      >
                        <option value=""></option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                      </select>
                    </td>
                  );
                }
                if (col.key === 'dueDate') {
                  return (
                    <td
                      key={col.key}
                      className={`py-2 px-3 border ${borderClass} text-center`}
                      onClick={() => handleCellClick(rowIndex, col.key)}
                    >
                      <input
                        type="date"
                        value={row[col.key] || ''}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(rowIndex, col.key, e.target.value)}
                        onBlur={() => setActiveCell(null)}
                        className="w-full px-2 py-1 text-xs border-none focus:outline-none text-center"
                      />
                    </td>
                  );
                }
                if (col.key === '#') {
                  return (
                    <td key={col.key} className="py-2 px-3 border text-center">
                      {rowIndex + 1}
                    </td>
                  );
                }
                return (
                  <td
                    key={col.key}
                    colSpan={col.key === 'jobRequest' ? 2 : 1}
                    className={`py-2 px-3 border ${borderClass} text-center`}
                    onClick={() => handleCellClick(rowIndex, col.key)}
                  >
                    <input
                      type="text"
                      value={row[col.key] || ''}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(rowIndex, col.key, e.target.value)}
                      onBlur={() => setActiveCell(null)}
                      className="w-full px-2 py-1 text-xs border-none focus:outline-none text-center"
                    />
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobTable;