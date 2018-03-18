# Serverless Examples

Contains various examples of serverless architecture.
For now all the examples can be deployed to AWS lambda.

## Installation steps

1.  First, install the `serverless` package globally Ignore this step if you have already installed.

```
npm install -g serverless
```

2.  Create an user in AWS IAM with administrator credentials and get access key and secret access key.
3.  Run the following command to setup the provider credentials. Ignore this step if you have already configured.

```
serverless config credentials --provider aws --key XXXXXX --secret XXXXXXXXX
```

4.  Go to specific folder and run the following command

```
serverless deploy -v
```
