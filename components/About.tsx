import Image from "next/image";

const About = () => {
    return (
        <section className="max-w-4xl mx-auto px-4 py-20 text-center" id="about">

            <div className="flex justify-center mb-8">
                <div className="bg-gray-200 w-48 h-48 flex items-center justify-center">
                    <Image
                        src="/contact-logo.png"
                        height={28}
                        width={28}
                        alt="About"
                        className="w-full h-full "
                    />
                </div>
            </div>

            <h2 className="text-2xl font-medium">My name is</h2>
            <h1 className="text-3xl font-bold mb-4">Devansh Kumar Gupta</h1>


            <p className="italic text-gray-600 mb-8">
                Some beautiful paths can’t be discovered without getting lost.
            </p>


            <p className="mb-4">
                I am a passionate <strong>Full Stack Web and App Developer</strong> who also creates content
                around <strong>technology</strong>, <strong>travel</strong>, and <strong>personal growth</strong>. I
                specialize in building
                <strong> scalable</strong>, <strong>responsive</strong> applications across both frontend and backend
                using
                modern frameworks and cloud platforms. Whether I’m developing features, writing technical blogs, or
                exploring new tools,
                I approach every project with <strong>curiosity</strong> and a focus on <strong>impact</strong> 🚀.
            </p>

            <p className="mb-4">
                This platform is where my two worlds meet — where <em>lines of code</em> and <em>lines of
                storytelling</em> converge.
                Many of the insights I share here are written during real-world travel moments 🌄, blending the
                perspective
                of a
                digital nomad with the mindset of a problem-solver. Whether you're here
                to <strong>learn</strong>, <strong>build</strong>,
                or <strong>explore</strong>, you are in the right place.
                Let’s <strong>create</strong>, <strong>iterate</strong>,
                and <strong>discover</strong> — one project and one post at a time. 💡🧠💻
            </p>

            <p className="text-sm italic text-gray-600 mt-6">
                🙏 Special thanks to the <strong>ExpertHire template</strong> for powering this site’s clean and
                professional design —
                helping bring my ideas to life with <strong>clarity</strong> and <strong>style</strong> ✨.
            </p>
        </section>
    );
};

export default About;
