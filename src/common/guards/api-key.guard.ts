import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  constructor(private configService: ConfigService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const apiKey = request.headers['x-api-key'] as string;
    const internalApiKey = this.configService.get<string>('INTERNAL_API_KEY');

    if (!apiKey || apiKey !== internalApiKey) {
      throw new UnauthorizedException('Invalid or missing API key');
    }

    return true;
  }
}