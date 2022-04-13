import * as pulumi from '@pulumi/pulumi';
import * as salesfloor from '@salesfloor/pulumi-lib';

const playground = new salesfloor.dev.v1.Playground(pulumi.getProject());

// dev setup goes here.