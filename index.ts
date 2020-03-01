import * as pulumi from "@pulumi/pulumi";
import * as automat from '@automat-ai/pulumi-lib';

const playground = new automat.dev.v1.Playground(pulumi.getProject());

// dev setup goes here.