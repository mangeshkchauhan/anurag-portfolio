'use client';

import { ShootingStars, StarsBackground } from '@/components/ui/shooting-stars';
import { contactMethods } from '@/data/contact';

export const ContactSection = () => {
  return (
    <div
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden"
    >
      <ShootingStars 
        starColor="#3b82f6"
        trailColor="#1d4ed8"
        minSpeed={8}
        maxSpeed={25}
        starCount={4}
      />
      <StarsBackground 
        starDensity={0.0003}
        allStarsTwinkle={true}
        twinkleProbability={0.8}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Let&apos;s Build Something{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Amazing
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Ready to transform your Web3 idea into a thriving ecosystem?
          </p>
        </div>

        <div className=" flex justify-center self-center items-center">
          <div className="self-center w-[600px]">
            {contactMethods.map((contact) => (
              <div key={contact.title} className="p-1">
                <a
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start p-6 bg-slate-950/90 backdrop-blur-sm rounded-3xl hover:bg-slate-900/90 transition-colors group"
                >
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                      <contact.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-white text-lg mb-1">
                      {contact.title}
                    </div>
                    <div className="text-blue-400 text-sm mb-1">
                      {contact.value}
                    </div>
                    <div className="text-gray-400 text-xs">
                      {contact.description}
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
