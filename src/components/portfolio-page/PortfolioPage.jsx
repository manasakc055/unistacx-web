import React, { useState } from 'react';
import CategoryRow from './CategoryRow';
import ProjectGrid from './ProjectGrid';
import HeroBanner from './HeroBanner';
import projectsData from '../../data/projects.json';

const PortfolioPage = () => {
    const [search, setSearch] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Get all unique categories from data
    const categories = ['All', ...Array.from(new Set(projectsData.map(p => p.category)))];

    // Filtering
    const filteredProjects = projectsData.filter((p) => {
        const matchesSearch =
            p.shortDescription.toLowerCase().includes(search.toLowerCase()) ||
            p.name.toLowerCase().includes(search.toLowerCase());
        const matchesCategory =
            selectedCategory === 'All' || p.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div>
            {/*<HeroBanner />*/}
            <CategoryRow
                search={search}
                setSearch={setSearch}
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />

            <ProjectGrid projects={filteredProjects} />
        </div>
    );
};

export default PortfolioPage;
