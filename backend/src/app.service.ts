import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  health(): object {
    return {
      success: true,
      message: "API Is Working"
    }
  }
}
