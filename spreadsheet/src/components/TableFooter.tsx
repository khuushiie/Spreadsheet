import React from 'react';

interface TableFooterProps {
  onAddRow: () => void;
}

const TableFooter: React.FC<TableFooterProps> = ({ onAddRow }) => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white border-t border-gray text-xs z-50">
      <div className="flex px-4 py-2 text-gray-700 text-sm">
        <div className="w-[1%]" />
        <div
          className="w-[8%] text-center font-bold hover:bg-green-100 py-2 cursor-pointer"
          onClick={() => console.log('All Orders clicked')}
        >
          All Orders
        </div>
        <div
          className="w-[8%] text-center font-bold hover:bg-green-100 py-2 cursor-pointer"
          onClick={() => console.log('Pending clicked')}
        >
          Pending
        </div>
        <div
          className="w-[8%] text-center font-bold hover:bg-green-100 py-2 cursor-pointer"
          onClick={() => console.log('Reviewed clicked')}
        >
          Reviewed
        </div>
        <div
          className="w-[8%] text-center font-bold hover:bg-green-100 py-2 cursor-pointer"
          onClick={() => console.log('Arrived clicked')}
        >
          Arrived
        </div>
        <div
          className="w-[3%] text-center font-bold py-2 cursor-pointer hover:bg-green-100"
          onClick={onAddRow}
        >
          <i className="fa-solid fa-plus" />
        </div>
      </div>
    </footer>
  );
};

export default TableFooter;
