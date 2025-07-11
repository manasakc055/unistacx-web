import React, { useState } from 'react';
import CategoryRow from './CategoryRow';
import ProjectGrid from './ProjectGrid';
import HeroBanner from './HeroBanner';
import projectsData from '../../data/projects.json';

const PortfolioPage = () => {
  const [search, setSearch] = useState('');

  const filteredProjects = projectsData.filter(
    (p) =>
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.agency.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <HeroBanner />
      <CategoryRow search={search} setSearch={setSearch} />
      <ProjectGrid projects={filteredProjects} />
    </div>
  );
};

export default PortfolioPage;
