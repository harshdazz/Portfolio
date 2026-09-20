"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProjectCardProps } from "@/Types/types";
import { ChevronUp, Code, ExternalLink, Globe, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

const MAX_VISIBLE_TAGS = 5;
const ONE_MONTH_MS = 30 * 24 * 60 * 60 * 1000;

/** True when the project shipped within the last 30 days. */
const isNewProject = (dateString: string) => {
  if (!dateString) return false;
  const projectDate = new Date(dateString).getTime();
  if (Number.isNaN(projectDate)) return false;
  const now = Date.now();
  return projectDate <= now && now - projectDate <= ONE_MONTH_MS;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [showAllTags, setShowAllTags] = useState(false);

  const firstImage = project.images?.[0];
  const video = project.videos?.[0];
  const hasMoreTags = project.tools.length > MAX_VISIBLE_TAGS;
  const visibleTools = showAllTags
    ? project.tools
    : project.tools.slice(0, MAX_VISIBLE_TAGS);
  const isNew = useMemo(() => isNewProject(project.date), [project.date]);

  return (
    <div className="group relative h-full">
      <Card className="relative flex flex-col h-full justify-between border border-white/10 bg-[#030014]/40 rounded-2xl shadow-2xl overflow-hidden transition-colors duration-300 hover:border-red-600/50">
        <div className="flex-1">
          <div className="relative overflow-hidden aspect-video">
            {video ? (
              <video
                src={video}
                className="w-full h-full object-cover"
                muted
                loop
                playsInline
                preload="none"
                onMouseEnter={(e) => void e.currentTarget.play()}
                onMouseLeave={(e) => {
                  e.currentTarget.pause();
                  e.currentTarget.currentTime = 0;
                }}
              />
            ) : firstImage ? (
              <Image
                src={firstImage}
                width={800}
                height={450}
                alt={project.name}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                quality={75}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full bg-slate-900 flex items-center justify-center">
                <span className="text-slate-600">{project.name}</span>
              </div>
            )}

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#030014] to-transparent opacity-80" />

            {isNew && (
              <div className="absolute top-4 right-4 bg-gradient-to-r from-red-600 to-red-900 text-white px-3 py-1 rounded-full flex items-center gap-1.5 shadow-lg z-10 border border-white/10">
                <Sparkles className="w-3 h-3 text-white" />
                <span className="text-[10px] font-bold tracking-wider">
                  NEW
                </span>
              </div>
            )}
          </div>

          <CardHeader className="p-6 pb-2">
            <Link
              href={`/projects/${project.id}`}
              className="group/title inline-block"
            >
              <CardTitle className="text-2xl font-bold text-white group-hover/title:text-red-500 transition-colors flex items-center gap-2 tracking-tight">
                {project.name}
                <ExternalLink className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover/title:opacity-100 group-hover/title:translate-y-0 group-hover/title:translate-x-0 transition-all text-red-500" />
              </CardTitle>
            </Link>
          </CardHeader>

          <CardContent className="px-6">
            <p className="text-slate-400 line-clamp-2 text-sm mb-6 leading-relaxed font-medium italic">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {visibleTools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 text-[11px] font-bold bg-white/5 border border-white/10 text-slate-400 rounded-lg hover:bg-red-500/10 hover:border-red-500/30 hover:text-red-500 transition-colors duration-300"
                >
                  {tool}
                </span>
              ))}
              {hasMoreTags && (
                <button
                  type="button"
                  onClick={() => setShowAllTags((shown) => !shown)}
                  aria-expanded={showAllTags}
                  className="flex items-center gap-1 text-red-500 hover:text-red-400 text-[11px] font-black transition-colors pl-1 uppercase tracking-widest"
                >
                  {showAllTags ? (
                    <ChevronUp className="w-3 h-3" />
                  ) : (
                    `+${project.tools.length - MAX_VISIBLE_TAGS}`
                  )}
                </button>
              )}
            </div>
          </CardContent>
        </div>

        <CardFooter className="p-6 pt-2 flex gap-4">
          <ProjectLinkButton
            href={project.demo}
            label="Live Demo"
            icon={Globe}
            className="hover:bg-red-600 hover:border-red-500 hover:shadow-red-600/20"
          />
          <ProjectLinkButton
            href={project.code}
            label="Source"
            icon={Code}
            className="hover:bg-red-950 hover:border-red-800 hover:shadow-red-950/20"
          />
        </CardFooter>
      </Card>
    </div>
  );
};

const ProjectLinkButton = ({
  href,
  label,
  icon: Icon,
  className,
}: {
  href?: string;
  label: string;
  icon: React.ElementType;
  className: string;
}) => {
  const base =
    "w-full h-11 rounded-xl text-xs font-bold uppercase tracking-widest transition-colors duration-300 flex items-center justify-center gap-2 border border-white/10";

  if (!href) {
    return (
      <div className="flex-1">
        <Button
          disabled
          aria-label={`${label} unavailable`}
          className={`${base} bg-white/[0.02] text-slate-600 cursor-not-allowed border-none`}
        >
          <Icon className="w-4 h-4" />
          {label}
        </Button>
      </div>
    );
  }

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex-1"
    >
      <Button
        className={`${base} bg-white/5 text-white shadow-xl ${className}`}
      >
        <Icon className="w-4 h-4" />
        {label}
      </Button>
    </Link>
  );
};

export default ProjectCard;
