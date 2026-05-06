"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Carousel, { type ButtonGroupProps, type ResponsiveType } from "react-multi-carousel";
import type { Project } from "@/data";
import { ProjectCard } from "./project-card";

type ProjectsCarouselProps = {
  projects: readonly Project[];
};

type CarouselArrowProps = {
  onClick?: () => void;
  direction: "left" | "right";
  disabled?: boolean;
};

type ProjectsButtonGroupProps = ButtonGroupProps & {
  totalProjects: number;
};

const responsive: ResponsiveType = {
  desktop: {
    breakpoint: { max: 4000, min: 1200 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1199, min: 768 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

function CarouselArrow({ onClick, direction, disabled }: CarouselArrowProps) {
  return (
    <button
      type="button"
      aria-label={direction === "left" ? "Go to previous projects" : "Go to next projects"}
      onClick={onClick}
      disabled={disabled}
      className={`projects-carousel__arrow projects-carousel__arrow--${direction}`}
    >
      {direction === "left" ? (
        <ChevronLeft aria-hidden="true" className="h-5 w-5" />
      ) : (
        <ChevronRight aria-hidden="true" className="h-5 w-5" />
      )}
    </button>
  );
}

function ProjectsButtonGroup({
  previous,
  next,
  carouselState,
  totalProjects,
}: ProjectsButtonGroupProps) {
  const currentSlide = carouselState?.currentSlide ?? 0;
  const slidesToShow = carouselState?.slidesToShow ?? 1;
  const totalItems = carouselState?.totalItems ?? totalProjects;
  const isAtStart = currentSlide <= 0;
  const isAtEnd = currentSlide + slidesToShow >= totalItems;

  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 bottom-14 hidden md:block">
      <div className="relative h-full">
        <div className="pointer-events-auto absolute left-0 top-1/2 -translate-y-1/2">
          <CarouselArrow direction="left" onClick={previous} disabled={isAtStart} />
        </div>
        <div className="pointer-events-auto absolute right-0 top-1/2 -translate-y-1/2">
          <CarouselArrow direction="right" onClick={next} disabled={isAtEnd} />
        </div>
      </div>
    </div>
  );
}

export function ProjectsCarousel({ projects }: ProjectsCarouselProps) {
  return (
    <div className="space-y-5">
      <p className="font-[family:var(--font-label)] text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-[var(--text-secondary)]">
        {projects.length} selected projects
      </p>

      <div className="relative pb-14 md:px-12 xl:px-14">
        <Carousel
          responsive={responsive}
          arrows={false}
          customButtonGroup={<ProjectsButtonGroup totalProjects={projects.length} />}
          renderButtonGroupOutside
          showDots
          renderDotsOutside
          keyBoardControl
          draggable
          swipeable
          infinite={false}
          containerClass="projects-carousel"
          sliderClass="projects-carousel__track"
          itemClass="projects-carousel__item"
          dotListClass="projects-carousel__dots"
          customTransition="transform 450ms ease"
          transitionDuration={450}
          partialVisible={projects.length > 4}
        >
          {projects.map((project) => (
            <div key={project.title} className="h-full px-3 py-1">
              <ProjectCard project={project} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
