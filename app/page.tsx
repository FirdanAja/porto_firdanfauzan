import Image from "next/image";
import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "./components/SplitText/SplitText";
import BlurText from "./components/BlurText/BlurText";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import Squares from "./components/Squares/Squares";
// import SplashCursor from "./components/SplashCursor/SplashCursor";
import GradientText from "./components/GradientText/GradientText";
import CircularText from "./components/CircularText/CircularText";
import ScrollVelocity from "./components/ScrollVelocity/ScrollVelocity";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#19222D]">
      {/* <SplashCursor  /> */}
      <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-full  bg-transparent opacity-30">
        <Squares 
          speed={0.5} 
          squareSize={40}
          direction='diagonal' // up, down, left, right, diagonal
          borderColor='#FACC15'
          hoverFillColor='#FACC15'
        />
      </div>
      <div className="container mx-auto h-screen">
        <div className="grid grid-cols-12 ">
          <div className="col-span-6">
            <div className="flex items-center h-full">
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
                  <div 
                  className="flex items-center gap-2">
                    <h1 className="text-2xl text-white font-bold">I'm Ready For Job</h1>
                    <RotatingText 
                        texts={['Web Design', 'Web Depelopment', 'Web Programing']}
                        mainClassName="px-2 sm:px-2 md:px-3 bg-[#FACC15] text-black overflow-hidden py-0.5 sm:py-1  justify-center rounded-lg text-2xl font-bold inline-flex transition-all"
                        staggerFrom={"last"}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        rotationInterval={2000}
                    />
                  </div>
                </AnimatedContent>
                <div className="flex flex-col items-start text-white">
                  <SplitText 
                    text="I'm Firdan Fauzan"
                    className="text-6xl font-semibold text-start"
                    delay={50}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    threshold={0.2}
                    rootMargin="-50px"
                  />
                  <SplitText 
                    text="FrontEnd Developer"
                    className="text-6xl font-semibold text-start text-[#FACC15]"
                    delay={75}
                    animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                    animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                    threshold={0.2}
                    rootMargin="-50px"
                  />
                </div>
                <BlurText 
  text="I am a freelance Frontend Developer from Indonesia with over 3 years of experience in web development.
I help clients build responsive, modern, and user-focused websites and web applications. From landing pages and dashboards to complex web systems, I’m experienced in handling a wide range of web development projects.
Currently, I’m also part of the Alope World startup team as a Frontend Developer, where I contribute to developing interactive and functional user interfaces. I work closely with designers, backend engineers, and product teams to ensure an optimal user experience."
  delay={50}
  animateBy="words"
  direction="top"
  className="text-xl mb-8 text-white text-justify"
/>

                <div className="flex items-center">
                  <GradientText
                    colors={["#FACC15",  "#C6F10E","#40ffaa", "#40ffaa"]}
                    animationSpeed={3}
                    showBorder={false}
                    className="px-8 py-2 rounded-lg border"
                  >
                    Let's Talk
                  </GradientText>
                </div>

              </div>
            </div>
          </div>
          <div className="col-span-6 relative">
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
      <div className="w-full px-0 min-h-screen text-white">
  <ScrollVelocity 
    texts={['Alope Word', 'Ngopi Boleh, Ngoding Harus.']} 
  />{/* Portfolio Section */}
  <div className="w-full px-4 py-16 bg-[#19222D] text-white">
  <div className="max-w-6xl mx-auto text-center relative mb-16">
    {/* Teks besar gelap di belakang */}
    <h2 className="text-[100px] font-extrabold text-white/5 absolute top-28 left-1/2 transform -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none">
      Skills
    </h2>

    {/* Teks utama */}
    <h2 className="text-5xl sm:text-8xl font-bold text-[#FACC15] relative z-10">
      My Skill
    </h2>

    {/* Deskripsi tambahan (opsional) */}
    <p className="mt-10 text-gray-300 text-lg">
    Skilled in designing and building interactive websites, with a focus on creating a seamless user experience.
    </p>
  </div>

  {/* Grid Logo Tools */}
  <div className="w-full overflow-x-auto">
  <div className="flex gap-8 items-center px-4 py-6 min-w-max">
    <Image src="assets/icons/Astro.svg" alt="HTML5" width={64} height={64} className="hover:scale-110 transition-transform" />
    <Image src="/assets/icons/css3.svg" alt="CSS3" width={64} height={64} className="hover:scale-110 transition-transform" />
    <Image src="/assets/icons/javascript.svg" alt="JavaScript" width={64} height={64} className="hover:scale-110 transition-transform" />
    <Image src="/assets/icons/react.svg" alt="React" width={64} height={64} className="hover:scale-110 transition-transform" />
    <Image src="/assets/icons/tailwindcss.svg" alt="Tailwind CSS" width={64} height={64} className="hover:scale-110 transition-transform" />
    <Image src="/assets/icons/nextjs.svg" alt="Next.js" width={64} height={64} className="hover:scale-110 transition-transform" />
    <Image src="/assets/icons/php.svg" alt="PHP" width={64} height={64} className="hover:scale-110 transition-transform" />
    <Image src="/assets/icons/laravel.svg" alt="Laravel" width={64} height={64} className="hover:scale-110 transition-transform" />
    <Image src="/assets/icons/git.svg" alt="Git" width={64} height={64} className="hover:scale-110 transition-transform" />
    <Image src="/assets/icons/github.svg" alt="GitHub" width={64} height={64} className="hover:scale-110 transition-transform" />
    <Image src="/assets/icons/figma.svg" alt="Figma" width={64} height={64} className="hover:scale-110 transition-transform" />
    <Image src="/assets/icons/vscode.svg" alt="VSCode" width={64} height={64} className="hover:scale-110 transition-transform" />
  </div>
</div>
</div>
</div>
    </div>
  );
}
