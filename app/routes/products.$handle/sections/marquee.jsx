import Marquee from '/app/components/hydrogen/Marquee';

export default function Banner() {
  const slogan = Array(10)
    .fill(null)
    .map((_, index) => (
      <div key={index} className="flex items-center gap-4 p-4 pr-0">
        <span className="font-accent">For Builders</span>
        <Star />
        <span className="font-sans">By Builders</span>
        <Star />
      </div>
    ));

  return <Marquee className="bg-black uppercase text-white">{slogan}</Marquee>;
}

const Star = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="61" height="61" fill="none">
      <path
        stroke="#F4FF68"
        strokeWidth="2"
        d="M30.5 0v61M61 31.5H0M52.8 9.6 9.6 52.8M51.4 52.8 8.2 9.6"
      />
    </svg>
  );
};
