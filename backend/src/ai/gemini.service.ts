import { GoogleGenAI } from "@google/genai";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class GeminiService{
    private readonly ai: GoogleGenAI

    constructor(private readonly config: ConfigService){
        this.ai = new GoogleGenAI({
            apiKey: this.config.get<string>("GEMINI_API_KEY")
        })
    }

    async generate(prompt: string){
        const response = await this.ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt
        })

        return response.text
    }
}