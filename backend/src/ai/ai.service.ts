import { Injectable, NotFoundException } from '@nestjs/common';
import { ResumeDTO } from './dto/resume.dto';
import { GeminiService } from './gemini.service';
import { RESUME_PROMPT } from './prompts/resume.prompt';
import { EMAIL_PROMPT } from './prompts/email.prompt';

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

        if (!result) {
            throw new NotFoundException("Gemini Replied With No Result!")
        }


        return {
            success: true,
            jobResult: JSON.parse(result)
        }

    }


    async generateEmail(dto: ResumeDTO) {
        const { resumeText, linkedInPost } = dto

        if (!resumeText || !linkedInPost) {
            return {
                success: false,
                message: "Invalid Resume Or Post!"
            }
        }

        const userPrompt = `
            Resume:
            ${resumeText}

            LinkedIn Post:
            ${linkedInPost}
        `

        const result = await this.geminiService.generate(userPrompt, EMAIL_PROMPT)

        if (!result) {
            throw new NotFoundException("Invalid Result!")
        }

        return {
            success: true,
            emailResult: JSON.parse(result)
        }

    }
}
