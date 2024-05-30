import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2'
import * as ecs from  'aws-cdk-lib/aws-ecs'
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class NishaliEcsStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // refering to existing vpc 
    const vpc = ec2.Vpc.fromLookup(this,'ashuExistingVpc', {
      vpcId: 'vpc-063afa0c24ec80cb8'
    });
    // defining ECS cluster info 
    const cluster = new ecs.Cluster(this,'ashu-ecs-cluster',{
      clusterName: 'nishali-ecs-bycdk',
      vpc: vpc,
      enableFargateCapacityProviders: true ,
      containerInsights: true // enable cloudwatch monitoring 
    });

    // task Definition of farget launch type 
    const ashuTaskDef = new ecs.FargateTaskDefinition(this,'ashu-frg-task1',{
      cpu:  256,
      memoryLimitMiB: 512
       
    });
    // adding container info 
    const container = ashuTaskDef.addContainer('ashucdkc1',{
      image: ecs.ContainerImage.fromRegistry('dockerashu/ashubmo:nginxuiv1'),
      memoryLimitMiB: 256,
      portMappings: [{ containerPort: 80 }]
    });

  }
}
