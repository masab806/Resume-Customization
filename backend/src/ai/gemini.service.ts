import { GoogleGenAI, Type } from "@google/genai";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class GeminiService {
    private readonly ai: GoogleGenAI

    constructor(private readonly config: ConfigService) {
        this.ai = new GoogleGenAI({
            apiKey: this.config.get<string>("GEMINI_API_KEY")
        })
    }

    async generate(prompt: string, systemInstructions: string) {
        const response = await this.ai.models.generateContent({
            model: "gemini-3.1-flash-lite",
            contents: prompt,
            config: {
                systemInstruction: systemInstructions,
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        atsScore: {
                            type: Type.INTEGER,
                            description: "A calculated score out of 100 based on keyword alignment"
                        },
                        latex: {
                            type: Type.STRING,
                            description: "The complete modified LaTeX code with properly escaped backslashes"
                        },
                    },
                    required: ["atsScore", "latex"]
                }
            }
        })

        return response.text
    }
}