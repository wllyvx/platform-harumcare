// Cloudflare Pages Functions middleware
// File ini akan menangani routing untuk API calls ke backend

export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  
  // Jika request ke /api/*, proxy ke backend worker
  if (url.pathname.startsWith('/api/')) {
    const backendUrl = new URL(request.url);
    backendUrl.hostname = env.BACKEND_WORKER_URL || 'harumcare-backend.your-subdomain.workers.dev';
    
    const modifiedRequest = new Request(backendUrl, {
      method: request.method,
      headers: request.headers,
      body: request.body,
    });
    
    return fetch(modifiedRequest);
  }
  
  // Untuk request lainnya, lanjutkan ke halaman normal
  return context.next();
}
