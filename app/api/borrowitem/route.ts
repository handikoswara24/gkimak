import { createEdgeRouter } from "next-connect";
import { admin, protect } from "@/middlewares/auth";
import { NextRequestWithUser } from "@/types/user";
import dbConnect from "@/utils/dbConnect";
import {
  addBorrowItem,
  getAllBorrowItem,
} from "@/controllers/borrowItemController";

const router = createEdgeRouter<NextRequestWithUser, {}>();
dbConnect();

router.use(protect).get(getAllBorrowItem);
router.use(protect).post(addBorrowItem);

export async function POST(
  request: NextRequestWithUser,
  ctx: {}
): Promise<any> {
  return router.run(request, ctx);
}

export async function GET(request: NextRequestWithUser, ctx: {}): Promise<any> {
  return router.run(request, ctx);
}
