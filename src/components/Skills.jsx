import React from 'react';
import { Card } from './ui/card';
import { Code2, Server, Database, Cloud, Wrench } from 'lucide-react';
import { skills } from '../data/mock';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code2,
      skills: skills.frontend,
      color: 'blue'
    },
    {
      title: 'Backend',
      icon: Server,
      skills: skills.backend,
      color: 'cyan'
    },
    {
      title: 'Database',
      icon: Database,
      skills: skills.database,
      color: 'indigo'
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: skills.cloudDevops,
      color: 'sky'
    },
    {
      title: 'Tools & Frameworks',
      icon: Wrench,
      skills: skills.tools,
      color: 'violet'
    }
  ];

  return (
    <section id="skills" className="py-32 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-40 left-1/4 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block mb-4 px-4 py-2 bg-cyan-950/30 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-semibold uppercase tracking-wider">
              My Expertise
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
              <span className="bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent mx-auto mb-6" />
            <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              A comprehensive toolkit of technologies and frameworks I work with to build robust, scalable applications
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              const colorMap = {
                blue: { bg: 'bg-blue-950/50', border: 'border-blue-800/50', icon: 'text-blue-400', hover: 'hover:border-blue-500' },
                cyan: { bg: 'bg-cyan-950/50', border: 'border-cyan-800/50', icon: 'text-cyan-400', hover: 'hover:border-cyan-500' },
                indigo: { bg: 'bg-indigo-950/50', border: 'border-indigo-800/50', icon: 'text-indigo-400', hover: 'hover:border-indigo-500' },
                sky: { bg: 'bg-sky-950/50', border: 'border-sky-800/50', icon: 'text-sky-400', hover: 'hover:border-sky-500' },
                violet: { bg: 'bg-violet-950/50', border: 'border-violet-800/50', icon: 'text-violet-400', hover: 'hover:border-violet-500' },
              };
              const colors = colorMap[category.color] || colorMap.blue;
              
              return (
                <Card
                  key={index}
                  className={`group relative p-8 bg-gradient-to-br from-slate-800/60 to-slate-900/60 border ${colors.border} ${colors.hover} transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-${category.color}-500/10 backdrop-blur-sm overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/5 group-hover:to-purple-600/5 transition-all duration-500" />
                  
                  <div className="relative">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-4 ${colors.bg} border ${colors.border} rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className={`h-7 w-7 ${colors.icon}`} />
                      </div>
                      <h3 className="text-2xl font-bold text-white">
                        {category.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2.5">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="group/skill px-4 py-2 bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 hover:text-white text-sm font-medium rounded-lg border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-all duration-500" />
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
