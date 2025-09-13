import SectionHeader from "./SectionHeader";

const question = [
  {
    title: " How long does it take?",
    subTitle:
      "5 days from start to finish - design, development, and deployment included.",
  },
  {
    title: "Do you provide revisions?",
    subTitle:
      " Yes, unlimited revisions until you're 100% satisfied with the final result.",
  },
  {
    title: "What's the payment process?",
    subTitle:
      " 50% upfront to get started, 50% after final delivery and your approval.",
  },
  {
    title: "Can you deploy on my hosting?",
    subTitle:
      "Absolutely! Deployment is included in every package, on your hosting or ours.",
  },
  {
    title: "Why are your prices so affordable compared to agencies?",
    subTitle:
      "We run lean without big overheads - you get the same agency-level quality at a fraction of the cost.",
  },
];
export default function GotQuestion() {
  return (
    <section className="flex items-center justify-center w-full">
      <div className="max-w-[912px]">
        <div className="flex gap-2 flex-col mx-5 md:mx-16 lg:mx-5">
          <SectionHeader
            className="text-4xl lg:text-5xl md:flex md:gap-1"
            title={"Got Questions"}
            spanItem={"?"}
            title2={"We’ve Got The Answers"}
          />
        </div>
        <div className="mt-12 flex flex-col gap-6 mx-5 md:mx-16 lg:mx-0">
          {question?.map((card, idx) => (
            <div className="p-6 bg-card rounded-xl" key={idx}>
              <div className="bg-primary w-[6px] h-[6px] rounded-full"></div>
              <h3 className="text-text-light my-5 font-manrope font-bold text-2xl">
                {card.title}
              </h3>
              <p className="text-text-secondary-light text-lg font-general">
                {card.subTitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
