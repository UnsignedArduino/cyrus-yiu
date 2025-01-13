export type Environment = "development" | "preview" | "production";

export function getEnvironment(): Environment {
  if (process.env.VERCEL_ENV != undefined) {
    return process.env.VERCEL_ENV as Environment;
  } else if (process.env.NODE_ENV != undefined) {
    return process.env.NODE_ENV as Environment;
  } else {
    return "production";
  }
}
