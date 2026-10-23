/** Content for the RouteLens demo page (/routelens). */

export const routeLensLinks = {
  marketplace:
    "https://marketplace.visualstudio.com/items?itemName=harshdazz.routelens-api-client",
  github: "https://github.com/harshdazz/routelens",
  releases: "https://github.com/harshdazz/routelens/releases",
};

export const routeLensSectionNav = [
  { label: "Demo", href: "#demo" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Features", href: "#features" },
  { label: "Install", href: "#install" },
  { label: "FAQ", href: "#faq" },
];

export const routeLensTrustBadges = [
  "Free and open source",
  "Your code never leaves your computer",
  "Works with Next.js and Express",
];

/** The guided demo: one entry per step of the mock VS Code window. */
export const routeLensDemoSteps = [
  {
    title: "Open your project",
    text: "Open any Next.js or Express project in VS Code. RouteLens finds where your API runs on its own, and tells you how it knew.",
  },
  {
    title: "See every route",
    text: "Every API route in your project appears in the RouteLens sidebar. No copying links out of your code.",
  },
  {
    title: "Send one with a click",
    text: "Click Send above any route. The answer appears right next to it, along with how long it took.",
  },
  {
    title: "Test everything",
    text: "One click checks every route. A green tick means it works, a red cross shows you exactly what broke.",
  },
  {
    title: "Let your AI fix it",
    text: "Ask Copilot, Claude Code or Cursor to “test my API and fix what's broken”. It reads the failure, fixes it and checks again.",
  },
];

export const routeLensHowItWorks = [
  {
    title: "Open",
    text: "Open your project in VS Code. RouteLens finds your API and every route in it.",
  },
  {
    title: "Click",
    text: "Press Test everything. Every route gets checked in one go.",
  },
  {
    title: "Done",
    text: "See what works and what doesn't, right next to the code that handles it.",
  },
];

/** Everyday questions RouteLens answers, in the words people search with. */
export const routeLensQuestions = [
  {
    question:
      "Do I really have to copy every link from my code into my API tool?",
    answer:
      "No. RouteLens reads your project and lists every route for you, ready to send.",
  },
  {
    question: "What should I put in the request body?",
    answer:
      "RouteLens fills in sample data that already follows the rules your code expects.",
  },
  {
    question:
      "Is there a quick way to check that my change didn't break anything?",
    answer:
      "Save the file. RouteLens tests that route again and shows a tick or a cross in a second or two.",
  },
  {
    question: "How do I test routes that need me to log in?",
    answer:
      "RouteLens notices, asks for your login once, keeps it in your computer's secure keychain and handles the rest.",
  },
  {
    question: "My API isn't running. Do I need to open a terminal?",
    answer:
      "No. RouteLens offers to start it for you, waits until it's ready and sends the request again.",
  },
  {
    question: "Can my AI assistant test my API for me?",
    answer:
      "Yes. Copilot, Claude Code and Cursor can run your tests through RouteLens, read what failed and fix it.",
  },
];

export const routeLensFeatures = [
  {
    key: "setup",
    title: "Zero setup",
    text: "Finds where your API runs, from your project's own settings, and tells you which clue it used.",
  },
  {
    key: "routes",
    title: "Finds every route",
    text: "Lists every API route in your project in its own sidebar, even when they're spread across many files.",
  },
  {
    key: "requests",
    title: "Ready-made requests",
    text: "Writes a request for every route, with sample data that fits. When your code changes, they follow.",
  },
  {
    key: "testAll",
    title: "One-click testing",
    text: "Test everything runs every route and shows a simple scoreboard: how many passed, how many failed.",
  },
  {
    key: "onSave",
    title: "Tests again when you save",
    text: "Change a route, save the file, and see the new result next to it in a second or two.",
  },
  {
    key: "server",
    title: "Starts your server",
    text: "If your app isn't running, one click starts it, waits for it, and tries again.",
  },
  {
    key: "login",
    title: "Logs in for you",
    text: "Asks for your login once, keeps it safe in your keychain, and reuses it wherever it's needed.",
  },
  {
    key: "ai",
    title: "Works with your AI",
    text: "Copilot, Claude Code and Cursor can test your API through RouteLens and fix what breaks.",
  },
  {
    key: "private",
    title: "Private by design",
    text: "Reads your code without running it, sends nothing anywhere, and has no tracking at all.",
  },
];

export const routeLensInstallSteps = [
  {
    title: "Install it from the Marketplace",
    text: "In VS Code, open the Extensions panel, search for “RouteLens API Client” by harshdazz and click Install. Or open its Marketplace page and install it from there.",
  },
  {
    title: "Open your project",
    text: "Open a Next.js or Express project. RouteLens finds your API by itself, with nothing to set up.",
  },
  {
    title: "Click Test everything",
    text: "Click the RouteLens icon in the side bar, then Test everything, and watch the results come in.",
  },
];

export const routeLensRequirements = [
  "VS Code 1.95 or newer",
  "A Next.js or Express project",
  "Windows, macOS or Linux",
];

/** The CLI and the MCP server, published on npm next to the extension. */
export const routeLensNpmCommands = [
  {
    label: "Run your saved tests in a terminal or CI",
    command: "npx @routelens/cli run",
  },
  {
    label: "Give any MCP agent the RouteLens tools",
    command: "npx -y @routelens/mcp --root .",
  },
];

export const routeLensFaq = [
  {
    question: "What is RouteLens?",
    answer:
      "RouteLens is a free extension for VS Code that tests your API for you. It reads your project, finds every route, prepares a request for each one and checks them all in one click, showing the result right next to your code.",
  },
  {
    question: "Is it free?",
    answer:
      "Yes. RouteLens is free and open source under the MIT license, and the full source is on GitHub.",
  },
  {
    question: "Does it upload my code anywhere?",
    answer:
      "No. RouteLens reads your code on your own computer and never runs it. It sends nothing anywhere except the requests you, or your AI assistant, choose to run, and there is no tracking.",
  },
  {
    question: "Which projects does it work with?",
    answer:
      "Next.js (both kinds of API routes) and Express, including larger projects where routes are split across many files. Support for more frameworks is planned.",
  },
  {
    question: "Do I need AI to use it?",
    answer:
      "No. Everything works without AI. If you already use Copilot, Claude Code or Cursor, RouteLens lets them test and fix your API too, and it keeps them to safe addresses only.",
  },
  {
    question: "Will it change my code?",
    answer:
      "RouteLens itself never edits your code. It keeps its own files in a .routelens folder in your project, which you can share with your team. Code changes only happen when you, or an AI assistant you asked, make them.",
  },
  {
    question: "Can I use it in Cursor or VSCodium?",
    answer:
      "Yes. Download the latest routelens-api-client .vsix file from the GitHub releases page. Then open the Extensions panel, click the ⋯ menu at the top, choose “Install from VSIX…” and pick the file. A listing on Open VSX, the store Cursor and VSCodium use, is on its way.",
  },
];
