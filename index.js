const grpc = require('@grpc/grpc-js');
const externalAuth = require('./gen/envoy/service/auth/v2/external_auth_pb');
const attributeContext = require('./gen/envoy/service/auth/v2/attribute_context_pb');
const externalAuthService = require('./gen/envoy/service/auth/v2/external_auth_grpc_pb');

module.exports = class Client {
  constructor(server, headerKey) {
    this.client = new externalAuthService.AuthorizationClient(
      server,
      grpc.credentials.createInsecure()
    );
    this.headerKey = headerKey;
  }

  async check(authorization) {
    const attributeContextRequestHttp = new attributeContext.AttributeContext.HttpRequest();
    attributeContextRequestHttp
      .getHeadersMap()
      .set(this.headerKey, authorization);

    const attributeContextRequest = new attributeContext.AttributeContext.Request();
    attributeContextRequest.setHttp(attributeContextRequestHttp);

    const attributes = new attributeContext.AttributeContext();
    attributes.setRequest(attributeContextRequest);

    const request = new externalAuth.CheckRequest();
    request.setAttributes(attributes);

    return new Promise((resolve, reject) => {
      this.client.check(request, function(err, response) {
        if (err) {
          return reject(err);
        }
        resolve(response);
      });
    });
  }
};
