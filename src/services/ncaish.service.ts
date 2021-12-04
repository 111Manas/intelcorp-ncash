import { HttpClient } from "./http-client";
import settings from "../config/settings";

type TQueryParam = {
  key: string;
  value: string | string[] | boolean | number | Date | undefined;
};

class NcaishService extends HttpClient {
  public constructor() {
    super(`${settings.baseApiUrl}`);
  }

  public async getAll(): Promise<any> {
    return {
      email: "ssas",

      mobile: "1234",
    };
  }
}
export default new NcaishService();
