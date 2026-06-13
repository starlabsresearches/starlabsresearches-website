import { useState } from "react";
import ResearchCard from "../components/ResearchCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Research() {
  const [filter, setFilter] = useState("All");

  const researchItems = [
    {
      category: "Ongoing",
      image:
        "https://starlabsresearches-com.lovable.app/assets/research-1-CYhnKZTb.jpg",
      title:
        "Data-Driven Studies of Stellar Rotation and Age Relationships",
      tags: ["Ongoing", "Ongoing Research"],
      year: "2026",
      team: "Star Labs Researches",
      areas:
        "Stellar Astrophysics, Gyrochronology, Stellar Evolution, Data Analysis",
      description:
        "This project investigates the relationship between stellar rotation and age using modern observational datasets. The research focuses on understanding departures from classical gyrochronology models and exploring how stellar rotation evolves over time.",
    },

    {
      category: "Published",
      image:
        "https://starlabsresearches-com.lovable.app/assets/research-2-DcgJQGoE.jpg",
      title:
        "A Unified Bayesian Study of Exoplanet Populations: From Survey Biases to Circumbinary Systems in Kepler and TESS",
      tags: ["Published", "Journal Article"],
      year: "2026",
      team: "S. Bhavani, D. A. Sree, A. Premjit",
      areas:
        "Exoplanets, Bayesian Statistics, Astrophysical Populations",
      description:
        "Investigated planetary occurrence and multiplicity using Bayesian hierarchical modelling on planetary systems observed by the Kepler and TESS missions.",
    },

    {
      category: "Presentations",
      image:
        "https://starlabsresearches-com.lovable.app/assets/research-3-CC_Q7wSK.jpg",
      title:
        "Statistical Approaches to Exoplanet Detection and Characterization Using Photometric Time-Series Data",
      tags: ["Presentation", "Conference"],
      year: "2025",
      team: "Star Labs Researches",
      areas:
        "Exoplanets, Time-Series Analysis, Statistics",
      description:
        "Explored statistical methodologies for identifying and characterizing exoplanet signatures within photometric datasets.",
    },

    {
      category: "Projects",
      image:
        "https://starlabsresearches-com.lovable.app/assets/research-1-CYhnKZTb.jpg",
      title:
        "StarXplain: Explainable AI for Stellar Variability Classification",
      tags: ["Project", "Completed"],
      year: "2025",
      team: "Star Labs Researches",
      areas:
        "Machine Learning, Explainable AI, Variable Stars",
      description:
        "Investigated whether explainable artificial intelligence methods can recover physically meaningful variability signatures from TESS observations.",
    },
  ];

  const filteredResearch =
    filter === "All"
      ? researchItems
      : researchItems.filter(
          (item) => item.category === filter
        );

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#020817] text-white pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <h1 className="text-5xl font-bold text-center mb-4">
            Our Research
          </h1>

          <p className="text-center text-gray-400 mb-12">
            Exploring the universe through data,
            statistics, and computational methods.
          </p>

          {/* Filter Buttons */}
          <div className="flex justify-center gap-3 flex-wrap mb-12">
            {[
              "All",
              "Published",
              "Presentations",
              "Projects",
              "Ongoing",
            ].map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`px-4 py-2 rounded-full text-sm transition ${
                  filter === item
                    ? "bg-blue-500 text-white"
                    : "bg-slate-800 border border-slate-700 text-white hover:border-blue-500"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Research Cards */}
          <div className="space-y-8">
            {filteredResearch.map((item) => (
              <ResearchCard
                key={item.title}
                image={item.image}
                title={item.title}
                tags={item.tags}
                year={item.year}
                team={item.team}
                areas={item.areas}
                description={item.description}
              />
            ))}
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}
