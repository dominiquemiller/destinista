import { Network } from './network.enum';

export interface Gamer {
    network: Network;
    tag: string;
    membershipId?: number;
    characterId?: number;
}
