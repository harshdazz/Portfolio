export const experiences = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "BNCW Enterprises",
    duration: "Sep 2025 – Sep 2026",
    summary:
      "Full-stack contributor on a Next.js and FastAPI platform serving an LLM-powered product, owning frontend surfaces while shipping backend endpoints, integrations, and RAG pipeline work.",
    highlights: [
      {
        title: "AI Chat Feature, End to End",
        description:
          "Built an LLM-powered research assistant from the FastAPI retrieval endpoint to the React UI, with multi-turn conversation state and error recovery.",
      },
      {
        title: "RAG Ingestion Pipeline",
        description:
          "Extended a pgvector-backed RAG ingestion pipeline in Python: source contracts, content preview, manual sync, and backfill.",
      },
      {
        title: "Streaming & Safe Rendering",
        description:
          "Streamed model responses over Server-Sent Events and rendered markdown through a sanitized pipeline that blocks script injection.",
      },
      {
        title: "Backend for Frontend",
        description:
          "Built Next.js API routes over market data providers and internal services, keeping credentials server-side behind one typed contract.",
      },
      {
        title: "REST APIs",
        description:
          "Shipped FastAPI endpoints with SQLAlchemy models, Pydantic schemas, permission guards, consistent error contracts, and pytest coverage.",
      },
      {
        title: "Third-Party Integrations",
        description:
          "Integrated AWS S3 for media upload, AWS SES for transactional email, and external market data via webhook and API flows.",
      },
      {
        title: "Frontend Engineering",
        description:
          "Built reusable components with Redux Toolkit, Tailwind, and Material UI, including a rich text editor, drag-and-drop, and Recharts dashboards tested with Vitest.",
      },
      {
        title: "State & Authentication",
        description:
          "Structured the Redux store and built login, registration, password reset, and email verification on JWT APIs with route guards.",
      },
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "FastAPI",
      "Python",
      "pgvector",
      "Redux Toolkit",
      "Tailwind CSS",
      "AWS S3 / SES",
      "pytest",
      "Vitest",
    ],
  },
];
