import React from 'react';

const About = () => {
  return (
    <div className="p-8 pt-16 grid grid-cols-1 flex-1 md:ml-96">
      <h1 className="font-bold text-2xl">About</h1>
      <div className="flex mx-auto my-2 border-t border-gray-500 w-3/4"></div>
      <p className="text-justify h-screen text-lg">
        Séries Parallèles is an ongoing curation of physical
        exhibitions that represent artists interrogating the
        boundaries of fine art and the rules tied into industrial
        design philosophy. The name highlights how each artist gets a
        parallel amount of space designated to them to install. The
        first show of this series was 4 by 4 | 4 par 4 and allocated
        4ft x 4ft of space to four artists, with the opening reception
        on May 9th at The Vault Gallery in Victoria, British Columbia.
        This exhibition was in collaboration with Design Week
        Victoria.
      </p>
    </div>
  );
};

export default About;
