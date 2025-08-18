const baseUrl: string = 'http://localhost:9000/'; // Set your default base URL here
const defaultHeaders: Record<string, string> = {
  'Content-Type': 'application/json',
  'x-publishable-api-key':
    'pk_fce0a0afda5564befb7821b7d907b283c5e5bdd7b51b7408ec9a8c2c4e73dc4a',
};

export const Api = {
  async get<T>(endpoint: string, headers?: Record<string, string>): Promise<T> {
    const res = await fetch(`${baseUrl}${endpoint}`, {
      method: 'GET',
      headers: { ...defaultHeaders, ...headers },
    });

    if (!res.ok) {
      throw new Error(`GET ${endpoint} failed`);
    }

    return res.json();
  },

  // static async post<T>(
  //   endpoint: string,
  //   data: any,
  //   headers?: Record<string, string>
  // ): Promise<T> {
  //   const res = await fetch(`${this.baseUrl}${endpoint}`, {
  //     method: 'POST',
  //     headers: { ...this.defaultHeaders, ...headers },
  //     body: JSON.stringify(data),
  //   });

  //   if (!res.ok) throw new Error(`POST ${endpoint} failed`);

  //   return res.json();
  // },

  // static async put<T>(
  //   endpoint: string,
  //   data: any,
  //   headers?: Record<string, string>
  // ): Promise<T> {
  //   const res = await fetch(`${this.baseUrl}${endpoint}`, {
  //     method: 'PUT',
  //     headers: { ...this.defaultHeaders, ...headers },
  //     body: JSON.stringify(data),
  //   });

  //   if (!res.ok) throw new Error(`PUT ${endpoint} failed`);

  //   return res.json();
  // }

  // static async delete<T>(
  //   endpoint: string,
  //   headers?: Record<string, string>
  // ): Promise<T> {
  //   const res = await fetch(`${this.baseUrl}${endpoint}`, {
  //     method: 'DELETE',
  //     headers: { ...this.defaultHeaders, ...headers },
  //   });

  //   if (!res.ok) throw new Error(`DELETE ${endpoint} failed`);

  //   return res.json();
  // }
};
