import React, { useState } from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink, Star } from 'lucide-react';
import { projects } from '../data/mock';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'Web Application', 'Mobile Concept', 'API Project'];

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-32 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block mb-4 px-4 py-2 bg-purple-950/30 border border-purple-500/20 rounded-full text-purple-400 text-sm font-semibold uppercase tracking-wider">
              Portfolio
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
              <span className="bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-6" />
            <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              A showcase of my recent work and technical capabilities across different domains
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? 'default' : 'outline'}
                className={`
                  relative overflow-hidden font-semibold px-6 py-3 rounded-xl transition-all duration-300
                  ${filter === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-blue-500/30 scale-105 border-0'
                    : 'bg-slate-800/50 border-slate-700 text-slate-300 hover:border-blue-500/50 hover:text-white hover:bg-slate-800'
                  }
                `}
                onClick={() => setFilter(category)}
              >
                {category === 'all' ? 'All Projects' : category}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <Card
                key={project.id}
                className="group relative overflow-hidden bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-[1.03] hover:shadow-2xl hover:shadow-blue-500/20 backdrop-blur-sm"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/5 group-hover:to-purple-600/5 transition-all duration-500" />
                
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden bg-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-700"
                  />
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 shadow-lg animate-pulse">
                      <Star className="h-3.5 w-3.5 fill-white" />
                      Featured
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                </div>

                {/* Project Content */}
                <div className="relative p-7">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1.5 bg-gradient-to-r from-blue-950/80 to-purple-950/80 border border-blue-500/30 text-blue-300 text-xs font-bold rounded-lg uppercase tracking-wide">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-5 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 hover:text-white text-xs font-medium rounded-md border border-slate-700/50 hover:border-blue-500/50 transition-all cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1.5 text-blue-400 text-xs font-semibold">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* View Details Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-slate-800/50 border-slate-700/50 hover:border-blue-500 hover:bg-blue-600/10 text-slate-300 hover:text-white transition-all duration-300 group/btn font-semibold"
                  >
                    View Details
                    <ExternalLink className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </Button>
                </div>
                
                <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-all duration-500" />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
