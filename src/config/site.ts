export const PORTALS = {
  PUBLIC: "https://academichubpro.com",
  AUTH: "https://auth.academichubpro.com",
  WRITER: "https://writer.academichubpro.com",
  CLIENT: "https://client.academichubpro.com",
  ADMIN: "https://admin.academichubpro.com",
} as const;

export const SITE = {
  name: "Academic Hub",
  domain: "https://academichubpro.com",
  email: "support@academichubpro.com",
  address: "575 5th Ave Fl 14, New York City, New York",
} as const;

export const registerUrl = (role?: "client" | "writer") =>
  role ? `${PORTALS.AUTH}/register?role=${role}` : `${PORTALS.AUTH}/register`;

export const loginUrl = () => PORTALS.AUTH;
