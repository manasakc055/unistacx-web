import React, { useState } from 'react';

const CategoryRow = ({ search, setSearch }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className=" py-3">
      <div className="container">
        <div className="row">
          <div className="col d-flex justify-content-end">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Search projects..."
              className="form-control rounded border border-secondary w-auto me-3"
              style={{
                maxWidth: '300px',
                borderColor: isFocused ? '#0dcaf0' : '',
                boxShadow: isFocused
                  ? '0 0 0 0.25rem rgba(13, 202, 240, 0.5)'
                  : ''
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryRow;
