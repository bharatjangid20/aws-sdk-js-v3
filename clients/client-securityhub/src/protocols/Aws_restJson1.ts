// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map as __map,
  parseRfc3339DateTime as __parseRfc3339DateTime,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  AcceptAdministratorInvitationCommandInput,
  AcceptAdministratorInvitationCommandOutput,
} from "../commands/AcceptAdministratorInvitationCommand";
import { AcceptInvitationCommandInput, AcceptInvitationCommandOutput } from "../commands/AcceptInvitationCommand";
import {
  BatchDisableStandardsCommandInput,
  BatchDisableStandardsCommandOutput,
} from "../commands/BatchDisableStandardsCommand";
import {
  BatchEnableStandardsCommandInput,
  BatchEnableStandardsCommandOutput,
} from "../commands/BatchEnableStandardsCommand";
import {
  BatchImportFindingsCommandInput,
  BatchImportFindingsCommandOutput,
} from "../commands/BatchImportFindingsCommand";
import {
  BatchUpdateFindingsCommandInput,
  BatchUpdateFindingsCommandOutput,
} from "../commands/BatchUpdateFindingsCommand";
import { CreateActionTargetCommandInput, CreateActionTargetCommandOutput } from "../commands/CreateActionTargetCommand";
import {
  CreateFindingAggregatorCommandInput,
  CreateFindingAggregatorCommandOutput,
} from "../commands/CreateFindingAggregatorCommand";
import { CreateInsightCommandInput, CreateInsightCommandOutput } from "../commands/CreateInsightCommand";
import { CreateMembersCommandInput, CreateMembersCommandOutput } from "../commands/CreateMembersCommand";
import { DeclineInvitationsCommandInput, DeclineInvitationsCommandOutput } from "../commands/DeclineInvitationsCommand";
import { DeleteActionTargetCommandInput, DeleteActionTargetCommandOutput } from "../commands/DeleteActionTargetCommand";
import {
  DeleteFindingAggregatorCommandInput,
  DeleteFindingAggregatorCommandOutput,
} from "../commands/DeleteFindingAggregatorCommand";
import { DeleteInsightCommandInput, DeleteInsightCommandOutput } from "../commands/DeleteInsightCommand";
import { DeleteInvitationsCommandInput, DeleteInvitationsCommandOutput } from "../commands/DeleteInvitationsCommand";
import { DeleteMembersCommandInput, DeleteMembersCommandOutput } from "../commands/DeleteMembersCommand";
import {
  DescribeActionTargetsCommandInput,
  DescribeActionTargetsCommandOutput,
} from "../commands/DescribeActionTargetsCommand";
import { DescribeHubCommandInput, DescribeHubCommandOutput } from "../commands/DescribeHubCommand";
import {
  DescribeOrganizationConfigurationCommandInput,
  DescribeOrganizationConfigurationCommandOutput,
} from "../commands/DescribeOrganizationConfigurationCommand";
import { DescribeProductsCommandInput, DescribeProductsCommandOutput } from "../commands/DescribeProductsCommand";
import { DescribeStandardsCommandInput, DescribeStandardsCommandOutput } from "../commands/DescribeStandardsCommand";
import {
  DescribeStandardsControlsCommandInput,
  DescribeStandardsControlsCommandOutput,
} from "../commands/DescribeStandardsControlsCommand";
import {
  DisableImportFindingsForProductCommandInput,
  DisableImportFindingsForProductCommandOutput,
} from "../commands/DisableImportFindingsForProductCommand";
import {
  DisableOrganizationAdminAccountCommandInput,
  DisableOrganizationAdminAccountCommandOutput,
} from "../commands/DisableOrganizationAdminAccountCommand";
import { DisableSecurityHubCommandInput, DisableSecurityHubCommandOutput } from "../commands/DisableSecurityHubCommand";
import {
  DisassociateFromAdministratorAccountCommandInput,
  DisassociateFromAdministratorAccountCommandOutput,
} from "../commands/DisassociateFromAdministratorAccountCommand";
import {
  DisassociateFromMasterAccountCommandInput,
  DisassociateFromMasterAccountCommandOutput,
} from "../commands/DisassociateFromMasterAccountCommand";
import {
  DisassociateMembersCommandInput,
  DisassociateMembersCommandOutput,
} from "../commands/DisassociateMembersCommand";
import {
  EnableImportFindingsForProductCommandInput,
  EnableImportFindingsForProductCommandOutput,
} from "../commands/EnableImportFindingsForProductCommand";
import {
  EnableOrganizationAdminAccountCommandInput,
  EnableOrganizationAdminAccountCommandOutput,
} from "../commands/EnableOrganizationAdminAccountCommand";
import { EnableSecurityHubCommandInput, EnableSecurityHubCommandOutput } from "../commands/EnableSecurityHubCommand";
import {
  GetAdministratorAccountCommandInput,
  GetAdministratorAccountCommandOutput,
} from "../commands/GetAdministratorAccountCommand";
import {
  GetEnabledStandardsCommandInput,
  GetEnabledStandardsCommandOutput,
} from "../commands/GetEnabledStandardsCommand";
import {
  GetFindingAggregatorCommandInput,
  GetFindingAggregatorCommandOutput,
} from "../commands/GetFindingAggregatorCommand";
import { GetFindingsCommandInput, GetFindingsCommandOutput } from "../commands/GetFindingsCommand";
import { GetInsightResultsCommandInput, GetInsightResultsCommandOutput } from "../commands/GetInsightResultsCommand";
import { GetInsightsCommandInput, GetInsightsCommandOutput } from "../commands/GetInsightsCommand";
import {
  GetInvitationsCountCommandInput,
  GetInvitationsCountCommandOutput,
} from "../commands/GetInvitationsCountCommand";
import { GetMasterAccountCommandInput, GetMasterAccountCommandOutput } from "../commands/GetMasterAccountCommand";
import { GetMembersCommandInput, GetMembersCommandOutput } from "../commands/GetMembersCommand";
import { InviteMembersCommandInput, InviteMembersCommandOutput } from "../commands/InviteMembersCommand";
import {
  ListEnabledProductsForImportCommandInput,
  ListEnabledProductsForImportCommandOutput,
} from "../commands/ListEnabledProductsForImportCommand";
import {
  ListFindingAggregatorsCommandInput,
  ListFindingAggregatorsCommandOutput,
} from "../commands/ListFindingAggregatorsCommand";
import { ListInvitationsCommandInput, ListInvitationsCommandOutput } from "../commands/ListInvitationsCommand";
import { ListMembersCommandInput, ListMembersCommandOutput } from "../commands/ListMembersCommand";
import {
  ListOrganizationAdminAccountsCommandInput,
  ListOrganizationAdminAccountsCommandOutput,
} from "../commands/ListOrganizationAdminAccountsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateActionTargetCommandInput, UpdateActionTargetCommandOutput } from "../commands/UpdateActionTargetCommand";
import {
  UpdateFindingAggregatorCommandInput,
  UpdateFindingAggregatorCommandOutput,
} from "../commands/UpdateFindingAggregatorCommand";
import { UpdateFindingsCommandInput, UpdateFindingsCommandOutput } from "../commands/UpdateFindingsCommand";
import { UpdateInsightCommandInput, UpdateInsightCommandOutput } from "../commands/UpdateInsightCommand";
import {
  UpdateOrganizationConfigurationCommandInput,
  UpdateOrganizationConfigurationCommandOutput,
} from "../commands/UpdateOrganizationConfigurationCommand";
import {
  UpdateSecurityHubConfigurationCommandInput,
  UpdateSecurityHubConfigurationCommandOutput,
} from "../commands/UpdateSecurityHubConfigurationCommand";
import {
  UpdateStandardsControlCommandInput,
  UpdateStandardsControlCommandOutput,
} from "../commands/UpdateStandardsControlCommand";
import {
  AccessDeniedException,
  AccountDetails,
  Action,
  ActionLocalIpDetails,
  ActionLocalPortDetails,
  ActionRemoteIpDetails,
  ActionRemotePortDetails,
  ActionTarget,
  Adjustment,
  AdminAccount,
  AvailabilityZone,
  AwsApiCallAction,
  AwsApiCallActionDomainDetails,
  AwsApiGatewayAccessLogSettings,
  AwsApiGatewayCanarySettings,
  AwsApiGatewayEndpointConfiguration,
  AwsApiGatewayMethodSettings,
  AwsApiGatewayRestApiDetails,
  AwsApiGatewayStageDetails,
  AwsApiGatewayV2ApiDetails,
  AwsApiGatewayV2RouteSettings,
  AwsApiGatewayV2StageDetails,
  AwsAutoScalingAutoScalingGroupAvailabilityZonesListDetails,
  AwsAutoScalingAutoScalingGroupDetails,
  AwsAutoScalingAutoScalingGroupLaunchTemplateLaunchTemplateSpecification,
  AwsAutoScalingAutoScalingGroupMixedInstancesPolicyDetails,
  AwsAutoScalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionDetails,
  AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateDetails,
  AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification,
  AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesListDetails,
  AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails,
  AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails,
  AwsAutoScalingLaunchConfigurationDetails,
  AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails,
  AwsAutoScalingLaunchConfigurationMetadataOptions,
  AwsBackupBackupPlanAdvancedBackupSettingsDetails,
  AwsBackupBackupPlanBackupPlanDetails,
  AwsBackupBackupPlanDetails,
  AwsBackupBackupPlanLifecycleDetails,
  AwsBackupBackupPlanRuleCopyActionsDetails,
  AwsBackupBackupPlanRuleDetails,
  AwsBackupBackupVaultDetails,
  AwsBackupBackupVaultNotificationsDetails,
  AwsBackupRecoveryPointCalculatedLifecycleDetails,
  AwsBackupRecoveryPointCreatedByDetails,
  AwsBackupRecoveryPointDetails,
  AwsBackupRecoveryPointLifecycleDetails,
  AwsCertificateManagerCertificateDetails,
  AwsCertificateManagerCertificateDomainValidationOption,
  AwsCertificateManagerCertificateExtendedKeyUsage,
  AwsCertificateManagerCertificateKeyUsage,
  AwsCertificateManagerCertificateOptions,
  AwsCertificateManagerCertificateRenewalSummary,
  AwsCertificateManagerCertificateResourceRecord,
  AwsCloudFormationStackDetails,
  AwsCloudFormationStackDriftInformationDetails,
  AwsCloudFormationStackOutputsDetails,
  AwsCloudFrontDistributionCacheBehavior,
  AwsCloudFrontDistributionCacheBehaviors,
  AwsCloudFrontDistributionDefaultCacheBehavior,
  AwsCloudFrontDistributionDetails,
  AwsCloudFrontDistributionLogging,
  AwsCloudFrontDistributionOriginCustomOriginConfig,
  AwsCloudFrontDistributionOriginGroup,
  AwsCloudFrontDistributionOriginGroupFailover,
  AwsCloudFrontDistributionOriginGroupFailoverStatusCodes,
  AwsCloudFrontDistributionOriginGroups,
  AwsCloudFrontDistributionOriginItem,
  AwsCloudFrontDistributionOrigins,
  AwsCloudFrontDistributionOriginS3OriginConfig,
  AwsCloudFrontDistributionOriginSslProtocols,
  AwsCloudFrontDistributionViewerCertificate,
  AwsCloudTrailTrailDetails,
  AwsCloudWatchAlarmDetails,
  AwsCloudWatchAlarmDimensionsDetails,
  AwsCodeBuildProjectArtifactsDetails,
  AwsCodeBuildProjectDetails,
  AwsCodeBuildProjectEnvironment,
  AwsCodeBuildProjectEnvironmentEnvironmentVariablesDetails,
  AwsCodeBuildProjectEnvironmentRegistryCredential,
  AwsCodeBuildProjectLogsConfigCloudWatchLogsDetails,
  AwsCodeBuildProjectLogsConfigDetails,
  AwsCodeBuildProjectLogsConfigS3LogsDetails,
  AwsCodeBuildProjectSource,
  AwsCodeBuildProjectVpcConfig,
  AwsCorsConfiguration,
  AwsDynamoDbTableAttributeDefinition,
  AwsDynamoDbTableBillingModeSummary,
  AwsDynamoDbTableDetails,
  AwsDynamoDbTableGlobalSecondaryIndex,
  AwsDynamoDbTableKeySchema,
  AwsDynamoDbTableLocalSecondaryIndex,
  AwsDynamoDbTableProjection,
  AwsDynamoDbTableProvisionedThroughput,
  AwsDynamoDbTableProvisionedThroughputOverride,
  AwsDynamoDbTableReplica,
  AwsDynamoDbTableReplicaGlobalSecondaryIndex,
  AwsDynamoDbTableRestoreSummary,
  AwsDynamoDbTableSseDescription,
  AwsDynamoDbTableStreamSpecification,
  AwsEc2EipDetails,
  AwsEc2InstanceDetails,
  AwsEc2InstanceMetadataOptions,
  AwsEc2InstanceNetworkInterfacesDetails,
  AwsEc2NetworkAclAssociation,
  AwsEc2NetworkAclDetails,
  AwsEc2NetworkAclEntry,
  AwsEc2NetworkInterfaceAttachment,
  AwsEc2NetworkInterfaceDetails,
  AwsEc2NetworkInterfaceIpV6AddressDetail,
  AwsEc2NetworkInterfacePrivateIpAddressDetail,
  AwsEc2NetworkInterfaceSecurityGroup,
  AwsEc2SecurityGroupDetails,
  AwsEc2SecurityGroupIpPermission,
  AwsEc2SecurityGroupIpRange,
  AwsEc2SecurityGroupIpv6Range,
  AwsEc2SecurityGroupPrefixListId,
  AwsEc2SecurityGroupUserIdGroupPair,
  AwsEc2SubnetDetails,
  AwsEc2TransitGatewayDetails,
  AwsEc2VolumeAttachment,
  AwsEc2VolumeDetails,
  AwsEc2VpcDetails,
  AwsEc2VpcEndpointServiceDetails,
  AwsEc2VpcEndpointServiceServiceTypeDetails,
  AwsEc2VpcPeeringConnectionDetails,
  AwsEc2VpcPeeringConnectionStatusDetails,
  AwsEc2VpcPeeringConnectionVpcInfoDetails,
  AwsEc2VpnConnectionDetails,
  AwsEc2VpnConnectionOptionsDetails,
  AwsEc2VpnConnectionOptionsTunnelOptionsDetails,
  AwsEc2VpnConnectionRoutesDetails,
  AwsEc2VpnConnectionVgwTelemetryDetails,
  AwsEcrContainerImageDetails,
  AwsEcrRepositoryDetails,
  AwsEcrRepositoryImageScanningConfigurationDetails,
  AwsEcrRepositoryLifecyclePolicyDetails,
  AwsEcsClusterClusterSettingsDetails,
  AwsEcsClusterConfigurationDetails,
  AwsEcsClusterConfigurationExecuteCommandConfigurationDetails,
  AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails,
  AwsEcsClusterDefaultCapacityProviderStrategyDetails,
  AwsEcsClusterDetails,
  AwsEcsContainerDetails,
  AwsEcsServiceCapacityProviderStrategyDetails,
  AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails,
  AwsEcsServiceDeploymentConfigurationDetails,
  AwsEcsServiceDeploymentControllerDetails,
  AwsEcsServiceDetails,
  AwsEcsServiceLoadBalancersDetails,
  AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails,
  AwsEcsServiceNetworkConfigurationDetails,
  AwsEcsServicePlacementConstraintsDetails,
  AwsEcsServicePlacementStrategiesDetails,
  AwsEcsServiceServiceRegistriesDetails,
  AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails,
  AwsEcsTaskDefinitionContainerDefinitionsDetails,
  AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails,
  AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails,
  AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails,
  AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails,
  AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails,
  AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails,
  AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails,
  AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails,
  AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails,
  AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails,
  AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails,
  AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails,
  AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails,
  AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails,
  AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails,
  AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails,
  AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails,
  AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails,
  AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails,
  AwsEcsTaskDefinitionDetails,
  AwsEcsTaskDefinitionInferenceAcceleratorsDetails,
  AwsEcsTaskDefinitionPlacementConstraintsDetails,
  AwsEcsTaskDefinitionProxyConfigurationDetails,
  AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails,
  AwsEcsTaskDefinitionVolumesDetails,
  AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails,
  AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails,
  AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails,
  AwsEcsTaskDefinitionVolumesHostDetails,
  AwsEcsTaskDetails,
  AwsEcsTaskVolumeDetails,
  AwsEcsTaskVolumeHostDetails,
  AwsEfsAccessPointDetails,
  AwsEfsAccessPointPosixUserDetails,
  AwsEfsAccessPointRootDirectoryCreationInfoDetails,
  AwsEfsAccessPointRootDirectoryDetails,
  AwsEksClusterDetails,
  AwsEksClusterLoggingClusterLoggingDetails,
  AwsEksClusterLoggingDetails,
  AwsEksClusterResourcesVpcConfigDetails,
  AwsElasticBeanstalkEnvironmentDetails,
  AwsElasticBeanstalkEnvironmentEnvironmentLink,
  AwsElasticBeanstalkEnvironmentOptionSetting,
  AwsElasticBeanstalkEnvironmentTier,
  AwsElasticsearchDomainDetails,
  AwsElasticsearchDomainDomainEndpointOptions,
  AwsElasticsearchDomainElasticsearchClusterConfigDetails,
  AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails,
  AwsElasticsearchDomainEncryptionAtRestOptions,
  AwsElasticsearchDomainLogPublishingOptions,
  AwsElasticsearchDomainLogPublishingOptionsLogConfig,
  AwsElasticsearchDomainNodeToNodeEncryptionOptions,
  AwsElasticsearchDomainServiceSoftwareOptions,
  AwsElasticsearchDomainVPCOptions,
  AwsElbAppCookieStickinessPolicy,
  AwsElbLbCookieStickinessPolicy,
  AwsElbLoadBalancerAccessLog,
  AwsElbLoadBalancerAdditionalAttribute,
  AwsElbLoadBalancerAttributes,
  AwsElbLoadBalancerBackendServerDescription,
  AwsElbLoadBalancerConnectionDraining,
  AwsElbLoadBalancerConnectionSettings,
  AwsElbLoadBalancerCrossZoneLoadBalancing,
  AwsElbLoadBalancerDetails,
  AwsElbLoadBalancerHealthCheck,
  AwsElbLoadBalancerInstance,
  AwsElbLoadBalancerListener,
  AwsElbLoadBalancerListenerDescription,
  AwsElbLoadBalancerPolicies,
  AwsElbLoadBalancerSourceSecurityGroup,
  AwsElbv2LoadBalancerAttribute,
  AwsElbv2LoadBalancerDetails,
  AwsIamAccessKeyDetails,
  AwsIamAccessKeySessionContext,
  AwsIamAccessKeySessionContextAttributes,
  AwsIamAccessKeySessionContextSessionIssuer,
  AwsIamAttachedManagedPolicy,
  AwsIamGroupDetails,
  AwsIamGroupPolicy,
  AwsIamInstanceProfile,
  AwsIamInstanceProfileRole,
  AwsIamPermissionsBoundary,
  AwsIamPolicyDetails,
  AwsIamPolicyVersion,
  AwsIamRoleDetails,
  AwsIamRolePolicy,
  AwsIamUserDetails,
  AwsIamUserPolicy,
  AwsKinesisStreamDetails,
  AwsKinesisStreamStreamEncryptionDetails,
  AwsKmsKeyDetails,
  AwsLambdaFunctionCode,
  AwsLambdaFunctionDeadLetterConfig,
  AwsLambdaFunctionDetails,
  AwsLambdaFunctionEnvironment,
  AwsLambdaFunctionEnvironmentError,
  AwsLambdaFunctionLayer,
  AwsLambdaFunctionTracingConfig,
  AwsLambdaFunctionVpcConfig,
  AwsLambdaLayerVersionDetails,
  AwsMountPoint,
  AwsNetworkFirewallFirewallDetails,
  AwsNetworkFirewallFirewallPolicyDetails,
  AwsNetworkFirewallFirewallSubnetMappingsDetails,
  CidrBlockAssociation,
  City,
  Country,
  DnsRequestAction,
  FirewallPolicyDetails,
  FirewallPolicyStatefulRuleGroupReferencesDetails,
  FirewallPolicyStatelessCustomActionsDetails,
  FirewallPolicyStatelessRuleGroupReferencesDetails,
  GeoLocation,
  IcmpTypeCode,
  InternalException,
  InvalidAccessException,
  InvalidInputException,
  IpOrganizationDetails,
  Ipv6CidrBlockAssociation,
  LimitExceededException,
  LoadBalancerState,
  NetworkConnectionAction,
  PortProbeAction,
  PortProbeDetail,
  PortRangeFromTo,
  ResourceNotFoundException,
  RuleGroupSourceListDetails,
  RuleGroupSourceStatefulRulesDetails,
  RuleGroupSourceStatefulRulesHeaderDetails,
  RuleGroupSourceStatefulRulesOptionsDetails,
  StatelessCustomActionDefinition,
  StatelessCustomPublishMetricAction,
  StatelessCustomPublishMetricActionDimension,
  VpcInfoCidrBlockSetDetails,
  VpcInfoIpv6CidrBlockSetDetails,
  VpcInfoPeeringOptionsDetails,
} from "../models/models_0";
import {
  _Record,
  AwsNetworkFirewallRuleGroupDetails,
  AwsOpenSearchServiceDomainAdvancedSecurityOptionsDetails,
  AwsOpenSearchServiceDomainClusterConfigDetails,
  AwsOpenSearchServiceDomainClusterConfigZoneAwarenessConfigDetails,
  AwsOpenSearchServiceDomainDetails,
  AwsOpenSearchServiceDomainDomainEndpointOptionsDetails,
  AwsOpenSearchServiceDomainEncryptionAtRestOptionsDetails,
  AwsOpenSearchServiceDomainLogPublishingOption,
  AwsOpenSearchServiceDomainLogPublishingOptionsDetails,
  AwsOpenSearchServiceDomainMasterUserOptionsDetails,
  AwsOpenSearchServiceDomainNodeToNodeEncryptionOptionsDetails,
  AwsOpenSearchServiceDomainServiceSoftwareOptionsDetails,
  AwsOpenSearchServiceDomainVpcOptionsDetails,
  AwsRdsDbClusterAssociatedRole,
  AwsRdsDbClusterDetails,
  AwsRdsDbClusterMember,
  AwsRdsDbClusterOptionGroupMembership,
  AwsRdsDbClusterSnapshotDetails,
  AwsRdsDbDomainMembership,
  AwsRdsDbInstanceAssociatedRole,
  AwsRdsDbInstanceDetails,
  AwsRdsDbInstanceEndpoint,
  AwsRdsDbInstanceVpcSecurityGroup,
  AwsRdsDbOptionGroupMembership,
  AwsRdsDbParameterGroup,
  AwsRdsDbPendingModifiedValues,
  AwsRdsDbProcessorFeature,
  AwsRdsDbSecurityGroupDetails,
  AwsRdsDbSecurityGroupEc2SecurityGroup,
  AwsRdsDbSecurityGroupIpRange,
  AwsRdsDbSnapshotDetails,
  AwsRdsDbStatusInfo,
  AwsRdsDbSubnetGroup,
  AwsRdsDbSubnetGroupSubnet,
  AwsRdsDbSubnetGroupSubnetAvailabilityZone,
  AwsRdsEventSubscriptionDetails,
  AwsRdsPendingCloudWatchLogsExports,
  AwsRedshiftClusterClusterNode,
  AwsRedshiftClusterClusterParameterGroup,
  AwsRedshiftClusterClusterParameterStatus,
  AwsRedshiftClusterClusterSecurityGroup,
  AwsRedshiftClusterClusterSnapshotCopyStatus,
  AwsRedshiftClusterDeferredMaintenanceWindow,
  AwsRedshiftClusterDetails,
  AwsRedshiftClusterElasticIpStatus,
  AwsRedshiftClusterEndpoint,
  AwsRedshiftClusterHsmStatus,
  AwsRedshiftClusterIamRole,
  AwsRedshiftClusterLoggingStatus,
  AwsRedshiftClusterPendingModifiedValues,
  AwsRedshiftClusterResizeInfo,
  AwsRedshiftClusterRestoreStatus,
  AwsRedshiftClusterVpcSecurityGroup,
  AwsS3AccountPublicAccessBlockDetails,
  AwsS3BucketBucketLifecycleConfigurationDetails,
  AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails,
  AwsS3BucketBucketLifecycleConfigurationRulesDetails,
  AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails,
  AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails,
  AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails,
  AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails,
  AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails,
  AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails,
  AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails,
  AwsS3BucketBucketVersioningConfiguration,
  AwsS3BucketDetails,
  AwsS3BucketLoggingConfiguration,
  AwsS3BucketNotificationConfiguration,
  AwsS3BucketNotificationConfigurationDetail,
  AwsS3BucketNotificationConfigurationFilter,
  AwsS3BucketNotificationConfigurationS3KeyFilter,
  AwsS3BucketNotificationConfigurationS3KeyFilterRule,
  AwsS3BucketServerSideEncryptionByDefault,
  AwsS3BucketServerSideEncryptionConfiguration,
  AwsS3BucketServerSideEncryptionRule,
  AwsS3BucketWebsiteConfiguration,
  AwsS3BucketWebsiteConfigurationRedirectTo,
  AwsS3BucketWebsiteConfigurationRoutingRule,
  AwsS3BucketWebsiteConfigurationRoutingRuleCondition,
  AwsS3BucketWebsiteConfigurationRoutingRuleRedirect,
  AwsS3ObjectDetails,
  AwsSecretsManagerSecretDetails,
  AwsSecretsManagerSecretRotationRules,
  AwsSecurityFinding,
  AwsSecurityFindingFilters,
  AwsSecurityFindingIdentifier,
  AwsSnsTopicDetails,
  AwsSnsTopicSubscription,
  AwsSqsQueueDetails,
  AwsSsmComplianceSummary,
  AwsSsmPatch,
  AwsSsmPatchComplianceDetails,
  AwsWafRateBasedRuleDetails,
  AwsWafRateBasedRuleMatchPredicate,
  AwsWafRegionalRateBasedRuleDetails,
  AwsWafRegionalRateBasedRuleMatchPredicate,
  AwsWafRegionalRuleDetails,
  AwsWafRegionalRuleGroupDetails,
  AwsWafRegionalRuleGroupRulesActionDetails,
  AwsWafRegionalRuleGroupRulesDetails,
  AwsWafRegionalRulePredicateListDetails,
  AwsWafRegionalWebAclDetails,
  AwsWafRegionalWebAclRulesListActionDetails,
  AwsWafRegionalWebAclRulesListDetails,
  AwsWafRegionalWebAclRulesListOverrideActionDetails,
  AwsWafRuleDetails,
  AwsWafRuleGroupDetails,
  AwsWafRuleGroupRulesActionDetails,
  AwsWafRuleGroupRulesDetails,
  AwsWafRulePredicateListDetails,
  AwsWafWebAclDetails,
  AwsWafWebAclRule,
  AwsXrayEncryptionConfigDetails,
  BatchUpdateFindingsUnprocessedFinding,
  BooleanFilter,
  Cell,
  ClassificationResult,
  ClassificationStatus,
  Compliance,
  ContainerDetails,
  CustomDataIdentifiersDetections,
  CustomDataIdentifiersResult,
  Cvss,
  DataClassificationDetails,
  DateFilter,
  DateRange,
  FilePaths,
  FindingAggregator,
  FindingProviderFields,
  FindingProviderSeverity,
  ImportFindingsError,
  Insight,
  InsightResults,
  InsightResultValue,
  IntegrationType,
  Invitation,
  IpFilter,
  KeywordFilter,
  Malware,
  MapFilter,
  Member,
  Network,
  NetworkHeader,
  NetworkPathComponent,
  NetworkPathComponentDetails,
  Note,
  NoteUpdate,
  NumberFilter,
  Occurrences,
  Page,
  PatchSummary,
  PortRange,
  ProcessDetails,
  Product,
  Range,
  Recommendation,
  RelatedFinding,
  Remediation,
  Resource,
  ResourceConflictException,
  ResourceDetails,
  Result,
  RuleGroupDetails,
  RuleGroupSource,
  RuleGroupSourceCustomActionsDetails,
  RuleGroupSourceStatelessRuleDefinition,
  RuleGroupSourceStatelessRuleMatchAttributes,
  RuleGroupSourceStatelessRuleMatchAttributesDestinationPorts,
  RuleGroupSourceStatelessRuleMatchAttributesDestinations,
  RuleGroupSourceStatelessRuleMatchAttributesSourcePorts,
  RuleGroupSourceStatelessRuleMatchAttributesSources,
  RuleGroupSourceStatelessRuleMatchAttributesTcpFlags,
  RuleGroupSourceStatelessRulesAndCustomActionsDetails,
  RuleGroupSourceStatelessRulesDetails,
  RuleGroupVariables,
  RuleGroupVariablesIpSetsDetails,
  RuleGroupVariablesPortSetsDetails,
  SensitiveDataDetections,
  SensitiveDataResult,
  Severity,
  SeverityUpdate,
  SoftwarePackage,
  SortCriterion,
  Standard,
  StandardsControl,
  StandardsStatusReason,
  StandardsSubscription,
  StandardsSubscriptionRequest,
  StatusReason,
  StringFilter,
  Threat,
  ThreatIntelIndicator,
  VolumeMount,
  Vulnerability,
  VulnerabilityVendor,
  WafAction,
  WafExcludedRule,
  WafOverrideAction,
  Workflow,
  WorkflowUpdate,
} from "../models/models_1";
import { SecurityHubServiceException as __BaseException } from "../models/SecurityHubServiceException";

export const serializeAws_restJson1AcceptAdministratorInvitationCommand = async (
  input: AcceptAdministratorInvitationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/administrator";
  let body: any;
  body = JSON.stringify({
    ...(input.AdministratorId != null && { AdministratorId: input.AdministratorId }),
    ...(input.InvitationId != null && { InvitationId: input.InvitationId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1AcceptInvitationCommand = async (
  input: AcceptInvitationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/master";
  let body: any;
  body = JSON.stringify({
    ...(input.InvitationId != null && { InvitationId: input.InvitationId }),
    ...(input.MasterId != null && { MasterId: input.MasterId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1BatchDisableStandardsCommand = async (
  input: BatchDisableStandardsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/standards/deregister";
  let body: any;
  body = JSON.stringify({
    ...(input.StandardsSubscriptionArns != null && {
      StandardsSubscriptionArns: serializeAws_restJson1StandardsSubscriptionArns(
        input.StandardsSubscriptionArns,
        context
      ),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1BatchEnableStandardsCommand = async (
  input: BatchEnableStandardsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/standards/register";
  let body: any;
  body = JSON.stringify({
    ...(input.StandardsSubscriptionRequests != null && {
      StandardsSubscriptionRequests: serializeAws_restJson1StandardsSubscriptionRequests(
        input.StandardsSubscriptionRequests,
        context
      ),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1BatchImportFindingsCommand = async (
  input: BatchImportFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/findings/import";
  let body: any;
  body = JSON.stringify({
    ...(input.Findings != null && {
      Findings: serializeAws_restJson1BatchImportFindingsRequestFindingList(input.Findings, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1BatchUpdateFindingsCommand = async (
  input: BatchUpdateFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/findings/batchupdate";
  let body: any;
  body = JSON.stringify({
    ...(input.Confidence != null && { Confidence: input.Confidence }),
    ...(input.Criticality != null && { Criticality: input.Criticality }),
    ...(input.FindingIdentifiers != null && {
      FindingIdentifiers: serializeAws_restJson1AwsSecurityFindingIdentifierList(input.FindingIdentifiers, context),
    }),
    ...(input.Note != null && { Note: serializeAws_restJson1NoteUpdate(input.Note, context) }),
    ...(input.RelatedFindings != null && {
      RelatedFindings: serializeAws_restJson1RelatedFindingList(input.RelatedFindings, context),
    }),
    ...(input.Severity != null && { Severity: serializeAws_restJson1SeverityUpdate(input.Severity, context) }),
    ...(input.Types != null && { Types: serializeAws_restJson1TypeList(input.Types, context) }),
    ...(input.UserDefinedFields != null && {
      UserDefinedFields: serializeAws_restJson1FieldMap(input.UserDefinedFields, context),
    }),
    ...(input.VerificationState != null && { VerificationState: input.VerificationState }),
    ...(input.Workflow != null && { Workflow: serializeAws_restJson1WorkflowUpdate(input.Workflow, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateActionTargetCommand = async (
  input: CreateActionTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/actionTargets";
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Name != null && { Name: input.Name }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateFindingAggregatorCommand = async (
  input: CreateFindingAggregatorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/findingAggregator/create";
  let body: any;
  body = JSON.stringify({
    ...(input.RegionLinkingMode != null && { RegionLinkingMode: input.RegionLinkingMode }),
    ...(input.Regions != null && { Regions: serializeAws_restJson1StringList(input.Regions, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateInsightCommand = async (
  input: CreateInsightCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/insights";
  let body: any;
  body = JSON.stringify({
    ...(input.Filters != null && { Filters: serializeAws_restJson1AwsSecurityFindingFilters(input.Filters, context) }),
    ...(input.GroupByAttribute != null && { GroupByAttribute: input.GroupByAttribute }),
    ...(input.Name != null && { Name: input.Name }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1CreateMembersCommand = async (
  input: CreateMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/members";
  let body: any;
  body = JSON.stringify({
    ...(input.AccountDetails != null && {
      AccountDetails: serializeAws_restJson1AccountDetailsList(input.AccountDetails, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeclineInvitationsCommand = async (
  input: DeclineInvitationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/invitations/decline";
  let body: any;
  body = JSON.stringify({
    ...(input.AccountIds != null && { AccountIds: serializeAws_restJson1AccountIdList(input.AccountIds, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteActionTargetCommand = async (
  input: DeleteActionTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/actionTargets/{ActionTargetArn+}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ActionTargetArn",
    () => input.ActionTargetArn!,
    "{ActionTargetArn+}",
    true
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteFindingAggregatorCommand = async (
  input: DeleteFindingAggregatorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/findingAggregator/delete/{FindingAggregatorArn+}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FindingAggregatorArn",
    () => input.FindingAggregatorArn!,
    "{FindingAggregatorArn+}",
    true
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteInsightCommand = async (
  input: DeleteInsightCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/insights/{InsightArn+}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InsightArn", () => input.InsightArn!, "{InsightArn+}", true);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteInvitationsCommand = async (
  input: DeleteInvitationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/invitations/delete";
  let body: any;
  body = JSON.stringify({
    ...(input.AccountIds != null && { AccountIds: serializeAws_restJson1AccountIdList(input.AccountIds, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DeleteMembersCommand = async (
  input: DeleteMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/members/delete";
  let body: any;
  body = JSON.stringify({
    ...(input.AccountIds != null && { AccountIds: serializeAws_restJson1AccountIdList(input.AccountIds, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeActionTargetsCommand = async (
  input: DescribeActionTargetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/actionTargets/get";
  let body: any;
  body = JSON.stringify({
    ...(input.ActionTargetArns != null && {
      ActionTargetArns: serializeAws_restJson1ArnList(input.ActionTargetArns, context),
    }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeHubCommand = async (
  input: DescribeHubCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts";
  const query: any = map({
    HubArn: [, input.HubArn!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DescribeOrganizationConfigurationCommand = async (
  input: DescribeOrganizationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/organization/configuration";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DescribeProductsCommand = async (
  input: DescribeProductsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/products";
  const query: any = map({
    NextToken: [, input.NextToken!],
    MaxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    ProductArn: [, input.ProductArn!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DescribeStandardsCommand = async (
  input: DescribeStandardsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/standards";
  const query: any = map({
    NextToken: [, input.NextToken!],
    MaxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DescribeStandardsControlsCommand = async (
  input: DescribeStandardsControlsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/standards/controls/{StandardsSubscriptionArn+}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "StandardsSubscriptionArn",
    () => input.StandardsSubscriptionArn!,
    "{StandardsSubscriptionArn+}",
    true
  );
  const query: any = map({
    NextToken: [, input.NextToken!],
    MaxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1DisableImportFindingsForProductCommand = async (
  input: DisableImportFindingsForProductCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/productSubscriptions/{ProductSubscriptionArn+}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ProductSubscriptionArn",
    () => input.ProductSubscriptionArn!,
    "{ProductSubscriptionArn+}",
    true
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DisableOrganizationAdminAccountCommand = async (
  input: DisableOrganizationAdminAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/organization/admin/disable";
  let body: any;
  body = JSON.stringify({
    ...(input.AdminAccountId != null && { AdminAccountId: input.AdminAccountId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DisableSecurityHubCommand = async (
  input: DisableSecurityHubCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DisassociateFromAdministratorAccountCommand = async (
  input: DisassociateFromAdministratorAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/administrator/disassociate";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DisassociateFromMasterAccountCommand = async (
  input: DisassociateFromMasterAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/master/disassociate";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1DisassociateMembersCommand = async (
  input: DisassociateMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/members/disassociate";
  let body: any;
  body = JSON.stringify({
    ...(input.AccountIds != null && { AccountIds: serializeAws_restJson1AccountIdList(input.AccountIds, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1EnableImportFindingsForProductCommand = async (
  input: EnableImportFindingsForProductCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/productSubscriptions";
  let body: any;
  body = JSON.stringify({
    ...(input.ProductArn != null && { ProductArn: input.ProductArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1EnableOrganizationAdminAccountCommand = async (
  input: EnableOrganizationAdminAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/organization/admin/enable";
  let body: any;
  body = JSON.stringify({
    ...(input.AdminAccountId != null && { AdminAccountId: input.AdminAccountId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1EnableSecurityHubCommand = async (
  input: EnableSecurityHubCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts";
  let body: any;
  body = JSON.stringify({
    ...(input.EnableDefaultStandards != null && { EnableDefaultStandards: input.EnableDefaultStandards }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetAdministratorAccountCommand = async (
  input: GetAdministratorAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/administrator";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetEnabledStandardsCommand = async (
  input: GetEnabledStandardsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/standards/get";
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.StandardsSubscriptionArns != null && {
      StandardsSubscriptionArns: serializeAws_restJson1StandardsSubscriptionArns(
        input.StandardsSubscriptionArns,
        context
      ),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetFindingAggregatorCommand = async (
  input: GetFindingAggregatorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/findingAggregator/get/{FindingAggregatorArn+}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FindingAggregatorArn",
    () => input.FindingAggregatorArn!,
    "{FindingAggregatorArn+}",
    true
  );
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetFindingsCommand = async (
  input: GetFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/findings";
  let body: any;
  body = JSON.stringify({
    ...(input.Filters != null && { Filters: serializeAws_restJson1AwsSecurityFindingFilters(input.Filters, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.SortCriteria != null && {
      SortCriteria: serializeAws_restJson1SortCriteria(input.SortCriteria, context),
    }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetInsightResultsCommand = async (
  input: GetInsightResultsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/insights/results/{InsightArn+}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InsightArn", () => input.InsightArn!, "{InsightArn+}", true);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetInsightsCommand = async (
  input: GetInsightsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/insights/get";
  let body: any;
  body = JSON.stringify({
    ...(input.InsightArns != null && { InsightArns: serializeAws_restJson1ArnList(input.InsightArns, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetInvitationsCountCommand = async (
  input: GetInvitationsCountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/invitations/count";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetMasterAccountCommand = async (
  input: GetMasterAccountCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/master";
  let body: any;
  body = "";
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetMembersCommand = async (
  input: GetMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/members/get";
  let body: any;
  body = JSON.stringify({
    ...(input.AccountIds != null && { AccountIds: serializeAws_restJson1AccountIdList(input.AccountIds, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1InviteMembersCommand = async (
  input: InviteMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/members/invite";
  let body: any;
  body = JSON.stringify({
    ...(input.AccountIds != null && { AccountIds: serializeAws_restJson1AccountIdList(input.AccountIds, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1ListEnabledProductsForImportCommand = async (
  input: ListEnabledProductsForImportCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/productSubscriptions";
  const query: any = map({
    NextToken: [, input.NextToken!],
    MaxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListFindingAggregatorsCommand = async (
  input: ListFindingAggregatorsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/findingAggregator/list";
  const query: any = map({
    NextToken: [, input.NextToken!],
    MaxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListInvitationsCommand = async (
  input: ListInvitationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/invitations";
  const query: any = map({
    MaxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    NextToken: [, input.NextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListMembersCommand = async (
  input: ListMembersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/members";
  const query: any = map({
    OnlyAssociated: [() => input.OnlyAssociated !== void 0, () => input.OnlyAssociated!.toString()],
    MaxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    NextToken: [, input.NextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListOrganizationAdminAccountsCommand = async (
  input: ListOrganizationAdminAccountsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/organization/admin";
  const query: any = map({
    MaxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    NextToken: [, input.NextToken!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  const query: any = map({
    tagKeys: [() => input.TagKeys !== void 0, () => (input.TagKeys! || []).map((_entry) => _entry as any)],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

export const serializeAws_restJson1UpdateActionTargetCommand = async (
  input: UpdateActionTargetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/actionTargets/{ActionTargetArn+}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ActionTargetArn",
    () => input.ActionTargetArn!,
    "{ActionTargetArn+}",
    true
  );
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateFindingAggregatorCommand = async (
  input: UpdateFindingAggregatorCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/findingAggregator/update";
  let body: any;
  body = JSON.stringify({
    ...(input.FindingAggregatorArn != null && { FindingAggregatorArn: input.FindingAggregatorArn }),
    ...(input.RegionLinkingMode != null && { RegionLinkingMode: input.RegionLinkingMode }),
    ...(input.Regions != null && { Regions: serializeAws_restJson1StringList(input.Regions, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateFindingsCommand = async (
  input: UpdateFindingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/findings";
  let body: any;
  body = JSON.stringify({
    ...(input.Filters != null && { Filters: serializeAws_restJson1AwsSecurityFindingFilters(input.Filters, context) }),
    ...(input.Note != null && { Note: serializeAws_restJson1NoteUpdate(input.Note, context) }),
    ...(input.RecordState != null && { RecordState: input.RecordState }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateInsightCommand = async (
  input: UpdateInsightCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/insights/{InsightArn+}";
  resolvedPath = __resolvedPath(resolvedPath, input, "InsightArn", () => input.InsightArn!, "{InsightArn+}", true);
  let body: any;
  body = JSON.stringify({
    ...(input.Filters != null && { Filters: serializeAws_restJson1AwsSecurityFindingFilters(input.Filters, context) }),
    ...(input.GroupByAttribute != null && { GroupByAttribute: input.GroupByAttribute }),
    ...(input.Name != null && { Name: input.Name }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateOrganizationConfigurationCommand = async (
  input: UpdateOrganizationConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/organization/configuration";
  let body: any;
  body = JSON.stringify({
    ...(input.AutoEnable != null && { AutoEnable: input.AutoEnable }),
    ...(input.AutoEnableStandards != null && { AutoEnableStandards: input.AutoEnableStandards }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateSecurityHubConfigurationCommand = async (
  input: UpdateSecurityHubConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/accounts";
  let body: any;
  body = JSON.stringify({
    ...(input.AutoEnableControls != null && { AutoEnableControls: input.AutoEnableControls }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1UpdateStandardsControlCommand = async (
  input: UpdateStandardsControlCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/standards/control/{StandardsControlArn+}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "StandardsControlArn",
    () => input.StandardsControlArn!,
    "{StandardsControlArn+}",
    true
  );
  let body: any;
  body = JSON.stringify({
    ...(input.ControlStatus != null && { ControlStatus: input.ControlStatus }),
    ...(input.DisabledReason != null && { DisabledReason: input.DisabledReason }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PATCH",
    headers,
    path: resolvedPath,
    body,
  });
};

export const deserializeAws_restJson1AcceptAdministratorInvitationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptAdministratorInvitationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AcceptAdministratorInvitationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1AcceptAdministratorInvitationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptAdministratorInvitationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1AcceptInvitationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptInvitationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AcceptInvitationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1AcceptInvitationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptInvitationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1BatchDisableStandardsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDisableStandardsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchDisableStandardsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.StandardsSubscriptions != null) {
    contents.StandardsSubscriptions = deserializeAws_restJson1StandardsSubscriptions(
      data.StandardsSubscriptions,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1BatchDisableStandardsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchDisableStandardsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1BatchEnableStandardsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchEnableStandardsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchEnableStandardsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.StandardsSubscriptions != null) {
    contents.StandardsSubscriptions = deserializeAws_restJson1StandardsSubscriptions(
      data.StandardsSubscriptions,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1BatchEnableStandardsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchEnableStandardsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1BatchImportFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchImportFindingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchImportFindingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.FailedCount != null) {
    contents.FailedCount = __expectInt32(data.FailedCount);
  }
  if (data.FailedFindings != null) {
    contents.FailedFindings = deserializeAws_restJson1ImportFindingsErrorList(data.FailedFindings, context);
  }
  if (data.SuccessCount != null) {
    contents.SuccessCount = __expectInt32(data.SuccessCount);
  }
  return contents;
};

const deserializeAws_restJson1BatchImportFindingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchImportFindingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1BatchUpdateFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateFindingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchUpdateFindingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ProcessedFindings != null) {
    contents.ProcessedFindings = deserializeAws_restJson1AwsSecurityFindingIdentifierList(
      data.ProcessedFindings,
      context
    );
  }
  if (data.UnprocessedFindings != null) {
    contents.UnprocessedFindings = deserializeAws_restJson1BatchUpdateFindingsUnprocessedFindingsList(
      data.UnprocessedFindings,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1BatchUpdateFindingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchUpdateFindingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateActionTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateActionTargetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateActionTargetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ActionTargetArn != null) {
    contents.ActionTargetArn = __expectString(data.ActionTargetArn);
  }
  return contents;
};

const deserializeAws_restJson1CreateActionTargetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateActionTargetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.securityhub#ResourceConflictException":
      throw await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateFindingAggregatorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFindingAggregatorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateFindingAggregatorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.FindingAggregationRegion != null) {
    contents.FindingAggregationRegion = __expectString(data.FindingAggregationRegion);
  }
  if (data.FindingAggregatorArn != null) {
    contents.FindingAggregatorArn = __expectString(data.FindingAggregatorArn);
  }
  if (data.RegionLinkingMode != null) {
    contents.RegionLinkingMode = __expectString(data.RegionLinkingMode);
  }
  if (data.Regions != null) {
    contents.Regions = deserializeAws_restJson1StringList(data.Regions, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateFindingAggregatorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFindingAggregatorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.securityhub#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateInsightCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInsightCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateInsightCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.InsightArn != null) {
    contents.InsightArn = __expectString(data.InsightArn);
  }
  return contents;
};

const deserializeAws_restJson1CreateInsightCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateInsightCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.securityhub#ResourceConflictException":
      throw await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1CreateMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateMembersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.UnprocessedAccounts != null) {
    contents.UnprocessedAccounts = deserializeAws_restJson1ResultList(data.UnprocessedAccounts, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateMembersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMembersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.securityhub#ResourceConflictException":
      throw await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeclineInvitationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeclineInvitationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeclineInvitationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.UnprocessedAccounts != null) {
    contents.UnprocessedAccounts = deserializeAws_restJson1ResultList(data.UnprocessedAccounts, context);
  }
  return contents;
};

const deserializeAws_restJson1DeclineInvitationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeclineInvitationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteActionTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteActionTargetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteActionTargetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ActionTargetArn != null) {
    contents.ActionTargetArn = __expectString(data.ActionTargetArn);
  }
  return contents;
};

const deserializeAws_restJson1DeleteActionTargetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteActionTargetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteFindingAggregatorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFindingAggregatorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteFindingAggregatorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteFindingAggregatorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFindingAggregatorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.securityhub#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteInsightCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInsightCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteInsightCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.InsightArn != null) {
    contents.InsightArn = __expectString(data.InsightArn);
  }
  return contents;
};

const deserializeAws_restJson1DeleteInsightCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInsightCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteInvitationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInvitationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteInvitationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.UnprocessedAccounts != null) {
    contents.UnprocessedAccounts = deserializeAws_restJson1ResultList(data.UnprocessedAccounts, context);
  }
  return contents;
};

const deserializeAws_restJson1DeleteInvitationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteInvitationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DeleteMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteMembersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.UnprocessedAccounts != null) {
    contents.UnprocessedAccounts = deserializeAws_restJson1ResultList(data.UnprocessedAccounts, context);
  }
  return contents;
};

const deserializeAws_restJson1DeleteMembersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMembersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeActionTargetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeActionTargetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeActionTargetsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ActionTargets != null) {
    contents.ActionTargets = deserializeAws_restJson1ActionTargetList(data.ActionTargets, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1DescribeActionTargetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeActionTargetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeHubCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHubCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeHubCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AutoEnableControls != null) {
    contents.AutoEnableControls = __expectBoolean(data.AutoEnableControls);
  }
  if (data.HubArn != null) {
    contents.HubArn = __expectString(data.HubArn);
  }
  if (data.SubscribedAt != null) {
    contents.SubscribedAt = __expectString(data.SubscribedAt);
  }
  return contents;
};

const deserializeAws_restJson1DescribeHubCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeHubCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeOrganizationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrganizationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeOrganizationConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AutoEnable != null) {
    contents.AutoEnable = __expectBoolean(data.AutoEnable);
  }
  if (data.AutoEnableStandards != null) {
    contents.AutoEnableStandards = __expectString(data.AutoEnableStandards);
  }
  if (data.MemberAccountLimitReached != null) {
    contents.MemberAccountLimitReached = __expectBoolean(data.MemberAccountLimitReached);
  }
  return contents;
};

const deserializeAws_restJson1DescribeOrganizationConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeOrganizationConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeProductsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProductsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeProductsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Products != null) {
    contents.Products = deserializeAws_restJson1ProductsList(data.Products, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeProductsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProductsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeStandardsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStandardsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeStandardsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Standards != null) {
    contents.Standards = deserializeAws_restJson1Standards(data.Standards, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeStandardsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStandardsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DescribeStandardsControlsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStandardsControlsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeStandardsControlsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Controls != null) {
    contents.Controls = deserializeAws_restJson1StandardsControls(data.Controls, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1DescribeStandardsControlsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeStandardsControlsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DisableImportFindingsForProductCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableImportFindingsForProductCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisableImportFindingsForProductCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DisableImportFindingsForProductCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableImportFindingsForProductCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DisableOrganizationAdminAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableOrganizationAdminAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisableOrganizationAdminAccountCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DisableOrganizationAdminAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableOrganizationAdminAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DisableSecurityHubCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableSecurityHubCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisableSecurityHubCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DisableSecurityHubCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisableSecurityHubCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DisassociateFromAdministratorAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateFromAdministratorAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateFromAdministratorAccountCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DisassociateFromAdministratorAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateFromAdministratorAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DisassociateFromMasterAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateFromMasterAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateFromMasterAccountCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DisassociateFromMasterAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateFromMasterAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1DisassociateMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateMembersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DisassociateMembersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateMembersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1EnableImportFindingsForProductCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableImportFindingsForProductCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1EnableImportFindingsForProductCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ProductSubscriptionArn != null) {
    contents.ProductSubscriptionArn = __expectString(data.ProductSubscriptionArn);
  }
  return contents;
};

const deserializeAws_restJson1EnableImportFindingsForProductCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableImportFindingsForProductCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.securityhub#ResourceConflictException":
      throw await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1EnableOrganizationAdminAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableOrganizationAdminAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1EnableOrganizationAdminAccountCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1EnableOrganizationAdminAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableOrganizationAdminAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1EnableSecurityHubCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableSecurityHubCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1EnableSecurityHubCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1EnableSecurityHubCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<EnableSecurityHubCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.securityhub#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceConflictException":
    case "com.amazonaws.securityhub#ResourceConflictException":
      throw await deserializeAws_restJson1ResourceConflictExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetAdministratorAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAdministratorAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetAdministratorAccountCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Administrator != null) {
    contents.Administrator = deserializeAws_restJson1Invitation(data.Administrator, context);
  }
  return contents;
};

const deserializeAws_restJson1GetAdministratorAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetAdministratorAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetEnabledStandardsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnabledStandardsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetEnabledStandardsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.StandardsSubscriptions != null) {
    contents.StandardsSubscriptions = deserializeAws_restJson1StandardsSubscriptions(
      data.StandardsSubscriptions,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1GetEnabledStandardsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEnabledStandardsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetFindingAggregatorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingAggregatorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetFindingAggregatorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.FindingAggregationRegion != null) {
    contents.FindingAggregationRegion = __expectString(data.FindingAggregationRegion);
  }
  if (data.FindingAggregatorArn != null) {
    contents.FindingAggregatorArn = __expectString(data.FindingAggregatorArn);
  }
  if (data.RegionLinkingMode != null) {
    contents.RegionLinkingMode = __expectString(data.RegionLinkingMode);
  }
  if (data.Regions != null) {
    contents.Regions = deserializeAws_restJson1StringList(data.Regions, context);
  }
  return contents;
};

const deserializeAws_restJson1GetFindingAggregatorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingAggregatorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.securityhub#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetFindingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Findings != null) {
    contents.Findings = deserializeAws_restJson1AwsSecurityFindingList(data.Findings, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1GetFindingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetFindingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetInsightResultsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightResultsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetInsightResultsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.InsightResults != null) {
    contents.InsightResults = deserializeAws_restJson1InsightResults(data.InsightResults, context);
  }
  return contents;
};

const deserializeAws_restJson1GetInsightResultsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightResultsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetInsightsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetInsightsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Insights != null) {
    contents.Insights = deserializeAws_restJson1InsightList(data.Insights, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1GetInsightsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInsightsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetInvitationsCountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInvitationsCountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetInvitationsCountCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.InvitationsCount != null) {
    contents.InvitationsCount = __expectInt32(data.InvitationsCount);
  }
  return contents;
};

const deserializeAws_restJson1GetInvitationsCountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetInvitationsCountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetMasterAccountCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMasterAccountCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetMasterAccountCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Master != null) {
    contents.Master = deserializeAws_restJson1Invitation(data.Master, context);
  }
  return contents;
};

const deserializeAws_restJson1GetMasterAccountCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMasterAccountCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1GetMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetMembersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Members != null) {
    contents.Members = deserializeAws_restJson1MemberList(data.Members, context);
  }
  if (data.UnprocessedAccounts != null) {
    contents.UnprocessedAccounts = deserializeAws_restJson1ResultList(data.UnprocessedAccounts, context);
  }
  return contents;
};

const deserializeAws_restJson1GetMembersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetMembersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1InviteMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InviteMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1InviteMembersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.UnprocessedAccounts != null) {
    contents.UnprocessedAccounts = deserializeAws_restJson1ResultList(data.UnprocessedAccounts, context);
  }
  return contents;
};

const deserializeAws_restJson1InviteMembersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InviteMembersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListEnabledProductsForImportCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnabledProductsForImportCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListEnabledProductsForImportCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.ProductSubscriptions != null) {
    contents.ProductSubscriptions = deserializeAws_restJson1ProductSubscriptionArnList(
      data.ProductSubscriptions,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1ListEnabledProductsForImportCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListEnabledProductsForImportCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListFindingAggregatorsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFindingAggregatorsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListFindingAggregatorsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.FindingAggregators != null) {
    contents.FindingAggregators = deserializeAws_restJson1FindingAggregatorList(data.FindingAggregators, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListFindingAggregatorsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFindingAggregatorsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.securityhub#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListInvitationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInvitationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListInvitationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Invitations != null) {
    contents.Invitations = deserializeAws_restJson1InvitationList(data.Invitations, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListInvitationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListInvitationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListMembersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMembersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListMembersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Members != null) {
    contents.Members = deserializeAws_restJson1MemberList(data.Members, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListMembersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMembersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListOrganizationAdminAccountsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOrganizationAdminAccountsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListOrganizationAdminAccountsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AdminAccounts != null) {
    contents.AdminAccounts = deserializeAws_restJson1AdminAccounts(data.AdminAccounts, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListOrganizationAdminAccountsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOrganizationAdminAccountsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  return contents;
};

const deserializeAws_restJson1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateActionTargetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateActionTargetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateActionTargetCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateActionTargetCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateActionTargetCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateFindingAggregatorCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFindingAggregatorCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateFindingAggregatorCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.FindingAggregationRegion != null) {
    contents.FindingAggregationRegion = __expectString(data.FindingAggregationRegion);
  }
  if (data.FindingAggregatorArn != null) {
    contents.FindingAggregatorArn = __expectString(data.FindingAggregatorArn);
  }
  if (data.RegionLinkingMode != null) {
    contents.RegionLinkingMode = __expectString(data.RegionLinkingMode);
  }
  if (data.Regions != null) {
    contents.Regions = deserializeAws_restJson1StringList(data.Regions, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateFindingAggregatorCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFindingAggregatorCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.securityhub#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateFindingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFindingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateFindingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateFindingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFindingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateInsightCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInsightCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateInsightCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateInsightCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateInsightCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateOrganizationConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOrganizationConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateOrganizationConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateOrganizationConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOrganizationConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateSecurityHubConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSecurityHubConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateSecurityHubConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateSecurityHubConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSecurityHubConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.securityhub#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

export const deserializeAws_restJson1UpdateStandardsControlCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStandardsControlCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateStandardsControlCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateStandardsControlCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateStandardsControlCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalException":
    case "com.amazonaws.securityhub#InternalException":
      throw await deserializeAws_restJson1InternalExceptionResponse(parsedOutput, context);
    case "InvalidAccessException":
    case "com.amazonaws.securityhub#InvalidAccessException":
      throw await deserializeAws_restJson1InvalidAccessExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.securityhub#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.securityhub#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

const map = __map;
const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InternalExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InternalException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InvalidAccessExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidAccessException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InvalidAccessException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InvalidInputExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InvalidInputException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ResourceConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ResourceConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1AccountDetails = (input: AccountDetails, context: __SerdeContext): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.Email != null && { Email: input.Email }),
  };
};

const serializeAws_restJson1AccountDetailsList = (input: AccountDetails[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AccountDetails(entry, context);
    });
};

const serializeAws_restJson1AccountIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1Action = (input: Action, context: __SerdeContext): any => {
  return {
    ...(input.ActionType != null && { ActionType: input.ActionType }),
    ...(input.AwsApiCallAction != null && {
      AwsApiCallAction: serializeAws_restJson1AwsApiCallAction(input.AwsApiCallAction, context),
    }),
    ...(input.DnsRequestAction != null && {
      DnsRequestAction: serializeAws_restJson1DnsRequestAction(input.DnsRequestAction, context),
    }),
    ...(input.NetworkConnectionAction != null && {
      NetworkConnectionAction: serializeAws_restJson1NetworkConnectionAction(input.NetworkConnectionAction, context),
    }),
    ...(input.PortProbeAction != null && {
      PortProbeAction: serializeAws_restJson1PortProbeAction(input.PortProbeAction, context),
    }),
  };
};

const serializeAws_restJson1ActionLocalIpDetails = (input: ActionLocalIpDetails, context: __SerdeContext): any => {
  return {
    ...(input.IpAddressV4 != null && { IpAddressV4: input.IpAddressV4 }),
  };
};

const serializeAws_restJson1ActionLocalPortDetails = (input: ActionLocalPortDetails, context: __SerdeContext): any => {
  return {
    ...(input.Port != null && { Port: input.Port }),
    ...(input.PortName != null && { PortName: input.PortName }),
  };
};

const serializeAws_restJson1ActionRemoteIpDetails = (input: ActionRemoteIpDetails, context: __SerdeContext): any => {
  return {
    ...(input.City != null && { City: serializeAws_restJson1City(input.City, context) }),
    ...(input.Country != null && { Country: serializeAws_restJson1Country(input.Country, context) }),
    ...(input.GeoLocation != null && { GeoLocation: serializeAws_restJson1GeoLocation(input.GeoLocation, context) }),
    ...(input.IpAddressV4 != null && { IpAddressV4: input.IpAddressV4 }),
    ...(input.Organization != null && {
      Organization: serializeAws_restJson1IpOrganizationDetails(input.Organization, context),
    }),
  };
};

const serializeAws_restJson1ActionRemotePortDetails = (
  input: ActionRemotePortDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Port != null && { Port: input.Port }),
    ...(input.PortName != null && { PortName: input.PortName }),
  };
};

const serializeAws_restJson1Adjustment = (input: Adjustment, context: __SerdeContext): any => {
  return {
    ...(input.Metric != null && { Metric: input.Metric }),
    ...(input.Reason != null && { Reason: input.Reason }),
  };
};

const serializeAws_restJson1AdjustmentList = (input: Adjustment[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Adjustment(entry, context);
    });
};

const serializeAws_restJson1ArnList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1AvailabilityZone = (input: AvailabilityZone, context: __SerdeContext): any => {
  return {
    ...(input.SubnetId != null && { SubnetId: input.SubnetId }),
    ...(input.ZoneName != null && { ZoneName: input.ZoneName }),
  };
};

const serializeAws_restJson1AvailabilityZones = (input: AvailabilityZone[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AvailabilityZone(entry, context);
    });
};

const serializeAws_restJson1AwsApiCallAction = (input: AwsApiCallAction, context: __SerdeContext): any => {
  return {
    ...(input.AffectedResources != null && {
      AffectedResources: serializeAws_restJson1FieldMap(input.AffectedResources, context),
    }),
    ...(input.Api != null && { Api: input.Api }),
    ...(input.CallerType != null && { CallerType: input.CallerType }),
    ...(input.DomainDetails != null && {
      DomainDetails: serializeAws_restJson1AwsApiCallActionDomainDetails(input.DomainDetails, context),
    }),
    ...(input.FirstSeen != null && { FirstSeen: input.FirstSeen }),
    ...(input.LastSeen != null && { LastSeen: input.LastSeen }),
    ...(input.RemoteIpDetails != null && {
      RemoteIpDetails: serializeAws_restJson1ActionRemoteIpDetails(input.RemoteIpDetails, context),
    }),
    ...(input.ServiceName != null && { ServiceName: input.ServiceName }),
  };
};

const serializeAws_restJson1AwsApiCallActionDomainDetails = (
  input: AwsApiCallActionDomainDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Domain != null && { Domain: input.Domain }),
  };
};

const serializeAws_restJson1AwsApiGatewayAccessLogSettings = (
  input: AwsApiGatewayAccessLogSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.DestinationArn != null && { DestinationArn: input.DestinationArn }),
    ...(input.Format != null && { Format: input.Format }),
  };
};

const serializeAws_restJson1AwsApiGatewayCanarySettings = (
  input: AwsApiGatewayCanarySettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeploymentId != null && { DeploymentId: input.DeploymentId }),
    ...(input.PercentTraffic != null && { PercentTraffic: __serializeFloat(input.PercentTraffic) }),
    ...(input.StageVariableOverrides != null && {
      StageVariableOverrides: serializeAws_restJson1FieldMap(input.StageVariableOverrides, context),
    }),
    ...(input.UseStageCache != null && { UseStageCache: input.UseStageCache }),
  };
};

const serializeAws_restJson1AwsApiGatewayEndpointConfiguration = (
  input: AwsApiGatewayEndpointConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Types != null && { Types: serializeAws_restJson1NonEmptyStringList(input.Types, context) }),
  };
};

const serializeAws_restJson1AwsApiGatewayMethodSettings = (
  input: AwsApiGatewayMethodSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.CacheDataEncrypted != null && { CacheDataEncrypted: input.CacheDataEncrypted }),
    ...(input.CacheTtlInSeconds != null && { CacheTtlInSeconds: input.CacheTtlInSeconds }),
    ...(input.CachingEnabled != null && { CachingEnabled: input.CachingEnabled }),
    ...(input.DataTraceEnabled != null && { DataTraceEnabled: input.DataTraceEnabled }),
    ...(input.HttpMethod != null && { HttpMethod: input.HttpMethod }),
    ...(input.LoggingLevel != null && { LoggingLevel: input.LoggingLevel }),
    ...(input.MetricsEnabled != null && { MetricsEnabled: input.MetricsEnabled }),
    ...(input.RequireAuthorizationForCacheControl != null && {
      RequireAuthorizationForCacheControl: input.RequireAuthorizationForCacheControl,
    }),
    ...(input.ResourcePath != null && { ResourcePath: input.ResourcePath }),
    ...(input.ThrottlingBurstLimit != null && { ThrottlingBurstLimit: input.ThrottlingBurstLimit }),
    ...(input.ThrottlingRateLimit != null && { ThrottlingRateLimit: __serializeFloat(input.ThrottlingRateLimit) }),
    ...(input.UnauthorizedCacheControlHeaderStrategy != null && {
      UnauthorizedCacheControlHeaderStrategy: input.UnauthorizedCacheControlHeaderStrategy,
    }),
  };
};

const serializeAws_restJson1AwsApiGatewayMethodSettingsList = (
  input: AwsApiGatewayMethodSettings[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsApiGatewayMethodSettings(entry, context);
    });
};

const serializeAws_restJson1AwsApiGatewayRestApiDetails = (
  input: AwsApiGatewayRestApiDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApiKeySource != null && { ApiKeySource: input.ApiKeySource }),
    ...(input.BinaryMediaTypes != null && {
      BinaryMediaTypes: serializeAws_restJson1NonEmptyStringList(input.BinaryMediaTypes, context),
    }),
    ...(input.CreatedDate != null && { CreatedDate: input.CreatedDate }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.EndpointConfiguration != null && {
      EndpointConfiguration: serializeAws_restJson1AwsApiGatewayEndpointConfiguration(
        input.EndpointConfiguration,
        context
      ),
    }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.MinimumCompressionSize != null && { MinimumCompressionSize: input.MinimumCompressionSize }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Version != null && { Version: input.Version }),
  };
};

const serializeAws_restJson1AwsApiGatewayStageDetails = (
  input: AwsApiGatewayStageDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccessLogSettings != null && {
      AccessLogSettings: serializeAws_restJson1AwsApiGatewayAccessLogSettings(input.AccessLogSettings, context),
    }),
    ...(input.CacheClusterEnabled != null && { CacheClusterEnabled: input.CacheClusterEnabled }),
    ...(input.CacheClusterSize != null && { CacheClusterSize: input.CacheClusterSize }),
    ...(input.CacheClusterStatus != null && { CacheClusterStatus: input.CacheClusterStatus }),
    ...(input.CanarySettings != null && {
      CanarySettings: serializeAws_restJson1AwsApiGatewayCanarySettings(input.CanarySettings, context),
    }),
    ...(input.ClientCertificateId != null && { ClientCertificateId: input.ClientCertificateId }),
    ...(input.CreatedDate != null && { CreatedDate: input.CreatedDate }),
    ...(input.DeploymentId != null && { DeploymentId: input.DeploymentId }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DocumentationVersion != null && { DocumentationVersion: input.DocumentationVersion }),
    ...(input.LastUpdatedDate != null && { LastUpdatedDate: input.LastUpdatedDate }),
    ...(input.MethodSettings != null && {
      MethodSettings: serializeAws_restJson1AwsApiGatewayMethodSettingsList(input.MethodSettings, context),
    }),
    ...(input.StageName != null && { StageName: input.StageName }),
    ...(input.TracingEnabled != null && { TracingEnabled: input.TracingEnabled }),
    ...(input.Variables != null && { Variables: serializeAws_restJson1FieldMap(input.Variables, context) }),
    ...(input.WebAclArn != null && { WebAclArn: input.WebAclArn }),
  };
};

const serializeAws_restJson1AwsApiGatewayV2ApiDetails = (
  input: AwsApiGatewayV2ApiDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApiEndpoint != null && { ApiEndpoint: input.ApiEndpoint }),
    ...(input.ApiId != null && { ApiId: input.ApiId }),
    ...(input.ApiKeySelectionExpression != null && { ApiKeySelectionExpression: input.ApiKeySelectionExpression }),
    ...(input.CorsConfiguration != null && {
      CorsConfiguration: serializeAws_restJson1AwsCorsConfiguration(input.CorsConfiguration, context),
    }),
    ...(input.CreatedDate != null && { CreatedDate: input.CreatedDate }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ProtocolType != null && { ProtocolType: input.ProtocolType }),
    ...(input.RouteSelectionExpression != null && { RouteSelectionExpression: input.RouteSelectionExpression }),
    ...(input.Version != null && { Version: input.Version }),
  };
};

const serializeAws_restJson1AwsApiGatewayV2RouteSettings = (
  input: AwsApiGatewayV2RouteSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataTraceEnabled != null && { DataTraceEnabled: input.DataTraceEnabled }),
    ...(input.DetailedMetricsEnabled != null && { DetailedMetricsEnabled: input.DetailedMetricsEnabled }),
    ...(input.LoggingLevel != null && { LoggingLevel: input.LoggingLevel }),
    ...(input.ThrottlingBurstLimit != null && { ThrottlingBurstLimit: input.ThrottlingBurstLimit }),
    ...(input.ThrottlingRateLimit != null && { ThrottlingRateLimit: __serializeFloat(input.ThrottlingRateLimit) }),
  };
};

const serializeAws_restJson1AwsApiGatewayV2StageDetails = (
  input: AwsApiGatewayV2StageDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccessLogSettings != null && {
      AccessLogSettings: serializeAws_restJson1AwsApiGatewayAccessLogSettings(input.AccessLogSettings, context),
    }),
    ...(input.ApiGatewayManaged != null && { ApiGatewayManaged: input.ApiGatewayManaged }),
    ...(input.AutoDeploy != null && { AutoDeploy: input.AutoDeploy }),
    ...(input.ClientCertificateId != null && { ClientCertificateId: input.ClientCertificateId }),
    ...(input.CreatedDate != null && { CreatedDate: input.CreatedDate }),
    ...(input.DefaultRouteSettings != null && {
      DefaultRouteSettings: serializeAws_restJson1AwsApiGatewayV2RouteSettings(input.DefaultRouteSettings, context),
    }),
    ...(input.DeploymentId != null && { DeploymentId: input.DeploymentId }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.LastDeploymentStatusMessage != null && {
      LastDeploymentStatusMessage: input.LastDeploymentStatusMessage,
    }),
    ...(input.LastUpdatedDate != null && { LastUpdatedDate: input.LastUpdatedDate }),
    ...(input.RouteSettings != null && {
      RouteSettings: serializeAws_restJson1AwsApiGatewayV2RouteSettings(input.RouteSettings, context),
    }),
    ...(input.StageName != null && { StageName: input.StageName }),
    ...(input.StageVariables != null && {
      StageVariables: serializeAws_restJson1FieldMap(input.StageVariables, context),
    }),
  };
};

const serializeAws_restJson1AwsAutoScalingAutoScalingGroupAvailabilityZonesList = (
  input: AwsAutoScalingAutoScalingGroupAvailabilityZonesListDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsAutoScalingAutoScalingGroupAvailabilityZonesListDetails(entry, context);
    });
};

const serializeAws_restJson1AwsAutoScalingAutoScalingGroupAvailabilityZonesListDetails = (
  input: AwsAutoScalingAutoScalingGroupAvailabilityZonesListDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_restJson1AwsAutoScalingAutoScalingGroupDetails = (
  input: AwsAutoScalingAutoScalingGroupDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AvailabilityZones != null && {
      AvailabilityZones: serializeAws_restJson1AwsAutoScalingAutoScalingGroupAvailabilityZonesList(
        input.AvailabilityZones,
        context
      ),
    }),
    ...(input.CapacityRebalance != null && { CapacityRebalance: input.CapacityRebalance }),
    ...(input.CreatedTime != null && { CreatedTime: input.CreatedTime }),
    ...(input.HealthCheckGracePeriod != null && { HealthCheckGracePeriod: input.HealthCheckGracePeriod }),
    ...(input.HealthCheckType != null && { HealthCheckType: input.HealthCheckType }),
    ...(input.LaunchConfigurationName != null && { LaunchConfigurationName: input.LaunchConfigurationName }),
    ...(input.LaunchTemplate != null && {
      LaunchTemplate: serializeAws_restJson1AwsAutoScalingAutoScalingGroupLaunchTemplateLaunchTemplateSpecification(
        input.LaunchTemplate,
        context
      ),
    }),
    ...(input.LoadBalancerNames != null && {
      LoadBalancerNames: serializeAws_restJson1StringList(input.LoadBalancerNames, context),
    }),
    ...(input.MixedInstancesPolicy != null && {
      MixedInstancesPolicy: serializeAws_restJson1AwsAutoScalingAutoScalingGroupMixedInstancesPolicyDetails(
        input.MixedInstancesPolicy,
        context
      ),
    }),
  };
};

const serializeAws_restJson1AwsAutoScalingAutoScalingGroupLaunchTemplateLaunchTemplateSpecification = (
  input: AwsAutoScalingAutoScalingGroupLaunchTemplateLaunchTemplateSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.LaunchTemplateId != null && { LaunchTemplateId: input.LaunchTemplateId }),
    ...(input.LaunchTemplateName != null && { LaunchTemplateName: input.LaunchTemplateName }),
    ...(input.Version != null && { Version: input.Version }),
  };
};

const serializeAws_restJson1AwsAutoScalingAutoScalingGroupMixedInstancesPolicyDetails = (
  input: AwsAutoScalingAutoScalingGroupMixedInstancesPolicyDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstancesDistribution != null && {
      InstancesDistribution:
        serializeAws_restJson1AwsAutoScalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionDetails(
          input.InstancesDistribution,
          context
        ),
    }),
    ...(input.LaunchTemplate != null && {
      LaunchTemplate: serializeAws_restJson1AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateDetails(
        input.LaunchTemplate,
        context
      ),
    }),
  };
};

const serializeAws_restJson1AwsAutoScalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionDetails = (
  input: AwsAutoScalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.OnDemandAllocationStrategy != null && { OnDemandAllocationStrategy: input.OnDemandAllocationStrategy }),
    ...(input.OnDemandBaseCapacity != null && { OnDemandBaseCapacity: input.OnDemandBaseCapacity }),
    ...(input.OnDemandPercentageAboveBaseCapacity != null && {
      OnDemandPercentageAboveBaseCapacity: input.OnDemandPercentageAboveBaseCapacity,
    }),
    ...(input.SpotAllocationStrategy != null && { SpotAllocationStrategy: input.SpotAllocationStrategy }),
    ...(input.SpotInstancePools != null && { SpotInstancePools: input.SpotInstancePools }),
    ...(input.SpotMaxPrice != null && { SpotMaxPrice: input.SpotMaxPrice }),
  };
};

const serializeAws_restJson1AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateDetails = (
  input: AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.LaunchTemplateSpecification != null && {
      LaunchTemplateSpecification:
        serializeAws_restJson1AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification(
          input.LaunchTemplateSpecification,
          context
        ),
    }),
    ...(input.Overrides != null && {
      Overrides: serializeAws_restJson1AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList(
        input.Overrides,
        context
      ),
    }),
  };
};

const serializeAws_restJson1AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification =
  (
    input: AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification,
    context: __SerdeContext
  ): any => {
    return {
      ...(input.LaunchTemplateId != null && { LaunchTemplateId: input.LaunchTemplateId }),
      ...(input.LaunchTemplateName != null && { LaunchTemplateName: input.LaunchTemplateName }),
      ...(input.Version != null && { Version: input.Version }),
    };
  };

const serializeAws_restJson1AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList = (
  input: AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesListDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesListDetails(
        entry,
        context
      );
    });
};

const serializeAws_restJson1AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesListDetails = (
  input: AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesListDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceType != null && { InstanceType: input.InstanceType }),
    ...(input.WeightedCapacity != null && { WeightedCapacity: input.WeightedCapacity }),
  };
};

const serializeAws_restJson1AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails = (
  input: AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeviceName != null && { DeviceName: input.DeviceName }),
    ...(input.Ebs != null && {
      Ebs: serializeAws_restJson1AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails(input.Ebs, context),
    }),
    ...(input.NoDevice != null && { NoDevice: input.NoDevice }),
    ...(input.VirtualName != null && { VirtualName: input.VirtualName }),
  };
};

const serializeAws_restJson1AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails = (
  input: AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeleteOnTermination != null && { DeleteOnTermination: input.DeleteOnTermination }),
    ...(input.Encrypted != null && { Encrypted: input.Encrypted }),
    ...(input.Iops != null && { Iops: input.Iops }),
    ...(input.SnapshotId != null && { SnapshotId: input.SnapshotId }),
    ...(input.VolumeSize != null && { VolumeSize: input.VolumeSize }),
    ...(input.VolumeType != null && { VolumeType: input.VolumeType }),
  };
};

const serializeAws_restJson1AwsAutoScalingLaunchConfigurationBlockDeviceMappingsList = (
  input: AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails(entry, context);
    });
};

const serializeAws_restJson1AwsAutoScalingLaunchConfigurationDetails = (
  input: AwsAutoScalingLaunchConfigurationDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AssociatePublicIpAddress != null && { AssociatePublicIpAddress: input.AssociatePublicIpAddress }),
    ...(input.BlockDeviceMappings != null && {
      BlockDeviceMappings: serializeAws_restJson1AwsAutoScalingLaunchConfigurationBlockDeviceMappingsList(
        input.BlockDeviceMappings,
        context
      ),
    }),
    ...(input.ClassicLinkVpcId != null && { ClassicLinkVpcId: input.ClassicLinkVpcId }),
    ...(input.ClassicLinkVpcSecurityGroups != null && {
      ClassicLinkVpcSecurityGroups: serializeAws_restJson1NonEmptyStringList(
        input.ClassicLinkVpcSecurityGroups,
        context
      ),
    }),
    ...(input.CreatedTime != null && { CreatedTime: input.CreatedTime }),
    ...(input.EbsOptimized != null && { EbsOptimized: input.EbsOptimized }),
    ...(input.IamInstanceProfile != null && { IamInstanceProfile: input.IamInstanceProfile }),
    ...(input.ImageId != null && { ImageId: input.ImageId }),
    ...(input.InstanceMonitoring != null && {
      InstanceMonitoring: serializeAws_restJson1AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails(
        input.InstanceMonitoring,
        context
      ),
    }),
    ...(input.InstanceType != null && { InstanceType: input.InstanceType }),
    ...(input.KernelId != null && { KernelId: input.KernelId }),
    ...(input.KeyName != null && { KeyName: input.KeyName }),
    ...(input.LaunchConfigurationName != null && { LaunchConfigurationName: input.LaunchConfigurationName }),
    ...(input.MetadataOptions != null && {
      MetadataOptions: serializeAws_restJson1AwsAutoScalingLaunchConfigurationMetadataOptions(
        input.MetadataOptions,
        context
      ),
    }),
    ...(input.PlacementTenancy != null && { PlacementTenancy: input.PlacementTenancy }),
    ...(input.RamdiskId != null && { RamdiskId: input.RamdiskId }),
    ...(input.SecurityGroups != null && {
      SecurityGroups: serializeAws_restJson1NonEmptyStringList(input.SecurityGroups, context),
    }),
    ...(input.SpotPrice != null && { SpotPrice: input.SpotPrice }),
    ...(input.UserData != null && { UserData: input.UserData }),
  };
};

const serializeAws_restJson1AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails = (
  input: AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Enabled != null && { Enabled: input.Enabled }),
  };
};

const serializeAws_restJson1AwsAutoScalingLaunchConfigurationMetadataOptions = (
  input: AwsAutoScalingLaunchConfigurationMetadataOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.HttpEndpoint != null && { HttpEndpoint: input.HttpEndpoint }),
    ...(input.HttpPutResponseHopLimit != null && { HttpPutResponseHopLimit: input.HttpPutResponseHopLimit }),
    ...(input.HttpTokens != null && { HttpTokens: input.HttpTokens }),
  };
};

const serializeAws_restJson1AwsBackupBackupPlanAdvancedBackupSettingsDetails = (
  input: AwsBackupBackupPlanAdvancedBackupSettingsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.BackupOptions != null && { BackupOptions: serializeAws_restJson1FieldMap(input.BackupOptions, context) }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
  };
};

const serializeAws_restJson1AwsBackupBackupPlanAdvancedBackupSettingsList = (
  input: AwsBackupBackupPlanAdvancedBackupSettingsDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsBackupBackupPlanAdvancedBackupSettingsDetails(entry, context);
    });
};

const serializeAws_restJson1AwsBackupBackupPlanBackupPlanDetails = (
  input: AwsBackupBackupPlanBackupPlanDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AdvancedBackupSettings != null && {
      AdvancedBackupSettings: serializeAws_restJson1AwsBackupBackupPlanAdvancedBackupSettingsList(
        input.AdvancedBackupSettings,
        context
      ),
    }),
    ...(input.BackupPlanName != null && { BackupPlanName: input.BackupPlanName }),
    ...(input.BackupPlanRule != null && {
      BackupPlanRule: serializeAws_restJson1AwsBackupBackupPlanRuleList(input.BackupPlanRule, context),
    }),
  };
};

const serializeAws_restJson1AwsBackupBackupPlanDetails = (
  input: AwsBackupBackupPlanDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.BackupPlan != null && {
      BackupPlan: serializeAws_restJson1AwsBackupBackupPlanBackupPlanDetails(input.BackupPlan, context),
    }),
    ...(input.BackupPlanArn != null && { BackupPlanArn: input.BackupPlanArn }),
    ...(input.BackupPlanId != null && { BackupPlanId: input.BackupPlanId }),
    ...(input.VersionId != null && { VersionId: input.VersionId }),
  };
};

const serializeAws_restJson1AwsBackupBackupPlanLifecycleDetails = (
  input: AwsBackupBackupPlanLifecycleDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeleteAfterDays != null && { DeleteAfterDays: input.DeleteAfterDays }),
    ...(input.MoveToColdStorageAfterDays != null && { MoveToColdStorageAfterDays: input.MoveToColdStorageAfterDays }),
  };
};

const serializeAws_restJson1AwsBackupBackupPlanRuleCopyActionsDetails = (
  input: AwsBackupBackupPlanRuleCopyActionsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.DestinationBackupVaultArn != null && { DestinationBackupVaultArn: input.DestinationBackupVaultArn }),
    ...(input.Lifecycle != null && {
      Lifecycle: serializeAws_restJson1AwsBackupBackupPlanLifecycleDetails(input.Lifecycle, context),
    }),
  };
};

const serializeAws_restJson1AwsBackupBackupPlanRuleCopyActionsList = (
  input: AwsBackupBackupPlanRuleCopyActionsDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsBackupBackupPlanRuleCopyActionsDetails(entry, context);
    });
};

const serializeAws_restJson1AwsBackupBackupPlanRuleDetails = (
  input: AwsBackupBackupPlanRuleDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.CompletionWindowMinutes != null && { CompletionWindowMinutes: input.CompletionWindowMinutes }),
    ...(input.CopyActions != null && {
      CopyActions: serializeAws_restJson1AwsBackupBackupPlanRuleCopyActionsList(input.CopyActions, context),
    }),
    ...(input.EnableContinuousBackup != null && { EnableContinuousBackup: input.EnableContinuousBackup }),
    ...(input.Lifecycle != null && {
      Lifecycle: serializeAws_restJson1AwsBackupBackupPlanLifecycleDetails(input.Lifecycle, context),
    }),
    ...(input.RuleId != null && { RuleId: input.RuleId }),
    ...(input.RuleName != null && { RuleName: input.RuleName }),
    ...(input.ScheduleExpression != null && { ScheduleExpression: input.ScheduleExpression }),
    ...(input.StartWindowMinutes != null && { StartWindowMinutes: input.StartWindowMinutes }),
    ...(input.TargetBackupVault != null && { TargetBackupVault: input.TargetBackupVault }),
  };
};

const serializeAws_restJson1AwsBackupBackupPlanRuleList = (
  input: AwsBackupBackupPlanRuleDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsBackupBackupPlanRuleDetails(entry, context);
    });
};

const serializeAws_restJson1AwsBackupBackupVaultDetails = (
  input: AwsBackupBackupVaultDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccessPolicy != null && { AccessPolicy: input.AccessPolicy }),
    ...(input.BackupVaultArn != null && { BackupVaultArn: input.BackupVaultArn }),
    ...(input.BackupVaultName != null && { BackupVaultName: input.BackupVaultName }),
    ...(input.EncryptionKeyArn != null && { EncryptionKeyArn: input.EncryptionKeyArn }),
    ...(input.Notifications != null && {
      Notifications: serializeAws_restJson1AwsBackupBackupVaultNotificationsDetails(input.Notifications, context),
    }),
  };
};

const serializeAws_restJson1AwsBackupBackupVaultNotificationsDetails = (
  input: AwsBackupBackupVaultNotificationsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.BackupVaultEvents != null && {
      BackupVaultEvents: serializeAws_restJson1NonEmptyStringList(input.BackupVaultEvents, context),
    }),
    ...(input.SnsTopicArn != null && { SnsTopicArn: input.SnsTopicArn }),
  };
};

const serializeAws_restJson1AwsBackupRecoveryPointCalculatedLifecycleDetails = (
  input: AwsBackupRecoveryPointCalculatedLifecycleDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeleteAt != null && { DeleteAt: input.DeleteAt }),
    ...(input.MoveToColdStorageAt != null && { MoveToColdStorageAt: input.MoveToColdStorageAt }),
  };
};

const serializeAws_restJson1AwsBackupRecoveryPointCreatedByDetails = (
  input: AwsBackupRecoveryPointCreatedByDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.BackupPlanArn != null && { BackupPlanArn: input.BackupPlanArn }),
    ...(input.BackupPlanId != null && { BackupPlanId: input.BackupPlanId }),
    ...(input.BackupPlanVersion != null && { BackupPlanVersion: input.BackupPlanVersion }),
    ...(input.BackupRuleId != null && { BackupRuleId: input.BackupRuleId }),
  };
};

const serializeAws_restJson1AwsBackupRecoveryPointDetails = (
  input: AwsBackupRecoveryPointDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.BackupSizeInBytes != null && { BackupSizeInBytes: input.BackupSizeInBytes }),
    ...(input.BackupVaultArn != null && { BackupVaultArn: input.BackupVaultArn }),
    ...(input.BackupVaultName != null && { BackupVaultName: input.BackupVaultName }),
    ...(input.CalculatedLifecycle != null && {
      CalculatedLifecycle: serializeAws_restJson1AwsBackupRecoveryPointCalculatedLifecycleDetails(
        input.CalculatedLifecycle,
        context
      ),
    }),
    ...(input.CompletionDate != null && { CompletionDate: input.CompletionDate }),
    ...(input.CreatedBy != null && {
      CreatedBy: serializeAws_restJson1AwsBackupRecoveryPointCreatedByDetails(input.CreatedBy, context),
    }),
    ...(input.CreationDate != null && { CreationDate: input.CreationDate }),
    ...(input.EncryptionKeyArn != null && { EncryptionKeyArn: input.EncryptionKeyArn }),
    ...(input.IamRoleArn != null && { IamRoleArn: input.IamRoleArn }),
    ...(input.IsEncrypted != null && { IsEncrypted: input.IsEncrypted }),
    ...(input.LastRestoreTime != null && { LastRestoreTime: input.LastRestoreTime }),
    ...(input.Lifecycle != null && {
      Lifecycle: serializeAws_restJson1AwsBackupRecoveryPointLifecycleDetails(input.Lifecycle, context),
    }),
    ...(input.RecoveryPointArn != null && { RecoveryPointArn: input.RecoveryPointArn }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
    ...(input.SourceBackupVaultArn != null && { SourceBackupVaultArn: input.SourceBackupVaultArn }),
    ...(input.Status != null && { Status: input.Status }),
    ...(input.StatusMessage != null && { StatusMessage: input.StatusMessage }),
    ...(input.StorageClass != null && { StorageClass: input.StorageClass }),
  };
};

const serializeAws_restJson1AwsBackupRecoveryPointLifecycleDetails = (
  input: AwsBackupRecoveryPointLifecycleDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeleteAfterDays != null && { DeleteAfterDays: input.DeleteAfterDays }),
    ...(input.MoveToColdStorageAfterDays != null && { MoveToColdStorageAfterDays: input.MoveToColdStorageAfterDays }),
  };
};

const serializeAws_restJson1AwsCertificateManagerCertificateDetails = (
  input: AwsCertificateManagerCertificateDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateAuthorityArn != null && { CertificateAuthorityArn: input.CertificateAuthorityArn }),
    ...(input.CreatedAt != null && { CreatedAt: input.CreatedAt }),
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.DomainValidationOptions != null && {
      DomainValidationOptions: serializeAws_restJson1AwsCertificateManagerCertificateDomainValidationOptions(
        input.DomainValidationOptions,
        context
      ),
    }),
    ...(input.ExtendedKeyUsages != null && {
      ExtendedKeyUsages: serializeAws_restJson1AwsCertificateManagerCertificateExtendedKeyUsages(
        input.ExtendedKeyUsages,
        context
      ),
    }),
    ...(input.FailureReason != null && { FailureReason: input.FailureReason }),
    ...(input.ImportedAt != null && { ImportedAt: input.ImportedAt }),
    ...(input.InUseBy != null && { InUseBy: serializeAws_restJson1StringList(input.InUseBy, context) }),
    ...(input.IssuedAt != null && { IssuedAt: input.IssuedAt }),
    ...(input.Issuer != null && { Issuer: input.Issuer }),
    ...(input.KeyAlgorithm != null && { KeyAlgorithm: input.KeyAlgorithm }),
    ...(input.KeyUsages != null && {
      KeyUsages: serializeAws_restJson1AwsCertificateManagerCertificateKeyUsages(input.KeyUsages, context),
    }),
    ...(input.NotAfter != null && { NotAfter: input.NotAfter }),
    ...(input.NotBefore != null && { NotBefore: input.NotBefore }),
    ...(input.Options != null && {
      Options: serializeAws_restJson1AwsCertificateManagerCertificateOptions(input.Options, context),
    }),
    ...(input.RenewalEligibility != null && { RenewalEligibility: input.RenewalEligibility }),
    ...(input.RenewalSummary != null && {
      RenewalSummary: serializeAws_restJson1AwsCertificateManagerCertificateRenewalSummary(
        input.RenewalSummary,
        context
      ),
    }),
    ...(input.Serial != null && { Serial: input.Serial }),
    ...(input.SignatureAlgorithm != null && { SignatureAlgorithm: input.SignatureAlgorithm }),
    ...(input.Status != null && { Status: input.Status }),
    ...(input.Subject != null && { Subject: input.Subject }),
    ...(input.SubjectAlternativeNames != null && {
      SubjectAlternativeNames: serializeAws_restJson1StringList(input.SubjectAlternativeNames, context),
    }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_restJson1AwsCertificateManagerCertificateDomainValidationOption = (
  input: AwsCertificateManagerCertificateDomainValidationOption,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.ResourceRecord != null && {
      ResourceRecord: serializeAws_restJson1AwsCertificateManagerCertificateResourceRecord(
        input.ResourceRecord,
        context
      ),
    }),
    ...(input.ValidationDomain != null && { ValidationDomain: input.ValidationDomain }),
    ...(input.ValidationEmails != null && {
      ValidationEmails: serializeAws_restJson1StringList(input.ValidationEmails, context),
    }),
    ...(input.ValidationMethod != null && { ValidationMethod: input.ValidationMethod }),
    ...(input.ValidationStatus != null && { ValidationStatus: input.ValidationStatus }),
  };
};

const serializeAws_restJson1AwsCertificateManagerCertificateDomainValidationOptions = (
  input: AwsCertificateManagerCertificateDomainValidationOption[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsCertificateManagerCertificateDomainValidationOption(entry, context);
    });
};

const serializeAws_restJson1AwsCertificateManagerCertificateExtendedKeyUsage = (
  input: AwsCertificateManagerCertificateExtendedKeyUsage,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.OId != null && { OId: input.OId }),
  };
};

const serializeAws_restJson1AwsCertificateManagerCertificateExtendedKeyUsages = (
  input: AwsCertificateManagerCertificateExtendedKeyUsage[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsCertificateManagerCertificateExtendedKeyUsage(entry, context);
    });
};

const serializeAws_restJson1AwsCertificateManagerCertificateKeyUsage = (
  input: AwsCertificateManagerCertificateKeyUsage,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_restJson1AwsCertificateManagerCertificateKeyUsages = (
  input: AwsCertificateManagerCertificateKeyUsage[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsCertificateManagerCertificateKeyUsage(entry, context);
    });
};

const serializeAws_restJson1AwsCertificateManagerCertificateOptions = (
  input: AwsCertificateManagerCertificateOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.CertificateTransparencyLoggingPreference != null && {
      CertificateTransparencyLoggingPreference: input.CertificateTransparencyLoggingPreference,
    }),
  };
};

const serializeAws_restJson1AwsCertificateManagerCertificateRenewalSummary = (
  input: AwsCertificateManagerCertificateRenewalSummary,
  context: __SerdeContext
): any => {
  return {
    ...(input.DomainValidationOptions != null && {
      DomainValidationOptions: serializeAws_restJson1AwsCertificateManagerCertificateDomainValidationOptions(
        input.DomainValidationOptions,
        context
      ),
    }),
    ...(input.RenewalStatus != null && { RenewalStatus: input.RenewalStatus }),
    ...(input.RenewalStatusReason != null && { RenewalStatusReason: input.RenewalStatusReason }),
    ...(input.UpdatedAt != null && { UpdatedAt: input.UpdatedAt }),
  };
};

const serializeAws_restJson1AwsCertificateManagerCertificateResourceRecord = (
  input: AwsCertificateManagerCertificateResourceRecord,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Type != null && { Type: input.Type }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_restJson1AwsCloudFormationStackDetails = (
  input: AwsCloudFormationStackDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Capabilities != null && {
      Capabilities: serializeAws_restJson1NonEmptyStringList(input.Capabilities, context),
    }),
    ...(input.CreationTime != null && { CreationTime: input.CreationTime }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DisableRollback != null && { DisableRollback: input.DisableRollback }),
    ...(input.DriftInformation != null && {
      DriftInformation: serializeAws_restJson1AwsCloudFormationStackDriftInformationDetails(
        input.DriftInformation,
        context
      ),
    }),
    ...(input.EnableTerminationProtection != null && {
      EnableTerminationProtection: input.EnableTerminationProtection,
    }),
    ...(input.LastUpdatedTime != null && { LastUpdatedTime: input.LastUpdatedTime }),
    ...(input.NotificationArns != null && {
      NotificationArns: serializeAws_restJson1NonEmptyStringList(input.NotificationArns, context),
    }),
    ...(input.Outputs != null && {
      Outputs: serializeAws_restJson1AwsCloudFormationStackOutputsList(input.Outputs, context),
    }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.StackId != null && { StackId: input.StackId }),
    ...(input.StackName != null && { StackName: input.StackName }),
    ...(input.StackStatus != null && { StackStatus: input.StackStatus }),
    ...(input.StackStatusReason != null && { StackStatusReason: input.StackStatusReason }),
    ...(input.TimeoutInMinutes != null && { TimeoutInMinutes: input.TimeoutInMinutes }),
  };
};

const serializeAws_restJson1AwsCloudFormationStackDriftInformationDetails = (
  input: AwsCloudFormationStackDriftInformationDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.StackDriftStatus != null && { StackDriftStatus: input.StackDriftStatus }),
  };
};

const serializeAws_restJson1AwsCloudFormationStackOutputsDetails = (
  input: AwsCloudFormationStackOutputsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.OutputKey != null && { OutputKey: input.OutputKey }),
    ...(input.OutputValue != null && { OutputValue: input.OutputValue }),
  };
};

const serializeAws_restJson1AwsCloudFormationStackOutputsList = (
  input: AwsCloudFormationStackOutputsDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsCloudFormationStackOutputsDetails(entry, context);
    });
};

const serializeAws_restJson1AwsCloudFrontDistributionCacheBehavior = (
  input: AwsCloudFrontDistributionCacheBehavior,
  context: __SerdeContext
): any => {
  return {
    ...(input.ViewerProtocolPolicy != null && { ViewerProtocolPolicy: input.ViewerProtocolPolicy }),
  };
};

const serializeAws_restJson1AwsCloudFrontDistributionCacheBehaviors = (
  input: AwsCloudFrontDistributionCacheBehaviors,
  context: __SerdeContext
): any => {
  return {
    ...(input.Items != null && {
      Items: serializeAws_restJson1AwsCloudFrontDistributionCacheBehaviorsItemList(input.Items, context),
    }),
  };
};

const serializeAws_restJson1AwsCloudFrontDistributionCacheBehaviorsItemList = (
  input: AwsCloudFrontDistributionCacheBehavior[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsCloudFrontDistributionCacheBehavior(entry, context);
    });
};

const serializeAws_restJson1AwsCloudFrontDistributionDefaultCacheBehavior = (
  input: AwsCloudFrontDistributionDefaultCacheBehavior,
  context: __SerdeContext
): any => {
  return {
    ...(input.ViewerProtocolPolicy != null && { ViewerProtocolPolicy: input.ViewerProtocolPolicy }),
  };
};

const serializeAws_restJson1AwsCloudFrontDistributionDetails = (
  input: AwsCloudFrontDistributionDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.CacheBehaviors != null && {
      CacheBehaviors: serializeAws_restJson1AwsCloudFrontDistributionCacheBehaviors(input.CacheBehaviors, context),
    }),
    ...(input.DefaultCacheBehavior != null && {
      DefaultCacheBehavior: serializeAws_restJson1AwsCloudFrontDistributionDefaultCacheBehavior(
        input.DefaultCacheBehavior,
        context
      ),
    }),
    ...(input.DefaultRootObject != null && { DefaultRootObject: input.DefaultRootObject }),
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.ETag != null && { ETag: input.ETag }),
    ...(input.LastModifiedTime != null && { LastModifiedTime: input.LastModifiedTime }),
    ...(input.Logging != null && {
      Logging: serializeAws_restJson1AwsCloudFrontDistributionLogging(input.Logging, context),
    }),
    ...(input.OriginGroups != null && {
      OriginGroups: serializeAws_restJson1AwsCloudFrontDistributionOriginGroups(input.OriginGroups, context),
    }),
    ...(input.Origins != null && {
      Origins: serializeAws_restJson1AwsCloudFrontDistributionOrigins(input.Origins, context),
    }),
    ...(input.Status != null && { Status: input.Status }),
    ...(input.ViewerCertificate != null && {
      ViewerCertificate: serializeAws_restJson1AwsCloudFrontDistributionViewerCertificate(
        input.ViewerCertificate,
        context
      ),
    }),
    ...(input.WebAclId != null && { WebAclId: input.WebAclId }),
  };
};

const serializeAws_restJson1AwsCloudFrontDistributionLogging = (
  input: AwsCloudFrontDistributionLogging,
  context: __SerdeContext
): any => {
  return {
    ...(input.Bucket != null && { Bucket: input.Bucket }),
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.IncludeCookies != null && { IncludeCookies: input.IncludeCookies }),
    ...(input.Prefix != null && { Prefix: input.Prefix }),
  };
};

const serializeAws_restJson1AwsCloudFrontDistributionOriginCustomOriginConfig = (
  input: AwsCloudFrontDistributionOriginCustomOriginConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.HttpPort != null && { HttpPort: input.HttpPort }),
    ...(input.HttpsPort != null && { HttpsPort: input.HttpsPort }),
    ...(input.OriginKeepaliveTimeout != null && { OriginKeepaliveTimeout: input.OriginKeepaliveTimeout }),
    ...(input.OriginProtocolPolicy != null && { OriginProtocolPolicy: input.OriginProtocolPolicy }),
    ...(input.OriginReadTimeout != null && { OriginReadTimeout: input.OriginReadTimeout }),
    ...(input.OriginSslProtocols != null && {
      OriginSslProtocols: serializeAws_restJson1AwsCloudFrontDistributionOriginSslProtocols(
        input.OriginSslProtocols,
        context
      ),
    }),
  };
};

const serializeAws_restJson1AwsCloudFrontDistributionOriginGroup = (
  input: AwsCloudFrontDistributionOriginGroup,
  context: __SerdeContext
): any => {
  return {
    ...(input.FailoverCriteria != null && {
      FailoverCriteria: serializeAws_restJson1AwsCloudFrontDistributionOriginGroupFailover(
        input.FailoverCriteria,
        context
      ),
    }),
  };
};

const serializeAws_restJson1AwsCloudFrontDistributionOriginGroupFailover = (
  input: AwsCloudFrontDistributionOriginGroupFailover,
  context: __SerdeContext
): any => {
  return {
    ...(input.StatusCodes != null && {
      StatusCodes: serializeAws_restJson1AwsCloudFrontDistributionOriginGroupFailoverStatusCodes(
        input.StatusCodes,
        context
      ),
    }),
  };
};

const serializeAws_restJson1AwsCloudFrontDistributionOriginGroupFailoverStatusCodes = (
  input: AwsCloudFrontDistributionOriginGroupFailoverStatusCodes,
  context: __SerdeContext
): any => {
  return {
    ...(input.Items != null && {
      Items: serializeAws_restJson1AwsCloudFrontDistributionOriginGroupFailoverStatusCodesItemList(
        input.Items,
        context
      ),
    }),
    ...(input.Quantity != null && { Quantity: input.Quantity }),
  };
};

const serializeAws_restJson1AwsCloudFrontDistributionOriginGroupFailoverStatusCodesItemList = (
  input: number[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1AwsCloudFrontDistributionOriginGroups = (
  input: AwsCloudFrontDistributionOriginGroups,
  context: __SerdeContext
): any => {
  return {
    ...(input.Items != null && {
      Items: serializeAws_restJson1AwsCloudFrontDistributionOriginGroupsItemList(input.Items, context),
    }),
  };
};

const serializeAws_restJson1AwsCloudFrontDistributionOriginGroupsItemList = (
  input: AwsCloudFrontDistributionOriginGroup[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsCloudFrontDistributionOriginGroup(entry, context);
    });
};

const serializeAws_restJson1AwsCloudFrontDistributionOriginItem = (
  input: AwsCloudFrontDistributionOriginItem,
  context: __SerdeContext
): any => {
  return {
    ...(input.CustomOriginConfig != null && {
      CustomOriginConfig: serializeAws_restJson1AwsCloudFrontDistributionOriginCustomOriginConfig(
        input.CustomOriginConfig,
        context
      ),
    }),
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.OriginPath != null && { OriginPath: input.OriginPath }),
    ...(input.S3OriginConfig != null && {
      S3OriginConfig: serializeAws_restJson1AwsCloudFrontDistributionOriginS3OriginConfig(
        input.S3OriginConfig,
        context
      ),
    }),
  };
};

const serializeAws_restJson1AwsCloudFrontDistributionOriginItemList = (
  input: AwsCloudFrontDistributionOriginItem[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsCloudFrontDistributionOriginItem(entry, context);
    });
};

const serializeAws_restJson1AwsCloudFrontDistributionOrigins = (
  input: AwsCloudFrontDistributionOrigins,
  context: __SerdeContext
): any => {
  return {
    ...(input.Items != null && {
      Items: serializeAws_restJson1AwsCloudFrontDistributionOriginItemList(input.Items, context),
    }),
  };
};

const serializeAws_restJson1AwsCloudFrontDistributionOriginS3OriginConfig = (
  input: AwsCloudFrontDistributionOriginS3OriginConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.OriginAccessIdentity != null && { OriginAccessIdentity: input.OriginAccessIdentity }),
  };
};

const serializeAws_restJson1AwsCloudFrontDistributionOriginSslProtocols = (
  input: AwsCloudFrontDistributionOriginSslProtocols,
  context: __SerdeContext
): any => {
  return {
    ...(input.Items != null && { Items: serializeAws_restJson1NonEmptyStringList(input.Items, context) }),
    ...(input.Quantity != null && { Quantity: input.Quantity }),
  };
};

const serializeAws_restJson1AwsCloudFrontDistributionViewerCertificate = (
  input: AwsCloudFrontDistributionViewerCertificate,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcmCertificateArn != null && { AcmCertificateArn: input.AcmCertificateArn }),
    ...(input.Certificate != null && { Certificate: input.Certificate }),
    ...(input.CertificateSource != null && { CertificateSource: input.CertificateSource }),
    ...(input.CloudFrontDefaultCertificate != null && {
      CloudFrontDefaultCertificate: input.CloudFrontDefaultCertificate,
    }),
    ...(input.IamCertificateId != null && { IamCertificateId: input.IamCertificateId }),
    ...(input.MinimumProtocolVersion != null && { MinimumProtocolVersion: input.MinimumProtocolVersion }),
    ...(input.SslSupportMethod != null && { SslSupportMethod: input.SslSupportMethod }),
  };
};

const serializeAws_restJson1AwsCloudTrailTrailDetails = (
  input: AwsCloudTrailTrailDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.CloudWatchLogsLogGroupArn != null && { CloudWatchLogsLogGroupArn: input.CloudWatchLogsLogGroupArn }),
    ...(input.CloudWatchLogsRoleArn != null && { CloudWatchLogsRoleArn: input.CloudWatchLogsRoleArn }),
    ...(input.HasCustomEventSelectors != null && { HasCustomEventSelectors: input.HasCustomEventSelectors }),
    ...(input.HomeRegion != null && { HomeRegion: input.HomeRegion }),
    ...(input.IncludeGlobalServiceEvents != null && { IncludeGlobalServiceEvents: input.IncludeGlobalServiceEvents }),
    ...(input.IsMultiRegionTrail != null && { IsMultiRegionTrail: input.IsMultiRegionTrail }),
    ...(input.IsOrganizationTrail != null && { IsOrganizationTrail: input.IsOrganizationTrail }),
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.LogFileValidationEnabled != null && { LogFileValidationEnabled: input.LogFileValidationEnabled }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.S3BucketName != null && { S3BucketName: input.S3BucketName }),
    ...(input.S3KeyPrefix != null && { S3KeyPrefix: input.S3KeyPrefix }),
    ...(input.SnsTopicArn != null && { SnsTopicArn: input.SnsTopicArn }),
    ...(input.SnsTopicName != null && { SnsTopicName: input.SnsTopicName }),
    ...(input.TrailArn != null && { TrailArn: input.TrailArn }),
  };
};

const serializeAws_restJson1AwsCloudWatchAlarmDetails = (
  input: AwsCloudWatchAlarmDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.ActionsEnabled != null && { ActionsEnabled: input.ActionsEnabled }),
    ...(input.AlarmActions != null && {
      AlarmActions: serializeAws_restJson1NonEmptyStringList(input.AlarmActions, context),
    }),
    ...(input.AlarmArn != null && { AlarmArn: input.AlarmArn }),
    ...(input.AlarmConfigurationUpdatedTimestamp != null && {
      AlarmConfigurationUpdatedTimestamp: input.AlarmConfigurationUpdatedTimestamp,
    }),
    ...(input.AlarmDescription != null && { AlarmDescription: input.AlarmDescription }),
    ...(input.AlarmName != null && { AlarmName: input.AlarmName }),
    ...(input.ComparisonOperator != null && { ComparisonOperator: input.ComparisonOperator }),
    ...(input.DatapointsToAlarm != null && { DatapointsToAlarm: input.DatapointsToAlarm }),
    ...(input.Dimensions != null && {
      Dimensions: serializeAws_restJson1AwsCloudWatchAlarmDimensionsList(input.Dimensions, context),
    }),
    ...(input.EvaluateLowSampleCountPercentile != null && {
      EvaluateLowSampleCountPercentile: input.EvaluateLowSampleCountPercentile,
    }),
    ...(input.EvaluationPeriods != null && { EvaluationPeriods: input.EvaluationPeriods }),
    ...(input.ExtendedStatistic != null && { ExtendedStatistic: input.ExtendedStatistic }),
    ...(input.InsufficientDataActions != null && {
      InsufficientDataActions: serializeAws_restJson1NonEmptyStringList(input.InsufficientDataActions, context),
    }),
    ...(input.MetricName != null && { MetricName: input.MetricName }),
    ...(input.Namespace != null && { Namespace: input.Namespace }),
    ...(input.OkActions != null && { OkActions: serializeAws_restJson1NonEmptyStringList(input.OkActions, context) }),
    ...(input.Period != null && { Period: input.Period }),
    ...(input.Statistic != null && { Statistic: input.Statistic }),
    ...(input.Threshold != null && { Threshold: __serializeFloat(input.Threshold) }),
    ...(input.ThresholdMetricId != null && { ThresholdMetricId: input.ThresholdMetricId }),
    ...(input.TreatMissingData != null && { TreatMissingData: input.TreatMissingData }),
    ...(input.Unit != null && { Unit: input.Unit }),
  };
};

const serializeAws_restJson1AwsCloudWatchAlarmDimensionsDetails = (
  input: AwsCloudWatchAlarmDimensionsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_restJson1AwsCloudWatchAlarmDimensionsList = (
  input: AwsCloudWatchAlarmDimensionsDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsCloudWatchAlarmDimensionsDetails(entry, context);
    });
};

const serializeAws_restJson1AwsCodeBuildProjectArtifactsDetails = (
  input: AwsCodeBuildProjectArtifactsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.ArtifactIdentifier != null && { ArtifactIdentifier: input.ArtifactIdentifier }),
    ...(input.EncryptionDisabled != null && { EncryptionDisabled: input.EncryptionDisabled }),
    ...(input.Location != null && { Location: input.Location }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.NamespaceType != null && { NamespaceType: input.NamespaceType }),
    ...(input.OverrideArtifactName != null && { OverrideArtifactName: input.OverrideArtifactName }),
    ...(input.Packaging != null && { Packaging: input.Packaging }),
    ...(input.Path != null && { Path: input.Path }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_restJson1AwsCodeBuildProjectArtifactsList = (
  input: AwsCodeBuildProjectArtifactsDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsCodeBuildProjectArtifactsDetails(entry, context);
    });
};

const serializeAws_restJson1AwsCodeBuildProjectDetails = (
  input: AwsCodeBuildProjectDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Artifacts != null && {
      Artifacts: serializeAws_restJson1AwsCodeBuildProjectArtifactsList(input.Artifacts, context),
    }),
    ...(input.EncryptionKey != null && { EncryptionKey: input.EncryptionKey }),
    ...(input.Environment != null && {
      Environment: serializeAws_restJson1AwsCodeBuildProjectEnvironment(input.Environment, context),
    }),
    ...(input.LogsConfig != null && {
      LogsConfig: serializeAws_restJson1AwsCodeBuildProjectLogsConfigDetails(input.LogsConfig, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.SecondaryArtifacts != null && {
      SecondaryArtifacts: serializeAws_restJson1AwsCodeBuildProjectArtifactsList(input.SecondaryArtifacts, context),
    }),
    ...(input.ServiceRole != null && { ServiceRole: input.ServiceRole }),
    ...(input.Source != null && { Source: serializeAws_restJson1AwsCodeBuildProjectSource(input.Source, context) }),
    ...(input.VpcConfig != null && {
      VpcConfig: serializeAws_restJson1AwsCodeBuildProjectVpcConfig(input.VpcConfig, context),
    }),
  };
};

const serializeAws_restJson1AwsCodeBuildProjectEnvironment = (
  input: AwsCodeBuildProjectEnvironment,
  context: __SerdeContext
): any => {
  return {
    ...(input.Certificate != null && { Certificate: input.Certificate }),
    ...(input.EnvironmentVariables != null && {
      EnvironmentVariables: serializeAws_restJson1AwsCodeBuildProjectEnvironmentEnvironmentVariablesList(
        input.EnvironmentVariables,
        context
      ),
    }),
    ...(input.ImagePullCredentialsType != null && { ImagePullCredentialsType: input.ImagePullCredentialsType }),
    ...(input.PrivilegedMode != null && { PrivilegedMode: input.PrivilegedMode }),
    ...(input.RegistryCredential != null && {
      RegistryCredential: serializeAws_restJson1AwsCodeBuildProjectEnvironmentRegistryCredential(
        input.RegistryCredential,
        context
      ),
    }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_restJson1AwsCodeBuildProjectEnvironmentEnvironmentVariablesDetails = (
  input: AwsCodeBuildProjectEnvironmentEnvironmentVariablesDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Type != null && { Type: input.Type }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_restJson1AwsCodeBuildProjectEnvironmentEnvironmentVariablesList = (
  input: AwsCodeBuildProjectEnvironmentEnvironmentVariablesDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsCodeBuildProjectEnvironmentEnvironmentVariablesDetails(entry, context);
    });
};

const serializeAws_restJson1AwsCodeBuildProjectEnvironmentRegistryCredential = (
  input: AwsCodeBuildProjectEnvironmentRegistryCredential,
  context: __SerdeContext
): any => {
  return {
    ...(input.Credential != null && { Credential: input.Credential }),
    ...(input.CredentialProvider != null && { CredentialProvider: input.CredentialProvider }),
  };
};

const serializeAws_restJson1AwsCodeBuildProjectLogsConfigCloudWatchLogsDetails = (
  input: AwsCodeBuildProjectLogsConfigCloudWatchLogsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.GroupName != null && { GroupName: input.GroupName }),
    ...(input.Status != null && { Status: input.Status }),
    ...(input.StreamName != null && { StreamName: input.StreamName }),
  };
};

const serializeAws_restJson1AwsCodeBuildProjectLogsConfigDetails = (
  input: AwsCodeBuildProjectLogsConfigDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.CloudWatchLogs != null && {
      CloudWatchLogs: serializeAws_restJson1AwsCodeBuildProjectLogsConfigCloudWatchLogsDetails(
        input.CloudWatchLogs,
        context
      ),
    }),
    ...(input.S3Logs != null && {
      S3Logs: serializeAws_restJson1AwsCodeBuildProjectLogsConfigS3LogsDetails(input.S3Logs, context),
    }),
  };
};

const serializeAws_restJson1AwsCodeBuildProjectLogsConfigS3LogsDetails = (
  input: AwsCodeBuildProjectLogsConfigS3LogsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.EncryptionDisabled != null && { EncryptionDisabled: input.EncryptionDisabled }),
    ...(input.Location != null && { Location: input.Location }),
    ...(input.Status != null && { Status: input.Status }),
  };
};

const serializeAws_restJson1AwsCodeBuildProjectSource = (
  input: AwsCodeBuildProjectSource,
  context: __SerdeContext
): any => {
  return {
    ...(input.GitCloneDepth != null && { GitCloneDepth: input.GitCloneDepth }),
    ...(input.InsecureSsl != null && { InsecureSsl: input.InsecureSsl }),
    ...(input.Location != null && { Location: input.Location }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_restJson1AwsCodeBuildProjectVpcConfig = (
  input: AwsCodeBuildProjectVpcConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.SecurityGroupIds != null && {
      SecurityGroupIds: serializeAws_restJson1NonEmptyStringList(input.SecurityGroupIds, context),
    }),
    ...(input.Subnets != null && { Subnets: serializeAws_restJson1NonEmptyStringList(input.Subnets, context) }),
    ...(input.VpcId != null && { VpcId: input.VpcId }),
  };
};

const serializeAws_restJson1AwsCorsConfiguration = (input: AwsCorsConfiguration, context: __SerdeContext): any => {
  return {
    ...(input.AllowCredentials != null && { AllowCredentials: input.AllowCredentials }),
    ...(input.AllowHeaders != null && {
      AllowHeaders: serializeAws_restJson1NonEmptyStringList(input.AllowHeaders, context),
    }),
    ...(input.AllowMethods != null && {
      AllowMethods: serializeAws_restJson1NonEmptyStringList(input.AllowMethods, context),
    }),
    ...(input.AllowOrigins != null && {
      AllowOrigins: serializeAws_restJson1NonEmptyStringList(input.AllowOrigins, context),
    }),
    ...(input.ExposeHeaders != null && {
      ExposeHeaders: serializeAws_restJson1NonEmptyStringList(input.ExposeHeaders, context),
    }),
    ...(input.MaxAge != null && { MaxAge: input.MaxAge }),
  };
};

const serializeAws_restJson1AwsDynamoDbTableAttributeDefinition = (
  input: AwsDynamoDbTableAttributeDefinition,
  context: __SerdeContext
): any => {
  return {
    ...(input.AttributeName != null && { AttributeName: input.AttributeName }),
    ...(input.AttributeType != null && { AttributeType: input.AttributeType }),
  };
};

const serializeAws_restJson1AwsDynamoDbTableAttributeDefinitionList = (
  input: AwsDynamoDbTableAttributeDefinition[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsDynamoDbTableAttributeDefinition(entry, context);
    });
};

const serializeAws_restJson1AwsDynamoDbTableBillingModeSummary = (
  input: AwsDynamoDbTableBillingModeSummary,
  context: __SerdeContext
): any => {
  return {
    ...(input.BillingMode != null && { BillingMode: input.BillingMode }),
    ...(input.LastUpdateToPayPerRequestDateTime != null && {
      LastUpdateToPayPerRequestDateTime: input.LastUpdateToPayPerRequestDateTime,
    }),
  };
};

const serializeAws_restJson1AwsDynamoDbTableDetails = (
  input: AwsDynamoDbTableDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AttributeDefinitions != null && {
      AttributeDefinitions: serializeAws_restJson1AwsDynamoDbTableAttributeDefinitionList(
        input.AttributeDefinitions,
        context
      ),
    }),
    ...(input.BillingModeSummary != null && {
      BillingModeSummary: serializeAws_restJson1AwsDynamoDbTableBillingModeSummary(input.BillingModeSummary, context),
    }),
    ...(input.CreationDateTime != null && { CreationDateTime: input.CreationDateTime }),
    ...(input.GlobalSecondaryIndexes != null && {
      GlobalSecondaryIndexes: serializeAws_restJson1AwsDynamoDbTableGlobalSecondaryIndexList(
        input.GlobalSecondaryIndexes,
        context
      ),
    }),
    ...(input.GlobalTableVersion != null && { GlobalTableVersion: input.GlobalTableVersion }),
    ...(input.ItemCount != null && { ItemCount: input.ItemCount }),
    ...(input.KeySchema != null && {
      KeySchema: serializeAws_restJson1AwsDynamoDbTableKeySchemaList(input.KeySchema, context),
    }),
    ...(input.LatestStreamArn != null && { LatestStreamArn: input.LatestStreamArn }),
    ...(input.LatestStreamLabel != null && { LatestStreamLabel: input.LatestStreamLabel }),
    ...(input.LocalSecondaryIndexes != null && {
      LocalSecondaryIndexes: serializeAws_restJson1AwsDynamoDbTableLocalSecondaryIndexList(
        input.LocalSecondaryIndexes,
        context
      ),
    }),
    ...(input.ProvisionedThroughput != null && {
      ProvisionedThroughput: serializeAws_restJson1AwsDynamoDbTableProvisionedThroughput(
        input.ProvisionedThroughput,
        context
      ),
    }),
    ...(input.Replicas != null && {
      Replicas: serializeAws_restJson1AwsDynamoDbTableReplicaList(input.Replicas, context),
    }),
    ...(input.RestoreSummary != null && {
      RestoreSummary: serializeAws_restJson1AwsDynamoDbTableRestoreSummary(input.RestoreSummary, context),
    }),
    ...(input.SseDescription != null && {
      SseDescription: serializeAws_restJson1AwsDynamoDbTableSseDescription(input.SseDescription, context),
    }),
    ...(input.StreamSpecification != null && {
      StreamSpecification: serializeAws_restJson1AwsDynamoDbTableStreamSpecification(
        input.StreamSpecification,
        context
      ),
    }),
    ...(input.TableId != null && { TableId: input.TableId }),
    ...(input.TableName != null && { TableName: input.TableName }),
    ...(input.TableSizeBytes != null && { TableSizeBytes: input.TableSizeBytes }),
    ...(input.TableStatus != null && { TableStatus: input.TableStatus }),
  };
};

const serializeAws_restJson1AwsDynamoDbTableGlobalSecondaryIndex = (
  input: AwsDynamoDbTableGlobalSecondaryIndex,
  context: __SerdeContext
): any => {
  return {
    ...(input.Backfilling != null && { Backfilling: input.Backfilling }),
    ...(input.IndexArn != null && { IndexArn: input.IndexArn }),
    ...(input.IndexName != null && { IndexName: input.IndexName }),
    ...(input.IndexSizeBytes != null && { IndexSizeBytes: input.IndexSizeBytes }),
    ...(input.IndexStatus != null && { IndexStatus: input.IndexStatus }),
    ...(input.ItemCount != null && { ItemCount: input.ItemCount }),
    ...(input.KeySchema != null && {
      KeySchema: serializeAws_restJson1AwsDynamoDbTableKeySchemaList(input.KeySchema, context),
    }),
    ...(input.Projection != null && {
      Projection: serializeAws_restJson1AwsDynamoDbTableProjection(input.Projection, context),
    }),
    ...(input.ProvisionedThroughput != null && {
      ProvisionedThroughput: serializeAws_restJson1AwsDynamoDbTableProvisionedThroughput(
        input.ProvisionedThroughput,
        context
      ),
    }),
  };
};

const serializeAws_restJson1AwsDynamoDbTableGlobalSecondaryIndexList = (
  input: AwsDynamoDbTableGlobalSecondaryIndex[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsDynamoDbTableGlobalSecondaryIndex(entry, context);
    });
};

const serializeAws_restJson1AwsDynamoDbTableKeySchema = (
  input: AwsDynamoDbTableKeySchema,
  context: __SerdeContext
): any => {
  return {
    ...(input.AttributeName != null && { AttributeName: input.AttributeName }),
    ...(input.KeyType != null && { KeyType: input.KeyType }),
  };
};

const serializeAws_restJson1AwsDynamoDbTableKeySchemaList = (
  input: AwsDynamoDbTableKeySchema[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsDynamoDbTableKeySchema(entry, context);
    });
};

const serializeAws_restJson1AwsDynamoDbTableLocalSecondaryIndex = (
  input: AwsDynamoDbTableLocalSecondaryIndex,
  context: __SerdeContext
): any => {
  return {
    ...(input.IndexArn != null && { IndexArn: input.IndexArn }),
    ...(input.IndexName != null && { IndexName: input.IndexName }),
    ...(input.KeySchema != null && {
      KeySchema: serializeAws_restJson1AwsDynamoDbTableKeySchemaList(input.KeySchema, context),
    }),
    ...(input.Projection != null && {
      Projection: serializeAws_restJson1AwsDynamoDbTableProjection(input.Projection, context),
    }),
  };
};

const serializeAws_restJson1AwsDynamoDbTableLocalSecondaryIndexList = (
  input: AwsDynamoDbTableLocalSecondaryIndex[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsDynamoDbTableLocalSecondaryIndex(entry, context);
    });
};

const serializeAws_restJson1AwsDynamoDbTableProjection = (
  input: AwsDynamoDbTableProjection,
  context: __SerdeContext
): any => {
  return {
    ...(input.NonKeyAttributes != null && {
      NonKeyAttributes: serializeAws_restJson1StringList(input.NonKeyAttributes, context),
    }),
    ...(input.ProjectionType != null && { ProjectionType: input.ProjectionType }),
  };
};

const serializeAws_restJson1AwsDynamoDbTableProvisionedThroughput = (
  input: AwsDynamoDbTableProvisionedThroughput,
  context: __SerdeContext
): any => {
  return {
    ...(input.LastDecreaseDateTime != null && { LastDecreaseDateTime: input.LastDecreaseDateTime }),
    ...(input.LastIncreaseDateTime != null && { LastIncreaseDateTime: input.LastIncreaseDateTime }),
    ...(input.NumberOfDecreasesToday != null && { NumberOfDecreasesToday: input.NumberOfDecreasesToday }),
    ...(input.ReadCapacityUnits != null && { ReadCapacityUnits: input.ReadCapacityUnits }),
    ...(input.WriteCapacityUnits != null && { WriteCapacityUnits: input.WriteCapacityUnits }),
  };
};

const serializeAws_restJson1AwsDynamoDbTableProvisionedThroughputOverride = (
  input: AwsDynamoDbTableProvisionedThroughputOverride,
  context: __SerdeContext
): any => {
  return {
    ...(input.ReadCapacityUnits != null && { ReadCapacityUnits: input.ReadCapacityUnits }),
  };
};

const serializeAws_restJson1AwsDynamoDbTableReplica = (
  input: AwsDynamoDbTableReplica,
  context: __SerdeContext
): any => {
  return {
    ...(input.GlobalSecondaryIndexes != null && {
      GlobalSecondaryIndexes: serializeAws_restJson1AwsDynamoDbTableReplicaGlobalSecondaryIndexList(
        input.GlobalSecondaryIndexes,
        context
      ),
    }),
    ...(input.KmsMasterKeyId != null && { KmsMasterKeyId: input.KmsMasterKeyId }),
    ...(input.ProvisionedThroughputOverride != null && {
      ProvisionedThroughputOverride: serializeAws_restJson1AwsDynamoDbTableProvisionedThroughputOverride(
        input.ProvisionedThroughputOverride,
        context
      ),
    }),
    ...(input.RegionName != null && { RegionName: input.RegionName }),
    ...(input.ReplicaStatus != null && { ReplicaStatus: input.ReplicaStatus }),
    ...(input.ReplicaStatusDescription != null && { ReplicaStatusDescription: input.ReplicaStatusDescription }),
  };
};

const serializeAws_restJson1AwsDynamoDbTableReplicaGlobalSecondaryIndex = (
  input: AwsDynamoDbTableReplicaGlobalSecondaryIndex,
  context: __SerdeContext
): any => {
  return {
    ...(input.IndexName != null && { IndexName: input.IndexName }),
    ...(input.ProvisionedThroughputOverride != null && {
      ProvisionedThroughputOverride: serializeAws_restJson1AwsDynamoDbTableProvisionedThroughputOverride(
        input.ProvisionedThroughputOverride,
        context
      ),
    }),
  };
};

const serializeAws_restJson1AwsDynamoDbTableReplicaGlobalSecondaryIndexList = (
  input: AwsDynamoDbTableReplicaGlobalSecondaryIndex[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsDynamoDbTableReplicaGlobalSecondaryIndex(entry, context);
    });
};

const serializeAws_restJson1AwsDynamoDbTableReplicaList = (
  input: AwsDynamoDbTableReplica[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsDynamoDbTableReplica(entry, context);
    });
};

const serializeAws_restJson1AwsDynamoDbTableRestoreSummary = (
  input: AwsDynamoDbTableRestoreSummary,
  context: __SerdeContext
): any => {
  return {
    ...(input.RestoreDateTime != null && { RestoreDateTime: input.RestoreDateTime }),
    ...(input.RestoreInProgress != null && { RestoreInProgress: input.RestoreInProgress }),
    ...(input.SourceBackupArn != null && { SourceBackupArn: input.SourceBackupArn }),
    ...(input.SourceTableArn != null && { SourceTableArn: input.SourceTableArn }),
  };
};

const serializeAws_restJson1AwsDynamoDbTableSseDescription = (
  input: AwsDynamoDbTableSseDescription,
  context: __SerdeContext
): any => {
  return {
    ...(input.InaccessibleEncryptionDateTime != null && {
      InaccessibleEncryptionDateTime: input.InaccessibleEncryptionDateTime,
    }),
    ...(input.KmsMasterKeyArn != null && { KmsMasterKeyArn: input.KmsMasterKeyArn }),
    ...(input.SseType != null && { SseType: input.SseType }),
    ...(input.Status != null && { Status: input.Status }),
  };
};

const serializeAws_restJson1AwsDynamoDbTableStreamSpecification = (
  input: AwsDynamoDbTableStreamSpecification,
  context: __SerdeContext
): any => {
  return {
    ...(input.StreamEnabled != null && { StreamEnabled: input.StreamEnabled }),
    ...(input.StreamViewType != null && { StreamViewType: input.StreamViewType }),
  };
};

const serializeAws_restJson1AwsEc2EipDetails = (input: AwsEc2EipDetails, context: __SerdeContext): any => {
  return {
    ...(input.AllocationId != null && { AllocationId: input.AllocationId }),
    ...(input.AssociationId != null && { AssociationId: input.AssociationId }),
    ...(input.Domain != null && { Domain: input.Domain }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.NetworkBorderGroup != null && { NetworkBorderGroup: input.NetworkBorderGroup }),
    ...(input.NetworkInterfaceId != null && { NetworkInterfaceId: input.NetworkInterfaceId }),
    ...(input.NetworkInterfaceOwnerId != null && { NetworkInterfaceOwnerId: input.NetworkInterfaceOwnerId }),
    ...(input.PrivateIpAddress != null && { PrivateIpAddress: input.PrivateIpAddress }),
    ...(input.PublicIp != null && { PublicIp: input.PublicIp }),
    ...(input.PublicIpv4Pool != null && { PublicIpv4Pool: input.PublicIpv4Pool }),
  };
};

const serializeAws_restJson1AwsEc2InstanceDetails = (input: AwsEc2InstanceDetails, context: __SerdeContext): any => {
  return {
    ...(input.IamInstanceProfileArn != null && { IamInstanceProfileArn: input.IamInstanceProfileArn }),
    ...(input.ImageId != null && { ImageId: input.ImageId }),
    ...(input.IpV4Addresses != null && {
      IpV4Addresses: serializeAws_restJson1StringList(input.IpV4Addresses, context),
    }),
    ...(input.IpV6Addresses != null && {
      IpV6Addresses: serializeAws_restJson1StringList(input.IpV6Addresses, context),
    }),
    ...(input.KeyName != null && { KeyName: input.KeyName }),
    ...(input.LaunchedAt != null && { LaunchedAt: input.LaunchedAt }),
    ...(input.MetadataOptions != null && {
      MetadataOptions: serializeAws_restJson1AwsEc2InstanceMetadataOptions(input.MetadataOptions, context),
    }),
    ...(input.NetworkInterfaces != null && {
      NetworkInterfaces: serializeAws_restJson1AwsEc2InstanceNetworkInterfacesList(input.NetworkInterfaces, context),
    }),
    ...(input.SubnetId != null && { SubnetId: input.SubnetId }),
    ...(input.Type != null && { Type: input.Type }),
    ...(input.VirtualizationType != null && { VirtualizationType: input.VirtualizationType }),
    ...(input.VpcId != null && { VpcId: input.VpcId }),
  };
};

const serializeAws_restJson1AwsEc2InstanceMetadataOptions = (
  input: AwsEc2InstanceMetadataOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.HttpEndpoint != null && { HttpEndpoint: input.HttpEndpoint }),
    ...(input.HttpProtocolIpv6 != null && { HttpProtocolIpv6: input.HttpProtocolIpv6 }),
    ...(input.HttpPutResponseHopLimit != null && { HttpPutResponseHopLimit: input.HttpPutResponseHopLimit }),
    ...(input.HttpTokens != null && { HttpTokens: input.HttpTokens }),
    ...(input.InstanceMetadataTags != null && { InstanceMetadataTags: input.InstanceMetadataTags }),
  };
};

const serializeAws_restJson1AwsEc2InstanceNetworkInterfacesDetails = (
  input: AwsEc2InstanceNetworkInterfacesDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.NetworkInterfaceId != null && { NetworkInterfaceId: input.NetworkInterfaceId }),
  };
};

const serializeAws_restJson1AwsEc2InstanceNetworkInterfacesList = (
  input: AwsEc2InstanceNetworkInterfacesDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsEc2InstanceNetworkInterfacesDetails(entry, context);
    });
};

const serializeAws_restJson1AwsEc2NetworkAclAssociation = (
  input: AwsEc2NetworkAclAssociation,
  context: __SerdeContext
): any => {
  return {
    ...(input.NetworkAclAssociationId != null && { NetworkAclAssociationId: input.NetworkAclAssociationId }),
    ...(input.NetworkAclId != null && { NetworkAclId: input.NetworkAclId }),
    ...(input.SubnetId != null && { SubnetId: input.SubnetId }),
  };
};

const serializeAws_restJson1AwsEc2NetworkAclAssociationList = (
  input: AwsEc2NetworkAclAssociation[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsEc2NetworkAclAssociation(entry, context);
    });
};

const serializeAws_restJson1AwsEc2NetworkAclDetails = (
  input: AwsEc2NetworkAclDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Associations != null && {
      Associations: serializeAws_restJson1AwsEc2NetworkAclAssociationList(input.Associations, context),
    }),
    ...(input.Entries != null && { Entries: serializeAws_restJson1AwsEc2NetworkAclEntryList(input.Entries, context) }),
    ...(input.IsDefault != null && { IsDefault: input.IsDefault }),
    ...(input.NetworkAclId != null && { NetworkAclId: input.NetworkAclId }),
    ...(input.OwnerId != null && { OwnerId: input.OwnerId }),
    ...(input.VpcId != null && { VpcId: input.VpcId }),
  };
};

const serializeAws_restJson1AwsEc2NetworkAclEntry = (input: AwsEc2NetworkAclEntry, context: __SerdeContext): any => {
  return {
    ...(input.CidrBlock != null && { CidrBlock: input.CidrBlock }),
    ...(input.Egress != null && { Egress: input.Egress }),
    ...(input.IcmpTypeCode != null && {
      IcmpTypeCode: serializeAws_restJson1IcmpTypeCode(input.IcmpTypeCode, context),
    }),
    ...(input.Ipv6CidrBlock != null && { Ipv6CidrBlock: input.Ipv6CidrBlock }),
    ...(input.PortRange != null && { PortRange: serializeAws_restJson1PortRangeFromTo(input.PortRange, context) }),
    ...(input.Protocol != null && { Protocol: input.Protocol }),
    ...(input.RuleAction != null && { RuleAction: input.RuleAction }),
    ...(input.RuleNumber != null && { RuleNumber: input.RuleNumber }),
  };
};

const serializeAws_restJson1AwsEc2NetworkAclEntryList = (
  input: AwsEc2NetworkAclEntry[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsEc2NetworkAclEntry(entry, context);
    });
};

const serializeAws_restJson1AwsEc2NetworkInterfaceAttachment = (
  input: AwsEc2NetworkInterfaceAttachment,
  context: __SerdeContext
): any => {
  return {
    ...(input.AttachTime != null && { AttachTime: input.AttachTime }),
    ...(input.AttachmentId != null && { AttachmentId: input.AttachmentId }),
    ...(input.DeleteOnTermination != null && { DeleteOnTermination: input.DeleteOnTermination }),
    ...(input.DeviceIndex != null && { DeviceIndex: input.DeviceIndex }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.InstanceOwnerId != null && { InstanceOwnerId: input.InstanceOwnerId }),
    ...(input.Status != null && { Status: input.Status }),
  };
};

const serializeAws_restJson1AwsEc2NetworkInterfaceDetails = (
  input: AwsEc2NetworkInterfaceDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Attachment != null && {
      Attachment: serializeAws_restJson1AwsEc2NetworkInterfaceAttachment(input.Attachment, context),
    }),
    ...(input.IpV6Addresses != null && {
      IpV6Addresses: serializeAws_restJson1AwsEc2NetworkInterfaceIpV6AddressList(input.IpV6Addresses, context),
    }),
    ...(input.NetworkInterfaceId != null && { NetworkInterfaceId: input.NetworkInterfaceId }),
    ...(input.PrivateIpAddresses != null && {
      PrivateIpAddresses: serializeAws_restJson1AwsEc2NetworkInterfacePrivateIpAddressList(
        input.PrivateIpAddresses,
        context
      ),
    }),
    ...(input.PublicDnsName != null && { PublicDnsName: input.PublicDnsName }),
    ...(input.PublicIp != null && { PublicIp: input.PublicIp }),
    ...(input.SecurityGroups != null && {
      SecurityGroups: serializeAws_restJson1AwsEc2NetworkInterfaceSecurityGroupList(input.SecurityGroups, context),
    }),
    ...(input.SourceDestCheck != null && { SourceDestCheck: input.SourceDestCheck }),
  };
};

const serializeAws_restJson1AwsEc2NetworkInterfaceIpV6AddressDetail = (
  input: AwsEc2NetworkInterfaceIpV6AddressDetail,
  context: __SerdeContext
): any => {
  return {
    ...(input.IpV6Address != null && { IpV6Address: input.IpV6Address }),
  };
};

const serializeAws_restJson1AwsEc2NetworkInterfaceIpV6AddressList = (
  input: AwsEc2NetworkInterfaceIpV6AddressDetail[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsEc2NetworkInterfaceIpV6AddressDetail(entry, context);
    });
};

const serializeAws_restJson1AwsEc2NetworkInterfacePrivateIpAddressDetail = (
  input: AwsEc2NetworkInterfacePrivateIpAddressDetail,
  context: __SerdeContext
): any => {
  return {
    ...(input.PrivateDnsName != null && { PrivateDnsName: input.PrivateDnsName }),
    ...(input.PrivateIpAddress != null && { PrivateIpAddress: input.PrivateIpAddress }),
  };
};

const serializeAws_restJson1AwsEc2NetworkInterfacePrivateIpAddressList = (
  input: AwsEc2NetworkInterfacePrivateIpAddressDetail[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsEc2NetworkInterfacePrivateIpAddressDetail(entry, context);
    });
};

const serializeAws_restJson1AwsEc2NetworkInterfaceSecurityGroup = (
  input: AwsEc2NetworkInterfaceSecurityGroup,
  context: __SerdeContext
): any => {
  return {
    ...(input.GroupId != null && { GroupId: input.GroupId }),
    ...(input.GroupName != null && { GroupName: input.GroupName }),
  };
};

const serializeAws_restJson1AwsEc2NetworkInterfaceSecurityGroupList = (
  input: AwsEc2NetworkInterfaceSecurityGroup[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsEc2NetworkInterfaceSecurityGroup(entry, context);
    });
};

const serializeAws_restJson1AwsEc2SecurityGroupDetails = (
  input: AwsEc2SecurityGroupDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.GroupId != null && { GroupId: input.GroupId }),
    ...(input.GroupName != null && { GroupName: input.GroupName }),
    ...(input.IpPermissions != null && {
      IpPermissions: serializeAws_restJson1AwsEc2SecurityGroupIpPermissionList(input.IpPermissions, context),
    }),
    ...(input.IpPermissionsEgress != null && {
      IpPermissionsEgress: serializeAws_restJson1AwsEc2SecurityGroupIpPermissionList(
        input.IpPermissionsEgress,
        context
      ),
    }),
    ...(input.OwnerId != null && { OwnerId: input.OwnerId }),
    ...(input.VpcId != null && { VpcId: input.VpcId }),
  };
};

const serializeAws_restJson1AwsEc2SecurityGroupIpPermission = (
  input: AwsEc2SecurityGroupIpPermission,
  context: __SerdeContext
): any => {
  return {
    ...(input.FromPort != null && { FromPort: input.FromPort }),
    ...(input.IpProtocol != null && { IpProtocol: input.IpProtocol }),
    ...(input.IpRanges != null && {
      IpRanges: serializeAws_restJson1AwsEc2SecurityGroupIpRangeList(input.IpRanges, context),
    }),
    ...(input.Ipv6Ranges != null && {
      Ipv6Ranges: serializeAws_restJson1AwsEc2SecurityGroupIpv6RangeList(input.Ipv6Ranges, context),
    }),
    ...(input.PrefixListIds != null && {
      PrefixListIds: serializeAws_restJson1AwsEc2SecurityGroupPrefixListIdList(input.PrefixListIds, context),
    }),
    ...(input.ToPort != null && { ToPort: input.ToPort }),
    ...(input.UserIdGroupPairs != null && {
      UserIdGroupPairs: serializeAws_restJson1AwsEc2SecurityGroupUserIdGroupPairList(input.UserIdGroupPairs, context),
    }),
  };
};

const serializeAws_restJson1AwsEc2SecurityGroupIpPermissionList = (
  input: AwsEc2SecurityGroupIpPermission[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsEc2SecurityGroupIpPermission(entry, context);
    });
};

const serializeAws_restJson1AwsEc2SecurityGroupIpRange = (
  input: AwsEc2SecurityGroupIpRange,
  context: __SerdeContext
): any => {
  return {
    ...(input.CidrIp != null && { CidrIp: input.CidrIp }),
  };
};

const serializeAws_restJson1AwsEc2SecurityGroupIpRangeList = (
  input: AwsEc2SecurityGroupIpRange[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsEc2SecurityGroupIpRange(entry, context);
    });
};

const serializeAws_restJson1AwsEc2SecurityGroupIpv6Range = (
  input: AwsEc2SecurityGroupIpv6Range,
  context: __SerdeContext
): any => {
  return {
    ...(input.CidrIpv6 != null && { CidrIpv6: input.CidrIpv6 }),
  };
};

const serializeAws_restJson1AwsEc2SecurityGroupIpv6RangeList = (
  input: AwsEc2SecurityGroupIpv6Range[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsEc2SecurityGroupIpv6Range(entry, context);
    });
};

const serializeAws_restJson1AwsEc2SecurityGroupPrefixListId = (
  input: AwsEc2SecurityGroupPrefixListId,
  context: __SerdeContext
): any => {
  return {
    ...(input.PrefixListId != null && { PrefixListId: input.PrefixListId }),
  };
};

const serializeAws_restJson1AwsEc2SecurityGroupPrefixListIdList = (
  input: AwsEc2SecurityGroupPrefixListId[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsEc2SecurityGroupPrefixListId(entry, context);
    });
};

const serializeAws_restJson1AwsEc2SecurityGroupUserIdGroupPair = (
  input: AwsEc2SecurityGroupUserIdGroupPair,
  context: __SerdeContext
): any => {
  return {
    ...(input.GroupId != null && { GroupId: input.GroupId }),
    ...(input.GroupName != null && { GroupName: input.GroupName }),
    ...(input.PeeringStatus != null && { PeeringStatus: input.PeeringStatus }),
    ...(input.UserId != null && { UserId: input.UserId }),
    ...(input.VpcId != null && { VpcId: input.VpcId }),
    ...(input.VpcPeeringConnectionId != null && { VpcPeeringConnectionId: input.VpcPeeringConnectionId }),
  };
};

const serializeAws_restJson1AwsEc2SecurityGroupUserIdGroupPairList = (
  input: AwsEc2SecurityGroupUserIdGroupPair[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsEc2SecurityGroupUserIdGroupPair(entry, context);
    });
};

const serializeAws_restJson1AwsEc2SubnetDetails = (input: AwsEc2SubnetDetails, context: __SerdeContext): any => {
  return {
    ...(input.AssignIpv6AddressOnCreation != null && {
      AssignIpv6AddressOnCreation: input.AssignIpv6AddressOnCreation,
    }),
    ...(input.AvailabilityZone != null && { AvailabilityZone: input.AvailabilityZone }),
    ...(input.AvailabilityZoneId != null && { AvailabilityZoneId: input.AvailabilityZoneId }),
    ...(input.AvailableIpAddressCount != null && { AvailableIpAddressCount: input.AvailableIpAddressCount }),
    ...(input.CidrBlock != null && { CidrBlock: input.CidrBlock }),
    ...(input.DefaultForAz != null && { DefaultForAz: input.DefaultForAz }),
    ...(input.Ipv6CidrBlockAssociationSet != null && {
      Ipv6CidrBlockAssociationSet: serializeAws_restJson1Ipv6CidrBlockAssociationList(
        input.Ipv6CidrBlockAssociationSet,
        context
      ),
    }),
    ...(input.MapPublicIpOnLaunch != null && { MapPublicIpOnLaunch: input.MapPublicIpOnLaunch }),
    ...(input.OwnerId != null && { OwnerId: input.OwnerId }),
    ...(input.State != null && { State: input.State }),
    ...(input.SubnetArn != null && { SubnetArn: input.SubnetArn }),
    ...(input.SubnetId != null && { SubnetId: input.SubnetId }),
    ...(input.VpcId != null && { VpcId: input.VpcId }),
  };
};

const serializeAws_restJson1AwsEc2TransitGatewayDetails = (
  input: AwsEc2TransitGatewayDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AmazonSideAsn != null && { AmazonSideAsn: input.AmazonSideAsn }),
    ...(input.AssociationDefaultRouteTableId != null && {
      AssociationDefaultRouteTableId: input.AssociationDefaultRouteTableId,
    }),
    ...(input.AutoAcceptSharedAttachments != null && {
      AutoAcceptSharedAttachments: input.AutoAcceptSharedAttachments,
    }),
    ...(input.DefaultRouteTableAssociation != null && {
      DefaultRouteTableAssociation: input.DefaultRouteTableAssociation,
    }),
    ...(input.DefaultRouteTablePropagation != null && {
      DefaultRouteTablePropagation: input.DefaultRouteTablePropagation,
    }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.DnsSupport != null && { DnsSupport: input.DnsSupport }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.MulticastSupport != null && { MulticastSupport: input.MulticastSupport }),
    ...(input.PropagationDefaultRouteTableId != null && {
      PropagationDefaultRouteTableId: input.PropagationDefaultRouteTableId,
    }),
    ...(input.TransitGatewayCidrBlocks != null && {
      TransitGatewayCidrBlocks: serializeAws_restJson1NonEmptyStringList(input.TransitGatewayCidrBlocks, context),
    }),
    ...(input.VpnEcmpSupport != null && { VpnEcmpSupport: input.VpnEcmpSupport }),
  };
};

const serializeAws_restJson1AwsEc2VolumeAttachment = (input: AwsEc2VolumeAttachment, context: __SerdeContext): any => {
  return {
    ...(input.AttachTime != null && { AttachTime: input.AttachTime }),
    ...(input.DeleteOnTermination != null && { DeleteOnTermination: input.DeleteOnTermination }),
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
    ...(input.Status != null && { Status: input.Status }),
  };
};

const serializeAws_restJson1AwsEc2VolumeAttachmentList = (
  input: AwsEc2VolumeAttachment[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsEc2VolumeAttachment(entry, context);
    });
};

const serializeAws_restJson1AwsEc2VolumeDetails = (input: AwsEc2VolumeDetails, context: __SerdeContext): any => {
  return {
    ...(input.Attachments != null && {
      Attachments: serializeAws_restJson1AwsEc2VolumeAttachmentList(input.Attachments, context),
    }),
    ...(input.CreateTime != null && { CreateTime: input.CreateTime }),
    ...(input.DeviceName != null && { DeviceName: input.DeviceName }),
    ...(input.Encrypted != null && { Encrypted: input.Encrypted }),
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.Size != null && { Size: input.Size }),
    ...(input.SnapshotId != null && { SnapshotId: input.SnapshotId }),
    ...(input.Status != null && { Status: input.Status }),
    ...(input.VolumeId != null && { VolumeId: input.VolumeId }),
    ...(input.VolumeScanStatus != null && { VolumeScanStatus: input.VolumeScanStatus }),
    ...(input.VolumeType != null && { VolumeType: input.VolumeType }),
  };
};

const serializeAws_restJson1AwsEc2VpcDetails = (input: AwsEc2VpcDetails, context: __SerdeContext): any => {
  return {
    ...(input.CidrBlockAssociationSet != null && {
      CidrBlockAssociationSet: serializeAws_restJson1CidrBlockAssociationList(input.CidrBlockAssociationSet, context),
    }),
    ...(input.DhcpOptionsId != null && { DhcpOptionsId: input.DhcpOptionsId }),
    ...(input.Ipv6CidrBlockAssociationSet != null && {
      Ipv6CidrBlockAssociationSet: serializeAws_restJson1Ipv6CidrBlockAssociationList(
        input.Ipv6CidrBlockAssociationSet,
        context
      ),
    }),
    ...(input.State != null && { State: input.State }),
  };
};

const serializeAws_restJson1AwsEc2VpcEndpointServiceDetails = (
  input: AwsEc2VpcEndpointServiceDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptanceRequired != null && { AcceptanceRequired: input.AcceptanceRequired }),
    ...(input.AvailabilityZones != null && {
      AvailabilityZones: serializeAws_restJson1NonEmptyStringList(input.AvailabilityZones, context),
    }),
    ...(input.BaseEndpointDnsNames != null && {
      BaseEndpointDnsNames: serializeAws_restJson1NonEmptyStringList(input.BaseEndpointDnsNames, context),
    }),
    ...(input.GatewayLoadBalancerArns != null && {
      GatewayLoadBalancerArns: serializeAws_restJson1NonEmptyStringList(input.GatewayLoadBalancerArns, context),
    }),
    ...(input.ManagesVpcEndpoints != null && { ManagesVpcEndpoints: input.ManagesVpcEndpoints }),
    ...(input.NetworkLoadBalancerArns != null && {
      NetworkLoadBalancerArns: serializeAws_restJson1NonEmptyStringList(input.NetworkLoadBalancerArns, context),
    }),
    ...(input.PrivateDnsName != null && { PrivateDnsName: input.PrivateDnsName }),
    ...(input.ServiceId != null && { ServiceId: input.ServiceId }),
    ...(input.ServiceName != null && { ServiceName: input.ServiceName }),
    ...(input.ServiceState != null && { ServiceState: input.ServiceState }),
    ...(input.ServiceType != null && {
      ServiceType: serializeAws_restJson1AwsEc2VpcEndpointServiceServiceTypeList(input.ServiceType, context),
    }),
  };
};

const serializeAws_restJson1AwsEc2VpcEndpointServiceServiceTypeDetails = (
  input: AwsEc2VpcEndpointServiceServiceTypeDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.ServiceType != null && { ServiceType: input.ServiceType }),
  };
};

const serializeAws_restJson1AwsEc2VpcEndpointServiceServiceTypeList = (
  input: AwsEc2VpcEndpointServiceServiceTypeDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsEc2VpcEndpointServiceServiceTypeDetails(entry, context);
    });
};

const serializeAws_restJson1AwsEc2VpcPeeringConnectionDetails = (
  input: AwsEc2VpcPeeringConnectionDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccepterVpcInfo != null && {
      AccepterVpcInfo: serializeAws_restJson1AwsEc2VpcPeeringConnectionVpcInfoDetails(input.AccepterVpcInfo, context),
    }),
    ...(input.ExpirationTime != null && { ExpirationTime: input.ExpirationTime }),
    ...(input.RequesterVpcInfo != null && {
      RequesterVpcInfo: serializeAws_restJson1AwsEc2VpcPeeringConnectionVpcInfoDetails(input.RequesterVpcInfo, context),
    }),
    ...(input.Status != null && {
      Status: serializeAws_restJson1AwsEc2VpcPeeringConnectionStatusDetails(input.Status, context),
    }),
    ...(input.VpcPeeringConnectionId != null && { VpcPeeringConnectionId: input.VpcPeeringConnectionId }),
  };
};

const serializeAws_restJson1AwsEc2VpcPeeringConnectionStatusDetails = (
  input: AwsEc2VpcPeeringConnectionStatusDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Code != null && { Code: input.Code }),
    ...(input.Message != null && { Message: input.Message }),
  };
};

const serializeAws_restJson1AwsEc2VpcPeeringConnectionVpcInfoDetails = (
  input: AwsEc2VpcPeeringConnectionVpcInfoDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.CidrBlock != null && { CidrBlock: input.CidrBlock }),
    ...(input.CidrBlockSet != null && {
      CidrBlockSet: serializeAws_restJson1VpcInfoCidrBlockSetList(input.CidrBlockSet, context),
    }),
    ...(input.Ipv6CidrBlockSet != null && {
      Ipv6CidrBlockSet: serializeAws_restJson1VpcInfoIpv6CidrBlockSetList(input.Ipv6CidrBlockSet, context),
    }),
    ...(input.OwnerId != null && { OwnerId: input.OwnerId }),
    ...(input.PeeringOptions != null && {
      PeeringOptions: serializeAws_restJson1VpcInfoPeeringOptionsDetails(input.PeeringOptions, context),
    }),
    ...(input.Region != null && { Region: input.Region }),
    ...(input.VpcId != null && { VpcId: input.VpcId }),
  };
};

const serializeAws_restJson1AwsEc2VpnConnectionDetails = (
  input: AwsEc2VpnConnectionDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Category != null && { Category: input.Category }),
    ...(input.CustomerGatewayConfiguration != null && {
      CustomerGatewayConfiguration: input.CustomerGatewayConfiguration,
    }),
    ...(input.CustomerGatewayId != null && { CustomerGatewayId: input.CustomerGatewayId }),
    ...(input.Options != null && {
      Options: serializeAws_restJson1AwsEc2VpnConnectionOptionsDetails(input.Options, context),
    }),
    ...(input.Routes != null && { Routes: serializeAws_restJson1AwsEc2VpnConnectionRoutesList(input.Routes, context) }),
    ...(input.State != null && { State: input.State }),
    ...(input.TransitGatewayId != null && { TransitGatewayId: input.TransitGatewayId }),
    ...(input.Type != null && { Type: input.Type }),
    ...(input.VgwTelemetry != null && {
      VgwTelemetry: serializeAws_restJson1AwsEc2VpnConnectionVgwTelemetryList(input.VgwTelemetry, context),
    }),
    ...(input.VpnConnectionId != null && { VpnConnectionId: input.VpnConnectionId }),
    ...(input.VpnGatewayId != null && { VpnGatewayId: input.VpnGatewayId }),
  };
};

const serializeAws_restJson1AwsEc2VpnConnectionOptionsDetails = (
  input: AwsEc2VpnConnectionOptionsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.StaticRoutesOnly != null && { StaticRoutesOnly: input.StaticRoutesOnly }),
    ...(input.TunnelOptions != null && {
      TunnelOptions: serializeAws_restJson1AwsEc2VpnConnectionOptionsTunnelOptionsList(input.TunnelOptions, context),
    }),
  };
};

const serializeAws_restJson1AwsEc2VpnConnectionOptionsTunnelOptionsDetails = (
  input: AwsEc2VpnConnectionOptionsTunnelOptionsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.DpdTimeoutSeconds != null && { DpdTimeoutSeconds: input.DpdTimeoutSeconds }),
    ...(input.IkeVersions != null && {
      IkeVersions: serializeAws_restJson1NonEmptyStringList(input.IkeVersions, context),
    }),
    ...(input.OutsideIpAddress != null && { OutsideIpAddress: input.OutsideIpAddress }),
    ...(input.Phase1DhGroupNumbers != null && {
      Phase1DhGroupNumbers: serializeAws_restJson1IntegerList(input.Phase1DhGroupNumbers, context),
    }),
    ...(input.Phase1EncryptionAlgorithms != null && {
      Phase1EncryptionAlgorithms: serializeAws_restJson1NonEmptyStringList(input.Phase1EncryptionAlgorithms, context),
    }),
    ...(input.Phase1IntegrityAlgorithms != null && {
      Phase1IntegrityAlgorithms: serializeAws_restJson1NonEmptyStringList(input.Phase1IntegrityAlgorithms, context),
    }),
    ...(input.Phase1LifetimeSeconds != null && { Phase1LifetimeSeconds: input.Phase1LifetimeSeconds }),
    ...(input.Phase2DhGroupNumbers != null && {
      Phase2DhGroupNumbers: serializeAws_restJson1IntegerList(input.Phase2DhGroupNumbers, context),
    }),
    ...(input.Phase2EncryptionAlgorithms != null && {
      Phase2EncryptionAlgorithms: serializeAws_restJson1NonEmptyStringList(input.Phase2EncryptionAlgorithms, context),
    }),
    ...(input.Phase2IntegrityAlgorithms != null && {
      Phase2IntegrityAlgorithms: serializeAws_restJson1NonEmptyStringList(input.Phase2IntegrityAlgorithms, context),
    }),
    ...(input.Phase2LifetimeSeconds != null && { Phase2LifetimeSeconds: input.Phase2LifetimeSeconds }),
    ...(input.PreSharedKey != null && { PreSharedKey: input.PreSharedKey }),
    ...(input.RekeyFuzzPercentage != null && { RekeyFuzzPercentage: input.RekeyFuzzPercentage }),
    ...(input.RekeyMarginTimeSeconds != null && { RekeyMarginTimeSeconds: input.RekeyMarginTimeSeconds }),
    ...(input.ReplayWindowSize != null && { ReplayWindowSize: input.ReplayWindowSize }),
    ...(input.TunnelInsideCidr != null && { TunnelInsideCidr: input.TunnelInsideCidr }),
  };
};

const serializeAws_restJson1AwsEc2VpnConnectionOptionsTunnelOptionsList = (
  input: AwsEc2VpnConnectionOptionsTunnelOptionsDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsEc2VpnConnectionOptionsTunnelOptionsDetails(entry, context);
    });
};

const serializeAws_restJson1AwsEc2VpnConnectionRoutesDetails = (
  input: AwsEc2VpnConnectionRoutesDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.DestinationCidrBlock != null && { DestinationCidrBlock: input.DestinationCidrBlock }),
    ...(input.State != null && { State: input.State }),
  };
};

const serializeAws_restJson1AwsEc2VpnConnectionRoutesList = (
  input: AwsEc2VpnConnectionRoutesDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsEc2VpnConnectionRoutesDetails(entry, context);
    });
};

const serializeAws_restJson1AwsEc2VpnConnectionVgwTelemetryDetails = (
  input: AwsEc2VpnConnectionVgwTelemetryDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AcceptedRouteCount != null && { AcceptedRouteCount: input.AcceptedRouteCount }),
    ...(input.CertificateArn != null && { CertificateArn: input.CertificateArn }),
    ...(input.LastStatusChange != null && { LastStatusChange: input.LastStatusChange }),
    ...(input.OutsideIpAddress != null && { OutsideIpAddress: input.OutsideIpAddress }),
    ...(input.Status != null && { Status: input.Status }),
    ...(input.StatusMessage != null && { StatusMessage: input.StatusMessage }),
  };
};

const serializeAws_restJson1AwsEc2VpnConnectionVgwTelemetryList = (
  input: AwsEc2VpnConnectionVgwTelemetryDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsEc2VpnConnectionVgwTelemetryDetails(entry, context);
    });
};

const serializeAws_restJson1AwsEcrContainerImageDetails = (
  input: AwsEcrContainerImageDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Architecture != null && { Architecture: input.Architecture }),
    ...(input.ImageDigest != null && { ImageDigest: input.ImageDigest }),
    ...(input.ImagePublishedAt != null && { ImagePublishedAt: input.ImagePublishedAt }),
    ...(input.ImageTags != null && { ImageTags: serializeAws_restJson1NonEmptyStringList(input.ImageTags, context) }),
    ...(input.RegistryId != null && { RegistryId: input.RegistryId }),
    ...(input.RepositoryName != null && { RepositoryName: input.RepositoryName }),
  };
};

const serializeAws_restJson1AwsEcrRepositoryDetails = (
  input: AwsEcrRepositoryDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Arn != null && { Arn: input.Arn }),
    ...(input.ImageScanningConfiguration != null && {
      ImageScanningConfiguration: serializeAws_restJson1AwsEcrRepositoryImageScanningConfigurationDetails(
        input.ImageScanningConfiguration,
        context
      ),
    }),
    ...(input.ImageTagMutability != null && { ImageTagMutability: input.ImageTagMutability }),
    ...(input.LifecyclePolicy != null && {
      LifecyclePolicy: serializeAws_restJson1AwsEcrRepositoryLifecyclePolicyDetails(input.LifecyclePolicy, context),
    }),
    ...(input.RepositoryName != null && { RepositoryName: input.RepositoryName }),
    ...(input.RepositoryPolicyText != null && { RepositoryPolicyText: input.RepositoryPolicyText }),
  };
};

const serializeAws_restJson1AwsEcrRepositoryImageScanningConfigurationDetails = (
  input: AwsEcrRepositoryImageScanningConfigurationDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.ScanOnPush != null && { ScanOnPush: input.ScanOnPush }),
  };
};

const serializeAws_restJson1AwsEcrRepositoryLifecyclePolicyDetails = (
  input: AwsEcrRepositoryLifecyclePolicyDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.LifecyclePolicyText != null && { LifecyclePolicyText: input.LifecyclePolicyText }),
    ...(input.RegistryId != null && { RegistryId: input.RegistryId }),
  };
};

const serializeAws_restJson1AwsEcsClusterClusterSettingsDetails = (
  input: AwsEcsClusterClusterSettingsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_restJson1AwsEcsClusterClusterSettingsList = (
  input: AwsEcsClusterClusterSettingsDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsEcsClusterClusterSettingsDetails(entry, context);
    });
};

const serializeAws_restJson1AwsEcsClusterConfigurationDetails = (
  input: AwsEcsClusterConfigurationDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.ExecuteCommandConfiguration != null && {
      ExecuteCommandConfiguration: serializeAws_restJson1AwsEcsClusterConfigurationExecuteCommandConfigurationDetails(
        input.ExecuteCommandConfiguration,
        context
      ),
    }),
  };
};

const serializeAws_restJson1AwsEcsClusterConfigurationExecuteCommandConfigurationDetails = (
  input: AwsEcsClusterConfigurationExecuteCommandConfigurationDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.LogConfiguration != null && {
      LogConfiguration:
        serializeAws_restJson1AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails(
          input.LogConfiguration,
          context
        ),
    }),
    ...(input.Logging != null && { Logging: input.Logging }),
  };
};

const serializeAws_restJson1AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails = (
  input: AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.CloudWatchEncryptionEnabled != null && {
      CloudWatchEncryptionEnabled: input.CloudWatchEncryptionEnabled,
    }),
    ...(input.CloudWatchLogGroupName != null && { CloudWatchLogGroupName: input.CloudWatchLogGroupName }),
    ...(input.S3BucketName != null && { S3BucketName: input.S3BucketName }),
    ...(input.S3EncryptionEnabled != null && { S3EncryptionEnabled: input.S3EncryptionEnabled }),
    ...(input.S3KeyPrefix != null && { S3KeyPrefix: input.S3KeyPrefix }),
  };
};

const serializeAws_restJson1AwsEcsClusterDefaultCapacityProviderStrategyDetails = (
  input: AwsEcsClusterDefaultCapacityProviderStrategyDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Base != null && { Base: input.Base }),
    ...(input.CapacityProvider != null && { CapacityProvider: input.CapacityProvider }),
    ...(input.Weight != null && { Weight: input.Weight }),
  };
};

const serializeAws_restJson1AwsEcsClusterDefaultCapacityProviderStrategyList = (
  input: AwsEcsClusterDefaultCapacityProviderStrategyDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsEcsClusterDefaultCapacityProviderStrategyDetails(entry, context);
    });
};

const serializeAws_restJson1AwsEcsClusterDetails = (input: AwsEcsClusterDetails, context: __SerdeContext): any => {
  return {
    ...(input.ActiveServicesCount != null && { ActiveServicesCount: input.ActiveServicesCount }),
    ...(input.CapacityProviders != null && {
      CapacityProviders: serializeAws_restJson1NonEmptyStringList(input.CapacityProviders, context),
    }),
    ...(input.ClusterArn != null && { ClusterArn: input.ClusterArn }),
    ...(input.ClusterName != null && { ClusterName: input.ClusterName }),
    ...(input.ClusterSettings != null && {
      ClusterSettings: serializeAws_restJson1AwsEcsClusterClusterSettingsList(input.ClusterSettings, context),
    }),
    ...(input.Configuration != null && {
      Configuration: serializeAws_restJson1AwsEcsClusterConfigurationDetails(input.Configuration, context),
    }),
    ...(input.DefaultCapacityProviderStrategy != null && {
      DefaultCapacityProviderStrategy: serializeAws_restJson1AwsEcsClusterDefaultCapacityProviderStrategyList(
        input.DefaultCapacityProviderStrategy,
        context
      ),
    }),
    ...(input.RegisteredContainerInstancesCount != null && {
      RegisteredContainerInstancesCount: input.RegisteredContainerInstancesCount,
    }),
    ...(input.RunningTasksCount != null && { RunningTasksCount: input.RunningTasksCount }),
    ...(input.Status != null && { Status: input.Status }),
  };
};

const serializeAws_restJson1AwsEcsContainerDetails = (input: AwsEcsContainerDetails, context: __SerdeContext): any => {
  return {
    ...(input.Image != null && { Image: input.Image }),
    ...(input.MountPoints != null && {
      MountPoints: serializeAws_restJson1AwsMountPointList(input.MountPoints, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Privileged != null && { Privileged: input.Privileged }),
  };
};

const serializeAws_restJson1AwsEcsContainerDetailsList = (
  input: AwsEcsContainerDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsEcsContainerDetails(entry, context);
    });
};

const serializeAws_restJson1AwsEcsServiceCapacityProviderStrategyDetails = (
  input: AwsEcsServiceCapacityProviderStrategyDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Base != null && { Base: input.Base }),
    ...(input.CapacityProvider != null && { CapacityProvider: input.CapacityProvider }),
    ...(input.Weight != null && { Weight: input.Weight }),
  };
};

const serializeAws_restJson1AwsEcsServiceCapacityProviderStrategyList = (
  input: AwsEcsServiceCapacityProviderStrategyDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsEcsServiceCapacityProviderStrategyDetails(entry, context);
    });
};

const serializeAws_restJson1AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails = (
  input: AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Enable != null && { Enable: input.Enable }),
    ...(input.Rollback != null && { Rollback: input.Rollback }),
  };
};

const serializeAws_restJson1AwsEcsServiceDeploymentConfigurationDetails = (
  input: AwsEcsServiceDeploymentConfigurationDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeploymentCircuitBreaker != null && {
      DeploymentCircuitBreaker:
        serializeAws_restJson1AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails(
          input.DeploymentCircuitBreaker,
          context
        ),
    }),
    ...(input.MaximumPercent != null && { MaximumPercent: input.MaximumPercent }),
    ...(input.MinimumHealthyPercent != null && { MinimumHealthyPercent: input.MinimumHealthyPercent }),
  };
};

const serializeAws_restJson1AwsEcsServiceDeploymentControllerDetails = (
  input: AwsEcsServiceDeploymentControllerDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_restJson1AwsEcsServiceDetails = (input: AwsEcsServiceDetails, context: __SerdeContext): any => {
  return {
    ...(input.CapacityProviderStrategy != null && {
      CapacityProviderStrategy: serializeAws_restJson1AwsEcsServiceCapacityProviderStrategyList(
        input.CapacityProviderStrategy,
        context
      ),
    }),
    ...(input.Cluster != null && { Cluster: input.Cluster }),
    ...(input.DeploymentConfiguration != null && {
      DeploymentConfiguration: serializeAws_restJson1AwsEcsServiceDeploymentConfigurationDetails(
        input.DeploymentConfiguration,
        context
      ),
    }),
    ...(input.DeploymentController != null && {
      DeploymentController: serializeAws_restJson1AwsEcsServiceDeploymentControllerDetails(
        input.DeploymentController,
        context
      ),
    }),
    ...(input.DesiredCount != null && { DesiredCount: input.DesiredCount }),
    ...(input.EnableEcsManagedTags != null && { EnableEcsManagedTags: input.EnableEcsManagedTags }),
    ...(input.EnableExecuteCommand != null && { EnableExecuteCommand: input.EnableExecuteCommand }),
    ...(input.HealthCheckGracePeriodSeconds != null && {
      HealthCheckGracePeriodSeconds: input.HealthCheckGracePeriodSeconds,
    }),
    ...(input.LaunchType != null && { LaunchType: input.LaunchType }),
    ...(input.LoadBalancers != null && {
      LoadBalancers: serializeAws_restJson1AwsEcsServiceLoadBalancersList(input.LoadBalancers, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.NetworkConfiguration != null && {
      NetworkConfiguration: serializeAws_restJson1AwsEcsServiceNetworkConfigurationDetails(
        input.NetworkConfiguration,
        context
      ),
    }),
    ...(input.PlacementConstraints != null && {
      PlacementConstraints: serializeAws_restJson1AwsEcsServicePlacementConstraintsList(
        input.PlacementConstraints,
        context
      ),
    }),
    ...(input.PlacementStrategies != null && {
      PlacementStrategies: serializeAws_restJson1AwsEcsServicePlacementStrategiesList(
        input.PlacementStrategies,
        context
      ),
    }),
    ...(input.PlatformVersion != null && { PlatformVersion: input.PlatformVersion }),
    ...(input.PropagateTags != null && { PropagateTags: input.PropagateTags }),
    ...(input.Role != null && { Role: input.Role }),
    ...(input.SchedulingStrategy != null && { SchedulingStrategy: input.SchedulingStrategy }),
    ...(input.ServiceArn != null && { ServiceArn: input.ServiceArn }),
    ...(input.ServiceName != null && { ServiceName: input.ServiceName }),
    ...(input.ServiceRegistries != null && {
      ServiceRegistries: serializeAws_restJson1AwsEcsServiceServiceRegistriesList(input.ServiceRegistries, context),
    }),
    ...(input.TaskDefinition != null && { TaskDefinition: input.TaskDefinition }),
  };
};

const serializeAws_restJson1AwsEcsServiceLoadBalancersDetails = (
  input: AwsEcsServiceLoadBalancersDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.ContainerName != null && { ContainerName: input.ContainerName }),
    ...(input.ContainerPort != null && { ContainerPort: input.ContainerPort }),
    ...(input.LoadBalancerName != null && { LoadBalancerName: input.LoadBalancerName }),
    ...(input.TargetGroupArn != null && { TargetGroupArn: input.TargetGroupArn }),
  };
};

const serializeAws_restJson1AwsEcsServiceLoadBalancersList = (
  input: AwsEcsServiceLoadBalancersDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsEcsServiceLoadBalancersDetails(entry, context);
    });
};

const serializeAws_restJson1AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails = (
  input: AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AssignPublicIp != null && { AssignPublicIp: input.AssignPublicIp }),
    ...(input.SecurityGroups != null && {
      SecurityGroups: serializeAws_restJson1NonEmptyStringList(input.SecurityGroups, context),
    }),
    ...(input.Subnets != null && { Subnets: serializeAws_restJson1NonEmptyStringList(input.Subnets, context) }),
  };
};

const serializeAws_restJson1AwsEcsServiceNetworkConfigurationDetails = (
  input: AwsEcsServiceNetworkConfigurationDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AwsVpcConfiguration != null && {
      AwsVpcConfiguration: serializeAws_restJson1AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails(
        input.AwsVpcConfiguration,
        context
      ),
    }),
  };
};

const serializeAws_restJson1AwsEcsServicePlacementConstraintsDetails = (
  input: AwsEcsServicePlacementConstraintsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Expression != null && { Expression: input.Expression }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_restJson1AwsEcsServicePlacementConstraintsList = (
  input: AwsEcsServicePlacementConstraintsDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsEcsServicePlacementConstraintsDetails(entry, context);
    });
};

const serializeAws_restJson1AwsEcsServicePlacementStrategiesDetails = (
  input: AwsEcsServicePlacementStrategiesDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Field != null && { Field: input.Field }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_restJson1AwsEcsServicePlacementStrategiesList = (
  input: AwsEcsServicePlacementStrategiesDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsEcsServicePlacementStrategiesDetails(entry, context);
    });
};

const serializeAws_restJson1AwsEcsServiceServiceRegistriesDetails = (
  input: AwsEcsServiceServiceRegistriesDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.ContainerName != null && { ContainerName: input.ContainerName }),
    ...(input.ContainerPort != null && { ContainerPort: input.ContainerPort }),
    ...(input.Port != null && { Port: input.Port }),
    ...(input.RegistryArn != null && { RegistryArn: input.RegistryArn }),
  };
};

const serializeAws_restJson1AwsEcsServiceServiceRegistriesList = (
  input: AwsEcsServiceServiceRegistriesDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsEcsServiceServiceRegistriesDetails(entry, context);
    });
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails = (
  input: AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Condition != null && { Condition: input.Condition }),
    ...(input.ContainerName != null && { ContainerName: input.ContainerName }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsDependsOnList = (
  input: AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails(entry, context);
    });
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsDetails = (
  input: AwsEcsTaskDefinitionContainerDefinitionsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Command != null && { Command: serializeAws_restJson1NonEmptyStringList(input.Command, context) }),
    ...(input.Cpu != null && { Cpu: input.Cpu }),
    ...(input.DependsOn != null && {
      DependsOn: serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsDependsOnList(input.DependsOn, context),
    }),
    ...(input.DisableNetworking != null && { DisableNetworking: input.DisableNetworking }),
    ...(input.DnsSearchDomains != null && {
      DnsSearchDomains: serializeAws_restJson1NonEmptyStringList(input.DnsSearchDomains, context),
    }),
    ...(input.DnsServers != null && {
      DnsServers: serializeAws_restJson1NonEmptyStringList(input.DnsServers, context),
    }),
    ...(input.DockerLabels != null && { DockerLabels: serializeAws_restJson1FieldMap(input.DockerLabels, context) }),
    ...(input.DockerSecurityOptions != null && {
      DockerSecurityOptions: serializeAws_restJson1NonEmptyStringList(input.DockerSecurityOptions, context),
    }),
    ...(input.EntryPoint != null && {
      EntryPoint: serializeAws_restJson1NonEmptyStringList(input.EntryPoint, context),
    }),
    ...(input.Environment != null && {
      Environment: serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsEnvironmentList(
        input.Environment,
        context
      ),
    }),
    ...(input.EnvironmentFiles != null && {
      EnvironmentFiles: serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList(
        input.EnvironmentFiles,
        context
      ),
    }),
    ...(input.Essential != null && { Essential: input.Essential }),
    ...(input.ExtraHosts != null && {
      ExtraHosts: serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsExtraHostsList(
        input.ExtraHosts,
        context
      ),
    }),
    ...(input.FirelensConfiguration != null && {
      FirelensConfiguration: serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails(
        input.FirelensConfiguration,
        context
      ),
    }),
    ...(input.HealthCheck != null && {
      HealthCheck: serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails(
        input.HealthCheck,
        context
      ),
    }),
    ...(input.Hostname != null && { Hostname: input.Hostname }),
    ...(input.Image != null && { Image: input.Image }),
    ...(input.Interactive != null && { Interactive: input.Interactive }),
    ...(input.Links != null && { Links: serializeAws_restJson1NonEmptyStringList(input.Links, context) }),
    ...(input.LinuxParameters != null && {
      LinuxParameters: serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails(
        input.LinuxParameters,
        context
      ),
    }),
    ...(input.LogConfiguration != null && {
      LogConfiguration: serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails(
        input.LogConfiguration,
        context
      ),
    }),
    ...(input.Memory != null && { Memory: input.Memory }),
    ...(input.MemoryReservation != null && { MemoryReservation: input.MemoryReservation }),
    ...(input.MountPoints != null && {
      MountPoints: serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsMountPointsList(
        input.MountPoints,
        context
      ),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.PortMappings != null && {
      PortMappings: serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsPortMappingsList(
        input.PortMappings,
        context
      ),
    }),
    ...(input.Privileged != null && { Privileged: input.Privileged }),
    ...(input.PseudoTerminal != null && { PseudoTerminal: input.PseudoTerminal }),
    ...(input.ReadonlyRootFilesystem != null && { ReadonlyRootFilesystem: input.ReadonlyRootFilesystem }),
    ...(input.RepositoryCredentials != null && {
      RepositoryCredentials: serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails(
        input.RepositoryCredentials,
        context
      ),
    }),
    ...(input.ResourceRequirements != null && {
      ResourceRequirements: serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsList(
        input.ResourceRequirements,
        context
      ),
    }),
    ...(input.Secrets != null && {
      Secrets: serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsSecretsList(input.Secrets, context),
    }),
    ...(input.StartTimeout != null && { StartTimeout: input.StartTimeout }),
    ...(input.StopTimeout != null && { StopTimeout: input.StopTimeout }),
    ...(input.SystemControls != null && {
      SystemControls: serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsSystemControlsList(
        input.SystemControls,
        context
      ),
    }),
    ...(input.Ulimits != null && {
      Ulimits: serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsUlimitsList(input.Ulimits, context),
    }),
    ...(input.User != null && { User: input.User }),
    ...(input.VolumesFrom != null && {
      VolumesFrom: serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsVolumesFromList(
        input.VolumesFrom,
        context
      ),
    }),
    ...(input.WorkingDirectory != null && { WorkingDirectory: input.WorkingDirectory }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails = (
  input: AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails = (
  input: AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Type != null && { Type: input.Type }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList = (
  input: AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails(entry, context);
    });
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsEnvironmentList = (
  input: AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails(entry, context);
    });
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails = (
  input: AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Hostname != null && { Hostname: input.Hostname }),
    ...(input.IpAddress != null && { IpAddress: input.IpAddress }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsExtraHostsList = (
  input: AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails(entry, context);
    });
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails = (
  input: AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Options != null && { Options: serializeAws_restJson1FieldMap(input.Options, context) }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails = (
  input: AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Command != null && { Command: serializeAws_restJson1NonEmptyStringList(input.Command, context) }),
    ...(input.Interval != null && { Interval: input.Interval }),
    ...(input.Retries != null && { Retries: input.Retries }),
    ...(input.StartPeriod != null && { StartPeriod: input.StartPeriod }),
    ...(input.Timeout != null && { Timeout: input.Timeout }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails = (
  input: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Add != null && { Add: serializeAws_restJson1NonEmptyStringList(input.Add, context) }),
    ...(input.Drop != null && { Drop: serializeAws_restJson1NonEmptyStringList(input.Drop, context) }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails = (
  input: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Capabilities != null && {
      Capabilities: serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails(
        input.Capabilities,
        context
      ),
    }),
    ...(input.Devices != null && {
      Devices: serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList(
        input.Devices,
        context
      ),
    }),
    ...(input.InitProcessEnabled != null && { InitProcessEnabled: input.InitProcessEnabled }),
    ...(input.MaxSwap != null && { MaxSwap: input.MaxSwap }),
    ...(input.SharedMemorySize != null && { SharedMemorySize: input.SharedMemorySize }),
    ...(input.Swappiness != null && { Swappiness: input.Swappiness }),
    ...(input.Tmpfs != null && {
      Tmpfs: serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList(
        input.Tmpfs,
        context
      ),
    }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails = (
  input: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.ContainerPath != null && { ContainerPath: input.ContainerPath }),
    ...(input.HostPath != null && { HostPath: input.HostPath }),
    ...(input.Permissions != null && {
      Permissions: serializeAws_restJson1NonEmptyStringList(input.Permissions, context),
    }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList = (
  input: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails(
        entry,
        context
      );
    });
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails = (
  input: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.ContainerPath != null && { ContainerPath: input.ContainerPath }),
    ...(input.MountOptions != null && {
      MountOptions: serializeAws_restJson1NonEmptyStringList(input.MountOptions, context),
    }),
    ...(input.Size != null && { Size: input.Size }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList = (
  input: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails(entry, context);
    });
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsList = (
  input: AwsEcsTaskDefinitionContainerDefinitionsDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsDetails(entry, context);
    });
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails = (
  input: AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.LogDriver != null && { LogDriver: input.LogDriver }),
    ...(input.Options != null && { Options: serializeAws_restJson1FieldMap(input.Options, context) }),
    ...(input.SecretOptions != null && {
      SecretOptions: serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList(
        input.SecretOptions,
        context
      ),
    }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails = (
  input: AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ValueFrom != null && { ValueFrom: input.ValueFrom }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList = (
  input: AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails(
        entry,
        context
      );
    });
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails = (
  input: AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.ContainerPath != null && { ContainerPath: input.ContainerPath }),
    ...(input.ReadOnly != null && { ReadOnly: input.ReadOnly }),
    ...(input.SourceVolume != null && { SourceVolume: input.SourceVolume }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsMountPointsList = (
  input: AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails(entry, context);
    });
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails = (
  input: AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.ContainerPort != null && { ContainerPort: input.ContainerPort }),
    ...(input.HostPort != null && { HostPort: input.HostPort }),
    ...(input.Protocol != null && { Protocol: input.Protocol }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsPortMappingsList = (
  input: AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails(entry, context);
    });
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails = (
  input: AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.CredentialsParameter != null && { CredentialsParameter: input.CredentialsParameter }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails = (
  input: AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Type != null && { Type: input.Type }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsList = (
  input: AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails(entry, context);
    });
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails = (
  input: AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ValueFrom != null && { ValueFrom: input.ValueFrom }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsSecretsList = (
  input: AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails(entry, context);
    });
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails = (
  input: AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Namespace != null && { Namespace: input.Namespace }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsSystemControlsList = (
  input: AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails(entry, context);
    });
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails = (
  input: AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.HardLimit != null && { HardLimit: input.HardLimit }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.SoftLimit != null && { SoftLimit: input.SoftLimit }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsUlimitsList = (
  input: AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails(entry, context);
    });
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails = (
  input: AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.ReadOnly != null && { ReadOnly: input.ReadOnly }),
    ...(input.SourceContainer != null && { SourceContainer: input.SourceContainer }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsVolumesFromList = (
  input: AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails(entry, context);
    });
};

const serializeAws_restJson1AwsEcsTaskDefinitionDetails = (
  input: AwsEcsTaskDefinitionDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.ContainerDefinitions != null && {
      ContainerDefinitions: serializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsList(
        input.ContainerDefinitions,
        context
      ),
    }),
    ...(input.Cpu != null && { Cpu: input.Cpu }),
    ...(input.ExecutionRoleArn != null && { ExecutionRoleArn: input.ExecutionRoleArn }),
    ...(input.Family != null && { Family: input.Family }),
    ...(input.InferenceAccelerators != null && {
      InferenceAccelerators: serializeAws_restJson1AwsEcsTaskDefinitionInferenceAcceleratorsList(
        input.InferenceAccelerators,
        context
      ),
    }),
    ...(input.IpcMode != null && { IpcMode: input.IpcMode }),
    ...(input.Memory != null && { Memory: input.Memory }),
    ...(input.NetworkMode != null && { NetworkMode: input.NetworkMode }),
    ...(input.PidMode != null && { PidMode: input.PidMode }),
    ...(input.PlacementConstraints != null && {
      PlacementConstraints: serializeAws_restJson1AwsEcsTaskDefinitionPlacementConstraintsList(
        input.PlacementConstraints,
        context
      ),
    }),
    ...(input.ProxyConfiguration != null && {
      ProxyConfiguration: serializeAws_restJson1AwsEcsTaskDefinitionProxyConfigurationDetails(
        input.ProxyConfiguration,
        context
      ),
    }),
    ...(input.RequiresCompatibilities != null && {
      RequiresCompatibilities: serializeAws_restJson1NonEmptyStringList(input.RequiresCompatibilities, context),
    }),
    ...(input.TaskRoleArn != null && { TaskRoleArn: input.TaskRoleArn }),
    ...(input.Volumes != null && {
      Volumes: serializeAws_restJson1AwsEcsTaskDefinitionVolumesList(input.Volumes, context),
    }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionInferenceAcceleratorsDetails = (
  input: AwsEcsTaskDefinitionInferenceAcceleratorsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeviceName != null && { DeviceName: input.DeviceName }),
    ...(input.DeviceType != null && { DeviceType: input.DeviceType }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionInferenceAcceleratorsList = (
  input: AwsEcsTaskDefinitionInferenceAcceleratorsDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsEcsTaskDefinitionInferenceAcceleratorsDetails(entry, context);
    });
};

const serializeAws_restJson1AwsEcsTaskDefinitionPlacementConstraintsDetails = (
  input: AwsEcsTaskDefinitionPlacementConstraintsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Expression != null && { Expression: input.Expression }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionPlacementConstraintsList = (
  input: AwsEcsTaskDefinitionPlacementConstraintsDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsEcsTaskDefinitionPlacementConstraintsDetails(entry, context);
    });
};

const serializeAws_restJson1AwsEcsTaskDefinitionProxyConfigurationDetails = (
  input: AwsEcsTaskDefinitionProxyConfigurationDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.ContainerName != null && { ContainerName: input.ContainerName }),
    ...(input.ProxyConfigurationProperties != null && {
      ProxyConfigurationProperties:
        serializeAws_restJson1AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList(
          input.ProxyConfigurationProperties,
          context
        ),
    }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails = (
  input: AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList = (
  input: AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails(
        entry,
        context
      );
    });
};

const serializeAws_restJson1AwsEcsTaskDefinitionVolumesDetails = (
  input: AwsEcsTaskDefinitionVolumesDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.DockerVolumeConfiguration != null && {
      DockerVolumeConfiguration: serializeAws_restJson1AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails(
        input.DockerVolumeConfiguration,
        context
      ),
    }),
    ...(input.EfsVolumeConfiguration != null && {
      EfsVolumeConfiguration: serializeAws_restJson1AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails(
        input.EfsVolumeConfiguration,
        context
      ),
    }),
    ...(input.Host != null && {
      Host: serializeAws_restJson1AwsEcsTaskDefinitionVolumesHostDetails(input.Host, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails = (
  input: AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Autoprovision != null && { Autoprovision: input.Autoprovision }),
    ...(input.Driver != null && { Driver: input.Driver }),
    ...(input.DriverOpts != null && { DriverOpts: serializeAws_restJson1FieldMap(input.DriverOpts, context) }),
    ...(input.Labels != null && { Labels: serializeAws_restJson1FieldMap(input.Labels, context) }),
    ...(input.Scope != null && { Scope: input.Scope }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails = (
  input: AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccessPointId != null && { AccessPointId: input.AccessPointId }),
    ...(input.Iam != null && { Iam: input.Iam }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails = (
  input: AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AuthorizationConfig != null && {
      AuthorizationConfig:
        serializeAws_restJson1AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails(
          input.AuthorizationConfig,
          context
        ),
    }),
    ...(input.FilesystemId != null && { FilesystemId: input.FilesystemId }),
    ...(input.RootDirectory != null && { RootDirectory: input.RootDirectory }),
    ...(input.TransitEncryption != null && { TransitEncryption: input.TransitEncryption }),
    ...(input.TransitEncryptionPort != null && { TransitEncryptionPort: input.TransitEncryptionPort }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionVolumesHostDetails = (
  input: AwsEcsTaskDefinitionVolumesHostDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.SourcePath != null && { SourcePath: input.SourcePath }),
  };
};

const serializeAws_restJson1AwsEcsTaskDefinitionVolumesList = (
  input: AwsEcsTaskDefinitionVolumesDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsEcsTaskDefinitionVolumesDetails(entry, context);
    });
};

const serializeAws_restJson1AwsEcsTaskDetails = (input: AwsEcsTaskDetails, context: __SerdeContext): any => {
  return {
    ...(input.ClusterArn != null && { ClusterArn: input.ClusterArn }),
    ...(input.Containers != null && {
      Containers: serializeAws_restJson1AwsEcsContainerDetailsList(input.Containers, context),
    }),
    ...(input.CreatedAt != null && { CreatedAt: input.CreatedAt }),
    ...(input.Group != null && { Group: input.Group }),
    ...(input.StartedAt != null && { StartedAt: input.StartedAt }),
    ...(input.StartedBy != null && { StartedBy: input.StartedBy }),
    ...(input.TaskDefinitionArn != null && { TaskDefinitionArn: input.TaskDefinitionArn }),
    ...(input.Version != null && { Version: input.Version }),
    ...(input.Volumes != null && {
      Volumes: serializeAws_restJson1AwsEcsTaskVolumeDetailsList(input.Volumes, context),
    }),
  };
};

const serializeAws_restJson1AwsEcsTaskVolumeDetails = (
  input: AwsEcsTaskVolumeDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Host != null && { Host: serializeAws_restJson1AwsEcsTaskVolumeHostDetails(input.Host, context) }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_restJson1AwsEcsTaskVolumeDetailsList = (
  input: AwsEcsTaskVolumeDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsEcsTaskVolumeDetails(entry, context);
    });
};

const serializeAws_restJson1AwsEcsTaskVolumeHostDetails = (
  input: AwsEcsTaskVolumeHostDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.SourcePath != null && { SourcePath: input.SourcePath }),
  };
};

const serializeAws_restJson1AwsEfsAccessPointDetails = (
  input: AwsEfsAccessPointDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccessPointId != null && { AccessPointId: input.AccessPointId }),
    ...(input.Arn != null && { Arn: input.Arn }),
    ...(input.ClientToken != null && { ClientToken: input.ClientToken }),
    ...(input.FileSystemId != null && { FileSystemId: input.FileSystemId }),
    ...(input.PosixUser != null && {
      PosixUser: serializeAws_restJson1AwsEfsAccessPointPosixUserDetails(input.PosixUser, context),
    }),
    ...(input.RootDirectory != null && {
      RootDirectory: serializeAws_restJson1AwsEfsAccessPointRootDirectoryDetails(input.RootDirectory, context),
    }),
  };
};

const serializeAws_restJson1AwsEfsAccessPointPosixUserDetails = (
  input: AwsEfsAccessPointPosixUserDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Gid != null && { Gid: input.Gid }),
    ...(input.SecondaryGids != null && {
      SecondaryGids: serializeAws_restJson1NonEmptyStringList(input.SecondaryGids, context),
    }),
    ...(input.Uid != null && { Uid: input.Uid }),
  };
};

const serializeAws_restJson1AwsEfsAccessPointRootDirectoryCreationInfoDetails = (
  input: AwsEfsAccessPointRootDirectoryCreationInfoDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.OwnerGid != null && { OwnerGid: input.OwnerGid }),
    ...(input.OwnerUid != null && { OwnerUid: input.OwnerUid }),
    ...(input.Permissions != null && { Permissions: input.Permissions }),
  };
};

const serializeAws_restJson1AwsEfsAccessPointRootDirectoryDetails = (
  input: AwsEfsAccessPointRootDirectoryDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.CreationInfo != null && {
      CreationInfo: serializeAws_restJson1AwsEfsAccessPointRootDirectoryCreationInfoDetails(
        input.CreationInfo,
        context
      ),
    }),
    ...(input.Path != null && { Path: input.Path }),
  };
};

const serializeAws_restJson1AwsEksClusterDetails = (input: AwsEksClusterDetails, context: __SerdeContext): any => {
  return {
    ...(input.Arn != null && { Arn: input.Arn }),
    ...(input.CertificateAuthorityData != null && { CertificateAuthorityData: input.CertificateAuthorityData }),
    ...(input.ClusterStatus != null && { ClusterStatus: input.ClusterStatus }),
    ...(input.Endpoint != null && { Endpoint: input.Endpoint }),
    ...(input.Logging != null && {
      Logging: serializeAws_restJson1AwsEksClusterLoggingDetails(input.Logging, context),
    }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ResourcesVpcConfig != null && {
      ResourcesVpcConfig: serializeAws_restJson1AwsEksClusterResourcesVpcConfigDetails(
        input.ResourcesVpcConfig,
        context
      ),
    }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.Version != null && { Version: input.Version }),
  };
};

const serializeAws_restJson1AwsEksClusterLoggingClusterLoggingDetails = (
  input: AwsEksClusterLoggingClusterLoggingDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.Types != null && { Types: serializeAws_restJson1NonEmptyStringList(input.Types, context) }),
  };
};

const serializeAws_restJson1AwsEksClusterLoggingClusterLoggingList = (
  input: AwsEksClusterLoggingClusterLoggingDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsEksClusterLoggingClusterLoggingDetails(entry, context);
    });
};

const serializeAws_restJson1AwsEksClusterLoggingDetails = (
  input: AwsEksClusterLoggingDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClusterLogging != null && {
      ClusterLogging: serializeAws_restJson1AwsEksClusterLoggingClusterLoggingList(input.ClusterLogging, context),
    }),
  };
};

const serializeAws_restJson1AwsEksClusterResourcesVpcConfigDetails = (
  input: AwsEksClusterResourcesVpcConfigDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.SecurityGroupIds != null && {
      SecurityGroupIds: serializeAws_restJson1NonEmptyStringList(input.SecurityGroupIds, context),
    }),
    ...(input.SubnetIds != null && { SubnetIds: serializeAws_restJson1NonEmptyStringList(input.SubnetIds, context) }),
  };
};

const serializeAws_restJson1AwsElasticBeanstalkEnvironmentDetails = (
  input: AwsElasticBeanstalkEnvironmentDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplicationName != null && { ApplicationName: input.ApplicationName }),
    ...(input.Cname != null && { Cname: input.Cname }),
    ...(input.DateCreated != null && { DateCreated: input.DateCreated }),
    ...(input.DateUpdated != null && { DateUpdated: input.DateUpdated }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.EndpointUrl != null && { EndpointUrl: input.EndpointUrl }),
    ...(input.EnvironmentArn != null && { EnvironmentArn: input.EnvironmentArn }),
    ...(input.EnvironmentId != null && { EnvironmentId: input.EnvironmentId }),
    ...(input.EnvironmentLinks != null && {
      EnvironmentLinks: serializeAws_restJson1AwsElasticBeanstalkEnvironmentEnvironmentLinks(
        input.EnvironmentLinks,
        context
      ),
    }),
    ...(input.EnvironmentName != null && { EnvironmentName: input.EnvironmentName }),
    ...(input.OptionSettings != null && {
      OptionSettings: serializeAws_restJson1AwsElasticBeanstalkEnvironmentOptionSettings(input.OptionSettings, context),
    }),
    ...(input.PlatformArn != null && { PlatformArn: input.PlatformArn }),
    ...(input.SolutionStackName != null && { SolutionStackName: input.SolutionStackName }),
    ...(input.Status != null && { Status: input.Status }),
    ...(input.Tier != null && { Tier: serializeAws_restJson1AwsElasticBeanstalkEnvironmentTier(input.Tier, context) }),
    ...(input.VersionLabel != null && { VersionLabel: input.VersionLabel }),
  };
};

const serializeAws_restJson1AwsElasticBeanstalkEnvironmentEnvironmentLink = (
  input: AwsElasticBeanstalkEnvironmentEnvironmentLink,
  context: __SerdeContext
): any => {
  return {
    ...(input.EnvironmentName != null && { EnvironmentName: input.EnvironmentName }),
    ...(input.LinkName != null && { LinkName: input.LinkName }),
  };
};

const serializeAws_restJson1AwsElasticBeanstalkEnvironmentEnvironmentLinks = (
  input: AwsElasticBeanstalkEnvironmentEnvironmentLink[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsElasticBeanstalkEnvironmentEnvironmentLink(entry, context);
    });
};

const serializeAws_restJson1AwsElasticBeanstalkEnvironmentOptionSetting = (
  input: AwsElasticBeanstalkEnvironmentOptionSetting,
  context: __SerdeContext
): any => {
  return {
    ...(input.Namespace != null && { Namespace: input.Namespace }),
    ...(input.OptionName != null && { OptionName: input.OptionName }),
    ...(input.ResourceName != null && { ResourceName: input.ResourceName }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_restJson1AwsElasticBeanstalkEnvironmentOptionSettings = (
  input: AwsElasticBeanstalkEnvironmentOptionSetting[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsElasticBeanstalkEnvironmentOptionSetting(entry, context);
    });
};

const serializeAws_restJson1AwsElasticBeanstalkEnvironmentTier = (
  input: AwsElasticBeanstalkEnvironmentTier,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Type != null && { Type: input.Type }),
    ...(input.Version != null && { Version: input.Version }),
  };
};

const serializeAws_restJson1AwsElasticsearchDomainDetails = (
  input: AwsElasticsearchDomainDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccessPolicies != null && { AccessPolicies: input.AccessPolicies }),
    ...(input.DomainEndpointOptions != null && {
      DomainEndpointOptions: serializeAws_restJson1AwsElasticsearchDomainDomainEndpointOptions(
        input.DomainEndpointOptions,
        context
      ),
    }),
    ...(input.DomainId != null && { DomainId: input.DomainId }),
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.ElasticsearchClusterConfig != null && {
      ElasticsearchClusterConfig: serializeAws_restJson1AwsElasticsearchDomainElasticsearchClusterConfigDetails(
        input.ElasticsearchClusterConfig,
        context
      ),
    }),
    ...(input.ElasticsearchVersion != null && { ElasticsearchVersion: input.ElasticsearchVersion }),
    ...(input.EncryptionAtRestOptions != null && {
      EncryptionAtRestOptions: serializeAws_restJson1AwsElasticsearchDomainEncryptionAtRestOptions(
        input.EncryptionAtRestOptions,
        context
      ),
    }),
    ...(input.Endpoint != null && { Endpoint: input.Endpoint }),
    ...(input.Endpoints != null && { Endpoints: serializeAws_restJson1FieldMap(input.Endpoints, context) }),
    ...(input.LogPublishingOptions != null && {
      LogPublishingOptions: serializeAws_restJson1AwsElasticsearchDomainLogPublishingOptions(
        input.LogPublishingOptions,
        context
      ),
    }),
    ...(input.NodeToNodeEncryptionOptions != null && {
      NodeToNodeEncryptionOptions: serializeAws_restJson1AwsElasticsearchDomainNodeToNodeEncryptionOptions(
        input.NodeToNodeEncryptionOptions,
        context
      ),
    }),
    ...(input.ServiceSoftwareOptions != null && {
      ServiceSoftwareOptions: serializeAws_restJson1AwsElasticsearchDomainServiceSoftwareOptions(
        input.ServiceSoftwareOptions,
        context
      ),
    }),
    ...(input.VPCOptions != null && {
      VPCOptions: serializeAws_restJson1AwsElasticsearchDomainVPCOptions(input.VPCOptions, context),
    }),
  };
};

const serializeAws_restJson1AwsElasticsearchDomainDomainEndpointOptions = (
  input: AwsElasticsearchDomainDomainEndpointOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.EnforceHTTPS != null && { EnforceHTTPS: input.EnforceHTTPS }),
    ...(input.TLSSecurityPolicy != null && { TLSSecurityPolicy: input.TLSSecurityPolicy }),
  };
};

const serializeAws_restJson1AwsElasticsearchDomainElasticsearchClusterConfigDetails = (
  input: AwsElasticsearchDomainElasticsearchClusterConfigDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.DedicatedMasterCount != null && { DedicatedMasterCount: input.DedicatedMasterCount }),
    ...(input.DedicatedMasterEnabled != null && { DedicatedMasterEnabled: input.DedicatedMasterEnabled }),
    ...(input.DedicatedMasterType != null && { DedicatedMasterType: input.DedicatedMasterType }),
    ...(input.InstanceCount != null && { InstanceCount: input.InstanceCount }),
    ...(input.InstanceType != null && { InstanceType: input.InstanceType }),
    ...(input.ZoneAwarenessConfig != null && {
      ZoneAwarenessConfig:
        serializeAws_restJson1AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails(
          input.ZoneAwarenessConfig,
          context
        ),
    }),
    ...(input.ZoneAwarenessEnabled != null && { ZoneAwarenessEnabled: input.ZoneAwarenessEnabled }),
  };
};

const serializeAws_restJson1AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails = (
  input: AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AvailabilityZoneCount != null && { AvailabilityZoneCount: input.AvailabilityZoneCount }),
  };
};

const serializeAws_restJson1AwsElasticsearchDomainEncryptionAtRestOptions = (
  input: AwsElasticsearchDomainEncryptionAtRestOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
  };
};

const serializeAws_restJson1AwsElasticsearchDomainLogPublishingOptions = (
  input: AwsElasticsearchDomainLogPublishingOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.AuditLogs != null && {
      AuditLogs: serializeAws_restJson1AwsElasticsearchDomainLogPublishingOptionsLogConfig(input.AuditLogs, context),
    }),
    ...(input.IndexSlowLogs != null && {
      IndexSlowLogs: serializeAws_restJson1AwsElasticsearchDomainLogPublishingOptionsLogConfig(
        input.IndexSlowLogs,
        context
      ),
    }),
    ...(input.SearchSlowLogs != null && {
      SearchSlowLogs: serializeAws_restJson1AwsElasticsearchDomainLogPublishingOptionsLogConfig(
        input.SearchSlowLogs,
        context
      ),
    }),
  };
};

const serializeAws_restJson1AwsElasticsearchDomainLogPublishingOptionsLogConfig = (
  input: AwsElasticsearchDomainLogPublishingOptionsLogConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.CloudWatchLogsLogGroupArn != null && { CloudWatchLogsLogGroupArn: input.CloudWatchLogsLogGroupArn }),
    ...(input.Enabled != null && { Enabled: input.Enabled }),
  };
};

const serializeAws_restJson1AwsElasticsearchDomainNodeToNodeEncryptionOptions = (
  input: AwsElasticsearchDomainNodeToNodeEncryptionOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.Enabled != null && { Enabled: input.Enabled }),
  };
};

const serializeAws_restJson1AwsElasticsearchDomainServiceSoftwareOptions = (
  input: AwsElasticsearchDomainServiceSoftwareOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutomatedUpdateDate != null && { AutomatedUpdateDate: input.AutomatedUpdateDate }),
    ...(input.Cancellable != null && { Cancellable: input.Cancellable }),
    ...(input.CurrentVersion != null && { CurrentVersion: input.CurrentVersion }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.NewVersion != null && { NewVersion: input.NewVersion }),
    ...(input.UpdateAvailable != null && { UpdateAvailable: input.UpdateAvailable }),
    ...(input.UpdateStatus != null && { UpdateStatus: input.UpdateStatus }),
  };
};

const serializeAws_restJson1AwsElasticsearchDomainVPCOptions = (
  input: AwsElasticsearchDomainVPCOptions,
  context: __SerdeContext
): any => {
  return {
    ...(input.AvailabilityZones != null && {
      AvailabilityZones: serializeAws_restJson1NonEmptyStringList(input.AvailabilityZones, context),
    }),
    ...(input.SecurityGroupIds != null && {
      SecurityGroupIds: serializeAws_restJson1NonEmptyStringList(input.SecurityGroupIds, context),
    }),
    ...(input.SubnetIds != null && { SubnetIds: serializeAws_restJson1NonEmptyStringList(input.SubnetIds, context) }),
    ...(input.VPCId != null && { VPCId: input.VPCId }),
  };
};

const serializeAws_restJson1AwsElbAppCookieStickinessPolicies = (
  input: AwsElbAppCookieStickinessPolicy[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsElbAppCookieStickinessPolicy(entry, context);
    });
};

const serializeAws_restJson1AwsElbAppCookieStickinessPolicy = (
  input: AwsElbAppCookieStickinessPolicy,
  context: __SerdeContext
): any => {
  return {
    ...(input.CookieName != null && { CookieName: input.CookieName }),
    ...(input.PolicyName != null && { PolicyName: input.PolicyName }),
  };
};

const serializeAws_restJson1AwsElbLbCookieStickinessPolicies = (
  input: AwsElbLbCookieStickinessPolicy[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsElbLbCookieStickinessPolicy(entry, context);
    });
};

const serializeAws_restJson1AwsElbLbCookieStickinessPolicy = (
  input: AwsElbLbCookieStickinessPolicy,
  context: __SerdeContext
): any => {
  return {
    ...(input.CookieExpirationPeriod != null && { CookieExpirationPeriod: input.CookieExpirationPeriod }),
    ...(input.PolicyName != null && { PolicyName: input.PolicyName }),
  };
};

const serializeAws_restJson1AwsElbLoadBalancerAccessLog = (
  input: AwsElbLoadBalancerAccessLog,
  context: __SerdeContext
): any => {
  return {
    ...(input.EmitInterval != null && { EmitInterval: input.EmitInterval }),
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.S3BucketName != null && { S3BucketName: input.S3BucketName }),
    ...(input.S3BucketPrefix != null && { S3BucketPrefix: input.S3BucketPrefix }),
  };
};

const serializeAws_restJson1AwsElbLoadBalancerAdditionalAttribute = (
  input: AwsElbLoadBalancerAdditionalAttribute,
  context: __SerdeContext
): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_restJson1AwsElbLoadBalancerAdditionalAttributeList = (
  input: AwsElbLoadBalancerAdditionalAttribute[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsElbLoadBalancerAdditionalAttribute(entry, context);
    });
};

const serializeAws_restJson1AwsElbLoadBalancerAttributes = (
  input: AwsElbLoadBalancerAttributes,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccessLog != null && {
      AccessLog: serializeAws_restJson1AwsElbLoadBalancerAccessLog(input.AccessLog, context),
    }),
    ...(input.AdditionalAttributes != null && {
      AdditionalAttributes: serializeAws_restJson1AwsElbLoadBalancerAdditionalAttributeList(
        input.AdditionalAttributes,
        context
      ),
    }),
    ...(input.ConnectionDraining != null && {
      ConnectionDraining: serializeAws_restJson1AwsElbLoadBalancerConnectionDraining(input.ConnectionDraining, context),
    }),
    ...(input.ConnectionSettings != null && {
      ConnectionSettings: serializeAws_restJson1AwsElbLoadBalancerConnectionSettings(input.ConnectionSettings, context),
    }),
    ...(input.CrossZoneLoadBalancing != null && {
      CrossZoneLoadBalancing: serializeAws_restJson1AwsElbLoadBalancerCrossZoneLoadBalancing(
        input.CrossZoneLoadBalancing,
        context
      ),
    }),
  };
};

const serializeAws_restJson1AwsElbLoadBalancerBackendServerDescription = (
  input: AwsElbLoadBalancerBackendServerDescription,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstancePort != null && { InstancePort: input.InstancePort }),
    ...(input.PolicyNames != null && { PolicyNames: serializeAws_restJson1StringList(input.PolicyNames, context) }),
  };
};

const serializeAws_restJson1AwsElbLoadBalancerBackendServerDescriptions = (
  input: AwsElbLoadBalancerBackendServerDescription[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsElbLoadBalancerBackendServerDescription(entry, context);
    });
};

const serializeAws_restJson1AwsElbLoadBalancerConnectionDraining = (
  input: AwsElbLoadBalancerConnectionDraining,
  context: __SerdeContext
): any => {
  return {
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.Timeout != null && { Timeout: input.Timeout }),
  };
};

const serializeAws_restJson1AwsElbLoadBalancerConnectionSettings = (
  input: AwsElbLoadBalancerConnectionSettings,
  context: __SerdeContext
): any => {
  return {
    ...(input.IdleTimeout != null && { IdleTimeout: input.IdleTimeout }),
  };
};

const serializeAws_restJson1AwsElbLoadBalancerCrossZoneLoadBalancing = (
  input: AwsElbLoadBalancerCrossZoneLoadBalancing,
  context: __SerdeContext
): any => {
  return {
    ...(input.Enabled != null && { Enabled: input.Enabled }),
  };
};

const serializeAws_restJson1AwsElbLoadBalancerDetails = (
  input: AwsElbLoadBalancerDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AvailabilityZones != null && {
      AvailabilityZones: serializeAws_restJson1StringList(input.AvailabilityZones, context),
    }),
    ...(input.BackendServerDescriptions != null && {
      BackendServerDescriptions: serializeAws_restJson1AwsElbLoadBalancerBackendServerDescriptions(
        input.BackendServerDescriptions,
        context
      ),
    }),
    ...(input.CanonicalHostedZoneName != null && { CanonicalHostedZoneName: input.CanonicalHostedZoneName }),
    ...(input.CanonicalHostedZoneNameID != null && { CanonicalHostedZoneNameID: input.CanonicalHostedZoneNameID }),
    ...(input.CreatedTime != null && { CreatedTime: input.CreatedTime }),
    ...(input.DnsName != null && { DnsName: input.DnsName }),
    ...(input.HealthCheck != null && {
      HealthCheck: serializeAws_restJson1AwsElbLoadBalancerHealthCheck(input.HealthCheck, context),
    }),
    ...(input.Instances != null && {
      Instances: serializeAws_restJson1AwsElbLoadBalancerInstances(input.Instances, context),
    }),
    ...(input.ListenerDescriptions != null && {
      ListenerDescriptions: serializeAws_restJson1AwsElbLoadBalancerListenerDescriptions(
        input.ListenerDescriptions,
        context
      ),
    }),
    ...(input.LoadBalancerAttributes != null && {
      LoadBalancerAttributes: serializeAws_restJson1AwsElbLoadBalancerAttributes(input.LoadBalancerAttributes, context),
    }),
    ...(input.LoadBalancerName != null && { LoadBalancerName: input.LoadBalancerName }),
    ...(input.Policies != null && {
      Policies: serializeAws_restJson1AwsElbLoadBalancerPolicies(input.Policies, context),
    }),
    ...(input.Scheme != null && { Scheme: input.Scheme }),
    ...(input.SecurityGroups != null && {
      SecurityGroups: serializeAws_restJson1StringList(input.SecurityGroups, context),
    }),
    ...(input.SourceSecurityGroup != null && {
      SourceSecurityGroup: serializeAws_restJson1AwsElbLoadBalancerSourceSecurityGroup(
        input.SourceSecurityGroup,
        context
      ),
    }),
    ...(input.Subnets != null && { Subnets: serializeAws_restJson1StringList(input.Subnets, context) }),
    ...(input.VpcId != null && { VpcId: input.VpcId }),
  };
};

const serializeAws_restJson1AwsElbLoadBalancerHealthCheck = (
  input: AwsElbLoadBalancerHealthCheck,
  context: __SerdeContext
): any => {
  return {
    ...(input.HealthyThreshold != null && { HealthyThreshold: input.HealthyThreshold }),
    ...(input.Interval != null && { Interval: input.Interval }),
    ...(input.Target != null && { Target: input.Target }),
    ...(input.Timeout != null && { Timeout: input.Timeout }),
    ...(input.UnhealthyThreshold != null && { UnhealthyThreshold: input.UnhealthyThreshold }),
  };
};

const serializeAws_restJson1AwsElbLoadBalancerInstance = (
  input: AwsElbLoadBalancerInstance,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstanceId != null && { InstanceId: input.InstanceId }),
  };
};

const serializeAws_restJson1AwsElbLoadBalancerInstances = (
  input: AwsElbLoadBalancerInstance[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsElbLoadBalancerInstance(entry, context);
    });
};

const serializeAws_restJson1AwsElbLoadBalancerListener = (
  input: AwsElbLoadBalancerListener,
  context: __SerdeContext
): any => {
  return {
    ...(input.InstancePort != null && { InstancePort: input.InstancePort }),
    ...(input.InstanceProtocol != null && { InstanceProtocol: input.InstanceProtocol }),
    ...(input.LoadBalancerPort != null && { LoadBalancerPort: input.LoadBalancerPort }),
    ...(input.Protocol != null && { Protocol: input.Protocol }),
    ...(input.SslCertificateId != null && { SslCertificateId: input.SslCertificateId }),
  };
};

const serializeAws_restJson1AwsElbLoadBalancerListenerDescription = (
  input: AwsElbLoadBalancerListenerDescription,
  context: __SerdeContext
): any => {
  return {
    ...(input.Listener != null && {
      Listener: serializeAws_restJson1AwsElbLoadBalancerListener(input.Listener, context),
    }),
    ...(input.PolicyNames != null && { PolicyNames: serializeAws_restJson1StringList(input.PolicyNames, context) }),
  };
};

const serializeAws_restJson1AwsElbLoadBalancerListenerDescriptions = (
  input: AwsElbLoadBalancerListenerDescription[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsElbLoadBalancerListenerDescription(entry, context);
    });
};

const serializeAws_restJson1AwsElbLoadBalancerPolicies = (
  input: AwsElbLoadBalancerPolicies,
  context: __SerdeContext
): any => {
  return {
    ...(input.AppCookieStickinessPolicies != null && {
      AppCookieStickinessPolicies: serializeAws_restJson1AwsElbAppCookieStickinessPolicies(
        input.AppCookieStickinessPolicies,
        context
      ),
    }),
    ...(input.LbCookieStickinessPolicies != null && {
      LbCookieStickinessPolicies: serializeAws_restJson1AwsElbLbCookieStickinessPolicies(
        input.LbCookieStickinessPolicies,
        context
      ),
    }),
    ...(input.OtherPolicies != null && {
      OtherPolicies: serializeAws_restJson1StringList(input.OtherPolicies, context),
    }),
  };
};

const serializeAws_restJson1AwsElbLoadBalancerSourceSecurityGroup = (
  input: AwsElbLoadBalancerSourceSecurityGroup,
  context: __SerdeContext
): any => {
  return {
    ...(input.GroupName != null && { GroupName: input.GroupName }),
    ...(input.OwnerAlias != null && { OwnerAlias: input.OwnerAlias }),
  };
};

const serializeAws_restJson1AwsElbv2LoadBalancerAttribute = (
  input: AwsElbv2LoadBalancerAttribute,
  context: __SerdeContext
): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_restJson1AwsElbv2LoadBalancerAttributes = (
  input: AwsElbv2LoadBalancerAttribute[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsElbv2LoadBalancerAttribute(entry, context);
    });
};

const serializeAws_restJson1AwsElbv2LoadBalancerDetails = (
  input: AwsElbv2LoadBalancerDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AvailabilityZones != null && {
      AvailabilityZones: serializeAws_restJson1AvailabilityZones(input.AvailabilityZones, context),
    }),
    ...(input.CanonicalHostedZoneId != null && { CanonicalHostedZoneId: input.CanonicalHostedZoneId }),
    ...(input.CreatedTime != null && { CreatedTime: input.CreatedTime }),
    ...(input.DNSName != null && { DNSName: input.DNSName }),
    ...(input.IpAddressType != null && { IpAddressType: input.IpAddressType }),
    ...(input.LoadBalancerAttributes != null && {
      LoadBalancerAttributes: serializeAws_restJson1AwsElbv2LoadBalancerAttributes(
        input.LoadBalancerAttributes,
        context
      ),
    }),
    ...(input.Scheme != null && { Scheme: input.Scheme }),
    ...(input.SecurityGroups != null && {
      SecurityGroups: serializeAws_restJson1SecurityGroups(input.SecurityGroups, context),
    }),
    ...(input.State != null && { State: serializeAws_restJson1LoadBalancerState(input.State, context) }),
    ...(input.Type != null && { Type: input.Type }),
    ...(input.VpcId != null && { VpcId: input.VpcId }),
  };
};

const serializeAws_restJson1AwsIamAccessKeyDetails = (input: AwsIamAccessKeyDetails, context: __SerdeContext): any => {
  return {
    ...(input.AccessKeyId != null && { AccessKeyId: input.AccessKeyId }),
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.CreatedAt != null && { CreatedAt: input.CreatedAt }),
    ...(input.PrincipalId != null && { PrincipalId: input.PrincipalId }),
    ...(input.PrincipalName != null && { PrincipalName: input.PrincipalName }),
    ...(input.PrincipalType != null && { PrincipalType: input.PrincipalType }),
    ...(input.SessionContext != null && {
      SessionContext: serializeAws_restJson1AwsIamAccessKeySessionContext(input.SessionContext, context),
    }),
    ...(input.Status != null && { Status: input.Status }),
    ...(input.UserName != null && { UserName: input.UserName }),
  };
};

const serializeAws_restJson1AwsIamAccessKeySessionContext = (
  input: AwsIamAccessKeySessionContext,
  context: __SerdeContext
): any => {
  return {
    ...(input.Attributes != null && {
      Attributes: serializeAws_restJson1AwsIamAccessKeySessionContextAttributes(input.Attributes, context),
    }),
    ...(input.SessionIssuer != null && {
      SessionIssuer: serializeAws_restJson1AwsIamAccessKeySessionContextSessionIssuer(input.SessionIssuer, context),
    }),
  };
};

const serializeAws_restJson1AwsIamAccessKeySessionContextAttributes = (
  input: AwsIamAccessKeySessionContextAttributes,
  context: __SerdeContext
): any => {
  return {
    ...(input.CreationDate != null && { CreationDate: input.CreationDate }),
    ...(input.MfaAuthenticated != null && { MfaAuthenticated: input.MfaAuthenticated }),
  };
};

const serializeAws_restJson1AwsIamAccessKeySessionContextSessionIssuer = (
  input: AwsIamAccessKeySessionContextSessionIssuer,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccountId != null && { AccountId: input.AccountId }),
    ...(input.Arn != null && { Arn: input.Arn }),
    ...(input.PrincipalId != null && { PrincipalId: input.PrincipalId }),
    ...(input.Type != null && { Type: input.Type }),
    ...(input.UserName != null && { UserName: input.UserName }),
  };
};

const serializeAws_restJson1AwsIamAttachedManagedPolicy = (
  input: AwsIamAttachedManagedPolicy,
  context: __SerdeContext
): any => {
  return {
    ...(input.PolicyArn != null && { PolicyArn: input.PolicyArn }),
    ...(input.PolicyName != null && { PolicyName: input.PolicyName }),
  };
};

const serializeAws_restJson1AwsIamAttachedManagedPolicyList = (
  input: AwsIamAttachedManagedPolicy[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsIamAttachedManagedPolicy(entry, context);
    });
};

const serializeAws_restJson1AwsIamGroupDetails = (input: AwsIamGroupDetails, context: __SerdeContext): any => {
  return {
    ...(input.AttachedManagedPolicies != null && {
      AttachedManagedPolicies: serializeAws_restJson1AwsIamAttachedManagedPolicyList(
        input.AttachedManagedPolicies,
        context
      ),
    }),
    ...(input.CreateDate != null && { CreateDate: input.CreateDate }),
    ...(input.GroupId != null && { GroupId: input.GroupId }),
    ...(input.GroupName != null && { GroupName: input.GroupName }),
    ...(input.GroupPolicyList != null && {
      GroupPolicyList: serializeAws_restJson1AwsIamGroupPolicyList(input.GroupPolicyList, context),
    }),
    ...(input.Path != null && { Path: input.Path }),
  };
};

const serializeAws_restJson1AwsIamGroupPolicy = (input: AwsIamGroupPolicy, context: __SerdeContext): any => {
  return {
    ...(input.PolicyName != null && { PolicyName: input.PolicyName }),
  };
};

const serializeAws_restJson1AwsIamGroupPolicyList = (input: AwsIamGroupPolicy[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsIamGroupPolicy(entry, context);
    });
};

const serializeAws_restJson1AwsIamInstanceProfile = (input: AwsIamInstanceProfile, context: __SerdeContext): any => {
  return {
    ...(input.Arn != null && { Arn: input.Arn }),
    ...(input.CreateDate != null && { CreateDate: input.CreateDate }),
    ...(input.InstanceProfileId != null && { InstanceProfileId: input.InstanceProfileId }),
    ...(input.InstanceProfileName != null && { InstanceProfileName: input.InstanceProfileName }),
    ...(input.Path != null && { Path: input.Path }),
    ...(input.Roles != null && { Roles: serializeAws_restJson1AwsIamInstanceProfileRoles(input.Roles, context) }),
  };
};

const serializeAws_restJson1AwsIamInstanceProfileList = (
  input: AwsIamInstanceProfile[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsIamInstanceProfile(entry, context);
    });
};

const serializeAws_restJson1AwsIamInstanceProfileRole = (
  input: AwsIamInstanceProfileRole,
  context: __SerdeContext
): any => {
  return {
    ...(input.Arn != null && { Arn: input.Arn }),
    ...(input.AssumeRolePolicyDocument != null && { AssumeRolePolicyDocument: input.AssumeRolePolicyDocument }),
    ...(input.CreateDate != null && { CreateDate: input.CreateDate }),
    ...(input.Path != null && { Path: input.Path }),
    ...(input.RoleId != null && { RoleId: input.RoleId }),
    ...(input.RoleName != null && { RoleName: input.RoleName }),
  };
};

const serializeAws_restJson1AwsIamInstanceProfileRoles = (
  input: AwsIamInstanceProfileRole[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsIamInstanceProfileRole(entry, context);
    });
};

const serializeAws_restJson1AwsIamPermissionsBoundary = (
  input: AwsIamPermissionsBoundary,
  context: __SerdeContext
): any => {
  return {
    ...(input.PermissionsBoundaryArn != null && { PermissionsBoundaryArn: input.PermissionsBoundaryArn }),
    ...(input.PermissionsBoundaryType != null && { PermissionsBoundaryType: input.PermissionsBoundaryType }),
  };
};

const serializeAws_restJson1AwsIamPolicyDetails = (input: AwsIamPolicyDetails, context: __SerdeContext): any => {
  return {
    ...(input.AttachmentCount != null && { AttachmentCount: input.AttachmentCount }),
    ...(input.CreateDate != null && { CreateDate: input.CreateDate }),
    ...(input.DefaultVersionId != null && { DefaultVersionId: input.DefaultVersionId }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.IsAttachable != null && { IsAttachable: input.IsAttachable }),
    ...(input.Path != null && { Path: input.Path }),
    ...(input.PermissionsBoundaryUsageCount != null && {
      PermissionsBoundaryUsageCount: input.PermissionsBoundaryUsageCount,
    }),
    ...(input.PolicyId != null && { PolicyId: input.PolicyId }),
    ...(input.PolicyName != null && { PolicyName: input.PolicyName }),
    ...(input.PolicyVersionList != null && {
      PolicyVersionList: serializeAws_restJson1AwsIamPolicyVersionList(input.PolicyVersionList, context),
    }),
    ...(input.UpdateDate != null && { UpdateDate: input.UpdateDate }),
  };
};

const serializeAws_restJson1AwsIamPolicyVersion = (input: AwsIamPolicyVersion, context: __SerdeContext): any => {
  return {
    ...(input.CreateDate != null && { CreateDate: input.CreateDate }),
    ...(input.IsDefaultVersion != null && { IsDefaultVersion: input.IsDefaultVersion }),
    ...(input.VersionId != null && { VersionId: input.VersionId }),
  };
};

const serializeAws_restJson1AwsIamPolicyVersionList = (input: AwsIamPolicyVersion[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsIamPolicyVersion(entry, context);
    });
};

const serializeAws_restJson1AwsIamRoleDetails = (input: AwsIamRoleDetails, context: __SerdeContext): any => {
  return {
    ...(input.AssumeRolePolicyDocument != null && { AssumeRolePolicyDocument: input.AssumeRolePolicyDocument }),
    ...(input.AttachedManagedPolicies != null && {
      AttachedManagedPolicies: serializeAws_restJson1AwsIamAttachedManagedPolicyList(
        input.AttachedManagedPolicies,
        context
      ),
    }),
    ...(input.CreateDate != null && { CreateDate: input.CreateDate }),
    ...(input.InstanceProfileList != null && {
      InstanceProfileList: serializeAws_restJson1AwsIamInstanceProfileList(input.InstanceProfileList, context),
    }),
    ...(input.MaxSessionDuration != null && { MaxSessionDuration: input.MaxSessionDuration }),
    ...(input.Path != null && { Path: input.Path }),
    ...(input.PermissionsBoundary != null && {
      PermissionsBoundary: serializeAws_restJson1AwsIamPermissionsBoundary(input.PermissionsBoundary, context),
    }),
    ...(input.RoleId != null && { RoleId: input.RoleId }),
    ...(input.RoleName != null && { RoleName: input.RoleName }),
    ...(input.RolePolicyList != null && {
      RolePolicyList: serializeAws_restJson1AwsIamRolePolicyList(input.RolePolicyList, context),
    }),
  };
};

const serializeAws_restJson1AwsIamRolePolicy = (input: AwsIamRolePolicy, context: __SerdeContext): any => {
  return {
    ...(input.PolicyName != null && { PolicyName: input.PolicyName }),
  };
};

const serializeAws_restJson1AwsIamRolePolicyList = (input: AwsIamRolePolicy[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsIamRolePolicy(entry, context);
    });
};

const serializeAws_restJson1AwsIamUserDetails = (input: AwsIamUserDetails, context: __SerdeContext): any => {
  return {
    ...(input.AttachedManagedPolicies != null && {
      AttachedManagedPolicies: serializeAws_restJson1AwsIamAttachedManagedPolicyList(
        input.AttachedManagedPolicies,
        context
      ),
    }),
    ...(input.CreateDate != null && { CreateDate: input.CreateDate }),
    ...(input.GroupList != null && { GroupList: serializeAws_restJson1StringList(input.GroupList, context) }),
    ...(input.Path != null && { Path: input.Path }),
    ...(input.PermissionsBoundary != null && {
      PermissionsBoundary: serializeAws_restJson1AwsIamPermissionsBoundary(input.PermissionsBoundary, context),
    }),
    ...(input.UserId != null && { UserId: input.UserId }),
    ...(input.UserName != null && { UserName: input.UserName }),
    ...(input.UserPolicyList != null && {
      UserPolicyList: serializeAws_restJson1AwsIamUserPolicyList(input.UserPolicyList, context),
    }),
  };
};

const serializeAws_restJson1AwsIamUserPolicy = (input: AwsIamUserPolicy, context: __SerdeContext): any => {
  return {
    ...(input.PolicyName != null && { PolicyName: input.PolicyName }),
  };
};

const serializeAws_restJson1AwsIamUserPolicyList = (input: AwsIamUserPolicy[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsIamUserPolicy(entry, context);
    });
};

const serializeAws_restJson1AwsKinesisStreamDetails = (
  input: AwsKinesisStreamDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Arn != null && { Arn: input.Arn }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RetentionPeriodHours != null && { RetentionPeriodHours: input.RetentionPeriodHours }),
    ...(input.ShardCount != null && { ShardCount: input.ShardCount }),
    ...(input.StreamEncryption != null && {
      StreamEncryption: serializeAws_restJson1AwsKinesisStreamStreamEncryptionDetails(input.StreamEncryption, context),
    }),
  };
};

const serializeAws_restJson1AwsKinesisStreamStreamEncryptionDetails = (
  input: AwsKinesisStreamStreamEncryptionDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.EncryptionType != null && { EncryptionType: input.EncryptionType }),
    ...(input.KeyId != null && { KeyId: input.KeyId }),
  };
};

const serializeAws_restJson1AwsKmsKeyDetails = (input: AwsKmsKeyDetails, context: __SerdeContext): any => {
  return {
    ...(input.AWSAccountId != null && { AWSAccountId: input.AWSAccountId }),
    ...(input.CreationDate != null && { CreationDate: __serializeFloat(input.CreationDate) }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.KeyId != null && { KeyId: input.KeyId }),
    ...(input.KeyManager != null && { KeyManager: input.KeyManager }),
    ...(input.KeyRotationStatus != null && { KeyRotationStatus: input.KeyRotationStatus }),
    ...(input.KeyState != null && { KeyState: input.KeyState }),
    ...(input.Origin != null && { Origin: input.Origin }),
  };
};

const serializeAws_restJson1AwsLambdaFunctionCode = (input: AwsLambdaFunctionCode, context: __SerdeContext): any => {
  return {
    ...(input.S3Bucket != null && { S3Bucket: input.S3Bucket }),
    ...(input.S3Key != null && { S3Key: input.S3Key }),
    ...(input.S3ObjectVersion != null && { S3ObjectVersion: input.S3ObjectVersion }),
    ...(input.ZipFile != null && { ZipFile: input.ZipFile }),
  };
};

const serializeAws_restJson1AwsLambdaFunctionDeadLetterConfig = (
  input: AwsLambdaFunctionDeadLetterConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.TargetArn != null && { TargetArn: input.TargetArn }),
  };
};

const serializeAws_restJson1AwsLambdaFunctionDetails = (
  input: AwsLambdaFunctionDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Code != null && { Code: serializeAws_restJson1AwsLambdaFunctionCode(input.Code, context) }),
    ...(input.CodeSha256 != null && { CodeSha256: input.CodeSha256 }),
    ...(input.DeadLetterConfig != null && {
      DeadLetterConfig: serializeAws_restJson1AwsLambdaFunctionDeadLetterConfig(input.DeadLetterConfig, context),
    }),
    ...(input.Environment != null && {
      Environment: serializeAws_restJson1AwsLambdaFunctionEnvironment(input.Environment, context),
    }),
    ...(input.FunctionName != null && { FunctionName: input.FunctionName }),
    ...(input.Handler != null && { Handler: input.Handler }),
    ...(input.KmsKeyArn != null && { KmsKeyArn: input.KmsKeyArn }),
    ...(input.LastModified != null && { LastModified: input.LastModified }),
    ...(input.Layers != null && { Layers: serializeAws_restJson1AwsLambdaFunctionLayerList(input.Layers, context) }),
    ...(input.MasterArn != null && { MasterArn: input.MasterArn }),
    ...(input.MemorySize != null && { MemorySize: input.MemorySize }),
    ...(input.RevisionId != null && { RevisionId: input.RevisionId }),
    ...(input.Role != null && { Role: input.Role }),
    ...(input.Runtime != null && { Runtime: input.Runtime }),
    ...(input.Timeout != null && { Timeout: input.Timeout }),
    ...(input.TracingConfig != null && {
      TracingConfig: serializeAws_restJson1AwsLambdaFunctionTracingConfig(input.TracingConfig, context),
    }),
    ...(input.Version != null && { Version: input.Version }),
    ...(input.VpcConfig != null && {
      VpcConfig: serializeAws_restJson1AwsLambdaFunctionVpcConfig(input.VpcConfig, context),
    }),
  };
};

const serializeAws_restJson1AwsLambdaFunctionEnvironment = (
  input: AwsLambdaFunctionEnvironment,
  context: __SerdeContext
): any => {
  return {
    ...(input.Error != null && {
      Error: serializeAws_restJson1AwsLambdaFunctionEnvironmentError(input.Error, context),
    }),
    ...(input.Variables != null && { Variables: serializeAws_restJson1FieldMap(input.Variables, context) }),
  };
};

const serializeAws_restJson1AwsLambdaFunctionEnvironmentError = (
  input: AwsLambdaFunctionEnvironmentError,
  context: __SerdeContext
): any => {
  return {
    ...(input.ErrorCode != null && { ErrorCode: input.ErrorCode }),
    ...(input.Message != null && { Message: input.Message }),
  };
};

const serializeAws_restJson1AwsLambdaFunctionLayer = (input: AwsLambdaFunctionLayer, context: __SerdeContext): any => {
  return {
    ...(input.Arn != null && { Arn: input.Arn }),
    ...(input.CodeSize != null && { CodeSize: input.CodeSize }),
  };
};

const serializeAws_restJson1AwsLambdaFunctionLayerList = (
  input: AwsLambdaFunctionLayer[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsLambdaFunctionLayer(entry, context);
    });
};

const serializeAws_restJson1AwsLambdaFunctionTracingConfig = (
  input: AwsLambdaFunctionTracingConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.Mode != null && { Mode: input.Mode }),
  };
};

const serializeAws_restJson1AwsLambdaFunctionVpcConfig = (
  input: AwsLambdaFunctionVpcConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.SecurityGroupIds != null && {
      SecurityGroupIds: serializeAws_restJson1NonEmptyStringList(input.SecurityGroupIds, context),
    }),
    ...(input.SubnetIds != null && { SubnetIds: serializeAws_restJson1NonEmptyStringList(input.SubnetIds, context) }),
    ...(input.VpcId != null && { VpcId: input.VpcId }),
  };
};

const serializeAws_restJson1AwsLambdaLayerVersionDetails = (
  input: AwsLambdaLayerVersionDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.CompatibleRuntimes != null && {
      CompatibleRuntimes: serializeAws_restJson1NonEmptyStringList(input.CompatibleRuntimes, context),
    }),
    ...(input.CreatedDate != null && { CreatedDate: input.CreatedDate }),
    ...(input.Version != null && { Version: input.Version }),
  };
};

const serializeAws_restJson1AwsMountPoint = (input: AwsMountPoint, context: __SerdeContext): any => {
  return {
    ...(input.ContainerPath != null && { ContainerPath: input.ContainerPath }),
    ...(input.SourceVolume != null && { SourceVolume: input.SourceVolume }),
  };
};

const serializeAws_restJson1AwsMountPointList = (input: AwsMountPoint[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsMountPoint(entry, context);
    });
};

const serializeAws_restJson1AwsNetworkFirewallFirewallDetails = (
  input: AwsNetworkFirewallFirewallDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeleteProtection != null && { DeleteProtection: input.DeleteProtection }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.FirewallArn != null && { FirewallArn: input.FirewallArn }),
    ...(input.FirewallId != null && { FirewallId: input.FirewallId }),
    ...(input.FirewallName != null && { FirewallName: input.FirewallName }),
    ...(input.FirewallPolicyArn != null && { FirewallPolicyArn: input.FirewallPolicyArn }),
    ...(input.FirewallPolicyChangeProtection != null && {
      FirewallPolicyChangeProtection: input.FirewallPolicyChangeProtection,
    }),
    ...(input.SubnetChangeProtection != null && { SubnetChangeProtection: input.SubnetChangeProtection }),
    ...(input.SubnetMappings != null && {
      SubnetMappings: serializeAws_restJson1AwsNetworkFirewallFirewallSubnetMappingsList(input.SubnetMappings, context),
    }),
    ...(input.VpcId != null && { VpcId: input.VpcId }),
  };
};

const serializeAws_restJson1AwsNetworkFirewallFirewallPolicyDetails = (
  input: AwsNetworkFirewallFirewallPolicyDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.FirewallPolicy != null && {
      FirewallPolicy: serializeAws_restJson1FirewallPolicyDetails(input.FirewallPolicy, context),
    }),
    ...(input.FirewallPolicyArn != null && { FirewallPolicyArn: input.FirewallPolicyArn }),
    ...(input.FirewallPolicyId != null && { FirewallPolicyId: input.FirewallPolicyId }),
    ...(input.FirewallPolicyName != null && { FirewallPolicyName: input.FirewallPolicyName }),
  };
};

const serializeAws_restJson1AwsNetworkFirewallFirewallSubnetMappingsDetails = (
  input: AwsNetworkFirewallFirewallSubnetMappingsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.SubnetId != null && { SubnetId: input.SubnetId }),
  };
};

const serializeAws_restJson1AwsNetworkFirewallFirewallSubnetMappingsList = (
  input: AwsNetworkFirewallFirewallSubnetMappingsDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsNetworkFirewallFirewallSubnetMappingsDetails(entry, context);
    });
};

const serializeAws_restJson1AwsNetworkFirewallRuleGroupDetails = (
  input: AwsNetworkFirewallRuleGroupDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Capacity != null && { Capacity: input.Capacity }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.RuleGroup != null && { RuleGroup: serializeAws_restJson1RuleGroupDetails(input.RuleGroup, context) }),
    ...(input.RuleGroupArn != null && { RuleGroupArn: input.RuleGroupArn }),
    ...(input.RuleGroupId != null && { RuleGroupId: input.RuleGroupId }),
    ...(input.RuleGroupName != null && { RuleGroupName: input.RuleGroupName }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_restJson1AwsOpenSearchServiceDomainAdvancedSecurityOptionsDetails = (
  input: AwsOpenSearchServiceDomainAdvancedSecurityOptionsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.InternalUserDatabaseEnabled != null && {
      InternalUserDatabaseEnabled: input.InternalUserDatabaseEnabled,
    }),
    ...(input.MasterUserOptions != null && {
      MasterUserOptions: serializeAws_restJson1AwsOpenSearchServiceDomainMasterUserOptionsDetails(
        input.MasterUserOptions,
        context
      ),
    }),
  };
};

const serializeAws_restJson1AwsOpenSearchServiceDomainClusterConfigDetails = (
  input: AwsOpenSearchServiceDomainClusterConfigDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.DedicatedMasterCount != null && { DedicatedMasterCount: input.DedicatedMasterCount }),
    ...(input.DedicatedMasterEnabled != null && { DedicatedMasterEnabled: input.DedicatedMasterEnabled }),
    ...(input.DedicatedMasterType != null && { DedicatedMasterType: input.DedicatedMasterType }),
    ...(input.InstanceCount != null && { InstanceCount: input.InstanceCount }),
    ...(input.InstanceType != null && { InstanceType: input.InstanceType }),
    ...(input.WarmCount != null && { WarmCount: input.WarmCount }),
    ...(input.WarmEnabled != null && { WarmEnabled: input.WarmEnabled }),
    ...(input.WarmType != null && { WarmType: input.WarmType }),
    ...(input.ZoneAwarenessConfig != null && {
      ZoneAwarenessConfig: serializeAws_restJson1AwsOpenSearchServiceDomainClusterConfigZoneAwarenessConfigDetails(
        input.ZoneAwarenessConfig,
        context
      ),
    }),
    ...(input.ZoneAwarenessEnabled != null && { ZoneAwarenessEnabled: input.ZoneAwarenessEnabled }),
  };
};

const serializeAws_restJson1AwsOpenSearchServiceDomainClusterConfigZoneAwarenessConfigDetails = (
  input: AwsOpenSearchServiceDomainClusterConfigZoneAwarenessConfigDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AvailabilityZoneCount != null && { AvailabilityZoneCount: input.AvailabilityZoneCount }),
  };
};

const serializeAws_restJson1AwsOpenSearchServiceDomainDetails = (
  input: AwsOpenSearchServiceDomainDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AccessPolicies != null && { AccessPolicies: input.AccessPolicies }),
    ...(input.AdvancedSecurityOptions != null && {
      AdvancedSecurityOptions: serializeAws_restJson1AwsOpenSearchServiceDomainAdvancedSecurityOptionsDetails(
        input.AdvancedSecurityOptions,
        context
      ),
    }),
    ...(input.Arn != null && { Arn: input.Arn }),
    ...(input.ClusterConfig != null && {
      ClusterConfig: serializeAws_restJson1AwsOpenSearchServiceDomainClusterConfigDetails(input.ClusterConfig, context),
    }),
    ...(input.DomainEndpoint != null && { DomainEndpoint: input.DomainEndpoint }),
    ...(input.DomainEndpointOptions != null && {
      DomainEndpointOptions: serializeAws_restJson1AwsOpenSearchServiceDomainDomainEndpointOptionsDetails(
        input.DomainEndpointOptions,
        context
      ),
    }),
    ...(input.DomainEndpoints != null && {
      DomainEndpoints: serializeAws_restJson1FieldMap(input.DomainEndpoints, context),
    }),
    ...(input.DomainName != null && { DomainName: input.DomainName }),
    ...(input.EncryptionAtRestOptions != null && {
      EncryptionAtRestOptions: serializeAws_restJson1AwsOpenSearchServiceDomainEncryptionAtRestOptionsDetails(
        input.EncryptionAtRestOptions,
        context
      ),
    }),
    ...(input.EngineVersion != null && { EngineVersion: input.EngineVersion }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.LogPublishingOptions != null && {
      LogPublishingOptions: serializeAws_restJson1AwsOpenSearchServiceDomainLogPublishingOptionsDetails(
        input.LogPublishingOptions,
        context
      ),
    }),
    ...(input.NodeToNodeEncryptionOptions != null && {
      NodeToNodeEncryptionOptions: serializeAws_restJson1AwsOpenSearchServiceDomainNodeToNodeEncryptionOptionsDetails(
        input.NodeToNodeEncryptionOptions,
        context
      ),
    }),
    ...(input.ServiceSoftwareOptions != null && {
      ServiceSoftwareOptions: serializeAws_restJson1AwsOpenSearchServiceDomainServiceSoftwareOptionsDetails(
        input.ServiceSoftwareOptions,
        context
      ),
    }),
    ...(input.VpcOptions != null && {
      VpcOptions: serializeAws_restJson1AwsOpenSearchServiceDomainVpcOptionsDetails(input.VpcOptions, context),
    }),
  };
};

const serializeAws_restJson1AwsOpenSearchServiceDomainDomainEndpointOptionsDetails = (
  input: AwsOpenSearchServiceDomainDomainEndpointOptionsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.CustomEndpoint != null && { CustomEndpoint: input.CustomEndpoint }),
    ...(input.CustomEndpointCertificateArn != null && {
      CustomEndpointCertificateArn: input.CustomEndpointCertificateArn,
    }),
    ...(input.CustomEndpointEnabled != null && { CustomEndpointEnabled: input.CustomEndpointEnabled }),
    ...(input.EnforceHTTPS != null && { EnforceHTTPS: input.EnforceHTTPS }),
    ...(input.TLSSecurityPolicy != null && { TLSSecurityPolicy: input.TLSSecurityPolicy }),
  };
};

const serializeAws_restJson1AwsOpenSearchServiceDomainEncryptionAtRestOptionsDetails = (
  input: AwsOpenSearchServiceDomainEncryptionAtRestOptionsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
  };
};

const serializeAws_restJson1AwsOpenSearchServiceDomainLogPublishingOption = (
  input: AwsOpenSearchServiceDomainLogPublishingOption,
  context: __SerdeContext
): any => {
  return {
    ...(input.CloudWatchLogsLogGroupArn != null && { CloudWatchLogsLogGroupArn: input.CloudWatchLogsLogGroupArn }),
    ...(input.Enabled != null && { Enabled: input.Enabled }),
  };
};

const serializeAws_restJson1AwsOpenSearchServiceDomainLogPublishingOptionsDetails = (
  input: AwsOpenSearchServiceDomainLogPublishingOptionsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AuditLogs != null && {
      AuditLogs: serializeAws_restJson1AwsOpenSearchServiceDomainLogPublishingOption(input.AuditLogs, context),
    }),
    ...(input.IndexSlowLogs != null && {
      IndexSlowLogs: serializeAws_restJson1AwsOpenSearchServiceDomainLogPublishingOption(input.IndexSlowLogs, context),
    }),
    ...(input.SearchSlowLogs != null && {
      SearchSlowLogs: serializeAws_restJson1AwsOpenSearchServiceDomainLogPublishingOption(
        input.SearchSlowLogs,
        context
      ),
    }),
  };
};

const serializeAws_restJson1AwsOpenSearchServiceDomainMasterUserOptionsDetails = (
  input: AwsOpenSearchServiceDomainMasterUserOptionsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.MasterUserArn != null && { MasterUserArn: input.MasterUserArn }),
    ...(input.MasterUserName != null && { MasterUserName: input.MasterUserName }),
    ...(input.MasterUserPassword != null && { MasterUserPassword: input.MasterUserPassword }),
  };
};

const serializeAws_restJson1AwsOpenSearchServiceDomainNodeToNodeEncryptionOptionsDetails = (
  input: AwsOpenSearchServiceDomainNodeToNodeEncryptionOptionsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Enabled != null && { Enabled: input.Enabled }),
  };
};

const serializeAws_restJson1AwsOpenSearchServiceDomainServiceSoftwareOptionsDetails = (
  input: AwsOpenSearchServiceDomainServiceSoftwareOptionsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutomatedUpdateDate != null && { AutomatedUpdateDate: input.AutomatedUpdateDate }),
    ...(input.Cancellable != null && { Cancellable: input.Cancellable }),
    ...(input.CurrentVersion != null && { CurrentVersion: input.CurrentVersion }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.NewVersion != null && { NewVersion: input.NewVersion }),
    ...(input.OptionalDeployment != null && { OptionalDeployment: input.OptionalDeployment }),
    ...(input.UpdateAvailable != null && { UpdateAvailable: input.UpdateAvailable }),
    ...(input.UpdateStatus != null && { UpdateStatus: input.UpdateStatus }),
  };
};

const serializeAws_restJson1AwsOpenSearchServiceDomainVpcOptionsDetails = (
  input: AwsOpenSearchServiceDomainVpcOptionsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.SecurityGroupIds != null && {
      SecurityGroupIds: serializeAws_restJson1NonEmptyStringList(input.SecurityGroupIds, context),
    }),
    ...(input.SubnetIds != null && { SubnetIds: serializeAws_restJson1NonEmptyStringList(input.SubnetIds, context) }),
  };
};

const serializeAws_restJson1AwsRdsDbClusterAssociatedRole = (
  input: AwsRdsDbClusterAssociatedRole,
  context: __SerdeContext
): any => {
  return {
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.Status != null && { Status: input.Status }),
  };
};

const serializeAws_restJson1AwsRdsDbClusterAssociatedRoles = (
  input: AwsRdsDbClusterAssociatedRole[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsRdsDbClusterAssociatedRole(entry, context);
    });
};

const serializeAws_restJson1AwsRdsDbClusterDetails = (input: AwsRdsDbClusterDetails, context: __SerdeContext): any => {
  return {
    ...(input.ActivityStreamStatus != null && { ActivityStreamStatus: input.ActivityStreamStatus }),
    ...(input.AllocatedStorage != null && { AllocatedStorage: input.AllocatedStorage }),
    ...(input.AssociatedRoles != null && {
      AssociatedRoles: serializeAws_restJson1AwsRdsDbClusterAssociatedRoles(input.AssociatedRoles, context),
    }),
    ...(input.AvailabilityZones != null && {
      AvailabilityZones: serializeAws_restJson1StringList(input.AvailabilityZones, context),
    }),
    ...(input.BackupRetentionPeriod != null && { BackupRetentionPeriod: input.BackupRetentionPeriod }),
    ...(input.ClusterCreateTime != null && { ClusterCreateTime: input.ClusterCreateTime }),
    ...(input.CopyTagsToSnapshot != null && { CopyTagsToSnapshot: input.CopyTagsToSnapshot }),
    ...(input.CrossAccountClone != null && { CrossAccountClone: input.CrossAccountClone }),
    ...(input.CustomEndpoints != null && {
      CustomEndpoints: serializeAws_restJson1StringList(input.CustomEndpoints, context),
    }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.DbClusterIdentifier != null && { DbClusterIdentifier: input.DbClusterIdentifier }),
    ...(input.DbClusterMembers != null && {
      DbClusterMembers: serializeAws_restJson1AwsRdsDbClusterMembers(input.DbClusterMembers, context),
    }),
    ...(input.DbClusterOptionGroupMemberships != null && {
      DbClusterOptionGroupMemberships: serializeAws_restJson1AwsRdsDbClusterOptionGroupMemberships(
        input.DbClusterOptionGroupMemberships,
        context
      ),
    }),
    ...(input.DbClusterParameterGroup != null && { DbClusterParameterGroup: input.DbClusterParameterGroup }),
    ...(input.DbClusterResourceId != null && { DbClusterResourceId: input.DbClusterResourceId }),
    ...(input.DbSubnetGroup != null && { DbSubnetGroup: input.DbSubnetGroup }),
    ...(input.DeletionProtection != null && { DeletionProtection: input.DeletionProtection }),
    ...(input.DomainMemberships != null && {
      DomainMemberships: serializeAws_restJson1AwsRdsDbDomainMemberships(input.DomainMemberships, context),
    }),
    ...(input.EnabledCloudWatchLogsExports != null && {
      EnabledCloudWatchLogsExports: serializeAws_restJson1StringList(input.EnabledCloudWatchLogsExports, context),
    }),
    ...(input.Endpoint != null && { Endpoint: input.Endpoint }),
    ...(input.Engine != null && { Engine: input.Engine }),
    ...(input.EngineMode != null && { EngineMode: input.EngineMode }),
    ...(input.EngineVersion != null && { EngineVersion: input.EngineVersion }),
    ...(input.HostedZoneId != null && { HostedZoneId: input.HostedZoneId }),
    ...(input.HttpEndpointEnabled != null && { HttpEndpointEnabled: input.HttpEndpointEnabled }),
    ...(input.IamDatabaseAuthenticationEnabled != null && {
      IamDatabaseAuthenticationEnabled: input.IamDatabaseAuthenticationEnabled,
    }),
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.MasterUsername != null && { MasterUsername: input.MasterUsername }),
    ...(input.MultiAz != null && { MultiAz: input.MultiAz }),
    ...(input.Port != null && { Port: input.Port }),
    ...(input.PreferredBackupWindow != null && { PreferredBackupWindow: input.PreferredBackupWindow }),
    ...(input.PreferredMaintenanceWindow != null && { PreferredMaintenanceWindow: input.PreferredMaintenanceWindow }),
    ...(input.ReadReplicaIdentifiers != null && {
      ReadReplicaIdentifiers: serializeAws_restJson1StringList(input.ReadReplicaIdentifiers, context),
    }),
    ...(input.ReaderEndpoint != null && { ReaderEndpoint: input.ReaderEndpoint }),
    ...(input.Status != null && { Status: input.Status }),
    ...(input.StorageEncrypted != null && { StorageEncrypted: input.StorageEncrypted }),
    ...(input.VpcSecurityGroups != null && {
      VpcSecurityGroups: serializeAws_restJson1AwsRdsDbInstanceVpcSecurityGroups(input.VpcSecurityGroups, context),
    }),
  };
};

const serializeAws_restJson1AwsRdsDbClusterMember = (input: AwsRdsDbClusterMember, context: __SerdeContext): any => {
  return {
    ...(input.DbClusterParameterGroupStatus != null && {
      DbClusterParameterGroupStatus: input.DbClusterParameterGroupStatus,
    }),
    ...(input.DbInstanceIdentifier != null && { DbInstanceIdentifier: input.DbInstanceIdentifier }),
    ...(input.IsClusterWriter != null && { IsClusterWriter: input.IsClusterWriter }),
    ...(input.PromotionTier != null && { PromotionTier: input.PromotionTier }),
  };
};

const serializeAws_restJson1AwsRdsDbClusterMembers = (input: AwsRdsDbClusterMember[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsRdsDbClusterMember(entry, context);
    });
};

const serializeAws_restJson1AwsRdsDbClusterOptionGroupMembership = (
  input: AwsRdsDbClusterOptionGroupMembership,
  context: __SerdeContext
): any => {
  return {
    ...(input.DbClusterOptionGroupName != null && { DbClusterOptionGroupName: input.DbClusterOptionGroupName }),
    ...(input.Status != null && { Status: input.Status }),
  };
};

const serializeAws_restJson1AwsRdsDbClusterOptionGroupMemberships = (
  input: AwsRdsDbClusterOptionGroupMembership[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsRdsDbClusterOptionGroupMembership(entry, context);
    });
};

const serializeAws_restJson1AwsRdsDbClusterSnapshotDetails = (
  input: AwsRdsDbClusterSnapshotDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AllocatedStorage != null && { AllocatedStorage: input.AllocatedStorage }),
    ...(input.AvailabilityZones != null && {
      AvailabilityZones: serializeAws_restJson1StringList(input.AvailabilityZones, context),
    }),
    ...(input.ClusterCreateTime != null && { ClusterCreateTime: input.ClusterCreateTime }),
    ...(input.DbClusterIdentifier != null && { DbClusterIdentifier: input.DbClusterIdentifier }),
    ...(input.DbClusterSnapshotIdentifier != null && {
      DbClusterSnapshotIdentifier: input.DbClusterSnapshotIdentifier,
    }),
    ...(input.Engine != null && { Engine: input.Engine }),
    ...(input.EngineVersion != null && { EngineVersion: input.EngineVersion }),
    ...(input.IamDatabaseAuthenticationEnabled != null && {
      IamDatabaseAuthenticationEnabled: input.IamDatabaseAuthenticationEnabled,
    }),
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.LicenseModel != null && { LicenseModel: input.LicenseModel }),
    ...(input.MasterUsername != null && { MasterUsername: input.MasterUsername }),
    ...(input.PercentProgress != null && { PercentProgress: input.PercentProgress }),
    ...(input.Port != null && { Port: input.Port }),
    ...(input.SnapshotCreateTime != null && { SnapshotCreateTime: input.SnapshotCreateTime }),
    ...(input.SnapshotType != null && { SnapshotType: input.SnapshotType }),
    ...(input.Status != null && { Status: input.Status }),
    ...(input.StorageEncrypted != null && { StorageEncrypted: input.StorageEncrypted }),
    ...(input.VpcId != null && { VpcId: input.VpcId }),
  };
};

const serializeAws_restJson1AwsRdsDbDomainMembership = (
  input: AwsRdsDbDomainMembership,
  context: __SerdeContext
): any => {
  return {
    ...(input.Domain != null && { Domain: input.Domain }),
    ...(input.Fqdn != null && { Fqdn: input.Fqdn }),
    ...(input.IamRoleName != null && { IamRoleName: input.IamRoleName }),
    ...(input.Status != null && { Status: input.Status }),
  };
};

const serializeAws_restJson1AwsRdsDbDomainMemberships = (
  input: AwsRdsDbDomainMembership[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsRdsDbDomainMembership(entry, context);
    });
};

const serializeAws_restJson1AwsRdsDbInstanceAssociatedRole = (
  input: AwsRdsDbInstanceAssociatedRole,
  context: __SerdeContext
): any => {
  return {
    ...(input.FeatureName != null && { FeatureName: input.FeatureName }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.Status != null && { Status: input.Status }),
  };
};

const serializeAws_restJson1AwsRdsDbInstanceAssociatedRoles = (
  input: AwsRdsDbInstanceAssociatedRole[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsRdsDbInstanceAssociatedRole(entry, context);
    });
};

const serializeAws_restJson1AwsRdsDbInstanceDetails = (
  input: AwsRdsDbInstanceDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AllocatedStorage != null && { AllocatedStorage: input.AllocatedStorage }),
    ...(input.AssociatedRoles != null && {
      AssociatedRoles: serializeAws_restJson1AwsRdsDbInstanceAssociatedRoles(input.AssociatedRoles, context),
    }),
    ...(input.AutoMinorVersionUpgrade != null && { AutoMinorVersionUpgrade: input.AutoMinorVersionUpgrade }),
    ...(input.AvailabilityZone != null && { AvailabilityZone: input.AvailabilityZone }),
    ...(input.BackupRetentionPeriod != null && { BackupRetentionPeriod: input.BackupRetentionPeriod }),
    ...(input.CACertificateIdentifier != null && { CACertificateIdentifier: input.CACertificateIdentifier }),
    ...(input.CharacterSetName != null && { CharacterSetName: input.CharacterSetName }),
    ...(input.CopyTagsToSnapshot != null && { CopyTagsToSnapshot: input.CopyTagsToSnapshot }),
    ...(input.DBClusterIdentifier != null && { DBClusterIdentifier: input.DBClusterIdentifier }),
    ...(input.DBInstanceClass != null && { DBInstanceClass: input.DBInstanceClass }),
    ...(input.DBInstanceIdentifier != null && { DBInstanceIdentifier: input.DBInstanceIdentifier }),
    ...(input.DBName != null && { DBName: input.DBName }),
    ...(input.DbInstancePort != null && { DbInstancePort: input.DbInstancePort }),
    ...(input.DbInstanceStatus != null && { DbInstanceStatus: input.DbInstanceStatus }),
    ...(input.DbParameterGroups != null && {
      DbParameterGroups: serializeAws_restJson1AwsRdsDbParameterGroups(input.DbParameterGroups, context),
    }),
    ...(input.DbSecurityGroups != null && {
      DbSecurityGroups: serializeAws_restJson1StringList(input.DbSecurityGroups, context),
    }),
    ...(input.DbSubnetGroup != null && {
      DbSubnetGroup: serializeAws_restJson1AwsRdsDbSubnetGroup(input.DbSubnetGroup, context),
    }),
    ...(input.DbiResourceId != null && { DbiResourceId: input.DbiResourceId }),
    ...(input.DeletionProtection != null && { DeletionProtection: input.DeletionProtection }),
    ...(input.DomainMemberships != null && {
      DomainMemberships: serializeAws_restJson1AwsRdsDbDomainMemberships(input.DomainMemberships, context),
    }),
    ...(input.EnabledCloudWatchLogsExports != null && {
      EnabledCloudWatchLogsExports: serializeAws_restJson1StringList(input.EnabledCloudWatchLogsExports, context),
    }),
    ...(input.Endpoint != null && {
      Endpoint: serializeAws_restJson1AwsRdsDbInstanceEndpoint(input.Endpoint, context),
    }),
    ...(input.Engine != null && { Engine: input.Engine }),
    ...(input.EngineVersion != null && { EngineVersion: input.EngineVersion }),
    ...(input.EnhancedMonitoringResourceArn != null && {
      EnhancedMonitoringResourceArn: input.EnhancedMonitoringResourceArn,
    }),
    ...(input.IAMDatabaseAuthenticationEnabled != null && {
      IAMDatabaseAuthenticationEnabled: input.IAMDatabaseAuthenticationEnabled,
    }),
    ...(input.InstanceCreateTime != null && { InstanceCreateTime: input.InstanceCreateTime }),
    ...(input.Iops != null && { Iops: input.Iops }),
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.LatestRestorableTime != null && { LatestRestorableTime: input.LatestRestorableTime }),
    ...(input.LicenseModel != null && { LicenseModel: input.LicenseModel }),
    ...(input.ListenerEndpoint != null && {
      ListenerEndpoint: serializeAws_restJson1AwsRdsDbInstanceEndpoint(input.ListenerEndpoint, context),
    }),
    ...(input.MasterUsername != null && { MasterUsername: input.MasterUsername }),
    ...(input.MaxAllocatedStorage != null && { MaxAllocatedStorage: input.MaxAllocatedStorage }),
    ...(input.MonitoringInterval != null && { MonitoringInterval: input.MonitoringInterval }),
    ...(input.MonitoringRoleArn != null && { MonitoringRoleArn: input.MonitoringRoleArn }),
    ...(input.MultiAz != null && { MultiAz: input.MultiAz }),
    ...(input.OptionGroupMemberships != null && {
      OptionGroupMemberships: serializeAws_restJson1AwsRdsDbOptionGroupMemberships(
        input.OptionGroupMemberships,
        context
      ),
    }),
    ...(input.PendingModifiedValues != null && {
      PendingModifiedValues: serializeAws_restJson1AwsRdsDbPendingModifiedValues(input.PendingModifiedValues, context),
    }),
    ...(input.PerformanceInsightsEnabled != null && { PerformanceInsightsEnabled: input.PerformanceInsightsEnabled }),
    ...(input.PerformanceInsightsKmsKeyId != null && {
      PerformanceInsightsKmsKeyId: input.PerformanceInsightsKmsKeyId,
    }),
    ...(input.PerformanceInsightsRetentionPeriod != null && {
      PerformanceInsightsRetentionPeriod: input.PerformanceInsightsRetentionPeriod,
    }),
    ...(input.PreferredBackupWindow != null && { PreferredBackupWindow: input.PreferredBackupWindow }),
    ...(input.PreferredMaintenanceWindow != null && { PreferredMaintenanceWindow: input.PreferredMaintenanceWindow }),
    ...(input.ProcessorFeatures != null && {
      ProcessorFeatures: serializeAws_restJson1AwsRdsDbProcessorFeatures(input.ProcessorFeatures, context),
    }),
    ...(input.PromotionTier != null && { PromotionTier: input.PromotionTier }),
    ...(input.PubliclyAccessible != null && { PubliclyAccessible: input.PubliclyAccessible }),
    ...(input.ReadReplicaDBClusterIdentifiers != null && {
      ReadReplicaDBClusterIdentifiers: serializeAws_restJson1StringList(input.ReadReplicaDBClusterIdentifiers, context),
    }),
    ...(input.ReadReplicaDBInstanceIdentifiers != null && {
      ReadReplicaDBInstanceIdentifiers: serializeAws_restJson1StringList(
        input.ReadReplicaDBInstanceIdentifiers,
        context
      ),
    }),
    ...(input.ReadReplicaSourceDBInstanceIdentifier != null && {
      ReadReplicaSourceDBInstanceIdentifier: input.ReadReplicaSourceDBInstanceIdentifier,
    }),
    ...(input.SecondaryAvailabilityZone != null && { SecondaryAvailabilityZone: input.SecondaryAvailabilityZone }),
    ...(input.StatusInfos != null && {
      StatusInfos: serializeAws_restJson1AwsRdsDbStatusInfos(input.StatusInfos, context),
    }),
    ...(input.StorageEncrypted != null && { StorageEncrypted: input.StorageEncrypted }),
    ...(input.StorageType != null && { StorageType: input.StorageType }),
    ...(input.TdeCredentialArn != null && { TdeCredentialArn: input.TdeCredentialArn }),
    ...(input.Timezone != null && { Timezone: input.Timezone }),
    ...(input.VpcSecurityGroups != null && {
      VpcSecurityGroups: serializeAws_restJson1AwsRdsDbInstanceVpcSecurityGroups(input.VpcSecurityGroups, context),
    }),
  };
};

const serializeAws_restJson1AwsRdsDbInstanceEndpoint = (
  input: AwsRdsDbInstanceEndpoint,
  context: __SerdeContext
): any => {
  return {
    ...(input.Address != null && { Address: input.Address }),
    ...(input.HostedZoneId != null && { HostedZoneId: input.HostedZoneId }),
    ...(input.Port != null && { Port: input.Port }),
  };
};

const serializeAws_restJson1AwsRdsDbInstanceVpcSecurityGroup = (
  input: AwsRdsDbInstanceVpcSecurityGroup,
  context: __SerdeContext
): any => {
  return {
    ...(input.Status != null && { Status: input.Status }),
    ...(input.VpcSecurityGroupId != null && { VpcSecurityGroupId: input.VpcSecurityGroupId }),
  };
};

const serializeAws_restJson1AwsRdsDbInstanceVpcSecurityGroups = (
  input: AwsRdsDbInstanceVpcSecurityGroup[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsRdsDbInstanceVpcSecurityGroup(entry, context);
    });
};

const serializeAws_restJson1AwsRdsDbOptionGroupMembership = (
  input: AwsRdsDbOptionGroupMembership,
  context: __SerdeContext
): any => {
  return {
    ...(input.OptionGroupName != null && { OptionGroupName: input.OptionGroupName }),
    ...(input.Status != null && { Status: input.Status }),
  };
};

const serializeAws_restJson1AwsRdsDbOptionGroupMemberships = (
  input: AwsRdsDbOptionGroupMembership[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsRdsDbOptionGroupMembership(entry, context);
    });
};

const serializeAws_restJson1AwsRdsDbParameterGroup = (input: AwsRdsDbParameterGroup, context: __SerdeContext): any => {
  return {
    ...(input.DbParameterGroupName != null && { DbParameterGroupName: input.DbParameterGroupName }),
    ...(input.ParameterApplyStatus != null && { ParameterApplyStatus: input.ParameterApplyStatus }),
  };
};

const serializeAws_restJson1AwsRdsDbParameterGroups = (
  input: AwsRdsDbParameterGroup[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsRdsDbParameterGroup(entry, context);
    });
};

const serializeAws_restJson1AwsRdsDbPendingModifiedValues = (
  input: AwsRdsDbPendingModifiedValues,
  context: __SerdeContext
): any => {
  return {
    ...(input.AllocatedStorage != null && { AllocatedStorage: input.AllocatedStorage }),
    ...(input.BackupRetentionPeriod != null && { BackupRetentionPeriod: input.BackupRetentionPeriod }),
    ...(input.CaCertificateIdentifier != null && { CaCertificateIdentifier: input.CaCertificateIdentifier }),
    ...(input.DbInstanceClass != null && { DbInstanceClass: input.DbInstanceClass }),
    ...(input.DbInstanceIdentifier != null && { DbInstanceIdentifier: input.DbInstanceIdentifier }),
    ...(input.DbSubnetGroupName != null && { DbSubnetGroupName: input.DbSubnetGroupName }),
    ...(input.EngineVersion != null && { EngineVersion: input.EngineVersion }),
    ...(input.Iops != null && { Iops: input.Iops }),
    ...(input.LicenseModel != null && { LicenseModel: input.LicenseModel }),
    ...(input.MasterUserPassword != null && { MasterUserPassword: input.MasterUserPassword }),
    ...(input.MultiAZ != null && { MultiAZ: input.MultiAZ }),
    ...(input.PendingCloudWatchLogsExports != null && {
      PendingCloudWatchLogsExports: serializeAws_restJson1AwsRdsPendingCloudWatchLogsExports(
        input.PendingCloudWatchLogsExports,
        context
      ),
    }),
    ...(input.Port != null && { Port: input.Port }),
    ...(input.ProcessorFeatures != null && {
      ProcessorFeatures: serializeAws_restJson1AwsRdsDbProcessorFeatures(input.ProcessorFeatures, context),
    }),
    ...(input.StorageType != null && { StorageType: input.StorageType }),
  };
};

const serializeAws_restJson1AwsRdsDbProcessorFeature = (
  input: AwsRdsDbProcessorFeature,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_restJson1AwsRdsDbProcessorFeatures = (
  input: AwsRdsDbProcessorFeature[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsRdsDbProcessorFeature(entry, context);
    });
};

const serializeAws_restJson1AwsRdsDbSecurityGroupDetails = (
  input: AwsRdsDbSecurityGroupDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.DbSecurityGroupArn != null && { DbSecurityGroupArn: input.DbSecurityGroupArn }),
    ...(input.DbSecurityGroupDescription != null && { DbSecurityGroupDescription: input.DbSecurityGroupDescription }),
    ...(input.DbSecurityGroupName != null && { DbSecurityGroupName: input.DbSecurityGroupName }),
    ...(input.Ec2SecurityGroups != null && {
      Ec2SecurityGroups: serializeAws_restJson1AwsRdsDbSecurityGroupEc2SecurityGroups(input.Ec2SecurityGroups, context),
    }),
    ...(input.IpRanges != null && {
      IpRanges: serializeAws_restJson1AwsRdsDbSecurityGroupIpRanges(input.IpRanges, context),
    }),
    ...(input.OwnerId != null && { OwnerId: input.OwnerId }),
    ...(input.VpcId != null && { VpcId: input.VpcId }),
  };
};

const serializeAws_restJson1AwsRdsDbSecurityGroupEc2SecurityGroup = (
  input: AwsRdsDbSecurityGroupEc2SecurityGroup,
  context: __SerdeContext
): any => {
  return {
    ...(input.Ec2SecurityGroupId != null && { Ec2SecurityGroupId: input.Ec2SecurityGroupId }),
    ...(input.Ec2SecurityGroupName != null && { Ec2SecurityGroupName: input.Ec2SecurityGroupName }),
    ...(input.Ec2SecurityGroupOwnerId != null && { Ec2SecurityGroupOwnerId: input.Ec2SecurityGroupOwnerId }),
    ...(input.Status != null && { Status: input.Status }),
  };
};

const serializeAws_restJson1AwsRdsDbSecurityGroupEc2SecurityGroups = (
  input: AwsRdsDbSecurityGroupEc2SecurityGroup[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsRdsDbSecurityGroupEc2SecurityGroup(entry, context);
    });
};

const serializeAws_restJson1AwsRdsDbSecurityGroupIpRange = (
  input: AwsRdsDbSecurityGroupIpRange,
  context: __SerdeContext
): any => {
  return {
    ...(input.CidrIp != null && { CidrIp: input.CidrIp }),
    ...(input.Status != null && { Status: input.Status }),
  };
};

const serializeAws_restJson1AwsRdsDbSecurityGroupIpRanges = (
  input: AwsRdsDbSecurityGroupIpRange[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsRdsDbSecurityGroupIpRange(entry, context);
    });
};

const serializeAws_restJson1AwsRdsDbSnapshotDetails = (
  input: AwsRdsDbSnapshotDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AllocatedStorage != null && { AllocatedStorage: input.AllocatedStorage }),
    ...(input.AvailabilityZone != null && { AvailabilityZone: input.AvailabilityZone }),
    ...(input.DbInstanceIdentifier != null && { DbInstanceIdentifier: input.DbInstanceIdentifier }),
    ...(input.DbSnapshotIdentifier != null && { DbSnapshotIdentifier: input.DbSnapshotIdentifier }),
    ...(input.DbiResourceId != null && { DbiResourceId: input.DbiResourceId }),
    ...(input.Encrypted != null && { Encrypted: input.Encrypted }),
    ...(input.Engine != null && { Engine: input.Engine }),
    ...(input.EngineVersion != null && { EngineVersion: input.EngineVersion }),
    ...(input.IamDatabaseAuthenticationEnabled != null && {
      IamDatabaseAuthenticationEnabled: input.IamDatabaseAuthenticationEnabled,
    }),
    ...(input.InstanceCreateTime != null && { InstanceCreateTime: input.InstanceCreateTime }),
    ...(input.Iops != null && { Iops: input.Iops }),
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.LicenseModel != null && { LicenseModel: input.LicenseModel }),
    ...(input.MasterUsername != null && { MasterUsername: input.MasterUsername }),
    ...(input.OptionGroupName != null && { OptionGroupName: input.OptionGroupName }),
    ...(input.PercentProgress != null && { PercentProgress: input.PercentProgress }),
    ...(input.Port != null && { Port: input.Port }),
    ...(input.ProcessorFeatures != null && {
      ProcessorFeatures: serializeAws_restJson1AwsRdsDbProcessorFeatures(input.ProcessorFeatures, context),
    }),
    ...(input.SnapshotCreateTime != null && { SnapshotCreateTime: input.SnapshotCreateTime }),
    ...(input.SnapshotType != null && { SnapshotType: input.SnapshotType }),
    ...(input.SourceDbSnapshotIdentifier != null && { SourceDbSnapshotIdentifier: input.SourceDbSnapshotIdentifier }),
    ...(input.SourceRegion != null && { SourceRegion: input.SourceRegion }),
    ...(input.Status != null && { Status: input.Status }),
    ...(input.StorageType != null && { StorageType: input.StorageType }),
    ...(input.TdeCredentialArn != null && { TdeCredentialArn: input.TdeCredentialArn }),
    ...(input.Timezone != null && { Timezone: input.Timezone }),
    ...(input.VpcId != null && { VpcId: input.VpcId }),
  };
};

const serializeAws_restJson1AwsRdsDbStatusInfo = (input: AwsRdsDbStatusInfo, context: __SerdeContext): any => {
  return {
    ...(input.Message != null && { Message: input.Message }),
    ...(input.Normal != null && { Normal: input.Normal }),
    ...(input.Status != null && { Status: input.Status }),
    ...(input.StatusType != null && { StatusType: input.StatusType }),
  };
};

const serializeAws_restJson1AwsRdsDbStatusInfos = (input: AwsRdsDbStatusInfo[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsRdsDbStatusInfo(entry, context);
    });
};

const serializeAws_restJson1AwsRdsDbSubnetGroup = (input: AwsRdsDbSubnetGroup, context: __SerdeContext): any => {
  return {
    ...(input.DbSubnetGroupArn != null && { DbSubnetGroupArn: input.DbSubnetGroupArn }),
    ...(input.DbSubnetGroupDescription != null && { DbSubnetGroupDescription: input.DbSubnetGroupDescription }),
    ...(input.DbSubnetGroupName != null && { DbSubnetGroupName: input.DbSubnetGroupName }),
    ...(input.SubnetGroupStatus != null && { SubnetGroupStatus: input.SubnetGroupStatus }),
    ...(input.Subnets != null && { Subnets: serializeAws_restJson1AwsRdsDbSubnetGroupSubnets(input.Subnets, context) }),
    ...(input.VpcId != null && { VpcId: input.VpcId }),
  };
};

const serializeAws_restJson1AwsRdsDbSubnetGroupSubnet = (
  input: AwsRdsDbSubnetGroupSubnet,
  context: __SerdeContext
): any => {
  return {
    ...(input.SubnetAvailabilityZone != null && {
      SubnetAvailabilityZone: serializeAws_restJson1AwsRdsDbSubnetGroupSubnetAvailabilityZone(
        input.SubnetAvailabilityZone,
        context
      ),
    }),
    ...(input.SubnetIdentifier != null && { SubnetIdentifier: input.SubnetIdentifier }),
    ...(input.SubnetStatus != null && { SubnetStatus: input.SubnetStatus }),
  };
};

const serializeAws_restJson1AwsRdsDbSubnetGroupSubnetAvailabilityZone = (
  input: AwsRdsDbSubnetGroupSubnetAvailabilityZone,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_restJson1AwsRdsDbSubnetGroupSubnets = (
  input: AwsRdsDbSubnetGroupSubnet[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsRdsDbSubnetGroupSubnet(entry, context);
    });
};

const serializeAws_restJson1AwsRdsEventSubscriptionDetails = (
  input: AwsRdsEventSubscriptionDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.CustSubscriptionId != null && { CustSubscriptionId: input.CustSubscriptionId }),
    ...(input.CustomerAwsId != null && { CustomerAwsId: input.CustomerAwsId }),
    ...(input.Enabled != null && { Enabled: input.Enabled }),
    ...(input.EventCategoriesList != null && {
      EventCategoriesList: serializeAws_restJson1NonEmptyStringList(input.EventCategoriesList, context),
    }),
    ...(input.EventSubscriptionArn != null && { EventSubscriptionArn: input.EventSubscriptionArn }),
    ...(input.SnsTopicArn != null && { SnsTopicArn: input.SnsTopicArn }),
    ...(input.SourceIdsList != null && {
      SourceIdsList: serializeAws_restJson1NonEmptyStringList(input.SourceIdsList, context),
    }),
    ...(input.SourceType != null && { SourceType: input.SourceType }),
    ...(input.Status != null && { Status: input.Status }),
    ...(input.SubscriptionCreationTime != null && { SubscriptionCreationTime: input.SubscriptionCreationTime }),
  };
};

const serializeAws_restJson1AwsRdsPendingCloudWatchLogsExports = (
  input: AwsRdsPendingCloudWatchLogsExports,
  context: __SerdeContext
): any => {
  return {
    ...(input.LogTypesToDisable != null && {
      LogTypesToDisable: serializeAws_restJson1StringList(input.LogTypesToDisable, context),
    }),
    ...(input.LogTypesToEnable != null && {
      LogTypesToEnable: serializeAws_restJson1StringList(input.LogTypesToEnable, context),
    }),
  };
};

const serializeAws_restJson1AwsRedshiftClusterClusterNode = (
  input: AwsRedshiftClusterClusterNode,
  context: __SerdeContext
): any => {
  return {
    ...(input.NodeRole != null && { NodeRole: input.NodeRole }),
    ...(input.PrivateIpAddress != null && { PrivateIpAddress: input.PrivateIpAddress }),
    ...(input.PublicIpAddress != null && { PublicIpAddress: input.PublicIpAddress }),
  };
};

const serializeAws_restJson1AwsRedshiftClusterClusterNodes = (
  input: AwsRedshiftClusterClusterNode[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsRedshiftClusterClusterNode(entry, context);
    });
};

const serializeAws_restJson1AwsRedshiftClusterClusterParameterGroup = (
  input: AwsRedshiftClusterClusterParameterGroup,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClusterParameterStatusList != null && {
      ClusterParameterStatusList: serializeAws_restJson1AwsRedshiftClusterClusterParameterStatusList(
        input.ClusterParameterStatusList,
        context
      ),
    }),
    ...(input.ParameterApplyStatus != null && { ParameterApplyStatus: input.ParameterApplyStatus }),
    ...(input.ParameterGroupName != null && { ParameterGroupName: input.ParameterGroupName }),
  };
};

const serializeAws_restJson1AwsRedshiftClusterClusterParameterGroups = (
  input: AwsRedshiftClusterClusterParameterGroup[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsRedshiftClusterClusterParameterGroup(entry, context);
    });
};

const serializeAws_restJson1AwsRedshiftClusterClusterParameterStatus = (
  input: AwsRedshiftClusterClusterParameterStatus,
  context: __SerdeContext
): any => {
  return {
    ...(input.ParameterApplyErrorDescription != null && {
      ParameterApplyErrorDescription: input.ParameterApplyErrorDescription,
    }),
    ...(input.ParameterApplyStatus != null && { ParameterApplyStatus: input.ParameterApplyStatus }),
    ...(input.ParameterName != null && { ParameterName: input.ParameterName }),
  };
};

const serializeAws_restJson1AwsRedshiftClusterClusterParameterStatusList = (
  input: AwsRedshiftClusterClusterParameterStatus[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsRedshiftClusterClusterParameterStatus(entry, context);
    });
};

const serializeAws_restJson1AwsRedshiftClusterClusterSecurityGroup = (
  input: AwsRedshiftClusterClusterSecurityGroup,
  context: __SerdeContext
): any => {
  return {
    ...(input.ClusterSecurityGroupName != null && { ClusterSecurityGroupName: input.ClusterSecurityGroupName }),
    ...(input.Status != null && { Status: input.Status }),
  };
};

const serializeAws_restJson1AwsRedshiftClusterClusterSecurityGroups = (
  input: AwsRedshiftClusterClusterSecurityGroup[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsRedshiftClusterClusterSecurityGroup(entry, context);
    });
};

const serializeAws_restJson1AwsRedshiftClusterClusterSnapshotCopyStatus = (
  input: AwsRedshiftClusterClusterSnapshotCopyStatus,
  context: __SerdeContext
): any => {
  return {
    ...(input.DestinationRegion != null && { DestinationRegion: input.DestinationRegion }),
    ...(input.ManualSnapshotRetentionPeriod != null && {
      ManualSnapshotRetentionPeriod: input.ManualSnapshotRetentionPeriod,
    }),
    ...(input.RetentionPeriod != null && { RetentionPeriod: input.RetentionPeriod }),
    ...(input.SnapshotCopyGrantName != null && { SnapshotCopyGrantName: input.SnapshotCopyGrantName }),
  };
};

const serializeAws_restJson1AwsRedshiftClusterDeferredMaintenanceWindow = (
  input: AwsRedshiftClusterDeferredMaintenanceWindow,
  context: __SerdeContext
): any => {
  return {
    ...(input.DeferMaintenanceEndTime != null && { DeferMaintenanceEndTime: input.DeferMaintenanceEndTime }),
    ...(input.DeferMaintenanceIdentifier != null && { DeferMaintenanceIdentifier: input.DeferMaintenanceIdentifier }),
    ...(input.DeferMaintenanceStartTime != null && { DeferMaintenanceStartTime: input.DeferMaintenanceStartTime }),
  };
};

const serializeAws_restJson1AwsRedshiftClusterDeferredMaintenanceWindows = (
  input: AwsRedshiftClusterDeferredMaintenanceWindow[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsRedshiftClusterDeferredMaintenanceWindow(entry, context);
    });
};

const serializeAws_restJson1AwsRedshiftClusterDetails = (
  input: AwsRedshiftClusterDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AllowVersionUpgrade != null && { AllowVersionUpgrade: input.AllowVersionUpgrade }),
    ...(input.AutomatedSnapshotRetentionPeriod != null && {
      AutomatedSnapshotRetentionPeriod: input.AutomatedSnapshotRetentionPeriod,
    }),
    ...(input.AvailabilityZone != null && { AvailabilityZone: input.AvailabilityZone }),
    ...(input.ClusterAvailabilityStatus != null && { ClusterAvailabilityStatus: input.ClusterAvailabilityStatus }),
    ...(input.ClusterCreateTime != null && { ClusterCreateTime: input.ClusterCreateTime }),
    ...(input.ClusterIdentifier != null && { ClusterIdentifier: input.ClusterIdentifier }),
    ...(input.ClusterNodes != null && {
      ClusterNodes: serializeAws_restJson1AwsRedshiftClusterClusterNodes(input.ClusterNodes, context),
    }),
    ...(input.ClusterParameterGroups != null && {
      ClusterParameterGroups: serializeAws_restJson1AwsRedshiftClusterClusterParameterGroups(
        input.ClusterParameterGroups,
        context
      ),
    }),
    ...(input.ClusterPublicKey != null && { ClusterPublicKey: input.ClusterPublicKey }),
    ...(input.ClusterRevisionNumber != null && { ClusterRevisionNumber: input.ClusterRevisionNumber }),
    ...(input.ClusterSecurityGroups != null && {
      ClusterSecurityGroups: serializeAws_restJson1AwsRedshiftClusterClusterSecurityGroups(
        input.ClusterSecurityGroups,
        context
      ),
    }),
    ...(input.ClusterSnapshotCopyStatus != null && {
      ClusterSnapshotCopyStatus: serializeAws_restJson1AwsRedshiftClusterClusterSnapshotCopyStatus(
        input.ClusterSnapshotCopyStatus,
        context
      ),
    }),
    ...(input.ClusterStatus != null && { ClusterStatus: input.ClusterStatus }),
    ...(input.ClusterSubnetGroupName != null && { ClusterSubnetGroupName: input.ClusterSubnetGroupName }),
    ...(input.ClusterVersion != null && { ClusterVersion: input.ClusterVersion }),
    ...(input.DBName != null && { DBName: input.DBName }),
    ...(input.DeferredMaintenanceWindows != null && {
      DeferredMaintenanceWindows: serializeAws_restJson1AwsRedshiftClusterDeferredMaintenanceWindows(
        input.DeferredMaintenanceWindows,
        context
      ),
    }),
    ...(input.ElasticIpStatus != null && {
      ElasticIpStatus: serializeAws_restJson1AwsRedshiftClusterElasticIpStatus(input.ElasticIpStatus, context),
    }),
    ...(input.ElasticResizeNumberOfNodeOptions != null && {
      ElasticResizeNumberOfNodeOptions: input.ElasticResizeNumberOfNodeOptions,
    }),
    ...(input.Encrypted != null && { Encrypted: input.Encrypted }),
    ...(input.Endpoint != null && {
      Endpoint: serializeAws_restJson1AwsRedshiftClusterEndpoint(input.Endpoint, context),
    }),
    ...(input.EnhancedVpcRouting != null && { EnhancedVpcRouting: input.EnhancedVpcRouting }),
    ...(input.ExpectedNextSnapshotScheduleTime != null && {
      ExpectedNextSnapshotScheduleTime: input.ExpectedNextSnapshotScheduleTime,
    }),
    ...(input.ExpectedNextSnapshotScheduleTimeStatus != null && {
      ExpectedNextSnapshotScheduleTimeStatus: input.ExpectedNextSnapshotScheduleTimeStatus,
    }),
    ...(input.HsmStatus != null && {
      HsmStatus: serializeAws_restJson1AwsRedshiftClusterHsmStatus(input.HsmStatus, context),
    }),
    ...(input.IamRoles != null && {
      IamRoles: serializeAws_restJson1AwsRedshiftClusterIamRoles(input.IamRoles, context),
    }),
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.LoggingStatus != null && {
      LoggingStatus: serializeAws_restJson1AwsRedshiftClusterLoggingStatus(input.LoggingStatus, context),
    }),
    ...(input.MaintenanceTrackName != null && { MaintenanceTrackName: input.MaintenanceTrackName }),
    ...(input.ManualSnapshotRetentionPeriod != null && {
      ManualSnapshotRetentionPeriod: input.ManualSnapshotRetentionPeriod,
    }),
    ...(input.MasterUsername != null && { MasterUsername: input.MasterUsername }),
    ...(input.NextMaintenanceWindowStartTime != null && {
      NextMaintenanceWindowStartTime: input.NextMaintenanceWindowStartTime,
    }),
    ...(input.NodeType != null && { NodeType: input.NodeType }),
    ...(input.NumberOfNodes != null && { NumberOfNodes: input.NumberOfNodes }),
    ...(input.PendingActions != null && {
      PendingActions: serializeAws_restJson1StringList(input.PendingActions, context),
    }),
    ...(input.PendingModifiedValues != null && {
      PendingModifiedValues: serializeAws_restJson1AwsRedshiftClusterPendingModifiedValues(
        input.PendingModifiedValues,
        context
      ),
    }),
    ...(input.PreferredMaintenanceWindow != null && { PreferredMaintenanceWindow: input.PreferredMaintenanceWindow }),
    ...(input.PubliclyAccessible != null && { PubliclyAccessible: input.PubliclyAccessible }),
    ...(input.ResizeInfo != null && {
      ResizeInfo: serializeAws_restJson1AwsRedshiftClusterResizeInfo(input.ResizeInfo, context),
    }),
    ...(input.RestoreStatus != null && {
      RestoreStatus: serializeAws_restJson1AwsRedshiftClusterRestoreStatus(input.RestoreStatus, context),
    }),
    ...(input.SnapshotScheduleIdentifier != null && { SnapshotScheduleIdentifier: input.SnapshotScheduleIdentifier }),
    ...(input.SnapshotScheduleState != null && { SnapshotScheduleState: input.SnapshotScheduleState }),
    ...(input.VpcId != null && { VpcId: input.VpcId }),
    ...(input.VpcSecurityGroups != null && {
      VpcSecurityGroups: serializeAws_restJson1AwsRedshiftClusterVpcSecurityGroups(input.VpcSecurityGroups, context),
    }),
  };
};

const serializeAws_restJson1AwsRedshiftClusterElasticIpStatus = (
  input: AwsRedshiftClusterElasticIpStatus,
  context: __SerdeContext
): any => {
  return {
    ...(input.ElasticIp != null && { ElasticIp: input.ElasticIp }),
    ...(input.Status != null && { Status: input.Status }),
  };
};

const serializeAws_restJson1AwsRedshiftClusterEndpoint = (
  input: AwsRedshiftClusterEndpoint,
  context: __SerdeContext
): any => {
  return {
    ...(input.Address != null && { Address: input.Address }),
    ...(input.Port != null && { Port: input.Port }),
  };
};

const serializeAws_restJson1AwsRedshiftClusterHsmStatus = (
  input: AwsRedshiftClusterHsmStatus,
  context: __SerdeContext
): any => {
  return {
    ...(input.HsmClientCertificateIdentifier != null && {
      HsmClientCertificateIdentifier: input.HsmClientCertificateIdentifier,
    }),
    ...(input.HsmConfigurationIdentifier != null && { HsmConfigurationIdentifier: input.HsmConfigurationIdentifier }),
    ...(input.Status != null && { Status: input.Status }),
  };
};

const serializeAws_restJson1AwsRedshiftClusterIamRole = (
  input: AwsRedshiftClusterIamRole,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplyStatus != null && { ApplyStatus: input.ApplyStatus }),
    ...(input.IamRoleArn != null && { IamRoleArn: input.IamRoleArn }),
  };
};

const serializeAws_restJson1AwsRedshiftClusterIamRoles = (
  input: AwsRedshiftClusterIamRole[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsRedshiftClusterIamRole(entry, context);
    });
};

const serializeAws_restJson1AwsRedshiftClusterLoggingStatus = (
  input: AwsRedshiftClusterLoggingStatus,
  context: __SerdeContext
): any => {
  return {
    ...(input.BucketName != null && { BucketName: input.BucketName }),
    ...(input.LastFailureMessage != null && { LastFailureMessage: input.LastFailureMessage }),
    ...(input.LastFailureTime != null && { LastFailureTime: input.LastFailureTime }),
    ...(input.LastSuccessfulDeliveryTime != null && { LastSuccessfulDeliveryTime: input.LastSuccessfulDeliveryTime }),
    ...(input.LoggingEnabled != null && { LoggingEnabled: input.LoggingEnabled }),
    ...(input.S3KeyPrefix != null && { S3KeyPrefix: input.S3KeyPrefix }),
  };
};

const serializeAws_restJson1AwsRedshiftClusterPendingModifiedValues = (
  input: AwsRedshiftClusterPendingModifiedValues,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutomatedSnapshotRetentionPeriod != null && {
      AutomatedSnapshotRetentionPeriod: input.AutomatedSnapshotRetentionPeriod,
    }),
    ...(input.ClusterIdentifier != null && { ClusterIdentifier: input.ClusterIdentifier }),
    ...(input.ClusterType != null && { ClusterType: input.ClusterType }),
    ...(input.ClusterVersion != null && { ClusterVersion: input.ClusterVersion }),
    ...(input.EncryptionType != null && { EncryptionType: input.EncryptionType }),
    ...(input.EnhancedVpcRouting != null && { EnhancedVpcRouting: input.EnhancedVpcRouting }),
    ...(input.MaintenanceTrackName != null && { MaintenanceTrackName: input.MaintenanceTrackName }),
    ...(input.MasterUserPassword != null && { MasterUserPassword: input.MasterUserPassword }),
    ...(input.NodeType != null && { NodeType: input.NodeType }),
    ...(input.NumberOfNodes != null && { NumberOfNodes: input.NumberOfNodes }),
    ...(input.PubliclyAccessible != null && { PubliclyAccessible: input.PubliclyAccessible }),
  };
};

const serializeAws_restJson1AwsRedshiftClusterResizeInfo = (
  input: AwsRedshiftClusterResizeInfo,
  context: __SerdeContext
): any => {
  return {
    ...(input.AllowCancelResize != null && { AllowCancelResize: input.AllowCancelResize }),
    ...(input.ResizeType != null && { ResizeType: input.ResizeType }),
  };
};

const serializeAws_restJson1AwsRedshiftClusterRestoreStatus = (
  input: AwsRedshiftClusterRestoreStatus,
  context: __SerdeContext
): any => {
  return {
    ...(input.CurrentRestoreRateInMegaBytesPerSecond != null && {
      CurrentRestoreRateInMegaBytesPerSecond: __serializeFloat(input.CurrentRestoreRateInMegaBytesPerSecond),
    }),
    ...(input.ElapsedTimeInSeconds != null && { ElapsedTimeInSeconds: input.ElapsedTimeInSeconds }),
    ...(input.EstimatedTimeToCompletionInSeconds != null && {
      EstimatedTimeToCompletionInSeconds: input.EstimatedTimeToCompletionInSeconds,
    }),
    ...(input.ProgressInMegaBytes != null && { ProgressInMegaBytes: input.ProgressInMegaBytes }),
    ...(input.SnapshotSizeInMegaBytes != null && { SnapshotSizeInMegaBytes: input.SnapshotSizeInMegaBytes }),
    ...(input.Status != null && { Status: input.Status }),
  };
};

const serializeAws_restJson1AwsRedshiftClusterVpcSecurityGroup = (
  input: AwsRedshiftClusterVpcSecurityGroup,
  context: __SerdeContext
): any => {
  return {
    ...(input.Status != null && { Status: input.Status }),
    ...(input.VpcSecurityGroupId != null && { VpcSecurityGroupId: input.VpcSecurityGroupId }),
  };
};

const serializeAws_restJson1AwsRedshiftClusterVpcSecurityGroups = (
  input: AwsRedshiftClusterVpcSecurityGroup[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsRedshiftClusterVpcSecurityGroup(entry, context);
    });
};

const serializeAws_restJson1AwsS3AccountPublicAccessBlockDetails = (
  input: AwsS3AccountPublicAccessBlockDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.BlockPublicAcls != null && { BlockPublicAcls: input.BlockPublicAcls }),
    ...(input.BlockPublicPolicy != null && { BlockPublicPolicy: input.BlockPublicPolicy }),
    ...(input.IgnorePublicAcls != null && { IgnorePublicAcls: input.IgnorePublicAcls }),
    ...(input.RestrictPublicBuckets != null && { RestrictPublicBuckets: input.RestrictPublicBuckets }),
  };
};

const serializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationDetails = (
  input: AwsS3BucketBucketLifecycleConfigurationDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Rules != null && {
      Rules: serializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesList(input.Rules, context),
    }),
  };
};

const serializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails = (
  input: AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.DaysAfterInitiation != null && { DaysAfterInitiation: input.DaysAfterInitiation }),
  };
};

const serializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesDetails = (
  input: AwsS3BucketBucketLifecycleConfigurationRulesDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AbortIncompleteMultipartUpload != null && {
      AbortIncompleteMultipartUpload:
        serializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails(
          input.AbortIncompleteMultipartUpload,
          context
        ),
    }),
    ...(input.ExpirationDate != null && { ExpirationDate: input.ExpirationDate }),
    ...(input.ExpirationInDays != null && { ExpirationInDays: input.ExpirationInDays }),
    ...(input.ExpiredObjectDeleteMarker != null && { ExpiredObjectDeleteMarker: input.ExpiredObjectDeleteMarker }),
    ...(input.Filter != null && {
      Filter: serializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails(input.Filter, context),
    }),
    ...(input.ID != null && { ID: input.ID }),
    ...(input.NoncurrentVersionExpirationInDays != null && {
      NoncurrentVersionExpirationInDays: input.NoncurrentVersionExpirationInDays,
    }),
    ...(input.NoncurrentVersionTransitions != null && {
      NoncurrentVersionTransitions:
        serializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsList(
          input.NoncurrentVersionTransitions,
          context
        ),
    }),
    ...(input.Prefix != null && { Prefix: input.Prefix }),
    ...(input.Status != null && { Status: input.Status }),
    ...(input.Transitions != null && {
      Transitions: serializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesTransitionsList(
        input.Transitions,
        context
      ),
    }),
  };
};

const serializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails = (
  input: AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Predicate != null && {
      Predicate: serializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails(
        input.Predicate,
        context
      ),
    }),
  };
};

const serializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails = (
  input: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Operands != null && {
      Operands: serializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsList(
        input.Operands,
        context
      ),
    }),
    ...(input.Prefix != null && { Prefix: input.Prefix }),
    ...(input.Tag != null && {
      Tag: serializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails(
        input.Tag,
        context
      ),
    }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails = (
  input: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Prefix != null && { Prefix: input.Prefix }),
    ...(input.Tag != null && {
      Tag: serializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails(
        input.Tag,
        context
      ),
    }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsList = (
  input: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails(
        entry,
        context
      );
    });
};

const serializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails = (
  input: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails = (
  input: AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesList = (
  input: AwsS3BucketBucketLifecycleConfigurationRulesDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesDetails(entry, context);
    });
};

const serializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails = (
  input: AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Days != null && { Days: input.Days }),
    ...(input.StorageClass != null && { StorageClass: input.StorageClass }),
  };
};

const serializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsList = (
  input: AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails(
        entry,
        context
      );
    });
};

const serializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails = (
  input: AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Date != null && { Date: input.Date }),
    ...(input.Days != null && { Days: input.Days }),
    ...(input.StorageClass != null && { StorageClass: input.StorageClass }),
  };
};

const serializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesTransitionsList = (
  input: AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails(entry, context);
    });
};

const serializeAws_restJson1AwsS3BucketBucketVersioningConfiguration = (
  input: AwsS3BucketBucketVersioningConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.IsMfaDeleteEnabled != null && { IsMfaDeleteEnabled: input.IsMfaDeleteEnabled }),
    ...(input.Status != null && { Status: input.Status }),
  };
};

const serializeAws_restJson1AwsS3BucketDetails = (input: AwsS3BucketDetails, context: __SerdeContext): any => {
  return {
    ...(input.AccessControlList != null && { AccessControlList: input.AccessControlList }),
    ...(input.BucketLifecycleConfiguration != null && {
      BucketLifecycleConfiguration: serializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationDetails(
        input.BucketLifecycleConfiguration,
        context
      ),
    }),
    ...(input.BucketLoggingConfiguration != null && {
      BucketLoggingConfiguration: serializeAws_restJson1AwsS3BucketLoggingConfiguration(
        input.BucketLoggingConfiguration,
        context
      ),
    }),
    ...(input.BucketNotificationConfiguration != null && {
      BucketNotificationConfiguration: serializeAws_restJson1AwsS3BucketNotificationConfiguration(
        input.BucketNotificationConfiguration,
        context
      ),
    }),
    ...(input.BucketVersioningConfiguration != null && {
      BucketVersioningConfiguration: serializeAws_restJson1AwsS3BucketBucketVersioningConfiguration(
        input.BucketVersioningConfiguration,
        context
      ),
    }),
    ...(input.BucketWebsiteConfiguration != null && {
      BucketWebsiteConfiguration: serializeAws_restJson1AwsS3BucketWebsiteConfiguration(
        input.BucketWebsiteConfiguration,
        context
      ),
    }),
    ...(input.CreatedAt != null && { CreatedAt: input.CreatedAt }),
    ...(input.OwnerAccountId != null && { OwnerAccountId: input.OwnerAccountId }),
    ...(input.OwnerId != null && { OwnerId: input.OwnerId }),
    ...(input.OwnerName != null && { OwnerName: input.OwnerName }),
    ...(input.PublicAccessBlockConfiguration != null && {
      PublicAccessBlockConfiguration: serializeAws_restJson1AwsS3AccountPublicAccessBlockDetails(
        input.PublicAccessBlockConfiguration,
        context
      ),
    }),
    ...(input.ServerSideEncryptionConfiguration != null && {
      ServerSideEncryptionConfiguration: serializeAws_restJson1AwsS3BucketServerSideEncryptionConfiguration(
        input.ServerSideEncryptionConfiguration,
        context
      ),
    }),
  };
};

const serializeAws_restJson1AwsS3BucketLoggingConfiguration = (
  input: AwsS3BucketLoggingConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.DestinationBucketName != null && { DestinationBucketName: input.DestinationBucketName }),
    ...(input.LogFilePrefix != null && { LogFilePrefix: input.LogFilePrefix }),
  };
};

const serializeAws_restJson1AwsS3BucketNotificationConfiguration = (
  input: AwsS3BucketNotificationConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Configurations != null && {
      Configurations: serializeAws_restJson1AwsS3BucketNotificationConfigurationDetails(input.Configurations, context),
    }),
  };
};

const serializeAws_restJson1AwsS3BucketNotificationConfigurationDetail = (
  input: AwsS3BucketNotificationConfigurationDetail,
  context: __SerdeContext
): any => {
  return {
    ...(input.Destination != null && { Destination: input.Destination }),
    ...(input.Events != null && {
      Events: serializeAws_restJson1AwsS3BucketNotificationConfigurationEvents(input.Events, context),
    }),
    ...(input.Filter != null && {
      Filter: serializeAws_restJson1AwsS3BucketNotificationConfigurationFilter(input.Filter, context),
    }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_restJson1AwsS3BucketNotificationConfigurationDetails = (
  input: AwsS3BucketNotificationConfigurationDetail[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsS3BucketNotificationConfigurationDetail(entry, context);
    });
};

const serializeAws_restJson1AwsS3BucketNotificationConfigurationEvents = (
  input: string[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1AwsS3BucketNotificationConfigurationFilter = (
  input: AwsS3BucketNotificationConfigurationFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.S3KeyFilter != null && {
      S3KeyFilter: serializeAws_restJson1AwsS3BucketNotificationConfigurationS3KeyFilter(input.S3KeyFilter, context),
    }),
  };
};

const serializeAws_restJson1AwsS3BucketNotificationConfigurationS3KeyFilter = (
  input: AwsS3BucketNotificationConfigurationS3KeyFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.FilterRules != null && {
      FilterRules: serializeAws_restJson1AwsS3BucketNotificationConfigurationS3KeyFilterRules(
        input.FilterRules,
        context
      ),
    }),
  };
};

const serializeAws_restJson1AwsS3BucketNotificationConfigurationS3KeyFilterRule = (
  input: AwsS3BucketNotificationConfigurationS3KeyFilterRule,
  context: __SerdeContext
): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_restJson1AwsS3BucketNotificationConfigurationS3KeyFilterRules = (
  input: AwsS3BucketNotificationConfigurationS3KeyFilterRule[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsS3BucketNotificationConfigurationS3KeyFilterRule(entry, context);
    });
};

const serializeAws_restJson1AwsS3BucketServerSideEncryptionByDefault = (
  input: AwsS3BucketServerSideEncryptionByDefault,
  context: __SerdeContext
): any => {
  return {
    ...(input.KMSMasterKeyID != null && { KMSMasterKeyID: input.KMSMasterKeyID }),
    ...(input.SSEAlgorithm != null && { SSEAlgorithm: input.SSEAlgorithm }),
  };
};

const serializeAws_restJson1AwsS3BucketServerSideEncryptionConfiguration = (
  input: AwsS3BucketServerSideEncryptionConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.Rules != null && {
      Rules: serializeAws_restJson1AwsS3BucketServerSideEncryptionRules(input.Rules, context),
    }),
  };
};

const serializeAws_restJson1AwsS3BucketServerSideEncryptionRule = (
  input: AwsS3BucketServerSideEncryptionRule,
  context: __SerdeContext
): any => {
  return {
    ...(input.ApplyServerSideEncryptionByDefault != null && {
      ApplyServerSideEncryptionByDefault: serializeAws_restJson1AwsS3BucketServerSideEncryptionByDefault(
        input.ApplyServerSideEncryptionByDefault,
        context
      ),
    }),
  };
};

const serializeAws_restJson1AwsS3BucketServerSideEncryptionRules = (
  input: AwsS3BucketServerSideEncryptionRule[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsS3BucketServerSideEncryptionRule(entry, context);
    });
};

const serializeAws_restJson1AwsS3BucketWebsiteConfiguration = (
  input: AwsS3BucketWebsiteConfiguration,
  context: __SerdeContext
): any => {
  return {
    ...(input.ErrorDocument != null && { ErrorDocument: input.ErrorDocument }),
    ...(input.IndexDocumentSuffix != null && { IndexDocumentSuffix: input.IndexDocumentSuffix }),
    ...(input.RedirectAllRequestsTo != null && {
      RedirectAllRequestsTo: serializeAws_restJson1AwsS3BucketWebsiteConfigurationRedirectTo(
        input.RedirectAllRequestsTo,
        context
      ),
    }),
    ...(input.RoutingRules != null && {
      RoutingRules: serializeAws_restJson1AwsS3BucketWebsiteConfigurationRoutingRules(input.RoutingRules, context),
    }),
  };
};

const serializeAws_restJson1AwsS3BucketWebsiteConfigurationRedirectTo = (
  input: AwsS3BucketWebsiteConfigurationRedirectTo,
  context: __SerdeContext
): any => {
  return {
    ...(input.Hostname != null && { Hostname: input.Hostname }),
    ...(input.Protocol != null && { Protocol: input.Protocol }),
  };
};

const serializeAws_restJson1AwsS3BucketWebsiteConfigurationRoutingRule = (
  input: AwsS3BucketWebsiteConfigurationRoutingRule,
  context: __SerdeContext
): any => {
  return {
    ...(input.Condition != null && {
      Condition: serializeAws_restJson1AwsS3BucketWebsiteConfigurationRoutingRuleCondition(input.Condition, context),
    }),
    ...(input.Redirect != null && {
      Redirect: serializeAws_restJson1AwsS3BucketWebsiteConfigurationRoutingRuleRedirect(input.Redirect, context),
    }),
  };
};

const serializeAws_restJson1AwsS3BucketWebsiteConfigurationRoutingRuleCondition = (
  input: AwsS3BucketWebsiteConfigurationRoutingRuleCondition,
  context: __SerdeContext
): any => {
  return {
    ...(input.HttpErrorCodeReturnedEquals != null && {
      HttpErrorCodeReturnedEquals: input.HttpErrorCodeReturnedEquals,
    }),
    ...(input.KeyPrefixEquals != null && { KeyPrefixEquals: input.KeyPrefixEquals }),
  };
};

const serializeAws_restJson1AwsS3BucketWebsiteConfigurationRoutingRuleRedirect = (
  input: AwsS3BucketWebsiteConfigurationRoutingRuleRedirect,
  context: __SerdeContext
): any => {
  return {
    ...(input.Hostname != null && { Hostname: input.Hostname }),
    ...(input.HttpRedirectCode != null && { HttpRedirectCode: input.HttpRedirectCode }),
    ...(input.Protocol != null && { Protocol: input.Protocol }),
    ...(input.ReplaceKeyPrefixWith != null && { ReplaceKeyPrefixWith: input.ReplaceKeyPrefixWith }),
    ...(input.ReplaceKeyWith != null && { ReplaceKeyWith: input.ReplaceKeyWith }),
  };
};

const serializeAws_restJson1AwsS3BucketWebsiteConfigurationRoutingRules = (
  input: AwsS3BucketWebsiteConfigurationRoutingRule[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsS3BucketWebsiteConfigurationRoutingRule(entry, context);
    });
};

const serializeAws_restJson1AwsS3ObjectDetails = (input: AwsS3ObjectDetails, context: __SerdeContext): any => {
  return {
    ...(input.ContentType != null && { ContentType: input.ContentType }),
    ...(input.ETag != null && { ETag: input.ETag }),
    ...(input.LastModified != null && { LastModified: input.LastModified }),
    ...(input.SSEKMSKeyId != null && { SSEKMSKeyId: input.SSEKMSKeyId }),
    ...(input.ServerSideEncryption != null && { ServerSideEncryption: input.ServerSideEncryption }),
    ...(input.VersionId != null && { VersionId: input.VersionId }),
  };
};

const serializeAws_restJson1AwsSecretsManagerSecretDetails = (
  input: AwsSecretsManagerSecretDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Deleted != null && { Deleted: input.Deleted }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.KmsKeyId != null && { KmsKeyId: input.KmsKeyId }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RotationEnabled != null && { RotationEnabled: input.RotationEnabled }),
    ...(input.RotationLambdaArn != null && { RotationLambdaArn: input.RotationLambdaArn }),
    ...(input.RotationOccurredWithinFrequency != null && {
      RotationOccurredWithinFrequency: input.RotationOccurredWithinFrequency,
    }),
    ...(input.RotationRules != null && {
      RotationRules: serializeAws_restJson1AwsSecretsManagerSecretRotationRules(input.RotationRules, context),
    }),
  };
};

const serializeAws_restJson1AwsSecretsManagerSecretRotationRules = (
  input: AwsSecretsManagerSecretRotationRules,
  context: __SerdeContext
): any => {
  return {
    ...(input.AutomaticallyAfterDays != null && { AutomaticallyAfterDays: input.AutomaticallyAfterDays }),
  };
};

const serializeAws_restJson1AwsSecurityFinding = (input: AwsSecurityFinding, context: __SerdeContext): any => {
  return {
    ...(input.Action != null && { Action: serializeAws_restJson1Action(input.Action, context) }),
    ...(input.AwsAccountId != null && { AwsAccountId: input.AwsAccountId }),
    ...(input.CompanyName != null && { CompanyName: input.CompanyName }),
    ...(input.Compliance != null && { Compliance: serializeAws_restJson1Compliance(input.Compliance, context) }),
    ...(input.Confidence != null && { Confidence: input.Confidence }),
    ...(input.CreatedAt != null && { CreatedAt: input.CreatedAt }),
    ...(input.Criticality != null && { Criticality: input.Criticality }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.FindingProviderFields != null && {
      FindingProviderFields: serializeAws_restJson1FindingProviderFields(input.FindingProviderFields, context),
    }),
    ...(input.FirstObservedAt != null && { FirstObservedAt: input.FirstObservedAt }),
    ...(input.GeneratorId != null && { GeneratorId: input.GeneratorId }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.LastObservedAt != null && { LastObservedAt: input.LastObservedAt }),
    ...(input.Malware != null && { Malware: serializeAws_restJson1MalwareList(input.Malware, context) }),
    ...(input.Network != null && { Network: serializeAws_restJson1Network(input.Network, context) }),
    ...(input.NetworkPath != null && {
      NetworkPath: serializeAws_restJson1NetworkPathList(input.NetworkPath, context),
    }),
    ...(input.Note != null && { Note: serializeAws_restJson1Note(input.Note, context) }),
    ...(input.PatchSummary != null && {
      PatchSummary: serializeAws_restJson1PatchSummary(input.PatchSummary, context),
    }),
    ...(input.Process != null && { Process: serializeAws_restJson1ProcessDetails(input.Process, context) }),
    ...(input.ProductArn != null && { ProductArn: input.ProductArn }),
    ...(input.ProductFields != null && { ProductFields: serializeAws_restJson1FieldMap(input.ProductFields, context) }),
    ...(input.ProductName != null && { ProductName: input.ProductName }),
    ...(input.RecordState != null && { RecordState: input.RecordState }),
    ...(input.Region != null && { Region: input.Region }),
    ...(input.RelatedFindings != null && {
      RelatedFindings: serializeAws_restJson1RelatedFindingList(input.RelatedFindings, context),
    }),
    ...(input.Remediation != null && { Remediation: serializeAws_restJson1Remediation(input.Remediation, context) }),
    ...(input.Resources != null && { Resources: serializeAws_restJson1ResourceList(input.Resources, context) }),
    ...(input.Sample != null && { Sample: input.Sample }),
    ...(input.SchemaVersion != null && { SchemaVersion: input.SchemaVersion }),
    ...(input.Severity != null && { Severity: serializeAws_restJson1Severity(input.Severity, context) }),
    ...(input.SourceUrl != null && { SourceUrl: input.SourceUrl }),
    ...(input.ThreatIntelIndicators != null && {
      ThreatIntelIndicators: serializeAws_restJson1ThreatIntelIndicatorList(input.ThreatIntelIndicators, context),
    }),
    ...(input.Threats != null && { Threats: serializeAws_restJson1ThreatList(input.Threats, context) }),
    ...(input.Title != null && { Title: input.Title }),
    ...(input.Types != null && { Types: serializeAws_restJson1TypeList(input.Types, context) }),
    ...(input.UpdatedAt != null && { UpdatedAt: input.UpdatedAt }),
    ...(input.UserDefinedFields != null && {
      UserDefinedFields: serializeAws_restJson1FieldMap(input.UserDefinedFields, context),
    }),
    ...(input.VerificationState != null && { VerificationState: input.VerificationState }),
    ...(input.Vulnerabilities != null && {
      Vulnerabilities: serializeAws_restJson1VulnerabilityList(input.Vulnerabilities, context),
    }),
    ...(input.Workflow != null && { Workflow: serializeAws_restJson1Workflow(input.Workflow, context) }),
    ...(input.WorkflowState != null && { WorkflowState: input.WorkflowState }),
  };
};

const serializeAws_restJson1AwsSecurityFindingFilters = (
  input: AwsSecurityFindingFilters,
  context: __SerdeContext
): any => {
  return {
    ...(input.AwsAccountId != null && {
      AwsAccountId: serializeAws_restJson1StringFilterList(input.AwsAccountId, context),
    }),
    ...(input.CompanyName != null && {
      CompanyName: serializeAws_restJson1StringFilterList(input.CompanyName, context),
    }),
    ...(input.ComplianceStatus != null && {
      ComplianceStatus: serializeAws_restJson1StringFilterList(input.ComplianceStatus, context),
    }),
    ...(input.Confidence != null && { Confidence: serializeAws_restJson1NumberFilterList(input.Confidence, context) }),
    ...(input.CreatedAt != null && { CreatedAt: serializeAws_restJson1DateFilterList(input.CreatedAt, context) }),
    ...(input.Criticality != null && {
      Criticality: serializeAws_restJson1NumberFilterList(input.Criticality, context),
    }),
    ...(input.Description != null && {
      Description: serializeAws_restJson1StringFilterList(input.Description, context),
    }),
    ...(input.FindingProviderFieldsConfidence != null && {
      FindingProviderFieldsConfidence: serializeAws_restJson1NumberFilterList(
        input.FindingProviderFieldsConfidence,
        context
      ),
    }),
    ...(input.FindingProviderFieldsCriticality != null && {
      FindingProviderFieldsCriticality: serializeAws_restJson1NumberFilterList(
        input.FindingProviderFieldsCriticality,
        context
      ),
    }),
    ...(input.FindingProviderFieldsRelatedFindingsId != null && {
      FindingProviderFieldsRelatedFindingsId: serializeAws_restJson1StringFilterList(
        input.FindingProviderFieldsRelatedFindingsId,
        context
      ),
    }),
    ...(input.FindingProviderFieldsRelatedFindingsProductArn != null && {
      FindingProviderFieldsRelatedFindingsProductArn: serializeAws_restJson1StringFilterList(
        input.FindingProviderFieldsRelatedFindingsProductArn,
        context
      ),
    }),
    ...(input.FindingProviderFieldsSeverityLabel != null && {
      FindingProviderFieldsSeverityLabel: serializeAws_restJson1StringFilterList(
        input.FindingProviderFieldsSeverityLabel,
        context
      ),
    }),
    ...(input.FindingProviderFieldsSeverityOriginal != null && {
      FindingProviderFieldsSeverityOriginal: serializeAws_restJson1StringFilterList(
        input.FindingProviderFieldsSeverityOriginal,
        context
      ),
    }),
    ...(input.FindingProviderFieldsTypes != null && {
      FindingProviderFieldsTypes: serializeAws_restJson1StringFilterList(input.FindingProviderFieldsTypes, context),
    }),
    ...(input.FirstObservedAt != null && {
      FirstObservedAt: serializeAws_restJson1DateFilterList(input.FirstObservedAt, context),
    }),
    ...(input.GeneratorId != null && {
      GeneratorId: serializeAws_restJson1StringFilterList(input.GeneratorId, context),
    }),
    ...(input.Id != null && { Id: serializeAws_restJson1StringFilterList(input.Id, context) }),
    ...(input.Keyword != null && { Keyword: serializeAws_restJson1KeywordFilterList(input.Keyword, context) }),
    ...(input.LastObservedAt != null && {
      LastObservedAt: serializeAws_restJson1DateFilterList(input.LastObservedAt, context),
    }),
    ...(input.MalwareName != null && {
      MalwareName: serializeAws_restJson1StringFilterList(input.MalwareName, context),
    }),
    ...(input.MalwarePath != null && {
      MalwarePath: serializeAws_restJson1StringFilterList(input.MalwarePath, context),
    }),
    ...(input.MalwareState != null && {
      MalwareState: serializeAws_restJson1StringFilterList(input.MalwareState, context),
    }),
    ...(input.MalwareType != null && {
      MalwareType: serializeAws_restJson1StringFilterList(input.MalwareType, context),
    }),
    ...(input.NetworkDestinationDomain != null && {
      NetworkDestinationDomain: serializeAws_restJson1StringFilterList(input.NetworkDestinationDomain, context),
    }),
    ...(input.NetworkDestinationIpV4 != null && {
      NetworkDestinationIpV4: serializeAws_restJson1IpFilterList(input.NetworkDestinationIpV4, context),
    }),
    ...(input.NetworkDestinationIpV6 != null && {
      NetworkDestinationIpV6: serializeAws_restJson1IpFilterList(input.NetworkDestinationIpV6, context),
    }),
    ...(input.NetworkDestinationPort != null && {
      NetworkDestinationPort: serializeAws_restJson1NumberFilterList(input.NetworkDestinationPort, context),
    }),
    ...(input.NetworkDirection != null && {
      NetworkDirection: serializeAws_restJson1StringFilterList(input.NetworkDirection, context),
    }),
    ...(input.NetworkProtocol != null && {
      NetworkProtocol: serializeAws_restJson1StringFilterList(input.NetworkProtocol, context),
    }),
    ...(input.NetworkSourceDomain != null && {
      NetworkSourceDomain: serializeAws_restJson1StringFilterList(input.NetworkSourceDomain, context),
    }),
    ...(input.NetworkSourceIpV4 != null && {
      NetworkSourceIpV4: serializeAws_restJson1IpFilterList(input.NetworkSourceIpV4, context),
    }),
    ...(input.NetworkSourceIpV6 != null && {
      NetworkSourceIpV6: serializeAws_restJson1IpFilterList(input.NetworkSourceIpV6, context),
    }),
    ...(input.NetworkSourceMac != null && {
      NetworkSourceMac: serializeAws_restJson1StringFilterList(input.NetworkSourceMac, context),
    }),
    ...(input.NetworkSourcePort != null && {
      NetworkSourcePort: serializeAws_restJson1NumberFilterList(input.NetworkSourcePort, context),
    }),
    ...(input.NoteText != null && { NoteText: serializeAws_restJson1StringFilterList(input.NoteText, context) }),
    ...(input.NoteUpdatedAt != null && {
      NoteUpdatedAt: serializeAws_restJson1DateFilterList(input.NoteUpdatedAt, context),
    }),
    ...(input.NoteUpdatedBy != null && {
      NoteUpdatedBy: serializeAws_restJson1StringFilterList(input.NoteUpdatedBy, context),
    }),
    ...(input.ProcessLaunchedAt != null && {
      ProcessLaunchedAt: serializeAws_restJson1DateFilterList(input.ProcessLaunchedAt, context),
    }),
    ...(input.ProcessName != null && {
      ProcessName: serializeAws_restJson1StringFilterList(input.ProcessName, context),
    }),
    ...(input.ProcessParentPid != null && {
      ProcessParentPid: serializeAws_restJson1NumberFilterList(input.ProcessParentPid, context),
    }),
    ...(input.ProcessPath != null && {
      ProcessPath: serializeAws_restJson1StringFilterList(input.ProcessPath, context),
    }),
    ...(input.ProcessPid != null && { ProcessPid: serializeAws_restJson1NumberFilterList(input.ProcessPid, context) }),
    ...(input.ProcessTerminatedAt != null && {
      ProcessTerminatedAt: serializeAws_restJson1DateFilterList(input.ProcessTerminatedAt, context),
    }),
    ...(input.ProductArn != null && { ProductArn: serializeAws_restJson1StringFilterList(input.ProductArn, context) }),
    ...(input.ProductFields != null && {
      ProductFields: serializeAws_restJson1MapFilterList(input.ProductFields, context),
    }),
    ...(input.ProductName != null && {
      ProductName: serializeAws_restJson1StringFilterList(input.ProductName, context),
    }),
    ...(input.RecommendationText != null && {
      RecommendationText: serializeAws_restJson1StringFilterList(input.RecommendationText, context),
    }),
    ...(input.RecordState != null && {
      RecordState: serializeAws_restJson1StringFilterList(input.RecordState, context),
    }),
    ...(input.Region != null && { Region: serializeAws_restJson1StringFilterList(input.Region, context) }),
    ...(input.RelatedFindingsId != null && {
      RelatedFindingsId: serializeAws_restJson1StringFilterList(input.RelatedFindingsId, context),
    }),
    ...(input.RelatedFindingsProductArn != null && {
      RelatedFindingsProductArn: serializeAws_restJson1StringFilterList(input.RelatedFindingsProductArn, context),
    }),
    ...(input.ResourceAwsEc2InstanceIamInstanceProfileArn != null && {
      ResourceAwsEc2InstanceIamInstanceProfileArn: serializeAws_restJson1StringFilterList(
        input.ResourceAwsEc2InstanceIamInstanceProfileArn,
        context
      ),
    }),
    ...(input.ResourceAwsEc2InstanceImageId != null && {
      ResourceAwsEc2InstanceImageId: serializeAws_restJson1StringFilterList(
        input.ResourceAwsEc2InstanceImageId,
        context
      ),
    }),
    ...(input.ResourceAwsEc2InstanceIpV4Addresses != null && {
      ResourceAwsEc2InstanceIpV4Addresses: serializeAws_restJson1IpFilterList(
        input.ResourceAwsEc2InstanceIpV4Addresses,
        context
      ),
    }),
    ...(input.ResourceAwsEc2InstanceIpV6Addresses != null && {
      ResourceAwsEc2InstanceIpV6Addresses: serializeAws_restJson1IpFilterList(
        input.ResourceAwsEc2InstanceIpV6Addresses,
        context
      ),
    }),
    ...(input.ResourceAwsEc2InstanceKeyName != null && {
      ResourceAwsEc2InstanceKeyName: serializeAws_restJson1StringFilterList(
        input.ResourceAwsEc2InstanceKeyName,
        context
      ),
    }),
    ...(input.ResourceAwsEc2InstanceLaunchedAt != null && {
      ResourceAwsEc2InstanceLaunchedAt: serializeAws_restJson1DateFilterList(
        input.ResourceAwsEc2InstanceLaunchedAt,
        context
      ),
    }),
    ...(input.ResourceAwsEc2InstanceSubnetId != null && {
      ResourceAwsEc2InstanceSubnetId: serializeAws_restJson1StringFilterList(
        input.ResourceAwsEc2InstanceSubnetId,
        context
      ),
    }),
    ...(input.ResourceAwsEc2InstanceType != null && {
      ResourceAwsEc2InstanceType: serializeAws_restJson1StringFilterList(input.ResourceAwsEc2InstanceType, context),
    }),
    ...(input.ResourceAwsEc2InstanceVpcId != null && {
      ResourceAwsEc2InstanceVpcId: serializeAws_restJson1StringFilterList(input.ResourceAwsEc2InstanceVpcId, context),
    }),
    ...(input.ResourceAwsIamAccessKeyCreatedAt != null && {
      ResourceAwsIamAccessKeyCreatedAt: serializeAws_restJson1DateFilterList(
        input.ResourceAwsIamAccessKeyCreatedAt,
        context
      ),
    }),
    ...(input.ResourceAwsIamAccessKeyPrincipalName != null && {
      ResourceAwsIamAccessKeyPrincipalName: serializeAws_restJson1StringFilterList(
        input.ResourceAwsIamAccessKeyPrincipalName,
        context
      ),
    }),
    ...(input.ResourceAwsIamAccessKeyStatus != null && {
      ResourceAwsIamAccessKeyStatus: serializeAws_restJson1StringFilterList(
        input.ResourceAwsIamAccessKeyStatus,
        context
      ),
    }),
    ...(input.ResourceAwsIamAccessKeyUserName != null && {
      ResourceAwsIamAccessKeyUserName: serializeAws_restJson1StringFilterList(
        input.ResourceAwsIamAccessKeyUserName,
        context
      ),
    }),
    ...(input.ResourceAwsIamUserUserName != null && {
      ResourceAwsIamUserUserName: serializeAws_restJson1StringFilterList(input.ResourceAwsIamUserUserName, context),
    }),
    ...(input.ResourceAwsS3BucketOwnerId != null && {
      ResourceAwsS3BucketOwnerId: serializeAws_restJson1StringFilterList(input.ResourceAwsS3BucketOwnerId, context),
    }),
    ...(input.ResourceAwsS3BucketOwnerName != null && {
      ResourceAwsS3BucketOwnerName: serializeAws_restJson1StringFilterList(input.ResourceAwsS3BucketOwnerName, context),
    }),
    ...(input.ResourceContainerImageId != null && {
      ResourceContainerImageId: serializeAws_restJson1StringFilterList(input.ResourceContainerImageId, context),
    }),
    ...(input.ResourceContainerImageName != null && {
      ResourceContainerImageName: serializeAws_restJson1StringFilterList(input.ResourceContainerImageName, context),
    }),
    ...(input.ResourceContainerLaunchedAt != null && {
      ResourceContainerLaunchedAt: serializeAws_restJson1DateFilterList(input.ResourceContainerLaunchedAt, context),
    }),
    ...(input.ResourceContainerName != null && {
      ResourceContainerName: serializeAws_restJson1StringFilterList(input.ResourceContainerName, context),
    }),
    ...(input.ResourceDetailsOther != null && {
      ResourceDetailsOther: serializeAws_restJson1MapFilterList(input.ResourceDetailsOther, context),
    }),
    ...(input.ResourceId != null && { ResourceId: serializeAws_restJson1StringFilterList(input.ResourceId, context) }),
    ...(input.ResourcePartition != null && {
      ResourcePartition: serializeAws_restJson1StringFilterList(input.ResourcePartition, context),
    }),
    ...(input.ResourceRegion != null && {
      ResourceRegion: serializeAws_restJson1StringFilterList(input.ResourceRegion, context),
    }),
    ...(input.ResourceTags != null && {
      ResourceTags: serializeAws_restJson1MapFilterList(input.ResourceTags, context),
    }),
    ...(input.ResourceType != null && {
      ResourceType: serializeAws_restJson1StringFilterList(input.ResourceType, context),
    }),
    ...(input.Sample != null && { Sample: serializeAws_restJson1BooleanFilterList(input.Sample, context) }),
    ...(input.SeverityLabel != null && {
      SeverityLabel: serializeAws_restJson1StringFilterList(input.SeverityLabel, context),
    }),
    ...(input.SeverityNormalized != null && {
      SeverityNormalized: serializeAws_restJson1NumberFilterList(input.SeverityNormalized, context),
    }),
    ...(input.SeverityProduct != null && {
      SeverityProduct: serializeAws_restJson1NumberFilterList(input.SeverityProduct, context),
    }),
    ...(input.SourceUrl != null && { SourceUrl: serializeAws_restJson1StringFilterList(input.SourceUrl, context) }),
    ...(input.ThreatIntelIndicatorCategory != null && {
      ThreatIntelIndicatorCategory: serializeAws_restJson1StringFilterList(input.ThreatIntelIndicatorCategory, context),
    }),
    ...(input.ThreatIntelIndicatorLastObservedAt != null && {
      ThreatIntelIndicatorLastObservedAt: serializeAws_restJson1DateFilterList(
        input.ThreatIntelIndicatorLastObservedAt,
        context
      ),
    }),
    ...(input.ThreatIntelIndicatorSource != null && {
      ThreatIntelIndicatorSource: serializeAws_restJson1StringFilterList(input.ThreatIntelIndicatorSource, context),
    }),
    ...(input.ThreatIntelIndicatorSourceUrl != null && {
      ThreatIntelIndicatorSourceUrl: serializeAws_restJson1StringFilterList(
        input.ThreatIntelIndicatorSourceUrl,
        context
      ),
    }),
    ...(input.ThreatIntelIndicatorType != null && {
      ThreatIntelIndicatorType: serializeAws_restJson1StringFilterList(input.ThreatIntelIndicatorType, context),
    }),
    ...(input.ThreatIntelIndicatorValue != null && {
      ThreatIntelIndicatorValue: serializeAws_restJson1StringFilterList(input.ThreatIntelIndicatorValue, context),
    }),
    ...(input.Title != null && { Title: serializeAws_restJson1StringFilterList(input.Title, context) }),
    ...(input.Type != null && { Type: serializeAws_restJson1StringFilterList(input.Type, context) }),
    ...(input.UpdatedAt != null && { UpdatedAt: serializeAws_restJson1DateFilterList(input.UpdatedAt, context) }),
    ...(input.UserDefinedFields != null && {
      UserDefinedFields: serializeAws_restJson1MapFilterList(input.UserDefinedFields, context),
    }),
    ...(input.VerificationState != null && {
      VerificationState: serializeAws_restJson1StringFilterList(input.VerificationState, context),
    }),
    ...(input.WorkflowState != null && {
      WorkflowState: serializeAws_restJson1StringFilterList(input.WorkflowState, context),
    }),
    ...(input.WorkflowStatus != null && {
      WorkflowStatus: serializeAws_restJson1StringFilterList(input.WorkflowStatus, context),
    }),
  };
};

const serializeAws_restJson1AwsSecurityFindingIdentifier = (
  input: AwsSecurityFindingIdentifier,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.ProductArn != null && { ProductArn: input.ProductArn }),
  };
};

const serializeAws_restJson1AwsSecurityFindingIdentifierList = (
  input: AwsSecurityFindingIdentifier[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsSecurityFindingIdentifier(entry, context);
    });
};

const serializeAws_restJson1AwsSnsTopicDetails = (input: AwsSnsTopicDetails, context: __SerdeContext): any => {
  return {
    ...(input.ApplicationSuccessFeedbackRoleArn != null && {
      ApplicationSuccessFeedbackRoleArn: input.ApplicationSuccessFeedbackRoleArn,
    }),
    ...(input.FirehoseFailureFeedbackRoleArn != null && {
      FirehoseFailureFeedbackRoleArn: input.FirehoseFailureFeedbackRoleArn,
    }),
    ...(input.FirehoseSuccessFeedbackRoleArn != null && {
      FirehoseSuccessFeedbackRoleArn: input.FirehoseSuccessFeedbackRoleArn,
    }),
    ...(input.HttpFailureFeedbackRoleArn != null && { HttpFailureFeedbackRoleArn: input.HttpFailureFeedbackRoleArn }),
    ...(input.HttpSuccessFeedbackRoleArn != null && { HttpSuccessFeedbackRoleArn: input.HttpSuccessFeedbackRoleArn }),
    ...(input.KmsMasterKeyId != null && { KmsMasterKeyId: input.KmsMasterKeyId }),
    ...(input.Owner != null && { Owner: input.Owner }),
    ...(input.SqsFailureFeedbackRoleArn != null && { SqsFailureFeedbackRoleArn: input.SqsFailureFeedbackRoleArn }),
    ...(input.SqsSuccessFeedbackRoleArn != null && { SqsSuccessFeedbackRoleArn: input.SqsSuccessFeedbackRoleArn }),
    ...(input.Subscription != null && {
      Subscription: serializeAws_restJson1AwsSnsTopicSubscriptionList(input.Subscription, context),
    }),
    ...(input.TopicName != null && { TopicName: input.TopicName }),
  };
};

const serializeAws_restJson1AwsSnsTopicSubscription = (
  input: AwsSnsTopicSubscription,
  context: __SerdeContext
): any => {
  return {
    ...(input.Endpoint != null && { Endpoint: input.Endpoint }),
    ...(input.Protocol != null && { Protocol: input.Protocol }),
  };
};

const serializeAws_restJson1AwsSnsTopicSubscriptionList = (
  input: AwsSnsTopicSubscription[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsSnsTopicSubscription(entry, context);
    });
};

const serializeAws_restJson1AwsSqsQueueDetails = (input: AwsSqsQueueDetails, context: __SerdeContext): any => {
  return {
    ...(input.DeadLetterTargetArn != null && { DeadLetterTargetArn: input.DeadLetterTargetArn }),
    ...(input.KmsDataKeyReusePeriodSeconds != null && {
      KmsDataKeyReusePeriodSeconds: input.KmsDataKeyReusePeriodSeconds,
    }),
    ...(input.KmsMasterKeyId != null && { KmsMasterKeyId: input.KmsMasterKeyId }),
    ...(input.QueueName != null && { QueueName: input.QueueName }),
  };
};

const serializeAws_restJson1AwsSsmComplianceSummary = (
  input: AwsSsmComplianceSummary,
  context: __SerdeContext
): any => {
  return {
    ...(input.ComplianceType != null && { ComplianceType: input.ComplianceType }),
    ...(input.CompliantCriticalCount != null && { CompliantCriticalCount: input.CompliantCriticalCount }),
    ...(input.CompliantHighCount != null && { CompliantHighCount: input.CompliantHighCount }),
    ...(input.CompliantInformationalCount != null && {
      CompliantInformationalCount: input.CompliantInformationalCount,
    }),
    ...(input.CompliantLowCount != null && { CompliantLowCount: input.CompliantLowCount }),
    ...(input.CompliantMediumCount != null && { CompliantMediumCount: input.CompliantMediumCount }),
    ...(input.CompliantUnspecifiedCount != null && { CompliantUnspecifiedCount: input.CompliantUnspecifiedCount }),
    ...(input.ExecutionType != null && { ExecutionType: input.ExecutionType }),
    ...(input.NonCompliantCriticalCount != null && { NonCompliantCriticalCount: input.NonCompliantCriticalCount }),
    ...(input.NonCompliantHighCount != null && { NonCompliantHighCount: input.NonCompliantHighCount }),
    ...(input.NonCompliantInformationalCount != null && {
      NonCompliantInformationalCount: input.NonCompliantInformationalCount,
    }),
    ...(input.NonCompliantLowCount != null && { NonCompliantLowCount: input.NonCompliantLowCount }),
    ...(input.NonCompliantMediumCount != null && { NonCompliantMediumCount: input.NonCompliantMediumCount }),
    ...(input.NonCompliantUnspecifiedCount != null && {
      NonCompliantUnspecifiedCount: input.NonCompliantUnspecifiedCount,
    }),
    ...(input.OverallSeverity != null && { OverallSeverity: input.OverallSeverity }),
    ...(input.PatchBaselineId != null && { PatchBaselineId: input.PatchBaselineId }),
    ...(input.PatchGroup != null && { PatchGroup: input.PatchGroup }),
    ...(input.Status != null && { Status: input.Status }),
  };
};

const serializeAws_restJson1AwsSsmPatch = (input: AwsSsmPatch, context: __SerdeContext): any => {
  return {
    ...(input.ComplianceSummary != null && {
      ComplianceSummary: serializeAws_restJson1AwsSsmComplianceSummary(input.ComplianceSummary, context),
    }),
  };
};

const serializeAws_restJson1AwsSsmPatchComplianceDetails = (
  input: AwsSsmPatchComplianceDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Patch != null && { Patch: serializeAws_restJson1AwsSsmPatch(input.Patch, context) }),
  };
};

const serializeAws_restJson1AwsWafRateBasedRuleDetails = (
  input: AwsWafRateBasedRuleDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.MatchPredicates != null && {
      MatchPredicates: serializeAws_restJson1AwsWafRateBasedRuleMatchPredicateList(input.MatchPredicates, context),
    }),
    ...(input.MetricName != null && { MetricName: input.MetricName }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RateKey != null && { RateKey: input.RateKey }),
    ...(input.RateLimit != null && { RateLimit: input.RateLimit }),
    ...(input.RuleId != null && { RuleId: input.RuleId }),
  };
};

const serializeAws_restJson1AwsWafRateBasedRuleMatchPredicate = (
  input: AwsWafRateBasedRuleMatchPredicate,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataId != null && { DataId: input.DataId }),
    ...(input.Negated != null && { Negated: input.Negated }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_restJson1AwsWafRateBasedRuleMatchPredicateList = (
  input: AwsWafRateBasedRuleMatchPredicate[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsWafRateBasedRuleMatchPredicate(entry, context);
    });
};

const serializeAws_restJson1AwsWafRegionalRateBasedRuleDetails = (
  input: AwsWafRegionalRateBasedRuleDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.MatchPredicates != null && {
      MatchPredicates: serializeAws_restJson1AwsWafRegionalRateBasedRuleMatchPredicateList(
        input.MatchPredicates,
        context
      ),
    }),
    ...(input.MetricName != null && { MetricName: input.MetricName }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RateKey != null && { RateKey: input.RateKey }),
    ...(input.RateLimit != null && { RateLimit: input.RateLimit }),
    ...(input.RuleId != null && { RuleId: input.RuleId }),
  };
};

const serializeAws_restJson1AwsWafRegionalRateBasedRuleMatchPredicate = (
  input: AwsWafRegionalRateBasedRuleMatchPredicate,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataId != null && { DataId: input.DataId }),
    ...(input.Negated != null && { Negated: input.Negated }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_restJson1AwsWafRegionalRateBasedRuleMatchPredicateList = (
  input: AwsWafRegionalRateBasedRuleMatchPredicate[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsWafRegionalRateBasedRuleMatchPredicate(entry, context);
    });
};

const serializeAws_restJson1AwsWafRegionalRuleDetails = (
  input: AwsWafRegionalRuleDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.MetricName != null && { MetricName: input.MetricName }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.PredicateList != null && {
      PredicateList: serializeAws_restJson1AwsWafRegionalRulePredicateList(input.PredicateList, context),
    }),
    ...(input.RuleId != null && { RuleId: input.RuleId }),
  };
};

const serializeAws_restJson1AwsWafRegionalRuleGroupDetails = (
  input: AwsWafRegionalRuleGroupDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.MetricName != null && { MetricName: input.MetricName }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RuleGroupId != null && { RuleGroupId: input.RuleGroupId }),
    ...(input.Rules != null && { Rules: serializeAws_restJson1AwsWafRegionalRuleGroupRulesList(input.Rules, context) }),
  };
};

const serializeAws_restJson1AwsWafRegionalRuleGroupRulesActionDetails = (
  input: AwsWafRegionalRuleGroupRulesActionDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_restJson1AwsWafRegionalRuleGroupRulesDetails = (
  input: AwsWafRegionalRuleGroupRulesDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Action != null && {
      Action: serializeAws_restJson1AwsWafRegionalRuleGroupRulesActionDetails(input.Action, context),
    }),
    ...(input.Priority != null && { Priority: input.Priority }),
    ...(input.RuleId != null && { RuleId: input.RuleId }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_restJson1AwsWafRegionalRuleGroupRulesList = (
  input: AwsWafRegionalRuleGroupRulesDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsWafRegionalRuleGroupRulesDetails(entry, context);
    });
};

const serializeAws_restJson1AwsWafRegionalRulePredicateList = (
  input: AwsWafRegionalRulePredicateListDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsWafRegionalRulePredicateListDetails(entry, context);
    });
};

const serializeAws_restJson1AwsWafRegionalRulePredicateListDetails = (
  input: AwsWafRegionalRulePredicateListDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataId != null && { DataId: input.DataId }),
    ...(input.Negated != null && { Negated: input.Negated }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_restJson1AwsWafRegionalWebAclDetails = (
  input: AwsWafRegionalWebAclDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.DefaultAction != null && { DefaultAction: input.DefaultAction }),
    ...(input.MetricName != null && { MetricName: input.MetricName }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RulesList != null && {
      RulesList: serializeAws_restJson1AwsWafRegionalWebAclRulesList(input.RulesList, context),
    }),
    ...(input.WebAclId != null && { WebAclId: input.WebAclId }),
  };
};

const serializeAws_restJson1AwsWafRegionalWebAclRulesList = (
  input: AwsWafRegionalWebAclRulesListDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsWafRegionalWebAclRulesListDetails(entry, context);
    });
};

const serializeAws_restJson1AwsWafRegionalWebAclRulesListActionDetails = (
  input: AwsWafRegionalWebAclRulesListActionDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_restJson1AwsWafRegionalWebAclRulesListDetails = (
  input: AwsWafRegionalWebAclRulesListDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Action != null && {
      Action: serializeAws_restJson1AwsWafRegionalWebAclRulesListActionDetails(input.Action, context),
    }),
    ...(input.OverrideAction != null && {
      OverrideAction: serializeAws_restJson1AwsWafRegionalWebAclRulesListOverrideActionDetails(
        input.OverrideAction,
        context
      ),
    }),
    ...(input.Priority != null && { Priority: input.Priority }),
    ...(input.RuleId != null && { RuleId: input.RuleId }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_restJson1AwsWafRegionalWebAclRulesListOverrideActionDetails = (
  input: AwsWafRegionalWebAclRulesListOverrideActionDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_restJson1AwsWafRuleDetails = (input: AwsWafRuleDetails, context: __SerdeContext): any => {
  return {
    ...(input.MetricName != null && { MetricName: input.MetricName }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.PredicateList != null && {
      PredicateList: serializeAws_restJson1AwsWafRulePredicateList(input.PredicateList, context),
    }),
    ...(input.RuleId != null && { RuleId: input.RuleId }),
  };
};

const serializeAws_restJson1AwsWafRuleGroupDetails = (input: AwsWafRuleGroupDetails, context: __SerdeContext): any => {
  return {
    ...(input.MetricName != null && { MetricName: input.MetricName }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RuleGroupId != null && { RuleGroupId: input.RuleGroupId }),
    ...(input.Rules != null && { Rules: serializeAws_restJson1AwsWafRuleGroupRulesList(input.Rules, context) }),
  };
};

const serializeAws_restJson1AwsWafRuleGroupRulesActionDetails = (
  input: AwsWafRuleGroupRulesActionDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_restJson1AwsWafRuleGroupRulesDetails = (
  input: AwsWafRuleGroupRulesDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Action != null && {
      Action: serializeAws_restJson1AwsWafRuleGroupRulesActionDetails(input.Action, context),
    }),
    ...(input.Priority != null && { Priority: input.Priority }),
    ...(input.RuleId != null && { RuleId: input.RuleId }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_restJson1AwsWafRuleGroupRulesList = (
  input: AwsWafRuleGroupRulesDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsWafRuleGroupRulesDetails(entry, context);
    });
};

const serializeAws_restJson1AwsWafRulePredicateList = (
  input: AwsWafRulePredicateListDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsWafRulePredicateListDetails(entry, context);
    });
};

const serializeAws_restJson1AwsWafRulePredicateListDetails = (
  input: AwsWafRulePredicateListDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.DataId != null && { DataId: input.DataId }),
    ...(input.Negated != null && { Negated: input.Negated }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_restJson1AwsWafWebAclDetails = (input: AwsWafWebAclDetails, context: __SerdeContext): any => {
  return {
    ...(input.DefaultAction != null && { DefaultAction: input.DefaultAction }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Rules != null && { Rules: serializeAws_restJson1AwsWafWebAclRuleList(input.Rules, context) }),
    ...(input.WebAclId != null && { WebAclId: input.WebAclId }),
  };
};

const serializeAws_restJson1AwsWafWebAclRule = (input: AwsWafWebAclRule, context: __SerdeContext): any => {
  return {
    ...(input.Action != null && { Action: serializeAws_restJson1WafAction(input.Action, context) }),
    ...(input.ExcludedRules != null && {
      ExcludedRules: serializeAws_restJson1WafExcludedRuleList(input.ExcludedRules, context),
    }),
    ...(input.OverrideAction != null && {
      OverrideAction: serializeAws_restJson1WafOverrideAction(input.OverrideAction, context),
    }),
    ...(input.Priority != null && { Priority: input.Priority }),
    ...(input.RuleId != null && { RuleId: input.RuleId }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_restJson1AwsWafWebAclRuleList = (input: AwsWafWebAclRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsWafWebAclRule(entry, context);
    });
};

const serializeAws_restJson1AwsXrayEncryptionConfigDetails = (
  input: AwsXrayEncryptionConfigDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.KeyId != null && { KeyId: input.KeyId }),
    ...(input.Status != null && { Status: input.Status }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_restJson1BatchImportFindingsRequestFindingList = (
  input: AwsSecurityFinding[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AwsSecurityFinding(entry, context);
    });
};

const serializeAws_restJson1BooleanFilter = (input: BooleanFilter, context: __SerdeContext): any => {
  return {
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_restJson1BooleanFilterList = (input: BooleanFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1BooleanFilter(entry, context);
    });
};

const serializeAws_restJson1Cell = (input: Cell, context: __SerdeContext): any => {
  return {
    ...(input.CellReference != null && { CellReference: input.CellReference }),
    ...(input.Column != null && { Column: input.Column }),
    ...(input.ColumnName != null && { ColumnName: input.ColumnName }),
    ...(input.Row != null && { Row: input.Row }),
  };
};

const serializeAws_restJson1Cells = (input: Cell[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Cell(entry, context);
    });
};

const serializeAws_restJson1CidrBlockAssociation = (input: CidrBlockAssociation, context: __SerdeContext): any => {
  return {
    ...(input.AssociationId != null && { AssociationId: input.AssociationId }),
    ...(input.CidrBlock != null && { CidrBlock: input.CidrBlock }),
    ...(input.CidrBlockState != null && { CidrBlockState: input.CidrBlockState }),
  };
};

const serializeAws_restJson1CidrBlockAssociationList = (
  input: CidrBlockAssociation[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1CidrBlockAssociation(entry, context);
    });
};

const serializeAws_restJson1City = (input: City, context: __SerdeContext): any => {
  return {
    ...(input.CityName != null && { CityName: input.CityName }),
  };
};

const serializeAws_restJson1ClassificationResult = (input: ClassificationResult, context: __SerdeContext): any => {
  return {
    ...(input.AdditionalOccurrences != null && { AdditionalOccurrences: input.AdditionalOccurrences }),
    ...(input.CustomDataIdentifiers != null && {
      CustomDataIdentifiers: serializeAws_restJson1CustomDataIdentifiersResult(input.CustomDataIdentifiers, context),
    }),
    ...(input.MimeType != null && { MimeType: input.MimeType }),
    ...(input.SensitiveData != null && {
      SensitiveData: serializeAws_restJson1SensitiveDataResultList(input.SensitiveData, context),
    }),
    ...(input.SizeClassified != null && { SizeClassified: input.SizeClassified }),
    ...(input.Status != null && { Status: serializeAws_restJson1ClassificationStatus(input.Status, context) }),
  };
};

const serializeAws_restJson1ClassificationStatus = (input: ClassificationStatus, context: __SerdeContext): any => {
  return {
    ...(input.Code != null && { Code: input.Code }),
    ...(input.Reason != null && { Reason: input.Reason }),
  };
};

const serializeAws_restJson1Compliance = (input: Compliance, context: __SerdeContext): any => {
  return {
    ...(input.RelatedRequirements != null && {
      RelatedRequirements: serializeAws_restJson1RelatedRequirementsList(input.RelatedRequirements, context),
    }),
    ...(input.Status != null && { Status: input.Status }),
    ...(input.StatusReasons != null && {
      StatusReasons: serializeAws_restJson1StatusReasonsList(input.StatusReasons, context),
    }),
  };
};

const serializeAws_restJson1ContainerDetails = (input: ContainerDetails, context: __SerdeContext): any => {
  return {
    ...(input.ContainerRuntime != null && { ContainerRuntime: input.ContainerRuntime }),
    ...(input.ImageId != null && { ImageId: input.ImageId }),
    ...(input.ImageName != null && { ImageName: input.ImageName }),
    ...(input.LaunchedAt != null && { LaunchedAt: input.LaunchedAt }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Privileged != null && { Privileged: input.Privileged }),
    ...(input.VolumeMounts != null && {
      VolumeMounts: serializeAws_restJson1VolumeMountList(input.VolumeMounts, context),
    }),
  };
};

const serializeAws_restJson1Country = (input: Country, context: __SerdeContext): any => {
  return {
    ...(input.CountryCode != null && { CountryCode: input.CountryCode }),
    ...(input.CountryName != null && { CountryName: input.CountryName }),
  };
};

const serializeAws_restJson1CustomDataIdentifiersDetections = (
  input: CustomDataIdentifiersDetections,
  context: __SerdeContext
): any => {
  return {
    ...(input.Arn != null && { Arn: input.Arn }),
    ...(input.Count != null && { Count: input.Count }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Occurrences != null && { Occurrences: serializeAws_restJson1Occurrences(input.Occurrences, context) }),
  };
};

const serializeAws_restJson1CustomDataIdentifiersDetectionsList = (
  input: CustomDataIdentifiersDetections[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1CustomDataIdentifiersDetections(entry, context);
    });
};

const serializeAws_restJson1CustomDataIdentifiersResult = (
  input: CustomDataIdentifiersResult,
  context: __SerdeContext
): any => {
  return {
    ...(input.Detections != null && {
      Detections: serializeAws_restJson1CustomDataIdentifiersDetectionsList(input.Detections, context),
    }),
    ...(input.TotalCount != null && { TotalCount: input.TotalCount }),
  };
};

const serializeAws_restJson1Cvss = (input: Cvss, context: __SerdeContext): any => {
  return {
    ...(input.Adjustments != null && { Adjustments: serializeAws_restJson1AdjustmentList(input.Adjustments, context) }),
    ...(input.BaseScore != null && { BaseScore: __serializeFloat(input.BaseScore) }),
    ...(input.BaseVector != null && { BaseVector: input.BaseVector }),
    ...(input.Source != null && { Source: input.Source }),
    ...(input.Version != null && { Version: input.Version }),
  };
};

const serializeAws_restJson1CvssList = (input: Cvss[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Cvss(entry, context);
    });
};

const serializeAws_restJson1DataClassificationDetails = (
  input: DataClassificationDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.DetailedResultsLocation != null && { DetailedResultsLocation: input.DetailedResultsLocation }),
    ...(input.Result != null && { Result: serializeAws_restJson1ClassificationResult(input.Result, context) }),
  };
};

const serializeAws_restJson1DateFilter = (input: DateFilter, context: __SerdeContext): any => {
  return {
    ...(input.DateRange != null && { DateRange: serializeAws_restJson1DateRange(input.DateRange, context) }),
    ...(input.End != null && { End: input.End }),
    ...(input.Start != null && { Start: input.Start }),
  };
};

const serializeAws_restJson1DateFilterList = (input: DateFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1DateFilter(entry, context);
    });
};

const serializeAws_restJson1DateRange = (input: DateRange, context: __SerdeContext): any => {
  return {
    ...(input.Unit != null && { Unit: input.Unit }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_restJson1DnsRequestAction = (input: DnsRequestAction, context: __SerdeContext): any => {
  return {
    ...(input.Blocked != null && { Blocked: input.Blocked }),
    ...(input.Domain != null && { Domain: input.Domain }),
    ...(input.Protocol != null && { Protocol: input.Protocol }),
  };
};

const serializeAws_restJson1FieldMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1FilePathList = (input: FilePaths[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1FilePaths(entry, context);
    });
};

const serializeAws_restJson1FilePaths = (input: FilePaths, context: __SerdeContext): any => {
  return {
    ...(input.FileName != null && { FileName: input.FileName }),
    ...(input.FilePath != null && { FilePath: input.FilePath }),
    ...(input.Hash != null && { Hash: input.Hash }),
    ...(input.ResourceId != null && { ResourceId: input.ResourceId }),
  };
};

const serializeAws_restJson1FindingProviderFields = (input: FindingProviderFields, context: __SerdeContext): any => {
  return {
    ...(input.Confidence != null && { Confidence: input.Confidence }),
    ...(input.Criticality != null && { Criticality: input.Criticality }),
    ...(input.RelatedFindings != null && {
      RelatedFindings: serializeAws_restJson1RelatedFindingList(input.RelatedFindings, context),
    }),
    ...(input.Severity != null && { Severity: serializeAws_restJson1FindingProviderSeverity(input.Severity, context) }),
    ...(input.Types != null && { Types: serializeAws_restJson1TypeList(input.Types, context) }),
  };
};

const serializeAws_restJson1FindingProviderSeverity = (
  input: FindingProviderSeverity,
  context: __SerdeContext
): any => {
  return {
    ...(input.Label != null && { Label: input.Label }),
    ...(input.Original != null && { Original: input.Original }),
  };
};

const serializeAws_restJson1FirewallPolicyDetails = (input: FirewallPolicyDetails, context: __SerdeContext): any => {
  return {
    ...(input.StatefulRuleGroupReferences != null && {
      StatefulRuleGroupReferences: serializeAws_restJson1FirewallPolicyStatefulRuleGroupReferencesList(
        input.StatefulRuleGroupReferences,
        context
      ),
    }),
    ...(input.StatelessCustomActions != null && {
      StatelessCustomActions: serializeAws_restJson1FirewallPolicyStatelessCustomActionsList(
        input.StatelessCustomActions,
        context
      ),
    }),
    ...(input.StatelessDefaultActions != null && {
      StatelessDefaultActions: serializeAws_restJson1NonEmptyStringList(input.StatelessDefaultActions, context),
    }),
    ...(input.StatelessFragmentDefaultActions != null && {
      StatelessFragmentDefaultActions: serializeAws_restJson1NonEmptyStringList(
        input.StatelessFragmentDefaultActions,
        context
      ),
    }),
    ...(input.StatelessRuleGroupReferences != null && {
      StatelessRuleGroupReferences: serializeAws_restJson1FirewallPolicyStatelessRuleGroupReferencesList(
        input.StatelessRuleGroupReferences,
        context
      ),
    }),
  };
};

const serializeAws_restJson1FirewallPolicyStatefulRuleGroupReferencesDetails = (
  input: FirewallPolicyStatefulRuleGroupReferencesDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_restJson1FirewallPolicyStatefulRuleGroupReferencesList = (
  input: FirewallPolicyStatefulRuleGroupReferencesDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1FirewallPolicyStatefulRuleGroupReferencesDetails(entry, context);
    });
};

const serializeAws_restJson1FirewallPolicyStatelessCustomActionsDetails = (
  input: FirewallPolicyStatelessCustomActionsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.ActionDefinition != null && {
      ActionDefinition: serializeAws_restJson1StatelessCustomActionDefinition(input.ActionDefinition, context),
    }),
    ...(input.ActionName != null && { ActionName: input.ActionName }),
  };
};

const serializeAws_restJson1FirewallPolicyStatelessCustomActionsList = (
  input: FirewallPolicyStatelessCustomActionsDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1FirewallPolicyStatelessCustomActionsDetails(entry, context);
    });
};

const serializeAws_restJson1FirewallPolicyStatelessRuleGroupReferencesDetails = (
  input: FirewallPolicyStatelessRuleGroupReferencesDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Priority != null && { Priority: input.Priority }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_restJson1FirewallPolicyStatelessRuleGroupReferencesList = (
  input: FirewallPolicyStatelessRuleGroupReferencesDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1FirewallPolicyStatelessRuleGroupReferencesDetails(entry, context);
    });
};

const serializeAws_restJson1GeoLocation = (input: GeoLocation, context: __SerdeContext): any => {
  return {
    ...(input.Lat != null && { Lat: __serializeFloat(input.Lat) }),
    ...(input.Lon != null && { Lon: __serializeFloat(input.Lon) }),
  };
};

const serializeAws_restJson1IcmpTypeCode = (input: IcmpTypeCode, context: __SerdeContext): any => {
  return {
    ...(input.Code != null && { Code: input.Code }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_restJson1IntegerList = (input: number[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1IpFilter = (input: IpFilter, context: __SerdeContext): any => {
  return {
    ...(input.Cidr != null && { Cidr: input.Cidr }),
  };
};

const serializeAws_restJson1IpFilterList = (input: IpFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1IpFilter(entry, context);
    });
};

const serializeAws_restJson1IpOrganizationDetails = (input: IpOrganizationDetails, context: __SerdeContext): any => {
  return {
    ...(input.Asn != null && { Asn: input.Asn }),
    ...(input.AsnOrg != null && { AsnOrg: input.AsnOrg }),
    ...(input.Isp != null && { Isp: input.Isp }),
    ...(input.Org != null && { Org: input.Org }),
  };
};

const serializeAws_restJson1Ipv6CidrBlockAssociation = (
  input: Ipv6CidrBlockAssociation,
  context: __SerdeContext
): any => {
  return {
    ...(input.AssociationId != null && { AssociationId: input.AssociationId }),
    ...(input.CidrBlockState != null && { CidrBlockState: input.CidrBlockState }),
    ...(input.Ipv6CidrBlock != null && { Ipv6CidrBlock: input.Ipv6CidrBlock }),
  };
};

const serializeAws_restJson1Ipv6CidrBlockAssociationList = (
  input: Ipv6CidrBlockAssociation[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Ipv6CidrBlockAssociation(entry, context);
    });
};

const serializeAws_restJson1KeywordFilter = (input: KeywordFilter, context: __SerdeContext): any => {
  return {
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_restJson1KeywordFilterList = (input: KeywordFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1KeywordFilter(entry, context);
    });
};

const serializeAws_restJson1LoadBalancerState = (input: LoadBalancerState, context: __SerdeContext): any => {
  return {
    ...(input.Code != null && { Code: input.Code }),
    ...(input.Reason != null && { Reason: input.Reason }),
  };
};

const serializeAws_restJson1Malware = (input: Malware, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Path != null && { Path: input.Path }),
    ...(input.State != null && { State: input.State }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_restJson1MalwareList = (input: Malware[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Malware(entry, context);
    });
};

const serializeAws_restJson1MapFilter = (input: MapFilter, context: __SerdeContext): any => {
  return {
    ...(input.Comparison != null && { Comparison: input.Comparison }),
    ...(input.Key != null && { Key: input.Key }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_restJson1MapFilterList = (input: MapFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1MapFilter(entry, context);
    });
};

const serializeAws_restJson1Network = (input: Network, context: __SerdeContext): any => {
  return {
    ...(input.DestinationDomain != null && { DestinationDomain: input.DestinationDomain }),
    ...(input.DestinationIpV4 != null && { DestinationIpV4: input.DestinationIpV4 }),
    ...(input.DestinationIpV6 != null && { DestinationIpV6: input.DestinationIpV6 }),
    ...(input.DestinationPort != null && { DestinationPort: input.DestinationPort }),
    ...(input.Direction != null && { Direction: input.Direction }),
    ...(input.OpenPortRange != null && {
      OpenPortRange: serializeAws_restJson1PortRange(input.OpenPortRange, context),
    }),
    ...(input.Protocol != null && { Protocol: input.Protocol }),
    ...(input.SourceDomain != null && { SourceDomain: input.SourceDomain }),
    ...(input.SourceIpV4 != null && { SourceIpV4: input.SourceIpV4 }),
    ...(input.SourceIpV6 != null && { SourceIpV6: input.SourceIpV6 }),
    ...(input.SourceMac != null && { SourceMac: input.SourceMac }),
    ...(input.SourcePort != null && { SourcePort: input.SourcePort }),
  };
};

const serializeAws_restJson1NetworkConnectionAction = (
  input: NetworkConnectionAction,
  context: __SerdeContext
): any => {
  return {
    ...(input.Blocked != null && { Blocked: input.Blocked }),
    ...(input.ConnectionDirection != null && { ConnectionDirection: input.ConnectionDirection }),
    ...(input.LocalPortDetails != null && {
      LocalPortDetails: serializeAws_restJson1ActionLocalPortDetails(input.LocalPortDetails, context),
    }),
    ...(input.Protocol != null && { Protocol: input.Protocol }),
    ...(input.RemoteIpDetails != null && {
      RemoteIpDetails: serializeAws_restJson1ActionRemoteIpDetails(input.RemoteIpDetails, context),
    }),
    ...(input.RemotePortDetails != null && {
      RemotePortDetails: serializeAws_restJson1ActionRemotePortDetails(input.RemotePortDetails, context),
    }),
  };
};

const serializeAws_restJson1NetworkHeader = (input: NetworkHeader, context: __SerdeContext): any => {
  return {
    ...(input.Destination != null && {
      Destination: serializeAws_restJson1NetworkPathComponentDetails(input.Destination, context),
    }),
    ...(input.Protocol != null && { Protocol: input.Protocol }),
    ...(input.Source != null && { Source: serializeAws_restJson1NetworkPathComponentDetails(input.Source, context) }),
  };
};

const serializeAws_restJson1NetworkPathComponent = (input: NetworkPathComponent, context: __SerdeContext): any => {
  return {
    ...(input.ComponentId != null && { ComponentId: input.ComponentId }),
    ...(input.ComponentType != null && { ComponentType: input.ComponentType }),
    ...(input.Egress != null && { Egress: serializeAws_restJson1NetworkHeader(input.Egress, context) }),
    ...(input.Ingress != null && { Ingress: serializeAws_restJson1NetworkHeader(input.Ingress, context) }),
  };
};

const serializeAws_restJson1NetworkPathComponentDetails = (
  input: NetworkPathComponentDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Address != null && { Address: serializeAws_restJson1StringList(input.Address, context) }),
    ...(input.PortRanges != null && { PortRanges: serializeAws_restJson1PortRangeList(input.PortRanges, context) }),
  };
};

const serializeAws_restJson1NetworkPathList = (input: NetworkPathComponent[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1NetworkPathComponent(entry, context);
    });
};

const serializeAws_restJson1NonEmptyStringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1Note = (input: Note, context: __SerdeContext): any => {
  return {
    ...(input.Text != null && { Text: input.Text }),
    ...(input.UpdatedAt != null && { UpdatedAt: input.UpdatedAt }),
    ...(input.UpdatedBy != null && { UpdatedBy: input.UpdatedBy }),
  };
};

const serializeAws_restJson1NoteUpdate = (input: NoteUpdate, context: __SerdeContext): any => {
  return {
    ...(input.Text != null && { Text: input.Text }),
    ...(input.UpdatedBy != null && { UpdatedBy: input.UpdatedBy }),
  };
};

const serializeAws_restJson1NumberFilter = (input: NumberFilter, context: __SerdeContext): any => {
  return {
    ...(input.Eq != null && { Eq: __serializeFloat(input.Eq) }),
    ...(input.Gte != null && { Gte: __serializeFloat(input.Gte) }),
    ...(input.Lte != null && { Lte: __serializeFloat(input.Lte) }),
  };
};

const serializeAws_restJson1NumberFilterList = (input: NumberFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1NumberFilter(entry, context);
    });
};

const serializeAws_restJson1Occurrences = (input: Occurrences, context: __SerdeContext): any => {
  return {
    ...(input.Cells != null && { Cells: serializeAws_restJson1Cells(input.Cells, context) }),
    ...(input.LineRanges != null && { LineRanges: serializeAws_restJson1Ranges(input.LineRanges, context) }),
    ...(input.OffsetRanges != null && { OffsetRanges: serializeAws_restJson1Ranges(input.OffsetRanges, context) }),
    ...(input.Pages != null && { Pages: serializeAws_restJson1Pages(input.Pages, context) }),
    ...(input.Records != null && { Records: serializeAws_restJson1Records(input.Records, context) }),
  };
};

const serializeAws_restJson1Page = (input: Page, context: __SerdeContext): any => {
  return {
    ...(input.LineRange != null && { LineRange: serializeAws_restJson1Range(input.LineRange, context) }),
    ...(input.OffsetRange != null && { OffsetRange: serializeAws_restJson1Range(input.OffsetRange, context) }),
    ...(input.PageNumber != null && { PageNumber: input.PageNumber }),
  };
};

const serializeAws_restJson1Pages = (input: Page[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Page(entry, context);
    });
};

const serializeAws_restJson1PatchSummary = (input: PatchSummary, context: __SerdeContext): any => {
  return {
    ...(input.FailedCount != null && { FailedCount: input.FailedCount }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.InstalledCount != null && { InstalledCount: input.InstalledCount }),
    ...(input.InstalledOtherCount != null && { InstalledOtherCount: input.InstalledOtherCount }),
    ...(input.InstalledPendingReboot != null && { InstalledPendingReboot: input.InstalledPendingReboot }),
    ...(input.InstalledRejectedCount != null && { InstalledRejectedCount: input.InstalledRejectedCount }),
    ...(input.MissingCount != null && { MissingCount: input.MissingCount }),
    ...(input.Operation != null && { Operation: input.Operation }),
    ...(input.OperationEndTime != null && { OperationEndTime: input.OperationEndTime }),
    ...(input.OperationStartTime != null && { OperationStartTime: input.OperationStartTime }),
    ...(input.RebootOption != null && { RebootOption: input.RebootOption }),
  };
};

const serializeAws_restJson1PortProbeAction = (input: PortProbeAction, context: __SerdeContext): any => {
  return {
    ...(input.Blocked != null && { Blocked: input.Blocked }),
    ...(input.PortProbeDetails != null && {
      PortProbeDetails: serializeAws_restJson1PortProbeDetailList(input.PortProbeDetails, context),
    }),
  };
};

const serializeAws_restJson1PortProbeDetail = (input: PortProbeDetail, context: __SerdeContext): any => {
  return {
    ...(input.LocalIpDetails != null && {
      LocalIpDetails: serializeAws_restJson1ActionLocalIpDetails(input.LocalIpDetails, context),
    }),
    ...(input.LocalPortDetails != null && {
      LocalPortDetails: serializeAws_restJson1ActionLocalPortDetails(input.LocalPortDetails, context),
    }),
    ...(input.RemoteIpDetails != null && {
      RemoteIpDetails: serializeAws_restJson1ActionRemoteIpDetails(input.RemoteIpDetails, context),
    }),
  };
};

const serializeAws_restJson1PortProbeDetailList = (input: PortProbeDetail[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1PortProbeDetail(entry, context);
    });
};

const serializeAws_restJson1PortRange = (input: PortRange, context: __SerdeContext): any => {
  return {
    ...(input.Begin != null && { Begin: input.Begin }),
    ...(input.End != null && { End: input.End }),
  };
};

const serializeAws_restJson1PortRangeFromTo = (input: PortRangeFromTo, context: __SerdeContext): any => {
  return {
    ...(input.From != null && { From: input.From }),
    ...(input.To != null && { To: input.To }),
  };
};

const serializeAws_restJson1PortRangeList = (input: PortRange[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1PortRange(entry, context);
    });
};

const serializeAws_restJson1ProcessDetails = (input: ProcessDetails, context: __SerdeContext): any => {
  return {
    ...(input.LaunchedAt != null && { LaunchedAt: input.LaunchedAt }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.ParentPid != null && { ParentPid: input.ParentPid }),
    ...(input.Path != null && { Path: input.Path }),
    ...(input.Pid != null && { Pid: input.Pid }),
    ...(input.TerminatedAt != null && { TerminatedAt: input.TerminatedAt }),
  };
};

const serializeAws_restJson1Range = (input: Range, context: __SerdeContext): any => {
  return {
    ...(input.End != null && { End: input.End }),
    ...(input.Start != null && { Start: input.Start }),
    ...(input.StartColumn != null && { StartColumn: input.StartColumn }),
  };
};

const serializeAws_restJson1Ranges = (input: Range[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Range(entry, context);
    });
};

const serializeAws_restJson1Recommendation = (input: Recommendation, context: __SerdeContext): any => {
  return {
    ...(input.Text != null && { Text: input.Text }),
    ...(input.Url != null && { Url: input.Url }),
  };
};

const serializeAws_restJson1_Record = (input: _Record, context: __SerdeContext): any => {
  return {
    ...(input.JsonPath != null && { JsonPath: input.JsonPath }),
    ...(input.RecordIndex != null && { RecordIndex: input.RecordIndex }),
  };
};

const serializeAws_restJson1Records = (input: _Record[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1_Record(entry, context);
    });
};

const serializeAws_restJson1RelatedFinding = (input: RelatedFinding, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.ProductArn != null && { ProductArn: input.ProductArn }),
  };
};

const serializeAws_restJson1RelatedFindingList = (input: RelatedFinding[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1RelatedFinding(entry, context);
    });
};

const serializeAws_restJson1RelatedRequirementsList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1Remediation = (input: Remediation, context: __SerdeContext): any => {
  return {
    ...(input.Recommendation != null && {
      Recommendation: serializeAws_restJson1Recommendation(input.Recommendation, context),
    }),
  };
};

const serializeAws_restJson1Resource = (input: Resource, context: __SerdeContext): any => {
  return {
    ...(input.DataClassification != null && {
      DataClassification: serializeAws_restJson1DataClassificationDetails(input.DataClassification, context),
    }),
    ...(input.Details != null && { Details: serializeAws_restJson1ResourceDetails(input.Details, context) }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Partition != null && { Partition: input.Partition }),
    ...(input.Region != null && { Region: input.Region }),
    ...(input.ResourceRole != null && { ResourceRole: input.ResourceRole }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1FieldMap(input.Tags, context) }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_restJson1ResourceDetails = (input: ResourceDetails, context: __SerdeContext): any => {
  return {
    ...(input.AwsApiGatewayRestApi != null && {
      AwsApiGatewayRestApi: serializeAws_restJson1AwsApiGatewayRestApiDetails(input.AwsApiGatewayRestApi, context),
    }),
    ...(input.AwsApiGatewayStage != null && {
      AwsApiGatewayStage: serializeAws_restJson1AwsApiGatewayStageDetails(input.AwsApiGatewayStage, context),
    }),
    ...(input.AwsApiGatewayV2Api != null && {
      AwsApiGatewayV2Api: serializeAws_restJson1AwsApiGatewayV2ApiDetails(input.AwsApiGatewayV2Api, context),
    }),
    ...(input.AwsApiGatewayV2Stage != null && {
      AwsApiGatewayV2Stage: serializeAws_restJson1AwsApiGatewayV2StageDetails(input.AwsApiGatewayV2Stage, context),
    }),
    ...(input.AwsAutoScalingAutoScalingGroup != null && {
      AwsAutoScalingAutoScalingGroup: serializeAws_restJson1AwsAutoScalingAutoScalingGroupDetails(
        input.AwsAutoScalingAutoScalingGroup,
        context
      ),
    }),
    ...(input.AwsAutoScalingLaunchConfiguration != null && {
      AwsAutoScalingLaunchConfiguration: serializeAws_restJson1AwsAutoScalingLaunchConfigurationDetails(
        input.AwsAutoScalingLaunchConfiguration,
        context
      ),
    }),
    ...(input.AwsBackupBackupPlan != null && {
      AwsBackupBackupPlan: serializeAws_restJson1AwsBackupBackupPlanDetails(input.AwsBackupBackupPlan, context),
    }),
    ...(input.AwsBackupBackupVault != null && {
      AwsBackupBackupVault: serializeAws_restJson1AwsBackupBackupVaultDetails(input.AwsBackupBackupVault, context),
    }),
    ...(input.AwsBackupRecoveryPoint != null && {
      AwsBackupRecoveryPoint: serializeAws_restJson1AwsBackupRecoveryPointDetails(
        input.AwsBackupRecoveryPoint,
        context
      ),
    }),
    ...(input.AwsCertificateManagerCertificate != null && {
      AwsCertificateManagerCertificate: serializeAws_restJson1AwsCertificateManagerCertificateDetails(
        input.AwsCertificateManagerCertificate,
        context
      ),
    }),
    ...(input.AwsCloudFormationStack != null && {
      AwsCloudFormationStack: serializeAws_restJson1AwsCloudFormationStackDetails(
        input.AwsCloudFormationStack,
        context
      ),
    }),
    ...(input.AwsCloudFrontDistribution != null && {
      AwsCloudFrontDistribution: serializeAws_restJson1AwsCloudFrontDistributionDetails(
        input.AwsCloudFrontDistribution,
        context
      ),
    }),
    ...(input.AwsCloudTrailTrail != null && {
      AwsCloudTrailTrail: serializeAws_restJson1AwsCloudTrailTrailDetails(input.AwsCloudTrailTrail, context),
    }),
    ...(input.AwsCloudWatchAlarm != null && {
      AwsCloudWatchAlarm: serializeAws_restJson1AwsCloudWatchAlarmDetails(input.AwsCloudWatchAlarm, context),
    }),
    ...(input.AwsCodeBuildProject != null && {
      AwsCodeBuildProject: serializeAws_restJson1AwsCodeBuildProjectDetails(input.AwsCodeBuildProject, context),
    }),
    ...(input.AwsDynamoDbTable != null && {
      AwsDynamoDbTable: serializeAws_restJson1AwsDynamoDbTableDetails(input.AwsDynamoDbTable, context),
    }),
    ...(input.AwsEc2Eip != null && { AwsEc2Eip: serializeAws_restJson1AwsEc2EipDetails(input.AwsEc2Eip, context) }),
    ...(input.AwsEc2Instance != null && {
      AwsEc2Instance: serializeAws_restJson1AwsEc2InstanceDetails(input.AwsEc2Instance, context),
    }),
    ...(input.AwsEc2NetworkAcl != null && {
      AwsEc2NetworkAcl: serializeAws_restJson1AwsEc2NetworkAclDetails(input.AwsEc2NetworkAcl, context),
    }),
    ...(input.AwsEc2NetworkInterface != null && {
      AwsEc2NetworkInterface: serializeAws_restJson1AwsEc2NetworkInterfaceDetails(
        input.AwsEc2NetworkInterface,
        context
      ),
    }),
    ...(input.AwsEc2SecurityGroup != null && {
      AwsEc2SecurityGroup: serializeAws_restJson1AwsEc2SecurityGroupDetails(input.AwsEc2SecurityGroup, context),
    }),
    ...(input.AwsEc2Subnet != null && {
      AwsEc2Subnet: serializeAws_restJson1AwsEc2SubnetDetails(input.AwsEc2Subnet, context),
    }),
    ...(input.AwsEc2TransitGateway != null && {
      AwsEc2TransitGateway: serializeAws_restJson1AwsEc2TransitGatewayDetails(input.AwsEc2TransitGateway, context),
    }),
    ...(input.AwsEc2Volume != null && {
      AwsEc2Volume: serializeAws_restJson1AwsEc2VolumeDetails(input.AwsEc2Volume, context),
    }),
    ...(input.AwsEc2Vpc != null && { AwsEc2Vpc: serializeAws_restJson1AwsEc2VpcDetails(input.AwsEc2Vpc, context) }),
    ...(input.AwsEc2VpcEndpointService != null && {
      AwsEc2VpcEndpointService: serializeAws_restJson1AwsEc2VpcEndpointServiceDetails(
        input.AwsEc2VpcEndpointService,
        context
      ),
    }),
    ...(input.AwsEc2VpcPeeringConnection != null && {
      AwsEc2VpcPeeringConnection: serializeAws_restJson1AwsEc2VpcPeeringConnectionDetails(
        input.AwsEc2VpcPeeringConnection,
        context
      ),
    }),
    ...(input.AwsEc2VpnConnection != null && {
      AwsEc2VpnConnection: serializeAws_restJson1AwsEc2VpnConnectionDetails(input.AwsEc2VpnConnection, context),
    }),
    ...(input.AwsEcrContainerImage != null && {
      AwsEcrContainerImage: serializeAws_restJson1AwsEcrContainerImageDetails(input.AwsEcrContainerImage, context),
    }),
    ...(input.AwsEcrRepository != null && {
      AwsEcrRepository: serializeAws_restJson1AwsEcrRepositoryDetails(input.AwsEcrRepository, context),
    }),
    ...(input.AwsEcsCluster != null && {
      AwsEcsCluster: serializeAws_restJson1AwsEcsClusterDetails(input.AwsEcsCluster, context),
    }),
    ...(input.AwsEcsContainer != null && {
      AwsEcsContainer: serializeAws_restJson1AwsEcsContainerDetails(input.AwsEcsContainer, context),
    }),
    ...(input.AwsEcsService != null && {
      AwsEcsService: serializeAws_restJson1AwsEcsServiceDetails(input.AwsEcsService, context),
    }),
    ...(input.AwsEcsTask != null && { AwsEcsTask: serializeAws_restJson1AwsEcsTaskDetails(input.AwsEcsTask, context) }),
    ...(input.AwsEcsTaskDefinition != null && {
      AwsEcsTaskDefinition: serializeAws_restJson1AwsEcsTaskDefinitionDetails(input.AwsEcsTaskDefinition, context),
    }),
    ...(input.AwsEfsAccessPoint != null && {
      AwsEfsAccessPoint: serializeAws_restJson1AwsEfsAccessPointDetails(input.AwsEfsAccessPoint, context),
    }),
    ...(input.AwsEksCluster != null && {
      AwsEksCluster: serializeAws_restJson1AwsEksClusterDetails(input.AwsEksCluster, context),
    }),
    ...(input.AwsElasticBeanstalkEnvironment != null && {
      AwsElasticBeanstalkEnvironment: serializeAws_restJson1AwsElasticBeanstalkEnvironmentDetails(
        input.AwsElasticBeanstalkEnvironment,
        context
      ),
    }),
    ...(input.AwsElasticsearchDomain != null && {
      AwsElasticsearchDomain: serializeAws_restJson1AwsElasticsearchDomainDetails(
        input.AwsElasticsearchDomain,
        context
      ),
    }),
    ...(input.AwsElbLoadBalancer != null && {
      AwsElbLoadBalancer: serializeAws_restJson1AwsElbLoadBalancerDetails(input.AwsElbLoadBalancer, context),
    }),
    ...(input.AwsElbv2LoadBalancer != null && {
      AwsElbv2LoadBalancer: serializeAws_restJson1AwsElbv2LoadBalancerDetails(input.AwsElbv2LoadBalancer, context),
    }),
    ...(input.AwsIamAccessKey != null && {
      AwsIamAccessKey: serializeAws_restJson1AwsIamAccessKeyDetails(input.AwsIamAccessKey, context),
    }),
    ...(input.AwsIamGroup != null && {
      AwsIamGroup: serializeAws_restJson1AwsIamGroupDetails(input.AwsIamGroup, context),
    }),
    ...(input.AwsIamPolicy != null && {
      AwsIamPolicy: serializeAws_restJson1AwsIamPolicyDetails(input.AwsIamPolicy, context),
    }),
    ...(input.AwsIamRole != null && { AwsIamRole: serializeAws_restJson1AwsIamRoleDetails(input.AwsIamRole, context) }),
    ...(input.AwsIamUser != null && { AwsIamUser: serializeAws_restJson1AwsIamUserDetails(input.AwsIamUser, context) }),
    ...(input.AwsKinesisStream != null && {
      AwsKinesisStream: serializeAws_restJson1AwsKinesisStreamDetails(input.AwsKinesisStream, context),
    }),
    ...(input.AwsKmsKey != null && { AwsKmsKey: serializeAws_restJson1AwsKmsKeyDetails(input.AwsKmsKey, context) }),
    ...(input.AwsLambdaFunction != null && {
      AwsLambdaFunction: serializeAws_restJson1AwsLambdaFunctionDetails(input.AwsLambdaFunction, context),
    }),
    ...(input.AwsLambdaLayerVersion != null && {
      AwsLambdaLayerVersion: serializeAws_restJson1AwsLambdaLayerVersionDetails(input.AwsLambdaLayerVersion, context),
    }),
    ...(input.AwsNetworkFirewallFirewall != null && {
      AwsNetworkFirewallFirewall: serializeAws_restJson1AwsNetworkFirewallFirewallDetails(
        input.AwsNetworkFirewallFirewall,
        context
      ),
    }),
    ...(input.AwsNetworkFirewallFirewallPolicy != null && {
      AwsNetworkFirewallFirewallPolicy: serializeAws_restJson1AwsNetworkFirewallFirewallPolicyDetails(
        input.AwsNetworkFirewallFirewallPolicy,
        context
      ),
    }),
    ...(input.AwsNetworkFirewallRuleGroup != null && {
      AwsNetworkFirewallRuleGroup: serializeAws_restJson1AwsNetworkFirewallRuleGroupDetails(
        input.AwsNetworkFirewallRuleGroup,
        context
      ),
    }),
    ...(input.AwsOpenSearchServiceDomain != null && {
      AwsOpenSearchServiceDomain: serializeAws_restJson1AwsOpenSearchServiceDomainDetails(
        input.AwsOpenSearchServiceDomain,
        context
      ),
    }),
    ...(input.AwsRdsDbCluster != null && {
      AwsRdsDbCluster: serializeAws_restJson1AwsRdsDbClusterDetails(input.AwsRdsDbCluster, context),
    }),
    ...(input.AwsRdsDbClusterSnapshot != null && {
      AwsRdsDbClusterSnapshot: serializeAws_restJson1AwsRdsDbClusterSnapshotDetails(
        input.AwsRdsDbClusterSnapshot,
        context
      ),
    }),
    ...(input.AwsRdsDbInstance != null && {
      AwsRdsDbInstance: serializeAws_restJson1AwsRdsDbInstanceDetails(input.AwsRdsDbInstance, context),
    }),
    ...(input.AwsRdsDbSecurityGroup != null && {
      AwsRdsDbSecurityGroup: serializeAws_restJson1AwsRdsDbSecurityGroupDetails(input.AwsRdsDbSecurityGroup, context),
    }),
    ...(input.AwsRdsDbSnapshot != null && {
      AwsRdsDbSnapshot: serializeAws_restJson1AwsRdsDbSnapshotDetails(input.AwsRdsDbSnapshot, context),
    }),
    ...(input.AwsRdsEventSubscription != null && {
      AwsRdsEventSubscription: serializeAws_restJson1AwsRdsEventSubscriptionDetails(
        input.AwsRdsEventSubscription,
        context
      ),
    }),
    ...(input.AwsRedshiftCluster != null && {
      AwsRedshiftCluster: serializeAws_restJson1AwsRedshiftClusterDetails(input.AwsRedshiftCluster, context),
    }),
    ...(input.AwsS3AccountPublicAccessBlock != null && {
      AwsS3AccountPublicAccessBlock: serializeAws_restJson1AwsS3AccountPublicAccessBlockDetails(
        input.AwsS3AccountPublicAccessBlock,
        context
      ),
    }),
    ...(input.AwsS3Bucket != null && {
      AwsS3Bucket: serializeAws_restJson1AwsS3BucketDetails(input.AwsS3Bucket, context),
    }),
    ...(input.AwsS3Object != null && {
      AwsS3Object: serializeAws_restJson1AwsS3ObjectDetails(input.AwsS3Object, context),
    }),
    ...(input.AwsSecretsManagerSecret != null && {
      AwsSecretsManagerSecret: serializeAws_restJson1AwsSecretsManagerSecretDetails(
        input.AwsSecretsManagerSecret,
        context
      ),
    }),
    ...(input.AwsSnsTopic != null && {
      AwsSnsTopic: serializeAws_restJson1AwsSnsTopicDetails(input.AwsSnsTopic, context),
    }),
    ...(input.AwsSqsQueue != null && {
      AwsSqsQueue: serializeAws_restJson1AwsSqsQueueDetails(input.AwsSqsQueue, context),
    }),
    ...(input.AwsSsmPatchCompliance != null && {
      AwsSsmPatchCompliance: serializeAws_restJson1AwsSsmPatchComplianceDetails(input.AwsSsmPatchCompliance, context),
    }),
    ...(input.AwsWafRateBasedRule != null && {
      AwsWafRateBasedRule: serializeAws_restJson1AwsWafRateBasedRuleDetails(input.AwsWafRateBasedRule, context),
    }),
    ...(input.AwsWafRegionalRateBasedRule != null && {
      AwsWafRegionalRateBasedRule: serializeAws_restJson1AwsWafRegionalRateBasedRuleDetails(
        input.AwsWafRegionalRateBasedRule,
        context
      ),
    }),
    ...(input.AwsWafRegionalRule != null && {
      AwsWafRegionalRule: serializeAws_restJson1AwsWafRegionalRuleDetails(input.AwsWafRegionalRule, context),
    }),
    ...(input.AwsWafRegionalRuleGroup != null && {
      AwsWafRegionalRuleGroup: serializeAws_restJson1AwsWafRegionalRuleGroupDetails(
        input.AwsWafRegionalRuleGroup,
        context
      ),
    }),
    ...(input.AwsWafRegionalWebAcl != null && {
      AwsWafRegionalWebAcl: serializeAws_restJson1AwsWafRegionalWebAclDetails(input.AwsWafRegionalWebAcl, context),
    }),
    ...(input.AwsWafRule != null && { AwsWafRule: serializeAws_restJson1AwsWafRuleDetails(input.AwsWafRule, context) }),
    ...(input.AwsWafRuleGroup != null && {
      AwsWafRuleGroup: serializeAws_restJson1AwsWafRuleGroupDetails(input.AwsWafRuleGroup, context),
    }),
    ...(input.AwsWafWebAcl != null && {
      AwsWafWebAcl: serializeAws_restJson1AwsWafWebAclDetails(input.AwsWafWebAcl, context),
    }),
    ...(input.AwsXrayEncryptionConfig != null && {
      AwsXrayEncryptionConfig: serializeAws_restJson1AwsXrayEncryptionConfigDetails(
        input.AwsXrayEncryptionConfig,
        context
      ),
    }),
    ...(input.Container != null && { Container: serializeAws_restJson1ContainerDetails(input.Container, context) }),
    ...(input.Other != null && { Other: serializeAws_restJson1FieldMap(input.Other, context) }),
  };
};

const serializeAws_restJson1ResourceList = (input: Resource[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Resource(entry, context);
    });
};

const serializeAws_restJson1RuleGroupDetails = (input: RuleGroupDetails, context: __SerdeContext): any => {
  return {
    ...(input.RuleVariables != null && {
      RuleVariables: serializeAws_restJson1RuleGroupVariables(input.RuleVariables, context),
    }),
    ...(input.RulesSource != null && {
      RulesSource: serializeAws_restJson1RuleGroupSource(input.RulesSource, context),
    }),
  };
};

const serializeAws_restJson1RuleGroupSource = (input: RuleGroupSource, context: __SerdeContext): any => {
  return {
    ...(input.RulesSourceList != null && {
      RulesSourceList: serializeAws_restJson1RuleGroupSourceListDetails(input.RulesSourceList, context),
    }),
    ...(input.RulesString != null && { RulesString: input.RulesString }),
    ...(input.StatefulRules != null && {
      StatefulRules: serializeAws_restJson1RuleGroupSourceStatefulRulesList(input.StatefulRules, context),
    }),
    ...(input.StatelessRulesAndCustomActions != null && {
      StatelessRulesAndCustomActions: serializeAws_restJson1RuleGroupSourceStatelessRulesAndCustomActionsDetails(
        input.StatelessRulesAndCustomActions,
        context
      ),
    }),
  };
};

const serializeAws_restJson1RuleGroupSourceCustomActionsDetails = (
  input: RuleGroupSourceCustomActionsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.ActionDefinition != null && {
      ActionDefinition: serializeAws_restJson1StatelessCustomActionDefinition(input.ActionDefinition, context),
    }),
    ...(input.ActionName != null && { ActionName: input.ActionName }),
  };
};

const serializeAws_restJson1RuleGroupSourceCustomActionsList = (
  input: RuleGroupSourceCustomActionsDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1RuleGroupSourceCustomActionsDetails(entry, context);
    });
};

const serializeAws_restJson1RuleGroupSourceListDetails = (
  input: RuleGroupSourceListDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.GeneratedRulesType != null && { GeneratedRulesType: input.GeneratedRulesType }),
    ...(input.TargetTypes != null && {
      TargetTypes: serializeAws_restJson1NonEmptyStringList(input.TargetTypes, context),
    }),
    ...(input.Targets != null && { Targets: serializeAws_restJson1NonEmptyStringList(input.Targets, context) }),
  };
};

const serializeAws_restJson1RuleGroupSourceStatefulRulesDetails = (
  input: RuleGroupSourceStatefulRulesDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Action != null && { Action: input.Action }),
    ...(input.Header != null && {
      Header: serializeAws_restJson1RuleGroupSourceStatefulRulesHeaderDetails(input.Header, context),
    }),
    ...(input.RuleOptions != null && {
      RuleOptions: serializeAws_restJson1RuleGroupSourceStatefulRulesOptionsList(input.RuleOptions, context),
    }),
  };
};

const serializeAws_restJson1RuleGroupSourceStatefulRulesHeaderDetails = (
  input: RuleGroupSourceStatefulRulesHeaderDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Destination != null && { Destination: input.Destination }),
    ...(input.DestinationPort != null && { DestinationPort: input.DestinationPort }),
    ...(input.Direction != null && { Direction: input.Direction }),
    ...(input.Protocol != null && { Protocol: input.Protocol }),
    ...(input.Source != null && { Source: input.Source }),
    ...(input.SourcePort != null && { SourcePort: input.SourcePort }),
  };
};

const serializeAws_restJson1RuleGroupSourceStatefulRulesList = (
  input: RuleGroupSourceStatefulRulesDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1RuleGroupSourceStatefulRulesDetails(entry, context);
    });
};

const serializeAws_restJson1RuleGroupSourceStatefulRulesOptionsDetails = (
  input: RuleGroupSourceStatefulRulesOptionsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Keyword != null && { Keyword: input.Keyword }),
    ...(input.Settings != null && {
      Settings: serializeAws_restJson1RuleGroupSourceStatefulRulesRuleOptionsSettingsList(input.Settings, context),
    }),
  };
};

const serializeAws_restJson1RuleGroupSourceStatefulRulesOptionsList = (
  input: RuleGroupSourceStatefulRulesOptionsDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1RuleGroupSourceStatefulRulesOptionsDetails(entry, context);
    });
};

const serializeAws_restJson1RuleGroupSourceStatefulRulesRuleOptionsSettingsList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1RuleGroupSourceStatelessRuleDefinition = (
  input: RuleGroupSourceStatelessRuleDefinition,
  context: __SerdeContext
): any => {
  return {
    ...(input.Actions != null && { Actions: serializeAws_restJson1NonEmptyStringList(input.Actions, context) }),
    ...(input.MatchAttributes != null && {
      MatchAttributes: serializeAws_restJson1RuleGroupSourceStatelessRuleMatchAttributes(
        input.MatchAttributes,
        context
      ),
    }),
  };
};

const serializeAws_restJson1RuleGroupSourceStatelessRuleMatchAttributes = (
  input: RuleGroupSourceStatelessRuleMatchAttributes,
  context: __SerdeContext
): any => {
  return {
    ...(input.DestinationPorts != null && {
      DestinationPorts: serializeAws_restJson1RuleGroupSourceStatelessRuleMatchAttributesDestinationPortsList(
        input.DestinationPorts,
        context
      ),
    }),
    ...(input.Destinations != null && {
      Destinations: serializeAws_restJson1RuleGroupSourceStatelessRuleMatchAttributesDestinationsList(
        input.Destinations,
        context
      ),
    }),
    ...(input.Protocols != null && {
      Protocols: serializeAws_restJson1RuleGroupSourceStatelessRuleMatchAttributesProtocolsList(
        input.Protocols,
        context
      ),
    }),
    ...(input.SourcePorts != null && {
      SourcePorts: serializeAws_restJson1RuleGroupSourceStatelessRuleMatchAttributesSourcePortsList(
        input.SourcePorts,
        context
      ),
    }),
    ...(input.Sources != null && {
      Sources: serializeAws_restJson1RuleGroupSourceStatelessRuleMatchAttributesSourcesList(input.Sources, context),
    }),
    ...(input.TcpFlags != null && {
      TcpFlags: serializeAws_restJson1RuleGroupSourceStatelessRuleMatchAttributesTcpFlagsList(input.TcpFlags, context),
    }),
  };
};

const serializeAws_restJson1RuleGroupSourceStatelessRuleMatchAttributesDestinationPorts = (
  input: RuleGroupSourceStatelessRuleMatchAttributesDestinationPorts,
  context: __SerdeContext
): any => {
  return {
    ...(input.FromPort != null && { FromPort: input.FromPort }),
    ...(input.ToPort != null && { ToPort: input.ToPort }),
  };
};

const serializeAws_restJson1RuleGroupSourceStatelessRuleMatchAttributesDestinationPortsList = (
  input: RuleGroupSourceStatelessRuleMatchAttributesDestinationPorts[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1RuleGroupSourceStatelessRuleMatchAttributesDestinationPorts(entry, context);
    });
};

const serializeAws_restJson1RuleGroupSourceStatelessRuleMatchAttributesDestinations = (
  input: RuleGroupSourceStatelessRuleMatchAttributesDestinations,
  context: __SerdeContext
): any => {
  return {
    ...(input.AddressDefinition != null && { AddressDefinition: input.AddressDefinition }),
  };
};

const serializeAws_restJson1RuleGroupSourceStatelessRuleMatchAttributesDestinationsList = (
  input: RuleGroupSourceStatelessRuleMatchAttributesDestinations[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1RuleGroupSourceStatelessRuleMatchAttributesDestinations(entry, context);
    });
};

const serializeAws_restJson1RuleGroupSourceStatelessRuleMatchAttributesProtocolsList = (
  input: number[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1RuleGroupSourceStatelessRuleMatchAttributesSourcePorts = (
  input: RuleGroupSourceStatelessRuleMatchAttributesSourcePorts,
  context: __SerdeContext
): any => {
  return {
    ...(input.FromPort != null && { FromPort: input.FromPort }),
    ...(input.ToPort != null && { ToPort: input.ToPort }),
  };
};

const serializeAws_restJson1RuleGroupSourceStatelessRuleMatchAttributesSourcePortsList = (
  input: RuleGroupSourceStatelessRuleMatchAttributesSourcePorts[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1RuleGroupSourceStatelessRuleMatchAttributesSourcePorts(entry, context);
    });
};

const serializeAws_restJson1RuleGroupSourceStatelessRuleMatchAttributesSources = (
  input: RuleGroupSourceStatelessRuleMatchAttributesSources,
  context: __SerdeContext
): any => {
  return {
    ...(input.AddressDefinition != null && { AddressDefinition: input.AddressDefinition }),
  };
};

const serializeAws_restJson1RuleGroupSourceStatelessRuleMatchAttributesSourcesList = (
  input: RuleGroupSourceStatelessRuleMatchAttributesSources[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1RuleGroupSourceStatelessRuleMatchAttributesSources(entry, context);
    });
};

const serializeAws_restJson1RuleGroupSourceStatelessRuleMatchAttributesTcpFlags = (
  input: RuleGroupSourceStatelessRuleMatchAttributesTcpFlags,
  context: __SerdeContext
): any => {
  return {
    ...(input.Flags != null && { Flags: serializeAws_restJson1NonEmptyStringList(input.Flags, context) }),
    ...(input.Masks != null && { Masks: serializeAws_restJson1NonEmptyStringList(input.Masks, context) }),
  };
};

const serializeAws_restJson1RuleGroupSourceStatelessRuleMatchAttributesTcpFlagsList = (
  input: RuleGroupSourceStatelessRuleMatchAttributesTcpFlags[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1RuleGroupSourceStatelessRuleMatchAttributesTcpFlags(entry, context);
    });
};

const serializeAws_restJson1RuleGroupSourceStatelessRulesAndCustomActionsDetails = (
  input: RuleGroupSourceStatelessRulesAndCustomActionsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.CustomActions != null && {
      CustomActions: serializeAws_restJson1RuleGroupSourceCustomActionsList(input.CustomActions, context),
    }),
    ...(input.StatelessRules != null && {
      StatelessRules: serializeAws_restJson1RuleGroupSourceStatelessRulesList(input.StatelessRules, context),
    }),
  };
};

const serializeAws_restJson1RuleGroupSourceStatelessRulesDetails = (
  input: RuleGroupSourceStatelessRulesDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Priority != null && { Priority: input.Priority }),
    ...(input.RuleDefinition != null && {
      RuleDefinition: serializeAws_restJson1RuleGroupSourceStatelessRuleDefinition(input.RuleDefinition, context),
    }),
  };
};

const serializeAws_restJson1RuleGroupSourceStatelessRulesList = (
  input: RuleGroupSourceStatelessRulesDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1RuleGroupSourceStatelessRulesDetails(entry, context);
    });
};

const serializeAws_restJson1RuleGroupVariables = (input: RuleGroupVariables, context: __SerdeContext): any => {
  return {
    ...(input.IpSets != null && {
      IpSets: serializeAws_restJson1RuleGroupVariablesIpSetsDetails(input.IpSets, context),
    }),
    ...(input.PortSets != null && {
      PortSets: serializeAws_restJson1RuleGroupVariablesPortSetsDetails(input.PortSets, context),
    }),
  };
};

const serializeAws_restJson1RuleGroupVariablesIpSetsDetails = (
  input: RuleGroupVariablesIpSetsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Definition != null && {
      Definition: serializeAws_restJson1NonEmptyStringList(input.Definition, context),
    }),
  };
};

const serializeAws_restJson1RuleGroupVariablesPortSetsDetails = (
  input: RuleGroupVariablesPortSetsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Definition != null && {
      Definition: serializeAws_restJson1NonEmptyStringList(input.Definition, context),
    }),
  };
};

const serializeAws_restJson1SecurityGroups = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1SensitiveDataDetections = (
  input: SensitiveDataDetections,
  context: __SerdeContext
): any => {
  return {
    ...(input.Count != null && { Count: input.Count }),
    ...(input.Occurrences != null && { Occurrences: serializeAws_restJson1Occurrences(input.Occurrences, context) }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_restJson1SensitiveDataDetectionsList = (
  input: SensitiveDataDetections[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1SensitiveDataDetections(entry, context);
    });
};

const serializeAws_restJson1SensitiveDataResult = (input: SensitiveDataResult, context: __SerdeContext): any => {
  return {
    ...(input.Category != null && { Category: input.Category }),
    ...(input.Detections != null && {
      Detections: serializeAws_restJson1SensitiveDataDetectionsList(input.Detections, context),
    }),
    ...(input.TotalCount != null && { TotalCount: input.TotalCount }),
  };
};

const serializeAws_restJson1SensitiveDataResultList = (input: SensitiveDataResult[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1SensitiveDataResult(entry, context);
    });
};

const serializeAws_restJson1Severity = (input: Severity, context: __SerdeContext): any => {
  return {
    ...(input.Label != null && { Label: input.Label }),
    ...(input.Normalized != null && { Normalized: input.Normalized }),
    ...(input.Original != null && { Original: input.Original }),
    ...(input.Product != null && { Product: __serializeFloat(input.Product) }),
  };
};

const serializeAws_restJson1SeverityUpdate = (input: SeverityUpdate, context: __SerdeContext): any => {
  return {
    ...(input.Label != null && { Label: input.Label }),
    ...(input.Normalized != null && { Normalized: input.Normalized }),
    ...(input.Product != null && { Product: __serializeFloat(input.Product) }),
  };
};

const serializeAws_restJson1SoftwarePackage = (input: SoftwarePackage, context: __SerdeContext): any => {
  return {
    ...(input.Architecture != null && { Architecture: input.Architecture }),
    ...(input.Epoch != null && { Epoch: input.Epoch }),
    ...(input.FilePath != null && { FilePath: input.FilePath }),
    ...(input.FixedInVersion != null && { FixedInVersion: input.FixedInVersion }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.PackageManager != null && { PackageManager: input.PackageManager }),
    ...(input.Release != null && { Release: input.Release }),
    ...(input.Remediation != null && { Remediation: input.Remediation }),
    ...(input.Version != null && { Version: input.Version }),
  };
};

const serializeAws_restJson1SoftwarePackageList = (input: SoftwarePackage[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1SoftwarePackage(entry, context);
    });
};

const serializeAws_restJson1SortCriteria = (input: SortCriterion[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1SortCriterion(entry, context);
    });
};

const serializeAws_restJson1SortCriterion = (input: SortCriterion, context: __SerdeContext): any => {
  return {
    ...(input.Field != null && { Field: input.Field }),
    ...(input.SortOrder != null && { SortOrder: input.SortOrder }),
  };
};

const serializeAws_restJson1StandardsInputParameterMap = (
  input: Record<string, string>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1StandardsSubscriptionArns = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1StandardsSubscriptionRequest = (
  input: StandardsSubscriptionRequest,
  context: __SerdeContext
): any => {
  return {
    ...(input.StandardsArn != null && { StandardsArn: input.StandardsArn }),
    ...(input.StandardsInput != null && {
      StandardsInput: serializeAws_restJson1StandardsInputParameterMap(input.StandardsInput, context),
    }),
  };
};

const serializeAws_restJson1StandardsSubscriptionRequests = (
  input: StandardsSubscriptionRequest[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1StandardsSubscriptionRequest(entry, context);
    });
};

const serializeAws_restJson1StatelessCustomActionDefinition = (
  input: StatelessCustomActionDefinition,
  context: __SerdeContext
): any => {
  return {
    ...(input.PublishMetricAction != null && {
      PublishMetricAction: serializeAws_restJson1StatelessCustomPublishMetricAction(input.PublishMetricAction, context),
    }),
  };
};

const serializeAws_restJson1StatelessCustomPublishMetricAction = (
  input: StatelessCustomPublishMetricAction,
  context: __SerdeContext
): any => {
  return {
    ...(input.Dimensions != null && {
      Dimensions: serializeAws_restJson1StatelessCustomPublishMetricActionDimensionsList(input.Dimensions, context),
    }),
  };
};

const serializeAws_restJson1StatelessCustomPublishMetricActionDimension = (
  input: StatelessCustomPublishMetricActionDimension,
  context: __SerdeContext
): any => {
  return {
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_restJson1StatelessCustomPublishMetricActionDimensionsList = (
  input: StatelessCustomPublishMetricActionDimension[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1StatelessCustomPublishMetricActionDimension(entry, context);
    });
};

const serializeAws_restJson1StatusReason = (input: StatusReason, context: __SerdeContext): any => {
  return {
    ...(input.Description != null && { Description: input.Description }),
    ...(input.ReasonCode != null && { ReasonCode: input.ReasonCode }),
  };
};

const serializeAws_restJson1StatusReasonsList = (input: StatusReason[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1StatusReason(entry, context);
    });
};

const serializeAws_restJson1StringFilter = (input: StringFilter, context: __SerdeContext): any => {
  return {
    ...(input.Comparison != null && { Comparison: input.Comparison }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_restJson1StringFilterList = (input: StringFilter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1StringFilter(entry, context);
    });
};

const serializeAws_restJson1StringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1Threat = (input: Threat, context: __SerdeContext): any => {
  return {
    ...(input.FilePaths != null && { FilePaths: serializeAws_restJson1FilePathList(input.FilePaths, context) }),
    ...(input.ItemCount != null && { ItemCount: input.ItemCount }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Severity != null && { Severity: input.Severity }),
  };
};

const serializeAws_restJson1ThreatIntelIndicator = (input: ThreatIntelIndicator, context: __SerdeContext): any => {
  return {
    ...(input.Category != null && { Category: input.Category }),
    ...(input.LastObservedAt != null && { LastObservedAt: input.LastObservedAt }),
    ...(input.Source != null && { Source: input.Source }),
    ...(input.SourceUrl != null && { SourceUrl: input.SourceUrl }),
    ...(input.Type != null && { Type: input.Type }),
    ...(input.Value != null && { Value: input.Value }),
  };
};

const serializeAws_restJson1ThreatIntelIndicatorList = (
  input: ThreatIntelIndicator[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1ThreatIntelIndicator(entry, context);
    });
};

const serializeAws_restJson1ThreatList = (input: Threat[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Threat(entry, context);
    });
};

const serializeAws_restJson1TypeList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1VolumeMount = (input: VolumeMount, context: __SerdeContext): any => {
  return {
    ...(input.MountPath != null && { MountPath: input.MountPath }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

const serializeAws_restJson1VolumeMountList = (input: VolumeMount[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1VolumeMount(entry, context);
    });
};

const serializeAws_restJson1VpcInfoCidrBlockSetDetails = (
  input: VpcInfoCidrBlockSetDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.CidrBlock != null && { CidrBlock: input.CidrBlock }),
  };
};

const serializeAws_restJson1VpcInfoCidrBlockSetList = (
  input: VpcInfoCidrBlockSetDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1VpcInfoCidrBlockSetDetails(entry, context);
    });
};

const serializeAws_restJson1VpcInfoIpv6CidrBlockSetDetails = (
  input: VpcInfoIpv6CidrBlockSetDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.Ipv6CidrBlock != null && { Ipv6CidrBlock: input.Ipv6CidrBlock }),
  };
};

const serializeAws_restJson1VpcInfoIpv6CidrBlockSetList = (
  input: VpcInfoIpv6CidrBlockSetDetails[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1VpcInfoIpv6CidrBlockSetDetails(entry, context);
    });
};

const serializeAws_restJson1VpcInfoPeeringOptionsDetails = (
  input: VpcInfoPeeringOptionsDetails,
  context: __SerdeContext
): any => {
  return {
    ...(input.AllowDnsResolutionFromRemoteVpc != null && {
      AllowDnsResolutionFromRemoteVpc: input.AllowDnsResolutionFromRemoteVpc,
    }),
    ...(input.AllowEgressFromLocalClassicLinkToRemoteVpc != null && {
      AllowEgressFromLocalClassicLinkToRemoteVpc: input.AllowEgressFromLocalClassicLinkToRemoteVpc,
    }),
    ...(input.AllowEgressFromLocalVpcToRemoteClassicLink != null && {
      AllowEgressFromLocalVpcToRemoteClassicLink: input.AllowEgressFromLocalVpcToRemoteClassicLink,
    }),
  };
};

const serializeAws_restJson1Vulnerability = (input: Vulnerability, context: __SerdeContext): any => {
  return {
    ...(input.Cvss != null && { Cvss: serializeAws_restJson1CvssList(input.Cvss, context) }),
    ...(input.FixAvailable != null && { FixAvailable: input.FixAvailable }),
    ...(input.Id != null && { Id: input.Id }),
    ...(input.ReferenceUrls != null && {
      ReferenceUrls: serializeAws_restJson1StringList(input.ReferenceUrls, context),
    }),
    ...(input.RelatedVulnerabilities != null && {
      RelatedVulnerabilities: serializeAws_restJson1StringList(input.RelatedVulnerabilities, context),
    }),
    ...(input.Vendor != null && { Vendor: serializeAws_restJson1VulnerabilityVendor(input.Vendor, context) }),
    ...(input.VulnerablePackages != null && {
      VulnerablePackages: serializeAws_restJson1SoftwarePackageList(input.VulnerablePackages, context),
    }),
  };
};

const serializeAws_restJson1VulnerabilityList = (input: Vulnerability[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Vulnerability(entry, context);
    });
};

const serializeAws_restJson1VulnerabilityVendor = (input: VulnerabilityVendor, context: __SerdeContext): any => {
  return {
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Url != null && { Url: input.Url }),
    ...(input.VendorCreatedAt != null && { VendorCreatedAt: input.VendorCreatedAt }),
    ...(input.VendorSeverity != null && { VendorSeverity: input.VendorSeverity }),
    ...(input.VendorUpdatedAt != null && { VendorUpdatedAt: input.VendorUpdatedAt }),
  };
};

const serializeAws_restJson1WafAction = (input: WafAction, context: __SerdeContext): any => {
  return {
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_restJson1WafExcludedRule = (input: WafExcludedRule, context: __SerdeContext): any => {
  return {
    ...(input.RuleId != null && { RuleId: input.RuleId }),
  };
};

const serializeAws_restJson1WafExcludedRuleList = (input: WafExcludedRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1WafExcludedRule(entry, context);
    });
};

const serializeAws_restJson1WafOverrideAction = (input: WafOverrideAction, context: __SerdeContext): any => {
  return {
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_restJson1Workflow = (input: Workflow, context: __SerdeContext): any => {
  return {
    ...(input.Status != null && { Status: input.Status }),
  };
};

const serializeAws_restJson1WorkflowUpdate = (input: WorkflowUpdate, context: __SerdeContext): any => {
  return {
    ...(input.Status != null && { Status: input.Status }),
  };
};

const deserializeAws_restJson1Action = (output: any, context: __SerdeContext): Action => {
  return {
    ActionType: __expectString(output.ActionType),
    AwsApiCallAction:
      output.AwsApiCallAction != null
        ? deserializeAws_restJson1AwsApiCallAction(output.AwsApiCallAction, context)
        : undefined,
    DnsRequestAction:
      output.DnsRequestAction != null
        ? deserializeAws_restJson1DnsRequestAction(output.DnsRequestAction, context)
        : undefined,
    NetworkConnectionAction:
      output.NetworkConnectionAction != null
        ? deserializeAws_restJson1NetworkConnectionAction(output.NetworkConnectionAction, context)
        : undefined,
    PortProbeAction:
      output.PortProbeAction != null
        ? deserializeAws_restJson1PortProbeAction(output.PortProbeAction, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ActionLocalIpDetails = (output: any, context: __SerdeContext): ActionLocalIpDetails => {
  return {
    IpAddressV4: __expectString(output.IpAddressV4),
  } as any;
};

const deserializeAws_restJson1ActionLocalPortDetails = (
  output: any,
  context: __SerdeContext
): ActionLocalPortDetails => {
  return {
    Port: __expectInt32(output.Port),
    PortName: __expectString(output.PortName),
  } as any;
};

const deserializeAws_restJson1ActionRemoteIpDetails = (output: any, context: __SerdeContext): ActionRemoteIpDetails => {
  return {
    City: output.City != null ? deserializeAws_restJson1City(output.City, context) : undefined,
    Country: output.Country != null ? deserializeAws_restJson1Country(output.Country, context) : undefined,
    GeoLocation:
      output.GeoLocation != null ? deserializeAws_restJson1GeoLocation(output.GeoLocation, context) : undefined,
    IpAddressV4: __expectString(output.IpAddressV4),
    Organization:
      output.Organization != null
        ? deserializeAws_restJson1IpOrganizationDetails(output.Organization, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ActionRemotePortDetails = (
  output: any,
  context: __SerdeContext
): ActionRemotePortDetails => {
  return {
    Port: __expectInt32(output.Port),
    PortName: __expectString(output.PortName),
  } as any;
};

const deserializeAws_restJson1ActionTarget = (output: any, context: __SerdeContext): ActionTarget => {
  return {
    ActionTargetArn: __expectString(output.ActionTargetArn),
    Description: __expectString(output.Description),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1ActionTargetList = (output: any, context: __SerdeContext): ActionTarget[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ActionTarget(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Adjustment = (output: any, context: __SerdeContext): Adjustment => {
  return {
    Metric: __expectString(output.Metric),
    Reason: __expectString(output.Reason),
  } as any;
};

const deserializeAws_restJson1AdjustmentList = (output: any, context: __SerdeContext): Adjustment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Adjustment(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AdminAccount = (output: any, context: __SerdeContext): AdminAccount => {
  return {
    AccountId: __expectString(output.AccountId),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1AdminAccounts = (output: any, context: __SerdeContext): AdminAccount[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AdminAccount(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AvailabilityZone = (output: any, context: __SerdeContext): AvailabilityZone => {
  return {
    SubnetId: __expectString(output.SubnetId),
    ZoneName: __expectString(output.ZoneName),
  } as any;
};

const deserializeAws_restJson1AvailabilityZones = (output: any, context: __SerdeContext): AvailabilityZone[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AvailabilityZone(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsApiCallAction = (output: any, context: __SerdeContext): AwsApiCallAction => {
  return {
    AffectedResources:
      output.AffectedResources != null
        ? deserializeAws_restJson1FieldMap(output.AffectedResources, context)
        : undefined,
    Api: __expectString(output.Api),
    CallerType: __expectString(output.CallerType),
    DomainDetails:
      output.DomainDetails != null
        ? deserializeAws_restJson1AwsApiCallActionDomainDetails(output.DomainDetails, context)
        : undefined,
    FirstSeen: __expectString(output.FirstSeen),
    LastSeen: __expectString(output.LastSeen),
    RemoteIpDetails:
      output.RemoteIpDetails != null
        ? deserializeAws_restJson1ActionRemoteIpDetails(output.RemoteIpDetails, context)
        : undefined,
    ServiceName: __expectString(output.ServiceName),
  } as any;
};

const deserializeAws_restJson1AwsApiCallActionDomainDetails = (
  output: any,
  context: __SerdeContext
): AwsApiCallActionDomainDetails => {
  return {
    Domain: __expectString(output.Domain),
  } as any;
};

const deserializeAws_restJson1AwsApiGatewayAccessLogSettings = (
  output: any,
  context: __SerdeContext
): AwsApiGatewayAccessLogSettings => {
  return {
    DestinationArn: __expectString(output.DestinationArn),
    Format: __expectString(output.Format),
  } as any;
};

const deserializeAws_restJson1AwsApiGatewayCanarySettings = (
  output: any,
  context: __SerdeContext
): AwsApiGatewayCanarySettings => {
  return {
    DeploymentId: __expectString(output.DeploymentId),
    PercentTraffic: __limitedParseDouble(output.PercentTraffic),
    StageVariableOverrides:
      output.StageVariableOverrides != null
        ? deserializeAws_restJson1FieldMap(output.StageVariableOverrides, context)
        : undefined,
    UseStageCache: __expectBoolean(output.UseStageCache),
  } as any;
};

const deserializeAws_restJson1AwsApiGatewayEndpointConfiguration = (
  output: any,
  context: __SerdeContext
): AwsApiGatewayEndpointConfiguration => {
  return {
    Types: output.Types != null ? deserializeAws_restJson1NonEmptyStringList(output.Types, context) : undefined,
  } as any;
};

const deserializeAws_restJson1AwsApiGatewayMethodSettings = (
  output: any,
  context: __SerdeContext
): AwsApiGatewayMethodSettings => {
  return {
    CacheDataEncrypted: __expectBoolean(output.CacheDataEncrypted),
    CacheTtlInSeconds: __expectInt32(output.CacheTtlInSeconds),
    CachingEnabled: __expectBoolean(output.CachingEnabled),
    DataTraceEnabled: __expectBoolean(output.DataTraceEnabled),
    HttpMethod: __expectString(output.HttpMethod),
    LoggingLevel: __expectString(output.LoggingLevel),
    MetricsEnabled: __expectBoolean(output.MetricsEnabled),
    RequireAuthorizationForCacheControl: __expectBoolean(output.RequireAuthorizationForCacheControl),
    ResourcePath: __expectString(output.ResourcePath),
    ThrottlingBurstLimit: __expectInt32(output.ThrottlingBurstLimit),
    ThrottlingRateLimit: __limitedParseDouble(output.ThrottlingRateLimit),
    UnauthorizedCacheControlHeaderStrategy: __expectString(output.UnauthorizedCacheControlHeaderStrategy),
  } as any;
};

const deserializeAws_restJson1AwsApiGatewayMethodSettingsList = (
  output: any,
  context: __SerdeContext
): AwsApiGatewayMethodSettings[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsApiGatewayMethodSettings(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsApiGatewayRestApiDetails = (
  output: any,
  context: __SerdeContext
): AwsApiGatewayRestApiDetails => {
  return {
    ApiKeySource: __expectString(output.ApiKeySource),
    BinaryMediaTypes:
      output.BinaryMediaTypes != null
        ? deserializeAws_restJson1NonEmptyStringList(output.BinaryMediaTypes, context)
        : undefined,
    CreatedDate: __expectString(output.CreatedDate),
    Description: __expectString(output.Description),
    EndpointConfiguration:
      output.EndpointConfiguration != null
        ? deserializeAws_restJson1AwsApiGatewayEndpointConfiguration(output.EndpointConfiguration, context)
        : undefined,
    Id: __expectString(output.Id),
    MinimumCompressionSize: __expectInt32(output.MinimumCompressionSize),
    Name: __expectString(output.Name),
    Version: __expectString(output.Version),
  } as any;
};

const deserializeAws_restJson1AwsApiGatewayStageDetails = (
  output: any,
  context: __SerdeContext
): AwsApiGatewayStageDetails => {
  return {
    AccessLogSettings:
      output.AccessLogSettings != null
        ? deserializeAws_restJson1AwsApiGatewayAccessLogSettings(output.AccessLogSettings, context)
        : undefined,
    CacheClusterEnabled: __expectBoolean(output.CacheClusterEnabled),
    CacheClusterSize: __expectString(output.CacheClusterSize),
    CacheClusterStatus: __expectString(output.CacheClusterStatus),
    CanarySettings:
      output.CanarySettings != null
        ? deserializeAws_restJson1AwsApiGatewayCanarySettings(output.CanarySettings, context)
        : undefined,
    ClientCertificateId: __expectString(output.ClientCertificateId),
    CreatedDate: __expectString(output.CreatedDate),
    DeploymentId: __expectString(output.DeploymentId),
    Description: __expectString(output.Description),
    DocumentationVersion: __expectString(output.DocumentationVersion),
    LastUpdatedDate: __expectString(output.LastUpdatedDate),
    MethodSettings:
      output.MethodSettings != null
        ? deserializeAws_restJson1AwsApiGatewayMethodSettingsList(output.MethodSettings, context)
        : undefined,
    StageName: __expectString(output.StageName),
    TracingEnabled: __expectBoolean(output.TracingEnabled),
    Variables: output.Variables != null ? deserializeAws_restJson1FieldMap(output.Variables, context) : undefined,
    WebAclArn: __expectString(output.WebAclArn),
  } as any;
};

const deserializeAws_restJson1AwsApiGatewayV2ApiDetails = (
  output: any,
  context: __SerdeContext
): AwsApiGatewayV2ApiDetails => {
  return {
    ApiEndpoint: __expectString(output.ApiEndpoint),
    ApiId: __expectString(output.ApiId),
    ApiKeySelectionExpression: __expectString(output.ApiKeySelectionExpression),
    CorsConfiguration:
      output.CorsConfiguration != null
        ? deserializeAws_restJson1AwsCorsConfiguration(output.CorsConfiguration, context)
        : undefined,
    CreatedDate: __expectString(output.CreatedDate),
    Description: __expectString(output.Description),
    Name: __expectString(output.Name),
    ProtocolType: __expectString(output.ProtocolType),
    RouteSelectionExpression: __expectString(output.RouteSelectionExpression),
    Version: __expectString(output.Version),
  } as any;
};

const deserializeAws_restJson1AwsApiGatewayV2RouteSettings = (
  output: any,
  context: __SerdeContext
): AwsApiGatewayV2RouteSettings => {
  return {
    DataTraceEnabled: __expectBoolean(output.DataTraceEnabled),
    DetailedMetricsEnabled: __expectBoolean(output.DetailedMetricsEnabled),
    LoggingLevel: __expectString(output.LoggingLevel),
    ThrottlingBurstLimit: __expectInt32(output.ThrottlingBurstLimit),
    ThrottlingRateLimit: __limitedParseDouble(output.ThrottlingRateLimit),
  } as any;
};

const deserializeAws_restJson1AwsApiGatewayV2StageDetails = (
  output: any,
  context: __SerdeContext
): AwsApiGatewayV2StageDetails => {
  return {
    AccessLogSettings:
      output.AccessLogSettings != null
        ? deserializeAws_restJson1AwsApiGatewayAccessLogSettings(output.AccessLogSettings, context)
        : undefined,
    ApiGatewayManaged: __expectBoolean(output.ApiGatewayManaged),
    AutoDeploy: __expectBoolean(output.AutoDeploy),
    ClientCertificateId: __expectString(output.ClientCertificateId),
    CreatedDate: __expectString(output.CreatedDate),
    DefaultRouteSettings:
      output.DefaultRouteSettings != null
        ? deserializeAws_restJson1AwsApiGatewayV2RouteSettings(output.DefaultRouteSettings, context)
        : undefined,
    DeploymentId: __expectString(output.DeploymentId),
    Description: __expectString(output.Description),
    LastDeploymentStatusMessage: __expectString(output.LastDeploymentStatusMessage),
    LastUpdatedDate: __expectString(output.LastUpdatedDate),
    RouteSettings:
      output.RouteSettings != null
        ? deserializeAws_restJson1AwsApiGatewayV2RouteSettings(output.RouteSettings, context)
        : undefined,
    StageName: __expectString(output.StageName),
    StageVariables:
      output.StageVariables != null ? deserializeAws_restJson1FieldMap(output.StageVariables, context) : undefined,
  } as any;
};

const deserializeAws_restJson1AwsAutoScalingAutoScalingGroupAvailabilityZonesList = (
  output: any,
  context: __SerdeContext
): AwsAutoScalingAutoScalingGroupAvailabilityZonesListDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsAutoScalingAutoScalingGroupAvailabilityZonesListDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsAutoScalingAutoScalingGroupAvailabilityZonesListDetails = (
  output: any,
  context: __SerdeContext
): AwsAutoScalingAutoScalingGroupAvailabilityZonesListDetails => {
  return {
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1AwsAutoScalingAutoScalingGroupDetails = (
  output: any,
  context: __SerdeContext
): AwsAutoScalingAutoScalingGroupDetails => {
  return {
    AvailabilityZones:
      output.AvailabilityZones != null
        ? deserializeAws_restJson1AwsAutoScalingAutoScalingGroupAvailabilityZonesList(output.AvailabilityZones, context)
        : undefined,
    CapacityRebalance: __expectBoolean(output.CapacityRebalance),
    CreatedTime: __expectString(output.CreatedTime),
    HealthCheckGracePeriod: __expectInt32(output.HealthCheckGracePeriod),
    HealthCheckType: __expectString(output.HealthCheckType),
    LaunchConfigurationName: __expectString(output.LaunchConfigurationName),
    LaunchTemplate:
      output.LaunchTemplate != null
        ? deserializeAws_restJson1AwsAutoScalingAutoScalingGroupLaunchTemplateLaunchTemplateSpecification(
            output.LaunchTemplate,
            context
          )
        : undefined,
    LoadBalancerNames:
      output.LoadBalancerNames != null
        ? deserializeAws_restJson1StringList(output.LoadBalancerNames, context)
        : undefined,
    MixedInstancesPolicy:
      output.MixedInstancesPolicy != null
        ? deserializeAws_restJson1AwsAutoScalingAutoScalingGroupMixedInstancesPolicyDetails(
            output.MixedInstancesPolicy,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsAutoScalingAutoScalingGroupLaunchTemplateLaunchTemplateSpecification = (
  output: any,
  context: __SerdeContext
): AwsAutoScalingAutoScalingGroupLaunchTemplateLaunchTemplateSpecification => {
  return {
    LaunchTemplateId: __expectString(output.LaunchTemplateId),
    LaunchTemplateName: __expectString(output.LaunchTemplateName),
    Version: __expectString(output.Version),
  } as any;
};

const deserializeAws_restJson1AwsAutoScalingAutoScalingGroupMixedInstancesPolicyDetails = (
  output: any,
  context: __SerdeContext
): AwsAutoScalingAutoScalingGroupMixedInstancesPolicyDetails => {
  return {
    InstancesDistribution:
      output.InstancesDistribution != null
        ? deserializeAws_restJson1AwsAutoScalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionDetails(
            output.InstancesDistribution,
            context
          )
        : undefined,
    LaunchTemplate:
      output.LaunchTemplate != null
        ? deserializeAws_restJson1AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateDetails(
            output.LaunchTemplate,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsAutoScalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionDetails = (
  output: any,
  context: __SerdeContext
): AwsAutoScalingAutoScalingGroupMixedInstancesPolicyInstancesDistributionDetails => {
  return {
    OnDemandAllocationStrategy: __expectString(output.OnDemandAllocationStrategy),
    OnDemandBaseCapacity: __expectInt32(output.OnDemandBaseCapacity),
    OnDemandPercentageAboveBaseCapacity: __expectInt32(output.OnDemandPercentageAboveBaseCapacity),
    SpotAllocationStrategy: __expectString(output.SpotAllocationStrategy),
    SpotInstancePools: __expectInt32(output.SpotInstancePools),
    SpotMaxPrice: __expectString(output.SpotMaxPrice),
  } as any;
};

const deserializeAws_restJson1AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateDetails = (
  output: any,
  context: __SerdeContext
): AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateDetails => {
  return {
    LaunchTemplateSpecification:
      output.LaunchTemplateSpecification != null
        ? deserializeAws_restJson1AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification(
            output.LaunchTemplateSpecification,
            context
          )
        : undefined,
    Overrides:
      output.Overrides != null
        ? deserializeAws_restJson1AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList(
            output.Overrides,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification =
  (
    output: any,
    context: __SerdeContext
  ): AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateLaunchTemplateSpecification => {
    return {
      LaunchTemplateId: __expectString(output.LaunchTemplateId),
      LaunchTemplateName: __expectString(output.LaunchTemplateName),
      Version: __expectString(output.Version),
    } as any;
  };

const deserializeAws_restJson1AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesList = (
  output: any,
  context: __SerdeContext
): AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesListDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesListDetails(
        entry,
        context
      );
    });
  return retVal;
};

const deserializeAws_restJson1AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesListDetails = (
  output: any,
  context: __SerdeContext
): AwsAutoScalingAutoScalingGroupMixedInstancesPolicyLaunchTemplateOverridesListDetails => {
  return {
    InstanceType: __expectString(output.InstanceType),
    WeightedCapacity: __expectString(output.WeightedCapacity),
  } as any;
};

const deserializeAws_restJson1AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails = (
  output: any,
  context: __SerdeContext
): AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails => {
  return {
    DeviceName: __expectString(output.DeviceName),
    Ebs:
      output.Ebs != null
        ? deserializeAws_restJson1AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails(output.Ebs, context)
        : undefined,
    NoDevice: __expectBoolean(output.NoDevice),
    VirtualName: __expectString(output.VirtualName),
  } as any;
};

const deserializeAws_restJson1AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails = (
  output: any,
  context: __SerdeContext
): AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails => {
  return {
    DeleteOnTermination: __expectBoolean(output.DeleteOnTermination),
    Encrypted: __expectBoolean(output.Encrypted),
    Iops: __expectInt32(output.Iops),
    SnapshotId: __expectString(output.SnapshotId),
    VolumeSize: __expectInt32(output.VolumeSize),
    VolumeType: __expectString(output.VolumeType),
  } as any;
};

const deserializeAws_restJson1AwsAutoScalingLaunchConfigurationBlockDeviceMappingsList = (
  output: any,
  context: __SerdeContext
): AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsAutoScalingLaunchConfigurationDetails = (
  output: any,
  context: __SerdeContext
): AwsAutoScalingLaunchConfigurationDetails => {
  return {
    AssociatePublicIpAddress: __expectBoolean(output.AssociatePublicIpAddress),
    BlockDeviceMappings:
      output.BlockDeviceMappings != null
        ? deserializeAws_restJson1AwsAutoScalingLaunchConfigurationBlockDeviceMappingsList(
            output.BlockDeviceMappings,
            context
          )
        : undefined,
    ClassicLinkVpcId: __expectString(output.ClassicLinkVpcId),
    ClassicLinkVpcSecurityGroups:
      output.ClassicLinkVpcSecurityGroups != null
        ? deserializeAws_restJson1NonEmptyStringList(output.ClassicLinkVpcSecurityGroups, context)
        : undefined,
    CreatedTime: __expectString(output.CreatedTime),
    EbsOptimized: __expectBoolean(output.EbsOptimized),
    IamInstanceProfile: __expectString(output.IamInstanceProfile),
    ImageId: __expectString(output.ImageId),
    InstanceMonitoring:
      output.InstanceMonitoring != null
        ? deserializeAws_restJson1AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails(
            output.InstanceMonitoring,
            context
          )
        : undefined,
    InstanceType: __expectString(output.InstanceType),
    KernelId: __expectString(output.KernelId),
    KeyName: __expectString(output.KeyName),
    LaunchConfigurationName: __expectString(output.LaunchConfigurationName),
    MetadataOptions:
      output.MetadataOptions != null
        ? deserializeAws_restJson1AwsAutoScalingLaunchConfigurationMetadataOptions(output.MetadataOptions, context)
        : undefined,
    PlacementTenancy: __expectString(output.PlacementTenancy),
    RamdiskId: __expectString(output.RamdiskId),
    SecurityGroups:
      output.SecurityGroups != null
        ? deserializeAws_restJson1NonEmptyStringList(output.SecurityGroups, context)
        : undefined,
    SpotPrice: __expectString(output.SpotPrice),
    UserData: __expectString(output.UserData),
  } as any;
};

const deserializeAws_restJson1AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails = (
  output: any,
  context: __SerdeContext
): AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails => {
  return {
    Enabled: __expectBoolean(output.Enabled),
  } as any;
};

const deserializeAws_restJson1AwsAutoScalingLaunchConfigurationMetadataOptions = (
  output: any,
  context: __SerdeContext
): AwsAutoScalingLaunchConfigurationMetadataOptions => {
  return {
    HttpEndpoint: __expectString(output.HttpEndpoint),
    HttpPutResponseHopLimit: __expectInt32(output.HttpPutResponseHopLimit),
    HttpTokens: __expectString(output.HttpTokens),
  } as any;
};

const deserializeAws_restJson1AwsBackupBackupPlanAdvancedBackupSettingsDetails = (
  output: any,
  context: __SerdeContext
): AwsBackupBackupPlanAdvancedBackupSettingsDetails => {
  return {
    BackupOptions:
      output.BackupOptions != null ? deserializeAws_restJson1FieldMap(output.BackupOptions, context) : undefined,
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

const deserializeAws_restJson1AwsBackupBackupPlanAdvancedBackupSettingsList = (
  output: any,
  context: __SerdeContext
): AwsBackupBackupPlanAdvancedBackupSettingsDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsBackupBackupPlanAdvancedBackupSettingsDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsBackupBackupPlanBackupPlanDetails = (
  output: any,
  context: __SerdeContext
): AwsBackupBackupPlanBackupPlanDetails => {
  return {
    AdvancedBackupSettings:
      output.AdvancedBackupSettings != null
        ? deserializeAws_restJson1AwsBackupBackupPlanAdvancedBackupSettingsList(output.AdvancedBackupSettings, context)
        : undefined,
    BackupPlanName: __expectString(output.BackupPlanName),
    BackupPlanRule:
      output.BackupPlanRule != null
        ? deserializeAws_restJson1AwsBackupBackupPlanRuleList(output.BackupPlanRule, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsBackupBackupPlanDetails = (
  output: any,
  context: __SerdeContext
): AwsBackupBackupPlanDetails => {
  return {
    BackupPlan:
      output.BackupPlan != null
        ? deserializeAws_restJson1AwsBackupBackupPlanBackupPlanDetails(output.BackupPlan, context)
        : undefined,
    BackupPlanArn: __expectString(output.BackupPlanArn),
    BackupPlanId: __expectString(output.BackupPlanId),
    VersionId: __expectString(output.VersionId),
  } as any;
};

const deserializeAws_restJson1AwsBackupBackupPlanLifecycleDetails = (
  output: any,
  context: __SerdeContext
): AwsBackupBackupPlanLifecycleDetails => {
  return {
    DeleteAfterDays: __expectLong(output.DeleteAfterDays),
    MoveToColdStorageAfterDays: __expectLong(output.MoveToColdStorageAfterDays),
  } as any;
};

const deserializeAws_restJson1AwsBackupBackupPlanRuleCopyActionsDetails = (
  output: any,
  context: __SerdeContext
): AwsBackupBackupPlanRuleCopyActionsDetails => {
  return {
    DestinationBackupVaultArn: __expectString(output.DestinationBackupVaultArn),
    Lifecycle:
      output.Lifecycle != null
        ? deserializeAws_restJson1AwsBackupBackupPlanLifecycleDetails(output.Lifecycle, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsBackupBackupPlanRuleCopyActionsList = (
  output: any,
  context: __SerdeContext
): AwsBackupBackupPlanRuleCopyActionsDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsBackupBackupPlanRuleCopyActionsDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsBackupBackupPlanRuleDetails = (
  output: any,
  context: __SerdeContext
): AwsBackupBackupPlanRuleDetails => {
  return {
    CompletionWindowMinutes: __expectLong(output.CompletionWindowMinutes),
    CopyActions:
      output.CopyActions != null
        ? deserializeAws_restJson1AwsBackupBackupPlanRuleCopyActionsList(output.CopyActions, context)
        : undefined,
    EnableContinuousBackup: __expectBoolean(output.EnableContinuousBackup),
    Lifecycle:
      output.Lifecycle != null
        ? deserializeAws_restJson1AwsBackupBackupPlanLifecycleDetails(output.Lifecycle, context)
        : undefined,
    RuleId: __expectString(output.RuleId),
    RuleName: __expectString(output.RuleName),
    ScheduleExpression: __expectString(output.ScheduleExpression),
    StartWindowMinutes: __expectLong(output.StartWindowMinutes),
    TargetBackupVault: __expectString(output.TargetBackupVault),
  } as any;
};

const deserializeAws_restJson1AwsBackupBackupPlanRuleList = (
  output: any,
  context: __SerdeContext
): AwsBackupBackupPlanRuleDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsBackupBackupPlanRuleDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsBackupBackupVaultDetails = (
  output: any,
  context: __SerdeContext
): AwsBackupBackupVaultDetails => {
  return {
    AccessPolicy: __expectString(output.AccessPolicy),
    BackupVaultArn: __expectString(output.BackupVaultArn),
    BackupVaultName: __expectString(output.BackupVaultName),
    EncryptionKeyArn: __expectString(output.EncryptionKeyArn),
    Notifications:
      output.Notifications != null
        ? deserializeAws_restJson1AwsBackupBackupVaultNotificationsDetails(output.Notifications, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsBackupBackupVaultNotificationsDetails = (
  output: any,
  context: __SerdeContext
): AwsBackupBackupVaultNotificationsDetails => {
  return {
    BackupVaultEvents:
      output.BackupVaultEvents != null
        ? deserializeAws_restJson1NonEmptyStringList(output.BackupVaultEvents, context)
        : undefined,
    SnsTopicArn: __expectString(output.SnsTopicArn),
  } as any;
};

const deserializeAws_restJson1AwsBackupRecoveryPointCalculatedLifecycleDetails = (
  output: any,
  context: __SerdeContext
): AwsBackupRecoveryPointCalculatedLifecycleDetails => {
  return {
    DeleteAt: __expectString(output.DeleteAt),
    MoveToColdStorageAt: __expectString(output.MoveToColdStorageAt),
  } as any;
};

const deserializeAws_restJson1AwsBackupRecoveryPointCreatedByDetails = (
  output: any,
  context: __SerdeContext
): AwsBackupRecoveryPointCreatedByDetails => {
  return {
    BackupPlanArn: __expectString(output.BackupPlanArn),
    BackupPlanId: __expectString(output.BackupPlanId),
    BackupPlanVersion: __expectString(output.BackupPlanVersion),
    BackupRuleId: __expectString(output.BackupRuleId),
  } as any;
};

const deserializeAws_restJson1AwsBackupRecoveryPointDetails = (
  output: any,
  context: __SerdeContext
): AwsBackupRecoveryPointDetails => {
  return {
    BackupSizeInBytes: __expectLong(output.BackupSizeInBytes),
    BackupVaultArn: __expectString(output.BackupVaultArn),
    BackupVaultName: __expectString(output.BackupVaultName),
    CalculatedLifecycle:
      output.CalculatedLifecycle != null
        ? deserializeAws_restJson1AwsBackupRecoveryPointCalculatedLifecycleDetails(output.CalculatedLifecycle, context)
        : undefined,
    CompletionDate: __expectString(output.CompletionDate),
    CreatedBy:
      output.CreatedBy != null
        ? deserializeAws_restJson1AwsBackupRecoveryPointCreatedByDetails(output.CreatedBy, context)
        : undefined,
    CreationDate: __expectString(output.CreationDate),
    EncryptionKeyArn: __expectString(output.EncryptionKeyArn),
    IamRoleArn: __expectString(output.IamRoleArn),
    IsEncrypted: __expectBoolean(output.IsEncrypted),
    LastRestoreTime: __expectString(output.LastRestoreTime),
    Lifecycle:
      output.Lifecycle != null
        ? deserializeAws_restJson1AwsBackupRecoveryPointLifecycleDetails(output.Lifecycle, context)
        : undefined,
    RecoveryPointArn: __expectString(output.RecoveryPointArn),
    ResourceArn: __expectString(output.ResourceArn),
    ResourceType: __expectString(output.ResourceType),
    SourceBackupVaultArn: __expectString(output.SourceBackupVaultArn),
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
    StorageClass: __expectString(output.StorageClass),
  } as any;
};

const deserializeAws_restJson1AwsBackupRecoveryPointLifecycleDetails = (
  output: any,
  context: __SerdeContext
): AwsBackupRecoveryPointLifecycleDetails => {
  return {
    DeleteAfterDays: __expectLong(output.DeleteAfterDays),
    MoveToColdStorageAfterDays: __expectLong(output.MoveToColdStorageAfterDays),
  } as any;
};

const deserializeAws_restJson1AwsCertificateManagerCertificateDetails = (
  output: any,
  context: __SerdeContext
): AwsCertificateManagerCertificateDetails => {
  return {
    CertificateAuthorityArn: __expectString(output.CertificateAuthorityArn),
    CreatedAt: __expectString(output.CreatedAt),
    DomainName: __expectString(output.DomainName),
    DomainValidationOptions:
      output.DomainValidationOptions != null
        ? deserializeAws_restJson1AwsCertificateManagerCertificateDomainValidationOptions(
            output.DomainValidationOptions,
            context
          )
        : undefined,
    ExtendedKeyUsages:
      output.ExtendedKeyUsages != null
        ? deserializeAws_restJson1AwsCertificateManagerCertificateExtendedKeyUsages(output.ExtendedKeyUsages, context)
        : undefined,
    FailureReason: __expectString(output.FailureReason),
    ImportedAt: __expectString(output.ImportedAt),
    InUseBy: output.InUseBy != null ? deserializeAws_restJson1StringList(output.InUseBy, context) : undefined,
    IssuedAt: __expectString(output.IssuedAt),
    Issuer: __expectString(output.Issuer),
    KeyAlgorithm: __expectString(output.KeyAlgorithm),
    KeyUsages:
      output.KeyUsages != null
        ? deserializeAws_restJson1AwsCertificateManagerCertificateKeyUsages(output.KeyUsages, context)
        : undefined,
    NotAfter: __expectString(output.NotAfter),
    NotBefore: __expectString(output.NotBefore),
    Options:
      output.Options != null
        ? deserializeAws_restJson1AwsCertificateManagerCertificateOptions(output.Options, context)
        : undefined,
    RenewalEligibility: __expectString(output.RenewalEligibility),
    RenewalSummary:
      output.RenewalSummary != null
        ? deserializeAws_restJson1AwsCertificateManagerCertificateRenewalSummary(output.RenewalSummary, context)
        : undefined,
    Serial: __expectString(output.Serial),
    SignatureAlgorithm: __expectString(output.SignatureAlgorithm),
    Status: __expectString(output.Status),
    Subject: __expectString(output.Subject),
    SubjectAlternativeNames:
      output.SubjectAlternativeNames != null
        ? deserializeAws_restJson1StringList(output.SubjectAlternativeNames, context)
        : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1AwsCertificateManagerCertificateDomainValidationOption = (
  output: any,
  context: __SerdeContext
): AwsCertificateManagerCertificateDomainValidationOption => {
  return {
    DomainName: __expectString(output.DomainName),
    ResourceRecord:
      output.ResourceRecord != null
        ? deserializeAws_restJson1AwsCertificateManagerCertificateResourceRecord(output.ResourceRecord, context)
        : undefined,
    ValidationDomain: __expectString(output.ValidationDomain),
    ValidationEmails:
      output.ValidationEmails != null
        ? deserializeAws_restJson1StringList(output.ValidationEmails, context)
        : undefined,
    ValidationMethod: __expectString(output.ValidationMethod),
    ValidationStatus: __expectString(output.ValidationStatus),
  } as any;
};

const deserializeAws_restJson1AwsCertificateManagerCertificateDomainValidationOptions = (
  output: any,
  context: __SerdeContext
): AwsCertificateManagerCertificateDomainValidationOption[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsCertificateManagerCertificateDomainValidationOption(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsCertificateManagerCertificateExtendedKeyUsage = (
  output: any,
  context: __SerdeContext
): AwsCertificateManagerCertificateExtendedKeyUsage => {
  return {
    Name: __expectString(output.Name),
    OId: __expectString(output.OId),
  } as any;
};

const deserializeAws_restJson1AwsCertificateManagerCertificateExtendedKeyUsages = (
  output: any,
  context: __SerdeContext
): AwsCertificateManagerCertificateExtendedKeyUsage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsCertificateManagerCertificateExtendedKeyUsage(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsCertificateManagerCertificateKeyUsage = (
  output: any,
  context: __SerdeContext
): AwsCertificateManagerCertificateKeyUsage => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1AwsCertificateManagerCertificateKeyUsages = (
  output: any,
  context: __SerdeContext
): AwsCertificateManagerCertificateKeyUsage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsCertificateManagerCertificateKeyUsage(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsCertificateManagerCertificateOptions = (
  output: any,
  context: __SerdeContext
): AwsCertificateManagerCertificateOptions => {
  return {
    CertificateTransparencyLoggingPreference: __expectString(output.CertificateTransparencyLoggingPreference),
  } as any;
};

const deserializeAws_restJson1AwsCertificateManagerCertificateRenewalSummary = (
  output: any,
  context: __SerdeContext
): AwsCertificateManagerCertificateRenewalSummary => {
  return {
    DomainValidationOptions:
      output.DomainValidationOptions != null
        ? deserializeAws_restJson1AwsCertificateManagerCertificateDomainValidationOptions(
            output.DomainValidationOptions,
            context
          )
        : undefined,
    RenewalStatus: __expectString(output.RenewalStatus),
    RenewalStatusReason: __expectString(output.RenewalStatusReason),
    UpdatedAt: __expectString(output.UpdatedAt),
  } as any;
};

const deserializeAws_restJson1AwsCertificateManagerCertificateResourceRecord = (
  output: any,
  context: __SerdeContext
): AwsCertificateManagerCertificateResourceRecord => {
  return {
    Name: __expectString(output.Name),
    Type: __expectString(output.Type),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1AwsCloudFormationStackDetails = (
  output: any,
  context: __SerdeContext
): AwsCloudFormationStackDetails => {
  return {
    Capabilities:
      output.Capabilities != null
        ? deserializeAws_restJson1NonEmptyStringList(output.Capabilities, context)
        : undefined,
    CreationTime: __expectString(output.CreationTime),
    Description: __expectString(output.Description),
    DisableRollback: __expectBoolean(output.DisableRollback),
    DriftInformation:
      output.DriftInformation != null
        ? deserializeAws_restJson1AwsCloudFormationStackDriftInformationDetails(output.DriftInformation, context)
        : undefined,
    EnableTerminationProtection: __expectBoolean(output.EnableTerminationProtection),
    LastUpdatedTime: __expectString(output.LastUpdatedTime),
    NotificationArns:
      output.NotificationArns != null
        ? deserializeAws_restJson1NonEmptyStringList(output.NotificationArns, context)
        : undefined,
    Outputs:
      output.Outputs != null
        ? deserializeAws_restJson1AwsCloudFormationStackOutputsList(output.Outputs, context)
        : undefined,
    RoleArn: __expectString(output.RoleArn),
    StackId: __expectString(output.StackId),
    StackName: __expectString(output.StackName),
    StackStatus: __expectString(output.StackStatus),
    StackStatusReason: __expectString(output.StackStatusReason),
    TimeoutInMinutes: __expectInt32(output.TimeoutInMinutes),
  } as any;
};

const deserializeAws_restJson1AwsCloudFormationStackDriftInformationDetails = (
  output: any,
  context: __SerdeContext
): AwsCloudFormationStackDriftInformationDetails => {
  return {
    StackDriftStatus: __expectString(output.StackDriftStatus),
  } as any;
};

const deserializeAws_restJson1AwsCloudFormationStackOutputsDetails = (
  output: any,
  context: __SerdeContext
): AwsCloudFormationStackOutputsDetails => {
  return {
    Description: __expectString(output.Description),
    OutputKey: __expectString(output.OutputKey),
    OutputValue: __expectString(output.OutputValue),
  } as any;
};

const deserializeAws_restJson1AwsCloudFormationStackOutputsList = (
  output: any,
  context: __SerdeContext
): AwsCloudFormationStackOutputsDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsCloudFormationStackOutputsDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsCloudFrontDistributionCacheBehavior = (
  output: any,
  context: __SerdeContext
): AwsCloudFrontDistributionCacheBehavior => {
  return {
    ViewerProtocolPolicy: __expectString(output.ViewerProtocolPolicy),
  } as any;
};

const deserializeAws_restJson1AwsCloudFrontDistributionCacheBehaviors = (
  output: any,
  context: __SerdeContext
): AwsCloudFrontDistributionCacheBehaviors => {
  return {
    Items:
      output.Items != null
        ? deserializeAws_restJson1AwsCloudFrontDistributionCacheBehaviorsItemList(output.Items, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsCloudFrontDistributionCacheBehaviorsItemList = (
  output: any,
  context: __SerdeContext
): AwsCloudFrontDistributionCacheBehavior[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsCloudFrontDistributionCacheBehavior(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsCloudFrontDistributionDefaultCacheBehavior = (
  output: any,
  context: __SerdeContext
): AwsCloudFrontDistributionDefaultCacheBehavior => {
  return {
    ViewerProtocolPolicy: __expectString(output.ViewerProtocolPolicy),
  } as any;
};

const deserializeAws_restJson1AwsCloudFrontDistributionDetails = (
  output: any,
  context: __SerdeContext
): AwsCloudFrontDistributionDetails => {
  return {
    CacheBehaviors:
      output.CacheBehaviors != null
        ? deserializeAws_restJson1AwsCloudFrontDistributionCacheBehaviors(output.CacheBehaviors, context)
        : undefined,
    DefaultCacheBehavior:
      output.DefaultCacheBehavior != null
        ? deserializeAws_restJson1AwsCloudFrontDistributionDefaultCacheBehavior(output.DefaultCacheBehavior, context)
        : undefined,
    DefaultRootObject: __expectString(output.DefaultRootObject),
    DomainName: __expectString(output.DomainName),
    ETag: __expectString(output.ETag),
    LastModifiedTime: __expectString(output.LastModifiedTime),
    Logging:
      output.Logging != null
        ? deserializeAws_restJson1AwsCloudFrontDistributionLogging(output.Logging, context)
        : undefined,
    OriginGroups:
      output.OriginGroups != null
        ? deserializeAws_restJson1AwsCloudFrontDistributionOriginGroups(output.OriginGroups, context)
        : undefined,
    Origins:
      output.Origins != null
        ? deserializeAws_restJson1AwsCloudFrontDistributionOrigins(output.Origins, context)
        : undefined,
    Status: __expectString(output.Status),
    ViewerCertificate:
      output.ViewerCertificate != null
        ? deserializeAws_restJson1AwsCloudFrontDistributionViewerCertificate(output.ViewerCertificate, context)
        : undefined,
    WebAclId: __expectString(output.WebAclId),
  } as any;
};

const deserializeAws_restJson1AwsCloudFrontDistributionLogging = (
  output: any,
  context: __SerdeContext
): AwsCloudFrontDistributionLogging => {
  return {
    Bucket: __expectString(output.Bucket),
    Enabled: __expectBoolean(output.Enabled),
    IncludeCookies: __expectBoolean(output.IncludeCookies),
    Prefix: __expectString(output.Prefix),
  } as any;
};

const deserializeAws_restJson1AwsCloudFrontDistributionOriginCustomOriginConfig = (
  output: any,
  context: __SerdeContext
): AwsCloudFrontDistributionOriginCustomOriginConfig => {
  return {
    HttpPort: __expectInt32(output.HttpPort),
    HttpsPort: __expectInt32(output.HttpsPort),
    OriginKeepaliveTimeout: __expectInt32(output.OriginKeepaliveTimeout),
    OriginProtocolPolicy: __expectString(output.OriginProtocolPolicy),
    OriginReadTimeout: __expectInt32(output.OriginReadTimeout),
    OriginSslProtocols:
      output.OriginSslProtocols != null
        ? deserializeAws_restJson1AwsCloudFrontDistributionOriginSslProtocols(output.OriginSslProtocols, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsCloudFrontDistributionOriginGroup = (
  output: any,
  context: __SerdeContext
): AwsCloudFrontDistributionOriginGroup => {
  return {
    FailoverCriteria:
      output.FailoverCriteria != null
        ? deserializeAws_restJson1AwsCloudFrontDistributionOriginGroupFailover(output.FailoverCriteria, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsCloudFrontDistributionOriginGroupFailover = (
  output: any,
  context: __SerdeContext
): AwsCloudFrontDistributionOriginGroupFailover => {
  return {
    StatusCodes:
      output.StatusCodes != null
        ? deserializeAws_restJson1AwsCloudFrontDistributionOriginGroupFailoverStatusCodes(output.StatusCodes, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsCloudFrontDistributionOriginGroupFailoverStatusCodes = (
  output: any,
  context: __SerdeContext
): AwsCloudFrontDistributionOriginGroupFailoverStatusCodes => {
  return {
    Items:
      output.Items != null
        ? deserializeAws_restJson1AwsCloudFrontDistributionOriginGroupFailoverStatusCodesItemList(output.Items, context)
        : undefined,
    Quantity: __expectInt32(output.Quantity),
  } as any;
};

const deserializeAws_restJson1AwsCloudFrontDistributionOriginGroupFailoverStatusCodesItemList = (
  output: any,
  context: __SerdeContext
): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectInt32(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1AwsCloudFrontDistributionOriginGroups = (
  output: any,
  context: __SerdeContext
): AwsCloudFrontDistributionOriginGroups => {
  return {
    Items:
      output.Items != null
        ? deserializeAws_restJson1AwsCloudFrontDistributionOriginGroupsItemList(output.Items, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsCloudFrontDistributionOriginGroupsItemList = (
  output: any,
  context: __SerdeContext
): AwsCloudFrontDistributionOriginGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsCloudFrontDistributionOriginGroup(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsCloudFrontDistributionOriginItem = (
  output: any,
  context: __SerdeContext
): AwsCloudFrontDistributionOriginItem => {
  return {
    CustomOriginConfig:
      output.CustomOriginConfig != null
        ? deserializeAws_restJson1AwsCloudFrontDistributionOriginCustomOriginConfig(output.CustomOriginConfig, context)
        : undefined,
    DomainName: __expectString(output.DomainName),
    Id: __expectString(output.Id),
    OriginPath: __expectString(output.OriginPath),
    S3OriginConfig:
      output.S3OriginConfig != null
        ? deserializeAws_restJson1AwsCloudFrontDistributionOriginS3OriginConfig(output.S3OriginConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsCloudFrontDistributionOriginItemList = (
  output: any,
  context: __SerdeContext
): AwsCloudFrontDistributionOriginItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsCloudFrontDistributionOriginItem(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsCloudFrontDistributionOrigins = (
  output: any,
  context: __SerdeContext
): AwsCloudFrontDistributionOrigins => {
  return {
    Items:
      output.Items != null
        ? deserializeAws_restJson1AwsCloudFrontDistributionOriginItemList(output.Items, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsCloudFrontDistributionOriginS3OriginConfig = (
  output: any,
  context: __SerdeContext
): AwsCloudFrontDistributionOriginS3OriginConfig => {
  return {
    OriginAccessIdentity: __expectString(output.OriginAccessIdentity),
  } as any;
};

const deserializeAws_restJson1AwsCloudFrontDistributionOriginSslProtocols = (
  output: any,
  context: __SerdeContext
): AwsCloudFrontDistributionOriginSslProtocols => {
  return {
    Items: output.Items != null ? deserializeAws_restJson1NonEmptyStringList(output.Items, context) : undefined,
    Quantity: __expectInt32(output.Quantity),
  } as any;
};

const deserializeAws_restJson1AwsCloudFrontDistributionViewerCertificate = (
  output: any,
  context: __SerdeContext
): AwsCloudFrontDistributionViewerCertificate => {
  return {
    AcmCertificateArn: __expectString(output.AcmCertificateArn),
    Certificate: __expectString(output.Certificate),
    CertificateSource: __expectString(output.CertificateSource),
    CloudFrontDefaultCertificate: __expectBoolean(output.CloudFrontDefaultCertificate),
    IamCertificateId: __expectString(output.IamCertificateId),
    MinimumProtocolVersion: __expectString(output.MinimumProtocolVersion),
    SslSupportMethod: __expectString(output.SslSupportMethod),
  } as any;
};

const deserializeAws_restJson1AwsCloudTrailTrailDetails = (
  output: any,
  context: __SerdeContext
): AwsCloudTrailTrailDetails => {
  return {
    CloudWatchLogsLogGroupArn: __expectString(output.CloudWatchLogsLogGroupArn),
    CloudWatchLogsRoleArn: __expectString(output.CloudWatchLogsRoleArn),
    HasCustomEventSelectors: __expectBoolean(output.HasCustomEventSelectors),
    HomeRegion: __expectString(output.HomeRegion),
    IncludeGlobalServiceEvents: __expectBoolean(output.IncludeGlobalServiceEvents),
    IsMultiRegionTrail: __expectBoolean(output.IsMultiRegionTrail),
    IsOrganizationTrail: __expectBoolean(output.IsOrganizationTrail),
    KmsKeyId: __expectString(output.KmsKeyId),
    LogFileValidationEnabled: __expectBoolean(output.LogFileValidationEnabled),
    Name: __expectString(output.Name),
    S3BucketName: __expectString(output.S3BucketName),
    S3KeyPrefix: __expectString(output.S3KeyPrefix),
    SnsTopicArn: __expectString(output.SnsTopicArn),
    SnsTopicName: __expectString(output.SnsTopicName),
    TrailArn: __expectString(output.TrailArn),
  } as any;
};

const deserializeAws_restJson1AwsCloudWatchAlarmDetails = (
  output: any,
  context: __SerdeContext
): AwsCloudWatchAlarmDetails => {
  return {
    ActionsEnabled: __expectBoolean(output.ActionsEnabled),
    AlarmActions:
      output.AlarmActions != null
        ? deserializeAws_restJson1NonEmptyStringList(output.AlarmActions, context)
        : undefined,
    AlarmArn: __expectString(output.AlarmArn),
    AlarmConfigurationUpdatedTimestamp: __expectString(output.AlarmConfigurationUpdatedTimestamp),
    AlarmDescription: __expectString(output.AlarmDescription),
    AlarmName: __expectString(output.AlarmName),
    ComparisonOperator: __expectString(output.ComparisonOperator),
    DatapointsToAlarm: __expectInt32(output.DatapointsToAlarm),
    Dimensions:
      output.Dimensions != null
        ? deserializeAws_restJson1AwsCloudWatchAlarmDimensionsList(output.Dimensions, context)
        : undefined,
    EvaluateLowSampleCountPercentile: __expectString(output.EvaluateLowSampleCountPercentile),
    EvaluationPeriods: __expectInt32(output.EvaluationPeriods),
    ExtendedStatistic: __expectString(output.ExtendedStatistic),
    InsufficientDataActions:
      output.InsufficientDataActions != null
        ? deserializeAws_restJson1NonEmptyStringList(output.InsufficientDataActions, context)
        : undefined,
    MetricName: __expectString(output.MetricName),
    Namespace: __expectString(output.Namespace),
    OkActions:
      output.OkActions != null ? deserializeAws_restJson1NonEmptyStringList(output.OkActions, context) : undefined,
    Period: __expectInt32(output.Period),
    Statistic: __expectString(output.Statistic),
    Threshold: __limitedParseDouble(output.Threshold),
    ThresholdMetricId: __expectString(output.ThresholdMetricId),
    TreatMissingData: __expectString(output.TreatMissingData),
    Unit: __expectString(output.Unit),
  } as any;
};

const deserializeAws_restJson1AwsCloudWatchAlarmDimensionsDetails = (
  output: any,
  context: __SerdeContext
): AwsCloudWatchAlarmDimensionsDetails => {
  return {
    Name: __expectString(output.Name),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1AwsCloudWatchAlarmDimensionsList = (
  output: any,
  context: __SerdeContext
): AwsCloudWatchAlarmDimensionsDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsCloudWatchAlarmDimensionsDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsCodeBuildProjectArtifactsDetails = (
  output: any,
  context: __SerdeContext
): AwsCodeBuildProjectArtifactsDetails => {
  return {
    ArtifactIdentifier: __expectString(output.ArtifactIdentifier),
    EncryptionDisabled: __expectBoolean(output.EncryptionDisabled),
    Location: __expectString(output.Location),
    Name: __expectString(output.Name),
    NamespaceType: __expectString(output.NamespaceType),
    OverrideArtifactName: __expectBoolean(output.OverrideArtifactName),
    Packaging: __expectString(output.Packaging),
    Path: __expectString(output.Path),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1AwsCodeBuildProjectArtifactsList = (
  output: any,
  context: __SerdeContext
): AwsCodeBuildProjectArtifactsDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsCodeBuildProjectArtifactsDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsCodeBuildProjectDetails = (
  output: any,
  context: __SerdeContext
): AwsCodeBuildProjectDetails => {
  return {
    Artifacts:
      output.Artifacts != null
        ? deserializeAws_restJson1AwsCodeBuildProjectArtifactsList(output.Artifacts, context)
        : undefined,
    EncryptionKey: __expectString(output.EncryptionKey),
    Environment:
      output.Environment != null
        ? deserializeAws_restJson1AwsCodeBuildProjectEnvironment(output.Environment, context)
        : undefined,
    LogsConfig:
      output.LogsConfig != null
        ? deserializeAws_restJson1AwsCodeBuildProjectLogsConfigDetails(output.LogsConfig, context)
        : undefined,
    Name: __expectString(output.Name),
    SecondaryArtifacts:
      output.SecondaryArtifacts != null
        ? deserializeAws_restJson1AwsCodeBuildProjectArtifactsList(output.SecondaryArtifacts, context)
        : undefined,
    ServiceRole: __expectString(output.ServiceRole),
    Source:
      output.Source != null ? deserializeAws_restJson1AwsCodeBuildProjectSource(output.Source, context) : undefined,
    VpcConfig:
      output.VpcConfig != null
        ? deserializeAws_restJson1AwsCodeBuildProjectVpcConfig(output.VpcConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsCodeBuildProjectEnvironment = (
  output: any,
  context: __SerdeContext
): AwsCodeBuildProjectEnvironment => {
  return {
    Certificate: __expectString(output.Certificate),
    EnvironmentVariables:
      output.EnvironmentVariables != null
        ? deserializeAws_restJson1AwsCodeBuildProjectEnvironmentEnvironmentVariablesList(
            output.EnvironmentVariables,
            context
          )
        : undefined,
    ImagePullCredentialsType: __expectString(output.ImagePullCredentialsType),
    PrivilegedMode: __expectBoolean(output.PrivilegedMode),
    RegistryCredential:
      output.RegistryCredential != null
        ? deserializeAws_restJson1AwsCodeBuildProjectEnvironmentRegistryCredential(output.RegistryCredential, context)
        : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1AwsCodeBuildProjectEnvironmentEnvironmentVariablesDetails = (
  output: any,
  context: __SerdeContext
): AwsCodeBuildProjectEnvironmentEnvironmentVariablesDetails => {
  return {
    Name: __expectString(output.Name),
    Type: __expectString(output.Type),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1AwsCodeBuildProjectEnvironmentEnvironmentVariablesList = (
  output: any,
  context: __SerdeContext
): AwsCodeBuildProjectEnvironmentEnvironmentVariablesDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsCodeBuildProjectEnvironmentEnvironmentVariablesDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsCodeBuildProjectEnvironmentRegistryCredential = (
  output: any,
  context: __SerdeContext
): AwsCodeBuildProjectEnvironmentRegistryCredential => {
  return {
    Credential: __expectString(output.Credential),
    CredentialProvider: __expectString(output.CredentialProvider),
  } as any;
};

const deserializeAws_restJson1AwsCodeBuildProjectLogsConfigCloudWatchLogsDetails = (
  output: any,
  context: __SerdeContext
): AwsCodeBuildProjectLogsConfigCloudWatchLogsDetails => {
  return {
    GroupName: __expectString(output.GroupName),
    Status: __expectString(output.Status),
    StreamName: __expectString(output.StreamName),
  } as any;
};

const deserializeAws_restJson1AwsCodeBuildProjectLogsConfigDetails = (
  output: any,
  context: __SerdeContext
): AwsCodeBuildProjectLogsConfigDetails => {
  return {
    CloudWatchLogs:
      output.CloudWatchLogs != null
        ? deserializeAws_restJson1AwsCodeBuildProjectLogsConfigCloudWatchLogsDetails(output.CloudWatchLogs, context)
        : undefined,
    S3Logs:
      output.S3Logs != null
        ? deserializeAws_restJson1AwsCodeBuildProjectLogsConfigS3LogsDetails(output.S3Logs, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsCodeBuildProjectLogsConfigS3LogsDetails = (
  output: any,
  context: __SerdeContext
): AwsCodeBuildProjectLogsConfigS3LogsDetails => {
  return {
    EncryptionDisabled: __expectBoolean(output.EncryptionDisabled),
    Location: __expectString(output.Location),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1AwsCodeBuildProjectSource = (
  output: any,
  context: __SerdeContext
): AwsCodeBuildProjectSource => {
  return {
    GitCloneDepth: __expectInt32(output.GitCloneDepth),
    InsecureSsl: __expectBoolean(output.InsecureSsl),
    Location: __expectString(output.Location),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1AwsCodeBuildProjectVpcConfig = (
  output: any,
  context: __SerdeContext
): AwsCodeBuildProjectVpcConfig => {
  return {
    SecurityGroupIds:
      output.SecurityGroupIds != null
        ? deserializeAws_restJson1NonEmptyStringList(output.SecurityGroupIds, context)
        : undefined,
    Subnets: output.Subnets != null ? deserializeAws_restJson1NonEmptyStringList(output.Subnets, context) : undefined,
    VpcId: __expectString(output.VpcId),
  } as any;
};

const deserializeAws_restJson1AwsCorsConfiguration = (output: any, context: __SerdeContext): AwsCorsConfiguration => {
  return {
    AllowCredentials: __expectBoolean(output.AllowCredentials),
    AllowHeaders:
      output.AllowHeaders != null
        ? deserializeAws_restJson1NonEmptyStringList(output.AllowHeaders, context)
        : undefined,
    AllowMethods:
      output.AllowMethods != null
        ? deserializeAws_restJson1NonEmptyStringList(output.AllowMethods, context)
        : undefined,
    AllowOrigins:
      output.AllowOrigins != null
        ? deserializeAws_restJson1NonEmptyStringList(output.AllowOrigins, context)
        : undefined,
    ExposeHeaders:
      output.ExposeHeaders != null
        ? deserializeAws_restJson1NonEmptyStringList(output.ExposeHeaders, context)
        : undefined,
    MaxAge: __expectInt32(output.MaxAge),
  } as any;
};

const deserializeAws_restJson1AwsDynamoDbTableAttributeDefinition = (
  output: any,
  context: __SerdeContext
): AwsDynamoDbTableAttributeDefinition => {
  return {
    AttributeName: __expectString(output.AttributeName),
    AttributeType: __expectString(output.AttributeType),
  } as any;
};

const deserializeAws_restJson1AwsDynamoDbTableAttributeDefinitionList = (
  output: any,
  context: __SerdeContext
): AwsDynamoDbTableAttributeDefinition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsDynamoDbTableAttributeDefinition(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsDynamoDbTableBillingModeSummary = (
  output: any,
  context: __SerdeContext
): AwsDynamoDbTableBillingModeSummary => {
  return {
    BillingMode: __expectString(output.BillingMode),
    LastUpdateToPayPerRequestDateTime: __expectString(output.LastUpdateToPayPerRequestDateTime),
  } as any;
};

const deserializeAws_restJson1AwsDynamoDbTableDetails = (
  output: any,
  context: __SerdeContext
): AwsDynamoDbTableDetails => {
  return {
    AttributeDefinitions:
      output.AttributeDefinitions != null
        ? deserializeAws_restJson1AwsDynamoDbTableAttributeDefinitionList(output.AttributeDefinitions, context)
        : undefined,
    BillingModeSummary:
      output.BillingModeSummary != null
        ? deserializeAws_restJson1AwsDynamoDbTableBillingModeSummary(output.BillingModeSummary, context)
        : undefined,
    CreationDateTime: __expectString(output.CreationDateTime),
    GlobalSecondaryIndexes:
      output.GlobalSecondaryIndexes != null
        ? deserializeAws_restJson1AwsDynamoDbTableGlobalSecondaryIndexList(output.GlobalSecondaryIndexes, context)
        : undefined,
    GlobalTableVersion: __expectString(output.GlobalTableVersion),
    ItemCount: __expectInt32(output.ItemCount),
    KeySchema:
      output.KeySchema != null
        ? deserializeAws_restJson1AwsDynamoDbTableKeySchemaList(output.KeySchema, context)
        : undefined,
    LatestStreamArn: __expectString(output.LatestStreamArn),
    LatestStreamLabel: __expectString(output.LatestStreamLabel),
    LocalSecondaryIndexes:
      output.LocalSecondaryIndexes != null
        ? deserializeAws_restJson1AwsDynamoDbTableLocalSecondaryIndexList(output.LocalSecondaryIndexes, context)
        : undefined,
    ProvisionedThroughput:
      output.ProvisionedThroughput != null
        ? deserializeAws_restJson1AwsDynamoDbTableProvisionedThroughput(output.ProvisionedThroughput, context)
        : undefined,
    Replicas:
      output.Replicas != null
        ? deserializeAws_restJson1AwsDynamoDbTableReplicaList(output.Replicas, context)
        : undefined,
    RestoreSummary:
      output.RestoreSummary != null
        ? deserializeAws_restJson1AwsDynamoDbTableRestoreSummary(output.RestoreSummary, context)
        : undefined,
    SseDescription:
      output.SseDescription != null
        ? deserializeAws_restJson1AwsDynamoDbTableSseDescription(output.SseDescription, context)
        : undefined,
    StreamSpecification:
      output.StreamSpecification != null
        ? deserializeAws_restJson1AwsDynamoDbTableStreamSpecification(output.StreamSpecification, context)
        : undefined,
    TableId: __expectString(output.TableId),
    TableName: __expectString(output.TableName),
    TableSizeBytes: __expectLong(output.TableSizeBytes),
    TableStatus: __expectString(output.TableStatus),
  } as any;
};

const deserializeAws_restJson1AwsDynamoDbTableGlobalSecondaryIndex = (
  output: any,
  context: __SerdeContext
): AwsDynamoDbTableGlobalSecondaryIndex => {
  return {
    Backfilling: __expectBoolean(output.Backfilling),
    IndexArn: __expectString(output.IndexArn),
    IndexName: __expectString(output.IndexName),
    IndexSizeBytes: __expectLong(output.IndexSizeBytes),
    IndexStatus: __expectString(output.IndexStatus),
    ItemCount: __expectInt32(output.ItemCount),
    KeySchema:
      output.KeySchema != null
        ? deserializeAws_restJson1AwsDynamoDbTableKeySchemaList(output.KeySchema, context)
        : undefined,
    Projection:
      output.Projection != null
        ? deserializeAws_restJson1AwsDynamoDbTableProjection(output.Projection, context)
        : undefined,
    ProvisionedThroughput:
      output.ProvisionedThroughput != null
        ? deserializeAws_restJson1AwsDynamoDbTableProvisionedThroughput(output.ProvisionedThroughput, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsDynamoDbTableGlobalSecondaryIndexList = (
  output: any,
  context: __SerdeContext
): AwsDynamoDbTableGlobalSecondaryIndex[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsDynamoDbTableGlobalSecondaryIndex(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsDynamoDbTableKeySchema = (
  output: any,
  context: __SerdeContext
): AwsDynamoDbTableKeySchema => {
  return {
    AttributeName: __expectString(output.AttributeName),
    KeyType: __expectString(output.KeyType),
  } as any;
};

const deserializeAws_restJson1AwsDynamoDbTableKeySchemaList = (
  output: any,
  context: __SerdeContext
): AwsDynamoDbTableKeySchema[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsDynamoDbTableKeySchema(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsDynamoDbTableLocalSecondaryIndex = (
  output: any,
  context: __SerdeContext
): AwsDynamoDbTableLocalSecondaryIndex => {
  return {
    IndexArn: __expectString(output.IndexArn),
    IndexName: __expectString(output.IndexName),
    KeySchema:
      output.KeySchema != null
        ? deserializeAws_restJson1AwsDynamoDbTableKeySchemaList(output.KeySchema, context)
        : undefined,
    Projection:
      output.Projection != null
        ? deserializeAws_restJson1AwsDynamoDbTableProjection(output.Projection, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsDynamoDbTableLocalSecondaryIndexList = (
  output: any,
  context: __SerdeContext
): AwsDynamoDbTableLocalSecondaryIndex[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsDynamoDbTableLocalSecondaryIndex(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsDynamoDbTableProjection = (
  output: any,
  context: __SerdeContext
): AwsDynamoDbTableProjection => {
  return {
    NonKeyAttributes:
      output.NonKeyAttributes != null
        ? deserializeAws_restJson1StringList(output.NonKeyAttributes, context)
        : undefined,
    ProjectionType: __expectString(output.ProjectionType),
  } as any;
};

const deserializeAws_restJson1AwsDynamoDbTableProvisionedThroughput = (
  output: any,
  context: __SerdeContext
): AwsDynamoDbTableProvisionedThroughput => {
  return {
    LastDecreaseDateTime: __expectString(output.LastDecreaseDateTime),
    LastIncreaseDateTime: __expectString(output.LastIncreaseDateTime),
    NumberOfDecreasesToday: __expectInt32(output.NumberOfDecreasesToday),
    ReadCapacityUnits: __expectInt32(output.ReadCapacityUnits),
    WriteCapacityUnits: __expectInt32(output.WriteCapacityUnits),
  } as any;
};

const deserializeAws_restJson1AwsDynamoDbTableProvisionedThroughputOverride = (
  output: any,
  context: __SerdeContext
): AwsDynamoDbTableProvisionedThroughputOverride => {
  return {
    ReadCapacityUnits: __expectInt32(output.ReadCapacityUnits),
  } as any;
};

const deserializeAws_restJson1AwsDynamoDbTableReplica = (
  output: any,
  context: __SerdeContext
): AwsDynamoDbTableReplica => {
  return {
    GlobalSecondaryIndexes:
      output.GlobalSecondaryIndexes != null
        ? deserializeAws_restJson1AwsDynamoDbTableReplicaGlobalSecondaryIndexList(
            output.GlobalSecondaryIndexes,
            context
          )
        : undefined,
    KmsMasterKeyId: __expectString(output.KmsMasterKeyId),
    ProvisionedThroughputOverride:
      output.ProvisionedThroughputOverride != null
        ? deserializeAws_restJson1AwsDynamoDbTableProvisionedThroughputOverride(
            output.ProvisionedThroughputOverride,
            context
          )
        : undefined,
    RegionName: __expectString(output.RegionName),
    ReplicaStatus: __expectString(output.ReplicaStatus),
    ReplicaStatusDescription: __expectString(output.ReplicaStatusDescription),
  } as any;
};

const deserializeAws_restJson1AwsDynamoDbTableReplicaGlobalSecondaryIndex = (
  output: any,
  context: __SerdeContext
): AwsDynamoDbTableReplicaGlobalSecondaryIndex => {
  return {
    IndexName: __expectString(output.IndexName),
    ProvisionedThroughputOverride:
      output.ProvisionedThroughputOverride != null
        ? deserializeAws_restJson1AwsDynamoDbTableProvisionedThroughputOverride(
            output.ProvisionedThroughputOverride,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsDynamoDbTableReplicaGlobalSecondaryIndexList = (
  output: any,
  context: __SerdeContext
): AwsDynamoDbTableReplicaGlobalSecondaryIndex[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsDynamoDbTableReplicaGlobalSecondaryIndex(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsDynamoDbTableReplicaList = (
  output: any,
  context: __SerdeContext
): AwsDynamoDbTableReplica[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsDynamoDbTableReplica(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsDynamoDbTableRestoreSummary = (
  output: any,
  context: __SerdeContext
): AwsDynamoDbTableRestoreSummary => {
  return {
    RestoreDateTime: __expectString(output.RestoreDateTime),
    RestoreInProgress: __expectBoolean(output.RestoreInProgress),
    SourceBackupArn: __expectString(output.SourceBackupArn),
    SourceTableArn: __expectString(output.SourceTableArn),
  } as any;
};

const deserializeAws_restJson1AwsDynamoDbTableSseDescription = (
  output: any,
  context: __SerdeContext
): AwsDynamoDbTableSseDescription => {
  return {
    InaccessibleEncryptionDateTime: __expectString(output.InaccessibleEncryptionDateTime),
    KmsMasterKeyArn: __expectString(output.KmsMasterKeyArn),
    SseType: __expectString(output.SseType),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1AwsDynamoDbTableStreamSpecification = (
  output: any,
  context: __SerdeContext
): AwsDynamoDbTableStreamSpecification => {
  return {
    StreamEnabled: __expectBoolean(output.StreamEnabled),
    StreamViewType: __expectString(output.StreamViewType),
  } as any;
};

const deserializeAws_restJson1AwsEc2EipDetails = (output: any, context: __SerdeContext): AwsEc2EipDetails => {
  return {
    AllocationId: __expectString(output.AllocationId),
    AssociationId: __expectString(output.AssociationId),
    Domain: __expectString(output.Domain),
    InstanceId: __expectString(output.InstanceId),
    NetworkBorderGroup: __expectString(output.NetworkBorderGroup),
    NetworkInterfaceId: __expectString(output.NetworkInterfaceId),
    NetworkInterfaceOwnerId: __expectString(output.NetworkInterfaceOwnerId),
    PrivateIpAddress: __expectString(output.PrivateIpAddress),
    PublicIp: __expectString(output.PublicIp),
    PublicIpv4Pool: __expectString(output.PublicIpv4Pool),
  } as any;
};

const deserializeAws_restJson1AwsEc2InstanceDetails = (output: any, context: __SerdeContext): AwsEc2InstanceDetails => {
  return {
    IamInstanceProfileArn: __expectString(output.IamInstanceProfileArn),
    ImageId: __expectString(output.ImageId),
    IpV4Addresses:
      output.IpV4Addresses != null ? deserializeAws_restJson1StringList(output.IpV4Addresses, context) : undefined,
    IpV6Addresses:
      output.IpV6Addresses != null ? deserializeAws_restJson1StringList(output.IpV6Addresses, context) : undefined,
    KeyName: __expectString(output.KeyName),
    LaunchedAt: __expectString(output.LaunchedAt),
    MetadataOptions:
      output.MetadataOptions != null
        ? deserializeAws_restJson1AwsEc2InstanceMetadataOptions(output.MetadataOptions, context)
        : undefined,
    NetworkInterfaces:
      output.NetworkInterfaces != null
        ? deserializeAws_restJson1AwsEc2InstanceNetworkInterfacesList(output.NetworkInterfaces, context)
        : undefined,
    SubnetId: __expectString(output.SubnetId),
    Type: __expectString(output.Type),
    VirtualizationType: __expectString(output.VirtualizationType),
    VpcId: __expectString(output.VpcId),
  } as any;
};

const deserializeAws_restJson1AwsEc2InstanceMetadataOptions = (
  output: any,
  context: __SerdeContext
): AwsEc2InstanceMetadataOptions => {
  return {
    HttpEndpoint: __expectString(output.HttpEndpoint),
    HttpProtocolIpv6: __expectString(output.HttpProtocolIpv6),
    HttpPutResponseHopLimit: __expectInt32(output.HttpPutResponseHopLimit),
    HttpTokens: __expectString(output.HttpTokens),
    InstanceMetadataTags: __expectString(output.InstanceMetadataTags),
  } as any;
};

const deserializeAws_restJson1AwsEc2InstanceNetworkInterfacesDetails = (
  output: any,
  context: __SerdeContext
): AwsEc2InstanceNetworkInterfacesDetails => {
  return {
    NetworkInterfaceId: __expectString(output.NetworkInterfaceId),
  } as any;
};

const deserializeAws_restJson1AwsEc2InstanceNetworkInterfacesList = (
  output: any,
  context: __SerdeContext
): AwsEc2InstanceNetworkInterfacesDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEc2InstanceNetworkInterfacesDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsEc2NetworkAclAssociation = (
  output: any,
  context: __SerdeContext
): AwsEc2NetworkAclAssociation => {
  return {
    NetworkAclAssociationId: __expectString(output.NetworkAclAssociationId),
    NetworkAclId: __expectString(output.NetworkAclId),
    SubnetId: __expectString(output.SubnetId),
  } as any;
};

const deserializeAws_restJson1AwsEc2NetworkAclAssociationList = (
  output: any,
  context: __SerdeContext
): AwsEc2NetworkAclAssociation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEc2NetworkAclAssociation(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsEc2NetworkAclDetails = (
  output: any,
  context: __SerdeContext
): AwsEc2NetworkAclDetails => {
  return {
    Associations:
      output.Associations != null
        ? deserializeAws_restJson1AwsEc2NetworkAclAssociationList(output.Associations, context)
        : undefined,
    Entries:
      output.Entries != null ? deserializeAws_restJson1AwsEc2NetworkAclEntryList(output.Entries, context) : undefined,
    IsDefault: __expectBoolean(output.IsDefault),
    NetworkAclId: __expectString(output.NetworkAclId),
    OwnerId: __expectString(output.OwnerId),
    VpcId: __expectString(output.VpcId),
  } as any;
};

const deserializeAws_restJson1AwsEc2NetworkAclEntry = (output: any, context: __SerdeContext): AwsEc2NetworkAclEntry => {
  return {
    CidrBlock: __expectString(output.CidrBlock),
    Egress: __expectBoolean(output.Egress),
    IcmpTypeCode:
      output.IcmpTypeCode != null ? deserializeAws_restJson1IcmpTypeCode(output.IcmpTypeCode, context) : undefined,
    Ipv6CidrBlock: __expectString(output.Ipv6CidrBlock),
    PortRange:
      output.PortRange != null ? deserializeAws_restJson1PortRangeFromTo(output.PortRange, context) : undefined,
    Protocol: __expectString(output.Protocol),
    RuleAction: __expectString(output.RuleAction),
    RuleNumber: __expectInt32(output.RuleNumber),
  } as any;
};

const deserializeAws_restJson1AwsEc2NetworkAclEntryList = (
  output: any,
  context: __SerdeContext
): AwsEc2NetworkAclEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEc2NetworkAclEntry(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsEc2NetworkInterfaceAttachment = (
  output: any,
  context: __SerdeContext
): AwsEc2NetworkInterfaceAttachment => {
  return {
    AttachTime: __expectString(output.AttachTime),
    AttachmentId: __expectString(output.AttachmentId),
    DeleteOnTermination: __expectBoolean(output.DeleteOnTermination),
    DeviceIndex: __expectInt32(output.DeviceIndex),
    InstanceId: __expectString(output.InstanceId),
    InstanceOwnerId: __expectString(output.InstanceOwnerId),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1AwsEc2NetworkInterfaceDetails = (
  output: any,
  context: __SerdeContext
): AwsEc2NetworkInterfaceDetails => {
  return {
    Attachment:
      output.Attachment != null
        ? deserializeAws_restJson1AwsEc2NetworkInterfaceAttachment(output.Attachment, context)
        : undefined,
    IpV6Addresses:
      output.IpV6Addresses != null
        ? deserializeAws_restJson1AwsEc2NetworkInterfaceIpV6AddressList(output.IpV6Addresses, context)
        : undefined,
    NetworkInterfaceId: __expectString(output.NetworkInterfaceId),
    PrivateIpAddresses:
      output.PrivateIpAddresses != null
        ? deserializeAws_restJson1AwsEc2NetworkInterfacePrivateIpAddressList(output.PrivateIpAddresses, context)
        : undefined,
    PublicDnsName: __expectString(output.PublicDnsName),
    PublicIp: __expectString(output.PublicIp),
    SecurityGroups:
      output.SecurityGroups != null
        ? deserializeAws_restJson1AwsEc2NetworkInterfaceSecurityGroupList(output.SecurityGroups, context)
        : undefined,
    SourceDestCheck: __expectBoolean(output.SourceDestCheck),
  } as any;
};

const deserializeAws_restJson1AwsEc2NetworkInterfaceIpV6AddressDetail = (
  output: any,
  context: __SerdeContext
): AwsEc2NetworkInterfaceIpV6AddressDetail => {
  return {
    IpV6Address: __expectString(output.IpV6Address),
  } as any;
};

const deserializeAws_restJson1AwsEc2NetworkInterfaceIpV6AddressList = (
  output: any,
  context: __SerdeContext
): AwsEc2NetworkInterfaceIpV6AddressDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEc2NetworkInterfaceIpV6AddressDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsEc2NetworkInterfacePrivateIpAddressDetail = (
  output: any,
  context: __SerdeContext
): AwsEc2NetworkInterfacePrivateIpAddressDetail => {
  return {
    PrivateDnsName: __expectString(output.PrivateDnsName),
    PrivateIpAddress: __expectString(output.PrivateIpAddress),
  } as any;
};

const deserializeAws_restJson1AwsEc2NetworkInterfacePrivateIpAddressList = (
  output: any,
  context: __SerdeContext
): AwsEc2NetworkInterfacePrivateIpAddressDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEc2NetworkInterfacePrivateIpAddressDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsEc2NetworkInterfaceSecurityGroup = (
  output: any,
  context: __SerdeContext
): AwsEc2NetworkInterfaceSecurityGroup => {
  return {
    GroupId: __expectString(output.GroupId),
    GroupName: __expectString(output.GroupName),
  } as any;
};

const deserializeAws_restJson1AwsEc2NetworkInterfaceSecurityGroupList = (
  output: any,
  context: __SerdeContext
): AwsEc2NetworkInterfaceSecurityGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEc2NetworkInterfaceSecurityGroup(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsEc2SecurityGroupDetails = (
  output: any,
  context: __SerdeContext
): AwsEc2SecurityGroupDetails => {
  return {
    GroupId: __expectString(output.GroupId),
    GroupName: __expectString(output.GroupName),
    IpPermissions:
      output.IpPermissions != null
        ? deserializeAws_restJson1AwsEc2SecurityGroupIpPermissionList(output.IpPermissions, context)
        : undefined,
    IpPermissionsEgress:
      output.IpPermissionsEgress != null
        ? deserializeAws_restJson1AwsEc2SecurityGroupIpPermissionList(output.IpPermissionsEgress, context)
        : undefined,
    OwnerId: __expectString(output.OwnerId),
    VpcId: __expectString(output.VpcId),
  } as any;
};

const deserializeAws_restJson1AwsEc2SecurityGroupIpPermission = (
  output: any,
  context: __SerdeContext
): AwsEc2SecurityGroupIpPermission => {
  return {
    FromPort: __expectInt32(output.FromPort),
    IpProtocol: __expectString(output.IpProtocol),
    IpRanges:
      output.IpRanges != null
        ? deserializeAws_restJson1AwsEc2SecurityGroupIpRangeList(output.IpRanges, context)
        : undefined,
    Ipv6Ranges:
      output.Ipv6Ranges != null
        ? deserializeAws_restJson1AwsEc2SecurityGroupIpv6RangeList(output.Ipv6Ranges, context)
        : undefined,
    PrefixListIds:
      output.PrefixListIds != null
        ? deserializeAws_restJson1AwsEc2SecurityGroupPrefixListIdList(output.PrefixListIds, context)
        : undefined,
    ToPort: __expectInt32(output.ToPort),
    UserIdGroupPairs:
      output.UserIdGroupPairs != null
        ? deserializeAws_restJson1AwsEc2SecurityGroupUserIdGroupPairList(output.UserIdGroupPairs, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsEc2SecurityGroupIpPermissionList = (
  output: any,
  context: __SerdeContext
): AwsEc2SecurityGroupIpPermission[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEc2SecurityGroupIpPermission(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsEc2SecurityGroupIpRange = (
  output: any,
  context: __SerdeContext
): AwsEc2SecurityGroupIpRange => {
  return {
    CidrIp: __expectString(output.CidrIp),
  } as any;
};

const deserializeAws_restJson1AwsEc2SecurityGroupIpRangeList = (
  output: any,
  context: __SerdeContext
): AwsEc2SecurityGroupIpRange[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEc2SecurityGroupIpRange(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsEc2SecurityGroupIpv6Range = (
  output: any,
  context: __SerdeContext
): AwsEc2SecurityGroupIpv6Range => {
  return {
    CidrIpv6: __expectString(output.CidrIpv6),
  } as any;
};

const deserializeAws_restJson1AwsEc2SecurityGroupIpv6RangeList = (
  output: any,
  context: __SerdeContext
): AwsEc2SecurityGroupIpv6Range[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEc2SecurityGroupIpv6Range(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsEc2SecurityGroupPrefixListId = (
  output: any,
  context: __SerdeContext
): AwsEc2SecurityGroupPrefixListId => {
  return {
    PrefixListId: __expectString(output.PrefixListId),
  } as any;
};

const deserializeAws_restJson1AwsEc2SecurityGroupPrefixListIdList = (
  output: any,
  context: __SerdeContext
): AwsEc2SecurityGroupPrefixListId[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEc2SecurityGroupPrefixListId(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsEc2SecurityGroupUserIdGroupPair = (
  output: any,
  context: __SerdeContext
): AwsEc2SecurityGroupUserIdGroupPair => {
  return {
    GroupId: __expectString(output.GroupId),
    GroupName: __expectString(output.GroupName),
    PeeringStatus: __expectString(output.PeeringStatus),
    UserId: __expectString(output.UserId),
    VpcId: __expectString(output.VpcId),
    VpcPeeringConnectionId: __expectString(output.VpcPeeringConnectionId),
  } as any;
};

const deserializeAws_restJson1AwsEc2SecurityGroupUserIdGroupPairList = (
  output: any,
  context: __SerdeContext
): AwsEc2SecurityGroupUserIdGroupPair[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEc2SecurityGroupUserIdGroupPair(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsEc2SubnetDetails = (output: any, context: __SerdeContext): AwsEc2SubnetDetails => {
  return {
    AssignIpv6AddressOnCreation: __expectBoolean(output.AssignIpv6AddressOnCreation),
    AvailabilityZone: __expectString(output.AvailabilityZone),
    AvailabilityZoneId: __expectString(output.AvailabilityZoneId),
    AvailableIpAddressCount: __expectInt32(output.AvailableIpAddressCount),
    CidrBlock: __expectString(output.CidrBlock),
    DefaultForAz: __expectBoolean(output.DefaultForAz),
    Ipv6CidrBlockAssociationSet:
      output.Ipv6CidrBlockAssociationSet != null
        ? deserializeAws_restJson1Ipv6CidrBlockAssociationList(output.Ipv6CidrBlockAssociationSet, context)
        : undefined,
    MapPublicIpOnLaunch: __expectBoolean(output.MapPublicIpOnLaunch),
    OwnerId: __expectString(output.OwnerId),
    State: __expectString(output.State),
    SubnetArn: __expectString(output.SubnetArn),
    SubnetId: __expectString(output.SubnetId),
    VpcId: __expectString(output.VpcId),
  } as any;
};

const deserializeAws_restJson1AwsEc2TransitGatewayDetails = (
  output: any,
  context: __SerdeContext
): AwsEc2TransitGatewayDetails => {
  return {
    AmazonSideAsn: __expectInt32(output.AmazonSideAsn),
    AssociationDefaultRouteTableId: __expectString(output.AssociationDefaultRouteTableId),
    AutoAcceptSharedAttachments: __expectString(output.AutoAcceptSharedAttachments),
    DefaultRouteTableAssociation: __expectString(output.DefaultRouteTableAssociation),
    DefaultRouteTablePropagation: __expectString(output.DefaultRouteTablePropagation),
    Description: __expectString(output.Description),
    DnsSupport: __expectString(output.DnsSupport),
    Id: __expectString(output.Id),
    MulticastSupport: __expectString(output.MulticastSupport),
    PropagationDefaultRouteTableId: __expectString(output.PropagationDefaultRouteTableId),
    TransitGatewayCidrBlocks:
      output.TransitGatewayCidrBlocks != null
        ? deserializeAws_restJson1NonEmptyStringList(output.TransitGatewayCidrBlocks, context)
        : undefined,
    VpnEcmpSupport: __expectString(output.VpnEcmpSupport),
  } as any;
};

const deserializeAws_restJson1AwsEc2VolumeAttachment = (
  output: any,
  context: __SerdeContext
): AwsEc2VolumeAttachment => {
  return {
    AttachTime: __expectString(output.AttachTime),
    DeleteOnTermination: __expectBoolean(output.DeleteOnTermination),
    InstanceId: __expectString(output.InstanceId),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1AwsEc2VolumeAttachmentList = (
  output: any,
  context: __SerdeContext
): AwsEc2VolumeAttachment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEc2VolumeAttachment(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsEc2VolumeDetails = (output: any, context: __SerdeContext): AwsEc2VolumeDetails => {
  return {
    Attachments:
      output.Attachments != null
        ? deserializeAws_restJson1AwsEc2VolumeAttachmentList(output.Attachments, context)
        : undefined,
    CreateTime: __expectString(output.CreateTime),
    DeviceName: __expectString(output.DeviceName),
    Encrypted: __expectBoolean(output.Encrypted),
    KmsKeyId: __expectString(output.KmsKeyId),
    Size: __expectInt32(output.Size),
    SnapshotId: __expectString(output.SnapshotId),
    Status: __expectString(output.Status),
    VolumeId: __expectString(output.VolumeId),
    VolumeScanStatus: __expectString(output.VolumeScanStatus),
    VolumeType: __expectString(output.VolumeType),
  } as any;
};

const deserializeAws_restJson1AwsEc2VpcDetails = (output: any, context: __SerdeContext): AwsEc2VpcDetails => {
  return {
    CidrBlockAssociationSet:
      output.CidrBlockAssociationSet != null
        ? deserializeAws_restJson1CidrBlockAssociationList(output.CidrBlockAssociationSet, context)
        : undefined,
    DhcpOptionsId: __expectString(output.DhcpOptionsId),
    Ipv6CidrBlockAssociationSet:
      output.Ipv6CidrBlockAssociationSet != null
        ? deserializeAws_restJson1Ipv6CidrBlockAssociationList(output.Ipv6CidrBlockAssociationSet, context)
        : undefined,
    State: __expectString(output.State),
  } as any;
};

const deserializeAws_restJson1AwsEc2VpcEndpointServiceDetails = (
  output: any,
  context: __SerdeContext
): AwsEc2VpcEndpointServiceDetails => {
  return {
    AcceptanceRequired: __expectBoolean(output.AcceptanceRequired),
    AvailabilityZones:
      output.AvailabilityZones != null
        ? deserializeAws_restJson1NonEmptyStringList(output.AvailabilityZones, context)
        : undefined,
    BaseEndpointDnsNames:
      output.BaseEndpointDnsNames != null
        ? deserializeAws_restJson1NonEmptyStringList(output.BaseEndpointDnsNames, context)
        : undefined,
    GatewayLoadBalancerArns:
      output.GatewayLoadBalancerArns != null
        ? deserializeAws_restJson1NonEmptyStringList(output.GatewayLoadBalancerArns, context)
        : undefined,
    ManagesVpcEndpoints: __expectBoolean(output.ManagesVpcEndpoints),
    NetworkLoadBalancerArns:
      output.NetworkLoadBalancerArns != null
        ? deserializeAws_restJson1NonEmptyStringList(output.NetworkLoadBalancerArns, context)
        : undefined,
    PrivateDnsName: __expectString(output.PrivateDnsName),
    ServiceId: __expectString(output.ServiceId),
    ServiceName: __expectString(output.ServiceName),
    ServiceState: __expectString(output.ServiceState),
    ServiceType:
      output.ServiceType != null
        ? deserializeAws_restJson1AwsEc2VpcEndpointServiceServiceTypeList(output.ServiceType, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsEc2VpcEndpointServiceServiceTypeDetails = (
  output: any,
  context: __SerdeContext
): AwsEc2VpcEndpointServiceServiceTypeDetails => {
  return {
    ServiceType: __expectString(output.ServiceType),
  } as any;
};

const deserializeAws_restJson1AwsEc2VpcEndpointServiceServiceTypeList = (
  output: any,
  context: __SerdeContext
): AwsEc2VpcEndpointServiceServiceTypeDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEc2VpcEndpointServiceServiceTypeDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsEc2VpcPeeringConnectionDetails = (
  output: any,
  context: __SerdeContext
): AwsEc2VpcPeeringConnectionDetails => {
  return {
    AccepterVpcInfo:
      output.AccepterVpcInfo != null
        ? deserializeAws_restJson1AwsEc2VpcPeeringConnectionVpcInfoDetails(output.AccepterVpcInfo, context)
        : undefined,
    ExpirationTime: __expectString(output.ExpirationTime),
    RequesterVpcInfo:
      output.RequesterVpcInfo != null
        ? deserializeAws_restJson1AwsEc2VpcPeeringConnectionVpcInfoDetails(output.RequesterVpcInfo, context)
        : undefined,
    Status:
      output.Status != null
        ? deserializeAws_restJson1AwsEc2VpcPeeringConnectionStatusDetails(output.Status, context)
        : undefined,
    VpcPeeringConnectionId: __expectString(output.VpcPeeringConnectionId),
  } as any;
};

const deserializeAws_restJson1AwsEc2VpcPeeringConnectionStatusDetails = (
  output: any,
  context: __SerdeContext
): AwsEc2VpcPeeringConnectionStatusDetails => {
  return {
    Code: __expectString(output.Code),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_restJson1AwsEc2VpcPeeringConnectionVpcInfoDetails = (
  output: any,
  context: __SerdeContext
): AwsEc2VpcPeeringConnectionVpcInfoDetails => {
  return {
    CidrBlock: __expectString(output.CidrBlock),
    CidrBlockSet:
      output.CidrBlockSet != null
        ? deserializeAws_restJson1VpcInfoCidrBlockSetList(output.CidrBlockSet, context)
        : undefined,
    Ipv6CidrBlockSet:
      output.Ipv6CidrBlockSet != null
        ? deserializeAws_restJson1VpcInfoIpv6CidrBlockSetList(output.Ipv6CidrBlockSet, context)
        : undefined,
    OwnerId: __expectString(output.OwnerId),
    PeeringOptions:
      output.PeeringOptions != null
        ? deserializeAws_restJson1VpcInfoPeeringOptionsDetails(output.PeeringOptions, context)
        : undefined,
    Region: __expectString(output.Region),
    VpcId: __expectString(output.VpcId),
  } as any;
};

const deserializeAws_restJson1AwsEc2VpnConnectionDetails = (
  output: any,
  context: __SerdeContext
): AwsEc2VpnConnectionDetails => {
  return {
    Category: __expectString(output.Category),
    CustomerGatewayConfiguration: __expectString(output.CustomerGatewayConfiguration),
    CustomerGatewayId: __expectString(output.CustomerGatewayId),
    Options:
      output.Options != null
        ? deserializeAws_restJson1AwsEc2VpnConnectionOptionsDetails(output.Options, context)
        : undefined,
    Routes:
      output.Routes != null ? deserializeAws_restJson1AwsEc2VpnConnectionRoutesList(output.Routes, context) : undefined,
    State: __expectString(output.State),
    TransitGatewayId: __expectString(output.TransitGatewayId),
    Type: __expectString(output.Type),
    VgwTelemetry:
      output.VgwTelemetry != null
        ? deserializeAws_restJson1AwsEc2VpnConnectionVgwTelemetryList(output.VgwTelemetry, context)
        : undefined,
    VpnConnectionId: __expectString(output.VpnConnectionId),
    VpnGatewayId: __expectString(output.VpnGatewayId),
  } as any;
};

const deserializeAws_restJson1AwsEc2VpnConnectionOptionsDetails = (
  output: any,
  context: __SerdeContext
): AwsEc2VpnConnectionOptionsDetails => {
  return {
    StaticRoutesOnly: __expectBoolean(output.StaticRoutesOnly),
    TunnelOptions:
      output.TunnelOptions != null
        ? deserializeAws_restJson1AwsEc2VpnConnectionOptionsTunnelOptionsList(output.TunnelOptions, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsEc2VpnConnectionOptionsTunnelOptionsDetails = (
  output: any,
  context: __SerdeContext
): AwsEc2VpnConnectionOptionsTunnelOptionsDetails => {
  return {
    DpdTimeoutSeconds: __expectInt32(output.DpdTimeoutSeconds),
    IkeVersions:
      output.IkeVersions != null ? deserializeAws_restJson1NonEmptyStringList(output.IkeVersions, context) : undefined,
    OutsideIpAddress: __expectString(output.OutsideIpAddress),
    Phase1DhGroupNumbers:
      output.Phase1DhGroupNumbers != null
        ? deserializeAws_restJson1IntegerList(output.Phase1DhGroupNumbers, context)
        : undefined,
    Phase1EncryptionAlgorithms:
      output.Phase1EncryptionAlgorithms != null
        ? deserializeAws_restJson1NonEmptyStringList(output.Phase1EncryptionAlgorithms, context)
        : undefined,
    Phase1IntegrityAlgorithms:
      output.Phase1IntegrityAlgorithms != null
        ? deserializeAws_restJson1NonEmptyStringList(output.Phase1IntegrityAlgorithms, context)
        : undefined,
    Phase1LifetimeSeconds: __expectInt32(output.Phase1LifetimeSeconds),
    Phase2DhGroupNumbers:
      output.Phase2DhGroupNumbers != null
        ? deserializeAws_restJson1IntegerList(output.Phase2DhGroupNumbers, context)
        : undefined,
    Phase2EncryptionAlgorithms:
      output.Phase2EncryptionAlgorithms != null
        ? deserializeAws_restJson1NonEmptyStringList(output.Phase2EncryptionAlgorithms, context)
        : undefined,
    Phase2IntegrityAlgorithms:
      output.Phase2IntegrityAlgorithms != null
        ? deserializeAws_restJson1NonEmptyStringList(output.Phase2IntegrityAlgorithms, context)
        : undefined,
    Phase2LifetimeSeconds: __expectInt32(output.Phase2LifetimeSeconds),
    PreSharedKey: __expectString(output.PreSharedKey),
    RekeyFuzzPercentage: __expectInt32(output.RekeyFuzzPercentage),
    RekeyMarginTimeSeconds: __expectInt32(output.RekeyMarginTimeSeconds),
    ReplayWindowSize: __expectInt32(output.ReplayWindowSize),
    TunnelInsideCidr: __expectString(output.TunnelInsideCidr),
  } as any;
};

const deserializeAws_restJson1AwsEc2VpnConnectionOptionsTunnelOptionsList = (
  output: any,
  context: __SerdeContext
): AwsEc2VpnConnectionOptionsTunnelOptionsDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEc2VpnConnectionOptionsTunnelOptionsDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsEc2VpnConnectionRoutesDetails = (
  output: any,
  context: __SerdeContext
): AwsEc2VpnConnectionRoutesDetails => {
  return {
    DestinationCidrBlock: __expectString(output.DestinationCidrBlock),
    State: __expectString(output.State),
  } as any;
};

const deserializeAws_restJson1AwsEc2VpnConnectionRoutesList = (
  output: any,
  context: __SerdeContext
): AwsEc2VpnConnectionRoutesDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEc2VpnConnectionRoutesDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsEc2VpnConnectionVgwTelemetryDetails = (
  output: any,
  context: __SerdeContext
): AwsEc2VpnConnectionVgwTelemetryDetails => {
  return {
    AcceptedRouteCount: __expectInt32(output.AcceptedRouteCount),
    CertificateArn: __expectString(output.CertificateArn),
    LastStatusChange: __expectString(output.LastStatusChange),
    OutsideIpAddress: __expectString(output.OutsideIpAddress),
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
  } as any;
};

const deserializeAws_restJson1AwsEc2VpnConnectionVgwTelemetryList = (
  output: any,
  context: __SerdeContext
): AwsEc2VpnConnectionVgwTelemetryDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEc2VpnConnectionVgwTelemetryDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsEcrContainerImageDetails = (
  output: any,
  context: __SerdeContext
): AwsEcrContainerImageDetails => {
  return {
    Architecture: __expectString(output.Architecture),
    ImageDigest: __expectString(output.ImageDigest),
    ImagePublishedAt: __expectString(output.ImagePublishedAt),
    ImageTags:
      output.ImageTags != null ? deserializeAws_restJson1NonEmptyStringList(output.ImageTags, context) : undefined,
    RegistryId: __expectString(output.RegistryId),
    RepositoryName: __expectString(output.RepositoryName),
  } as any;
};

const deserializeAws_restJson1AwsEcrRepositoryDetails = (
  output: any,
  context: __SerdeContext
): AwsEcrRepositoryDetails => {
  return {
    Arn: __expectString(output.Arn),
    ImageScanningConfiguration:
      output.ImageScanningConfiguration != null
        ? deserializeAws_restJson1AwsEcrRepositoryImageScanningConfigurationDetails(
            output.ImageScanningConfiguration,
            context
          )
        : undefined,
    ImageTagMutability: __expectString(output.ImageTagMutability),
    LifecyclePolicy:
      output.LifecyclePolicy != null
        ? deserializeAws_restJson1AwsEcrRepositoryLifecyclePolicyDetails(output.LifecyclePolicy, context)
        : undefined,
    RepositoryName: __expectString(output.RepositoryName),
    RepositoryPolicyText: __expectString(output.RepositoryPolicyText),
  } as any;
};

const deserializeAws_restJson1AwsEcrRepositoryImageScanningConfigurationDetails = (
  output: any,
  context: __SerdeContext
): AwsEcrRepositoryImageScanningConfigurationDetails => {
  return {
    ScanOnPush: __expectBoolean(output.ScanOnPush),
  } as any;
};

const deserializeAws_restJson1AwsEcrRepositoryLifecyclePolicyDetails = (
  output: any,
  context: __SerdeContext
): AwsEcrRepositoryLifecyclePolicyDetails => {
  return {
    LifecyclePolicyText: __expectString(output.LifecyclePolicyText),
    RegistryId: __expectString(output.RegistryId),
  } as any;
};

const deserializeAws_restJson1AwsEcsClusterClusterSettingsDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsClusterClusterSettingsDetails => {
  return {
    Name: __expectString(output.Name),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1AwsEcsClusterClusterSettingsList = (
  output: any,
  context: __SerdeContext
): AwsEcsClusterClusterSettingsDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEcsClusterClusterSettingsDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsEcsClusterConfigurationDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsClusterConfigurationDetails => {
  return {
    ExecuteCommandConfiguration:
      output.ExecuteCommandConfiguration != null
        ? deserializeAws_restJson1AwsEcsClusterConfigurationExecuteCommandConfigurationDetails(
            output.ExecuteCommandConfiguration,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsEcsClusterConfigurationExecuteCommandConfigurationDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsClusterConfigurationExecuteCommandConfigurationDetails => {
  return {
    KmsKeyId: __expectString(output.KmsKeyId),
    LogConfiguration:
      output.LogConfiguration != null
        ? deserializeAws_restJson1AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails(
            output.LogConfiguration,
            context
          )
        : undefined,
    Logging: __expectString(output.Logging),
  } as any;
};

const deserializeAws_restJson1AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsClusterConfigurationExecuteCommandConfigurationLogConfigurationDetails => {
  return {
    CloudWatchEncryptionEnabled: __expectBoolean(output.CloudWatchEncryptionEnabled),
    CloudWatchLogGroupName: __expectString(output.CloudWatchLogGroupName),
    S3BucketName: __expectString(output.S3BucketName),
    S3EncryptionEnabled: __expectBoolean(output.S3EncryptionEnabled),
    S3KeyPrefix: __expectString(output.S3KeyPrefix),
  } as any;
};

const deserializeAws_restJson1AwsEcsClusterDefaultCapacityProviderStrategyDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsClusterDefaultCapacityProviderStrategyDetails => {
  return {
    Base: __expectInt32(output.Base),
    CapacityProvider: __expectString(output.CapacityProvider),
    Weight: __expectInt32(output.Weight),
  } as any;
};

const deserializeAws_restJson1AwsEcsClusterDefaultCapacityProviderStrategyList = (
  output: any,
  context: __SerdeContext
): AwsEcsClusterDefaultCapacityProviderStrategyDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEcsClusterDefaultCapacityProviderStrategyDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsEcsClusterDetails = (output: any, context: __SerdeContext): AwsEcsClusterDetails => {
  return {
    ActiveServicesCount: __expectInt32(output.ActiveServicesCount),
    CapacityProviders:
      output.CapacityProviders != null
        ? deserializeAws_restJson1NonEmptyStringList(output.CapacityProviders, context)
        : undefined,
    ClusterArn: __expectString(output.ClusterArn),
    ClusterName: __expectString(output.ClusterName),
    ClusterSettings:
      output.ClusterSettings != null
        ? deserializeAws_restJson1AwsEcsClusterClusterSettingsList(output.ClusterSettings, context)
        : undefined,
    Configuration:
      output.Configuration != null
        ? deserializeAws_restJson1AwsEcsClusterConfigurationDetails(output.Configuration, context)
        : undefined,
    DefaultCapacityProviderStrategy:
      output.DefaultCapacityProviderStrategy != null
        ? deserializeAws_restJson1AwsEcsClusterDefaultCapacityProviderStrategyList(
            output.DefaultCapacityProviderStrategy,
            context
          )
        : undefined,
    RegisteredContainerInstancesCount: __expectInt32(output.RegisteredContainerInstancesCount),
    RunningTasksCount: __expectInt32(output.RunningTasksCount),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1AwsEcsContainerDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsContainerDetails => {
  return {
    Image: __expectString(output.Image),
    MountPoints:
      output.MountPoints != null ? deserializeAws_restJson1AwsMountPointList(output.MountPoints, context) : undefined,
    Name: __expectString(output.Name),
    Privileged: __expectBoolean(output.Privileged),
  } as any;
};

const deserializeAws_restJson1AwsEcsContainerDetailsList = (
  output: any,
  context: __SerdeContext
): AwsEcsContainerDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEcsContainerDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsEcsServiceCapacityProviderStrategyDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsServiceCapacityProviderStrategyDetails => {
  return {
    Base: __expectInt32(output.Base),
    CapacityProvider: __expectString(output.CapacityProvider),
    Weight: __expectInt32(output.Weight),
  } as any;
};

const deserializeAws_restJson1AwsEcsServiceCapacityProviderStrategyList = (
  output: any,
  context: __SerdeContext
): AwsEcsServiceCapacityProviderStrategyDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEcsServiceCapacityProviderStrategyDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails => {
  return {
    Enable: __expectBoolean(output.Enable),
    Rollback: __expectBoolean(output.Rollback),
  } as any;
};

const deserializeAws_restJson1AwsEcsServiceDeploymentConfigurationDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsServiceDeploymentConfigurationDetails => {
  return {
    DeploymentCircuitBreaker:
      output.DeploymentCircuitBreaker != null
        ? deserializeAws_restJson1AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails(
            output.DeploymentCircuitBreaker,
            context
          )
        : undefined,
    MaximumPercent: __expectInt32(output.MaximumPercent),
    MinimumHealthyPercent: __expectInt32(output.MinimumHealthyPercent),
  } as any;
};

const deserializeAws_restJson1AwsEcsServiceDeploymentControllerDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsServiceDeploymentControllerDetails => {
  return {
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1AwsEcsServiceDetails = (output: any, context: __SerdeContext): AwsEcsServiceDetails => {
  return {
    CapacityProviderStrategy:
      output.CapacityProviderStrategy != null
        ? deserializeAws_restJson1AwsEcsServiceCapacityProviderStrategyList(output.CapacityProviderStrategy, context)
        : undefined,
    Cluster: __expectString(output.Cluster),
    DeploymentConfiguration:
      output.DeploymentConfiguration != null
        ? deserializeAws_restJson1AwsEcsServiceDeploymentConfigurationDetails(output.DeploymentConfiguration, context)
        : undefined,
    DeploymentController:
      output.DeploymentController != null
        ? deserializeAws_restJson1AwsEcsServiceDeploymentControllerDetails(output.DeploymentController, context)
        : undefined,
    DesiredCount: __expectInt32(output.DesiredCount),
    EnableEcsManagedTags: __expectBoolean(output.EnableEcsManagedTags),
    EnableExecuteCommand: __expectBoolean(output.EnableExecuteCommand),
    HealthCheckGracePeriodSeconds: __expectInt32(output.HealthCheckGracePeriodSeconds),
    LaunchType: __expectString(output.LaunchType),
    LoadBalancers:
      output.LoadBalancers != null
        ? deserializeAws_restJson1AwsEcsServiceLoadBalancersList(output.LoadBalancers, context)
        : undefined,
    Name: __expectString(output.Name),
    NetworkConfiguration:
      output.NetworkConfiguration != null
        ? deserializeAws_restJson1AwsEcsServiceNetworkConfigurationDetails(output.NetworkConfiguration, context)
        : undefined,
    PlacementConstraints:
      output.PlacementConstraints != null
        ? deserializeAws_restJson1AwsEcsServicePlacementConstraintsList(output.PlacementConstraints, context)
        : undefined,
    PlacementStrategies:
      output.PlacementStrategies != null
        ? deserializeAws_restJson1AwsEcsServicePlacementStrategiesList(output.PlacementStrategies, context)
        : undefined,
    PlatformVersion: __expectString(output.PlatformVersion),
    PropagateTags: __expectString(output.PropagateTags),
    Role: __expectString(output.Role),
    SchedulingStrategy: __expectString(output.SchedulingStrategy),
    ServiceArn: __expectString(output.ServiceArn),
    ServiceName: __expectString(output.ServiceName),
    ServiceRegistries:
      output.ServiceRegistries != null
        ? deserializeAws_restJson1AwsEcsServiceServiceRegistriesList(output.ServiceRegistries, context)
        : undefined,
    TaskDefinition: __expectString(output.TaskDefinition),
  } as any;
};

const deserializeAws_restJson1AwsEcsServiceLoadBalancersDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsServiceLoadBalancersDetails => {
  return {
    ContainerName: __expectString(output.ContainerName),
    ContainerPort: __expectInt32(output.ContainerPort),
    LoadBalancerName: __expectString(output.LoadBalancerName),
    TargetGroupArn: __expectString(output.TargetGroupArn),
  } as any;
};

const deserializeAws_restJson1AwsEcsServiceLoadBalancersList = (
  output: any,
  context: __SerdeContext
): AwsEcsServiceLoadBalancersDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEcsServiceLoadBalancersDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails => {
  return {
    AssignPublicIp: __expectString(output.AssignPublicIp),
    SecurityGroups:
      output.SecurityGroups != null
        ? deserializeAws_restJson1NonEmptyStringList(output.SecurityGroups, context)
        : undefined,
    Subnets: output.Subnets != null ? deserializeAws_restJson1NonEmptyStringList(output.Subnets, context) : undefined,
  } as any;
};

const deserializeAws_restJson1AwsEcsServiceNetworkConfigurationDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsServiceNetworkConfigurationDetails => {
  return {
    AwsVpcConfiguration:
      output.AwsVpcConfiguration != null
        ? deserializeAws_restJson1AwsEcsServiceNetworkConfigurationAwsVpcConfigurationDetails(
            output.AwsVpcConfiguration,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsEcsServicePlacementConstraintsDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsServicePlacementConstraintsDetails => {
  return {
    Expression: __expectString(output.Expression),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1AwsEcsServicePlacementConstraintsList = (
  output: any,
  context: __SerdeContext
): AwsEcsServicePlacementConstraintsDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEcsServicePlacementConstraintsDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsEcsServicePlacementStrategiesDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsServicePlacementStrategiesDetails => {
  return {
    Field: __expectString(output.Field),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1AwsEcsServicePlacementStrategiesList = (
  output: any,
  context: __SerdeContext
): AwsEcsServicePlacementStrategiesDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEcsServicePlacementStrategiesDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsEcsServiceServiceRegistriesDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsServiceServiceRegistriesDetails => {
  return {
    ContainerName: __expectString(output.ContainerName),
    ContainerPort: __expectInt32(output.ContainerPort),
    Port: __expectInt32(output.Port),
    RegistryArn: __expectString(output.RegistryArn),
  } as any;
};

const deserializeAws_restJson1AwsEcsServiceServiceRegistriesList = (
  output: any,
  context: __SerdeContext
): AwsEcsServiceServiceRegistriesDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEcsServiceServiceRegistriesDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails => {
  return {
    Condition: __expectString(output.Condition),
    ContainerName: __expectString(output.ContainerName),
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsDependsOnList = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsDetails => {
  return {
    Command: output.Command != null ? deserializeAws_restJson1NonEmptyStringList(output.Command, context) : undefined,
    Cpu: __expectInt32(output.Cpu),
    DependsOn:
      output.DependsOn != null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsDependsOnList(output.DependsOn, context)
        : undefined,
    DisableNetworking: __expectBoolean(output.DisableNetworking),
    DnsSearchDomains:
      output.DnsSearchDomains != null
        ? deserializeAws_restJson1NonEmptyStringList(output.DnsSearchDomains, context)
        : undefined,
    DnsServers:
      output.DnsServers != null ? deserializeAws_restJson1NonEmptyStringList(output.DnsServers, context) : undefined,
    DockerLabels:
      output.DockerLabels != null ? deserializeAws_restJson1FieldMap(output.DockerLabels, context) : undefined,
    DockerSecurityOptions:
      output.DockerSecurityOptions != null
        ? deserializeAws_restJson1NonEmptyStringList(output.DockerSecurityOptions, context)
        : undefined,
    EntryPoint:
      output.EntryPoint != null ? deserializeAws_restJson1NonEmptyStringList(output.EntryPoint, context) : undefined,
    Environment:
      output.Environment != null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsEnvironmentList(output.Environment, context)
        : undefined,
    EnvironmentFiles:
      output.EnvironmentFiles != null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList(
            output.EnvironmentFiles,
            context
          )
        : undefined,
    Essential: __expectBoolean(output.Essential),
    ExtraHosts:
      output.ExtraHosts != null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsExtraHostsList(output.ExtraHosts, context)
        : undefined,
    FirelensConfiguration:
      output.FirelensConfiguration != null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails(
            output.FirelensConfiguration,
            context
          )
        : undefined,
    HealthCheck:
      output.HealthCheck != null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails(
            output.HealthCheck,
            context
          )
        : undefined,
    Hostname: __expectString(output.Hostname),
    Image: __expectString(output.Image),
    Interactive: __expectBoolean(output.Interactive),
    Links: output.Links != null ? deserializeAws_restJson1NonEmptyStringList(output.Links, context) : undefined,
    LinuxParameters:
      output.LinuxParameters != null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails(
            output.LinuxParameters,
            context
          )
        : undefined,
    LogConfiguration:
      output.LogConfiguration != null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails(
            output.LogConfiguration,
            context
          )
        : undefined,
    Memory: __expectInt32(output.Memory),
    MemoryReservation: __expectInt32(output.MemoryReservation),
    MountPoints:
      output.MountPoints != null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsMountPointsList(output.MountPoints, context)
        : undefined,
    Name: __expectString(output.Name),
    PortMappings:
      output.PortMappings != null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsPortMappingsList(output.PortMappings, context)
        : undefined,
    Privileged: __expectBoolean(output.Privileged),
    PseudoTerminal: __expectBoolean(output.PseudoTerminal),
    ReadonlyRootFilesystem: __expectBoolean(output.ReadonlyRootFilesystem),
    RepositoryCredentials:
      output.RepositoryCredentials != null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails(
            output.RepositoryCredentials,
            context
          )
        : undefined,
    ResourceRequirements:
      output.ResourceRequirements != null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsList(
            output.ResourceRequirements,
            context
          )
        : undefined,
    Secrets:
      output.Secrets != null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsSecretsList(output.Secrets, context)
        : undefined,
    StartTimeout: __expectInt32(output.StartTimeout),
    StopTimeout: __expectInt32(output.StopTimeout),
    SystemControls:
      output.SystemControls != null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsSystemControlsList(
            output.SystemControls,
            context
          )
        : undefined,
    Ulimits:
      output.Ulimits != null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsUlimitsList(output.Ulimits, context)
        : undefined,
    User: __expectString(output.User),
    VolumesFrom:
      output.VolumesFrom != null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsVolumesFromList(output.VolumesFrom, context)
        : undefined,
    WorkingDirectory: __expectString(output.WorkingDirectory),
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails => {
  return {
    Name: __expectString(output.Name),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails => {
  return {
    Type: __expectString(output.Type),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesList = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsEnvironmentList = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails => {
  return {
    Hostname: __expectString(output.Hostname),
    IpAddress: __expectString(output.IpAddress),
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsExtraHostsList = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsExtraHostsDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsFirelensConfigurationDetails => {
  return {
    Options: output.Options != null ? deserializeAws_restJson1FieldMap(output.Options, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsHealthCheckDetails => {
  return {
    Command: output.Command != null ? deserializeAws_restJson1NonEmptyStringList(output.Command, context) : undefined,
    Interval: __expectInt32(output.Interval),
    Retries: __expectInt32(output.Retries),
    StartPeriod: __expectInt32(output.StartPeriod),
    Timeout: __expectInt32(output.Timeout),
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails => {
  return {
    Add: output.Add != null ? deserializeAws_restJson1NonEmptyStringList(output.Add, context) : undefined,
    Drop: output.Drop != null ? deserializeAws_restJson1NonEmptyStringList(output.Drop, context) : undefined,
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails => {
  return {
    Capabilities:
      output.Capabilities != null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails(
            output.Capabilities,
            context
          )
        : undefined,
    Devices:
      output.Devices != null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList(
            output.Devices,
            context
          )
        : undefined,
    InitProcessEnabled: __expectBoolean(output.InitProcessEnabled),
    MaxSwap: __expectInt32(output.MaxSwap),
    SharedMemorySize: __expectInt32(output.SharedMemorySize),
    Swappiness: __expectInt32(output.Swappiness),
    Tmpfs:
      output.Tmpfs != null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList(
            output.Tmpfs,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails => {
  return {
    ContainerPath: __expectString(output.ContainerPath),
    HostPath: __expectString(output.HostPath),
    Permissions:
      output.Permissions != null ? deserializeAws_restJson1NonEmptyStringList(output.Permissions, context) : undefined,
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesList = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails(
        entry,
        context
      );
    });
  return retVal;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails => {
  return {
    ContainerPath: __expectString(output.ContainerPath),
    MountOptions:
      output.MountOptions != null
        ? deserializeAws_restJson1NonEmptyStringList(output.MountOptions, context)
        : undefined,
    Size: __expectInt32(output.Size),
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsList = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails(
        entry,
        context
      );
    });
  return retVal;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsList = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails => {
  return {
    LogDriver: __expectString(output.LogDriver),
    Options: output.Options != null ? deserializeAws_restJson1FieldMap(output.Options, context) : undefined,
    SecretOptions:
      output.SecretOptions != null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList(
            output.SecretOptions,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails => {
  return {
    Name: __expectString(output.Name),
    ValueFrom: __expectString(output.ValueFrom),
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsList = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails(
        entry,
        context
      );
    });
  return retVal;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails => {
  return {
    ContainerPath: __expectString(output.ContainerPath),
    ReadOnly: __expectBoolean(output.ReadOnly),
    SourceVolume: __expectString(output.SourceVolume),
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsMountPointsList = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsMountPointsDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails => {
  return {
    ContainerPort: __expectInt32(output.ContainerPort),
    HostPort: __expectInt32(output.HostPort),
    Protocol: __expectString(output.Protocol),
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsPortMappingsList = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsRepositoryCredentialsDetails => {
  return {
    CredentialsParameter: __expectString(output.CredentialsParameter),
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails => {
  return {
    Type: __expectString(output.Type),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsList = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsResourceRequirementsDetails(
        entry,
        context
      );
    });
  return retVal;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails => {
  return {
    Name: __expectString(output.Name),
    ValueFrom: __expectString(output.ValueFrom),
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsSecretsList = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails => {
  return {
    Namespace: __expectString(output.Namespace),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsSystemControlsList = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsSystemControlsDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails => {
  return {
    HardLimit: __expectInt32(output.HardLimit),
    Name: __expectString(output.Name),
    SoftLimit: __expectInt32(output.SoftLimit),
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsUlimitsList = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsUlimitsDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails => {
  return {
    ReadOnly: __expectBoolean(output.ReadOnly),
    SourceContainer: __expectString(output.SourceContainer),
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsVolumesFromList = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsVolumesFromDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionDetails => {
  return {
    ContainerDefinitions:
      output.ContainerDefinitions != null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionContainerDefinitionsList(output.ContainerDefinitions, context)
        : undefined,
    Cpu: __expectString(output.Cpu),
    ExecutionRoleArn: __expectString(output.ExecutionRoleArn),
    Family: __expectString(output.Family),
    InferenceAccelerators:
      output.InferenceAccelerators != null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionInferenceAcceleratorsList(output.InferenceAccelerators, context)
        : undefined,
    IpcMode: __expectString(output.IpcMode),
    Memory: __expectString(output.Memory),
    NetworkMode: __expectString(output.NetworkMode),
    PidMode: __expectString(output.PidMode),
    PlacementConstraints:
      output.PlacementConstraints != null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionPlacementConstraintsList(output.PlacementConstraints, context)
        : undefined,
    ProxyConfiguration:
      output.ProxyConfiguration != null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionProxyConfigurationDetails(output.ProxyConfiguration, context)
        : undefined,
    RequiresCompatibilities:
      output.RequiresCompatibilities != null
        ? deserializeAws_restJson1NonEmptyStringList(output.RequiresCompatibilities, context)
        : undefined,
    TaskRoleArn: __expectString(output.TaskRoleArn),
    Volumes:
      output.Volumes != null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionVolumesList(output.Volumes, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionInferenceAcceleratorsDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionInferenceAcceleratorsDetails => {
  return {
    DeviceName: __expectString(output.DeviceName),
    DeviceType: __expectString(output.DeviceType),
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionInferenceAcceleratorsList = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionInferenceAcceleratorsDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEcsTaskDefinitionInferenceAcceleratorsDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionPlacementConstraintsDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionPlacementConstraintsDetails => {
  return {
    Expression: __expectString(output.Expression),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionPlacementConstraintsList = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionPlacementConstraintsDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEcsTaskDefinitionPlacementConstraintsDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionProxyConfigurationDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionProxyConfigurationDetails => {
  return {
    ContainerName: __expectString(output.ContainerName),
    ProxyConfigurationProperties:
      output.ProxyConfigurationProperties != null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList(
            output.ProxyConfigurationProperties,
            context
          )
        : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails => {
  return {
    Name: __expectString(output.Name),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesList = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails(
        entry,
        context
      );
    });
  return retVal;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionVolumesDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionVolumesDetails => {
  return {
    DockerVolumeConfiguration:
      output.DockerVolumeConfiguration != null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails(
            output.DockerVolumeConfiguration,
            context
          )
        : undefined,
    EfsVolumeConfiguration:
      output.EfsVolumeConfiguration != null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails(
            output.EfsVolumeConfiguration,
            context
          )
        : undefined,
    Host:
      output.Host != null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionVolumesHostDetails(output.Host, context)
        : undefined,
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails => {
  return {
    Autoprovision: __expectBoolean(output.Autoprovision),
    Driver: __expectString(output.Driver),
    DriverOpts: output.DriverOpts != null ? deserializeAws_restJson1FieldMap(output.DriverOpts, context) : undefined,
    Labels: output.Labels != null ? deserializeAws_restJson1FieldMap(output.Labels, context) : undefined,
    Scope: __expectString(output.Scope),
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails => {
  return {
    AccessPointId: __expectString(output.AccessPointId),
    Iam: __expectString(output.Iam),
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails => {
  return {
    AuthorizationConfig:
      output.AuthorizationConfig != null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationAuthorizationConfigDetails(
            output.AuthorizationConfig,
            context
          )
        : undefined,
    FilesystemId: __expectString(output.FilesystemId),
    RootDirectory: __expectString(output.RootDirectory),
    TransitEncryption: __expectString(output.TransitEncryption),
    TransitEncryptionPort: __expectInt32(output.TransitEncryptionPort),
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionVolumesHostDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionVolumesHostDetails => {
  return {
    SourcePath: __expectString(output.SourcePath),
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskDefinitionVolumesList = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskDefinitionVolumesDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEcsTaskDefinitionVolumesDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsEcsTaskDetails = (output: any, context: __SerdeContext): AwsEcsTaskDetails => {
  return {
    ClusterArn: __expectString(output.ClusterArn),
    Containers:
      output.Containers != null
        ? deserializeAws_restJson1AwsEcsContainerDetailsList(output.Containers, context)
        : undefined,
    CreatedAt: __expectString(output.CreatedAt),
    Group: __expectString(output.Group),
    StartedAt: __expectString(output.StartedAt),
    StartedBy: __expectString(output.StartedBy),
    TaskDefinitionArn: __expectString(output.TaskDefinitionArn),
    Version: __expectString(output.Version),
    Volumes:
      output.Volumes != null ? deserializeAws_restJson1AwsEcsTaskVolumeDetailsList(output.Volumes, context) : undefined,
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskVolumeDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskVolumeDetails => {
  return {
    Host: output.Host != null ? deserializeAws_restJson1AwsEcsTaskVolumeHostDetails(output.Host, context) : undefined,
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1AwsEcsTaskVolumeDetailsList = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskVolumeDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEcsTaskVolumeDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsEcsTaskVolumeHostDetails = (
  output: any,
  context: __SerdeContext
): AwsEcsTaskVolumeHostDetails => {
  return {
    SourcePath: __expectString(output.SourcePath),
  } as any;
};

const deserializeAws_restJson1AwsEfsAccessPointDetails = (
  output: any,
  context: __SerdeContext
): AwsEfsAccessPointDetails => {
  return {
    AccessPointId: __expectString(output.AccessPointId),
    Arn: __expectString(output.Arn),
    ClientToken: __expectString(output.ClientToken),
    FileSystemId: __expectString(output.FileSystemId),
    PosixUser:
      output.PosixUser != null
        ? deserializeAws_restJson1AwsEfsAccessPointPosixUserDetails(output.PosixUser, context)
        : undefined,
    RootDirectory:
      output.RootDirectory != null
        ? deserializeAws_restJson1AwsEfsAccessPointRootDirectoryDetails(output.RootDirectory, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsEfsAccessPointPosixUserDetails = (
  output: any,
  context: __SerdeContext
): AwsEfsAccessPointPosixUserDetails => {
  return {
    Gid: __expectString(output.Gid),
    SecondaryGids:
      output.SecondaryGids != null
        ? deserializeAws_restJson1NonEmptyStringList(output.SecondaryGids, context)
        : undefined,
    Uid: __expectString(output.Uid),
  } as any;
};

const deserializeAws_restJson1AwsEfsAccessPointRootDirectoryCreationInfoDetails = (
  output: any,
  context: __SerdeContext
): AwsEfsAccessPointRootDirectoryCreationInfoDetails => {
  return {
    OwnerGid: __expectString(output.OwnerGid),
    OwnerUid: __expectString(output.OwnerUid),
    Permissions: __expectString(output.Permissions),
  } as any;
};

const deserializeAws_restJson1AwsEfsAccessPointRootDirectoryDetails = (
  output: any,
  context: __SerdeContext
): AwsEfsAccessPointRootDirectoryDetails => {
  return {
    CreationInfo:
      output.CreationInfo != null
        ? deserializeAws_restJson1AwsEfsAccessPointRootDirectoryCreationInfoDetails(output.CreationInfo, context)
        : undefined,
    Path: __expectString(output.Path),
  } as any;
};

const deserializeAws_restJson1AwsEksClusterDetails = (output: any, context: __SerdeContext): AwsEksClusterDetails => {
  return {
    Arn: __expectString(output.Arn),
    CertificateAuthorityData: __expectString(output.CertificateAuthorityData),
    ClusterStatus: __expectString(output.ClusterStatus),
    Endpoint: __expectString(output.Endpoint),
    Logging:
      output.Logging != null ? deserializeAws_restJson1AwsEksClusterLoggingDetails(output.Logging, context) : undefined,
    Name: __expectString(output.Name),
    ResourcesVpcConfig:
      output.ResourcesVpcConfig != null
        ? deserializeAws_restJson1AwsEksClusterResourcesVpcConfigDetails(output.ResourcesVpcConfig, context)
        : undefined,
    RoleArn: __expectString(output.RoleArn),
    Version: __expectString(output.Version),
  } as any;
};

const deserializeAws_restJson1AwsEksClusterLoggingClusterLoggingDetails = (
  output: any,
  context: __SerdeContext
): AwsEksClusterLoggingClusterLoggingDetails => {
  return {
    Enabled: __expectBoolean(output.Enabled),
    Types: output.Types != null ? deserializeAws_restJson1NonEmptyStringList(output.Types, context) : undefined,
  } as any;
};

const deserializeAws_restJson1AwsEksClusterLoggingClusterLoggingList = (
  output: any,
  context: __SerdeContext
): AwsEksClusterLoggingClusterLoggingDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsEksClusterLoggingClusterLoggingDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsEksClusterLoggingDetails = (
  output: any,
  context: __SerdeContext
): AwsEksClusterLoggingDetails => {
  return {
    ClusterLogging:
      output.ClusterLogging != null
        ? deserializeAws_restJson1AwsEksClusterLoggingClusterLoggingList(output.ClusterLogging, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsEksClusterResourcesVpcConfigDetails = (
  output: any,
  context: __SerdeContext
): AwsEksClusterResourcesVpcConfigDetails => {
  return {
    SecurityGroupIds:
      output.SecurityGroupIds != null
        ? deserializeAws_restJson1NonEmptyStringList(output.SecurityGroupIds, context)
        : undefined,
    SubnetIds:
      output.SubnetIds != null ? deserializeAws_restJson1NonEmptyStringList(output.SubnetIds, context) : undefined,
  } as any;
};

const deserializeAws_restJson1AwsElasticBeanstalkEnvironmentDetails = (
  output: any,
  context: __SerdeContext
): AwsElasticBeanstalkEnvironmentDetails => {
  return {
    ApplicationName: __expectString(output.ApplicationName),
    Cname: __expectString(output.Cname),
    DateCreated: __expectString(output.DateCreated),
    DateUpdated: __expectString(output.DateUpdated),
    Description: __expectString(output.Description),
    EndpointUrl: __expectString(output.EndpointUrl),
    EnvironmentArn: __expectString(output.EnvironmentArn),
    EnvironmentId: __expectString(output.EnvironmentId),
    EnvironmentLinks:
      output.EnvironmentLinks != null
        ? deserializeAws_restJson1AwsElasticBeanstalkEnvironmentEnvironmentLinks(output.EnvironmentLinks, context)
        : undefined,
    EnvironmentName: __expectString(output.EnvironmentName),
    OptionSettings:
      output.OptionSettings != null
        ? deserializeAws_restJson1AwsElasticBeanstalkEnvironmentOptionSettings(output.OptionSettings, context)
        : undefined,
    PlatformArn: __expectString(output.PlatformArn),
    SolutionStackName: __expectString(output.SolutionStackName),
    Status: __expectString(output.Status),
    Tier:
      output.Tier != null
        ? deserializeAws_restJson1AwsElasticBeanstalkEnvironmentTier(output.Tier, context)
        : undefined,
    VersionLabel: __expectString(output.VersionLabel),
  } as any;
};

const deserializeAws_restJson1AwsElasticBeanstalkEnvironmentEnvironmentLink = (
  output: any,
  context: __SerdeContext
): AwsElasticBeanstalkEnvironmentEnvironmentLink => {
  return {
    EnvironmentName: __expectString(output.EnvironmentName),
    LinkName: __expectString(output.LinkName),
  } as any;
};

const deserializeAws_restJson1AwsElasticBeanstalkEnvironmentEnvironmentLinks = (
  output: any,
  context: __SerdeContext
): AwsElasticBeanstalkEnvironmentEnvironmentLink[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsElasticBeanstalkEnvironmentEnvironmentLink(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsElasticBeanstalkEnvironmentOptionSetting = (
  output: any,
  context: __SerdeContext
): AwsElasticBeanstalkEnvironmentOptionSetting => {
  return {
    Namespace: __expectString(output.Namespace),
    OptionName: __expectString(output.OptionName),
    ResourceName: __expectString(output.ResourceName),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1AwsElasticBeanstalkEnvironmentOptionSettings = (
  output: any,
  context: __SerdeContext
): AwsElasticBeanstalkEnvironmentOptionSetting[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsElasticBeanstalkEnvironmentOptionSetting(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsElasticBeanstalkEnvironmentTier = (
  output: any,
  context: __SerdeContext
): AwsElasticBeanstalkEnvironmentTier => {
  return {
    Name: __expectString(output.Name),
    Type: __expectString(output.Type),
    Version: __expectString(output.Version),
  } as any;
};

const deserializeAws_restJson1AwsElasticsearchDomainDetails = (
  output: any,
  context: __SerdeContext
): AwsElasticsearchDomainDetails => {
  return {
    AccessPolicies: __expectString(output.AccessPolicies),
    DomainEndpointOptions:
      output.DomainEndpointOptions != null
        ? deserializeAws_restJson1AwsElasticsearchDomainDomainEndpointOptions(output.DomainEndpointOptions, context)
        : undefined,
    DomainId: __expectString(output.DomainId),
    DomainName: __expectString(output.DomainName),
    ElasticsearchClusterConfig:
      output.ElasticsearchClusterConfig != null
        ? deserializeAws_restJson1AwsElasticsearchDomainElasticsearchClusterConfigDetails(
            output.ElasticsearchClusterConfig,
            context
          )
        : undefined,
    ElasticsearchVersion: __expectString(output.ElasticsearchVersion),
    EncryptionAtRestOptions:
      output.EncryptionAtRestOptions != null
        ? deserializeAws_restJson1AwsElasticsearchDomainEncryptionAtRestOptions(output.EncryptionAtRestOptions, context)
        : undefined,
    Endpoint: __expectString(output.Endpoint),
    Endpoints: output.Endpoints != null ? deserializeAws_restJson1FieldMap(output.Endpoints, context) : undefined,
    LogPublishingOptions:
      output.LogPublishingOptions != null
        ? deserializeAws_restJson1AwsElasticsearchDomainLogPublishingOptions(output.LogPublishingOptions, context)
        : undefined,
    NodeToNodeEncryptionOptions:
      output.NodeToNodeEncryptionOptions != null
        ? deserializeAws_restJson1AwsElasticsearchDomainNodeToNodeEncryptionOptions(
            output.NodeToNodeEncryptionOptions,
            context
          )
        : undefined,
    ServiceSoftwareOptions:
      output.ServiceSoftwareOptions != null
        ? deserializeAws_restJson1AwsElasticsearchDomainServiceSoftwareOptions(output.ServiceSoftwareOptions, context)
        : undefined,
    VPCOptions:
      output.VPCOptions != null
        ? deserializeAws_restJson1AwsElasticsearchDomainVPCOptions(output.VPCOptions, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsElasticsearchDomainDomainEndpointOptions = (
  output: any,
  context: __SerdeContext
): AwsElasticsearchDomainDomainEndpointOptions => {
  return {
    EnforceHTTPS: __expectBoolean(output.EnforceHTTPS),
    TLSSecurityPolicy: __expectString(output.TLSSecurityPolicy),
  } as any;
};

const deserializeAws_restJson1AwsElasticsearchDomainElasticsearchClusterConfigDetails = (
  output: any,
  context: __SerdeContext
): AwsElasticsearchDomainElasticsearchClusterConfigDetails => {
  return {
    DedicatedMasterCount: __expectInt32(output.DedicatedMasterCount),
    DedicatedMasterEnabled: __expectBoolean(output.DedicatedMasterEnabled),
    DedicatedMasterType: __expectString(output.DedicatedMasterType),
    InstanceCount: __expectInt32(output.InstanceCount),
    InstanceType: __expectString(output.InstanceType),
    ZoneAwarenessConfig:
      output.ZoneAwarenessConfig != null
        ? deserializeAws_restJson1AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails(
            output.ZoneAwarenessConfig,
            context
          )
        : undefined,
    ZoneAwarenessEnabled: __expectBoolean(output.ZoneAwarenessEnabled),
  } as any;
};

const deserializeAws_restJson1AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails = (
  output: any,
  context: __SerdeContext
): AwsElasticsearchDomainElasticsearchClusterConfigZoneAwarenessConfigDetails => {
  return {
    AvailabilityZoneCount: __expectInt32(output.AvailabilityZoneCount),
  } as any;
};

const deserializeAws_restJson1AwsElasticsearchDomainEncryptionAtRestOptions = (
  output: any,
  context: __SerdeContext
): AwsElasticsearchDomainEncryptionAtRestOptions => {
  return {
    Enabled: __expectBoolean(output.Enabled),
    KmsKeyId: __expectString(output.KmsKeyId),
  } as any;
};

const deserializeAws_restJson1AwsElasticsearchDomainLogPublishingOptions = (
  output: any,
  context: __SerdeContext
): AwsElasticsearchDomainLogPublishingOptions => {
  return {
    AuditLogs:
      output.AuditLogs != null
        ? deserializeAws_restJson1AwsElasticsearchDomainLogPublishingOptionsLogConfig(output.AuditLogs, context)
        : undefined,
    IndexSlowLogs:
      output.IndexSlowLogs != null
        ? deserializeAws_restJson1AwsElasticsearchDomainLogPublishingOptionsLogConfig(output.IndexSlowLogs, context)
        : undefined,
    SearchSlowLogs:
      output.SearchSlowLogs != null
        ? deserializeAws_restJson1AwsElasticsearchDomainLogPublishingOptionsLogConfig(output.SearchSlowLogs, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsElasticsearchDomainLogPublishingOptionsLogConfig = (
  output: any,
  context: __SerdeContext
): AwsElasticsearchDomainLogPublishingOptionsLogConfig => {
  return {
    CloudWatchLogsLogGroupArn: __expectString(output.CloudWatchLogsLogGroupArn),
    Enabled: __expectBoolean(output.Enabled),
  } as any;
};

const deserializeAws_restJson1AwsElasticsearchDomainNodeToNodeEncryptionOptions = (
  output: any,
  context: __SerdeContext
): AwsElasticsearchDomainNodeToNodeEncryptionOptions => {
  return {
    Enabled: __expectBoolean(output.Enabled),
  } as any;
};

const deserializeAws_restJson1AwsElasticsearchDomainServiceSoftwareOptions = (
  output: any,
  context: __SerdeContext
): AwsElasticsearchDomainServiceSoftwareOptions => {
  return {
    AutomatedUpdateDate: __expectString(output.AutomatedUpdateDate),
    Cancellable: __expectBoolean(output.Cancellable),
    CurrentVersion: __expectString(output.CurrentVersion),
    Description: __expectString(output.Description),
    NewVersion: __expectString(output.NewVersion),
    UpdateAvailable: __expectBoolean(output.UpdateAvailable),
    UpdateStatus: __expectString(output.UpdateStatus),
  } as any;
};

const deserializeAws_restJson1AwsElasticsearchDomainVPCOptions = (
  output: any,
  context: __SerdeContext
): AwsElasticsearchDomainVPCOptions => {
  return {
    AvailabilityZones:
      output.AvailabilityZones != null
        ? deserializeAws_restJson1NonEmptyStringList(output.AvailabilityZones, context)
        : undefined,
    SecurityGroupIds:
      output.SecurityGroupIds != null
        ? deserializeAws_restJson1NonEmptyStringList(output.SecurityGroupIds, context)
        : undefined,
    SubnetIds:
      output.SubnetIds != null ? deserializeAws_restJson1NonEmptyStringList(output.SubnetIds, context) : undefined,
    VPCId: __expectString(output.VPCId),
  } as any;
};

const deserializeAws_restJson1AwsElbAppCookieStickinessPolicies = (
  output: any,
  context: __SerdeContext
): AwsElbAppCookieStickinessPolicy[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsElbAppCookieStickinessPolicy(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsElbAppCookieStickinessPolicy = (
  output: any,
  context: __SerdeContext
): AwsElbAppCookieStickinessPolicy => {
  return {
    CookieName: __expectString(output.CookieName),
    PolicyName: __expectString(output.PolicyName),
  } as any;
};

const deserializeAws_restJson1AwsElbLbCookieStickinessPolicies = (
  output: any,
  context: __SerdeContext
): AwsElbLbCookieStickinessPolicy[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsElbLbCookieStickinessPolicy(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsElbLbCookieStickinessPolicy = (
  output: any,
  context: __SerdeContext
): AwsElbLbCookieStickinessPolicy => {
  return {
    CookieExpirationPeriod: __expectLong(output.CookieExpirationPeriod),
    PolicyName: __expectString(output.PolicyName),
  } as any;
};

const deserializeAws_restJson1AwsElbLoadBalancerAccessLog = (
  output: any,
  context: __SerdeContext
): AwsElbLoadBalancerAccessLog => {
  return {
    EmitInterval: __expectInt32(output.EmitInterval),
    Enabled: __expectBoolean(output.Enabled),
    S3BucketName: __expectString(output.S3BucketName),
    S3BucketPrefix: __expectString(output.S3BucketPrefix),
  } as any;
};

const deserializeAws_restJson1AwsElbLoadBalancerAdditionalAttribute = (
  output: any,
  context: __SerdeContext
): AwsElbLoadBalancerAdditionalAttribute => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1AwsElbLoadBalancerAdditionalAttributeList = (
  output: any,
  context: __SerdeContext
): AwsElbLoadBalancerAdditionalAttribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsElbLoadBalancerAdditionalAttribute(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsElbLoadBalancerAttributes = (
  output: any,
  context: __SerdeContext
): AwsElbLoadBalancerAttributes => {
  return {
    AccessLog:
      output.AccessLog != null
        ? deserializeAws_restJson1AwsElbLoadBalancerAccessLog(output.AccessLog, context)
        : undefined,
    AdditionalAttributes:
      output.AdditionalAttributes != null
        ? deserializeAws_restJson1AwsElbLoadBalancerAdditionalAttributeList(output.AdditionalAttributes, context)
        : undefined,
    ConnectionDraining:
      output.ConnectionDraining != null
        ? deserializeAws_restJson1AwsElbLoadBalancerConnectionDraining(output.ConnectionDraining, context)
        : undefined,
    ConnectionSettings:
      output.ConnectionSettings != null
        ? deserializeAws_restJson1AwsElbLoadBalancerConnectionSettings(output.ConnectionSettings, context)
        : undefined,
    CrossZoneLoadBalancing:
      output.CrossZoneLoadBalancing != null
        ? deserializeAws_restJson1AwsElbLoadBalancerCrossZoneLoadBalancing(output.CrossZoneLoadBalancing, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsElbLoadBalancerBackendServerDescription = (
  output: any,
  context: __SerdeContext
): AwsElbLoadBalancerBackendServerDescription => {
  return {
    InstancePort: __expectInt32(output.InstancePort),
    PolicyNames:
      output.PolicyNames != null ? deserializeAws_restJson1StringList(output.PolicyNames, context) : undefined,
  } as any;
};

const deserializeAws_restJson1AwsElbLoadBalancerBackendServerDescriptions = (
  output: any,
  context: __SerdeContext
): AwsElbLoadBalancerBackendServerDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsElbLoadBalancerBackendServerDescription(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsElbLoadBalancerConnectionDraining = (
  output: any,
  context: __SerdeContext
): AwsElbLoadBalancerConnectionDraining => {
  return {
    Enabled: __expectBoolean(output.Enabled),
    Timeout: __expectInt32(output.Timeout),
  } as any;
};

const deserializeAws_restJson1AwsElbLoadBalancerConnectionSettings = (
  output: any,
  context: __SerdeContext
): AwsElbLoadBalancerConnectionSettings => {
  return {
    IdleTimeout: __expectInt32(output.IdleTimeout),
  } as any;
};

const deserializeAws_restJson1AwsElbLoadBalancerCrossZoneLoadBalancing = (
  output: any,
  context: __SerdeContext
): AwsElbLoadBalancerCrossZoneLoadBalancing => {
  return {
    Enabled: __expectBoolean(output.Enabled),
  } as any;
};

const deserializeAws_restJson1AwsElbLoadBalancerDetails = (
  output: any,
  context: __SerdeContext
): AwsElbLoadBalancerDetails => {
  return {
    AvailabilityZones:
      output.AvailabilityZones != null
        ? deserializeAws_restJson1StringList(output.AvailabilityZones, context)
        : undefined,
    BackendServerDescriptions:
      output.BackendServerDescriptions != null
        ? deserializeAws_restJson1AwsElbLoadBalancerBackendServerDescriptions(output.BackendServerDescriptions, context)
        : undefined,
    CanonicalHostedZoneName: __expectString(output.CanonicalHostedZoneName),
    CanonicalHostedZoneNameID: __expectString(output.CanonicalHostedZoneNameID),
    CreatedTime: __expectString(output.CreatedTime),
    DnsName: __expectString(output.DnsName),
    HealthCheck:
      output.HealthCheck != null
        ? deserializeAws_restJson1AwsElbLoadBalancerHealthCheck(output.HealthCheck, context)
        : undefined,
    Instances:
      output.Instances != null
        ? deserializeAws_restJson1AwsElbLoadBalancerInstances(output.Instances, context)
        : undefined,
    ListenerDescriptions:
      output.ListenerDescriptions != null
        ? deserializeAws_restJson1AwsElbLoadBalancerListenerDescriptions(output.ListenerDescriptions, context)
        : undefined,
    LoadBalancerAttributes:
      output.LoadBalancerAttributes != null
        ? deserializeAws_restJson1AwsElbLoadBalancerAttributes(output.LoadBalancerAttributes, context)
        : undefined,
    LoadBalancerName: __expectString(output.LoadBalancerName),
    Policies:
      output.Policies != null
        ? deserializeAws_restJson1AwsElbLoadBalancerPolicies(output.Policies, context)
        : undefined,
    Scheme: __expectString(output.Scheme),
    SecurityGroups:
      output.SecurityGroups != null ? deserializeAws_restJson1StringList(output.SecurityGroups, context) : undefined,
    SourceSecurityGroup:
      output.SourceSecurityGroup != null
        ? deserializeAws_restJson1AwsElbLoadBalancerSourceSecurityGroup(output.SourceSecurityGroup, context)
        : undefined,
    Subnets: output.Subnets != null ? deserializeAws_restJson1StringList(output.Subnets, context) : undefined,
    VpcId: __expectString(output.VpcId),
  } as any;
};

const deserializeAws_restJson1AwsElbLoadBalancerHealthCheck = (
  output: any,
  context: __SerdeContext
): AwsElbLoadBalancerHealthCheck => {
  return {
    HealthyThreshold: __expectInt32(output.HealthyThreshold),
    Interval: __expectInt32(output.Interval),
    Target: __expectString(output.Target),
    Timeout: __expectInt32(output.Timeout),
    UnhealthyThreshold: __expectInt32(output.UnhealthyThreshold),
  } as any;
};

const deserializeAws_restJson1AwsElbLoadBalancerInstance = (
  output: any,
  context: __SerdeContext
): AwsElbLoadBalancerInstance => {
  return {
    InstanceId: __expectString(output.InstanceId),
  } as any;
};

const deserializeAws_restJson1AwsElbLoadBalancerInstances = (
  output: any,
  context: __SerdeContext
): AwsElbLoadBalancerInstance[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsElbLoadBalancerInstance(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsElbLoadBalancerListener = (
  output: any,
  context: __SerdeContext
): AwsElbLoadBalancerListener => {
  return {
    InstancePort: __expectInt32(output.InstancePort),
    InstanceProtocol: __expectString(output.InstanceProtocol),
    LoadBalancerPort: __expectInt32(output.LoadBalancerPort),
    Protocol: __expectString(output.Protocol),
    SslCertificateId: __expectString(output.SslCertificateId),
  } as any;
};

const deserializeAws_restJson1AwsElbLoadBalancerListenerDescription = (
  output: any,
  context: __SerdeContext
): AwsElbLoadBalancerListenerDescription => {
  return {
    Listener:
      output.Listener != null
        ? deserializeAws_restJson1AwsElbLoadBalancerListener(output.Listener, context)
        : undefined,
    PolicyNames:
      output.PolicyNames != null ? deserializeAws_restJson1StringList(output.PolicyNames, context) : undefined,
  } as any;
};

const deserializeAws_restJson1AwsElbLoadBalancerListenerDescriptions = (
  output: any,
  context: __SerdeContext
): AwsElbLoadBalancerListenerDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsElbLoadBalancerListenerDescription(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsElbLoadBalancerPolicies = (
  output: any,
  context: __SerdeContext
): AwsElbLoadBalancerPolicies => {
  return {
    AppCookieStickinessPolicies:
      output.AppCookieStickinessPolicies != null
        ? deserializeAws_restJson1AwsElbAppCookieStickinessPolicies(output.AppCookieStickinessPolicies, context)
        : undefined,
    LbCookieStickinessPolicies:
      output.LbCookieStickinessPolicies != null
        ? deserializeAws_restJson1AwsElbLbCookieStickinessPolicies(output.LbCookieStickinessPolicies, context)
        : undefined,
    OtherPolicies:
      output.OtherPolicies != null ? deserializeAws_restJson1StringList(output.OtherPolicies, context) : undefined,
  } as any;
};

const deserializeAws_restJson1AwsElbLoadBalancerSourceSecurityGroup = (
  output: any,
  context: __SerdeContext
): AwsElbLoadBalancerSourceSecurityGroup => {
  return {
    GroupName: __expectString(output.GroupName),
    OwnerAlias: __expectString(output.OwnerAlias),
  } as any;
};

const deserializeAws_restJson1AwsElbv2LoadBalancerAttribute = (
  output: any,
  context: __SerdeContext
): AwsElbv2LoadBalancerAttribute => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1AwsElbv2LoadBalancerAttributes = (
  output: any,
  context: __SerdeContext
): AwsElbv2LoadBalancerAttribute[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsElbv2LoadBalancerAttribute(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsElbv2LoadBalancerDetails = (
  output: any,
  context: __SerdeContext
): AwsElbv2LoadBalancerDetails => {
  return {
    AvailabilityZones:
      output.AvailabilityZones != null
        ? deserializeAws_restJson1AvailabilityZones(output.AvailabilityZones, context)
        : undefined,
    CanonicalHostedZoneId: __expectString(output.CanonicalHostedZoneId),
    CreatedTime: __expectString(output.CreatedTime),
    DNSName: __expectString(output.DNSName),
    IpAddressType: __expectString(output.IpAddressType),
    LoadBalancerAttributes:
      output.LoadBalancerAttributes != null
        ? deserializeAws_restJson1AwsElbv2LoadBalancerAttributes(output.LoadBalancerAttributes, context)
        : undefined,
    Scheme: __expectString(output.Scheme),
    SecurityGroups:
      output.SecurityGroups != null
        ? deserializeAws_restJson1SecurityGroups(output.SecurityGroups, context)
        : undefined,
    State: output.State != null ? deserializeAws_restJson1LoadBalancerState(output.State, context) : undefined,
    Type: __expectString(output.Type),
    VpcId: __expectString(output.VpcId),
  } as any;
};

const deserializeAws_restJson1AwsIamAccessKeyDetails = (
  output: any,
  context: __SerdeContext
): AwsIamAccessKeyDetails => {
  return {
    AccessKeyId: __expectString(output.AccessKeyId),
    AccountId: __expectString(output.AccountId),
    CreatedAt: __expectString(output.CreatedAt),
    PrincipalId: __expectString(output.PrincipalId),
    PrincipalName: __expectString(output.PrincipalName),
    PrincipalType: __expectString(output.PrincipalType),
    SessionContext:
      output.SessionContext != null
        ? deserializeAws_restJson1AwsIamAccessKeySessionContext(output.SessionContext, context)
        : undefined,
    Status: __expectString(output.Status),
    UserName: __expectString(output.UserName),
  } as any;
};

const deserializeAws_restJson1AwsIamAccessKeySessionContext = (
  output: any,
  context: __SerdeContext
): AwsIamAccessKeySessionContext => {
  return {
    Attributes:
      output.Attributes != null
        ? deserializeAws_restJson1AwsIamAccessKeySessionContextAttributes(output.Attributes, context)
        : undefined,
    SessionIssuer:
      output.SessionIssuer != null
        ? deserializeAws_restJson1AwsIamAccessKeySessionContextSessionIssuer(output.SessionIssuer, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsIamAccessKeySessionContextAttributes = (
  output: any,
  context: __SerdeContext
): AwsIamAccessKeySessionContextAttributes => {
  return {
    CreationDate: __expectString(output.CreationDate),
    MfaAuthenticated: __expectBoolean(output.MfaAuthenticated),
  } as any;
};

const deserializeAws_restJson1AwsIamAccessKeySessionContextSessionIssuer = (
  output: any,
  context: __SerdeContext
): AwsIamAccessKeySessionContextSessionIssuer => {
  return {
    AccountId: __expectString(output.AccountId),
    Arn: __expectString(output.Arn),
    PrincipalId: __expectString(output.PrincipalId),
    Type: __expectString(output.Type),
    UserName: __expectString(output.UserName),
  } as any;
};

const deserializeAws_restJson1AwsIamAttachedManagedPolicy = (
  output: any,
  context: __SerdeContext
): AwsIamAttachedManagedPolicy => {
  return {
    PolicyArn: __expectString(output.PolicyArn),
    PolicyName: __expectString(output.PolicyName),
  } as any;
};

const deserializeAws_restJson1AwsIamAttachedManagedPolicyList = (
  output: any,
  context: __SerdeContext
): AwsIamAttachedManagedPolicy[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsIamAttachedManagedPolicy(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsIamGroupDetails = (output: any, context: __SerdeContext): AwsIamGroupDetails => {
  return {
    AttachedManagedPolicies:
      output.AttachedManagedPolicies != null
        ? deserializeAws_restJson1AwsIamAttachedManagedPolicyList(output.AttachedManagedPolicies, context)
        : undefined,
    CreateDate: __expectString(output.CreateDate),
    GroupId: __expectString(output.GroupId),
    GroupName: __expectString(output.GroupName),
    GroupPolicyList:
      output.GroupPolicyList != null
        ? deserializeAws_restJson1AwsIamGroupPolicyList(output.GroupPolicyList, context)
        : undefined,
    Path: __expectString(output.Path),
  } as any;
};

const deserializeAws_restJson1AwsIamGroupPolicy = (output: any, context: __SerdeContext): AwsIamGroupPolicy => {
  return {
    PolicyName: __expectString(output.PolicyName),
  } as any;
};

const deserializeAws_restJson1AwsIamGroupPolicyList = (output: any, context: __SerdeContext): AwsIamGroupPolicy[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsIamGroupPolicy(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsIamInstanceProfile = (output: any, context: __SerdeContext): AwsIamInstanceProfile => {
  return {
    Arn: __expectString(output.Arn),
    CreateDate: __expectString(output.CreateDate),
    InstanceProfileId: __expectString(output.InstanceProfileId),
    InstanceProfileName: __expectString(output.InstanceProfileName),
    Path: __expectString(output.Path),
    Roles: output.Roles != null ? deserializeAws_restJson1AwsIamInstanceProfileRoles(output.Roles, context) : undefined,
  } as any;
};

const deserializeAws_restJson1AwsIamInstanceProfileList = (
  output: any,
  context: __SerdeContext
): AwsIamInstanceProfile[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsIamInstanceProfile(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsIamInstanceProfileRole = (
  output: any,
  context: __SerdeContext
): AwsIamInstanceProfileRole => {
  return {
    Arn: __expectString(output.Arn),
    AssumeRolePolicyDocument: __expectString(output.AssumeRolePolicyDocument),
    CreateDate: __expectString(output.CreateDate),
    Path: __expectString(output.Path),
    RoleId: __expectString(output.RoleId),
    RoleName: __expectString(output.RoleName),
  } as any;
};

const deserializeAws_restJson1AwsIamInstanceProfileRoles = (
  output: any,
  context: __SerdeContext
): AwsIamInstanceProfileRole[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsIamInstanceProfileRole(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsIamPermissionsBoundary = (
  output: any,
  context: __SerdeContext
): AwsIamPermissionsBoundary => {
  return {
    PermissionsBoundaryArn: __expectString(output.PermissionsBoundaryArn),
    PermissionsBoundaryType: __expectString(output.PermissionsBoundaryType),
  } as any;
};

const deserializeAws_restJson1AwsIamPolicyDetails = (output: any, context: __SerdeContext): AwsIamPolicyDetails => {
  return {
    AttachmentCount: __expectInt32(output.AttachmentCount),
    CreateDate: __expectString(output.CreateDate),
    DefaultVersionId: __expectString(output.DefaultVersionId),
    Description: __expectString(output.Description),
    IsAttachable: __expectBoolean(output.IsAttachable),
    Path: __expectString(output.Path),
    PermissionsBoundaryUsageCount: __expectInt32(output.PermissionsBoundaryUsageCount),
    PolicyId: __expectString(output.PolicyId),
    PolicyName: __expectString(output.PolicyName),
    PolicyVersionList:
      output.PolicyVersionList != null
        ? deserializeAws_restJson1AwsIamPolicyVersionList(output.PolicyVersionList, context)
        : undefined,
    UpdateDate: __expectString(output.UpdateDate),
  } as any;
};

const deserializeAws_restJson1AwsIamPolicyVersion = (output: any, context: __SerdeContext): AwsIamPolicyVersion => {
  return {
    CreateDate: __expectString(output.CreateDate),
    IsDefaultVersion: __expectBoolean(output.IsDefaultVersion),
    VersionId: __expectString(output.VersionId),
  } as any;
};

const deserializeAws_restJson1AwsIamPolicyVersionList = (
  output: any,
  context: __SerdeContext
): AwsIamPolicyVersion[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsIamPolicyVersion(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsIamRoleDetails = (output: any, context: __SerdeContext): AwsIamRoleDetails => {
  return {
    AssumeRolePolicyDocument: __expectString(output.AssumeRolePolicyDocument),
    AttachedManagedPolicies:
      output.AttachedManagedPolicies != null
        ? deserializeAws_restJson1AwsIamAttachedManagedPolicyList(output.AttachedManagedPolicies, context)
        : undefined,
    CreateDate: __expectString(output.CreateDate),
    InstanceProfileList:
      output.InstanceProfileList != null
        ? deserializeAws_restJson1AwsIamInstanceProfileList(output.InstanceProfileList, context)
        : undefined,
    MaxSessionDuration: __expectInt32(output.MaxSessionDuration),
    Path: __expectString(output.Path),
    PermissionsBoundary:
      output.PermissionsBoundary != null
        ? deserializeAws_restJson1AwsIamPermissionsBoundary(output.PermissionsBoundary, context)
        : undefined,
    RoleId: __expectString(output.RoleId),
    RoleName: __expectString(output.RoleName),
    RolePolicyList:
      output.RolePolicyList != null
        ? deserializeAws_restJson1AwsIamRolePolicyList(output.RolePolicyList, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsIamRolePolicy = (output: any, context: __SerdeContext): AwsIamRolePolicy => {
  return {
    PolicyName: __expectString(output.PolicyName),
  } as any;
};

const deserializeAws_restJson1AwsIamRolePolicyList = (output: any, context: __SerdeContext): AwsIamRolePolicy[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsIamRolePolicy(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsIamUserDetails = (output: any, context: __SerdeContext): AwsIamUserDetails => {
  return {
    AttachedManagedPolicies:
      output.AttachedManagedPolicies != null
        ? deserializeAws_restJson1AwsIamAttachedManagedPolicyList(output.AttachedManagedPolicies, context)
        : undefined,
    CreateDate: __expectString(output.CreateDate),
    GroupList: output.GroupList != null ? deserializeAws_restJson1StringList(output.GroupList, context) : undefined,
    Path: __expectString(output.Path),
    PermissionsBoundary:
      output.PermissionsBoundary != null
        ? deserializeAws_restJson1AwsIamPermissionsBoundary(output.PermissionsBoundary, context)
        : undefined,
    UserId: __expectString(output.UserId),
    UserName: __expectString(output.UserName),
    UserPolicyList:
      output.UserPolicyList != null
        ? deserializeAws_restJson1AwsIamUserPolicyList(output.UserPolicyList, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsIamUserPolicy = (output: any, context: __SerdeContext): AwsIamUserPolicy => {
  return {
    PolicyName: __expectString(output.PolicyName),
  } as any;
};

const deserializeAws_restJson1AwsIamUserPolicyList = (output: any, context: __SerdeContext): AwsIamUserPolicy[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsIamUserPolicy(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsKinesisStreamDetails = (
  output: any,
  context: __SerdeContext
): AwsKinesisStreamDetails => {
  return {
    Arn: __expectString(output.Arn),
    Name: __expectString(output.Name),
    RetentionPeriodHours: __expectInt32(output.RetentionPeriodHours),
    ShardCount: __expectInt32(output.ShardCount),
    StreamEncryption:
      output.StreamEncryption != null
        ? deserializeAws_restJson1AwsKinesisStreamStreamEncryptionDetails(output.StreamEncryption, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsKinesisStreamStreamEncryptionDetails = (
  output: any,
  context: __SerdeContext
): AwsKinesisStreamStreamEncryptionDetails => {
  return {
    EncryptionType: __expectString(output.EncryptionType),
    KeyId: __expectString(output.KeyId),
  } as any;
};

const deserializeAws_restJson1AwsKmsKeyDetails = (output: any, context: __SerdeContext): AwsKmsKeyDetails => {
  return {
    AWSAccountId: __expectString(output.AWSAccountId),
    CreationDate: __limitedParseDouble(output.CreationDate),
    Description: __expectString(output.Description),
    KeyId: __expectString(output.KeyId),
    KeyManager: __expectString(output.KeyManager),
    KeyRotationStatus: __expectBoolean(output.KeyRotationStatus),
    KeyState: __expectString(output.KeyState),
    Origin: __expectString(output.Origin),
  } as any;
};

const deserializeAws_restJson1AwsLambdaFunctionCode = (output: any, context: __SerdeContext): AwsLambdaFunctionCode => {
  return {
    S3Bucket: __expectString(output.S3Bucket),
    S3Key: __expectString(output.S3Key),
    S3ObjectVersion: __expectString(output.S3ObjectVersion),
    ZipFile: __expectString(output.ZipFile),
  } as any;
};

const deserializeAws_restJson1AwsLambdaFunctionDeadLetterConfig = (
  output: any,
  context: __SerdeContext
): AwsLambdaFunctionDeadLetterConfig => {
  return {
    TargetArn: __expectString(output.TargetArn),
  } as any;
};

const deserializeAws_restJson1AwsLambdaFunctionDetails = (
  output: any,
  context: __SerdeContext
): AwsLambdaFunctionDetails => {
  return {
    Code: output.Code != null ? deserializeAws_restJson1AwsLambdaFunctionCode(output.Code, context) : undefined,
    CodeSha256: __expectString(output.CodeSha256),
    DeadLetterConfig:
      output.DeadLetterConfig != null
        ? deserializeAws_restJson1AwsLambdaFunctionDeadLetterConfig(output.DeadLetterConfig, context)
        : undefined,
    Environment:
      output.Environment != null
        ? deserializeAws_restJson1AwsLambdaFunctionEnvironment(output.Environment, context)
        : undefined,
    FunctionName: __expectString(output.FunctionName),
    Handler: __expectString(output.Handler),
    KmsKeyArn: __expectString(output.KmsKeyArn),
    LastModified: __expectString(output.LastModified),
    Layers:
      output.Layers != null ? deserializeAws_restJson1AwsLambdaFunctionLayerList(output.Layers, context) : undefined,
    MasterArn: __expectString(output.MasterArn),
    MemorySize: __expectInt32(output.MemorySize),
    RevisionId: __expectString(output.RevisionId),
    Role: __expectString(output.Role),
    Runtime: __expectString(output.Runtime),
    Timeout: __expectInt32(output.Timeout),
    TracingConfig:
      output.TracingConfig != null
        ? deserializeAws_restJson1AwsLambdaFunctionTracingConfig(output.TracingConfig, context)
        : undefined,
    Version: __expectString(output.Version),
    VpcConfig:
      output.VpcConfig != null
        ? deserializeAws_restJson1AwsLambdaFunctionVpcConfig(output.VpcConfig, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsLambdaFunctionEnvironment = (
  output: any,
  context: __SerdeContext
): AwsLambdaFunctionEnvironment => {
  return {
    Error:
      output.Error != null
        ? deserializeAws_restJson1AwsLambdaFunctionEnvironmentError(output.Error, context)
        : undefined,
    Variables: output.Variables != null ? deserializeAws_restJson1FieldMap(output.Variables, context) : undefined,
  } as any;
};

const deserializeAws_restJson1AwsLambdaFunctionEnvironmentError = (
  output: any,
  context: __SerdeContext
): AwsLambdaFunctionEnvironmentError => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    Message: __expectString(output.Message),
  } as any;
};

const deserializeAws_restJson1AwsLambdaFunctionLayer = (
  output: any,
  context: __SerdeContext
): AwsLambdaFunctionLayer => {
  return {
    Arn: __expectString(output.Arn),
    CodeSize: __expectInt32(output.CodeSize),
  } as any;
};

const deserializeAws_restJson1AwsLambdaFunctionLayerList = (
  output: any,
  context: __SerdeContext
): AwsLambdaFunctionLayer[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsLambdaFunctionLayer(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsLambdaFunctionTracingConfig = (
  output: any,
  context: __SerdeContext
): AwsLambdaFunctionTracingConfig => {
  return {
    Mode: __expectString(output.Mode),
  } as any;
};

const deserializeAws_restJson1AwsLambdaFunctionVpcConfig = (
  output: any,
  context: __SerdeContext
): AwsLambdaFunctionVpcConfig => {
  return {
    SecurityGroupIds:
      output.SecurityGroupIds != null
        ? deserializeAws_restJson1NonEmptyStringList(output.SecurityGroupIds, context)
        : undefined,
    SubnetIds:
      output.SubnetIds != null ? deserializeAws_restJson1NonEmptyStringList(output.SubnetIds, context) : undefined,
    VpcId: __expectString(output.VpcId),
  } as any;
};

const deserializeAws_restJson1AwsLambdaLayerVersionDetails = (
  output: any,
  context: __SerdeContext
): AwsLambdaLayerVersionDetails => {
  return {
    CompatibleRuntimes:
      output.CompatibleRuntimes != null
        ? deserializeAws_restJson1NonEmptyStringList(output.CompatibleRuntimes, context)
        : undefined,
    CreatedDate: __expectString(output.CreatedDate),
    Version: __expectLong(output.Version),
  } as any;
};

const deserializeAws_restJson1AwsMountPoint = (output: any, context: __SerdeContext): AwsMountPoint => {
  return {
    ContainerPath: __expectString(output.ContainerPath),
    SourceVolume: __expectString(output.SourceVolume),
  } as any;
};

const deserializeAws_restJson1AwsMountPointList = (output: any, context: __SerdeContext): AwsMountPoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsMountPoint(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsNetworkFirewallFirewallDetails = (
  output: any,
  context: __SerdeContext
): AwsNetworkFirewallFirewallDetails => {
  return {
    DeleteProtection: __expectBoolean(output.DeleteProtection),
    Description: __expectString(output.Description),
    FirewallArn: __expectString(output.FirewallArn),
    FirewallId: __expectString(output.FirewallId),
    FirewallName: __expectString(output.FirewallName),
    FirewallPolicyArn: __expectString(output.FirewallPolicyArn),
    FirewallPolicyChangeProtection: __expectBoolean(output.FirewallPolicyChangeProtection),
    SubnetChangeProtection: __expectBoolean(output.SubnetChangeProtection),
    SubnetMappings:
      output.SubnetMappings != null
        ? deserializeAws_restJson1AwsNetworkFirewallFirewallSubnetMappingsList(output.SubnetMappings, context)
        : undefined,
    VpcId: __expectString(output.VpcId),
  } as any;
};

const deserializeAws_restJson1AwsNetworkFirewallFirewallPolicyDetails = (
  output: any,
  context: __SerdeContext
): AwsNetworkFirewallFirewallPolicyDetails => {
  return {
    Description: __expectString(output.Description),
    FirewallPolicy:
      output.FirewallPolicy != null
        ? deserializeAws_restJson1FirewallPolicyDetails(output.FirewallPolicy, context)
        : undefined,
    FirewallPolicyArn: __expectString(output.FirewallPolicyArn),
    FirewallPolicyId: __expectString(output.FirewallPolicyId),
    FirewallPolicyName: __expectString(output.FirewallPolicyName),
  } as any;
};

const deserializeAws_restJson1AwsNetworkFirewallFirewallSubnetMappingsDetails = (
  output: any,
  context: __SerdeContext
): AwsNetworkFirewallFirewallSubnetMappingsDetails => {
  return {
    SubnetId: __expectString(output.SubnetId),
  } as any;
};

const deserializeAws_restJson1AwsNetworkFirewallFirewallSubnetMappingsList = (
  output: any,
  context: __SerdeContext
): AwsNetworkFirewallFirewallSubnetMappingsDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsNetworkFirewallFirewallSubnetMappingsDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsNetworkFirewallRuleGroupDetails = (
  output: any,
  context: __SerdeContext
): AwsNetworkFirewallRuleGroupDetails => {
  return {
    Capacity: __expectInt32(output.Capacity),
    Description: __expectString(output.Description),
    RuleGroup:
      output.RuleGroup != null ? deserializeAws_restJson1RuleGroupDetails(output.RuleGroup, context) : undefined,
    RuleGroupArn: __expectString(output.RuleGroupArn),
    RuleGroupId: __expectString(output.RuleGroupId),
    RuleGroupName: __expectString(output.RuleGroupName),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1AwsOpenSearchServiceDomainAdvancedSecurityOptionsDetails = (
  output: any,
  context: __SerdeContext
): AwsOpenSearchServiceDomainAdvancedSecurityOptionsDetails => {
  return {
    Enabled: __expectBoolean(output.Enabled),
    InternalUserDatabaseEnabled: __expectBoolean(output.InternalUserDatabaseEnabled),
    MasterUserOptions:
      output.MasterUserOptions != null
        ? deserializeAws_restJson1AwsOpenSearchServiceDomainMasterUserOptionsDetails(output.MasterUserOptions, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsOpenSearchServiceDomainClusterConfigDetails = (
  output: any,
  context: __SerdeContext
): AwsOpenSearchServiceDomainClusterConfigDetails => {
  return {
    DedicatedMasterCount: __expectInt32(output.DedicatedMasterCount),
    DedicatedMasterEnabled: __expectBoolean(output.DedicatedMasterEnabled),
    DedicatedMasterType: __expectString(output.DedicatedMasterType),
    InstanceCount: __expectInt32(output.InstanceCount),
    InstanceType: __expectString(output.InstanceType),
    WarmCount: __expectInt32(output.WarmCount),
    WarmEnabled: __expectBoolean(output.WarmEnabled),
    WarmType: __expectString(output.WarmType),
    ZoneAwarenessConfig:
      output.ZoneAwarenessConfig != null
        ? deserializeAws_restJson1AwsOpenSearchServiceDomainClusterConfigZoneAwarenessConfigDetails(
            output.ZoneAwarenessConfig,
            context
          )
        : undefined,
    ZoneAwarenessEnabled: __expectBoolean(output.ZoneAwarenessEnabled),
  } as any;
};

const deserializeAws_restJson1AwsOpenSearchServiceDomainClusterConfigZoneAwarenessConfigDetails = (
  output: any,
  context: __SerdeContext
): AwsOpenSearchServiceDomainClusterConfigZoneAwarenessConfigDetails => {
  return {
    AvailabilityZoneCount: __expectInt32(output.AvailabilityZoneCount),
  } as any;
};

const deserializeAws_restJson1AwsOpenSearchServiceDomainDetails = (
  output: any,
  context: __SerdeContext
): AwsOpenSearchServiceDomainDetails => {
  return {
    AccessPolicies: __expectString(output.AccessPolicies),
    AdvancedSecurityOptions:
      output.AdvancedSecurityOptions != null
        ? deserializeAws_restJson1AwsOpenSearchServiceDomainAdvancedSecurityOptionsDetails(
            output.AdvancedSecurityOptions,
            context
          )
        : undefined,
    Arn: __expectString(output.Arn),
    ClusterConfig:
      output.ClusterConfig != null
        ? deserializeAws_restJson1AwsOpenSearchServiceDomainClusterConfigDetails(output.ClusterConfig, context)
        : undefined,
    DomainEndpoint: __expectString(output.DomainEndpoint),
    DomainEndpointOptions:
      output.DomainEndpointOptions != null
        ? deserializeAws_restJson1AwsOpenSearchServiceDomainDomainEndpointOptionsDetails(
            output.DomainEndpointOptions,
            context
          )
        : undefined,
    DomainEndpoints:
      output.DomainEndpoints != null ? deserializeAws_restJson1FieldMap(output.DomainEndpoints, context) : undefined,
    DomainName: __expectString(output.DomainName),
    EncryptionAtRestOptions:
      output.EncryptionAtRestOptions != null
        ? deserializeAws_restJson1AwsOpenSearchServiceDomainEncryptionAtRestOptionsDetails(
            output.EncryptionAtRestOptions,
            context
          )
        : undefined,
    EngineVersion: __expectString(output.EngineVersion),
    Id: __expectString(output.Id),
    LogPublishingOptions:
      output.LogPublishingOptions != null
        ? deserializeAws_restJson1AwsOpenSearchServiceDomainLogPublishingOptionsDetails(
            output.LogPublishingOptions,
            context
          )
        : undefined,
    NodeToNodeEncryptionOptions:
      output.NodeToNodeEncryptionOptions != null
        ? deserializeAws_restJson1AwsOpenSearchServiceDomainNodeToNodeEncryptionOptionsDetails(
            output.NodeToNodeEncryptionOptions,
            context
          )
        : undefined,
    ServiceSoftwareOptions:
      output.ServiceSoftwareOptions != null
        ? deserializeAws_restJson1AwsOpenSearchServiceDomainServiceSoftwareOptionsDetails(
            output.ServiceSoftwareOptions,
            context
          )
        : undefined,
    VpcOptions:
      output.VpcOptions != null
        ? deserializeAws_restJson1AwsOpenSearchServiceDomainVpcOptionsDetails(output.VpcOptions, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsOpenSearchServiceDomainDomainEndpointOptionsDetails = (
  output: any,
  context: __SerdeContext
): AwsOpenSearchServiceDomainDomainEndpointOptionsDetails => {
  return {
    CustomEndpoint: __expectString(output.CustomEndpoint),
    CustomEndpointCertificateArn: __expectString(output.CustomEndpointCertificateArn),
    CustomEndpointEnabled: __expectBoolean(output.CustomEndpointEnabled),
    EnforceHTTPS: __expectBoolean(output.EnforceHTTPS),
    TLSSecurityPolicy: __expectString(output.TLSSecurityPolicy),
  } as any;
};

const deserializeAws_restJson1AwsOpenSearchServiceDomainEncryptionAtRestOptionsDetails = (
  output: any,
  context: __SerdeContext
): AwsOpenSearchServiceDomainEncryptionAtRestOptionsDetails => {
  return {
    Enabled: __expectBoolean(output.Enabled),
    KmsKeyId: __expectString(output.KmsKeyId),
  } as any;
};

const deserializeAws_restJson1AwsOpenSearchServiceDomainLogPublishingOption = (
  output: any,
  context: __SerdeContext
): AwsOpenSearchServiceDomainLogPublishingOption => {
  return {
    CloudWatchLogsLogGroupArn: __expectString(output.CloudWatchLogsLogGroupArn),
    Enabled: __expectBoolean(output.Enabled),
  } as any;
};

const deserializeAws_restJson1AwsOpenSearchServiceDomainLogPublishingOptionsDetails = (
  output: any,
  context: __SerdeContext
): AwsOpenSearchServiceDomainLogPublishingOptionsDetails => {
  return {
    AuditLogs:
      output.AuditLogs != null
        ? deserializeAws_restJson1AwsOpenSearchServiceDomainLogPublishingOption(output.AuditLogs, context)
        : undefined,
    IndexSlowLogs:
      output.IndexSlowLogs != null
        ? deserializeAws_restJson1AwsOpenSearchServiceDomainLogPublishingOption(output.IndexSlowLogs, context)
        : undefined,
    SearchSlowLogs:
      output.SearchSlowLogs != null
        ? deserializeAws_restJson1AwsOpenSearchServiceDomainLogPublishingOption(output.SearchSlowLogs, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsOpenSearchServiceDomainMasterUserOptionsDetails = (
  output: any,
  context: __SerdeContext
): AwsOpenSearchServiceDomainMasterUserOptionsDetails => {
  return {
    MasterUserArn: __expectString(output.MasterUserArn),
    MasterUserName: __expectString(output.MasterUserName),
    MasterUserPassword: __expectString(output.MasterUserPassword),
  } as any;
};

const deserializeAws_restJson1AwsOpenSearchServiceDomainNodeToNodeEncryptionOptionsDetails = (
  output: any,
  context: __SerdeContext
): AwsOpenSearchServiceDomainNodeToNodeEncryptionOptionsDetails => {
  return {
    Enabled: __expectBoolean(output.Enabled),
  } as any;
};

const deserializeAws_restJson1AwsOpenSearchServiceDomainServiceSoftwareOptionsDetails = (
  output: any,
  context: __SerdeContext
): AwsOpenSearchServiceDomainServiceSoftwareOptionsDetails => {
  return {
    AutomatedUpdateDate: __expectString(output.AutomatedUpdateDate),
    Cancellable: __expectBoolean(output.Cancellable),
    CurrentVersion: __expectString(output.CurrentVersion),
    Description: __expectString(output.Description),
    NewVersion: __expectString(output.NewVersion),
    OptionalDeployment: __expectBoolean(output.OptionalDeployment),
    UpdateAvailable: __expectBoolean(output.UpdateAvailable),
    UpdateStatus: __expectString(output.UpdateStatus),
  } as any;
};

const deserializeAws_restJson1AwsOpenSearchServiceDomainVpcOptionsDetails = (
  output: any,
  context: __SerdeContext
): AwsOpenSearchServiceDomainVpcOptionsDetails => {
  return {
    SecurityGroupIds:
      output.SecurityGroupIds != null
        ? deserializeAws_restJson1NonEmptyStringList(output.SecurityGroupIds, context)
        : undefined,
    SubnetIds:
      output.SubnetIds != null ? deserializeAws_restJson1NonEmptyStringList(output.SubnetIds, context) : undefined,
  } as any;
};

const deserializeAws_restJson1AwsRdsDbClusterAssociatedRole = (
  output: any,
  context: __SerdeContext
): AwsRdsDbClusterAssociatedRole => {
  return {
    RoleArn: __expectString(output.RoleArn),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1AwsRdsDbClusterAssociatedRoles = (
  output: any,
  context: __SerdeContext
): AwsRdsDbClusterAssociatedRole[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsRdsDbClusterAssociatedRole(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsRdsDbClusterDetails = (
  output: any,
  context: __SerdeContext
): AwsRdsDbClusterDetails => {
  return {
    ActivityStreamStatus: __expectString(output.ActivityStreamStatus),
    AllocatedStorage: __expectInt32(output.AllocatedStorage),
    AssociatedRoles:
      output.AssociatedRoles != null
        ? deserializeAws_restJson1AwsRdsDbClusterAssociatedRoles(output.AssociatedRoles, context)
        : undefined,
    AvailabilityZones:
      output.AvailabilityZones != null
        ? deserializeAws_restJson1StringList(output.AvailabilityZones, context)
        : undefined,
    BackupRetentionPeriod: __expectInt32(output.BackupRetentionPeriod),
    ClusterCreateTime: __expectString(output.ClusterCreateTime),
    CopyTagsToSnapshot: __expectBoolean(output.CopyTagsToSnapshot),
    CrossAccountClone: __expectBoolean(output.CrossAccountClone),
    CustomEndpoints:
      output.CustomEndpoints != null ? deserializeAws_restJson1StringList(output.CustomEndpoints, context) : undefined,
    DatabaseName: __expectString(output.DatabaseName),
    DbClusterIdentifier: __expectString(output.DbClusterIdentifier),
    DbClusterMembers:
      output.DbClusterMembers != null
        ? deserializeAws_restJson1AwsRdsDbClusterMembers(output.DbClusterMembers, context)
        : undefined,
    DbClusterOptionGroupMemberships:
      output.DbClusterOptionGroupMemberships != null
        ? deserializeAws_restJson1AwsRdsDbClusterOptionGroupMemberships(output.DbClusterOptionGroupMemberships, context)
        : undefined,
    DbClusterParameterGroup: __expectString(output.DbClusterParameterGroup),
    DbClusterResourceId: __expectString(output.DbClusterResourceId),
    DbSubnetGroup: __expectString(output.DbSubnetGroup),
    DeletionProtection: __expectBoolean(output.DeletionProtection),
    DomainMemberships:
      output.DomainMemberships != null
        ? deserializeAws_restJson1AwsRdsDbDomainMemberships(output.DomainMemberships, context)
        : undefined,
    EnabledCloudWatchLogsExports:
      output.EnabledCloudWatchLogsExports != null
        ? deserializeAws_restJson1StringList(output.EnabledCloudWatchLogsExports, context)
        : undefined,
    Endpoint: __expectString(output.Endpoint),
    Engine: __expectString(output.Engine),
    EngineMode: __expectString(output.EngineMode),
    EngineVersion: __expectString(output.EngineVersion),
    HostedZoneId: __expectString(output.HostedZoneId),
    HttpEndpointEnabled: __expectBoolean(output.HttpEndpointEnabled),
    IamDatabaseAuthenticationEnabled: __expectBoolean(output.IamDatabaseAuthenticationEnabled),
    KmsKeyId: __expectString(output.KmsKeyId),
    MasterUsername: __expectString(output.MasterUsername),
    MultiAz: __expectBoolean(output.MultiAz),
    Port: __expectInt32(output.Port),
    PreferredBackupWindow: __expectString(output.PreferredBackupWindow),
    PreferredMaintenanceWindow: __expectString(output.PreferredMaintenanceWindow),
    ReadReplicaIdentifiers:
      output.ReadReplicaIdentifiers != null
        ? deserializeAws_restJson1StringList(output.ReadReplicaIdentifiers, context)
        : undefined,
    ReaderEndpoint: __expectString(output.ReaderEndpoint),
    Status: __expectString(output.Status),
    StorageEncrypted: __expectBoolean(output.StorageEncrypted),
    VpcSecurityGroups:
      output.VpcSecurityGroups != null
        ? deserializeAws_restJson1AwsRdsDbInstanceVpcSecurityGroups(output.VpcSecurityGroups, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsRdsDbClusterMember = (output: any, context: __SerdeContext): AwsRdsDbClusterMember => {
  return {
    DbClusterParameterGroupStatus: __expectString(output.DbClusterParameterGroupStatus),
    DbInstanceIdentifier: __expectString(output.DbInstanceIdentifier),
    IsClusterWriter: __expectBoolean(output.IsClusterWriter),
    PromotionTier: __expectInt32(output.PromotionTier),
  } as any;
};

const deserializeAws_restJson1AwsRdsDbClusterMembers = (
  output: any,
  context: __SerdeContext
): AwsRdsDbClusterMember[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsRdsDbClusterMember(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsRdsDbClusterOptionGroupMembership = (
  output: any,
  context: __SerdeContext
): AwsRdsDbClusterOptionGroupMembership => {
  return {
    DbClusterOptionGroupName: __expectString(output.DbClusterOptionGroupName),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1AwsRdsDbClusterOptionGroupMemberships = (
  output: any,
  context: __SerdeContext
): AwsRdsDbClusterOptionGroupMembership[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsRdsDbClusterOptionGroupMembership(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsRdsDbClusterSnapshotDetails = (
  output: any,
  context: __SerdeContext
): AwsRdsDbClusterSnapshotDetails => {
  return {
    AllocatedStorage: __expectInt32(output.AllocatedStorage),
    AvailabilityZones:
      output.AvailabilityZones != null
        ? deserializeAws_restJson1StringList(output.AvailabilityZones, context)
        : undefined,
    ClusterCreateTime: __expectString(output.ClusterCreateTime),
    DbClusterIdentifier: __expectString(output.DbClusterIdentifier),
    DbClusterSnapshotIdentifier: __expectString(output.DbClusterSnapshotIdentifier),
    Engine: __expectString(output.Engine),
    EngineVersion: __expectString(output.EngineVersion),
    IamDatabaseAuthenticationEnabled: __expectBoolean(output.IamDatabaseAuthenticationEnabled),
    KmsKeyId: __expectString(output.KmsKeyId),
    LicenseModel: __expectString(output.LicenseModel),
    MasterUsername: __expectString(output.MasterUsername),
    PercentProgress: __expectInt32(output.PercentProgress),
    Port: __expectInt32(output.Port),
    SnapshotCreateTime: __expectString(output.SnapshotCreateTime),
    SnapshotType: __expectString(output.SnapshotType),
    Status: __expectString(output.Status),
    StorageEncrypted: __expectBoolean(output.StorageEncrypted),
    VpcId: __expectString(output.VpcId),
  } as any;
};

const deserializeAws_restJson1AwsRdsDbDomainMembership = (
  output: any,
  context: __SerdeContext
): AwsRdsDbDomainMembership => {
  return {
    Domain: __expectString(output.Domain),
    Fqdn: __expectString(output.Fqdn),
    IamRoleName: __expectString(output.IamRoleName),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1AwsRdsDbDomainMemberships = (
  output: any,
  context: __SerdeContext
): AwsRdsDbDomainMembership[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsRdsDbDomainMembership(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsRdsDbInstanceAssociatedRole = (
  output: any,
  context: __SerdeContext
): AwsRdsDbInstanceAssociatedRole => {
  return {
    FeatureName: __expectString(output.FeatureName),
    RoleArn: __expectString(output.RoleArn),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1AwsRdsDbInstanceAssociatedRoles = (
  output: any,
  context: __SerdeContext
): AwsRdsDbInstanceAssociatedRole[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsRdsDbInstanceAssociatedRole(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsRdsDbInstanceDetails = (
  output: any,
  context: __SerdeContext
): AwsRdsDbInstanceDetails => {
  return {
    AllocatedStorage: __expectInt32(output.AllocatedStorage),
    AssociatedRoles:
      output.AssociatedRoles != null
        ? deserializeAws_restJson1AwsRdsDbInstanceAssociatedRoles(output.AssociatedRoles, context)
        : undefined,
    AutoMinorVersionUpgrade: __expectBoolean(output.AutoMinorVersionUpgrade),
    AvailabilityZone: __expectString(output.AvailabilityZone),
    BackupRetentionPeriod: __expectInt32(output.BackupRetentionPeriod),
    CACertificateIdentifier: __expectString(output.CACertificateIdentifier),
    CharacterSetName: __expectString(output.CharacterSetName),
    CopyTagsToSnapshot: __expectBoolean(output.CopyTagsToSnapshot),
    DBClusterIdentifier: __expectString(output.DBClusterIdentifier),
    DBInstanceClass: __expectString(output.DBInstanceClass),
    DBInstanceIdentifier: __expectString(output.DBInstanceIdentifier),
    DBName: __expectString(output.DBName),
    DbInstancePort: __expectInt32(output.DbInstancePort),
    DbInstanceStatus: __expectString(output.DbInstanceStatus),
    DbParameterGroups:
      output.DbParameterGroups != null
        ? deserializeAws_restJson1AwsRdsDbParameterGroups(output.DbParameterGroups, context)
        : undefined,
    DbSecurityGroups:
      output.DbSecurityGroups != null
        ? deserializeAws_restJson1StringList(output.DbSecurityGroups, context)
        : undefined,
    DbSubnetGroup:
      output.DbSubnetGroup != null
        ? deserializeAws_restJson1AwsRdsDbSubnetGroup(output.DbSubnetGroup, context)
        : undefined,
    DbiResourceId: __expectString(output.DbiResourceId),
    DeletionProtection: __expectBoolean(output.DeletionProtection),
    DomainMemberships:
      output.DomainMemberships != null
        ? deserializeAws_restJson1AwsRdsDbDomainMemberships(output.DomainMemberships, context)
        : undefined,
    EnabledCloudWatchLogsExports:
      output.EnabledCloudWatchLogsExports != null
        ? deserializeAws_restJson1StringList(output.EnabledCloudWatchLogsExports, context)
        : undefined,
    Endpoint:
      output.Endpoint != null ? deserializeAws_restJson1AwsRdsDbInstanceEndpoint(output.Endpoint, context) : undefined,
    Engine: __expectString(output.Engine),
    EngineVersion: __expectString(output.EngineVersion),
    EnhancedMonitoringResourceArn: __expectString(output.EnhancedMonitoringResourceArn),
    IAMDatabaseAuthenticationEnabled: __expectBoolean(output.IAMDatabaseAuthenticationEnabled),
    InstanceCreateTime: __expectString(output.InstanceCreateTime),
    Iops: __expectInt32(output.Iops),
    KmsKeyId: __expectString(output.KmsKeyId),
    LatestRestorableTime: __expectString(output.LatestRestorableTime),
    LicenseModel: __expectString(output.LicenseModel),
    ListenerEndpoint:
      output.ListenerEndpoint != null
        ? deserializeAws_restJson1AwsRdsDbInstanceEndpoint(output.ListenerEndpoint, context)
        : undefined,
    MasterUsername: __expectString(output.MasterUsername),
    MaxAllocatedStorage: __expectInt32(output.MaxAllocatedStorage),
    MonitoringInterval: __expectInt32(output.MonitoringInterval),
    MonitoringRoleArn: __expectString(output.MonitoringRoleArn),
    MultiAz: __expectBoolean(output.MultiAz),
    OptionGroupMemberships:
      output.OptionGroupMemberships != null
        ? deserializeAws_restJson1AwsRdsDbOptionGroupMemberships(output.OptionGroupMemberships, context)
        : undefined,
    PendingModifiedValues:
      output.PendingModifiedValues != null
        ? deserializeAws_restJson1AwsRdsDbPendingModifiedValues(output.PendingModifiedValues, context)
        : undefined,
    PerformanceInsightsEnabled: __expectBoolean(output.PerformanceInsightsEnabled),
    PerformanceInsightsKmsKeyId: __expectString(output.PerformanceInsightsKmsKeyId),
    PerformanceInsightsRetentionPeriod: __expectInt32(output.PerformanceInsightsRetentionPeriod),
    PreferredBackupWindow: __expectString(output.PreferredBackupWindow),
    PreferredMaintenanceWindow: __expectString(output.PreferredMaintenanceWindow),
    ProcessorFeatures:
      output.ProcessorFeatures != null
        ? deserializeAws_restJson1AwsRdsDbProcessorFeatures(output.ProcessorFeatures, context)
        : undefined,
    PromotionTier: __expectInt32(output.PromotionTier),
    PubliclyAccessible: __expectBoolean(output.PubliclyAccessible),
    ReadReplicaDBClusterIdentifiers:
      output.ReadReplicaDBClusterIdentifiers != null
        ? deserializeAws_restJson1StringList(output.ReadReplicaDBClusterIdentifiers, context)
        : undefined,
    ReadReplicaDBInstanceIdentifiers:
      output.ReadReplicaDBInstanceIdentifiers != null
        ? deserializeAws_restJson1StringList(output.ReadReplicaDBInstanceIdentifiers, context)
        : undefined,
    ReadReplicaSourceDBInstanceIdentifier: __expectString(output.ReadReplicaSourceDBInstanceIdentifier),
    SecondaryAvailabilityZone: __expectString(output.SecondaryAvailabilityZone),
    StatusInfos:
      output.StatusInfos != null ? deserializeAws_restJson1AwsRdsDbStatusInfos(output.StatusInfos, context) : undefined,
    StorageEncrypted: __expectBoolean(output.StorageEncrypted),
    StorageType: __expectString(output.StorageType),
    TdeCredentialArn: __expectString(output.TdeCredentialArn),
    Timezone: __expectString(output.Timezone),
    VpcSecurityGroups:
      output.VpcSecurityGroups != null
        ? deserializeAws_restJson1AwsRdsDbInstanceVpcSecurityGroups(output.VpcSecurityGroups, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsRdsDbInstanceEndpoint = (
  output: any,
  context: __SerdeContext
): AwsRdsDbInstanceEndpoint => {
  return {
    Address: __expectString(output.Address),
    HostedZoneId: __expectString(output.HostedZoneId),
    Port: __expectInt32(output.Port),
  } as any;
};

const deserializeAws_restJson1AwsRdsDbInstanceVpcSecurityGroup = (
  output: any,
  context: __SerdeContext
): AwsRdsDbInstanceVpcSecurityGroup => {
  return {
    Status: __expectString(output.Status),
    VpcSecurityGroupId: __expectString(output.VpcSecurityGroupId),
  } as any;
};

const deserializeAws_restJson1AwsRdsDbInstanceVpcSecurityGroups = (
  output: any,
  context: __SerdeContext
): AwsRdsDbInstanceVpcSecurityGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsRdsDbInstanceVpcSecurityGroup(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsRdsDbOptionGroupMembership = (
  output: any,
  context: __SerdeContext
): AwsRdsDbOptionGroupMembership => {
  return {
    OptionGroupName: __expectString(output.OptionGroupName),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1AwsRdsDbOptionGroupMemberships = (
  output: any,
  context: __SerdeContext
): AwsRdsDbOptionGroupMembership[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsRdsDbOptionGroupMembership(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsRdsDbParameterGroup = (
  output: any,
  context: __SerdeContext
): AwsRdsDbParameterGroup => {
  return {
    DbParameterGroupName: __expectString(output.DbParameterGroupName),
    ParameterApplyStatus: __expectString(output.ParameterApplyStatus),
  } as any;
};

const deserializeAws_restJson1AwsRdsDbParameterGroups = (
  output: any,
  context: __SerdeContext
): AwsRdsDbParameterGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsRdsDbParameterGroup(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsRdsDbPendingModifiedValues = (
  output: any,
  context: __SerdeContext
): AwsRdsDbPendingModifiedValues => {
  return {
    AllocatedStorage: __expectInt32(output.AllocatedStorage),
    BackupRetentionPeriod: __expectInt32(output.BackupRetentionPeriod),
    CaCertificateIdentifier: __expectString(output.CaCertificateIdentifier),
    DbInstanceClass: __expectString(output.DbInstanceClass),
    DbInstanceIdentifier: __expectString(output.DbInstanceIdentifier),
    DbSubnetGroupName: __expectString(output.DbSubnetGroupName),
    EngineVersion: __expectString(output.EngineVersion),
    Iops: __expectInt32(output.Iops),
    LicenseModel: __expectString(output.LicenseModel),
    MasterUserPassword: __expectString(output.MasterUserPassword),
    MultiAZ: __expectBoolean(output.MultiAZ),
    PendingCloudWatchLogsExports:
      output.PendingCloudWatchLogsExports != null
        ? deserializeAws_restJson1AwsRdsPendingCloudWatchLogsExports(output.PendingCloudWatchLogsExports, context)
        : undefined,
    Port: __expectInt32(output.Port),
    ProcessorFeatures:
      output.ProcessorFeatures != null
        ? deserializeAws_restJson1AwsRdsDbProcessorFeatures(output.ProcessorFeatures, context)
        : undefined,
    StorageType: __expectString(output.StorageType),
  } as any;
};

const deserializeAws_restJson1AwsRdsDbProcessorFeature = (
  output: any,
  context: __SerdeContext
): AwsRdsDbProcessorFeature => {
  return {
    Name: __expectString(output.Name),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1AwsRdsDbProcessorFeatures = (
  output: any,
  context: __SerdeContext
): AwsRdsDbProcessorFeature[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsRdsDbProcessorFeature(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsRdsDbSecurityGroupDetails = (
  output: any,
  context: __SerdeContext
): AwsRdsDbSecurityGroupDetails => {
  return {
    DbSecurityGroupArn: __expectString(output.DbSecurityGroupArn),
    DbSecurityGroupDescription: __expectString(output.DbSecurityGroupDescription),
    DbSecurityGroupName: __expectString(output.DbSecurityGroupName),
    Ec2SecurityGroups:
      output.Ec2SecurityGroups != null
        ? deserializeAws_restJson1AwsRdsDbSecurityGroupEc2SecurityGroups(output.Ec2SecurityGroups, context)
        : undefined,
    IpRanges:
      output.IpRanges != null
        ? deserializeAws_restJson1AwsRdsDbSecurityGroupIpRanges(output.IpRanges, context)
        : undefined,
    OwnerId: __expectString(output.OwnerId),
    VpcId: __expectString(output.VpcId),
  } as any;
};

const deserializeAws_restJson1AwsRdsDbSecurityGroupEc2SecurityGroup = (
  output: any,
  context: __SerdeContext
): AwsRdsDbSecurityGroupEc2SecurityGroup => {
  return {
    Ec2SecurityGroupId: __expectString(output.Ec2SecurityGroupId),
    Ec2SecurityGroupName: __expectString(output.Ec2SecurityGroupName),
    Ec2SecurityGroupOwnerId: __expectString(output.Ec2SecurityGroupOwnerId),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1AwsRdsDbSecurityGroupEc2SecurityGroups = (
  output: any,
  context: __SerdeContext
): AwsRdsDbSecurityGroupEc2SecurityGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsRdsDbSecurityGroupEc2SecurityGroup(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsRdsDbSecurityGroupIpRange = (
  output: any,
  context: __SerdeContext
): AwsRdsDbSecurityGroupIpRange => {
  return {
    CidrIp: __expectString(output.CidrIp),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1AwsRdsDbSecurityGroupIpRanges = (
  output: any,
  context: __SerdeContext
): AwsRdsDbSecurityGroupIpRange[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsRdsDbSecurityGroupIpRange(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsRdsDbSnapshotDetails = (
  output: any,
  context: __SerdeContext
): AwsRdsDbSnapshotDetails => {
  return {
    AllocatedStorage: __expectInt32(output.AllocatedStorage),
    AvailabilityZone: __expectString(output.AvailabilityZone),
    DbInstanceIdentifier: __expectString(output.DbInstanceIdentifier),
    DbSnapshotIdentifier: __expectString(output.DbSnapshotIdentifier),
    DbiResourceId: __expectString(output.DbiResourceId),
    Encrypted: __expectBoolean(output.Encrypted),
    Engine: __expectString(output.Engine),
    EngineVersion: __expectString(output.EngineVersion),
    IamDatabaseAuthenticationEnabled: __expectBoolean(output.IamDatabaseAuthenticationEnabled),
    InstanceCreateTime: __expectString(output.InstanceCreateTime),
    Iops: __expectInt32(output.Iops),
    KmsKeyId: __expectString(output.KmsKeyId),
    LicenseModel: __expectString(output.LicenseModel),
    MasterUsername: __expectString(output.MasterUsername),
    OptionGroupName: __expectString(output.OptionGroupName),
    PercentProgress: __expectInt32(output.PercentProgress),
    Port: __expectInt32(output.Port),
    ProcessorFeatures:
      output.ProcessorFeatures != null
        ? deserializeAws_restJson1AwsRdsDbProcessorFeatures(output.ProcessorFeatures, context)
        : undefined,
    SnapshotCreateTime: __expectString(output.SnapshotCreateTime),
    SnapshotType: __expectString(output.SnapshotType),
    SourceDbSnapshotIdentifier: __expectString(output.SourceDbSnapshotIdentifier),
    SourceRegion: __expectString(output.SourceRegion),
    Status: __expectString(output.Status),
    StorageType: __expectString(output.StorageType),
    TdeCredentialArn: __expectString(output.TdeCredentialArn),
    Timezone: __expectString(output.Timezone),
    VpcId: __expectString(output.VpcId),
  } as any;
};

const deserializeAws_restJson1AwsRdsDbStatusInfo = (output: any, context: __SerdeContext): AwsRdsDbStatusInfo => {
  return {
    Message: __expectString(output.Message),
    Normal: __expectBoolean(output.Normal),
    Status: __expectString(output.Status),
    StatusType: __expectString(output.StatusType),
  } as any;
};

const deserializeAws_restJson1AwsRdsDbStatusInfos = (output: any, context: __SerdeContext): AwsRdsDbStatusInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsRdsDbStatusInfo(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsRdsDbSubnetGroup = (output: any, context: __SerdeContext): AwsRdsDbSubnetGroup => {
  return {
    DbSubnetGroupArn: __expectString(output.DbSubnetGroupArn),
    DbSubnetGroupDescription: __expectString(output.DbSubnetGroupDescription),
    DbSubnetGroupName: __expectString(output.DbSubnetGroupName),
    SubnetGroupStatus: __expectString(output.SubnetGroupStatus),
    Subnets:
      output.Subnets != null ? deserializeAws_restJson1AwsRdsDbSubnetGroupSubnets(output.Subnets, context) : undefined,
    VpcId: __expectString(output.VpcId),
  } as any;
};

const deserializeAws_restJson1AwsRdsDbSubnetGroupSubnet = (
  output: any,
  context: __SerdeContext
): AwsRdsDbSubnetGroupSubnet => {
  return {
    SubnetAvailabilityZone:
      output.SubnetAvailabilityZone != null
        ? deserializeAws_restJson1AwsRdsDbSubnetGroupSubnetAvailabilityZone(output.SubnetAvailabilityZone, context)
        : undefined,
    SubnetIdentifier: __expectString(output.SubnetIdentifier),
    SubnetStatus: __expectString(output.SubnetStatus),
  } as any;
};

const deserializeAws_restJson1AwsRdsDbSubnetGroupSubnetAvailabilityZone = (
  output: any,
  context: __SerdeContext
): AwsRdsDbSubnetGroupSubnetAvailabilityZone => {
  return {
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1AwsRdsDbSubnetGroupSubnets = (
  output: any,
  context: __SerdeContext
): AwsRdsDbSubnetGroupSubnet[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsRdsDbSubnetGroupSubnet(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsRdsEventSubscriptionDetails = (
  output: any,
  context: __SerdeContext
): AwsRdsEventSubscriptionDetails => {
  return {
    CustSubscriptionId: __expectString(output.CustSubscriptionId),
    CustomerAwsId: __expectString(output.CustomerAwsId),
    Enabled: __expectBoolean(output.Enabled),
    EventCategoriesList:
      output.EventCategoriesList != null
        ? deserializeAws_restJson1NonEmptyStringList(output.EventCategoriesList, context)
        : undefined,
    EventSubscriptionArn: __expectString(output.EventSubscriptionArn),
    SnsTopicArn: __expectString(output.SnsTopicArn),
    SourceIdsList:
      output.SourceIdsList != null
        ? deserializeAws_restJson1NonEmptyStringList(output.SourceIdsList, context)
        : undefined,
    SourceType: __expectString(output.SourceType),
    Status: __expectString(output.Status),
    SubscriptionCreationTime: __expectString(output.SubscriptionCreationTime),
  } as any;
};

const deserializeAws_restJson1AwsRdsPendingCloudWatchLogsExports = (
  output: any,
  context: __SerdeContext
): AwsRdsPendingCloudWatchLogsExports => {
  return {
    LogTypesToDisable:
      output.LogTypesToDisable != null
        ? deserializeAws_restJson1StringList(output.LogTypesToDisable, context)
        : undefined,
    LogTypesToEnable:
      output.LogTypesToEnable != null
        ? deserializeAws_restJson1StringList(output.LogTypesToEnable, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsRedshiftClusterClusterNode = (
  output: any,
  context: __SerdeContext
): AwsRedshiftClusterClusterNode => {
  return {
    NodeRole: __expectString(output.NodeRole),
    PrivateIpAddress: __expectString(output.PrivateIpAddress),
    PublicIpAddress: __expectString(output.PublicIpAddress),
  } as any;
};

const deserializeAws_restJson1AwsRedshiftClusterClusterNodes = (
  output: any,
  context: __SerdeContext
): AwsRedshiftClusterClusterNode[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsRedshiftClusterClusterNode(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsRedshiftClusterClusterParameterGroup = (
  output: any,
  context: __SerdeContext
): AwsRedshiftClusterClusterParameterGroup => {
  return {
    ClusterParameterStatusList:
      output.ClusterParameterStatusList != null
        ? deserializeAws_restJson1AwsRedshiftClusterClusterParameterStatusList(
            output.ClusterParameterStatusList,
            context
          )
        : undefined,
    ParameterApplyStatus: __expectString(output.ParameterApplyStatus),
    ParameterGroupName: __expectString(output.ParameterGroupName),
  } as any;
};

const deserializeAws_restJson1AwsRedshiftClusterClusterParameterGroups = (
  output: any,
  context: __SerdeContext
): AwsRedshiftClusterClusterParameterGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsRedshiftClusterClusterParameterGroup(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsRedshiftClusterClusterParameterStatus = (
  output: any,
  context: __SerdeContext
): AwsRedshiftClusterClusterParameterStatus => {
  return {
    ParameterApplyErrorDescription: __expectString(output.ParameterApplyErrorDescription),
    ParameterApplyStatus: __expectString(output.ParameterApplyStatus),
    ParameterName: __expectString(output.ParameterName),
  } as any;
};

const deserializeAws_restJson1AwsRedshiftClusterClusterParameterStatusList = (
  output: any,
  context: __SerdeContext
): AwsRedshiftClusterClusterParameterStatus[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsRedshiftClusterClusterParameterStatus(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsRedshiftClusterClusterSecurityGroup = (
  output: any,
  context: __SerdeContext
): AwsRedshiftClusterClusterSecurityGroup => {
  return {
    ClusterSecurityGroupName: __expectString(output.ClusterSecurityGroupName),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1AwsRedshiftClusterClusterSecurityGroups = (
  output: any,
  context: __SerdeContext
): AwsRedshiftClusterClusterSecurityGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsRedshiftClusterClusterSecurityGroup(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsRedshiftClusterClusterSnapshotCopyStatus = (
  output: any,
  context: __SerdeContext
): AwsRedshiftClusterClusterSnapshotCopyStatus => {
  return {
    DestinationRegion: __expectString(output.DestinationRegion),
    ManualSnapshotRetentionPeriod: __expectInt32(output.ManualSnapshotRetentionPeriod),
    RetentionPeriod: __expectInt32(output.RetentionPeriod),
    SnapshotCopyGrantName: __expectString(output.SnapshotCopyGrantName),
  } as any;
};

const deserializeAws_restJson1AwsRedshiftClusterDeferredMaintenanceWindow = (
  output: any,
  context: __SerdeContext
): AwsRedshiftClusterDeferredMaintenanceWindow => {
  return {
    DeferMaintenanceEndTime: __expectString(output.DeferMaintenanceEndTime),
    DeferMaintenanceIdentifier: __expectString(output.DeferMaintenanceIdentifier),
    DeferMaintenanceStartTime: __expectString(output.DeferMaintenanceStartTime),
  } as any;
};

const deserializeAws_restJson1AwsRedshiftClusterDeferredMaintenanceWindows = (
  output: any,
  context: __SerdeContext
): AwsRedshiftClusterDeferredMaintenanceWindow[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsRedshiftClusterDeferredMaintenanceWindow(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsRedshiftClusterDetails = (
  output: any,
  context: __SerdeContext
): AwsRedshiftClusterDetails => {
  return {
    AllowVersionUpgrade: __expectBoolean(output.AllowVersionUpgrade),
    AutomatedSnapshotRetentionPeriod: __expectInt32(output.AutomatedSnapshotRetentionPeriod),
    AvailabilityZone: __expectString(output.AvailabilityZone),
    ClusterAvailabilityStatus: __expectString(output.ClusterAvailabilityStatus),
    ClusterCreateTime: __expectString(output.ClusterCreateTime),
    ClusterIdentifier: __expectString(output.ClusterIdentifier),
    ClusterNodes:
      output.ClusterNodes != null
        ? deserializeAws_restJson1AwsRedshiftClusterClusterNodes(output.ClusterNodes, context)
        : undefined,
    ClusterParameterGroups:
      output.ClusterParameterGroups != null
        ? deserializeAws_restJson1AwsRedshiftClusterClusterParameterGroups(output.ClusterParameterGroups, context)
        : undefined,
    ClusterPublicKey: __expectString(output.ClusterPublicKey),
    ClusterRevisionNumber: __expectString(output.ClusterRevisionNumber),
    ClusterSecurityGroups:
      output.ClusterSecurityGroups != null
        ? deserializeAws_restJson1AwsRedshiftClusterClusterSecurityGroups(output.ClusterSecurityGroups, context)
        : undefined,
    ClusterSnapshotCopyStatus:
      output.ClusterSnapshotCopyStatus != null
        ? deserializeAws_restJson1AwsRedshiftClusterClusterSnapshotCopyStatus(output.ClusterSnapshotCopyStatus, context)
        : undefined,
    ClusterStatus: __expectString(output.ClusterStatus),
    ClusterSubnetGroupName: __expectString(output.ClusterSubnetGroupName),
    ClusterVersion: __expectString(output.ClusterVersion),
    DBName: __expectString(output.DBName),
    DeferredMaintenanceWindows:
      output.DeferredMaintenanceWindows != null
        ? deserializeAws_restJson1AwsRedshiftClusterDeferredMaintenanceWindows(
            output.DeferredMaintenanceWindows,
            context
          )
        : undefined,
    ElasticIpStatus:
      output.ElasticIpStatus != null
        ? deserializeAws_restJson1AwsRedshiftClusterElasticIpStatus(output.ElasticIpStatus, context)
        : undefined,
    ElasticResizeNumberOfNodeOptions: __expectString(output.ElasticResizeNumberOfNodeOptions),
    Encrypted: __expectBoolean(output.Encrypted),
    Endpoint:
      output.Endpoint != null
        ? deserializeAws_restJson1AwsRedshiftClusterEndpoint(output.Endpoint, context)
        : undefined,
    EnhancedVpcRouting: __expectBoolean(output.EnhancedVpcRouting),
    ExpectedNextSnapshotScheduleTime: __expectString(output.ExpectedNextSnapshotScheduleTime),
    ExpectedNextSnapshotScheduleTimeStatus: __expectString(output.ExpectedNextSnapshotScheduleTimeStatus),
    HsmStatus:
      output.HsmStatus != null
        ? deserializeAws_restJson1AwsRedshiftClusterHsmStatus(output.HsmStatus, context)
        : undefined,
    IamRoles:
      output.IamRoles != null
        ? deserializeAws_restJson1AwsRedshiftClusterIamRoles(output.IamRoles, context)
        : undefined,
    KmsKeyId: __expectString(output.KmsKeyId),
    LoggingStatus:
      output.LoggingStatus != null
        ? deserializeAws_restJson1AwsRedshiftClusterLoggingStatus(output.LoggingStatus, context)
        : undefined,
    MaintenanceTrackName: __expectString(output.MaintenanceTrackName),
    ManualSnapshotRetentionPeriod: __expectInt32(output.ManualSnapshotRetentionPeriod),
    MasterUsername: __expectString(output.MasterUsername),
    NextMaintenanceWindowStartTime: __expectString(output.NextMaintenanceWindowStartTime),
    NodeType: __expectString(output.NodeType),
    NumberOfNodes: __expectInt32(output.NumberOfNodes),
    PendingActions:
      output.PendingActions != null ? deserializeAws_restJson1StringList(output.PendingActions, context) : undefined,
    PendingModifiedValues:
      output.PendingModifiedValues != null
        ? deserializeAws_restJson1AwsRedshiftClusterPendingModifiedValues(output.PendingModifiedValues, context)
        : undefined,
    PreferredMaintenanceWindow: __expectString(output.PreferredMaintenanceWindow),
    PubliclyAccessible: __expectBoolean(output.PubliclyAccessible),
    ResizeInfo:
      output.ResizeInfo != null
        ? deserializeAws_restJson1AwsRedshiftClusterResizeInfo(output.ResizeInfo, context)
        : undefined,
    RestoreStatus:
      output.RestoreStatus != null
        ? deserializeAws_restJson1AwsRedshiftClusterRestoreStatus(output.RestoreStatus, context)
        : undefined,
    SnapshotScheduleIdentifier: __expectString(output.SnapshotScheduleIdentifier),
    SnapshotScheduleState: __expectString(output.SnapshotScheduleState),
    VpcId: __expectString(output.VpcId),
    VpcSecurityGroups:
      output.VpcSecurityGroups != null
        ? deserializeAws_restJson1AwsRedshiftClusterVpcSecurityGroups(output.VpcSecurityGroups, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsRedshiftClusterElasticIpStatus = (
  output: any,
  context: __SerdeContext
): AwsRedshiftClusterElasticIpStatus => {
  return {
    ElasticIp: __expectString(output.ElasticIp),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1AwsRedshiftClusterEndpoint = (
  output: any,
  context: __SerdeContext
): AwsRedshiftClusterEndpoint => {
  return {
    Address: __expectString(output.Address),
    Port: __expectInt32(output.Port),
  } as any;
};

const deserializeAws_restJson1AwsRedshiftClusterHsmStatus = (
  output: any,
  context: __SerdeContext
): AwsRedshiftClusterHsmStatus => {
  return {
    HsmClientCertificateIdentifier: __expectString(output.HsmClientCertificateIdentifier),
    HsmConfigurationIdentifier: __expectString(output.HsmConfigurationIdentifier),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1AwsRedshiftClusterIamRole = (
  output: any,
  context: __SerdeContext
): AwsRedshiftClusterIamRole => {
  return {
    ApplyStatus: __expectString(output.ApplyStatus),
    IamRoleArn: __expectString(output.IamRoleArn),
  } as any;
};

const deserializeAws_restJson1AwsRedshiftClusterIamRoles = (
  output: any,
  context: __SerdeContext
): AwsRedshiftClusterIamRole[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsRedshiftClusterIamRole(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsRedshiftClusterLoggingStatus = (
  output: any,
  context: __SerdeContext
): AwsRedshiftClusterLoggingStatus => {
  return {
    BucketName: __expectString(output.BucketName),
    LastFailureMessage: __expectString(output.LastFailureMessage),
    LastFailureTime: __expectString(output.LastFailureTime),
    LastSuccessfulDeliveryTime: __expectString(output.LastSuccessfulDeliveryTime),
    LoggingEnabled: __expectBoolean(output.LoggingEnabled),
    S3KeyPrefix: __expectString(output.S3KeyPrefix),
  } as any;
};

const deserializeAws_restJson1AwsRedshiftClusterPendingModifiedValues = (
  output: any,
  context: __SerdeContext
): AwsRedshiftClusterPendingModifiedValues => {
  return {
    AutomatedSnapshotRetentionPeriod: __expectInt32(output.AutomatedSnapshotRetentionPeriod),
    ClusterIdentifier: __expectString(output.ClusterIdentifier),
    ClusterType: __expectString(output.ClusterType),
    ClusterVersion: __expectString(output.ClusterVersion),
    EncryptionType: __expectString(output.EncryptionType),
    EnhancedVpcRouting: __expectBoolean(output.EnhancedVpcRouting),
    MaintenanceTrackName: __expectString(output.MaintenanceTrackName),
    MasterUserPassword: __expectString(output.MasterUserPassword),
    NodeType: __expectString(output.NodeType),
    NumberOfNodes: __expectInt32(output.NumberOfNodes),
    PubliclyAccessible: __expectBoolean(output.PubliclyAccessible),
  } as any;
};

const deserializeAws_restJson1AwsRedshiftClusterResizeInfo = (
  output: any,
  context: __SerdeContext
): AwsRedshiftClusterResizeInfo => {
  return {
    AllowCancelResize: __expectBoolean(output.AllowCancelResize),
    ResizeType: __expectString(output.ResizeType),
  } as any;
};

const deserializeAws_restJson1AwsRedshiftClusterRestoreStatus = (
  output: any,
  context: __SerdeContext
): AwsRedshiftClusterRestoreStatus => {
  return {
    CurrentRestoreRateInMegaBytesPerSecond: __limitedParseDouble(output.CurrentRestoreRateInMegaBytesPerSecond),
    ElapsedTimeInSeconds: __expectLong(output.ElapsedTimeInSeconds),
    EstimatedTimeToCompletionInSeconds: __expectLong(output.EstimatedTimeToCompletionInSeconds),
    ProgressInMegaBytes: __expectLong(output.ProgressInMegaBytes),
    SnapshotSizeInMegaBytes: __expectLong(output.SnapshotSizeInMegaBytes),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1AwsRedshiftClusterVpcSecurityGroup = (
  output: any,
  context: __SerdeContext
): AwsRedshiftClusterVpcSecurityGroup => {
  return {
    Status: __expectString(output.Status),
    VpcSecurityGroupId: __expectString(output.VpcSecurityGroupId),
  } as any;
};

const deserializeAws_restJson1AwsRedshiftClusterVpcSecurityGroups = (
  output: any,
  context: __SerdeContext
): AwsRedshiftClusterVpcSecurityGroup[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsRedshiftClusterVpcSecurityGroup(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsS3AccountPublicAccessBlockDetails = (
  output: any,
  context: __SerdeContext
): AwsS3AccountPublicAccessBlockDetails => {
  return {
    BlockPublicAcls: __expectBoolean(output.BlockPublicAcls),
    BlockPublicPolicy: __expectBoolean(output.BlockPublicPolicy),
    IgnorePublicAcls: __expectBoolean(output.IgnorePublicAcls),
    RestrictPublicBuckets: __expectBoolean(output.RestrictPublicBuckets),
  } as any;
};

const deserializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationDetails = (
  output: any,
  context: __SerdeContext
): AwsS3BucketBucketLifecycleConfigurationDetails => {
  return {
    Rules:
      output.Rules != null
        ? deserializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesList(output.Rules, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails = (
  output: any,
  context: __SerdeContext
): AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails => {
  return {
    DaysAfterInitiation: __expectInt32(output.DaysAfterInitiation),
  } as any;
};

const deserializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesDetails = (
  output: any,
  context: __SerdeContext
): AwsS3BucketBucketLifecycleConfigurationRulesDetails => {
  return {
    AbortIncompleteMultipartUpload:
      output.AbortIncompleteMultipartUpload != null
        ? deserializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails(
            output.AbortIncompleteMultipartUpload,
            context
          )
        : undefined,
    ExpirationDate: __expectString(output.ExpirationDate),
    ExpirationInDays: __expectInt32(output.ExpirationInDays),
    ExpiredObjectDeleteMarker: __expectBoolean(output.ExpiredObjectDeleteMarker),
    Filter:
      output.Filter != null
        ? deserializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails(output.Filter, context)
        : undefined,
    ID: __expectString(output.ID),
    NoncurrentVersionExpirationInDays: __expectInt32(output.NoncurrentVersionExpirationInDays),
    NoncurrentVersionTransitions:
      output.NoncurrentVersionTransitions != null
        ? deserializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsList(
            output.NoncurrentVersionTransitions,
            context
          )
        : undefined,
    Prefix: __expectString(output.Prefix),
    Status: __expectString(output.Status),
    Transitions:
      output.Transitions != null
        ? deserializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesTransitionsList(
            output.Transitions,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails = (
  output: any,
  context: __SerdeContext
): AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails => {
  return {
    Predicate:
      output.Predicate != null
        ? deserializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails(
            output.Predicate,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails = (
  output: any,
  context: __SerdeContext
): AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails => {
  return {
    Operands:
      output.Operands != null
        ? deserializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsList(
            output.Operands,
            context
          )
        : undefined,
    Prefix: __expectString(output.Prefix),
    Tag:
      output.Tag != null
        ? deserializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails(
            output.Tag,
            context
          )
        : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails = (
  output: any,
  context: __SerdeContext
): AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails => {
  return {
    Prefix: __expectString(output.Prefix),
    Tag:
      output.Tag != null
        ? deserializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails(
            output.Tag,
            context
          )
        : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsList = (
  output: any,
  context: __SerdeContext
): AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails(
        entry,
        context
      );
    });
  return retVal;
};

const deserializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails = (
  output: any,
  context: __SerdeContext
): AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails = (
  output: any,
  context: __SerdeContext
): AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesList = (
  output: any,
  context: __SerdeContext
): AwsS3BucketBucketLifecycleConfigurationRulesDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails = (
  output: any,
  context: __SerdeContext
): AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails => {
  return {
    Days: __expectInt32(output.Days),
    StorageClass: __expectString(output.StorageClass),
  } as any;
};

const deserializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsList = (
  output: any,
  context: __SerdeContext
): AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails(
        entry,
        context
      );
    });
  return retVal;
};

const deserializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails = (
  output: any,
  context: __SerdeContext
): AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails => {
  return {
    Date: __expectString(output.Date),
    Days: __expectInt32(output.Days),
    StorageClass: __expectString(output.StorageClass),
  } as any;
};

const deserializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesTransitionsList = (
  output: any,
  context: __SerdeContext
): AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationRulesTransitionsDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsS3BucketBucketVersioningConfiguration = (
  output: any,
  context: __SerdeContext
): AwsS3BucketBucketVersioningConfiguration => {
  return {
    IsMfaDeleteEnabled: __expectBoolean(output.IsMfaDeleteEnabled),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1AwsS3BucketDetails = (output: any, context: __SerdeContext): AwsS3BucketDetails => {
  return {
    AccessControlList: __expectString(output.AccessControlList),
    BucketLifecycleConfiguration:
      output.BucketLifecycleConfiguration != null
        ? deserializeAws_restJson1AwsS3BucketBucketLifecycleConfigurationDetails(
            output.BucketLifecycleConfiguration,
            context
          )
        : undefined,
    BucketLoggingConfiguration:
      output.BucketLoggingConfiguration != null
        ? deserializeAws_restJson1AwsS3BucketLoggingConfiguration(output.BucketLoggingConfiguration, context)
        : undefined,
    BucketNotificationConfiguration:
      output.BucketNotificationConfiguration != null
        ? deserializeAws_restJson1AwsS3BucketNotificationConfiguration(output.BucketNotificationConfiguration, context)
        : undefined,
    BucketVersioningConfiguration:
      output.BucketVersioningConfiguration != null
        ? deserializeAws_restJson1AwsS3BucketBucketVersioningConfiguration(
            output.BucketVersioningConfiguration,
            context
          )
        : undefined,
    BucketWebsiteConfiguration:
      output.BucketWebsiteConfiguration != null
        ? deserializeAws_restJson1AwsS3BucketWebsiteConfiguration(output.BucketWebsiteConfiguration, context)
        : undefined,
    CreatedAt: __expectString(output.CreatedAt),
    OwnerAccountId: __expectString(output.OwnerAccountId),
    OwnerId: __expectString(output.OwnerId),
    OwnerName: __expectString(output.OwnerName),
    PublicAccessBlockConfiguration:
      output.PublicAccessBlockConfiguration != null
        ? deserializeAws_restJson1AwsS3AccountPublicAccessBlockDetails(output.PublicAccessBlockConfiguration, context)
        : undefined,
    ServerSideEncryptionConfiguration:
      output.ServerSideEncryptionConfiguration != null
        ? deserializeAws_restJson1AwsS3BucketServerSideEncryptionConfiguration(
            output.ServerSideEncryptionConfiguration,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsS3BucketLoggingConfiguration = (
  output: any,
  context: __SerdeContext
): AwsS3BucketLoggingConfiguration => {
  return {
    DestinationBucketName: __expectString(output.DestinationBucketName),
    LogFilePrefix: __expectString(output.LogFilePrefix),
  } as any;
};

const deserializeAws_restJson1AwsS3BucketNotificationConfiguration = (
  output: any,
  context: __SerdeContext
): AwsS3BucketNotificationConfiguration => {
  return {
    Configurations:
      output.Configurations != null
        ? deserializeAws_restJson1AwsS3BucketNotificationConfigurationDetails(output.Configurations, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsS3BucketNotificationConfigurationDetail = (
  output: any,
  context: __SerdeContext
): AwsS3BucketNotificationConfigurationDetail => {
  return {
    Destination: __expectString(output.Destination),
    Events:
      output.Events != null
        ? deserializeAws_restJson1AwsS3BucketNotificationConfigurationEvents(output.Events, context)
        : undefined,
    Filter:
      output.Filter != null
        ? deserializeAws_restJson1AwsS3BucketNotificationConfigurationFilter(output.Filter, context)
        : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1AwsS3BucketNotificationConfigurationDetails = (
  output: any,
  context: __SerdeContext
): AwsS3BucketNotificationConfigurationDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsS3BucketNotificationConfigurationDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsS3BucketNotificationConfigurationEvents = (
  output: any,
  context: __SerdeContext
): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1AwsS3BucketNotificationConfigurationFilter = (
  output: any,
  context: __SerdeContext
): AwsS3BucketNotificationConfigurationFilter => {
  return {
    S3KeyFilter:
      output.S3KeyFilter != null
        ? deserializeAws_restJson1AwsS3BucketNotificationConfigurationS3KeyFilter(output.S3KeyFilter, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsS3BucketNotificationConfigurationS3KeyFilter = (
  output: any,
  context: __SerdeContext
): AwsS3BucketNotificationConfigurationS3KeyFilter => {
  return {
    FilterRules:
      output.FilterRules != null
        ? deserializeAws_restJson1AwsS3BucketNotificationConfigurationS3KeyFilterRules(output.FilterRules, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsS3BucketNotificationConfigurationS3KeyFilterRule = (
  output: any,
  context: __SerdeContext
): AwsS3BucketNotificationConfigurationS3KeyFilterRule => {
  return {
    Name: __expectString(output.Name),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1AwsS3BucketNotificationConfigurationS3KeyFilterRules = (
  output: any,
  context: __SerdeContext
): AwsS3BucketNotificationConfigurationS3KeyFilterRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsS3BucketNotificationConfigurationS3KeyFilterRule(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsS3BucketServerSideEncryptionByDefault = (
  output: any,
  context: __SerdeContext
): AwsS3BucketServerSideEncryptionByDefault => {
  return {
    KMSMasterKeyID: __expectString(output.KMSMasterKeyID),
    SSEAlgorithm: __expectString(output.SSEAlgorithm),
  } as any;
};

const deserializeAws_restJson1AwsS3BucketServerSideEncryptionConfiguration = (
  output: any,
  context: __SerdeContext
): AwsS3BucketServerSideEncryptionConfiguration => {
  return {
    Rules:
      output.Rules != null
        ? deserializeAws_restJson1AwsS3BucketServerSideEncryptionRules(output.Rules, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsS3BucketServerSideEncryptionRule = (
  output: any,
  context: __SerdeContext
): AwsS3BucketServerSideEncryptionRule => {
  return {
    ApplyServerSideEncryptionByDefault:
      output.ApplyServerSideEncryptionByDefault != null
        ? deserializeAws_restJson1AwsS3BucketServerSideEncryptionByDefault(
            output.ApplyServerSideEncryptionByDefault,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsS3BucketServerSideEncryptionRules = (
  output: any,
  context: __SerdeContext
): AwsS3BucketServerSideEncryptionRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsS3BucketServerSideEncryptionRule(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsS3BucketWebsiteConfiguration = (
  output: any,
  context: __SerdeContext
): AwsS3BucketWebsiteConfiguration => {
  return {
    ErrorDocument: __expectString(output.ErrorDocument),
    IndexDocumentSuffix: __expectString(output.IndexDocumentSuffix),
    RedirectAllRequestsTo:
      output.RedirectAllRequestsTo != null
        ? deserializeAws_restJson1AwsS3BucketWebsiteConfigurationRedirectTo(output.RedirectAllRequestsTo, context)
        : undefined,
    RoutingRules:
      output.RoutingRules != null
        ? deserializeAws_restJson1AwsS3BucketWebsiteConfigurationRoutingRules(output.RoutingRules, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsS3BucketWebsiteConfigurationRedirectTo = (
  output: any,
  context: __SerdeContext
): AwsS3BucketWebsiteConfigurationRedirectTo => {
  return {
    Hostname: __expectString(output.Hostname),
    Protocol: __expectString(output.Protocol),
  } as any;
};

const deserializeAws_restJson1AwsS3BucketWebsiteConfigurationRoutingRule = (
  output: any,
  context: __SerdeContext
): AwsS3BucketWebsiteConfigurationRoutingRule => {
  return {
    Condition:
      output.Condition != null
        ? deserializeAws_restJson1AwsS3BucketWebsiteConfigurationRoutingRuleCondition(output.Condition, context)
        : undefined,
    Redirect:
      output.Redirect != null
        ? deserializeAws_restJson1AwsS3BucketWebsiteConfigurationRoutingRuleRedirect(output.Redirect, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsS3BucketWebsiteConfigurationRoutingRuleCondition = (
  output: any,
  context: __SerdeContext
): AwsS3BucketWebsiteConfigurationRoutingRuleCondition => {
  return {
    HttpErrorCodeReturnedEquals: __expectString(output.HttpErrorCodeReturnedEquals),
    KeyPrefixEquals: __expectString(output.KeyPrefixEquals),
  } as any;
};

const deserializeAws_restJson1AwsS3BucketWebsiteConfigurationRoutingRuleRedirect = (
  output: any,
  context: __SerdeContext
): AwsS3BucketWebsiteConfigurationRoutingRuleRedirect => {
  return {
    Hostname: __expectString(output.Hostname),
    HttpRedirectCode: __expectString(output.HttpRedirectCode),
    Protocol: __expectString(output.Protocol),
    ReplaceKeyPrefixWith: __expectString(output.ReplaceKeyPrefixWith),
    ReplaceKeyWith: __expectString(output.ReplaceKeyWith),
  } as any;
};

const deserializeAws_restJson1AwsS3BucketWebsiteConfigurationRoutingRules = (
  output: any,
  context: __SerdeContext
): AwsS3BucketWebsiteConfigurationRoutingRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsS3BucketWebsiteConfigurationRoutingRule(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsS3ObjectDetails = (output: any, context: __SerdeContext): AwsS3ObjectDetails => {
  return {
    ContentType: __expectString(output.ContentType),
    ETag: __expectString(output.ETag),
    LastModified: __expectString(output.LastModified),
    SSEKMSKeyId: __expectString(output.SSEKMSKeyId),
    ServerSideEncryption: __expectString(output.ServerSideEncryption),
    VersionId: __expectString(output.VersionId),
  } as any;
};

const deserializeAws_restJson1AwsSecretsManagerSecretDetails = (
  output: any,
  context: __SerdeContext
): AwsSecretsManagerSecretDetails => {
  return {
    Deleted: __expectBoolean(output.Deleted),
    Description: __expectString(output.Description),
    KmsKeyId: __expectString(output.KmsKeyId),
    Name: __expectString(output.Name),
    RotationEnabled: __expectBoolean(output.RotationEnabled),
    RotationLambdaArn: __expectString(output.RotationLambdaArn),
    RotationOccurredWithinFrequency: __expectBoolean(output.RotationOccurredWithinFrequency),
    RotationRules:
      output.RotationRules != null
        ? deserializeAws_restJson1AwsSecretsManagerSecretRotationRules(output.RotationRules, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsSecretsManagerSecretRotationRules = (
  output: any,
  context: __SerdeContext
): AwsSecretsManagerSecretRotationRules => {
  return {
    AutomaticallyAfterDays: __expectInt32(output.AutomaticallyAfterDays),
  } as any;
};

const deserializeAws_restJson1AwsSecurityFinding = (output: any, context: __SerdeContext): AwsSecurityFinding => {
  return {
    Action: output.Action != null ? deserializeAws_restJson1Action(output.Action, context) : undefined,
    AwsAccountId: __expectString(output.AwsAccountId),
    CompanyName: __expectString(output.CompanyName),
    Compliance: output.Compliance != null ? deserializeAws_restJson1Compliance(output.Compliance, context) : undefined,
    Confidence: __expectInt32(output.Confidence),
    CreatedAt: __expectString(output.CreatedAt),
    Criticality: __expectInt32(output.Criticality),
    Description: __expectString(output.Description),
    FindingProviderFields:
      output.FindingProviderFields != null
        ? deserializeAws_restJson1FindingProviderFields(output.FindingProviderFields, context)
        : undefined,
    FirstObservedAt: __expectString(output.FirstObservedAt),
    GeneratorId: __expectString(output.GeneratorId),
    Id: __expectString(output.Id),
    LastObservedAt: __expectString(output.LastObservedAt),
    Malware: output.Malware != null ? deserializeAws_restJson1MalwareList(output.Malware, context) : undefined,
    Network: output.Network != null ? deserializeAws_restJson1Network(output.Network, context) : undefined,
    NetworkPath:
      output.NetworkPath != null ? deserializeAws_restJson1NetworkPathList(output.NetworkPath, context) : undefined,
    Note: output.Note != null ? deserializeAws_restJson1Note(output.Note, context) : undefined,
    PatchSummary:
      output.PatchSummary != null ? deserializeAws_restJson1PatchSummary(output.PatchSummary, context) : undefined,
    Process: output.Process != null ? deserializeAws_restJson1ProcessDetails(output.Process, context) : undefined,
    ProductArn: __expectString(output.ProductArn),
    ProductFields:
      output.ProductFields != null ? deserializeAws_restJson1FieldMap(output.ProductFields, context) : undefined,
    ProductName: __expectString(output.ProductName),
    RecordState: __expectString(output.RecordState),
    Region: __expectString(output.Region),
    RelatedFindings:
      output.RelatedFindings != null
        ? deserializeAws_restJson1RelatedFindingList(output.RelatedFindings, context)
        : undefined,
    Remediation:
      output.Remediation != null ? deserializeAws_restJson1Remediation(output.Remediation, context) : undefined,
    Resources: output.Resources != null ? deserializeAws_restJson1ResourceList(output.Resources, context) : undefined,
    Sample: __expectBoolean(output.Sample),
    SchemaVersion: __expectString(output.SchemaVersion),
    Severity: output.Severity != null ? deserializeAws_restJson1Severity(output.Severity, context) : undefined,
    SourceUrl: __expectString(output.SourceUrl),
    ThreatIntelIndicators:
      output.ThreatIntelIndicators != null
        ? deserializeAws_restJson1ThreatIntelIndicatorList(output.ThreatIntelIndicators, context)
        : undefined,
    Threats: output.Threats != null ? deserializeAws_restJson1ThreatList(output.Threats, context) : undefined,
    Title: __expectString(output.Title),
    Types: output.Types != null ? deserializeAws_restJson1TypeList(output.Types, context) : undefined,
    UpdatedAt: __expectString(output.UpdatedAt),
    UserDefinedFields:
      output.UserDefinedFields != null
        ? deserializeAws_restJson1FieldMap(output.UserDefinedFields, context)
        : undefined,
    VerificationState: __expectString(output.VerificationState),
    Vulnerabilities:
      output.Vulnerabilities != null
        ? deserializeAws_restJson1VulnerabilityList(output.Vulnerabilities, context)
        : undefined,
    Workflow: output.Workflow != null ? deserializeAws_restJson1Workflow(output.Workflow, context) : undefined,
    WorkflowState: __expectString(output.WorkflowState),
  } as any;
};

const deserializeAws_restJson1AwsSecurityFindingFilters = (
  output: any,
  context: __SerdeContext
): AwsSecurityFindingFilters => {
  return {
    AwsAccountId:
      output.AwsAccountId != null ? deserializeAws_restJson1StringFilterList(output.AwsAccountId, context) : undefined,
    CompanyName:
      output.CompanyName != null ? deserializeAws_restJson1StringFilterList(output.CompanyName, context) : undefined,
    ComplianceStatus:
      output.ComplianceStatus != null
        ? deserializeAws_restJson1StringFilterList(output.ComplianceStatus, context)
        : undefined,
    Confidence:
      output.Confidence != null ? deserializeAws_restJson1NumberFilterList(output.Confidence, context) : undefined,
    CreatedAt: output.CreatedAt != null ? deserializeAws_restJson1DateFilterList(output.CreatedAt, context) : undefined,
    Criticality:
      output.Criticality != null ? deserializeAws_restJson1NumberFilterList(output.Criticality, context) : undefined,
    Description:
      output.Description != null ? deserializeAws_restJson1StringFilterList(output.Description, context) : undefined,
    FindingProviderFieldsConfidence:
      output.FindingProviderFieldsConfidence != null
        ? deserializeAws_restJson1NumberFilterList(output.FindingProviderFieldsConfidence, context)
        : undefined,
    FindingProviderFieldsCriticality:
      output.FindingProviderFieldsCriticality != null
        ? deserializeAws_restJson1NumberFilterList(output.FindingProviderFieldsCriticality, context)
        : undefined,
    FindingProviderFieldsRelatedFindingsId:
      output.FindingProviderFieldsRelatedFindingsId != null
        ? deserializeAws_restJson1StringFilterList(output.FindingProviderFieldsRelatedFindingsId, context)
        : undefined,
    FindingProviderFieldsRelatedFindingsProductArn:
      output.FindingProviderFieldsRelatedFindingsProductArn != null
        ? deserializeAws_restJson1StringFilterList(output.FindingProviderFieldsRelatedFindingsProductArn, context)
        : undefined,
    FindingProviderFieldsSeverityLabel:
      output.FindingProviderFieldsSeverityLabel != null
        ? deserializeAws_restJson1StringFilterList(output.FindingProviderFieldsSeverityLabel, context)
        : undefined,
    FindingProviderFieldsSeverityOriginal:
      output.FindingProviderFieldsSeverityOriginal != null
        ? deserializeAws_restJson1StringFilterList(output.FindingProviderFieldsSeverityOriginal, context)
        : undefined,
    FindingProviderFieldsTypes:
      output.FindingProviderFieldsTypes != null
        ? deserializeAws_restJson1StringFilterList(output.FindingProviderFieldsTypes, context)
        : undefined,
    FirstObservedAt:
      output.FirstObservedAt != null
        ? deserializeAws_restJson1DateFilterList(output.FirstObservedAt, context)
        : undefined,
    GeneratorId:
      output.GeneratorId != null ? deserializeAws_restJson1StringFilterList(output.GeneratorId, context) : undefined,
    Id: output.Id != null ? deserializeAws_restJson1StringFilterList(output.Id, context) : undefined,
    Keyword: output.Keyword != null ? deserializeAws_restJson1KeywordFilterList(output.Keyword, context) : undefined,
    LastObservedAt:
      output.LastObservedAt != null
        ? deserializeAws_restJson1DateFilterList(output.LastObservedAt, context)
        : undefined,
    MalwareName:
      output.MalwareName != null ? deserializeAws_restJson1StringFilterList(output.MalwareName, context) : undefined,
    MalwarePath:
      output.MalwarePath != null ? deserializeAws_restJson1StringFilterList(output.MalwarePath, context) : undefined,
    MalwareState:
      output.MalwareState != null ? deserializeAws_restJson1StringFilterList(output.MalwareState, context) : undefined,
    MalwareType:
      output.MalwareType != null ? deserializeAws_restJson1StringFilterList(output.MalwareType, context) : undefined,
    NetworkDestinationDomain:
      output.NetworkDestinationDomain != null
        ? deserializeAws_restJson1StringFilterList(output.NetworkDestinationDomain, context)
        : undefined,
    NetworkDestinationIpV4:
      output.NetworkDestinationIpV4 != null
        ? deserializeAws_restJson1IpFilterList(output.NetworkDestinationIpV4, context)
        : undefined,
    NetworkDestinationIpV6:
      output.NetworkDestinationIpV6 != null
        ? deserializeAws_restJson1IpFilterList(output.NetworkDestinationIpV6, context)
        : undefined,
    NetworkDestinationPort:
      output.NetworkDestinationPort != null
        ? deserializeAws_restJson1NumberFilterList(output.NetworkDestinationPort, context)
        : undefined,
    NetworkDirection:
      output.NetworkDirection != null
        ? deserializeAws_restJson1StringFilterList(output.NetworkDirection, context)
        : undefined,
    NetworkProtocol:
      output.NetworkProtocol != null
        ? deserializeAws_restJson1StringFilterList(output.NetworkProtocol, context)
        : undefined,
    NetworkSourceDomain:
      output.NetworkSourceDomain != null
        ? deserializeAws_restJson1StringFilterList(output.NetworkSourceDomain, context)
        : undefined,
    NetworkSourceIpV4:
      output.NetworkSourceIpV4 != null
        ? deserializeAws_restJson1IpFilterList(output.NetworkSourceIpV4, context)
        : undefined,
    NetworkSourceIpV6:
      output.NetworkSourceIpV6 != null
        ? deserializeAws_restJson1IpFilterList(output.NetworkSourceIpV6, context)
        : undefined,
    NetworkSourceMac:
      output.NetworkSourceMac != null
        ? deserializeAws_restJson1StringFilterList(output.NetworkSourceMac, context)
        : undefined,
    NetworkSourcePort:
      output.NetworkSourcePort != null
        ? deserializeAws_restJson1NumberFilterList(output.NetworkSourcePort, context)
        : undefined,
    NoteText: output.NoteText != null ? deserializeAws_restJson1StringFilterList(output.NoteText, context) : undefined,
    NoteUpdatedAt:
      output.NoteUpdatedAt != null ? deserializeAws_restJson1DateFilterList(output.NoteUpdatedAt, context) : undefined,
    NoteUpdatedBy:
      output.NoteUpdatedBy != null
        ? deserializeAws_restJson1StringFilterList(output.NoteUpdatedBy, context)
        : undefined,
    ProcessLaunchedAt:
      output.ProcessLaunchedAt != null
        ? deserializeAws_restJson1DateFilterList(output.ProcessLaunchedAt, context)
        : undefined,
    ProcessName:
      output.ProcessName != null ? deserializeAws_restJson1StringFilterList(output.ProcessName, context) : undefined,
    ProcessParentPid:
      output.ProcessParentPid != null
        ? deserializeAws_restJson1NumberFilterList(output.ProcessParentPid, context)
        : undefined,
    ProcessPath:
      output.ProcessPath != null ? deserializeAws_restJson1StringFilterList(output.ProcessPath, context) : undefined,
    ProcessPid:
      output.ProcessPid != null ? deserializeAws_restJson1NumberFilterList(output.ProcessPid, context) : undefined,
    ProcessTerminatedAt:
      output.ProcessTerminatedAt != null
        ? deserializeAws_restJson1DateFilterList(output.ProcessTerminatedAt, context)
        : undefined,
    ProductArn:
      output.ProductArn != null ? deserializeAws_restJson1StringFilterList(output.ProductArn, context) : undefined,
    ProductFields:
      output.ProductFields != null ? deserializeAws_restJson1MapFilterList(output.ProductFields, context) : undefined,
    ProductName:
      output.ProductName != null ? deserializeAws_restJson1StringFilterList(output.ProductName, context) : undefined,
    RecommendationText:
      output.RecommendationText != null
        ? deserializeAws_restJson1StringFilterList(output.RecommendationText, context)
        : undefined,
    RecordState:
      output.RecordState != null ? deserializeAws_restJson1StringFilterList(output.RecordState, context) : undefined,
    Region: output.Region != null ? deserializeAws_restJson1StringFilterList(output.Region, context) : undefined,
    RelatedFindingsId:
      output.RelatedFindingsId != null
        ? deserializeAws_restJson1StringFilterList(output.RelatedFindingsId, context)
        : undefined,
    RelatedFindingsProductArn:
      output.RelatedFindingsProductArn != null
        ? deserializeAws_restJson1StringFilterList(output.RelatedFindingsProductArn, context)
        : undefined,
    ResourceAwsEc2InstanceIamInstanceProfileArn:
      output.ResourceAwsEc2InstanceIamInstanceProfileArn != null
        ? deserializeAws_restJson1StringFilterList(output.ResourceAwsEc2InstanceIamInstanceProfileArn, context)
        : undefined,
    ResourceAwsEc2InstanceImageId:
      output.ResourceAwsEc2InstanceImageId != null
        ? deserializeAws_restJson1StringFilterList(output.ResourceAwsEc2InstanceImageId, context)
        : undefined,
    ResourceAwsEc2InstanceIpV4Addresses:
      output.ResourceAwsEc2InstanceIpV4Addresses != null
        ? deserializeAws_restJson1IpFilterList(output.ResourceAwsEc2InstanceIpV4Addresses, context)
        : undefined,
    ResourceAwsEc2InstanceIpV6Addresses:
      output.ResourceAwsEc2InstanceIpV6Addresses != null
        ? deserializeAws_restJson1IpFilterList(output.ResourceAwsEc2InstanceIpV6Addresses, context)
        : undefined,
    ResourceAwsEc2InstanceKeyName:
      output.ResourceAwsEc2InstanceKeyName != null
        ? deserializeAws_restJson1StringFilterList(output.ResourceAwsEc2InstanceKeyName, context)
        : undefined,
    ResourceAwsEc2InstanceLaunchedAt:
      output.ResourceAwsEc2InstanceLaunchedAt != null
        ? deserializeAws_restJson1DateFilterList(output.ResourceAwsEc2InstanceLaunchedAt, context)
        : undefined,
    ResourceAwsEc2InstanceSubnetId:
      output.ResourceAwsEc2InstanceSubnetId != null
        ? deserializeAws_restJson1StringFilterList(output.ResourceAwsEc2InstanceSubnetId, context)
        : undefined,
    ResourceAwsEc2InstanceType:
      output.ResourceAwsEc2InstanceType != null
        ? deserializeAws_restJson1StringFilterList(output.ResourceAwsEc2InstanceType, context)
        : undefined,
    ResourceAwsEc2InstanceVpcId:
      output.ResourceAwsEc2InstanceVpcId != null
        ? deserializeAws_restJson1StringFilterList(output.ResourceAwsEc2InstanceVpcId, context)
        : undefined,
    ResourceAwsIamAccessKeyCreatedAt:
      output.ResourceAwsIamAccessKeyCreatedAt != null
        ? deserializeAws_restJson1DateFilterList(output.ResourceAwsIamAccessKeyCreatedAt, context)
        : undefined,
    ResourceAwsIamAccessKeyPrincipalName:
      output.ResourceAwsIamAccessKeyPrincipalName != null
        ? deserializeAws_restJson1StringFilterList(output.ResourceAwsIamAccessKeyPrincipalName, context)
        : undefined,
    ResourceAwsIamAccessKeyStatus:
      output.ResourceAwsIamAccessKeyStatus != null
        ? deserializeAws_restJson1StringFilterList(output.ResourceAwsIamAccessKeyStatus, context)
        : undefined,
    ResourceAwsIamAccessKeyUserName:
      output.ResourceAwsIamAccessKeyUserName != null
        ? deserializeAws_restJson1StringFilterList(output.ResourceAwsIamAccessKeyUserName, context)
        : undefined,
    ResourceAwsIamUserUserName:
      output.ResourceAwsIamUserUserName != null
        ? deserializeAws_restJson1StringFilterList(output.ResourceAwsIamUserUserName, context)
        : undefined,
    ResourceAwsS3BucketOwnerId:
      output.ResourceAwsS3BucketOwnerId != null
        ? deserializeAws_restJson1StringFilterList(output.ResourceAwsS3BucketOwnerId, context)
        : undefined,
    ResourceAwsS3BucketOwnerName:
      output.ResourceAwsS3BucketOwnerName != null
        ? deserializeAws_restJson1StringFilterList(output.ResourceAwsS3BucketOwnerName, context)
        : undefined,
    ResourceContainerImageId:
      output.ResourceContainerImageId != null
        ? deserializeAws_restJson1StringFilterList(output.ResourceContainerImageId, context)
        : undefined,
    ResourceContainerImageName:
      output.ResourceContainerImageName != null
        ? deserializeAws_restJson1StringFilterList(output.ResourceContainerImageName, context)
        : undefined,
    ResourceContainerLaunchedAt:
      output.ResourceContainerLaunchedAt != null
        ? deserializeAws_restJson1DateFilterList(output.ResourceContainerLaunchedAt, context)
        : undefined,
    ResourceContainerName:
      output.ResourceContainerName != null
        ? deserializeAws_restJson1StringFilterList(output.ResourceContainerName, context)
        : undefined,
    ResourceDetailsOther:
      output.ResourceDetailsOther != null
        ? deserializeAws_restJson1MapFilterList(output.ResourceDetailsOther, context)
        : undefined,
    ResourceId:
      output.ResourceId != null ? deserializeAws_restJson1StringFilterList(output.ResourceId, context) : undefined,
    ResourcePartition:
      output.ResourcePartition != null
        ? deserializeAws_restJson1StringFilterList(output.ResourcePartition, context)
        : undefined,
    ResourceRegion:
      output.ResourceRegion != null
        ? deserializeAws_restJson1StringFilterList(output.ResourceRegion, context)
        : undefined,
    ResourceTags:
      output.ResourceTags != null ? deserializeAws_restJson1MapFilterList(output.ResourceTags, context) : undefined,
    ResourceType:
      output.ResourceType != null ? deserializeAws_restJson1StringFilterList(output.ResourceType, context) : undefined,
    Sample: output.Sample != null ? deserializeAws_restJson1BooleanFilterList(output.Sample, context) : undefined,
    SeverityLabel:
      output.SeverityLabel != null
        ? deserializeAws_restJson1StringFilterList(output.SeverityLabel, context)
        : undefined,
    SeverityNormalized:
      output.SeverityNormalized != null
        ? deserializeAws_restJson1NumberFilterList(output.SeverityNormalized, context)
        : undefined,
    SeverityProduct:
      output.SeverityProduct != null
        ? deserializeAws_restJson1NumberFilterList(output.SeverityProduct, context)
        : undefined,
    SourceUrl:
      output.SourceUrl != null ? deserializeAws_restJson1StringFilterList(output.SourceUrl, context) : undefined,
    ThreatIntelIndicatorCategory:
      output.ThreatIntelIndicatorCategory != null
        ? deserializeAws_restJson1StringFilterList(output.ThreatIntelIndicatorCategory, context)
        : undefined,
    ThreatIntelIndicatorLastObservedAt:
      output.ThreatIntelIndicatorLastObservedAt != null
        ? deserializeAws_restJson1DateFilterList(output.ThreatIntelIndicatorLastObservedAt, context)
        : undefined,
    ThreatIntelIndicatorSource:
      output.ThreatIntelIndicatorSource != null
        ? deserializeAws_restJson1StringFilterList(output.ThreatIntelIndicatorSource, context)
        : undefined,
    ThreatIntelIndicatorSourceUrl:
      output.ThreatIntelIndicatorSourceUrl != null
        ? deserializeAws_restJson1StringFilterList(output.ThreatIntelIndicatorSourceUrl, context)
        : undefined,
    ThreatIntelIndicatorType:
      output.ThreatIntelIndicatorType != null
        ? deserializeAws_restJson1StringFilterList(output.ThreatIntelIndicatorType, context)
        : undefined,
    ThreatIntelIndicatorValue:
      output.ThreatIntelIndicatorValue != null
        ? deserializeAws_restJson1StringFilterList(output.ThreatIntelIndicatorValue, context)
        : undefined,
    Title: output.Title != null ? deserializeAws_restJson1StringFilterList(output.Title, context) : undefined,
    Type: output.Type != null ? deserializeAws_restJson1StringFilterList(output.Type, context) : undefined,
    UpdatedAt: output.UpdatedAt != null ? deserializeAws_restJson1DateFilterList(output.UpdatedAt, context) : undefined,
    UserDefinedFields:
      output.UserDefinedFields != null
        ? deserializeAws_restJson1MapFilterList(output.UserDefinedFields, context)
        : undefined,
    VerificationState:
      output.VerificationState != null
        ? deserializeAws_restJson1StringFilterList(output.VerificationState, context)
        : undefined,
    WorkflowState:
      output.WorkflowState != null
        ? deserializeAws_restJson1StringFilterList(output.WorkflowState, context)
        : undefined,
    WorkflowStatus:
      output.WorkflowStatus != null
        ? deserializeAws_restJson1StringFilterList(output.WorkflowStatus, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsSecurityFindingIdentifier = (
  output: any,
  context: __SerdeContext
): AwsSecurityFindingIdentifier => {
  return {
    Id: __expectString(output.Id),
    ProductArn: __expectString(output.ProductArn),
  } as any;
};

const deserializeAws_restJson1AwsSecurityFindingIdentifierList = (
  output: any,
  context: __SerdeContext
): AwsSecurityFindingIdentifier[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsSecurityFindingIdentifier(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsSecurityFindingList = (output: any, context: __SerdeContext): AwsSecurityFinding[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsSecurityFinding(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsSnsTopicDetails = (output: any, context: __SerdeContext): AwsSnsTopicDetails => {
  return {
    ApplicationSuccessFeedbackRoleArn: __expectString(output.ApplicationSuccessFeedbackRoleArn),
    FirehoseFailureFeedbackRoleArn: __expectString(output.FirehoseFailureFeedbackRoleArn),
    FirehoseSuccessFeedbackRoleArn: __expectString(output.FirehoseSuccessFeedbackRoleArn),
    HttpFailureFeedbackRoleArn: __expectString(output.HttpFailureFeedbackRoleArn),
    HttpSuccessFeedbackRoleArn: __expectString(output.HttpSuccessFeedbackRoleArn),
    KmsMasterKeyId: __expectString(output.KmsMasterKeyId),
    Owner: __expectString(output.Owner),
    SqsFailureFeedbackRoleArn: __expectString(output.SqsFailureFeedbackRoleArn),
    SqsSuccessFeedbackRoleArn: __expectString(output.SqsSuccessFeedbackRoleArn),
    Subscription:
      output.Subscription != null
        ? deserializeAws_restJson1AwsSnsTopicSubscriptionList(output.Subscription, context)
        : undefined,
    TopicName: __expectString(output.TopicName),
  } as any;
};

const deserializeAws_restJson1AwsSnsTopicSubscription = (
  output: any,
  context: __SerdeContext
): AwsSnsTopicSubscription => {
  return {
    Endpoint: __expectString(output.Endpoint),
    Protocol: __expectString(output.Protocol),
  } as any;
};

const deserializeAws_restJson1AwsSnsTopicSubscriptionList = (
  output: any,
  context: __SerdeContext
): AwsSnsTopicSubscription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsSnsTopicSubscription(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsSqsQueueDetails = (output: any, context: __SerdeContext): AwsSqsQueueDetails => {
  return {
    DeadLetterTargetArn: __expectString(output.DeadLetterTargetArn),
    KmsDataKeyReusePeriodSeconds: __expectInt32(output.KmsDataKeyReusePeriodSeconds),
    KmsMasterKeyId: __expectString(output.KmsMasterKeyId),
    QueueName: __expectString(output.QueueName),
  } as any;
};

const deserializeAws_restJson1AwsSsmComplianceSummary = (
  output: any,
  context: __SerdeContext
): AwsSsmComplianceSummary => {
  return {
    ComplianceType: __expectString(output.ComplianceType),
    CompliantCriticalCount: __expectInt32(output.CompliantCriticalCount),
    CompliantHighCount: __expectInt32(output.CompliantHighCount),
    CompliantInformationalCount: __expectInt32(output.CompliantInformationalCount),
    CompliantLowCount: __expectInt32(output.CompliantLowCount),
    CompliantMediumCount: __expectInt32(output.CompliantMediumCount),
    CompliantUnspecifiedCount: __expectInt32(output.CompliantUnspecifiedCount),
    ExecutionType: __expectString(output.ExecutionType),
    NonCompliantCriticalCount: __expectInt32(output.NonCompliantCriticalCount),
    NonCompliantHighCount: __expectInt32(output.NonCompliantHighCount),
    NonCompliantInformationalCount: __expectInt32(output.NonCompliantInformationalCount),
    NonCompliantLowCount: __expectInt32(output.NonCompliantLowCount),
    NonCompliantMediumCount: __expectInt32(output.NonCompliantMediumCount),
    NonCompliantUnspecifiedCount: __expectInt32(output.NonCompliantUnspecifiedCount),
    OverallSeverity: __expectString(output.OverallSeverity),
    PatchBaselineId: __expectString(output.PatchBaselineId),
    PatchGroup: __expectString(output.PatchGroup),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1AwsSsmPatch = (output: any, context: __SerdeContext): AwsSsmPatch => {
  return {
    ComplianceSummary:
      output.ComplianceSummary != null
        ? deserializeAws_restJson1AwsSsmComplianceSummary(output.ComplianceSummary, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsSsmPatchComplianceDetails = (
  output: any,
  context: __SerdeContext
): AwsSsmPatchComplianceDetails => {
  return {
    Patch: output.Patch != null ? deserializeAws_restJson1AwsSsmPatch(output.Patch, context) : undefined,
  } as any;
};

const deserializeAws_restJson1AwsWafRateBasedRuleDetails = (
  output: any,
  context: __SerdeContext
): AwsWafRateBasedRuleDetails => {
  return {
    MatchPredicates:
      output.MatchPredicates != null
        ? deserializeAws_restJson1AwsWafRateBasedRuleMatchPredicateList(output.MatchPredicates, context)
        : undefined,
    MetricName: __expectString(output.MetricName),
    Name: __expectString(output.Name),
    RateKey: __expectString(output.RateKey),
    RateLimit: __expectLong(output.RateLimit),
    RuleId: __expectString(output.RuleId),
  } as any;
};

const deserializeAws_restJson1AwsWafRateBasedRuleMatchPredicate = (
  output: any,
  context: __SerdeContext
): AwsWafRateBasedRuleMatchPredicate => {
  return {
    DataId: __expectString(output.DataId),
    Negated: __expectBoolean(output.Negated),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1AwsWafRateBasedRuleMatchPredicateList = (
  output: any,
  context: __SerdeContext
): AwsWafRateBasedRuleMatchPredicate[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsWafRateBasedRuleMatchPredicate(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsWafRegionalRateBasedRuleDetails = (
  output: any,
  context: __SerdeContext
): AwsWafRegionalRateBasedRuleDetails => {
  return {
    MatchPredicates:
      output.MatchPredicates != null
        ? deserializeAws_restJson1AwsWafRegionalRateBasedRuleMatchPredicateList(output.MatchPredicates, context)
        : undefined,
    MetricName: __expectString(output.MetricName),
    Name: __expectString(output.Name),
    RateKey: __expectString(output.RateKey),
    RateLimit: __expectLong(output.RateLimit),
    RuleId: __expectString(output.RuleId),
  } as any;
};

const deserializeAws_restJson1AwsWafRegionalRateBasedRuleMatchPredicate = (
  output: any,
  context: __SerdeContext
): AwsWafRegionalRateBasedRuleMatchPredicate => {
  return {
    DataId: __expectString(output.DataId),
    Negated: __expectBoolean(output.Negated),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1AwsWafRegionalRateBasedRuleMatchPredicateList = (
  output: any,
  context: __SerdeContext
): AwsWafRegionalRateBasedRuleMatchPredicate[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsWafRegionalRateBasedRuleMatchPredicate(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsWafRegionalRuleDetails = (
  output: any,
  context: __SerdeContext
): AwsWafRegionalRuleDetails => {
  return {
    MetricName: __expectString(output.MetricName),
    Name: __expectString(output.Name),
    PredicateList:
      output.PredicateList != null
        ? deserializeAws_restJson1AwsWafRegionalRulePredicateList(output.PredicateList, context)
        : undefined,
    RuleId: __expectString(output.RuleId),
  } as any;
};

const deserializeAws_restJson1AwsWafRegionalRuleGroupDetails = (
  output: any,
  context: __SerdeContext
): AwsWafRegionalRuleGroupDetails => {
  return {
    MetricName: __expectString(output.MetricName),
    Name: __expectString(output.Name),
    RuleGroupId: __expectString(output.RuleGroupId),
    Rules:
      output.Rules != null
        ? deserializeAws_restJson1AwsWafRegionalRuleGroupRulesList(output.Rules, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1AwsWafRegionalRuleGroupRulesActionDetails = (
  output: any,
  context: __SerdeContext
): AwsWafRegionalRuleGroupRulesActionDetails => {
  return {
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1AwsWafRegionalRuleGroupRulesDetails = (
  output: any,
  context: __SerdeContext
): AwsWafRegionalRuleGroupRulesDetails => {
  return {
    Action:
      output.Action != null
        ? deserializeAws_restJson1AwsWafRegionalRuleGroupRulesActionDetails(output.Action, context)
        : undefined,
    Priority: __expectInt32(output.Priority),
    RuleId: __expectString(output.RuleId),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1AwsWafRegionalRuleGroupRulesList = (
  output: any,
  context: __SerdeContext
): AwsWafRegionalRuleGroupRulesDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsWafRegionalRuleGroupRulesDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsWafRegionalRulePredicateList = (
  output: any,
  context: __SerdeContext
): AwsWafRegionalRulePredicateListDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsWafRegionalRulePredicateListDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsWafRegionalRulePredicateListDetails = (
  output: any,
  context: __SerdeContext
): AwsWafRegionalRulePredicateListDetails => {
  return {
    DataId: __expectString(output.DataId),
    Negated: __expectBoolean(output.Negated),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1AwsWafRegionalWebAclDetails = (
  output: any,
  context: __SerdeContext
): AwsWafRegionalWebAclDetails => {
  return {
    DefaultAction: __expectString(output.DefaultAction),
    MetricName: __expectString(output.MetricName),
    Name: __expectString(output.Name),
    RulesList:
      output.RulesList != null
        ? deserializeAws_restJson1AwsWafRegionalWebAclRulesList(output.RulesList, context)
        : undefined,
    WebAclId: __expectString(output.WebAclId),
  } as any;
};

const deserializeAws_restJson1AwsWafRegionalWebAclRulesList = (
  output: any,
  context: __SerdeContext
): AwsWafRegionalWebAclRulesListDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsWafRegionalWebAclRulesListDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsWafRegionalWebAclRulesListActionDetails = (
  output: any,
  context: __SerdeContext
): AwsWafRegionalWebAclRulesListActionDetails => {
  return {
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1AwsWafRegionalWebAclRulesListDetails = (
  output: any,
  context: __SerdeContext
): AwsWafRegionalWebAclRulesListDetails => {
  return {
    Action:
      output.Action != null
        ? deserializeAws_restJson1AwsWafRegionalWebAclRulesListActionDetails(output.Action, context)
        : undefined,
    OverrideAction:
      output.OverrideAction != null
        ? deserializeAws_restJson1AwsWafRegionalWebAclRulesListOverrideActionDetails(output.OverrideAction, context)
        : undefined,
    Priority: __expectInt32(output.Priority),
    RuleId: __expectString(output.RuleId),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1AwsWafRegionalWebAclRulesListOverrideActionDetails = (
  output: any,
  context: __SerdeContext
): AwsWafRegionalWebAclRulesListOverrideActionDetails => {
  return {
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1AwsWafRuleDetails = (output: any, context: __SerdeContext): AwsWafRuleDetails => {
  return {
    MetricName: __expectString(output.MetricName),
    Name: __expectString(output.Name),
    PredicateList:
      output.PredicateList != null
        ? deserializeAws_restJson1AwsWafRulePredicateList(output.PredicateList, context)
        : undefined,
    RuleId: __expectString(output.RuleId),
  } as any;
};

const deserializeAws_restJson1AwsWafRuleGroupDetails = (
  output: any,
  context: __SerdeContext
): AwsWafRuleGroupDetails => {
  return {
    MetricName: __expectString(output.MetricName),
    Name: __expectString(output.Name),
    RuleGroupId: __expectString(output.RuleGroupId),
    Rules: output.Rules != null ? deserializeAws_restJson1AwsWafRuleGroupRulesList(output.Rules, context) : undefined,
  } as any;
};

const deserializeAws_restJson1AwsWafRuleGroupRulesActionDetails = (
  output: any,
  context: __SerdeContext
): AwsWafRuleGroupRulesActionDetails => {
  return {
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1AwsWafRuleGroupRulesDetails = (
  output: any,
  context: __SerdeContext
): AwsWafRuleGroupRulesDetails => {
  return {
    Action:
      output.Action != null
        ? deserializeAws_restJson1AwsWafRuleGroupRulesActionDetails(output.Action, context)
        : undefined,
    Priority: __expectInt32(output.Priority),
    RuleId: __expectString(output.RuleId),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1AwsWafRuleGroupRulesList = (
  output: any,
  context: __SerdeContext
): AwsWafRuleGroupRulesDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsWafRuleGroupRulesDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsWafRulePredicateList = (
  output: any,
  context: __SerdeContext
): AwsWafRulePredicateListDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsWafRulePredicateListDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsWafRulePredicateListDetails = (
  output: any,
  context: __SerdeContext
): AwsWafRulePredicateListDetails => {
  return {
    DataId: __expectString(output.DataId),
    Negated: __expectBoolean(output.Negated),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1AwsWafWebAclDetails = (output: any, context: __SerdeContext): AwsWafWebAclDetails => {
  return {
    DefaultAction: __expectString(output.DefaultAction),
    Name: __expectString(output.Name),
    Rules: output.Rules != null ? deserializeAws_restJson1AwsWafWebAclRuleList(output.Rules, context) : undefined,
    WebAclId: __expectString(output.WebAclId),
  } as any;
};

const deserializeAws_restJson1AwsWafWebAclRule = (output: any, context: __SerdeContext): AwsWafWebAclRule => {
  return {
    Action: output.Action != null ? deserializeAws_restJson1WafAction(output.Action, context) : undefined,
    ExcludedRules:
      output.ExcludedRules != null
        ? deserializeAws_restJson1WafExcludedRuleList(output.ExcludedRules, context)
        : undefined,
    OverrideAction:
      output.OverrideAction != null
        ? deserializeAws_restJson1WafOverrideAction(output.OverrideAction, context)
        : undefined,
    Priority: __expectInt32(output.Priority),
    RuleId: __expectString(output.RuleId),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1AwsWafWebAclRuleList = (output: any, context: __SerdeContext): AwsWafWebAclRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AwsWafWebAclRule(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AwsXrayEncryptionConfigDetails = (
  output: any,
  context: __SerdeContext
): AwsXrayEncryptionConfigDetails => {
  return {
    KeyId: __expectString(output.KeyId),
    Status: __expectString(output.Status),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1BatchUpdateFindingsUnprocessedFinding = (
  output: any,
  context: __SerdeContext
): BatchUpdateFindingsUnprocessedFinding => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    FindingIdentifier:
      output.FindingIdentifier != null
        ? deserializeAws_restJson1AwsSecurityFindingIdentifier(output.FindingIdentifier, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1BatchUpdateFindingsUnprocessedFindingsList = (
  output: any,
  context: __SerdeContext
): BatchUpdateFindingsUnprocessedFinding[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BatchUpdateFindingsUnprocessedFinding(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1BooleanFilter = (output: any, context: __SerdeContext): BooleanFilter => {
  return {
    Value: __expectBoolean(output.Value),
  } as any;
};

const deserializeAws_restJson1BooleanFilterList = (output: any, context: __SerdeContext): BooleanFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BooleanFilter(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1CategoryList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1Cell = (output: any, context: __SerdeContext): Cell => {
  return {
    CellReference: __expectString(output.CellReference),
    Column: __expectLong(output.Column),
    ColumnName: __expectString(output.ColumnName),
    Row: __expectLong(output.Row),
  } as any;
};

const deserializeAws_restJson1Cells = (output: any, context: __SerdeContext): Cell[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Cell(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1CidrBlockAssociation = (output: any, context: __SerdeContext): CidrBlockAssociation => {
  return {
    AssociationId: __expectString(output.AssociationId),
    CidrBlock: __expectString(output.CidrBlock),
    CidrBlockState: __expectString(output.CidrBlockState),
  } as any;
};

const deserializeAws_restJson1CidrBlockAssociationList = (
  output: any,
  context: __SerdeContext
): CidrBlockAssociation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CidrBlockAssociation(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1City = (output: any, context: __SerdeContext): City => {
  return {
    CityName: __expectString(output.CityName),
  } as any;
};

const deserializeAws_restJson1ClassificationResult = (output: any, context: __SerdeContext): ClassificationResult => {
  return {
    AdditionalOccurrences: __expectBoolean(output.AdditionalOccurrences),
    CustomDataIdentifiers:
      output.CustomDataIdentifiers != null
        ? deserializeAws_restJson1CustomDataIdentifiersResult(output.CustomDataIdentifiers, context)
        : undefined,
    MimeType: __expectString(output.MimeType),
    SensitiveData:
      output.SensitiveData != null
        ? deserializeAws_restJson1SensitiveDataResultList(output.SensitiveData, context)
        : undefined,
    SizeClassified: __expectLong(output.SizeClassified),
    Status: output.Status != null ? deserializeAws_restJson1ClassificationStatus(output.Status, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ClassificationStatus = (output: any, context: __SerdeContext): ClassificationStatus => {
  return {
    Code: __expectString(output.Code),
    Reason: __expectString(output.Reason),
  } as any;
};

const deserializeAws_restJson1Compliance = (output: any, context: __SerdeContext): Compliance => {
  return {
    RelatedRequirements:
      output.RelatedRequirements != null
        ? deserializeAws_restJson1RelatedRequirementsList(output.RelatedRequirements, context)
        : undefined,
    Status: __expectString(output.Status),
    StatusReasons:
      output.StatusReasons != null
        ? deserializeAws_restJson1StatusReasonsList(output.StatusReasons, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ContainerDetails = (output: any, context: __SerdeContext): ContainerDetails => {
  return {
    ContainerRuntime: __expectString(output.ContainerRuntime),
    ImageId: __expectString(output.ImageId),
    ImageName: __expectString(output.ImageName),
    LaunchedAt: __expectString(output.LaunchedAt),
    Name: __expectString(output.Name),
    Privileged: __expectBoolean(output.Privileged),
    VolumeMounts:
      output.VolumeMounts != null ? deserializeAws_restJson1VolumeMountList(output.VolumeMounts, context) : undefined,
  } as any;
};

const deserializeAws_restJson1Country = (output: any, context: __SerdeContext): Country => {
  return {
    CountryCode: __expectString(output.CountryCode),
    CountryName: __expectString(output.CountryName),
  } as any;
};

const deserializeAws_restJson1CustomDataIdentifiersDetections = (
  output: any,
  context: __SerdeContext
): CustomDataIdentifiersDetections => {
  return {
    Arn: __expectString(output.Arn),
    Count: __expectLong(output.Count),
    Name: __expectString(output.Name),
    Occurrences:
      output.Occurrences != null ? deserializeAws_restJson1Occurrences(output.Occurrences, context) : undefined,
  } as any;
};

const deserializeAws_restJson1CustomDataIdentifiersDetectionsList = (
  output: any,
  context: __SerdeContext
): CustomDataIdentifiersDetections[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CustomDataIdentifiersDetections(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1CustomDataIdentifiersResult = (
  output: any,
  context: __SerdeContext
): CustomDataIdentifiersResult => {
  return {
    Detections:
      output.Detections != null
        ? deserializeAws_restJson1CustomDataIdentifiersDetectionsList(output.Detections, context)
        : undefined,
    TotalCount: __expectLong(output.TotalCount),
  } as any;
};

const deserializeAws_restJson1Cvss = (output: any, context: __SerdeContext): Cvss => {
  return {
    Adjustments:
      output.Adjustments != null ? deserializeAws_restJson1AdjustmentList(output.Adjustments, context) : undefined,
    BaseScore: __limitedParseDouble(output.BaseScore),
    BaseVector: __expectString(output.BaseVector),
    Source: __expectString(output.Source),
    Version: __expectString(output.Version),
  } as any;
};

const deserializeAws_restJson1CvssList = (output: any, context: __SerdeContext): Cvss[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Cvss(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DataClassificationDetails = (
  output: any,
  context: __SerdeContext
): DataClassificationDetails => {
  return {
    DetailedResultsLocation: __expectString(output.DetailedResultsLocation),
    Result: output.Result != null ? deserializeAws_restJson1ClassificationResult(output.Result, context) : undefined,
  } as any;
};

const deserializeAws_restJson1DateFilter = (output: any, context: __SerdeContext): DateFilter => {
  return {
    DateRange: output.DateRange != null ? deserializeAws_restJson1DateRange(output.DateRange, context) : undefined,
    End: __expectString(output.End),
    Start: __expectString(output.Start),
  } as any;
};

const deserializeAws_restJson1DateFilterList = (output: any, context: __SerdeContext): DateFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DateFilter(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DateRange = (output: any, context: __SerdeContext): DateRange => {
  return {
    Unit: __expectString(output.Unit),
    Value: __expectInt32(output.Value),
  } as any;
};

const deserializeAws_restJson1DnsRequestAction = (output: any, context: __SerdeContext): DnsRequestAction => {
  return {
    Blocked: __expectBoolean(output.Blocked),
    Domain: __expectString(output.Domain),
    Protocol: __expectString(output.Protocol),
  } as any;
};

const deserializeAws_restJson1FieldMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1FilePathList = (output: any, context: __SerdeContext): FilePaths[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1FilePaths(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1FilePaths = (output: any, context: __SerdeContext): FilePaths => {
  return {
    FileName: __expectString(output.FileName),
    FilePath: __expectString(output.FilePath),
    Hash: __expectString(output.Hash),
    ResourceId: __expectString(output.ResourceId),
  } as any;
};

const deserializeAws_restJson1FindingAggregator = (output: any, context: __SerdeContext): FindingAggregator => {
  return {
    FindingAggregatorArn: __expectString(output.FindingAggregatorArn),
  } as any;
};

const deserializeAws_restJson1FindingAggregatorList = (output: any, context: __SerdeContext): FindingAggregator[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1FindingAggregator(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1FindingProviderFields = (output: any, context: __SerdeContext): FindingProviderFields => {
  return {
    Confidence: __expectInt32(output.Confidence),
    Criticality: __expectInt32(output.Criticality),
    RelatedFindings:
      output.RelatedFindings != null
        ? deserializeAws_restJson1RelatedFindingList(output.RelatedFindings, context)
        : undefined,
    Severity:
      output.Severity != null ? deserializeAws_restJson1FindingProviderSeverity(output.Severity, context) : undefined,
    Types: output.Types != null ? deserializeAws_restJson1TypeList(output.Types, context) : undefined,
  } as any;
};

const deserializeAws_restJson1FindingProviderSeverity = (
  output: any,
  context: __SerdeContext
): FindingProviderSeverity => {
  return {
    Label: __expectString(output.Label),
    Original: __expectString(output.Original),
  } as any;
};

const deserializeAws_restJson1FirewallPolicyDetails = (output: any, context: __SerdeContext): FirewallPolicyDetails => {
  return {
    StatefulRuleGroupReferences:
      output.StatefulRuleGroupReferences != null
        ? deserializeAws_restJson1FirewallPolicyStatefulRuleGroupReferencesList(
            output.StatefulRuleGroupReferences,
            context
          )
        : undefined,
    StatelessCustomActions:
      output.StatelessCustomActions != null
        ? deserializeAws_restJson1FirewallPolicyStatelessCustomActionsList(output.StatelessCustomActions, context)
        : undefined,
    StatelessDefaultActions:
      output.StatelessDefaultActions != null
        ? deserializeAws_restJson1NonEmptyStringList(output.StatelessDefaultActions, context)
        : undefined,
    StatelessFragmentDefaultActions:
      output.StatelessFragmentDefaultActions != null
        ? deserializeAws_restJson1NonEmptyStringList(output.StatelessFragmentDefaultActions, context)
        : undefined,
    StatelessRuleGroupReferences:
      output.StatelessRuleGroupReferences != null
        ? deserializeAws_restJson1FirewallPolicyStatelessRuleGroupReferencesList(
            output.StatelessRuleGroupReferences,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_restJson1FirewallPolicyStatefulRuleGroupReferencesDetails = (
  output: any,
  context: __SerdeContext
): FirewallPolicyStatefulRuleGroupReferencesDetails => {
  return {
    ResourceArn: __expectString(output.ResourceArn),
  } as any;
};

const deserializeAws_restJson1FirewallPolicyStatefulRuleGroupReferencesList = (
  output: any,
  context: __SerdeContext
): FirewallPolicyStatefulRuleGroupReferencesDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1FirewallPolicyStatefulRuleGroupReferencesDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1FirewallPolicyStatelessCustomActionsDetails = (
  output: any,
  context: __SerdeContext
): FirewallPolicyStatelessCustomActionsDetails => {
  return {
    ActionDefinition:
      output.ActionDefinition != null
        ? deserializeAws_restJson1StatelessCustomActionDefinition(output.ActionDefinition, context)
        : undefined,
    ActionName: __expectString(output.ActionName),
  } as any;
};

const deserializeAws_restJson1FirewallPolicyStatelessCustomActionsList = (
  output: any,
  context: __SerdeContext
): FirewallPolicyStatelessCustomActionsDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1FirewallPolicyStatelessCustomActionsDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1FirewallPolicyStatelessRuleGroupReferencesDetails = (
  output: any,
  context: __SerdeContext
): FirewallPolicyStatelessRuleGroupReferencesDetails => {
  return {
    Priority: __expectInt32(output.Priority),
    ResourceArn: __expectString(output.ResourceArn),
  } as any;
};

const deserializeAws_restJson1FirewallPolicyStatelessRuleGroupReferencesList = (
  output: any,
  context: __SerdeContext
): FirewallPolicyStatelessRuleGroupReferencesDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1FirewallPolicyStatelessRuleGroupReferencesDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1GeoLocation = (output: any, context: __SerdeContext): GeoLocation => {
  return {
    Lat: __limitedParseDouble(output.Lat),
    Lon: __limitedParseDouble(output.Lon),
  } as any;
};

const deserializeAws_restJson1IcmpTypeCode = (output: any, context: __SerdeContext): IcmpTypeCode => {
  return {
    Code: __expectInt32(output.Code),
    Type: __expectInt32(output.Type),
  } as any;
};

const deserializeAws_restJson1ImportFindingsError = (output: any, context: __SerdeContext): ImportFindingsError => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
    Id: __expectString(output.Id),
  } as any;
};

const deserializeAws_restJson1ImportFindingsErrorList = (
  output: any,
  context: __SerdeContext
): ImportFindingsError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ImportFindingsError(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Insight = (output: any, context: __SerdeContext): Insight => {
  return {
    Filters:
      output.Filters != null ? deserializeAws_restJson1AwsSecurityFindingFilters(output.Filters, context) : undefined,
    GroupByAttribute: __expectString(output.GroupByAttribute),
    InsightArn: __expectString(output.InsightArn),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1InsightList = (output: any, context: __SerdeContext): Insight[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Insight(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1InsightResults = (output: any, context: __SerdeContext): InsightResults => {
  return {
    GroupByAttribute: __expectString(output.GroupByAttribute),
    InsightArn: __expectString(output.InsightArn),
    ResultValues:
      output.ResultValues != null
        ? deserializeAws_restJson1InsightResultValueList(output.ResultValues, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1InsightResultValue = (output: any, context: __SerdeContext): InsightResultValue => {
  return {
    Count: __expectInt32(output.Count),
    GroupByAttributeValue: __expectString(output.GroupByAttributeValue),
  } as any;
};

const deserializeAws_restJson1InsightResultValueList = (output: any, context: __SerdeContext): InsightResultValue[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1InsightResultValue(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1IntegerList = (output: any, context: __SerdeContext): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectInt32(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1IntegrationTypeList = (
  output: any,
  context: __SerdeContext
): (IntegrationType | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1Invitation = (output: any, context: __SerdeContext): Invitation => {
  return {
    AccountId: __expectString(output.AccountId),
    InvitationId: __expectString(output.InvitationId),
    InvitedAt: output.InvitedAt != null ? __expectNonNull(__parseRfc3339DateTime(output.InvitedAt)) : undefined,
    MemberStatus: __expectString(output.MemberStatus),
  } as any;
};

const deserializeAws_restJson1InvitationList = (output: any, context: __SerdeContext): Invitation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Invitation(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1IpFilter = (output: any, context: __SerdeContext): IpFilter => {
  return {
    Cidr: __expectString(output.Cidr),
  } as any;
};

const deserializeAws_restJson1IpFilterList = (output: any, context: __SerdeContext): IpFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1IpFilter(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1IpOrganizationDetails = (output: any, context: __SerdeContext): IpOrganizationDetails => {
  return {
    Asn: __expectInt32(output.Asn),
    AsnOrg: __expectString(output.AsnOrg),
    Isp: __expectString(output.Isp),
    Org: __expectString(output.Org),
  } as any;
};

const deserializeAws_restJson1Ipv6CidrBlockAssociation = (
  output: any,
  context: __SerdeContext
): Ipv6CidrBlockAssociation => {
  return {
    AssociationId: __expectString(output.AssociationId),
    CidrBlockState: __expectString(output.CidrBlockState),
    Ipv6CidrBlock: __expectString(output.Ipv6CidrBlock),
  } as any;
};

const deserializeAws_restJson1Ipv6CidrBlockAssociationList = (
  output: any,
  context: __SerdeContext
): Ipv6CidrBlockAssociation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Ipv6CidrBlockAssociation(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1KeywordFilter = (output: any, context: __SerdeContext): KeywordFilter => {
  return {
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1KeywordFilterList = (output: any, context: __SerdeContext): KeywordFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1KeywordFilter(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1LoadBalancerState = (output: any, context: __SerdeContext): LoadBalancerState => {
  return {
    Code: __expectString(output.Code),
    Reason: __expectString(output.Reason),
  } as any;
};

const deserializeAws_restJson1Malware = (output: any, context: __SerdeContext): Malware => {
  return {
    Name: __expectString(output.Name),
    Path: __expectString(output.Path),
    State: __expectString(output.State),
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1MalwareList = (output: any, context: __SerdeContext): Malware[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Malware(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1MapFilter = (output: any, context: __SerdeContext): MapFilter => {
  return {
    Comparison: __expectString(output.Comparison),
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1MapFilterList = (output: any, context: __SerdeContext): MapFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1MapFilter(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Member = (output: any, context: __SerdeContext): Member => {
  return {
    AccountId: __expectString(output.AccountId),
    AdministratorId: __expectString(output.AdministratorId),
    Email: __expectString(output.Email),
    InvitedAt: output.InvitedAt != null ? __expectNonNull(__parseRfc3339DateTime(output.InvitedAt)) : undefined,
    MasterId: __expectString(output.MasterId),
    MemberStatus: __expectString(output.MemberStatus),
    UpdatedAt: output.UpdatedAt != null ? __expectNonNull(__parseRfc3339DateTime(output.UpdatedAt)) : undefined,
  } as any;
};

const deserializeAws_restJson1MemberList = (output: any, context: __SerdeContext): Member[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Member(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Network = (output: any, context: __SerdeContext): Network => {
  return {
    DestinationDomain: __expectString(output.DestinationDomain),
    DestinationIpV4: __expectString(output.DestinationIpV4),
    DestinationIpV6: __expectString(output.DestinationIpV6),
    DestinationPort: __expectInt32(output.DestinationPort),
    Direction: __expectString(output.Direction),
    OpenPortRange:
      output.OpenPortRange != null ? deserializeAws_restJson1PortRange(output.OpenPortRange, context) : undefined,
    Protocol: __expectString(output.Protocol),
    SourceDomain: __expectString(output.SourceDomain),
    SourceIpV4: __expectString(output.SourceIpV4),
    SourceIpV6: __expectString(output.SourceIpV6),
    SourceMac: __expectString(output.SourceMac),
    SourcePort: __expectInt32(output.SourcePort),
  } as any;
};

const deserializeAws_restJson1NetworkConnectionAction = (
  output: any,
  context: __SerdeContext
): NetworkConnectionAction => {
  return {
    Blocked: __expectBoolean(output.Blocked),
    ConnectionDirection: __expectString(output.ConnectionDirection),
    LocalPortDetails:
      output.LocalPortDetails != null
        ? deserializeAws_restJson1ActionLocalPortDetails(output.LocalPortDetails, context)
        : undefined,
    Protocol: __expectString(output.Protocol),
    RemoteIpDetails:
      output.RemoteIpDetails != null
        ? deserializeAws_restJson1ActionRemoteIpDetails(output.RemoteIpDetails, context)
        : undefined,
    RemotePortDetails:
      output.RemotePortDetails != null
        ? deserializeAws_restJson1ActionRemotePortDetails(output.RemotePortDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1NetworkHeader = (output: any, context: __SerdeContext): NetworkHeader => {
  return {
    Destination:
      output.Destination != null
        ? deserializeAws_restJson1NetworkPathComponentDetails(output.Destination, context)
        : undefined,
    Protocol: __expectString(output.Protocol),
    Source:
      output.Source != null ? deserializeAws_restJson1NetworkPathComponentDetails(output.Source, context) : undefined,
  } as any;
};

const deserializeAws_restJson1NetworkPathComponent = (output: any, context: __SerdeContext): NetworkPathComponent => {
  return {
    ComponentId: __expectString(output.ComponentId),
    ComponentType: __expectString(output.ComponentType),
    Egress: output.Egress != null ? deserializeAws_restJson1NetworkHeader(output.Egress, context) : undefined,
    Ingress: output.Ingress != null ? deserializeAws_restJson1NetworkHeader(output.Ingress, context) : undefined,
  } as any;
};

const deserializeAws_restJson1NetworkPathComponentDetails = (
  output: any,
  context: __SerdeContext
): NetworkPathComponentDetails => {
  return {
    Address: output.Address != null ? deserializeAws_restJson1StringList(output.Address, context) : undefined,
    PortRanges:
      output.PortRanges != null ? deserializeAws_restJson1PortRangeList(output.PortRanges, context) : undefined,
  } as any;
};

const deserializeAws_restJson1NetworkPathList = (output: any, context: __SerdeContext): NetworkPathComponent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1NetworkPathComponent(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1NonEmptyStringList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1Note = (output: any, context: __SerdeContext): Note => {
  return {
    Text: __expectString(output.Text),
    UpdatedAt: __expectString(output.UpdatedAt),
    UpdatedBy: __expectString(output.UpdatedBy),
  } as any;
};

const deserializeAws_restJson1NumberFilter = (output: any, context: __SerdeContext): NumberFilter => {
  return {
    Eq: __limitedParseDouble(output.Eq),
    Gte: __limitedParseDouble(output.Gte),
    Lte: __limitedParseDouble(output.Lte),
  } as any;
};

const deserializeAws_restJson1NumberFilterList = (output: any, context: __SerdeContext): NumberFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1NumberFilter(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Occurrences = (output: any, context: __SerdeContext): Occurrences => {
  return {
    Cells: output.Cells != null ? deserializeAws_restJson1Cells(output.Cells, context) : undefined,
    LineRanges: output.LineRanges != null ? deserializeAws_restJson1Ranges(output.LineRanges, context) : undefined,
    OffsetRanges:
      output.OffsetRanges != null ? deserializeAws_restJson1Ranges(output.OffsetRanges, context) : undefined,
    Pages: output.Pages != null ? deserializeAws_restJson1Pages(output.Pages, context) : undefined,
    Records: output.Records != null ? deserializeAws_restJson1Records(output.Records, context) : undefined,
  } as any;
};

const deserializeAws_restJson1Page = (output: any, context: __SerdeContext): Page => {
  return {
    LineRange: output.LineRange != null ? deserializeAws_restJson1Range(output.LineRange, context) : undefined,
    OffsetRange: output.OffsetRange != null ? deserializeAws_restJson1Range(output.OffsetRange, context) : undefined,
    PageNumber: __expectLong(output.PageNumber),
  } as any;
};

const deserializeAws_restJson1Pages = (output: any, context: __SerdeContext): Page[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Page(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PatchSummary = (output: any, context: __SerdeContext): PatchSummary => {
  return {
    FailedCount: __expectInt32(output.FailedCount),
    Id: __expectString(output.Id),
    InstalledCount: __expectInt32(output.InstalledCount),
    InstalledOtherCount: __expectInt32(output.InstalledOtherCount),
    InstalledPendingReboot: __expectInt32(output.InstalledPendingReboot),
    InstalledRejectedCount: __expectInt32(output.InstalledRejectedCount),
    MissingCount: __expectInt32(output.MissingCount),
    Operation: __expectString(output.Operation),
    OperationEndTime: __expectString(output.OperationEndTime),
    OperationStartTime: __expectString(output.OperationStartTime),
    RebootOption: __expectString(output.RebootOption),
  } as any;
};

const deserializeAws_restJson1PortProbeAction = (output: any, context: __SerdeContext): PortProbeAction => {
  return {
    Blocked: __expectBoolean(output.Blocked),
    PortProbeDetails:
      output.PortProbeDetails != null
        ? deserializeAws_restJson1PortProbeDetailList(output.PortProbeDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1PortProbeDetail = (output: any, context: __SerdeContext): PortProbeDetail => {
  return {
    LocalIpDetails:
      output.LocalIpDetails != null
        ? deserializeAws_restJson1ActionLocalIpDetails(output.LocalIpDetails, context)
        : undefined,
    LocalPortDetails:
      output.LocalPortDetails != null
        ? deserializeAws_restJson1ActionLocalPortDetails(output.LocalPortDetails, context)
        : undefined,
    RemoteIpDetails:
      output.RemoteIpDetails != null
        ? deserializeAws_restJson1ActionRemoteIpDetails(output.RemoteIpDetails, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1PortProbeDetailList = (output: any, context: __SerdeContext): PortProbeDetail[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PortProbeDetail(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PortRange = (output: any, context: __SerdeContext): PortRange => {
  return {
    Begin: __expectInt32(output.Begin),
    End: __expectInt32(output.End),
  } as any;
};

const deserializeAws_restJson1PortRangeFromTo = (output: any, context: __SerdeContext): PortRangeFromTo => {
  return {
    From: __expectInt32(output.From),
    To: __expectInt32(output.To),
  } as any;
};

const deserializeAws_restJson1PortRangeList = (output: any, context: __SerdeContext): PortRange[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PortRange(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ProcessDetails = (output: any, context: __SerdeContext): ProcessDetails => {
  return {
    LaunchedAt: __expectString(output.LaunchedAt),
    Name: __expectString(output.Name),
    ParentPid: __expectInt32(output.ParentPid),
    Path: __expectString(output.Path),
    Pid: __expectInt32(output.Pid),
    TerminatedAt: __expectString(output.TerminatedAt),
  } as any;
};

const deserializeAws_restJson1Product = (output: any, context: __SerdeContext): Product => {
  return {
    ActivationUrl: __expectString(output.ActivationUrl),
    Categories:
      output.Categories != null ? deserializeAws_restJson1CategoryList(output.Categories, context) : undefined,
    CompanyName: __expectString(output.CompanyName),
    Description: __expectString(output.Description),
    IntegrationTypes:
      output.IntegrationTypes != null
        ? deserializeAws_restJson1IntegrationTypeList(output.IntegrationTypes, context)
        : undefined,
    MarketplaceUrl: __expectString(output.MarketplaceUrl),
    ProductArn: __expectString(output.ProductArn),
    ProductName: __expectString(output.ProductName),
    ProductSubscriptionResourcePolicy: __expectString(output.ProductSubscriptionResourcePolicy),
  } as any;
};

const deserializeAws_restJson1ProductsList = (output: any, context: __SerdeContext): Product[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Product(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ProductSubscriptionArnList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1Range = (output: any, context: __SerdeContext): Range => {
  return {
    End: __expectLong(output.End),
    Start: __expectLong(output.Start),
    StartColumn: __expectLong(output.StartColumn),
  } as any;
};

const deserializeAws_restJson1Ranges = (output: any, context: __SerdeContext): Range[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Range(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Recommendation = (output: any, context: __SerdeContext): Recommendation => {
  return {
    Text: __expectString(output.Text),
    Url: __expectString(output.Url),
  } as any;
};

const deserializeAws_restJson1_Record = (output: any, context: __SerdeContext): _Record => {
  return {
    JsonPath: __expectString(output.JsonPath),
    RecordIndex: __expectLong(output.RecordIndex),
  } as any;
};

const deserializeAws_restJson1Records = (output: any, context: __SerdeContext): _Record[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1_Record(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RelatedFinding = (output: any, context: __SerdeContext): RelatedFinding => {
  return {
    Id: __expectString(output.Id),
    ProductArn: __expectString(output.ProductArn),
  } as any;
};

const deserializeAws_restJson1RelatedFindingList = (output: any, context: __SerdeContext): RelatedFinding[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RelatedFinding(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RelatedRequirementsList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1Remediation = (output: any, context: __SerdeContext): Remediation => {
  return {
    Recommendation:
      output.Recommendation != null
        ? deserializeAws_restJson1Recommendation(output.Recommendation, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1Resource = (output: any, context: __SerdeContext): Resource => {
  return {
    DataClassification:
      output.DataClassification != null
        ? deserializeAws_restJson1DataClassificationDetails(output.DataClassification, context)
        : undefined,
    Details: output.Details != null ? deserializeAws_restJson1ResourceDetails(output.Details, context) : undefined,
    Id: __expectString(output.Id),
    Partition: __expectString(output.Partition),
    Region: __expectString(output.Region),
    ResourceRole: __expectString(output.ResourceRole),
    Tags: output.Tags != null ? deserializeAws_restJson1FieldMap(output.Tags, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1ResourceDetails = (output: any, context: __SerdeContext): ResourceDetails => {
  return {
    AwsApiGatewayRestApi:
      output.AwsApiGatewayRestApi != null
        ? deserializeAws_restJson1AwsApiGatewayRestApiDetails(output.AwsApiGatewayRestApi, context)
        : undefined,
    AwsApiGatewayStage:
      output.AwsApiGatewayStage != null
        ? deserializeAws_restJson1AwsApiGatewayStageDetails(output.AwsApiGatewayStage, context)
        : undefined,
    AwsApiGatewayV2Api:
      output.AwsApiGatewayV2Api != null
        ? deserializeAws_restJson1AwsApiGatewayV2ApiDetails(output.AwsApiGatewayV2Api, context)
        : undefined,
    AwsApiGatewayV2Stage:
      output.AwsApiGatewayV2Stage != null
        ? deserializeAws_restJson1AwsApiGatewayV2StageDetails(output.AwsApiGatewayV2Stage, context)
        : undefined,
    AwsAutoScalingAutoScalingGroup:
      output.AwsAutoScalingAutoScalingGroup != null
        ? deserializeAws_restJson1AwsAutoScalingAutoScalingGroupDetails(output.AwsAutoScalingAutoScalingGroup, context)
        : undefined,
    AwsAutoScalingLaunchConfiguration:
      output.AwsAutoScalingLaunchConfiguration != null
        ? deserializeAws_restJson1AwsAutoScalingLaunchConfigurationDetails(
            output.AwsAutoScalingLaunchConfiguration,
            context
          )
        : undefined,
    AwsBackupBackupPlan:
      output.AwsBackupBackupPlan != null
        ? deserializeAws_restJson1AwsBackupBackupPlanDetails(output.AwsBackupBackupPlan, context)
        : undefined,
    AwsBackupBackupVault:
      output.AwsBackupBackupVault != null
        ? deserializeAws_restJson1AwsBackupBackupVaultDetails(output.AwsBackupBackupVault, context)
        : undefined,
    AwsBackupRecoveryPoint:
      output.AwsBackupRecoveryPoint != null
        ? deserializeAws_restJson1AwsBackupRecoveryPointDetails(output.AwsBackupRecoveryPoint, context)
        : undefined,
    AwsCertificateManagerCertificate:
      output.AwsCertificateManagerCertificate != null
        ? deserializeAws_restJson1AwsCertificateManagerCertificateDetails(
            output.AwsCertificateManagerCertificate,
            context
          )
        : undefined,
    AwsCloudFormationStack:
      output.AwsCloudFormationStack != null
        ? deserializeAws_restJson1AwsCloudFormationStackDetails(output.AwsCloudFormationStack, context)
        : undefined,
    AwsCloudFrontDistribution:
      output.AwsCloudFrontDistribution != null
        ? deserializeAws_restJson1AwsCloudFrontDistributionDetails(output.AwsCloudFrontDistribution, context)
        : undefined,
    AwsCloudTrailTrail:
      output.AwsCloudTrailTrail != null
        ? deserializeAws_restJson1AwsCloudTrailTrailDetails(output.AwsCloudTrailTrail, context)
        : undefined,
    AwsCloudWatchAlarm:
      output.AwsCloudWatchAlarm != null
        ? deserializeAws_restJson1AwsCloudWatchAlarmDetails(output.AwsCloudWatchAlarm, context)
        : undefined,
    AwsCodeBuildProject:
      output.AwsCodeBuildProject != null
        ? deserializeAws_restJson1AwsCodeBuildProjectDetails(output.AwsCodeBuildProject, context)
        : undefined,
    AwsDynamoDbTable:
      output.AwsDynamoDbTable != null
        ? deserializeAws_restJson1AwsDynamoDbTableDetails(output.AwsDynamoDbTable, context)
        : undefined,
    AwsEc2Eip:
      output.AwsEc2Eip != null ? deserializeAws_restJson1AwsEc2EipDetails(output.AwsEc2Eip, context) : undefined,
    AwsEc2Instance:
      output.AwsEc2Instance != null
        ? deserializeAws_restJson1AwsEc2InstanceDetails(output.AwsEc2Instance, context)
        : undefined,
    AwsEc2NetworkAcl:
      output.AwsEc2NetworkAcl != null
        ? deserializeAws_restJson1AwsEc2NetworkAclDetails(output.AwsEc2NetworkAcl, context)
        : undefined,
    AwsEc2NetworkInterface:
      output.AwsEc2NetworkInterface != null
        ? deserializeAws_restJson1AwsEc2NetworkInterfaceDetails(output.AwsEc2NetworkInterface, context)
        : undefined,
    AwsEc2SecurityGroup:
      output.AwsEc2SecurityGroup != null
        ? deserializeAws_restJson1AwsEc2SecurityGroupDetails(output.AwsEc2SecurityGroup, context)
        : undefined,
    AwsEc2Subnet:
      output.AwsEc2Subnet != null
        ? deserializeAws_restJson1AwsEc2SubnetDetails(output.AwsEc2Subnet, context)
        : undefined,
    AwsEc2TransitGateway:
      output.AwsEc2TransitGateway != null
        ? deserializeAws_restJson1AwsEc2TransitGatewayDetails(output.AwsEc2TransitGateway, context)
        : undefined,
    AwsEc2Volume:
      output.AwsEc2Volume != null
        ? deserializeAws_restJson1AwsEc2VolumeDetails(output.AwsEc2Volume, context)
        : undefined,
    AwsEc2Vpc:
      output.AwsEc2Vpc != null ? deserializeAws_restJson1AwsEc2VpcDetails(output.AwsEc2Vpc, context) : undefined,
    AwsEc2VpcEndpointService:
      output.AwsEc2VpcEndpointService != null
        ? deserializeAws_restJson1AwsEc2VpcEndpointServiceDetails(output.AwsEc2VpcEndpointService, context)
        : undefined,
    AwsEc2VpcPeeringConnection:
      output.AwsEc2VpcPeeringConnection != null
        ? deserializeAws_restJson1AwsEc2VpcPeeringConnectionDetails(output.AwsEc2VpcPeeringConnection, context)
        : undefined,
    AwsEc2VpnConnection:
      output.AwsEc2VpnConnection != null
        ? deserializeAws_restJson1AwsEc2VpnConnectionDetails(output.AwsEc2VpnConnection, context)
        : undefined,
    AwsEcrContainerImage:
      output.AwsEcrContainerImage != null
        ? deserializeAws_restJson1AwsEcrContainerImageDetails(output.AwsEcrContainerImage, context)
        : undefined,
    AwsEcrRepository:
      output.AwsEcrRepository != null
        ? deserializeAws_restJson1AwsEcrRepositoryDetails(output.AwsEcrRepository, context)
        : undefined,
    AwsEcsCluster:
      output.AwsEcsCluster != null
        ? deserializeAws_restJson1AwsEcsClusterDetails(output.AwsEcsCluster, context)
        : undefined,
    AwsEcsContainer:
      output.AwsEcsContainer != null
        ? deserializeAws_restJson1AwsEcsContainerDetails(output.AwsEcsContainer, context)
        : undefined,
    AwsEcsService:
      output.AwsEcsService != null
        ? deserializeAws_restJson1AwsEcsServiceDetails(output.AwsEcsService, context)
        : undefined,
    AwsEcsTask:
      output.AwsEcsTask != null ? deserializeAws_restJson1AwsEcsTaskDetails(output.AwsEcsTask, context) : undefined,
    AwsEcsTaskDefinition:
      output.AwsEcsTaskDefinition != null
        ? deserializeAws_restJson1AwsEcsTaskDefinitionDetails(output.AwsEcsTaskDefinition, context)
        : undefined,
    AwsEfsAccessPoint:
      output.AwsEfsAccessPoint != null
        ? deserializeAws_restJson1AwsEfsAccessPointDetails(output.AwsEfsAccessPoint, context)
        : undefined,
    AwsEksCluster:
      output.AwsEksCluster != null
        ? deserializeAws_restJson1AwsEksClusterDetails(output.AwsEksCluster, context)
        : undefined,
    AwsElasticBeanstalkEnvironment:
      output.AwsElasticBeanstalkEnvironment != null
        ? deserializeAws_restJson1AwsElasticBeanstalkEnvironmentDetails(output.AwsElasticBeanstalkEnvironment, context)
        : undefined,
    AwsElasticsearchDomain:
      output.AwsElasticsearchDomain != null
        ? deserializeAws_restJson1AwsElasticsearchDomainDetails(output.AwsElasticsearchDomain, context)
        : undefined,
    AwsElbLoadBalancer:
      output.AwsElbLoadBalancer != null
        ? deserializeAws_restJson1AwsElbLoadBalancerDetails(output.AwsElbLoadBalancer, context)
        : undefined,
    AwsElbv2LoadBalancer:
      output.AwsElbv2LoadBalancer != null
        ? deserializeAws_restJson1AwsElbv2LoadBalancerDetails(output.AwsElbv2LoadBalancer, context)
        : undefined,
    AwsIamAccessKey:
      output.AwsIamAccessKey != null
        ? deserializeAws_restJson1AwsIamAccessKeyDetails(output.AwsIamAccessKey, context)
        : undefined,
    AwsIamGroup:
      output.AwsIamGroup != null ? deserializeAws_restJson1AwsIamGroupDetails(output.AwsIamGroup, context) : undefined,
    AwsIamPolicy:
      output.AwsIamPolicy != null
        ? deserializeAws_restJson1AwsIamPolicyDetails(output.AwsIamPolicy, context)
        : undefined,
    AwsIamRole:
      output.AwsIamRole != null ? deserializeAws_restJson1AwsIamRoleDetails(output.AwsIamRole, context) : undefined,
    AwsIamUser:
      output.AwsIamUser != null ? deserializeAws_restJson1AwsIamUserDetails(output.AwsIamUser, context) : undefined,
    AwsKinesisStream:
      output.AwsKinesisStream != null
        ? deserializeAws_restJson1AwsKinesisStreamDetails(output.AwsKinesisStream, context)
        : undefined,
    AwsKmsKey:
      output.AwsKmsKey != null ? deserializeAws_restJson1AwsKmsKeyDetails(output.AwsKmsKey, context) : undefined,
    AwsLambdaFunction:
      output.AwsLambdaFunction != null
        ? deserializeAws_restJson1AwsLambdaFunctionDetails(output.AwsLambdaFunction, context)
        : undefined,
    AwsLambdaLayerVersion:
      output.AwsLambdaLayerVersion != null
        ? deserializeAws_restJson1AwsLambdaLayerVersionDetails(output.AwsLambdaLayerVersion, context)
        : undefined,
    AwsNetworkFirewallFirewall:
      output.AwsNetworkFirewallFirewall != null
        ? deserializeAws_restJson1AwsNetworkFirewallFirewallDetails(output.AwsNetworkFirewallFirewall, context)
        : undefined,
    AwsNetworkFirewallFirewallPolicy:
      output.AwsNetworkFirewallFirewallPolicy != null
        ? deserializeAws_restJson1AwsNetworkFirewallFirewallPolicyDetails(
            output.AwsNetworkFirewallFirewallPolicy,
            context
          )
        : undefined,
    AwsNetworkFirewallRuleGroup:
      output.AwsNetworkFirewallRuleGroup != null
        ? deserializeAws_restJson1AwsNetworkFirewallRuleGroupDetails(output.AwsNetworkFirewallRuleGroup, context)
        : undefined,
    AwsOpenSearchServiceDomain:
      output.AwsOpenSearchServiceDomain != null
        ? deserializeAws_restJson1AwsOpenSearchServiceDomainDetails(output.AwsOpenSearchServiceDomain, context)
        : undefined,
    AwsRdsDbCluster:
      output.AwsRdsDbCluster != null
        ? deserializeAws_restJson1AwsRdsDbClusterDetails(output.AwsRdsDbCluster, context)
        : undefined,
    AwsRdsDbClusterSnapshot:
      output.AwsRdsDbClusterSnapshot != null
        ? deserializeAws_restJson1AwsRdsDbClusterSnapshotDetails(output.AwsRdsDbClusterSnapshot, context)
        : undefined,
    AwsRdsDbInstance:
      output.AwsRdsDbInstance != null
        ? deserializeAws_restJson1AwsRdsDbInstanceDetails(output.AwsRdsDbInstance, context)
        : undefined,
    AwsRdsDbSecurityGroup:
      output.AwsRdsDbSecurityGroup != null
        ? deserializeAws_restJson1AwsRdsDbSecurityGroupDetails(output.AwsRdsDbSecurityGroup, context)
        : undefined,
    AwsRdsDbSnapshot:
      output.AwsRdsDbSnapshot != null
        ? deserializeAws_restJson1AwsRdsDbSnapshotDetails(output.AwsRdsDbSnapshot, context)
        : undefined,
    AwsRdsEventSubscription:
      output.AwsRdsEventSubscription != null
        ? deserializeAws_restJson1AwsRdsEventSubscriptionDetails(output.AwsRdsEventSubscription, context)
        : undefined,
    AwsRedshiftCluster:
      output.AwsRedshiftCluster != null
        ? deserializeAws_restJson1AwsRedshiftClusterDetails(output.AwsRedshiftCluster, context)
        : undefined,
    AwsS3AccountPublicAccessBlock:
      output.AwsS3AccountPublicAccessBlock != null
        ? deserializeAws_restJson1AwsS3AccountPublicAccessBlockDetails(output.AwsS3AccountPublicAccessBlock, context)
        : undefined,
    AwsS3Bucket:
      output.AwsS3Bucket != null ? deserializeAws_restJson1AwsS3BucketDetails(output.AwsS3Bucket, context) : undefined,
    AwsS3Object:
      output.AwsS3Object != null ? deserializeAws_restJson1AwsS3ObjectDetails(output.AwsS3Object, context) : undefined,
    AwsSecretsManagerSecret:
      output.AwsSecretsManagerSecret != null
        ? deserializeAws_restJson1AwsSecretsManagerSecretDetails(output.AwsSecretsManagerSecret, context)
        : undefined,
    AwsSnsTopic:
      output.AwsSnsTopic != null ? deserializeAws_restJson1AwsSnsTopicDetails(output.AwsSnsTopic, context) : undefined,
    AwsSqsQueue:
      output.AwsSqsQueue != null ? deserializeAws_restJson1AwsSqsQueueDetails(output.AwsSqsQueue, context) : undefined,
    AwsSsmPatchCompliance:
      output.AwsSsmPatchCompliance != null
        ? deserializeAws_restJson1AwsSsmPatchComplianceDetails(output.AwsSsmPatchCompliance, context)
        : undefined,
    AwsWafRateBasedRule:
      output.AwsWafRateBasedRule != null
        ? deserializeAws_restJson1AwsWafRateBasedRuleDetails(output.AwsWafRateBasedRule, context)
        : undefined,
    AwsWafRegionalRateBasedRule:
      output.AwsWafRegionalRateBasedRule != null
        ? deserializeAws_restJson1AwsWafRegionalRateBasedRuleDetails(output.AwsWafRegionalRateBasedRule, context)
        : undefined,
    AwsWafRegionalRule:
      output.AwsWafRegionalRule != null
        ? deserializeAws_restJson1AwsWafRegionalRuleDetails(output.AwsWafRegionalRule, context)
        : undefined,
    AwsWafRegionalRuleGroup:
      output.AwsWafRegionalRuleGroup != null
        ? deserializeAws_restJson1AwsWafRegionalRuleGroupDetails(output.AwsWafRegionalRuleGroup, context)
        : undefined,
    AwsWafRegionalWebAcl:
      output.AwsWafRegionalWebAcl != null
        ? deserializeAws_restJson1AwsWafRegionalWebAclDetails(output.AwsWafRegionalWebAcl, context)
        : undefined,
    AwsWafRule:
      output.AwsWafRule != null ? deserializeAws_restJson1AwsWafRuleDetails(output.AwsWafRule, context) : undefined,
    AwsWafRuleGroup:
      output.AwsWafRuleGroup != null
        ? deserializeAws_restJson1AwsWafRuleGroupDetails(output.AwsWafRuleGroup, context)
        : undefined,
    AwsWafWebAcl:
      output.AwsWafWebAcl != null
        ? deserializeAws_restJson1AwsWafWebAclDetails(output.AwsWafWebAcl, context)
        : undefined,
    AwsXrayEncryptionConfig:
      output.AwsXrayEncryptionConfig != null
        ? deserializeAws_restJson1AwsXrayEncryptionConfigDetails(output.AwsXrayEncryptionConfig, context)
        : undefined,
    Container:
      output.Container != null ? deserializeAws_restJson1ContainerDetails(output.Container, context) : undefined,
    Other: output.Other != null ? deserializeAws_restJson1FieldMap(output.Other, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ResourceList = (output: any, context: __SerdeContext): Resource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Resource(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Result = (output: any, context: __SerdeContext): Result => {
  return {
    AccountId: __expectString(output.AccountId),
    ProcessingResult: __expectString(output.ProcessingResult),
  } as any;
};

const deserializeAws_restJson1ResultList = (output: any, context: __SerdeContext): Result[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Result(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RuleGroupDetails = (output: any, context: __SerdeContext): RuleGroupDetails => {
  return {
    RuleVariables:
      output.RuleVariables != null
        ? deserializeAws_restJson1RuleGroupVariables(output.RuleVariables, context)
        : undefined,
    RulesSource:
      output.RulesSource != null ? deserializeAws_restJson1RuleGroupSource(output.RulesSource, context) : undefined,
  } as any;
};

const deserializeAws_restJson1RuleGroupSource = (output: any, context: __SerdeContext): RuleGroupSource => {
  return {
    RulesSourceList:
      output.RulesSourceList != null
        ? deserializeAws_restJson1RuleGroupSourceListDetails(output.RulesSourceList, context)
        : undefined,
    RulesString: __expectString(output.RulesString),
    StatefulRules:
      output.StatefulRules != null
        ? deserializeAws_restJson1RuleGroupSourceStatefulRulesList(output.StatefulRules, context)
        : undefined,
    StatelessRulesAndCustomActions:
      output.StatelessRulesAndCustomActions != null
        ? deserializeAws_restJson1RuleGroupSourceStatelessRulesAndCustomActionsDetails(
            output.StatelessRulesAndCustomActions,
            context
          )
        : undefined,
  } as any;
};

const deserializeAws_restJson1RuleGroupSourceCustomActionsDetails = (
  output: any,
  context: __SerdeContext
): RuleGroupSourceCustomActionsDetails => {
  return {
    ActionDefinition:
      output.ActionDefinition != null
        ? deserializeAws_restJson1StatelessCustomActionDefinition(output.ActionDefinition, context)
        : undefined,
    ActionName: __expectString(output.ActionName),
  } as any;
};

const deserializeAws_restJson1RuleGroupSourceCustomActionsList = (
  output: any,
  context: __SerdeContext
): RuleGroupSourceCustomActionsDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RuleGroupSourceCustomActionsDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RuleGroupSourceListDetails = (
  output: any,
  context: __SerdeContext
): RuleGroupSourceListDetails => {
  return {
    GeneratedRulesType: __expectString(output.GeneratedRulesType),
    TargetTypes:
      output.TargetTypes != null ? deserializeAws_restJson1NonEmptyStringList(output.TargetTypes, context) : undefined,
    Targets: output.Targets != null ? deserializeAws_restJson1NonEmptyStringList(output.Targets, context) : undefined,
  } as any;
};

const deserializeAws_restJson1RuleGroupSourceStatefulRulesDetails = (
  output: any,
  context: __SerdeContext
): RuleGroupSourceStatefulRulesDetails => {
  return {
    Action: __expectString(output.Action),
    Header:
      output.Header != null
        ? deserializeAws_restJson1RuleGroupSourceStatefulRulesHeaderDetails(output.Header, context)
        : undefined,
    RuleOptions:
      output.RuleOptions != null
        ? deserializeAws_restJson1RuleGroupSourceStatefulRulesOptionsList(output.RuleOptions, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1RuleGroupSourceStatefulRulesHeaderDetails = (
  output: any,
  context: __SerdeContext
): RuleGroupSourceStatefulRulesHeaderDetails => {
  return {
    Destination: __expectString(output.Destination),
    DestinationPort: __expectString(output.DestinationPort),
    Direction: __expectString(output.Direction),
    Protocol: __expectString(output.Protocol),
    Source: __expectString(output.Source),
    SourcePort: __expectString(output.SourcePort),
  } as any;
};

const deserializeAws_restJson1RuleGroupSourceStatefulRulesList = (
  output: any,
  context: __SerdeContext
): RuleGroupSourceStatefulRulesDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RuleGroupSourceStatefulRulesDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RuleGroupSourceStatefulRulesOptionsDetails = (
  output: any,
  context: __SerdeContext
): RuleGroupSourceStatefulRulesOptionsDetails => {
  return {
    Keyword: __expectString(output.Keyword),
    Settings:
      output.Settings != null
        ? deserializeAws_restJson1RuleGroupSourceStatefulRulesRuleOptionsSettingsList(output.Settings, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1RuleGroupSourceStatefulRulesOptionsList = (
  output: any,
  context: __SerdeContext
): RuleGroupSourceStatefulRulesOptionsDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RuleGroupSourceStatefulRulesOptionsDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RuleGroupSourceStatefulRulesRuleOptionsSettingsList = (
  output: any,
  context: __SerdeContext
): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1RuleGroupSourceStatelessRuleDefinition = (
  output: any,
  context: __SerdeContext
): RuleGroupSourceStatelessRuleDefinition => {
  return {
    Actions: output.Actions != null ? deserializeAws_restJson1NonEmptyStringList(output.Actions, context) : undefined,
    MatchAttributes:
      output.MatchAttributes != null
        ? deserializeAws_restJson1RuleGroupSourceStatelessRuleMatchAttributes(output.MatchAttributes, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1RuleGroupSourceStatelessRuleMatchAttributes = (
  output: any,
  context: __SerdeContext
): RuleGroupSourceStatelessRuleMatchAttributes => {
  return {
    DestinationPorts:
      output.DestinationPorts != null
        ? deserializeAws_restJson1RuleGroupSourceStatelessRuleMatchAttributesDestinationPortsList(
            output.DestinationPorts,
            context
          )
        : undefined,
    Destinations:
      output.Destinations != null
        ? deserializeAws_restJson1RuleGroupSourceStatelessRuleMatchAttributesDestinationsList(
            output.Destinations,
            context
          )
        : undefined,
    Protocols:
      output.Protocols != null
        ? deserializeAws_restJson1RuleGroupSourceStatelessRuleMatchAttributesProtocolsList(output.Protocols, context)
        : undefined,
    SourcePorts:
      output.SourcePorts != null
        ? deserializeAws_restJson1RuleGroupSourceStatelessRuleMatchAttributesSourcePortsList(
            output.SourcePorts,
            context
          )
        : undefined,
    Sources:
      output.Sources != null
        ? deserializeAws_restJson1RuleGroupSourceStatelessRuleMatchAttributesSourcesList(output.Sources, context)
        : undefined,
    TcpFlags:
      output.TcpFlags != null
        ? deserializeAws_restJson1RuleGroupSourceStatelessRuleMatchAttributesTcpFlagsList(output.TcpFlags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1RuleGroupSourceStatelessRuleMatchAttributesDestinationPorts = (
  output: any,
  context: __SerdeContext
): RuleGroupSourceStatelessRuleMatchAttributesDestinationPorts => {
  return {
    FromPort: __expectInt32(output.FromPort),
    ToPort: __expectInt32(output.ToPort),
  } as any;
};

const deserializeAws_restJson1RuleGroupSourceStatelessRuleMatchAttributesDestinationPortsList = (
  output: any,
  context: __SerdeContext
): RuleGroupSourceStatelessRuleMatchAttributesDestinationPorts[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RuleGroupSourceStatelessRuleMatchAttributesDestinationPorts(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RuleGroupSourceStatelessRuleMatchAttributesDestinations = (
  output: any,
  context: __SerdeContext
): RuleGroupSourceStatelessRuleMatchAttributesDestinations => {
  return {
    AddressDefinition: __expectString(output.AddressDefinition),
  } as any;
};

const deserializeAws_restJson1RuleGroupSourceStatelessRuleMatchAttributesDestinationsList = (
  output: any,
  context: __SerdeContext
): RuleGroupSourceStatelessRuleMatchAttributesDestinations[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RuleGroupSourceStatelessRuleMatchAttributesDestinations(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RuleGroupSourceStatelessRuleMatchAttributesProtocolsList = (
  output: any,
  context: __SerdeContext
): number[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectInt32(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1RuleGroupSourceStatelessRuleMatchAttributesSourcePorts = (
  output: any,
  context: __SerdeContext
): RuleGroupSourceStatelessRuleMatchAttributesSourcePorts => {
  return {
    FromPort: __expectInt32(output.FromPort),
    ToPort: __expectInt32(output.ToPort),
  } as any;
};

const deserializeAws_restJson1RuleGroupSourceStatelessRuleMatchAttributesSourcePortsList = (
  output: any,
  context: __SerdeContext
): RuleGroupSourceStatelessRuleMatchAttributesSourcePorts[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RuleGroupSourceStatelessRuleMatchAttributesSourcePorts(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RuleGroupSourceStatelessRuleMatchAttributesSources = (
  output: any,
  context: __SerdeContext
): RuleGroupSourceStatelessRuleMatchAttributesSources => {
  return {
    AddressDefinition: __expectString(output.AddressDefinition),
  } as any;
};

const deserializeAws_restJson1RuleGroupSourceStatelessRuleMatchAttributesSourcesList = (
  output: any,
  context: __SerdeContext
): RuleGroupSourceStatelessRuleMatchAttributesSources[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RuleGroupSourceStatelessRuleMatchAttributesSources(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RuleGroupSourceStatelessRuleMatchAttributesTcpFlags = (
  output: any,
  context: __SerdeContext
): RuleGroupSourceStatelessRuleMatchAttributesTcpFlags => {
  return {
    Flags: output.Flags != null ? deserializeAws_restJson1NonEmptyStringList(output.Flags, context) : undefined,
    Masks: output.Masks != null ? deserializeAws_restJson1NonEmptyStringList(output.Masks, context) : undefined,
  } as any;
};

const deserializeAws_restJson1RuleGroupSourceStatelessRuleMatchAttributesTcpFlagsList = (
  output: any,
  context: __SerdeContext
): RuleGroupSourceStatelessRuleMatchAttributesTcpFlags[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RuleGroupSourceStatelessRuleMatchAttributesTcpFlags(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RuleGroupSourceStatelessRulesAndCustomActionsDetails = (
  output: any,
  context: __SerdeContext
): RuleGroupSourceStatelessRulesAndCustomActionsDetails => {
  return {
    CustomActions:
      output.CustomActions != null
        ? deserializeAws_restJson1RuleGroupSourceCustomActionsList(output.CustomActions, context)
        : undefined,
    StatelessRules:
      output.StatelessRules != null
        ? deserializeAws_restJson1RuleGroupSourceStatelessRulesList(output.StatelessRules, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1RuleGroupSourceStatelessRulesDetails = (
  output: any,
  context: __SerdeContext
): RuleGroupSourceStatelessRulesDetails => {
  return {
    Priority: __expectInt32(output.Priority),
    RuleDefinition:
      output.RuleDefinition != null
        ? deserializeAws_restJson1RuleGroupSourceStatelessRuleDefinition(output.RuleDefinition, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1RuleGroupSourceStatelessRulesList = (
  output: any,
  context: __SerdeContext
): RuleGroupSourceStatelessRulesDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RuleGroupSourceStatelessRulesDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RuleGroupVariables = (output: any, context: __SerdeContext): RuleGroupVariables => {
  return {
    IpSets:
      output.IpSets != null
        ? deserializeAws_restJson1RuleGroupVariablesIpSetsDetails(output.IpSets, context)
        : undefined,
    PortSets:
      output.PortSets != null
        ? deserializeAws_restJson1RuleGroupVariablesPortSetsDetails(output.PortSets, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1RuleGroupVariablesIpSetsDetails = (
  output: any,
  context: __SerdeContext
): RuleGroupVariablesIpSetsDetails => {
  return {
    Definition:
      output.Definition != null ? deserializeAws_restJson1NonEmptyStringList(output.Definition, context) : undefined,
  } as any;
};

const deserializeAws_restJson1RuleGroupVariablesPortSetsDetails = (
  output: any,
  context: __SerdeContext
): RuleGroupVariablesPortSetsDetails => {
  return {
    Definition:
      output.Definition != null ? deserializeAws_restJson1NonEmptyStringList(output.Definition, context) : undefined,
  } as any;
};

const deserializeAws_restJson1SecurityGroups = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1SensitiveDataDetections = (
  output: any,
  context: __SerdeContext
): SensitiveDataDetections => {
  return {
    Count: __expectLong(output.Count),
    Occurrences:
      output.Occurrences != null ? deserializeAws_restJson1Occurrences(output.Occurrences, context) : undefined,
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1SensitiveDataDetectionsList = (
  output: any,
  context: __SerdeContext
): SensitiveDataDetections[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SensitiveDataDetections(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1SensitiveDataResult = (output: any, context: __SerdeContext): SensitiveDataResult => {
  return {
    Category: __expectString(output.Category),
    Detections:
      output.Detections != null
        ? deserializeAws_restJson1SensitiveDataDetectionsList(output.Detections, context)
        : undefined,
    TotalCount: __expectLong(output.TotalCount),
  } as any;
};

const deserializeAws_restJson1SensitiveDataResultList = (
  output: any,
  context: __SerdeContext
): SensitiveDataResult[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SensitiveDataResult(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Severity = (output: any, context: __SerdeContext): Severity => {
  return {
    Label: __expectString(output.Label),
    Normalized: __expectInt32(output.Normalized),
    Original: __expectString(output.Original),
    Product: __limitedParseDouble(output.Product),
  } as any;
};

const deserializeAws_restJson1SoftwarePackage = (output: any, context: __SerdeContext): SoftwarePackage => {
  return {
    Architecture: __expectString(output.Architecture),
    Epoch: __expectString(output.Epoch),
    FilePath: __expectString(output.FilePath),
    FixedInVersion: __expectString(output.FixedInVersion),
    Name: __expectString(output.Name),
    PackageManager: __expectString(output.PackageManager),
    Release: __expectString(output.Release),
    Remediation: __expectString(output.Remediation),
    Version: __expectString(output.Version),
  } as any;
};

const deserializeAws_restJson1SoftwarePackageList = (output: any, context: __SerdeContext): SoftwarePackage[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1SoftwarePackage(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Standard = (output: any, context: __SerdeContext): Standard => {
  return {
    Description: __expectString(output.Description),
    EnabledByDefault: __expectBoolean(output.EnabledByDefault),
    Name: __expectString(output.Name),
    StandardsArn: __expectString(output.StandardsArn),
  } as any;
};

const deserializeAws_restJson1Standards = (output: any, context: __SerdeContext): Standard[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Standard(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1StandardsControl = (output: any, context: __SerdeContext): StandardsControl => {
  return {
    ControlId: __expectString(output.ControlId),
    ControlStatus: __expectString(output.ControlStatus),
    ControlStatusUpdatedAt:
      output.ControlStatusUpdatedAt != null
        ? __expectNonNull(__parseRfc3339DateTime(output.ControlStatusUpdatedAt))
        : undefined,
    Description: __expectString(output.Description),
    DisabledReason: __expectString(output.DisabledReason),
    RelatedRequirements:
      output.RelatedRequirements != null
        ? deserializeAws_restJson1RelatedRequirementsList(output.RelatedRequirements, context)
        : undefined,
    RemediationUrl: __expectString(output.RemediationUrl),
    SeverityRating: __expectString(output.SeverityRating),
    StandardsControlArn: __expectString(output.StandardsControlArn),
    Title: __expectString(output.Title),
  } as any;
};

const deserializeAws_restJson1StandardsControls = (output: any, context: __SerdeContext): StandardsControl[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1StandardsControl(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1StandardsInputParameterMap = (
  output: any,
  context: __SerdeContext
): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1StandardsStatusReason = (output: any, context: __SerdeContext): StandardsStatusReason => {
  return {
    StatusReasonCode: __expectString(output.StatusReasonCode),
  } as any;
};

const deserializeAws_restJson1StandardsSubscription = (output: any, context: __SerdeContext): StandardsSubscription => {
  return {
    StandardsArn: __expectString(output.StandardsArn),
    StandardsInput:
      output.StandardsInput != null
        ? deserializeAws_restJson1StandardsInputParameterMap(output.StandardsInput, context)
        : undefined,
    StandardsStatus: __expectString(output.StandardsStatus),
    StandardsStatusReason:
      output.StandardsStatusReason != null
        ? deserializeAws_restJson1StandardsStatusReason(output.StandardsStatusReason, context)
        : undefined,
    StandardsSubscriptionArn: __expectString(output.StandardsSubscriptionArn),
  } as any;
};

const deserializeAws_restJson1StandardsSubscriptions = (
  output: any,
  context: __SerdeContext
): StandardsSubscription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1StandardsSubscription(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1StatelessCustomActionDefinition = (
  output: any,
  context: __SerdeContext
): StatelessCustomActionDefinition => {
  return {
    PublishMetricAction:
      output.PublishMetricAction != null
        ? deserializeAws_restJson1StatelessCustomPublishMetricAction(output.PublishMetricAction, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1StatelessCustomPublishMetricAction = (
  output: any,
  context: __SerdeContext
): StatelessCustomPublishMetricAction => {
  return {
    Dimensions:
      output.Dimensions != null
        ? deserializeAws_restJson1StatelessCustomPublishMetricActionDimensionsList(output.Dimensions, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1StatelessCustomPublishMetricActionDimension = (
  output: any,
  context: __SerdeContext
): StatelessCustomPublishMetricActionDimension => {
  return {
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1StatelessCustomPublishMetricActionDimensionsList = (
  output: any,
  context: __SerdeContext
): StatelessCustomPublishMetricActionDimension[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1StatelessCustomPublishMetricActionDimension(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1StatusReason = (output: any, context: __SerdeContext): StatusReason => {
  return {
    Description: __expectString(output.Description),
    ReasonCode: __expectString(output.ReasonCode),
  } as any;
};

const deserializeAws_restJson1StatusReasonsList = (output: any, context: __SerdeContext): StatusReason[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1StatusReason(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1StringFilter = (output: any, context: __SerdeContext): StringFilter => {
  return {
    Comparison: __expectString(output.Comparison),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1StringFilterList = (output: any, context: __SerdeContext): StringFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1StringFilter(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1StringList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1Threat = (output: any, context: __SerdeContext): Threat => {
  return {
    FilePaths: output.FilePaths != null ? deserializeAws_restJson1FilePathList(output.FilePaths, context) : undefined,
    ItemCount: __expectInt32(output.ItemCount),
    Name: __expectString(output.Name),
    Severity: __expectString(output.Severity),
  } as any;
};

const deserializeAws_restJson1ThreatIntelIndicator = (output: any, context: __SerdeContext): ThreatIntelIndicator => {
  return {
    Category: __expectString(output.Category),
    LastObservedAt: __expectString(output.LastObservedAt),
    Source: __expectString(output.Source),
    SourceUrl: __expectString(output.SourceUrl),
    Type: __expectString(output.Type),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1ThreatIntelIndicatorList = (
  output: any,
  context: __SerdeContext
): ThreatIntelIndicator[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ThreatIntelIndicator(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ThreatList = (output: any, context: __SerdeContext): Threat[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Threat(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1TypeList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

const deserializeAws_restJson1VolumeMount = (output: any, context: __SerdeContext): VolumeMount => {
  return {
    MountPath: __expectString(output.MountPath),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1VolumeMountList = (output: any, context: __SerdeContext): VolumeMount[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1VolumeMount(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1VpcInfoCidrBlockSetDetails = (
  output: any,
  context: __SerdeContext
): VpcInfoCidrBlockSetDetails => {
  return {
    CidrBlock: __expectString(output.CidrBlock),
  } as any;
};

const deserializeAws_restJson1VpcInfoCidrBlockSetList = (
  output: any,
  context: __SerdeContext
): VpcInfoCidrBlockSetDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1VpcInfoCidrBlockSetDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1VpcInfoIpv6CidrBlockSetDetails = (
  output: any,
  context: __SerdeContext
): VpcInfoIpv6CidrBlockSetDetails => {
  return {
    Ipv6CidrBlock: __expectString(output.Ipv6CidrBlock),
  } as any;
};

const deserializeAws_restJson1VpcInfoIpv6CidrBlockSetList = (
  output: any,
  context: __SerdeContext
): VpcInfoIpv6CidrBlockSetDetails[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1VpcInfoIpv6CidrBlockSetDetails(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1VpcInfoPeeringOptionsDetails = (
  output: any,
  context: __SerdeContext
): VpcInfoPeeringOptionsDetails => {
  return {
    AllowDnsResolutionFromRemoteVpc: __expectBoolean(output.AllowDnsResolutionFromRemoteVpc),
    AllowEgressFromLocalClassicLinkToRemoteVpc: __expectBoolean(output.AllowEgressFromLocalClassicLinkToRemoteVpc),
    AllowEgressFromLocalVpcToRemoteClassicLink: __expectBoolean(output.AllowEgressFromLocalVpcToRemoteClassicLink),
  } as any;
};

const deserializeAws_restJson1Vulnerability = (output: any, context: __SerdeContext): Vulnerability => {
  return {
    Cvss: output.Cvss != null ? deserializeAws_restJson1CvssList(output.Cvss, context) : undefined,
    FixAvailable: __expectString(output.FixAvailable),
    Id: __expectString(output.Id),
    ReferenceUrls:
      output.ReferenceUrls != null ? deserializeAws_restJson1StringList(output.ReferenceUrls, context) : undefined,
    RelatedVulnerabilities:
      output.RelatedVulnerabilities != null
        ? deserializeAws_restJson1StringList(output.RelatedVulnerabilities, context)
        : undefined,
    Vendor: output.Vendor != null ? deserializeAws_restJson1VulnerabilityVendor(output.Vendor, context) : undefined,
    VulnerablePackages:
      output.VulnerablePackages != null
        ? deserializeAws_restJson1SoftwarePackageList(output.VulnerablePackages, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1VulnerabilityList = (output: any, context: __SerdeContext): Vulnerability[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Vulnerability(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1VulnerabilityVendor = (output: any, context: __SerdeContext): VulnerabilityVendor => {
  return {
    Name: __expectString(output.Name),
    Url: __expectString(output.Url),
    VendorCreatedAt: __expectString(output.VendorCreatedAt),
    VendorSeverity: __expectString(output.VendorSeverity),
    VendorUpdatedAt: __expectString(output.VendorUpdatedAt),
  } as any;
};

const deserializeAws_restJson1WafAction = (output: any, context: __SerdeContext): WafAction => {
  return {
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1WafExcludedRule = (output: any, context: __SerdeContext): WafExcludedRule => {
  return {
    RuleId: __expectString(output.RuleId),
  } as any;
};

const deserializeAws_restJson1WafExcludedRuleList = (output: any, context: __SerdeContext): WafExcludedRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1WafExcludedRule(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1WafOverrideAction = (output: any, context: __SerdeContext): WafOverrideAction => {
  return {
    Type: __expectString(output.Type),
  } as any;
};

const deserializeAws_restJson1Workflow = (output: any, context: __SerdeContext): Workflow => {
  return {
    Status: __expectString(output.Status),
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }
};
