/** The RouteLens extension icon (a lens over a list of routes). */
const RouteLensIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <circle cx="10" cy="10" r="6.5" />
    <path d="M15 15l6 6" />
    <path d="M7 8.5h6M7 11.5h4" />
  </svg>
);

export default RouteLensIcon;
