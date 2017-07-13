import { GamerTagService } from './gamer-tag.service';
import { Gamer } from '../models/gamer.interface';

describe('GamerService', () => {
    let service: GamerTagService;

    it('should be an instance of GamerService', () => {
        service = new GamerTagService();
        expect(service instanceof GamerTagService).toBeTruthy();
    });

});