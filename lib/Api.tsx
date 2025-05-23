// lib/api/BaseAPI.ts

export class Api {
  static baseUrl: string = 'https://api.example.com'; // Set your default base URL here
  static defaultHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  static async get<T>(endpoint: string, headers?: Record<string, string>): Promise<T> {
    const res = await fetch(`${this.baseUrl}${endpoint}`, {
      method: 'GET',
      headers: { ...this.defaultHeaders, ...headers },
    });

    if (!res.ok) throw new Error(`GET ${endpoint} failed`);

    return res.json();
  }

  static async post<T>(endpoint: string, data: any, headers?: Record<string, string>): Promise<T> {
    const res = await fetch(`${this.baseUrl}${endpoint}`, {
      method: 'POST',
      headers: { ...this.defaultHeaders, ...headers },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error(`POST ${endpoint} failed`);

    return res.json();
  }

  static async put<T>(endpoint: string, data: any, headers?: Record<string, string>): Promise<T> {
    const res = await fetch(`${this.baseUrl}${endpoint}`, {
      method: 'PUT',
      headers: { ...this.defaultHeaders, ...headers },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error(`PUT ${endpoint} failed`);

    return res.json();
  }

  static async delete<T>(endpoint: string, headers?: Record<string, string>): Promise<T> {
    const res = await fetch(`${this.baseUrl}${endpoint}`, {
      method: 'DELETE',
      headers: { ...this.defaultHeaders, ...headers },
    });

    if (!res.ok) throw new Error(`DELETE ${endpoint} failed`);
    
    return res.json();
  }
}
