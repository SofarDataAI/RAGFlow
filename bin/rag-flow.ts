#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { RagFlowStack } from '../lib/rag-flow-stack';

const app = new cdk.App();
new RagFlowStack(app, 'RagFlowStack', {
});
