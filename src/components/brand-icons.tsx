type IconProps = {
  className?: string;
  title?: string;
};

export function LinkedInIcon({ className, title = "LinkedIn" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : "presentation"}
      className={className}
    >
      {title ? <title>{title}</title> : null}
      <path
        fill="currentColor"
        d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0z"
      />
    </svg>
  );
}

export function TikTokIcon({ className, title = "TikTok" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : "presentation"}
      className={className}
    >
      {title ? <title>{title}</title> : null}
      <path
        fill="currentColor"
        d="M21 8.2a7.3 7.3 0 0 1-4.3-1.4v7.4a6.4 6.4 0 1 1-6.4-6.4c.2 0 .5 0 .7.1v3.2a3.2 3.2 0 1 0 2.2 3.1V2h3.2a4.1 4.1 0 0 0 4.6 4.1V8.2z"
      />
    </svg>
  );
}

export function WhatsAppIcon({ className, title = "WhatsApp" }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : "presentation"}
      className={className}
    >
      {title ? <title>{title}</title> : null}
      <path
        fill="currentColor"
        d="M20.5 3.5A11 11 0 0 0 2.1 17.7L1 23l5.4-1.1A11 11 0 0 0 20.5 3.5zm-8.5 17a9.1 9.1 0 0 1-4.6-1.3l-.3-.2-3.2.7.7-3.1-.2-.3A9.1 9.1 0 1 1 12 20.5zm5-6.8c-.3-.1-1.6-.8-1.9-.9s-.4-.1-.6.1-.7.9-.8 1.1-.3.2-.6.1a7.4 7.4 0 0 1-2.2-1.4 8.2 8.2 0 0 1-1.5-1.9c-.2-.3 0-.4.1-.6l.4-.5.1-.2c.1-.1 0-.3 0-.4s-.6-1.4-.8-1.9-.4-.4-.6-.4h-.5c-.2 0-.4.1-.6.3s-.8.8-.8 1.9.8 2.2.9 2.3c.1.2 1.6 2.5 3.8 3.5 1.4.6 1.8.6 2.5.5.4 0 1.2-.5 1.4-1s.2-.9.1-1-.3-.2-.6-.3z"
      />
    </svg>
  );
}
