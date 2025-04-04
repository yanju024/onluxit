/**
 * Author: Sampada Thakkar
 * BannerID: B00893022
 * Email: sm223034@dal.ca
 */
import { Router, Request, Response} from "express";
import Controller from "../../utils/interfaces/controller.interface";
import AnalyticsService from "./analytics.service";

export default class YearlyAnalyticsController implements Controller {
  //Controller
  public path = "/analytics";
  public router = Router();
  private AnalyticsService = new AnalyticsService();
  constructor() {
    this.initialiseRoutes();
  }

  private initialiseRoutes(): void {
    this.router.get(`${this.path}`, this.getAnalytics);
  }
//Getting yearly analytics data
  private getAnalytics = async (
    req: Request,
    res: Response,
  ): Promise<Response | void> => {
    try {
      const uID=req.query.Symbol;
      const analytics = await this.AnalyticsService.getAnalytics(uID);
      res.send({ analytics });
    } catch (error: any) {
      console.log(error.message);
    }
  };
}
