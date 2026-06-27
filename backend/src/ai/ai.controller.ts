import { Body, Controller, Get, Post } from '@nestjs/common';
import { AiService } from './ai.service';
import { ResumeDTO } from './dto/resume.dto';

@Controller('ai')
export class AiController {
    constructor(private readonly aiService: AiService){}

    @Post("resume")
    async editResume(@Body() dto: ResumeDTO){
       try {

            const result = await this.aiService.EditResumeWithAI(dto)
            
            return result

       } catch (error) {
            console.log("Error In Edit Resume (Controller): ", error)
       }
    }

}
