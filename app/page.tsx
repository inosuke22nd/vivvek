"use client";

import {
  HeroSection,
  AboutSection,
  SkillsSection,
  ProjectsSection,
  ResumeExperienceSection,
  AchievementSection,
  ContactSection,
} from "@/components/sections";

export default function Home() {
  return (
    <div className="pt-16">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ResumeExperienceSection />
      <AchievementSection />
      <ContactSection />

      {/* Copyright Footer */}
      <footer className="bg-black/50 border-t border-white/10 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div>
              <p className="text-gray-300 text-sm">
                © {new Date().getFullYear()}{" "}
                <span className="text-white font-medium">Vivvek Kumar Singh</span>.
                All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
