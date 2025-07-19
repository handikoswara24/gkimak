import { createEdgeRouter } from "next-connect";
import { admin, protect } from "@/middlewares/auth";
import { NextRequestWithUser } from "@/types/user";
import dbConnect from "@/utils/dbConnect";
import { deleteInventory, updateInventory } from "@/controllers/inventoryController";

interface RequestContext {
    params: {
        id: string;
    };
}

const router = createEdgeRouter<NextRequestWithUser, RequestContext>();
dbConnect();
router.use(protect).put(updateInventory);
router.use(protect).delete(deleteInventory);
export async function PUT(request: NextRequestWithUser, ctx: RequestContext): Promise<any> {
    return router.run(request, ctx);
}

export async function DELETE(request: NextRequestWithUser, ctx: RequestContext): Promise<any> {
    return router.run(request, ctx);
}
