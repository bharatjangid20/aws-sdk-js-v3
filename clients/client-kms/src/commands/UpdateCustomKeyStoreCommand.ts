// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import {
  UpdateCustomKeyStoreRequest,
  UpdateCustomKeyStoreRequestFilterSensitiveLog,
  UpdateCustomKeyStoreResponse,
  UpdateCustomKeyStoreResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateCustomKeyStoreCommand,
  serializeAws_json1_1UpdateCustomKeyStoreCommand,
} from "../protocols/Aws_json1_1";

export interface UpdateCustomKeyStoreCommandInput extends UpdateCustomKeyStoreRequest {}
export interface UpdateCustomKeyStoreCommandOutput extends UpdateCustomKeyStoreResponse, __MetadataBearer {}

/**
 * <p>Changes the properties of a custom key store. Use the <code>CustomKeyStoreId</code>
 *       parameter to identify the custom key store you want to edit. Use the remaining parameters to
 *       change the properties of the custom key store.</p>
 *          <p>You can only update a custom key store that is disconnected. To disconnect the custom key
 *       store, use <a>DisconnectCustomKeyStore</a>. To reconnect the custom key store after
 *       the update completes, use <a>ConnectCustomKeyStore</a>. To find the connection
 *       state of a custom key store, use the <a>DescribeCustomKeyStores</a>
 *       operation.</p>
 *          <p>The <code>CustomKeyStoreId</code> parameter is required in all commands. Use the other
 *       parameters of <code>UpdateCustomKeyStore</code> to edit your key store settings.</p>
 *          <ul>
 *             <li>
 *                <p>Use the <code>NewCustomKeyStoreName</code> parameter to change the friendly name of
 *           the custom key store to the value that you specify.</p>
 *                <p> </p>
 *             </li>
 *             <li>
 *                <p>Use the <code>KeyStorePassword</code> parameter tell KMS the current password of the
 *             <a href="https://docs.aws.amazon.com/kms/latest/developerguide/key-store-concepts.html#concept-kmsuser">
 *                      <code>kmsuser</code> crypto user (CU)</a> in the associated CloudHSM cluster. You
 *           can use this parameter to <a href="https://docs.aws.amazon.com/kms/latest/developerguide/fix-keystore.html#fix-keystore-password">fix connection
 *             failures</a> that occur when KMS cannot log into the associated cluster because
 *           the <code>kmsuser</code> password has changed. This value does not change the password in
 *           the CloudHSM cluster.</p>
 *                <p> </p>
 *             </li>
 *             <li>
 *                <p>Use the <code>CloudHsmClusterId</code> parameter to associate the custom key store
 *           with a different, but related, CloudHSM cluster. You can use this parameter to repair a
 *           custom key store if its CloudHSM cluster becomes corrupted or is deleted, or when you need to
 *           create or restore a cluster from a backup. </p>
 *             </li>
 *          </ul>
 *          <p>If the operation succeeds, it returns a JSON object with no
 * properties.</p>
 *          <p>This operation is part of the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store feature</a> feature in KMS, which
 * combines the convenience and extensive integration of KMS with the isolation and control of a
 * single-tenant key store.</p>
 *          <p>
 *             <b>Cross-account
 *         use</b>: No. You cannot perform this operation on a custom key store in a different Amazon Web Services account. </p>
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:UpdateCustomKeyStore</a> (IAM policy)</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>ConnectCustomKeyStore</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>CreateCustomKeyStore</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteCustomKeyStore</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DescribeCustomKeyStores</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DisconnectCustomKeyStore</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, UpdateCustomKeyStoreCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, UpdateCustomKeyStoreCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new UpdateCustomKeyStoreCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateCustomKeyStoreCommandInput} for command's `input` shape.
 * @see {@link UpdateCustomKeyStoreCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for KMSClient's `config` shape.
 *
 */
export class UpdateCustomKeyStoreCommand extends $Command<
  UpdateCustomKeyStoreCommandInput,
  UpdateCustomKeyStoreCommandOutput,
  KMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: UpdateCustomKeyStoreCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateCustomKeyStoreCommandInput, UpdateCustomKeyStoreCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateCustomKeyStoreCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "KMSClient";
    const commandName = "UpdateCustomKeyStoreCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateCustomKeyStoreRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateCustomKeyStoreResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateCustomKeyStoreCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateCustomKeyStoreCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateCustomKeyStoreCommandOutput> {
    return deserializeAws_json1_1UpdateCustomKeyStoreCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
