import { createProxyMiddleware } from 'http-proxy-middleware';

export default createProxyMiddleware({
  target: 'https://apiv2.vieclam24h.vn',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '',
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};
