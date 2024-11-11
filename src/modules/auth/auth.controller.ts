import { Body, Controller, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import { AuthService } from './auth.service';
import { CheckTokenRequest, GenTokenRequest } from './dto/auth.request';
import { GenTokenResponse } from './dto/auth.response';
import { ITokenPayload } from './dto/auth.type';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('check-token')
  async checkToken(@Body() request: CheckTokenRequest): Promise<ITokenPayload> {
    return this.authService.validateToken(request);
  }

  @Post('token')
  @ApiOperation({ summary: 'API Login' })
  @ApiOkResponse({ type: GenTokenResponse })
  async genToken(@Body() request: GenTokenRequest): Promise<GenTokenResponse> {
    return this.authService.genToken(request);
  }
}
