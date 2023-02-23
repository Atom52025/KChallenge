import { Controller, Get } from '@nestjs/common';
import { Dog } from '../dog';
import { DogsService } from './dogs.service';

@Controller('dogs')
export class DogsController {

    constructor(private dogsService: DogsService) {}

    @Get()
    findAll(): Promise<Dog[]> {
        return this.dogsService.findAll(); 
    }
}
