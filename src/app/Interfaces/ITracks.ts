import { ILead } from "./ILead";


export interface ITrack {
        linker: string[],
        _id: string,
        track_id: string,
        name: string,
        start: string,
        end: string,
        helper: ILead[],
        token: [],
        __v: Number,
        lead: ILead
}
