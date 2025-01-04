import { TOKEN, USER_DATA } from "@/constants/loginConstant";
import { User } from "@/types/user";
import { atomWithStorage } from "jotai/utils";

const accessTokenAtom = atomWithStorage<string>(TOKEN, "");
const userDataAtom = atomWithStorage<User | null>(USER_DATA, null);

export { accessTokenAtom, userDataAtom }