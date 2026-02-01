import { createEdgeRouter } from "next-connect";
import { admin, protect } from "@/middlewares/auth";
import { NextRequestWithUser } from "@/types/user";
import dbConnect from "@/utils/dbConnect";
import { getAllInventoryLookup } from "@/controllers/inventoryController";

const router = createEdgeRouter<NextRequestWithUser, {}>();
dbConnect();

router.use(protect).get(getAllInventoryLookup);

export async function GET(request: NextRequestWithUser, ctx: {}): Promise<any> {
  return router.run(request, ctx);
}
