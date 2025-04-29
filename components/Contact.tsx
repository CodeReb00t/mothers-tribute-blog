const Contact = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16" id="contact">
      <h2 className="text-4xl font-bold mb-12">Contact</h2>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Image + Text */}
        <div>
          <div className="bg-gray-200 aspect-square flex items-center justify-center">
            <img
              src="/placeholder-image.png"
              alt="Contact Placeholder"
              className="w-16 h-16 opacity-50"
            />
          </div>
          <p className="mt-6 text-gray-700 text-sm leading-relaxed">
            Donec accumsan purus nec ligula volutpat posuere. Integer lectus
            lorem, mollis eget varius condimentum, vehicula eu arcu. Duis
            viverra orci vel pretium eleifend. Phasellus sit amet pellentesque
            risus. Nulla ut ex sit amet nisi malesuada semper.
          </p>
        </div>

        {/* Right Form */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="border-b border-gray-300 outline-none py-2"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border-b border-gray-300 outline-none py-2"
            />
          </div>

          <input
            type="text"
            placeholder="Subject"
            className="w-full border-b border-gray-300 outline-none py-2"
          />

          <textarea
            rows={4}
            placeholder="Your message"
            className="w-full border-b border-gray-300 outline-none py-2 resize-none"
          ></textarea>

          <button
            type="submit"
            className="bg-black text-white px-6 py-2 font-semibold hover:bg-gray-800 transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
