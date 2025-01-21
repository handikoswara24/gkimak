import { IJemaat } from "@/types/jemaat";
import mongoose from "mongoose";

const jemaatSchema = new mongoose.Schema({
    nomorAnggota : {
        type: String
    },
    nama: {
        type: String
    },
    telepon : {
        type: String
    }
})

const Jemaat = mongoose.models.Jemaat ?? mongoose.model<IJemaat>("Jemaat", jemaatSchema);

export default Jemaat;