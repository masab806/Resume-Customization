import { Injectable, NotFoundException } from '@nestjs/common';
import { ResumeDTO } from './dto/resume.dto';
import { GeminiService } from './gemini.service';
import { RESUME_PROMPT } from './prompts/resume.prompt';

@Injectable()
export class AiService {
    constructor(private readonly geminiService: GeminiService) { }

    async EditResumeWithAI(dto: ResumeDTO) {

        const { resumeText, linkedInPost } = dto

        if (!resumeText || !linkedInPost) {
            throw new NotFoundException("Resume Not Found!")
        }

        const userPrompt = `
            Resume:
            ${resumeText}

            LinkedIn Job Post:
            ${linkedInPost}
        `

        const result = await this.geminiService.generate(userPrompt, RESUME_PROMPT)


        return {
            success: true,
            result
        }

    }
}
