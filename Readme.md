🔒 Key Security Enhancements Explained

CORS: Limit origins to only trusted frontends. Avoid * in production.

Helmet: Sets HTTP headers to prevent XSS, clickjacking, etc.

XSS-Clean: Sanitizes user input to prevent cross-site scripting.

HPP (HTTP Parameter Pollution): Protects against query parameter tampering.

Rate Limiting: Prevents brute-force attacks.

Compression: Improves response times (not security, but performance).

Morgan (combined): More detailed logging for audits in production.

Express.json + urlencoded: Handle JSON and form data securely

Technique	Why it matters
Clustering	Use all CPU cores
Load Balancer (NGINX)	Horizontal scaling
Rate limiting	Prevent overload
Caching (Redis)	Reduce DB load
Queue (BullMQ)	Offload heavy jobs
Optimized DB	Faster queries
Non-blocking code	Prevent event loop freeze
Monitoring & Logging	Detect issues early