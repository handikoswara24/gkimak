import { createEdgeRouter } from "next-connect";
import { getUserById } from "@/controllers/userController";
import { protect } from "@/middlewares/auth";
import { NextRequestWithUser } from "@/types/user";
import dbConnect from "@/utils/dbConnect";

const router = createEdgeRouter<NextRequestWithUser, {}>();
dbConnect();
router.use(protect).get(getUserById);

export async function GET(request: NextRequestWithUser, ctx: {}): Promise<any> {
  return router.run(request, ctx);
}
