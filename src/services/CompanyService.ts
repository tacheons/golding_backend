import { AppDataSource } from "../data-source";

/**
 * @implementaionNote
 * Company Service, is the service layer that provide information on
 * various services offered by the company
 *
 * @return
 * an array of services
 *
 * @author
 * @since
 * v1.0.0
 */
export class CompanyService {
  constructor() {}

  /**
   * @description
   * The competence method for the company service
   *
   * @return
   * an array of competencies
   *
   * @author
   * @since
   * v1.0.0
   */
  async competencies() {
    return {
      competencies: [
        "Private Equity",
        "Private Credit",
        "Infrastructure",
        "Secondaries",
        "Impact Investing",
        "Fund",
        "Secondary investments",
        "Managed Accounts",
        "Co-investment funds",
        "Product Solutions",
      ],
    };
  }
}
