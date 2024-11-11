import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';
import { BadRequestException } from 'src/common/exceptions/badRequest.exception';
import { ErrorCodes } from 'src/common/exceptions/errorCode.enum';
import { UserRepository } from 'src/database/user/user.repository';

import { CheckTokenRequest, GenTokenRequest } from './dto/auth.request';
import { GenTokenResponse } from './dto/auth.response';
import { ITokenPayload } from './dto/auth.type';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
  ) {}

  async genToken(request: GenTokenRequest): Promise<GenTokenResponse> {
    const user = await this.userRepository.model.findOne({ email: request.username });
    if (!user) throw new BadRequestException(ErrorCodes.LOGIN_FAILED);

    const passwordIsCorrect = await compare(request.password, user.password);
    if (!passwordIsCorrect) throw new BadRequestException(ErrorCodes.LOGIN_FAILED);

    const payload: ITokenPayload = { userId: user.id, userName: user.email, authorization: '' };
    const accessToken = this.jwtService.sign(payload);
    return { accessToken };
  }

  async validateToken(request: CheckTokenRequest): Promise<ITokenPayload> {
    try {
      return this.jwtService.verify(request.token);
    } catch (error) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
