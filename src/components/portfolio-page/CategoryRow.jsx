import React from 'react';

const CategoryRow = ({ search, setSearch, categories, selectedCategory, setSelectedCategory }) => {
    return (
        <section className="bg-white py-4">
            <div className="container">
                <div className="row g-3 align-items-center">

                    {/* Search Input */}
                    <div className="col-12 col-md-5">
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="form-control form-control-lg shadow-sm"
                            placeholder="🔍 Search projects..."
                        />
                    </div>

                    {/* Categories Buttons */}
                    <div className="col-12 col-md-7">
                        <div className="d-flex flex-wrap gap-2 justify-content-md-end justify-content-start">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    className={`btn btn-sm rounded-pill ${
                                        selectedCategory === category
                                            ? 'btn-dark'
                                            : 'btn-outline-dark'
                                    }`}
                                    style={{
                                        minWidth: '100px',
                                        transition: 'all 0.3s ease'
                                    }}
                                    onClick={() => setSelectedCategory(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CategoryRow;
