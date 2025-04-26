import React from 'react';

function About() {
  return (
    <>
      {/* Breadcrumb Navigation */}
      <nav className="text-sm py-4 px-6 bg-gray-50">
        <ol className="flex items-center space-x-2">
          <li>
            <a href="/" className="text-gray-600 hover:text-gray-900">
              HOME
            </a>
          </li>
          <li>&gt;</li>
          <li className="font-semibold text-gray-900">About Us</li>
        </ol>
      </nav>

      {/* Main Heading */}
      <header className="text-center my-8">
        <h1 className="text-3xl font-bold text-gray-900">About Us</h1>
      </header>

      {/* Main Content */}
      <div className="main flex flex-col md:flex-row m-7 gap-6">
        {/* Left Column */}
        <div className="left flex flex-col md:w-1/2 gap-y-5 text-gray-700">
          <p>
            J. was established in 2002 with a unique philosophy to revive the country's cultural heritage and make Shalwar Kameez; the popular wear, and soon became one of the most famous and recognizable clothing brands in South East Asia.
          </p>
          <p>
            It expanded its store network to 100+ outlets nationwide. J. has further expanded globally by opening 20 outlets in the UK, Australia, Canada, New Zealand, UAE, Qatar, to name a few.
          </p>
          <p>
            We pride ourselves on being a complete apparel brand that deals in eastern wear, perfumes, footwear and accessories for women and men of all ages. We work in different categories and textures like silk, chiffon, cotton, cambric, lawn and fabrics that suit the season.
          </p>
          <p>
            Our clothing line reflects current fashion trends with modest detailing. Designs are inspired from Renaissance, Aztec, Fusion, Arabian and other aesthetics.
          </p>
          <p>
            From the humble beginnings of a brand that believed in being Soully East, we have moved forward with more decorative touches to our portfolio and have strung together a loyal base of customers all over the world.
          </p>
        </div>

        {/* Right Column */}
        <div className="right md:w-1/2 flex justify-center items-center">
          <img
            src="https://www.junaidjamshed.com/media/wysiwyg/ABOUTUS.jpg"
            alt="About Junaid Jamshed"
            className="w-full h-auto rounded"
          />
        </div>
      </div>

      {/* Secondary Heading */}
      <header className="text-center my-8">
        <h2 className="text-3xl font-bold text-gray-900">THIS IS J.</h2>
      </header>

      {/* Video Section */}
      <div className="video w-full md:w-3/4 mx-auto mb-10">
        <video
          className="w-full h-auto rounded shadow"
          src="/j.mp4"
          controls
          autoPlay
          muted
          loop
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
}

export default About;
