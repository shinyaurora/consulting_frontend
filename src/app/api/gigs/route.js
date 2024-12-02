// src/app/api/gigs/route.js

export async function GET() {
  const gigs = [
    {
      id: 1,
      title: "Web Developer",
      description: "Build awesome websites",
      location: "New York",
      salary: 100000,
      skills: ["Frontend", "Backend", "Database"],
    },
    {
      id: 2,
      title: "Graphic Designer",
      description: "Create stunning visuals",
      location: "San Francisco",
      salary: 90000,
      skills: ["Photoshop", "Paint", "Brush", "Paper"],
    },
    {
      id: 3,
      title: "Shit Designer",
      description: "Create shit piles",
      location: "Washington",
      salary: 10,
      skills: ["Food", "Toilet", "Paper", "Body"],
    },
    {
      id: 4,
      title: "Frontend Developer",
      description: "Create awesome UI",
      location: "Texas",
      salary: 120000,
      skills: ["Frontdagger", "Frontsword", "Frontmines", "Frontcoin"],
    },
    {
      id: 5,
      title: "Web Developer",
      description: "Build awesome websites",
      location: "New York",
      salary: 100000,
      skills: ["Frontend", "Backend", "Database"],
    },
    {
      id: 6,
      title: "Graphic Designer",
      description: "Create stunning visuals",
      location: "San Francisco",
      salary: 90000,
      skills: ["Photoshop", "Paint", "Brush", "Paper"],
    },
    {
      id: 7,
      title: "Shit Designer",
      description: "Create shit piles",
      location: "Washington",
      salary: 10,
      skills: ["Food", "Toilet", "Paper", "Body"],
    },
    {
      id: 8,
      title: "Frontend Developer",
      description: "Create awesome UI",
      location: "Texas",
      salary: 120000,
      skills: ["Frontdagger", "Frontsword", "Frontmines", "Frontcoin"],
    },
  ];
  return new Response(JSON.stringify(gigs), {
    headers: { "Content-Type": "application/json" },
  });
}
