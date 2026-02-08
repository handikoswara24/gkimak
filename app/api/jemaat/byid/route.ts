import { createEdgeRouter } from "next-connect";
import { protect } from "@/middlewares/auth";
import { NextRequestWithUser } from "@/types/user";
import dbConnect from "@/utils/dbConnect";
import { getJemaatById } from "@/controllers/jemaatController";

const router = createEdgeRouter<NextRequestWithUser, {}>();
dbConnect();
router.use(protect).get(getJemaatById);

export async function GET(request: NextRequestWithUser, ctx: {}): Promise<any> {
  return router.run(request, ctx);
}
