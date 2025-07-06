import React from 'react';

const Navbar: React.FC = () => {
  return (
    <div className="w-full border-b bg-white font-sans text-sm text-black">
      {/* Top Row */}
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-2">
          {/* Half-filled box */}
          <div
            className="w-5 h-4 border border-green-600 rounded-sm overflow-hidden relative cursor-pointer hover:bg-gray-200 hover:rounded-md"
            onClick={() => console.log('Box clicked')}
          >
            <div className="bg-[#2F6F4E] w-1/3 h-full absolute right-0 top-0" />
          </div>

          <span
            className="text-gray-500 cursor-pointer hover:bg-gray-200 hover:rounded-md px-1"
            onClick={() => console.log('WorkSpace clicked')}
          >
            WorkSpace
          </span>
          <span className="text-gray-500">›</span>
          <span
            className="text-gray-500 cursor-pointer hover:bg-gray-200 hover:rounded-md px-1"
            onClick={() => console.log('Folder clicked')}
          >
            Folder
          </span>
          <span className="text-gray-500">›</span>
          <span
            className="font-medium cursor-pointer hover:bg-gray-200 hover:rounded-md px-1"
            onClick={() => console.log('Spreadsheet clicked')}
          >
            Spreadsheet
          </span>
          <i
            className="fa-solid fa-ellipsis text-sm cursor-pointer hover:bg-gray-200 hover:rounded-md p-1"
            onClick={() => console.log('Ellipsis clicked')}
          />
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-xs" />
            <input
              type="text"
              placeholder="Search within sheet"
              className="pl-8 pr-3 py-1.5 border border-gray-300 rounded-md bg-gray-100 text-sm"
              onChange={(e) => console.log('Search:', e.target.value)}
            />
          </div>
          <i
            className="fa-regular fa-bell text-sm cursor-pointer hover:bg-gray-200 hover:rounded-md p-1"
            onClick={() => console.log('Bell clicked')}
          />
          <div
            className="w-6 h-6 rounded-full overflow-hidden bg-gray-300 cursor-pointer hover:ring-2 hover:ring-gray-300"
            onClick={() => console.log('Avatar clicked')}
          >
            <img
              src="https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/87-512.png"
              alt="User"
              className="w-full h-full object-cover"
            />
          </div>
          <span
            className="font-medium cursor-pointer hover:bg-gray-200 hover:rounded-md px-1"
            onClick={() => console.log('Username clicked')}
          >
            John Doe
          </span>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex items-center justify-between px-4 py-2 border-t">
        <div className="flex items-center gap-3">
          <span
            className="font-medium cursor-pointer hover:bg-gray-200 hover:rounded-md px-2 py-1"
            onClick={() => console.log('Toolbar clicked')}
          >
            Tool bar <i className="fa-solid fa-angles-right" />
          </span>

          <div className="w-px h-4 bg-gray-300" />

          {[
            { icon: 'fa-eye-slash', text: 'Hide fields', log: 'Hide fields clicked' },
            { icon: 'fa-arrow-up-a-z', text: 'Sort', log: 'Sort clicked' },
            { icon: 'fa-filter', text: 'Filter', log: 'Filter clicked' },
            { icon: 'fa-maximize', text: 'Cell view', log: 'Cell view clicked' },
          ].map(({ icon, text, log }) => (
            <div
              key={text}
              className="flex items-center gap-1 cursor-pointer hover:bg-gray-200 hover:rounded-md px-2 py-1"
              onClick={() => console.log(log)}
            >
              <i className={`fa-solid ${icon} text-sm`} />
              <span>{text}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            className="flex items-center gap-1 border px-3 py-1.5 rounded hover:bg-gray-100"
            onClick={() => console.log('Import clicked')}
          >
            <i className="fa-solid fa-arrow-down-long text-sm" /> Import
          </button>
          <button
            className="flex items-center gap-1 border px-3 py-1.5 rounded hover:bg-gray-100"
            onClick={() => console.log('Export clicked')}
          >
            <i className="fa-solid fa-arrow-up text-sm" /> Export
          </button>
          <button
            className="flex items-center gap-1 border px-3 py-1.5 rounded hover:bg-gray-100"
            onClick={() => console.log('Share clicked')}
          >
            <i className="fa-regular fa-share-from-square text-sm" /> Share
          </button>
          <button
            className="flex items-center gap-1 px-6 py-1.5 rounded text-white bg-[#2F6F4E] hover:brightness-110"
            onClick={() => console.log('New Action clicked')}
          >
            <i className="fa-solid fa-shuffle text-sm" /> New Action
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;