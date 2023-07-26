import { MarketingEventPublicDefaultResponse } from '../models/MarketingEventPublicDefaultResponse';
import { StandardError } from '../models/StandardError';
export declare class BatchResponseMarketingEventPublicDefaultResponse {
    'status': BatchResponseMarketingEventPublicDefaultResponseStatusEnum;
    'results': Array<MarketingEventPublicDefaultResponse>;
    'numErrors'?: number;
    'errors'?: Array<StandardError>;
    'requestedAt'?: Date;
    'startedAt': Date;
    'completedAt': Date;
    'links'?: {
        [key: string]: string;
    };
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
export type BatchResponseMarketingEventPublicDefaultResponseStatusEnum = "PENDING" | "PROCESSING" | "CANCELED" | "COMPLETE";
