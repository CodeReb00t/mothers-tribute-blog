const About = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-20 text-center" id="about">
      {/* Main Image */}
      <div className="flex justify-center mb-8">
        <div className="bg-gray-200 w-48 h-48 flex items-center justify-center">
          <img
            src="/placeholder-image.png"
            alt="About"
            className="w-12 h-12 opacity-50"
          />
        </div>
      </div>

      {/* Name and Title */}
      <h2 className="text-2xl font-medium">My name is</h2>
      <h1 className="text-3xl font-bold mb-4">Devansh Kumar Gupta</h1>

      {/* Social Icons */}
      <div className="flex justify-center gap-4 mb-6">
        <a href="#" className="hover:opacity-75">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="hover:opacity-75">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="hover:opacity-75">
          <i className="fab fa-youtube"></i>
        </a>
        <a href="#" className="hover:opacity-75">
          <i className="fab fa-tumblr"></i>
        </a>
      </div>

      {/* Quote */}
      <p className="italic text-gray-600 mb-8">
        Some beautiful paths can’t be discovered without getting lost.
      </p>

      {/* Short Intro Text */}
      <p className="text-sm text-gray-700 max-w-2xl mx-auto mb-12 leading-relaxed">
        I'm a blog & travel creator. Explore my personal stories and travel journals. Each of my trips
        gives me a new chapter in my journey, full of inspiration and passion. I created this space
        to share those stories — for aspiring travelers and wanderers who love to get personal and
        nostalgic with the world.
      </p>

      {/* Two-Column Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-gray-200 aspect-square flex items-center justify-center">
          <img src="/placeholder-image.png" alt="Left" className="w-12 h-12 opacity-50" />
        </div>
        <div className="bg-gray-200 aspect-square flex items-center justify-center">
          <img src="/placeholder-image.png" alt="Right" className="w-12 h-12 opacity-50" />
        </div>
      </div>

      {/* Final Description Paragraph */}
      <p className="text-sm text-gray-700 leading-relaxed max-w-3xl mx-auto">
        To keep your soul refreshed & hearty, there are far better books than apartment ads or travel
        catalogues. I suggest taking a new journey. Sunrises and a golden edge of day with style,
        new eyes, and a story within a breeze. Create it. Share it. Because a picture doesn't always say it all.
        My goal is to accompany the world’s most curious souls, one post at a time.
        Most of the outgoing content on this platform was written while sipping strong black tea in a
        tent or a small beach café. Stick with me and let’s wander again or for the first time.
        🌍✈️📷
      </p>
    </section>
  );
};

export default About;
