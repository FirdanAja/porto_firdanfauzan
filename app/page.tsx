import Image from "next/image";
import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "./components/SplitText/SplitText";
import BlurText from "./components/BlurText/BlurText";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import Squares from "./components/Squares/Squares";
import GradientText from "./components/GradientText/GradientText";
import CircularText from "./components/CircularText/CircularText";
import ScrollVelocity from "./components/ScrollVelocity/ScrollVelocity";
import { Card } from "./components/Cards/Card";
import { WavyBackground } from "./components/Wavy/Wavy-background";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black">
      {/* Background Squares */}
      <div className="absolute inset-0 w-full h-full bg-transparent opacity-30">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="#FACC15"
          hoverFillColor="#FACC15"
        />
      </div>
      {/* Hero Section */}
      <div
        className="container mx-auto min-h-screen flex items-center px-4"
        data-aos="fade-up"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 w-full h-full">
          {/* Text Content */}
          <div className="md:col-span-6 flex items-center">
            <div className="flex flex-col gap-6">
              <AnimatedContent
                distance={150}
                direction="horizontal"
                reverse={false}
                config={{ tension: 80, friction: 20 }}
                initialOpacity={0.2}
                animateOpacity
                scale={1.1}
                threshold={0.2}
              >
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl text-white font-bold">
                    I'm Ready For Job
                  </h1>
                  <RotatingText
                    texts={["Web Design", "Web Development", "Web Programming"]}
                    mainClassName="px-2 sm:px-2 md:px-3 bg-[#FACC15] text-black overflow-hidden py-0.5 sm:py-1 justify-center rounded-lg text-2xl font-bold inline-flex transition-all"
                    staggerFrom="last"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{
                      type: "spring",
                      damping: 30,
                      stiffness: 400,
                    }}
                    rotationInterval={2000}
                  />
                </div>
              </AnimatedContent>

              <div className="flex flex-col items-start text-white">
                <SplitText
                  text="I'm Firdan Fauzan"
                  className="text-4xl md:text-6xl font-semibold text-start"
                  delay={50}
                  animationFrom={{
                    opacity: 0,
                    transform: "translate3d(0,50px,0)",
                  }}
                  animationTo={{
                    opacity: 1,
                    transform: "translate3d(0,0,0)",
                  }}
                  threshold={0.2}
                  rootMargin="-50px"
                />
                <SplitText
                  text="FrontEnd Developer"
                  className="text-4xl md:text-6xl font-semibold text-start text-[#FACC15]"
                  delay={75}
                  animationFrom={{
                    opacity: 0,
                    transform: "translate3d(0,50px,0)",
                  }}
                  animationTo={{
                    opacity: 1,
                    transform: "translate3d(0,0,0)",
                  }}
                  threshold={0.2}
                  rootMargin="-50px"
                />
              </div>

              <BlurText
                text="I am a freelance Frontend Developer from Indonesia with over 3 years of experience in web development. I help clients build responsive, modern, and user-focused websites and web applications. From landing pages and dashboards to complex web systems, I’m experienced in handling a wide range of web development projects. Currently, I’m also part of the Alope World startup team as a Frontend Developer, where I contribute to developing interactive and functional user interfaces. I work closely with designers, backend engineers, and product teams to ensure an optimal user experience."
                delay={50}
                animateBy="words"
                direction="top"
                className="text-base md:text-xl mb-8 text-white text-justify leading-relaxed tracking-wide max-w-3xl"
              />

              <div className="flex items-center">
                <GradientText
                  colors={["#FACC15", "#C6F10E", "#40ffaa", "#40ffaa"]}
                  animationSpeed={3}
                  showBorder={false}
                  className="px-8 py-2 rounded-lg border"
                >
                  Let's Connect
                </GradientText>
              </div>
            </div>
          </div>

          {/* Lanyard and CircularText (Desktop Only) */}
          <div className="hidden md:block md:col-span-6 relative">
            <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
            <CircularText
              text="ALOPE*WORLD*"
              onHover="speedUp"
              spinDuration={20}
              className="absolute top-52 right-28"
            />
          </div>
        </div>
      </div>
      {/* Skills Section */}
      <div className="w-full min-h-screen px-4 text-white">
        <ScrollVelocity
          texts={["Web Developer FrontEnd ", "Ngopi Boleh, Ngoding Harus."]}
        />

        <div className="py-20 md:py-36">
          <div className="max-w-6xl mx-auto text-center relative mb-16">
            <h2 className="text-[120px] md:text-[80px] font-extrabold text-white/10 absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">
              Skills
            </h2>
            <h2 className="text-4xl md:text-7xl font-bold text-[#FACC15] relative z-10">
              My Skills
            </h2>
            <p className="mt-6 text-gray-300 text-lg">
              Skilled in designing and building interactive websites, with a
              focus on creating a seamless user experience.
            </p>
          </div>

          <div className="w-full overflow-hidden">
            <div className="flex animate-marquee gap-4 min-w-max py-1">
              {[...Array(2)].map((_, repeatIndex) =>
                [
                  "/assets/icons/html.svg",
                  "/assets/icons/css.svg",
                  "/assets/icons/vue.svg",
                  "/assets/icons/react.svg",
                  "/assets/icons/tailwind.svg",
                  "/assets/icons/NextJS-Dark.svg",
                  "/assets/icons/node.svg",
                  "/assets/icons/ts.svg",
                  "/assets/icons/js.svg",
                  "/assets/icons/Git.svg",
                  "/assets/icons/VSCode.svg",
                  "/assets/icons/Github.svg",
                  "/assets/icons/PHP.svg",
                  "/assets/icons/Bootstrap.svg",
                ].map((src, i) => (
                  <div
                    key={`${repeatIndex}-${i}`}
                    className="backdrop-blur-md bg-white/10 border border-white/10 shadow-md rounded-xl p-4 flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Image src={src} alt={`icon-${i}`} width={64} height={64} />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Projects Section */}
      <div className="px-4 bg-black text-white">
        <div className="max-w-6xl mx-auto text-center relative mb-16">
          <h2 className="text-[120px] md:text-[80px] font-extrabold text-white/10 absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">
            Project
          </h2>
          <h2 className="text-2xl md:text-7xl font-bold text-[#FACC15] relative z-10">
            Our Projects
          </h2>
          <p className="mt-6 text-gray-300 text-lg">
            This is a project that I created alone or with a team
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-2">
          {/* Project Cards */}
          {[
            {
              title: "Nuteam",
              href: "https://nuteam.id/",
              image: "/assets/image/nuteam.png",
              desc: "Company Profile NUTEAM.",
            },
            {
              title: "Safrenz",
              href: "https://safrenz.com/",
              image: "/assets/image/safrenz.png",
              desc: "Project Company Profile Safrenz.",
            },
            {
              title: "AlopeTaste",
              href: "https://teknovistafest-alope-taste-house.vercel.app/",
              image: "/assets/image/alopetaste.png",
              desc: "Web Food & Baverage.",
              bg: "bg-gradient-to-br from-green-500 via-teal-500 to-cyan-500",
            },
            {
              title: "Warisan Nusantara",
              href: "https://warisannusantara.vercel.app/",
              image: "/assets/image/warisannusantara.png",
              desc: "Web Cultured Competition.",
              bg: "bg-gradient-to-br from-pink-500 via-rose-500 to-red-500",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="flex items-center justify-center mb-6 sm:mb-0"
            >
              <Card title={project.title} href={project.href}>
                <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
                  <h3 className="font-bold text-base text-slate-100">
                    {project.title}
                  </h3>
                  <div className="text-base font-normal">
                    <span className="text-slate-500">{project.desc}</span>
                  </div>
                  <div className="flex flex-1 w-full rounded-lg mt-4 overflow-hidden">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className={`flex-1 w-full h-full ${project.bg}`} />
                    )}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
        <div className="mt-20 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-2">
          {/* Project Cards */}
          {[
            {
              title: "Ini Jabar",
              href: "https://ifest-alope-ini-jabar.vercel.app/",
              image: "/assets/image/inijabar.png",
              desc: "Web Travel,National Web Competition.",
            },
            {
              title: "Nuansa Jabar",
              href: "https://wdc-alope-team.vercel.app/",
              image: "/assets/image/nuansajabar.png",
              desc: "Nuansa Jabar, National Web Competition.",
            },
            {
              title: "Sundara Batik",
              href: "https://i-fest-13-wdc-alope-anonymous-universitas-kuningan-owxi.vercel.app/",
              image: "/assets/image/sundarabatik.png",
              desc: "Sundara Batik, National Web Competition.",
              bg: "bg-gradient-to-br from-green-500 via-teal-500 to-cyan-500",
            },
            {
              title: "IndoWonders",
              href: "https://alope-community.github.io/Competition_PARASICT_IndoWonder/",
              target: "_blank",
              rel: "noopener noreferrer",
              image: "/assets/image/indowonders.png",
              desc: "IndoWonders, National Web Competition.",
              bg: "bg-gradient-to-br from-pink-500 via-rose-500 to-red-500",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="flex items-center justify-center mb-6 sm:mb-0"
            >
              <Card title={project.title} href={project.href}>
                <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[20rem]">
                  <h3 className="font-bold text-base text-slate-100">
                    {project.title}
                  </h3>
                  <div className="text-base font-normal">
                    <span className="text-slate-500">{project.desc}</span>
                  </div>
                  <div className="flex flex-1 w-full rounded-lg mt-4 overflow-hidden">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className={`flex-1 w-full h-full ${project.bg}`} />
                    )}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        <div className="flex justify-end pt-16 px-10">
          <GradientText
            colors={["#FACC15", "#C6F10E", "#40ffaa", "#40ffaa"]}
            animationSpeed={3}
            showBorder={false}
            className="px-8 py-2 rounded-lg border"
          >
            More Coming Soon
          </GradientText>
        </div>
      </div>

      <WavyBackground className="max-w-4xl mx-auto pb-40">
        <p className="text-2xl md:text-4xl lg:text-5xl text-white font-bold inter-var text-center">
          I'm Available for freelancing
        </p>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          I'm currently available for freelance work! Whether you need a
          professional website, a custom web app, or assistance with front-end
          or back-end development, I'm here to help bring your project to life.
          Let’s connect and discuss how I can support your next project!
        </p>
      </WavyBackground>

      <div className="max-w-6xl mx-auto text-center relative mb-16">
        {/* Text Heading */}
        <h2 className="text-[120px] md:text-[80px] font-extrabold text-white/10 absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">
          Contact
        </h2>
        <h2 className="text-2xl md:text-7xl font-bold text-[#FACC15] relative z-10">
          Contact Me
        </h2>
        <p className="mt-6 text-gray-300 text-lg">
          If you have any questions or would like to work together, feel free to
          reach out!
        </p>
        <div className="relative w-full min-h-screen bg-black overflow-hidden">
          {/* Background Squares */}
          <div className="absolute inset-0 w-full h-full bg-transparent opacity-30 z-0">
            <Squares
              speed={0.5}
              squareSize={40}
              direction="diagonal"
              borderColor="#FACC15"
              hoverFillColor="#FACC15"
            />
          </div>

          {/* Lanyard (Tetap di belakang) */}
          <div className="absolute top-0 left-0 w-full h-full flex justify-start items-center z-10">
            <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
          </div>
        </div>{" "}
        {/* Konten Contact */}
        <div className="relative z-20 max-w-6xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 text-center">
            {/* Address */}
            <div className="flex flex-col items-center">
              <div className="bg-gray-800 p-3 rounded-full mb-4">
                <img
                  src="/assets/icons/address.svg"
                  alt="Address"
                  className="w-20 h-20"
                />
              </div>
              <h3 className="text-white font-bold mb-2">ADDRESS</h3>
              <p className="text-gray-400">
                Desa Cileuleuy Kec
                <br />
                Cigugur Kab Kuningan
              </p>
            </div>

            {/* Contact Number */}
            <div className="flex flex-col items-center">
              <div className="bg-gray-800 p-3 rounded-full mb-4">
                <img
                  src="/assets/icons/phone.svg"
                  alt="Phone"
                  className="w-20 h-20"
                />
              </div>
              <h3 className="text-white font-bold mb-2">CONTACT NUMBER</h3>
              <p className="text-gray-400">08814031233</p>
            </div>

            {/* Email Address */}
            <div className="flex flex-col items-center">
              <div className="bg-gray-800 p-3 rounded-full mb-4">
                <img
                  src="/assets/icons/email.svg"
                  alt="Email"
                  className="w-20 h-20"
                />
              </div>
              <h3 className="text-white font-bold mb-2">EMAIL ADDRESS</h3>
              <p className="text-gray-400">firdanfauzan5@gmail.com</p>
            </div>

            {/* Instagram*/}
            <div className="flex flex-col items-center">
              <div className="bg-gray-800 p-3 rounded-full mb-4">
                <img
                  src="/assets/icons/instagram.svg"
                  alt="Email"
                  className="w-20 h-20"
                />
              </div>
              <h3 className="text-white font-bold mb-2">INSTAGRAM</h3>
              <a
                href="https://www.instagram.com/firdanfauzan_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400"
              >
                @firdanfauzan_
              </a>
            </div>

            {/* Website Team */}
            <div className="flex flex-col items-center">
              <div className="bg-gray-800 p-3 rounded-full mb-4">
                <img
                  src="/assets/icons/world.svg"
                  alt="Team"
                  className="w-20 h-20"
                />
              </div>
              <h3 className="text-white font-bold mb-2">WEBSITE TEAM</h3>
              <a
                href="https://www.alope.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400"
              >
                www.alope.id
              </a>
            </div>
          </div>
        </div>
      </div>
      <hr className="my-4 border-dashed border-[#FACC15]" />
      <footer>
        <div className="row">
          <div className="col-md-12 text-lg pb-5 text-white text-center">
            <p>
              Copyright Portofolio FirdanFauzan &copy;{" "}
              {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
