'use client';

const Logo = ({ className = '' }: { className?: string }) => {
  return (
    <svg
      width="200"
      height="40"
      viewBox="0 0 200 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Glow effect */}
      <defs>
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00FF7F" />
          <stop offset="100%" stopColor="#00FF7F" stopOpacity="0.8" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="1" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Icon - Abstract K with circuit lines */}
      <g filter="url(#glow)">
        <path
          d="M20 8L28 20L20 32M20 20H35"
          stroke="#00FF7F"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="20" cy="20" r="3" fill="#00FF7F" />
        <circle cx="35" cy="20" r="3" fill="#00FF7F" />
        <circle cx="28" cy="32" r="3" fill="#00FF7F" />
        <circle cx="28" cy="8" r="3" fill="#00FF7F" />
      </g>

      {/* Text "kuhmdev" */}
      <g filter="url(#glow)">
        <text
          x="50"
          y="27"
          fill="url(#textGradient)"
          className="text-2xl font-bold"
          style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontSize: '24px',
            fontWeight: 'bold',
          }}
        >
          kuhmdev
        </text>
      </g>

      {/* Decorative circuit lines */}
      <path
        d="M45 8H190"
        stroke="#00FF7F"
        strokeWidth="0.5"
        strokeDasharray="4 4"
        strokeOpacity="0.3"
      />
      <path
        d="M45 32H190"
        stroke="#00FF7F"
        strokeWidth="0.5"
        strokeDasharray="4 4"
        strokeOpacity="0.3"
      />

      {/* Connection dots */}
      <circle cx="45" cy="8" r="1" fill="#00FF7F" />
      <circle cx="190" cy="8" r="1" fill="#00FF7F" />
      <circle cx="45" cy="32" r="1" fill="#00FF7F" />
      <circle cx="190" cy="32" r="1" fill="#00FF7F" />
    </svg>
  );
};

export default Logo;
