// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node"
import {nodeProfilingInstrumentation} from "@sentry/node";

Sentry.init({
  dsn: "https://701227b1db8251ff232bd75ffe679af5@o4509778162352128.ingest.us.sentry.io/4509778169495552",

  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});