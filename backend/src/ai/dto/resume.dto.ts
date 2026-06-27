import { IsNotEmpty } from "class-validator";

export class ResumeDTO{
    @IsNotEmpty()
    linkedInPost!: string

    @IsNotEmpty()
    resumeText!: string
}