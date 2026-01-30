import { createEdgeRouter } from "next-connect";
import { admin, protect } from "@/middlewares/auth";
import { NextRequestWithUser } from "@/types/user";
import dbConnect from "@/utils/dbConnect";
import {
  deleteBorrowItem,
  updateBorrowItem,
} from "@/controllers/borrowItemController";

interface RequestContext {
  params: {
    id: string;
  };
}

const router = createEdgeRouter<NextRequestWithUser, RequestContext>();
dbConnect();
router.use(protect).put(updateBorrowItem);
router.use(protect).delete(deleteBorrowItem);
export async function PUT(
  request: NextRequestWithUser,
  ctx: RequestContext
): Promise<any> {
  return router.run(request, ctx);
}

export async function DELETE(
  request: NextRequestWithUser,
  ctx: RequestContext
): Promise<any> {
  return router.run(request, ctx);
}
