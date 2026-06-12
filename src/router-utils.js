export function getRoute(path) {
  // Split query parameters out of route matching
  const [pathname, search] = path.trim().split('?');
  let cleanPath = pathname.replace(/\/+$/, '');
  
  if (cleanPath === '' || cleanPath === '/index.html' || cleanPath === '/') {
    return { name: 'home' };
  }
  if (cleanPath === '/products') {
    return { name: 'products' };
  }
  if (cleanPath === '/catalog') {
    return { name: 'catalog', query: search || '' };
  }
  if (cleanPath === '/about') {
    return { name: 'about' };
  }
  if (cleanPath === '/contact') {
    return { name: 'contact' };
  }
  
  // Match details page /products/:category/:productId
  const detailMatch = cleanPath.match(/^\/products\/([^/]+)\/([^/]+)$/);
  if (detailMatch) {
    return { name: 'product-detail', category: detailMatch[1], productId: detailMatch[2] };
  }

  // Match category page /products/:category
  const categoryMatch = cleanPath.match(/^\/products\/([^/]+)$/);
  if (categoryMatch) {
    return { name: 'category', category: categoryMatch[1] };
  }

  return { name: '404' };
}
