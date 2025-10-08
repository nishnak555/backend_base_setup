🔒 Key Security Enhancements Explained

CORS: Limit origins to only trusted frontends. Avoid * in production.

Helmet: Sets HTTP headers to prevent XSS, clickjacking, etc.

XSS-Clean: Sanitizes user input to prevent cross-site scripting.

HPP (HTTP Parameter Pollution): Protects against query parameter tampering.

Rate Limiting: Prevents brute-force attacks.

Compression: Improves response times (not security, but performance).

Morgan (combined): More detailed logging for audits in production.

Express.json + urlencoded: Handle JSON and form data securely

