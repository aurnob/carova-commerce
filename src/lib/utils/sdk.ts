import Medusa from "@medusajs/js-sdk"

let MEDUSA_BACKEND_URL = "http://localhost:9000"

if (process.env.VITE_MEDUSA_BACKEND_URL) {
  MEDUSA_BACKEND_URL = process.env.VITE_MEDUSA_BACKEND_URL
}

const isBrowser = typeof window !== "undefined"

export const sdk = new Medusa({
  baseUrl: MEDUSA_BACKEND_URL,
  publishableKey: process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY, // Ensure this key is set in your environment variables
  auth: {
    type: "jwt",
    jwtTokenStorageKey: "medusa_auth_token",
    jwtTokenStorageMethod: isBrowser ? "local" : "memory",
  },
})
