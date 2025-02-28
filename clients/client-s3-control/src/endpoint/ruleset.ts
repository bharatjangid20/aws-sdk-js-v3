// smithy-typescript generated code
import { RuleSetObject } from "@aws-sdk/util-endpoints";

export const ruleSet: RuleSetObject = {
  version: "1.0",
  parameters: {
    Region: {
      builtIn: "AWS::Region",
      required: false,
      documentation: "The AWS region used to dispatch the request.",
      type: "String",
    },
    UseFIPS: {
      builtIn: "AWS::UseFIPS",
      required: true,
      default: false,
      documentation:
        "When true, send this request to the FIPS-compliant regional endpoint. If the configured endpoint does not have a FIPS compliant endpoint, dispatching the request will return an error.",
      type: "Boolean",
    },
    UseDualStack: {
      builtIn: "AWS::UseDualStack",
      required: true,
      default: false,
      documentation:
        "When true, use the dual-stack endpoint. If the configured endpoint does not support dual-stack, dispatching the request MAY return an error.",
      type: "Boolean",
    },
    Endpoint: {
      builtIn: "SDK::Endpoint",
      required: false,
      documentation: "Override the endpoint used to send this request",
      type: "String",
    },
    AccountId: {
      required: false,
      documentation:
        "The Account ID used to send the request. This is an optional parameter that will be set automatically for operations that require it.",
      type: "String",
    },
    RequiresAccountId: {
      required: false,
      documentation: "Internal parameter for operations that require account id host prefix.",
      type: "Boolean",
    },
    OutpostId: {
      required: false,
      documentation:
        "The Outpost ID.  Some operations have an optional OutpostId which should be used in endpoint construction.",
      type: "String",
    },
    Bucket: {
      required: false,
      documentation:
        "The S3 bucket used to send the request. This is an optional parameter that will be set automatically for operations that are scoped to an S3 bucket.",
      type: "String",
    },
    AccessPointName: {
      required: false,
      documentation:
        "The S3 AccessPointName used to send the request. This is an optional parameter that will be set automatically for operations that are scoped to an S3 AccessPoint.",
      type: "String",
    },
    UseArnRegion: {
      builtIn: "AWS::S3Control::UseArnRegion",
      required: false,
      documentation:
        "When an Access Point ARN is provided and this flag is enabled, the SDK MUST use the ARN's region when constructing the endpoint instead of the client's configured region.",
      type: "Boolean",
    },
  },
  rules: [
    {
      conditions: [],
      type: "tree",
      rules: [
        {
          conditions: [
            {
              fn: "isSet",
              argv: [
                {
                  ref: "Region",
                },
              ],
            },
          ],
          type: "tree",
          rules: [
            {
              conditions: [],
              type: "tree",
              rules: [
                {
                  conditions: [
                    {
                      fn: "isSet",
                      argv: [
                        {
                          ref: "OutpostId",
                        },
                      ],
                    },
                  ],
                  type: "tree",
                  rules: [
                    {
                      conditions: [
                        {
                          fn: "aws.partition",
                          argv: [
                            {
                              ref: "Region",
                            },
                          ],
                          assign: "partitionResult",
                        },
                      ],
                      type: "tree",
                      rules: [
                        {
                          conditions: [],
                          type: "tree",
                          rules: [
                            {
                              conditions: [
                                {
                                  fn: "booleanEquals",
                                  argv: [
                                    {
                                      ref: "UseFIPS",
                                    },
                                    true,
                                  ],
                                },
                                {
                                  fn: "stringEquals",
                                  argv: [
                                    {
                                      fn: "getAttr",
                                      argv: [
                                        {
                                          ref: "partitionResult",
                                        },
                                        "name",
                                      ],
                                    },
                                    "aws-cn",
                                  ],
                                },
                              ],
                              error: "Partition does not support FIPS",
                              type: "error",
                            },
                            {
                              conditions: [],
                              type: "tree",
                              rules: [
                                {
                                  conditions: [
                                    {
                                      fn: "isSet",
                                      argv: [
                                        {
                                          ref: "RequiresAccountId",
                                        },
                                      ],
                                    },
                                    {
                                      fn: "booleanEquals",
                                      argv: [
                                        {
                                          ref: "RequiresAccountId",
                                        },
                                        true,
                                      ],
                                    },
                                    {
                                      fn: "not",
                                      argv: [
                                        {
                                          fn: "isSet",
                                          argv: [
                                            {
                                              ref: "AccountId",
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                  error: "AccountId is required but not set",
                                  type: "error",
                                },
                                {
                                  conditions: [],
                                  type: "tree",
                                  rules: [
                                    {
                                      conditions: [
                                        {
                                          fn: "isSet",
                                          argv: [
                                            {
                                              ref: "AccountId",
                                            },
                                          ],
                                        },
                                        {
                                          fn: "not",
                                          argv: [
                                            {
                                              fn: "isValidHostLabel",
                                              argv: [
                                                {
                                                  ref: "AccountId",
                                                },
                                                false,
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                      error: "AccountId must only contain a-z, A-Z, 0-9 and `-`.",
                                      type: "error",
                                    },
                                    {
                                      conditions: [],
                                      type: "tree",
                                      rules: [
                                        {
                                          conditions: [
                                            {
                                              fn: "not",
                                              argv: [
                                                {
                                                  fn: "isValidHostLabel",
                                                  argv: [
                                                    {
                                                      ref: "OutpostId",
                                                    },
                                                    false,
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                          error: "OutpostId must only contain a-z, A-Z, 0-9 and `-`.",
                                          type: "error",
                                        },
                                        {
                                          conditions: [],
                                          type: "tree",
                                          rules: [
                                            {
                                              conditions: [
                                                {
                                                  fn: "isValidHostLabel",
                                                  argv: [
                                                    {
                                                      ref: "Region",
                                                    },
                                                    true,
                                                  ],
                                                },
                                              ],
                                              type: "tree",
                                              rules: [
                                                {
                                                  conditions: [],
                                                  type: "tree",
                                                  rules: [
                                                    {
                                                      conditions: [
                                                        {
                                                          fn: "booleanEquals",
                                                          argv: [
                                                            {
                                                              ref: "UseDualStack",
                                                            },
                                                            true,
                                                          ],
                                                        },
                                                      ],
                                                      error:
                                                        "Invalid configuration: Outposts do not support dual-stack",
                                                      type: "error",
                                                    },
                                                    {
                                                      conditions: [],
                                                      type: "tree",
                                                      rules: [
                                                        {
                                                          conditions: [
                                                            {
                                                              fn: "isSet",
                                                              argv: [
                                                                {
                                                                  ref: "Endpoint",
                                                                },
                                                              ],
                                                            },
                                                            {
                                                              fn: "parseURL",
                                                              argv: [
                                                                {
                                                                  ref: "Endpoint",
                                                                },
                                                              ],
                                                              assign: "url",
                                                            },
                                                          ],
                                                          endpoint: {
                                                            url: "{url#scheme}://{url#authority}{url#path}",
                                                            properties: {
                                                              authSchemes: [
                                                                {
                                                                  name: "sigv4",
                                                                  disableDoubleEncoding: true,
                                                                  signingName: "s3-outposts",
                                                                  signingRegion: "{Region}",
                                                                },
                                                              ],
                                                            },
                                                            headers: {},
                                                          },
                                                          type: "endpoint",
                                                        },
                                                        {
                                                          conditions: [
                                                            {
                                                              fn: "booleanEquals",
                                                              argv: [
                                                                {
                                                                  ref: "UseFIPS",
                                                                },
                                                                true,
                                                              ],
                                                            },
                                                          ],
                                                          endpoint: {
                                                            url: "https://s3-outposts-fips.{Region}.{partitionResult#dnsSuffix}",
                                                            properties: {
                                                              authSchemes: [
                                                                {
                                                                  name: "sigv4",
                                                                  disableDoubleEncoding: true,
                                                                  signingName: "s3-outposts",
                                                                  signingRegion: "{Region}",
                                                                },
                                                              ],
                                                            },
                                                            headers: {},
                                                          },
                                                          type: "endpoint",
                                                        },
                                                        {
                                                          conditions: [],
                                                          endpoint: {
                                                            url: "https://s3-outposts.{Region}.{partitionResult#dnsSuffix}",
                                                            properties: {
                                                              authSchemes: [
                                                                {
                                                                  name: "sigv4",
                                                                  disableDoubleEncoding: true,
                                                                  signingName: "s3-outposts",
                                                                  signingRegion: "{Region}",
                                                                },
                                                              ],
                                                            },
                                                            headers: {},
                                                          },
                                                          type: "endpoint",
                                                        },
                                                      ],
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                            {
                                              conditions: [],
                                              error: "Invalid region: region was not a valid DNS name.",
                                              type: "error",
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      conditions: [],
                      error: "A valid partition could not be determined",
                      type: "error",
                    },
                  ],
                },
                {
                  conditions: [
                    {
                      fn: "isSet",
                      argv: [
                        {
                          ref: "AccessPointName",
                        },
                      ],
                    },
                    {
                      fn: "aws.parseArn",
                      argv: [
                        {
                          ref: "AccessPointName",
                        },
                      ],
                      assign: "accessPointArn",
                    },
                  ],
                  type: "tree",
                  rules: [
                    {
                      conditions: [
                        {
                          fn: "getAttr",
                          argv: [
                            {
                              ref: "accessPointArn",
                            },
                            "resourceId[0]",
                          ],
                          assign: "arnType",
                        },
                        {
                          fn: "not",
                          argv: [
                            {
                              fn: "stringEquals",
                              argv: [
                                {
                                  ref: "arnType",
                                },
                                "",
                              ],
                            },
                          ],
                        },
                      ],
                      type: "tree",
                      rules: [
                        {
                          conditions: [
                            {
                              fn: "stringEquals",
                              argv: [
                                {
                                  fn: "getAttr",
                                  argv: [
                                    {
                                      ref: "accessPointArn",
                                    },
                                    "service",
                                  ],
                                },
                                "s3-outposts",
                              ],
                            },
                          ],
                          type: "tree",
                          rules: [
                            {
                              conditions: [
                                {
                                  fn: "booleanEquals",
                                  argv: [
                                    {
                                      ref: "UseDualStack",
                                    },
                                    true,
                                  ],
                                },
                              ],
                              error: "Invalid configuration: Outpost Access Points do not support dual-stack",
                              type: "error",
                            },
                            {
                              conditions: [],
                              type: "tree",
                              rules: [
                                {
                                  conditions: [
                                    {
                                      fn: "getAttr",
                                      argv: [
                                        {
                                          ref: "accessPointArn",
                                        },
                                        "resourceId[1]",
                                      ],
                                      assign: "outpostId",
                                    },
                                  ],
                                  type: "tree",
                                  rules: [
                                    {
                                      conditions: [],
                                      type: "tree",
                                      rules: [
                                        {
                                          conditions: [
                                            {
                                              fn: "isValidHostLabel",
                                              argv: [
                                                {
                                                  ref: "outpostId",
                                                },
                                                false,
                                              ],
                                            },
                                          ],
                                          type: "tree",
                                          rules: [
                                            {
                                              conditions: [],
                                              type: "tree",
                                              rules: [
                                                {
                                                  conditions: [
                                                    {
                                                      fn: "isSet",
                                                      argv: [
                                                        {
                                                          ref: "UseArnRegion",
                                                        },
                                                      ],
                                                    },
                                                    {
                                                      fn: "booleanEquals",
                                                      argv: [
                                                        {
                                                          ref: "UseArnRegion",
                                                        },
                                                        false,
                                                      ],
                                                    },
                                                    {
                                                      fn: "not",
                                                      argv: [
                                                        {
                                                          fn: "stringEquals",
                                                          argv: [
                                                            {
                                                              fn: "getAttr",
                                                              argv: [
                                                                {
                                                                  ref: "accessPointArn",
                                                                },
                                                                "region",
                                                              ],
                                                            },
                                                            "{Region}",
                                                          ],
                                                        },
                                                      ],
                                                    },
                                                  ],
                                                  error:
                                                    "Invalid configuration: region from ARN `{accessPointArn#region}` does not match client region `{Region}` and UseArnRegion is `false`",
                                                  type: "error",
                                                },
                                                {
                                                  conditions: [],
                                                  type: "tree",
                                                  rules: [
                                                    {
                                                      conditions: [
                                                        {
                                                          fn: "aws.partition",
                                                          argv: [
                                                            {
                                                              ref: "Region",
                                                            },
                                                          ],
                                                          assign: "partitionResult",
                                                        },
                                                      ],
                                                      type: "tree",
                                                      rules: [
                                                        {
                                                          conditions: [],
                                                          type: "tree",
                                                          rules: [
                                                            {
                                                              conditions: [
                                                                {
                                                                  fn: "aws.partition",
                                                                  argv: [
                                                                    {
                                                                      fn: "getAttr",
                                                                      argv: [
                                                                        {
                                                                          ref: "accessPointArn",
                                                                        },
                                                                        "region",
                                                                      ],
                                                                    },
                                                                  ],
                                                                  assign: "arnPartition",
                                                                },
                                                              ],
                                                              type: "tree",
                                                              rules: [
                                                                {
                                                                  conditions: [],
                                                                  type: "tree",
                                                                  rules: [
                                                                    {
                                                                      conditions: [
                                                                        {
                                                                          fn: "stringEquals",
                                                                          argv: [
                                                                            {
                                                                              fn: "getAttr",
                                                                              argv: [
                                                                                {
                                                                                  ref: "arnPartition",
                                                                                },
                                                                                "name",
                                                                              ],
                                                                            },
                                                                            {
                                                                              fn: "getAttr",
                                                                              argv: [
                                                                                {
                                                                                  ref: "partitionResult",
                                                                                },
                                                                                "name",
                                                                              ],
                                                                            },
                                                                          ],
                                                                        },
                                                                      ],
                                                                      type: "tree",
                                                                      rules: [
                                                                        {
                                                                          conditions: [],
                                                                          type: "tree",
                                                                          rules: [
                                                                            {
                                                                              conditions: [
                                                                                {
                                                                                  fn: "isValidHostLabel",
                                                                                  argv: [
                                                                                    {
                                                                                      fn: "getAttr",
                                                                                      argv: [
                                                                                        {
                                                                                          ref: "accessPointArn",
                                                                                        },
                                                                                        "region",
                                                                                      ],
                                                                                    },
                                                                                    true,
                                                                                  ],
                                                                                },
                                                                              ],
                                                                              type: "tree",
                                                                              rules: [
                                                                                {
                                                                                  conditions: [],
                                                                                  type: "tree",
                                                                                  rules: [
                                                                                    {
                                                                                      conditions: [
                                                                                        {
                                                                                          fn: "not",
                                                                                          argv: [
                                                                                            {
                                                                                              fn: "stringEquals",
                                                                                              argv: [
                                                                                                {
                                                                                                  fn: "getAttr",
                                                                                                  argv: [
                                                                                                    {
                                                                                                      ref: "accessPointArn",
                                                                                                    },
                                                                                                    "accountId",
                                                                                                  ],
                                                                                                },
                                                                                                "",
                                                                                              ],
                                                                                            },
                                                                                          ],
                                                                                        },
                                                                                      ],
                                                                                      type: "tree",
                                                                                      rules: [
                                                                                        {
                                                                                          conditions: [],
                                                                                          type: "tree",
                                                                                          rules: [
                                                                                            {
                                                                                              conditions: [
                                                                                                {
                                                                                                  fn: "isValidHostLabel",
                                                                                                  argv: [
                                                                                                    {
                                                                                                      fn: "getAttr",
                                                                                                      argv: [
                                                                                                        {
                                                                                                          ref: "accessPointArn",
                                                                                                        },
                                                                                                        "accountId",
                                                                                                      ],
                                                                                                    },
                                                                                                    false,
                                                                                                  ],
                                                                                                },
                                                                                              ],
                                                                                              type: "tree",
                                                                                              rules: [
                                                                                                {
                                                                                                  conditions: [],
                                                                                                  type: "tree",
                                                                                                  rules: [
                                                                                                    {
                                                                                                      conditions: [
                                                                                                        {
                                                                                                          fn: "isSet",
                                                                                                          argv: [
                                                                                                            {
                                                                                                              ref: "AccountId",
                                                                                                            },
                                                                                                          ],
                                                                                                        },
                                                                                                        {
                                                                                                          fn: "not",
                                                                                                          argv: [
                                                                                                            {
                                                                                                              fn: "stringEquals",
                                                                                                              argv: [
                                                                                                                {
                                                                                                                  ref: "AccountId",
                                                                                                                },
                                                                                                                "{accessPointArn#accountId}",
                                                                                                              ],
                                                                                                            },
                                                                                                          ],
                                                                                                        },
                                                                                                      ],
                                                                                                      error:
                                                                                                        "Invalid ARN: the accountId specified in the ARN (`{accessPointArn#accountId}`) does not match the parameter (`{AccountId}`)",
                                                                                                      type: "error",
                                                                                                    },
                                                                                                    {
                                                                                                      conditions: [],
                                                                                                      type: "tree",
                                                                                                      rules: [
                                                                                                        {
                                                                                                          conditions: [
                                                                                                            {
                                                                                                              fn: "getAttr",
                                                                                                              argv: [
                                                                                                                {
                                                                                                                  ref: "accessPointArn",
                                                                                                                },
                                                                                                                "resourceId[2]",
                                                                                                              ],
                                                                                                              assign:
                                                                                                                "outpostType",
                                                                                                            },
                                                                                                          ],
                                                                                                          type: "tree",
                                                                                                          rules: [
                                                                                                            {
                                                                                                              conditions:
                                                                                                                [],
                                                                                                              type: "tree",
                                                                                                              rules: [
                                                                                                                {
                                                                                                                  conditions:
                                                                                                                    [
                                                                                                                      {
                                                                                                                        fn: "getAttr",
                                                                                                                        argv: [
                                                                                                                          {
                                                                                                                            ref: "accessPointArn",
                                                                                                                          },
                                                                                                                          "resourceId[3]",
                                                                                                                        ],
                                                                                                                        assign:
                                                                                                                          "accessPointName",
                                                                                                                      },
                                                                                                                    ],
                                                                                                                  type: "tree",
                                                                                                                  rules:
                                                                                                                    [
                                                                                                                      {
                                                                                                                        conditions:
                                                                                                                          [],
                                                                                                                        type: "tree",
                                                                                                                        rules:
                                                                                                                          [
                                                                                                                            {
                                                                                                                              conditions:
                                                                                                                                [
                                                                                                                                  {
                                                                                                                                    fn: "stringEquals",
                                                                                                                                    argv: [
                                                                                                                                      {
                                                                                                                                        ref: "outpostType",
                                                                                                                                      },
                                                                                                                                      "accesspoint",
                                                                                                                                    ],
                                                                                                                                  },
                                                                                                                                ],
                                                                                                                              type: "tree",
                                                                                                                              rules:
                                                                                                                                [
                                                                                                                                  {
                                                                                                                                    conditions:
                                                                                                                                      [],
                                                                                                                                    type: "tree",
                                                                                                                                    rules:
                                                                                                                                      [
                                                                                                                                        {
                                                                                                                                          conditions:
                                                                                                                                            [
                                                                                                                                              {
                                                                                                                                                fn: "booleanEquals",
                                                                                                                                                argv: [
                                                                                                                                                  {
                                                                                                                                                    ref: "UseFIPS",
                                                                                                                                                  },
                                                                                                                                                  true,
                                                                                                                                                ],
                                                                                                                                              },
                                                                                                                                            ],
                                                                                                                                          endpoint:
                                                                                                                                            {
                                                                                                                                              url: "https://s3-outposts-fips.{accessPointArn#region}.{arnPartition#dnsSuffix}",
                                                                                                                                              properties:
                                                                                                                                                {
                                                                                                                                                  authSchemes:
                                                                                                                                                    [
                                                                                                                                                      {
                                                                                                                                                        name: "sigv4",
                                                                                                                                                        disableDoubleEncoding:
                                                                                                                                                          true,
                                                                                                                                                        signingName:
                                                                                                                                                          "s3-outposts",
                                                                                                                                                        signingRegion:
                                                                                                                                                          "{accessPointArn#region}",
                                                                                                                                                      },
                                                                                                                                                    ],
                                                                                                                                                },
                                                                                                                                              headers:
                                                                                                                                                {
                                                                                                                                                  "x-amz-account-id":
                                                                                                                                                    [
                                                                                                                                                      "{accessPointArn#accountId}",
                                                                                                                                                    ],
                                                                                                                                                  "x-amz-outpost-id":
                                                                                                                                                    [
                                                                                                                                                      "{outpostId}",
                                                                                                                                                    ],
                                                                                                                                                },
                                                                                                                                            },
                                                                                                                                          type: "endpoint",
                                                                                                                                        },
                                                                                                                                        {
                                                                                                                                          conditions:
                                                                                                                                            [
                                                                                                                                              {
                                                                                                                                                fn: "isSet",
                                                                                                                                                argv: [
                                                                                                                                                  {
                                                                                                                                                    ref: "Endpoint",
                                                                                                                                                  },
                                                                                                                                                ],
                                                                                                                                              },
                                                                                                                                              {
                                                                                                                                                fn: "parseURL",
                                                                                                                                                argv: [
                                                                                                                                                  {
                                                                                                                                                    ref: "Endpoint",
                                                                                                                                                  },
                                                                                                                                                ],
                                                                                                                                                assign:
                                                                                                                                                  "url",
                                                                                                                                              },
                                                                                                                                            ],
                                                                                                                                          endpoint:
                                                                                                                                            {
                                                                                                                                              url: "{url#scheme}://{url#authority}{url#path}",
                                                                                                                                              properties:
                                                                                                                                                {
                                                                                                                                                  authSchemes:
                                                                                                                                                    [
                                                                                                                                                      {
                                                                                                                                                        name: "sigv4",
                                                                                                                                                        disableDoubleEncoding:
                                                                                                                                                          true,
                                                                                                                                                        signingName:
                                                                                                                                                          "s3-outposts",
                                                                                                                                                        signingRegion:
                                                                                                                                                          "{accessPointArn#region}",
                                                                                                                                                      },
                                                                                                                                                    ],
                                                                                                                                                },
                                                                                                                                              headers:
                                                                                                                                                {
                                                                                                                                                  "x-amz-account-id":
                                                                                                                                                    [
                                                                                                                                                      "{accessPointArn#accountId}",
                                                                                                                                                    ],
                                                                                                                                                  "x-amz-outpost-id":
                                                                                                                                                    [
                                                                                                                                                      "{outpostId}",
                                                                                                                                                    ],
                                                                                                                                                },
                                                                                                                                            },
                                                                                                                                          type: "endpoint",
                                                                                                                                        },
                                                                                                                                        {
                                                                                                                                          conditions:
                                                                                                                                            [],
                                                                                                                                          endpoint:
                                                                                                                                            {
                                                                                                                                              url: "https://s3-outposts.{accessPointArn#region}.{arnPartition#dnsSuffix}",
                                                                                                                                              properties:
                                                                                                                                                {
                                                                                                                                                  authSchemes:
                                                                                                                                                    [
                                                                                                                                                      {
                                                                                                                                                        name: "sigv4",
                                                                                                                                                        disableDoubleEncoding:
                                                                                                                                                          true,
                                                                                                                                                        signingName:
                                                                                                                                                          "s3-outposts",
                                                                                                                                                        signingRegion:
                                                                                                                                                          "{accessPointArn#region}",
                                                                                                                                                      },
                                                                                                                                                    ],
                                                                                                                                                },
                                                                                                                                              headers:
                                                                                                                                                {
                                                                                                                                                  "x-amz-account-id":
                                                                                                                                                    [
                                                                                                                                                      "{accessPointArn#accountId}",
                                                                                                                                                    ],
                                                                                                                                                  "x-amz-outpost-id":
                                                                                                                                                    [
                                                                                                                                                      "{outpostId}",
                                                                                                                                                    ],
                                                                                                                                                },
                                                                                                                                            },
                                                                                                                                          type: "endpoint",
                                                                                                                                        },
                                                                                                                                      ],
                                                                                                                                  },
                                                                                                                                ],
                                                                                                                            },
                                                                                                                            {
                                                                                                                              conditions:
                                                                                                                                [],
                                                                                                                              error:
                                                                                                                                "Expected an outpost type `accesspoint`, found `{outpostType}`",
                                                                                                                              type: "error",
                                                                                                                            },
                                                                                                                          ],
                                                                                                                      },
                                                                                                                    ],
                                                                                                                },
                                                                                                                {
                                                                                                                  conditions:
                                                                                                                    [],
                                                                                                                  error:
                                                                                                                    "Invalid ARN: expected an access point name",
                                                                                                                  type: "error",
                                                                                                                },
                                                                                                              ],
                                                                                                            },
                                                                                                          ],
                                                                                                        },
                                                                                                        {
                                                                                                          conditions:
                                                                                                            [],
                                                                                                          error:
                                                                                                            "Invalid ARN: Expected a 4-component resource",
                                                                                                          type: "error",
                                                                                                        },
                                                                                                      ],
                                                                                                    },
                                                                                                  ],
                                                                                                },
                                                                                              ],
                                                                                            },
                                                                                            {
                                                                                              conditions: [],
                                                                                              error:
                                                                                                "Invalid ARN: The account id may only contain a-z, A-Z, 0-9 and `-`. Found: `{accessPointArn#accountId}`",
                                                                                              type: "error",
                                                                                            },
                                                                                          ],
                                                                                        },
                                                                                      ],
                                                                                    },
                                                                                    {
                                                                                      conditions: [],
                                                                                      error:
                                                                                        "Invalid ARN: missing account ID",
                                                                                      type: "error",
                                                                                    },
                                                                                  ],
                                                                                },
                                                                              ],
                                                                            },
                                                                            {
                                                                              conditions: [],
                                                                              error:
                                                                                "Invalid region in ARN: `{accessPointArn#region}` (invalid DNS name)",
                                                                              type: "error",
                                                                            },
                                                                          ],
                                                                        },
                                                                      ],
                                                                    },
                                                                    {
                                                                      conditions: [],
                                                                      error:
                                                                        "Client was configured for partition `{partitionResult#name}` but ARN has `{arnPartition#name}`",
                                                                      type: "error",
                                                                    },
                                                                  ],
                                                                },
                                                              ],
                                                            },
                                                            {
                                                              conditions: [],
                                                              error:
                                                                "Could not load partition for ARN region `{accessPointArn#region}`",
                                                              type: "error",
                                                            },
                                                          ],
                                                        },
                                                      ],
                                                    },
                                                    {
                                                      conditions: [],
                                                      error: "A valid partition could not be determined",
                                                      type: "error",
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                        {
                                          conditions: [],
                                          error:
                                            "Invalid ARN: The outpost Id must only contain a-z, A-Z, 0-9 and `-`., found: `{outpostId}`",
                                          type: "error",
                                        },
                                      ],
                                    },
                                  ],
                                },
                                {
                                  conditions: [],
                                  error: "Invalid ARN: The Outpost Id was not set",
                                  type: "error",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      conditions: [],
                      error: "Invalid ARN: No ARN type specified",
                      type: "error",
                    },
                  ],
                },
                {
                  conditions: [
                    {
                      fn: "isSet",
                      argv: [
                        {
                          ref: "Bucket",
                        },
                      ],
                    },
                    {
                      fn: "aws.parseArn",
                      argv: [
                        {
                          ref: "Bucket",
                        },
                      ],
                      assign: "bucketArn",
                    },
                  ],
                  type: "tree",
                  rules: [
                    {
                      conditions: [
                        {
                          fn: "getAttr",
                          argv: [
                            {
                              ref: "bucketArn",
                            },
                            "resourceId[0]",
                          ],
                          assign: "arnType",
                        },
                        {
                          fn: "not",
                          argv: [
                            {
                              fn: "stringEquals",
                              argv: [
                                {
                                  ref: "arnType",
                                },
                                "",
                              ],
                            },
                          ],
                        },
                      ],
                      type: "tree",
                      rules: [
                        {
                          conditions: [
                            {
                              fn: "stringEquals",
                              argv: [
                                {
                                  fn: "getAttr",
                                  argv: [
                                    {
                                      ref: "bucketArn",
                                    },
                                    "service",
                                  ],
                                },
                                "s3-outposts",
                              ],
                            },
                          ],
                          type: "tree",
                          rules: [
                            {
                              conditions: [
                                {
                                  fn: "booleanEquals",
                                  argv: [
                                    {
                                      ref: "UseDualStack",
                                    },
                                    true,
                                  ],
                                },
                              ],
                              error: "Invalid configuration: Outpost buckets do not support dual-stack",
                              type: "error",
                            },
                            {
                              conditions: [],
                              type: "tree",
                              rules: [
                                {
                                  conditions: [
                                    {
                                      fn: "getAttr",
                                      argv: [
                                        {
                                          ref: "bucketArn",
                                        },
                                        "resourceId[1]",
                                      ],
                                      assign: "outpostId",
                                    },
                                  ],
                                  type: "tree",
                                  rules: [
                                    {
                                      conditions: [],
                                      type: "tree",
                                      rules: [
                                        {
                                          conditions: [
                                            {
                                              fn: "isValidHostLabel",
                                              argv: [
                                                {
                                                  ref: "outpostId",
                                                },
                                                false,
                                              ],
                                            },
                                          ],
                                          type: "tree",
                                          rules: [
                                            {
                                              conditions: [],
                                              type: "tree",
                                              rules: [
                                                {
                                                  conditions: [
                                                    {
                                                      fn: "isSet",
                                                      argv: [
                                                        {
                                                          ref: "UseArnRegion",
                                                        },
                                                      ],
                                                    },
                                                    {
                                                      fn: "booleanEquals",
                                                      argv: [
                                                        {
                                                          ref: "UseArnRegion",
                                                        },
                                                        false,
                                                      ],
                                                    },
                                                    {
                                                      fn: "not",
                                                      argv: [
                                                        {
                                                          fn: "stringEquals",
                                                          argv: [
                                                            {
                                                              fn: "getAttr",
                                                              argv: [
                                                                {
                                                                  ref: "bucketArn",
                                                                },
                                                                "region",
                                                              ],
                                                            },
                                                            "{Region}",
                                                          ],
                                                        },
                                                      ],
                                                    },
                                                  ],
                                                  error:
                                                    "Invalid configuration: region from ARN `{bucketArn#region}` does not match client region `{Region}` and UseArnRegion is `false`",
                                                  type: "error",
                                                },
                                                {
                                                  conditions: [],
                                                  type: "tree",
                                                  rules: [
                                                    {
                                                      conditions: [
                                                        {
                                                          fn: "aws.partition",
                                                          argv: [
                                                            {
                                                              fn: "getAttr",
                                                              argv: [
                                                                {
                                                                  ref: "bucketArn",
                                                                },
                                                                "region",
                                                              ],
                                                            },
                                                          ],
                                                          assign: "arnPartition",
                                                        },
                                                      ],
                                                      type: "tree",
                                                      rules: [
                                                        {
                                                          conditions: [],
                                                          type: "tree",
                                                          rules: [
                                                            {
                                                              conditions: [
                                                                {
                                                                  fn: "aws.partition",
                                                                  argv: [
                                                                    {
                                                                      ref: "Region",
                                                                    },
                                                                  ],
                                                                  assign: "partitionResult",
                                                                },
                                                              ],
                                                              type: "tree",
                                                              rules: [
                                                                {
                                                                  conditions: [],
                                                                  type: "tree",
                                                                  rules: [
                                                                    {
                                                                      conditions: [
                                                                        {
                                                                          fn: "stringEquals",
                                                                          argv: [
                                                                            {
                                                                              fn: "getAttr",
                                                                              argv: [
                                                                                {
                                                                                  ref: "arnPartition",
                                                                                },
                                                                                "name",
                                                                              ],
                                                                            },
                                                                            {
                                                                              fn: "getAttr",
                                                                              argv: [
                                                                                {
                                                                                  ref: "partitionResult",
                                                                                },
                                                                                "name",
                                                                              ],
                                                                            },
                                                                          ],
                                                                        },
                                                                      ],
                                                                      type: "tree",
                                                                      rules: [
                                                                        {
                                                                          conditions: [],
                                                                          type: "tree",
                                                                          rules: [
                                                                            {
                                                                              conditions: [
                                                                                {
                                                                                  fn: "isValidHostLabel",
                                                                                  argv: [
                                                                                    {
                                                                                      fn: "getAttr",
                                                                                      argv: [
                                                                                        {
                                                                                          ref: "bucketArn",
                                                                                        },
                                                                                        "region",
                                                                                      ],
                                                                                    },
                                                                                    true,
                                                                                  ],
                                                                                },
                                                                              ],
                                                                              type: "tree",
                                                                              rules: [
                                                                                {
                                                                                  conditions: [],
                                                                                  type: "tree",
                                                                                  rules: [
                                                                                    {
                                                                                      conditions: [
                                                                                        {
                                                                                          fn: "not",
                                                                                          argv: [
                                                                                            {
                                                                                              fn: "stringEquals",
                                                                                              argv: [
                                                                                                {
                                                                                                  fn: "getAttr",
                                                                                                  argv: [
                                                                                                    {
                                                                                                      ref: "bucketArn",
                                                                                                    },
                                                                                                    "accountId",
                                                                                                  ],
                                                                                                },
                                                                                                "",
                                                                                              ],
                                                                                            },
                                                                                          ],
                                                                                        },
                                                                                      ],
                                                                                      type: "tree",
                                                                                      rules: [
                                                                                        {
                                                                                          conditions: [],
                                                                                          type: "tree",
                                                                                          rules: [
                                                                                            {
                                                                                              conditions: [
                                                                                                {
                                                                                                  fn: "isValidHostLabel",
                                                                                                  argv: [
                                                                                                    {
                                                                                                      fn: "getAttr",
                                                                                                      argv: [
                                                                                                        {
                                                                                                          ref: "bucketArn",
                                                                                                        },
                                                                                                        "accountId",
                                                                                                      ],
                                                                                                    },
                                                                                                    false,
                                                                                                  ],
                                                                                                },
                                                                                              ],
                                                                                              type: "tree",
                                                                                              rules: [
                                                                                                {
                                                                                                  conditions: [],
                                                                                                  type: "tree",
                                                                                                  rules: [
                                                                                                    {
                                                                                                      conditions: [
                                                                                                        {
                                                                                                          fn: "isSet",
                                                                                                          argv: [
                                                                                                            {
                                                                                                              ref: "AccountId",
                                                                                                            },
                                                                                                          ],
                                                                                                        },
                                                                                                        {
                                                                                                          fn: "not",
                                                                                                          argv: [
                                                                                                            {
                                                                                                              fn: "stringEquals",
                                                                                                              argv: [
                                                                                                                {
                                                                                                                  ref: "AccountId",
                                                                                                                },
                                                                                                                "{bucketArn#accountId}",
                                                                                                              ],
                                                                                                            },
                                                                                                          ],
                                                                                                        },
                                                                                                      ],
                                                                                                      error:
                                                                                                        "Invalid ARN: the accountId specified in the ARN (`{bucketArn#accountId}`) does not match the parameter (`{AccountId}`)",
                                                                                                      type: "error",
                                                                                                    },
                                                                                                    {
                                                                                                      conditions: [],
                                                                                                      type: "tree",
                                                                                                      rules: [
                                                                                                        {
                                                                                                          conditions: [
                                                                                                            {
                                                                                                              fn: "getAttr",
                                                                                                              argv: [
                                                                                                                {
                                                                                                                  ref: "bucketArn",
                                                                                                                },
                                                                                                                "resourceId[2]",
                                                                                                              ],
                                                                                                              assign:
                                                                                                                "outpostType",
                                                                                                            },
                                                                                                          ],
                                                                                                          type: "tree",
                                                                                                          rules: [
                                                                                                            {
                                                                                                              conditions:
                                                                                                                [],
                                                                                                              type: "tree",
                                                                                                              rules: [
                                                                                                                {
                                                                                                                  conditions:
                                                                                                                    [
                                                                                                                      {
                                                                                                                        fn: "getAttr",
                                                                                                                        argv: [
                                                                                                                          {
                                                                                                                            ref: "bucketArn",
                                                                                                                          },
                                                                                                                          "resourceId[3]",
                                                                                                                        ],
                                                                                                                        assign:
                                                                                                                          "bucketName",
                                                                                                                      },
                                                                                                                    ],
                                                                                                                  type: "tree",
                                                                                                                  rules:
                                                                                                                    [
                                                                                                                      {
                                                                                                                        conditions:
                                                                                                                          [],
                                                                                                                        type: "tree",
                                                                                                                        rules:
                                                                                                                          [
                                                                                                                            {
                                                                                                                              conditions:
                                                                                                                                [
                                                                                                                                  {
                                                                                                                                    fn: "stringEquals",
                                                                                                                                    argv: [
                                                                                                                                      {
                                                                                                                                        ref: "outpostType",
                                                                                                                                      },
                                                                                                                                      "bucket",
                                                                                                                                    ],
                                                                                                                                  },
                                                                                                                                ],
                                                                                                                              type: "tree",
                                                                                                                              rules:
                                                                                                                                [
                                                                                                                                  {
                                                                                                                                    conditions:
                                                                                                                                      [],
                                                                                                                                    type: "tree",
                                                                                                                                    rules:
                                                                                                                                      [
                                                                                                                                        {
                                                                                                                                          conditions:
                                                                                                                                            [
                                                                                                                                              {
                                                                                                                                                fn: "booleanEquals",
                                                                                                                                                argv: [
                                                                                                                                                  {
                                                                                                                                                    ref: "UseFIPS",
                                                                                                                                                  },
                                                                                                                                                  true,
                                                                                                                                                ],
                                                                                                                                              },
                                                                                                                                            ],
                                                                                                                                          endpoint:
                                                                                                                                            {
                                                                                                                                              url: "https://s3-outposts-fips.{bucketArn#region}.{arnPartition#dnsSuffix}",
                                                                                                                                              properties:
                                                                                                                                                {
                                                                                                                                                  authSchemes:
                                                                                                                                                    [
                                                                                                                                                      {
                                                                                                                                                        name: "sigv4",
                                                                                                                                                        disableDoubleEncoding:
                                                                                                                                                          true,
                                                                                                                                                        signingName:
                                                                                                                                                          "s3-outposts",
                                                                                                                                                        signingRegion:
                                                                                                                                                          "{bucketArn#region}",
                                                                                                                                                      },
                                                                                                                                                    ],
                                                                                                                                                },
                                                                                                                                              headers:
                                                                                                                                                {
                                                                                                                                                  "x-amz-account-id":
                                                                                                                                                    [
                                                                                                                                                      "{bucketArn#accountId}",
                                                                                                                                                    ],
                                                                                                                                                  "x-amz-outpost-id":
                                                                                                                                                    [
                                                                                                                                                      "{outpostId}",
                                                                                                                                                    ],
                                                                                                                                                },
                                                                                                                                            },
                                                                                                                                          type: "endpoint",
                                                                                                                                        },
                                                                                                                                        {
                                                                                                                                          conditions:
                                                                                                                                            [
                                                                                                                                              {
                                                                                                                                                fn: "isSet",
                                                                                                                                                argv: [
                                                                                                                                                  {
                                                                                                                                                    ref: "Endpoint",
                                                                                                                                                  },
                                                                                                                                                ],
                                                                                                                                              },
                                                                                                                                              {
                                                                                                                                                fn: "parseURL",
                                                                                                                                                argv: [
                                                                                                                                                  {
                                                                                                                                                    ref: "Endpoint",
                                                                                                                                                  },
                                                                                                                                                ],
                                                                                                                                                assign:
                                                                                                                                                  "url",
                                                                                                                                              },
                                                                                                                                            ],
                                                                                                                                          endpoint:
                                                                                                                                            {
                                                                                                                                              url: "{url#scheme}://{url#authority}{url#path}",
                                                                                                                                              properties:
                                                                                                                                                {
                                                                                                                                                  authSchemes:
                                                                                                                                                    [
                                                                                                                                                      {
                                                                                                                                                        name: "sigv4",
                                                                                                                                                        disableDoubleEncoding:
                                                                                                                                                          true,
                                                                                                                                                        signingName:
                                                                                                                                                          "s3-outposts",
                                                                                                                                                        signingRegion:
                                                                                                                                                          "{bucketArn#region}",
                                                                                                                                                      },
                                                                                                                                                    ],
                                                                                                                                                },
                                                                                                                                              headers:
                                                                                                                                                {
                                                                                                                                                  "x-amz-account-id":
                                                                                                                                                    [
                                                                                                                                                      "{bucketArn#accountId}",
                                                                                                                                                    ],
                                                                                                                                                  "x-amz-outpost-id":
                                                                                                                                                    [
                                                                                                                                                      "{outpostId}",
                                                                                                                                                    ],
                                                                                                                                                },
                                                                                                                                            },
                                                                                                                                          type: "endpoint",
                                                                                                                                        },
                                                                                                                                        {
                                                                                                                                          conditions:
                                                                                                                                            [],
                                                                                                                                          endpoint:
                                                                                                                                            {
                                                                                                                                              url: "https://s3-outposts.{bucketArn#region}.{arnPartition#dnsSuffix}",
                                                                                                                                              properties:
                                                                                                                                                {
                                                                                                                                                  authSchemes:
                                                                                                                                                    [
                                                                                                                                                      {
                                                                                                                                                        name: "sigv4",
                                                                                                                                                        disableDoubleEncoding:
                                                                                                                                                          true,
                                                                                                                                                        signingName:
                                                                                                                                                          "s3-outposts",
                                                                                                                                                        signingRegion:
                                                                                                                                                          "{bucketArn#region}",
                                                                                                                                                      },
                                                                                                                                                    ],
                                                                                                                                                },
                                                                                                                                              headers:
                                                                                                                                                {
                                                                                                                                                  "x-amz-account-id":
                                                                                                                                                    [
                                                                                                                                                      "{bucketArn#accountId}",
                                                                                                                                                    ],
                                                                                                                                                  "x-amz-outpost-id":
                                                                                                                                                    [
                                                                                                                                                      "{outpostId}",
                                                                                                                                                    ],
                                                                                                                                                },
                                                                                                                                            },
                                                                                                                                          type: "endpoint",
                                                                                                                                        },
                                                                                                                                      ],
                                                                                                                                  },
                                                                                                                                ],
                                                                                                                            },
                                                                                                                            {
                                                                                                                              conditions:
                                                                                                                                [],
                                                                                                                              error:
                                                                                                                                "Invalid ARN: Expected an outpost type `bucket`, found `{outpostType}`",
                                                                                                                              type: "error",
                                                                                                                            },
                                                                                                                          ],
                                                                                                                      },
                                                                                                                    ],
                                                                                                                },
                                                                                                                {
                                                                                                                  conditions:
                                                                                                                    [],
                                                                                                                  error:
                                                                                                                    "Invalid ARN: expected a bucket name",
                                                                                                                  type: "error",
                                                                                                                },
                                                                                                              ],
                                                                                                            },
                                                                                                          ],
                                                                                                        },
                                                                                                        {
                                                                                                          conditions:
                                                                                                            [],
                                                                                                          error:
                                                                                                            "Invalid ARN: Expected a 4-component resource",
                                                                                                          type: "error",
                                                                                                        },
                                                                                                      ],
                                                                                                    },
                                                                                                  ],
                                                                                                },
                                                                                              ],
                                                                                            },
                                                                                            {
                                                                                              conditions: [],
                                                                                              error:
                                                                                                "Invalid ARN: The account id may only contain a-z, A-Z, 0-9 and `-`. Found: `{bucketArn#accountId}`",
                                                                                              type: "error",
                                                                                            },
                                                                                          ],
                                                                                        },
                                                                                      ],
                                                                                    },
                                                                                    {
                                                                                      conditions: [],
                                                                                      error:
                                                                                        "Invalid ARN: missing account ID",
                                                                                      type: "error",
                                                                                    },
                                                                                  ],
                                                                                },
                                                                              ],
                                                                            },
                                                                            {
                                                                              conditions: [],
                                                                              error:
                                                                                "Invalid region in ARN: `{bucketArn#region}` (invalid DNS name)",
                                                                              type: "error",
                                                                            },
                                                                          ],
                                                                        },
                                                                      ],
                                                                    },
                                                                    {
                                                                      conditions: [],
                                                                      error:
                                                                        "Client was configured for partition `{partitionResult#name}` but ARN has `{arnPartition#name}`",
                                                                      type: "error",
                                                                    },
                                                                  ],
                                                                },
                                                              ],
                                                            },
                                                            {
                                                              conditions: [],
                                                              error: "A valid partition could not be determined",
                                                              type: "error",
                                                            },
                                                          ],
                                                        },
                                                      ],
                                                    },
                                                    {
                                                      conditions: [],
                                                      error:
                                                        "Could not load partition for ARN region `{bucketArn#region}`",
                                                      type: "error",
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                        {
                                          conditions: [],
                                          error:
                                            "Invalid ARN: The outpost Id must only contain a-z, A-Z, 0-9 and `-`., found: `{outpostId}`",
                                          type: "error",
                                        },
                                      ],
                                    },
                                  ],
                                },
                                {
                                  conditions: [],
                                  error: "Invalid ARN: The Outpost Id was not set",
                                  type: "error",
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                    {
                      conditions: [],
                      error: "Invalid ARN: No ARN type specified",
                      type: "error",
                    },
                  ],
                },
                {
                  conditions: [],
                  type: "tree",
                  rules: [
                    {
                      conditions: [
                        {
                          fn: "aws.partition",
                          argv: [
                            {
                              ref: "Region",
                            },
                          ],
                          assign: "partitionResult",
                        },
                      ],
                      type: "tree",
                      rules: [
                        {
                          conditions: [],
                          type: "tree",
                          rules: [
                            {
                              conditions: [
                                {
                                  fn: "isValidHostLabel",
                                  argv: [
                                    {
                                      ref: "Region",
                                    },
                                    true,
                                  ],
                                },
                              ],
                              type: "tree",
                              rules: [
                                {
                                  conditions: [],
                                  type: "tree",
                                  rules: [
                                    {
                                      conditions: [
                                        {
                                          fn: "booleanEquals",
                                          argv: [
                                            {
                                              ref: "UseFIPS",
                                            },
                                            true,
                                          ],
                                        },
                                        {
                                          fn: "stringEquals",
                                          argv: [
                                            {
                                              fn: "getAttr",
                                              argv: [
                                                {
                                                  ref: "partitionResult",
                                                },
                                                "name",
                                              ],
                                            },
                                            "aws-cn",
                                          ],
                                        },
                                      ],
                                      error: "Partition does not support FIPS",
                                      type: "error",
                                    },
                                    {
                                      conditions: [],
                                      type: "tree",
                                      rules: [
                                        {
                                          conditions: [
                                            {
                                              fn: "isSet",
                                              argv: [
                                                {
                                                  ref: "RequiresAccountId",
                                                },
                                              ],
                                            },
                                            {
                                              fn: "booleanEquals",
                                              argv: [
                                                {
                                                  ref: "RequiresAccountId",
                                                },
                                                true,
                                              ],
                                            },
                                            {
                                              fn: "not",
                                              argv: [
                                                {
                                                  fn: "isSet",
                                                  argv: [
                                                    {
                                                      ref: "AccountId",
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                          error: "AccountId is required but not set",
                                          type: "error",
                                        },
                                        {
                                          conditions: [],
                                          type: "tree",
                                          rules: [
                                            {
                                              conditions: [
                                                {
                                                  fn: "isSet",
                                                  argv: [
                                                    {
                                                      ref: "AccountId",
                                                    },
                                                  ],
                                                },
                                                {
                                                  fn: "not",
                                                  argv: [
                                                    {
                                                      fn: "isValidHostLabel",
                                                      argv: [
                                                        {
                                                          ref: "AccountId",
                                                        },
                                                        false,
                                                      ],
                                                    },
                                                  ],
                                                },
                                              ],
                                              error: "AccountId must only contain a-z, A-Z, 0-9 and `-`.",
                                              type: "error",
                                            },
                                            {
                                              conditions: [],
                                              type: "tree",
                                              rules: [
                                                {
                                                  conditions: [
                                                    {
                                                      fn: "isSet",
                                                      argv: [
                                                        {
                                                          ref: "Endpoint",
                                                        },
                                                      ],
                                                    },
                                                    {
                                                      fn: "parseURL",
                                                      argv: [
                                                        {
                                                          ref: "Endpoint",
                                                        },
                                                      ],
                                                      assign: "url",
                                                    },
                                                  ],
                                                  type: "tree",
                                                  rules: [
                                                    {
                                                      conditions: [
                                                        {
                                                          fn: "booleanEquals",
                                                          argv: [
                                                            {
                                                              ref: "UseDualStack",
                                                            },
                                                            true,
                                                          ],
                                                        },
                                                      ],
                                                      error:
                                                        "Invalid Configuration: Dualstack and custom endpoint are not supported",
                                                      type: "error",
                                                    },
                                                    {
                                                      conditions: [],
                                                      type: "tree",
                                                      rules: [
                                                        {
                                                          conditions: [
                                                            {
                                                              fn: "isSet",
                                                              argv: [
                                                                {
                                                                  ref: "RequiresAccountId",
                                                                },
                                                              ],
                                                            },
                                                            {
                                                              fn: "booleanEquals",
                                                              argv: [
                                                                {
                                                                  ref: "RequiresAccountId",
                                                                },
                                                                true,
                                                              ],
                                                            },
                                                            {
                                                              fn: "isSet",
                                                              argv: [
                                                                {
                                                                  ref: "AccountId",
                                                                },
                                                              ],
                                                            },
                                                          ],
                                                          endpoint: {
                                                            url: "{url#scheme}://{AccountId}.{url#authority}{url#path}",
                                                            properties: {
                                                              authSchemes: [
                                                                {
                                                                  name: "sigv4",
                                                                  disableDoubleEncoding: true,
                                                                  signingName: "s3",
                                                                  signingRegion: "{Region}",
                                                                },
                                                              ],
                                                            },
                                                            headers: {},
                                                          },
                                                          type: "endpoint",
                                                        },
                                                        {
                                                          conditions: [],
                                                          endpoint: {
                                                            url: "{url#scheme}://{url#authority}{url#path}",
                                                            properties: {
                                                              authSchemes: [
                                                                {
                                                                  name: "sigv4",
                                                                  disableDoubleEncoding: true,
                                                                  signingName: "s3",
                                                                  signingRegion: "{Region}",
                                                                },
                                                              ],
                                                            },
                                                            headers: {},
                                                          },
                                                          type: "endpoint",
                                                        },
                                                      ],
                                                    },
                                                  ],
                                                },
                                                {
                                                  conditions: [],
                                                  type: "tree",
                                                  rules: [
                                                    {
                                                      conditions: [
                                                        {
                                                          fn: "booleanEquals",
                                                          argv: [
                                                            {
                                                              ref: "UseFIPS",
                                                            },
                                                            true,
                                                          ],
                                                        },
                                                        {
                                                          fn: "booleanEquals",
                                                          argv: [
                                                            {
                                                              ref: "UseDualStack",
                                                            },
                                                            true,
                                                          ],
                                                        },
                                                        {
                                                          fn: "isSet",
                                                          argv: [
                                                            {
                                                              ref: "RequiresAccountId",
                                                            },
                                                          ],
                                                        },
                                                        {
                                                          fn: "booleanEquals",
                                                          argv: [
                                                            {
                                                              ref: "RequiresAccountId",
                                                            },
                                                            true,
                                                          ],
                                                        },
                                                        {
                                                          fn: "isSet",
                                                          argv: [
                                                            {
                                                              ref: "AccountId",
                                                            },
                                                          ],
                                                        },
                                                      ],
                                                      endpoint: {
                                                        url: "https://{AccountId}.s3-control-fips.dualstack.{Region}.{partitionResult#dnsSuffix}",
                                                        properties: {
                                                          authSchemes: [
                                                            {
                                                              name: "sigv4",
                                                              disableDoubleEncoding: true,
                                                              signingName: "s3",
                                                              signingRegion: "{Region}",
                                                            },
                                                          ],
                                                        },
                                                        headers: {},
                                                      },
                                                      type: "endpoint",
                                                    },
                                                    {
                                                      conditions: [
                                                        {
                                                          fn: "booleanEquals",
                                                          argv: [
                                                            {
                                                              ref: "UseFIPS",
                                                            },
                                                            true,
                                                          ],
                                                        },
                                                        {
                                                          fn: "booleanEquals",
                                                          argv: [
                                                            {
                                                              ref: "UseDualStack",
                                                            },
                                                            true,
                                                          ],
                                                        },
                                                      ],
                                                      endpoint: {
                                                        url: "https://s3-control-fips.dualstack.{Region}.{partitionResult#dnsSuffix}",
                                                        properties: {
                                                          authSchemes: [
                                                            {
                                                              name: "sigv4",
                                                              disableDoubleEncoding: true,
                                                              signingName: "s3",
                                                              signingRegion: "{Region}",
                                                            },
                                                          ],
                                                        },
                                                        headers: {},
                                                      },
                                                      type: "endpoint",
                                                    },
                                                    {
                                                      conditions: [
                                                        {
                                                          fn: "booleanEquals",
                                                          argv: [
                                                            {
                                                              ref: "UseFIPS",
                                                            },
                                                            true,
                                                          ],
                                                        },
                                                        {
                                                          fn: "booleanEquals",
                                                          argv: [
                                                            {
                                                              ref: "UseDualStack",
                                                            },
                                                            false,
                                                          ],
                                                        },
                                                        {
                                                          fn: "isSet",
                                                          argv: [
                                                            {
                                                              ref: "RequiresAccountId",
                                                            },
                                                          ],
                                                        },
                                                        {
                                                          fn: "booleanEquals",
                                                          argv: [
                                                            {
                                                              ref: "RequiresAccountId",
                                                            },
                                                            true,
                                                          ],
                                                        },
                                                        {
                                                          fn: "isSet",
                                                          argv: [
                                                            {
                                                              ref: "AccountId",
                                                            },
                                                          ],
                                                        },
                                                      ],
                                                      endpoint: {
                                                        url: "https://{AccountId}.s3-control-fips.{Region}.{partitionResult#dnsSuffix}",
                                                        properties: {
                                                          authSchemes: [
                                                            {
                                                              name: "sigv4",
                                                              disableDoubleEncoding: true,
                                                              signingName: "s3",
                                                              signingRegion: "{Region}",
                                                            },
                                                          ],
                                                        },
                                                        headers: {},
                                                      },
                                                      type: "endpoint",
                                                    },
                                                    {
                                                      conditions: [
                                                        {
                                                          fn: "booleanEquals",
                                                          argv: [
                                                            {
                                                              ref: "UseFIPS",
                                                            },
                                                            true,
                                                          ],
                                                        },
                                                        {
                                                          fn: "booleanEquals",
                                                          argv: [
                                                            {
                                                              ref: "UseDualStack",
                                                            },
                                                            false,
                                                          ],
                                                        },
                                                      ],
                                                      endpoint: {
                                                        url: "https://s3-control-fips.{Region}.{partitionResult#dnsSuffix}",
                                                        properties: {
                                                          authSchemes: [
                                                            {
                                                              name: "sigv4",
                                                              disableDoubleEncoding: true,
                                                              signingName: "s3",
                                                              signingRegion: "{Region}",
                                                            },
                                                          ],
                                                        },
                                                        headers: {},
                                                      },
                                                      type: "endpoint",
                                                    },
                                                    {
                                                      conditions: [
                                                        {
                                                          fn: "booleanEquals",
                                                          argv: [
                                                            {
                                                              ref: "UseFIPS",
                                                            },
                                                            false,
                                                          ],
                                                        },
                                                        {
                                                          fn: "booleanEquals",
                                                          argv: [
                                                            {
                                                              ref: "UseDualStack",
                                                            },
                                                            true,
                                                          ],
                                                        },
                                                        {
                                                          fn: "isSet",
                                                          argv: [
                                                            {
                                                              ref: "RequiresAccountId",
                                                            },
                                                          ],
                                                        },
                                                        {
                                                          fn: "booleanEquals",
                                                          argv: [
                                                            {
                                                              ref: "RequiresAccountId",
                                                            },
                                                            true,
                                                          ],
                                                        },
                                                        {
                                                          fn: "isSet",
                                                          argv: [
                                                            {
                                                              ref: "AccountId",
                                                            },
                                                          ],
                                                        },
                                                      ],
                                                      endpoint: {
                                                        url: "https://{AccountId}.s3-control.dualstack.{Region}.{partitionResult#dnsSuffix}",
                                                        properties: {
                                                          authSchemes: [
                                                            {
                                                              name: "sigv4",
                                                              disableDoubleEncoding: true,
                                                              signingName: "s3",
                                                              signingRegion: "{Region}",
                                                            },
                                                          ],
                                                        },
                                                        headers: {},
                                                      },
                                                      type: "endpoint",
                                                    },
                                                    {
                                                      conditions: [
                                                        {
                                                          fn: "booleanEquals",
                                                          argv: [
                                                            {
                                                              ref: "UseFIPS",
                                                            },
                                                            false,
                                                          ],
                                                        },
                                                        {
                                                          fn: "booleanEquals",
                                                          argv: [
                                                            {
                                                              ref: "UseDualStack",
                                                            },
                                                            true,
                                                          ],
                                                        },
                                                      ],
                                                      endpoint: {
                                                        url: "https://s3-control.dualstack.{Region}.{partitionResult#dnsSuffix}",
                                                        properties: {
                                                          authSchemes: [
                                                            {
                                                              name: "sigv4",
                                                              disableDoubleEncoding: true,
                                                              signingName: "s3",
                                                              signingRegion: "{Region}",
                                                            },
                                                          ],
                                                        },
                                                        headers: {},
                                                      },
                                                      type: "endpoint",
                                                    },
                                                    {
                                                      conditions: [
                                                        {
                                                          fn: "booleanEquals",
                                                          argv: [
                                                            {
                                                              ref: "UseFIPS",
                                                            },
                                                            false,
                                                          ],
                                                        },
                                                        {
                                                          fn: "booleanEquals",
                                                          argv: [
                                                            {
                                                              ref: "UseDualStack",
                                                            },
                                                            false,
                                                          ],
                                                        },
                                                        {
                                                          fn: "isSet",
                                                          argv: [
                                                            {
                                                              ref: "RequiresAccountId",
                                                            },
                                                          ],
                                                        },
                                                        {
                                                          fn: "booleanEquals",
                                                          argv: [
                                                            {
                                                              ref: "RequiresAccountId",
                                                            },
                                                            true,
                                                          ],
                                                        },
                                                        {
                                                          fn: "isSet",
                                                          argv: [
                                                            {
                                                              ref: "AccountId",
                                                            },
                                                          ],
                                                        },
                                                      ],
                                                      endpoint: {
                                                        url: "https://{AccountId}.s3-control.{Region}.{partitionResult#dnsSuffix}",
                                                        properties: {
                                                          authSchemes: [
                                                            {
                                                              name: "sigv4",
                                                              disableDoubleEncoding: true,
                                                              signingName: "s3",
                                                              signingRegion: "{Region}",
                                                            },
                                                          ],
                                                        },
                                                        headers: {},
                                                      },
                                                      type: "endpoint",
                                                    },
                                                    {
                                                      conditions: [
                                                        {
                                                          fn: "booleanEquals",
                                                          argv: [
                                                            {
                                                              ref: "UseFIPS",
                                                            },
                                                            false,
                                                          ],
                                                        },
                                                        {
                                                          fn: "booleanEquals",
                                                          argv: [
                                                            {
                                                              ref: "UseDualStack",
                                                            },
                                                            false,
                                                          ],
                                                        },
                                                      ],
                                                      endpoint: {
                                                        url: "https://s3-control.{Region}.{partitionResult#dnsSuffix}",
                                                        properties: {
                                                          authSchemes: [
                                                            {
                                                              name: "sigv4",
                                                              disableDoubleEncoding: true,
                                                              signingName: "s3",
                                                              signingRegion: "{Region}",
                                                            },
                                                          ],
                                                        },
                                                        headers: {},
                                                      },
                                                      type: "endpoint",
                                                    },
                                                  ],
                                                },
                                              ],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                            {
                              conditions: [],
                              error: "Invalid region: region was not a valid DNS name.",
                              type: "error",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      conditions: [],
                      error: "A valid partition could not be determined",
                      type: "error",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          conditions: [],
          error: "Region must be set",
          type: "error",
        },
      ],
    },
  ],
};
