import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="flex justify-center items-center gap-2 mt-6">
    {Array.from({ length: totalPages }).map((_, i) => (
      <button
        key={i}
        onClick={() => onPageChange(i + 1)}
        className={`px-3 py-1 rounded ${i + 1 === currentPage ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
      >
        {i + 1}
      </button>
    ))}
  </div>
);

export default Pagination;
