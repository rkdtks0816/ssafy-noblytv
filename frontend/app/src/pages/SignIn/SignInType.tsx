interface SignInData {
  userId: string;
  password: string;
}

interface ApiResponse {
  token: string;
}

export type { SignInData, ApiResponse };
