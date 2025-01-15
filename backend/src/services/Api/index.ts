"use strict";

import env from "../../../environments";

class ApiServices {
  constructor() {}

  async status(): Promise<
    | {
        name: string;
        version: string;
      }
    | {
        error: string;
      }
  > {
    try {
      const APP_NAME: string | undefined = env.APP_NAME;
      const APP_VERSION = "3.0.2";

      return {
        name: APP_NAME,
        version: APP_VERSION,
      };
    } catch (error: any) {
      return {
        error: error?.message,
      };
    }
  }
}

export default new ApiServices();
