import { createEdgeRouter } from "next-connect";
import { admin, protect } from "@/middlewares/auth";
import { NextRequestWithUser } from "@/types/user";
import dbConnect from "@/utils/dbConnect";
import { releasedBorrowItem } from "@/controllers/borrowItemController";

const router = createEdgeRouter<NextRequestWithUser, {}>();
dbConnect();

router.use(protect).post(releasedBorrowItem);

export async function POST(
  request: NextRequestWithUser,
  ctx: {}
): Promise<any> {
  return router.run(request, ctx);
}
