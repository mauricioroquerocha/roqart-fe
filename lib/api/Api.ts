const baseUrl: string =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'; // Set your default base URL here
const defaultHeaders: Record<string, string> = {
  'Content-Type': 'application/json',
  'x-publishable-api-key': process.env.NEXT_PUBLIC_PUBLISHABLE_API_KEY || '',
};

// export const Api = {
//   async get<T>(
//     endpoint: string,
//     headers?: Record<string, string>,
//     searchParams?: Record<string, string>
//   ): Promise<T> {
//     const url = new URL(endpoint, baseUrl);

//     console.error("URL: " + endpoint + baseUrl);

//     if (searchParams) {
//       url.search = new URLSearchParams(searchParams).toString();
//     }

//     const res = await fetch(url.toString(), {
//       method: 'GET',
//       headers: { ...defaultHeaders, ...headers },
//     });

//     console.(res);

//     if (!res.ok) {
//       // throw new Error(`GET ${endpoint} failed`);
//       console.log('Fetch failed ');
//     }

//     return res.json();
//   },
export const Api = {
  async get<T>(endpoint: string, headers?: Record<string, string>, searchParams?: Record<string, string>): Promise<T> {
    const url = new URL(endpoint, baseUrl);
    
    if (searchParams) {
      url.search = new URLSearchParams(searchParams).toString();
    }

    // ESTO SALDRÁ EN DOCKER SI ES SSR, O EN F12 SI ES CLIENTE
    console.log(`[API DEBUG] Llamando a: ${url.toString()}`);

    try {
      const res = await fetch(url.toString(), {
        method: 'GET',
        headers: { ...defaultHeaders, ...headers },
      });

      if (!res.ok) {
        const errorText = await res.text(); // Leer el error real
        console.error(`[API ERROR] Status: ${res.status} - Body: ${errorText}`);
        throw new Error(`Fetch failed: ${res.status}`);
      }

      return await res.json();
    } catch (error) {
      console.error("[API FATAL]", error);
      throw error;
    }
  }
}


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

