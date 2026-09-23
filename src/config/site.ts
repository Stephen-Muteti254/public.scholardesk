export const PORTALS = {
  PUBLIC: "https://scholardesk.pro",
  AUTH: "https://auth.scholardesk.pro",
  WRITER: "https://writer.scholardesk.pro",
  CLIENT: "https://client.scholardesk.pro",
  ADMIN: "https://admin.scholardesk.pro",
  ASSESSDESK: "https://assessdesk.scholardesk.pro",
} as const;

export const SITE = {
  name: "ScholarDesk",
  domain: "https://scholardesk.pro",
  email: "support@scholardesk.pro",
  address: "575 5th Ave Fl 14, New York City, New York",
  ogImage: "https://scholardesk.pro/brand/og-image.png",
} as const;

export const registerUrl = (role?: "client" | "writer") =>
  role ? `${PORTALS.AUTH}/register?role=${role}` : `${PORTALS.AUTH}/register`;

export const loginUrl = () => PORTALS.AUTH;
