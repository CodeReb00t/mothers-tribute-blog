import Image from "next/image";

const Contact = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-16" id="contact">
            <h2 className="text-4xl font-bold mb-12">Contact</h2>

            <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                    <div className="bg-gray-200 h-64 flex items-center justify-center">
                        <Image
                            src="/contact-logo.png"
                            height={35}
                            width={35}
                            alt="Contact"
                            className="  rounded-full   h-60 w-60 border-2 flex items-center justify-center"
                        />
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
                        <h2 className="text-2xl font-bold mb-4 text-center">We’d Love to Hear From You</h2>

                        <p className="mb-4">
                            Have a story about your mother that you’d like to share? Want to contribute to the blog,
                            send feedback, or simply say hello?
                            This tribute was made from the heart—and we’d love to grow it with yours.
                        </p>

                        <ul className="space-y-2 mb-4">
                            <li>📩 <strong>Email:</strong> <a href="mailto:devanshkg19@gmail.com"
                                                             className="text-blue-600 underline">devanshkg19@gmail.com</a>
                            </li>
                            <li>📸 <strong>Submit a Story:</strong> Send your story (300–600 words) and optional photo to
                                the email above.
                            </li>
                            <li>💡 <strong>Ideas or Suggestions?</strong> We’re open to collaborations, messages, or
                                anything that celebrates motherhood.
                            </li>
                        </ul>

                        <p className="text-gray-700 font-medium">
                            Your voice matters. Let’s continue to honor moms, one story at a time.
                        </p>
                    </div>

                </div>

                <form className="space-y-6 md:pt-50">
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
