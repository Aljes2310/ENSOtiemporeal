# React + Vite

To avoid 404 in custom url, add the following code in vercel.json

```
{
  "rewrites": [{ 
      "source": "/(.*)",
      "destination": "/" }]
}
```