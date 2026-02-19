export class AuthResponseDto {
  accessToken: string;
  user: {
    id: number;
    email: string;
    fullName: string;
    role: string;
  };
}