export function path(href = '') {
  if (!href || href === '/') return '/';
  return href.startsWith('/') ? href : `/${href}`;
}
