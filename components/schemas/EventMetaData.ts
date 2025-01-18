import {BaseMetaData} from "@components/schemas/BaseMetaData";

export interface EventMetaData extends BaseMetaData{
    name: string;
    images: string[];
    description: string;
}