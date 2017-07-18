export interface BungieApi {
    ErrorCode: number;
    ErrorStatus: string;
    Message: string;
    MessageData: Object;
    Response: any;
    ThrottleSeconds: number;
}