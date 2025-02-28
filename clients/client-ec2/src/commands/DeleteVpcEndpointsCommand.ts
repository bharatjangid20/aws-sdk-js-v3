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

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import {
  DeleteVpcEndpointsRequest,
  DeleteVpcEndpointsRequestFilterSensitiveLog,
  DeleteVpcEndpointsResult,
  DeleteVpcEndpointsResultFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_ec2DeleteVpcEndpointsCommand,
  serializeAws_ec2DeleteVpcEndpointsCommand,
} from "../protocols/Aws_ec2";

export interface DeleteVpcEndpointsCommandInput extends DeleteVpcEndpointsRequest {}
export interface DeleteVpcEndpointsCommandOutput extends DeleteVpcEndpointsResult, __MetadataBearer {}

/**
 * <p>Deletes one or more specified VPC endpoints. You can delete any of the following types of VPC endpoints.  </p>
 *         <ul>
 *             <li>
 *                <p>Gateway endpoint,</p>
 *             </li>
 *             <li>
 *                <p>Gateway Load Balancer endpoint,</p>
 *             </li>
 *             <li>
 *                <p>Interface endpoint</p>
 *             </li>
 *          </ul>
 *         <p>The following rules apply when you delete a VPC endpoint:</p>
 *         <ul>
 *             <li>
 *                 <p>When you delete a gateway endpoint, we delete the endpoint routes in the route tables that are associated with the endpoint.</p>
 *             </li>
 *             <li>
 *                 <p>When you delete a Gateway Load Balancer endpoint, we delete the endpoint network interfaces. </p>
 *                 <p>You can only delete Gateway Load Balancer endpoints when the routes that are associated with the endpoint are deleted.</p>
 *             </li>
 *             <li>
 *                 <p>When you delete an interface endpoint, we delete the  endpoint network interfaces.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteVpcEndpointsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteVpcEndpointsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteVpcEndpointsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteVpcEndpointsCommandInput} for command's `input` shape.
 * @see {@link DeleteVpcEndpointsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 */
export class DeleteVpcEndpointsCommand extends $Command<
  DeleteVpcEndpointsCommandInput,
  DeleteVpcEndpointsCommandOutput,
  EC2ClientResolvedConfig
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

  constructor(readonly input: DeleteVpcEndpointsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteVpcEndpointsCommandInput, DeleteVpcEndpointsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteVpcEndpointsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "DeleteVpcEndpointsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteVpcEndpointsRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteVpcEndpointsResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteVpcEndpointsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2DeleteVpcEndpointsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteVpcEndpointsCommandOutput> {
    return deserializeAws_ec2DeleteVpcEndpointsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
