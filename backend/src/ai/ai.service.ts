import { Injectable } from '@nestjs/common';

@Injectable()
export class AiService {
    async hello(){
        return "Hello From AI"
    }
}
