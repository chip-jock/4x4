import React from 'react';

const ExhibitionText = () => {
  return (
    <div className="p-8 grid grid-cols-1 flex-1 md:ml-96 pt-16">
      <div className="text-lg mb-4">
        <h1 className="text-2xl font-bold pb-4">
          Four-Hundreds (4-24-24)
        </h1>
        <p className="text-lg font-light pb-4">
          Four 100-word ekphrastic responses to works presented in 4x4
        </p>
        <p className="font-semibold text-xl">Danica Pinteric</p>
      </div>
      <div className="flex mx-auto my-2 border-t border-gray-500 w-3/4"></div>
      <div className="lg:flex lg:flex-wrap lg:justify-between lg:space-x-8 space-y-4">
        <div className="flex-1 mb-6 text-justify break-inside-avoid lg:max-w-md lg:mt-4">
          <h2 className="text-xl font-bold mb-2">First-Hundred</h2>
          <div className="text-lg">
            <p className="mb-4">
              Impressionism is a narrow term with big opportunity.
              Wading through stale terminology, we could forge a path
              that widens.
            </p>
            <p className="mb-4">
              Impressions are clues that beckon a narrative; Outlines
              of grass on bare legs. Pillow creases embossed on sleepy
              cheeks.
            </p>
            <p className="mb-4">
              I want to be impressionable forever. To be otherwise is
              to be repellent. Tell me your impression. Have one of
              me. One day I could impress you. Or myself, by perching
              across four legs. Spread over hands and knees.{' '}
              <span className="italic">Impressive.</span>
            </p>
            <p className="mb-4">
              A parrot mimics its heart’s companion. Babbling from an
              open cage. A scene for the Empress. A serenade for, and
              of, its life.
            </p>
          </div>
        </div>

        <div className="flex-1 mb-6 text-justify break-inside-avoid lg:max-w-md">
          <h2 className="text-xl font-bold mb-2">Second-Hundred</h2>
          <div className="text-lg">
            <p className="mb-4">
              Philippians 4:4. Rejoice, always, again, rejoice. Spin
              cycle, rinse, release; always. Tables twirling on
              repeat. Washing away this evening, a cascading starscape
              suspended on the line. Vibrant winds catch the sails of
              the night, a blooming blueprint of our bodies, their
              togetherness is happening tonight. Nearby, an animal
              howls and a car radio blesses warm pavement with the
              welcome ricochet of a beloved groove. :) It takes time
              passing to appreciate the pleasures of being reflective.
              A reflective surface is never just one thing, it finds a
              community. The hourglass always anticipates being
              flipped. A tumble cycle. Rejoice, always, again.
            </p>
          </div>
        </div>

        <div className="flex-1 mb-6 text-justify break-inside-avoid lg:max-w-md">
          <h2 className="text-xl font-bold mb-2">Third-Hundred</h2>
          <div className="text-lg">
            <p className="mb-4">
              Straight spines and skylines, crystal towers scatter
              lamp light after sunset. A strand of light blurs in the
              puddles on the bank of a creek, or an enthusiastic
              fountain. The glimmer yawns for weeks, performing its
              own constellations that bob and blink in the crashing
              waves. Ash never settles in water this active.
            </p>
            <p className="mb-4">
              Light and dark are what fill a home. That, and an ethic,
              a code of conduct. Home for some is a firepit and mesh
              netting to fend off insects. For others, home is a suit,
              a tie, a good cologne, crisp cardstock, and dealing with
              the devil.
            </p>
          </div>
        </div>

        <div className="flex-1 mb-6 text-justify break-inside-avoid lg:max-w-md">
          <h2 className="text-xl font-bold mb-2">Fourth-Hundred</h2>
          <div className="text-lg">
            <p className="mb-4">
              Our livelihood depends on an ebb and flow between
              ecstasy and despair. Right now the balance is unkindly
              askew. It should come in swells and waves: triumphant,
              then mellowed, but always near enough that we could spot
              it on our horizon. We are in a desperate deficit of
              ecstasy. Organic, free-range, 100-mile local joys are
              scarce. We must locate it before it dissolves entirely.
              In order to find it, we must call its name and spread
              our hearts out. We must reach our arms in all
              directions. To restore the equilibrium, grab on tightly
              to gratitude, dismay, fortune, and fear.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExhibitionText;
