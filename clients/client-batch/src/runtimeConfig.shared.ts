// smithy-typescript generated code
import { Logger as __Logger } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser";
import { fromBase64, toBase64 } from "@aws-sdk/util-base64";

import { BatchClientConfig } from "./BatchClient";
import { defaultEndpointResolver } from "./endpoint/endpointResolver";

/**
 * @internal
 */
export const getRuntimeConfig = (config: BatchClientConfig) => ({
  apiVersion: "2016-08-10",
  base64Decoder: config?.base64Decoder ?? fromBase64,
  base64Encoder: config?.base64Encoder ?? toBase64,
  disableHostPrefix: config?.disableHostPrefix ?? false,
  endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
  logger: config?.logger ?? ({} as __Logger),
  serviceId: config?.serviceId ?? "Batch",
  urlParser: config?.urlParser ?? parseUrl,
});
