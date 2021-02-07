// Error template

export class APIError extends Error {
  constructor(
    name: string,
    message: string,
    public status: number,
    public properties?: any,
    public internalProperties?: any
  ) {
    super();
    this.name = name;
    this.message = message;
  }

  // APIError in PublicError umwandeln
  publicVersion() {
    return new PublicError(this);
  }
}

// Error that will be seen by the client
export class PublicError {
  name: string;
  message: string;
  status: number;
  properties?: any;

  constructor(err: APIError) {
    this.name = err.name;
    this.message = err.message;
    this.status = err.status;
    this.properties = err.properties;
  }
}

export class PublicInfo {
  constructor(
    public message: string,
    public status: number,
    public properties?: any
  ) {}
}
