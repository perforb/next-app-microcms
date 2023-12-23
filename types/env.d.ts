/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MICROCMS_SERVICE_DOMAIN: string,
      MICROCMS_API_KEY: string,
    }
  }
}

export {}