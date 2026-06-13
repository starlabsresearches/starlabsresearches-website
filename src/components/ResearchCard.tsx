type ResearchCardProps = {
  image: string;
  title: string;
  tags: string[];
  year: string;
  team: string;
  areas: string;
  description: string;
};

export default function ResearchCard({
  image,
  title,
  tags,
  year,
  team,
  areas,
  description,
}: ResearchCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#123a74] bg-[#07172f] hover:border-blue-500 transition-all duration-300 flex flex-col md:flex-row">

      {/* Image Section */}
      <div className="w-full md:w-[260px] flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full min-h-[220px] object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="flex-1 p-8">

        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          {title}
        </h2>

        <div className="flex gap-2 flex-wrap mb-5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="mb-2 text-gray-300">
          <strong>Team:</strong> {team}
        </p>

        <p className="mb-2 text-gray-300">
          <strong>Year:</strong> {year}
        </p>

        <p className="mb-4 text-gray-300">
          <strong>Research Areas:</strong> {areas}
        </p>

        <p className="text-gray-200 leading-relaxed">
          {description}
        </p>

        <div className="mt-6">
          <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-4 py-2 rounded-lg transition">
            View Research
          </button>
        </div>

      </div>
    </div>
  );
}
