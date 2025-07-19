import { createEdgeRouter } from "next-connect";
import { admin, protect } from "@/middlewares/auth";
import { NextRequestWithUser } from "@/types/user";
import dbConnect from "@/utils/dbConnect";
import { addInventory, getAllInventory } from "@/controllers/inventoryController";

const router = createEdgeRouter<NextRequestWithUser, {}>();
dbConnect();

router.use(protect).get(getAllInventory)
router.use(protect).post(addInventory);

export async function POST(request: NextRequestWithUser, ctx: {}): Promise<any> {
    return router.run(request, ctx);
}

export async function GET(request: NextRequestWithUser, ctx: {}): Promise<any> {
    return router.run(request, ctx);
}