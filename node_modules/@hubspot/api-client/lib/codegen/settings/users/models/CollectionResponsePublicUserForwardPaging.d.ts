import { ForwardPaging } from '../models/ForwardPaging';
import { PublicUser } from '../models/PublicUser';
export declare class CollectionResponsePublicUserForwardPaging {
    'results': Array<PublicUser>;
    'paging'?: ForwardPaging;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
