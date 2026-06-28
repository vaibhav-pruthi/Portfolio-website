import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vaibhav Pruthi — Full Stack Developer & AI Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Vaibhav Pruthi — Full Stack Developer, AI Engineer, and Data Science Enthusiast building modern AI-powered web applications.",
      },
      { property: "og:title", content: "Vaibhav Pruthi — Full Stack Developer & AI Engineer" },
      {
        property: "og:description",
        content:
          "Building thoughtful AI-powered products with React, Next.js, and modern full-stack tooling.",
      },
    ],
  }),
  component: Index,
});

export function Index() {
  return null;
}