export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * The `BigInt` scalar type represents non-fractional whole numeric values.
   * `BigInt` is not constrained to 32-bit like the `Int` type and thus is a less
   * compatible type.
   */
  BigInt: { input: any; output: any; }
  /**
   * The `Date` scalar type represents a Date
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  Date: { input: any; output: any; }
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: { input: any; output: any; }
  /**
   * Custom Decimal implementation.
   *
   * Returns Decimal as a float in the API,
   * parses float to the Decimal on the way back
   * ("float -> string -> Decimal" so as not to lose precision).
   */
  Decimal: { input: any; output: any; }
  /**
   * The `GenericScalar` scalar type represents a generic
   * GraphQL scalar value that could be:
   * String, Boolean, Int, Float, List or Object.
   */
  GenericScalar: { input: any; output: any; }
  /**
   * Allows use of a JSON String for input / output from the GraphQL schema.
   *
   * Use of this type is *not recommended* as you lose the benefits of having a defined, static
   * schema (one of the key benefits of GraphQL).
   */
  JSONString: { input: any; output: any; }
  NauticalUUID: { input: any; output: any; }
  /**
   * Positive Decimal scalar implementation.
   *
   * Should be used in places where value must be positive.
   */
  PositiveDecimal: { input: any; output: any; }
  /**
   * Leverages the internal Python implementation of UUID (uuid.UUID) to provide native UUID objects
   * in fields, resolvers and input.
   */
  UUID: { input: any; output: any; }
  /** Variables of this type must be set to null in mutations. They will be replaced with a filename from a following multipart part containing a binary file. See: https://github.com/jaydenseric/graphql-multipart-request-spec. */
  Upload: { input: any; output: any; }
  WeightScalar: { input: any; output: any; }
  _Any: { input: any; output: any; }
}

export interface AbstractOrderSellerReportType {
  __typename?: 'AbstractOrderSellerReportType';
  /** @deprecated This will be removed on Oct 26, 2024 when affiliate support is removed. */
  affiliateCommission: Maybe<Scalars['Float']['output']>;
  average: Maybe<Scalars['Float']['output']>;
  commission: Maybe<Scalars['Float']['output']>;
  discounts: Maybe<Scalars['Float']['output']>;
  gross: Maybe<Scalars['Float']['output']>;
  net: Maybe<Scalars['Float']['output']>;
  orders: Maybe<Scalars['Int']['output']>;
  payout: Maybe<Scalars['Float']['output']>;
  revenue: Maybe<Scalars['Float']['output']>;
  shipping: Maybe<Scalars['Float']['output']>;
  taxes: Maybe<Scalars['Float']['output']>;
  totals: Maybe<Scalars['Int']['output']>;
  volumeDiscounts: Maybe<Scalars['Float']['output']>;
}

export interface AbstractPaymentsType {
  __typename?: 'AbstractPaymentsType';
  average: Maybe<Scalars['Float']['output']>;
  captured: Maybe<Scalars['Float']['output']>;
  payments: Maybe<Scalars['Int']['output']>;
  totalAuthorized: Maybe<Scalars['Float']['output']>;
}

export interface AbstractPercentReportType {
  __typename?: 'AbstractPercentReportType';
  average: Maybe<Scalars['Float']['output']>;
  discounts: Maybe<Scalars['Float']['output']>;
  gross: Maybe<Scalars['Float']['output']>;
  net: Maybe<Scalars['Float']['output']>;
  orders: Maybe<Scalars['Float']['output']>;
  revenue: Maybe<Scalars['Float']['output']>;
  shipping: Maybe<Scalars['Float']['output']>;
  taxes: Maybe<Scalars['Float']['output']>;
  totals: Maybe<Scalars['Float']['output']>;
  volumeDiscounts: Maybe<Scalars['Float']['output']>;
}

export interface AbstractProductVariantType {
  __typename?: 'AbstractProductVariantType';
  avgPrice: Maybe<Scalars['Float']['output']>;
  avgPriceGrossAmount: Maybe<Scalars['Float']['output']>;
  grossRevenue: Maybe<Scalars['Float']['output']>;
  maxPrice: Maybe<Scalars['Float']['output']>;
  maxPriceGrossAmount: Maybe<Scalars['Float']['output']>;
  minPrice: Maybe<Scalars['Float']['output']>;
  minPriceGrossAmount: Maybe<Scalars['Float']['output']>;
  quantityOrdered: Maybe<Scalars['Int']['output']>;
  revenue: Maybe<Scalars['Float']['output']>;
  totals: Maybe<Scalars['Int']['output']>;
}

/** Create a new address for the customer. */
export interface AccountAddressCreate {
  __typename?: 'AccountAddressCreate';
  accountErrors: Array<AccountError>;
  address: Maybe<Address>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** A user instance for which the address was created. */
  user: Maybe<User>;
}

/** Delete an address of the logged-in user. */
export interface AccountAddressDelete {
  __typename?: 'AccountAddressDelete';
  accountErrors: Array<AccountError>;
  address: Maybe<Address>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** A user instance for which the address was deleted. */
  user: Maybe<User>;
}

/** Sets a default address for the authenticated user. */
export interface AccountAddressSetDefault {
  __typename?: 'AccountAddressSetDefault';
  accountErrors: Array<AccountError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** An updated user instance. */
  user: Maybe<User>;
}

/** Updates an address of the logged-in user. */
export interface AccountAddressUpdate {
  __typename?: 'AccountAddressUpdate';
  accountErrors: Array<AccountError>;
  address: Maybe<Address>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** A user object for which the address was edited. */
  user: Maybe<User>;
}

/** Confirm user account with token sent by email during registration. */
export interface AccountConfirm {
  __typename?: 'AccountConfirm';
  accountErrors: Array<AccountError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** An activated user account. */
  user: Maybe<User>;
}

/** Remove user account. */
export interface AccountDelete {
  __typename?: 'AccountDelete';
  accountErrors: Array<AccountError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  user: Maybe<User>;
}

export interface AccountError {
  __typename?: 'AccountError';
  /** The error code. */
  code: AccountErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message: Scalars['String']['output'];
}

/** An enumeration. */
export enum AccountErrorCode {
  AccountNotActive = 'ACCOUNT_NOT_ACTIVE',
  ActivateOwnAccount = 'ACTIVATE_OWN_ACCOUNT',
  ActivateSuperuserAccount = 'ACTIVATE_SUPERUSER_ACCOUNT',
  AttributeCannotBeAssigned = 'ATTRIBUTE_CANNOT_BE_ASSIGNED',
  DeactivateOwnAccount = 'DEACTIVATE_OWN_ACCOUNT',
  DeactivateSuperuserAccount = 'DEACTIVATE_SUPERUSER_ACCOUNT',
  DeleteNonStaffUser = 'DELETE_NON_STAFF_USER',
  DeleteOwnAccount = 'DELETE_OWN_ACCOUNT',
  DeleteStaffAccount = 'DELETE_STAFF_ACCOUNT',
  DeleteSuperuserAccount = 'DELETE_SUPERUSER_ACCOUNT',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  InvalidCredentials = 'INVALID_CREDENTIALS',
  InvalidPassword = 'INVALID_PASSWORD',
  InvalidPhone = 'INVALID_PHONE',
  JwtDecodeError = 'JWT_DECODE_ERROR',
  JwtInvalidCsrfToken = 'JWT_INVALID_CSRF_TOKEN',
  JwtInvalidToken = 'JWT_INVALID_TOKEN',
  JwtMissingToken = 'JWT_MISSING_TOKEN',
  JwtSignatureExpired = 'JWT_SIGNATURE_EXPIRED',
  LeftNotManageablePermission = 'LEFT_NOT_MANAGEABLE_PERMISSION',
  MustChoosePermissionGroup = 'MUST_CHOOSE_PERMISSION_GROUP',
  NotFound = 'NOT_FOUND',
  NoSeller = 'NO_SELLER',
  OutOfScopeGroup = 'OUT_OF_SCOPE_GROUP',
  OutOfScopePermission = 'OUT_OF_SCOPE_PERMISSION',
  OutOfScopeServiceAccount = 'OUT_OF_SCOPE_SERVICE_ACCOUNT',
  OutOfScopeUser = 'OUT_OF_SCOPE_USER',
  PasswordEntirelyNumeric = 'PASSWORD_ENTIRELY_NUMERIC',
  PasswordIdentical = 'PASSWORD_IDENTICAL',
  PasswordTooCommon = 'PASSWORD_TOO_COMMON',
  PasswordTooShort = 'PASSWORD_TOO_SHORT',
  PasswordTooSimilar = 'PASSWORD_TOO_SIMILAR',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export interface AccountInput {
  /** Company name. */
  companyName?: InputMaybe<Scalars['String']['input']>;
  /** Billing address of the customer. */
  defaultBillingAddress?: InputMaybe<AddressInput>;
  /** Shipping address of the customer. */
  defaultShippingAddress?: InputMaybe<AddressInput>;
  /** Given name. */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** Family name. */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** Personal phone number. */
  personalPhone?: InputMaybe<Scalars['String']['input']>;
  /** Marketplace VAT identification number */
  vatIdentificationNumber?: InputMaybe<Scalars['String']['input']>;
}

/** Register a new user. */
export interface AccountRegister {
  __typename?: 'AccountRegister';
  accountErrors: Array<AccountError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Informs whether users need to confirm their email address. */
  requiresConfirmation: Maybe<Scalars['Boolean']['output']>;
  user: Maybe<User>;
}

export interface AccountRegisterInput {
  /** Optional name of the company that a user is associated with. */
  companyName?: InputMaybe<Scalars['String']['input']>;
  /** Billing address of the user. */
  defaultBillingAddress?: InputMaybe<AddressInput>;
  /** Shipping address of the user. */
  defaultShippingAddress?: InputMaybe<AddressInput>;
  /** The email address of the user. */
  email: Scalars['String']['input'];
  /** Given name. */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** Family name. */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** Password. */
  password: Scalars['String']['input'];
  /** Personal phone number. */
  personalPhone?: InputMaybe<Scalars['String']['input']>;
  /** Base of frontend URL that will be needed to create confirmation URL. */
  redirectUrl?: InputMaybe<Scalars['String']['input']>;
}

/** Sends an email with the account removal link for the logged-in user. */
export interface AccountRequestDeletion {
  __typename?: 'AccountRequestDeletion';
  accountErrors: Array<AccountError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

/** Updates the account of the logged-in user. */
export interface AccountUpdate {
  __typename?: 'AccountUpdate';
  accountErrors: Array<AccountError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  user: Maybe<User>;
}

/** Represents user address data. */
export interface Address extends Node {
  __typename?: 'Address';
  city: Scalars['String']['output'];
  cityArea: Scalars['String']['output'];
  companyName: Scalars['String']['output'];
  /** Shop's default country. */
  country: CountryDisplay;
  countryArea: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** Address is user's default billing address. */
  isDefaultBillingAddress: Maybe<Scalars['Boolean']['output']>;
  /** Address is user's default shipping address. */
  isDefaultShippingAddress: Maybe<Scalars['Boolean']['output']>;
  lastName: Scalars['String']['output'];
  phone: Maybe<Scalars['String']['output']>;
  postalCode: Scalars['String']['output'];
  streetAddress1: Scalars['String']['output'];
  streetAddress2: Scalars['String']['output'];
}

export interface AddressCountableConnection {
  __typename?: 'AddressCountableConnection';
  edges: Array<AddressCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface AddressCountableEdge {
  __typename?: 'AddressCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Address;
}

/** Creates user address. */
export interface AddressCreate {
  __typename?: 'AddressCreate';
  accountErrors: Array<AccountError>;
  address: Maybe<Address>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** A user instance for which the address was created. */
  user: Maybe<User>;
}

/** Deletes an address. */
export interface AddressDelete {
  __typename?: 'AddressDelete';
  accountErrors: Array<AccountError>;
  address: Maybe<Address>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** A user instance for which the address was deleted. */
  user: Maybe<User>;
}

export interface AddressInput {
  /** City. */
  city?: InputMaybe<Scalars['String']['input']>;
  /** District. */
  cityArea?: InputMaybe<Scalars['String']['input']>;
  /** Company or organization. */
  companyName?: InputMaybe<Scalars['String']['input']>;
  /** Country. */
  country?: InputMaybe<CountryCode>;
  /** State or province. */
  countryArea?: InputMaybe<Scalars['String']['input']>;
  /** Given name. */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** Family name. */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** Phone number. */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** Postal code. */
  postalCode?: InputMaybe<Scalars['String']['input']>;
  /** Address. */
  streetAddress1?: InputMaybe<Scalars['String']['input']>;
  /** Address. */
  streetAddress2?: InputMaybe<Scalars['String']['input']>;
}

/** Sets a default address for the given user. */
export interface AddressSetDefault {
  __typename?: 'AddressSetDefault';
  accountErrors: Array<AccountError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** An updated user instance. */
  user: Maybe<User>;
}

export interface AddressType extends Node, ObjectWithMetadata {
  __typename?: 'AddressType';
  city: Maybe<Scalars['String']['output']>;
  country: Maybe<Scalars['String']['output']>;
  countryArea: Maybe<Scalars['String']['output']>;
  firstName: Maybe<Scalars['String']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  lastName: Maybe<Scalars['String']['output']>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  phone: Maybe<Scalars['String']['output']>;
  postalCode: Maybe<Scalars['String']['output']>;
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  streetAddress1: Maybe<Scalars['String']['output']>;
  streetAddress2: Maybe<Scalars['String']['output']>;
}

export enum AddressTypeEnum {
  /** Billing */
  Billing = 'BILLING',
  /** Shipping */
  Shipping = 'SHIPPING'
}

/** Updates an address. */
export interface AddressUpdate {
  __typename?: 'AddressUpdate';
  accountErrors: Array<AccountError>;
  address: Maybe<Address>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** A user object for which the address was edited. */
  user: Maybe<User>;
}

export interface AddressValidationData {
  __typename?: 'AddressValidationData';
  addressFormat: Maybe<Scalars['String']['output']>;
  addressLatinFormat: Maybe<Scalars['String']['output']>;
  allowedFields: Maybe<Array<Scalars['String']['output']>>;
  cityAreaChoices: Maybe<Array<ChoiceValue>>;
  cityAreaType: Maybe<Scalars['String']['output']>;
  cityChoices: Maybe<Array<ChoiceValue>>;
  cityType: Maybe<Scalars['String']['output']>;
  countryAreaChoices: Maybe<Array<ChoiceValue>>;
  countryAreaType: Maybe<Scalars['String']['output']>;
  countryCode: Maybe<Scalars['String']['output']>;
  countryName: Maybe<Scalars['String']['output']>;
  postalCodeExamples: Maybe<Array<Scalars['String']['output']>>;
  postalCodeMatchers: Maybe<Array<Scalars['String']['output']>>;
  postalCodePrefix: Maybe<Scalars['String']['output']>;
  postalCodeType: Maybe<Scalars['String']['output']>;
  requiredFields: Maybe<Array<Scalars['String']['output']>>;
  upperFields: Maybe<Array<Scalars['String']['output']>>;
}

/** Create an affiliate avatar. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec */
export interface AffiliateAvatarUpdate {
  __typename?: 'AffiliateAvatarUpdate';
  accountErrors: Array<AccountError>;
  /** An updated affiliate instance. */
  affiliate: Maybe<User>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

/** Deletes affiliates. */
export interface AffiliateBulkDelete {
  __typename?: 'AffiliateBulkDelete';
  affiliateErrors: Array<AccountError>;
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

/** Activate or deactivate affiliate codes. */
export interface AffiliateCodeBulkSetActive {
  __typename?: 'AffiliateCodeBulkSetActive';
  codeErrors: Array<AccountError>;
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

/** Updates an affiliate code channel */
export interface AffiliateCodeChannelUpdate {
  __typename?: 'AffiliateCodeChannelUpdate';
  /** Updated affiliate code instance */
  affiliateCode: Maybe<AffiliateCodes>;
  channelErrors: Array<ChannelError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

/** Creates a new affiliate code */
export interface AffiliateCodeCreate {
  __typename?: 'AffiliateCodeCreate';
  affiliateCodes: Maybe<AffiliateCodes>;
  affiliateErrors: Array<AffiliateError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

export interface AffiliateCodeCreateInput {
  /** The id of the affiliate that the code belongs to */
  affiliate: Scalars['ID']['input'];
  /** ID of the channel code is used for */
  channel?: InputMaybe<Scalars['ID']['input']>;
  /** The new affiliate code */
  code?: InputMaybe<Scalars['String']['input']>;
}

export interface AffiliateCodeFilterInput {
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
}

/** Sets whether code is active */
export interface AffiliateCodeSetActive {
  __typename?: 'AffiliateCodeSetActive';
  affiliateCodes: Maybe<AffiliateCodes>;
  affiliateErrors: Array<AffiliateError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

export enum AffiliateCodeSortField {
  /** Sort affiliate codes by code. */
  Code = 'CODE',
  /** Sort affiliate codes by referrals. */
  Referrals = 'REFERRALS',
  /** Sort affiliate codes by status. */
  Status = 'STATUS'
}

export interface AffiliateCodeSortingInput {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort affiliate_codes by the selected field. */
  field: AffiliateCodeSortField;
}

/** Increments affiliate code uses */
export interface AffiliateCodeUse {
  __typename?: 'AffiliateCodeUse';
  affiliateCodes: Maybe<AffiliateCodes>;
  affiliateErrors: Array<AffiliateError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

/** Represents an affiliate code */
export interface AffiliateCodes extends Node {
  __typename?: 'AffiliateCodes';
  /** The id of the affiliate that the code belongs to */
  affiliate: Maybe<User>;
  affiliateNauticalOrders: NauticalOrderCountableConnection;
  affiliateOrders: OrderCountableConnection;
  /** Channel the code is associated with */
  channel: Maybe<Channel>;
  /** The new affiliate code */
  code: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  earnings: Maybe<Money>;
  externalId: Maybe<Scalars['String']['output']>;
  externalInventoryId: Maybe<Scalars['String']['output']>;
  externalSource: Maybe<Scalars['String']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** Whether or not the code is active */
  isActive: Maybe<Scalars['Boolean']['output']>;
  orders: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  /** Number of times the code has been submitted (this includes when the customer did not complete an order) */
  uses: Maybe<Scalars['Int']['output']>;
}


/** Represents an affiliate code */
export interface AffiliateCodesAffiliateNauticalOrdersArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
}


/** Represents an affiliate code */
export interface AffiliateCodesAffiliateOrdersArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
}

export interface AffiliateCodesCountableConnection {
  __typename?: 'AffiliateCodesCountableConnection';
  edges: Array<AffiliateCodesCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface AffiliateCodesCountableEdge {
  __typename?: 'AffiliateCodesCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: AffiliateCodes;
}

/** Creates a new affiliate. */
export interface AffiliateCreate {
  __typename?: 'AffiliateCreate';
  accountErrors: Array<AccountError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  user: Maybe<User>;
}

/** Deletes a affiliate. */
export interface AffiliateDelete {
  __typename?: 'AffiliateDelete';
  accountErrors: Array<AccountError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  user: Maybe<User>;
}

export interface AffiliateError {
  __typename?: 'AffiliateError';
  /** The error code. */
  code: AffiliateErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message: Scalars['String']['output'];
}

/** An enumeration. */
export enum AffiliateErrorCode {
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export interface AffiliateFilterInput {
  dateJoined?: InputMaybe<DateRangeInput>;
  moneySpent?: InputMaybe<PriceRangeInput>;
  numberOfOrders?: InputMaybe<IntRangeInput>;
  placedOrders?: InputMaybe<DateRangeInput>;
  search?: InputMaybe<Scalars['String']['input']>;
}

export interface AffiliateInput {
  /** Only filled out if the account is a business account. */
  companyName?: InputMaybe<Scalars['String']['input']>;
  /** List of custom fields. */
  customFields?: InputMaybe<Array<AttributeValueInput>>;
  /** Billing address of the customer. */
  defaultBillingAddress?: InputMaybe<AddressInput>;
  /** Shipping address of the customer. */
  defaultShippingAddress?: InputMaybe<AddressInput>;
  /** The unique email address of the user. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Given name. */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** User account is active. */
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * User account is affiliate.
   * @deprecated This will be removed on Oct 26, 2024 when affiliate support is removed.
   */
  isAffiliate?: InputMaybe<Scalars['Boolean']['input']>;
  /** User is staff member. */
  isStaff?: InputMaybe<Scalars['Boolean']['input']>;
  /** Family name. */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** A note about the user. */
  note?: InputMaybe<Scalars['String']['input']>;
  /** Password url */
  passwordUrl?: InputMaybe<Scalars['String']['input']>;
  /** Personal phone number. */
  personalPhone?: InputMaybe<Scalars['String']['input']>;
  /** ID of the plan to assign affiliate to. */
  plan?: InputMaybe<Scalars['ID']['input']>;
  /** Tax exempt code */
  taxExemptCode?: InputMaybe<Scalars['String']['input']>;
}

/** Updates an existing affiliate. */
export interface AffiliateUpdate {
  __typename?: 'AffiliateUpdate';
  accountErrors: Array<AccountError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  user: Maybe<User>;
}

/** A marketplace agreement created, edited and maintianed in the dashboard */
export interface Agreement extends Node, ObjectWithMetadata {
  __typename?: 'Agreement';
  agreementType: AgreementAgreementType;
  commissionType: AgreementCommissionType;
  commissionUniform: Maybe<Scalars['Boolean']['output']>;
  content: Scalars['String']['output'];
  contentHtml: Scalars['String']['output'];
  contentJson: Scalars['JSONString']['output'];
  createdAt: Scalars['DateTime']['output'];
  defaultCommission: Scalars['Decimal']['output'];
  feeFormat: Maybe<Scalars['String']['output']>;
  /** List of extra fees associated with the agreement. */
  fees: Maybe<Array<AgreementFees>>;
  fixedFee: Maybe<Scalars['Decimal']['output']>;
  /** List of granular commissions associated with the agreement. */
  granularCommissions: Maybe<Array<AgreementCommission>>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  isActive: Maybe<Scalars['Boolean']['output']>;
  isPublished: Scalars['Boolean']['output'];
  jurisdiction: Maybe<Scalars['String']['output']>;
  markupCommissionType: AgreementMarkupCommissionType;
  markupCommissionValue: Scalars['Decimal']['output'];
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  products: Scalars['String']['output'];
  publicationDate: Maybe<Scalars['Date']['output']>;
  sellerAgreements: AgreementSellersCountableConnection;
  seoDescription: Maybe<Scalars['String']['output']>;
  seoTitle: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  staff: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  vendorType: AgreementVendorType;
}


/** A marketplace agreement created, edited and maintianed in the dashboard */
export interface AgreementSellerAgreementsArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
}

/** An enumeration. */
export enum AgreementAgreementType {
  /** Seller */
  A_1 = 'A_1',
  /** Affiliate */
  A_2 = 'A_2'
}

/** Deletes agreements. */
export interface AgreementBulkDelete {
  __typename?: 'AgreementBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

/** Publish agreements. */
export interface AgreementBulkPublish {
  __typename?: 'AgreementBulkPublish';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

/** An agreement commission */
export interface AgreementCommission extends Node, ObjectWithMetadata {
  __typename?: 'AgreementCommission';
  agreement: Agreement;
  commission: Scalars['Decimal']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  instance: Maybe<Category>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
}

/** Creates a new agreement commission. */
export interface AgreementCommissionCreate {
  __typename?: 'AgreementCommissionCreate';
  agreementCommission: Maybe<AgreementCommission>;
  agreementErrors: Array<AgreementError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

export interface AgreementCommissionCreateInput {
  /** ID of the agreement to create the commission rate against. */
  agreement?: InputMaybe<Scalars['ID']['input']>;
  /** Commission rate as a decimal. */
  commission?: InputMaybe<Scalars['Decimal']['input']>;
  /** Type of the commission. */
  commissionType?: InputMaybe<AgreementGranularCommissionType>;
  /** ID of the instance that the commission applies to. */
  instance?: InputMaybe<Scalars['ID']['input']>;
}

/** Deletes an agreement commission. */
export interface AgreementCommissionDelete {
  __typename?: 'AgreementCommissionDelete';
  agreementCommission: Maybe<AgreementCommission>;
  agreementErrors: Array<AgreementError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

/** An enumeration. */
export enum AgreementCommissionType {
  /** Absolute Price Commission */
  Dropshipping = 'DROPSHIPPING',
  /** Gross Price Commission */
  Marketplace = 'MARKETPLACE',
  /** Markup Commission */
  Wholesale = 'WHOLESALE'
}

export interface AgreementCountableConnection {
  __typename?: 'AgreementCountableConnection';
  edges: Array<AgreementCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface AgreementCountableEdge {
  __typename?: 'AgreementCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Agreement;
}

/** Creates a new agreement. */
export interface AgreementCreate {
  __typename?: 'AgreementCreate';
  agreement: Maybe<Agreement>;
  agreementErrors: Array<AgreementError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

/** Deletes a agreement. */
export interface AgreementDelete {
  __typename?: 'AgreementDelete';
  agreement: Maybe<Agreement>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

export interface AgreementError {
  __typename?: 'AgreementError';
  /** The error code. */
  code: AgreementErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message: Scalars['String']['output'];
}

/** An enumeration. */
export enum AgreementErrorCode {
  ExistingVendorAgreements = 'EXISTING_VENDOR_AGREEMENTS',
  GraphqlError = 'GRAPHQL_ERROR',
  InputInvalid = 'INPUT_INVALID',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

/** Creates a new agreement fee. */
export interface AgreementFeeCreate {
  __typename?: 'AgreementFeeCreate';
  agreementErrors: Array<AgreementError>;
  agreementFees: Maybe<AgreementFees>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

/** Deletes an agreement fee. */
export interface AgreementFeeDelete {
  __typename?: 'AgreementFeeDelete';
  agreementErrors: Array<AgreementError>;
  agreementFees: Maybe<AgreementFees>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

export interface AgreementFeeInput {
  /** ID of the agreement to create the fee against. */
  agreement?: InputMaybe<Scalars['ID']['input']>;
  /** Name of the agreement fee. */
  feeName?: InputMaybe<Scalars['String']['input']>;
  /** Scope of the fee (one of line or total) */
  feeScope?: InputMaybe<FeeScope>;
  /** Type of the fee (one of percentage or fixed) */
  feeType?: InputMaybe<FeeType>;
  /** Value of the fee. */
  feeValue?: InputMaybe<Scalars['Decimal']['input']>;
}

/** Extra fees associated with an agreement */
export interface AgreementFees extends Node {
  __typename?: 'AgreementFees';
  agreement: Agreement;
  feeName: Scalars['String']['output'];
  /** Scope of the fee */
  feeScope: FeeScope;
  /** type of fee */
  feeType: FeeType;
  /** Fee value in domiciled currency */
  feeValue: Scalars['Decimal']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
}

export interface AgreementFilterInput {
  search?: InputMaybe<Scalars['String']['input']>;
}

export enum AgreementGranularCommissionType {
  Category = 'CATEGORY'
}

export interface AgreementInput {
  /** Gross Price, Markup, Absolute etc */
  commissionType?: InputMaybe<CommissionTypeEnum>;
  /** Are commissions uniform across the marketplace? */
  commissionUniform?: InputMaybe<Scalars['Boolean']['input']>;
  /** Agreement content (Plaintext, deprecated as input). */
  content?: InputMaybe<Scalars['String']['input']>;
  /** Agreement content (HTML). */
  contentHtml?: InputMaybe<Scalars['String']['input']>;
  /** Agreement content (JSON). */
  contentJson?: InputMaybe<Scalars['JSONString']['input']>;
  /** Default commission for all orders */
  defaultCommission?: InputMaybe<Scalars['Decimal']['input']>;
  /** Fee format: per sale or month */
  feeFormat?: InputMaybe<Scalars['String']['input']>;
  /** Default fees per sale or month */
  fixedFee?: InputMaybe<Scalars['Decimal']['input']>;
  /** Is this agreement active? */
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Determines if agreement is visible in the storefront. */
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  /** Agreement legal jurisdiction. */
  jurisdiction?: InputMaybe<Scalars['String']['input']>;
  /** Percentage by default */
  markupCommissionType?: InputMaybe<MarkupCommissionTypeEnum>;
  /** Markup commission percentage for all items */
  markupCommissionValue?: InputMaybe<Scalars['Decimal']['input']>;
  /** Number of products allowed on the agreement */
  products?: InputMaybe<Scalars['String']['input']>;
  /** Publication date. ISO 8601 standard. */
  publicationDate?: InputMaybe<Scalars['String']['input']>;
  /** Search engine optimization fields. */
  seo?: InputMaybe<SeoInput>;
  /** Agreement internal name. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** Number of staff members allowed on the agreement */
  staff?: InputMaybe<Scalars['String']['input']>;
  /** Agreement title. */
  title?: InputMaybe<Scalars['String']['input']>;
  /** Last update date. ISO 8601 standard. */
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Seller or Affiliate
   * @deprecated This will be removed on Oct 26, 2024 when affiliate support is removed.
   */
  vendorType?: InputMaybe<VendorTypeEnum>;
}

/** An enumeration. */
export enum AgreementMarkupCommissionType {
  /** Percentage */
  Percentage = 'PERCENTAGE'
}

export interface AgreementOrder {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort marketplace agreements by the selected field. */
  field?: InputMaybe<AgreementSortField>;
}

/** A seller agreement mapping */
export interface AgreementSellers extends Node, ObjectWithMetadata {
  __typename?: 'AgreementSellers';
  acknowledgedOn: Maybe<Scalars['DateTime']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  plan: Maybe<Agreement>;
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  seller: Seller;
}

export interface AgreementSellersCountableConnection {
  __typename?: 'AgreementSellersCountableConnection';
  edges: Array<AgreementSellersCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface AgreementSellersCountableEdge {
  __typename?: 'AgreementSellersCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: AgreementSellers;
}

export enum AgreementSortField {
  /** Sort agreements by creation date. */
  CreationDate = 'CREATION_DATE',
  /** Sort agreements by publication date. */
  PublicationDate = 'PUBLICATION_DATE',
  /** Sort agreements by slug. */
  Slug = 'SLUG',
  /** Sort agreements by title. */
  Title = 'TITLE',
  /** Sort agreements by visibility. */
  Visibility = 'VISIBILITY'
}

/** Updates an existing agreement. */
export interface AgreementUpdate {
  __typename?: 'AgreementUpdate';
  agreement: Maybe<Agreement>;
  agreementErrors: Array<AgreementError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

/** An enumeration. */
export enum AgreementVendorType {
  /** Affiliate */
  Affiliate = 'AFFILIATE',
  /** Seller */
  Seller = 'SELLER'
}

/** Represents allocation. */
export interface Allocation extends Node {
  __typename?: 'Allocation';
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** Quantity allocated for orders. */
  quantity: Scalars['Int']['output'];
  /** The warehouse were items were allocated. */
  warehouse: Warehouse;
}

/** Represents app data. */
export interface App extends Node, ObjectWithMetadata {
  __typename?: 'App';
  /** Description of this app. */
  aboutApp: Maybe<Scalars['String']['output']>;
  /** Bearer token used to authenticate by thirdparty app. */
  accessToken: Maybe<Scalars['String']['output']>;
  /** Url to iframe with the app. */
  appUrl: Maybe<Scalars['String']['output']>;
  /** Url to iframe with the configuration for the app. */
  configurationUrl: Maybe<Scalars['String']['output']>;
  /** The date and time when the app was created. */
  created: Maybe<Scalars['DateTime']['output']>;
  /** Description of the data privacy defined for this app. */
  dataPrivacy: Maybe<Scalars['String']['output']>;
  /** Url to details about the privacy policy on the app owner page. */
  dataPrivacyUrl: Maybe<Scalars['String']['output']>;
  /** Homepage of the app. */
  homepageUrl: Maybe<Scalars['String']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** Determine if app will be set active or not. */
  isActive: Maybe<Scalars['Boolean']['output']>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /** Name of the app. */
  name: Maybe<Scalars['String']['output']>;
  /** List of the app's permissions. */
  permissions: Maybe<Array<Permission>>;
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /** Support page for the app. */
  supportUrl: Maybe<Scalars['String']['output']>;
  /** Last 4 characters of the tokens. */
  tokens: Maybe<Array<AppToken>>;
  /** Type of the app. */
  type: Maybe<AppTypeEnum>;
  /** User associated with this app. */
  user: Maybe<User>;
  /** Version number of the app. */
  version: Maybe<Scalars['String']['output']>;
  /** List of webhooks assigned to this app. */
  webhooks: Maybe<Array<Webhook>>;
}

/** Activate the app. */
export interface AppActivate {
  __typename?: 'AppActivate';
  app: Maybe<App>;
  appErrors: Array<AppError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

export interface AppCountableConnection {
  __typename?: 'AppCountableConnection';
  edges: Array<AppCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface AppCountableEdge {
  __typename?: 'AppCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: App;
}

/** Creates a new app. */
export interface AppCreate {
  __typename?: 'AppCreate';
  app: Maybe<App>;
  appErrors: Array<AppError>;
  /** The newly created authentication token. */
  authToken: Maybe<Scalars['String']['output']>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

/** Deactivate the app. */
export interface AppDeactivate {
  __typename?: 'AppDeactivate';
  app: Maybe<App>;
  appErrors: Array<AppError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

/** Deletes an app. */
export interface AppDelete {
  __typename?: 'AppDelete';
  app: Maybe<App>;
  appErrors: Array<AppError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

/** Delete failed installation. */
export interface AppDeleteFailedInstallation {
  __typename?: 'AppDeleteFailedInstallation';
  appErrors: Array<AppError>;
  appInstallation: Maybe<AppInstallation>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

export interface AppError {
  __typename?: 'AppError';
  /** The error code. */
  code: AppErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message: Scalars['String']['output'];
  /** List of permissions which causes the error. */
  permissions: Maybe<Array<PermissionEnum>>;
}

/** An enumeration. */
export enum AppErrorCode {
  Forbidden = 'FORBIDDEN',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  InvalidManifestFormat = 'INVALID_MANIFEST_FORMAT',
  InvalidPermission = 'INVALID_PERMISSION',
  InvalidStatus = 'INVALID_STATUS',
  InvalidUrlFormat = 'INVALID_URL_FORMAT',
  ManifestUrlCantConnect = 'MANIFEST_URL_CANT_CONNECT',
  NotFound = 'NOT_FOUND',
  OutOfScopeApp = 'OUT_OF_SCOPE_APP',
  OutOfScopePermission = 'OUT_OF_SCOPE_PERMISSION',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

/** Fetch and validate manifest. */
export interface AppFetchManifest {
  __typename?: 'AppFetchManifest';
  appErrors: Array<AppError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  manifest: Maybe<Manifest>;
}

export interface AppFilterInput {
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<AppTypeEnum>;
}

export interface AppInput {
  /**
   * DEPRECATED: Use the `appActivate` and `appDeactivate` mutations instead. This field will be removed after 2020-07-31.
   * @deprecated Use the `appActivate` and `appDeactivate` mutations instead.
   */
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** Name of the app. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** List of permission code names to assign to this app. */
  permissions?: InputMaybe<Array<PermissionEnum>>;
  /** User to be associated with this app. */
  user?: InputMaybe<Scalars['ID']['input']>;
}

/** Install new app by using app manifest. */
export interface AppInstall {
  __typename?: 'AppInstall';
  appErrors: Array<AppError>;
  appInstallation: Maybe<AppInstallation>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

export interface AppInstallInput {
  /** Determine if app will be set active or not. */
  activateAfterInstallation?: InputMaybe<Scalars['Boolean']['input']>;
  /** Name of the app to install. */
  appName?: InputMaybe<Scalars['String']['input']>;
  /** Url to app's manifest in JSON format. */
  manifestUrl?: InputMaybe<Scalars['String']['input']>;
  /** List of permission code names to assign to this app. */
  permissions?: InputMaybe<Array<PermissionEnum>>;
}

/** Represents ongoing installation of app. */
export interface AppInstallation extends Job, Node {
  __typename?: 'AppInstallation';
  appName: Scalars['String']['output'];
  /** Created date time of job in ISO 8601 format. */
  createdAt: Scalars['DateTime']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  manifestUrl: Scalars['String']['output'];
  /** Job message. */
  message: Maybe<Scalars['String']['output']>;
  /** Job status. */
  status: JobStatusEnum;
  /** Date time of job last update in ISO 8601 format. */
  updatedAt: Scalars['DateTime']['output'];
}

/** Retry failed installation of new app. */
export interface AppRetryInstall {
  __typename?: 'AppRetryInstall';
  appErrors: Array<AppError>;
  appInstallation: Maybe<AppInstallation>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

export enum AppSortField {
  /** Sort apps by creation date. */
  CreationDate = 'CREATION_DATE',
  /** Sort apps by name. */
  Name = 'NAME'
}

export interface AppSortingInput {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort apps by the selected field. */
  field: AppSortField;
}

/** Represents token data. */
export interface AppToken extends Node {
  __typename?: 'AppToken';
  /** Last 4 characters of the token. */
  authToken: Scalars['String']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** Name of the authenticated token. */
  name: Scalars['String']['output'];
}

/** Creates a new token. */
export interface AppTokenCreate {
  __typename?: 'AppTokenCreate';
  appErrors: Array<AppError>;
  appToken: Maybe<AppToken>;
  /** The newly created authentication token. */
  authToken: Maybe<Scalars['String']['output']>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

/** Deletes an authentication token assigned to app. */
export interface AppTokenDelete {
  __typename?: 'AppTokenDelete';
  appErrors: Array<AppError>;
  appToken: Maybe<AppToken>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

export interface AppTokenInput {
  /** ID of app. */
  app: Scalars['ID']['input'];
  /** Name of the token. */
  name?: InputMaybe<Scalars['String']['input']>;
}

/** Verify provided app token. */
export interface AppTokenVerify {
  __typename?: 'AppTokenVerify';
  appErrors: Array<AppError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Determine if token is valid or not. */
  valid: Scalars['Boolean']['output'];
}

export enum AppTypeEnum {
  /** local */
  Local = 'LOCAL',
  /** thirdparty */
  Thirdparty = 'THIRDPARTY'
}

/** Updates an existing app. */
export interface AppUpdate {
  __typename?: 'AppUpdate';
  app: Maybe<App>;
  appErrors: Array<AppError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

/** Assigns storefront's navigation menus. */
export interface AssignNavigation {
  __typename?: 'AssignNavigation';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Assigned navigation menu. */
  menu: Maybe<Menu>;
  menuErrors: Array<MenuError>;
}

/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export interface Attribute extends Node, ObjectWithMetadata {
  __typename?: 'Attribute';
  /** List of all product types that are using this attribute */
  allProductTypes: Maybe<Array<ProductType>>;
  /** Whether the attribute can be displayed in the admin product list. */
  availableInGrid: Scalars['Boolean']['output'];
  /** ID of the Seller that created the Product Type, or null if Marketplace Operator */
  createdBy: Maybe<Seller>;
  /** External source from which the attribute is imported. */
  externalSource: Maybe<Scalars['String']['output']>;
  /** Whether the attribute can be filtered in dashboard. */
  filterableInDashboard: Scalars['Boolean']['output'];
  /** Whether the attribute can be filtered in storefront. */
  filterableInStorefront: Scalars['Boolean']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** The input type to use for entering attribute values in the dashboard. */
  inputType: AttributeInputTypeEnum;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /** Name of an attribute displayed in the interface. */
  name: Scalars['String']['output'];
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  productTypes: ProductTypeCountableConnection;
  productVariantTypes: ProductTypeCountableConnection;
  /** Internal representation of an attribute name. */
  slug: Scalars['String']['output'];
  /** The position of the attribute in the storefront navigation (0 by default). */
  storefrontSearchPosition: Scalars['Int']['output'];
  /** Whether the attribute requires values to be passed or not. */
  valueRequired: Scalars['Boolean']['output'];
  /** List of attribute's values. */
  values: Maybe<Array<AttributeValue>>;
  /** Whether the attribute should be visible or not in storefront. */
  visibleInStorefront: Scalars['Boolean']['output'];
}


/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export interface AttributeProductTypesArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
}


/** Custom attribute of a product. Attributes can be assigned to products and variants at the product type level. */
export interface AttributeProductVariantTypesArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
}

/** Assign attributes to a given product type. */
export interface AttributeAssign {
  __typename?: 'AttributeAssign';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  /** The updated product type. */
  productType: Maybe<ProductType>;
}

export interface AttributeAssignInput {
  /** The ID of the attribute to assign. */
  id: Scalars['ID']['input'];
  /** The attribute type to be assigned as. */
  type: AttributeTypeEnum;
}

/** Deletes attributes. */
export interface AttributeBulkDelete {
  __typename?: 'AttributeBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
}

export interface AttributeCountableConnection {
  __typename?: 'AttributeCountableConnection';
  edges: Array<AttributeCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface AttributeCountableEdge {
  __typename?: 'AttributeCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Attribute;
}

/** Creates an attribute. */
export interface AttributeCreate {
  __typename?: 'AttributeCreate';
  attribute: Maybe<Attribute>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
}

export interface AttributeCreateInput {
  /** Whether the attribute can be displayed in the admin product list. */
  availableInGrid?: InputMaybe<Scalars['Boolean']['input']>;
  /** ID of the Seller that created the Attribute, or null if Marketplace Operator */
  createdBy?: InputMaybe<Scalars['String']['input']>;
  /** Whether the attribute can be filtered in dashboard. */
  filterableInDashboard?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the attribute can be filtered in storefront. */
  filterableInStorefront?: InputMaybe<Scalars['Boolean']['input']>;
  /** The input type to use for entering attribute values in the dashboard. */
  inputType?: InputMaybe<AttributeInputTypeEnum>;
  /** Whether the attribute is for variants only. */
  isVariantOnly?: InputMaybe<Scalars['Boolean']['input']>;
  /** Name of an attribute displayed in the interface. */
  name: Scalars['String']['input'];
  /** Internal representation of an attribute name. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** The position of the attribute in the storefront navigation (0 by default). */
  storefrontSearchPosition?: InputMaybe<Scalars['Int']['input']>;
  /** Whether the attribute requires values to be passed or not. */
  valueRequired?: InputMaybe<Scalars['Boolean']['input']>;
  /** List of attribute's values. */
  values?: InputMaybe<Array<AttributeValueCreateInput>>;
  /** Whether the attribute should be visible or not in storefront. */
  visibleInStorefront?: InputMaybe<Scalars['Boolean']['input']>;
}

/** Deletes an attribute. */
export interface AttributeDelete {
  __typename?: 'AttributeDelete';
  attribute: Maybe<Attribute>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
}

export interface AttributeError {
  __typename?: 'AttributeError';
  /** The error code. */
  code: ProductErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message: Scalars['String']['output'];
  /** List of values which caused the error. */
  values: Maybe<Array<Scalars['String']['output']>>;
}

export enum AttributeFilterConnector {
  And = 'AND',
  Or = 'OR'
}

export interface AttributeFilterInput {
  availableInGrid?: InputMaybe<Scalars['Boolean']['input']>;
  filterableInDashboard?: InputMaybe<Scalars['Boolean']['input']>;
  filterableInStorefront?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * if True: returns attributes that have a product
   *         or variant associated with it, False: returns attributes that
   *         have NO variant or product associated to it
   */
  hasAssignedProductOrVariant?: InputMaybe<Scalars['Boolean']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  inCategory?: InputMaybe<Scalars['ID']['input']>;
  inCollection?: InputMaybe<Scalars['ID']['input']>;
  inMicrosite?: InputMaybe<Scalars['ID']['input']>;
  inProductSearch?: InputMaybe<Scalars['String']['input']>;
  inVariantSearch?: InputMaybe<Scalars['String']['input']>;
  isVariantOnly?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  showExternal?: InputMaybe<Scalars['Boolean']['input']>;
  valueRequired?: InputMaybe<Scalars['Boolean']['input']>;
  visibleInStorefront?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface AttributeInput {
  /** How the "values" are interpreted */
  condition?: InputMaybe<AttributeFilterConnector>;
  /** How this filter clause interacts with previous attribute filter clauses. The value for the first element in the list of attribute filters is ignored and has no practical value. */
  connector?: InputMaybe<AttributeFilterConnector>;
  /** Internal representation of an attribute name. */
  slug: Scalars['String']['input'];
  /**
   * [Deprecated] Internal representation of a value (unique per attribute). This field will be removed after 2020-07-31.
   * @deprecated Use the `slug` field instead.
   */
  value?: InputMaybe<Scalars['String']['input']>;
  /** Internal representation of a value (unique per attribute). */
  values?: InputMaybe<Array<Scalars['String']['input']>>;
}

export enum AttributeInputTypeEnum {
  /** Boolean */
  Boolean = 'BOOLEAN',
  /** Date */
  Date = 'DATE',
  /** Date Time */
  DateTime = 'DATE_TIME',
  /** Dropdown */
  Dropdown = 'DROPDOWN',
  /** File */
  File = 'FILE',
  /** Money */
  Money = 'MONEY',
  /** Multi Select */
  Multiselect = 'MULTISELECT',
  /** Numeric */
  Numeric = 'NUMERIC',
  /** Plain Text */
  PlainText = 'PLAIN_TEXT',
  /** Reference */
  Reference = 'REFERENCE',
  /** Rich Text */
  RichText = 'RICH_TEXT',
  /** Swatch */
  Swatch = 'SWATCH'
}

export enum AttributeSortField {
  /** Sort attributes based on whether they can be displayed or not in a product grid. */
  AvailableInGrid = 'AVAILABLE_IN_GRID',
  /** Sort attributes by external source */
  ExternalSource = 'EXTERNAL_SOURCE',
  /** Sort attributes by the filterable in dashboard flag */
  FilterableInDashboard = 'FILTERABLE_IN_DASHBOARD',
  /** Sort attributes by the filterable in storefront flag */
  FilterableInStorefront = 'FILTERABLE_IN_STOREFRONT',
  /** Sort attributes by the variant only flag */
  IsVariantOnly = 'IS_VARIANT_ONLY',
  /** Sort attributes by name */
  Name = 'NAME',
  /** Sort attributes by slug */
  Slug = 'SLUG',
  /** Sort attributes by their position in storefront */
  StorefrontSearchPosition = 'STOREFRONT_SEARCH_POSITION',
  /** Sort attributes by the value required flag */
  ValueRequired = 'VALUE_REQUIRED',
  /** Sort attributes by visibility in the storefront */
  VisibleInStorefront = 'VISIBLE_IN_STOREFRONT'
}

export interface AttributeSortingInput {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort attributes by the selected field. */
  field: AttributeSortField;
}

export enum AttributeTemplateStrategyEnum {
  /** Assigned attributes may come from BOTH attribute templates and non-templated attribute assignments */
  Flexible = 'FLEXIBLE',
  /** Assigned attributes may only come from templates (ProductType for PIM-specific attribute usage or CustomFieldTemplate for custom field attribute usage), no non-templated attribute assignment is allowed */
  Strict = 'STRICT'
}

export enum AttributeTypeEnum {
  Custom = 'CUSTOM',
  Product = 'PRODUCT',
  Variant = 'VARIANT'
}

/** Un-assign attributes from a given product type. */
export interface AttributeUnassign {
  __typename?: 'AttributeUnassign';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  /** The updated product type. */
  productType: Maybe<ProductType>;
}

/** Updates attribute. */
export interface AttributeUpdate {
  __typename?: 'AttributeUpdate';
  attribute: Maybe<Attribute>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
}

export interface AttributeUpdateInput {
  /** New values to be created for this attribute. */
  addValues?: InputMaybe<Array<AttributeValueCreateInput>>;
  /** Whether the attribute can be displayed in the admin product list. */
  availableInGrid?: InputMaybe<Scalars['Boolean']['input']>;
  /** ID of the Seller that created the Attribute, or null if Marketplace Operator */
  createdBy?: InputMaybe<Scalars['String']['input']>;
  /** Whether the attribute can be filtered in dashboard. */
  filterableInDashboard?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the attribute can be filtered in storefront. */
  filterableInStorefront?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the attribute is for variants only. */
  isVariantOnly?: InputMaybe<Scalars['Boolean']['input']>;
  /** Name of an attribute displayed in the interface. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** IDs of values to be removed from this attribute. */
  removeValues?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Internal representation of an attribute name. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** The position of the attribute in the storefront navigation (0 by default). */
  storefrontSearchPosition?: InputMaybe<Scalars['Int']['input']>;
  /** Whether the attribute requires values to be passed or not. */
  valueRequired?: InputMaybe<Scalars['Boolean']['input']>;
  /** Whether the attribute should be visible or not in storefront. */
  visibleInStorefront?: InputMaybe<Scalars['Boolean']['input']>;
}

/** Represents a value of an attribute. */
export interface AttributeValue extends Node {
  __typename?: 'AttributeValue';
  amount: Scalars['Decimal']['output'];
  attribute: Attribute;
  boolean: Scalars['Boolean']['output'];
  currency: Scalars['String']['output'];
  /** Populated if the attribute has date input_type, represent actual date for filtering */
  date: Maybe<Scalars['Date']['output']>;
  /** Populated if the attribute has date-time input_type, represent actual datetime for filtering */
  dateTime: Maybe<Scalars['DateTime']['output']>;
  file: Maybe<File>;
  fileUrl: Maybe<Scalars['String']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** The input type to use for entering attribute values in the dashboard. */
  inputType: AttributeInputTypeEnum;
  money: Maybe<Money>;
  /** Name of a value displayed in the interface. */
  name: Scalars['String']['output'];
  plainText: Scalars['String']['output'];
  reference: Scalars['String']['output'];
  richText: Scalars['String']['output'];
  /** Internal representation of a value (unique per attribute). */
  slug: Scalars['String']['output'];
  sortOrder: Maybe<Scalars['Int']['output']>;
  /** Type of value (used only when `value` field is set). */
  type: Maybe<AttributeValueType>;
  /** Supporting information like color, links, etc. */
  value: Scalars['String']['output'];
}

/** Creates attribute values for a given attribute. */
export interface AttributeValueBulkCreate {
  __typename?: 'AttributeValueBulkCreate';
  attributeErrors: Array<AttributeError>;
  /** List of the created attribute values. */
  attributeValues: Array<AttributeValue>;
  /** Returns how many objects were created. */
  count: Scalars['Int']['output'];
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

/** Deletes values of attributes. */
export interface AttributeValueBulkDelete {
  __typename?: 'AttributeValueBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
}

/** Creates a value for an attribute. */
export interface AttributeValueCreate {
  __typename?: 'AttributeValueCreate';
  /** The updated attribute. */
  attribute: Maybe<Attribute>;
  attributeValue: Maybe<AttributeValue>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
}

export interface AttributeValueCreateInput {
  /** Numeric value to support money or numeric attribute values. */
  amount?: InputMaybe<Scalars['Decimal']['input']>;
  /** Supports boolean attribute values. */
  boolean?: InputMaybe<Scalars['Boolean']['input']>;
  /** Currency to support money attribute values. */
  currency?: InputMaybe<Scalars['String']['input']>;
  /** Date and time representation of attribute value. */
  dateTime?: InputMaybe<Scalars['DateTime']['input']>;
  /** Supports file type attribute values. */
  file?: InputMaybe<Scalars['Upload']['input']>;
  /** URL type to support external links as attribute values. */
  fileUrl?: InputMaybe<Scalars['String']['input']>;
  /** Name of a value displayed in the interface. */
  name: Scalars['String']['input'];
  /** Supports attribute values with long text (plain text). */
  plainText?: InputMaybe<Scalars['String']['input']>;
  /** Supports attribute values to reference any other nautical object (should be base64 ID) */
  reference?: InputMaybe<Scalars['String']['input']>;
  /** Supports attribute values with long text (html). */
  richText?: InputMaybe<Scalars['String']['input']>;
  /** Supporting information like color, links, etc. */
  value?: InputMaybe<Scalars['String']['input']>;
}

/** Deletes a value of an attribute. */
export interface AttributeValueDelete {
  __typename?: 'AttributeValueDelete';
  /** The updated attribute. */
  attribute: Maybe<Attribute>;
  attributeValue: Maybe<AttributeValue>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
}

export interface AttributeValueInput {
  /** Numeric value to support money or numeric attribute values. */
  amount?: InputMaybe<Scalars['Decimal']['input']>;
  /** Supports boolean attribute values. */
  boolean?: InputMaybe<Scalars['Boolean']['input']>;
  /** Currency to support money attribute values. */
  currency?: InputMaybe<Scalars['String']['input']>;
  /** Date and time representation of attribute value. */
  dateTime?: InputMaybe<Scalars['DateTime']['input']>;
  /** Supports file type attribute values. */
  file?: InputMaybe<Scalars['Upload']['input']>;
  /** URL type to support external links as attribute values. */
  fileUrl?: InputMaybe<Scalars['String']['input']>;
  /** ID of the selected attribute. */
  id?: InputMaybe<Scalars['ID']['input']>;
  /** Supports attribute values with long text (plain text). */
  plainText?: InputMaybe<Scalars['String']['input']>;
  /** Supports attribute values to reference any other nautical object (should be base64 ID) */
  reference?: InputMaybe<Scalars['String']['input']>;
  /** Supports attribute values with long text (html). */
  richText?: InputMaybe<Scalars['String']['input']>;
  /** Value representation of the attribute value (e.g. color value for swatch attributes). */
  value?: InputMaybe<Scalars['String']['input']>;
  /** The value or slug of an attribute to resolve. If the passed value is non-existent, it will be created. */
  values?: InputMaybe<Array<Scalars['String']['input']>>;
}

export enum AttributeValueType {
  Color = 'COLOR',
  Gradient = 'GRADIENT',
  String = 'STRING',
  Url = 'URL'
}

/** Updates value of an attribute. */
export interface AttributeValueUpdate {
  __typename?: 'AttributeValueUpdate';
  /** The updated attribute. */
  attribute: Maybe<Attribute>;
  attributeValue: Maybe<AttributeValue>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
}

/** Reorder the values of an attribute. */
export interface AttributeValuesReorder {
  __typename?: 'AttributeValuesReorder';
  /** Attribute from which values are reordered. */
  attribute: Maybe<Attribute>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
}

/** Create authorization URL. */
export interface AuthUrlGenerate {
  __typename?: 'AuthURLGenerate';
  accountErrors: Array<AccountError>;
  /** Generated auth URL for google login. */
  authUrl: Maybe<Scalars['String']['output']>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

export enum AvailableShippingStrategyEnum {
  /** Available shipping methods per seller are calculated using every line total, not just the sellers' lines. */
  MarketplaceLines = 'MARKETPLACE_LINES',
  /** Available shipping methods per seller are calculated using only the line totals for the seller. */
  SellerLines = 'SELLER_LINES'
}

/** Represents products import process from 3rd party service or integration. */
export interface AvalaraRequestLog extends Node {
  __typename?: 'AvalaraRequestLog';
  createdAt: Scalars['DateTime']['output'];
  error: Maybe<Scalars['String']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  requestData: Scalars['JSONString']['output'];
  requestUrl: Maybe<Scalars['String']['output']>;
  responseData: Scalars['JSONString']['output'];
}

export interface AvalaraRequestLogCountableConnection {
  __typename?: 'AvalaraRequestLogCountableConnection';
  edges: Array<AvalaraRequestLogCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface AvalaraRequestLogCountableEdge {
  __typename?: 'AvalaraRequestLogCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: AvalaraRequestLog;
}

/** Represents a bid. */
export interface Bid extends Node {
  __typename?: 'Bid';
  amount: Maybe<Money>;
  bidAmount: Scalars['Decimal']['output'];
  createdAt: Scalars['DateTime']['output'];
  currency: Scalars['String']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  message: Maybe<Scalars['String']['output']>;
  metadata: Scalars['JSONString']['output'];
  nauticalOrder: Maybe<NauticalOrder>;
  order: Maybe<Order>;
  privateMetadata: Scalars['JSONString']['output'];
  role: BidRole;
  status: BidStatus;
  updatedAt: Scalars['DateTime']['output'];
  user: Maybe<User>;
}

/** Accepts the specificed bid. */
export interface BidAccept {
  __typename?: 'BidAccept';
  bidErrors: Array<BidError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Nautical order for which the bid was accepted. */
  nauticalOrder: Maybe<NauticalOrder>;
  /** Seller order for which the bid was accepted. */
  order: Maybe<Order>;
}

/** Creates a new Bid. */
export interface BidCreate {
  __typename?: 'BidCreate';
  bid: Maybe<Bid>;
  bidErrors: Array<BidError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

export interface BidError {
  __typename?: 'BidError';
  /** The error code. */
  code: BidErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message: Scalars['String']['output'];
}

/** An enumeration. */
export enum BidErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export interface BidInput {
  /** Amount of the bid. */
  bidAmount: Scalars['PositiveDecimal']['input'];
  /** Currency in 3-letter currency code format. If this is omitted, the marketplace currency will be used by default. */
  currency?: InputMaybe<Scalars['String']['input']>;
  /** Message to add to the bid. */
  message?: InputMaybe<Scalars['String']['input']>;
  /** ID of the Nautical Order or Order to associate with this bid. */
  orderId: Scalars['ID']['input'];
  /** Role of the user creating the bid. */
  role: BidRoleEnum;
}

/** Rejects the specificed bid. */
export interface BidReject {
  __typename?: 'BidReject';
  bidErrors: Array<BidError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Nautical order for which the bid was rejected. */
  nauticalOrder: Maybe<NauticalOrder>;
  /** Seller order for which the bid was rejected. */
  order: Maybe<Order>;
}

/** An enumeration. */
export enum BidRole {
  /** Buyer */
  Buyer = 'BUYER',
  /** Seller */
  Seller = 'SELLER'
}

export enum BidRoleEnum {
  /** Buyer */
  Buyer = 'BUYER',
  /** Seller */
  Seller = 'SELLER'
}

/** An enumeration. */
export enum BidStatus {
  /** Accepted */
  Accepted = 'ACCEPTED',
  /** Rejected */
  Rejected = 'REJECTED',
  /** Submitted */
  Submitted = 'SUBMITTED'
}

export interface BottomLine {
  __typename?: 'BottomLine';
  /** Average star rating over all ratings. */
  averageScore: Maybe<Scalars['Float']['output']>;
  /** Total ratings/reviews. */
  totalReview: Maybe<Scalars['Int']['output']>;
}

/** Delete branding images. */
export interface BrandingImagesDelete {
  __typename?: 'BrandingImagesDelete';
  branding: Maybe<BrandingType>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

export interface BrandingInput {
  /** Favicon file. */
  favicon?: InputMaybe<Scalars['Upload']['input']>;
  footerText?: InputMaybe<Scalars['String']['input']>;
  /** Icon file. */
  icon?: InputMaybe<Scalars['Upload']['input']>;
  jsonContent?: InputMaybe<Scalars['JSONString']['input']>;
  /** Logo file. */
  logo?: InputMaybe<Scalars['Upload']['input']>;
  logoHeight?: InputMaybe<Scalars['Int']['input']>;
  logoWidth?: InputMaybe<Scalars['Int']['input']>;
}

export interface BrandingType {
  __typename?: 'BrandingType';
  favicon: Maybe<Image>;
  footerText: Scalars['String']['output'];
  icon: Maybe<Image>;
  id: Scalars['ID']['output'];
  jsonContent: Scalars['JSONString']['output'];
  logo: Maybe<Image>;
  logoHeight: Maybe<Scalars['Int']['output']>;
  logoWidth: Maybe<Scalars['Int']['output']>;
}


export interface BrandingTypeFaviconArgs {
  size: InputMaybe<Scalars['Int']['input']>;
}


export interface BrandingTypeIconArgs {
  size: InputMaybe<Scalars['Int']['input']>;
}


export interface BrandingTypeLogoArgs {
  size: InputMaybe<Scalars['Int']['input']>;
}

/** Update existing branding. */
export interface BrandingUpdate {
  __typename?: 'BrandingUpdate';
  branding: Maybe<BrandingType>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  ok: Maybe<Scalars['Boolean']['output']>;
}

export interface BulkFulfillmentReturnInput {
  /** Status of the return */
  decision?: InputMaybe<Scalars['String']['input']>;
  /** ID of an fulfillment to return */
  fulfillmentId: Scalars['ID']['input'];
  /** ID of the fulfillment line being returned */
  lineId: Scalars['ID']['input'];
  /** ID of the order line that the fulfillment line is hooked in to */
  orderLineId?: InputMaybe<Scalars['ID']['input']>;
  /** Total quantity of the fulfillment line */
  quantity: Scalars['Int']['input'];
  /** Customer-stated reason for the return */
  returnReason?: InputMaybe<Scalars['String']['input']>;
  /** Quantity being returned for given fulfillment line */
  returnRequestedQty: Scalars['Int']['input'];
}

export interface BulkProductError {
  __typename?: 'BulkProductError';
  /** List of attributes IDs which causes the error. */
  attributes: Maybe<Array<Scalars['ID']['output']>>;
  /** The error code. */
  code: ProductErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']['output']>;
  /** Index of an input list item that caused the error. */
  index: Maybe<Scalars['Int']['output']>;
  /** The error message. */
  message: Scalars['String']['output'];
  /** List of warehouse IDs which causes the error. */
  warehouses: Maybe<Array<Scalars['ID']['output']>>;
}

export interface BulkStockError {
  __typename?: 'BulkStockError';
  /** List of attributes IDs which causes the error. */
  attributes: Maybe<Array<Scalars['ID']['output']>>;
  /** The error code. */
  code: ProductErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']['output']>;
  /** Index of an input list item that caused the error. */
  index: Maybe<Scalars['Int']['output']>;
  /** The error message. */
  message: Scalars['String']['output'];
}

/** Represents a business entity. */
export interface BusinessEntity extends Node, ObjectWithMetadata {
  __typename?: 'BusinessEntity';
  addresses: AddressCountableConnection;
  businessEntityType: Scalars['String']['output'];
  children: BusinessEntityCountableConnection;
  createdAt: Scalars['DateTime']['output'];
  dbaName: Scalars['String']['output'];
  defaultBillingAddress: Maybe<Address>;
  defaultCurrency: Scalars['String']['output'];
  defaultShippingAddress: Maybe<Address>;
  externalPayoutAccountId: Maybe<Scalars['String']['output']>;
  externalPayoutOnboardingUrl: Maybe<Scalars['String']['output']>;
  externalPayoutSource: Maybe<BusinessEntityExternalPayoutSource>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  identifiers: Scalars['JSONString']['output'];
  legalName: Scalars['String']['output'];
  level: Scalars['Int']['output'];
  lft: Scalars['Int']['output'];
  logo: Maybe<Image>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  owner: Maybe<User>;
  parent: Maybe<BusinessEntity>;
  priceBook: Maybe<PriceBook>;
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  rght: Scalars['Int']['output'];
  seller: Maybe<Seller>;
  status: BusinessEntityStatus;
  /** Number of business entities within the tree. */
  totalTreeCount: Maybe<Scalars['Int']['output']>;
  treeId: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
  users: UserCountableConnection;
}


/** Represents a business entity. */
export interface BusinessEntityAddressesArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
}


/** Represents a business entity. */
export interface BusinessEntityChildrenArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
}


/** Represents a business entity. */
export interface BusinessEntityLogoArgs {
  size: InputMaybe<Scalars['Int']['input']>;
}


/** Represents a business entity. */
export interface BusinessEntityUsersArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
}

/** Add a business entity to price book. */
export interface BusinessEntityAddToPriceBook {
  __typename?: 'BusinessEntityAddToPriceBook';
  /** An updated business entity instance. */
  businessEntity: Maybe<BusinessEntity>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  priceBookErrors: Array<PriceBookError>;
}

export interface BusinessEntityAddToPriceBookInput {
  /** ID of business entity that is to be mapped to the price book. */
  businessEntity: Scalars['ID']['input'];
  /** ID of price book that the business entity needs to be added to. */
  priceBook: Scalars['ID']['input'];
}

export interface BusinessEntityCountableConnection {
  __typename?: 'BusinessEntityCountableConnection';
  edges: Array<BusinessEntityCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface BusinessEntityCountableEdge {
  __typename?: 'BusinessEntityCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: BusinessEntity;
}

/** Creates a new business entity. */
export interface BusinessEntityCreate {
  __typename?: 'BusinessEntityCreate';
  businessEntity: Maybe<BusinessEntity>;
  businessEntityErrors: Array<BusinessEntityError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

export interface BusinessEntityCreateInput {
  /** List of User ID's to add to a business entity */
  addUsers?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Agreement ID of the business entity */
  agreement?: InputMaybe<Scalars['ID']['input']>;
  /** Business Entity type, e.g. Wholesale, LLC, Sole Proprietor, etc. */
  businessEntityType?: InputMaybe<Scalars['String']['input']>;
  /** Doing business as name of business entity */
  dbaName?: InputMaybe<Scalars['String']['input']>;
  /** Default currency for the business entity */
  defaultCurrency?: InputMaybe<Scalars['String']['input']>;
  /** Name of business entity */
  legalName: Scalars['String']['input'];
  /** User ID of business entity owner */
  owner?: InputMaybe<Scalars['ID']['input']>;
  /** ID of parent business entity */
  parent?: InputMaybe<Scalars['ID']['input']>;
  /** Business Entity status */
  status?: InputMaybe<BusinessEntityStatusEnum>;
}

/** Requests deletion of a business entity. */
export interface BusinessEntityDelete {
  __typename?: 'BusinessEntityDelete';
  businessEntity: Maybe<BusinessEntity>;
  businessEntityErrors: Array<BusinessEntityError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

export interface BusinessEntityError {
  __typename?: 'BusinessEntityError';
  /** The error code. */
  code: BusinessEntityErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message: Scalars['String']['output'];
}

/** An enumeration. */
export enum BusinessEntityErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

/** An enumeration. */
export enum BusinessEntityExternalPayoutSource {
  /** nautical.payments.paypal */
  NauticalPaymentsPaypal = 'NAUTICAL_PAYMENTS_PAYPAL',
  /** nautical.payments.stripe */
  NauticalPaymentsStripe = 'NAUTICAL_PAYMENTS_STRIPE',
  /** nautical.payments.trolley */
  NauticalPaymentsTrolley = 'NAUTICAL_PAYMENTS_TROLLEY'
}

/** Removes a business entity from price book. */
export interface BusinessEntityRemoveFromPriceBook {
  __typename?: 'BusinessEntityRemoveFromPriceBook';
  /** An updated business entity instance. */
  businessEntity: Maybe<BusinessEntity>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  priceBookErrors: Array<PriceBookError>;
}

/** An enumeration. */
export enum BusinessEntityStatus {
  /** Approved */
  Approved = 'APPROVED',
  /** Banned */
  Banned = 'BANNED',
  /** Deactivated */
  Deactivated = 'DEACTIVATED',
  /** Declined */
  Declined = 'DECLINED',
  /** Paused */
  Paused = 'PAUSED',
  /** Pending */
  Pending = 'PENDING',
  /** Suspended */
  Suspended = 'SUSPENDED'
}

export enum BusinessEntityStatusEnum {
  /** Approved */
  Approved = 'APPROVED',
  /** Banned */
  Banned = 'BANNED',
  /** Deactivated */
  Deactivated = 'DEACTIVATED',
  /** Declined */
  Declined = 'DECLINED',
  /** Paused */
  Paused = 'PAUSED',
  /** Pending */
  Pending = 'PENDING',
  /** Suspended */
  Suspended = 'SUSPENDED'
}

/** Updates a new business entity. */
export interface BusinessEntityUpdate {
  __typename?: 'BusinessEntityUpdate';
  businessEntity: Maybe<BusinessEntity>;
  businessEntityErrors: Array<BusinessEntityError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

export interface BusinessEntityUpdateInput {
  /** List of User ID's to add to a business entity */
  addUsers?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Agreement ID of the business entity */
  agreement?: InputMaybe<Scalars['ID']['input']>;
  /** Business Entity type, e.g. Wholesale, LLC, Sole Proprietor, etc. */
  businessEntityType?: InputMaybe<Scalars['String']['input']>;
  /** Doing business as name of business entity */
  dbaName?: InputMaybe<Scalars['String']['input']>;
  /** Default currency for the business entity */
  defaultCurrency?: InputMaybe<Scalars['String']['input']>;
  /** Name of business entity */
  legalName?: InputMaybe<Scalars['String']['input']>;
  /** User ID of business entity owner */
  owner?: InputMaybe<Scalars['ID']['input']>;
  /** List of User ID's to remove from a business entity */
  removeUsers?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Business Entity status */
  status?: InputMaybe<BusinessEntityStatusEnum>;
}

/** Export catalog. */
export interface CatalogExport {
  __typename?: 'CatalogExport';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  ok: Maybe<Scalars['Boolean']['output']>;
  /** Plugin ID */
  plugin: Maybe<Scalars['ID']['output']>;
  pluginsErrors: Array<PluginError>;
}

/** Import foreign catalog. */
export interface CatalogImport {
  __typename?: 'CatalogImport';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  ok: Maybe<Scalars['Boolean']['output']>;
  /** Plugin ID */
  plugin: Maybe<Scalars['ID']['output']>;
  pluginsErrors: Array<PluginError>;
}

/** An enumeration. */
export enum CatalogImportOperation {
  AttributeCreated = 'ATTRIBUTE_CREATED',
  AttributeUpdated = 'ATTRIBUTE_UPDATED',
  CategoryCreated = 'CATEGORY_CREATED',
  CategoryUpdated = 'CATEGORY_UPDATED',
  ProductArchived = 'PRODUCT_ARCHIVED',
  ProductCreated = 'PRODUCT_CREATED',
  ProductTypeCreated = 'PRODUCT_TYPE_CREATED',
  ProductTypeUpdated = 'PRODUCT_TYPE_UPDATED',
  ProductUpdated = 'PRODUCT_UPDATED',
  ProductUpdatedOrCreated = 'PRODUCT_UPDATED_OR_CREATED',
  WarehouseCreated = 'WAREHOUSE_CREATED',
  WarehouseUpdated = 'WAREHOUSE_UPDATED'
}

/** Represents products import process from 3rd party service or integration. */
export interface CatalogImportProcess extends Node {
  __typename?: 'CatalogImportProcess';
  createdAt: Scalars['DateTime']['output'];
  /** The user who triggered this import process. */
  createdBy: Maybe<User>;
  externalSource: Scalars['String']['output'];
  finishedAt: Maybe<Scalars['DateTime']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** Error message for failed imports. */
  internalNotes: Maybe<Scalars['String']['output']>;
  message: Maybe<Scalars['String']['output']>;
  /** List of products in this collection. */
  records: Maybe<CatalogImportProcessLogRecordCountableConnection>;
  /** The seller for whom triggered this import process. */
  seller: Maybe<Seller>;
  status: CatalogImportProcessStatus;
  /** Main Celery task ID, that performs action. Can be equal to null, if the process is not started yet. Can be used to revoke running task. */
  taskId: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
}


/** Represents products import process from 3rd party service or integration. */
export interface CatalogImportProcessRecordsArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<CatalogImportProcessLogRecordFilterInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  sortBy: InputMaybe<CatalogImportProcessLogRecordSortInput>;
}

export interface CatalogImportProcessCountableConnection {
  __typename?: 'CatalogImportProcessCountableConnection';
  edges: Array<CatalogImportProcessCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface CatalogImportProcessCountableEdge {
  __typename?: 'CatalogImportProcessCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: CatalogImportProcess;
}

export interface CatalogImportProcessFilterInput {
  createdBy?: InputMaybe<Scalars['String']['input']>;
  seller?: InputMaybe<Scalars['String']['input']>;
}

/** History log of each record processed with catalog import process. */
export interface CatalogImportProcessLogRecord extends Node {
  __typename?: 'CatalogImportProcessLogRecord';
  createdAt: Scalars['DateTime']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  objectId: Maybe<Scalars['String']['output']>;
  operation: CatalogImportProcessLogRecordOperation;
  /** The name of a models which was processed with catalog import process. */
  relatedObjectName: Maybe<Scalars['String']['output']>;
  /** Celery task ID, that created this log */
  taskId: Maybe<Scalars['String']['output']>;
}

export interface CatalogImportProcessLogRecordCountableConnection {
  __typename?: 'CatalogImportProcessLogRecordCountableConnection';
  edges: Array<CatalogImportProcessLogRecordCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface CatalogImportProcessLogRecordCountableEdge {
  __typename?: 'CatalogImportProcessLogRecordCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: CatalogImportProcessLogRecord;
}

export interface CatalogImportProcessLogRecordFilterInput {
  objectId?: InputMaybe<Scalars['String']['input']>;
  operation?: InputMaybe<CatalogImportOperation>;
  taskId?: InputMaybe<Scalars['String']['input']>;
}

/** An enumeration. */
export enum CatalogImportProcessLogRecordOperation {
  /** Attribute Created */
  AttributeCreated = 'ATTRIBUTE_CREATED',
  /** Attribute Updated */
  AttributeUpdated = 'ATTRIBUTE_UPDATED',
  /** Category Created */
  CategoryCreated = 'CATEGORY_CREATED',
  /** Category Updated */
  CategoryUpdated = 'CATEGORY_UPDATED',
  /** Product Archived */
  ProductArchived = 'PRODUCT_ARCHIVED',
  /** Product Created */
  ProductCreated = 'PRODUCT_CREATED',
  /** Product Type Created */
  ProductTypeCreated = 'PRODUCT_TYPE_CREATED',
  /** Product Type Updated */
  ProductTypeUpdated = 'PRODUCT_TYPE_UPDATED',
  /** Product Updated */
  ProductUpdated = 'PRODUCT_UPDATED',
  /** Product Updated or Created */
  ProductUpdatedOrCreated = 'PRODUCT_UPDATED_OR_CREATED',
  /** Warehouse Created */
  WarehouseCreated = 'WAREHOUSE_CREATED',
  /** Warehouse Updated */
  WarehouseUpdated = 'WAREHOUSE_UPDATED'
}

export enum CatalogImportProcessLogRecordSortField {
  /** Sort users by created at. */
  CreatedAt = 'CREATED_AT'
}

export interface CatalogImportProcessLogRecordSortInput {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort catalog_import_processes_log_record by the selected field. */
  field: CatalogImportProcessLogRecordSortField;
}

export enum CatalogImportProcessSortField {
  /** Sort users by created at. */
  CreatedAt = 'CREATED_AT',
  /** Sort users by finished at. */
  FinishedAt = 'FINISHED_AT'
}

export interface CatalogImportProcessSortInput {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort catalog_import_processes by the selected field. */
  field: CatalogImportProcessSortField;
}

/** An enumeration. */
export enum CatalogImportProcessStatus {
  /** Deleted */
  Deleted = 'DELETED',
  /** Failed */
  Failed = 'FAILED',
  /** Pending */
  Pending = 'PENDING',
  /** Processing */
  Processing = 'PROCESSING',
  /** Success */
  Success = 'SUCCESS'
}

export interface CatalogueInput {
  /** Categories related to the discount. */
  categories?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Collections related to the discount. */
  collections?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Products related to the discount. */
  products?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Variants related to the discount. */
  variants?: InputMaybe<Array<Scalars['ID']['input']>>;
}

/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export interface Category extends Node, ObjectWithMetadata {
  __typename?: 'Category';
  allowProductAssignment: Scalars['Boolean']['output'];
  /** List of ancestors of the category. */
  ancestors: Maybe<CategoryCountableConnection>;
  backgroundImage: Maybe<Image>;
  /** List of children of the category. */
  children: Maybe<CategoryCountableConnection>;
  /** List of custom fields assigned to this category. */
  customFields: Array<SelectedAttribute>;
  description: Scalars['String']['output'];
  descriptionHtml: Scalars['String']['output'];
  descriptionJson: Scalars['JSONString']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  level: Scalars['Int']['output'];
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  name: Scalars['String']['output'];
  parent: Maybe<Category>;
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /** List of products in the category and ancestor categories. This information preferable to request only for a single category details query. */
  products: Maybe<ProductCountableConnection>;
  seoDescription: Maybe<Scalars['String']['output']>;
  seoTitle: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  /** List providing entire parent-to-child lineage of categories leading to current category */
  trailingBreadcrumbs: Maybe<Array<Category>>;
}


/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export interface CategoryAncestorsArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
}


/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export interface CategoryBackgroundImageArgs {
  size: InputMaybe<Scalars['Int']['input']>;
}


/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export interface CategoryChildrenArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
}


/** Represents a single category of products. Categories allow to organize products in a tree-hierarchies which can be used for navigation in the storefront. */
export interface CategoryProductsArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<ProductFilterInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  sortBy: InputMaybe<ProductOrder>;
}

/** Deletes categories. */
export interface CategoryBulkDelete {
  __typename?: 'CategoryBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
}

export interface CategoryCountableConnection {
  __typename?: 'CategoryCountableConnection';
  edges: Array<CategoryCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface CategoryCountableEdge {
  __typename?: 'CategoryCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Category;
}

/** Creates a new category. */
export interface CategoryCreate {
  __typename?: 'CategoryCreate';
  category: Maybe<Category>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
}

/** Deletes a category. */
export interface CategoryDelete {
  __typename?: 'CategoryDelete';
  category: Maybe<Category>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
}

export interface CategoryFilterInput {
  customFields?: InputMaybe<Array<AttributeInput>>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
}

export interface CategoryInput {
  /** Is it allowed to assign this category to a product or not. */
  allowProductAssignment?: InputMaybe<Scalars['Boolean']['input']>;
  /** Background image file. */
  backgroundImage?: InputMaybe<Scalars['Upload']['input']>;
  /** Alt text for an image. */
  backgroundImageAlt?: InputMaybe<Scalars['String']['input']>;
  /** List of custom fields. */
  customFields?: InputMaybe<Array<AttributeValueInput>>;
  /** Category description (plaintext, deprecated as input). */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Category description (HTML). */
  descriptionHtml?: InputMaybe<Scalars['String']['input']>;
  /** Category description (JSON, deprecated as input). */
  descriptionJson?: InputMaybe<Scalars['JSONString']['input']>;
  /** Category name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Search engine optimization fields. */
  seo?: InputMaybe<SeoInput>;
  /** Category slug. */
  slug?: InputMaybe<Scalars['String']['input']>;
}

export enum CategorySortField {
  /** Sort categories by name. */
  Name = 'NAME',
  /** Sort categories by product count. */
  ProductCount = 'PRODUCT_COUNT',
  /** Sort categories by subcategory count. */
  SubcategoryCount = 'SUBCATEGORY_COUNT'
}

export interface CategorySortingInput {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort categories by the selected field. */
  field: CategorySortField;
}

/** Updates a category. */
export interface CategoryUpdate {
  __typename?: 'CategoryUpdate';
  category: Maybe<Category>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
}

/** Represents unique channel in Nautical. */
export interface Channel extends Node {
  __typename?: 'Channel';
  affiliateCodes: AffiliateCodesCountableConnection;
  channel: Scalars['String']['output'];
  createdAt: Maybe<Scalars['DateTime']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  nauticalOrders: NauticalOrderCountableConnection;
  orders: OrderCountableConnection;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
}


/** Represents unique channel in Nautical. */
export interface ChannelAffiliateCodesArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
}


/** Represents unique channel in Nautical. */
export interface ChannelNauticalOrdersArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
}


/** Represents unique channel in Nautical. */
export interface ChannelOrdersArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
}

export interface ChannelCountableConnection {
  __typename?: 'ChannelCountableConnection';
  edges: Array<ChannelCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface ChannelCountableEdge {
  __typename?: 'ChannelCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Channel;
}

/** Creates a new channel */
export interface ChannelCreate {
  __typename?: 'ChannelCreate';
  channel: Maybe<Channel>;
  channelErrors: Array<ChannelError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

export interface ChannelError {
  __typename?: 'ChannelError';
  /** The error code. */
  code: ChannelErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message: Scalars['String']['output'];
}

/** An enumeration. */
export enum ChannelErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  JwtDecodeError = 'JWT_DECODE_ERROR',
  JwtInvalidCsrfToken = 'JWT_INVALID_CSRF_TOKEN',
  JwtInvalidToken = 'JWT_INVALID_TOKEN',
  JwtMissingToken = 'JWT_MISSING_TOKEN',
  JwtSignatureExpired = 'JWT_SIGNATURE_EXPIRED',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export interface ChannelFilterInput {
  created?: InputMaybe<DateRangeInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
}

export interface ChannelInput {
  /** Name of the channel. */
  channel?: InputMaybe<Scalars['String']['input']>;
}

export enum ChannelSortField {
  /** Sort channels by channel. */
  Channel = 'CHANNEL',
  /** Sort channels by created at. */
  CreatedAt = 'CREATED_AT'
}

export interface ChannelSortingInput {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort channels by the selected field. */
  field: ChannelSortField;
}

/** Updates a channel. */
export interface ChannelUpdate {
  __typename?: 'ChannelUpdate';
  channel: Maybe<Channel>;
  channelErrors: Array<ChannelError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

/** Checkout object. */
export interface Checkout extends Node, ObjectWithMetadata {
  __typename?: 'Checkout';
  /** Applicable volume discounts */
  applicableVolumeDiscounts: Maybe<Money>;
  applicableVolumeDiscountsBySeller: Maybe<Array<SellerVolumeDiscount>>;
  /** List of available payment gateways. */
  availablePaymentGateways: Array<PaymentGateway>;
  /** Available shipping methods for each seller in this checkout. */
  availableShippingMethodsBySeller: Maybe<Array<MultiSellerShippingMethod>>;
  billingAddress: Maybe<Address>;
  created: Scalars['DateTime']['output'];
  /** Transaction currency. */
  currency: Scalars['String']['output'];
  discount: Maybe<Money>;
  discountName: Maybe<Scalars['String']['output']>;
  /** Discount Type if voucher is applied */
  discountType: Maybe<VoucherTypeEnum>;
  /** Email of a customer. */
  email: Scalars['String']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** Returns True, if checkout requires shipping. */
  isShippingRequired: Scalars['Boolean']['output'];
  lastChange: Scalars['DateTime']['output'];
  /** A list of checkout lines, each containing information about an item in the checkout. */
  lines: Maybe<Array<CheckoutLine>>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  note: Scalars['String']['output'];
  poNumbers: Maybe<Array<Scalars['String']['output']>>;
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  quantity: Scalars['Int']['output'];
  /**
   * Seller shipping methods in old json format
   * @deprecated Use the shippingMethods field. This field will be removed after 2024-08-01.
   */
  sellerShippingMethods: Maybe<Scalars['JSONString']['output']>;
  shippingAddress: Maybe<Address>;
  /**
   * Legacy checkout shipping method
   * @deprecated This is unused and will be removed after 2024-02-01.
   */
  shippingMethod: Maybe<ShippingMethod>;
  /** A list of structured checkout shipping methods. */
  shippingMethods: Array<CheckoutSellerShipping>;
  /** The price of the shipping, with all the taxes included. */
  shippingPrice: TaxedMoney;
  /** The price of the checkout before shipping, with taxes included. */
  subtotalPrice: TaxedMoney;
  /** The checkout's token. */
  token: Scalars['NauticalUUID']['output'];
  /** The sum of the the checkout line prices, with all the taxes,shipping costs, and discounts included. */
  totalPrice: TaxedMoney;
  translatedDiscountName: Maybe<Scalars['String']['output']>;
  user: Maybe<User>;
  voucherCode: Maybe<Scalars['String']['output']>;
}

/** Adds purchase order number to a checkout. */
export interface CheckoutAddPoNumbers {
  __typename?: 'CheckoutAddPONumbers';
  /** The checkout with the added purchase order numbers. */
  checkout: Maybe<Checkout>;
  checkoutErrors: Array<CheckoutError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

/** Adds a gift card or a voucher to a checkout. */
export interface CheckoutAddPromoCode {
  __typename?: 'CheckoutAddPromoCode';
  /** The checkout with the added gift card or voucher. */
  checkout: Maybe<Checkout>;
  checkoutErrors: Array<CheckoutError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

/** Update billing address in the existing checkout. */
export interface CheckoutBillingAddressUpdate {
  __typename?: 'CheckoutBillingAddressUpdate';
  /** An updated checkout. */
  checkout: Maybe<Checkout>;
  checkoutErrors: Array<CheckoutError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

/** Completes the checkout. As a result a new order is created and a payment charge is made. This action requires a successful payment before it can be performed. In case additional confirmation step as 3D secure is required confirmationNeeded flag will be set to True and no order created until payment is confirmed with second call of this mutation. */
export interface CheckoutComplete {
  __typename?: 'CheckoutComplete';
  checkoutErrors: Array<CheckoutError>;
  /** Confirmation data used to process additional authorization steps. */
  confirmationData: Maybe<Scalars['JSONString']['output']>;
  /** Set to true if payment needs to be confirmed before checkout is complete. */
  confirmationNeeded: Scalars['Boolean']['output'];
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Placed order. */
  order: Maybe<NauticalOrder>;
}

/** Converts checkout to nautical quote order with the same id as checkout has when checkout is ready to be converted into quote order. This mutation should delete current checkout in case when order is created. */
export interface CheckoutConvertToNauticalQuoteOrder {
  __typename?: 'CheckoutConvertToNauticalQuoteOrder';
  checkoutErrors: Array<CheckoutError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Created Nautical Quote Order. */
  order: Maybe<NauticalOrder>;
}

export interface CheckoutCountableConnection {
  __typename?: 'CheckoutCountableConnection';
  edges: Array<CheckoutCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface CheckoutCountableEdge {
  __typename?: 'CheckoutCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Checkout;
}

/** Create a new checkout. */
export interface CheckoutCreate {
  __typename?: 'CheckoutCreate';
  checkout: Maybe<Checkout>;
  checkoutErrors: Array<CheckoutError>;
  /** Whether the checkout was created or the current active one was returned. Refer to checkoutLinesAdd and checkoutLinesUpdate to merge a cart with an active checkout. */
  created: Maybe<Scalars['Boolean']['output']>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

export interface CheckoutCreateInput {
  /** Billing address of the customer. */
  billingAddress?: InputMaybe<AddressInput>;
  /** Currency for this checkout. */
  currency?: InputMaybe<MarketplaceConfigurationCurrencyEnum>;
  /** The customer's email address. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** A list of checkout lines, each containing information about an item in the checkout. */
  lines: Array<CheckoutLineInput>;
  /** The mailing address to where the checkout will be shipped. Note: the address will be ignored if the checkout doesn't contain shippable items. */
  shippingAddress?: InputMaybe<AddressInput>;
}

/** Sets the customer as the owner of the checkout. */
export interface CheckoutCustomerAttach {
  __typename?: 'CheckoutCustomerAttach';
  /** An updated checkout. */
  checkout: Maybe<Checkout>;
  checkoutErrors: Array<CheckoutError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

/** Removes the user assigned as the owner of the checkout. */
export interface CheckoutCustomerDetach {
  __typename?: 'CheckoutCustomerDetach';
  /** An updated checkout. */
  checkout: Maybe<Checkout>;
  checkoutErrors: Array<CheckoutError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

/** Deletes a checkout. */
export interface CheckoutDelete {
  __typename?: 'CheckoutDelete';
  checkout: Maybe<Checkout>;
  checkoutErrors: Array<CheckoutError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

/** Updates email address in the existing checkout object. */
export interface CheckoutEmailUpdate {
  __typename?: 'CheckoutEmailUpdate';
  /** An updated checkout. */
  checkout: Maybe<Checkout>;
  checkoutErrors: Array<CheckoutError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

export interface CheckoutError {
  __typename?: 'CheckoutError';
  /** The error code. */
  code: CheckoutErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message: Scalars['String']['output'];
  /** List of variant IDs which causes the error. */
  variants: Maybe<Array<Scalars['ID']['output']>>;
}

/** An enumeration. */
export enum CheckoutErrorCode {
  BillingAddressNotSet = 'BILLING_ADDRESS_NOT_SET',
  CheckoutNotFullyPaid = 'CHECKOUT_NOT_FULLY_PAID',
  DoesNotExist = 'DOES_NOT_EXIST',
  GraphqlError = 'GRAPHQL_ERROR',
  InsufficientStock = 'INSUFFICIENT_STOCK',
  Invalid = 'INVALID',
  InvalidPhone = 'INVALID_PHONE',
  InvalidShippingMethod = 'INVALID_SHIPPING_METHOD',
  LoginRequiredForCheckout = 'LOGIN_REQUIRED_FOR_CHECKOUT',
  NotFound = 'NOT_FOUND',
  OrderPriceLessThanLimit = 'ORDER_PRICE_LESS_THAN_LIMIT',
  PaymentError = 'PAYMENT_ERROR',
  PriceOverrideNotAllowed = 'PRICE_OVERRIDE_NOT_ALLOWED',
  ProductNotPublished = 'PRODUCT_NOT_PUBLISHED',
  ProductUnavailableForPurchase = 'PRODUCT_UNAVAILABLE_FOR_PURCHASE',
  QuantityGreaterThanLimit = 'QUANTITY_GREATER_THAN_LIMIT',
  Required = 'REQUIRED',
  ShippingAddressNotSet = 'SHIPPING_ADDRESS_NOT_SET',
  ShippingMethodNotApplicable = 'SHIPPING_METHOD_NOT_APPLICABLE',
  ShippingMethodNotSet = 'SHIPPING_METHOD_NOT_SET',
  ShippingNotRequired = 'SHIPPING_NOT_REQUIRED',
  TaxError = 'TAX_ERROR',
  Unique = 'UNIQUE',
  VoucherNotApplicable = 'VOUCHER_NOT_APPLICABLE',
  ZeroQuantity = 'ZERO_QUANTITY'
}

/** Represents checkout event. */
export interface CheckoutEvent extends Node {
  __typename?: 'CheckoutEvent';
  checkoutId: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  type: CheckoutEventType;
}

export interface CheckoutEventCountableConnection {
  __typename?: 'CheckoutEventCountableConnection';
  edges: Array<CheckoutEventCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface CheckoutEventCountableEdge {
  __typename?: 'CheckoutEventCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: CheckoutEvent;
}

export interface CheckoutEventFilterInput {
  createdAt?: InputMaybe<DateTimeRangeInput>;
  type?: InputMaybe<Array<CheckoutEventType>>;
}

export enum CheckoutEventSortField {
  /** Sort checkout events by created at. */
  CreatedAt = 'CREATED_AT',
  /** Sort checkout events by type. */
  Type = 'TYPE'
}

export interface CheckoutEventSortInput {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort checkout_events by the selected field. */
  field: CheckoutEventSortField;
}

/** Create a checkout event. */
export interface CheckoutEventTriggered {
  __typename?: 'CheckoutEventTriggered';
  /** The created checkout event. */
  checkoutEvent: Maybe<CheckoutEvent>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  pluginsErrors: Array<PluginError>;
}

/** An enumeration. */
export enum CheckoutEventType {
  /** Checkout started */
  CheckoutStarted = 'CHECKOUT_STARTED',
  /** Payment information entered */
  PaymentInformationEntered = 'PAYMENT_INFORMATION_ENTERED',
  /** Purchase */
  Purchase = 'PURCHASE',
  /** Shipping information entered */
  ShippingInformationEntered = 'SHIPPING_INFORMATION_ENTERED'
}

/** Represents an item in the checkout. */
export interface CheckoutLine extends Node, ObjectWithMetadata {
  __typename?: 'CheckoutLine';
  /** The unit price of line which is the discounted price after pricebooks and sale application */
  discountedUnitPrice: TaxedMoney;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  isLinePriceOverridden: Scalars['Boolean']['output'];
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  note: Maybe<Scalars['String']['output']>;
  /** Price of the single item in the checkout line before sales. */
  originalUnitPrice: TaxedMoney;
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  quantity: Scalars['Int']['output'];
  /** Indicates whether the item need to be delivered. */
  requiresShipping: Maybe<Scalars['Boolean']['output']>;
  sale: Maybe<Sale>;
  /** User info on the seller's underlying owner. */
  seller: Maybe<SellerType>;
  /** The sum of the checkout line price, taxes and discounts. */
  totalPrice: TaxedMoney;
  unitPriceOverriddenNote: Maybe<Scalars['String']['output']>;
  variant: ProductVariant;
}

/** Add a note to a checkout line. */
export interface CheckoutLineAddNote {
  __typename?: 'CheckoutLineAddNote';
  checkoutErrors: Array<CheckoutError>;
  checkoutLine: Maybe<CheckoutLine>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

export interface CheckoutLineCountableConnection {
  __typename?: 'CheckoutLineCountableConnection';
  edges: Array<CheckoutLineCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface CheckoutLineCountableEdge {
  __typename?: 'CheckoutLineCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: CheckoutLine;
}

/** Deletes a CheckoutLine. */
export interface CheckoutLineDelete {
  __typename?: 'CheckoutLineDelete';
  /** An updated checkout. */
  checkout: Maybe<Checkout>;
  checkoutErrors: Array<CheckoutError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

export interface CheckoutLineInput {
  /** The number of items purchased. */
  quantity: Scalars['Int']['input'];
  /** ID of the product variant. */
  variantId: Scalars['ID']['input'];
}

/** Adds a checkout line to the existing checkout. */
export interface CheckoutLinesAdd {
  __typename?: 'CheckoutLinesAdd';
  /** An updated checkout. */
  checkout: Maybe<Checkout>;
  checkoutErrors: Array<CheckoutError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

/** Updates checkout line in the existing checkout. */
export interface CheckoutLinesUpdate {
  __typename?: 'CheckoutLinesUpdate';
  /** An updated checkout. */
  checkout: Maybe<Checkout>;
  checkoutErrors: Array<CheckoutError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

/** Updates the checkout note on the provided checkout. */
export interface CheckoutNoteUpdate {
  __typename?: 'CheckoutNoteUpdate';
  /** An updated checkout. */
  checkout: Maybe<Checkout>;
  checkoutErrors: Array<CheckoutError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

/** Create a new payment for given checkout. */
export interface CheckoutPaymentCreate {
  __typename?: 'CheckoutPaymentCreate';
  /** Related checkout object. */
  checkout: Maybe<Checkout>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** A newly created payment. */
  payment: Maybe<Payment>;
  paymentErrors: Array<PaymentError>;
}

/** Remove a purchase order from a checkout. */
export interface CheckoutRemovePoNumbers {
  __typename?: 'CheckoutRemovePONumbers';
  /** The checkout with the removed purchase order number. */
  checkout: Maybe<Checkout>;
  checkoutErrors: Array<CheckoutError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

/** Remove a gift card or a voucher from a checkout. */
export interface CheckoutRemovePromoCode {
  __typename?: 'CheckoutRemovePromoCode';
  /** The checkout with the removed gift card or voucher. */
  checkout: Maybe<Checkout>;
  checkoutErrors: Array<CheckoutError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

/** Represents an shipping method for a particular seller on a checkout. */
export interface CheckoutSellerShipping extends Node {
  __typename?: 'CheckoutSellerShipping';
  /** The ID of the object */
  id: Scalars['ID']['output'];
  isPriceOverridden: Scalars['Boolean']['output'];
  /** Overridden by a staff user amount stored in the checkout currency (if is_price_overridden is true). */
  priceOverrideAmount: Scalars['Decimal']['output'];
  seller: Seller;
  shippingMethod: ShippingMethod;
}

/** Bulk clears the seller shipping methods of the checkout. */
export interface CheckoutSellerShippingMethodsBulkUpdate {
  __typename?: 'CheckoutSellerShippingMethodsBulkUpdate';
  /** An updated checkout. */
  checkout: Maybe<Checkout>;
  checkoutErrors: Array<CheckoutError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

/** Clears the seller shipping methods of the checkout. */
export interface CheckoutSellerShippingMethodsClear {
  __typename?: 'CheckoutSellerShippingMethodsClear';
  /** An updated checkout. */
  checkout: Maybe<Checkout>;
  checkoutErrors: Array<CheckoutError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

/** Updates the seller shipping methods of the checkout. */
export interface CheckoutSellerShippingMethodsUpdate {
  __typename?: 'CheckoutSellerShippingMethodsUpdate';
  /** An updated checkout. */
  checkout: Maybe<Checkout>;
  checkoutErrors: Array<CheckoutError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

/** Update currency in the existing checkout object. */
export interface CheckoutSetTransactionCurrency {
  __typename?: 'CheckoutSetTransactionCurrency';
  /** An updated checkout. */
  checkout: Maybe<Checkout>;
  checkoutErrors: Array<CheckoutError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

/** Update shipping address in the existing checkout. */
export interface CheckoutShippingAddressUpdate {
  __typename?: 'CheckoutShippingAddressUpdate';
  /** An updated checkout. */
  checkout: Maybe<Checkout>;
  checkoutErrors: Array<CheckoutError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

/** Represents a checkout page's theme options. */
export interface CheckoutTheme extends Node {
  __typename?: 'CheckoutTheme';
  /** URL of the confirmation page. */
  confirmationUrl: Scalars['String']['output'];
  /** URL of the favicon. */
  faviconUrl: Maybe<Scalars['String']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  logo: Maybe<Image>;
  /** Primary color in hex. */
  primaryColor: Maybe<Scalars['String']['output']>;
  /** Secondary color in hex. */
  secondaryColor: Maybe<Scalars['String']['output']>;
}

/** Create a new checkout theme. */
export interface CheckoutThemeCreate {
  __typename?: 'CheckoutThemeCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Updated shop. */
  shop: Maybe<Shop>;
  shopErrors: Array<ShopError>;
}

export interface CheckoutThemeCreateInput {
  /** URL of the confirmation page. */
  confirmationUrl: Scalars['String']['input'];
  /** URL of the favicon. */
  faviconUrl?: InputMaybe<Scalars['String']['input']>;
  /** Logo file. */
  logo?: InputMaybe<Scalars['Upload']['input']>;
  /** Primary color in hex. */
  primaryColor?: InputMaybe<Scalars['String']['input']>;
  /** Secondary color in hex. */
  secondaryColor?: InputMaybe<Scalars['String']['input']>;
}

export interface CheckoutThemeInput {
  /** URL of the confirmation page. */
  confirmationUrl?: InputMaybe<Scalars['String']['input']>;
  /** URL of the favicon. */
  faviconUrl?: InputMaybe<Scalars['String']['input']>;
  /** Logo file. */
  logo?: InputMaybe<Scalars['Upload']['input']>;
  /** Primary color in hex. */
  primaryColor?: InputMaybe<Scalars['String']['input']>;
  /** Secondary color in hex. */
  secondaryColor?: InputMaybe<Scalars['String']['input']>;
}

/** Update a checkout theme. */
export interface CheckoutThemeUpdate {
  __typename?: 'CheckoutThemeUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Updated shop. */
  shop: Maybe<Shop>;
  shopErrors: Array<ShopError>;
}

export interface ChoiceValue {
  __typename?: 'ChoiceValue';
  raw: Maybe<Scalars['String']['output']>;
  verbose: Maybe<Scalars['String']['output']>;
}

/** Represents a collection of products. */
export interface Collection extends Node, ObjectWithMetadata {
  __typename?: 'Collection';
  backgroundImage: Maybe<Image>;
  /** List of custom fields assigned to this collection. */
  customFields: Array<SelectedAttribute>;
  description: Scalars['String']['output'];
  descriptionHtml: Scalars['String']['output'];
  descriptionJson: Scalars['JSONString']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** Whether the collection is published. */
  isPublished: Scalars['Boolean']['output'];
  isVisible: Scalars['Boolean']['output'];
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  name: Scalars['String']['output'];
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /** List of products in this collection. */
  products: Maybe<ProductCountableConnection>;
  publicationDate: Maybe<Scalars['Date']['output']>;
  seoDescription: Maybe<Scalars['String']['output']>;
  seoTitle: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  /** Collection type. */
  type: Maybe<CollectionTypeEnum>;
  /** List of variants in this collection. */
  variants: Maybe<ProductVariantCountableConnection>;
}


/** Represents a collection of products. */
export interface CollectionBackgroundImageArgs {
  size: InputMaybe<Scalars['Int']['input']>;
}


/** Represents a collection of products. */
export interface CollectionProductsArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<ProductFilterInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  sortBy: InputMaybe<ProductOrder>;
}


/** Represents a collection of products. */
export interface CollectionVariantsArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<ProductVariantFilterInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  sortBy: InputMaybe<VariantSortingInput>;
}

/** Adds products to a collection. */
export interface CollectionAddProducts {
  __typename?: 'CollectionAddProducts';
  /** Collection to which products will be added. */
  collection: Maybe<Collection>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
}

/** Adds variants to a collection. */
export interface CollectionAddVariants {
  __typename?: 'CollectionAddVariants';
  /** Collection to which variants will be added. */
  collection: Maybe<Collection>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
}

/** Deletes collections. */
export interface CollectionBulkDelete {
  __typename?: 'CollectionBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
}

/** Publish collections. */
export interface CollectionBulkPublish {
  __typename?: 'CollectionBulkPublish';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
}

export interface CollectionCountableConnection {
  __typename?: 'CollectionCountableConnection';
  edges: Array<CollectionCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface CollectionCountableEdge {
  __typename?: 'CollectionCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Collection;
}

/** Creates a new collection. */
export interface CollectionCreate {
  __typename?: 'CollectionCreate';
  collection: Maybe<Collection>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
}

export interface CollectionCreateInput {
  /** Background image file. */
  backgroundImage?: InputMaybe<Scalars['Upload']['input']>;
  /** Alt text for an image. */
  backgroundImageAlt?: InputMaybe<Scalars['String']['input']>;
  /** List of custom fields. */
  customFields?: InputMaybe<Array<AttributeValueInput>>;
  /** Description of the collection (plaintext, deprecated as input). */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Description of the collection (HTML). */
  descriptionHtml?: InputMaybe<Scalars['String']['input']>;
  /** Description of the collection (JSON, deprecated as input). */
  descriptionJson?: InputMaybe<Scalars['JSONString']['input']>;
  /** Informs whether a collection is published. */
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  /** Informs whether a collection is visible. */
  isVisible?: InputMaybe<Scalars['Boolean']['input']>;
  /** Name of the collection. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** List of products to be added to the collection. */
  products?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Publication date. ISO 8601 standard. */
  publicationDate?: InputMaybe<Scalars['Date']['input']>;
  /** Search engine optimization fields. */
  seo?: InputMaybe<SeoInput>;
  /** Slug of the collection. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** Collection type to assign to the collection. */
  type?: InputMaybe<CollectionTypeEnum>;
}

/** Deletes a collection. */
export interface CollectionDelete {
  __typename?: 'CollectionDelete';
  collection: Maybe<Collection>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
}

export interface CollectionFilterInput {
  customFields?: InputMaybe<Array<AttributeInput>>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  isVisible?: InputMaybe<CollectionVisible>;
  metadata?: InputMaybe<MetadataFilterInput>;
  privateMetadata?: InputMaybe<MetadataFilterInput>;
  published?: InputMaybe<CollectionPublished>;
  search?: InputMaybe<Scalars['String']['input']>;
}

export interface CollectionInput {
  /** Background image file. */
  backgroundImage?: InputMaybe<Scalars['Upload']['input']>;
  /** Alt text for an image. */
  backgroundImageAlt?: InputMaybe<Scalars['String']['input']>;
  /** List of custom fields. */
  customFields?: InputMaybe<Array<AttributeValueInput>>;
  /** Description of the collection (plaintext, deprecated as input). */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Description of the collection (HTML). */
  descriptionHtml?: InputMaybe<Scalars['String']['input']>;
  /** Description of the collection (JSON, deprecated as input). */
  descriptionJson?: InputMaybe<Scalars['JSONString']['input']>;
  /** Informs whether a collection is published. */
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  /** Informs whether a collection is visible. */
  isVisible?: InputMaybe<Scalars['Boolean']['input']>;
  /** Name of the collection. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Publication date. ISO 8601 standard. */
  publicationDate?: InputMaybe<Scalars['Date']['input']>;
  /** Search engine optimization fields. */
  seo?: InputMaybe<SeoInput>;
  /** Slug of the collection. */
  slug?: InputMaybe<Scalars['String']['input']>;
}

export enum CollectionPublished {
  Hidden = 'HIDDEN',
  Published = 'PUBLISHED'
}

/** Remove products from a collection. */
export interface CollectionRemoveProducts {
  __typename?: 'CollectionRemoveProducts';
  /** Collection from which products will be removed. */
  collection: Maybe<Collection>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
}

/** Remove variants from a collection. */
export interface CollectionRemoveVariants {
  __typename?: 'CollectionRemoveVariants';
  /** Collection from which variants will be removed. */
  collection: Maybe<Collection>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
}

/** Reorder the products of a collection. */
export interface CollectionReorderProducts {
  __typename?: 'CollectionReorderProducts';
  /** Collection from which products are reordered. */
  collection: Maybe<Collection>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
}

export enum CollectionSortField {
  /** Sort collections by availability. */
  Availability = 'AVAILABILITY',
  /** Sort collections by name. */
  Name = 'NAME',
  /** Sort collections by product count. */
  ProductCount = 'PRODUCT_COUNT',
  /** Sort collections by publication date. */
  PublicationDate = 'PUBLICATION_DATE'
}

export interface CollectionSortingInput {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort collections by the selected field. */
  field: CollectionSortField;
}

export enum CollectionTypeEnum {
  /** Product */
  Product = 'PRODUCT',
  /** Variant */
  Variant = 'VARIANT'
}

/** Updates a collection. */
export interface CollectionUpdate {
  __typename?: 'CollectionUpdate';
  collection: Maybe<Collection>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
}

export enum CollectionVisible {
  Hidden = 'HIDDEN',
  Visible = 'VISIBLE'
}

export interface ColumnObjectType {
  __typename?: 'ColumnObjectType';
  /** Display label for the column. */
  display: Scalars['String']['output'];
  /**
   * Type which describes recommended format (how displaying value to users) for returned values for the column.
   * p.s.
   * Returned format (in our API) of the values itself described in a type of the 'report' field.
   */
  fieldType: Scalars['String']['output'];
  /** The name of the column field in the query input. */
  name: Scalars['String']['output'];
  /** Recommended ordering number for this column. */
  order: Scalars['Int']['output'];
}

export enum CommissionTypeEnum {
  /** Absolute Price Commission */
  Dropshipping = 'DROPSHIPPING',
  /** Gross Price Commission */
  Marketplace = 'MARKETPLACE',
  /** Markup Commission */
  Wholesale = 'WHOLESALE'
}

/** Stores information about a single configuration field. */
export interface ConfigurationItem {
  __typename?: 'ConfigurationItem';
  /** Help text for the field. */
  helpText: Maybe<Scalars['String']['output']>;
  /** Label for the field. */
  label: Maybe<Scalars['String']['output']>;
  /** Name of the field. */
  name: Scalars['String']['output'];
  /** Options for the field. */
  options: Maybe<Array<Scalars['String']['output']>>;
  /** Type of the field. */
  type: Maybe<ConfigurationTypeFieldEnum>;
  /** Current value of the field. */
  value: Maybe<Scalars['String']['output']>;
}

export interface ConfigurationItemInput {
  /** Name of the field to update. */
  name: Scalars['String']['input'];
  /** Value of the given field to update. */
  value?: InputMaybe<Scalars['GenericScalar']['input']>;
}

export enum ConfigurationTypeFieldEnum {
  /** Field is a Boolean */
  Boolean = 'BOOLEAN',
  /** Field is a Multiline */
  Multiline = 'MULTILINE',
  /** Field is a read only */
  Output = 'OUTPUT',
  /** Field is a Password */
  Password = 'PASSWORD',
  /** Field is a Secret */
  Secret = 'SECRET',
  /** Field is a Secret multiline */
  Secretmultiline = 'SECRETMULTILINE',
  /** Field is a single select */
  Singleselect = 'SINGLESELECT',
  /** Field is a String */
  String = 'STRING'
}

/** Content object. */
export interface Content extends Node {
  __typename?: 'Content';
  createdAt: Scalars['DateTime']['output'];
  /** Data of the latest published content version to render the view. */
  data: Scalars['JSONString']['output'];
  /** Data of the latest unpublished content version to render the editor view. */
  draftData: Scalars['JSONString']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  isPage: Scalars['Boolean']['output'];
  isPublished: Scalars['Boolean']['output'];
  lockExpiry: Maybe<Scalars['DateTime']['output']>;
  lockedBy: Maybe<User>;
  publicationDate: Maybe<Scalars['Date']['output']>;
  slug: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
}

export interface ContentCountableConnection {
  __typename?: 'ContentCountableConnection';
  edges: Array<ContentCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface ContentCountableEdge {
  __typename?: 'ContentCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Content;
}

/** Creates a new content object. */
export interface ContentCreate {
  __typename?: 'ContentCreate';
  /** Created content instance. */
  content: Maybe<Content>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  shopErrors: Array<ShopError>;
}

export interface ContentCreateInput {
  /** Flag to determine if the content is a page or a part of a page. A footer would have this false, but the static content pages would have it true */
  isPage: Scalars['Boolean']['input'];
  /** Slug for the content object. */
  slug: Scalars['String']['input'];
}

/** Deletes a voucher. */
export interface ContentDelete {
  __typename?: 'ContentDelete';
  content: Maybe<Content>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  shopErrors: Array<ShopError>;
}

/** Discards the latest changes of a content object. */
export interface ContentDiscard {
  __typename?: 'ContentDiscard';
  content: Maybe<Content>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  shopErrors: Array<ShopError>;
}

export interface ContentFilterInput {
  search?: InputMaybe<Scalars['String']['input']>;
}

/** Publishes a content object. */
export interface ContentPublish {
  __typename?: 'ContentPublish';
  content: Maybe<Content>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  shopErrors: Array<ShopError>;
}

export interface ContentPublishInput {
  /** Editor data */
  data: Scalars['JSONString']['input'];
  /** The date when this version should be published. */
  publicationDate?: InputMaybe<Scalars['Date']['input']>;
}

/** Auto saves a content object. */
export interface ContentSave {
  __typename?: 'ContentSave';
  content: Maybe<Content>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  shopErrors: Array<ShopError>;
}

export interface ContentSaveInput {
  /** Editor data */
  data: Scalars['JSONString']['input'];
}

export enum ContentSortField {
  CreatedAt = 'CREATED_AT',
  IsPublished = 'IS_PUBLISHED',
  LockedBy = 'LOCKED_BY',
  LockExpiry = 'LOCK_EXPIRY',
  Slug = 'SLUG',
  UpdatedAt = 'UPDATED_AT'
}

export interface ContentSortingInput {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort content by the selected field. */
  field: ContentSortField;
}

/** Latitude and longitude coordinates as returned from the geocode endpoint. */
export interface Coordinates {
  __typename?: 'Coordinates';
  /** label given to the response specified as part of the search string */
  label: Maybe<Scalars['String']['output']>;
  latitude: Maybe<Scalars['Decimal']['output']>;
  longitude: Maybe<Scalars['Decimal']['output']>;
}

/** Create core data. */
export interface CoreDataCreate {
  __typename?: 'CoreDataCreate';
  coredata: Maybe<CoreDataType>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  ok: Maybe<Scalars['Boolean']['output']>;
}

export interface CoreDataInput {
  jsonContent?: InputMaybe<Scalars['JSONString']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface CoreDataType {
  __typename?: 'CoreDataType';
  jsonContent: Scalars['JSONString']['output'];
  name: Scalars['String']['output'];
}

/** Update existing core data instance, return ok = True and coredata = None if no matching core data instance found. */
export interface CoreDataUpdate {
  __typename?: 'CoreDataUpdate';
  coredata: Maybe<CoreDataType>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  jsonContent: Maybe<Scalars['JSONString']['output']>;
  name: Maybe<Scalars['String']['output']>;
  ok: Maybe<Scalars['Boolean']['output']>;
}

export interface CountryArea {
  __typename?: 'CountryArea';
  /** Country area code */
  code: Scalars['String']['output'];
  /** Country area name */
  name: Scalars['String']['output'];
}

/** An enumeration. */
export enum CountryCode {
  Ad = 'AD',
  Ae = 'AE',
  Af = 'AF',
  Ag = 'AG',
  Ai = 'AI',
  Al = 'AL',
  Am = 'AM',
  Ao = 'AO',
  Aq = 'AQ',
  Ar = 'AR',
  As = 'AS',
  At = 'AT',
  Au = 'AU',
  Aw = 'AW',
  Ax = 'AX',
  Az = 'AZ',
  Ba = 'BA',
  Bb = 'BB',
  Bd = 'BD',
  Be = 'BE',
  Bf = 'BF',
  Bg = 'BG',
  Bh = 'BH',
  Bi = 'BI',
  Bj = 'BJ',
  Bl = 'BL',
  Bm = 'BM',
  Bn = 'BN',
  Bo = 'BO',
  Bq = 'BQ',
  Br = 'BR',
  Bs = 'BS',
  Bt = 'BT',
  Bv = 'BV',
  Bw = 'BW',
  By = 'BY',
  Bz = 'BZ',
  Ca = 'CA',
  Cc = 'CC',
  Cd = 'CD',
  Cf = 'CF',
  Cg = 'CG',
  Ch = 'CH',
  Ci = 'CI',
  Ck = 'CK',
  Cl = 'CL',
  Cm = 'CM',
  Cn = 'CN',
  Co = 'CO',
  Cr = 'CR',
  Cu = 'CU',
  Cv = 'CV',
  Cw = 'CW',
  Cx = 'CX',
  Cy = 'CY',
  Cz = 'CZ',
  De = 'DE',
  Dj = 'DJ',
  Dk = 'DK',
  Dm = 'DM',
  Do = 'DO',
  Dz = 'DZ',
  Ec = 'EC',
  Ee = 'EE',
  Eg = 'EG',
  Eh = 'EH',
  Er = 'ER',
  Es = 'ES',
  Et = 'ET',
  Eu = 'EU',
  Fi = 'FI',
  Fj = 'FJ',
  Fk = 'FK',
  Fm = 'FM',
  Fo = 'FO',
  Fr = 'FR',
  Ga = 'GA',
  Gb = 'GB',
  Gd = 'GD',
  Ge = 'GE',
  Gf = 'GF',
  Gg = 'GG',
  Gh = 'GH',
  Gi = 'GI',
  Gl = 'GL',
  Gm = 'GM',
  Gn = 'GN',
  Gp = 'GP',
  Gq = 'GQ',
  Gr = 'GR',
  Gs = 'GS',
  Gt = 'GT',
  Gu = 'GU',
  Gw = 'GW',
  Gy = 'GY',
  Hk = 'HK',
  Hm = 'HM',
  Hn = 'HN',
  Hr = 'HR',
  Ht = 'HT',
  Hu = 'HU',
  Id = 'ID',
  Ie = 'IE',
  Il = 'IL',
  Im = 'IM',
  In = 'IN',
  Io = 'IO',
  Iq = 'IQ',
  Ir = 'IR',
  Is = 'IS',
  It = 'IT',
  Je = 'JE',
  Jm = 'JM',
  Jo = 'JO',
  Jp = 'JP',
  Ke = 'KE',
  Kg = 'KG',
  Kh = 'KH',
  Ki = 'KI',
  Km = 'KM',
  Kn = 'KN',
  Kp = 'KP',
  Kr = 'KR',
  Kw = 'KW',
  Ky = 'KY',
  Kz = 'KZ',
  La = 'LA',
  Lb = 'LB',
  Lc = 'LC',
  Li = 'LI',
  Lk = 'LK',
  Lr = 'LR',
  Ls = 'LS',
  Lt = 'LT',
  Lu = 'LU',
  Lv = 'LV',
  Ly = 'LY',
  Ma = 'MA',
  Mc = 'MC',
  Md = 'MD',
  Me = 'ME',
  Mf = 'MF',
  Mg = 'MG',
  Mh = 'MH',
  Mk = 'MK',
  Ml = 'ML',
  Mm = 'MM',
  Mn = 'MN',
  Mo = 'MO',
  Mp = 'MP',
  Mq = 'MQ',
  Mr = 'MR',
  Ms = 'MS',
  Mt = 'MT',
  Mu = 'MU',
  Mv = 'MV',
  Mw = 'MW',
  Mx = 'MX',
  My = 'MY',
  Mz = 'MZ',
  Na = 'NA',
  Nc = 'NC',
  Ne = 'NE',
  Nf = 'NF',
  Ng = 'NG',
  Ni = 'NI',
  Nl = 'NL',
  No = 'NO',
  Np = 'NP',
  Nr = 'NR',
  Nu = 'NU',
  Nz = 'NZ',
  Om = 'OM',
  Pa = 'PA',
  Pe = 'PE',
  Pf = 'PF',
  Pg = 'PG',
  Ph = 'PH',
  Pk = 'PK',
  Pl = 'PL',
  Pm = 'PM',
  Pn = 'PN',
  Pr = 'PR',
  Ps = 'PS',
  Pt = 'PT',
  Pw = 'PW',
  Py = 'PY',
  Qa = 'QA',
  Re = 'RE',
  Ro = 'RO',
  Rs = 'RS',
  Ru = 'RU',
  Rw = 'RW',
  Sa = 'SA',
  Sb = 'SB',
  Sc = 'SC',
  Sd = 'SD',
  Se = 'SE',
  Sg = 'SG',
  Sh = 'SH',
  Si = 'SI',
  Sj = 'SJ',
  Sk = 'SK',
  Sl = 'SL',
  Sm = 'SM',
  Sn = 'SN',
  So = 'SO',
  Sr = 'SR',
  Ss = 'SS',
  St = 'ST',
  Sv = 'SV',
  Sx = 'SX',
  Sy = 'SY',
  Sz = 'SZ',
  Tc = 'TC',
  Td = 'TD',
  Tf = 'TF',
  Tg = 'TG',
  Th = 'TH',
  Tj = 'TJ',
  Tk = 'TK',
  Tl = 'TL',
  Tm = 'TM',
  Tn = 'TN',
  To = 'TO',
  Tr = 'TR',
  Tt = 'TT',
  Tv = 'TV',
  Tw = 'TW',
  Tz = 'TZ',
  Ua = 'UA',
  Ug = 'UG',
  Um = 'UM',
  Us = 'US',
  Uy = 'UY',
  Uz = 'UZ',
  Va = 'VA',
  Vc = 'VC',
  Ve = 'VE',
  Vg = 'VG',
  Vi = 'VI',
  Vn = 'VN',
  Vu = 'VU',
  Wf = 'WF',
  Ws = 'WS',
  Ye = 'YE',
  Yt = 'YT',
  Za = 'ZA',
  Zm = 'ZM',
  Zw = 'ZW'
}

export interface CountryDisplay {
  __typename?: 'CountryDisplay';
  /**
   * List of allowed country area choices for this country.
   * @deprecated Use detailedAllowedCountryAreas instead which returns the code for each area as well. This field will be removed after 2024-12-31.
   */
  allowedCountryAreas: Maybe<Array<Scalars['String']['output']>>;
  /** Country code. */
  code: Scalars['String']['output'];
  /** Country name. */
  country: Scalars['String']['output'];
  /** List of allowed country area choices including codes */
  detailedAllowedCountryAreas: Array<CountryArea>;
  /** List of required address fields for the country. */
  requiredFields: Maybe<Array<Scalars['String']['output']>>;
}

export interface CountryState {
  __typename?: 'CountryState';
  area: Maybe<Scalars['String']['output']>;
  areaName: Maybe<Scalars['String']['output']>;
  country: Maybe<Scalars['String']['output']>;
  countryName: Maybe<Scalars['String']['output']>;
}

/** Creates a new Nautical customer token. */
export interface CreateCustomerToken {
  __typename?: 'CreateCustomerToken';
  authErrors: Array<Error>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Token created by Nautical to be used to sync users across several Oauth providers. */
  nauticalToken: Maybe<Scalars['String']['output']>;
  /** Refresh token for renewing the nautical_token (access token). This refresh token expires after 1 hour */
  refreshToken: Maybe<Scalars['String']['output']>;
}

/** Create JWT token. */
export interface CreateToken {
  __typename?: 'CreateToken';
  accountErrors: Array<AccountError>;
  /** CSRF token required to re-generate access token. */
  csrfToken: Maybe<Scalars['String']['output']>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** JWT refresh token, required to re-generate access token. */
  refreshToken: Maybe<Scalars['String']['output']>;
  /** JWT token, required to authenticate. */
  token: Maybe<Scalars['String']['output']>;
  /** A user instance. */
  user: Maybe<User>;
}

export interface CreditCard {
  __typename?: 'CreditCard';
  /** Card brand. */
  brand: Scalars['String']['output'];
  /** Two-digit number representing the card’s expiration month. */
  expMonth: Maybe<Scalars['Int']['output']>;
  /** Four-digit number representing the card’s expiration year. */
  expYear: Maybe<Scalars['Int']['output']>;
  /** First 4 digits of the card number. */
  firstDigits: Maybe<Scalars['String']['output']>;
  /** Last 4 digits of the card number. */
  lastDigits: Scalars['String']['output'];
}

/** Assign attributes to a given custom field template. */
export interface CustomAttributeAssign {
  __typename?: 'CustomAttributeAssign';
  attributeErrors: Array<ProductError>;
  /** The updated custom field template. */
  customFieldTemplate: Maybe<CustomFieldTemplate>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

/** Un-assign attributes from a given custom field template. */
export interface CustomAttributeUnassign {
  __typename?: 'CustomAttributeUnassign';
  attributeErrors: Array<ProductError>;
  /** The updated custom field template. */
  customFieldTemplate: Maybe<CustomFieldTemplate>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

export interface CustomDateRangeInput {
  Dropoff?: InputMaybe<DateRangeInput>;
  Pickup?: InputMaybe<DateRangeInput>;
}

export type CustomFieldInstance = Category | Collection | Product | ProductVariant | User;

/** Represents a type of custom field set. It defines what attributes are available to instances of this type. */
export interface CustomFieldTemplate extends Node {
  __typename?: 'CustomFieldTemplate';
  /** Content type of custom field type in human-readable format. */
  contentType: Maybe<CustomFieldTemplateEnum>;
  createdAt: Scalars['DateTime']['output'];
  customAttributes: AttributeCountableConnection;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  updatedAt: Scalars['DateTime']['output'];
}


/** Represents a type of custom field set. It defines what attributes are available to instances of this type. */
export interface CustomFieldTemplateCustomAttributesArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
}

export enum CustomFieldTemplateEnum {
  Category = 'CATEGORY',
  Collection = 'COLLECTION',
  Product = 'PRODUCT',
  User = 'USER',
  Variant = 'VARIANT'
}

/** Deletes customers. */
export interface CustomerBulkDelete {
  __typename?: 'CustomerBulkDelete';
  accountErrors: Array<AccountError>;
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

/** Creates a new customer. */
export interface CustomerCreate {
  __typename?: 'CustomerCreate';
  accountErrors: Array<AccountError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  user: Maybe<User>;
}

/** Deletes a customer. */
export interface CustomerDelete {
  __typename?: 'CustomerDelete';
  accountErrors: Array<AccountError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  user: Maybe<User>;
}

/** History log of the customer. */
export interface CustomerEvent extends Node {
  __typename?: 'CustomerEvent';
  /** Number of objects concerned by the event. */
  count: Maybe<Scalars['Int']['output']>;
  /** Date when event happened at in ISO 8601 format. */
  date: Maybe<Scalars['DateTime']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** Content of the event. */
  message: Maybe<Scalars['String']['output']>;
  /** The concerned nautical order. */
  nauticalOrder: Maybe<NauticalOrder>;
  /** The concerned order. */
  order: Maybe<Order>;
  /** The concerned order line. */
  orderLine: Maybe<OrderLine>;
  /** Customer event type. */
  type: Maybe<CustomerEventsEnum>;
  /** User who performed the action. */
  user: Maybe<User>;
}

export enum CustomerEventsEnum {
  /** The account was created */
  AccountCreated = 'ACCOUNT_CREATED',
  /** A customer was deleted */
  CustomerDeleted = 'CUSTOMER_DELETED',
  /** A digital good was downloaded */
  DigitalLinkDownloaded = 'DIGITAL_LINK_DOWNLOADED',
  /** A customer's email address was edited */
  EmailAssigned = 'EMAIL_ASSIGNED',
  /** The account email address was changed */
  EmailChanged = 'EMAIL_CHANGED',
  /** The user requested to change the account's email address. */
  EmailChangedRequest = 'EMAIL_CHANGED_REQUEST',
  /** A customer's name was edited */
  NameAssigned = 'NAME_ASSIGNED',
  /** A note was added to the customer */
  NoteAdded = 'NOTE_ADDED',
  /** A note was added */
  NoteAddedToOrder = 'NOTE_ADDED_TO_ORDER',
  /** The account password was changed */
  PasswordChanged = 'PASSWORD_CHANGED',
  /** The account password was reset */
  PasswordReset = 'PASSWORD_RESET',
  /** Password reset link was sent to the customer */
  PasswordResetLinkSent = 'PASSWORD_RESET_LINK_SENT',
  /** An order was placed */
  PlacedOrder = 'PLACED_ORDER'
}

export interface CustomerFilterInput {
  customFields?: InputMaybe<Array<AttributeInput>>;
  dateJoined?: InputMaybe<DateRangeInput>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  moneySpent?: InputMaybe<PriceRangeInput>;
  numberOfOrders?: InputMaybe<IntRangeInput>;
  placedOrders?: InputMaybe<DateRangeInput>;
  search?: InputMaybe<Scalars['String']['input']>;
}

export interface CustomerInput {
  /** Only filled out if the account is a business account. */
  companyName?: InputMaybe<Scalars['String']['input']>;
  /** List of custom fields. */
  customFields?: InputMaybe<Array<AttributeValueInput>>;
  /** Billing address of the customer. */
  defaultBillingAddress?: InputMaybe<AddressInput>;
  /** Shipping address of the customer. */
  defaultShippingAddress?: InputMaybe<AddressInput>;
  /** The unique email address of the user. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Given name. */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** User account is active. */
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * User account is affiliate.
   * @deprecated This will be removed on Oct 26, 2024 when affiliate support is removed.
   */
  isAffiliate?: InputMaybe<Scalars['Boolean']['input']>;
  /** User is staff member. */
  isStaff?: InputMaybe<Scalars['Boolean']['input']>;
  /** Family name. */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** A note about the user. */
  note?: InputMaybe<Scalars['String']['input']>;
  /** Password url */
  passwordUrl?: InputMaybe<Scalars['String']['input']>;
  /** Personal phone number. */
  personalPhone?: InputMaybe<Scalars['String']['input']>;
  /** Tax exempt code */
  taxExemptCode?: InputMaybe<Scalars['String']['input']>;
  /** Marketplace VAT identification number */
  vatIdentificationNumber?: InputMaybe<Scalars['String']['input']>;
}

export interface CustomerNauticalOrderFilterInput {
  channel?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<DateRangeInput>;
  customer?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  isHistorical?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<MetadataFilterInput>;
  paymentStatus?: InputMaybe<Array<PaymentChargeStatusEnum>>;
  privateMetadata?: InputMaybe<MetadataFilterInput>;
  search?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<Array<OrderSourceFilter>>;
  status?: InputMaybe<Array<OrderStatusFilter>>;
  subStatus?: InputMaybe<Array<OfferOrderSubStatusFilter>>;
}

export interface CustomerOrderFilterInput {
  channel?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<DateRangeInput>;
  customer?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  isHistorical?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<MetadataFilterInput>;
  paymentStatus?: InputMaybe<Array<PaymentChargeStatusEnum>>;
  payoutStatus?: InputMaybe<Array<OrderPayoutStatusEnum>>;
  privateMetadata?: InputMaybe<MetadataFilterInput>;
  search?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<Array<OrderSourceFilter>>;
  status?: InputMaybe<Array<OrderStatusFilter>>;
  subStatus?: InputMaybe<Array<OfferOrderSubStatusFilter>>;
}

/** Updates an existing customer. */
export interface CustomerUpdate {
  __typename?: 'CustomerUpdate';
  accountErrors: Array<AccountError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  user: Maybe<User>;
}

/** Export customer list. */
export interface CustomersExport {
  __typename?: 'CustomersExport';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  ok: Maybe<Scalars['Boolean']['output']>;
  /** Plugin ID */
  plugin: Maybe<Scalars['ID']['output']>;
  pluginsErrors: Array<PluginError>;
}

/** Represents a dashboard resource containing general dashboard data and configuration. */
export interface Dashboard {
  __typename?: 'Dashboard';
  /** Dashboard main menu structure in JSON format. */
  configurationMainMenu: Maybe<Scalars['JSONString']['output']>;
  /** Dashboard product create page structure in JSON format. */
  configurationProductCreate: Maybe<Scalars['JSONString']['output']>;
  /** Dashboard product update page structure in JSON format. */
  configurationProductUpdate: Maybe<Scalars['JSONString']['output']>;
  /** Dashboard product variant create page structure in JSON format. */
  configurationProductVariantCreate: Maybe<Scalars['JSONString']['output']>;
  /** Dashboard product variant update page structure in JSON format. */
  configurationProductVariantUpdate: Maybe<Scalars['JSONString']['output']>;
}

export interface DashboardConfigurationError {
  __typename?: 'DashboardConfigurationError';
  /** The error code. */
  code: NauticalConfigurationErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message: Scalars['String']['output'];
}

export interface DashboardConfigurationInput {
  /** Name of the element to update. */
  configurationElement: DashboardConfigurationOptionsEnum;
  /** Configuration value to set. This field will not be validated and will be saved as is */
  configurationValue: Scalars['JSONString']['input'];
}

export enum DashboardConfigurationOptionsEnum {
  /** main_menu */
  MainMenu = 'MAIN_MENU',
  /** product_create */
  ProductCreate = 'PRODUCT_CREATE',
  /** product_update */
  ProductUpdate = 'PRODUCT_UPDATE',
  /** product_variant_create */
  ProductVariantCreate = 'PRODUCT_VARIANT_CREATE',
  /** product_variant_update */
  ProductVariantUpdate = 'PRODUCT_VARIANT_UPDATE'
}

/** Updates dashboard configuration. */
export interface DashboardConfigurationUpdate {
  __typename?: 'DashboardConfigurationUpdate';
  /** Updated dashboard */
  dashboard: Maybe<Dashboard>;
  dashboardConfigurationErrors: Array<DashboardConfigurationError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

/** Gets and sets Explo dashboard embedding token in cookies */
export interface DashboardEmbeddingToken {
  __typename?: 'DashboardEmbeddingToken';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** JWT token for embedding */
  token: Maybe<Scalars['String']['output']>;
}

export interface DashboardGraphType {
  __typename?: 'DashboardGraphType';
  filters: Maybe<Array<FilterObjectType>>;
  graph: Maybe<Array<GraphDataType>>;
}

export interface DashboardOrdersSummaryType {
  __typename?: 'DashboardOrdersSummaryType';
  current: Maybe<AbstractOrderSellerReportType>;
  deltas: Maybe<OrderSummaryDeltaDataType>;
  filters: Maybe<Array<FilterObjectType>>;
  ordersToFulfill: Maybe<Scalars['Int']['output']>;
  paymentsToProcess: Maybe<Scalars['Int']['output']>;
  pendingPayouts: Maybe<Scalars['Int']['output']>;
  pendingReviews: Maybe<Scalars['Int']['output']>;
  previous: Maybe<AbstractOrderSellerReportType>;
  returnsToProcess: Maybe<Scalars['Int']['output']>;
}

export interface DashboardSellerOrderPerformanceType {
  __typename?: 'DashboardSellerOrderPerformanceType';
  /** @deprecated This will be removed on Oct 26, 2024 when affiliate support is removed. */
  affiliateCommission: Maybe<Scalars['Float']['output']>;
  average: Maybe<Scalars['Float']['output']>;
  commission: Maybe<Scalars['Float']['output']>;
  discounts: Maybe<Scalars['Float']['output']>;
  gross: Maybe<Scalars['Float']['output']>;
  net: Maybe<Scalars['Float']['output']>;
  orders: Maybe<Scalars['Int']['output']>;
  payout: Maybe<Scalars['Float']['output']>;
  revenue: Maybe<Scalars['Float']['output']>;
  seller: Maybe<Seller>;
  sellerId: Maybe<Scalars['Int']['output']>;
  shipping: Maybe<Scalars['Float']['output']>;
  taxes: Maybe<Scalars['Float']['output']>;
  totals: Maybe<Scalars['Int']['output']>;
  volumeDiscounts: Maybe<Scalars['Float']['output']>;
}

export interface DashboardTopSellerPerformanceType {
  __typename?: 'DashboardTopSellerPerformanceType';
  current: Maybe<Array<DashboardSellerOrderPerformanceType>>;
  filters: Maybe<Array<FilterObjectType>>;
  previous: Maybe<Array<DashboardSellerOrderPerformanceType>>;
}

export interface DateRangeInput {
  /** Start date. */
  gte?: InputMaybe<Scalars['Date']['input']>;
  /** End date. */
  lte?: InputMaybe<Scalars['Date']['input']>;
}

export interface DateTimeRangeInput {
  /** Start date. */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** End date. */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
}

/** Deactivate all JWT tokens of the currently authenticated user. */
export interface DeactivateAllUserTokens {
  __typename?: 'DeactivateAllUserTokens';
  accountErrors: Array<AccountError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

export interface DeclineFulfillInput {
  /** List of items that cannot be fulfilled for this order. */
  lines: Array<DeclineFulfillLineInput>;
  /** If true, send an email notification to the customer. */
  notifyCustomer?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface DeclineFulfillLineInput {
  /** The ID of the order line that will have fulfillments declined. */
  orderLineId: Scalars['ID']['input'];
  /** List of stock items to permanently decline and deallocate. */
  stocks: Array<DeclineFulfillStockInput>;
}

export interface DeclineFulfillStockInput {
  /** The number of line items to be declined and deallocated from the given warehouse. */
  quantityDeclined: Scalars['Int']['input'];
  /** ID of the warehouse from which the item will be fulfilled. */
  warehouse: Scalars['ID']['input'];
}

export interface DefaultSellerChecklist {
  __typename?: 'DefaultSellerChecklist';
  completeOn: Maybe<SellerChecklistCompetitionTriggersEnum>;
  description: Scalars['String']['output'];
  isEnabled: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
}

export interface DefaultSellerChecklistInput {
  completeOn?: InputMaybe<SellerChecklistCompetitionTriggersEnum>;
  description: Scalars['String']['input'];
  isEnabled: Scalars['Boolean']['input'];
  title: Scalars['String']['input'];
}

/** Create designer data. */
export interface DesignerDataCreate {
  __typename?: 'DesignerDataCreate';
  designerdata: Maybe<DesignerDataType>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  ok: Maybe<Scalars['Boolean']['output']>;
}

export interface DesignerDataInput {
  jsonContent?: InputMaybe<Scalars['JSONString']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
}

export interface DesignerDataType {
  __typename?: 'DesignerDataType';
  jsonContent: Scalars['JSONString']['output'];
  name: Scalars['String']['output'];
}

/** Update existing designer data. */
export interface DesignerDataUpdate {
  __typename?: 'DesignerDataUpdate';
  designerdata: Maybe<DesignerDataType>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  ok: Maybe<Scalars['Boolean']['output']>;
}

export interface DetailedSellerInput {
  /** Seller company name. */
  companyName: Scalars['String']['input'];
  /** Fields required to set the object's metadata. */
  metadata?: InputMaybe<Array<MetadataInput>>;
  /** ID of plan (agreement) for a seller. */
  plan?: InputMaybe<Scalars['ID']['input']>;
  /** @deprecated This field will be ignored in the mutation and a seller will be created in PENDING status. This field will be removed after 2023-12-12. */
  status?: InputMaybe<SellerStatusEnum>;
}

export interface DigitalContent extends Node, ObjectWithMetadata {
  __typename?: 'DigitalContent';
  automaticFulfillment: Scalars['Boolean']['output'];
  /** The URL of file to download. */
  contentFile: Maybe<Scalars['String']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  maxDownloads: Maybe<Scalars['Int']['output']>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  productVariant: ProductVariant;
  urlValidDays: Maybe<Scalars['Int']['output']>;
  /** List of URLs for the digital variant. */
  urls: Maybe<Array<DigitalContentUrl>>;
  useDefaultSettings: Scalars['Boolean']['output'];
}

export interface DigitalContentCountableConnection {
  __typename?: 'DigitalContentCountableConnection';
  edges: Array<DigitalContentCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface DigitalContentCountableEdge {
  __typename?: 'DigitalContentCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: DigitalContent;
}

/** Create new digital content. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec */
export interface DigitalContentCreate {
  __typename?: 'DigitalContentCreate';
  content: Maybe<DigitalContent>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  variant: Maybe<ProductVariant>;
}

/** Remove digital content assigned to given variant. */
export interface DigitalContentDelete {
  __typename?: 'DigitalContentDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  variant: Maybe<ProductVariant>;
}

export interface DigitalContentInput {
  /** Overwrite default automatic_fulfillment setting for variant. */
  automaticFulfillment?: InputMaybe<Scalars['Boolean']['input']>;
  /** Determines how many times a download link can be accessed by a customer. */
  maxDownloads?: InputMaybe<Scalars['Int']['input']>;
  /** Determines for how many days a download link is active since it was generated. */
  urlValidDays?: InputMaybe<Scalars['Int']['input']>;
  /** Use default digital content settings for this product. */
  useDefaultSettings: Scalars['Boolean']['input'];
}

/** Update digital content. */
export interface DigitalContentUpdate {
  __typename?: 'DigitalContentUpdate';
  content: Maybe<DigitalContent>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  variant: Maybe<ProductVariant>;
}

export interface DigitalContentUploadInput {
  /** Overwrite default automatic_fulfillment setting for variant. */
  automaticFulfillment?: InputMaybe<Scalars['Boolean']['input']>;
  /** Represents an file in a multipart request. */
  contentFile: Scalars['Upload']['input'];
  /** Determines how many times a download link can be accessed by a customer. */
  maxDownloads?: InputMaybe<Scalars['Int']['input']>;
  /** Determines for how many days a download link is active since it was generated. */
  urlValidDays?: InputMaybe<Scalars['Int']['input']>;
  /** Use default digital content settings for this product. */
  useDefaultSettings: Scalars['Boolean']['input'];
}

export interface DigitalContentUrl extends Node {
  __typename?: 'DigitalContentUrl';
  content: DigitalContent;
  created: Scalars['DateTime']['output'];
  downloadNum: Scalars['Int']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** UUID of digital content. */
  token: Scalars['NauticalUUID']['output'];
  /** URL for digital content. */
  url: Maybe<Scalars['String']['output']>;
}

/** Generate new URL to digital content. */
export interface DigitalContentUrlCreate {
  __typename?: 'DigitalContentUrlCreate';
  digitalContentUrl: Maybe<DigitalContentUrl>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
}

export interface DigitalContentUrlCreateInput {
  /** Digital content ID which URL will belong to. */
  content: Scalars['ID']['input'];
}

export interface DiscountError {
  __typename?: 'DiscountError';
  /** The error code. */
  code: DiscountErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message: Scalars['String']['output'];
}

/** An enumeration. */
export enum DiscountErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export enum DiscountStatusEnum {
  Active = 'ACTIVE',
  Expired = 'EXPIRED',
  Scheduled = 'SCHEDULED'
}

/** An enumeration. */
export enum DiscountValueTypeEnum {
  Fixed = 'FIXED',
  Percentage = 'PERCENTAGE'
}

export enum DistanceUnit {
  Km = 'KM',
  Mi = 'MI'
}

export enum DistanceUnitsEnum {
  /** Centimeter */
  Cm = 'CM',
  /** Foot */
  Ft = 'FT',
  /** Inch */
  Inch = 'INCH',
  /** Kilometer */
  Km = 'KM',
  /** Meter */
  M = 'M',
  /** Mile */
  Ml = 'ML',
  /** Millimeter */
  Mm = 'MM',
  /** Yard */
  Yd = 'YD'
}

/** Document */
export interface Document {
  __typename?: 'Document';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  file: Scalars['String']['output'];
  fileContentType: Maybe<Scalars['String']['output']>;
  fileExtension: Scalars['String']['output'];
  /** File size in bytes. */
  fileSize: Maybe<FileSize>;
  /** Global ID of the Document. */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  /** The URL of file to download. */
  url: Maybe<Scalars['String']['output']>;
}

/** Add or attach a document to any allowed entity (note: consider to use DocumentAttach for 'attach' action). Must only receive one of either file or document_id in input. */
export interface DocumentAdd {
  __typename?: 'DocumentAdd';
  /** The document that was created or attached. */
  document: Maybe<Document>;
  documentErrors: Array<DocumentError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** List of instances that the document was attached to. */
  instances: Maybe<Array<DocumentTargetInstance>>;
}

/** Attach a document to any allowed entities. */
export interface DocumentAttach {
  __typename?: 'DocumentAttach';
  /** The document that was created or attached. */
  document: Maybe<Document>;
  documentErrors: Array<DocumentError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** List of new instances that the document was attached to. */
  instances: Maybe<Array<DocumentTargetInstance>>;
}

export interface DocumentError {
  __typename?: 'DocumentError';
  /** The error code. */
  code: DocumentErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message: Scalars['String']['output'];
}

/** An enumeration. */
export enum DocumentErrorCode {
  EmailNotSet = 'EMAIL_NOT_SET',
  FileTooLarge = 'FILE_TOO_LARGE',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  InvalidStatus = 'INVALID_STATUS',
  NotFound = 'NOT_FOUND',
  NotReady = 'NOT_READY',
  NumberNotSet = 'NUMBER_NOT_SET',
  Required = 'REQUIRED',
  UnsupportedFileType = 'UNSUPPORTED_FILE_TYPE',
  UrlNotSet = 'URL_NOT_SET'
}

/** Delete or detach a document. Must only receive one of either target_ids or delete = True in input. */
export interface DocumentRemove {
  __typename?: 'DocumentRemove';
  documentErrors: Array<DocumentError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** List of instances that document was detached from. */
  instances: Maybe<Array<DocumentTargetInstance>>;
}

export type DocumentTargetInstance = Product | ProductVariant | Seller | User;

/** Updates an existing document. */
export interface DocumentUpdate {
  __typename?: 'DocumentUpdate';
  /** The document that was created or attached. */
  document: Maybe<Document>;
  documentErrors: Array<DocumentError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

export interface DocumentUpdateInput {
  /** Optional description to update the document with. */
  description?: InputMaybe<Scalars['String']['input']>;
}

/** Represents shop's domain. */
export interface Domain {
  __typename?: 'Domain';
  /** The host name of the domain. */
  host: Scalars['String']['output'];
  /** Inform if SSL is enabled. */
  sslEnabled: Scalars['Boolean']['output'];
  /** Shop's absolute URL. */
  url: Scalars['String']['output'];
}

/** Deletes draft or quote orders. */
export interface DraftOrderBulkDelete {
  __typename?: 'DraftOrderBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  orderErrors: Array<OrderError>;
}

/** Completes creating an order. */
export interface DraftOrderComplete {
  __typename?: 'DraftOrderComplete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Completed order. */
  order: Maybe<Order>;
  orderErrors: Array<OrderError>;
}

/** Creates a new draft order. */
export interface DraftOrderCreate {
  __typename?: 'DraftOrderCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  order: Maybe<Order>;
  orderErrors: Array<OrderError>;
}

export interface DraftOrderCreateInput {
  /** Billing address of the customer. */
  billingAddress?: InputMaybe<AddressInput>;
  /** A note from a customer. Visible by customers in the order summary. */
  customerNote?: InputMaybe<Scalars['String']['input']>;
  /**
   * DEPRECATED: This field will be removed after 2023-12-31. Discount amount for
   *             the order
   * @deprecated Use NauticalOrderUpdateApplyVoucherCode mutation instead.
   */
  discount?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** Variant line input consisting of variant ID and quantity of products. */
  lines?: InputMaybe<Array<OrderLineCreateInput>>;
  seller?: InputMaybe<Scalars['ID']['input']>;
  /** Shipping address of the customer. */
  shippingAddress?: InputMaybe<AddressInput>;
  /**
   * ID of a selected shipping method. This field should be used only for Seller Orders.
   * @deprecated Unsupported field. Use "orderUpdateShipping" for updating shipping method for seller orders and "NauticalOrderUpdateShipping" for Marketplace orders.
   */
  shippingMethod?: InputMaybe<Scalars['ID']['input']>;
  /** Specify which nautical order we want to create (DRAFT, by default). */
  status?: InputMaybe<DraftOrderInitialStatus>;
  /**
   * Sub status the order is to be changed to. Draft orders can have or
   *         be given a sub status of AWAITING_PAYMENT. Quote order can have or be given a
   *         sub status of either QUOTE_REQUESTED or IN_REVIEW.
   */
  subStatus?: InputMaybe<OrderSubStatusEnum>;
  /** Optional transaction currency code. Domiciled currency will be used as fallback. */
  transactionCurrency?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['ID']['input']>;
  /** Email address of the customer. */
  userEmail?: InputMaybe<Scalars['String']['input']>;
  /**
   * DEPRECATED: This field will be removed after 2023-12-31. ID of the voucher
   *             associated with the order.
   * @deprecated Use NauticalOrderUpdateApplyVoucherCode mutation instead.
   */
  voucher?: InputMaybe<Scalars['ID']['input']>;
}

/** Deletes a draft order. */
export interface DraftOrderDelete {
  __typename?: 'DraftOrderDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  order: Maybe<Order>;
  orderErrors: Array<OrderError>;
}

export enum DraftOrderInitialStatus {
  Draft = 'DRAFT',
  Offer = 'OFFER',
  Quote = 'QUOTE'
}

export interface DraftOrderInput {
  /** Billing address of the customer. */
  billingAddress?: InputMaybe<AddressInput>;
  /** A note from a customer. Visible by customers in the order summary. */
  customerNote?: InputMaybe<Scalars['String']['input']>;
  /**
   * DEPRECATED: This field will be removed after 2023-12-31. Discount amount for
   *             the order
   * @deprecated Use NauticalOrderUpdateApplyVoucherCode mutation instead.
   */
  discount?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** Shipping address of the customer. */
  shippingAddress?: InputMaybe<AddressInput>;
  /**
   * ID of a selected shipping method. This field should be used only for Seller Orders.
   * @deprecated Unsupported field. Use "orderUpdateShipping" for updating shipping method for seller orders and "NauticalOrderUpdateShipping" for Marketplace orders.
   */
  shippingMethod?: InputMaybe<Scalars['ID']['input']>;
  /**
   * Sub status the order is to be changed to. Draft orders can have or
   *         be given a sub status of AWAITING_PAYMENT. Quote order can have or be given a
   *         sub status of either QUOTE_REQUESTED or IN_REVIEW.
   */
  subStatus?: InputMaybe<OrderSubStatusEnum>;
  user?: InputMaybe<Scalars['ID']['input']>;
  /** Email address of the customer. */
  userEmail?: InputMaybe<Scalars['String']['input']>;
  /**
   * DEPRECATED: This field will be removed after 2023-12-31. ID of the voucher
   *             associated with the order.
   * @deprecated Use NauticalOrderUpdateApplyVoucherCode mutation instead.
   */
  voucher?: InputMaybe<Scalars['ID']['input']>;
}

/** Deletes an order line from a draft or quote order. */
export interface DraftOrderLineDelete {
  __typename?: 'DraftOrderLineDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** A related draft or quote order. */
  order: Maybe<Order>;
  orderErrors: Array<OrderError>;
  /** An order line that was deleted. */
  orderLine: Maybe<OrderLine>;
}

/** Overrides unit net price of an order line of a draft, quote, or offer order. */
export interface DraftOrderLinePriceOverride {
  __typename?: 'DraftOrderLinePriceOverride';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** A related draft, quote, or offer order. */
  order: Maybe<Order>;
  orderErrors: Array<OrderError>;
  orderLine: Maybe<OrderLine>;
}

/** Updates an order line of a draft, quote or offer order. */
export interface DraftOrderLineUpdate {
  __typename?: 'DraftOrderLineUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** A related draft or quote order. */
  order: Maybe<Order>;
  orderErrors: Array<OrderError>;
  orderLine: Maybe<OrderLine>;
}

/** Deletes order lines. */
export interface DraftOrderLinesBulkDelete {
  __typename?: 'DraftOrderLinesBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  orderErrors: Array<OrderError>;
}

/** Create order lines for draft or quote orders. */
export interface DraftOrderLinesCreate {
  __typename?: 'DraftOrderLinesCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** A related draft order. */
  order: Maybe<Order>;
  orderErrors: Array<OrderError>;
  /** List of newly added order lines. */
  orderLines: Maybe<Array<OrderLine>>;
}

/** Update currency in the existing draft order object. */
export interface DraftOrderSetTransactionCurrency {
  __typename?: 'DraftOrderSetTransactionCurrency';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Draft Order to update transaction currency. */
  order: Maybe<Order>;
  orderErrors: Array<OrderError>;
}

/** Updates a draft order. */
export interface DraftOrderUpdate {
  __typename?: 'DraftOrderUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  order: Maybe<Order>;
  orderErrors: Array<OrderError>;
}

/** Confirm the email change of the logged-in user. */
export interface EmailChangeConfirm {
  __typename?: 'EmailChangeConfirm';
  accountErrors: Array<AccountError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** A user instance with a new email. */
  user: Maybe<User>;
}

/** Request email change for the current user. */
export interface EmailChangeRequest {
  __typename?: 'EmailChangeRequest';
  accountErrors: Array<AccountError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** A user instance. */
  user: Maybe<User>;
}

/** History log of all emails. */
export interface EmailEvent extends Node {
  __typename?: 'EmailEvent';
  bccEmails: Array<Scalars['String']['output']>;
  ccEmails: Array<Scalars['String']['output']>;
  /** Created event time. Naming is used to keep consistent with OrderEvent/SellerEvent naming */
  date: Scalars['DateTime']['output'];
  /** Plugin id (Plugin.PLUGIN_ID attribute) of email plugin */
  emailPluginId: Scalars['String']['output'];
  error: Maybe<Scalars['String']['output']>;
  fromEmail: Scalars['String']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  messageType: EmailEventMessageType;
  payload: Scalars['JSONString']['output'];
  template: Maybe<Scalars['String']['output']>;
  toEmails: Array<Scalars['String']['output']>;
}

export interface EmailEventCountableConnection {
  __typename?: 'EmailEventCountableConnection';
  edges: Array<EmailEventCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface EmailEventCountableEdge {
  __typename?: 'EmailEventCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: EmailEvent;
}

export interface EmailEventFilterInput {
  date?: InputMaybe<DateTimeRangeInput>;
  fromEmail?: InputMaybe<Scalars['String']['input']>;
  messageType?: InputMaybe<Array<NotifyEventTypeEnum>>;
  toEmail?: InputMaybe<Scalars['String']['input']>;
}

/** An enumeration. */
export enum EmailEventMessageType {
  /** Account Activated */
  AccountActivated = 'ACCOUNT_ACTIVATED',
  /** Account Activate Request */
  AccountActivateRequest = 'ACCOUNT_ACTIVATE_REQUEST',
  /** Account Change Email Confirm */
  AccountChangeEmailConfirm = 'ACCOUNT_CHANGE_EMAIL_CONFIRM',
  /** Account Change Email Request */
  AccountChangeEmailRequest = 'ACCOUNT_CHANGE_EMAIL_REQUEST',
  /** Account Confirmation */
  AccountConfirmation = 'ACCOUNT_CONFIRMATION',
  /** Account Deactivated */
  AccountDeactivated = 'ACCOUNT_DEACTIVATED',
  /** Account Delete */
  AccountDelete = 'ACCOUNT_DELETE',
  /** Account Password Reset */
  AccountPasswordReset = 'ACCOUNT_PASSWORD_RESET',
  /** Account Set Customer Password */
  AccountSetCustomerPassword = 'ACCOUNT_SET_CUSTOMER_PASSWORD',
  /** Account Set Staff Password */
  AccountSetStaffPassword = 'ACCOUNT_SET_STAFF_PASSWORD',
  /** Account Staff Reset Password */
  AccountStaffResetPassword = 'ACCOUNT_STAFF_RESET_PASSWORD',
  /** Buyer Bid Action */
  BuyerBidAction = 'BUYER_BID_ACTION',
  /** Csv Export Failed */
  CsvExportFailed = 'CSV_EXPORT_FAILED',
  /** Csv Export Products Success */
  CsvExportProductsSuccess = 'CSV_EXPORT_PRODUCTS_SUCCESS',
  /** Import Catalog Failed */
  ImportCatalogFailed = 'IMPORT_CATALOG_FAILED',
  /** Import Catalog Success */
  ImportCatalogSuccess = 'IMPORT_CATALOG_SUCCESS',
  /** Invoice Ready */
  InvoiceReady = 'INVOICE_READY',
  /** Order Canceled */
  OrderCanceled = 'ORDER_CANCELED',
  /** Order Confirmation */
  OrderConfirmation = 'ORDER_CONFIRMATION',
  /** Order Fulfillment Confirmation */
  OrderFulfillmentConfirmation = 'ORDER_FULFILLMENT_CONFIRMATION',
  /** Order Fulfillment Denied */
  OrderFulfillmentDenied = 'ORDER_FULFILLMENT_DENIED',
  /** Order Fulfillment Update */
  OrderFulfillmentUpdate = 'ORDER_FULFILLMENT_UPDATE',
  /** Order Payment Confirmation */
  OrderPaymentConfirmation = 'ORDER_PAYMENT_CONFIRMATION',
  /** Order Refund Confirmation */
  OrderRefundConfirmation = 'ORDER_REFUND_CONFIRMATION',
  /** Partial Order Cancel */
  PartialOrderCancel = 'PARTIAL_ORDER_CANCEL',
  /** Pending Customer */
  PendingCustomer = 'PENDING_CUSTOMER',
  /** Pending Order */
  PendingOrder = 'PENDING_ORDER',
  /** Pending Quote */
  PendingQuote = 'PENDING_QUOTE',
  /** Pending Seller */
  PendingSeller = 'PENDING_SELLER',
  /** Quote Requested */
  QuoteRequested = 'QUOTE_REQUESTED',
  /** Seller Bid Action */
  SellerBidAction = 'SELLER_BID_ACTION',
  /** Staff Order Confirmation */
  StaffOrderConfirmation = 'STAFF_ORDER_CONFIRMATION',
  /** Updated Status */
  UpdatedStatus = 'UPDATED_STATUS',
  /** Vendor Payout Confirmation */
  VendorPayoutConfirmation = 'VENDOR_PAYOUT_CONFIRMATION',
  /** Vin Decode Failed */
  VinDecodeFailed = 'VIN_DECODE_FAILED',
  /** Vin Decode Success */
  VinDecodeSuccess = 'VIN_DECODE_SUCCESS'
}

export enum EmailEventSortField {
  /** Sort return email_logs by date. */
  Date = 'DATE'
}

export interface EmailEventSortingInput {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort email_logs by the selected field. */
  field: EmailEventSortField;
}

/** Represents an error in the input of a mutation. */
export interface Error {
  __typename?: 'Error';
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message: Scalars['String']['output'];
}

/** Refreshes currency exchange rates. Must have a currency exchange app enabled in the app marketplace. */
export interface ExchangeRatesRefresh {
  __typename?: 'ExchangeRatesRefresh';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  pluginsErrors: Array<PluginError>;
}

export interface ExportError {
  __typename?: 'ExportError';
  /** The error code. */
  code: ExportErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message: Scalars['String']['output'];
}

/** An enumeration. */
export enum ExportErrorCode {
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED'
}

/** History log of export file. */
export interface ExportEvent extends Node {
  __typename?: 'ExportEvent';
  /** App which performed the action. */
  app: Maybe<App>;
  /** Date when event happened at in ISO 8601 format. */
  date: Scalars['DateTime']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** Content of the event. */
  message: Scalars['String']['output'];
  /** Export event type. */
  type: ExportEventsEnum;
  /** User who performed the action. */
  user: Maybe<User>;
}

export enum ExportEventsEnum {
  /** Email with link to download file was sent to the customer. */
  ExportedFileSent = 'EXPORTED_FILE_SENT',
  /** Export file was deleted. */
  ExportDeleted = 'EXPORT_DELETED',
  /** Data export failed. */
  ExportFailed = 'EXPORT_FAILED',
  /** Email with info that export failed was sent to the customer. */
  ExportFailedInfoSent = 'EXPORT_FAILED_INFO_SENT',
  /** Data export was started. */
  ExportPending = 'EXPORT_PENDING',
  /** Data export was completed successfully. */
  ExportSuccess = 'EXPORT_SUCCESS'
}

/** Represents a job data of exported file. */
export interface ExportFile extends Job, Node {
  __typename?: 'ExportFile';
  app: Maybe<App>;
  /** Created date time of job in ISO 8601 format. */
  createdAt: Scalars['DateTime']['output'];
  /** List of events associated with the export. */
  events: Maybe<Array<ExportEvent>>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** Job message. */
  message: Maybe<Scalars['String']['output']>;
  /** Job status. */
  status: JobStatusEnum;
  /** Date time of job last update in ISO 8601 format. */
  updatedAt: Scalars['DateTime']['output'];
  /** The URL of field to download. */
  url: Maybe<Scalars['String']['output']>;
  user: Maybe<User>;
}

export interface ExportFileCountableConnection {
  __typename?: 'ExportFileCountableConnection';
  edges: Array<ExportFileCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface ExportFileCountableEdge {
  __typename?: 'ExportFileCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ExportFile;
}

export interface ExportFileFilterInput {
  app?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimeRangeInput>;
  status?: InputMaybe<JobStatusEnum>;
  updatedAt?: InputMaybe<DateTimeRangeInput>;
  user?: InputMaybe<Scalars['String']['input']>;
}

export enum ExportFileSortField {
  /** Sort export file by created at. */
  CreatedAt = 'CREATED_AT',
  /** Sort export file by status. */
  Status = 'STATUS',
  /** Sort export file by updated at. */
  UpdatedAt = 'UPDATED_AT'
}

export interface ExportFileSortingInput {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort export file by the selected field. */
  field: ExportFileSortField;
}

export interface ExportInfoInput {
  /** List of attribute ids witch should be exported. */
  attributes?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** List of product fields witch should be exported. */
  fields?: InputMaybe<Array<ProductFieldEnum>>;
  /** List of warehouse ids witch should be exported. */
  warehouses?: InputMaybe<Array<Scalars['ID']['input']>>;
}

export interface ExportProductsInput {
  /** Input with info about fields which should be exported. */
  exportInfo?: InputMaybe<ExportInfoInput>;
  /** Type of exported file. */
  fileType: FileTypesEnum;
  /** Filtering options for products. */
  filter?: InputMaybe<ProductFilterInput>;
  /** List of products IDS to export. */
  ids?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Determine which products should be exported. */
  scope: ExportScope;
}

export enum ExportScope {
  /** Export all products. */
  All = 'ALL',
  /** Export the filtered products. */
  Filter = 'FILTER',
  /** Export products with given ids. */
  Ids = 'IDS'
}

/** Represents a single feature for either product or variant. */
export type Feature = ProductFeature | VariantFeature;

/** Creates a new feature for either a product or a variant. */
export interface FeatureCreate {
  __typename?: 'FeatureCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  feature: Maybe<Feature>;
  productErrors: Array<ProductError>;
}

export interface FeatureCreateInput {
  /** Description (value) of the feature. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Feature type to assign to the feature. */
  featureType?: InputMaybe<FeatureTypeEnum>;
  /** ID of the product or variant the feature belongs to. */
  id: Scalars['ID']['input'];
  /** Name (key) of the feature. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** List of available options. */
  options?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

/** Deletes a feature. */
export interface FeatureDelete {
  __typename?: 'FeatureDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  product: Maybe<Product>;
  productErrors: Array<ProductError>;
  variant: Maybe<ProductVariant>;
}

export enum FeatureFilterConnector {
  And = 'AND',
  Or = 'OR'
}

/** When changed, please update related typing (search by FeatureFilterTypedDict) */
export interface FeatureFilterInput {
  connector: FeatureFilterConnector;
  operations?: InputMaybe<Array<FeatureFilterOperation>>;
}

/** When changed, please update related typing (search by FeatureFilterOperationTypingDict) */
export interface FeatureFilterOperation {
  condition: FeatureFilterOperationCondition;
  /** Key for which to search values for in features. */
  name: Scalars['String']['input'];
  /** String to search by any value for in metadata. Use null or empty list to return all results where features with `name` key exists */
  values?: InputMaybe<Array<Scalars['String']['input']>>;
}

export enum FeatureFilterOperationCondition {
  And = 'AND',
  Or = 'OR'
}

export interface FeatureInput {
  /** Description (value) of the feature. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Feature type to assign to the feature. */
  featureType?: InputMaybe<FeatureTypeEnum>;
  /** Name (key) of the feature. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** List of available options. */
  options?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

export enum FeatureTypeEnum {
  /** Dropdown */
  Dropdown = 'DROPDOWN',
  /** Multi Select */
  Multiselect = 'MULTISELECT',
  /** Text */
  Text = 'TEXT'
}

/** Updates a feature. */
export interface FeatureUpdate {
  __typename?: 'FeatureUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  feature: Maybe<Feature>;
  productErrors: Array<ProductError>;
}

/** An enumeration. */
export enum FeeScope {
  Line = 'LINE',
  Total = 'TOTAL'
}

/** An enumeration. */
export enum FeeType {
  Fixed = 'FIXED',
  Percentage = 'PERCENTAGE'
}

/** Represents an uploaded file. */
export interface File {
  __typename?: 'File';
  /** The URL of the file. */
  url: Scalars['String']['output'];
}

/** Represents amount of bytes in common formats. */
export interface FileSize {
  __typename?: 'FileSize';
  /** File size in bytes. */
  bytes: Maybe<Scalars['BigInt']['output']>;
  /** File size in kilobytes. */
  kilobytes: Maybe<Scalars['Decimal']['output']>;
  /** File size in megabytes. */
  megabytes: Maybe<Scalars['Decimal']['output']>;
}

export enum FileTypesEnum {
  /** Plain CSV file. */
  Csv = 'CSV',
  /** Excel XLSX file. */
  Xlsx = 'XLSX'
}

export interface FilterObjectType {
  __typename?: 'FilterObjectType';
  /** Display label for the filter. */
  display: Scalars['String']['output'];
  /** Expected arbitrary type indicator of field as a string, e.g 'Date', 'Integer', 'Money', or 'String' (only used as a guideline for formatting insights) */
  fieldType: Scalars['String']['output'];
  /** The name of the filter field in the query input. */
  name: Scalars['String']['output'];
  /** Optional placeholder for the filter. */
  placeholder: Scalars['String']['output'];
  /** Is this filter required in the query input or not. */
  required: Scalars['Boolean']['output'];
  /** Transferred value for the filter. */
  value: Maybe<Scalars['String']['output']>;
}

export interface FinancialError {
  __typename?: 'FinancialError';
  /** The error code. */
  code: FinancialErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message: Scalars['String']['output'];
}

/** An enumeration. */
export enum FinancialErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED'
}

/** Flow mapping for a plugin */
export interface Flow {
  __typename?: 'Flow';
  formId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  identifier: Scalars['String']['output'];
  mapping: Scalars['JSONString']['output'];
  process: FlowProcess;
  seller: Maybe<Seller>;
}

/** An enumeration. */
export enum FlowProcess {
  /** customer_creation */
  CustomerCreation = 'CUSTOMER_CREATION',
  /** seller_creation */
  SellerCreation = 'SELLER_CREATION'
}

/** Represents order fulfillment. */
export interface Fulfillment extends Node, ObjectWithMetadata {
  __typename?: 'Fulfillment';
  created: Scalars['DateTime']['output'];
  fulfillmentOrder: Scalars['Int']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** List of lines for the fulfillment. */
  lines: Maybe<Array<FulfillmentLine>>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /** Nautical order via order mapping */
  nauticalOrder: Maybe<NauticalOrder>;
  order: Order;
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  relatedTo: Maybe<Fulfillment>;
  /** Seller who made the fulfillment. */
  seller: Maybe<Seller>;
  shippingLabelUrl: Maybe<Scalars['String']['output']>;
  status: FulfillmentStatus;
  /** User-friendly fulfillment status. */
  statusDisplay: Maybe<Scalars['String']['output']>;
  /** Total price across all quantities across all lines. */
  totalLinesMoney: Money;
  /**
   * Total price across all quantities across all lines.
   * @deprecated This will be removed on Oct 25, 2024 and replaced by totalLinesMoney
   */
  totalLinesPrice: Maybe<Scalars['Float']['output']>;
  /** Sum of quantities across all lines. */
  totalLinesQuantity: Maybe<Scalars['Int']['output']>;
  /** Fulfillment tracking company */
  trackingCompany: Maybe<Scalars['String']['output']>;
  /** Fulfillment tracking number */
  trackingNumber: Maybe<Scalars['String']['output']>;
  /** Fulfillment tracking url */
  trackingUrl: Maybe<Scalars['String']['output']>;
  updated: Scalars['DateTime']['output'];
  /** User who made the fulfillment. Requires MANAGE_STAFF permission. */
  user: Maybe<User>;
  /** Warehouse from fulfillment was fulfilled. */
  warehouse: Maybe<Warehouse>;
}

/** Processes return requests by grabbing the return status and  */
export interface FulfillmentBulkReturn {
  __typename?: 'FulfillmentBulkReturn';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** List of returned fulfillments. */
  fulfillments: Maybe<Array<Fulfillment>>;
  orderErrors: Array<OrderError>;
}

/** Cancels existing fulfillment and optionally restocks items. */
export interface FulfillmentCancel {
  __typename?: 'FulfillmentCancel';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** A canceled fulfillment. */
  fulfillment: Maybe<Fulfillment>;
  /** Order which fulfillment was cancelled. */
  order: Maybe<Order>;
  orderErrors: Array<OrderError>;
}

export interface FulfillmentCancelInput {
  /** ID of warehouse where items will be restock. */
  warehouseId: Scalars['ID']['input'];
}

export interface FulfillmentCountableConnection {
  __typename?: 'FulfillmentCountableConnection';
  edges: Array<FulfillmentCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface FulfillmentCountableEdge {
  __typename?: 'FulfillmentCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Fulfillment;
}

/** Represents line of the fulfillment. */
export interface FulfillmentLine extends Node {
  __typename?: 'FulfillmentLine';
  /** The ID of the object */
  id: Scalars['ID']['output'];
  orderLine: Maybe<OrderLine>;
  quantity: Scalars['Int']['output'];
  /** Reason customer requested item return. */
  returnReason: Maybe<Scalars['String']['output']>;
}

export enum FulfillmentModelEnum {
  /** Fulfilled by marketplace */
  FulfilledByMarketplace = 'FULFILLED_BY_MARKETPLACE',
  /** Fulfilled by seller */
  FulfilledBySeller = 'FULFILLED_BY_SELLER',
  /** Hybrid */
  Hybrid = 'HYBRID'
}

/** Returns selected quantity from fulfillment lines and restocks items. */
export interface FulfillmentReturn {
  __typename?: 'FulfillmentReturn';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** A returned fulfillment. */
  fulfillment: Maybe<Fulfillment>;
  /** Order which fulfillment was returned for. */
  order: Maybe<Order>;
  orderErrors: Array<OrderError>;
}

export interface FulfillmentReturnInput {
  /** ID of the fulfillment line that a return is being made against */
  fulfillmentLineId: Scalars['ID']['input'];
  /** Number of items being returned for the given fulfillment line */
  returnQuantity: Scalars['Int']['input'];
}

/** Updated return status of existing fulfillment and optionally restocks items. */
export interface FulfillmentReturnStatusBulkUpdate {
  __typename?: 'FulfillmentReturnStatusBulkUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** A returned fulfillment. */
  fulfillment: Maybe<Fulfillment>;
  /** Order which fulfillment was returned. */
  order: Maybe<Order>;
  orderErrors: Array<OrderError>;
}

/** An enumeration. */
export enum FulfillmentStatus {
  /** Canceled */
  Canceled = 'CANCELED',
  /** Declined */
  Declined = 'DECLINED',
  /** Fulfilled */
  Fulfilled = 'FULFILLED',
  /** Returned */
  Returned = 'RETURNED',
  /** Return authorized */
  ReturnAuthorized = 'RETURN_AUTHORIZED',
  /** Return cancelled */
  ReturnCancelled = 'RETURN_CANCELLED',
  /** Return complete */
  ReturnComplete = 'RETURN_COMPLETE',
  /** Return declined */
  ReturnDeclined = 'RETURN_DECLINED',
  /** Return received */
  ReturnReceived = 'RETURN_RECEIVED',
  /** Return requested */
  ReturnRequested = 'RETURN_REQUESTED'
}

export enum FulfillmentStatusFilter {
  Canceled = 'CANCELED',
  Declined = 'DECLINED',
  Fulfilled = 'FULFILLED',
  Returned = 'RETURNED',
  ReturnAuthorized = 'RETURN_AUTHORIZED',
  ReturnCancelled = 'RETURN_CANCELLED',
  ReturnComplete = 'RETURN_COMPLETE',
  ReturnDeclined = 'RETURN_DECLINED',
  ReturnReceived = 'RETURN_RECEIVED',
  ReturnRequested = 'RETURN_REQUESTED'
}

export interface FulfillmentUpdateReturnStatusInput {
  /** Return status that fulfillment should be updated with. */
  status: Scalars['String']['input'];
}

/** Updates a fulfillment for an order. */
export interface FulfillmentUpdateTracking {
  __typename?: 'FulfillmentUpdateTracking';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** A fulfillment with updated tracking. */
  fulfillment: Maybe<Fulfillment>;
  /** Order for which fulfillment was updated. */
  order: Maybe<Order>;
  orderErrors: Array<OrderError>;
}

export interface FulfillmentUpdateTrackingInput {
  /** If true, send an email notification to the customer. */
  notifyCustomer?: InputMaybe<Scalars['Boolean']['input']>;
  /** Fulfillment tracking company. */
  trackingCompany?: InputMaybe<Scalars['String']['input']>;
  /** Fulfillment tracking number. */
  trackingNumber?: InputMaybe<Scalars['String']['input']>;
  /** Fulfillment tracking url. */
  trackingUrl?: InputMaybe<Scalars['String']['input']>;
}

/** Payment gateway client configuration key and value pair. */
export interface GatewayConfigLine {
  __typename?: 'GatewayConfigLine';
  /** Gateway config key. */
  field: Scalars['String']['output'];
  /** Gateway config value for key. */
  value: Maybe<Scalars['String']['output']>;
}

/** An enumeration. */
export enum GenericWebhookTransactionType {
  /** A paylod for customer create was received */
  CustomerCreate = 'CUSTOMER_CREATE',
  /** A payload for fulfillment create was received. */
  FulfillmentCreate = 'FULFILLMENT_CREATE',
  /** A payload for fulfillment update was received. */
  FulfillmentUpdate = 'FULFILLMENT_UPDATE',
  /** A payload for product inventory tracking update was received. */
  InventoryTrackingUpdate = 'INVENTORY_TRACKING_UPDATE',
  /** A payload for item shipment that was received */
  ItemShipNotify = 'ITEM_SHIP_NOTIFY',
  /** A payload for order cancel was received */
  OrderCancel = 'ORDER_CANCEL',
  /** A payload for order create was received */
  OrderCreate = 'ORDER_CREATE',
  /** A payload for order update was received */
  OrderUpdate = 'ORDER_UPDATE',
  /** A payload for product create was received. */
  ProductCreate = 'PRODUCT_CREATE',
  /** A payload for product delete was received. */
  ProductDelete = 'PRODUCT_DELETE',
  /** A payload for product update was received. */
  ProductUpdate = 'PRODUCT_UPDATE',
  /** A payload for seller create was received */
  SellerCreate = 'SELLER_CREATE',
  /** A payload for stock create was received. */
  StockCreate = 'STOCK_CREATE',
  /** A payload for stock delete was received. */
  StockDelete = 'STOCK_DELETE',
  /** A payload for stock update was received. */
  StockUpdate = 'STOCK_UPDATE',
  /** A payload for vehicles was received */
  VehiclePayload = 'VEHICLE_PAYLOAD',
  /** A payload for warehouse create was received. */
  WarehouseCreate = 'WAREHOUSE_CREATE',
  /** A payload for warehouse delete was received. */
  WarehouseDelete = 'WAREHOUSE_DELETE',
  /** A payload for warehouse update was received. */
  WarehouseUpdate = 'WAREHOUSE_UPDATE'
}

/** Represents customers's geolocalization data. */
export interface Geolocalization {
  __typename?: 'Geolocalization';
  /** Country of the user acquired by his IP address. */
  country: Maybe<CountryDisplay>;
}

export interface GraphDataType {
  __typename?: 'GraphDataType';
  /** @deprecated This will be removed on Oct 26, 2024 when affiliate support is removed. */
  affiliateCommission: Maybe<Scalars['Float']['output']>;
  average: Maybe<Scalars['Float']['output']>;
  commission: Maybe<Scalars['Float']['output']>;
  dimension: Maybe<Scalars['DateTime']['output']>;
  discounts: Maybe<Scalars['Float']['output']>;
  gross: Maybe<Scalars['Float']['output']>;
  net: Maybe<Scalars['Float']['output']>;
  orders: Maybe<Scalars['Int']['output']>;
  payout: Maybe<Scalars['Float']['output']>;
  revenue: Maybe<Scalars['Float']['output']>;
  shipping: Maybe<Scalars['Float']['output']>;
  taxes: Maybe<Scalars['Float']['output']>;
  totals: Maybe<Scalars['Int']['output']>;
  volumeDiscounts: Maybe<Scalars['Float']['output']>;
}

/** Represents permission group data. */
export interface Group extends Node {
  __typename?: 'Group';
  /** The ID of the object */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  /** List of group permissions */
  permissions: Maybe<Array<Permission>>;
  /** True, if the currently authenticated user has rights to manage a group. */
  userCanManage: Scalars['Boolean']['output'];
  /** List of group users */
  users: Maybe<Array<User>>;
}

export interface GroupCountableConnection {
  __typename?: 'GroupCountableConnection';
  edges: Array<GroupCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface GroupCountableEdge {
  __typename?: 'GroupCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Group;
}

/** Adds products to a grouped product. */
export interface GroupedProductAddProducts {
  __typename?: 'GroupedProductAddProducts';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Grouped product to which products will be added. */
  product: Maybe<Product>;
  productErrors: Array<ProductError>;
}

/** Remove products from a grouped product. */
export interface GroupedProductRemoveProducts {
  __typename?: 'GroupedProductRemoveProducts';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Grouped product from which products will be removed. */
  product: Maybe<Product>;
  productErrors: Array<ProductError>;
}

export interface HistoricalOrderLineInput {
  /** Order ID in the external source. */
  externalId?: InputMaybe<Scalars['String']['input']>;
  /** Number of variant items ordered. */
  quantity: Scalars['Int']['input'];
  /** Total price with taxes. */
  unitPriceGrossAmount?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** Total price without taxes. */
  unitPriceNetAmount?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** Product variant ID. */
  variantId: Scalars['ID']['input'];
}

/** Updates homepage collection of the shop. */
export interface HomepageCollectionUpdate {
  __typename?: 'HomepageCollectionUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Updated shop. */
  shop: Maybe<Shop>;
  shopErrors: Array<ShopError>;
}

/** Represents an image. */
export interface Image {
  __typename?: 'Image';
  /** Alt text for an image. */
  alt: Maybe<Scalars['String']['output']>;
  /** The URL of the image. */
  url: Scalars['String']['output'];
}

export interface ImportError {
  __typename?: 'ImportError';
  /** The error code. */
  code: ImportErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message: Scalars['String']['output'];
}

/** An enumeration. */
export enum ImportErrorCode {
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED'
}

/** History log of import file. */
export interface ImportEvent extends Node {
  __typename?: 'ImportEvent';
  /** App which performed the action. */
  app: Maybe<App>;
  /** Date when event happened at in ISO 8601 format. */
  date: Scalars['DateTime']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** Content of the event. */
  message: Scalars['String']['output'];
  /** Import event type. */
  type: ImportEventsEnum;
  /** User who performed the action. */
  user: Maybe<User>;
}

export enum ImportEventsEnum {
  /** Import file was deleted. */
  ImportedFileSent = 'IMPORTED_FILE_SENT',
  /** Data import failed. */
  ImportDeleted = 'IMPORT_DELETED',
  /** Import Failed */
  ImportFailed = 'IMPORT_FAILED',
  /** Data import was started. */
  ImportPending = 'IMPORT_PENDING',
  /** Data import was completed successfully. */
  ImportSuccess = 'IMPORT_SUCCESS'
}

/** Represents a job data of exported file. */
export interface ImportFile extends Job, Node {
  __typename?: 'ImportFile';
  app: Maybe<App>;
  /** Created date time of job in ISO 8601 format. */
  createdAt: Scalars['DateTime']['output'];
  /** List of events associated with the import. */
  events: Maybe<Array<ImportEvent>>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** Job message. */
  message: Maybe<Scalars['String']['output']>;
  /** Job status. */
  status: JobStatusEnum;
  /** Date time of job last update in ISO 8601 format. */
  updatedAt: Scalars['DateTime']['output'];
  /** The URL of file to download. */
  url: Maybe<Scalars['String']['output']>;
  user: Maybe<User>;
}

export interface InReportMarketplaceAffiliatePayoutsSummaryType {
  __typename?: 'InReportMarketplaceAffiliatePayoutsSummaryType';
  /** Category of the metric. */
  category: Scalars['String']['output'];
  /** Description of main columns in report and summary. Note: report and summary can contain additional columns. */
  columns: Maybe<Array<ColumnObjectType>>;
  /** Info about applied filters. */
  filters: Maybe<Array<FilterObjectType>>;
  /** Report where each row represent aggregated, by selected (in filters) dimension, summary. */
  report: Maybe<Array<OrderAffiliateReportType>>;
  /** Total summary for selected period. */
  summary: OrderAffiliateSummaryType;
  /** Title of the metric. */
  title: Scalars['String']['output'];
}

export interface InReportMarketplacePaymentsSummaryType {
  __typename?: 'InReportMarketplacePaymentsSummaryType';
  /** Category of the metric. */
  category: Scalars['String']['output'];
  /** Description of main columns in report and summary. Note: report and summary can contain additional columns. */
  columns: Maybe<Array<ColumnObjectType>>;
  /** Info about applied filters. */
  filters: Maybe<Array<FilterObjectType>>;
  /** Report where each row represent aggregated, by selected (in filters) dimension, summary. */
  report: Maybe<Array<PaymentsDayReportType>>;
  /** Total summary for selected period. */
  summary: AbstractPaymentsType;
  /** Title of the metric. */
  title: Scalars['String']['output'];
}

export interface InReportMarketplacePayoutsSummaryType {
  __typename?: 'InReportMarketplacePayoutsSummaryType';
  /** Category of the metric. */
  category: Scalars['String']['output'];
  /** Description of main columns in report and summary. Note: report and summary can contain additional columns. */
  columns: Maybe<Array<ColumnObjectType>>;
  /** Info about applied filters. */
  filters: Maybe<Array<FilterObjectType>>;
  /** Report where each row represent aggregated, by selected (in filters) dimension, summary. */
  report: Maybe<Array<OrderSellerReportType>>;
  /** Total summary for selected period. */
  summary: OrderSellerSummaryType;
  /** Title of the metric. */
  title: Scalars['String']['output'];
}

export interface InReportMarketplaceTaxSummaryType {
  __typename?: 'InReportMarketplaceTaxSummaryType';
  /** Category of the metric. */
  category: Scalars['String']['output'];
  /** Description of main columns in report and summary. Note: report and summary can contain additional columns. */
  columns: Maybe<Array<ColumnObjectType>>;
  /** Info about applied filters. */
  filters: Maybe<Array<FilterObjectType>>;
  /** Report where each row represent aggregated, by selected (in filters) dimension, summary. */
  report: Maybe<Array<MarketplaceTaxReportType>>;
  /** Total summary for selected period. */
  summary: AbstractOrderSellerReportType;
  /** Title of the metric. */
  title: Scalars['String']['output'];
}

export interface InReportMarketplaceTaxesByCountryType {
  __typename?: 'InReportMarketplaceTaxesByCountryType';
  /** Category of the metric. */
  category: Scalars['String']['output'];
  /** Description of main columns in report and summary. Note: report and summary can contain additional columns. */
  columns: Maybe<Array<ColumnObjectType>>;
  /** Info about applied filters. */
  filters: Maybe<Array<FilterObjectType>>;
  /** Report where each row represent aggregated, by selected (in filters) dimension, summary. */
  report: Maybe<Array<MarketplaceTaxReportByLocaleType>>;
  /** Total summary for selected period. */
  summary: AbstractOrderSellerReportType;
  /** Title of the metric. */
  title: Scalars['String']['output'];
}

export interface InReportOrderCustomerSummaryType {
  __typename?: 'InReportOrderCustomerSummaryType';
  /** Category of the metric. */
  category: Scalars['String']['output'];
  /** Description of main columns in report and summary. Note: report and summary can contain additional columns. */
  columns: Maybe<Array<ColumnObjectType>>;
  /** Info about applied filters. */
  filters: Maybe<Array<FilterObjectType>>;
  /** Report where each row represent aggregated, by selected (in filters) dimension, summary. */
  report: Maybe<Array<OrderCustomerReportType>>;
  /** Total summary for selected period. */
  summary: OrderSellerSummaryType;
  /** Title of the metric. */
  title: Scalars['String']['output'];
}

export interface InReportOrderMarketplaceSummaryType {
  __typename?: 'InReportOrderMarketplaceSummaryType';
  /** Category of the metric. */
  category: Scalars['String']['output'];
  /** Description of main columns in report and summary. Note: report and summary can contain additional columns. */
  columns: Maybe<Array<ColumnObjectType>>;
  /** Info about applied filters. */
  filters: Maybe<Array<FilterObjectType>>;
  /** Report where each row represent aggregated, by selected (in filters) dimension, summary. */
  report: Maybe<Array<OrderMarketplaceReportType>>;
  /** Total summary for selected period. */
  summary: OrderSellerSummaryType;
  /** Title of the metric. */
  title: Scalars['String']['output'];
}

export interface InReportOrderSellerSummaryType {
  __typename?: 'InReportOrderSellerSummaryType';
  /** Category of the metric. */
  category: Scalars['String']['output'];
  /** Description of main columns in report and summary. Note: report and summary can contain additional columns. */
  columns: Maybe<Array<ColumnObjectType>>;
  /** Info about applied filters. */
  filters: Maybe<Array<FilterObjectType>>;
  /** Report where each row represent aggregated, by selected (in filters) dimension, summary. */
  report: Maybe<Array<OrderSellerReportType>>;
  /** Total summary for selected period. */
  summary: OrderSellerSummaryType;
  /** Title of the metric. */
  title: Scalars['String']['output'];
}

export interface InReportTopPerformingCategoriesType {
  __typename?: 'InReportTopPerformingCategoriesType';
  /** Category of the metric. */
  category: Scalars['String']['output'];
  /** Description of main columns in report and summary. Note: report and summary can contain additional columns. */
  columns: Maybe<Array<ColumnObjectType>>;
  /** Info about applied filters. */
  filters: Maybe<Array<FilterObjectType>>;
  /** Report where each row represent aggregated, by selected (in filters) dimension, summary. */
  report: Maybe<Array<ProductCategoryReportType>>;
  /** Total summary for selected period. */
  summary: AbstractProductVariantType;
  /** Title of the metric. */
  title: Scalars['String']['output'];
}

export interface InReportTopPerformingProductsType {
  __typename?: 'InReportTopPerformingProductsType';
  /** Category of the metric. */
  category: Scalars['String']['output'];
  /** Description of main columns in report and summary. Note: report and summary can contain additional columns. */
  columns: Maybe<Array<ColumnObjectType>>;
  /** Info about applied filters. */
  filters: Maybe<Array<FilterObjectType>>;
  /** Report where each row represent aggregated, by selected (in filters) dimension, summary. */
  report: Maybe<Array<ProductVariantReportType>>;
  /** Total summary for selected period. */
  summary: AbstractProductVariantType;
  /** Title of the metric. */
  title: Scalars['String']['output'];
}

export enum InsightDimensionEnum {
  Day = 'DAY',
  Month = 'MONTH',
  Quarter = 'QUARTER',
  Week = 'WEEK',
  Year = 'YEAR'
}

/** Unassign the specified attribute from an instance. */
export interface InstanceAttributeUnassign {
  __typename?: 'InstanceAttributeUnassign';
  attributeErrors: Array<AttributeError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  instance: Maybe<CustomFieldInstance>;
}

export interface IntRangeInput {
  /** Value greater than or equal to. */
  gte?: InputMaybe<Scalars['Int']['input']>;
  /** Value less than or equal to. */
  lte?: InputMaybe<Scalars['Int']['input']>;
}

/** Represents an Invoice. */
export interface Invoice extends Job, Node, ObjectWithMetadata {
  __typename?: 'Invoice';
  /** Created date time of job in ISO 8601 format. */
  createdAt: Scalars['DateTime']['output'];
  externalUrl: Maybe<Scalars['String']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  isEditable: Scalars['Boolean']['output'];
  isValid: Scalars['Boolean']['output'];
  /** Job message. */
  message: Maybe<Scalars['String']['output']>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  number: Scalars['String']['output'];
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /** Job status. */
  status: JobStatusEnum;
  /** Date time of job last update in ISO 8601 format. */
  updatedAt: Scalars['DateTime']['output'];
  /** URL to download an invoice. */
  url: Maybe<Scalars['String']['output']>;
}

/** Cancels an invoice. */
export interface InvoiceCancel {
  __typename?: 'InvoiceCancel';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  invoice: Maybe<Invoice>;
  invoiceErrors: Array<InvoiceError>;
}

/** Creates a ready to send invoice. */
export interface InvoiceCreate {
  __typename?: 'InvoiceCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  invoice: Maybe<Invoice>;
  invoiceErrors: Array<InvoiceError>;
}

export interface InvoiceCreateInput {
  /** Invoice number. */
  number: Scalars['String']['input'];
  /** URL of an invoice to download. */
  url: Scalars['String']['input'];
}

/** Deletes an invoice. */
export interface InvoiceDelete {
  __typename?: 'InvoiceDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  invoice: Maybe<Invoice>;
  invoiceErrors: Array<InvoiceError>;
}

export interface InvoiceError {
  __typename?: 'InvoiceError';
  /** The error code. */
  code: InvoiceErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message: Scalars['String']['output'];
}

/** An enumeration. */
export enum InvoiceErrorCode {
  EmailNotSet = 'EMAIL_NOT_SET',
  InvalidStatus = 'INVALID_STATUS',
  NotAllowed = 'NOT_ALLOWED',
  NotFound = 'NOT_FOUND',
  NotReady = 'NOT_READY',
  NumberNotSet = 'NUMBER_NOT_SET',
  Required = 'REQUIRED',
  UrlNotSet = 'URL_NOT_SET'
}

/** Finalizes an invoice. */
export interface InvoiceFinalize {
  __typename?: 'InvoiceFinalize';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  invoice: Maybe<Invoice>;
  invoiceErrors: Array<InvoiceError>;
}

/** Refreshes an invoice. */
export interface InvoiceRefresh {
  __typename?: 'InvoiceRefresh';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  invoice: Maybe<Invoice>;
  invoiceErrors: Array<InvoiceError>;
  /** Nautical order related to an invoice. */
  nauticalOrder: Maybe<NauticalOrder>;
  /** Order related to an invoice. */
  order: Maybe<Order>;
}

/** Request an invoice for the order using plugin. */
export interface InvoiceRequest {
  __typename?: 'InvoiceRequest';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  invoice: Maybe<Invoice>;
  invoiceErrors: Array<InvoiceError>;
  /** Nautical order related to an invoice. */
  nauticalOrder: Maybe<NauticalOrder>;
  /** Order related to an invoice. */
  order: Maybe<Order>;
  /** Refund related to an refund receipt. */
  refund: Maybe<Refund>;
}

/** Requests deletion of an invoice. */
export interface InvoiceRequestDelete {
  __typename?: 'InvoiceRequestDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  invoice: Maybe<Invoice>;
  invoiceErrors: Array<InvoiceError>;
}

/** Send an invoice notification to the customer. */
export interface InvoiceSendNotification {
  __typename?: 'InvoiceSendNotification';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  invoice: Maybe<Invoice>;
  invoiceErrors: Array<InvoiceError>;
}

/** Updates an invoice. */
export interface InvoiceUpdate {
  __typename?: 'InvoiceUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  invoice: Maybe<Invoice>;
  invoiceErrors: Array<InvoiceError>;
}

export interface Job {
  /** Created date time of job in ISO 8601 format. */
  createdAt: Scalars['DateTime']['output'];
  /** Job message. */
  message: Maybe<Scalars['String']['output']>;
  /** Job status. */
  status: JobStatusEnum;
  /** Date time of job last update in ISO 8601 format. */
  updatedAt: Scalars['DateTime']['output'];
}

export enum JobStatusEnum {
  /** Deleted */
  Deleted = 'DELETED',
  /** Failed */
  Failed = 'FAILED',
  /** Pending */
  Pending = 'PENDING',
  /** Processing */
  Processing = 'PROCESSING',
  /** Success */
  Success = 'SUCCESS'
}

/** Represents a journal entry in the system */
export interface JournalEntry extends Node, ObjectWithMetadata {
  __typename?: 'JournalEntry';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  fulfillmentLine: Maybe<FulfillmentLine>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** Ledger entries for this journal entry */
  ledgerEntries: Array<LedgerEntry>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  nauticalOrder: Maybe<NauticalOrder>;
  order: Maybe<Order>;
  orderLine: Maybe<OrderLine>;
  payment: Maybe<Payment>;
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  refund: Maybe<Refund>;
  refundLine: Maybe<RefundLine>;
  /** Type of the journal entry */
  type: JournalEntryTypeEnum;
  updatedAt: Scalars['DateTime']['output'];
  vendorPayout: Maybe<VendorPayout>;
}

/** Backfill all orders and refunds that are not connected to a VendorPayout into the ledger system. The actual backfill will run asynchronously in a task. */
export interface JournalEntryBackfill {
  __typename?: 'JournalEntryBackfill';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  financialErrors: Array<FinancialError>;
}

/** Correct a previous journal entry by supplying  */
export interface JournalEntryCorrect {
  __typename?: 'JournalEntryCorrect';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  financialErrors: Array<FinancialError>;
  journalEntry: Maybe<JournalEntry>;
}

export interface JournalEntryCorrectInput {
  /** ID of the journal entry to be corrected */
  correctingJournalEntry: Scalars['ID']['input'];
  /** Description to add to the journal entry ID */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Ledger entries to insert for the journal entry */
  ledgerEntries?: InputMaybe<Array<LedgerEntryInput>>;
}

export interface JournalEntryCountableConnection {
  __typename?: 'JournalEntryCountableConnection';
  edges: Array<JournalEntryCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface JournalEntryCountableEdge {
  __typename?: 'JournalEntryCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: JournalEntry;
}

export interface JournalEntryFilterInput {
  createdAt?: InputMaybe<DateTimeRangeInput>;
  fulfillmentLineIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  nauticalOrderIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  orderLineIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  paymentIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  refundLineIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type?: InputMaybe<JournalEntryTypeEnum>;
  vendorPayoutIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
}

export enum JournalEntrySortField {
  /** Sort journal entries by date. */
  Date = 'DATE',
  /** Sort journal entries by type. */
  Type = 'TYPE'
}

export interface JournalEntrySortingInput {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort journal_entries by the selected field. */
  field: JournalEntrySortField;
}

/** An enumeration. */
export enum JournalEntryTypeEnum {
  Adjustment = 'ADJUSTMENT',
  Commission = 'COMMISSION',
  Discount = 'DISCOUNT',
  Fees = 'FEES',
  OrderAccrued = 'ORDER_ACCRUED',
  OrderCancelled = 'ORDER_CANCELLED',
  OrderDeclineFulfillment = 'ORDER_DECLINE_FULFILLMENT',
  OrderPlaced = 'ORDER_PLACED',
  PaymentCaptured = 'PAYMENT_CAPTURED',
  Payout = 'PAYOUT',
  PayoutAdjustment = 'PAYOUT_ADJUSTMENT',
  RefundCommission = 'REFUND_COMMISSION',
  RefundOrder = 'REFUND_ORDER',
  ShippingAccrued = 'SHIPPING_ACCRUED'
}

/** An enumeration. */
export enum LanguageCodeEnum {
  Ar = 'AR',
  Az = 'AZ',
  Bg = 'BG',
  Bn = 'BN',
  Ca = 'CA',
  Cs = 'CS',
  Da = 'DA',
  De = 'DE',
  El = 'EL',
  En = 'EN',
  Es = 'ES',
  EsCo = 'ES_CO',
  Et = 'ET',
  Fa = 'FA',
  Fi = 'FI',
  Fr = 'FR',
  Hi = 'HI',
  Hu = 'HU',
  Hy = 'HY',
  Id = 'ID',
  Is = 'IS',
  It = 'IT',
  Ja = 'JA',
  Ka = 'KA',
  Km = 'KM',
  Ko = 'KO',
  Lt = 'LT',
  Mn = 'MN',
  My = 'MY',
  Nb = 'NB',
  Nl = 'NL',
  Pl = 'PL',
  Pt = 'PT',
  PtBr = 'PT_BR',
  Ro = 'RO',
  Ru = 'RU',
  Sk = 'SK',
  Sl = 'SL',
  Sq = 'SQ',
  Sr = 'SR',
  Sv = 'SV',
  Sw = 'SW',
  Ta = 'TA',
  Th = 'TH',
  Tr = 'TR',
  Uk = 'UK',
  Vi = 'VI',
  ZhHans = 'ZH_HANS',
  ZhHant = 'ZH_HANT'
}

export interface LanguageDisplay {
  __typename?: 'LanguageDisplay';
  /** ISO 639 representation of the language name. */
  code: LanguageCodeEnum;
  /** Full name of the language. */
  language: Scalars['String']['output'];
}

/** Represents a ledger in the system */
export interface Ledger extends Node, ObjectWithMetadata {
  __typename?: 'Ledger';
  /** Ledger account type */
  accountType: LedgerAccountTypeEnum;
  /** Balance of the ledger */
  balance: Money;
  /** Buyer for this ledger */
  buyer: Maybe<User>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  seller: Maybe<Seller>;
  /** Type of the ledger */
  type: LedgerTypeEnum;
  version: Scalars['BigInt']['output'];
}

/** An enumeration. */
export enum LedgerAccountTypeEnum {
  Asset = 'ASSET',
  ContraAsset = 'CONTRA_ASSET',
  ContraLiability = 'CONTRA_LIABILITY',
  ContraRevenue = 'CONTRA_REVENUE',
  Expense = 'EXPENSE',
  Liability = 'LIABILITY',
  Revenue = 'REVENUE'
}

export interface LedgerCountableConnection {
  __typename?: 'LedgerCountableConnection';
  edges: Array<LedgerCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface LedgerCountableEdge {
  __typename?: 'LedgerCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Ledger;
}

/** Represents a ledger entry in the system */
export interface LedgerEntry extends Node, ObjectWithMetadata {
  __typename?: 'LedgerEntry';
  /** Amount of this ledger entry */
  amount: Money;
  createdAt: Scalars['DateTime']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  journalEntry: JournalEntry;
  ledger: Ledger;
  /** Balance of the corresponding ledger when this entry was inserted. */
  ledgerBalance: Money;
  ledgerVersion: Scalars['BigInt']['output'];
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  updatedAt: Scalars['DateTime']['output'];
}

export interface LedgerEntryFilterInput {
  sellerIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type?: InputMaybe<LedgerTypeEnum>;
}

export interface LedgerEntryInput {
  /** Amount of the entry */
  amount: Scalars['Decimal']['input'];
  /** ID of the ledger to insert the amount into */
  ledger: Scalars['ID']['input'];
}

export enum LedgerSortField {
  /** Sort ledgers by balance. */
  Balance = 'BALANCE',
  /** Sort ledgers by type. */
  Type = 'TYPE'
}

export interface LedgerSortingInput {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort ledgers by the selected field. */
  field: LedgerSortField;
}

/** An enumeration. */
export enum LedgerTypeEnum {
  CustomerReceivable = 'CUSTOMER_RECEIVABLE',
  DeferredDiscounts = 'DEFERRED_DISCOUNTS',
  DeferredSalesRevenue = 'DEFERRED_SALES_REVENUE',
  DeferredShippingRevenue = 'DEFERRED_SHIPPING_REVENUE',
  ForeignExchange = 'FOREIGN_EXCHANGE',
  FundsPayments = 'FUNDS_PAYMENTS',
  GuestCustomerReceivable = 'GUEST_CUSTOMER_RECEIVABLE',
  MarketplaceCommission = 'MARKETPLACE_COMMISSION',
  MarketplaceDiscounts = 'MARKETPLACE_DISCOUNTS',
  MarketplaceFees = 'MARKETPLACE_FEES',
  Refunds = 'REFUNDS',
  SalesTax = 'SALES_TAX',
  SellerDiscounts = 'SELLER_DISCOUNTS',
  SellerPayable = 'SELLER_PAYABLE',
  SellerPayoutDisbursement = 'SELLER_PAYOUT_DISBURSEMENT'
}

/** Represents location data. */
export interface Location extends Node {
  __typename?: 'Location';
  city: Scalars['String']['output'];
  cityArea: Scalars['String']['output'];
  companyName: Scalars['String']['output'];
  /** Shop's default country. */
  country: CountryDisplay;
  countryArea: Scalars['String']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  lat: Maybe<Scalars['Float']['output']>;
  /** Kind of the location for tagging business, residential or auction kind location. */
  locationKind: Maybe<LocationKindEnum>;
  /** Type of the location for tagging primary, origin or destination type location. */
  locationType: Maybe<LocationTypeEnum>;
  lon: Maybe<Scalars['Float']['output']>;
  phone: Maybe<Scalars['String']['output']>;
  postalCode: Scalars['String']['output'];
  streetAddress1: Scalars['String']['output'];
  streetAddress2: Scalars['String']['output'];
}

/** Geocode locations */
export interface LocationGeocode {
  __typename?: 'LocationGeocode';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  locations: Maybe<Array<Scalars['GenericScalar']['output']>>;
  pluginsErrors: Array<PluginError>;
}

export interface LocationInput {
  /** City. */
  city?: InputMaybe<Scalars['String']['input']>;
  /** District. */
  cityArea?: InputMaybe<Scalars['String']['input']>;
  /** Company or organization. */
  companyName?: InputMaybe<Scalars['String']['input']>;
  /** Country. */
  country?: InputMaybe<CountryCode>;
  /** State or province. */
  countryArea?: InputMaybe<Scalars['String']['input']>;
  /** Latitude of the location. */
  lat?: InputMaybe<Scalars['Float']['input']>;
  /** Kind of the location. */
  locationKind?: InputMaybe<LocationKindEnum>;
  /** Longitude of the location. */
  lon?: InputMaybe<Scalars['Float']['input']>;
  /** Phone number. */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** Postal code. */
  postalCode?: InputMaybe<Scalars['String']['input']>;
  /** Address. */
  streetAddress1?: InputMaybe<Scalars['String']['input']>;
  /** Address. */
  streetAddress2?: InputMaybe<Scalars['String']['input']>;
}

export enum LocationKindEnum {
  /** Auction */
  Auction = 'AUCTION',
  /** Business */
  Business = 'BUSINESS',
  /** Residential */
  Residential = 'RESIDENTIAL'
}

/** Search locations */
export interface LocationSearch {
  __typename?: 'LocationSearch';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  locations: Maybe<Array<Scalars['GenericScalar']['output']>>;
  pluginsErrors: Array<PluginError>;
}

/** Response when searching for a location using the location_search endpoint */
export interface LocationSuggestion {
  __typename?: 'LocationSuggestion';
  /** Address suggested for the provided location */
  address: Maybe<Address>;
  /** label to give autocomplete suggestions when searching for locations */
  label: Scalars['String']['output'];
}

export enum LocationTypeEnum {
  /** Destination */
  Destination = 'DESTINATION',
  /** Origin */
  Origin = 'ORIGIN',
  /** Primary */
  Primary = 'PRIMARY'
}

/** The manifest definition. */
export interface Manifest {
  __typename?: 'Manifest';
  about: Maybe<Scalars['String']['output']>;
  appUrl: Maybe<Scalars['String']['output']>;
  configurationUrl: Maybe<Scalars['String']['output']>;
  dataPrivacy: Maybe<Scalars['String']['output']>;
  dataPrivacyUrl: Maybe<Scalars['String']['output']>;
  homepageUrl: Maybe<Scalars['String']['output']>;
  identifier: Scalars['String']['output'];
  name: Scalars['String']['output'];
  permissions: Maybe<Array<Permission>>;
  supportUrl: Maybe<Scalars['String']['output']>;
  tokenTargetUrl: Maybe<Scalars['String']['output']>;
  version: Scalars['String']['output'];
}

export interface Margin {
  __typename?: 'Margin';
  start: Maybe<Scalars['Int']['output']>;
  stop: Maybe<Scalars['Int']['output']>;
}

/** Represents a marketplace configuration resource. */
export interface MarketplaceConfiguration {
  __typename?: 'MarketplaceConfiguration';
  attributeTemplateStrategy: MarketplaceConfigurationAttributeTemplateStrategy;
  availableCurrencies: Scalars['JSONString']['output'];
  /** Determines whether shipping methods are available based on marketplace checkout total or seller totals */
  availableShippingStrategy: Maybe<AvailableShippingStrategyEnum>;
  /** The default country for the marketplace. */
  defaultCountry: Scalars['String']['output'];
  /** Returns list of default checklists for seller. */
  defaultSellerChecklists: Array<DefaultSellerChecklist>;
  /** Determines domiciled currency */
  domiciledCurrency: MarketplaceConfigurationCurrencyEnum;
  enableBackorders: Scalars['Boolean']['output'];
  enableStockAllocationForDrafts: Scalars['Boolean']['output'];
  enableStockAllocationForOffers: Scalars['Boolean']['output'];
  enableStockAllocationForQuotes: Scalars['Boolean']['output'];
  /** Determines the fulfillment model for the marketplace */
  fulfillmentModel: FulfillmentModelEnum;
  /**
   * Deprecated: This field will always be overridden as True and will be removed soon.
   * @deprecated This field will always be overridden as True and will be removed soon.
   */
  isSellerShippingZoneCreationAllowed: Maybe<Scalars['Boolean']['output']>;
  marketplaceAccruesShippingRevenue: Scalars['Boolean']['output'];
  marketplaceName: Scalars['String']['output'];
  /**
   * Deprecated: Maximum line quantity of a single item allowed in a checkout, will always be 0 until full removal after deprecation period
   * @deprecated Maximum quantities are only be based on stock availability rather than this additional configuration item. This will be removed after 2024-09-12, and will always be 0 for now.
   */
  maxCheckoutLineQuantity: Scalars['Int']['output'];
  /**
   * Deprecated: Maximum total quantity of all items allowed in a checkout, will always be 0 until full removal after deprecation period
   * @deprecated Maximum quantities are only be based on stock availability rather than this additional configuration item. This will be removed after 2024-09-12, and will always be 0 for now.
   */
  maxCheckoutQuantity: Scalars['Int']['output'];
  maxProductsInGroup: Scalars['Int']['output'];
  /**
   * Min checkout amount for all orders for marketplace (in the currency of marketplace)
   * @deprecated Hosted checkout will handle minimum amount requirements for payment processors. This will be removed after 2024-09-12, and will always be 0.00 for now.
   */
  minCheckoutAmount: Scalars['PositiveDecimal']['output'];
  /** Determines payout status transformation strategy */
  payoutAutomationStrategy: Maybe<MarketplaceConfigurationPayoutAutomationStrategyEnum>;
  requireProductApproval: Scalars['Boolean']['output'];
  requireProductTypes: Scalars['Boolean']['output'];
  /** Determines when revenue is accrued to the marketplace and sellers */
  revenueAccrualStrategy: Maybe<RevenueAccrualStrategyEnum>;
  sellerCanSendQuote: Scalars['Boolean']['output'];
  /** Supported countries for the marketplace */
  supportedCountries: Array<Scalars['String']['output']>;
  /** Supported currencies for the marketplace */
  supportedCurrencies: Array<Scalars['String']['output']>;
  /** IANA timezone to display datetime fields in the marketplace */
  timezone: Scalars['String']['output'];
  validateStockOnOrderPaymentCreation: Scalars['Boolean']['output'];
  /** Determines scope for checking duplicated variant attribute sets */
  variantUniqueness: Maybe<VariantUniquenessEnum>;
}

/** An enumeration. */
export enum MarketplaceConfigurationAttributeTemplateStrategy {
  /** Assigned attributes may come from BOTH attribute templates and non-templated attribute assignments */
  Flexible = 'FLEXIBLE',
  /** Assigned attributes may only come from templates (ProductType for PIM-specific attribute usage or CustomFieldTemplate for custom field attribute usage), no non-templated attribute assignment is allowed */
  Strict = 'STRICT'
}

export enum MarketplaceConfigurationCurrencyEnum {
  /** United Arab Emirates Dirham */
  Aed = 'AED',
  /** Afghan Afghani */
  Afn = 'AFN',
  /** Albanian Lek */
  All = 'ALL',
  /** Armenian Dram */
  Amd = 'AMD',
  /** Netherlands Antillean Guilder */
  Ang = 'ANG',
  /** Angolan Kwanza */
  Aoa = 'AOA',
  /** Argentine Peso */
  Ars = 'ARS',
  /** Australian Dollar */
  Aud = 'AUD',
  /** Aruban Florin */
  Awg = 'AWG',
  /** Azerbaijani Manat */
  Azn = 'AZN',
  /** Bosnia-Herzegovina Convertible Mark */
  Bam = 'BAM',
  /** Barbadian Dollar */
  Bbd = 'BBD',
  /** Bangladeshi Taka */
  Bdt = 'BDT',
  /** Bulgarian Lev */
  Bgn = 'BGN',
  /** Bahraini Dinar */
  Bhd = 'BHD',
  /** Burundian Franc */
  Bif = 'BIF',
  /** Bermudan Dollar */
  Bmd = 'BMD',
  /** Brunei Dollar */
  Bnd = 'BND',
  /** Bolivian Boliviano */
  Bob = 'BOB',
  /** Brazilian Real */
  Brl = 'BRL',
  /** Bahamian Dollar */
  Bsd = 'BSD',
  /** Bitcoin */
  Btc = 'BTC',
  /** Bhutanese Ngultrum */
  Btn = 'BTN',
  /** Botswanan Pula */
  Bwp = 'BWP',
  /** Belarusian Ruble */
  Byn = 'BYN',
  /** Belarusian Ruble (pre-2016) */
  Byr = 'BYR',
  /** Belize Dollar */
  Bzd = 'BZD',
  /** Canadian Dollar */
  Cad = 'CAD',
  /** Congolese Franc */
  Cdf = 'CDF',
  /** Swiss Franc */
  Chf = 'CHF',
  /** Chilean Unit of Account (UF) */
  Clf = 'CLF',
  /** Chilean Peso */
  Clp = 'CLP',
  /** Chinese Yuan (Offshore) */
  Cnh = 'CNH',
  /** Chinese Yuan */
  Cny = 'CNY',
  /** Colombian Peso */
  Cop = 'COP',
  /** Costa Rican Colón */
  Crc = 'CRC',
  /** Cuban Convertible Peso */
  Cuc = 'CUC',
  /** Cuban Peso */
  Cup = 'CUP',
  /** Cape Verdean Escudo */
  Cve = 'CVE',
  /** Czech Republic Koruna */
  Czk = 'CZK',
  /** Djiboutian Franc */
  Djf = 'DJF',
  /** Danish Krone */
  Dkk = 'DKK',
  /** Dominican Peso */
  Dop = 'DOP',
  /** Algerian Dinar */
  Dzd = 'DZD',
  /** Estonian Kroon */
  Eek = 'EEK',
  /** Egyptian Pound */
  Egp = 'EGP',
  /** Eritrean Nakfa */
  Ern = 'ERN',
  /** Ethiopian Birr */
  Etb = 'ETB',
  /** Euro */
  Eur = 'EUR',
  /** Fijian Dollar */
  Fjd = 'FJD',
  /** Falkland Islands Pound */
  Fkp = 'FKP',
  /** British Pound Sterling */
  Gbp = 'GBP',
  /** Georgian Lari */
  Gel = 'GEL',
  /** Guernsey Pound */
  Ggp = 'GGP',
  /** Ghanaian Cedi */
  Ghs = 'GHS',
  /** Gibraltar Pound */
  Gip = 'GIP',
  /** Gambian Dalasi */
  Gmd = 'GMD',
  /** Guinean Franc */
  Gnf = 'GNF',
  /** Guatemalan Quetzal */
  Gtq = 'GTQ',
  /** Guyanaese Dollar */
  Gyd = 'GYD',
  /** Hong Kong Dollar */
  Hkd = 'HKD',
  /** Honduran Lempira */
  Hnl = 'HNL',
  /** Croatian Kuna */
  Hrk = 'HRK',
  /** Haitian Gourde */
  Htg = 'HTG',
  /** Hungarian Forint */
  Huf = 'HUF',
  /** Indonesian Rupiah */
  Idr = 'IDR',
  /** Israeli New Sheqel */
  Ils = 'ILS',
  /** Manx pound */
  Imp = 'IMP',
  /** Indian Rupee */
  Inr = 'INR',
  /** Iraqi Dinar */
  Iqd = 'IQD',
  /** Iranian Rial */
  Irr = 'IRR',
  /** Icelandic Króna */
  Isk = 'ISK',
  /** Jersey Pound */
  Jep = 'JEP',
  /** Jamaican Dollar */
  Jmd = 'JMD',
  /** Jordanian Dinar */
  Jod = 'JOD',
  /** Japanese Yen */
  Jpy = 'JPY',
  /** Kenyan Shilling */
  Kes = 'KES',
  /** Kyrgystani Som */
  Kgs = 'KGS',
  /** Cambodian Riel */
  Khr = 'KHR',
  /** Comorian Franc */
  Kmf = 'KMF',
  /** North Korean Won */
  Kpw = 'KPW',
  /** South Korean Won */
  Krw = 'KRW',
  /** Kuwaiti Dinar */
  Kwd = 'KWD',
  /** Cayman Islands Dollar */
  Kyd = 'KYD',
  /** Kazakhstani Tenge */
  Kzt = 'KZT',
  /** Laotian Kip */
  Lak = 'LAK',
  /** Lebanese Pound */
  Lbp = 'LBP',
  /** Sri Lankan Rupee */
  Lkr = 'LKR',
  /** Liberian Dollar */
  Lrd = 'LRD',
  /** Lesotho Loti */
  Lsl = 'LSL',
  /** Libyan Dinar */
  Lyd = 'LYD',
  /** Moroccan Dirham */
  Mad = 'MAD',
  /** Moldovan Leu */
  Mdl = 'MDL',
  /** Malagasy Ariary */
  Mga = 'MGA',
  /** Macedonian Denar */
  Mkd = 'MKD',
  /** Myanma Kyat */
  Mmk = 'MMK',
  /** Mongolian Tugrik */
  Mnt = 'MNT',
  /** Macanese Pataca */
  Mop = 'MOP',
  /** Mauritanian Ouguiya (pre-2018) */
  Mro = 'MRO',
  /** Mauritanian Ouguiya */
  Mru = 'MRU',
  /** Maltese Lira */
  Mtl = 'MTL',
  /** Mauritian Rupee */
  Mur = 'MUR',
  /** Maldivian Rufiyaa */
  Mvr = 'MVR',
  /** Malawian Kwacha */
  Mwk = 'MWK',
  /** Mexican Peso */
  Mxn = 'MXN',
  /** Malaysian Ringgit */
  Myr = 'MYR',
  /** Mozambican Metical */
  Mzn = 'MZN',
  /** Namibian Dollar */
  Nad = 'NAD',
  /** Nigerian Naira */
  Ngn = 'NGN',
  /** Nicaraguan Córdoba */
  Nio = 'NIO',
  /** Norwegian Krone */
  Nok = 'NOK',
  /** Nepalese Rupee */
  Npr = 'NPR',
  /** New Zealand Dollar */
  Nzd = 'NZD',
  /** Omani Rial */
  Omr = 'OMR',
  /** Panamanian Balboa */
  Pab = 'PAB',
  /** Peruvian Nuevo Sol */
  Pen = 'PEN',
  /** Papua New Guinean Kina */
  Pgk = 'PGK',
  /** Philippine Peso */
  Php = 'PHP',
  /** Pakistani Rupee */
  Pkr = 'PKR',
  /** Polish Zloty */
  Pln = 'PLN',
  /** Paraguayan Guarani */
  Pyg = 'PYG',
  /** Qatari Rial */
  Qar = 'QAR',
  /** Romanian Leu */
  Ron = 'RON',
  /** Serbian Dinar */
  Rsd = 'RSD',
  /** Russian Ruble */
  Rub = 'RUB',
  /** Rwandan Franc */
  Rwf = 'RWF',
  /** Saudi Riyal */
  Sar = 'SAR',
  /** Solomon Islands Dollar */
  Sbd = 'SBD',
  /** Seychellois Rupee */
  Scr = 'SCR',
  /** Sudanese Pound */
  Sdg = 'SDG',
  /** Swedish Krona */
  Sek = 'SEK',
  /** Singapore Dollar */
  Sgd = 'SGD',
  /** Saint Helena Pound */
  Shp = 'SHP',
  /** Sierra Leonean Leone */
  Sll = 'SLL',
  /** Somali Shilling */
  Sos = 'SOS',
  /** Surinamese Dollar */
  Srd = 'SRD',
  /** South Sudanese Pound */
  Ssp = 'SSP',
  /** São Tomé and Príncipe Dobra (pre-2018) */
  Std = 'STD',
  /** São Tomé and Príncipe Dobra */
  Stn = 'STN',
  /** Salvadoran Colón */
  Svc = 'SVC',
  /** Syrian Pound */
  Syp = 'SYP',
  /** Swazi Lilangeni */
  Szl = 'SZL',
  /** Thai Baht */
  Thb = 'THB',
  /** Tajikistani Somoni */
  Tjs = 'TJS',
  /** Turkmenistani Manat */
  Tmt = 'TMT',
  /** Tunisian Dinar */
  Tnd = 'TND',
  /** Tongan Paʻanga */
  Top = 'TOP',
  /** Turkish Lira */
  Try = 'TRY',
  /** Trinidad and Tobago Dollar */
  Ttd = 'TTD',
  /** New Taiwan Dollar */
  Twd = 'TWD',
  /** Tanzanian Shilling */
  Tzs = 'TZS',
  /** Ukrainian Hryvnia */
  Uah = 'UAH',
  /** Ugandan Shilling */
  Ugx = 'UGX',
  /** United States Dollar */
  Usd = 'USD',
  /** Uruguayan Peso */
  Uyu = 'UYU',
  /** Uzbekistan Som */
  Uzs = 'UZS',
  /** Venezuelan Bolívar Fuerte */
  Vef = 'VEF',
  /** Vietnamese Dong */
  Vnd = 'VND',
  /** Vanuatu Vatu */
  Vuv = 'VUV',
  /** Samoan Tala */
  Wst = 'WST',
  /** CFA Franc BEAC */
  Xaf = 'XAF',
  /** Silver (troy ounce) */
  Xag = 'XAG',
  /** Gold (troy ounce) */
  Xau = 'XAU',
  /** East Caribbean Dollar */
  Xcd = 'XCD',
  /** Special Drawing Rights */
  Xdr = 'XDR',
  /** CFA Franc BCEAO */
  Xof = 'XOF',
  /** Palladium Ounce */
  Xpd = 'XPD',
  /** CFP Franc */
  Xpf = 'XPF',
  /** Platinum Ounce */
  Xpt = 'XPT',
  /** Yemeni Rial */
  Yer = 'YER',
  /** South African Rand */
  Zar = 'ZAR',
  /** Zambian Kwacha (pre-2013) */
  Zmk = 'ZMK',
  /** Zambian Kwacha */
  Zmw = 'ZMW'
}

export interface MarketplaceConfigurationError {
  __typename?: 'MarketplaceConfigurationError';
  /** The error code. */
  code: MarketplaceConfigurationErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message: Scalars['String']['output'];
}

/** An enumeration. */
export enum MarketplaceConfigurationErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID'
}

export interface MarketplaceConfigurationInput {
  /** Update attribute template strategy */
  attributeTemplateStrategy?: InputMaybe<AttributeTemplateStrategyEnum>;
  /** Update available shipping strategy */
  availableShippingStrategy?: InputMaybe<AvailableShippingStrategyEnum>;
  /** The default country for the marketplace */
  defaultCountry?: InputMaybe<Scalars['String']['input']>;
  /** List of all default checklists for seller. */
  defaultSellerChecklists?: InputMaybe<Array<DefaultSellerChecklistInput>>;
  /** Updates currency of the marketplace. Marketplace currency will be updated after the cache time (approximately 30 seconds)' */
  domiciledCurrency?: InputMaybe<MarketplaceConfigurationCurrencyEnum>;
  /** True if it is possible to enable backorders on a per-variant basis */
  enableBackorders?: InputMaybe<Scalars['Boolean']['input']>;
  /** True if draft orders trigger stock allocation. */
  enableStockAllocationForDrafts?: InputMaybe<Scalars['Boolean']['input']>;
  /** True if offer orders trigger stock allocation. */
  enableStockAllocationForOffers?: InputMaybe<Scalars['Boolean']['input']>;
  /** True if quote orders trigger stock allocation. */
  enableStockAllocationForQuotes?: InputMaybe<Scalars['Boolean']['input']>;
  /** Determines the fulfillment model for the marketplace */
  fulfillmentModel?: InputMaybe<FulfillmentModelEnum>;
  /** Deprecated: This field will always be overridden as True and will be removed soon. */
  isSellerShippingZoneCreationAllowed?: InputMaybe<Scalars['Boolean']['input']>;
  /** True if marketplace accrues shipping revenue, false if sellers accrue shipping revenue */
  marketplaceAccruesShippingRevenue?: InputMaybe<Scalars['Boolean']['input']>;
  /** Maximum number of products allowed in a grouped product. */
  maxProductsInGroup?: InputMaybe<Scalars['Int']['input']>;
  /** Updates status transformation strategy for payout. */
  payoutAutomationStrategy?: InputMaybe<MarketplaceConfigurationPayoutAutomationStrategyEnum>;
  /** True if seller products require approval */
  requireProductApproval?: InputMaybe<Scalars['Boolean']['input']>;
  /** True if products require product types to be created */
  requireProductTypes?: InputMaybe<Scalars['Boolean']['input']>;
  /** Update revenue accrual strategy */
  revenueAccrualStrategy?: InputMaybe<RevenueAccrualStrategyEnum>;
  /** True if sellers can send quotes to customers. */
  sellerCanSendQuote?: InputMaybe<Scalars['Boolean']['input']>;
  /** Supported countries for the marketplace */
  supportedCountries?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Supported currencies for the marketplace */
  supportedCurrencies?: InputMaybe<Array<Scalars['String']['input']>>;
  /** IANA timezone to display datetime fields in the marketplace */
  timezone?: InputMaybe<Scalars['String']['input']>;
  /** True if stocks should be validated on payment creation for orders. */
  validateStockOnOrderPaymentCreation?: InputMaybe<Scalars['Boolean']['input']>;
  /** Determines scope for checking duplicated variant attribute sets */
  variantUniqueness?: InputMaybe<VariantUniquenessEnum>;
}

export enum MarketplaceConfigurationPayoutAutomationStrategyEnum {
  /** Ready for payout when status is paid and fulfilled */
  AutomatedByFulfillment = 'AUTOMATED_BY_FULFILLMENT',
  /** Completely Manually controlled Payout Status */
  Manual = 'MANUAL'
}

/** Updates marketplace configuration. */
export interface MarketplaceConfigurationUpdate {
  __typename?: 'MarketplaceConfigurationUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Updated marketplace configuration. */
  marketplaceConfiguration: Maybe<MarketplaceConfiguration>;
  marketplaceConfigurationErrors: Array<MarketplaceConfigurationError>;
}

export interface MarketplaceTaxReportByLocaleType {
  __typename?: 'MarketplaceTaxReportByLocaleType';
  /** @deprecated This will be removed on Oct 26, 2024 when affiliate support is removed. */
  affiliateCommission: Maybe<Scalars['Float']['output']>;
  average: Maybe<Scalars['Float']['output']>;
  billingAddress_Country: Maybe<Scalars['String']['output']>;
  billingAddress_CountryArea: Maybe<Scalars['String']['output']>;
  commission: Maybe<Scalars['Float']['output']>;
  country: Maybe<Scalars['String']['output']>;
  countryArea: Maybe<Scalars['String']['output']>;
  countryAreaName: Maybe<Scalars['String']['output']>;
  countryName: Maybe<Scalars['String']['output']>;
  countryState: Maybe<CountryState>;
  discounts: Maybe<Scalars['Float']['output']>;
  gross: Maybe<Scalars['Float']['output']>;
  net: Maybe<Scalars['Float']['output']>;
  orders: Maybe<Scalars['Int']['output']>;
  payout: Maybe<Scalars['Float']['output']>;
  revenue: Maybe<Scalars['Float']['output']>;
  shipping: Maybe<Scalars['Float']['output']>;
  taxes: Maybe<Scalars['Float']['output']>;
  totals: Maybe<Scalars['Int']['output']>;
  volumeDiscounts: Maybe<Scalars['Float']['output']>;
}

export interface MarketplaceTaxReportType {
  __typename?: 'MarketplaceTaxReportType';
  /** @deprecated This will be removed on Oct 26, 2024 when affiliate support is removed. */
  affiliateCommission: Maybe<Scalars['Float']['output']>;
  average: Maybe<Scalars['Float']['output']>;
  commission: Maybe<Scalars['Float']['output']>;
  dimension: Maybe<Scalars['Date']['output']>;
  discounts: Maybe<Scalars['Float']['output']>;
  gross: Maybe<Scalars['Float']['output']>;
  net: Maybe<Scalars['Float']['output']>;
  orders: Maybe<Scalars['Int']['output']>;
  payout: Maybe<Scalars['Float']['output']>;
  revenue: Maybe<Scalars['Float']['output']>;
  shipping: Maybe<Scalars['Float']['output']>;
  taxes: Maybe<Scalars['Float']['output']>;
  totals: Maybe<Scalars['Int']['output']>;
  volumeDiscounts: Maybe<Scalars['Float']['output']>;
}

export enum MarkupCommissionTypeEnum {
  /** Percentage */
  Percentage = 'PERCENTAGE'
}

/** Media object. */
export interface Media extends Node {
  __typename?: 'Media';
  /** Alternate text for the image of media object. */
  alt: Scalars['String']['output'];
  /** Date and time media was created. */
  createdAt: Scalars['String']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  image: Maybe<Image>;
  /** Title of media object. */
  title: Scalars['String']['output'];
}

/** Deletes medias. */
export interface MediaBulkDelete {
  __typename?: 'MediaBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  shopErrors: Array<ShopError>;
}

export interface MediaCountableConnection {
  __typename?: 'MediaCountableConnection';
  edges: Array<MediaCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface MediaCountableEdge {
  __typename?: 'MediaCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Media;
}

/** Creates a new media object. */
export interface MediaCreate {
  __typename?: 'MediaCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Created media instance. */
  media: Maybe<Media>;
  shopErrors: Array<ShopError>;
}

export interface MediaCreateInput {
  /** Alt text for an image. */
  alt?: InputMaybe<Scalars['String']['input']>;
  /** Represents an image file for this media object. */
  image: Scalars['Upload']['input'];
  /** Title for the media object. */
  title: Scalars['String']['input'];
}

export interface MediaFilterInput {
  search?: InputMaybe<Scalars['String']['input']>;
}

export enum MediaSortField {
  CreatedAt = 'CREATED_AT',
  Title = 'TITLE'
}

export interface MediaSortingInput {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort media by the selected field. */
  field: MediaSortField;
}

/** Update a media object. */
export interface MediaUpdate {
  __typename?: 'MediaUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Updated media instance. */
  media: Maybe<Media>;
  shopErrors: Array<ShopError>;
}

export interface MediaUpdateInput {
  /** Alt text for an image. */
  alt?: InputMaybe<Scalars['String']['input']>;
  /** Represents an image file for this media object. */
  image?: InputMaybe<Scalars['Upload']['input']>;
  /** Title for the media object. */
  title?: InputMaybe<Scalars['String']['input']>;
}

/** Represents a single menu - an object that is used to help navigate through the store. */
export interface Menu extends Node {
  __typename?: 'Menu';
  /** The ID of the object */
  id: Scalars['ID']['output'];
  items: Maybe<Array<MenuItem>>;
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
}

/** Deletes menus. */
export interface MenuBulkDelete {
  __typename?: 'MenuBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  menuErrors: Array<MenuError>;
}

export interface MenuCountableConnection {
  __typename?: 'MenuCountableConnection';
  edges: Array<MenuCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface MenuCountableEdge {
  __typename?: 'MenuCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Menu;
}

/** Creates a new Menu. */
export interface MenuCreate {
  __typename?: 'MenuCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  menu: Maybe<Menu>;
  menuErrors: Array<MenuError>;
}

export interface MenuCreateInput {
  /** List of menu items. */
  items?: InputMaybe<Array<MenuItemInput>>;
  /** Name of the menu. */
  name: Scalars['String']['input'];
  /** Slug of the menu. Will be generated if not provided. */
  slug?: InputMaybe<Scalars['String']['input']>;
}

/** Deletes a menu. */
export interface MenuDelete {
  __typename?: 'MenuDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  menu: Maybe<Menu>;
  menuErrors: Array<MenuError>;
}

export interface MenuError {
  __typename?: 'MenuError';
  /** The error code. */
  code: MenuErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message: Scalars['String']['output'];
}

/** An enumeration. */
export enum MenuErrorCode {
  CannotAssignNode = 'CANNOT_ASSIGN_NODE',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  InvalidMenuItem = 'INVALID_MENU_ITEM',
  NotFound = 'NOT_FOUND',
  NoMenuItemProvided = 'NO_MENU_ITEM_PROVIDED',
  Required = 'REQUIRED',
  TooManyMenuItems = 'TOO_MANY_MENU_ITEMS',
  Unique = 'UNIQUE'
}

export interface MenuFilterInput {
  search?: InputMaybe<Scalars['String']['input']>;
  slug?: InputMaybe<Array<Scalars['String']['input']>>;
}

export interface MenuInput {
  /** Name of the menu. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Slug of the menu. */
  slug?: InputMaybe<Scalars['String']['input']>;
}

/** Represents a single item of the related menu. Can store categories, collection or pages. */
export interface MenuItem extends Node {
  __typename?: 'MenuItem';
  category: Maybe<Category>;
  children: Maybe<Array<MenuItem>>;
  collection: Maybe<Collection>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  level: Scalars['Int']['output'];
  menu: Menu;
  name: Scalars['String']['output'];
  page: Maybe<Page>;
  parent: Maybe<MenuItem>;
  /** URL to the menu item. */
  url: Maybe<Scalars['String']['output']>;
}

/** Deletes menu items. */
export interface MenuItemBulkDelete {
  __typename?: 'MenuItemBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  menuErrors: Array<MenuError>;
}

export interface MenuItemCountableConnection {
  __typename?: 'MenuItemCountableConnection';
  edges: Array<MenuItemCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface MenuItemCountableEdge {
  __typename?: 'MenuItemCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: MenuItem;
}

/** Creates a new menu item. */
export interface MenuItemCreate {
  __typename?: 'MenuItemCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  menuErrors: Array<MenuError>;
  menuItem: Maybe<MenuItem>;
}

export interface MenuItemCreateInput {
  /** Category to which item points. */
  category?: InputMaybe<Scalars['ID']['input']>;
  /** Collection to which item points. */
  collection?: InputMaybe<Scalars['ID']['input']>;
  /** Menu to which item belongs. */
  menu: Scalars['ID']['input'];
  /** Name of the menu item. */
  name: Scalars['String']['input'];
  /** Page to which item points. */
  page?: InputMaybe<Scalars['ID']['input']>;
  /** ID of the parent menu. If empty, menu will be top level menu. */
  parent?: InputMaybe<Scalars['ID']['input']>;
  /** URL of the pointed item. */
  url?: InputMaybe<Scalars['String']['input']>;
}

/** Deletes a menu item. */
export interface MenuItemDelete {
  __typename?: 'MenuItemDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  menuErrors: Array<MenuError>;
  menuItem: Maybe<MenuItem>;
}

export interface MenuItemFilterInput {
  search?: InputMaybe<Scalars['String']['input']>;
}

export interface MenuItemInput {
  /** Category to which item points. */
  category?: InputMaybe<Scalars['ID']['input']>;
  /** Collection to which item points. */
  collection?: InputMaybe<Scalars['ID']['input']>;
  /** Name of the menu item. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Page to which item points. */
  page?: InputMaybe<Scalars['ID']['input']>;
  /** URL of the pointed item. */
  url?: InputMaybe<Scalars['String']['input']>;
}

/** Moves items of menus. */
export interface MenuItemMove {
  __typename?: 'MenuItemMove';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Assigned menu to move within. */
  menu: Maybe<Menu>;
  menuErrors: Array<MenuError>;
}

export interface MenuItemMoveInput {
  /** Set to 'true', if you want receive an error in case, when new calculated position (based on offset) is invalid: has negative value, or greater than number of parent elements. */
  isStrictOffset?: InputMaybe<Scalars['Boolean']['input']>;
  /** The menu item ID to move. */
  itemId: Scalars['ID']['input'];
  /** ID of the parent menu. If equals to "null", menu will be top level menu. If not transferred, parent will not be changed. */
  parentId?: InputMaybe<Scalars['ID']['input']>;
  /** The new relative offset from the current position of the item (from -inf to +inf). 1 moves the item one position forward, -1 moves the item one position backward, 0 leaves the item unchanged. Be aware, if parent was changed and you want to set new position, then you should take into account, that on parent change, item will be appended to parent children. */
  relativeOffset?: InputMaybe<Scalars['Int']['input']>;
}

export interface MenuItemSortingInput {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort menu items by the selected field. */
  field: MenuItemsSortField;
}

/** Updates a menu item. */
export interface MenuItemUpdate {
  __typename?: 'MenuItemUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  menuErrors: Array<MenuError>;
  menuItem: Maybe<MenuItem>;
}

export enum MenuItemsSortField {
  /** Sort menu items by name. */
  Name = 'NAME'
}

export enum MenuSortField {
  /** Sort menus by items count. */
  ItemsCount = 'ITEMS_COUNT',
  /** Sort menus by name. */
  Name = 'NAME'
}

export interface MenuSortingInput {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort menus by the selected field. */
  field: MenuSortField;
}

/** Updates a menu. */
export interface MenuUpdate {
  __typename?: 'MenuUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  menu: Maybe<Menu>;
  menuErrors: Array<MenuError>;
}

/** Delete metadata of an object. */
export interface MetadataDelete {
  __typename?: 'MetadataDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  item: Maybe<ObjectWithMetadata>;
  metadataErrors: Array<MetadataError>;
}

export interface MetadataError {
  __typename?: 'MetadataError';
  /** The error code. */
  code: MetadataErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message: Scalars['String']['output'];
}

/** An enumeration. */
export enum MetadataErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED'
}

export interface MetadataFilterInput {
  /** Key for which to search values for in metadata. */
  key: Scalars['String']['input'];
  /** String to search Values for in metadata. */
  valueSearchTerm: Scalars['String']['input'];
}

export interface MetadataInput {
  /** Key of a metadata item. */
  key: Scalars['String']['input'];
  /** Value of a metadata item. */
  value: Scalars['String']['input'];
}

export interface MetadataItem {
  __typename?: 'MetadataItem';
  /** Key of a metadata item. */
  key: Scalars['String']['output'];
  /** Value of a metadata item. */
  value: Scalars['String']['output'];
}

/** Updates metadata of an object. */
export interface MetadataUpdate {
  __typename?: 'MetadataUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  item: Maybe<ObjectWithMetadata>;
  metadataErrors: Array<MetadataError>;
}

/** Represents a microsite of products. */
export interface Microsite extends Node, ObjectWithMetadata {
  __typename?: 'Microsite';
  /** @deprecated This will be removed on Oct 26, 2024 when affiliate support is removed. */
  affiliate: Maybe<User>;
  bannerImage: Maybe<Image>;
  description: Scalars['String']['output'];
  descriptionHtml: Scalars['String']['output'];
  descriptionJson: Scalars['JSONString']['output'];
  footerText: Maybe<Scalars['String']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** Whether the microsite is published. */
  isPublished: Scalars['Boolean']['output'];
  logoImage: Maybe<Image>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  name: Scalars['String']['output'];
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /** List of products in this microsite. */
  products: Maybe<ProductCountableConnection>;
  publicationDate: Maybe<Scalars['Date']['output']>;
  seller: Maybe<Seller>;
  seoDescription: Maybe<Scalars['String']['output']>;
  seoTitle: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
}


/** Represents a microsite of products. */
export interface MicrositeBannerImageArgs {
  size: InputMaybe<Scalars['Int']['input']>;
}


/** Represents a microsite of products. */
export interface MicrositeLogoImageArgs {
  size: InputMaybe<Scalars['Int']['input']>;
}


/** Represents a microsite of products. */
export interface MicrositeProductsArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<ProductFilterInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  sortBy: InputMaybe<ProductOrder>;
}

/** Adds products to a microsite. */
export interface MicrositeAddProducts {
  __typename?: 'MicrositeAddProducts';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Microsite to which products will be added. */
  microsite: Maybe<Microsite>;
  micrositeErrors: Array<ProductError>;
}

/** Deletes microsites. */
export interface MicrositeBulkDelete {
  __typename?: 'MicrositeBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  micrositeErrors: Array<ProductError>;
}

/** Publish microsites. */
export interface MicrositeBulkPublish {
  __typename?: 'MicrositeBulkPublish';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  micrositeErrors: Array<ProductError>;
}

export interface MicrositeCountableConnection {
  __typename?: 'MicrositeCountableConnection';
  edges: Array<MicrositeCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface MicrositeCountableEdge {
  __typename?: 'MicrositeCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Microsite;
}

/** Creates a new microsite. */
export interface MicrositeCreate {
  __typename?: 'MicrositeCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  microsite: Maybe<Microsite>;
  micrositeErrors: Array<ProductError>;
}

export interface MicrositeCreateInput {
  /** Banner image file. */
  bannerImage?: InputMaybe<Scalars['Upload']['input']>;
  /** Alt text for an image. */
  bannerImageAlt?: InputMaybe<Scalars['String']['input']>;
  /** Description of the microsite (plaintext, deprecated for input). */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Description of the microsite (HTML). */
  descriptionHtml?: InputMaybe<Scalars['String']['input']>;
  /** Description of the microsite (JSON, deprecated for input). */
  descriptionJson?: InputMaybe<Scalars['JSONString']['input']>;
  /** Text to appear in footer of microsite. */
  footerText?: InputMaybe<Scalars['String']['input']>;
  /** Informs whether a microsite is published. */
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  /** Logo image file. */
  logoImage?: InputMaybe<Scalars['Upload']['input']>;
  /** Alt text for an image. */
  logoImageAlt?: InputMaybe<Scalars['String']['input']>;
  /** Name of the microsite. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** List of products to be added to the microsite. */
  products?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Publication date. ISO 8601 standard. */
  publicationDate?: InputMaybe<Scalars['Date']['input']>;
  /** Search engine optimization fields. */
  seo?: InputMaybe<SeoInput>;
  /** Slug of the microsite. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** Vendor that microsite belongs to */
  vendor: Scalars['ID']['input'];
}

/** Deletes a microsite. */
export interface MicrositeDelete {
  __typename?: 'MicrositeDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  microsite: Maybe<Microsite>;
  micrositeErrors: Array<ProductError>;
}

export interface MicrositeFilterInput {
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  metadata?: InputMaybe<MetadataFilterInput>;
  privateMetadata?: InputMaybe<MetadataFilterInput>;
  published?: InputMaybe<MicrositePublished>;
  search?: InputMaybe<Scalars['String']['input']>;
  vendorType?: InputMaybe<MicrositeVendorType>;
}

export interface MicrositeInput {
  /** Banner image file. */
  bannerImage?: InputMaybe<Scalars['Upload']['input']>;
  /** Alt text for an image. */
  bannerImageAlt?: InputMaybe<Scalars['String']['input']>;
  /** Description of the microsite (plaintext, deprecated for input). */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Description of the microsite (HTML). */
  descriptionHtml?: InputMaybe<Scalars['String']['input']>;
  /** Description of the microsite (JSON, deprecated for input). */
  descriptionJson?: InputMaybe<Scalars['JSONString']['input']>;
  /** Text to appear in footer of microsite. */
  footerText?: InputMaybe<Scalars['String']['input']>;
  /** Informs whether a microsite is published. */
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  /** Logo image file. */
  logoImage?: InputMaybe<Scalars['Upload']['input']>;
  /** Alt text for an image. */
  logoImageAlt?: InputMaybe<Scalars['String']['input']>;
  /** Name of the microsite. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Publication date. ISO 8601 standard. */
  publicationDate?: InputMaybe<Scalars['Date']['input']>;
  /** Search engine optimization fields. */
  seo?: InputMaybe<SeoInput>;
  /** Slug of the microsite. */
  slug?: InputMaybe<Scalars['String']['input']>;
}

export enum MicrositePublished {
  Hidden = 'HIDDEN',
  Published = 'PUBLISHED'
}

/** Remove products from a microsite. */
export interface MicrositeRemoveProducts {
  __typename?: 'MicrositeRemoveProducts';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Microsite from which products will be removed. */
  microsite: Maybe<Microsite>;
  micrositeErrors: Array<ProductError>;
}

/** Reorder the products of a microsite. */
export interface MicrositeReorderProducts {
  __typename?: 'MicrositeReorderProducts';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Microsite from which products are reordered. */
  microsite: Maybe<Microsite>;
  micrositeErrors: Array<ProductError>;
}

export enum MicrositeSortField {
  /** Sort microsites by availability. */
  Availability = 'AVAILABILITY',
  /** Sort microsites by name. */
  Name = 'NAME',
  /** Sort microsites by product count. */
  ProductCount = 'PRODUCT_COUNT',
  /** Sort microsites by publication date. */
  PublicationDate = 'PUBLICATION_DATE'
}

export interface MicrositeSortingInput {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort microsites by the selected field. */
  field: MicrositeSortField;
}

/** Updates a microsite. */
export interface MicrositeUpdate {
  __typename?: 'MicrositeUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  microsite: Maybe<Microsite>;
  micrositeErrors: Array<ProductError>;
}

export enum MicrositeVendorType {
  Affiliate = 'AFFILIATE',
  Seller = 'SELLER'
}

/** Represents amount of money in specific currency. */
export interface Money {
  __typename?: 'Money';
  /**
   * Amount of money.
   * @deprecated
   *         Floating point numbers cannot represent monetary amounts with precise accuracy.
   *         Use the baseAmount field instead. This field will be removed after 2024-06-01.
   *
   */
  amount: Scalars['Float']['output'];
  /**
   *
   *         The monetary amount in the smallest denomination of the currency.
   *
   *         For currencies that support 2 decimal places, e.g. USD, $12.45 would
   *         be returned in this field as 1245.
   *
   *         For currencies that support 3 decimal places, e.g. KWD, KD 5.124 would
   *         be returned in this field as 5124.
   *
   *         For currencies that do not support decimal places, e.g. JPY, ¥500 would
   *         be returned in this field as 500.
   *
   *         For a full list of 3 decimal and 0 decimal currencies, reference the
   *         Nautical guide.
   *
   */
  baseAmount: Scalars['BigInt']['output'];
  /** The 3-letter ISO currency code, such as USD or EUR. */
  currency: Scalars['String']['output'];
}

export interface MoneyInput {
  amount?: InputMaybe<Scalars['Float']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
}

/** Represents a range of amounts of money. */
export interface MoneyRange {
  __typename?: 'MoneyRange';
  /** Lower bound of a price range. */
  start: Maybe<Money>;
  /** Upper bound of a price range. */
  stop: Maybe<Money>;
}

export interface MoveProductInput {
  /** The ID of the product to move. */
  productId: Scalars['ID']['input'];
  /** The relative sorting position of the product (from -inf to +inf) starting from the first given product's actual position.1 moves the item one position forward, -1 moves the item one position backward, 0 leaves the item unchanged. */
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
}

export interface MultiSellerShippingMethod {
  __typename?: 'MultiSellerShippingMethod';
  /** @deprecated Use sellerId instead. This will be removed after 2024-12-31. */
  seller: Maybe<Scalars['Int']['output']>;
  sellerId: Scalars['ID']['output'];
  sellerName: Scalars['String']['output'];
  value: Array<ShippingMethod>;
}

export interface Mutation {
  __typename?: 'Mutation';
  /** Create a new address for the customer. */
  accountAddressCreate: Maybe<AccountAddressCreate>;
  /** Delete an address of the logged-in user. */
  accountAddressDelete: Maybe<AccountAddressDelete>;
  /** Sets a default address for the authenticated user. */
  accountAddressSetDefault: Maybe<AccountAddressSetDefault>;
  /** Updates an address of the logged-in user. */
  accountAddressUpdate: Maybe<AccountAddressUpdate>;
  /** Confirm user account with token sent by email during registration. */
  accountConfirm: Maybe<AccountConfirm>;
  /** Remove user account. */
  accountDelete: Maybe<AccountDelete>;
  /** Register a new user. */
  accountRegister: Maybe<AccountRegister>;
  /** Sends an email with the account removal link for the logged-in user. */
  accountRequestDeletion: Maybe<AccountRequestDeletion>;
  /** Updates the account of the logged-in user. */
  accountUpdate: Maybe<AccountUpdate>;
  /** Creates user address. */
  addressCreate: Maybe<AddressCreate>;
  /** Deletes an address. */
  addressDelete: Maybe<AddressDelete>;
  /** Sets a default address for the given user. */
  addressSetDefault: Maybe<AddressSetDefault>;
  /** Updates an address. */
  addressUpdate: Maybe<AddressUpdate>;
  /**
   * Create an affiliate avatar. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec
   * @deprecated This will be removed on Oct 26, 2024 when affiliate support is removed.
   */
  affiliateAvatarUpdate: Maybe<AffiliateAvatarUpdate>;
  /**
   * Deletes affiliates.
   * @deprecated This will be removed on Oct 26, 2024 when affiliate support is removed.
   */
  affiliateBulkDelete: Maybe<AffiliateBulkDelete>;
  /**
   * Activate or deactivate affiliate codes.
   * @deprecated This will be removed on Oct 26, 2024 when affiliate support is removed.
   */
  affiliateCodeBulkSetActive: Maybe<AffiliateCodeBulkSetActive>;
  /**
   * Updates an affiliate code channel
   * @deprecated This will be removed on Oct 26, 2024 when affiliate support is removed.
   */
  affiliateCodeChannelUpdate: Maybe<AffiliateCodeChannelUpdate>;
  /**
   * Creates a new affiliate code
   * @deprecated This will be removed on Oct 26, 2024 when affiliate support is removed.
   */
  affiliateCodeCreate: Maybe<AffiliateCodeCreate>;
  /**
   * Sets whether code is active
   * @deprecated This will be removed on Oct 26, 2024 when affiliate support is removed.
   */
  affiliateCodeSetActive: Maybe<AffiliateCodeSetActive>;
  /**
   * Increments affiliate code uses
   * @deprecated This will be removed on Oct 26, 2024 when affiliate support is removed.
   */
  affiliateCodeUse: Maybe<AffiliateCodeUse>;
  /**
   * Creates a new affiliate.
   * @deprecated This will be removed on Oct 26, 2024 when affiliate support is removed.
   */
  affiliateCreate: Maybe<AffiliateCreate>;
  /**
   * Deletes a affiliate.
   * @deprecated This will be removed on Oct 26, 2024 when affiliate support is removed.
   */
  affiliateDelete: Maybe<AffiliateDelete>;
  /**
   * Updates an existing affiliate.
   * @deprecated This will be removed on Oct 26, 2024 when affiliate support is removed.
   */
  affiliateUpdate: Maybe<AffiliateUpdate>;
  /** Deletes agreements. */
  agreementBulkDelete: Maybe<AgreementBulkDelete>;
  /** Publish agreements. */
  agreementBulkPublish: Maybe<AgreementBulkPublish>;
  /** Creates a new agreement commission. */
  agreementCommissionCreate: Maybe<AgreementCommissionCreate>;
  /** Deletes an agreement commission. */
  agreementCommissionDelete: Maybe<AgreementCommissionDelete>;
  /** Creates a new agreement. */
  agreementCreate: Maybe<AgreementCreate>;
  /** Deletes a agreement. */
  agreementDelete: Maybe<AgreementDelete>;
  /** Creates a new agreement fee. */
  agreementFeeCreate: Maybe<AgreementFeeCreate>;
  /** Deletes an agreement fee. */
  agreementFeeDelete: Maybe<AgreementFeeDelete>;
  /** Updates an existing agreement. */
  agreementUpdate: Maybe<AgreementUpdate>;
  /** Activate the app. */
  appActivate: Maybe<AppActivate>;
  /** Creates a new app. */
  appCreate: Maybe<AppCreate>;
  /** Deactivate the app. */
  appDeactivate: Maybe<AppDeactivate>;
  /** Deletes an app. */
  appDelete: Maybe<AppDelete>;
  /** Delete failed installation. */
  appDeleteFailedInstallation: Maybe<AppDeleteFailedInstallation>;
  /** Fetch and validate manifest. */
  appFetchManifest: Maybe<AppFetchManifest>;
  /** Install new app by using app manifest. */
  appInstall: Maybe<AppInstall>;
  /** Retry failed installation of new app. */
  appRetryInstall: Maybe<AppRetryInstall>;
  /** Creates a new token. */
  appTokenCreate: Maybe<AppTokenCreate>;
  /** Deletes an authentication token assigned to app. */
  appTokenDelete: Maybe<AppTokenDelete>;
  /** Verify provided app token. */
  appTokenVerify: Maybe<AppTokenVerify>;
  /** Updates an existing app. */
  appUpdate: Maybe<AppUpdate>;
  /** Assigns storefront's navigation menus. */
  assignNavigation: Maybe<AssignNavigation>;
  /** Assign attributes to a given product type. */
  attributeAssign: Maybe<AttributeAssign>;
  /** Deletes attributes. */
  attributeBulkDelete: Maybe<AttributeBulkDelete>;
  /** Creates an attribute. */
  attributeCreate: Maybe<AttributeCreate>;
  /** Deletes an attribute. */
  attributeDelete: Maybe<AttributeDelete>;
  /** Un-assign attributes from a given product type. */
  attributeUnassign: Maybe<AttributeUnassign>;
  /** Updates attribute. */
  attributeUpdate: Maybe<AttributeUpdate>;
  /** Creates attribute values for a given attribute. */
  attributeValueBulkCreate: Maybe<AttributeValueBulkCreate>;
  /** Deletes values of attributes. */
  attributeValueBulkDelete: Maybe<AttributeValueBulkDelete>;
  /** Creates a value for an attribute. */
  attributeValueCreate: Maybe<AttributeValueCreate>;
  /** Deletes a value of an attribute. */
  attributeValueDelete: Maybe<AttributeValueDelete>;
  /** Updates value of an attribute. */
  attributeValueUpdate: Maybe<AttributeValueUpdate>;
  /** Reorder the values of an attribute. */
  attributeValuesReorder: Maybe<AttributeValuesReorder>;
  /** Create authorization URL. */
  authUrlGenerate: Maybe<AuthUrlGenerate>;
  /** Accepts the specificed bid. */
  bidAccept: Maybe<BidAccept>;
  /** Creates a new Bid. */
  bidCreate: Maybe<BidCreate>;
  /** Rejects the specificed bid. */
  bidReject: Maybe<BidReject>;
  /**
   * Delete branding images.
   * @deprecated This will be removed on Oct 25, 2024
   */
  brandingImagesDelete: Maybe<BrandingImagesDelete>;
  /**
   * Update existing branding.
   * @deprecated This will be removed on Oct 25, 2024
   */
  brandingUpdate: Maybe<BrandingUpdate>;
  /** Add a business entity to price book. */
  businessEntityAddToPriceBook: Maybe<BusinessEntityAddToPriceBook>;
  /** Creates a new business entity. */
  businessEntityCreate: Maybe<BusinessEntityCreate>;
  /** Requests deletion of a business entity. */
  businessEntityDelete: Maybe<BusinessEntityDelete>;
  /** Removes a business entity from price book. */
  businessEntityRemoveFromPriceBook: Maybe<BusinessEntityRemoveFromPriceBook>;
  /** Updates a new business entity. */
  businessEntityUpdate: Maybe<BusinessEntityUpdate>;
  /**
   * Export catalog.
   * @deprecated This mutation is no longer supported. This will be removed on 2024-10-01.
   */
  catalogExport: Maybe<CatalogExport>;
  /** Import foreign catalog. */
  catalogImport: Maybe<CatalogImport>;
  /** Deletes categories. */
  categoryBulkDelete: Maybe<CategoryBulkDelete>;
  /** Creates a new category. */
  categoryCreate: Maybe<CategoryCreate>;
  /** Deletes a category. */
  categoryDelete: Maybe<CategoryDelete>;
  /** Updates a category. */
  categoryUpdate: Maybe<CategoryUpdate>;
  /** Creates a new channel */
  channelCreate: Maybe<ChannelCreate>;
  /** Updates a channel. */
  channelUpdate: Maybe<ChannelUpdate>;
  /** Adds purchase order number to a checkout. */
  checkoutAddPoNumbers: Maybe<CheckoutAddPoNumbers>;
  /** Adds a gift card or a voucher to a checkout. */
  checkoutAddPromoCode: Maybe<CheckoutAddPromoCode>;
  /** Update billing address in the existing checkout. */
  checkoutBillingAddressUpdate: Maybe<CheckoutBillingAddressUpdate>;
  /** Completes the checkout. As a result a new order is created and a payment charge is made. This action requires a successful payment before it can be performed. In case additional confirmation step as 3D secure is required confirmationNeeded flag will be set to True and no order created until payment is confirmed with second call of this mutation. */
  checkoutComplete: Maybe<CheckoutComplete>;
  /** Converts checkout to nautical quote order with the same id as checkout has when checkout is ready to be converted into quote order. This mutation should delete current checkout in case when order is created. */
  checkoutConvertToNauticalQuoteOrder: Maybe<CheckoutConvertToNauticalQuoteOrder>;
  /** Create a new checkout. */
  checkoutCreate: Maybe<CheckoutCreate>;
  /** Sets the customer as the owner of the checkout. */
  checkoutCustomerAttach: Maybe<CheckoutCustomerAttach>;
  /** Removes the user assigned as the owner of the checkout. */
  checkoutCustomerDetach: Maybe<CheckoutCustomerDetach>;
  /** Deletes a checkout. */
  checkoutDelete: Maybe<CheckoutDelete>;
  /** Updates email address in the existing checkout object. */
  checkoutEmailUpdate: Maybe<CheckoutEmailUpdate>;
  /** Create a checkout event. */
  checkoutEventTriggered: Maybe<CheckoutEventTriggered>;
  /** Add a note to a checkout line. */
  checkoutLineAddNote: Maybe<CheckoutLineAddNote>;
  /** Deletes a CheckoutLine. */
  checkoutLineDelete: Maybe<CheckoutLineDelete>;
  /** Adds a checkout line to the existing checkout. */
  checkoutLinesAdd: Maybe<CheckoutLinesAdd>;
  /** Updates checkout line in the existing checkout. */
  checkoutLinesUpdate: Maybe<CheckoutLinesUpdate>;
  /** Updates the checkout note on the provided checkout. */
  checkoutNoteUpdate: Maybe<CheckoutNoteUpdate>;
  /** Create a new payment for given checkout. */
  checkoutPaymentCreate: Maybe<CheckoutPaymentCreate>;
  /** Remove a purchase order from a checkout. */
  checkoutRemovePoNumbers: Maybe<CheckoutRemovePoNumbers>;
  /** Remove a gift card or a voucher from a checkout. */
  checkoutRemovePromoCode: Maybe<CheckoutRemovePromoCode>;
  /** Bulk clears the seller shipping methods of the checkout. */
  checkoutSellerShippingMethodsBulkUpdate: Maybe<CheckoutSellerShippingMethodsBulkUpdate>;
  /** Clears the seller shipping methods of the checkout. */
  checkoutSellerShippingMethodsClear: Maybe<CheckoutSellerShippingMethodsClear>;
  /** Updates the seller shipping methods of the checkout. */
  checkoutSellerShippingMethodsUpdate: Maybe<CheckoutSellerShippingMethodsUpdate>;
  /** Update currency in the existing checkout object. */
  checkoutSetTransactionCurrency: Maybe<CheckoutSetTransactionCurrency>;
  /** Update shipping address in the existing checkout. */
  checkoutShippingAddressUpdate: Maybe<CheckoutShippingAddressUpdate>;
  /** Create a new checkout theme. */
  checkoutThemeCreate: Maybe<CheckoutThemeCreate>;
  /** Update a checkout theme. */
  checkoutThemeUpdate: Maybe<CheckoutThemeUpdate>;
  /** Adds products to a collection. */
  collectionAddProducts: Maybe<CollectionAddProducts>;
  /** Adds variants to a collection. */
  collectionAddVariants: Maybe<CollectionAddVariants>;
  /** Deletes collections. */
  collectionBulkDelete: Maybe<CollectionBulkDelete>;
  /** Publish collections. */
  collectionBulkPublish: Maybe<CollectionBulkPublish>;
  /** Creates a new collection. */
  collectionCreate: Maybe<CollectionCreate>;
  /** Deletes a collection. */
  collectionDelete: Maybe<CollectionDelete>;
  /** Remove products from a collection. */
  collectionRemoveProducts: Maybe<CollectionRemoveProducts>;
  /** Remove variants from a collection. */
  collectionRemoveVariants: Maybe<CollectionRemoveVariants>;
  /** Reorder the products of a collection. */
  collectionReorderProducts: Maybe<CollectionReorderProducts>;
  /** Updates a collection. */
  collectionUpdate: Maybe<CollectionUpdate>;
  /** Creates a new content object. */
  contentCreate: Maybe<ContentCreate>;
  /** Deletes a voucher. */
  contentDelete: Maybe<ContentDelete>;
  /** Discards the latest changes of a content object. */
  contentDiscard: Maybe<ContentDiscard>;
  /** Publishes a content object. */
  contentPublish: Maybe<ContentPublish>;
  /** Auto saves a content object. */
  contentSave: Maybe<ContentSave>;
  /**
   * Create core data.
   * @deprecated This will be removed on Oct 25, 2024
   */
  coreDataCreate: Maybe<CoreDataCreate>;
  /**
   * Update existing core data instance, return ok = True and coredata = None if no matching core data instance found.
   * @deprecated This will be removed on Oct 25, 2024
   */
  coreDataUpdate: Maybe<CoreDataUpdate>;
  /** Creates a new Nautical customer token. */
  createCustomerToken: Maybe<CreateCustomerToken>;
  /** Assign attributes to a given custom field template. */
  customAttributeAssign: Maybe<CustomAttributeAssign>;
  /** Un-assign attributes from a given custom field template. */
  customAttributeUnassign: Maybe<CustomAttributeUnassign>;
  /** Deletes customers. */
  customerBulkDelete: Maybe<CustomerBulkDelete>;
  /** Creates a new customer. */
  customerCreate: Maybe<CustomerCreate>;
  /** Deletes a customer. */
  customerDelete: Maybe<CustomerDelete>;
  /** Updates an existing customer. */
  customerUpdate: Maybe<CustomerUpdate>;
  /** Export customer list. */
  customersExport: Maybe<CustomersExport>;
  /**
   * Updates dashboard configuration.
   * @deprecated This mutation is deprecated and will be removed on 2024-10-01.
   */
  dashboardConfigurationUpdate: Maybe<DashboardConfigurationUpdate>;
  /** Gets and sets Explo dashboard embedding token in cookies */
  dashboardEmbeddingToken: Maybe<DashboardEmbeddingToken>;
  /**
   * Create designer data.
   * @deprecated This will be removed on Oct 25, 2024
   */
  designerDataCreate: Maybe<DesignerDataCreate>;
  /**
   * Update existing designer data.
   * @deprecated This will be removed on Oct 25, 2024
   */
  designerDataUpdate: Maybe<DesignerDataUpdate>;
  /** Create new digital content. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec */
  digitalContentCreate: Maybe<DigitalContentCreate>;
  /** Remove digital content assigned to given variant. */
  digitalContentDelete: Maybe<DigitalContentDelete>;
  /** Update digital content. */
  digitalContentUpdate: Maybe<DigitalContentUpdate>;
  /** Generate new URL to digital content. */
  digitalContentUrlCreate: Maybe<DigitalContentUrlCreate>;
  /** Add or attach a document to any allowed entity (note: consider to use DocumentAttach for 'attach' action). Must only receive one of either file or document_id in input. */
  documentAdd: Maybe<DocumentAdd>;
  /** Attach a document to any allowed entities. */
  documentAttach: Maybe<DocumentAttach>;
  /** Delete or detach a document. Must only receive one of either target_ids or delete = True in input. */
  documentRemove: Maybe<DocumentRemove>;
  /** Updates an existing document. */
  documentUpdate: Maybe<DocumentUpdate>;
  /** Deletes draft or quote orders. */
  draftOrderBulkDelete: Maybe<DraftOrderBulkDelete>;
  /** Completes creating an order. */
  draftOrderComplete: Maybe<DraftOrderComplete>;
  /** Creates a new draft order. */
  draftOrderCreate: Maybe<DraftOrderCreate>;
  /** Deletes a draft order. */
  draftOrderDelete: Maybe<DraftOrderDelete>;
  /** Deletes an order line from a draft or quote order. */
  draftOrderLineDelete: Maybe<DraftOrderLineDelete>;
  /** Overrides unit net price of an order line of a draft, quote, or offer order. */
  draftOrderLinePriceOverride: Maybe<DraftOrderLinePriceOverride>;
  /** Updates an order line of a draft, quote or offer order. */
  draftOrderLineUpdate: Maybe<DraftOrderLineUpdate>;
  /** Deletes order lines. */
  draftOrderLinesBulkDelete: Maybe<DraftOrderLinesBulkDelete>;
  /** Create order lines for draft or quote orders. */
  draftOrderLinesCreate: Maybe<DraftOrderLinesCreate>;
  /** Update currency in the existing draft order object. */
  draftOrderSetTransactionCurrency: Maybe<DraftOrderSetTransactionCurrency>;
  /** Updates a draft order. */
  draftOrderUpdate: Maybe<DraftOrderUpdate>;
  /** Confirm the email change of the logged-in user. */
  emailChangeConfirm: Maybe<EmailChangeConfirm>;
  /** Request email change for the current user. */
  emailChangeRequest: Maybe<EmailChangeRequest>;
  /** Refreshes currency exchange rates. Must have a currency exchange app enabled in the app marketplace. */
  exchangeRatesRefresh: Maybe<ExchangeRatesRefresh>;
  /** Creates a new feature for either a product or a variant. */
  featureCreate: Maybe<FeatureCreate>;
  /** Deletes a feature. */
  featureDelete: Maybe<FeatureDelete>;
  /** Updates a feature. */
  featureUpdate: Maybe<FeatureUpdate>;
  /** Processes return requests by grabbing the return status and  */
  fulfillmentBulkReturn: Maybe<FulfillmentBulkReturn>;
  /** Adds products to a grouped product. */
  groupedProductAddProducts: Maybe<GroupedProductAddProducts>;
  /** Remove products from a grouped product. */
  groupedProductRemoveProducts: Maybe<GroupedProductRemoveProducts>;
  /** Updates homepage collection of the shop. */
  homepageCollectionUpdate: Maybe<HomepageCollectionUpdate>;
  /** Unassign the specified attribute from an instance. */
  instanceAttributeUnassign: Maybe<InstanceAttributeUnassign>;
  /** Cancels an invoice. */
  invoiceCancel: Maybe<InvoiceCancel>;
  /** Creates a ready to send invoice. */
  invoiceCreate: Maybe<InvoiceCreate>;
  /** Deletes an invoice. */
  invoiceDelete: Maybe<InvoiceDelete>;
  /** Finalizes an invoice. */
  invoiceFinalize: Maybe<InvoiceFinalize>;
  /** Refreshes an invoice. */
  invoiceRefresh: Maybe<InvoiceRefresh>;
  /** Request an invoice for the order using plugin. */
  invoiceRequest: Maybe<InvoiceRequest>;
  /** Requests deletion of an invoice. */
  invoiceRequestDelete: Maybe<InvoiceRequestDelete>;
  /** Send an invoice notification to the customer. */
  invoiceSendNotification: Maybe<InvoiceSendNotification>;
  /** Updates an invoice. */
  invoiceUpdate: Maybe<InvoiceUpdate>;
  /** Backfill all orders and refunds that are not connected to a VendorPayout into the ledger system. The actual backfill will run asynchronously in a task. */
  journalEntryBackfill: Maybe<JournalEntryBackfill>;
  /** Correct a previous journal entry by supplying  */
  journalEntryCorrect: Maybe<JournalEntryCorrect>;
  /**
   * Geocode locations
   * @deprecated Use the locationSearch QUERY instead. This field will be removed after 2043-04-16.
   */
  locationGeocode: Maybe<LocationGeocode>;
  /**
   * Search locations
   * @deprecated Use the locationSearch QUERY instead. This field will be removed after 2024-04-16.
   */
  locationSearch: Maybe<LocationSearch>;
  /** Updates marketplace configuration. */
  marketplaceConfigurationUpdate: Maybe<MarketplaceConfigurationUpdate>;
  /** Deletes medias. */
  mediaBulkDelete: Maybe<MediaBulkDelete>;
  /** Creates a new media object. */
  mediaCreate: Maybe<MediaCreate>;
  /** Update a media object. */
  mediaUpdate: Maybe<MediaUpdate>;
  /** Deletes menus. */
  menuBulkDelete: Maybe<MenuBulkDelete>;
  /** Creates a new Menu. */
  menuCreate: Maybe<MenuCreate>;
  /** Deletes a menu. */
  menuDelete: Maybe<MenuDelete>;
  /** Deletes menu items. */
  menuItemBulkDelete: Maybe<MenuItemBulkDelete>;
  /** Creates a new menu item. */
  menuItemCreate: Maybe<MenuItemCreate>;
  /** Deletes a menu item. */
  menuItemDelete: Maybe<MenuItemDelete>;
  /** Moves items of menus. */
  menuItemMove: Maybe<MenuItemMove>;
  /** Updates a menu item. */
  menuItemUpdate: Maybe<MenuItemUpdate>;
  /** Updates a menu. */
  menuUpdate: Maybe<MenuUpdate>;
  /** Delete metadata of an object. */
  metadataDelete: Maybe<MetadataDelete>;
  /** Updates metadata of an object. */
  metadataUpdate: Maybe<MetadataUpdate>;
  /** Adds products to a microsite. */
  micrositeAddProducts: Maybe<MicrositeAddProducts>;
  /** Deletes microsites. */
  micrositeBulkDelete: Maybe<MicrositeBulkDelete>;
  /** Publish microsites. */
  micrositeBulkPublish: Maybe<MicrositeBulkPublish>;
  /** Creates a new microsite. */
  micrositeCreate: Maybe<MicrositeCreate>;
  /** Deletes a microsite. */
  micrositeDelete: Maybe<MicrositeDelete>;
  /** Remove products from a microsite. */
  micrositeRemoveProducts: Maybe<MicrositeRemoveProducts>;
  /** Reorder the products of a microsite. */
  micrositeReorderProducts: Maybe<MicrositeReorderProducts>;
  /** Updates a microsite. */
  micrositeUpdate: Maybe<MicrositeUpdate>;
  /** Updates nautical configuration. */
  nauticalConfigurationUpdate: Maybe<NauticalConfigurationUpdate>;
  /** Deletes draft or quote orders. */
  nauticalDraftOrderBulkDelete: Maybe<NauticalDraftOrderBulkDelete>;
  /** Completes creating an order. */
  nauticalDraftOrderComplete: Maybe<NauticalDraftOrderComplete>;
  /** Creates a new Nautical draft order. */
  nauticalDraftOrderCreate: Maybe<NauticalDraftOrderCreate>;
  /** Deletes a draft order. */
  nauticalDraftOrderDelete: Maybe<NauticalDraftOrderDelete>;
  /** Deletes an order line from a draft or quote order. */
  nauticalDraftOrderLineDelete: Maybe<NauticalDraftOrderLineDelete>;
  /** Overrides unit net price of a marketplace order line of a draft, quote, or offer order. */
  nauticalDraftOrderLinePriceOverride: Maybe<NauticalDraftOrderLinePriceOverride>;
  /** Updates an order line of a draft order. */
  nauticalDraftOrderLineUpdate: Maybe<NauticalDraftOrderLineUpdate>;
  /** Deletes order lines. */
  nauticalDraftOrderLinesBulkDelete: Maybe<NauticalDraftOrderLinesBulkDelete>;
  /** Create order lines for a draft or quote order. */
  nauticalDraftOrderLinesCreate: Maybe<NauticalDraftOrderLinesCreate>;
  /** Update currency in the existing nautical draft order object, related nautical order lines, child order and their lines. */
  nauticalDraftOrderSetTransactionCurrency: Maybe<NauticalDraftOrderSetTransactionCurrency>;
  /** Updates a draft or quote nautical order. */
  nauticalDraftOrderUpdate: Maybe<NauticalDraftOrderUpdate>;
  /** Creates a new Nautical historical order. */
  nauticalHistoricalOrderCreate: Maybe<NauticalHistoricalOrderCreate>;
  /** Adds note to the order. */
  nauticalOrderAddNote: Maybe<NauticalOrderAddNote>;
  /** Cancel an order. */
  nauticalOrderCancel: Maybe<NauticalOrderCancel>;
  /** Capture a nautical order. */
  nauticalOrderCapture: Maybe<NauticalOrderCapture>;
  /** Updates a marketplace order channel. */
  nauticalOrderChannelUpdate: Maybe<NauticalOrderChannelUpdate>;
  /** Add a note to a nautical order line. */
  nauticalOrderLineAddNote: Maybe<NauticalOrderLineAddNote>;
  /** Cancels nautical order lines, associated order lines, and removes allocations for that order line. */
  nauticalOrderLineBulkCancel: Maybe<NauticalOrderLineBulkCancel>;
  /** Uploads lines for a draft order via CSV. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec */
  nauticalOrderLinesCsvUpload: Maybe<NauticalOrderLinesCsvUpload>;
  /** Mark order as manually paid. */
  nauticalOrderMarkAsPaid: Maybe<NauticalOrderMarkAsPaid>;
  /** Create and process a new payment for given nautical order. Be aware that in nautical orders flow, payment will be handled as part of this mutation; while in checkout flow, it will be processed as part of CheckoutComplete mutation. */
  nauticalOrderPaymentCreate: Maybe<NauticalOrderPaymentCreate>;
  /** Attempts to force a refresh of the existing taxes on a non-placed nautical order. */
  nauticalOrderRefreshTaxes: Maybe<NauticalOrderRefreshTaxes>;
  /** Adds return notification note to the order. */
  nauticalOrderReturnFromStorefrontNotification: Maybe<NauticalOrderReturnFromStorefrontNotification>;
  /** Adds return notification note to the order. */
  nauticalOrderReturnNotification: Maybe<NauticalOrderReturnNotification>;
  /** Updates an order. */
  nauticalOrderUpdate: Maybe<NauticalOrderUpdate>;
  /** Apply an existing voucher code to a nautical order to give a discount. */
  nauticalOrderUpdateApplyVoucherCode: Maybe<NauticalOrderUpdateApplyVoucherCode>;
  /** Remove a discount from a nautical order. */
  nauticalOrderUpdateDeleteDiscount: Maybe<NauticalOrderUpdateDeleteDiscount>;
  /** Updates a shipping method of the order. */
  nauticalOrderUpdateShipping: Maybe<NauticalOrderUpdateShipping>;
  /** Void a nautical order. */
  nauticalOrderVoid: Maybe<NauticalOrderVoid>;
  /** Cancel a nautical quote order. */
  nauticalQuoteOrderCancel: Maybe<NauticalQuoteOrderCancel>;
  /** Sends a quote order to a customer. */
  nauticalQuoteOrderSendToCustomer: Maybe<NauticalQuoteOrderSendToCustomer>;
  /** Adds note to the order. */
  orderAddNote: Maybe<OrderAddNote>;
  /** Cancels orders. */
  orderBulkCancel: Maybe<OrderBulkCancel>;
  /** Cancel an order. */
  orderCancel: Maybe<OrderCancel>;
  /** Updates an order channel */
  orderChannelUpdate: Maybe<OrderChannelUpdate>;
  /** Decline (permanently) part of an order. The buyer will not be charged for the missing stock. Use if stock in a warehouse is damaged, expired, or unavailable.  */
  orderDeclineFulfillment: Maybe<OrderDeclineFulfillment>;
  /** Creates a new order fee. */
  orderFeeCreate: Maybe<OrderFeeCreate>;
  /** Deletes a order fee. */
  orderFeeDelete: Maybe<OrderFeeDelete>;
  /** Creates new fulfillments for an order. */
  orderFulfill: Maybe<OrderFulfill>;
  /** Cancels existing fulfillment and optionally restocks items. */
  orderFulfillmentCancel: Maybe<FulfillmentCancel>;
  /** Returns selected quantity from fulfillment lines and restocks items. */
  orderFulfillmentReturn: Maybe<FulfillmentReturn>;
  /** Updated return status of existing fulfillment and optionally restocks items. */
  orderFulfillmentUpdateReturnStatus: Maybe<FulfillmentReturnStatusBulkUpdate>;
  /** Updates a fulfillment for an order. */
  orderFulfillmentUpdateTracking: Maybe<FulfillmentUpdateTracking>;
  /** Add a note to an order line. */
  orderLineAddNote: Maybe<OrderLineAddNote>;
  /** Uploads lines for a draft order via CSV. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec */
  orderLinesCsvUpload: Maybe<OrderLinesCsvUpload>;
  /** Marks a fully fulfilled Order as delivered. */
  orderMarkAsDelivered: Maybe<OrderMarkAsDelivered>;
  /** Converts a seller or marketplace offer order to a nautical quote order. */
  orderOfferConvertToNauticalQuoteOrder: Maybe<OrderOfferConvertToNauticalQuoteOrder>;
  /** Modifies the payout status of an order */
  orderPayoutStatusUpdate: Maybe<OrderPayoutStatusUpdate>;
  /** Adds return notification note to the order. */
  orderReturnNotification: Maybe<OrderReturnNotification>;
  /** Updates an order. */
  orderUpdate: Maybe<OrderUpdate>;
  /** Updates a shipping method of the order. */
  orderUpdateShipping: Maybe<OrderUpdateShipping>;
  /** Deletes pages. */
  pageBulkDelete: Maybe<PageBulkDelete>;
  /** Publish pages. */
  pageBulkPublish: Maybe<PageBulkPublish>;
  /** Creates a new page. */
  pageCreate: Maybe<PageCreate>;
  /** Deletes a page. */
  pageDelete: Maybe<PageDelete>;
  /** Updates an existing page. */
  pageUpdate: Maybe<PageUpdate>;
  /** Change the password of the logged in user. */
  passwordChange: Maybe<PasswordChange>;
  /** Sends an email with the account password modification link. */
  passwordRequestReset: Maybe<PasswordRequestReset>;
  /** Sets the user's password from the token sent by email using the RequestPasswordReset mutation. */
  passwordSet: Maybe<PasswordSet>;
  /** Captures the authorized payment amount. */
  paymentCapture: Maybe<PaymentCapture>;
  /** Voids the authorized payment. */
  paymentVoid: Maybe<PaymentVoid>;
  /** Archive payouts. */
  payoutBulkArchive: Maybe<PayoutBulkArchive>;
  /** Creates a new payout. */
  payoutCreate: Maybe<PayoutCreate>;
  /** Modifies the dates of a payout */
  payoutDatesUpdate: Maybe<PayoutDatesUpdate>;
  /** Deletes a draft payout */
  payoutDelete: Maybe<PayoutDelete>;
  /** Modifies the status of a payout */
  payoutStatusUpdate: Maybe<PayoutStatusUpdate>;
  /** Update vendor payouts connected to the given payout with adjustments and penalties */
  payoutUpdate: Maybe<PayoutUpdate>;
  /** Create new permission group. */
  permissionGroupCreate: Maybe<PermissionGroupCreate>;
  /** Delete permission group. */
  permissionGroupDelete: Maybe<PermissionGroupDelete>;
  /** Update permission group. */
  permissionGroupUpdate: Maybe<PermissionGroupUpdate>;
  /** Delete plugin flow. */
  pluginFlowDelete: Maybe<PluginFlowDelete>;
  /** Update plugin flow. */
  pluginFlowUpdate: Maybe<PluginFlowUpdate>;
  /** Update plugin configuration. */
  pluginUpdate: Maybe<PluginUpdate>;
  /** Deletes price books. */
  priceBookBulkDelete: Maybe<PriceBookBulkDelete>;
  /** Creates a new price book. */
  priceBookCreate: Maybe<PriceBookCreate>;
  /** Deletes a price book. */
  priceBookDelete: Maybe<PriceBookDelete>;
  /** Deletes price book's products. */
  priceBookProductBulkDelete: Maybe<PriceBookProductBulkDelete>;
  /** Add a product to price book. */
  priceBookProductCreate: Maybe<PriceBookProductCreate>;
  /** Deletes a price book product. */
  priceBookProductDelete: Maybe<PriceBookProductDelete>;
  /** Deletes price book's product types. */
  priceBookProductTypeBulkDelete: Maybe<PriceBookProductTypeBulkDelete>;
  /** Add a product type to price book. */
  priceBookProductTypeCreate: Maybe<PriceBookProductTypeCreate>;
  /** Deletes a price book product type. */
  priceBookProductTypeDelete: Maybe<PriceBookProductTypeDelete>;
  /** Updates an existing price book product type. */
  priceBookProductTypeUpdate: Maybe<PriceBookProductTypeUpdate>;
  /** Updates an existing price book product. */
  priceBookProductUpdate: Maybe<PriceBookProductUpdate>;
  /** Updates an existing price book. */
  priceBookUpdate: Maybe<PriceBookUpdate>;
  /** Deletes price book's variants. */
  priceBookVariantBulkDelete: Maybe<PriceBookVariantBulkDelete>;
  /** Add a variant to price book. */
  priceBookVariantCreate: Maybe<PriceBookVariantCreate>;
  /** Deletes a price book variant. */
  priceBookVariantDelete: Maybe<PriceBookVariantDelete>;
  /** Updates an existing price book variant. */
  priceBookVariantUpdate: Maybe<PriceBookVariantUpdate>;
  /** Delete object's private metadata. */
  privateMetadataDelete: Maybe<PrivateMetadataDelete>;
  /** Updates private metadata of an object. */
  privateMetadataUpdate: Maybe<PrivateMetadataUpdate>;
  /** Update product category for multiple products */
  productBulkCategoryUpdate: Maybe<ProductBulkCategoryUpdate>;
  /** Deletes products. */
  productBulkDelete: Maybe<ProductBulkDelete>;
  /** Publish products. */
  productBulkPublish: Maybe<ProductBulkPublish>;
  /** Creates a new product. */
  productCreate: Maybe<ProductCreate>;
  /** Deletes a product. */
  productDelete: Maybe<ProductDelete>;
  /** Deletes product images. */
  productImageBulkDelete: Maybe<ProductImageBulkDelete>;
  /** Create a product image. If URL is present, image will be taken from provided URL. If no URL provided, then this mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec */
  productImageCreate: Maybe<ProductImageCreate>;
  /** Deletes a product image. */
  productImageDelete: Maybe<ProductImageDelete>;
  /** Changes ordering of the product image. */
  productImageReorder: Maybe<ProductImageReorder>;
  /** Updates a product image. */
  productImageUpdate: Maybe<ProductImageUpdate>;
  /** Create a new location for the product. */
  productLocationCreate: Maybe<ProductLocationCreate>;
  /** Delete a location for a product. */
  productLocationDelete: Maybe<ProductLocationDelete>;
  /** Updates a location for a product. */
  productLocationUpdate: Maybe<ProductLocationUpdate>;
  /** Reorder the variants of a product. Mutation updates updated_at on product and triggers PRODUCT_UPDATED webhook. */
  productReorderVariants: Maybe<ProductReorderVariants>;
  /**
   * Submit a rating and review for a product.
   * @deprecated This will be removed on 2024-10-01.
   */
  productReviewSubmit: Maybe<ProductReviewSubmit>;
  /** Set product availability for purchase date. */
  productSetAvailabilityForPurchase: Maybe<ProductSetAvailabilityForPurchase>;
  /** Sets a location type. */
  productSetLocationType: Maybe<ProductSetLocationType>;
  /** Deletes product types. */
  productTypeBulkDelete: Maybe<ProductTypeBulkDelete>;
  /** Creates a new product type. */
  productTypeCreate: Maybe<ProductTypeCreate>;
  /** Deletes a product type. */
  productTypeDelete: Maybe<ProductTypeDelete>;
  /** Creates a new product or variant feature on a product type. */
  productTypeFeatureCreate: Maybe<ProductTypeFeatureCreate>;
  /** Deletes a product or variant feature on a product type. */
  productTypeFeatureDelete: Maybe<ProductTypeFeatureDelete>;
  /** Updates a product or variant feature on a product type. */
  productTypeFeatureUpdate: Maybe<ProductTypeFeatureUpdate>;
  /** Reorder the attributes of a product type. */
  productTypeReorderAttributes: Maybe<ProductTypeReorderAttributes>;
  /** Updates an existing product type. */
  productTypeUpdate: Maybe<ProductTypeUpdate>;
  /** Updates an existing product. */
  productUpdate: Maybe<ProductUpdate>;
  /** Creates product variants for a given product. */
  productVariantBulkCreate: Maybe<ProductVariantBulkCreate>;
  /** Deletes product variants. */
  productVariantBulkDelete: Maybe<ProductVariantBulkDelete>;
  /** Creates a new variant for a product. */
  productVariantCreate: Maybe<ProductVariantCreate>;
  /** Deletes a product variant. */
  productVariantDelete: Maybe<ProductVariantDelete>;
  /** Assign an image to a product variant. */
  productVariantImageAssign: Maybe<ProductVariantImageAssign>;
  /** Unassign an image from a product variant. */
  productVariantImageUnassign: Maybe<ProductVariantImageUnassign>;
  /** Set default variant for a product. Mutation triggers PRODUCT_UPDATED webhook. */
  productVariantSetDefault: Maybe<ProductVariantSetDefault>;
  /** Creates stocks for product variant. */
  productVariantStocksCreate: Maybe<ProductVariantStocksCreate>;
  /** Delete stocks from product variant. */
  productVariantStocksDelete: Maybe<ProductVariantStocksDelete>;
  /** Update stocks for product variant. */
  productVariantStocksUpdate: Maybe<ProductVariantStocksUpdate>;
  /** Updates an existing variant for product. */
  productVariantUpdate: Maybe<ProductVariantUpdate>;
  /** Export products to csv file. */
  productsExport: Maybe<ProductsExport>;
  /** Import products with csv file. */
  productsImport: Maybe<ProductsImport>;
  /** Creates a new refund. */
  refundCreate: Maybe<RefundCreate>;
  /** Adds a refund lines to the existing refund. */
  refundLinesAdd: Maybe<RefundLinesAdd>;
  /** Deletes all specified refund lines. */
  refundLinesDelete: Maybe<RefundLineBulkDelete>;
  /** Update lines in a refund. */
  refundLinesUpdate: Maybe<RefundLinesUpdate>;
  /** Add manual payments to a refund */
  refundPaymentsAdd: Maybe<RefundPaymentsAdd>;
  /** Deletes specified refund payments. The refund must be in the PROCESSING state. */
  refundPaymentsDelete: Maybe<RefundPaymentsDelete>;
  /** Update refund payments. */
  refundPaymentsUpdate: Maybe<RefundPaymentsUpdate>;
  /** Updates a refund. */
  refundUpdate: Maybe<RefundUpdate>;
  /** Updates the status of all specified refunds. All refunds must be able to make the state transition for any of them to update */
  refundsChangeStatus: Maybe<RefundsChangeStatus>;
  /** Deletes all specified refunds. The refunds must be in the REQUESTED state to be able to be deleted */
  refundsDelete: Maybe<RefundBulkDelete>;
  /** Deletes sales. */
  saleBulkDelete: Maybe<SaleBulkDelete>;
  /** Adds products, variants, categories, or collections to a sale. */
  saleCataloguesAdd: Maybe<SaleAddCatalogues>;
  /** Removes products, variants, categories, or collections from a sale. */
  saleCataloguesRemove: Maybe<SaleRemoveCatalogues>;
  /** Creates a new sale. */
  saleCreate: Maybe<SaleCreate>;
  /** Deletes a sale. */
  saleDelete: Maybe<SaleDelete>;
  /** Updates a sale. */
  saleUpdate: Maybe<SaleUpdate>;
  /** Creates seller address. */
  sellerAddressCreate: Maybe<SellerAddressCreate>;
  /** Deletes an address. */
  sellerAddressDelete: Maybe<SellerAddressDelete>;
  /** Sets a default address for the given user. */
  sellerAddressSetDefault: Maybe<SellerAddressSetDefault>;
  /** Updates an address. */
  sellerAddressUpdate: Maybe<SellerAddressUpdate>;
  /** Acknowledge the seller agreement for seller id */
  sellerAgreementAcknowledge: Maybe<SellerAgreementAcknowledge>;
  /** Create seller data. */
  sellerDataCreate: Maybe<SellerDataCreate>;
  /** Updates a sellers status and override information */
  sellerDataUpdate: Maybe<SellerDataUpdate>;
  /** Create a seller logo. Only for MP Admin, MP Staff, or the seller. This mutation must be sent as a 'multipart' request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec */
  sellerLogoUpdate: Maybe<SellerLogoUpdate>;
  /** Create seller note. */
  sellerNoteCreate: Maybe<SellerNoteCreate>;
  /** Marks manually one checklist item as completed. */
  sellerOnboardingChecklistComplete: Maybe<SellerOnboardingChecklistComplete>;
  /** Create new seller onboarding settings. */
  sellerOnboardingSettingsCreate: Maybe<SellerOnboardingSettingsCreate>;
  /** Update seller onboarding settings. */
  sellerOnboardingSettingsUpdate: Maybe<SellerOnboardingSettingsUpdate>;
  /** Removes the user owner from a seller (including user's membership in the seller) */
  sellerOwnerDelete: Maybe<SellerOwnerDelete>;
  /** Updates settings for the given seller. */
  sellerSettingsUpdate: Maybe<SellerSettingsUpdate>;
  /** Create seller shell. */
  sellerShellCreate: Maybe<SellerShellCreate>;
  /** Allows [re-]assign a user to a seller */
  sellerUserMappingCreate: Maybe<SellerUserMappingCreate>;
  /** Create new Seller and a new staff user and assign created user as Seller owner. */
  sellerWithOwnerCreate: Maybe<SellerWithOwnerCreate>;
  /** Deletes shipping prices. */
  shippingPriceBulkDelete: Maybe<ShippingPriceBulkDelete>;
  /** Creates a new shipping price. */
  shippingPriceCreate: Maybe<ShippingPriceCreate>;
  /** Deletes a shipping price. */
  shippingPriceDelete: Maybe<ShippingPriceDelete>;
  /** Updates a new shipping price. */
  shippingPriceUpdate: Maybe<ShippingPriceUpdate>;
  /** Deletes shipping zones. */
  shippingZoneBulkDelete: Maybe<ShippingZoneBulkDelete>;
  /** Creates a new shipping zone. */
  shippingZoneCreate: Maybe<ShippingZoneCreate>;
  /** Deletes a shipping zone. */
  shippingZoneDelete: Maybe<ShippingZoneDelete>;
  /** Updates a new shipping zone. */
  shippingZoneUpdate: Maybe<ShippingZoneUpdate>;
  /** Update the shop's address. If the `null` value is passed, the currently selected address will be deleted. */
  shopAddressUpdate: Maybe<ShopAddressUpdate>;
  /** Updates site domain of the shop. */
  shopDomainUpdate: Maybe<ShopDomainUpdate>;
  /** Fetch tax rates. */
  shopFetchTaxRates: Maybe<ShopFetchTaxRates>;
  /** Updates shop settings. */
  shopSettingsUpdate: Maybe<ShopSettingsUpdate>;
  /** Deletes staff users. */
  staffBulkDelete: Maybe<StaffBulkDelete>;
  /** Creates a new staff user. */
  staffCreate: Maybe<StaffCreate>;
  /** Deletes a staff user. */
  staffDelete: Maybe<StaffDelete>;
  /** Updates an existing staff user. */
  staffUpdate: Maybe<StaffUpdate>;
  /** Create a new storefront theme. */
  storefrontThemeCreate: Maybe<StorefrontThemeCreate>;
  /** Update a storefront theme. */
  storefrontThemeUpdate: Maybe<StorefrontThemeUpdate>;
  /** Create JWT token. */
  tokenCreate: Maybe<CreateToken>;
  /** Create JWT token (Also creates a user if not previously signed up) */
  tokenCreateSso: Maybe<TokenCreateSso>;
  /** Refresh JWT token. Mutation tries to take refreshToken from the input.If it fails it will try to take refreshToken from the http-only cookie -refreshToken. csrfToken is required when refreshToken is provided as a cookie. */
  tokenRefresh: Maybe<RefreshToken>;
  /** Verify JWT token. */
  tokenVerify: Maybe<VerifyToken>;
  /** Deactivate all JWT tokens of the currently authenticated user. */
  tokensDeactivateAll: Maybe<DeactivateAllUserTokens>;
  /** Update whether process_pending_webhook_transactions periodic django celery beat task is enabled */
  updatePeriodicTaskEnabled: Maybe<PeriodicTaskEnabledUpdate>;
  /** Add a user to price book. */
  userAddToPriceBook: Maybe<UserAddToPriceBook>;
  /** Deletes a user avatar. Only for staff members. */
  userAvatarDelete: Maybe<UserAvatarDelete>;
  /** Create a user avatar. Only for staff members. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec */
  userAvatarUpdate: Maybe<UserAvatarUpdate>;
  /** Activate or deactivate users. */
  userBulkSetActive: Maybe<UserBulkSetActive>;
  /** Removes a user from price book. */
  userRemoveFromPriceBook: Maybe<UserRemoveFromPriceBook>;
  /** Adds return notification note to the order. */
  vendorOrderReturnFromStorefrontNotification: Maybe<VendorOrderReturnFromStorefrontNotification>;
  /** Creates a VendorPayout for the specified seller in the payout if it does not already exist. */
  vendorPayoutCreate: Maybe<VendorPayoutCreate>;
  /** Adds note to the vendor payout. */
  vendorPayoutNoteAdd: Maybe<VendorPayoutNoteAdd>;
  /** Edit a message in even from the vendor payout. */
  vendorPayoutNoteUpdate: Maybe<VendorPayoutNoteUpdate>;
  /** Retrieves an onboarding link for the given vendor from the given gateway if available. */
  vendorPayoutOnboardingLinkRequest: Maybe<VendorPayoutOnboardingLinkRequest>;
  /** Modifies the status of a vendor payout */
  vendorPayoutStatusUpdate: Maybe<VendorPayoutStatusUpdate>;
  /** Exclude vendor payouts. */
  vendorPayoutsBulkExclude: Maybe<VendorPayoutsBulkExclude>;
  /** Include vendor payouts. */
  vendorPayoutsBulkInclude: Maybe<VendorPayoutsBulkInclude>;
  /** Process vendor payouts. */
  vendorPayoutsBulkProcess: Maybe<VendorPayoutsBulkProcess>;
  /** Deletes vouchers. */
  voucherBulkDelete: Maybe<VoucherBulkDelete>;
  /** Adds products, variants, categories, or collections to a voucher. */
  voucherCataloguesAdd: Maybe<VoucherAddCatalogues>;
  /** Removes products, variants, categories, or collections from a voucher. */
  voucherCataloguesRemove: Maybe<VoucherRemoveCatalogues>;
  /** Creates a new voucher. */
  voucherCreate: Maybe<VoucherCreate>;
  /** Deletes a voucher. */
  voucherDelete: Maybe<VoucherDelete>;
  /** Updates a voucher. */
  voucherUpdate: Maybe<VoucherUpdate>;
  /** Creates new warehouse. */
  warehouseCreate: Maybe<WarehouseCreate>;
  /** Deletes selected warehouse. */
  warehouseDelete: Maybe<WarehouseDelete>;
  /** Updates given warehouse. */
  warehouseUpdate: Maybe<WarehouseUpdate>;
  /** Creates a new webhook subscription. */
  webhookCreate: Maybe<WebhookCreate>;
  /** Deletes a webhook subscription. */
  webhookDelete: Maybe<WebhookDelete>;
  /** Updates a webhook subscription. */
  webhookUpdate: Maybe<WebhookUpdate>;
  /** Add product to the current user's or target user's wishlist. */
  wishlistAddProduct: Maybe<WishlistAddProductMutation>;
  /** Add product variant to the current user's wishlist. */
  wishlistAddVariant: Maybe<WishlistAddProductVariantMutation>;
  /** Creates a new wishlist */
  wishlistCreate: Maybe<WishlistCreate>;
  /** Creates a new wishlist for any buyer if requestor is MPO */
  wishlistCreateForBuyer: Maybe<WishlistCreateForBuyer>;
  /** Update a wishlist */
  wishlistDelete: Maybe<WishlistDelete>;
  /** Update a wishlist item */
  wishlistItemUpdate: Maybe<WishlistItemUpdate>;
  /** Remove product from the current user's wishlist. */
  wishlistRemoveProduct: Maybe<WishlistRemoveProductMutation>;
  /** Remove product variant from the current user's wishlist. */
  wishlistRemoveVariant: Maybe<WishlistRemoveProductVariantMutation>;
  /** Set default wishlist for the user. */
  wishlistSetDefault: Maybe<WishlistSetDefault>;
  /** Update a wishlist */
  wishlistUpdate: Maybe<WishlistUpdate>;
}


export interface MutationAccountAddressCreateArgs {
  input: AddressInput;
  type: InputMaybe<AddressTypeEnum>;
}


export interface MutationAccountAddressDeleteArgs {
  id: Scalars['ID']['input'];
}


export interface MutationAccountAddressSetDefaultArgs {
  id: Scalars['ID']['input'];
  type: AddressTypeEnum;
}


export interface MutationAccountAddressUpdateArgs {
  id: Scalars['ID']['input'];
  input: AddressInput;
}


export interface MutationAccountConfirmArgs {
  email: Scalars['String']['input'];
  token: Scalars['String']['input'];
}


export interface MutationAccountDeleteArgs {
  token: Scalars['String']['input'];
}


export interface MutationAccountRegisterArgs {
  input: AccountRegisterInput;
}


export interface MutationAccountRequestDeletionArgs {
  redirectUrl: Scalars['String']['input'];
}


export interface MutationAccountUpdateArgs {
  input: AccountInput;
}


export interface MutationAddressCreateArgs {
  input: AddressInput;
  userId: Scalars['ID']['input'];
}


export interface MutationAddressDeleteArgs {
  id: Scalars['ID']['input'];
}


export interface MutationAddressSetDefaultArgs {
  addressId: Scalars['ID']['input'];
  type: AddressTypeEnum;
  userId: Scalars['ID']['input'];
}


export interface MutationAddressUpdateArgs {
  id: Scalars['ID']['input'];
  input: AddressInput;
}


export interface MutationAffiliateAvatarUpdateArgs {
  affiliate: InputMaybe<Scalars['ID']['input']>;
  image: Scalars['Upload']['input'];
}


export interface MutationAffiliateBulkDeleteArgs {
  ids: Array<Scalars['ID']['input']>;
}


export interface MutationAffiliateCodeBulkSetActiveArgs {
  ids: Array<Scalars['ID']['input']>;
  isActive: Scalars['Boolean']['input'];
}


export interface MutationAffiliateCodeChannelUpdateArgs {
  channel: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
}


export interface MutationAffiliateCodeCreateArgs {
  input: InputMaybe<AffiliateCodeCreateInput>;
}


export interface MutationAffiliateCodeSetActiveArgs {
  isActive: InputMaybe<Scalars['Boolean']['input']>;
}


export interface MutationAffiliateCodeUseArgs {
  code: InputMaybe<Scalars['String']['input']>;
}


export interface MutationAffiliateCreateArgs {
  input: UserCreateInput;
}


export interface MutationAffiliateDeleteArgs {
  id: Scalars['ID']['input'];
}


export interface MutationAffiliateUpdateArgs {
  id: Scalars['ID']['input'];
  input: AffiliateInput;
}


export interface MutationAgreementBulkDeleteArgs {
  ids: Array<Scalars['ID']['input']>;
}


export interface MutationAgreementBulkPublishArgs {
  ids: Array<Scalars['ID']['input']>;
  isPublished: Scalars['Boolean']['input'];
}


export interface MutationAgreementCommissionCreateArgs {
  input: AgreementCommissionCreateInput;
}


export interface MutationAgreementCommissionDeleteArgs {
  id: Scalars['ID']['input'];
}


export interface MutationAgreementCreateArgs {
  input: AgreementInput;
}


export interface MutationAgreementDeleteArgs {
  id: Scalars['ID']['input'];
}


export interface MutationAgreementFeeCreateArgs {
  input: InputMaybe<AgreementFeeInput>;
}


export interface MutationAgreementFeeDeleteArgs {
  id: Scalars['ID']['input'];
}


export interface MutationAgreementUpdateArgs {
  id: Scalars['ID']['input'];
  input: AgreementInput;
}


export interface MutationAppActivateArgs {
  id: Scalars['ID']['input'];
}


export interface MutationAppCreateArgs {
  input: AppInput;
}


export interface MutationAppDeactivateArgs {
  id: Scalars['ID']['input'];
}


export interface MutationAppDeleteArgs {
  id: Scalars['ID']['input'];
}


export interface MutationAppDeleteFailedInstallationArgs {
  id: Scalars['ID']['input'];
}


export interface MutationAppFetchManifestArgs {
  manifestUrl: Scalars['String']['input'];
}


export interface MutationAppInstallArgs {
  input: AppInstallInput;
}


export interface MutationAppRetryInstallArgs {
  activateAfterInstallation?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
}


export interface MutationAppTokenCreateArgs {
  input: AppTokenInput;
}


export interface MutationAppTokenDeleteArgs {
  id: Scalars['ID']['input'];
}


export interface MutationAppTokenVerifyArgs {
  token: Scalars['String']['input'];
}


export interface MutationAppUpdateArgs {
  id: Scalars['ID']['input'];
  input: AppInput;
}


export interface MutationAssignNavigationArgs {
  menu: InputMaybe<Scalars['ID']['input']>;
  navigationType: NavigationType;
}


export interface MutationAttributeAssignArgs {
  operations: Array<AttributeAssignInput>;
  productTypeId: Scalars['ID']['input'];
}


export interface MutationAttributeBulkDeleteArgs {
  ids: Array<Scalars['ID']['input']>;
}


export interface MutationAttributeCreateArgs {
  input: AttributeCreateInput;
}


export interface MutationAttributeDeleteArgs {
  id: Scalars['ID']['input'];
}


export interface MutationAttributeUnassignArgs {
  attributeIds: Array<Scalars['ID']['input']>;
  productTypeId: Scalars['ID']['input'];
}


export interface MutationAttributeUpdateArgs {
  id: Scalars['ID']['input'];
  input: AttributeUpdateInput;
}


export interface MutationAttributeValueBulkCreateArgs {
  attribute: Scalars['ID']['input'];
  values: Array<Scalars['String']['input']>;
}


export interface MutationAttributeValueBulkDeleteArgs {
  ids: Array<Scalars['ID']['input']>;
}


export interface MutationAttributeValueCreateArgs {
  attribute: Scalars['ID']['input'];
  input: AttributeValueCreateInput;
}


export interface MutationAttributeValueDeleteArgs {
  id: Scalars['ID']['input'];
}


export interface MutationAttributeValueUpdateArgs {
  id: Scalars['ID']['input'];
  input: AttributeValueCreateInput;
}


export interface MutationAttributeValuesReorderArgs {
  attributeId: Scalars['ID']['input'];
  moves: Array<ReorderInput>;
}


export interface MutationAuthUrlGenerateArgs {
  provider: InputMaybe<SsoProviderType>;
}


export interface MutationBidAcceptArgs {
  bidId: Scalars['ID']['input'];
}


export interface MutationBidCreateArgs {
  input: BidInput;
}


export interface MutationBidRejectArgs {
  bidId: Scalars['ID']['input'];
}


export interface MutationBrandingImagesDeleteArgs {
  favicon: InputMaybe<Scalars['Boolean']['input']>;
  icon: InputMaybe<Scalars['Boolean']['input']>;
  logo: InputMaybe<Scalars['Boolean']['input']>;
}


export interface MutationBrandingUpdateArgs {
  input: InputMaybe<BrandingInput>;
}


export interface MutationBusinessEntityAddToPriceBookArgs {
  input: BusinessEntityAddToPriceBookInput;
}


export interface MutationBusinessEntityCreateArgs {
  input: BusinessEntityCreateInput;
}


export interface MutationBusinessEntityDeleteArgs {
  id: Scalars['ID']['input'];
}


export interface MutationBusinessEntityRemoveFromPriceBookArgs {
  id: Scalars['ID']['input'];
}


export interface MutationBusinessEntityUpdateArgs {
  id: Scalars['ID']['input'];
  input: BusinessEntityUpdateInput;
}


export interface MutationCatalogExportArgs {
  id: InputMaybe<Scalars['ID']['input']>;
  sellerId: InputMaybe<Scalars['ID']['input']>;
}


export interface MutationCatalogImportArgs {
  id: InputMaybe<Scalars['ID']['input']>;
  sellerId: InputMaybe<Scalars['ID']['input']>;
}


export interface MutationCategoryBulkDeleteArgs {
  ids: Array<Scalars['ID']['input']>;
}


export interface MutationCategoryCreateArgs {
  input: CategoryInput;
  parent: InputMaybe<Scalars['ID']['input']>;
}


export interface MutationCategoryDeleteArgs {
  id: Scalars['ID']['input'];
}


export interface MutationCategoryUpdateArgs {
  id: Scalars['ID']['input'];
  input: CategoryInput;
}


export interface MutationChannelCreateArgs {
  input: InputMaybe<ChannelInput>;
}


export interface MutationChannelUpdateArgs {
  id: Scalars['ID']['input'];
  input: ChannelInput;
}


export interface MutationCheckoutAddPoNumbersArgs {
  checkoutId: Scalars['ID']['input'];
  poNumbers: Array<Scalars['String']['input']>;
}


export interface MutationCheckoutAddPromoCodeArgs {
  checkoutId: Scalars['ID']['input'];
  promoCode: Scalars['String']['input'];
}


export interface MutationCheckoutBillingAddressUpdateArgs {
  billingAddress: AddressInput;
  checkoutId: Scalars['ID']['input'];
}


export interface MutationCheckoutCompleteArgs {
  affiliate: InputMaybe<Scalars['ID']['input']>;
  checkoutId: Scalars['ID']['input'];
  microsite: InputMaybe<Scalars['ID']['input']>;
  paymentData: InputMaybe<Scalars['JSONString']['input']>;
  poNumber: InputMaybe<Scalars['String']['input']>;
  redirectUrl: InputMaybe<Scalars['String']['input']>;
  storeSource?: InputMaybe<Scalars['Boolean']['input']>;
  userOverride: InputMaybe<Scalars['ID']['input']>;
  vehicles?: InputMaybe<Scalars['Boolean']['input']>;
  volumeDiscount: Scalars['Float']['input'];
  volumeDiscountsBySeller: InputMaybe<Array<SellerVolumeDiscountInput>>;
}


export interface MutationCheckoutConvertToNauticalQuoteOrderArgs {
  checkoutId: Scalars['ID']['input'];
}


export interface MutationCheckoutCreateArgs {
  input: CheckoutCreateInput;
}


export interface MutationCheckoutCustomerAttachArgs {
  checkoutId: Scalars['ID']['input'];
  customerId: InputMaybe<Scalars['ID']['input']>;
}


export interface MutationCheckoutCustomerDetachArgs {
  checkoutId: Scalars['ID']['input'];
}


export interface MutationCheckoutDeleteArgs {
  token: Scalars['UUID']['input'];
}


export interface MutationCheckoutEmailUpdateArgs {
  checkoutId: InputMaybe<Scalars['ID']['input']>;
  email: Scalars['String']['input'];
}


export interface MutationCheckoutEventTriggeredArgs {
  checkoutId: Scalars['String']['input'];
  type: CheckoutEventType;
}


export interface MutationCheckoutLineAddNoteArgs {
  id: Scalars['ID']['input'];
  input: NoteInput;
}


export interface MutationCheckoutLineDeleteArgs {
  checkoutId: Scalars['ID']['input'];
  lineId: InputMaybe<Scalars['ID']['input']>;
}


export interface MutationCheckoutLinesAddArgs {
  checkoutId: Scalars['ID']['input'];
  lines: Array<CheckoutLineInput>;
}


export interface MutationCheckoutLinesUpdateArgs {
  checkoutId: Scalars['ID']['input'];
  lines: Array<CheckoutLineInput>;
}


export interface MutationCheckoutNoteUpdateArgs {
  checkoutId: Scalars['ID']['input'];
  note: Scalars['String']['input'];
}


export interface MutationCheckoutPaymentCreateArgs {
  checkoutId: Scalars['ID']['input'];
  input: PaymentInput;
}


export interface MutationCheckoutRemovePoNumbersArgs {
  checkoutId: Scalars['ID']['input'];
  poNumber: Scalars['String']['input'];
}


export interface MutationCheckoutRemovePromoCodeArgs {
  checkoutId: Scalars['ID']['input'];
  promoCode: Scalars['String']['input'];
}


export interface MutationCheckoutSellerShippingMethodsBulkUpdateArgs {
  checkoutId: Scalars['ID']['input'];
  sellerShippingMethods: InputMaybe<Array<SellerShippingMethodInput>>;
}


export interface MutationCheckoutSellerShippingMethodsClearArgs {
  checkoutId: Scalars['ID']['input'];
}


export interface MutationCheckoutSellerShippingMethodsUpdateArgs {
  checkoutId: Scalars['ID']['input'];
  secondaryAddress: InputMaybe<Scalars['String']['input']>;
  seller: Scalars['ID']['input'];
  shippingMethodPriceOverrideAmount: InputMaybe<Scalars['PositiveDecimal']['input']>;
  shippingMethodSelection: Scalars['ID']['input'];
}


export interface MutationCheckoutSetTransactionCurrencyArgs {
  checkoutId: InputMaybe<Scalars['ID']['input']>;
  currency: MarketplaceConfigurationCurrencyEnum;
}


export interface MutationCheckoutShippingAddressUpdateArgs {
  checkoutId: Scalars['ID']['input'];
  shippingAddress: AddressInput;
}


export interface MutationCheckoutThemeCreateArgs {
  input: CheckoutThemeCreateInput;
}


export interface MutationCheckoutThemeUpdateArgs {
  id: Scalars['ID']['input'];
  input: CheckoutThemeInput;
}


export interface MutationCollectionAddProductsArgs {
  collectionId: Scalars['ID']['input'];
  products: Array<Scalars['ID']['input']>;
}


export interface MutationCollectionAddVariantsArgs {
  collectionId: Scalars['ID']['input'];
  variants: Array<Scalars['ID']['input']>;
}


export interface MutationCollectionBulkDeleteArgs {
  ids: Array<Scalars['ID']['input']>;
}


export interface MutationCollectionBulkPublishArgs {
  ids: Array<Scalars['ID']['input']>;
  isPublished: Scalars['Boolean']['input'];
}


export interface MutationCollectionCreateArgs {
  input: CollectionCreateInput;
}


export interface MutationCollectionDeleteArgs {
  id: Scalars['ID']['input'];
}


export interface MutationCollectionRemoveProductsArgs {
  collectionId: Scalars['ID']['input'];
  products: Array<Scalars['ID']['input']>;
}


export interface MutationCollectionRemoveVariantsArgs {
  collectionId: Scalars['ID']['input'];
  variants: Array<Scalars['ID']['input']>;
}


export interface MutationCollectionReorderProductsArgs {
  collectionId: Scalars['ID']['input'];
  moves: Array<MoveProductInput>;
}


export interface MutationCollectionUpdateArgs {
  id: Scalars['ID']['input'];
  input: CollectionInput;
}


export interface MutationContentCreateArgs {
  input: ContentCreateInput;
}


export interface MutationContentDeleteArgs {
  id: Scalars['ID']['input'];
}


export interface MutationContentDiscardArgs {
  id: Scalars['ID']['input'];
}


export interface MutationContentPublishArgs {
  id: Scalars['ID']['input'];
  input: ContentPublishInput;
}


export interface MutationContentSaveArgs {
  id: Scalars['ID']['input'];
  input: ContentSaveInput;
}


export interface MutationCoreDataCreateArgs {
  input: CoreDataInput;
}


export interface MutationCoreDataUpdateArgs {
  input: CoreDataInput;
  name: Scalars['String']['input'];
}


export interface MutationCreateCustomerTokenArgs {
  oauthProviderSource: OauthProviderSourceEnum;
  oauthProviderToken: Scalars['String']['input'];
}


export interface MutationCustomAttributeAssignArgs {
  operations: Array<AttributeAssignInput>;
  template: CustomFieldTemplateEnum;
}


export interface MutationCustomAttributeUnassignArgs {
  attributeIds: Array<Scalars['ID']['input']>;
  template: CustomFieldTemplateEnum;
}


export interface MutationCustomerBulkDeleteArgs {
  ids: Array<Scalars['ID']['input']>;
}


export interface MutationCustomerCreateArgs {
  input: UserCreateInput;
}


export interface MutationCustomerDeleteArgs {
  id: Scalars['ID']['input'];
}


export interface MutationCustomerUpdateArgs {
  id: Scalars['ID']['input'];
  input: CustomerInput;
}


export interface MutationCustomersExportArgs {
  id: InputMaybe<Scalars['ID']['input']>;
  sellerId: InputMaybe<Scalars['ID']['input']>;
}


export interface MutationDashboardConfigurationUpdateArgs {
  input: InputMaybe<DashboardConfigurationInput>;
}


export interface MutationDesignerDataCreateArgs {
  input: DesignerDataInput;
}


export interface MutationDesignerDataUpdateArgs {
  input: InputMaybe<DesignerDataInput>;
  name: Scalars['String']['input'];
}


export interface MutationDigitalContentCreateArgs {
  input: DigitalContentUploadInput;
  variantId: Scalars['ID']['input'];
}


export interface MutationDigitalContentDeleteArgs {
  variantId: Scalars['ID']['input'];
}


export interface MutationDigitalContentUpdateArgs {
  input: DigitalContentInput;
  variantId: Scalars['ID']['input'];
}


export interface MutationDigitalContentUrlCreateArgs {
  input: DigitalContentUrlCreateInput;
}


export interface MutationDocumentAddArgs {
  description: InputMaybe<Scalars['String']['input']>;
  documentId: InputMaybe<Scalars['ID']['input']>;
  file: InputMaybe<Scalars['Upload']['input']>;
  ids: InputMaybe<Array<Scalars['ID']['input']>>;
  relatedObjectId: InputMaybe<Scalars['ID']['input']>;
}


export interface MutationDocumentAttachArgs {
  documentId: Scalars['ID']['input'];
  ids: Array<Scalars['ID']['input']>;
}


export interface MutationDocumentRemoveArgs {
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  targetIds: InputMaybe<Array<Scalars['ID']['input']>>;
}


export interface MutationDocumentUpdateArgs {
  id: Scalars['ID']['input'];
  input: DocumentUpdateInput;
}


export interface MutationDraftOrderBulkDeleteArgs {
  ids: Array<Scalars['ID']['input']>;
}


export interface MutationDraftOrderCompleteArgs {
  channel: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  paymentData: InputMaybe<Scalars['JSONString']['input']>;
  seller: Scalars['ID']['input'];
}


export interface MutationDraftOrderCreateArgs {
  input: DraftOrderCreateInput;
}


export interface MutationDraftOrderDeleteArgs {
  id: Scalars['ID']['input'];
}


export interface MutationDraftOrderLineDeleteArgs {
  id: Scalars['ID']['input'];
}


export interface MutationDraftOrderLinePriceOverrideArgs {
  id: Scalars['ID']['input'];
  input: OrderLinePriceOverrideInput;
}


export interface MutationDraftOrderLineUpdateArgs {
  id: Scalars['ID']['input'];
  input: OrderLineInput;
}


export interface MutationDraftOrderLinesBulkDeleteArgs {
  ids: Array<Scalars['ID']['input']>;
}


export interface MutationDraftOrderLinesCreateArgs {
  id: Scalars['ID']['input'];
  input: Array<OrderLineCreateInput>;
}


export interface MutationDraftOrderSetTransactionCurrencyArgs {
  currency: MarketplaceConfigurationCurrencyEnum;
  orderId: Scalars['ID']['input'];
}


export interface MutationDraftOrderUpdateArgs {
  id: Scalars['ID']['input'];
  input: DraftOrderInput;
}


export interface MutationEmailChangeConfirmArgs {
  token: Scalars['String']['input'];
}


export interface MutationEmailChangeRequestArgs {
  newEmail: Scalars['String']['input'];
  password: Scalars['String']['input'];
  redirectUrl: Scalars['String']['input'];
}


export interface MutationExchangeRatesRefreshArgs {
  plugin: Scalars['String']['input'];
}


export interface MutationFeatureCreateArgs {
  input: FeatureCreateInput;
}


export interface MutationFeatureDeleteArgs {
  id: Scalars['ID']['input'];
}


export interface MutationFeatureUpdateArgs {
  id: Scalars['ID']['input'];
  input: FeatureInput;
}


export interface MutationFulfillmentBulkReturnArgs {
  input: InputMaybe<Array<BulkFulfillmentReturnInput>>;
}


export interface MutationGroupedProductAddProductsArgs {
  productId: Scalars['ID']['input'];
  products: Array<Scalars['ID']['input']>;
}


export interface MutationGroupedProductRemoveProductsArgs {
  productId: Scalars['ID']['input'];
  products: Array<Scalars['ID']['input']>;
}


export interface MutationHomepageCollectionUpdateArgs {
  collection: InputMaybe<Scalars['ID']['input']>;
}


export interface MutationInstanceAttributeUnassignArgs {
  attributeId: Scalars['ID']['input'];
  custom: Scalars['Boolean']['input'];
  instanceId: Scalars['ID']['input'];
}


export interface MutationInvoiceCancelArgs {
  id: Scalars['ID']['input'];
}


export interface MutationInvoiceCreateArgs {
  input: InvoiceCreateInput;
  orderId: Scalars['ID']['input'];
}


export interface MutationInvoiceDeleteArgs {
  id: Scalars['ID']['input'];
}


export interface MutationInvoiceFinalizeArgs {
  id: Scalars['ID']['input'];
}


export interface MutationInvoiceRefreshArgs {
  documentType: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
}


export interface MutationInvoiceRequestArgs {
  documentType: InputMaybe<Scalars['Int']['input']>;
  number: InputMaybe<Scalars['String']['input']>;
  orderId: InputMaybe<Scalars['ID']['input']>;
  refundId: InputMaybe<Scalars['ID']['input']>;
}


export interface MutationInvoiceRequestDeleteArgs {
  id: Scalars['ID']['input'];
}


export interface MutationInvoiceSendNotificationArgs {
  id: Scalars['ID']['input'];
}


export interface MutationInvoiceUpdateArgs {
  id: Scalars['ID']['input'];
  input: UpdateInvoiceInput;
}


export interface MutationJournalEntryCorrectArgs {
  input: JournalEntryCorrectInput;
}


export interface MutationLocationGeocodeArgs {
  locationData: Scalars['String']['input'];
}


export interface MutationLocationSearchArgs {
  searchData: Scalars['String']['input'];
}


export interface MutationMarketplaceConfigurationUpdateArgs {
  input: MarketplaceConfigurationInput;
}


export interface MutationMediaBulkDeleteArgs {
  ids: Array<Scalars['ID']['input']>;
}


export interface MutationMediaCreateArgs {
  input: MediaCreateInput;
}


export interface MutationMediaUpdateArgs {
  id: Scalars['ID']['input'];
  input: MediaUpdateInput;
}


export interface MutationMenuBulkDeleteArgs {
  ids: Array<Scalars['ID']['input']>;
}


export interface MutationMenuCreateArgs {
  input: MenuCreateInput;
}


export interface MutationMenuDeleteArgs {
  id: Scalars['ID']['input'];
}


export interface MutationMenuItemBulkDeleteArgs {
  ids: Array<Scalars['ID']['input']>;
}


export interface MutationMenuItemCreateArgs {
  input: MenuItemCreateInput;
}


export interface MutationMenuItemDeleteArgs {
  id: Scalars['ID']['input'];
}


export interface MutationMenuItemMoveArgs {
  menu: Scalars['ID']['input'];
  moves: Array<MenuItemMoveInput>;
}


export interface MutationMenuItemUpdateArgs {
  id: Scalars['ID']['input'];
  input: MenuItemInput;
}


export interface MutationMenuUpdateArgs {
  id: Scalars['ID']['input'];
  input: MenuInput;
}


export interface MutationMetadataDeleteArgs {
  id: Scalars['ID']['input'];
  keys: Array<Scalars['String']['input']>;
}


export interface MutationMetadataUpdateArgs {
  id: Scalars['ID']['input'];
  input: Array<MetadataInput>;
}


export interface MutationMicrositeAddProductsArgs {
  micrositeId: Scalars['ID']['input'];
  products: Array<Scalars['ID']['input']>;
}


export interface MutationMicrositeBulkDeleteArgs {
  ids: Array<Scalars['ID']['input']>;
}


export interface MutationMicrositeBulkPublishArgs {
  ids: Array<Scalars['ID']['input']>;
  isPublished: Scalars['Boolean']['input'];
}


export interface MutationMicrositeCreateArgs {
  input: MicrositeCreateInput;
}


export interface MutationMicrositeDeleteArgs {
  id: Scalars['ID']['input'];
}


export interface MutationMicrositeRemoveProductsArgs {
  micrositeId: Scalars['ID']['input'];
  products: Array<Scalars['ID']['input']>;
}


export interface MutationMicrositeReorderProductsArgs {
  micrositeId: Scalars['ID']['input'];
  moves: Array<MoveProductInput>;
}


export interface MutationMicrositeUpdateArgs {
  id: Scalars['ID']['input'];
  input: MicrositeInput;
}


export interface MutationNauticalConfigurationUpdateArgs {
  input: InputMaybe<Array<NauticalConfigurationInputItem>>;
}


export interface MutationNauticalDraftOrderBulkDeleteArgs {
  ids: Array<Scalars['ID']['input']>;
}


export interface MutationNauticalDraftOrderCompleteArgs {
  channel: InputMaybe<Scalars['ID']['input']>;
  id: InputMaybe<Scalars['ID']['input']>;
  paymentData: InputMaybe<Scalars['JSONString']['input']>;
  token: InputMaybe<Scalars['String']['input']>;
}


export interface MutationNauticalDraftOrderCreateArgs {
  input: NauticalDraftOrderCreateInput;
}


export interface MutationNauticalDraftOrderDeleteArgs {
  id: Scalars['ID']['input'];
}


export interface MutationNauticalDraftOrderLineDeleteArgs {
  id: Scalars['ID']['input'];
}


export interface MutationNauticalDraftOrderLinePriceOverrideArgs {
  id: Scalars['ID']['input'];
  input: OrderLinePriceOverrideInput;
}


export interface MutationNauticalDraftOrderLineUpdateArgs {
  id: Scalars['ID']['input'];
  input: OrderLineInput;
}


export interface MutationNauticalDraftOrderLinesBulkDeleteArgs {
  ids: Array<Scalars['ID']['input']>;
}


export interface MutationNauticalDraftOrderLinesCreateArgs {
  id: Scalars['ID']['input'];
  input: Array<OrderLineCreateInput>;
}


export interface MutationNauticalDraftOrderSetTransactionCurrencyArgs {
  currency: MarketplaceConfigurationCurrencyEnum;
  nauticalOrderId: Scalars['ID']['input'];
}


export interface MutationNauticalDraftOrderUpdateArgs {
  id: InputMaybe<Scalars['ID']['input']>;
  input: NauticalDraftOrderInput;
  token: InputMaybe<Scalars['String']['input']>;
}


export interface MutationNauticalHistoricalOrderCreateArgs {
  input: NauticalHistoricalOrderInput;
}


export interface MutationNauticalOrderAddNoteArgs {
  input: OrderAddNoteInput;
  order: Scalars['ID']['input'];
}


export interface MutationNauticalOrderCancelArgs {
  id: Scalars['ID']['input'];
}


export interface MutationNauticalOrderCaptureArgs {
  amount: Scalars['PositiveDecimal']['input'];
  id: Scalars['ID']['input'];
  paymentId: InputMaybe<Scalars['ID']['input']>;
}


export interface MutationNauticalOrderChannelUpdateArgs {
  channel: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
}


export interface MutationNauticalOrderLineAddNoteArgs {
  id: Scalars['ID']['input'];
  input: NoteInput;
}


export interface MutationNauticalOrderLineBulkCancelArgs {
  ids: Array<Scalars['ID']['input']>;
}


export interface MutationNauticalOrderLinesCsvUploadArgs {
  file: Scalars['Upload']['input'];
  orderId: Scalars['ID']['input'];
}


export interface MutationNauticalOrderMarkAsPaidArgs {
  id: Scalars['ID']['input'];
}


export interface MutationNauticalOrderPaymentCreateArgs {
  input: PaymentInput;
  orderId: Scalars['ID']['input'];
}


export interface MutationNauticalOrderRefreshTaxesArgs {
  id: Scalars['ID']['input'];
}


export interface MutationNauticalOrderReturnFromStorefrontNotificationArgs {
  input: OrderReturnNotificationInput;
  order: Scalars['ID']['input'];
}


export interface MutationNauticalOrderReturnNotificationArgs {
  input: OrderReturnNotificationInput;
  order: Scalars['ID']['input'];
}


export interface MutationNauticalOrderUpdateArgs {
  id: Scalars['ID']['input'];
  input: NauticalOrderUpdateInput;
}


export interface MutationNauticalOrderUpdateApplyVoucherCodeArgs {
  id: InputMaybe<Scalars['ID']['input']>;
  voucherCode: InputMaybe<Scalars['String']['input']>;
}


export interface MutationNauticalOrderUpdateDeleteDiscountArgs {
  id: InputMaybe<Scalars['ID']['input']>;
}


export interface MutationNauticalOrderUpdateShippingArgs {
  input: InputMaybe<NauticalOrderUpdateShippingInput>;
  order: Scalars['ID']['input'];
}


export interface MutationNauticalOrderVoidArgs {
  id: Scalars['ID']['input'];
  paymentId: InputMaybe<Scalars['ID']['input']>;
}


export interface MutationNauticalQuoteOrderCancelArgs {
  id: Scalars['ID']['input'];
}


export interface MutationNauticalQuoteOrderSendToCustomerArgs {
  id: Scalars['ID']['input'];
  storefrontUrl: Scalars['String']['input'];
}


export interface MutationOrderAddNoteArgs {
  input: OrderAddNoteInput;
  order: Scalars['ID']['input'];
}


export interface MutationOrderBulkCancelArgs {
  ids: Array<Scalars['ID']['input']>;
}


export interface MutationOrderCancelArgs {
  id: Scalars['ID']['input'];
}


export interface MutationOrderChannelUpdateArgs {
  channel: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
}


export interface MutationOrderDeclineFulfillmentArgs {
  input: DeclineFulfillInput;
  order: InputMaybe<Scalars['ID']['input']>;
}


export interface MutationOrderFeeCreateArgs {
  input: OrderFeeInput;
}


export interface MutationOrderFeeDeleteArgs {
  id: Scalars['ID']['input'];
}


export interface MutationOrderFulfillArgs {
  input: OrderFulfillInput;
  order: InputMaybe<Scalars['ID']['input']>;
}


export interface MutationOrderFulfillmentCancelArgs {
  id: Scalars['ID']['input'];
  input: FulfillmentCancelInput;
}


export interface MutationOrderFulfillmentReturnArgs {
  id: Scalars['ID']['input'];
  input: FulfillmentReturnInput;
}


export interface MutationOrderFulfillmentUpdateReturnStatusArgs {
  id: Scalars['ID']['input'];
  input: FulfillmentUpdateReturnStatusInput;
}


export interface MutationOrderFulfillmentUpdateTrackingArgs {
  id: Scalars['ID']['input'];
  input: FulfillmentUpdateTrackingInput;
}


export interface MutationOrderLineAddNoteArgs {
  id: Scalars['ID']['input'];
  input: NoteInput;
}


export interface MutationOrderLinesCsvUploadArgs {
  file: Scalars['Upload']['input'];
  orderId: Scalars['ID']['input'];
}


export interface MutationOrderMarkAsDeliveredArgs {
  id: Scalars['ID']['input'];
}


export interface MutationOrderOfferConvertToNauticalQuoteOrderArgs {
  id: Scalars['ID']['input'];
}


export interface MutationOrderPayoutStatusUpdateArgs {
  id: Scalars['ID']['input'];
  input: OrderPayoutStatusUpdateInput;
}


export interface MutationOrderReturnNotificationArgs {
  input: OrderReturnNotificationInput;
  order: Scalars['ID']['input'];
}


export interface MutationOrderUpdateArgs {
  id: Scalars['ID']['input'];
  input: OrderUpdateInput;
}


export interface MutationOrderUpdateShippingArgs {
  input: InputMaybe<OrderUpdateShippingInput>;
  order: Scalars['ID']['input'];
}


export interface MutationPageBulkDeleteArgs {
  ids: Array<Scalars['ID']['input']>;
}


export interface MutationPageBulkPublishArgs {
  ids: Array<Scalars['ID']['input']>;
  isPublished: Scalars['Boolean']['input'];
}


export interface MutationPageCreateArgs {
  input: PageInput;
}


export interface MutationPageDeleteArgs {
  id: Scalars['ID']['input'];
}


export interface MutationPageUpdateArgs {
  id: Scalars['ID']['input'];
  input: PageInput;
}


export interface MutationPasswordChangeArgs {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
}


export interface MutationPasswordRequestResetArgs {
  email: Scalars['String']['input'];
  redirectUrl: InputMaybe<Scalars['String']['input']>;
}


export interface MutationPasswordSetArgs {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  token: Scalars['String']['input'];
}


export interface MutationPaymentCaptureArgs {
  amount: InputMaybe<Scalars['PositiveDecimal']['input']>;
  paymentId: Scalars['ID']['input'];
}


export interface MutationPaymentVoidArgs {
  paymentId: Scalars['ID']['input'];
}


export interface MutationPayoutBulkArchiveArgs {
  ids: Array<Scalars['ID']['input']>;
}


export interface MutationPayoutCreateArgs {
  input: PayoutCreateInput;
}


export interface MutationPayoutDatesUpdateArgs {
  id: Scalars['ID']['input'];
  input: PayoutDatesInput;
}


export interface MutationPayoutDeleteArgs {
  id: Scalars['ID']['input'];
}


export interface MutationPayoutStatusUpdateArgs {
  id: Scalars['ID']['input'];
  input: InputMaybe<PayoutStatusInput>;
}


export interface MutationPayoutUpdateArgs {
  id: InputMaybe<Scalars['ID']['input']>;
  input: InputMaybe<PayoutUpdateInput>;
}


export interface MutationPermissionGroupCreateArgs {
  input: PermissionGroupCreateInput;
}


export interface MutationPermissionGroupDeleteArgs {
  id: Scalars['ID']['input'];
}


export interface MutationPermissionGroupUpdateArgs {
  id: Scalars['ID']['input'];
  input: PermissionGroupUpdateInput;
}


export interface MutationPluginFlowDeleteArgs {
  id: Scalars['ID']['input'];
}


export interface MutationPluginFlowUpdateArgs {
  id: Scalars['ID']['input'];
  input: InputMaybe<PluginFlowInput>;
}


export interface MutationPluginUpdateArgs {
  id: Scalars['ID']['input'];
  input: PluginUpdateInput;
}


export interface MutationPriceBookBulkDeleteArgs {
  ids: Array<Scalars['ID']['input']>;
}


export interface MutationPriceBookCreateArgs {
  input: PriceBookCreateInput;
}


export interface MutationPriceBookDeleteArgs {
  id: Scalars['ID']['input'];
}


export interface MutationPriceBookProductBulkDeleteArgs {
  ids: Array<Scalars['ID']['input']>;
}


export interface MutationPriceBookProductCreateArgs {
  input: PriceBookProductCreateInput;
}


export interface MutationPriceBookProductDeleteArgs {
  id: Scalars['ID']['input'];
}


export interface MutationPriceBookProductTypeBulkDeleteArgs {
  ids: Array<Scalars['ID']['input']>;
}


export interface MutationPriceBookProductTypeCreateArgs {
  input: PriceBookProductTypeCreateInput;
}


export interface MutationPriceBookProductTypeDeleteArgs {
  id: Scalars['ID']['input'];
}


export interface MutationPriceBookProductTypeUpdateArgs {
  id: Scalars['ID']['input'];
  input: PriceBookProductTypeUpdateInput;
}


export interface MutationPriceBookProductUpdateArgs {
  id: Scalars['ID']['input'];
  input: PriceBookProductUpdateInput;
}


export interface MutationPriceBookUpdateArgs {
  id: Scalars['ID']['input'];
  input: PriceBookUpdateInput;
}


export interface MutationPriceBookVariantBulkDeleteArgs {
  ids: Array<Scalars['ID']['input']>;
}


export interface MutationPriceBookVariantCreateArgs {
  input: PriceBookVariantCreateInput;
}


export interface MutationPriceBookVariantDeleteArgs {
  id: Scalars['ID']['input'];
}


export interface MutationPriceBookVariantUpdateArgs {
  id: Scalars['ID']['input'];
  input: PriceBookVariantUpdateInput;
}


export interface MutationPrivateMetadataDeleteArgs {
  id: Scalars['ID']['input'];
  keys: Array<Scalars['String']['input']>;
}


export interface MutationPrivateMetadataUpdateArgs {
  id: Scalars['ID']['input'];
  input: Array<MetadataInput>;
}


export interface MutationProductBulkCategoryUpdateArgs {
  category: Scalars['ID']['input'];
  ids: Array<Scalars['ID']['input']>;
}


export interface MutationProductBulkDeleteArgs {
  ids: Array<Scalars['ID']['input']>;
}


export interface MutationProductBulkPublishArgs {
  ids: Array<Scalars['ID']['input']>;
  isPublished: Scalars['Boolean']['input'];
}


export interface MutationProductCreateArgs {
  input: ProductCreateInput;
}


export interface MutationProductDeleteArgs {
  id: Scalars['ID']['input'];
}


export interface MutationProductImageBulkDeleteArgs {
  ids: Array<Scalars['ID']['input']>;
}


export interface MutationProductImageCreateArgs {
  input: ProductImageCreateInput;
}


export interface MutationProductImageDeleteArgs {
  id: Scalars['ID']['input'];
}


export interface MutationProductImageReorderArgs {
  imagesIds: Array<Scalars['ID']['input']>;
  productId: Scalars['ID']['input'];
}


export interface MutationProductImageUpdateArgs {
  id: Scalars['ID']['input'];
  input: ProductImageUpdateInput;
}


export interface MutationProductLocationCreateArgs {
  input: LocationInput;
  productId: InputMaybe<Scalars['ID']['input']>;
}


export interface MutationProductLocationDeleteArgs {
  locationId: InputMaybe<Scalars['ID']['input']>;
  productId: InputMaybe<Scalars['ID']['input']>;
}


export interface MutationProductLocationUpdateArgs {
  input: LocationInput;
  locationId: InputMaybe<Scalars['ID']['input']>;
  productId: InputMaybe<Scalars['ID']['input']>;
}


export interface MutationProductReorderVariantsArgs {
  moves: Array<ReorderInput>;
  productId: Scalars['ID']['input'];
}


export interface MutationProductReviewSubmitArgs {
  emailAddress: InputMaybe<Scalars['String']['input']>;
  headline: InputMaybe<Scalars['String']['input']>;
  productId: InputMaybe<Scalars['String']['input']>;
  publicName: InputMaybe<Scalars['String']['input']>;
  rating: InputMaybe<Scalars['String']['input']>;
  review: InputMaybe<Scalars['String']['input']>;
}


export interface MutationProductSetAvailabilityForPurchaseArgs {
  isAvailable: Scalars['Boolean']['input'];
  productId: Scalars['ID']['input'];
  startDate: InputMaybe<Scalars['Date']['input']>;
}


export interface MutationProductSetLocationTypeArgs {
  locationId: InputMaybe<Scalars['ID']['input']>;
  productId: InputMaybe<Scalars['ID']['input']>;
  type: LocationTypeEnum;
}


export interface MutationProductTypeBulkDeleteArgs {
  ids: Array<Scalars['ID']['input']>;
}


export interface MutationProductTypeCreateArgs {
  input: ProductTypeInput;
}


export interface MutationProductTypeDeleteArgs {
  id: Scalars['ID']['input'];
}


export interface MutationProductTypeFeatureCreateArgs {
  input: ProductTypeFeatureCreateInput;
}


export interface MutationProductTypeFeatureDeleteArgs {
  id: Scalars['ID']['input'];
}


export interface MutationProductTypeFeatureUpdateArgs {
  id: Scalars['ID']['input'];
  input: ProductTypeFeatureInput;
}


export interface MutationProductTypeReorderAttributesArgs {
  moves: Array<ReorderInput>;
  productTypeId: Scalars['ID']['input'];
  type: AttributeTypeEnum;
}


export interface MutationProductTypeUpdateArgs {
  id: Scalars['ID']['input'];
  input: ProductTypeInput;
}


export interface MutationProductUpdateArgs {
  id: Scalars['ID']['input'];
  input: ProductInput;
}


export interface MutationProductVariantBulkCreateArgs {
  product: Scalars['ID']['input'];
  variants: Array<ProductVariantBulkCreateInput>;
}


export interface MutationProductVariantBulkDeleteArgs {
  ids: Array<Scalars['ID']['input']>;
}


export interface MutationProductVariantCreateArgs {
  input: ProductVariantCreateInput;
}


export interface MutationProductVariantDeleteArgs {
  id: Scalars['ID']['input'];
}


export interface MutationProductVariantImageAssignArgs {
  imageId: Scalars['ID']['input'];
  transferImageOwnership: InputMaybe<Scalars['Boolean']['input']>;
  variantId: Scalars['ID']['input'];
}


export interface MutationProductVariantImageUnassignArgs {
  imageId: Scalars['ID']['input'];
  variantId: Scalars['ID']['input'];
}


export interface MutationProductVariantSetDefaultArgs {
  productId: Scalars['ID']['input'];
  variantId: Scalars['ID']['input'];
}


export interface MutationProductVariantStocksCreateArgs {
  stocks: Array<StockInput>;
  variantId: Scalars['ID']['input'];
}


export interface MutationProductVariantStocksDeleteArgs {
  variantId: Scalars['ID']['input'];
  warehouseIds: InputMaybe<Array<Scalars['ID']['input']>>;
}


export interface MutationProductVariantStocksUpdateArgs {
  stocks: Array<StockInput>;
  variantId: Scalars['ID']['input'];
}


export interface MutationProductVariantUpdateArgs {
  id: Scalars['ID']['input'];
  input: ProductVariantInput;
}


export interface MutationProductsExportArgs {
  input: ExportProductsInput;
}


export interface MutationProductsImportArgs {
  file: Scalars['Upload']['input'];
}


export interface MutationRefundCreateArgs {
  input: RefundCreateInput;
}


export interface MutationRefundLinesAddArgs {
  lineItems: Array<RefundLineInput>;
  refundId: Scalars['ID']['input'];
}


export interface MutationRefundLinesDeleteArgs {
  ids: Array<Scalars['ID']['input']>;
  refundId: Scalars['ID']['input'];
}


export interface MutationRefundLinesUpdateArgs {
  lineItems: Array<RefundLineUpdateInput>;
  refundId: Scalars['ID']['input'];
}


export interface MutationRefundPaymentsAddArgs {
  payments: Array<RefundPaymentInput>;
  refund: Scalars['ID']['input'];
}


export interface MutationRefundPaymentsDeleteArgs {
  ids: Array<Scalars['ID']['input']>;
  refundId: Scalars['ID']['input'];
}


export interface MutationRefundPaymentsUpdateArgs {
  payments: Array<RefundPaymentUpdateInput>;
  refund: Scalars['ID']['input'];
}


export interface MutationRefundUpdateArgs {
  id: Scalars['ID']['input'];
  input: RefundUpdateInput;
}


export interface MutationRefundsChangeStatusArgs {
  ids: Array<Scalars['ID']['input']>;
  status: RefundStatusEnum;
}


export interface MutationRefundsDeleteArgs {
  ids: Array<Scalars['ID']['input']>;
}


export interface MutationSaleBulkDeleteArgs {
  ids: Array<Scalars['ID']['input']>;
}


export interface MutationSaleCataloguesAddArgs {
  id: Scalars['ID']['input'];
  input: CatalogueInput;
}


export interface MutationSaleCataloguesRemoveArgs {
  id: Scalars['ID']['input'];
  input: CatalogueInput;
}


export interface MutationSaleCreateArgs {
  input: SaleInput;
}


export interface MutationSaleDeleteArgs {
  id: Scalars['ID']['input'];
}


export interface MutationSaleUpdateArgs {
  id: Scalars['ID']['input'];
  input: SaleInput;
}


export interface MutationSellerAddressCreateArgs {
  input: AddressInput;
  sellerId: Scalars['ID']['input'];
}


export interface MutationSellerAddressDeleteArgs {
  id: Scalars['ID']['input'];
}


export interface MutationSellerAddressSetDefaultArgs {
  addressId: Scalars['ID']['input'];
  sellerId: Scalars['ID']['input'];
  type: AddressTypeEnum;
}


export interface MutationSellerAddressUpdateArgs {
  id: Scalars['ID']['input'];
  input: AddressInput;
}


export interface MutationSellerAgreementAcknowledgeArgs {
  id: Scalars['ID']['input'];
}


export interface MutationSellerDataCreateArgs {
  input: SellerInput;
}


export interface MutationSellerDataUpdateArgs {
  id: Scalars['ID']['input'];
  input: SellerUpdateInput;
}


export interface MutationSellerLogoUpdateArgs {
  image: Scalars['Upload']['input'];
  seller: InputMaybe<Scalars['ID']['input']>;
}


export interface MutationSellerNoteCreateArgs {
  input: SellerNoteInput;
}


export interface MutationSellerOnboardingChecklistCompleteArgs {
  id: InputMaybe<Scalars['ID']['input']>;
  isCompleted?: InputMaybe<Scalars['Boolean']['input']>;
}


export interface MutationSellerOnboardingSettingsCreateArgs {
  input: SellerOnboardingSettingsCreateInput;
}


export interface MutationSellerOnboardingSettingsUpdateArgs {
  id: Scalars['ID']['input'];
  input: SellerOnboardingSettingsUpdateInput;
}


export interface MutationSellerOwnerDeleteArgs {
  sellerId: Scalars['ID']['input'];
}


export interface MutationSellerSettingsUpdateArgs {
  id: Scalars['ID']['input'];
  input: SellerSettingsUpdateInput;
}


export interface MutationSellerShellCreateArgs {
  name: Scalars['String']['input'];
}


export interface MutationSellerUserMappingCreateArgs {
  input: SellerUserInput;
}


export interface MutationSellerWithOwnerCreateArgs {
  defaultBillingAddress: InputMaybe<AddressInput>;
  defaultShippingAddress: InputMaybe<AddressInput>;
  seller: DetailedSellerInput;
  user: SellerOwnerCreateInput;
}


export interface MutationShippingPriceBulkDeleteArgs {
  ids: Array<Scalars['ID']['input']>;
}


export interface MutationShippingPriceCreateArgs {
  input: ShippingPriceInput;
}


export interface MutationShippingPriceDeleteArgs {
  id: Scalars['ID']['input'];
}


export interface MutationShippingPriceUpdateArgs {
  id: Scalars['ID']['input'];
  input: ShippingPriceInput;
}


export interface MutationShippingZoneBulkDeleteArgs {
  ids: Array<Scalars['ID']['input']>;
}


export interface MutationShippingZoneCreateArgs {
  input: ShippingZoneCreateInput;
}


export interface MutationShippingZoneDeleteArgs {
  id: Scalars['ID']['input'];
}


export interface MutationShippingZoneUpdateArgs {
  id: Scalars['ID']['input'];
  input: ShippingZoneUpdateInput;
}


export interface MutationShopAddressUpdateArgs {
  input: InputMaybe<AddressInput>;
}


export interface MutationShopDomainUpdateArgs {
  input: InputMaybe<SiteDomainInput>;
}


export interface MutationShopSettingsUpdateArgs {
  input: ShopSettingsInput;
}


export interface MutationStaffBulkDeleteArgs {
  ids: Array<Scalars['ID']['input']>;
}


export interface MutationStaffCreateArgs {
  input: StaffCreateInput;
}


export interface MutationStaffDeleteArgs {
  id: Scalars['ID']['input'];
}


export interface MutationStaffUpdateArgs {
  id: Scalars['ID']['input'];
  input: StaffUpdateInput;
}


export interface MutationStorefrontThemeCreateArgs {
  input: StorefrontThemeInput;
}


export interface MutationStorefrontThemeUpdateArgs {
  id: Scalars['ID']['input'];
  input: StorefrontThemeInput;
}


export interface MutationTokenCreateArgs {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}


export interface MutationTokenCreateSsoArgs {
  accessCode: Scalars['String']['input'];
}


export interface MutationTokenRefreshArgs {
  csrfToken: InputMaybe<Scalars['String']['input']>;
  refreshToken: InputMaybe<Scalars['String']['input']>;
}


export interface MutationTokenVerifyArgs {
  token: Scalars['String']['input'];
}


export interface MutationUpdatePeriodicTaskEnabledArgs {
  enabled: InputMaybe<Scalars['Boolean']['input']>;
}


export interface MutationUserAddToPriceBookArgs {
  input: UserAddToPriceBookInput;
}


export interface MutationUserAvatarDeleteArgs {
  user: Scalars['ID']['input'];
}


export interface MutationUserAvatarUpdateArgs {
  image: Scalars['Upload']['input'];
  user: Scalars['ID']['input'];
}


export interface MutationUserBulkSetActiveArgs {
  ids: Array<Scalars['ID']['input']>;
  isActive: Scalars['Boolean']['input'];
}


export interface MutationUserRemoveFromPriceBookArgs {
  id: Scalars['ID']['input'];
}


export interface MutationVendorOrderReturnFromStorefrontNotificationArgs {
  input: OrderReturnNotificationInput;
  order: Scalars['ID']['input'];
}


export interface MutationVendorPayoutCreateArgs {
  payoutId: Scalars['ID']['input'];
  sellerId: Scalars['ID']['input'];
}


export interface MutationVendorPayoutNoteAddArgs {
  input: VendorPayoutAddNoteInput;
  vendorPayoutId: Scalars['ID']['input'];
}


export interface MutationVendorPayoutNoteUpdateArgs {
  id: Scalars['ID']['input'];
  input: VendorPayoutUpdateNoteInput;
}


export interface MutationVendorPayoutOnboardingLinkRequestArgs {
  gateway: Scalars['String']['input'];
  refreshUrl: Scalars['String']['input'];
  returnUrl: Scalars['String']['input'];
  vendorId: Scalars['ID']['input'];
  vendorType: Scalars['String']['input'];
}


export interface MutationVendorPayoutStatusUpdateArgs {
  id: Scalars['ID']['input'];
  input: VendorPayoutStatusInput;
}


export interface MutationVendorPayoutsBulkExcludeArgs {
  ids: Array<Scalars['ID']['input']>;
}


export interface MutationVendorPayoutsBulkIncludeArgs {
  ids: Array<Scalars['ID']['input']>;
}


export interface MutationVendorPayoutsBulkProcessArgs {
  gateway: Scalars['ID']['input'];
  ids: Array<InputMaybe<Scalars['ID']['input']>>;
}


export interface MutationVoucherBulkDeleteArgs {
  ids: Array<Scalars['ID']['input']>;
}


export interface MutationVoucherCataloguesAddArgs {
  id: Scalars['ID']['input'];
  input: CatalogueInput;
}


export interface MutationVoucherCataloguesRemoveArgs {
  id: Scalars['ID']['input'];
  input: CatalogueInput;
}


export interface MutationVoucherCreateArgs {
  input: VoucherInput;
}


export interface MutationVoucherDeleteArgs {
  id: Scalars['ID']['input'];
}


export interface MutationVoucherUpdateArgs {
  id: Scalars['ID']['input'];
  input: VoucherInput;
}


export interface MutationWarehouseCreateArgs {
  input: WarehouseCreateInput;
}


export interface MutationWarehouseDeleteArgs {
  id: Scalars['ID']['input'];
}


export interface MutationWarehouseUpdateArgs {
  id: Scalars['ID']['input'];
  input: WarehouseUpdateInput;
}


export interface MutationWebhookCreateArgs {
  input: WebhookCreateInput;
}


export interface MutationWebhookDeleteArgs {
  id: Scalars['ID']['input'];
}


export interface MutationWebhookUpdateArgs {
  id: Scalars['ID']['input'];
  input: WebhookUpdateInput;
}


export interface MutationWishlistAddProductArgs {
  productId: Scalars['ID']['input'];
  userId: InputMaybe<Scalars['ID']['input']>;
  wishlistId: InputMaybe<Scalars['ID']['input']>;
}


export interface MutationWishlistAddVariantArgs {
  userId: InputMaybe<Scalars['ID']['input']>;
  variantId: Scalars['ID']['input'];
  wishlistId: InputMaybe<Scalars['ID']['input']>;
}


export interface MutationWishlistCreateArgs {
  input: WishlistInput;
}


export interface MutationWishlistCreateForBuyerArgs {
  input: WishlistBuyerInput;
}


export interface MutationWishlistDeleteArgs {
  id: Scalars['ID']['input'];
}


export interface MutationWishlistItemUpdateArgs {
  id: Scalars['ID']['input'];
  input: WishlistItemUpdateInput;
}


export interface MutationWishlistRemoveProductArgs {
  productId: Scalars['ID']['input'];
  userId: InputMaybe<Scalars['ID']['input']>;
  wishlistId: InputMaybe<Scalars['ID']['input']>;
}


export interface MutationWishlistRemoveVariantArgs {
  userId: InputMaybe<Scalars['ID']['input']>;
  variantId: Scalars['ID']['input'];
  wishlistId: InputMaybe<Scalars['ID']['input']>;
}


export interface MutationWishlistSetDefaultArgs {
  wishlistId: Scalars['ID']['input'];
}


export interface MutationWishlistUpdateArgs {
  id: Scalars['ID']['input'];
  input: WishlistInput;
}

/** Represents a nautical configuration resource. */
export interface NauticalConfiguration {
  __typename?: 'NauticalConfiguration';
  /** Primary key name of the configuration item */
  configurationName: Maybe<Scalars['String']['output']>;
  /** Whether the configuration item is active or not */
  configurationValue: Maybe<Scalars['Boolean']['output']>;
  /** Date of the configuration item */
  configurationValueDatetime: Maybe<Scalars['DateTime']['output']>;
}

export interface NauticalConfigurationError {
  __typename?: 'NauticalConfigurationError';
  /** The error code. */
  code: NauticalConfigurationErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message: Scalars['String']['output'];
}

/** An enumeration. */
export enum NauticalConfigurationErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID'
}

export interface NauticalConfigurationInputItem {
  configurationName?: InputMaybe<Scalars['String']['input']>;
  configurationValue?: InputMaybe<Scalars['Boolean']['input']>;
  configurationValueDatetime?: InputMaybe<Scalars['DateTime']['input']>;
}

/** Updates nautical configuration. */
export interface NauticalConfigurationUpdate {
  __typename?: 'NauticalConfigurationUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  nauticalConfigurationErrors: Array<NauticalConfigurationError>;
  nauticalConfigurationList: Maybe<Array<NauticalConfiguration>>;
}

export interface NauticalCurrency {
  __typename?: 'NauticalCurrency';
  code: Scalars['String']['output'];
}

/** Deletes draft or quote orders. */
export interface NauticalDraftOrderBulkDelete {
  __typename?: 'NauticalDraftOrderBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  orderErrors: Array<OrderError>;
}

/** Completes creating an order. */
export interface NauticalDraftOrderComplete {
  __typename?: 'NauticalDraftOrderComplete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Completed nautical order. */
  order: Maybe<NauticalOrder>;
  orderErrors: Array<OrderError>;
  /** List of seller orders. */
  sellerOrders: Maybe<Array<Order>>;
}

/** Creates a new Nautical draft order. */
export interface NauticalDraftOrderCreate {
  __typename?: 'NauticalDraftOrderCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  nauticalOrder: Maybe<NauticalOrder>;
  orderErrors: Array<OrderError>;
}

export interface NauticalDraftOrderCreateInput {
  /** Billing address of the customer. */
  billingAddress?: InputMaybe<AddressInput>;
  /** A note from a customer. Visible by customers in the order summary. */
  customerNote?: InputMaybe<Scalars['String']['input']>;
  /**
   * DEPRECATED: This field will be removed after 2023-12-31. Discount amount for
   *             the order
   * @deprecated Use NauticalOrderUpdateApplyVoucherCode mutation instead.
   */
  discount?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** Variant line input consisting of variant ID and quantity of products. */
  lines?: InputMaybe<Array<OrderLineCreateInput>>;
  /** Optional purchase order numbers of documents that outline what the buyer would like to purchase and how much of it they would like to receive */
  poNumbers?: InputMaybe<Array<Scalars['String']['input']>>;
  seller?: InputMaybe<Scalars['ID']['input']>;
  /** Shipping address of the customer. */
  shippingAddress?: InputMaybe<AddressInput>;
  /**
   * ID of a selected shipping method. This field should be used only for Seller Orders.
   * @deprecated Unsupported field. Use "orderUpdateShipping" for updating shipping method for seller orders and "NauticalOrderUpdateShipping" for Marketplace orders.
   */
  shippingMethod?: InputMaybe<Scalars['ID']['input']>;
  /** Specify which nautical order we want to create (DRAFT, by default). */
  status?: InputMaybe<DraftOrderInitialStatus>;
  /**
   * Sub status the order is to be changed to. Draft orders can have or
   *         be given a sub status of AWAITING_PAYMENT. Quote order can have or be given a
   *         sub status of either QUOTE_REQUESTED or IN_REVIEW.
   */
  subStatus?: InputMaybe<OrderSubStatusEnum>;
  /** Optional transaction currency code. Domiciled currency will be used as fallback. */
  transactionCurrency?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['ID']['input']>;
  /** Email address of the customer. */
  userEmail?: InputMaybe<Scalars['String']['input']>;
  /**
   * DEPRECATED: This field will be removed after 2023-12-31. ID of the voucher
   *             associated with the order.
   * @deprecated Use NauticalOrderUpdateApplyVoucherCode mutation instead.
   */
  voucher?: InputMaybe<Scalars['ID']['input']>;
}

/** Deletes a draft order. */
export interface NauticalDraftOrderDelete {
  __typename?: 'NauticalDraftOrderDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  nauticalOrder: Maybe<NauticalOrder>;
  orderErrors: Array<OrderError>;
}

export interface NauticalDraftOrderInput {
  /** Billing address of the customer. */
  billingAddress?: InputMaybe<AddressInput>;
  /** A note from a customer. Visible by customers in the order summary. */
  customerNote?: InputMaybe<Scalars['String']['input']>;
  /**
   * DEPRECATED: This field will be removed after 2023-12-31. Discount amount for
   *             the order
   * @deprecated Use NauticalOrderUpdateApplyVoucherCode mutation instead.
   */
  discount?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** Optional purchase order numbers of documents that outline what the buyer would like to purchase and how much of it they would like to receive */
  poNumbers?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Shipping address of the customer. */
  shippingAddress?: InputMaybe<AddressInput>;
  /**
   * ID of a selected shipping method. This field should be used only for Seller Orders.
   * @deprecated Unsupported field. Use "orderUpdateShipping" for updating shipping method for seller orders and "NauticalOrderUpdateShipping" for Marketplace orders.
   */
  shippingMethod?: InputMaybe<Scalars['ID']['input']>;
  /**
   * Sub status the order is to be changed to. Draft orders can have or
   *         be given a sub status of AWAITING_PAYMENT. Quote order can have or be given a
   *         sub status of either QUOTE_REQUESTED or IN_REVIEW.
   */
  subStatus?: InputMaybe<OrderSubStatusEnum>;
  user?: InputMaybe<Scalars['ID']['input']>;
  /** Email address of the customer. */
  userEmail?: InputMaybe<Scalars['String']['input']>;
  /**
   * DEPRECATED: This field will be removed after 2023-12-31. ID of the voucher
   *             associated with the order.
   * @deprecated Use NauticalOrderUpdateApplyVoucherCode mutation instead.
   */
  voucher?: InputMaybe<Scalars['ID']['input']>;
}

/** Deletes an order line from a draft or quote order. */
export interface NauticalDraftOrderLineDelete {
  __typename?: 'NauticalDraftOrderLineDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** A related draft or quote order. */
  order: Maybe<NauticalOrder>;
  orderErrors: Array<OrderError>;
  /** An order line that was deleted. */
  orderLine: Maybe<NauticalOrderLine>;
}

/** Overrides unit net price of a marketplace order line of a draft, quote, or offer order. */
export interface NauticalDraftOrderLinePriceOverride {
  __typename?: 'NauticalDraftOrderLinePriceOverride';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** A related draft, quote, or offer marketplace order. */
  nauticalOrder: Maybe<NauticalOrder>;
  nauticalOrderLine: Maybe<NauticalOrderLine>;
  orderErrors: Array<OrderError>;
}

/** Updates an order line of a draft order. */
export interface NauticalDraftOrderLineUpdate {
  __typename?: 'NauticalDraftOrderLineUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  nauticalOrderLine: Maybe<NauticalOrderLine>;
  /** A related draft order. */
  order: Maybe<NauticalOrder>;
  orderErrors: Array<OrderError>;
}

/** Deletes order lines. */
export interface NauticalDraftOrderLinesBulkDelete {
  __typename?: 'NauticalDraftOrderLinesBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  orderErrors: Array<OrderError>;
}

/** Create order lines for a draft or quote order. */
export interface NauticalDraftOrderLinesCreate {
  __typename?: 'NauticalDraftOrderLinesCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** A related draft or quote order. */
  order: Maybe<NauticalOrder>;
  orderErrors: Array<OrderError>;
  /** List of newly added order lines. */
  orderLines: Maybe<Array<NauticalOrderLine>>;
}

/** Update currency in the existing nautical draft order object, related nautical order lines, child order and their lines. */
export interface NauticalDraftOrderSetTransactionCurrency {
  __typename?: 'NauticalDraftOrderSetTransactionCurrency';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Draft Nautical Order to update transaction currency. */
  nauticalOrder: Maybe<NauticalOrder>;
  orderErrors: Array<OrderError>;
}

/** Updates a draft or quote nautical order. */
export interface NauticalDraftOrderUpdate {
  __typename?: 'NauticalDraftOrderUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  nauticalOrder: Maybe<NauticalOrder>;
  orderErrors: Array<OrderError>;
}

/** Creates a new Nautical historical order. */
export interface NauticalHistoricalOrderCreate {
  __typename?: 'NauticalHistoricalOrderCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  nauticalOrder: Maybe<NauticalOrder>;
  orderErrors: Array<OrderError>;
}

export interface NauticalHistoricalOrderInput {
  /** Billing address of the customer. */
  billingAddress?: InputMaybe<AddressInput>;
  /** ID of the channel to attach the order to */
  channel?: InputMaybe<Scalars['ID']['input']>;
  /** Created date time of historical order in ISO 8601 format. */
  created?: InputMaybe<Scalars['DateTime']['input']>;
  /** Currency code. */
  currency?: InputMaybe<Scalars['String']['input']>;
  /** A note from a customer. Visible by customers in the order summary. */
  customerNote?: InputMaybe<Scalars['String']['input']>;
  /** Discount amount for the order. */
  discount?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** Order ID in the external source. */
  externalId?: InputMaybe<Scalars['String']['input']>;
  externalInventoryId?: InputMaybe<Scalars['String']['input']>;
  /** External source name. */
  externalSource?: InputMaybe<Scalars['String']['input']>;
  /** Variant line input consisting of variant ID and quantity of products. */
  lines?: InputMaybe<Array<HistoricalOrderLineInput>>;
  seller?: InputMaybe<Scalars['ID']['input']>;
  /** Shipping address of the customer. */
  shippingAddress?: InputMaybe<AddressInput>;
  /**
   * ID of a selected shipping method.
   * @deprecated This field should not be provided for Marketplace orders. Mutation "NauticalOrderUpdateShipping" should be used instead to set shipping method for each separate seller. This field will be removed after 2023-12-16.
   */
  shippingMethod?: InputMaybe<Scalars['ID']['input']>;
  /** Shipping price with taxes. */
  shippingPriceGrossAmount?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** Shipping price without taxes. */
  shippingPriceNetAmount?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** Total price with taxes. */
  totalGrossAmount?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** Total price without taxes. */
  totalNetAmount?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  user?: InputMaybe<Scalars['ID']['input']>;
  /** Email address of the customer. */
  userEmail?: InputMaybe<Scalars['String']['input']>;
}

/** Represents a nautical order in the shop. */
export interface NauticalOrder extends Node, ObjectWithMetadata {
  __typename?: 'NauticalOrder';
  /** List of actions that can be performed in the current state of an order. */
  actions: Array<OrderAction>;
  /** @deprecated This will be removed on Oct 26, 2024 when affiliate support is removed. */
  affiliate: Maybe<User>;
  /** @deprecated This will be removed on Oct 26, 2024 when affiliate support is removed. */
  affiliateCode: Maybe<AffiliateCodes>;
  /** List of sub-statuses that can be changed to based on current state of the order */
  allowedSubStatuses: Maybe<Array<OrderSubStatusEnum>>;
  /** Available shipping methods for each seller in this order. Note: this field designed for 'nauticalOrder(:id)' query. */
  availableShippingMethodsBySeller: Maybe<Array<MultiSellerShippingMethod>>;
  /** List of all bids made against the order. */
  bids: Maybe<Array<Bid>>;
  billingAddress: Maybe<Address>;
  /** Informs whether a draft order can be finalized (turned into a regular order). */
  canFinalize: Scalars['Boolean']['output'];
  /** Channel the marketplace order is associated with */
  channel: Maybe<Channel>;
  created: Scalars['DateTime']['output'];
  currency: Scalars['String']['output'];
  /** Latest bid made against the order. */
  currentBid: Maybe<Bid>;
  customerNote: Scalars['String']['output'];
  discount: Maybe<Money>;
  discountName: Maybe<Scalars['String']['output']>;
  displayGrossPrices: Scalars['Boolean']['output'];
  euInvoiceMessaging: Maybe<Scalars['String']['output']>;
  /** List of events associated with the order. */
  events: Maybe<Array<NauticalOrderEvent>>;
  /**
   * List of shipments for the order.
   * @deprecated Use the sellerFulfillments field. This field will be removed after 2024-02-01.
   */
  fulfillments: Array<Fulfillment>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** Data time when the order was imported from another platform. */
  importedAt: Maybe<Scalars['DateTime']['output']>;
  /** List of order invoices. */
  invoices: Maybe<Array<Invoice>>;
  /** Informs if an order is fully paid. */
  isPaid: Maybe<Scalars['Boolean']['output']>;
  /** Returns True, if order requires shipping. */
  isShippingRequired: Scalars['Boolean']['output'];
  languageCode: Scalars['String']['output'];
  /** List of nautical order lines. */
  lines: Array<NauticalOrderLine>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  mpVatIdentificationNumber: Maybe<Scalars['String']['output']>;
  /** User-friendly number of an order. */
  number: Maybe<Scalars['String']['output']>;
  orderSource: NauticalOrderOrderSource;
  /** Internal payment status. */
  paymentStatus: PaymentChargeStatusEnum;
  /** User-friendly payment status. */
  paymentStatusDisplay: Scalars['String']['output'];
  /** List of payments for the order. */
  payments: Maybe<Array<Payment>>;
  poNumbers: Maybe<Array<Scalars['String']['output']>>;
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /** List of all the refunds for this marketplace order. */
  refunds: Maybe<Array<Refund>>;
  /** List of seller shipments for the order. */
  sellerFulfillments: Array<Fulfillment>;
  /**
   * List of seller shipping methods
   * @deprecated
   *             This field is untyped and will be removed after 2024-02-01.
   *             To map fields from the JSON objects in this list, the following queries can be used instead:
   *             seller -> subOrder.seller.id
   *             shippingMethod.id -> subOrder.shippingMethod.id
   *             shippingMethod.name -> subOrder.shippingMethod.name,
   *             shippingMethod.price -> subOrder.shippingPrice.net.amount
   *             shippingMethod.currency -> subOrder.shippingPrice.net.currency
   *             shipingMethod.is_manual -> subOrder.isShippingPriceOverridden
   *
   */
  sellerShippingMethods: Maybe<Scalars['GenericScalar']['output']>;
  /** List */
  sellerUnfulfilled: Array<OrderLine>;
  shippingAddress: Maybe<Address>;
  shippingDiscount: Maybe<Money>;
  /**
   * Legacy shipping method
   * @deprecated This field will be removed after 2024-02-01.
   */
  shippingMethod: Maybe<ShippingMethod>;
  shippingMethodName: Scalars['String']['output'];
  /** Total price of shipping. */
  shippingPrice: Maybe<TaxedMoney>;
  /** Order status */
  status: NauticalOrderStatus;
  /** User-friendly order status. */
  statusDisplay: Maybe<Scalars['String']['output']>;
  /** List of all the vendor orders connected to this marketplace order. */
  subOrders: Maybe<Array<Order>>;
  subStatus: Maybe<NauticalOrderSubStatus>;
  /** The sum of line prices not including shipping. */
  subtotal: Maybe<TaxedMoney>;
  token: Scalars['String']['output'];
  /** Total amount of the order. */
  total: Maybe<TaxedMoney>;
  /** Amount authorized for the order across all payments. */
  totalAuthorized: Maybe<Money>;
  /** The difference between the paid and the order total amount. */
  totalBalance: Money;
  /** Amount captured for the order across all payments. */
  totalCaptured: Maybe<Money>;
  /** Amount refunded for the order across all payments. */
  totalRefunded: Maybe<Money>;
  trackingClientId: Scalars['String']['output'];
  translatedDiscountName: Maybe<Scalars['String']['output']>;
  updated: Maybe<Scalars['DateTime']['output']>;
  user: Maybe<User>;
  /** Email address of the customer. */
  userEmail: Maybe<Scalars['String']['output']>;
  /** Validation status for the order */
  validationStatus: Maybe<Array<ValidationStatus>>;
  vatIdentificationNumber: Maybe<Scalars['String']['output']>;
  /** Volume discount for the nautical order */
  volumeDiscount: Maybe<TaxedMoney>;
  voucher: Maybe<Voucher>;
  weight: Maybe<Weight>;
}


/** Represents a nautical order in the shop. */
export interface NauticalOrderTotalBalanceArgs {
  positive: InputMaybe<Scalars['Boolean']['input']>;
}

/** Adds note to the order. */
export interface NauticalOrderAddNote {
  __typename?: 'NauticalOrderAddNote';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Order note created. */
  event: Maybe<NauticalOrderEvent>;
  /** Order with the note added. */
  order: Maybe<NauticalOrder>;
  orderErrors: Array<OrderError>;
}

/** Cancel an order. */
export interface NauticalOrderCancel {
  __typename?: 'NauticalOrderCancel';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Canceled order. */
  order: Maybe<NauticalOrder>;
  orderErrors: Array<OrderError>;
}

/** Capture a nautical order. */
export interface NauticalOrderCapture {
  __typename?: 'NauticalOrderCapture';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Captured Nautical Order. */
  order: Maybe<NauticalOrder>;
  orderErrors: Array<OrderError>;
}

/** Updates a marketplace order channel. */
export interface NauticalOrderChannelUpdate {
  __typename?: 'NauticalOrderChannelUpdate';
  channelErrors: Array<ChannelError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Updated marketplace order instance */
  order: Maybe<NauticalOrder>;
}

export interface NauticalOrderCountableConnection {
  __typename?: 'NauticalOrderCountableConnection';
  edges: Array<NauticalOrderCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface NauticalOrderCountableEdge {
  __typename?: 'NauticalOrderCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: NauticalOrder;
}

export interface NauticalOrderDraftFilterInput {
  channel?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<DateRangeInput>;
  customer?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  isHistorical?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<MetadataFilterInput>;
  privateMetadata?: InputMaybe<MetadataFilterInput>;
  search?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<Array<OrderSourceFilter>>;
  subStatus?: InputMaybe<Array<OfferOrderSubStatusFilter>>;
}

/** History log of the order. */
export interface NauticalOrderEvent extends Node {
  __typename?: 'NauticalOrderEvent';
  /** Amount of money. */
  amount: Maybe<Scalars['Float']['output']>;
  /** Composed ID of the Fulfillment. */
  composedId: Maybe<Scalars['String']['output']>;
  /** Date when event happened at in ISO 8601 format. */
  date: Scalars['DateTime']['output'];
  /** Email of the customer. */
  email: Maybe<Scalars['String']['output']>;
  /** Type of an email sent to the customer. */
  emailType: Maybe<OrderEventsEmailsEnum>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** Number of an invoice related to the order. */
  invoiceNumber: Maybe<Scalars['String']['output']>;
  /** The concerned lines. */
  lines: Maybe<Array<NauticalOrderEventOrderLineObject>>;
  /** Content of the event. */
  message: Maybe<Scalars['String']['output']>;
  /** User-friendly number of an order. */
  orderNumber: Maybe<Scalars['String']['output']>;
  /** List of oversold lines names. */
  oversoldItems: Maybe<Array<Scalars['String']['output']>>;
  /** The payment gateway of the payment. */
  paymentGateway: Maybe<Scalars['String']['output']>;
  /** The payment ID from the payment gateway. */
  paymentId: Maybe<Scalars['String']['output']>;
  /** Number of items. */
  quantity: Maybe<Scalars['Int']['output']>;
  /** Order event type. */
  type: OrderEventsEnum;
  /** User who performed the action. */
  user: Maybe<User>;
  /** The warehouse were items were restocked. */
  warehouse: Maybe<Warehouse>;
}

export interface NauticalOrderEventCountableConnection {
  __typename?: 'NauticalOrderEventCountableConnection';
  edges: Array<NauticalOrderEventCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface NauticalOrderEventCountableEdge {
  __typename?: 'NauticalOrderEventCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: NauticalOrderEvent;
}

export interface NauticalOrderEventOrderLineObject {
  __typename?: 'NauticalOrderEventOrderLineObject';
  /** The variant name. */
  itemName: Maybe<Scalars['String']['output']>;
  /** The order line. */
  orderLine: Maybe<NauticalOrderLine>;
  /** The variant quantity. */
  quantity: Maybe<Scalars['Int']['output']>;
}

export interface NauticalOrderFilterInput {
  channel?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<DateRangeInput>;
  customer?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  isHistorical?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<MetadataFilterInput>;
  paymentStatus?: InputMaybe<Array<PaymentChargeStatusEnum>>;
  privateMetadata?: InputMaybe<MetadataFilterInput>;
  search?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<Array<OrderSourceFilter>>;
  status?: InputMaybe<Array<OrderStatusFilter>>;
  subStatus?: InputMaybe<Array<OfferOrderSubStatusFilter>>;
}

/** Represents order line of particular order. */
export interface NauticalOrderLine extends Node, ObjectWithMetadata {
  __typename?: 'NauticalOrderLine';
  digitalContentUrl: Maybe<DigitalContentUrl>;
  /** Price of the single item in the order line after sales */
  discountedUnitPrice: Maybe<TaxedMoney>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  isLinePriceOverridden: Scalars['Boolean']['output'];
  isShippingRequired: Scalars['Boolean']['output'];
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  note: Maybe<Scalars['String']['output']>;
  /** Price of the single item in the order line before sales */
  originalUnitPrice: Maybe<TaxedMoney>;
  /** The pricebook, if any, that changed the price of this line */
  priceBook: Maybe<PriceBook>;
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  productName: Scalars['String']['output'];
  productSku: Maybe<Scalars['String']['output']>;
  /**
   * The number of items ordered on this order line
   * @deprecated Use the more explicit quantityOrdered instead
   */
  quantity: Scalars['Int']['output'];
  /** @deprecated Marketplace Orders are not fulfilled. Use quantity_fulfilled on the seller OrderLine instead. This field will be removed after October 3, 2023. */
  quantityFulfilled: Scalars['Int']['output'];
  /** The number of items ordered on this order line */
  quantityOrdered: Scalars['Int']['output'];
  /** The sale, if any, that changed the price of this line */
  sale: Maybe<Sale>;
  /** Amount the total price for this line has been been reduced by a sale */
  saleDiscount: Maybe<Money>;
  /** List of secondary lines attached to this order line. */
  secondaryLines: Maybe<Array<NauticalSecondaryOrderLine>>;
  /** The related orderline attached to the connected seller order */
  sellerOrderline: Maybe<OrderLine>;
  /** The main thumbnail for the ordered product. */
  thumbnail: Maybe<Image>;
  /** Price of the order line. */
  totalPrice: Maybe<TaxedMoney>;
  /** Product name in the customer's language */
  translatedProductName: Scalars['String']['output'];
  /** Variant name in the customer's language */
  translatedVariantName: Scalars['String']['output'];
  /** Price of the single item in the order line. */
  unitPrice: Maybe<TaxedMoney>;
  unitPriceOverriddenNote: Maybe<Scalars['String']['output']>;
  /** A purchased product variant. Note: this field may be null if the variant has been removed from stock at all. */
  variant: Maybe<ProductVariant>;
  variantName: Scalars['String']['output'];
  /** Amount the total price for this line has been been reduced by a voucher */
  voucherDiscount: Maybe<Money>;
}


/** Represents order line of particular order. */
export interface NauticalOrderLineThumbnailArgs {
  size: InputMaybe<Scalars['Int']['input']>;
}

/** Add a note to a nautical order line. */
export interface NauticalOrderLineAddNote {
  __typename?: 'NauticalOrderLineAddNote';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  nauticalOrderLine: Maybe<NauticalOrderLine>;
  orderErrors: Array<OrderError>;
}

/** Cancels nautical order lines, associated order lines, and removes allocations for that order line. */
export interface NauticalOrderLineBulkCancel {
  __typename?: 'NauticalOrderLineBulkCancel';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** The nautical order that had a line cancelled. */
  order: Maybe<NauticalOrder>;
}

/** Uploads lines for a draft order via CSV. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec */
export interface NauticalOrderLinesCsvUpload {
  __typename?: 'NauticalOrderLinesCsvUpload';
  /** The csv file download link with error annotations. */
  csvFile: Maybe<ImportFile>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** The number of lines that failed to upload. */
  failedLines: Maybe<Scalars['Int']['output']>;
  /** The nautical order. */
  nauticalOrder: Maybe<NauticalOrder>;
  orderErrors: Array<OrderError>;
  /** The number of successfully uploaded lines from the csv. */
  successfulLines: Maybe<Scalars['Int']['output']>;
}

/** Mark order as manually paid. */
export interface NauticalOrderMarkAsPaid {
  __typename?: 'NauticalOrderMarkAsPaid';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Order marked as paid. */
  order: Maybe<NauticalOrder>;
  orderErrors: Array<OrderError>;
}

/** An enumeration. */
export enum NauticalOrderOrderSource {
  /** checkout */
  Checkout = 'CHECKOUT',
  /** draft */
  Draft = 'DRAFT',
  /** external */
  External = 'EXTERNAL',
  /** manual */
  Manual = 'MANUAL',
  /** offer */
  Offer = 'OFFER',
  /** quote */
  Quote = 'QUOTE'
}

/** Create and process a new payment for given nautical order. Be aware that in nautical orders flow, payment will be handled as part of this mutation; while in checkout flow, it will be processed as part of CheckoutComplete mutation. */
export interface NauticalOrderPaymentCreate {
  __typename?: 'NauticalOrderPaymentCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Related marketplace order object. */
  order: Maybe<NauticalOrder>;
  /** A newly created payment. */
  payment: Maybe<Payment>;
  paymentErrors: Array<PaymentError>;
}

export interface NauticalOrderQuoteFilterInput {
  channel?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<DateRangeInput>;
  customer?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  isHistorical?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<MetadataFilterInput>;
  privateMetadata?: InputMaybe<MetadataFilterInput>;
  search?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<Array<OrderSourceFilter>>;
  subStatus?: InputMaybe<Array<QuoteOrderSubStatusFilter>>;
}

/** Attempts to force a refresh of the existing taxes on a non-placed nautical order. */
export interface NauticalOrderRefreshTaxes {
  __typename?: 'NauticalOrderRefreshTaxes';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Nautical order with refreshed taxes. */
  nauticalOrder: Maybe<NauticalOrder>;
  orderErrors: Array<OrderError>;
}

/** Adds return notification note to the order. */
export interface NauticalOrderReturnFromStorefrontNotification {
  __typename?: 'NauticalOrderReturnFromStorefrontNotification';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Order return notification created. */
  event: Maybe<NauticalOrderEvent>;
  /** Order with return notification note added. */
  order: Maybe<NauticalOrder>;
  orderErrors: Array<OrderError>;
}

/** Adds return notification note to the order. */
export interface NauticalOrderReturnNotification {
  __typename?: 'NauticalOrderReturnNotification';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Order return notification created. */
  event: Maybe<NauticalOrderEvent>;
  /** Order with return notification note added. */
  order: Maybe<NauticalOrder>;
  orderErrors: Array<OrderError>;
}

/** An enumeration. */
export enum NauticalOrderStatus {
  Canceled = 'CANCELED',
  Delivered = 'DELIVERED',
  Draft = 'DRAFT',
  Fulfilled = 'FULFILLED',
  Offer = 'OFFER',
  PartiallyFulfilled = 'PARTIALLY_FULFILLED',
  Quote = 'QUOTE',
  ReturnAuthorized = 'RETURN_AUTHORIZED',
  ReturnCancelled = 'RETURN_CANCELLED',
  ReturnComplete = 'RETURN_COMPLETE',
  ReturnDeclined = 'RETURN_DECLINED',
  ReturnRequested = 'RETURN_REQUESTED',
  Unfulfilled = 'UNFULFILLED'
}

/** An enumeration. */
export enum NauticalOrderSubStatus {
  /** Awaiting Payment */
  AwaitingPayment = 'AWAITING_PAYMENT',
  /** Complete */
  Complete = 'COMPLETE',
  /** In Review */
  InReview = 'IN_REVIEW',
  /** Offer Approved */
  OfferApproved = 'OFFER_APPROVED',
  /** Offer Cancelled */
  OfferCancelled = 'OFFER_CANCELLED',
  /** Offer Created */
  OfferCreated = 'OFFER_CREATED',
  /** Offer Expired */
  OfferExpired = 'OFFER_EXPIRED',
  /** Offer Negotiating */
  OfferNegotiating = 'OFFER_NEGOTIATING',
  /** Offer Rejected */
  OfferRejected = 'OFFER_REJECTED',
  /** Quote Requested */
  QuoteRequested = 'QUOTE_REQUESTED'
}

/** Updates an order. */
export interface NauticalOrderUpdate {
  __typename?: 'NauticalOrderUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  nauticalOrder: Maybe<NauticalOrder>;
  orderErrors: Array<OrderError>;
}

/** Apply an existing voucher code to a nautical order to give a discount. */
export interface NauticalOrderUpdateApplyVoucherCode {
  __typename?: 'NauticalOrderUpdateApplyVoucherCode';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Nautical order with voucher code applied leading to a discount. */
  nauticalOrder: Maybe<NauticalOrder>;
  orderErrors: Array<OrderError>;
}

/** Remove a discount from a nautical order. */
export interface NauticalOrderUpdateDeleteDiscount {
  __typename?: 'NauticalOrderUpdateDeleteDiscount';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Nautical order with no discount. */
  nauticalOrder: Maybe<NauticalOrder>;
  orderErrors: Array<OrderError>;
}

export interface NauticalOrderUpdateInput {
  /** Billing address of the customer. */
  billingAddress?: InputMaybe<AddressInput>;
  /** Optional purchase order numbers of documents that outline what the buyer would like to purchase and how much of it they would like to receive */
  poNumbers?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Shipping address of the customer. */
  shippingAddress?: InputMaybe<AddressInput>;
  /** Email address of the customer. */
  userEmail?: InputMaybe<Scalars['String']['input']>;
}

/** Updates a shipping method of the order. */
export interface NauticalOrderUpdateShipping {
  __typename?: 'NauticalOrderUpdateShipping';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Nautical Order with updated shipping method. */
  order: Maybe<NauticalOrder>;
  orderErrors: Array<OrderError>;
}

export interface NauticalOrderUpdateShippingInput {
  /** Allows freeze shipping price and make it independent from the related shipping method price. If you make shipping price manual, and want unfreeze it (restore sync based on shipping method price) you can transfer 'false' value for this field. */
  isManual?: InputMaybe<Scalars['Boolean']['input']>;
  /** Manual price, that allows overwrite shipping method price. When this field provided, then 'isManual' will be set to the 'true'. You cannot transfer this field, when you explicitly transferring 'isManual: false' too (except the case, when this price will be equals to actual shipping method price). */
  newPrice?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** PK of seller to update shipping for on nautical order. */
  seller?: InputMaybe<Scalars['ID']['input']>;
  /** ID of the selected shipping method. */
  shippingMethod?: InputMaybe<Scalars['ID']['input']>;
}

/** Void a nautical order. */
export interface NauticalOrderVoid {
  __typename?: 'NauticalOrderVoid';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** A voided order. */
  order: Maybe<NauticalOrder>;
  orderErrors: Array<OrderError>;
}

/** Cancel a nautical quote order. */
export interface NauticalQuoteOrderCancel {
  __typename?: 'NauticalQuoteOrderCancel';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Canceled nautical quote order. */
  order: Maybe<NauticalOrder>;
  orderErrors: Array<OrderError>;
}

/** Sends a quote order to a customer. */
export interface NauticalQuoteOrderSendToCustomer {
  __typename?: 'NauticalQuoteOrderSendToCustomer';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Nautical order to send to customer */
  order: Maybe<NauticalOrder>;
  orderErrors: Array<OrderError>;
}

/** Represents secondary order line of particular marketplace order line. */
export interface NauticalSecondaryOrderLine extends Node {
  __typename?: 'NauticalSecondaryOrderLine';
  /** The ID of the object */
  id: Scalars['ID']['output'];
  isLinePriceOverridden: Scalars['Boolean']['output'];
  isShippingRequired: Scalars['Boolean']['output'];
  productName: Scalars['String']['output'];
  productSku: Maybe<Scalars['String']['output']>;
  /**
   * The number of items ordered on this order line
   * @deprecated Use the more explicit quantityOrdered instead
   */
  quantity: Maybe<Scalars['Int']['output']>;
  quantityFulfilled: Scalars['Int']['output'];
  /** The number of items ordered on this order line */
  quantityOrdered: Scalars['Int']['output'];
  /** The main thumbnail for the ordered product. */
  thumbnail: Maybe<Image>;
  /** Price of the order line. */
  totalPrice: Maybe<TaxedMoney>;
  /** Product name in the customer's language */
  translatedProductName: Scalars['String']['output'];
  /** Variant name in the customer's language */
  translatedVariantName: Scalars['String']['output'];
  /** Price of the single item in the order line. */
  unitPrice: Maybe<TaxedMoney>;
  unitPriceOverriddenNote: Maybe<Scalars['String']['output']>;
  /** A purchased product variant. Note: this field may be null if the variant has been removed from stock at all. */
  variant: Maybe<ProductVariant>;
  variantName: Scalars['String']['output'];
}


/** Represents secondary order line of particular marketplace order line. */
export interface NauticalSecondaryOrderLineThumbnailArgs {
  size: InputMaybe<Scalars['Int']['input']>;
}

/** Represents shop's navigation menus. */
export interface Navigation {
  __typename?: 'Navigation';
  /** Main navigation bar. */
  main: Maybe<Menu>;
  /** Secondary navigation bar. */
  secondary: Maybe<Menu>;
}

export enum NavigationType {
  /** Main storefront navigation. */
  Main = 'MAIN',
  /** Secondary storefront navigation. */
  Secondary = 'SECONDARY'
}

/** An object with an ID */
export interface Node {
  /** The ID of the object */
  id: Scalars['ID']['output'];
}

export interface NoteInput {
  /** Note */
  note: Scalars['String']['input'];
}

export enum NotifyEventTypeEnum {
  /** Account Activated */
  AccountActivated = 'ACCOUNT_ACTIVATED',
  /** Account Activate Request */
  AccountActivateRequest = 'ACCOUNT_ACTIVATE_REQUEST',
  /** Account Change Email Confirm */
  AccountChangeEmailConfirm = 'ACCOUNT_CHANGE_EMAIL_CONFIRM',
  /** Account Change Email Request */
  AccountChangeEmailRequest = 'ACCOUNT_CHANGE_EMAIL_REQUEST',
  /** Account Confirmation */
  AccountConfirmation = 'ACCOUNT_CONFIRMATION',
  /** Account Deactivated */
  AccountDeactivated = 'ACCOUNT_DEACTIVATED',
  /** Account Delete */
  AccountDelete = 'ACCOUNT_DELETE',
  /** Account Password Reset */
  AccountPasswordReset = 'ACCOUNT_PASSWORD_RESET',
  /** Account Set Customer Password */
  AccountSetCustomerPassword = 'ACCOUNT_SET_CUSTOMER_PASSWORD',
  /** Account Set Staff Password */
  AccountSetStaffPassword = 'ACCOUNT_SET_STAFF_PASSWORD',
  /** Account Staff Reset Password */
  AccountStaffResetPassword = 'ACCOUNT_STAFF_RESET_PASSWORD',
  /** Buyer Bid Action */
  BuyerBidAction = 'BUYER_BID_ACTION',
  /** Csv Export Failed */
  CsvExportFailed = 'CSV_EXPORT_FAILED',
  /** Csv Export Products Success */
  CsvExportProductsSuccess = 'CSV_EXPORT_PRODUCTS_SUCCESS',
  /** Import Catalog Failed */
  ImportCatalogFailed = 'IMPORT_CATALOG_FAILED',
  /** Import Catalog Success */
  ImportCatalogSuccess = 'IMPORT_CATALOG_SUCCESS',
  /** Invoice Ready */
  InvoiceReady = 'INVOICE_READY',
  /** Order Canceled */
  OrderCanceled = 'ORDER_CANCELED',
  /** Order Confirmation */
  OrderConfirmation = 'ORDER_CONFIRMATION',
  /** Order Fulfillment Confirmation */
  OrderFulfillmentConfirmation = 'ORDER_FULFILLMENT_CONFIRMATION',
  /** Order Fulfillment Denied */
  OrderFulfillmentDenied = 'ORDER_FULFILLMENT_DENIED',
  /** Order Fulfillment Update */
  OrderFulfillmentUpdate = 'ORDER_FULFILLMENT_UPDATE',
  /** Order Payment Confirmation */
  OrderPaymentConfirmation = 'ORDER_PAYMENT_CONFIRMATION',
  /** Order Refund Confirmation */
  OrderRefundConfirmation = 'ORDER_REFUND_CONFIRMATION',
  /** Partial Order Cancel */
  PartialOrderCancel = 'PARTIAL_ORDER_CANCEL',
  /** Pending Customer */
  PendingCustomer = 'PENDING_CUSTOMER',
  /** Pending Order */
  PendingOrder = 'PENDING_ORDER',
  /** Pending Quote */
  PendingQuote = 'PENDING_QUOTE',
  /** Pending Seller */
  PendingSeller = 'PENDING_SELLER',
  /** Quote Requested */
  QuoteRequested = 'QUOTE_REQUESTED',
  /** Seller Bid Action */
  SellerBidAction = 'SELLER_BID_ACTION',
  /** Staff Order Confirmation */
  StaffOrderConfirmation = 'STAFF_ORDER_CONFIRMATION',
  /** Updated Status */
  UpdatedStatus = 'UPDATED_STATUS',
  /** Vendor Payout Confirmation */
  VendorPayoutConfirmation = 'VENDOR_PAYOUT_CONFIRMATION',
  /** Vin Decode Failed */
  VinDecodeFailed = 'VIN_DECODE_FAILED',
  /** Vin Decode Success */
  VinDecodeSuccess = 'VIN_DECODE_SUCCESS'
}

export enum OauthProviderSourceEnum {
  Firebase = 'FIREBASE',
  Workos = 'WORKOS'
}

export interface ObjectWithMetadata {
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
}

export enum OfferOrderSubStatusFilter {
  OfferApproved = 'OFFER_APPROVED',
  OfferCancelled = 'OFFER_CANCELLED',
  OfferCreated = 'OFFER_CREATED',
  OfferExpired = 'OFFER_EXPIRED',
  OfferNegotiating = 'OFFER_NEGOTIATING',
  OfferRejected = 'OFFER_REJECTED'
}

export interface OptimizedAffiliate {
  __typename?: 'OptimizedAffiliate';
  affiliate: Maybe<User>;
  agreement: Maybe<Agreement>;
  channels: Maybe<Array<OptimizedAffiliateChannels>>;
  topCodes: Maybe<Array<AffiliateCodes>>;
}

export interface OptimizedAffiliateChannels {
  __typename?: 'OptimizedAffiliateChannels';
  channelName: Maybe<Scalars['String']['output']>;
  totalReferrals: Maybe<Scalars['Int']['output']>;
}

export interface OptimizedHome {
  __typename?: 'OptimizedHome';
  marketplaceActivities: Maybe<Array<NauticalOrderEvent>>;
  orders: Maybe<Scalars['Int']['output']>;
  outOfStock: Maybe<Scalars['Int']['output']>;
  sales: Maybe<TaxedMoney>;
  sellerActivities: Maybe<Array<OrderEvent>>;
  toCapture: Maybe<Scalars['Int']['output']>;
  toFulfill: Maybe<Scalars['Int']['output']>;
  topProducts: Maybe<Array<ProductVariant>>;
}

/** Represents an order in the shop. */
export interface Order extends Node, ObjectWithMetadata {
  __typename?: 'Order';
  /**
   * List of actions that can be performed in the current state of an order.
   * @deprecated This field should not be used as Orders will be changed to have no actions.All actions should be performed against the NauticalOrder.
   */
  actions: Array<OrderAction>;
  /** @deprecated This will be removed on Oct 26, 2024 when affiliate support is removed. */
  affiliate: Maybe<User>;
  /** @deprecated This will be removed on Oct 26, 2024 when affiliate support is removed. */
  affiliateCode: Maybe<AffiliateCodes>;
  /**
   * Affiliate commission for the order
   * @deprecated This will be removed on Oct 26, 2024 when affiliate support is removed.
   */
  affiliateCommission: Maybe<Money>;
  /** List of sub-statuses that can be changed to based on current state of the order */
  allowedSubStatuses: Maybe<Array<OrderSubStatusEnum>>;
  /** Remaining available balance to be paid out. */
  availablePayoutBalance: Maybe<Money>;
  /** Shipping methods that can be used with this order. */
  availableShippingMethods: Maybe<Array<ShippingMethod>>;
  /** List of all bids made against the order. */
  bids: Maybe<Array<Bid>>;
  billingAddress: Maybe<Address>;
  /** Informs whether a draft order can be finalized (turned into a regular order). */
  canFinalize: Scalars['Boolean']['output'];
  /** Channel the order is associated with */
  channel: Maybe<Channel>;
  created: Scalars['DateTime']['output'];
  currency: Scalars['String']['output'];
  /** Latest bid made against the order. */
  currentBid: Maybe<Bid>;
  customerNote: Scalars['String']['output'];
  discount: Maybe<Money>;
  discountName: Maybe<Scalars['String']['output']>;
  displayGrossPrices: Scalars['Boolean']['output'];
  euInvoiceMessaging: Maybe<Scalars['String']['output']>;
  /** List of events associated with the order. */
  events: Maybe<Array<OrderEvent>>;
  fees: Maybe<Array<OrderFee>>;
  /** List of shipments for the order. */
  fulfillments: Array<Fulfillment>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** Data time when the order was imported from another platform. */
  importedAt: Maybe<Scalars['DateTime']['output']>;
  /** List of order invoices. */
  invoices: Maybe<Array<Invoice>>;
  /** Determines if seller is the only seller on the related nautical order. Note: if nautical order doesn't exist - will return None. */
  isOnlySellerOnNauticalOrder: Maybe<Scalars['Boolean']['output']>;
  /** Informs if an order is fully paid. */
  isPaid: Maybe<Scalars['Boolean']['output']>;
  /** Indicates that the shipping price is set manually by user rather than taken from a related shipping method. */
  isShippingPriceOverridden: Scalars['Boolean']['output'];
  /** Returns True, if order requires shipping. */
  isShippingRequired: Scalars['Boolean']['output'];
  languageCode: Scalars['String']['output'];
  /** List of order lines. */
  lines: Array<OrderLine>;
  /** Marketplace order that this seller order belongs to. */
  marketplaceOrder: Maybe<NauticalOrder>;
  /** User-friendly number of the marketplace order this order belongs to. */
  marketplaceOrderNumber: Maybe<Scalars['String']['output']>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  mpVatIdentificationNumber: Maybe<Scalars['String']['output']>;
  /** User-friendly number of an order. */
  number: Maybe<Scalars['String']['output']>;
  orderSource: OrderOrderSource;
  /** Original total amount of the order. */
  originalTotal: Maybe<TaxedMoney>;
  /** Internal payment status. */
  paymentStatus: PaymentChargeStatusEnum;
  /** User-friendly payment status. */
  paymentStatusDisplay: Scalars['String']['output'];
  /**
   * List of payments for the order.
   * @deprecated This field should not be used as Payments will be changed to no longer be attached directly to an Order. Check the NauticalOrder payments instead. This field will be removed after 2024-01-01.
   */
  payments: Maybe<Array<Payment>>;
  /** Order payout status. */
  payoutStatus: Maybe<OrderPayoutStatusEnum>;
  /** Summary of all payouts of this order */
  payoutsSummary: Array<OrderPayoutSummary>;
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /** Seller this order belongs to */
  seller: Maybe<Seller>;
  /** Seller commission for the order */
  sellerCommission: Maybe<Money>;
  shippingAddress: Maybe<Address>;
  shippingMethod: Maybe<ShippingMethod>;
  shippingMethodName: Maybe<Scalars['String']['output']>;
  /** Total price of shipping. */
  shippingPrice: Maybe<TaxedMoney>;
  /** Order status */
  status: OrderStatus;
  /** User-friendly order status. */
  statusDisplay: Maybe<Scalars['String']['output']>;
  subStatus: Maybe<OrderSubStatus>;
  /** The sum of line prices not including shipping. */
  subtotal: Maybe<TaxedMoney>;
  token: Scalars['String']['output'];
  /** Total amount of the order. */
  total: Maybe<TaxedMoney>;
  /**
   * Amount authorized for the order.
   * @deprecated This field should not be used as Payments will be changed to no longer be attached directly to an Order. Check the NauticalOrder total_authorized amount instead. This field will be removed after 2024-02-01.
   */
  totalAuthorized: Maybe<Money>;
  /**
   * The difference between the paid and the order total amount.
   * @deprecated Payments are no longer attached to an Order. Check the NauticalOrder instead. This field will be removed after 2024-02-01.
   */
  totalBalance: Money;
  /**
   * Amount captured by payment.
   * @deprecated This field should not be used as Payments will be changed to no longer be attached directly to an Order. Check the NauticalOrder total_captured amount instead. This field will be removed after 2024-02-01.
   */
  totalCaptured: Maybe<Money>;
  trackingClientId: Scalars['String']['output'];
  translatedDiscountName: Maybe<Scalars['String']['output']>;
  updated: Maybe<Scalars['DateTime']['output']>;
  user: Maybe<User>;
  /** Email address of the customer. */
  userEmail: Maybe<Scalars['String']['output']>;
  /** Validation status for the order */
  validationStatus: Maybe<Array<ValidationStatus>>;
  vatCode: Scalars['String']['output'];
  vatIdentificationNumber: Maybe<Scalars['String']['output']>;
  vendorPayout: Maybe<VendorPayout>;
  /** Volume discount for the order */
  volumeDiscount: Maybe<TaxedMoney>;
  voucher: Maybe<Voucher>;
  weight: Maybe<Weight>;
}

export enum OrderAction {
  /** Represents the capture action. */
  Capture = 'CAPTURE',
  /** Represents a mark-as-paid action. */
  MarkAsPaid = 'MARK_AS_PAID',
  /** Represents a refund action. */
  Refund = 'REFUND',
  /** Represents a void action. */
  Void = 'VOID'
}

/** Adds note to the order. */
export interface OrderAddNote {
  __typename?: 'OrderAddNote';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Order note created. */
  event: Maybe<OrderEvent>;
  /** Order with the note added. */
  order: Maybe<Order>;
  orderErrors: Array<OrderError>;
}

export interface OrderAddNoteInput {
  /** Note message. */
  message: Scalars['String']['input'];
}

export interface OrderAffiliateReportType {
  __typename?: 'OrderAffiliateReportType';
  affiliate: Maybe<User>;
  /** @deprecated This will be removed on Oct 26, 2024 when affiliate support is removed. */
  affiliateCommission: Maybe<Scalars['Float']['output']>;
  affiliateId: Maybe<Scalars['Int']['output']>;
  average: Maybe<Scalars['Float']['output']>;
  commission: Maybe<Scalars['Float']['output']>;
  discounts: Maybe<Scalars['Float']['output']>;
  gross: Maybe<Scalars['Float']['output']>;
  net: Maybe<Scalars['Float']['output']>;
  orders: Maybe<Scalars['Int']['output']>;
  payout: Maybe<Scalars['Float']['output']>;
  revenue: Maybe<Scalars['Float']['output']>;
  shipping: Maybe<Scalars['Float']['output']>;
  taxes: Maybe<Scalars['Float']['output']>;
  totals: Maybe<Scalars['Int']['output']>;
  volumeDiscounts: Maybe<Scalars['Float']['output']>;
}

export interface OrderAffiliateSummaryType {
  __typename?: 'OrderAffiliateSummaryType';
  /** @deprecated This will be removed on Oct 26, 2024 when affiliate support is removed. */
  affiliateCommission: Maybe<Scalars['Float']['output']>;
  affiliates: Maybe<Scalars['Float']['output']>;
  average: Maybe<Scalars['Float']['output']>;
  commission: Maybe<Scalars['Float']['output']>;
  discounts: Maybe<Scalars['Float']['output']>;
  gross: Maybe<Scalars['Float']['output']>;
  net: Maybe<Scalars['Float']['output']>;
  orders: Maybe<Scalars['Int']['output']>;
  payout: Maybe<Scalars['Float']['output']>;
  revenue: Maybe<Scalars['Float']['output']>;
  shipping: Maybe<Scalars['Float']['output']>;
  taxes: Maybe<Scalars['Float']['output']>;
  totals: Maybe<Scalars['Int']['output']>;
  volumeDiscounts: Maybe<Scalars['Float']['output']>;
}

/** Cancels orders. */
export interface OrderBulkCancel {
  __typename?: 'OrderBulkCancel';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  orderErrors: Array<OrderError>;
}

/** Cancel an order. */
export interface OrderCancel {
  __typename?: 'OrderCancel';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Canceled order. */
  order: Maybe<Order>;
  orderErrors: Array<OrderError>;
}

/** Updates an order channel */
export interface OrderChannelUpdate {
  __typename?: 'OrderChannelUpdate';
  channelErrors: Array<ChannelError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Updated order instance */
  order: Maybe<Order>;
}

export interface OrderCountableConnection {
  __typename?: 'OrderCountableConnection';
  edges: Array<OrderCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface OrderCountableEdge {
  __typename?: 'OrderCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Order;
}

export interface OrderCustomerReportType {
  __typename?: 'OrderCustomerReportType';
  /** @deprecated This will be removed on Oct 26, 2024 when affiliate support is removed. */
  affiliateCommission: Maybe<Scalars['Float']['output']>;
  average: Maybe<Scalars['Float']['output']>;
  commission: Maybe<Scalars['Float']['output']>;
  discounts: Maybe<Scalars['Float']['output']>;
  gross: Maybe<Scalars['Float']['output']>;
  net: Maybe<Scalars['Float']['output']>;
  orders: Maybe<Scalars['Int']['output']>;
  payout: Maybe<Scalars['Float']['output']>;
  revenue: Maybe<Scalars['Float']['output']>;
  shipping: Maybe<Scalars['Float']['output']>;
  taxes: Maybe<Scalars['Float']['output']>;
  totals: Maybe<Scalars['Int']['output']>;
  user: Maybe<User>;
  userId: Maybe<Scalars['Int']['output']>;
  volumeDiscounts: Maybe<Scalars['Float']['output']>;
}

/** Decline (permanently) part of an order. The buyer will not be charged for the missing stock. Use if stock in a warehouse is damaged, expired, or unavailable.  */
export interface OrderDeclineFulfillment {
  __typename?: 'OrderDeclineFulfillment';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** List of created declined fulfillments. */
  fulfillments: Maybe<Array<Fulfillment>>;
  /** The order that has been partially declined. */
  order: Maybe<Order>;
  orderErrors: Array<OrderError>;
}

export enum OrderDirection {
  /** Specifies an ascending sort order. */
  Asc = 'ASC',
  /** Specifies a descending sort order. */
  Desc = 'DESC'
}

export interface OrderDraftFilterInput {
  channel?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<DateRangeInput>;
  customer?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  isHistorical?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<MetadataFilterInput>;
  privateMetadata?: InputMaybe<MetadataFilterInput>;
  search?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<Array<OrderSourceFilter>>;
  subStatus?: InputMaybe<Array<OfferOrderSubStatusFilter>>;
}

export interface OrderError {
  __typename?: 'OrderError';
  /** The error code. */
  code: OrderErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message: Scalars['String']['output'];
  /** Order line ID which causes the error. */
  orderLine: Maybe<Scalars['ID']['output']>;
  /** Variant ID which causes the error. */
  variant: Maybe<Scalars['ID']['output']>;
  /** Warehouse ID which causes the error. */
  warehouse: Maybe<Scalars['ID']['output']>;
}

/** An enumeration. */
export enum OrderErrorCode {
  BillingAddressNotSet = 'BILLING_ADDRESS_NOT_SET',
  CannotAddFee = 'CANNOT_ADD_FEE',
  CannotCancelFulfillment = 'CANNOT_CANCEL_FULFILLMENT',
  CannotCancelOrder = 'CANNOT_CANCEL_ORDER',
  CannotDeclineFulfillment = 'CANNOT_DECLINE_FULFILLMENT',
  CannotDelete = 'CANNOT_DELETE',
  CannotFulfillOrder = 'CANNOT_FULFILL_ORDER',
  CannotRefund = 'CANNOT_REFUND',
  CannotReturnFulfillment = 'CANNOT_RETURN_FULFILLMENT',
  CannotUpdateFulfillment = 'CANNOT_UPDATE_FULFILLMENT',
  CaptureInactivePayment = 'CAPTURE_INACTIVE_PAYMENT',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  FulfillOrderLine = 'FULFILL_ORDER_LINE',
  GraphqlError = 'GRAPHQL_ERROR',
  InsufficientStock = 'INSUFFICIENT_STOCK',
  Invalid = 'INVALID',
  InvalidPhone = 'INVALID_PHONE',
  NotEditable = 'NOT_EDITABLE',
  NotFound = 'NOT_FOUND',
  OrderNoShippingAddress = 'ORDER_NO_SHIPPING_ADDRESS',
  PaymentError = 'PAYMENT_ERROR',
  PaymentMissing = 'PAYMENT_MISSING',
  PayoutStatusChangeNotAllowed = 'PAYOUT_STATUS_CHANGE_NOT_ALLOWED',
  PermissionDenied = 'PERMISSION_DENIED',
  PriceOverrideNotAllowed = 'PRICE_OVERRIDE_NOT_ALLOWED',
  ProductNotPublished = 'PRODUCT_NOT_PUBLISHED',
  ProductUnavailableForPurchase = 'PRODUCT_UNAVAILABLE_FOR_PURCHASE',
  QuotePaymentError = 'QUOTE_PAYMENT_ERROR',
  Required = 'REQUIRED',
  ShippingMethodNotApplicable = 'SHIPPING_METHOD_NOT_APPLICABLE',
  ShippingMethodRequired = 'SHIPPING_METHOD_REQUIRED',
  TaxError = 'TAX_ERROR',
  Unique = 'UNIQUE',
  VoidInactivePayment = 'VOID_INACTIVE_PAYMENT',
  VoucherNotApplicable = 'VOUCHER_NOT_APPLICABLE',
  ZeroQuantity = 'ZERO_QUANTITY'
}

/** History log of the order. */
export interface OrderEvent extends Node {
  __typename?: 'OrderEvent';
  /** Amount of money. */
  amount: Maybe<Scalars['Float']['output']>;
  /** Composed ID of the Fulfillment. */
  composedId: Maybe<Scalars['String']['output']>;
  /** Date when event happened at in ISO 8601 format. */
  date: Scalars['DateTime']['output'];
  /** Email of the customer. */
  email: Maybe<Scalars['String']['output']>;
  /** Type of an email sent to the customer. */
  emailType: Maybe<OrderEventsEmailsEnum>;
  /** The lines fulfilled. */
  fulfilledItems: Maybe<Array<FulfillmentLine>>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** Number of an invoice related to the order. */
  invoiceNumber: Maybe<Scalars['String']['output']>;
  /** The concerned lines. */
  lines: Maybe<Array<OrderEventOrderLineObject>>;
  /** Content of the event. */
  message: Maybe<Scalars['String']['output']>;
  /** User-friendly number of an order. */
  orderNumber: Maybe<Scalars['String']['output']>;
  /** List of oversold lines names. */
  oversoldItems: Maybe<Array<Scalars['String']['output']>>;
  /** The payment gateway of the payment. */
  paymentGateway: Maybe<Scalars['String']['output']>;
  /** The payment ID from the payment gateway. */
  paymentId: Maybe<Scalars['String']['output']>;
  /** Number of items. */
  quantity: Maybe<Scalars['Int']['output']>;
  /** Order event type. */
  type: Maybe<OrderEventsEnum>;
  /** User who performed the action. */
  user: Maybe<User>;
  /** The warehouse were items were restocked. */
  warehouse: Maybe<Warehouse>;
}

export interface OrderEventCountableConnection {
  __typename?: 'OrderEventCountableConnection';
  edges: Array<OrderEventCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface OrderEventCountableEdge {
  __typename?: 'OrderEventCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: OrderEvent;
}

export interface OrderEventOrderLineObject {
  __typename?: 'OrderEventOrderLineObject';
  /** The variant name. */
  itemName: Maybe<Scalars['String']['output']>;
  /** The order line. */
  orderLine: Maybe<OrderLine>;
  /** The variant quantity. */
  quantity: Maybe<Scalars['Int']['output']>;
}

export enum OrderEventsEmailsEnum {
  /** A bid action performed by the buyer triggered email to be sent */
  BuyerBidAction = 'BUYER_BID_ACTION',
  /** The order confirmed email was sent */
  Confirmed = 'CONFIRMED',
  /** The email containing the digital links was sent */
  DigitalLinks = 'DIGITAL_LINKS',
  /** The fulfillment confirmation email was sent */
  FulfillmentConfirmation = 'FULFILLMENT_CONFIRMATION',
  /** fulfillment_denied */
  FulfillmentDenied = 'FULFILLMENT_DENIED',
  /** The marketplace operator order notification email was sent */
  MpoOrderNotification = 'MPO_ORDER_NOTIFICATION',
  /** The order cancel confirmation email was sent */
  OrderCancel = 'ORDER_CANCEL',
  /** The order placement confirmation email was sent */
  OrderConfirmation = 'ORDER_CONFIRMATION',
  /** The order refund confirmation email was sent */
  OrderRefund = 'ORDER_REFUND',
  /** The partial order cancel confirmation email was sent */
  PartialOrderCancel = 'PARTIAL_ORDER_CANCEL',
  /** The payment confirmation email was sent */
  PaymentConfirmation = 'PAYMENT_CONFIRMATION',
  /** The quote request email was sent to the marketplace operator */
  QuoteRequested = 'QUOTE_REQUESTED',
  /** The quote email was sent */
  QuoteSent = 'QUOTE_SENT',
  /** A bid action performed by the seller triggered email to be sent */
  SellerBidAction = 'SELLER_BID_ACTION',
  /** The shipping confirmation email was sent */
  ShippingConfirmation = 'SHIPPING_CONFIRMATION',
  /** The fulfillment tracking code email was sent */
  TrackingUpdated = 'TRACKING_UPDATED'
}

export enum OrderEventsEnum {
  /** Some products were added to the order */
  AddedProducts = 'ADDED_PRODUCTS',
  /** The order was canceled */
  Canceled = 'CANCELED',
  /** Order was confirmed */
  Confirmed = 'CONFIRMED',
  /** Some products were added to the draft order */
  DraftAddedProducts = 'DRAFT_ADDED_PRODUCTS',
  /** The draft order was created */
  DraftCreated = 'DRAFT_CREATED',
  /** Some products were removed from the draft order */
  DraftRemovedProducts = 'DRAFT_REMOVED_PRODUCTS',
  /** The draft order was updated */
  DraftUpdated = 'DRAFT_UPDATED',
  /** The email was sent */
  EmailSent = 'EMAIL_SENT',
  /** Notification from external service */
  ExternalServiceNotification = 'EXTERNAL_SERVICE_NOTIFICATION',
  /** A fulfillment was canceled */
  FulfillmentCanceled = 'FULFILLMENT_CANCELED',
  /** Some items had fulfillment declined */
  FulfillmentDeclinedItems = 'FULFILLMENT_DECLINED_ITEMS',
  /** Some items were fulfilled */
  FulfillmentFulfilledItems = 'FULFILLMENT_FULFILLED_ITEMS',
  /** The items of the fulfillment were restocked */
  FulfillmentRestockedItems = 'FULFILLMENT_RESTOCKED_ITEMS',
  /** An invoice was generated */
  InvoiceGenerated = 'INVOICE_GENERATED',
  /** An invoice was requested */
  InvoiceRequested = 'INVOICE_REQUESTED',
  /** An invoice was sent */
  InvoiceSent = 'INVOICE_SENT',
  /** An invoice was updated */
  InvoiceUpdated = 'INVOICE_UPDATED',
  /** A line unit price was overridden */
  LinePriceOverridden = 'LINE_PRICE_OVERRIDDEN',
  /** A note was added to the order */
  NoteAdded = 'NOTE_ADDED',
  /** The order was fully paid */
  OrderFullyPaid = 'ORDER_FULLY_PAID',
  /** The order was manually marked as delivered */
  OrderMarkedAsDelivered = 'ORDER_MARKED_AS_DELIVERED',
  /** The order was manually marked as fully paid */
  OrderMarkedAsPaid = 'ORDER_MARKED_AS_PAID',
  /** An unknown order event containing a message */
  Other = 'OTHER',
  /** The draft order was placed with oversold items */
  OversoldItems = 'OVERSOLD_ITEMS',
  /** The payment was authorized */
  PaymentAuthorized = 'PAYMENT_AUTHORIZED',
  /** The payment was captured */
  PaymentCaptured = 'PAYMENT_CAPTURED',
  /** The payment was failed */
  PaymentFailed = 'PAYMENT_FAILED',
  /** The payment was refunded */
  PaymentRefunded = 'PAYMENT_REFUNDED',
  /** The payment was voided */
  PaymentVoided = 'PAYMENT_VOIDED',
  /** The order payout status was manually changed */
  PayoutStatusManuallyChanged = 'PAYOUT_STATUS_MANUALLY_CHANGED',
  /** The order was placed */
  Placed = 'PLACED',
  /** The draft order was placed */
  PlacedFromDraft = 'PLACED_FROM_DRAFT',
  /** The quote order was placed */
  PlacedFromQuote = 'PLACED_FROM_QUOTE',
  /** Some products were added to the quote order */
  QuoteAddedProducts = 'QUOTE_ADDED_PRODUCTS',
  /** The quote order was created */
  QuoteCreated = 'QUOTE_CREATED',
  /** Some products were removed from the quote order */
  QuoteRemovedProducts = 'QUOTE_REMOVED_PRODUCTS',
  /** The quote order was updated */
  QuoteUpdated = 'QUOTE_UPDATED',
  /** A refund receipt was generated */
  RefundReceiptGenerated = 'REFUND_RECEIPT_GENERATED',
  /** Some products were removed from the order */
  RemovedProducts = 'REMOVED_PRODUCTS',
  /** A return request was authorized for the order */
  ReturnAuthorized = 'RETURN_AUTHORIZED',
  /** A return request was cancelled for the order */
  ReturnCancelled = 'RETURN_CANCELLED',
  /** A return has been completed for the order */
  ReturnComplete = 'RETURN_COMPLETE',
  /** A return request was declined for the order */
  ReturnDeclined = 'RETURN_DECLINED',
  /** A return request was received for the order */
  ReturnReceived = 'RETURN_RECEIVED',
  /** A return was requested for the order */
  ReturnRequested = 'RETURN_REQUESTED',
  /** The fulfillment's tracking code was updated */
  TrackingUpdated = 'TRACKING_UPDATED',
  /** The address from the placed order was updated */
  UpdatedAddress = 'UPDATED_ADDRESS'
}

/** Extra fee associated with an order */
export interface OrderFee extends Node {
  __typename?: 'OrderFee';
  /** Currency of the fee. */
  currency: NauticalCurrency;
  data: Scalars['JSONString']['output'];
  domiciledAmount: Scalars['Decimal']['output'];
  domiciledFee: Maybe<Money>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  notes: Scalars['String']['output'];
  order: Maybe<Order>;
  /** Source fee type. */
  source: Maybe<SourceFeeEnum>;
  transactionAmount: Scalars['Decimal']['output'];
  /** Transaction currency of the fee. */
  transactionCurrency: NauticalCurrency;
  transactionFee: Maybe<Money>;
}

/** Creates a new order fee. */
export interface OrderFeeCreate {
  __typename?: 'OrderFeeCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  orderErrors: Array<OrderError>;
  /** An order fee that was created. */
  orderFee: Maybe<OrderFee>;
}

/** Deletes a order fee. */
export interface OrderFeeDelete {
  __typename?: 'OrderFeeDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  orderErrors: Array<OrderError>;
  /** An order fee that was deleted. */
  orderFee: Maybe<OrderFee>;
}

export interface OrderFeeInput {
  /** Value of the fee in domiciled currency. */
  feeValue: Scalars['Decimal']['input'];
  /** Name of the order fee. */
  name: Scalars['String']['input'];
  /** Notes of the order fee. */
  notes?: InputMaybe<Scalars['String']['input']>;
  /** ID of the order to create the fee against. */
  order: Scalars['ID']['input'];
}

export interface OrderFilterInput {
  channel?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<DateRangeInput>;
  customer?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  isHistorical?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<MetadataFilterInput>;
  paymentStatus?: InputMaybe<Array<PaymentChargeStatusEnum>>;
  payoutStatus?: InputMaybe<Array<OrderPayoutStatusEnum>>;
  privateMetadata?: InputMaybe<MetadataFilterInput>;
  search?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<Array<OrderSourceFilter>>;
  status?: InputMaybe<Array<OrderStatusFilter>>;
  subStatus?: InputMaybe<Array<OfferOrderSubStatusFilter>>;
}

/** Creates new fulfillments for an order. */
export interface OrderFulfill {
  __typename?: 'OrderFulfill';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** List of created fulfillments. */
  fulfillments: Maybe<Array<Fulfillment>>;
  /** Fulfilled order. */
  order: Maybe<Order>;
  orderErrors: Array<OrderError>;
}

export interface OrderFulfillInput {
  /**
   * Only for use by marketplace administrators, if true, this will
   *         allow Marketplace Admin users to fulfill order lines with null variants.
   */
  allowNullVariants?: InputMaybe<Scalars['Boolean']['input']>;
  /** List of items informing how to fulfill the order. */
  lines: Array<OrderFulfillLineInput>;
  /** If true, send an email notification to the customer. */
  notifyCustomer?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface OrderFulfillLineInput {
  /** The ID of the order line. */
  orderLineId?: InputMaybe<Scalars['ID']['input']>;
  /** List of stock items to create. */
  stocks: Array<OrderFulfillStockInput>;
}

export interface OrderFulfillStockInput {
  /** The number of line items to be fulfilled from the given warehouse. */
  quantity: Scalars['Int']['input'];
  /** ID of the warehouse from which the item will be fulfilled. */
  warehouse: Scalars['ID']['input'];
}

/** Represents order line of particular order. */
export interface OrderLine extends Node, ObjectWithMetadata {
  __typename?: 'OrderLine';
  /** List of allocations across warehouses. */
  allocations: Maybe<Array<Allocation>>;
  digitalContentUrl: Maybe<DigitalContentUrl>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  isLinePriceOverridden: Scalars['Boolean']['output'];
  isShippingRequired: Scalars['Boolean']['output'];
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /** The nautical order line for this seller order line */
  nauticalOrderLine: NauticalOrderLine;
  note: Maybe<Scalars['String']['output']>;
  /** The seller order for this line */
  order: Order;
  /** The pricebook, if any, that changed the price of this line. */
  priceBook: Maybe<PriceBook>;
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  productName: Scalars['String']['output'];
  productSku: Maybe<Scalars['String']['output']>;
  /**
   * DEPRECATED: The number of items ordered on this order line.
   * @deprecated Use the more explicit quantityOrdered instead.
   */
  quantity: Scalars['Int']['output'];
  quantityDeclined: Scalars['Int']['output'];
  quantityFulfilled: Scalars['Int']['output'];
  /** The number of items ordered on this order line. */
  quantityOrdered: Scalars['Int']['output'];
  /** List of secondary lines attached to this order line. */
  secondaryLines: Maybe<Array<SecondaryOrderLine>>;
  /** The main thumbnail for the ordered product. */
  thumbnail: Maybe<Image>;
  /** Price of the order line. */
  totalPrice: Maybe<TaxedMoney>;
  /** Product name in the customer's language. */
  translatedProductName: Scalars['String']['output'];
  /** Variant name in the customer's language. */
  translatedVariantName: Scalars['String']['output'];
  /** Price of the single item in the order line. */
  unitPrice: Maybe<TaxedMoney>;
  unitPriceOverriddenNote: Maybe<Scalars['String']['output']>;
  /** A purchased product variant. Note: this field may be null if the variant has been removed from stock at all. */
  variant: Maybe<ProductVariant>;
  variantName: Scalars['String']['output'];
}


/** Represents order line of particular order. */
export interface OrderLineThumbnailArgs {
  size: InputMaybe<Scalars['Int']['input']>;
}

/** Add a note to an order line. */
export interface OrderLineAddNote {
  __typename?: 'OrderLineAddNote';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  orderErrors: Array<OrderError>;
  orderLine: Maybe<OrderLine>;
}

export interface OrderLineCreateInput {
  /** Number of variant items ordered. */
  quantity: Scalars['Int']['input'];
  /** Product variant ID. */
  variantId: Scalars['ID']['input'];
}

export interface OrderLineInput {
  /** Number of variant items ordered. */
  quantity: Scalars['Int']['input'];
}

export interface OrderLinePriceOverrideInput {
  /** Amount used to override order line unit price amount (in the order currency) */
  overrideAmount: Scalars['PositiveDecimal']['input'];
  /** Reason for price override */
  unitPriceOverriddenNote: Scalars['String']['input'];
}

/** Uploads lines for a draft order via CSV. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec */
export interface OrderLinesCsvUpload {
  __typename?: 'OrderLinesCsvUpload';
  /** The csv file download link with error annotations. */
  csvFile: Maybe<ImportFile>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** The number of lines that failed to upload from the csv. */
  failedLines: Maybe<Scalars['Int']['output']>;
  /** The order. */
  order: Maybe<Order>;
  orderErrors: Array<OrderError>;
  /** The number of successfully uploaded lines from the csv. */
  successfulLines: Maybe<Scalars['Int']['output']>;
}

/** Marks a fully fulfilled Order as delivered. */
export interface OrderMarkAsDelivered {
  __typename?: 'OrderMarkAsDelivered';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  order: Maybe<Order>;
  orderErrors: Array<OrderError>;
}

export interface OrderMarketplaceReportType {
  __typename?: 'OrderMarketplaceReportType';
  /** @deprecated This will be removed on Oct 26, 2024 when affiliate support is removed. */
  affiliateCommission: Maybe<Scalars['Float']['output']>;
  average: Maybe<Scalars['Float']['output']>;
  commission: Maybe<Scalars['Float']['output']>;
  dimension: Maybe<Scalars['Date']['output']>;
  discounts: Maybe<Scalars['Float']['output']>;
  gross: Maybe<Scalars['Float']['output']>;
  net: Maybe<Scalars['Float']['output']>;
  orders: Maybe<Scalars['Int']['output']>;
  payout: Maybe<Scalars['Float']['output']>;
  revenue: Maybe<Scalars['Float']['output']>;
  shipping: Maybe<Scalars['Float']['output']>;
  taxes: Maybe<Scalars['Float']['output']>;
  totals: Maybe<Scalars['Int']['output']>;
  volumeDiscounts: Maybe<Scalars['Float']['output']>;
}

/** Converts a seller or marketplace offer order to a nautical quote order. */
export interface OrderOfferConvertToNauticalQuoteOrder {
  __typename?: 'OrderOfferConvertToNauticalQuoteOrder';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** The converted Nautical Quote order (available only for MPO). */
  nauticalOrder: Maybe<NauticalOrder>;
  /** The converted Quote order */
  order: Maybe<Order>;
  orderErrors: Array<OrderError>;
}

/** An enumeration. */
export enum OrderOrderSource {
  /** checkout */
  Checkout = 'CHECKOUT',
  /** draft */
  Draft = 'DRAFT',
  /** external */
  External = 'EXTERNAL',
  /** manual */
  Manual = 'MANUAL',
  /** offer */
  Offer = 'OFFER',
  /** quote */
  Quote = 'QUOTE'
}

export enum OrderPayoutStatusEnum {
  /** Error */
  Error = 'ERROR',
  /** Not paid */
  NotPaid = 'NOT_PAID',
  /** Not ready */
  NotReady = 'NOT_READY',
  /** Paid out */
  PaidOut = 'PAID_OUT',
  /** Partially paid out */
  PartiallyPaidOut = 'PARTIALLY_PAID_OUT',
  /** Pending final payout */
  PendingFinalPayout = 'PENDING_FINAL_PAYOUT',
  /** Ready for payout */
  ReadyForPayout = 'READY_FOR_PAYOUT'
}

/** Modifies the payout status of an order */
export interface OrderPayoutStatusUpdate {
  __typename?: 'OrderPayoutStatusUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Order that was updated. */
  order: Maybe<Order>;
  orderErrors: Array<OrderError>;
}

export interface OrderPayoutStatusUpdateInput {
  payoutStatus: OrderPayoutStatusEnum;
}

export interface OrderPayoutSummary {
  __typename?: 'OrderPayoutSummary';
  /** Commissions that affected the payout */
  commissions: Money;
  /** Discounts that affected payouts */
  discounts: Money;
  /** Fees that affect the payout */
  fees: Money;
  /** Refunds that affected the payout */
  refunds: Money;
  /** Commissions that were reduced as a result of refunds */
  refundsCommission: Money;
  /** Sales in the payout */
  sales: Money;
  /** Shipping in the payout */
  shipping: Money;
  /** Total for this payout */
  total: Money;
  /** Vendor Payout associated with this data */
  vendorPayout: VendorPayout;
}

export interface OrderQuoteFilterInput {
  channel?: InputMaybe<Scalars['String']['input']>;
  created?: InputMaybe<DateRangeInput>;
  customer?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  isHistorical?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<MetadataFilterInput>;
  privateMetadata?: InputMaybe<MetadataFilterInput>;
  search?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<Array<OrderSourceFilter>>;
  subStatus?: InputMaybe<Array<QuoteOrderSubStatusFilter>>;
}

/** Adds return notification note to the order. */
export interface OrderReturnNotification {
  __typename?: 'OrderReturnNotification';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Order return notification created. */
  event: Maybe<OrderEvent>;
  /** Order with return notification note added. */
  order: Maybe<Order>;
  orderErrors: Array<OrderError>;
}

export interface OrderReturnNotificationInput {
  /** Status of the return. */
  productNames?: InputMaybe<Scalars['String']['input']>;
  /** Status of the return. */
  returnStatus: Scalars['String']['input'];
}

export interface OrderSellerReportType {
  __typename?: 'OrderSellerReportType';
  /** @deprecated This will be removed on Oct 26, 2024 when affiliate support is removed. */
  affiliateCommission: Maybe<Scalars['Float']['output']>;
  average: Maybe<Scalars['Float']['output']>;
  commission: Maybe<Scalars['Float']['output']>;
  discounts: Maybe<Scalars['Float']['output']>;
  gross: Maybe<Scalars['Float']['output']>;
  net: Maybe<Scalars['Float']['output']>;
  orders: Maybe<Scalars['Int']['output']>;
  payout: Maybe<Scalars['Float']['output']>;
  revenue: Maybe<Scalars['Float']['output']>;
  seller: Maybe<Seller>;
  sellerId: Maybe<Scalars['Int']['output']>;
  shipping: Maybe<Scalars['Float']['output']>;
  taxes: Maybe<Scalars['Float']['output']>;
  totals: Maybe<Scalars['Int']['output']>;
  volumeDiscounts: Maybe<Scalars['Float']['output']>;
}

export interface OrderSellerSummaryType {
  __typename?: 'OrderSellerSummaryType';
  /** @deprecated This will be removed on Oct 26, 2024 when affiliate support is removed. */
  affiliateCommission: Maybe<Scalars['Float']['output']>;
  average: Maybe<Scalars['Float']['output']>;
  commission: Maybe<Scalars['Float']['output']>;
  discounts: Maybe<Scalars['Float']['output']>;
  gross: Maybe<Scalars['Float']['output']>;
  net: Maybe<Scalars['Float']['output']>;
  orders: Maybe<Scalars['Int']['output']>;
  payout: Maybe<Scalars['Float']['output']>;
  revenue: Maybe<Scalars['Float']['output']>;
  sellers: Maybe<Scalars['Float']['output']>;
  shipping: Maybe<Scalars['Float']['output']>;
  taxes: Maybe<Scalars['Float']['output']>;
  totals: Maybe<Scalars['Int']['output']>;
  volumeDiscounts: Maybe<Scalars['Float']['output']>;
}

export enum OrderSortField {
  /** Sort orders by channel. */
  Channel = 'CHANNEL',
  /** Sort orders by creation date. */
  CreationDate = 'CREATION_DATE',
  /** Sort orders by customer. */
  Customer = 'CUSTOMER',
  /** Sort orders by fulfillment status. */
  FulfillmentStatus = 'FULFILLMENT_STATUS',
  /** Sort orders by number. */
  Number = 'NUMBER',
  /** Sort orders by payment. */
  Payment = 'PAYMENT',
  /** Sort orders by payment date. */
  PaymentDate = 'PAYMENT_DATE',
  /** Sort orders by po numbers. */
  PoNumbers = 'PO_NUMBERS',
  /** Sort orders by total. */
  Total = 'TOTAL',
  /** Sort orders by update date. */
  UpdateDate = 'UPDATE_DATE'
}

export interface OrderSortingInput {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort orders by the selected field. */
  field: OrderSortField;
}

export enum OrderSourceFilter {
  Checkout = 'CHECKOUT',
  Draft = 'DRAFT',
  External = 'EXTERNAL',
  Manual = 'MANUAL',
  Offer = 'OFFER',
  Quote = 'QUOTE'
}

/** An enumeration. */
export enum OrderStatus {
  Canceled = 'CANCELED',
  Delivered = 'DELIVERED',
  Draft = 'DRAFT',
  Fulfilled = 'FULFILLED',
  Offer = 'OFFER',
  PartiallyFulfilled = 'PARTIALLY_FULFILLED',
  Quote = 'QUOTE',
  ReturnAuthorized = 'RETURN_AUTHORIZED',
  ReturnCancelled = 'RETURN_CANCELLED',
  ReturnComplete = 'RETURN_COMPLETE',
  ReturnDeclined = 'RETURN_DECLINED',
  ReturnRequested = 'RETURN_REQUESTED',
  Unfulfilled = 'UNFULFILLED'
}

export enum OrderStatusFilter {
  Canceled = 'CANCELED',
  Delivered = 'DELIVERED',
  Fulfilled = 'FULFILLED',
  PartiallyFulfilled = 'PARTIALLY_FULFILLED',
  ReadyToCapture = 'READY_TO_CAPTURE',
  ReadyToFulfill = 'READY_TO_FULFILL',
  Unfulfilled = 'UNFULFILLED'
}

/** An enumeration. */
export enum OrderSubStatus {
  /** Awaiting Payment */
  AwaitingPayment = 'AWAITING_PAYMENT',
  /** Complete */
  Complete = 'COMPLETE',
  /** In Review */
  InReview = 'IN_REVIEW',
  /** Offer Approved */
  OfferApproved = 'OFFER_APPROVED',
  /** Offer Cancelled */
  OfferCancelled = 'OFFER_CANCELLED',
  /** Offer Created */
  OfferCreated = 'OFFER_CREATED',
  /** Offer Expired */
  OfferExpired = 'OFFER_EXPIRED',
  /** Offer Negotiating */
  OfferNegotiating = 'OFFER_NEGOTIATING',
  /** Offer Rejected */
  OfferRejected = 'OFFER_REJECTED',
  /** Quote Requested */
  QuoteRequested = 'QUOTE_REQUESTED'
}

export enum OrderSubStatusEnum {
  /** Awaiting Payment */
  AwaitingPayment = 'AWAITING_PAYMENT',
  /** Complete */
  Complete = 'COMPLETE',
  /** In Review */
  InReview = 'IN_REVIEW',
  /** Offer Approved */
  OfferApproved = 'OFFER_APPROVED',
  /** Offer Cancelled */
  OfferCancelled = 'OFFER_CANCELLED',
  /** Offer Created */
  OfferCreated = 'OFFER_CREATED',
  /** Offer Expired */
  OfferExpired = 'OFFER_EXPIRED',
  /** Offer Negotiating */
  OfferNegotiating = 'OFFER_NEGOTIATING',
  /** Offer Rejected */
  OfferRejected = 'OFFER_REJECTED',
  /** Quote Requested */
  QuoteRequested = 'QUOTE_REQUESTED'
}

export interface OrderSummaryDeltaDataType {
  __typename?: 'OrderSummaryDeltaDataType';
  percent: Maybe<AbstractPercentReportType>;
  values: Maybe<AbstractOrderSellerReportType>;
}

/** Updates an order. */
export interface OrderUpdate {
  __typename?: 'OrderUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  order: Maybe<Order>;
  orderErrors: Array<OrderError>;
}

export interface OrderUpdateInput {
  /** Billing address of the customer. */
  billingAddress?: InputMaybe<AddressInput>;
  /** Shipping address of the customer. */
  shippingAddress?: InputMaybe<AddressInput>;
  /** Email address of the customer. */
  userEmail?: InputMaybe<Scalars['String']['input']>;
}

/** Updates a shipping method of the order. */
export interface OrderUpdateShipping {
  __typename?: 'OrderUpdateShipping';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Order with updated shipping method. */
  order: Maybe<Order>;
  orderErrors: Array<OrderError>;
}

export interface OrderUpdateShippingInput {
  /** Allows freeze shipping price and make it independent from the related shipping method price. If you make shipping price manual, and want unfreeze it (restore sync based on shipping method price) you can transfer 'false' value for this field. */
  isManual?: InputMaybe<Scalars['Boolean']['input']>;
  /** Manual price, that allows overwrite shipping method price. When this field provided, then 'isManual' will be set to the 'true'. You cannot transfer this field, when you explicitly transferring 'isManual: false' too (except the case, when this price will be equals to actual shipping method price). */
  newPrice?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** ID of the selected shipping method. */
  shippingMethod?: InputMaybe<Scalars['ID']['input']>;
}

export interface OrderVendorReportType {
  __typename?: 'OrderVendorReportType';
  adjustments: Maybe<Scalars['Decimal']['output']>;
  /** @deprecated This will be removed on Oct 26, 2024 when affiliate support is removed. */
  affiliateCommission: Maybe<Scalars['Float']['output']>;
  average: Maybe<Scalars['Float']['output']>;
  commission: Maybe<Scalars['Float']['output']>;
  discounts: Maybe<Scalars['Float']['output']>;
  fees: Maybe<Scalars['Decimal']['output']>;
  gross: Maybe<Scalars['Float']['output']>;
  net: Maybe<Scalars['Float']['output']>;
  orders: Maybe<Scalars['Int']['output']>;
  payout: Maybe<Scalars['Float']['output']>;
  penalties: Maybe<Scalars['Decimal']['output']>;
  refunds: Maybe<Scalars['Decimal']['output']>;
  revenue: Maybe<Scalars['Float']['output']>;
  shipping: Maybe<Scalars['Float']['output']>;
  taxes: Maybe<Scalars['Float']['output']>;
  totals: Maybe<Scalars['Int']['output']>;
  vendor: Maybe<Vendor>;
  vendorId: Maybe<Scalars['Int']['output']>;
  vendorPayout: Maybe<VendorPayout>;
  volumeDiscounts: Maybe<Scalars['Float']['output']>;
}

export interface OrderVendorSummaryType {
  __typename?: 'OrderVendorSummaryType';
  adjustments: Maybe<Scalars['Decimal']['output']>;
  /** @deprecated This will be removed on Oct 26, 2024 when affiliate support is removed. */
  affiliateCommission: Maybe<Scalars['Float']['output']>;
  average: Maybe<Scalars['Float']['output']>;
  commission: Maybe<Scalars['Float']['output']>;
  discounts: Maybe<Scalars['Float']['output']>;
  fees: Maybe<Scalars['Decimal']['output']>;
  gross: Maybe<Scalars['Float']['output']>;
  net: Maybe<Scalars['Float']['output']>;
  orders: Maybe<Scalars['Int']['output']>;
  payout: Maybe<Scalars['Float']['output']>;
  penalties: Maybe<Scalars['Decimal']['output']>;
  refunds: Maybe<Scalars['Decimal']['output']>;
  revenue: Maybe<Scalars['Float']['output']>;
  shipping: Maybe<Scalars['Float']['output']>;
  taxes: Maybe<Scalars['Float']['output']>;
  totals: Maybe<Scalars['Int']['output']>;
  vendors: Maybe<Scalars['Int']['output']>;
  volumeDiscounts: Maybe<Scalars['Float']['output']>;
}

/** A static page that can be manually added by a shop operator through the dashboard. */
export interface Page extends Node, ObjectWithMetadata {
  __typename?: 'Page';
  content: Scalars['String']['output'];
  contentHtml: Scalars['String']['output'];
  contentJson: Scalars['JSONString']['output'];
  createdAt: Scalars['DateTime']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** Whether the page is published. */
  isPublished: Scalars['Boolean']['output'];
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  publicationDate: Maybe<Scalars['Date']['output']>;
  seoDescription: Maybe<Scalars['String']['output']>;
  seoTitle: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
}

/** Deletes pages. */
export interface PageBulkDelete {
  __typename?: 'PageBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  pageErrors: Array<PageError>;
}

/** Publish pages. */
export interface PageBulkPublish {
  __typename?: 'PageBulkPublish';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  pageErrors: Array<PageError>;
}

export interface PageCountableConnection {
  __typename?: 'PageCountableConnection';
  edges: Array<PageCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface PageCountableEdge {
  __typename?: 'PageCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Page;
}

/** Creates a new page. */
export interface PageCreate {
  __typename?: 'PageCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  page: Maybe<Page>;
  pageErrors: Array<PageError>;
}

/** Deletes a page. */
export interface PageDelete {
  __typename?: 'PageDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  page: Maybe<Page>;
  pageErrors: Array<PageError>;
}

export interface PageError {
  __typename?: 'PageError';
  /** The error code. */
  code: PageErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message: Scalars['String']['output'];
}

/** An enumeration. */
export enum PageErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export interface PageFilterInput {
  search?: InputMaybe<Scalars['String']['input']>;
}

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export interface PageInfo {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor: Maybe<Scalars['String']['output']>;
}

export interface PageInput {
  /** Page content (Plaintext, deprecated as input). */
  content?: InputMaybe<Scalars['String']['input']>;
  /** Page content (HTML). */
  contentHtml?: InputMaybe<Scalars['String']['input']>;
  /** Page content (JSON). */
  contentJson?: InputMaybe<Scalars['JSONString']['input']>;
  /** Determines if page is visible in the storefront. */
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  /** Publication date. ISO 8601 standard. */
  publicationDate?: InputMaybe<Scalars['String']['input']>;
  /** Search engine optimization fields. */
  seo?: InputMaybe<SeoInput>;
  /** Page internal name. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** Page title. */
  title?: InputMaybe<Scalars['String']['input']>;
}

export enum PageSortField {
  /** Sort pages by creation date. */
  CreationDate = 'CREATION_DATE',
  /** Sort pages by publication date. */
  PublicationDate = 'PUBLICATION_DATE',
  /** Sort pages by slug. */
  Slug = 'SLUG',
  /** Sort pages by title. */
  Title = 'TITLE',
  /** Sort pages by visibility. */
  Visibility = 'VISIBILITY'
}

export interface PageSortingInput {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort pages by the selected field. */
  field: PageSortField;
}

/** Updates an existing page. */
export interface PageUpdate {
  __typename?: 'PageUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  page: Maybe<Page>;
  pageErrors: Array<PageError>;
}

/** Change the password of the logged in user. */
export interface PasswordChange {
  __typename?: 'PasswordChange';
  accountErrors: Array<AccountError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** A user instance with a new password. */
  user: Maybe<User>;
}

/** Sends an email with the account password modification link. */
export interface PasswordRequestReset {
  __typename?: 'PasswordRequestReset';
  accountErrors: Array<AccountError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

/** Sets the user's password from the token sent by email using the RequestPasswordReset mutation. */
export interface PasswordSet {
  __typename?: 'PasswordSet';
  accountErrors: Array<AccountError>;
  /** CSRF token required to re-generate access token. */
  csrfToken: Maybe<Scalars['String']['output']>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** JWT refresh token, required to re-generate access token. */
  refreshToken: Maybe<Scalars['String']['output']>;
  /** JWT token, required to authenticate. */
  token: Maybe<Scalars['String']['output']>;
  /** A user instance. */
  user: Maybe<User>;
}

/** Represents a payment of a given type. */
export interface Payment extends Node, ObjectWithMetadata {
  __typename?: 'Payment';
  /** List of actions that can be performed in the current state of a payment. */
  actions: Array<OrderAction>;
  /** Maximum amount of money that can be captured. */
  availableCaptureAmount: Maybe<Money>;
  /** Maximum amount of money that can be refunded. */
  availableRefundAmount: Maybe<Money>;
  /** Total amount captured for this payment. */
  capturedAmount: Maybe<Money>;
  /** Internal payment status. */
  chargeStatus: PaymentChargeStatusEnum;
  checkout: Maybe<Checkout>;
  created: Scalars['DateTime']['output'];
  /** The details of the card used for this payment. */
  creditCard: Maybe<CreditCard>;
  customerIpAddress: Maybe<Scalars['String']['output']>;
  gateway: Scalars['String']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  modified: Scalars['DateTime']['output'];
  nauticalOrder: Maybe<NauticalOrder>;
  /**
   * The seller order associated with this payment
   * @deprecated This field is always null. It will be removed after 2024-02-01.
   */
  order: Maybe<Order>;
  paymentMethodToken: Maybe<Scalars['String']['output']>;
  paymentMethodType: Scalars['String']['output'];
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  token: Scalars['String']['output'];
  /** Total amount of the payment. */
  total: Maybe<Money>;
  /** List of all transactions within this payment. */
  transactions: Maybe<Array<Transaction>>;
}

/** Captures the authorized payment amount. */
export interface PaymentCapture {
  __typename?: 'PaymentCapture';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Updated payment. */
  payment: Maybe<Payment>;
  paymentErrors: Array<PaymentError>;
}

/**
 * Represents possible statuses of a payment.
 *
 *     The following statuses are possible:
 *     - NOT_CHARGED - no funds were take off the customer founding source yet.
 *     - PARTIALLY_CHARGED - funds were taken off the customer's funding source,
 *     partly covering the payment amount.
 *     - FULLY_CHARGED - funds were taken off the customer founding source,
 *     partly or completely covering the payment amount.
 *     - PARTIALLY_REFUNDED - part of charged funds were returned to the customer.
 *     - FULLY_REFUNDED - all charged funds were returned to the customer.
 *
 */
export enum PaymentChargeStatusEnum {
  Cancelled = 'CANCELLED',
  FullyCharged = 'FULLY_CHARGED',
  FullyRefunded = 'FULLY_REFUNDED',
  NotCharged = 'NOT_CHARGED',
  PartiallyCharged = 'PARTIALLY_CHARGED',
  PartiallyRefunded = 'PARTIALLY_REFUNDED',
  Pending = 'PENDING',
  Refused = 'REFUSED',
  Voided = 'VOIDED'
}

export interface PaymentCountableConnection {
  __typename?: 'PaymentCountableConnection';
  edges: Array<PaymentCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface PaymentCountableEdge {
  __typename?: 'PaymentCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Payment;
}

export interface PaymentError {
  __typename?: 'PaymentError';
  /** The error code. */
  code: PaymentErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message: Scalars['String']['output'];
}

/** An enumeration. */
export enum PaymentErrorCode {
  BillingAddressNotSet = 'BILLING_ADDRESS_NOT_SET',
  GraphqlError = 'GRAPHQL_ERROR',
  InsufficientStock = 'INSUFFICIENT_STOCK',
  Invalid = 'INVALID',
  InvalidShippingMethod = 'INVALID_SHIPPING_METHOD',
  NotFound = 'NOT_FOUND',
  NotSupportedGateway = 'NOT_SUPPORTED_GATEWAY',
  PartialPaymentNotAllowed = 'PARTIAL_PAYMENT_NOT_ALLOWED',
  PaymentError = 'PAYMENT_ERROR',
  Required = 'REQUIRED',
  ShippingAddressNotSet = 'SHIPPING_ADDRESS_NOT_SET',
  ShippingMethodNotSet = 'SHIPPING_METHOD_NOT_SET',
  Unique = 'UNIQUE'
}

/** Available payment gateway backend with configuration necessary to setup client. */
export interface PaymentGateway {
  __typename?: 'PaymentGateway';
  /** Payment gateway client configuration. */
  config: Array<GatewayConfigLine>;
  /** Payment gateway supported currencies. */
  currencies: Array<Scalars['String']['output']>;
  /** Payment gateway ID. */
  id: Scalars['ID']['output'];
  /** Payment gateway name. */
  name: Scalars['String']['output'];
}

export interface PaymentInput {
  /** Total amount of the transaction, including all taxes and discounts. If no amount is provided, the checkout total will be used. */
  amount?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** [Deprecated] Billing address. If empty, the billing address associated with the checkout instance will be used. Use `checkoutCreate` or `checkoutBillingAddressUpdate` mutations to set it. This field will be removed after 2020-07-31. */
  billingAddress?: InputMaybe<AddressInput>;
  /** A gateway to use with that payment. */
  gateway: Scalars['String']['input'];
  /** URL of a storefront view where user should be redirected after requiring additional actions. Payment with additional actions will not be finished if this field is not provided. */
  returnUrl?: InputMaybe<Scalars['String']['input']>;
  /** Client-side generated payment token, representing customer's billing data in a secure manner. */
  token?: InputMaybe<Scalars['String']['input']>;
  /** Volume discount applicable to the checkout */
  volumeDiscount?: InputMaybe<Scalars['PositiveDecimal']['input']>;
}

/** Represents a payment source stored for user in payment gateway, such as credit card. */
export interface PaymentSource {
  __typename?: 'PaymentSource';
  /** Stored credit card details if available. */
  creditCardInfo: Maybe<CreditCard>;
  /** Payment gateway name. */
  gateway: Scalars['String']['output'];
  /** Stored payment method ID. */
  id: Scalars['String']['output'];
}

/** Voids the authorized payment. */
export interface PaymentVoid {
  __typename?: 'PaymentVoid';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Updated payment. */
  payment: Maybe<Payment>;
  paymentErrors: Array<PaymentError>;
}

export interface PaymentsDayReportType {
  __typename?: 'PaymentsDayReportType';
  average: Maybe<Scalars['Float']['output']>;
  captured: Maybe<Scalars['Float']['output']>;
  chargeStatus: Maybe<Scalars['String']['output']>;
  dimension: Maybe<Scalars['Date']['output']>;
  payments: Maybe<Scalars['Int']['output']>;
  totalAuthorized: Maybe<Scalars['Float']['output']>;
}

export interface Payout extends Node, ObjectWithMetadata {
  __typename?: 'Payout';
  adjustments: Money;
  commission: Money;
  created: Scalars['String']['output'];
  currency: Scalars['String']['output'];
  discounts: Money;
  endDate: Scalars['String']['output'];
  fees: Money;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  name: Maybe<Scalars['String']['output']>;
  netSales: Money;
  payout: Money;
  /** @deprecated Penalties have been removed in favour of negative adjustments. This field will be removed after 2024-07-01. */
  penalties: Maybe<Money>;
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  refunds: Money;
  shipping: Money;
  startDate: Maybe<Scalars['Date']['output']>;
  status: PayoutStatus;
  updated: Scalars['DateTime']['output'];
  vendorPayouts: VendorPayoutCountableConnection;
  vendorType: PayoutVendorType;
  vendors: Scalars['Int']['output'];
}


export interface PayoutVendorPayoutsArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
}

/** Archive payouts. */
export interface PayoutBulkArchive {
  __typename?: 'PayoutBulkArchive';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  payoutErrors: Array<PayoutError>;
}

export interface PayoutCountableConnection {
  __typename?: 'PayoutCountableConnection';
  edges: Array<PayoutCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface PayoutCountableEdge {
  __typename?: 'PayoutCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Payout;
}

/** Creates a new payout. */
export interface PayoutCreate {
  __typename?: 'PayoutCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  payout: Maybe<Payout>;
  payoutErrors: Array<PayoutError>;
}

export interface PayoutCreateInput {
  /** Payout end date. ISO 8601 standard. Can not be greater than current date. */
  endDate: Scalars['Date']['input'];
  /** Vendor type for the payout */
  vendorType: Scalars['String']['input'];
}

export interface PayoutDatesInput {
  /** Payout end date. ISO 8601 standard. Can not be greater than current date. */
  endDate: Scalars['Date']['input'];
}

/** Modifies the dates of a payout */
export interface PayoutDatesUpdate {
  __typename?: 'PayoutDatesUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  payout: Maybe<Payout>;
  payoutErrors: Array<PayoutError>;
}

/** Deletes a draft payout */
export interface PayoutDelete {
  __typename?: 'PayoutDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  payout: Maybe<Payout>;
  payoutErrors: Array<PayoutError>;
}

export interface PayoutError {
  __typename?: 'PayoutError';
  /** The error code. */
  code: PayoutErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message: Scalars['String']['output'];
}

/** An enumeration. */
export enum PayoutErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  NotFoundValidOrders = 'NOT_FOUND_VALID_ORDERS',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export interface PayoutFilterInput {
  created?: InputMaybe<DateRangeInput>;
  netSales?: InputMaybe<PriceRangeInput>;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Array<PayoutStatusFilter>>;
}

export enum PayoutSortField {
  /** Sort payouts by created. */
  Created = 'CREATED',
  /** Sort payouts by end date. */
  EndDate = 'END_DATE',
  /** Sort payouts by report. */
  Report = 'REPORT',
  /** Sort payouts by status. */
  Status = 'STATUS'
}

export interface PayoutSortingInput {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort payouts by the selected field. */
  field: PayoutSortField;
}

/** An enumeration. */
export enum PayoutStatus {
  /** Archived */
  Archived = 'ARCHIVED',
  /** Draft */
  Draft = 'DRAFT',
  /** Error */
  Error = 'ERROR',
  /** Locked */
  Locked = 'LOCKED',
  /** Paid */
  Paid = 'PAID'
}

export enum PayoutStatusFilter {
  Archived = 'archived',
  Draft = 'draft',
  Locked = 'locked',
  Paid = 'paid'
}

export interface PayoutStatusInput {
  status: Scalars['String']['input'];
  vendorPayouts?: InputMaybe<Array<VendorPayoutDetails>>;
}

/** Modifies the status of a payout */
export interface PayoutStatusUpdate {
  __typename?: 'PayoutStatusUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Payout that was updated. */
  payout: Maybe<Payout>;
  payoutErrors: Array<PayoutError>;
}

/** Update vendor payouts connected to the given payout with adjustments and penalties */
export interface PayoutUpdate {
  __typename?: 'PayoutUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** An updated payout instance. */
  payout: Maybe<Payout>;
  payoutErrors: Array<PayoutError>;
}

export interface PayoutUpdateInput {
  /** List of vendor payouts informing how to update the payout. */
  vendorPayouts: Array<VendorPayoutUpdateInput>;
}

/** An enumeration. */
export enum PayoutVendorType {
  /** Affiliates */
  Affiliates = 'AFFILIATES',
  /** Sellers */
  Sellers = 'SELLERS'
}

export enum PerformancePerspective {
  Top = 'TOP',
  Worst = 'WORST'
}

/** Update whether process_pending_webhook_transactions periodic django celery beat task is enabled */
export interface PeriodicTaskEnabledUpdate {
  __typename?: 'PeriodicTaskEnabledUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** An updated periodic task instance */
  task: Maybe<WebhookPeriodicTask>;
}

/** Represents a permission object in a friendly form. */
export interface Permission {
  __typename?: 'Permission';
  /** Internal code for permission. */
  code: PermissionEnum;
  /** Describe action(s) allowed to do by permission. */
  name: Scalars['String']['output'];
}

/** An enumeration. */
export enum PermissionEnum {
  ManageAgreements = 'MANAGE_AGREEMENTS',
  ManageApps = 'MANAGE_APPS',
  ManageBusinessEntities = 'MANAGE_BUSINESS_ENTITIES',
  ManageChannels = 'MANAGE_CHANNELS',
  ManageCheckouts = 'MANAGE_CHECKOUTS',
  ManageCollections = 'MANAGE_COLLECTIONS',
  ManageDashboardConfiguration = 'MANAGE_DASHBOARD_CONFIGURATION',
  ManageDiscounts = 'MANAGE_DISCOUNTS',
  ManageDocuments = 'MANAGE_DOCUMENTS',
  ManageDraftAndQuoteOrders = 'MANAGE_DRAFT_AND_QUOTE_ORDERS',
  ManageFulfillments = 'MANAGE_FULFILLMENTS',
  ManageInventory = 'MANAGE_INVENTORY',
  ManageMarketplace = 'MANAGE_MARKETPLACE',
  ManageMarketplaceConfiguration = 'MANAGE_MARKETPLACE_CONFIGURATION',
  ManageMenus = 'MANAGE_MENUS',
  ManageMicrosites = 'MANAGE_MICROSITES',
  ManageOrders = 'MANAGE_ORDERS',
  ManagePages = 'MANAGE_PAGES',
  ManagePayments = 'MANAGE_PAYMENTS',
  ManagePayouts = 'MANAGE_PAYOUTS',
  ManagePermissions = 'MANAGE_PERMISSIONS',
  ManagePlugins = 'MANAGE_PLUGINS',
  ManagePricebooks = 'MANAGE_PRICEBOOKS',
  ManageProducts = 'MANAGE_PRODUCTS',
  ManageProductTypesAndAttributes = 'MANAGE_PRODUCT_TYPES_AND_ATTRIBUTES',
  ManageRefunds = 'MANAGE_REFUNDS',
  ManageSettings = 'MANAGE_SETTINGS',
  ManageShipping = 'MANAGE_SHIPPING',
  ManageStaff = 'MANAGE_STAFF',
  ManageStorefronts = 'MANAGE_STOREFRONTS',
  ManageTranslations = 'MANAGE_TRANSLATIONS',
  ManageUsers = 'MANAGE_USERS'
}

/** Create new permission group. */
export interface PermissionGroupCreate {
  __typename?: 'PermissionGroupCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  group: Maybe<Group>;
  permissionGroupErrors: Array<PermissionGroupError>;
}

export interface PermissionGroupCreateInput {
  /** List of permission code names to assign to this group. */
  addPermissions?: InputMaybe<Array<PermissionEnum>>;
  /** List of users to assign to this group. */
  addUsers?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Group name. */
  name: Scalars['String']['input'];
}

/** Delete permission group. */
export interface PermissionGroupDelete {
  __typename?: 'PermissionGroupDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  group: Maybe<Group>;
  permissionGroupErrors: Array<PermissionGroupError>;
}

export interface PermissionGroupError {
  __typename?: 'PermissionGroupError';
  /** The error code. */
  code: PermissionGroupErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message: Scalars['String']['output'];
  /** List of permissions which causes the error. */
  permissions: Maybe<Array<PermissionEnum>>;
  /** List of user IDs which causes the error. */
  users: Maybe<Array<Scalars['ID']['output']>>;
}

/** An enumeration. */
export enum PermissionGroupErrorCode {
  AssignNonStaffMember = 'ASSIGN_NON_STAFF_MEMBER',
  CannotRemoveFromLastGroup = 'CANNOT_REMOVE_FROM_LAST_GROUP',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  LeftNotManageablePermission = 'LEFT_NOT_MANAGEABLE_PERMISSION',
  OutOfScopePermission = 'OUT_OF_SCOPE_PERMISSION',
  OutOfScopeUser = 'OUT_OF_SCOPE_USER',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export interface PermissionGroupFilterInput {
  search?: InputMaybe<Scalars['String']['input']>;
}

export enum PermissionGroupSortField {
  /** Sort permission group accounts by name. */
  Name = 'NAME'
}

export interface PermissionGroupSortingInput {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort permission group by the selected field. */
  field: PermissionGroupSortField;
}

/** Update permission group. */
export interface PermissionGroupUpdate {
  __typename?: 'PermissionGroupUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  group: Maybe<Group>;
  permissionGroupErrors: Array<PermissionGroupError>;
}

export interface PermissionGroupUpdateInput {
  /** List of permission code names to assign to this group. */
  addPermissions?: InputMaybe<Array<PermissionEnum>>;
  /** List of users to assign to this group. */
  addUsers?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Group name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** List of permission code names to unassign from this group. */
  removePermissions?: InputMaybe<Array<PermissionEnum>>;
  /** List of users to unassign from this group. */
  removeUsers?: InputMaybe<Array<Scalars['ID']['input']>>;
}

/** Plugin. */
export interface Plugin extends Node {
  __typename?: 'Plugin';
  active: Scalars['Boolean']['output'];
  allowManyActivePluginsInCategory: Scalars['Boolean']['output'];
  allowSellers: Maybe<Scalars['Boolean']['output']>;
  category: Maybe<PluginConfigurationCategory>;
  company: Maybe<Scalars['String']['output']>;
  configuration: Maybe<Array<ConfigurationItem>>;
  created: Scalars['DateTime']['output'];
  defaultConfiguration: Maybe<Array<ConfigurationItem>>;
  description: Scalars['String']['output'];
  descriptionShort: Scalars['String']['output'];
  externalUrl: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  identifier: Scalars['String']['output'];
  isFeature: Scalars['Boolean']['output'];
  logoUrl: Maybe<Scalars['String']['output']>;
  metadata: Scalars['JSONString']['output'];
  name: Scalars['String']['output'];
  paymentType: PluginConfigurationPaymentType;
  privateMetadata: Scalars['JSONString']['output'];
  rating: PluginConfigurationRating;
  subcategory: Maybe<PluginConfigurationSubcategory>;
  supportSellerConfiguration: Maybe<Scalars['Boolean']['output']>;
  supportUrl: Maybe<Scalars['String']['output']>;
  version: Scalars['String']['output'];
}

/** An enumeration. */
export enum PluginConfigurationCategory {
  /** Auth */
  Auth = 'AUTH',
  /** Data Connectivity */
  DataConnectivity = 'DATA_CONNECTIVITY',
  /** Ecommerce */
  Ecommerce = 'ECOMMERCE',
  /** Fulfillment */
  Fulfillment = 'FULFILLMENT',
  /** Locations */
  Locations = 'LOCATIONS',
  /** Marketing */
  Marketing = 'MARKETING',
  /** Order Extensions */
  OrderExtensions = 'ORDER_EXTENSIONS',
  /** Payments */
  Payments = 'PAYMENTS',
  /** Taxes */
  Taxes = 'TAXES',
  /** Utility */
  Utility = 'UTILITY'
}

/** An enumeration. */
export enum PluginConfigurationPaymentType {
  /** This is a free app */
  Free = 'FREE',
  /** This is a paid app */
  Paid = 'PAID',
  /** This app has recurring payments */
  Recurring = 'RECURRING'
}

/** An enumeration. */
export enum PluginConfigurationRating {
  /** one */
  A_1 = 'A_1',
  /** two */
  A_2 = 'A_2',
  /** three */
  A_3 = 'A_3',
  /** four */
  A_4 = 'A_4',
  /** five */
  A_5 = 'A_5'
}

/** An enumeration. */
export enum PluginConfigurationSubcategory {
  /** Communication */
  Communication = 'COMMUNICATION',
  /** Compliance */
  Compliance = 'COMPLIANCE',
  /** Connectivity */
  Connectivity = 'CONNECTIVITY',
  /** Dropshipping */
  Dropshipping = 'DROPSHIPPING',
  /** Features */
  Features = 'FEATURES',
  /** Loyalty */
  Loyalty = 'LOYALTY',
  /** Processors */
  Processors = 'PROCESSORS',
  /** Reviews */
  Reviews = 'REVIEWS',
  /** Shipping */
  Shipping = 'SHIPPING',
  /** Storefront */
  Storefront = 'STOREFRONT',
  /** User Behavior */
  UserBehavior = 'USER_BEHAVIOR',
  /** Webhooks */
  Webhooks = 'WEBHOOKS'
}

export interface PluginCountableConnection {
  __typename?: 'PluginCountableConnection';
  edges: Array<PluginCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface PluginCountableEdge {
  __typename?: 'PluginCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Plugin;
}

export interface PluginError {
  __typename?: 'PluginError';
  /** The error code. */
  code: PluginErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message: Scalars['String']['output'];
}

/** An enumeration. */
export enum PluginErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotActive = 'NOT_ACTIVE',
  NotAllowed = 'NOT_ALLOWED',
  NotFound = 'NOT_FOUND',
  PluginMisconfigured = 'PLUGIN_MISCONFIGURED',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export interface PluginFilterInput {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  isFeature?: InputMaybe<Scalars['Boolean']['input']>;
  isPaymentGateway?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  seller?: InputMaybe<Scalars['ID']['input']>;
}

/** Delete plugin flow. */
export interface PluginFlowDelete {
  __typename?: 'PluginFlowDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  pluginsErrors: Array<PluginError>;
}

export interface PluginFlowInput {
  /** Form ID from typeform */
  formId: Scalars['String']['input'];
  /** Indicates the mapping for the given process and plugin. */
  mapping: Scalars['JSONString']['input'];
  /** Indicates the process in the UPPERCASE_FORMAT that this flow maps for. */
  process: Scalars['String']['input'];
  /** Indicates the seller that is making the update, null if marketplace. */
  seller?: InputMaybe<Scalars['ID']['input']>;
}

/** Update plugin flow. */
export interface PluginFlowUpdate {
  __typename?: 'PluginFlowUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  flow: Maybe<Flow>;
  pluginsErrors: Array<PluginError>;
}

export enum PluginSortField {
  IsActive = 'IS_ACTIVE',
  Name = 'NAME'
}

export interface PluginSortingInput {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort plugins by the selected field. */
  field: PluginSortField;
}

/** Update plugin configuration. */
export interface PluginUpdate {
  __typename?: 'PluginUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  plugin: Maybe<Plugin>;
  pluginsErrors: Array<PluginError>;
}

export interface PluginUpdateInput {
  /** Indicates whether the plugin should be enabled. */
  active?: InputMaybe<Scalars['Boolean']['input']>;
  /** Indicates whether the plugin should be configurable by sellers. */
  allowSellers?: InputMaybe<Scalars['Boolean']['input']>;
  /** Configuration of the plugin. */
  configuration?: InputMaybe<Array<ConfigurationItemInput>>;
  /** Indicates the seller that is making the update, null if marketplace. */
  seller?: InputMaybe<Scalars['ID']['input']>;
}

/** Variants, Product and types can be attached to the PriceBook and based on thecorresponding value, cost can be increased or decreased. */
export interface PriceBook extends Node, ObjectWithMetadata {
  __typename?: 'PriceBook';
  /** Determines if the PriceBook is active */
  deleted: Scalars['Boolean']['output'];
  description: Scalars['String']['output'];
  descriptionHtml: Scalars['String']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /** Name of PriceBook */
  name: Scalars['String']['output'];
  /** Number of variants mapped to this price book */
  numberOfProductTypes: Scalars['Int']['output'];
  /** Number of variants mapped to this price book */
  numberOfProducts: Scalars['Int']['output'];
  /** Number of variants mapped to this price book */
  numberOfVariants: Scalars['Int']['output'];
  /** List of product types for the price book. */
  priceBookProductTypes: Maybe<Array<PriceBookProductType>>;
  /** List of products for the price book. */
  priceBookProducts: Maybe<Array<PriceBookProduct>>;
  /** List of variants for the price book. */
  priceBookVariants: Maybe<Array<PriceBookVariant>>;
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
}

/** Deletes price books. */
export interface PriceBookBulkDelete {
  __typename?: 'PriceBookBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  priceBookErrors: Array<PriceBookError>;
}

export interface PriceBookCountableConnection {
  __typename?: 'PriceBookCountableConnection';
  edges: Array<PriceBookCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface PriceBookCountableEdge {
  __typename?: 'PriceBookCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: PriceBook;
}

/** Creates a new price book. */
export interface PriceBookCreate {
  __typename?: 'PriceBookCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  priceBook: Maybe<PriceBook>;
  priceBookErrors: Array<PriceBookError>;
}

export interface PriceBookCreateInput {
  /** Price book description (plaintext, read-only). */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Price book description (html). */
  descriptionHtml?: InputMaybe<Scalars['String']['input']>;
  /** Name of the price book */
  name?: InputMaybe<Scalars['String']['input']>;
}

/** Deletes a price book. */
export interface PriceBookDelete {
  __typename?: 'PriceBookDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  priceBook: Maybe<PriceBook>;
  priceBookErrors: Array<PriceBookError>;
}

export interface PriceBookError {
  __typename?: 'PriceBookError';
  /** The error code. */
  code: PriceBookErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message: Scalars['String']['output'];
}

/** An enumeration. */
export enum PriceBookErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotAllowed = 'NOT_ALLOWED',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED'
}

export interface PriceBookFilterInput {
  deleted?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<MetadataFilterInput>;
  privateMetadata?: InputMaybe<MetadataFilterInput>;
  search?: InputMaybe<Scalars['String']['input']>;
}

/** Products added to the PriceBook */
export interface PriceBookProduct extends Node {
  __typename?: 'PriceBookProduct';
  currency: Scalars['String']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** Percentage to decrease or increase for the product's variants price if type selectedis fixed. */
  percentage: Scalars['Float']['output'];
  /** Amount to decrease or increase for the variants of the product if type selected isoverride or percentage. */
  price: Money;
  priceBook: PriceBook;
  product: Product;
  valueType: PriceBookProductValueType;
}

/** Deletes price book's products. */
export interface PriceBookProductBulkDelete {
  __typename?: 'PriceBookProductBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  priceBookErrors: Array<PriceBookError>;
}

export interface PriceBookProductCountableConnection {
  __typename?: 'PriceBookProductCountableConnection';
  edges: Array<PriceBookProductCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface PriceBookProductCountableEdge {
  __typename?: 'PriceBookProductCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: PriceBookProduct;
}

/** Add a product to price book. */
export interface PriceBookProductCreate {
  __typename?: 'PriceBookProductCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  priceBookErrors: Array<PriceBookError>;
  priceBookProduct: Maybe<PriceBookProduct>;
}

export interface PriceBookProductCreateInput {
  /** Currency of the price that is adjusted for the product */
  currency?: InputMaybe<Scalars['String']['input']>;
  /** Percentage of the particular product to be adjusted if the type selected is PERCENTAGE */
  percentage?: InputMaybe<Scalars['Decimal']['input']>;
  /** Price of the particular product to be adjusted if the type selected is OVERRIDEor FIXED. */
  priceAmount?: InputMaybe<Scalars['Decimal']['input']>;
  /** ID of price book that product needs to be added to. */
  priceBook: Scalars['ID']['input'];
  /** ID of product that is added to the price book. */
  product: Scalars['ID']['input'];
  /** Type of the price book product */
  valueType: PriceBookValueTypeEnum;
}

/** Deletes a price book product. */
export interface PriceBookProductDelete {
  __typename?: 'PriceBookProductDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  priceBookErrors: Array<PriceBookError>;
  priceBookProduct: Maybe<PriceBookProduct>;
}

export interface PriceBookProductFilterInput {
  search?: InputMaybe<Scalars['String']['input']>;
}

/** Products added to the PriceBook */
export interface PriceBookProductHistory extends Node {
  __typename?: 'PriceBookProductHistory';
  createdAt: Scalars['Date']['output'];
  currency: Scalars['String']['output'];
  /** Determines if the product's variant attached to the pricebook is removed or deleted. */
  deleted: Scalars['Boolean']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** Percentage to decrease or increase for the product's variants price if type selectedis fixed. */
  percentage: Scalars['Float']['output'];
  /** Amount to decrease or increase for the variants of the product if type selected isoverride or percentage. */
  price: Money;
  priceBook: Maybe<PriceBook>;
  productId: Scalars['Int']['output'];
  valueType: PriceBookProductHistoryValueType;
}

export interface PriceBookProductHistoryCountableConnection {
  __typename?: 'PriceBookProductHistoryCountableConnection';
  edges: Array<PriceBookProductHistoryCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface PriceBookProductHistoryCountableEdge {
  __typename?: 'PriceBookProductHistoryCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: PriceBookProductHistory;
}

export interface PriceBookProductHistoryFilterInput {
  search?: InputMaybe<Scalars['String']['input']>;
}

export enum PriceBookProductHistorySortField {
  /** Sort pricebook product history by creation date. */
  CreationDate = 'CREATION_DATE',
  /** Sort pricebook product history by number. */
  Number = 'NUMBER',
  /** Sort pricebook product history by percentage. */
  Percentage = 'PERCENTAGE',
  /** Sort pricebook product history by price. */
  Price = 'PRICE',
  /** Sort pricebook product history by type. */
  Type = 'TYPE'
}

export interface PriceBookProductHistorySortingInput {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort pricebooks products history by the selected field. */
  field: PriceBookProductHistorySortField;
}

/** An enumeration. */
export enum PriceBookProductHistoryValueType {
  /** adjust_fixed */
  AdjustFixed = 'ADJUST_FIXED',
  /** adjust_percentage */
  AdjustPercentage = 'ADJUST_PERCENTAGE'
}

export enum PriceBookProductSortField {
  /** Sort pricebook product history by number. */
  Number = 'NUMBER',
  /** Sort pricebook product history by percentage. */
  Percentage = 'PERCENTAGE',
  /** Sort pricebook product history by price. */
  Price = 'PRICE',
  /** Sort pricebook product history by type. */
  Type = 'TYPE'
}

export interface PriceBookProductSortingInput {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort pricebooks products by the selected field. */
  field: PriceBookProductSortField;
}

/** Product types added to the PriceBook */
export interface PriceBookProductType extends Node {
  __typename?: 'PriceBookProductType';
  currency: Scalars['String']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** Percentage to decrease or increase for the product type's variants price if typeselected is fixed. */
  percentage: Scalars['Float']['output'];
  /** Amount to decrease or increase for the variants of the product type if type selectedis override or percentage. */
  price: Money;
  priceBook: PriceBook;
  productType: ProductType;
  valueType: PriceBookProductTypeValueType;
}

/** Deletes price book's product types. */
export interface PriceBookProductTypeBulkDelete {
  __typename?: 'PriceBookProductTypeBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  priceBookErrors: Array<PriceBookError>;
}

export interface PriceBookProductTypeCountableConnection {
  __typename?: 'PriceBookProductTypeCountableConnection';
  edges: Array<PriceBookProductTypeCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface PriceBookProductTypeCountableEdge {
  __typename?: 'PriceBookProductTypeCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: PriceBookProductType;
}

/** Add a product type to price book. */
export interface PriceBookProductTypeCreate {
  __typename?: 'PriceBookProductTypeCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  priceBookErrors: Array<PriceBookError>;
  priceBookProductType: Maybe<PriceBookProductType>;
}

export interface PriceBookProductTypeCreateInput {
  /** Currency of the price that is adjusted for the product type */
  currency?: InputMaybe<Scalars['String']['input']>;
  /** Percentage of the particular product type to be adjusted if the type selected is PERCENTAGE */
  percentage?: InputMaybe<Scalars['Decimal']['input']>;
  /** Price of the particular product type to be adjusted if the value type selected isOVERRIDE or FIXED. */
  priceAmount?: InputMaybe<Scalars['Decimal']['input']>;
  /** ID of price book that product type needs to be added to. */
  priceBook: Scalars['ID']['input'];
  /** ID of product type that is added to the price book. */
  productType: Scalars['ID']['input'];
  /** Value type of the price book product type */
  valueType: PriceBookValueTypeEnum;
}

/** Deletes a price book product type. */
export interface PriceBookProductTypeDelete {
  __typename?: 'PriceBookProductTypeDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  priceBookErrors: Array<PriceBookError>;
  priceBookProductType: Maybe<PriceBookProductType>;
}

export interface PriceBookProductTypeFilterInput {
  search?: InputMaybe<Scalars['String']['input']>;
}

/** Product types added to the PriceBook */
export interface PriceBookProductTypeHistory extends Node {
  __typename?: 'PriceBookProductTypeHistory';
  createdAt: Scalars['Date']['output'];
  currency: Scalars['String']['output'];
  /** Determines if the product type's variant attached to the pricebook is removed ordeleted. */
  deleted: Scalars['Boolean']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** Percentage to decrease or increase for the product type's variants price if typeselected is fixed. */
  percentage: Scalars['Float']['output'];
  /** Amount to decrease or increase for the variants of the product type if type selectedis override or percentage. */
  price: Money;
  priceBook: Maybe<PriceBook>;
  productTypeId: Scalars['Int']['output'];
  valueType: PriceBookProductTypeHistoryValueType;
}

export interface PriceBookProductTypeHistoryCountableConnection {
  __typename?: 'PriceBookProductTypeHistoryCountableConnection';
  edges: Array<PriceBookProductTypeHistoryCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface PriceBookProductTypeHistoryCountableEdge {
  __typename?: 'PriceBookProductTypeHistoryCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: PriceBookProductTypeHistory;
}

export interface PriceBookProductTypeHistoryFilterInput {
  search?: InputMaybe<Scalars['String']['input']>;
}

export enum PriceBookProductTypeHistorySortField {
  /** Sort pricebook product type history by creation date. */
  CreationDate = 'CREATION_DATE',
  /** Sort pricebook product type history by number. */
  Number = 'NUMBER',
  /** Sort pricebook product type history by percentage. */
  Percentage = 'PERCENTAGE',
  /** Sort pricebook product type history by price. */
  Price = 'PRICE',
  /** Sort pricebook product type history by type. */
  Type = 'TYPE'
}

export interface PriceBookProductTypeHistorySortingInput {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort pricebooks products history by the selected field. */
  field: PriceBookProductTypeHistorySortField;
}

/** An enumeration. */
export enum PriceBookProductTypeHistoryValueType {
  /** adjust_fixed */
  AdjustFixed = 'ADJUST_FIXED',
  /** adjust_percentage */
  AdjustPercentage = 'ADJUST_PERCENTAGE'
}

export enum PriceBookProductTypeSortField {
  /** Sort pricebook product type history by number. */
  Number = 'NUMBER',
  /** Sort pricebook product type history by percentage. */
  Percentage = 'PERCENTAGE',
  /** Sort pricebook product type history by price. */
  Price = 'PRICE',
  /** Sort pricebook product type history by type. */
  Type = 'TYPE'
}

export interface PriceBookProductTypeSortingInput {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort pricebooks products types by the selected field. */
  field: PriceBookProductTypeSortField;
}

/** Updates an existing price book product type. */
export interface PriceBookProductTypeUpdate {
  __typename?: 'PriceBookProductTypeUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  priceBookErrors: Array<PriceBookError>;
  priceBookProductType: Maybe<PriceBookProductType>;
}

export interface PriceBookProductTypeUpdateInput {
  /** Currency of the price that is adjusted for the product type */
  currency?: InputMaybe<Scalars['String']['input']>;
  /** Percentage of the particular product type to be adjusted if the type selected is PERCENTAGE */
  percentage?: InputMaybe<Scalars['Decimal']['input']>;
  /** Price of the particular product type to be adjusted if the value type selected isOVERRIDE or FIXED. */
  priceAmount?: InputMaybe<Scalars['Decimal']['input']>;
  /** Value type of the price book product type */
  valueType?: InputMaybe<PriceBookValueTypeEnum>;
}

/** An enumeration. */
export enum PriceBookProductTypeValueType {
  /** adjust_fixed */
  AdjustFixed = 'ADJUST_FIXED',
  /** adjust_percentage */
  AdjustPercentage = 'ADJUST_PERCENTAGE'
}

/** Updates an existing price book product. */
export interface PriceBookProductUpdate {
  __typename?: 'PriceBookProductUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  priceBookErrors: Array<PriceBookError>;
  priceBookProduct: Maybe<PriceBookProduct>;
}

export interface PriceBookProductUpdateInput {
  /** Currency of the price that is adjusted for the product */
  currency?: InputMaybe<Scalars['String']['input']>;
  /** Percentage of the particular product to be adjusted if the type selected is PERCENTAGE */
  percentage?: InputMaybe<Scalars['Decimal']['input']>;
  /** Price of the particular product to be adjusted if the type selected is OVERRIDEor FIXED. */
  priceAmount?: InputMaybe<Scalars['Decimal']['input']>;
  /** Type of the price book product */
  valueType?: InputMaybe<PriceBookValueTypeEnum>;
}

/** An enumeration. */
export enum PriceBookProductValueType {
  /** adjust_fixed */
  AdjustFixed = 'ADJUST_FIXED',
  /** adjust_percentage */
  AdjustPercentage = 'ADJUST_PERCENTAGE'
}

export enum PriceBookSortField {
  /** Sort pricebook by name. */
  Name = 'NAME'
}

export interface PriceBookSortingInput {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort pricebooks by the selected field. */
  field: PriceBookSortField;
}

/** Updates an existing price book. */
export interface PriceBookUpdate {
  __typename?: 'PriceBookUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  priceBook: Maybe<PriceBook>;
  priceBookErrors: Array<PriceBookError>;
}

export interface PriceBookUpdateInput {
  /** Used to re-activate the price book. */
  activate?: InputMaybe<Scalars['Boolean']['input']>;
  /** Price book description (plaintext, read-only). */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Price book description (html). */
  descriptionHtml?: InputMaybe<Scalars['String']['input']>;
  /** Name of the price book */
  name?: InputMaybe<Scalars['String']['input']>;
}

export enum PriceBookValueTypeEnum {
  /** Adjust Fixed */
  AdjustFixed = 'ADJUST_FIXED',
  /** Adjust Percentage */
  AdjustPercentage = 'ADJUST_PERCENTAGE',
  /** Override */
  Override = 'OVERRIDE'
}

/** Variants added to the PriceBook */
export interface PriceBookVariant extends Node {
  __typename?: 'PriceBookVariant';
  currency: Scalars['String']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** Percentage to decrease or increase for the variant's price if type selected is fixed */
  percentage: Scalars['Float']['output'];
  /** Amount to decrease or increase for the variant if type selected is override orpercentage. */
  price: Money;
  priceBook: PriceBook;
  valueType: PriceBookVariantValueType;
  variant: ProductVariant;
}

/** Deletes price book's variants. */
export interface PriceBookVariantBulkDelete {
  __typename?: 'PriceBookVariantBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  priceBookErrors: Array<PriceBookError>;
}

export interface PriceBookVariantCountableConnection {
  __typename?: 'PriceBookVariantCountableConnection';
  edges: Array<PriceBookVariantCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface PriceBookVariantCountableEdge {
  __typename?: 'PriceBookVariantCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: PriceBookVariant;
}

/** Add a variant to price book. */
export interface PriceBookVariantCreate {
  __typename?: 'PriceBookVariantCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  priceBookErrors: Array<PriceBookError>;
  priceBookVariant: Maybe<PriceBookVariant>;
}

export interface PriceBookVariantCreateInput {
  /** Currency of the price that is adjusted for the variant */
  currency?: InputMaybe<Scalars['String']['input']>;
  /** Percentage of the particular variant to be adjusted if the type selected is PERCENTAGE */
  percentage?: InputMaybe<Scalars['Decimal']['input']>;
  /** Price of the particular variant to be adjusted if the type selected is OVERRIDEor FIXED. */
  priceAmount?: InputMaybe<Scalars['Decimal']['input']>;
  /** ID of price book that variant needs to be added to. */
  priceBook: Scalars['ID']['input'];
  /** Type of the price book variant */
  valueType: PriceBookValueTypeEnum;
  /** ID of variant that is added to the price book. */
  variant: Scalars['ID']['input'];
}

/** Deletes a price book variant. */
export interface PriceBookVariantDelete {
  __typename?: 'PriceBookVariantDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  priceBookErrors: Array<PriceBookError>;
  priceBookVariant: Maybe<PriceBookVariant>;
}

export interface PriceBookVariantFilterInput {
  search?: InputMaybe<Scalars['String']['input']>;
}

/** Variants added to the PriceBook */
export interface PriceBookVariantHistory extends Node {
  __typename?: 'PriceBookVariantHistory';
  createdAt: Scalars['Date']['output'];
  currency: Scalars['String']['output'];
  /** Determines if the variant attached to the pricebook is removed or deleted. */
  deleted: Scalars['Boolean']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** Percentage to decrease or increase for the variant's price if type selected is fixed. */
  percentage: Scalars['Float']['output'];
  /** Amount to decrease or increase for the variant if type selected is override orpercentage. */
  price: Money;
  priceBook: Maybe<PriceBook>;
  valueType: PriceBookVariantHistoryValueType;
  variantId: Scalars['Int']['output'];
}

export interface PriceBookVariantHistoryCountableConnection {
  __typename?: 'PriceBookVariantHistoryCountableConnection';
  edges: Array<PriceBookVariantHistoryCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface PriceBookVariantHistoryCountableEdge {
  __typename?: 'PriceBookVariantHistoryCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: PriceBookVariantHistory;
}

export interface PriceBookVariantHistoryFilterInput {
  search?: InputMaybe<Scalars['String']['input']>;
}

export enum PriceBookVariantHistorySortField {
  /** Sort pricebook variant history by creation date. */
  CreationDate = 'CREATION_DATE',
  /** Sort pricebook variant history by number. */
  Number = 'NUMBER',
  /** Sort pricebook variant history by percentage. */
  Percentage = 'PERCENTAGE',
  /** Sort pricebook variant history by price. */
  Price = 'PRICE',
  /** Sort pricebook variant history by type. */
  Type = 'TYPE'
}

export interface PriceBookVariantHistorySortingInput {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort pricebook variants history by the selected field. */
  field: PriceBookVariantHistorySortField;
}

/** An enumeration. */
export enum PriceBookVariantHistoryValueType {
  /** Adjust Fixed */
  AdjustFixed = 'ADJUST_FIXED',
  /** Adjust Percentage */
  AdjustPercentage = 'ADJUST_PERCENTAGE',
  /** Override */
  Override = 'OVERRIDE'
}

export enum PriceBookVariantSortField {
  /** Sort pricebook variant history by number. */
  Number = 'NUMBER',
  /** Sort pricebook variant history by percentage. */
  Percentage = 'PERCENTAGE',
  /** Sort pricebook variant history by price. */
  Price = 'PRICE',
  /** Sort pricebook variant history by type. */
  Type = 'TYPE'
}

export interface PriceBookVariantSortingInput {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort pricebook variants by the selected field. */
  field: PriceBookVariantSortField;
}

/** Updates an existing price book variant. */
export interface PriceBookVariantUpdate {
  __typename?: 'PriceBookVariantUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  priceBookErrors: Array<PriceBookError>;
  priceBookVariant: Maybe<PriceBookVariant>;
}

export interface PriceBookVariantUpdateInput {
  /** Currency of the price that is adjusted for the variant */
  currency?: InputMaybe<Scalars['String']['input']>;
  /** Percentage of the particular variant to be adjusted if the type selected is PERCENTAGE */
  percentage?: InputMaybe<Scalars['Decimal']['input']>;
  /** Price of the particular variant to be adjusted if the type selected is OVERRIDEor FIXED. */
  priceAmount?: InputMaybe<Scalars['Decimal']['input']>;
  /** Type of the price book variant */
  valueType?: InputMaybe<PriceBookValueTypeEnum>;
}

/** An enumeration. */
export enum PriceBookVariantValueType {
  /** Adjust Fixed */
  AdjustFixed = 'ADJUST_FIXED',
  /** Adjust Percentage */
  AdjustPercentage = 'ADJUST_PERCENTAGE',
  /** Override */
  Override = 'OVERRIDE'
}

export interface PriceRangeInput {
  /** Price greater than or equal to. */
  gte?: InputMaybe<Scalars['Float']['input']>;
  /** Price less than or equal to. */
  lte?: InputMaybe<Scalars['Float']['input']>;
}

/** Delete object's private metadata. */
export interface PrivateMetadataDelete {
  __typename?: 'PrivateMetadataDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  item: Maybe<ObjectWithMetadata>;
  metadataErrors: Array<MetadataError>;
}

/** Updates private metadata of an object. */
export interface PrivateMetadataUpdate {
  __typename?: 'PrivateMetadataUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  item: Maybe<ObjectWithMetadata>;
  metadataErrors: Array<MetadataError>;
}

/** Represents an individual item for sale in the storefront. */
export interface Product extends Node, ObjectWithMetadata {
  __typename?: 'Product';
  /** List of actions that can be performed based on the current state of the product. */
  actions: Maybe<Array<ProductAction>>;
  /** List of attributes assigned to this product. */
  attributes: Array<SelectedAttribute>;
  availableForPurchase: Maybe<Scalars['Date']['output']>;
  /** Brand of the product */
  brand: Maybe<Scalars['String']['output']>;
  category: Maybe<Category>;
  chargeTaxes: Scalars['Boolean']['output'];
  /** List of collections for the product. */
  collections: Maybe<Array<Collection>>;
  /** Countable edges of images for the product */
  countableImages: Maybe<ProductImageCountableConnection>;
  createdAt: Scalars['DateTime']['output'];
  /** Cumulative price of all products in grouped product. */
  cumulativePrice: Maybe<Money>;
  /** Available stock for grouped product. */
  cumulativeStock: Maybe<Scalars['Int']['output']>;
  currency: Scalars['String']['output'];
  /** List of custom fields assigned to this product. */
  customFields: Array<SelectedAttribute>;
  defaultVariant: Maybe<ProductVariant>;
  description: Scalars['String']['output'];
  descriptionHtml: Scalars['String']['output'];
  descriptionJson: Scalars['JSONString']['output'];
  /** Products destination location. */
  destinationLocation: Maybe<Location>;
  /** List of documents associated with the product. */
  documents: Maybe<Array<Document>>;
  externalId: Maybe<Scalars['String']['output']>;
  externalSource: Maybe<Scalars['String']['output']>;
  features: Maybe<Array<ProductFeature>>;
  /** List of all grouped products. */
  groupedProducts: Maybe<Array<Product>>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** Get a single product image by ID. */
  imageById: Maybe<ProductImage>;
  /** List of images for the product. With enabled ``strict_product_image_handling``- shows only images that are owned by product owner */
  images: Maybe<Array<ProductImage>>;
  /** Whether the product is in stock and visible or not. */
  isAvailable: Maybe<Scalars['Boolean']['output']>;
  /** Whether the product is available for purchase. */
  isAvailableForPurchase: Maybe<Scalars['Boolean']['output']>;
  isDigital: Scalars['Boolean']['output'];
  /** indicates whether we allow overriding the unit_price of variants in checkout and draft, quote, offer order lines */
  isPriceOverrideAllowed: Scalars['Boolean']['output'];
  /** Whether the product is published. */
  isPublished: Scalars['Boolean']['output'];
  isShippingRequired: Scalars['Boolean']['output'];
  /** List of all product's locations. */
  locations: Maybe<Array<Location>>;
  /** Manufacturer of the product */
  manufacturer: Maybe<Scalars['String']['output']>;
  margin: Maybe<Margin>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /** The price of the cheapest variant (including discounts). */
  minimalVariantPrice: Maybe<Money>;
  /** Product model code */
  model: Maybe<Scalars['String']['output']>;
  /** Manufacturer Product Number */
  mpn: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  /** Products origin location. */
  originLocation: Maybe<Location>;
  overrideCurrency: Scalars['Boolean']['output'];
  overridePrice: Scalars['Boolean']['output'];
  /** Lists the storefront product's pricing, the current price and discounts, only meant for displaying. */
  pricing: Maybe<ProductPricingInfo>;
  /** Products primary location. */
  primaryLocation: Maybe<Location>;
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /** Product configuration indicator. */
  productConfiguration: Maybe<Scalars['Int']['output']>;
  productType: Maybe<ProductType>;
  publicationDate: Maybe<Scalars['Date']['output']>;
  purchaseCost: Maybe<MoneyRange>;
  /** List of sales associated with the product. */
  sales: Array<Sale>;
  seller: Maybe<Seller>;
  seoDescription: Maybe<Scalars['String']['output']>;
  seoTitle: Maybe<Scalars['String']['output']>;
  slug: Scalars['String']['output'];
  /** Product sort order in the specific collection or in microsite. Make sense only as a part of the parent 'collection(s)' or 'microsite(s)' queries. */
  sortOrder: Maybe<Scalars['Int']['output']>;
  /** The product's sorting priority weight in query results. A larger value indicates a higher priority. This field can be used in both ascending and descending sorting methods. */
  sortPriorityWeight: Maybe<Scalars['Decimal']['output']>;
  status: ProductStatus;
  subStatus: ProductSubStatus;
  /** A type of tax. Assigned by enabled tax gateway */
  taxType: Maybe<TaxType>;
  /** The main thumbnail for a product. */
  thumbnail: Maybe<Image>;
  updatedAt: Maybe<Scalars['DateTime']['output']>;
  /** List of variants for the product. */
  variants: Maybe<Array<ProductVariant>>;
  visibleInListings: Scalars['Boolean']['output'];
  /** List of vouchers associated with the product. */
  vouchers: Array<Voucher>;
  /** Product stock stats combining all variants in all warehouses. Requires MANAGE_PRODUCTS permission. */
  warehousesStats: Maybe<Array<WarehouseStats>>;
  weight: Maybe<Weight>;
}


/** Represents an individual item for sale in the storefront. */
export interface ProductCountableImagesArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
}


/** Represents an individual item for sale in the storefront. */
export interface ProductImageByIdArgs {
  id: InputMaybe<Scalars['ID']['input']>;
}


/** Represents an individual item for sale in the storefront. */
export interface ProductThumbnailArgs {
  size: InputMaybe<Scalars['Int']['input']>;
}

export enum ProductAction {
  /** Represents a product that was approved for master product status. */
  Approved = 'APPROVED',
  /** Represents a product that was declined master product status. */
  Declined = 'DECLINED'
}

/** Update product category for multiple products */
export interface ProductBulkCategoryUpdate {
  __typename?: 'ProductBulkCategoryUpdate';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
}

/** Deletes products. */
export interface ProductBulkDelete {
  __typename?: 'ProductBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
}

/** Publish products. */
export interface ProductBulkPublish {
  __typename?: 'ProductBulkPublish';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
}

export interface ProductCategoryReportType {
  __typename?: 'ProductCategoryReportType';
  avgPrice: Maybe<Scalars['Float']['output']>;
  avgPriceGrossAmount: Maybe<Scalars['Float']['output']>;
  category: Maybe<Category>;
  grossRevenue: Maybe<Scalars['Float']['output']>;
  maxPrice: Maybe<Scalars['Float']['output']>;
  maxPriceGrossAmount: Maybe<Scalars['Float']['output']>;
  minPrice: Maybe<Scalars['Float']['output']>;
  minPriceGrossAmount: Maybe<Scalars['Float']['output']>;
  product_CategoryId: Maybe<Scalars['Int']['output']>;
  quantityOrdered: Maybe<Scalars['Int']['output']>;
  revenue: Maybe<Scalars['Float']['output']>;
  totals: Maybe<Scalars['Int']['output']>;
}

export interface ProductCountableConnection {
  __typename?: 'ProductCountableConnection';
  edges: Array<ProductCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface ProductCountableEdge {
  __typename?: 'ProductCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Product;
}

/** Creates a new product. */
export interface ProductCreate {
  __typename?: 'ProductCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  product: Maybe<Product>;
  productErrors: Array<ProductError>;
}

export interface ProductCreateInput {
  /** Whether to allow backorders for this product variant, if backorders are permitted at the marketplace level */
  allowBackorders?: InputMaybe<Scalars['Boolean']['input']>;
  /** List of attributes. */
  attributes?: InputMaybe<Array<AttributeValueInput>>;
  /** Default price for product variant. DEPRECATED: All products are now configurable instead of simple. This field will be removed after 2024-07-01. */
  basePrice?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** Product brand */
  brand?: InputMaybe<Scalars['String']['input']>;
  /** ID of the product's category. */
  category?: InputMaybe<Scalars['ID']['input']>;
  /** Determine if taxes are being charged for the product. */
  chargeTaxes?: InputMaybe<Scalars['Boolean']['input']>;
  /** List of IDs of collections that the product belongs to. */
  collections?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Product configuration choice identifier */
  configuration?: InputMaybe<Scalars['Int']['input']>;
  /** Default cost price for product variant. DEPRECATED: All products are now configurable instead of simple. This field will be removed after 2024-07-01. */
  costPrice?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** Choose a currency to assign to the product prices. */
  currency?: InputMaybe<Scalars['String']['input']>;
  /** List of custom fields. */
  customFields?: InputMaybe<Array<AttributeValueInput>>;
  /** Product description (plaintext, read-only). */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Product description (html). */
  descriptionHtml?: InputMaybe<Scalars['String']['input']>;
  /** Product description (JSON). */
  descriptionJson?: InputMaybe<Scalars['JSONString']['input']>;
  /** The external ID from a foreign system if a product originated from that system, used in combination with provided externalSource. If submitting externalId, you must also provide an externalSource argument. If these two are provided, the productCreate mutation will attempt to perform an upsert instead of a creation. */
  externalId?: InputMaybe<Scalars['String']['input']>;
  /** The external source identifier of a foreign system (e.g. nautical.fulfillment.shopify) if a product originated from that system, used in combination with provided externalId. If submitting externalSource, you must also provide an externalId argument. If these two are provided, the productCreate mutation will attempt to perform an upsert instead of a creation. */
  externalSource?: InputMaybe<Scalars['String']['input']>;
  /** Determine if product should be available for purchase. */
  isAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  /** Set whether this product is digital by default, will be overridden by product type if provided */
  isDigital?: InputMaybe<Scalars['Boolean']['input']>;
  /** Set whether this product allows price overrides by default, will be controlled by product type if provided */
  isPriceOverrideAllowed?: InputMaybe<Scalars['Boolean']['input']>;
  /** Determines if product is visible to customers. */
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  /** Set whether this product requires shipping by default, will be overridden by product type if provided */
  isShippingRequired?: InputMaybe<Scalars['Boolean']['input']>;
  /** Manufacturer of the product */
  manufacturer?: InputMaybe<Scalars['String']['input']>;
  /** Product model code */
  model?: InputMaybe<Scalars['String']['input']>;
  /** Manufacturer product number */
  mpn?: InputMaybe<Scalars['String']['input']>;
  /** Product name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Override currency for product */
  overrideCurrency?: InputMaybe<Scalars['Boolean']['input']>;
  /** Override price for grouped products */
  overridePrice?: InputMaybe<Scalars['Boolean']['input']>;
  /** ID of the type that product belongs to. */
  productType?: InputMaybe<Scalars['ID']['input']>;
  /** Publication date. ISO 8601 standard. */
  publicationDate?: InputMaybe<Scalars['Date']['input']>;
  /** ID of the seller that product belongs to. */
  seller: Scalars['ID']['input'];
  /** Search engine optimization fields. */
  seo?: InputMaybe<SeoInput>;
  /** Stock keeping unit of a product. Note: this field is only used if a product doesn't use variants. DEPRECATED: All products are now configurable instead of simple. This field will be removed after 2024-07-01. */
  sku?: InputMaybe<Scalars['String']['input']>;
  /** Product slug. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** Sort priority for product */
  sortPriorityWeight?: InputMaybe<Scalars['Decimal']['input']>;
  /** A start date from which a product will be available for purchase. When not set and isAvailable is set to True, the current day is assumed. */
  startDate?: InputMaybe<Scalars['Date']['input']>;
  /** Stocks of a product available for sale. Note: this field is only used if a product doesn't use variants. DEPRECATED: All products are now configurable instead of simple. This field will be removed after 2024-07-01. */
  stocks?: InputMaybe<Array<StockInput>>;
  /** Substatus the product is to be changed to. */
  subStatus?: InputMaybe<ProductSubStatusEnum>;
  /** Tax rate for enabled tax gateway. */
  taxCode?: InputMaybe<Scalars['String']['input']>;
  /** Determines whether to track changes to this variant's inventory. If set to 'false', the product's stock quantity won't reduce when a customer purchases this item. However, even when 'false', you must assign a stock quantity to a warehouse to allow checkouts. Usually, this involves allocating a placeholder stock amount that matches the maximum quantity purchased at once. Note: this field is applicable only for simple products.DEPRECATED: All products are now configurable instead of simple. This field will be removed after 2024-07-01. */
  trackInventory?: InputMaybe<Scalars['Boolean']['input']>;
  /** Size of the variant. Note: this field is only used if product doesn't use variants. DEPRECATED: All products are now configurable instead of simple. This field will be removed after 2024-07-01. */
  variantSize?: InputMaybe<VariantSizeInput>;
  /** Determines if product is visible in product listings (doesn't apply to product collections). */
  visibleInListings?: InputMaybe<Scalars['Boolean']['input']>;
  /** Weight of the Product. */
  weight?: InputMaybe<Scalars['WeightScalar']['input']>;
}

/** Deletes a product. */
export interface ProductDelete {
  __typename?: 'ProductDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  product: Maybe<Product>;
  productErrors: Array<ProductError>;
}

export interface ProductError {
  __typename?: 'ProductError';
  /** List of attributes IDs which causes the error. */
  attributes: Maybe<Array<Scalars['ID']['output']>>;
  /** The error code. */
  code: ProductErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message: Scalars['String']['output'];
}

/** An enumeration. */
export enum ProductErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  AttributeAlreadyAssigned = 'ATTRIBUTE_ALREADY_ASSIGNED',
  AttributeCannotBeAssigned = 'ATTRIBUTE_CANNOT_BE_ASSIGNED',
  AttributeVariantsDisabled = 'ATTRIBUTE_VARIANTS_DISABLED',
  CategoryCannotBeAssigned = 'CATEGORY_CANNOT_BE_ASSIGNED',
  CategoryCannotBeDeleted = 'CATEGORY_CANNOT_BE_DELETED',
  CollectionAllowedForProductsOnly = 'COLLECTION_ALLOWED_FOR_PRODUCTS_ONLY',
  CollectionAllowedForVariantsOnly = 'COLLECTION_ALLOWED_FOR_VARIANTS_ONLY',
  CollectionCannotBeChanged = 'COLLECTION_CANNOT_BE_CHANGED',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  InvalidPhone = 'INVALID_PHONE',
  InventoryFieldCannotBeEdited = 'INVENTORY_FIELD_CANNOT_BE_EDITED',
  NotFound = 'NOT_FOUND',
  NotProductsImage = 'NOT_PRODUCTS_IMAGE',
  NotProductsVariant = 'NOT_PRODUCTS_VARIANT',
  Required = 'REQUIRED',
  Unique = 'UNIQUE',
  VariantInActiveOrder = 'VARIANT_IN_ACTIVE_ORDER',
  VariantNoDigitalContent = 'VARIANT_NO_DIGITAL_CONTENT'
}

/** Represents a single product feature. */
export interface ProductFeature extends Node {
  __typename?: 'ProductFeature';
  deletedAt: Maybe<Scalars['DateTime']['output']>;
  deletedByApp: Maybe<App>;
  deletedByUser: Maybe<User>;
  deletionBatchUuid: Maybe<Scalars['UUID']['output']>;
  description: Scalars['String']['output'];
  /** The type that we expect to render the feature's values as. */
  featureType: FeatureTypeEnum;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  /** Available options for this product feature */
  options: Maybe<Array<Scalars['String']['output']>>;
  product: Product;
  productTypeFeature: Maybe<ProductTypeProductFeature>;
  sortOrder: Maybe<Scalars['Int']['output']>;
}

export interface ProductFeatureCountableConnection {
  __typename?: 'ProductFeatureCountableConnection';
  edges: Array<ProductFeatureCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface ProductFeatureCountableEdge {
  __typename?: 'ProductFeatureCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ProductFeature;
}

export enum ProductFieldEnum {
  AvailableForPurchase = 'AVAILABLE_FOR_PURCHASE',
  Category = 'CATEGORY',
  ChargeTaxes = 'CHARGE_TAXES',
  Collections = 'COLLECTIONS',
  CostPrice = 'COST_PRICE',
  Description = 'DESCRIPTION',
  Name = 'NAME',
  ProductImages = 'PRODUCT_IMAGES',
  ProductType = 'PRODUCT_TYPE',
  ProductWeight = 'PRODUCT_WEIGHT',
  Searchable = 'SEARCHABLE',
  VariantImages = 'VARIANT_IMAGES',
  VariantPrice = 'VARIANT_PRICE',
  VariantSku = 'VARIANT_SKU',
  VariantWeight = 'VARIANT_WEIGHT',
  Visible = 'VISIBLE'
}

export interface ProductFilterInput {
  advancedSearch?: InputMaybe<ProductSearchInput>;
  attributes?: InputMaybe<Array<AttributeInput>>;
  brand?: InputMaybe<Array<Scalars['String']['input']>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  collections?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  configuration?: InputMaybe<Array<Scalars['Int']['input']>>;
  createdAt?: InputMaybe<DateTimeRangeInput>;
  customFields?: InputMaybe<Array<AttributeInput>>;
  dates?: InputMaybe<CustomDateRangeInput>;
  features?: InputMaybe<FeatureFilterInput>;
  hasCategory?: InputMaybe<Scalars['Boolean']['input']>;
  hideProductsInGroup?: InputMaybe<Scalars['Boolean']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  inCircle?: InputMaybe<Array<RadiusSearchInput>>;
  isGroup?: InputMaybe<Scalars['Boolean']['input']>;
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  isSimple?: InputMaybe<Scalars['Boolean']['input']>;
  isStaff?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<MetadataFilterInput>;
  minimalPrice?: InputMaybe<PriceRangeInput>;
  mpn?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<PriceRangeInput>;
  privateMetadata?: InputMaybe<MetadataFilterInput>;
  productType?: InputMaybe<Scalars['ID']['input']>;
  productTypes?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publicationDate?: InputMaybe<DateRangeInput>;
  search?: InputMaybe<Scalars['String']['input']>;
  sellers?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  slug?: InputMaybe<Array<Scalars['String']['input']>>;
  stockAvailability?: InputMaybe<StockAvailability>;
  stocks?: InputMaybe<ProductStockFilterInput>;
  subStatus?: InputMaybe<ProductSubStatusEnum>;
  updatedAt?: InputMaybe<DateTimeRangeInput>;
}

/** Represents a product image. */
export interface ProductImage extends Node {
  __typename?: 'ProductImage';
  alt: Scalars['String']['output'];
  externalId: Maybe<Scalars['String']['output']>;
  externalSource: Maybe<Scalars['String']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  sortOrder: Maybe<Scalars['Int']['output']>;
  /** The URL of the image. */
  url: Scalars['String']['output'];
}


/** Represents a product image. */
export interface ProductImageUrlArgs {
  size: InputMaybe<Scalars['Int']['input']>;
}

/** Deletes product images. */
export interface ProductImageBulkDelete {
  __typename?: 'ProductImageBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
}

export interface ProductImageCountableConnection {
  __typename?: 'ProductImageCountableConnection';
  edges: Array<ProductImageCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface ProductImageCountableEdge {
  __typename?: 'ProductImageCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ProductImage;
}

/** Create a product image. If URL is present, image will be taken from provided URL. If no URL provided, then this mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec */
export interface ProductImageCreate {
  __typename?: 'ProductImageCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  image: Maybe<ProductImage>;
  product: Maybe<Product>;
  productErrors: Array<ProductError>;
}

export interface ProductImageCreateInput {
  /** Alt text for an image. */
  alt?: InputMaybe<Scalars['String']['input']>;
  /** External ID of the product image if originating from outside the system. */
  externalId?: InputMaybe<Scalars['String']['input']>;
  /** External source of the product image if originating from outside the system. */
  externalSource?: InputMaybe<Scalars['String']['input']>;
  /** Represents an image file in a multipart request. */
  image?: InputMaybe<Scalars['Upload']['input']>;
  /** ID of an product. */
  product: Scalars['ID']['input'];
  /** Only for use by Marketplace Operator, if true then the image ownership will transfer to the seller that owns the product it is being assigned to, if false or not provided then image ownership will not transfer. */
  transferImageOwnership?: InputMaybe<Scalars['Boolean']['input']>;
  /** URL of image to upload */
  url?: InputMaybe<Scalars['String']['input']>;
}

/** Deletes a product image. */
export interface ProductImageDelete {
  __typename?: 'ProductImageDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  image: Maybe<ProductImage>;
  product: Maybe<Product>;
  productErrors: Array<ProductError>;
}

/** Changes ordering of the product image. */
export interface ProductImageReorder {
  __typename?: 'ProductImageReorder';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  images: Maybe<Array<ProductImage>>;
  product: Maybe<Product>;
  productErrors: Array<ProductError>;
}

/** Updates a product image. */
export interface ProductImageUpdate {
  __typename?: 'ProductImageUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  image: Maybe<ProductImage>;
  product: Maybe<Product>;
  productErrors: Array<ProductError>;
}

export interface ProductImageUpdateInput {
  /** Alt text for an image. */
  alt?: InputMaybe<Scalars['String']['input']>;
}

export interface ProductInput {
  /** List of attributes. */
  attributes?: InputMaybe<Array<AttributeValueInput>>;
  /** Default price for product variant. DEPRECATED: All products are now configurable instead of simple. This field will be removed after 2024-07-01. */
  basePrice?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** Product brand */
  brand?: InputMaybe<Scalars['String']['input']>;
  /** ID of the product's category. */
  category?: InputMaybe<Scalars['ID']['input']>;
  /** Determine if taxes are being charged for the product. */
  chargeTaxes?: InputMaybe<Scalars['Boolean']['input']>;
  /** List of IDs of collections that the product belongs to. */
  collections?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Default cost price for product variant. DEPRECATED: All products are now configurable instead of simple. This field will be removed after 2024-07-01. */
  costPrice?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** Choose a currency to assign to the product prices. */
  currency?: InputMaybe<Scalars['String']['input']>;
  /** List of custom fields. */
  customFields?: InputMaybe<Array<AttributeValueInput>>;
  /** Product description (plaintext, read-only). */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Product description (html). */
  descriptionHtml?: InputMaybe<Scalars['String']['input']>;
  /** Product description (JSON). */
  descriptionJson?: InputMaybe<Scalars['JSONString']['input']>;
  /** Set whether this product is digital by default, will be overridden by product type if provided */
  isDigital?: InputMaybe<Scalars['Boolean']['input']>;
  /** Set whether this product allows price overrides by default, will be controlled by product type if provided */
  isPriceOverrideAllowed?: InputMaybe<Scalars['Boolean']['input']>;
  /** Determines if product is visible to customers. */
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  /** Set whether this product requires shipping by default, will be overridden by product type if provided */
  isShippingRequired?: InputMaybe<Scalars['Boolean']['input']>;
  /** Manufacturer of the product */
  manufacturer?: InputMaybe<Scalars['String']['input']>;
  /** Product model code */
  model?: InputMaybe<Scalars['String']['input']>;
  /** Manufacturer product number */
  mpn?: InputMaybe<Scalars['String']['input']>;
  /** Product name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Override currency for product */
  overrideCurrency?: InputMaybe<Scalars['Boolean']['input']>;
  /** Override price for grouped products */
  overridePrice?: InputMaybe<Scalars['Boolean']['input']>;
  /** ID of the type that product belongs to. */
  productType?: InputMaybe<Scalars['ID']['input']>;
  /** Publication date. ISO 8601 standard. */
  publicationDate?: InputMaybe<Scalars['Date']['input']>;
  /** Search engine optimization fields. */
  seo?: InputMaybe<SeoInput>;
  /** Stock keeping unit of a product. Note: this field is only used if a product doesn't use variants. DEPRECATED: All products are now configurable instead of simple. This field will be removed after 2024-07-01. */
  sku?: InputMaybe<Scalars['String']['input']>;
  /** Product slug. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** Sort priority for product */
  sortPriorityWeight?: InputMaybe<Scalars['Decimal']['input']>;
  /** Substatus the product is to be changed to. */
  subStatus?: InputMaybe<ProductSubStatusEnum>;
  /** Tax rate for enabled tax gateway. */
  taxCode?: InputMaybe<Scalars['String']['input']>;
  /** Determines whether to track changes to this variant's inventory. If set to 'false', the product's stock quantity won't reduce when a customer purchases this item. However, even when 'false', you must assign a stock quantity to a warehouse to allow checkouts. Usually, this involves allocating a placeholder stock amount that matches the maximum quantity purchased at once. Note: this field is applicable only for simple products.DEPRECATED: All products are now configurable instead of simple. This field will be removed after 2024-07-01. */
  trackInventory?: InputMaybe<Scalars['Boolean']['input']>;
  /** Size of the variant. Note: this field is only used if product doesn't use variants. DEPRECATED: All products are now configurable instead of simple. This field will be removed after 2024-07-01. */
  variantSize?: InputMaybe<VariantSizeInput>;
  /** Determines if product is visible in product listings (doesn't apply to product collections). */
  visibleInListings?: InputMaybe<Scalars['Boolean']['input']>;
  /** Weight of the Product. */
  weight?: InputMaybe<Scalars['WeightScalar']['input']>;
}

/** Create a new location for the product. */
export interface ProductLocationCreate {
  __typename?: 'ProductLocationCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** A location instance which was created */
  location: Maybe<Location>;
  /** A product instance for which the location was created. */
  product: Maybe<Product>;
  productErrors: Array<ProductError>;
}

/** Delete a location for a product. */
export interface ProductLocationDelete {
  __typename?: 'ProductLocationDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** A product instance for which a location was deleted */
  product: Maybe<Product>;
  productErrors: Array<ProductError>;
}

/** Updates a location for a product. */
export interface ProductLocationUpdate {
  __typename?: 'ProductLocationUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** A location instance which was updated */
  location: Maybe<Location>;
  /** A product instance for which the location was updated. */
  product: Maybe<Product>;
  productErrors: Array<ProductError>;
}

export interface ProductOrder {
  /**
   * Sort product by the selected attribute's values.
   * Note: this doesn't take translations into account yet.
   */
  attributeId?: InputMaybe<Scalars['ID']['input']>;
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort products by the selected field. */
  field?: InputMaybe<ProductOrderField>;
}

export enum ProductOrderField {
  /** Sort products by brand. */
  Brand = 'BRAND',
  /** Sort products by category. */
  Category = 'CATEGORY',
  /** Sort products by create date. */
  Created = 'CREATED',
  /** Sort products by update date. */
  Date = 'DATE',
  /** Sort products by manufacturer. */
  Manufacturer = 'MANUFACTURER',
  /** Sort products by a minimal price of a product's variant. */
  MinimalPrice = 'MINIMAL_PRICE',
  /** Sort products by name. */
  Name = 'NAME',
  /** Sort products by price. */
  Price = 'PRICE',
  /** Sort products by publication date. */
  PublicationDate = 'PUBLICATION_DATE',
  /** Sort products by publication status. */
  Published = 'PUBLISHED',
  /** Sort products by seller. */
  Seller = 'SELLER',
  /** Sort products by sku. */
  Sku = 'SKU',
  /** Sort products by sort priority weight. */
  SortPriorityWeight = 'SORT_PRIORITY_WEIGHT',
  /** Sort products by sub status. */
  SubStatus = 'SUB_STATUS',
  /** Sort products by type. */
  Type = 'TYPE'
}

/** Represents availability of a product in the storefront. */
export interface ProductPricingInfo {
  __typename?: 'ProductPricingInfo';
  /** The discount amount if in sale (null otherwise). */
  discount: TaxedMoney;
  /** The discount amount in the local currency. */
  discountLocalCurrency: TaxedMoney;
  /** Whether it is in sale or not. */
  onSale: Scalars['Boolean']['output'];
  /** The discounted price range of the product variants. */
  priceRange: TaxedMoneyRange;
  /** The discounted price range of the product variants in the local currency. */
  priceRangeLocalCurrency: TaxedMoneyRange;
  /** The undiscounted price range of the product variants. */
  priceRangeUndiscounted: TaxedMoneyRange;
  /** The undiscounted price range of the product variants in the local currency. */
  priceRangeUndiscountedLocalCurrency: TaxedMoneyRange;
}

/** Represents ratings and reviews for a product. */
export interface ProductRatingsAndReviews {
  __typename?: 'ProductRatingsAndReviews';
  /** Summary of all ratings and reviews */
  bottomline: Maybe<BottomLine>;
  /** List of reviews. */
  reviews: Maybe<Array<Review>>;
}

/** Reorder the variants of a product. Mutation updates updated_at on product and triggers PRODUCT_UPDATED webhook. */
export interface ProductReorderVariants {
  __typename?: 'ProductReorderVariants';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  product: Maybe<Product>;
  productErrors: Array<ProductError>;
}

/** Submit a rating and review for a product. */
export interface ProductReviewSubmit {
  __typename?: 'ProductReviewSubmit';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  submissionSuccessful: Maybe<Scalars['Boolean']['output']>;
}

export enum ProductSearchFieldEnum {
  Brand = 'BRAND',
  CategoryName = 'CATEGORY_NAME',
  Description = 'DESCRIPTION',
  DescriptionJson = 'DESCRIPTION_JSON',
  Manufacturer = 'MANUFACTURER',
  Model = 'MODEL',
  Mpn = 'MPN',
  Name = 'NAME',
  Nsn = 'NSN',
  ProductAttributeName = 'PRODUCT_ATTRIBUTE_NAME',
  ProductAttributeValueName = 'PRODUCT_ATTRIBUTE_VALUE_NAME',
  ProductAttributeValueValue = 'PRODUCT_ATTRIBUTE_VALUE_VALUE',
  SellerName = 'SELLER_NAME',
  Sku = 'SKU',
  SubProductName = 'SUB_PRODUCT_NAME',
  SubProductVariantName = 'SUB_PRODUCT_VARIANT_NAME',
  SubProductVariantSku = 'SUB_PRODUCT_VARIANT_SKU',
  VariantAttributeName = 'VARIANT_ATTRIBUTE_NAME',
  VariantAttributeValueName = 'VARIANT_ATTRIBUTE_VALUE_NAME',
  VariantAttributeValueValue = 'VARIANT_ATTRIBUTE_VALUE_VALUE',
  VariantName = 'VARIANT_NAME'
}

export interface ProductSearchInput {
  /**
   * List of fields to search on
   *         (if not provided, only searches name by default).
   */
  searchFields?: InputMaybe<Array<ProductSearchFieldEnum>>;
  /** Search term. */
  searchTerm: Scalars['String']['input'];
}

/** Set product availability for purchase date. */
export interface ProductSetAvailabilityForPurchase {
  __typename?: 'ProductSetAvailabilityForPurchase';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  product: Maybe<Product>;
  productErrors: Array<ProductError>;
}

/** Sets a location type. */
export interface ProductSetLocationType {
  __typename?: 'ProductSetLocationType';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** An updated location instance. */
  location: Maybe<Location>;
  /** An updated product instance. */
  product: Maybe<Product>;
  productErrors: Array<ProductError>;
}

/** An enumeration. */
export enum ProductStatus {
  /** Active */
  Active = 'ACTIVE',
  /** Draft */
  Draft = 'DRAFT'
}

export interface ProductStockFilterInput {
  quantity?: InputMaybe<IntRangeInput>;
  warehouseIds?: InputMaybe<Array<Scalars['ID']['input']>>;
}

/** An enumeration. */
export enum ProductSubStatus {
  /** Approved */
  Approved = 'APPROVED',
  /** Declined */
  Declined = 'DECLINED',
  /** In review */
  InReview = 'IN_REVIEW'
}

export enum ProductSubStatusEnum {
  /** Approved */
  Approved = 'APPROVED',
  /** Declined */
  Declined = 'DECLINED',
  /** In review */
  InReview = 'IN_REVIEW'
}

/** Represents a type of product. It defines what attributes are available to products of this type. */
export interface ProductType extends Node, ObjectWithMetadata {
  __typename?: 'ProductType';
  availableAttributes: Maybe<AttributeCountableConnection>;
  createdBy: Maybe<Seller>;
  /** External source from which the product type is imported. */
  externalSource: Maybe<Scalars['String']['output']>;
  /** Legacy indicator, always true. */
  hasVariants: Maybe<Scalars['Boolean']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  isDigital: Scalars['Boolean']['output'];
  /** indicates whether we allow overriding the unit_price of variants in checkout and draft, quote, offer order lines */
  isPriceOverrideAllowed: Scalars['Boolean']['output'];
  isShippingRequired: Scalars['Boolean']['output'];
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /** Brand of the product */
  model: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /** Product attributes of that product type. */
  productAttributes: Maybe<Array<Attribute>>;
  /** Product features of this product type. */
  productFeatures: Maybe<Array<ProductTypeProductFeature>>;
  /** List of products of this type. */
  products: Maybe<ProductCountableConnection>;
  slug: Scalars['String']['output'];
  /** @deprecated This field is unused and will be removed after 2024-03-01. */
  taxRate: Maybe<Scalars['String']['output']>;
  /** A type of tax. Assigned by enabled tax gateway */
  taxType: Maybe<TaxType>;
  /** Variant attributes of that product type. */
  variantAttributes: Maybe<Array<Attribute>>;
  /** Variant features of this product type. */
  variantFeatures: Maybe<Array<ProductTypeVariantFeature>>;
  weight: Maybe<Weight>;
}


/** Represents a type of product. It defines what attributes are available to products of this type. */
export interface ProductTypeAvailableAttributesArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<AttributeFilterInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
}


/** Represents a type of product. It defines what attributes are available to products of this type. */
export interface ProductTypeProductsArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
}

/** Deletes product types. */
export interface ProductTypeBulkDelete {
  __typename?: 'ProductTypeBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
}

export enum ProductTypeConfigurable {
  Configurable = 'CONFIGURABLE',
  Simple = 'SIMPLE'
}

export interface ProductTypeCountableConnection {
  __typename?: 'ProductTypeCountableConnection';
  edges: Array<ProductTypeCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface ProductTypeCountableEdge {
  __typename?: 'ProductTypeCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ProductType;
}

/** Creates a new product type. */
export interface ProductTypeCreate {
  __typename?: 'ProductTypeCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  productType: Maybe<ProductType>;
}

/** Deletes a product type. */
export interface ProductTypeDelete {
  __typename?: 'ProductTypeDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  productType: Maybe<ProductType>;
}

export enum ProductTypeEnum {
  Digital = 'DIGITAL',
  Shippable = 'SHIPPABLE'
}

/** Creates a new product or variant feature on a product type. */
export interface ProductTypeFeatureCreate {
  __typename?: 'ProductTypeFeatureCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  productType: Maybe<ProductType>;
}

export interface ProductTypeFeatureCreateInput {
  /** Description (value) of the feature. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Feature type to assign to the feature. */
  featureType?: InputMaybe<FeatureTypeEnum>;
  /** ID of the product type for which to create the feature. */
  id: Scalars['ID']['input'];
  /** True if feature will be a variant feature, false if feature will be a product feature. */
  isVariantFeature: Scalars['Boolean']['input'];
  /** Name (key) of the feature. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** List of available options. */
  options?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

/** Deletes a product or variant feature on a product type. */
export interface ProductTypeFeatureDelete {
  __typename?: 'ProductTypeFeatureDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  productType: Maybe<ProductType>;
}

export interface ProductTypeFeatureInput {
  /** Description (value) of the feature. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Feature type to assign to the feature. */
  featureType?: InputMaybe<FeatureTypeEnum>;
  /** Name (key) of the feature. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** List of available options. */
  options?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
}

/** Updates a product or variant feature on a product type. */
export interface ProductTypeFeatureUpdate {
  __typename?: 'ProductTypeFeatureUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  productType: Maybe<ProductType>;
}

export interface ProductTypeFilterInput {
  configurable?: InputMaybe<ProductTypeConfigurable>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  productType?: InputMaybe<ProductTypeEnum>;
  search?: InputMaybe<Scalars['String']['input']>;
  showExternal?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface ProductTypeInput {
  /** ID of the Seller that created the Product Type, or null if Marketplace Operator */
  createdBy?: InputMaybe<Scalars['String']['input']>;
  /** Determines if products are digital. */
  isDigital?: InputMaybe<Scalars['Boolean']['input']>;
  /** Allow variant price to be overridden for products in this product type in the checkout or in quote, draft and offer orders. */
  isPriceOverrideAllowed?: InputMaybe<Scalars['Boolean']['input']>;
  /** Determines if shipping is required for products of this variant. */
  isShippingRequired?: InputMaybe<Scalars['Boolean']['input']>;
  /** Name of the product type. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** List of attributes shared among all product variants. */
  productAttributes?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Product type slug. */
  slug?: InputMaybe<Scalars['String']['input']>;
  /** Tax rate for enabled tax gateway. */
  taxCode?: InputMaybe<Scalars['String']['input']>;
  /** List of attributes used to distinguish between different variants of a product. */
  variantAttributes?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Weight of the ProductType items. */
  weight?: InputMaybe<Scalars['WeightScalar']['input']>;
}

/** Represents a single product feature as part of a product type feature template. */
export interface ProductTypeProductFeature extends Node {
  __typename?: 'ProductTypeProductFeature';
  description: Scalars['String']['output'];
  /** The type that we expect to render the feature's values as. */
  featureType: FeatureTypeEnum;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  /** Available options for this product feature */
  options: Maybe<Array<Scalars['String']['output']>>;
  productFeatures: ProductFeatureCountableConnection;
  productType: ProductType;
  sortOrder: Maybe<Scalars['Int']['output']>;
}


/** Represents a single product feature as part of a product type feature template. */
export interface ProductTypeProductFeatureProductFeaturesArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
}

/** Reorder the attributes of a product type. */
export interface ProductTypeReorderAttributes {
  __typename?: 'ProductTypeReorderAttributes';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  /** Product type from which attributes are reordered. */
  productType: Maybe<ProductType>;
}

export enum ProductTypeSortField {
  /** Sort products by type. */
  Digital = 'DIGITAL',
  /** Sort products by Sort attributes by external source. */
  ExternalSource = 'EXTERNAL_SOURCE',
  /** Sort products by name. */
  Name = 'NAME',
  /** Sort products by shipping. */
  ShippingRequired = 'SHIPPING_REQUIRED'
}

export interface ProductTypeSortingInput {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort product types by the selected field. */
  field: ProductTypeSortField;
}

/** Updates an existing product type. */
export interface ProductTypeUpdate {
  __typename?: 'ProductTypeUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  productType: Maybe<ProductType>;
}

/** Represents a single variant feature as part of a product type feature template. */
export interface ProductTypeVariantFeature extends Node {
  __typename?: 'ProductTypeVariantFeature';
  description: Scalars['String']['output'];
  /** The type that we expect to render the feature's values as. */
  featureType: FeatureTypeEnum;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  /** Available options for this variant feature */
  options: Maybe<Array<Scalars['String']['output']>>;
  productType: ProductType;
  sortOrder: Maybe<Scalars['Int']['output']>;
  variantFeatures: VariantFeatureCountableConnection;
}


/** Represents a single variant feature as part of a product type feature template. */
export interface ProductTypeVariantFeatureVariantFeaturesArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
}

/** Updates an existing product. */
export interface ProductUpdate {
  __typename?: 'ProductUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  product: Maybe<Product>;
  productErrors: Array<ProductError>;
}

/** Represents a version of a product such as different size or color. */
export interface ProductVariant extends Node, ObjectWithMetadata {
  __typename?: 'ProductVariant';
  allowBackorders: Maybe<Scalars['Boolean']['output']>;
  /** List of attributes assigned to this variant. */
  attributes: Array<SelectedAttribute>;
  /** List the product images available for assignment to a variant.When the 'strict_product_image_handling' is enabled:- Only display images owned by the product variant owner. */
  availableImages: Maybe<Array<ProductImage>>;
  /** Cost price of the variant. */
  costPrice: Maybe<Money>;
  createdAt: Scalars['DateTime']['output'];
  currency: Maybe<Scalars['String']['output']>;
  /** List of custom fields assigned to this product. */
  customFields: Array<SelectedAttribute>;
  description: Scalars['String']['output'];
  descriptionHtml: Scalars['String']['output'];
  descriptionJson: Scalars['JSONString']['output'];
  /** Digital content for the product variant. */
  digitalContent: Maybe<DigitalContent>;
  /** List of documents associated with the product variant. */
  documents: Maybe<Array<Document>>;
  externalId: Maybe<Scalars['String']['output']>;
  externalSource: Maybe<Scalars['String']['output']>;
  features: Maybe<Array<VariantFeature>>;
  grossRevenue: Maybe<Scalars['Float']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** List of product variant images. When 'strict_product_image_handling' is enabled:- Display only the images owned by the product variant owner. */
  images: Maybe<Array<ProductImage>>;
  isDigital: Scalars['Boolean']['output'];
  /** indicates whether we allow overriding the unit_price of variants in checkout and draft, quote, offer order lines */
  isPriceOverrideAllowed: Scalars['Boolean']['output'];
  /** Whether the product variant is published. */
  isPublished: Scalars['Boolean']['output'];
  isShippingRequired: Scalars['Boolean']['output'];
  /** Whether this variant is visible on the buyer side or not */
  isVisible: Scalars['Boolean']['output'];
  /** Gross margin percentage value. */
  margin: Maybe<Scalars['Int']['output']>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  name: Scalars['String']['output'];
  nauticalStockNumber: Scalars['String']['output'];
  netRevenue: Maybe<Scalars['Float']['output']>;
  overrideCurrency: Scalars['Boolean']['output'];
  /** Base price of a product variant. This field is restricted for admins. Use the pricing field to get the public price for customers. */
  price: Maybe<Money>;
  /** Lists the storefront variant's pricing, the current price and discounts, only meant for displaying. */
  pricing: Maybe<VariantPricingInfo>;
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  product: Product;
  /** The datetime when this variant will become available. This field may contain a past, future date or can be empty (so it is always published if isPublished is true) */
  publishedAt: Maybe<Scalars['DateTime']['output']>;
  /** Quantity of a product available for sale in one checkout. */
  quantityAvailable: Scalars['Int']['output'];
  /** Total quantity ordered. */
  quantityOrdered: Maybe<Scalars['Int']['output']>;
  requiresQuote: Scalars['Boolean']['output'];
  /** List of sales associated with the product. */
  sales: Array<Sale>;
  seller: Maybe<Seller>;
  seoDescription: Maybe<Scalars['String']['output']>;
  seoTitle: Maybe<Scalars['String']['output']>;
  /** Product variant size info. */
  size: Maybe<VariantSize>;
  sku: Maybe<Scalars['String']['output']>;
  /** Variant sort order in the specific collection. Make sense only as a part of the parent 'collections' query. */
  sortOrderInCollection: Maybe<Scalars['Int']['output']>;
  status: ProductVariantStatus;
  /** List of stock events associated with the variant. */
  stockEvents: Maybe<Array<StockEvent>>;
  /** Stocks for the product variant. */
  stocks: Maybe<Array<Stock>>;
  subStatus: ProductVariantSubStatus;
  trackInventory: Scalars['Boolean']['output'];
  updatedAt: Scalars['DateTime']['output'];
  /** List of vouchers associated with the product. */
  vouchers: Array<Voucher>;
  weight: Maybe<Weight>;
}


/** Represents a version of a product such as different size or color. */
export interface ProductVariantQuantityAvailableArgs {
  countryCode: InputMaybe<CountryCode>;
}


/** Represents a version of a product such as different size or color. */
export interface ProductVariantStocksArgs {
  countryCode: InputMaybe<CountryCode>;
}

/** Creates product variants for a given product. */
export interface ProductVariantBulkCreate {
  __typename?: 'ProductVariantBulkCreate';
  bulkProductErrors: Array<BulkProductError>;
  /** Returns how many objects were created. */
  count: Scalars['Int']['output'];
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** List of the created variants. */
  productVariants: Array<ProductVariant>;
}

export interface ProductVariantBulkCreateInput {
  /** Whether to allow backorders for this product variant, if backorders are permitted at the marketplace level */
  allowBackorders?: InputMaybe<Scalars['Boolean']['input']>;
  /** List of attributes specific to this variant. */
  attributes: Array<AttributeValueInput>;
  /** Cost price of the variant. */
  costPrice?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** Currency of the product variant */
  currency?: InputMaybe<Scalars['String']['input']>;
  /** List of custom fields. */
  customFields?: InputMaybe<Array<AttributeValueInput>>;
  /** Description of the product variant. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Product variant description (HTML). */
  descriptionHtml?: InputMaybe<Scalars['String']['input']>;
  /** Product variant description (JSON). */
  descriptionJson?: InputMaybe<Scalars['JSONString']['input']>;
  /** Set whether this variant is digital by default, will be overridden by product type attached to product if available */
  isDigital?: InputMaybe<Scalars['Boolean']['input']>;
  /** Set whether this variant allows price overrides by default, will be overridden by product type attached to product if available */
  isPriceOverrideAllowed?: InputMaybe<Scalars['Boolean']['input']>;
  /** Informs whether a collection is published. All variants are published by default */
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  /** Set whether this variant requires shipping by default, will be overridden by product type attached to product if available */
  isShippingRequired?: InputMaybe<Scalars['Boolean']['input']>;
  /** Name for the variant. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Whether to override the currency for this product variant */
  overrideCurrency?: InputMaybe<Scalars['Boolean']['input']>;
  /** Price of the particular variant. */
  price?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** Product ID of which type is the variant. */
  product?: InputMaybe<Scalars['ID']['input']>;
  /** The datetime when this variant will become available. This field may contain a past, future date or can be empty (so it is always published if isPublished is true) */
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** True if variant requires quote pricing. */
  requiresQuote?: InputMaybe<Scalars['Boolean']['input']>;
  /** Seller that owns the variant. (Only usable with MANAGE_MARKETPLACE permission). */
  seller?: InputMaybe<Scalars['ID']['input']>;
  /** Search engine optimization fields. */
  seo?: InputMaybe<SeoInput>;
  /** Size of the Product Variant. */
  size?: InputMaybe<VariantSizeInput>;
  /** Stock keeping unit. */
  sku?: InputMaybe<Scalars['String']['input']>;
  /** Stocks of a product available for sale. */
  stocks?: InputMaybe<Array<StockInput>>;
  /** Substatus the variant is to be changed to. */
  subStatus?: InputMaybe<ProductVariantSubStatusEnum>;
  /** Determines whether to track changes to this variant's inventory. If set to 'false', the product's stock quantity won't reduce when a customer purchases this item. However, even when 'false', you must assign a stock quantity to a warehouse to allow checkouts. Usually, this involves allocating a placeholder stock amount that matches the maximum quantity purchased at once. */
  trackInventory?: InputMaybe<Scalars['Boolean']['input']>;
  /** Weight of the Product Variant. */
  weight?: InputMaybe<Scalars['WeightScalar']['input']>;
}

/** Deletes product variants. */
export interface ProductVariantBulkDelete {
  __typename?: 'ProductVariantBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
}

export interface ProductVariantCountableConnection {
  __typename?: 'ProductVariantCountableConnection';
  edges: Array<ProductVariantCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface ProductVariantCountableEdge {
  __typename?: 'ProductVariantCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ProductVariant;
}

/** Creates a new variant for a product. */
export interface ProductVariantCreate {
  __typename?: 'ProductVariantCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  productVariant: Maybe<ProductVariant>;
}

export interface ProductVariantCreateInput {
  /** Whether to allow backorders for this product variant, if backorders are permitted at the marketplace level */
  allowBackorders?: InputMaybe<Scalars['Boolean']['input']>;
  /** List of attributes specific to this variant. */
  attributes: Array<AttributeValueInput>;
  /** Cost price of the variant. */
  costPrice?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** Currency of the product variant */
  currency?: InputMaybe<Scalars['String']['input']>;
  /** List of custom fields. */
  customFields?: InputMaybe<Array<AttributeValueInput>>;
  /** Description of the product variant. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Product variant description (HTML). */
  descriptionHtml?: InputMaybe<Scalars['String']['input']>;
  /** Product variant description (JSON). */
  descriptionJson?: InputMaybe<Scalars['JSONString']['input']>;
  /** The external ID from a foreign system if a product variant originated from that system, used in combination with provided externalSource. If submitting externalId, you must also provide an externalSource argument. If these two are provided, the productVariantCreate mutation will attempt to perform an upsert instead of a creation. */
  externalId?: InputMaybe<Scalars['String']['input']>;
  /** The external source identifier of a foreign system (e.g. nautical.fulfillment.shopify) if a product variant originated from that system, used in combination with provided externalId. If submitting externalSource, you must also provide an externalId argument. If these two are provided, the productVariantCreate mutation will attempt to perform an upsert instead of a creation. */
  externalSource?: InputMaybe<Scalars['String']['input']>;
  /** Set whether this variant is digital by default, will be overridden by product type attached to product if available */
  isDigital?: InputMaybe<Scalars['Boolean']['input']>;
  /** Set whether this variant allows price overrides by default, will be overridden by product type attached to product if available */
  isPriceOverrideAllowed?: InputMaybe<Scalars['Boolean']['input']>;
  /** Informs whether a collection is published. All variants are published by default */
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  /** Set whether this variant requires shipping by default, will be overridden by product type attached to product if available */
  isShippingRequired?: InputMaybe<Scalars['Boolean']['input']>;
  /** Name for the variant. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Whether to override the currency for this product variant */
  overrideCurrency?: InputMaybe<Scalars['Boolean']['input']>;
  /** Price of the particular variant. */
  price?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** Product ID of which type is the variant. */
  product: Scalars['ID']['input'];
  /** The datetime when this variant will become available. This field may contain a past, future date or can be empty (so it is always published if isPublished is true) */
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** True if variant requires quote pricing. */
  requiresQuote?: InputMaybe<Scalars['Boolean']['input']>;
  /** Seller that owns the variant. (Only usable with MANAGE_MARKETPLACE permission). */
  seller?: InputMaybe<Scalars['ID']['input']>;
  /** Search engine optimization fields. */
  seo?: InputMaybe<SeoInput>;
  /** Size of the Product Variant. */
  size?: InputMaybe<VariantSizeInput>;
  /** Stock keeping unit. */
  sku?: InputMaybe<Scalars['String']['input']>;
  /** Stocks of a product available for sale. */
  stocks?: InputMaybe<Array<StockInput>>;
  /** Substatus the variant is to be changed to. */
  subStatus?: InputMaybe<ProductVariantSubStatusEnum>;
  /** Determines whether to track changes to this variant's inventory. If set to 'false', the product's stock quantity won't reduce when a customer purchases this item. However, even when 'false', you must assign a stock quantity to a warehouse to allow checkouts. Usually, this involves allocating a placeholder stock amount that matches the maximum quantity purchased at once. */
  trackInventory?: InputMaybe<Scalars['Boolean']['input']>;
  /** Weight of the Product Variant. */
  weight?: InputMaybe<Scalars['WeightScalar']['input']>;
}

/** Deletes a product variant. */
export interface ProductVariantDelete {
  __typename?: 'ProductVariantDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  productVariant: Maybe<ProductVariant>;
}

export interface ProductVariantFilterInput {
  advancedSearch?: InputMaybe<ProductVariantSearchInput>;
  attributes?: InputMaybe<Array<AttributeInput>>;
  categories?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  collections?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  createdAt?: InputMaybe<DateTimeRangeInput>;
  customFields?: InputMaybe<Array<AttributeInput>>;
  features?: InputMaybe<FeatureFilterInput>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  isStaff?: InputMaybe<Scalars['Boolean']['input']>;
  metadata?: InputMaybe<MetadataFilterInput>;
  nsn?: InputMaybe<Array<Scalars['String']['input']>>;
  price?: InputMaybe<PriceRangeInput>;
  privateMetadata?: InputMaybe<MetadataFilterInput>;
  productIds?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  productTypes?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  sellers?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  sku?: InputMaybe<Array<Scalars['String']['input']>>;
  stockAvailability?: InputMaybe<StockAvailability>;
  subStatus?: InputMaybe<ProductVariantSubStatusEnum>;
  updatedAt?: InputMaybe<DateTimeRangeInput>;
}

/** Assign an image to a product variant. */
export interface ProductVariantImageAssign {
  __typename?: 'ProductVariantImageAssign';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  image: Maybe<ProductImage>;
  productErrors: Array<ProductError>;
  productVariant: Maybe<ProductVariant>;
}

/** Unassign an image from a product variant. */
export interface ProductVariantImageUnassign {
  __typename?: 'ProductVariantImageUnassign';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  image: Maybe<ProductImage>;
  productErrors: Array<ProductError>;
  productVariant: Maybe<ProductVariant>;
}

export interface ProductVariantInput {
  /** Whether to allow backorders for this product variant, if backorders are permitted at the marketplace level */
  allowBackorders?: InputMaybe<Scalars['Boolean']['input']>;
  /** List of attributes specific to this variant. */
  attributes?: InputMaybe<Array<AttributeValueInput>>;
  /** Cost price of the variant. */
  costPrice?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** Currency of the product variant */
  currency?: InputMaybe<Scalars['String']['input']>;
  /** List of custom fields. */
  customFields?: InputMaybe<Array<AttributeValueInput>>;
  /** Description of the product variant. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Product variant description (HTML). */
  descriptionHtml?: InputMaybe<Scalars['String']['input']>;
  /** Product variant description (JSON). */
  descriptionJson?: InputMaybe<Scalars['JSONString']['input']>;
  /** Set whether this variant is digital by default, will be overridden by product type attached to product if available */
  isDigital?: InputMaybe<Scalars['Boolean']['input']>;
  /** Set whether this variant allows price overrides by default, will be overridden by product type attached to product if available */
  isPriceOverrideAllowed?: InputMaybe<Scalars['Boolean']['input']>;
  /** Informs whether a collection is published. All variants are published by default */
  isPublished?: InputMaybe<Scalars['Boolean']['input']>;
  /** Set whether this variant requires shipping by default, will be overridden by product type attached to product if available */
  isShippingRequired?: InputMaybe<Scalars['Boolean']['input']>;
  /** Name for the variant. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Whether to override the currency for this product variant */
  overrideCurrency?: InputMaybe<Scalars['Boolean']['input']>;
  /** Price of the particular variant. */
  price?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** Product ID of which type is the variant. */
  product?: InputMaybe<Scalars['ID']['input']>;
  /** The datetime when this variant will become available. This field may contain a past, future date or can be empty (so it is always published if isPublished is true) */
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  /** True if variant requires quote pricing. */
  requiresQuote?: InputMaybe<Scalars['Boolean']['input']>;
  /** Seller that owns the variant. (Only usable with MANAGE_MARKETPLACE permission). */
  seller?: InputMaybe<Scalars['ID']['input']>;
  /** Search engine optimization fields. */
  seo?: InputMaybe<SeoInput>;
  /** Size of the Product Variant. */
  size?: InputMaybe<VariantSizeInput>;
  /** Stock keeping unit. */
  sku?: InputMaybe<Scalars['String']['input']>;
  /** Substatus the variant is to be changed to. */
  subStatus?: InputMaybe<ProductVariantSubStatusEnum>;
  /** Determines whether to track changes to this variant's inventory. If set to 'false', the product's stock quantity won't reduce when a customer purchases this item. However, even when 'false', you must assign a stock quantity to a warehouse to allow checkouts. Usually, this involves allocating a placeholder stock amount that matches the maximum quantity purchased at once. */
  trackInventory?: InputMaybe<Scalars['Boolean']['input']>;
  /** Weight of the Product Variant. */
  weight?: InputMaybe<Scalars['WeightScalar']['input']>;
}

export interface ProductVariantReportType {
  __typename?: 'ProductVariantReportType';
  avgPrice: Maybe<Scalars['Float']['output']>;
  avgPriceGrossAmount: Maybe<Scalars['Float']['output']>;
  grossRevenue: Maybe<Scalars['Float']['output']>;
  /** Product variant ID. */
  id: Scalars['ID']['output'];
  maxPrice: Maybe<Scalars['Float']['output']>;
  maxPriceGrossAmount: Maybe<Scalars['Float']['output']>;
  minPrice: Maybe<Scalars['Float']['output']>;
  minPriceGrossAmount: Maybe<Scalars['Float']['output']>;
  /** Product variant name. */
  name: Scalars['String']['output'];
  /** Related product object. */
  product: Product;
  /** Product ID as a number. */
  productId: Scalars['Int']['output'];
  quantityOrdered: Maybe<Scalars['Int']['output']>;
  revenue: Maybe<Scalars['Float']['output']>;
  totals: Maybe<Scalars['Int']['output']>;
}

export enum ProductVariantSearchFieldEnum {
  CategoryName = 'CATEGORY_NAME',
  Description = 'DESCRIPTION',
  Name = 'NAME',
  Nsn = 'NSN',
  PrimaryKey = 'PRIMARY_KEY',
  ProductName = 'PRODUCT_NAME',
  Sku = 'SKU',
  VariantAttributeName = 'VARIANT_ATTRIBUTE_NAME',
  VariantAttributeValueName = 'VARIANT_ATTRIBUTE_VALUE_NAME',
  VariantAttributeValueValue = 'VARIANT_ATTRIBUTE_VALUE_VALUE'
}

export interface ProductVariantSearchInput {
  /**
   * List of fields to search on
   *         (if not provided, only searches name by default).
   */
  searchFields?: InputMaybe<Array<ProductVariantSearchFieldEnum>>;
  /** Search term. */
  searchTerm: Scalars['String']['input'];
}

/** Set default variant for a product. Mutation triggers PRODUCT_UPDATED webhook. */
export interface ProductVariantSetDefault {
  __typename?: 'ProductVariantSetDefault';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  product: Maybe<Product>;
  productErrors: Array<ProductError>;
}

/** An enumeration. */
export enum ProductVariantStatus {
  /** Active */
  Active = 'ACTIVE',
  /** Draft */
  Draft = 'DRAFT'
}

/** Creates stocks for product variant. */
export interface ProductVariantStocksCreate {
  __typename?: 'ProductVariantStocksCreate';
  bulkStockErrors: Array<BulkStockError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Updated product variant. */
  productVariant: Maybe<ProductVariant>;
}

/** Delete stocks from product variant. */
export interface ProductVariantStocksDelete {
  __typename?: 'ProductVariantStocksDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Updated product variant. */
  productVariant: Maybe<ProductVariant>;
  stockErrors: Array<StockError>;
}

/** Update stocks for product variant. */
export interface ProductVariantStocksUpdate {
  __typename?: 'ProductVariantStocksUpdate';
  bulkStockErrors: Array<BulkStockError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Updated product variant. */
  productVariant: Maybe<ProductVariant>;
}

/** An enumeration. */
export enum ProductVariantSubStatus {
  /** Approved */
  Approved = 'APPROVED',
  /** Declined */
  Declined = 'DECLINED',
  /** In review */
  InReview = 'IN_REVIEW'
}

export enum ProductVariantSubStatusEnum {
  /** Approved */
  Approved = 'APPROVED',
  /** Declined */
  Declined = 'DECLINED',
  /** In review */
  InReview = 'IN_REVIEW'
}

/** Updates an existing variant for product. */
export interface ProductVariantUpdate {
  __typename?: 'ProductVariantUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  productErrors: Array<ProductError>;
  productVariant: Maybe<ProductVariant>;
}

/** Export products to csv file. */
export interface ProductsExport {
  __typename?: 'ProductsExport';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  exportErrors: Array<ExportError>;
  /** The newly created export file job which is responsible for export data. */
  exportFile: Maybe<ExportFile>;
}

/** Import products with csv file. */
export interface ProductsImport {
  __typename?: 'ProductsImport';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  importErrors: Array<ImportError>;
  /** The newly created import file which is responsible for import data. */
  importFile: Maybe<ImportFile>;
}

export interface PublicSeller extends Node {
  __typename?: 'PublicSeller';
  companyName: Scalars['String']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  logo: Maybe<Image>;
  products: ProductCountableConnection;
  slug: Scalars['String']['output'];
  variants: ProductVariantCountableConnection;
}


export interface PublicSellerLogoArgs {
  size: InputMaybe<Scalars['Int']['input']>;
}


export interface PublicSellerProductsArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
}


export interface PublicSellerVariantsArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
}

export interface Query {
  __typename?: 'Query';
  _entities: Array<Maybe<_Entity>>;
  _service: _Service;
  /** Look up an address by ID. */
  address: Maybe<Address>;
  /** Returns address validation rules. */
  addressValidationRules: Maybe<AddressValidationData>;
  /** @deprecated This will be removed on Oct 26, 2024 when affiliate support is removed. */
  affiliate: Maybe<OptimizedAffiliate>;
  /**
   * List of affiliates' codes
   * @deprecated This will be removed on Oct 26, 2024 when affiliate support is removed.
   */
  affiliateCodes: Maybe<AffiliateCodesCountableConnection>;
  /**
   * List of the shop's affiliates
   * @deprecated This will be removed on Oct 26, 2024 when affiliate support is removed.
   */
  affiliates: Maybe<UserCountableConnection>;
  /** Look up a marketplace agreement by ID or slug. */
  agreement: Maybe<Agreement>;
  /** List of the marketplace agreements. */
  agreements: Maybe<AgreementCountableConnection>;
  /** Unfiltered and unpaginated list of the shop's categories. */
  allCategories: Maybe<Array<Category>>;
  allowedOwners: Maybe<UserCountableConnection>;
  /** Returns analytics ID (e.g. Google Tag ID). */
  analyticsId: Maybe<Scalars['String']['output']>;
  /** Look up a app by ID. */
  app: Maybe<App>;
  /** List of the apps. */
  apps: Maybe<AppCountableConnection>;
  /** List of all apps installations */
  appsInstallations: Array<AppInstallation>;
  /** Look up an attribute by ID. */
  attribute: Maybe<Attribute>;
  /** List of the shop's attributes. */
  attributes: Maybe<AttributeCountableConnection>;
  /** List of plugins that are available as product import sources */
  availableImportSources: Maybe<Array<Plugin>>;
  availablePlans: Maybe<AgreementCountableConnection>;
  /** List of Avalara calls. */
  avalaraRequestLogs: Maybe<AvalaraRequestLogCountableConnection>;
  /** @deprecated This will be removed on Oct 25, 2024 */
  branding: BrandingType;
  /** List of business entities. */
  businessEntities: Maybe<BusinessEntityCountableConnection>;
  /** Business entity details. */
  businessEntity: Maybe<BusinessEntity>;
  /** Look up a catalog import process by ID. */
  catalogImportProcess: Maybe<CatalogImportProcess>;
  /** List of catalog import processes. */
  catalogImportProcesses: Maybe<CatalogImportProcessCountableConnection>;
  /** List of the shop's categories. */
  categories: Maybe<CategoryCountableConnection>;
  /** Look up a category by ID or slug. */
  category: Maybe<Category>;
  /** List of webhook jobs */
  channels: Maybe<ChannelCountableConnection>;
  /** Look up a checkout by token. */
  checkout: Maybe<Checkout>;
  /** List of checkout events. */
  checkoutEvents: Maybe<CheckoutEventCountableConnection>;
  /** Look up a checkout line by ID. */
  checkoutLine: Maybe<CheckoutLine>;
  /** List of checkout lines. */
  checkoutLines: Maybe<CheckoutLineCountableConnection>;
  /** List of checkouts. */
  checkouts: Maybe<CheckoutCountableConnection>;
  /** Look up a collection by ID. */
  collection: Maybe<Collection>;
  /** List of the shop's collections. */
  collections: Maybe<CollectionCountableConnection>;
  /** Return information about content. */
  content: Content;
  /** Return information about content for the editor. */
  contentDraft: Content;
  /** List of the content. */
  contentList: Maybe<ContentCountableConnection>;
  /** @deprecated This will be removed on Oct 25, 2024 */
  coredata: Maybe<CoreDataType>;
  /** @deprecated This will be removed on Oct 25, 2024 */
  coredatalist: Maybe<Array<CoreDataType>>;
  /** Countries available to the marketplace. */
  countries: Array<CountryDisplay>;
  /** Currencies available to the marketplace. */
  currencies: Array<NauticalCurrency>;
  /** Look up a custom field template by ID. */
  customFieldTemplate: Maybe<CustomFieldTemplate>;
  /** List of the available custom field templates. */
  customFieldTemplates: Maybe<Array<CustomFieldTemplate>>;
  /** Get customer tax certificates by user ID. */
  customerTaxCertificates: Maybe<Array<TaxCertificate>>;
  /** List of the shop's customers. */
  customers: Maybe<UserCountableConnection>;
  /**
   * Return information about the dashboard.
   * @deprecated This query is deprecated and will be removed on 2024-10-01.
   */
  dashboard: Dashboard;
  dashboardGraph: Maybe<DashboardGraphType>;
  dashboardOrdersSummary: Maybe<DashboardOrdersSummaryType>;
  dashboardTopSellerPerformance: Maybe<DashboardTopSellerPerformanceType>;
  /** @deprecated This will be removed on Oct 25, 2024 */
  designerdata: Maybe<DesignerDataType>;
  /** @deprecated This will be removed on Oct 25, 2024 */
  designerdatalist: Maybe<Array<DesignerDataType>>;
  /** Look up digital content by ID. */
  digitalContent: Maybe<DigitalContent>;
  /** List of digital content. */
  digitalContents: Maybe<DigitalContentCountableConnection>;
  /** List of draft orders. */
  draftOrders: Maybe<OrderCountableConnection>;
  /** List of email logs. */
  emailLogs: Maybe<EmailEventCountableConnection>;
  /** Look up a export file by ID. */
  exportFile: Maybe<ExportFile>;
  /** List of export files. */
  exportFiles: Maybe<ExportFileCountableConnection>;
  /** Get client secret if necessary for frontend configuration. */
  getClientSecret: Maybe<Scalars['GenericScalar']['output']>;
  /** List of active payment gateways that have payouts enabled. */
  getPayoutGateways: Maybe<Array<PaymentGateway>>;
  /** List of activity events to display on homepage (at the moment it only contains order-events). */
  homepageEvents: Maybe<OrderEventCountableConnection>;
  /** Get third party product in form we can use for import */
  importThirdPartyProduct: Maybe<Scalars['GenericScalar']['output']>;
  /** @deprecated This will be removed on Oct 26, 2024 when affiliate support is removed. */
  insightsMarketplaceAffiliatePayoutsSummary: Maybe<InReportMarketplaceAffiliatePayoutsSummaryType>;
  insightsMarketplacePaymentsSummary: Maybe<InReportMarketplacePaymentsSummaryType>;
  insightsMarketplacePayoutsSummary: Maybe<InReportMarketplacePayoutsSummaryType>;
  insightsMarketplaceTaxSummary: Maybe<InReportMarketplaceTaxSummaryType>;
  insightsMarketplaceTaxesByCountry: Maybe<InReportMarketplaceTaxesByCountryType>;
  insightsMarketplaceTaxesByCountryArea: Maybe<InReportMarketplaceTaxesByCountryType>;
  insightsOrdersCustomerSummary: Maybe<InReportOrderCustomerSummaryType>;
  insightsOrdersMarketplaceSummary: Maybe<InReportOrderMarketplaceSummaryType>;
  insightsOrdersSellerSummary: Maybe<InReportOrderSellerSummaryType>;
  insightsTopPerformingCategories: Maybe<InReportTopPerformingCategoriesType>;
  insightsTopPerformingProducts: Maybe<InReportTopPerformingProductsType>;
  /** Token nexessary for connecting to the embedded integration platform */
  integrationEmbeddingToken: Maybe<Scalars['String']['output']>;
  /** List of journal entries in the ledger system. */
  journalEntries: Maybe<JournalEntryCountableConnection>;
  /** List of ledgers in the system */
  ledgers: Maybe<LedgerCountableConnection>;
  /** Geocode locations */
  locationGeocode: Maybe<Array<Coordinates>>;
  /** Search Locations */
  locationSearch: Maybe<Array<LocationSuggestion>>;
  /** Return configuration for the marketplace. */
  marketplaceConfiguration: MarketplaceConfiguration;
  /** List of activity events to display on homepage (at the moment it only contains nautical-order-events). */
  marketplaceHomepageEvents: Maybe<NauticalOrderEventCountableConnection>;
  /** Return the currently authenticated user. */
  me: Maybe<User>;
  /** Return information about media. */
  media: Media;
  /** List of the media. */
  mediaList: Maybe<MediaCountableConnection>;
  /** Look up a navigation menu by ID or name. */
  menu: Maybe<Menu>;
  /** Look up a menu item by ID. */
  menuItem: Maybe<MenuItem>;
  /** List of the storefronts's menu items. */
  menuItems: Maybe<MenuItemCountableConnection>;
  /** List of the storefront's menus. */
  menus: Maybe<MenuCountableConnection>;
  /** Look up a microsite by ID or slug */
  microsite: Maybe<Microsite>;
  /** List of microsites */
  microsites: Maybe<MicrositeCountableConnection>;
  /** Return requested nautical configuration item */
  nauticalConfiguration: Maybe<NauticalConfiguration>;
  /** Return all nautical configuration items */
  nauticalConfigurationList: Maybe<Array<NauticalConfiguration>>;
  /** List of draft orders. */
  nauticalDraftOrders: Maybe<NauticalOrderCountableConnection>;
  /** Look up nautical order by ID. */
  nauticalOrder: Maybe<NauticalOrder>;
  /** Look up a nautical order by token */
  nauticalOrderByToken: Maybe<NauticalOrder>;
  /** List of Nautical orders. */
  nauticalOrders: Maybe<NauticalOrderCountableConnection>;
  /** Return the total sales amount from a specific period. */
  nauticalOrdersTotal: Maybe<TaxedMoney>;
  /** Look up a nautical quote order by token */
  nauticalQuoteOrderByToken: Maybe<NauticalOrder>;
  /** List of quote orders. */
  nauticalQuoteOrders: Maybe<NauticalOrderCountableConnection>;
  /** Number of new sellers created in given period. */
  newSellers: Maybe<Scalars['Int']['output']>;
  optimizedHome: Maybe<OptimizedHome>;
  /** Look up an order by ID. */
  order: Maybe<Order>;
  /** Look up an order by token. */
  orderByToken: Maybe<Order>;
  /** List of orders. */
  orders: Maybe<OrderCountableConnection>;
  /** Return the total sales amount from a specific period. */
  ordersTotal: Maybe<TaxedMoney>;
  /** Look up a page by ID or slug. */
  page: Maybe<Page>;
  /** List of the shop's pages. */
  pages: Maybe<PageCountableConnection>;
  /** Look up a payment by ID. */
  payment: Maybe<Payment>;
  /** List of payments. */
  payments: Maybe<PaymentCountableConnection>;
  /** Look up a payout by ID. */
  payout: Maybe<Payout>;
  /** List of payouts. */
  payouts: Maybe<PayoutCountableConnection>;
  periodicTask: Maybe<WebhookPeriodicTask>;
  /** Look up permission group by ID. */
  permissionGroup: Maybe<Group>;
  /** List of permission groups. */
  permissionGroups: Maybe<GroupCountableConnection>;
  /** Look up a plugin by ID. */
  plugin: Maybe<Plugin>;
  /** Get the flows associated with a particular plugin and seller */
  pluginFlows: Maybe<Array<Flow>>;
  /** List of plugins. */
  plugins: Maybe<PluginCountableConnection>;
  /** Look up a price book by ID. */
  priceBook: Maybe<PriceBook>;
  /** Look up entities (companies) attached to a price book by ID. */
  priceBookEntities: Maybe<BusinessEntityCountableConnection>;
  /** List of price book product types. */
  priceBookProductTypes: Maybe<PriceBookProductTypeCountableConnection>;
  /** List of price book product types in history tables. */
  priceBookProductTypesHistory: Maybe<PriceBookProductTypeHistoryCountableConnection>;
  /** List of price book products. */
  priceBookProducts: Maybe<PriceBookProductCountableConnection>;
  /** List of price book products in history table. */
  priceBookProductsHistory: Maybe<PriceBookProductHistoryCountableConnection>;
  /** Look up users attached to a price book by ID. */
  priceBookUsers: Maybe<UserCountableConnection>;
  /** List of price book variants in. */
  priceBookVariants: Maybe<PriceBookVariantCountableConnection>;
  /** List of price book variants in history table. */
  priceBookVariantsHistory: Maybe<PriceBookVariantHistoryCountableConnection>;
  /** List of price books. */
  priceBooks: Maybe<PriceBookCountableConnection>;
  /** Look up a product by ID. */
  product: Maybe<Product>;
  /** @deprecated This will be removed on 2024-10-01. */
  productRatingsAndReviews: Maybe<ProductRatingsAndReviews>;
  /** Look up a product type by ID. */
  productType: Maybe<ProductType>;
  /** List of the shop's product types. */
  productTypes: Maybe<ProductTypeCountableConnection>;
  /** Look up a product variant by ID or Nautical Stock Number (NSN). */
  productVariant: Maybe<ProductVariant>;
  /** List of product variants. */
  productVariants: Maybe<ProductVariantCountableConnection>;
  /** List of the shop's products. */
  products: Maybe<ProductCountableConnection>;
  /** List of quote orders. */
  quoteOrders: Maybe<OrderCountableConnection>;
  /** Look up an refund by ID. */
  refund: Maybe<Refund>;
  /** List of refunds. */
  refunds: Maybe<RefundCountableConnection>;
  /** List of top selling products. */
  reportProductSales: Maybe<ProductVariantCountableConnection>;
  /** List of fulfillments. */
  returns: Maybe<FulfillmentCountableConnection>;
  /** Look up a sale by ID. */
  sale: Maybe<Sale>;
  /** List of the shop's sales. */
  sales: Maybe<SaleCountableConnection>;
  /** Look up seller by global ID */
  seller: Maybe<Seller>;
  /** Look up what agreement a seller is attached to */
  sellerAgreement: Maybe<AgreementSellers>;
  /** Look up seller by slug */
  sellerBySlug: Maybe<PublicSeller>;
  /** Return the total commissions earned across all sellers for the given period. */
  sellerCommissions: Maybe<Money>;
  sellerDetailCards: Maybe<SellerDetailCards>;
  sellerEvents: Maybe<SellerEventTypeCountableConnection>;
  sellerListCards: Maybe<SellerCards>;
  sellerName: Maybe<Seller>;
  /** Number of orders placed by sellers in given period. */
  sellerOrders: Maybe<Scalars['Int']['output']>;
  sellerUser: Maybe<SellerUserType>;
  sellerUsers: Maybe<SellerUserTypeCountableConnection>;
  /** List of sellers */
  sellers: Maybe<SellerCountableConnection>;
  /** Look up a shipping zone by ID. */
  shippingZone: Maybe<ShippingZone>;
  /** List of the shop's shipping zones. */
  shippingZones: Maybe<ShippingZoneCountableConnection>;
  /** Return information about the shop. */
  shop: Shop;
  /** List of the shop's staff users. */
  staffUsers: Maybe<UserCountableConnection>;
  /** Look up a stock by ID */
  stock: Maybe<Stock>;
  /** List of stocks. */
  stocks: Maybe<StockCountableConnection>;
  /** List of tax exempt code supported by Avalara. Required permission: MANAGE_MARKETPLACE. Note: doesn't support app auth. */
  taxExemptCodes: Maybe<Array<TaxExemptCode>>;
  /** List of all tax rates available from tax gateway. */
  taxTypes: Maybe<Array<TaxType>>;
  /** List of third party products */
  thirdPartyProducts: Maybe<Scalars['GenericScalar']['output']>;
  /** Form details for specified form_id */
  typeformForm: Maybe<TypeformForm>;
  /** All forms available on Typeform */
  typeformForms: Maybe<TypeformForms>;
  /** Look up a user by ID. */
  user: Maybe<User>;
  /** Look up user by email. */
  userByEmail: Maybe<User>;
  userSellers: Maybe<Array<SellerUserType>>;
  /** Look up microsite by vendor ID */
  vendorMicrosite: Maybe<Microsite>;
  /** Look up a vendor payout by ID. */
  vendorPayout: Maybe<VendorPayout>;
  vendorPayoutList: Maybe<SingleVendorPayoutReport>;
  vendorPayouts: Maybe<VendorPayoutReport>;
  /** Look up a voucher by ID. */
  voucher: Maybe<Voucher>;
  /** List of the shop's vouchers. */
  vouchers: Maybe<VoucherCountableConnection>;
  /** Look up a warehouse by ID. */
  warehouse: Maybe<Warehouse>;
  /** List of warehouses. */
  warehouses: Maybe<WarehouseCountableConnection>;
  /** Look up a webhook by ID. */
  webhook: Maybe<Webhook>;
  /** List of webhook event logs. */
  webhookEventLogs: Maybe<WebhookEventLogCountableConnection>;
  /** List of all available webhook events. */
  webhookEvents: Maybe<Array<WebhookEvent>>;
  /** List of webhook jobs */
  webhookJobs: Maybe<WebhookJobCountableConnection>;
  /** Retrieve a sample payload for a given webhook event based on real data. It can be useful for some integrations where sample payload is required. */
  webhookSamplePayload: Maybe<Scalars['JSONString']['output']>;
  /** List of the wishlist items by name. */
  wishlistItemsByName: Maybe<WishlistItemCountableConnection>;
}


export interface Query_EntitiesArgs {
  representations: Array<Scalars['_Any']['input']>;
}


export interface QueryAddressArgs {
  id: Scalars['ID']['input'];
}


export interface QueryAddressValidationRulesArgs {
  city: InputMaybe<Scalars['String']['input']>;
  cityArea: InputMaybe<Scalars['String']['input']>;
  countryArea: InputMaybe<Scalars['String']['input']>;
  countryCode: CountryCode;
}


export interface QueryAffiliateArgs {
  id: InputMaybe<Scalars['ID']['input']>;
}


export interface QueryAffiliateCodesArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<AffiliateCodeFilterInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  last: InputMaybe<Scalars['Int']['input']>;
  sortBy: InputMaybe<AffiliateCodeSortingInput>;
}


export interface QueryAffiliatesArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<AffiliateFilterInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  sortBy: InputMaybe<UserSortingInput>;
}


export interface QueryAgreementArgs {
  id: InputMaybe<Scalars['ID']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
}


export interface QueryAgreementsArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<AgreementFilterInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  sortBy: InputMaybe<AgreementOrder>;
}


export interface QueryAllowedOwnersArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  query: InputMaybe<Scalars['String']['input']>;
}


export interface QueryAppArgs {
  id: Scalars['ID']['input'];
}


export interface QueryAppsArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<AppFilterInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  sortBy: InputMaybe<AppSortingInput>;
}


export interface QueryAttributeArgs {
  id: Scalars['ID']['input'];
}


export interface QueryAttributesArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<AttributeFilterInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  sortBy: InputMaybe<AttributeSortingInput>;
}


export interface QueryAvailablePlansArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  query: InputMaybe<Scalars['String']['input']>;
}


export interface QueryAvalaraRequestLogsArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
}


export interface QueryBusinessEntitiesArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
}


export interface QueryBusinessEntityArgs {
  id: Scalars['ID']['input'];
}


export interface QueryCatalogImportProcessArgs {
  id: Scalars['ID']['input'];
}


export interface QueryCatalogImportProcessesArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<CatalogImportProcessFilterInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  sortBy: InputMaybe<CatalogImportProcessSortInput>;
}


export interface QueryCategoriesArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<CategoryFilterInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  level: InputMaybe<Scalars['Int']['input']>;
  sortBy: InputMaybe<CategorySortingInput>;
}


export interface QueryCategoryArgs {
  id: InputMaybe<Scalars['ID']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
}


export interface QueryChannelsArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<ChannelFilterInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  sortBy: InputMaybe<ChannelSortingInput>;
}


export interface QueryCheckoutArgs {
  token: InputMaybe<Scalars['NauticalUUID']['input']>;
}


export interface QueryCheckoutEventsArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<CheckoutEventFilterInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  sortBy: InputMaybe<CheckoutEventSortInput>;
}


export interface QueryCheckoutLineArgs {
  id: InputMaybe<Scalars['ID']['input']>;
}


export interface QueryCheckoutLinesArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
}


export interface QueryCheckoutsArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
}


export interface QueryCollectionArgs {
  id: InputMaybe<Scalars['ID']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
}


export interface QueryCollectionsArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<CollectionFilterInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  sortBy: InputMaybe<CollectionSortingInput>;
}


export interface QueryContentArgs {
  id: InputMaybe<Scalars['ID']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
}


export interface QueryContentDraftArgs {
  id: InputMaybe<Scalars['ID']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
}


export interface QueryContentListArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<ContentFilterInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  sortBy: InputMaybe<ContentSortingInput>;
}


export interface QueryCoredataArgs {
  name: InputMaybe<Scalars['String']['input']>;
}


export interface QueryCustomFieldTemplateArgs {
  id: Scalars['ID']['input'];
}


export interface QueryCustomerTaxCertificatesArgs {
  id: Scalars['ID']['input'];
}


export interface QueryCustomersArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<CustomerFilterInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  sortBy: InputMaybe<UserSortingInput>;
}


export interface QueryDashboardGraphArgs {
  dimension: InputMaybe<Scalars['String']['input']>;
  endDate: Scalars['Date']['input'];
  identifier: InputMaybe<Scalars['ID']['input']>;
  startDate: Scalars['Date']['input'];
}


export interface QueryDashboardOrdersSummaryArgs {
  dimension: InputMaybe<Scalars['String']['input']>;
  endDate: Scalars['Date']['input'];
  identifier: InputMaybe<Scalars['ID']['input']>;
  startDate: Scalars['Date']['input'];
}


export interface QueryDashboardTopSellerPerformanceArgs {
  dimension: InputMaybe<Scalars['String']['input']>;
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
}


export interface QueryDesignerdataArgs {
  name: InputMaybe<Scalars['String']['input']>;
}


export interface QueryDigitalContentArgs {
  id: Scalars['ID']['input'];
}


export interface QueryDigitalContentsArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
}


export interface QueryDraftOrdersArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  created: InputMaybe<ReportingPeriod>;
  filter: InputMaybe<OrderDraftFilterInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  identifier: InputMaybe<Scalars['ID']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  sortBy: InputMaybe<OrderSortingInput>;
}


export interface QueryEmailLogsArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<EmailEventFilterInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  sortBy: InputMaybe<EmailEventSortingInput>;
}


export interface QueryExportFileArgs {
  id: Scalars['ID']['input'];
}


export interface QueryExportFilesArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<ExportFileFilterInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  sortBy: InputMaybe<ExportFileSortingInput>;
}


export interface QueryGetClientSecretArgs {
  gateway: Scalars['ID']['input'];
  paymentInformation: StripeClientPaymentData;
}


export interface QueryHomepageEventsArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  identifier: InputMaybe<Scalars['ID']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
}


export interface QueryImportThirdPartyProductArgs {
  id: Scalars['ID']['input'];
  source: Scalars['String']['input'];
}


export interface QueryInsightsMarketplaceAffiliatePayoutsSummaryArgs {
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
}


export interface QueryInsightsMarketplacePaymentsSummaryArgs {
  dimension?: InputMaybe<InsightDimensionEnum>;
  endDate: Scalars['Date']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  startDate: Scalars['Date']['input'];
}


export interface QueryInsightsMarketplacePayoutsSummaryArgs {
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
}


export interface QueryInsightsMarketplaceTaxSummaryArgs {
  dimension?: InputMaybe<InsightDimensionEnum>;
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
}


export interface QueryInsightsMarketplaceTaxesByCountryArgs {
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
}


export interface QueryInsightsMarketplaceTaxesByCountryAreaArgs {
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
}


export interface QueryInsightsOrdersCustomerSummaryArgs {
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
}


export interface QueryInsightsOrdersMarketplaceSummaryArgs {
  dimension?: InputMaybe<InsightDimensionEnum>;
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
}


export interface QueryInsightsOrdersSellerSummaryArgs {
  endDate: Scalars['Date']['input'];
  startDate: Scalars['Date']['input'];
}


export interface QueryInsightsTopPerformingCategoriesArgs {
  endDate: Scalars['Date']['input'];
  identifier: InputMaybe<Scalars['ID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  perspective: PerformancePerspective;
  startDate: Scalars['Date']['input'];
}


export interface QueryInsightsTopPerformingProductsArgs {
  endDate: Scalars['Date']['input'];
  identifier: InputMaybe<Scalars['ID']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  perspective: PerformancePerspective;
  startDate: Scalars['Date']['input'];
}


export interface QueryJournalEntriesArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<JournalEntryFilterInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  sortBy: InputMaybe<JournalEntrySortingInput>;
}


export interface QueryLedgersArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<LedgerEntryFilterInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  sortBy: InputMaybe<LedgerSortingInput>;
}


export interface QueryLocationGeocodeArgs {
  locationData: InputMaybe<Scalars['String']['input']>;
}


export interface QueryLocationSearchArgs {
  searchData: Scalars['String']['input'];
}


export interface QueryMarketplaceHomepageEventsArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
}


export interface QueryMediaArgs {
  id: InputMaybe<Scalars['ID']['input']>;
}


export interface QueryMediaListArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<MediaFilterInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  sortBy: InputMaybe<MediaSortingInput>;
}


export interface QueryMenuArgs {
  id: InputMaybe<Scalars['ID']['input']>;
  name: InputMaybe<Scalars['String']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
}


export interface QueryMenuItemArgs {
  id: Scalars['ID']['input'];
}


export interface QueryMenuItemsArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<MenuItemFilterInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  sortBy: InputMaybe<MenuItemSortingInput>;
}


export interface QueryMenusArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<MenuFilterInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  sortBy: InputMaybe<MenuSortingInput>;
}


export interface QueryMicrositeArgs {
  id: InputMaybe<Scalars['ID']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
}


export interface QueryMicrositesArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<MicrositeFilterInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  sortBy: InputMaybe<MicrositeSortingInput>;
}


export interface QueryNauticalConfigurationArgs {
  configurationName: Scalars['String']['input'];
}


export interface QueryNauticalDraftOrdersArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  created: InputMaybe<ReportingPeriod>;
  filter: InputMaybe<NauticalOrderDraftFilterInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  sortBy: InputMaybe<OrderSortingInput>;
}


export interface QueryNauticalOrderArgs {
  id: Scalars['ID']['input'];
}


export interface QueryNauticalOrderByTokenArgs {
  token: Scalars['NauticalUUID']['input'];
}


export interface QueryNauticalOrdersArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  created: InputMaybe<ReportingPeriod>;
  filter: InputMaybe<NauticalOrderFilterInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  sortBy: InputMaybe<OrderSortingInput>;
  status: InputMaybe<OrderStatusFilter>;
}


export interface QueryNauticalOrdersTotalArgs {
  period: InputMaybe<ReportingPeriod>;
}


export interface QueryNauticalQuoteOrderByTokenArgs {
  token: Scalars['NauticalUUID']['input'];
}


export interface QueryNauticalQuoteOrdersArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<NauticalOrderQuoteFilterInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  sortBy: InputMaybe<OrderSortingInput>;
}


export interface QueryNewSellersArgs {
  period: ReportingPeriod;
}


export interface QueryOptimizedHomeArgs {
  endDate: Scalars['Date']['input'];
  identifier: InputMaybe<Scalars['ID']['input']>;
  isMarketplace: Scalars['Boolean']['input'];
  startDate: Scalars['Date']['input'];
}


export interface QueryOrderArgs {
  id: Scalars['ID']['input'];
}


export interface QueryOrderByTokenArgs {
  token: Scalars['NauticalUUID']['input'];
}


export interface QueryOrdersArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  created: InputMaybe<ReportingPeriod>;
  filter: InputMaybe<OrderFilterInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  identifier: InputMaybe<Scalars['ID']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  sortBy: InputMaybe<OrderSortingInput>;
  status: InputMaybe<OrderStatusFilter>;
}


export interface QueryOrdersTotalArgs {
  identifier: InputMaybe<Scalars['ID']['input']>;
  period: InputMaybe<ReportingPeriod>;
}


export interface QueryPageArgs {
  id: InputMaybe<Scalars['ID']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
}


export interface QueryPagesArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<PageFilterInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  sortBy: InputMaybe<PageSortingInput>;
}


export interface QueryPaymentArgs {
  id: Scalars['ID']['input'];
}


export interface QueryPaymentsArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
}


export interface QueryPayoutArgs {
  id: Scalars['ID']['input'];
}


export interface QueryPayoutsArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<PayoutFilterInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  sortBy: InputMaybe<PayoutSortingInput>;
}


export interface QueryPeriodicTaskArgs {
  name: Scalars['String']['input'];
}


export interface QueryPermissionGroupArgs {
  id: Scalars['ID']['input'];
}


export interface QueryPermissionGroupsArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<PermissionGroupFilterInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  sortBy: InputMaybe<PermissionGroupSortingInput>;
}


export interface QueryPluginArgs {
  id: Scalars['ID']['input'];
  seller: InputMaybe<Scalars['ID']['input']>;
}


export interface QueryPluginFlowsArgs {
  id: Scalars['ID']['input'];
  seller: InputMaybe<Scalars['ID']['input']>;
}


export interface QueryPluginsArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<PluginFilterInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  sortBy: InputMaybe<PluginSortingInput>;
}


export interface QueryPriceBookArgs {
  id: Scalars['ID']['input'];
}


export interface QueryPriceBookEntitiesArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  priceBookId: Scalars['ID']['input'];
}


export interface QueryPriceBookProductTypesArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<PriceBookProductTypeFilterInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  priceBookId: Scalars['ID']['input'];
  productTypeId: InputMaybe<Scalars['ID']['input']>;
  sortBy: InputMaybe<PriceBookProductTypeSortingInput>;
}


export interface QueryPriceBookProductTypesHistoryArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<PriceBookProductTypeHistoryFilterInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  priceBookId: Scalars['ID']['input'];
  productTypeId: Scalars['ID']['input'];
  sortBy: InputMaybe<PriceBookProductTypeHistorySortingInput>;
}


export interface QueryPriceBookProductsArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<PriceBookProductFilterInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  priceBookId: Scalars['ID']['input'];
  productId: InputMaybe<Scalars['ID']['input']>;
  sortBy: InputMaybe<PriceBookProductSortingInput>;
}


export interface QueryPriceBookProductsHistoryArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<PriceBookProductHistoryFilterInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  priceBookId: Scalars['ID']['input'];
  productId: Scalars['ID']['input'];
  sortBy: InputMaybe<PriceBookProductHistorySortingInput>;
}


export interface QueryPriceBookUsersArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  priceBookId: Scalars['ID']['input'];
  sortBy: InputMaybe<UserSortingInput>;
}


export interface QueryPriceBookVariantsArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<PriceBookVariantFilterInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  priceBookId: Scalars['ID']['input'];
  sortBy: InputMaybe<PriceBookVariantSortingInput>;
  variantId: InputMaybe<Scalars['ID']['input']>;
}


export interface QueryPriceBookVariantsHistoryArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<PriceBookVariantHistoryFilterInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  priceBookId: Scalars['ID']['input'];
  sortBy: InputMaybe<PriceBookVariantHistorySortingInput>;
  variantId: Scalars['ID']['input'];
}


export interface QueryPriceBooksArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<PriceBookFilterInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  sortBy: InputMaybe<PriceBookSortingInput>;
}


export interface QueryProductArgs {
  id: InputMaybe<Scalars['ID']['input']>;
  identifier: InputMaybe<Scalars['ID']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
}


export interface QueryProductRatingsAndReviewsArgs {
  productId: Scalars['String']['input'];
}


export interface QueryProductTypeArgs {
  id: Scalars['ID']['input'];
}


export interface QueryProductTypesArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<ProductTypeFilterInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  sortBy: InputMaybe<ProductTypeSortingInput>;
}


export interface QueryProductVariantArgs {
  id: InputMaybe<Scalars['ID']['input']>;
  nsn: InputMaybe<Scalars['String']['input']>;
}


export interface QueryProductVariantsArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<ProductVariantFilterInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  identifier: InputMaybe<Scalars['ID']['input']>;
  ids: InputMaybe<Array<Scalars['ID']['input']>>;
  last: InputMaybe<Scalars['Int']['input']>;
  sortBy: InputMaybe<VariantSortingInput>;
}


export interface QueryProductsArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<ProductFilterInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  identifier: InputMaybe<Scalars['ID']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  microsite: InputMaybe<Scalars['ID']['input']>;
  sortBy: InputMaybe<ProductOrder>;
}


export interface QueryQuoteOrdersArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<OrderQuoteFilterInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  identifier: InputMaybe<Scalars['ID']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  sortBy: InputMaybe<OrderSortingInput>;
}


export interface QueryRefundArgs {
  id: Scalars['ID']['input'];
}


export interface QueryRefundsArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<RefundFilterInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  sortBy: InputMaybe<RefundSortingInput>;
}


export interface QueryReportProductSalesArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  identifier: InputMaybe<Scalars['ID']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  period: ReportingPeriod;
}


export interface QueryReturnsArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<ReturnFulfillmentFilterInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  identifier: InputMaybe<Scalars['ID']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  sortBy: InputMaybe<ReturnFulfillmentSortingInput>;
}


export interface QuerySaleArgs {
  id: Scalars['ID']['input'];
}


export interface QuerySalesArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<SaleFilterInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  query: InputMaybe<Scalars['String']['input']>;
  sortBy: InputMaybe<SaleSortingInput>;
}


export interface QuerySellerArgs {
  id: InputMaybe<Scalars['ID']['input']>;
  number: InputMaybe<Scalars['ID']['input']>;
  slug: InputMaybe<Scalars['String']['input']>;
  taxId: InputMaybe<Scalars['String']['input']>;
}


export interface QuerySellerAgreementArgs {
  id: InputMaybe<Scalars['ID']['input']>;
}


export interface QuerySellerBySlugArgs {
  slug: InputMaybe<Scalars['String']['input']>;
}


export interface QuerySellerCommissionsArgs {
  identifier: InputMaybe<Scalars['ID']['input']>;
  period: ReportingPeriod;
}


export interface QuerySellerDetailCardsArgs {
  identifier: Scalars['ID']['input'];
  period: ReportingPeriod;
}


export interface QuerySellerEventsArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  seller: InputMaybe<Scalars['ID']['input']>;
}


export interface QuerySellerListCardsArgs {
  identifier: InputMaybe<Scalars['ID']['input']>;
  period: ReportingPeriod;
}


export interface QuerySellerNameArgs {
  id: Scalars['ID']['input'];
}


export interface QuerySellerOrdersArgs {
  identifier: InputMaybe<Scalars['ID']['input']>;
  period: ReportingPeriod;
}


export interface QuerySellerUserArgs {
  email: InputMaybe<Scalars['String']['input']>;
  id: InputMaybe<Scalars['ID']['input']>;
}


export interface QuerySellerUsersArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  email: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
}


export interface QuerySellersArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<SellerFilterInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  sortBy: InputMaybe<SellerSortingInput>;
}


export interface QueryShippingZoneArgs {
  id: Scalars['ID']['input'];
}


export interface QueryShippingZonesArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<ShippingZoneFilterInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
}


export interface QueryStaffUsersArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<StaffUserInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  seller: InputMaybe<Scalars['ID']['input']>;
  sortBy: InputMaybe<UserSortingInput>;
}


export interface QueryStockArgs {
  id: Scalars['ID']['input'];
}


export interface QueryStocksArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<StockFilterInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
}


export interface QueryThirdPartyProductsArgs {
  source: Scalars['String']['input'];
}


export interface QueryTypeformFormArgs {
  id: InputMaybe<Scalars['ID']['input']>;
}


export interface QueryTypeformFormsArgs {
  page: InputMaybe<Scalars['Int']['input']>;
  search: InputMaybe<Scalars['String']['input']>;
}


export interface QueryUserArgs {
  id: Scalars['ID']['input'];
}


export interface QueryUserByEmailArgs {
  email: Scalars['String']['input'];
}


export interface QueryUserSellersArgs {
  email: InputMaybe<Scalars['String']['input']>;
}


export interface QueryVendorMicrositeArgs {
  id: Scalars['ID']['input'];
}


export interface QueryVendorPayoutArgs {
  id: Scalars['ID']['input'];
}


export interface QueryVendorPayoutListArgs {
  vendorId: InputMaybe<Scalars['ID']['input']>;
  vendorType: InputMaybe<Scalars['String']['input']>;
}


export interface QueryVendorPayoutsArgs {
  endDate: InputMaybe<Scalars['Date']['input']>;
  payoutId: InputMaybe<Scalars['ID']['input']>;
  vendorType: InputMaybe<Scalars['String']['input']>;
}


export interface QueryVoucherArgs {
  id: Scalars['ID']['input'];
}


export interface QueryVouchersArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<VoucherFilterInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  productId: InputMaybe<Scalars['ID']['input']>;
  query: InputMaybe<Scalars['String']['input']>;
  sortBy: InputMaybe<VoucherSortingInput>;
  variantId: InputMaybe<Scalars['ID']['input']>;
}


export interface QueryWarehouseArgs {
  id: Scalars['ID']['input'];
}


export interface QueryWarehousesArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<WarehouseFilterInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  sortBy: InputMaybe<WarehouseSortingInput>;
}


export interface QueryWebhookArgs {
  id: Scalars['ID']['input'];
}


export interface QueryWebhookEventLogsArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
}


export interface QueryWebhookJobsArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<WebhookJobFilterInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  identifier: InputMaybe<Scalars['ID']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  sortBy: InputMaybe<WebhookJobSortingInput>;
}


export interface QueryWebhookSamplePayloadArgs {
  eventType: WebhookSampleEventTypeEnum;
}


export interface QueryWishlistItemsByNameArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<WishlistItemInputFilter>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  sortBy: InputMaybe<WishlistItemSortingInput>;
  wishlistName: Scalars['String']['input'];
}

export enum QuoteOrderSubStatusFilter {
  AwaitingPayment = 'AWAITING_PAYMENT',
  InReview = 'IN_REVIEW',
  QuoteRequested = 'QUOTE_REQUESTED'
}

export interface RadiusSearchInput {
  /** Latitude of the center point */
  lat?: InputMaybe<Scalars['Float']['input']>;
  /** Location type to filter by */
  locationType: LocationTypeEnum;
  /** Longitude of the center point */
  lon?: InputMaybe<Scalars['Float']['input']>;
  /** Radius to search within */
  radius: Scalars['Int']['input'];
  /** Distance unit for radius (KM or MI) */
  unit: DistanceUnit;
}

/** Refresh JWT token. Mutation tries to take refreshToken from the input.If it fails it will try to take refreshToken from the http-only cookie -refreshToken. csrfToken is required when refreshToken is provided as a cookie. */
export interface RefreshToken {
  __typename?: 'RefreshToken';
  accountErrors: Array<AccountError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** JWT token, required to authenticate. */
  token: Maybe<Scalars['String']['output']>;
  /** A user instance. */
  user: Maybe<User>;
}

/** Represents a refund scoped to an nautical order, a seller order, or a seller order line */
export interface Refund extends Node, ObjectWithMetadata {
  __typename?: 'Refund';
  /** The buyer who is receiving the refund. This may be NULL in the case of refunds issued against anonymous orders */
  buyer: Maybe<User>;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  descriptionHtml: Scalars['String']['output'];
  /** Optional external ID which can be used to synchronize Nautical refunds to data in an external system */
  externalId: Maybe<Scalars['String']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  lines: RefundLineCountableConnection;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /** Human readable name of the refund */
  name: Scalars['String']['output'];
  /** The order that this refund is against */
  order: NauticalOrder;
  payments: RefundPaymentCountableConnection;
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /** Type of the refund: manual or order line. An order line refund is scoped to either an OrderLine or an Order with the lineType of Shipping. A manual refund is scoped either to a BuyerOrder or a SellerOrder with any lineType besides Shipping */
  refundType: RefundTypeEnum;
  /** Status of the refund */
  status: RefundStatusEnum;
  /** Unique UUID associated with the refund */
  token: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
}


/** Represents a refund scoped to an nautical order, a seller order, or a seller order line */
export interface RefundLinesArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
}


/** Represents a refund scoped to an nautical order, a seller order, or a seller order line */
export interface RefundPaymentsArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
}

/** Deletes all specified refunds. The refunds must be in the REQUESTED state to be able to be deleted */
export interface RefundBulkDelete {
  __typename?: 'RefundBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  refundErrors: Array<RefundError>;
}

export enum RefundChargeToEnum {
  /** Marketplace */
  Marketplace = 'MARKETPLACE',
  /** Seller */
  Seller = 'SELLER'
}

export interface RefundCountableConnection {
  __typename?: 'RefundCountableConnection';
  edges: Array<RefundCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface RefundCountableEdge {
  __typename?: 'RefundCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Refund;
}

/** Creates a new refund. */
export interface RefundCreate {
  __typename?: 'RefundCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  refund: Maybe<Refund>;
  refundErrors: Array<RefundError>;
}

export interface RefundCreateInput {
  /** Refund description (plaintext, read-only). */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Refund description (html). */
  descriptionHtml?: InputMaybe<Scalars['String']['input']>;
  /** External ID associated with the refund. This can be useful for synchronizing refunds from another system. If specified, must be unique. */
  externalId?: InputMaybe<Scalars['String']['input']>;
  /** Name of the refund */
  name: Scalars['String']['input'];
  /** ID of the NauticalOrder to associated the refund with */
  order: Scalars['ID']['input'];
}

export interface RefundError {
  __typename?: 'RefundError';
  /** The error code. */
  code: RefundErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message: Scalars['String']['output'];
}

/** An enumeration. */
export enum RefundErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  InvalidChargedTo = 'INVALID_CHARGED_TO',
  InvalidQuantity = 'INVALID_QUANTITY',
  InvalidStatus = 'INVALID_STATUS',
  NotAllowed = 'NOT_ALLOWED',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED'
}

export interface RefundFilterInput {
  buyer?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<DateTimeRangeInput>;
  externalId?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<RefundStatusEnum>;
  token?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<DateTimeRangeInput>;
}

/** Represents a refund line */
export interface RefundLine extends Node {
  __typename?: 'RefundLine';
  /** Indicates who is paying for the cost of this refund line */
  chargedTo: RefundChargeToEnum;
  createdAt: Scalars['DateTime']['output'];
  /** Currency code that this refund line is in */
  currency: Scalars['String']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** How does this refund line apply to the original order */
  lineScope: RefundLineScopeEnum;
  /** How is this refund line amount calculated */
  lineType: RefundLineTypeEnum;
  /** If configured as a percentage refund, this is the percentage of the scope value that is to be refunded. This is in the range [0. 100]  */
  percentage: Scalars['Float']['output'];
  /**
   * If configured as a quantity based refund, this is the number of units refunded.
   * @deprecated This value was split into quantityFulfilled and quantityUnfulfilled
   */
  quantity: Scalars['Int']['output'];
  /** If configured as a quantity based refund, this is the number of fulfilled units refunded. */
  quantityFulfilled: Scalars['Int']['output'];
  /** If configured as a quantity based refund, this is the number of unfulfilled units refunded. */
  quantityUnfulfilled: Scalars['Int']['output'];
  /** The refund this refund line is contained in */
  refund: Refund;
  /** The scope that this refund line applies to */
  refundScope: RefundScope;
  /** The total for this refund line */
  total: TaxedMoney;
  updatedAt: Scalars['DateTime']['output'];
}

/** Deletes all specified refund lines. */
export interface RefundLineBulkDelete {
  __typename?: 'RefundLineBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  refundErrors: Array<RefundError>;
}

export interface RefundLineCountableConnection {
  __typename?: 'RefundLineCountableConnection';
  edges: Array<RefundLineCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface RefundLineCountableEdge {
  __typename?: 'RefundLineCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: RefundLine;
}

export interface RefundLineInput {
  /** Refund line amount (in order currency). */
  amount?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** To whom the refund will be applied. */
  chargedTo: RefundChargeToEnum;
  lineType: RefundLineTypeEnum;
  percentage?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  quantityFulfilled?: InputMaybe<Scalars['Int']['input']>;
  quantityUnfulfilled?: InputMaybe<Scalars['Int']['input']>;
  /** Reference ID of the instance to which refund will be applied. Allowed instances are NauticalOrder, Order, OrderLine. */
  refundScope: Scalars['ID']['input'];
}

export enum RefundLineScopeEnum {
  /** Buyer Order */
  Buyerorder = 'BUYERORDER',
  /** Order Line */
  Orderline = 'ORDERLINE',
  /** Seller Order */
  Sellerorder = 'SELLERORDER'
}

export enum RefundLineTypeEnum {
  EntireScope = 'ENTIRE_SCOPE',
  FixedAmount = 'FIXED_AMOUNT',
  PartialQuantity = 'PARTIAL_QUANTITY',
  Percentage = 'PERCENTAGE',
  Shipping = 'SHIPPING',
  Tax = 'TAX'
}

export interface RefundLineUpdateInput {
  /** Refund line amount (in order currency). */
  amount?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** To whom the refund will be applied. */
  chargedTo: RefundChargeToEnum;
  /** ID of the refund line  to update. */
  id: Scalars['ID']['input'];
  lineType: RefundLineTypeEnum;
  percentage?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  quantityFulfilled?: InputMaybe<Scalars['Int']['input']>;
  quantityUnfulfilled?: InputMaybe<Scalars['Int']['input']>;
  /** Reference ID of the instance to which refund will be applied. Allowed instances are NauticalOrder, Order, OrderLine. */
  refundScope: Scalars['ID']['input'];
}

/** Adds a refund lines to the existing refund. */
export interface RefundLinesAdd {
  __typename?: 'RefundLinesAdd';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** An updated refund. */
  refund: Maybe<Refund>;
  refundErrors: Array<RefundError>;
}

/** Update lines in a refund. */
export interface RefundLinesUpdate {
  __typename?: 'RefundLinesUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** An updated refund. */
  refund: Maybe<Refund>;
  refundErrors: Array<RefundError>;
}

export type RefundMethod = Transaction | Voucher;

/** Represents a refund payment */
export interface RefundPayment extends Node {
  __typename?: 'RefundPayment';
  createdAt: Scalars['DateTime']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** How this payment is made */
  paymentType: RefundPaymentTypeEnum;
  /** The refund this refund line is contained in */
  refund: Refund;
  /** The reverse payment */
  refundMethod: RefundMethod;
  updatedAt: Scalars['DateTime']['output'];
}

export interface RefundPaymentCountableConnection {
  __typename?: 'RefundPaymentCountableConnection';
  edges: Array<RefundPaymentCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface RefundPaymentCountableEdge {
  __typename?: 'RefundPaymentCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: RefundPayment;
}

export interface RefundPaymentInput {
  /** Refund payment amount. */
  amount: Scalars['PositiveDecimal']['input'];
  /** Payment id for the refund. */
  id: Scalars['ID']['input'];
}

export enum RefundPaymentTypeEnum {
  /** Transaction */
  Transaction = 'TRANSACTION',
  /** Voucher */
  Voucher = 'VOUCHER'
}

export interface RefundPaymentUpdateInput {
  /** Refund payment amount. */
  amount: Scalars['PositiveDecimal']['input'];
  /** Refund Payment ID for the update. */
  id: Scalars['ID']['input'];
}

/** Add manual payments to a refund */
export interface RefundPaymentsAdd {
  __typename?: 'RefundPaymentsAdd';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Updated refund */
  refund: Maybe<Refund>;
  refundErrors: Array<RefundError>;
}

/** Deletes specified refund payments. The refund must be in the PROCESSING state. */
export interface RefundPaymentsDelete {
  __typename?: 'RefundPaymentsDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  refundErrors: Array<RefundError>;
}

/** Update refund payments. */
export interface RefundPaymentsUpdate {
  __typename?: 'RefundPaymentsUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Updated refund */
  refund: Maybe<Refund>;
  refundErrors: Array<RefundError>;
}

export type RefundScope = NauticalOrder | Order | OrderLine;

export enum RefundSortField {
  /** Sort refund by buyer. */
  Buyer = 'BUYER',
  /** Sort refund by created. */
  Created = 'CREATED',
  /** Sort refund by external id. */
  ExternalId = 'EXTERNAL_ID',
  /** Sort refund by name. */
  Name = 'NAME',
  /** Sort refund by status. */
  Status = 'STATUS',
  /** Sort refund by token. */
  Token = 'TOKEN',
  /** Sort refund by updated. */
  Updated = 'UPDATED'
}

export interface RefundSortingInput {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort refunds by the selected field. */
  field: RefundSortField;
}

export enum RefundStatusEnum {
  /** Approved */
  Approved = 'APPROVED',
  /** Canceled */
  Canceled = 'CANCELED',
  /** Declined */
  Declined = 'DECLINED',
  /** Failed */
  Failed = 'FAILED',
  /** Locked */
  Locked = 'LOCKED',
  /** Paid */
  Paid = 'PAID',
  /** Processing */
  Processing = 'PROCESSING',
  /** Requested */
  Requested = 'REQUESTED',
  /** Settled */
  Settled = 'SETTLED'
}

export enum RefundTypeEnum {
  /** Manual Refund */
  Manualrefund = 'MANUALREFUND',
  /** Order Line Refund */
  Orderlinerefund = 'ORDERLINEREFUND'
}

/** Updates a refund. */
export interface RefundUpdate {
  __typename?: 'RefundUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  refund: Maybe<Refund>;
  refundErrors: Array<RefundError>;
}

export interface RefundUpdateInput {
  /** Refund description (plaintext, read-only). */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Refund description (html). */
  descriptionHtml?: InputMaybe<Scalars['String']['input']>;
  /** External ID associated with the refund. This can be useful for synchronizing refunds from another system. If specified, must be unique. */
  externalId?: InputMaybe<Scalars['String']['input']>;
  /** Name of the refund */
  name?: InputMaybe<Scalars['String']['input']>;
}

/** Updates the status of all specified refunds. All refunds must be able to make the state transition for any of them to update */
export interface RefundsChangeStatus {
  __typename?: 'RefundsChangeStatus';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  refundErrors: Array<RefundError>;
}

export interface ReorderInput {
  /** The ID of the item to move. */
  id: Scalars['ID']['input'];
  /** The new relative sorting position of the item (from -inf to +inf). 1 moves the item one position forward, -1 moves the item one position backward, 0 leaves the item unchanged. */
  sortOrder?: InputMaybe<Scalars['Int']['input']>;
}

export enum ReportingPeriod {
  ThisMonth = 'THIS_MONTH',
  Today = 'TODAY'
}

export interface ReturnFulfillmentFilterInput {
  created?: InputMaybe<DateRangeInput>;
  customer?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Array<FulfillmentStatusFilter>>;
}

export enum ReturnFulfillmentSortField {
  /** Sort return fulfillments by creation date. */
  CreationDate = 'CREATION_DATE',
  /** Sort return fulfillments by customer. */
  Customer = 'CUSTOMER',
  /** Sort return fulfillments by items. */
  Items = 'ITEMS',
  /** Sort return fulfillments by number. */
  Number = 'NUMBER',
  /** Sort return fulfillments by price. */
  Price = 'PRICE',
  /** Sort return fulfillments by return status. */
  ReturnStatus = 'RETURN_STATUS',
  /** Sort return fulfillments by tracking number. */
  TrackingNumber = 'TRACKING_NUMBER'
}

export interface ReturnFulfillmentSortingInput {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort fulfillments by the selected field. */
  field: ReturnFulfillmentSortField;
}

export enum RevenueAccrualStrategyEnum {
  /** Accrue revenue to the marketplace and sellers when orders are fulfilled. */
  Fulfillment = 'FULFILLMENT',
  /** Accrue all revenue to the marketplace and sellers when orders are placed. */
  OrderPlacement = 'ORDER_PLACEMENT'
}

export interface Review {
  __typename?: 'Review';
  /** Review content. */
  content: Maybe<Scalars['String']['output']>;
  /** Date and time review was created. */
  createdAt: Maybe<Scalars['String']['output']>;
  /** Product rating out of 5 stars. */
  score: Maybe<Scalars['Int']['output']>;
  /** Title of the review. */
  title: Maybe<Scalars['String']['output']>;
  /** User who created the rating and review. */
  user: Maybe<Reviewer>;
}

export interface Reviewer {
  __typename?: 'Reviewer';
  /** Reviewer username */
  displayName: Maybe<Scalars['String']['output']>;
}

/** Sales allow creating discounts for categories, collections, products, or variants and are visible to all the customers. */
export interface Sale extends Node {
  __typename?: 'Sale';
  /** List of categories this sale applies to. */
  categories: Maybe<CategoryCountableConnection>;
  /** List of collections this sale applies to. */
  collections: Maybe<CollectionCountableConnection>;
  currency: Scalars['String']['output'];
  endDate: Maybe<Scalars['DateTime']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  minCheckoutItemsQuantity: Scalars['Int']['output'];
  minSpent: Maybe<Money>;
  name: Scalars['String']['output'];
  /** List of products this sale applies to. */
  products: Maybe<ProductCountableConnection>;
  /** Determines a type of sale. */
  saleType: SaleTypeEnum;
  startDate: Scalars['DateTime']['output'];
  /** Type of discount */
  type: DiscountValueTypeEnum;
  value: Scalars['Decimal']['output'];
  /** List of variants this sale applies to. */
  variants: Maybe<ProductVariantCountableConnection>;
}


/** Sales allow creating discounts for categories, collections, products, or variants and are visible to all the customers. */
export interface SaleCategoriesArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
}


/** Sales allow creating discounts for categories, collections, products, or variants and are visible to all the customers. */
export interface SaleCollectionsArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
}


/** Sales allow creating discounts for categories, collections, products, or variants and are visible to all the customers. */
export interface SaleProductsArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
}


/** Sales allow creating discounts for categories, collections, products, or variants and are visible to all the customers. */
export interface SaleVariantsArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
}

/** Adds products, variants, categories, or collections to a sale. */
export interface SaleAddCatalogues {
  __typename?: 'SaleAddCatalogues';
  discountErrors: Array<DiscountError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Sale of which catalogue IDs will be modified. */
  sale: Maybe<Sale>;
}

/** Deletes sales. */
export interface SaleBulkDelete {
  __typename?: 'SaleBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  discountErrors: Array<DiscountError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

export interface SaleCountableConnection {
  __typename?: 'SaleCountableConnection';
  edges: Array<SaleCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface SaleCountableEdge {
  __typename?: 'SaleCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Sale;
}

/** Creates a new sale. */
export interface SaleCreate {
  __typename?: 'SaleCreate';
  discountErrors: Array<DiscountError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  sale: Maybe<Sale>;
}

/** Deletes a sale. */
export interface SaleDelete {
  __typename?: 'SaleDelete';
  discountErrors: Array<DiscountError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  sale: Maybe<Sale>;
}

export interface SaleFilterInput {
  saleType?: InputMaybe<DiscountValueTypeEnum>;
  search?: InputMaybe<Scalars['String']['input']>;
  started?: InputMaybe<DateTimeRangeInput>;
  status?: InputMaybe<Array<DiscountStatusEnum>>;
}

export interface SaleInput {
  /** Categories related to the sale. */
  categories?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Collections related to the sale. */
  collections?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** End date of the sale in ISO 8601 format. */
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Minimal quantity of checkout items required to apply the voucher. */
  minCheckoutItemsQuantity?: InputMaybe<Scalars['Int']['input']>;
  /** Min purchase amount required to apply the voucher. */
  minSpentAmount?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** Sale name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Products related to the sale. */
  products?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Sale type: SPECIFICT PRODUCT or SHIPPING */
  saleType?: InputMaybe<SaleTypeEnum>;
  /** Start date of the sale in ISO 8601 format. */
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Fixed or percentage. */
  type?: InputMaybe<DiscountValueTypeEnum>;
  /** Value of the sale. */
  value?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** Variants related to the sale. */
  variants?: InputMaybe<Array<Scalars['ID']['input']>>;
}

/** Removes products, variants, categories, or collections from a sale. */
export interface SaleRemoveCatalogues {
  __typename?: 'SaleRemoveCatalogues';
  discountErrors: Array<DiscountError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Sale of which catalogue IDs will be modified. */
  sale: Maybe<Sale>;
}

export enum SaleSortField {
  /** Sort sales by end date. */
  EndDate = 'END_DATE',
  /** Sort sales by name. */
  Name = 'NAME',
  /** Sort sales by start date. */
  StartDate = 'START_DATE',
  /** Sort sales by type. */
  Type = 'TYPE',
  /** Sort sales by value. */
  Value = 'VALUE'
}

export interface SaleSortingInput {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort sales by the selected field. */
  field: SaleSortField;
}

/** An enumeration. */
export enum SaleTypeEnum {
  Shipping = 'SHIPPING',
  SpecificProduct = 'SPECIFIC_PRODUCT'
}

/** Updates a sale. */
export interface SaleUpdate {
  __typename?: 'SaleUpdate';
  discountErrors: Array<DiscountError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  sale: Maybe<Sale>;
}

/** Represents secondary order line of particular order line. */
export interface SecondaryOrderLine extends Node {
  __typename?: 'SecondaryOrderLine';
  /** The ID of the object */
  id: Scalars['ID']['output'];
  isLinePriceOverridden: Scalars['Boolean']['output'];
  isShippingRequired: Scalars['Boolean']['output'];
  productName: Scalars['String']['output'];
  productSku: Maybe<Scalars['String']['output']>;
  /**
   * The number of items ordered on this order line
   * @deprecated Use the more explicit quantityOrdered instead
   */
  quantity: Maybe<Scalars['Int']['output']>;
  quantityFulfilled: Scalars['Int']['output'];
  /** The number of items ordered on this order line */
  quantityOrdered: Scalars['Int']['output'];
  /** The main thumbnail for the ordered product. */
  thumbnail: Maybe<Image>;
  /** Price of the order line. */
  totalPrice: Maybe<TaxedMoney>;
  /** Product name in the customer's language */
  translatedProductName: Scalars['String']['output'];
  /** Variant name in the customer's language */
  translatedVariantName: Scalars['String']['output'];
  /** Price of the single item in the order line. */
  unitPrice: Maybe<TaxedMoney>;
  unitPriceOverriddenNote: Maybe<Scalars['String']['output']>;
  /** A purchased product variant. Note: this field may be null if the variant has been removed from stock at all. */
  variant: Maybe<ProductVariant>;
  variantName: Scalars['String']['output'];
}


/** Represents secondary order line of particular order line. */
export interface SecondaryOrderLineThumbnailArgs {
  size: InputMaybe<Scalars['Int']['input']>;
}

/** Represents a selected attribute and values. */
export interface SelectedAttribute {
  __typename?: 'SelectedAttribute';
  /** Name of an attribute displayed in the interface. */
  attribute: Attribute;
  /** True if the selected attribute is provided by a product type or custom field template, false if the selection comes from a manual assignment instead of a template. */
  templated: Maybe<Scalars['Boolean']['output']>;
  /** Values of an attribute. */
  values: Array<AttributeValue>;
}

export interface Seller extends Node, ObjectWithMetadata {
  __typename?: 'Seller';
  /** List of all addresses for this seller. */
  addresses: Maybe<Array<Address>>;
  /** Agreement for the seller. */
  agreement: Maybe<Agreement>;
  /** Date seller acknowledged their existing agreement. */
  agreementAcknowledged: Maybe<Scalars['DateTime']['output']>;
  /**
   * Date on which this seller was most recently approved if they
   *         have been at all, null if their status is anything else
   */
  approvedDate: Maybe<Scalars['DateTime']['output']>;
  canUseInStorefront: Maybe<Scalars['Boolean']['output']>;
  /**
   * Seller checklist to complete.
   *         Can be empty in case when this user do not have access to see checklist
   */
  checklists: Maybe<Array<SellerOnboardingChecklist>>;
  companyName: Scalars['String']['output'];
  created: Scalars['DateTime']['output'];
  defaultBillingAddress: Maybe<Address>;
  defaultCurrency: Scalars['String']['output'];
  defaultShippingAddress: Maybe<Address>;
  /** List of documents associated with the seller. */
  documents: Maybe<Array<Document>>;
  events: SellerEventTypeCountableConnection;
  externalPayoutAccountId: Maybe<Scalars['String']['output']>;
  externalPayoutOnboardingUrl: Maybe<Scalars['String']['output']>;
  externalPayoutSchedule: Maybe<Scalars['String']['output']>;
  externalPayoutSource: Maybe<SellerExternalPayoutSource>;
  externalPayoutStatus: Maybe<Scalars['Boolean']['output']>;
  /**
   * Date on which the first order for this seller was made, null
   *         if no order has been created
   */
  firstOrderPlacedDate: Maybe<Scalars['DateTime']['output']>;
  /**
   * Date on which the first product of this seller was created, null
   *         if no product has been created
   */
  firstProductCreatedDate: Maybe<Scalars['DateTime']['output']>;
  fulfilledByMarketplace: Scalars['Boolean']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  identification: Maybe<Array<Scalars['String']['output']>>;
  isMarketplaceSeller: Scalars['Boolean']['output'];
  logo: Maybe<Image>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /** Microsite of the seller. */
  microsite: Maybe<Microsite>;
  orders: OrderCountableConnection;
  /** Owner (user) of the seller. */
  owner: Maybe<User>;
  payouts: VendorPayoutCountableConnection;
  pk: Maybe<Scalars['Int']['output']>;
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  products: ProductCountableConnection;
  sellerAgreements: AgreementSellersCountableConnection;
  sellerusers: SellerUserTypeCountableConnection;
  shippingZones: ShippingZoneCountableConnection;
  slug: Scalars['String']['output'];
  status: SellerStatus;
  updated: Scalars['DateTime']['output'];
  variants: ProductVariantCountableConnection;
  warehouses: WarehouseCountableConnection;
}


export interface SellerEventsArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
}


export interface SellerLogoArgs {
  size: InputMaybe<Scalars['Int']['input']>;
}


export interface SellerOrdersArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
}


export interface SellerPayoutsArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
}


export interface SellerProductsArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
}


export interface SellerSellerAgreementsArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
}


export interface SellerSellerusersArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
}


export interface SellerShippingZonesArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
}


export interface SellerVariantsArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
}


export interface SellerWarehousesArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
}

/** Creates seller address. */
export interface SellerAddressCreate {
  __typename?: 'SellerAddressCreate';
  address: Maybe<Address>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** A seller instance for which the address was created. */
  seller: Maybe<Seller>;
  sellerErrors: Array<SellerError>;
}

/** Deletes an address. */
export interface SellerAddressDelete {
  __typename?: 'SellerAddressDelete';
  address: Maybe<Address>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** A user instance for which the address was deleted. */
  seller: Maybe<Seller>;
  sellerErrors: Array<SellerError>;
}

/** Sets a default address for the given user. */
export interface SellerAddressSetDefault {
  __typename?: 'SellerAddressSetDefault';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** An updated seller instance. */
  seller: Maybe<Seller>;
  sellerErrors: Array<SellerError>;
}

/** Updates an address. */
export interface SellerAddressUpdate {
  __typename?: 'SellerAddressUpdate';
  address: Maybe<Address>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** A user object for which the address was edited. */
  seller: Maybe<Seller>;
  sellerErrors: Array<SellerError>;
}

/** Acknowledge the seller agreement for seller id */
export interface SellerAgreementAcknowledge {
  __typename?: 'SellerAgreementAcknowledge';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  user: Maybe<User>;
}

export interface SellerCards {
  __typename?: 'SellerCards';
  newSellers: Maybe<Scalars['Int']['output']>;
  sellerCommissions: Maybe<Money>;
  sellerOrders: Maybe<Scalars['Int']['output']>;
}

export enum SellerChecklistCompetitionTriggersEnum {
  /** First Product Created */
  FirstProductCreated = 'FIRST_PRODUCT_CREATED',
  /** First Warehouse Created */
  FirstWarehouseCreated = 'FIRST_WAREHOUSE_CREATED',
  /** Payout Account Created */
  PayoutAccountCreated = 'PAYOUT_ACCOUNT_CREATED'
}

export interface SellerChecklistInput {
  completeOn?: InputMaybe<SellerChecklistCompetitionTriggersEnum>;
  description: Scalars['String']['input'];
  title: Scalars['String']['input'];
}

export interface SellerCountableConnection {
  __typename?: 'SellerCountableConnection';
  edges: Array<SellerCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface SellerCountableEdge {
  __typename?: 'SellerCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Seller;
}

/** Create seller data. */
export interface SellerDataCreate {
  __typename?: 'SellerDataCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  ok: Maybe<Scalars['Boolean']['output']>;
  seller: Maybe<Seller>;
}

/** Updates a sellers status and override information */
export interface SellerDataUpdate {
  __typename?: 'SellerDataUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  ok: Maybe<Scalars['Boolean']['output']>;
  seller: Maybe<Seller>;
  sellerErrors: Array<SellerError>;
}

export interface SellerDetailCards {
  __typename?: 'SellerDetailCards';
  sellerCommissions: Maybe<Money>;
  sellerOrders: Maybe<Scalars['Int']['output']>;
  sellerSales: Maybe<TaxedMoney>;
}

export interface SellerError {
  __typename?: 'SellerError';
  /** The error code. */
  code: SellerErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message: Scalars['String']['output'];
}

/** An enumeration. */
export enum SellerErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  InvalidPhone = 'INVALID_PHONE',
  JwtDecodeError = 'JWT_DECODE_ERROR',
  JwtInvalidCsrfToken = 'JWT_INVALID_CSRF_TOKEN',
  JwtInvalidToken = 'JWT_INVALID_TOKEN',
  JwtMissingToken = 'JWT_MISSING_TOKEN',
  JwtSignatureExpired = 'JWT_SIGNATURE_EXPIRED',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

/** History log of the seller. */
export interface SellerEventType extends Node {
  __typename?: 'SellerEventType';
  /** Date when event happened at in ISO 8601 format. */
  date: Maybe<Scalars['DateTime']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  message: Maybe<Scalars['String']['output']>;
  parameters: Maybe<Scalars['JSONString']['output']>;
  /** Seller who events relate to. */
  seller: Maybe<Seller>;
  status: Maybe<Scalars['String']['output']>;
  /** Seller event type. */
  type: Maybe<SellerEventsEnum>;
  /** User who performed the action. */
  user: Maybe<User>;
}

export interface SellerEventTypeCountableConnection {
  __typename?: 'SellerEventTypeCountableConnection';
  edges: Array<SellerEventTypeCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface SellerEventTypeCountableEdge {
  __typename?: 'SellerEventTypeCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: SellerEventType;
}

export enum SellerEventsEnum {
  /** The seller was created */
  SellerCreated = 'SELLER_CREATED',
  /** The seller was deleted */
  SellerDeleted = 'SELLER_DELETED',
  /** A note was added to the seller */
  SellerNoteAdded = 'SELLER_NOTE_ADDED',
  /** Seller status was updated */
  SellerStatusChanged = 'SELLER_STATUS_CHANGED'
}

/** An enumeration. */
export enum SellerExternalPayoutSource {
  /** nautical.payments.paypal */
  NauticalPaymentsPaypal = 'NAUTICAL_PAYMENTS_PAYPAL',
  /** nautical.payments.stripe */
  NauticalPaymentsStripe = 'NAUTICAL_PAYMENTS_STRIPE',
  /** nautical.payments.trolley */
  NauticalPaymentsTrolley = 'NAUTICAL_PAYMENTS_TROLLEY'
}

export interface SellerFilterInput {
  created?: InputMaybe<DateRangeInput>;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Array<SellerStatusFilter>>;
  storefront?: InputMaybe<Scalars['Boolean']['input']>;
}

export interface SellerInput {
  /** List of checklist to create for this seller. Empty list is to skip all checklists for this seller. Null value will inherit all default checklist from marketplace configuration. */
  checklists?: InputMaybe<Array<InputMaybe<SellerChecklistInput>>>;
  identifiers?: InputMaybe<Array<Scalars['String']['input']>>;
  name?: InputMaybe<Scalars['String']['input']>;
  owner?: InputMaybe<Scalars['ID']['input']>;
  plan?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  /** Seller status. */
  status: SellerStatusEnum;
}

/** Create a seller logo. Only for MP Admin, MP Staff, or the seller. This mutation must be sent as a 'multipart' request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec */
export interface SellerLogoUpdate {
  __typename?: 'SellerLogoUpdate';
  accountErrors: Array<SellerError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** An updated seller instance */
  seller: Maybe<Seller>;
}

/** Create seller note. */
export interface SellerNoteCreate {
  __typename?: 'SellerNoteCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  note: Maybe<Scalars['String']['output']>;
  ok: Maybe<Scalars['Boolean']['output']>;
}

export interface SellerNoteInput {
  message?: InputMaybe<Scalars['String']['input']>;
  seller?: InputMaybe<Scalars['ID']['input']>;
  user?: InputMaybe<Scalars['ID']['input']>;
}

export interface SellerOnboardingChecklist extends Node {
  __typename?: 'SellerOnboardingChecklist';
  /** Trigger, when this checklist will be marked as done. Can be None in case when user should manually mark this checklist as completed. */
  completeOn: Maybe<SellerChecklistCompetitionTriggersEnum>;
  completedAt: Maybe<Scalars['DateTime']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  position: Scalars['Int']['output'];
  seller: Seller;
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
}

/** Marks manually one checklist item as completed. */
export interface SellerOnboardingChecklistComplete {
  __typename?: 'SellerOnboardingChecklistComplete';
  checklist: Maybe<SellerOnboardingChecklist>;
  checklistErrors: Array<SellerOnboardingChecklistError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

export interface SellerOnboardingChecklistError {
  __typename?: 'SellerOnboardingChecklistError';
  /** The error code. */
  code: SellerOnboardingChecklistErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message: Scalars['String']['output'];
}

/** An enumeration. */
export enum SellerOnboardingChecklistErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

/** Represents seller onboarding settings from the MPO. */
export interface SellerOnboardingSettings extends Node {
  __typename?: 'SellerOnboardingSettings';
  /** The fulfillment model used by the MP. */
  fulfillmentModel: Maybe<Scalars['String']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** Is the MPO accepting new sellers. */
  isAcceptingNewSellers: Maybe<Scalars['Boolean']['output']>;
  /** Text displayed when the MP is not accepting new sellers. */
  notAcceptingSellersMessage: Maybe<Scalars['String']['output']>;
  /** A summary of required documents from sellers. */
  requiredDocuments: Maybe<Scalars['String']['output']>;
  /** Summary of the MP for sellers. */
  summary: Maybe<Scalars['String']['output']>;
}

/** Create new seller onboarding settings. */
export interface SellerOnboardingSettingsCreate {
  __typename?: 'SellerOnboardingSettingsCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Updated shop. */
  shop: Maybe<Shop>;
  shopErrors: Array<ShopError>;
}

export interface SellerOnboardingSettingsCreateInput {
  /** The fulfillment model used by the MP. */
  fulfillmentModel: Scalars['String']['input'];
  /** Is the MPO accepting new sellers. */
  isAcceptingNewSellers: Scalars['Boolean']['input'];
  /** Text displayed when the MP is not accepting new sellers. */
  notAcceptingSellersMessage?: InputMaybe<Scalars['String']['input']>;
  /** A summary of required documents from sellers. */
  requiredDocuments: Scalars['String']['input'];
  /** Summary of the MP for sellers. */
  summary: Scalars['String']['input'];
}

/** Update seller onboarding settings. */
export interface SellerOnboardingSettingsUpdate {
  __typename?: 'SellerOnboardingSettingsUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Updated shop. */
  shop: Maybe<Shop>;
  shopErrors: Array<ShopError>;
}

export interface SellerOnboardingSettingsUpdateInput {
  /** The fulfillment model used by the MP. */
  fulfillmentModel?: InputMaybe<Scalars['String']['input']>;
  /** Is the MPO accepting new sellers. */
  isAcceptingNewSellers?: InputMaybe<Scalars['Boolean']['input']>;
  /** Text displayed when the MP is not accepting new sellers. */
  notAcceptingSellersMessage?: InputMaybe<Scalars['String']['input']>;
  /** A summary of required documents from sellers. */
  requiredDocuments?: InputMaybe<Scalars['String']['input']>;
  /** Summary of the MP for sellers. */
  summary?: InputMaybe<Scalars['String']['input']>;
}

export interface SellerOwnerCreateInput {
  /** The unique email address of the user. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Given name. */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** Family name. */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** Fields required to set the object's metadata. */
  metadata?: InputMaybe<Array<MetadataInput>>;
  /** Personal phone number. */
  personalPhone?: InputMaybe<Scalars['String']['input']>;
  /** URL of a view where users should be redirected to set the password. URL in RFC 1808 format. */
  redirectUrl?: InputMaybe<Scalars['String']['input']>;
}

/** Removes the user owner from a seller (including user's membership in the seller) */
export interface SellerOwnerDelete {
  __typename?: 'SellerOwnerDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** An updated seller instance with user owner removed */
  seller: Maybe<Seller>;
  sellerErrors: Array<SellerError>;
}

/** Updates settings for the given seller. */
export interface SellerSettingsUpdate {
  __typename?: 'SellerSettingsUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** An updated seller instance. */
  seller: Maybe<Seller>;
  sellerErrors: Array<SellerError>;
}

export interface SellerSettingsUpdateInput {
  /** Default currency for the seller. */
  defaultCurrency?: InputMaybe<Scalars['String']['input']>;
  /**
   * True if marketplace accrues shipping revenue, false if seller
   *         accrues shipping revenue
   */
  fulfilledByMarketplace?: InputMaybe<Scalars['Boolean']['input']>;
}

/** Create seller shell. */
export interface SellerShellCreate {
  __typename?: 'SellerShellCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  ok: Maybe<Scalars['Boolean']['output']>;
  seller: Maybe<Seller>;
}

export interface SellerShippingMethodInput {
  /** @deprecated This field is unused and will be removed after 2024-02-01 */
  secondaryAddress?: InputMaybe<Scalars['String']['input']>;
  /** Seller DB id representation as a string. */
  seller: Scalars['ID']['input'];
  /** Optional override amount for shipping method price.Be aware, you should send this field on each request. For example, if you will set this field and then will send the same shipping method (or a new one) without this field (in the context of the same seller) - the price will be restored based on the shipping method price. */
  shippingMethodPriceOverrideAmount?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  shippingMethodSelection: Scalars['ID']['input'];
}

export enum SellerSortField {
  /** Sort sellers by company name. */
  CompanyName = 'COMPANY_NAME',
  /** Sort sellers by created. */
  Created = 'CREATED',
  /** Sort sellers by owner. */
  Owner = 'OWNER',
  /** Sort sellers by status. */
  Status = 'STATUS'
}

export interface SellerSortingInput {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort sellers by the selected field. */
  field: SellerSortField;
}

/** An enumeration. */
export enum SellerStatus {
  /** Approved */
  Approved = 'APPROVED',
  /** Banned */
  Banned = 'BANNED',
  /** Deactivated */
  Deactivated = 'DEACTIVATED',
  /** Declined */
  Declined = 'DECLINED',
  /** Paused */
  Paused = 'PAUSED',
  /** Pending */
  Pending = 'PENDING',
  /** Suspended */
  Suspended = 'SUSPENDED'
}

export enum SellerStatusEnum {
  /** Approved */
  Approved = 'APPROVED',
  /** Banned */
  Banned = 'BANNED',
  /** Deactivated */
  Deactivated = 'DEACTIVATED',
  /** Declined */
  Declined = 'DECLINED',
  /** Paused */
  Paused = 'PAUSED',
  /** Pending */
  Pending = 'PENDING',
  /** Suspended */
  Suspended = 'SUSPENDED'
}

export enum SellerStatusFilter {
  Approved = 'APPROVED',
  Banned = 'BANNED',
  Deactivated = 'DEACTIVATED',
  Declined = 'DECLINED',
  Paused = 'PAUSED',
  Pending = 'PENDING',
  Suspended = 'SUSPENDED'
}

export interface SellerType extends Node, ObjectWithMetadata {
  __typename?: 'SellerType';
  companyName: Maybe<Scalars['String']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  owner: Maybe<UserType>;
  pk: Maybe<Scalars['Int']['output']>;
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
}

export interface SellerUpdateInput {
  companyName?: InputMaybe<Scalars['String']['input']>;
  plan?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<Scalars['ID']['input']>;
}

export interface SellerUserInput {
  seller: Scalars['ID']['input'];
  user: Scalars['ID']['input'];
}

/** Allows [re-]assign a user to a seller */
export interface SellerUserMappingCreate {
  __typename?: 'SellerUserMappingCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  ok: Maybe<Scalars['Boolean']['output']>;
  sellerUser: Maybe<SellerUserType>;
}

export interface SellerUserType extends Node {
  __typename?: 'SellerUserType';
  /** The ID of the object */
  id: Scalars['ID']['output'];
  isDefault: Scalars['Boolean']['output'];
  seller: Seller;
  user: User;
}

export interface SellerUserTypeCountableConnection {
  __typename?: 'SellerUserTypeCountableConnection';
  edges: Array<SellerUserTypeCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface SellerUserTypeCountableEdge {
  __typename?: 'SellerUserTypeCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: SellerUserType;
}

export interface SellerVolumeDiscount {
  __typename?: 'SellerVolumeDiscount';
  seller: Maybe<Scalars['Int']['output']>;
  volumeDiscount: Maybe<Money>;
}

export interface SellerVolumeDiscountInput {
  seller?: InputMaybe<Scalars['Int']['input']>;
  volumeDiscount?: InputMaybe<MoneyInput>;
}

/** Create new Seller and a new staff user and assign created user as Seller owner. */
export interface SellerWithOwnerCreate {
  __typename?: 'SellerWithOwnerCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  seller: Maybe<Seller>;
  sellerErrors: Array<SellerError>;
}

export interface SeoInput {
  /** SEO description. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** SEO title. */
  title?: InputMaybe<Scalars['String']['input']>;
}

export interface ShippingError {
  __typename?: 'ShippingError';
  /** The error code. */
  code: ShippingErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message: Scalars['String']['output'];
  /** List of warehouse IDs which causes the error. */
  warehouses: Maybe<Array<Scalars['ID']['output']>>;
}

/** An enumeration. */
export enum ShippingErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  MaxLessThanMin = 'MAX_LESS_THAN_MIN',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

/** Shipping method are the methods you'll use to get customer's orders to them. They are directly exposed to the customers. */
export interface ShippingMethod extends Node, ObjectWithMetadata {
  __typename?: 'ShippingMethod';
  /** The ID of the object */
  id: Scalars['ID']['output'];
  maximumOrderPrice: Maybe<Money>;
  maximumOrderWeight: Maybe<Weight>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  minimumOrderPrice: Maybe<Money>;
  minimumOrderWeight: Maybe<Weight>;
  name: Scalars['String']['output'];
  price: Maybe<Money>;
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /** Deprecated: This field will always return False and will be removed soon. */
  requiresSecondaryAddress: Maybe<Scalars['Boolean']['output']>;
  /** Type of the shipping method. */
  type: Maybe<ShippingMethodTypeEnum>;
}

export enum ShippingMethodTypeEnum {
  /** Price based shipping */
  Price = 'PRICE',
  /** Weight based shipping */
  Weight = 'WEIGHT'
}

/** Deletes shipping prices. */
export interface ShippingPriceBulkDelete {
  __typename?: 'ShippingPriceBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  shippingErrors: Array<ShippingError>;
}

/** Creates a new shipping price. */
export interface ShippingPriceCreate {
  __typename?: 'ShippingPriceCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  shippingErrors: Array<ShippingError>;
  shippingMethod: Maybe<ShippingMethod>;
  /** A shipping zone to which the shipping method belongs. */
  shippingZone: Maybe<ShippingZone>;
}

/** Deletes a shipping price. */
export interface ShippingPriceDelete {
  __typename?: 'ShippingPriceDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  shippingErrors: Array<ShippingError>;
  /** A shipping method to delete. */
  shippingMethod: Maybe<ShippingMethod>;
  /** A shipping zone to which the shipping method belongs. */
  shippingZone: Maybe<ShippingZone>;
}

export interface ShippingPriceInput {
  /** Maximum order price to use this shipping method. */
  maximumOrderPrice?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** Maximum order weight to use this shipping method. */
  maximumOrderWeight?: InputMaybe<Scalars['WeightScalar']['input']>;
  /** Minimum order price to use this shipping method. */
  minimumOrderPrice?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** Minimum order weight to use this shipping method. */
  minimumOrderWeight?: InputMaybe<Scalars['WeightScalar']['input']>;
  /** Name of the shipping method. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Shipping price of the shipping method. */
  price?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** Deprecated: This field will always be treated as False and will be removed soon. */
  requiresSecondaryAddress?: InputMaybe<Scalars['Boolean']['input']>;
  /** Shipping zone this method belongs to. */
  shippingZone?: InputMaybe<Scalars['ID']['input']>;
  /** Shipping type: price or weight based */
  type?: InputMaybe<ShippingMethodTypeEnum>;
}

/** Updates a new shipping price. */
export interface ShippingPriceUpdate {
  __typename?: 'ShippingPriceUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  shippingErrors: Array<ShippingError>;
  shippingMethod: Maybe<ShippingMethod>;
  /** A shipping zone to which the shipping method belongs. */
  shippingZone: Maybe<ShippingZone>;
}

/** Represents a shipping zone in the shop. Zones are the concept used only for grouping shipping methods in the dashboard, and are never exposed to the customers directly. */
export interface ShippingZone extends Node, ObjectWithMetadata {
  __typename?: 'ShippingZone';
  /** List of countries available for the method. */
  countries: Maybe<Array<CountryDisplay>>;
  /** List of country areas this shipping zone is limited to. */
  countryAreas: Maybe<Array<ShippingZoneCountryArea>>;
  /**
   * Default shipping zone will be used for countries not covered by other zones.
   * @deprecated ShippingZones are not marked as default anymore. This field will be removed after 2024-10-17.
   */
  default: Maybe<Scalars['Boolean']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  name: Scalars['String']['output'];
  /** Lowest and highest prices for the shipping. */
  priceRange: Maybe<MoneyRange>;
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  seller: Maybe<Seller>;
  /** List of shipping methods available for orders shipped to countries within this shipping zone. */
  shippingMethods: Maybe<Array<ShippingMethod>>;
  /** List of warehouses for shipping zone. */
  warehouses: Maybe<Array<Warehouse>>;
}

/** Deletes shipping zones. */
export interface ShippingZoneBulkDelete {
  __typename?: 'ShippingZoneBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  shippingErrors: Array<ShippingError>;
}

export interface ShippingZoneCountableConnection {
  __typename?: 'ShippingZoneCountableConnection';
  edges: Array<ShippingZoneCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface ShippingZoneCountableEdge {
  __typename?: 'ShippingZoneCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: ShippingZone;
}

/** Represents a state/province/region within a country that a shipping zone is limited to. */
export interface ShippingZoneCountryArea extends Node {
  __typename?: 'ShippingZoneCountryArea';
  country: CountryDisplay;
  countryArea: CountryArea;
  /** The ID of the object */
  id: Scalars['ID']['output'];
}

export interface ShippingZoneCountryAreaInput {
  /** Country code. */
  country: Scalars['String']['input'];
  /** List of country area codes. */
  countryAreas: Array<Scalars['String']['input']>;
}

/** Creates a new shipping zone. */
export interface ShippingZoneCreate {
  __typename?: 'ShippingZoneCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  shippingErrors: Array<ShippingError>;
  shippingZone: Maybe<ShippingZone>;
}

export interface ShippingZoneCreateInput {
  /** List of warehouses to assign to a shipping zone */
  addWarehouses?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** List of countries in this shipping zone. */
  countries?: InputMaybe<Array<Scalars['String']['input']>>;
  /** List of country areas this shipping zone is limited to. */
  countryAreas?: InputMaybe<Array<ShippingZoneCountryAreaInput>>;
  /**
   * Default shipping zone will be used for countries not covered by other zones.
   * @deprecated ShippingZones are not marked as default anymore. This field will be removed after 2024-10-17.
   */
  default?: InputMaybe<Scalars['Boolean']['input']>;
  /** Shipping zone's name. Visible only to the staff. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Seller ID */
  seller?: InputMaybe<Scalars['ID']['input']>;
}

/** Deletes a shipping zone. */
export interface ShippingZoneDelete {
  __typename?: 'ShippingZoneDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  shippingErrors: Array<ShippingError>;
  shippingZone: Maybe<ShippingZone>;
}

export interface ShippingZoneFilterInput {
  search?: InputMaybe<Scalars['String']['input']>;
}

/** Updates a new shipping zone. */
export interface ShippingZoneUpdate {
  __typename?: 'ShippingZoneUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  shippingErrors: Array<ShippingError>;
  shippingZone: Maybe<ShippingZone>;
}

export interface ShippingZoneUpdateInput {
  /** List of warehouses to assign to a shipping zone */
  addWarehouses?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** List of countries in this shipping zone. */
  countries?: InputMaybe<Array<Scalars['String']['input']>>;
  /** List of country areas this shipping zone is limited to. */
  countryAreas?: InputMaybe<Array<ShippingZoneCountryAreaInput>>;
  /**
   * Default shipping zone will be used for countries not covered by other zones.
   * @deprecated ShippingZones are not marked as default anymore. This field will be removed after 2024-10-17.
   */
  default?: InputMaybe<Scalars['Boolean']['input']>;
  /** Shipping zone's name. Visible only to the staff. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** List of warehouses to unassign from a shipping zone */
  removeWarehouses?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Seller ID */
  seller?: InputMaybe<Scalars['ID']['input']>;
}

/** Represents a shop resource containing general shop data and configuration. */
export interface Shop {
  __typename?: 'Shop';
  /** Gets active plugins. */
  activePlugins: Maybe<Array<Plugin>>;
  /** API url for the shop. */
  apiUrl: Maybe<Scalars['String']['output']>;
  /** Enable automatic fulfillment for all digital products. */
  automaticFulfillmentDigitalProducts: Maybe<Scalars['Boolean']['output']>;
  /** List of available payment gateways. */
  availablePaymentGateways: Array<PaymentGateway>;
  /** None if shop does not use Builder, otherwise this contains Builder public api key. */
  builderKey: Maybe<Scalars['String']['output']>;
  /** Charge taxes on shipping. */
  chargeTaxesOnShipping: Scalars['Boolean']['output'];
  /** The shop's active checkout theme. */
  checkoutTheme: Maybe<CheckoutTheme>;
  /** Company address. */
  companyAddress: Maybe<Address>;
  /** List of countries available in the shop. */
  countries: Array<CountryDisplay>;
  /** None if shop does not use Crisp, otherwise this contains Crisp Website ID. */
  crispWebsiteId: Maybe<Scalars['String']['output']>;
  /**
   * List of available currencies.
   * @deprecated This field will be removed in Nautical 3.0
   */
  currencies: Array<Scalars['String']['output']>;
  /** URL of a view where customers can set their password. */
  customerSetPasswordUrl: Maybe<Scalars['String']['output']>;
  /** Shop's default country. */
  defaultCountry: Maybe<CountryDisplay>;
  /**
   * Shop's default currency.
   * @deprecated This field will be removed in Nautical 3.0
   */
  defaultCurrency: Scalars['String']['output'];
  /** Default number of max downloads per digital content URL. */
  defaultDigitalMaxDownloads: Maybe<Scalars['Int']['output']>;
  /** Default number of days which digital content URL will be valid. */
  defaultDigitalUrlValidDays: Maybe<Scalars['Int']['output']>;
  /** Default shop's email sender's address. */
  defaultMailSenderAddress: Maybe<Scalars['String']['output']>;
  /** Default shop's email sender's name. */
  defaultMailSenderName: Maybe<Scalars['String']['output']>;
  /** Default shop's email support's address. */
  defaultMailSupportAddress: Maybe<Scalars['String']['output']>;
  /** Default weight unit. */
  defaultWeightUnit: Maybe<WeightUnitsEnum>;
  /** Shop's description. */
  description: Maybe<Scalars['String']['output']>;
  /** Display prices with tax in store. */
  displayGrossPrices: Scalars['Boolean']['output'];
  /** Shop's domain data. */
  domain: Domain;
  /**
   * Whether the marketplace has enabled master products
   * @deprecated Master product mode is deprecated. This will be removed after 2024-09-12
   */
  enableMasterProducts: Maybe<Scalars['Boolean']['output']>;
  /** Whether the marketplace has enabled offer orders. */
  enableOfferOrders: Maybe<Scalars['Boolean']['output']>;
  /** Whether the marketplace has enabled quote orders. */
  enableQuoteOrders: Maybe<Scalars['Boolean']['output']>;
  /** Customer's geolocalization data. */
  geolocalization: Maybe<Geolocalization>;
  geolocationEnabled: Maybe<Scalars['Boolean']['output']>;
  /** Header text. */
  headerText: Maybe<Scalars['String']['output']>;
  /**
   * Collection displayed on homepage.
   * @deprecated Use the `collection` query with the `slug` parameter. This field will be removed after 2023-12-16.
   */
  homepageCollection: Maybe<Collection>;
  /** Include taxes in prices. */
  includeTaxesInPrices: Scalars['Boolean']['output'];
  /** List of the shops's supported languages. */
  languages: Array<LanguageDisplay>;
  /** Is authenticated user required for checkout. */
  loginForCheckout: Maybe<Scalars['Boolean']['output']>;
  /** Is authenticated user required for to view product price information. */
  loginForPrice: Maybe<Scalars['Boolean']['output']>;
  /** Is authenticated user required to view product listings. */
  loginForProducts: Maybe<Scalars['Boolean']['output']>;
  /**
   * Enable master product over products. When this option is enabled, then seller's product variant can be assigned to master products where owner is marketplace.
   * @deprecated Master product mode is deprecated. This will be removed after 2024-09-12
   */
  masterProductManagementEnabled: Maybe<Scalars['Boolean']['output']>;
  /**
   * Min checkout amount for all orders for marketplace (in the currency of marketplace)
   * @deprecated Hosted checkout will handle minimum amount requirements for payment processors. This will be removed after 2024-09-12, and will always be 0.00 for now.
   */
  minCheckoutAmount: Maybe<Scalars['PositiveDecimal']['output']>;
  /** Shop's name. */
  name: Scalars['String']['output'];
  /**
   * Shop's navigation.
   * @deprecated Fetch menus using the `menu` query with `slug` parameter.
   */
  navigation: Maybe<Navigation>;
  /** List of available permissions. */
  permissions: Array<Permission>;
  /** List of possible phone prefixes. */
  phonePrefixes: Array<Scalars['String']['output']>;
  /** Determines whether seller products require approval */
  requireProductApproval: Maybe<Scalars['Boolean']['output']>;
  /** The seller onboarding settings for the shop. */
  sellerOnboardingSettings: Maybe<SellerOnboardingSettings>;
  /** The shop's active storefront theme. */
  storefrontTheme: Maybe<StorefrontTheme>;
  /** List of supported currencies. */
  supportedCurrencies: Array<NauticalCurrency>;
  /** The IANA timezone to use when displaying all dates and times */
  timezone: Scalars['String']['output'];
  /** Enable inventory tracking. */
  trackInventoryByDefault: Maybe<Scalars['Boolean']['output']>;
}


/** Represents a shop resource containing general shop data and configuration. */
export interface ShopAvailablePaymentGatewaysArgs {
  currency: InputMaybe<Scalars['String']['input']>;
}


/** Represents a shop resource containing general shop data and configuration. */
export interface ShopCountriesArgs {
  languageCode: InputMaybe<LanguageCodeEnum>;
}

/** Update the shop's address. If the `null` value is passed, the currently selected address will be deleted. */
export interface ShopAddressUpdate {
  __typename?: 'ShopAddressUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Updated shop. */
  shop: Maybe<Shop>;
  shopErrors: Array<ShopError>;
}

/** Updates site domain of the shop. */
export interface ShopDomainUpdate {
  __typename?: 'ShopDomainUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Updated shop. */
  shop: Maybe<Shop>;
  shopErrors: Array<ShopError>;
}

export interface ShopError {
  __typename?: 'ShopError';
  /** The error code. */
  code: ShopErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message: Scalars['String']['output'];
}

/** An enumeration. */
export enum ShopErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  CannotFetchTaxRates = 'CANNOT_FETCH_TAX_RATES',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotAllowed = 'NOT_ALLOWED',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

/** Fetch tax rates. */
export interface ShopFetchTaxRates {
  __typename?: 'ShopFetchTaxRates';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Updated shop. */
  shop: Maybe<Shop>;
  shopErrors: Array<ShopError>;
}

export interface ShopSettingsInput {
  /** Enable automatic fulfillment for all digital products. */
  automaticFulfillmentDigitalProducts?: InputMaybe<Scalars['Boolean']['input']>;
  /** Charge taxes on shipping. */
  chargeTaxesOnShipping?: InputMaybe<Scalars['Boolean']['input']>;
  /** URL of a view where customers can set their password. */
  customerSetPasswordUrl?: InputMaybe<Scalars['String']['input']>;
  /** Default number of max downloads per digital content URL. */
  defaultDigitalMaxDownloads?: InputMaybe<Scalars['Int']['input']>;
  /** Default number of days which digital content URL will be valid. */
  defaultDigitalUrlValidDays?: InputMaybe<Scalars['Int']['input']>;
  /** Default email sender's address. */
  defaultMailSenderAddress?: InputMaybe<Scalars['String']['input']>;
  /** Default email sender's name. */
  defaultMailSenderName?: InputMaybe<Scalars['String']['input']>;
  /** Default email support address. */
  defaultMailSupportAddress?: InputMaybe<Scalars['String']['input']>;
  /** Default weight unit. */
  defaultWeightUnit?: InputMaybe<WeightUnitsEnum>;
  /** SEO description. */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Display prices with tax in store. */
  displayGrossPrices?: InputMaybe<Scalars['Boolean']['input']>;
  /** Header text. */
  headerText?: InputMaybe<Scalars['String']['input']>;
  /** Include taxes in prices. */
  includeTaxesInPrices?: InputMaybe<Scalars['Boolean']['input']>;
  /** Enable inventory tracking. */
  trackInventoryByDefault?: InputMaybe<Scalars['Boolean']['input']>;
}

/** Updates shop settings. */
export interface ShopSettingsUpdate {
  __typename?: 'ShopSettingsUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Updated shop. */
  shop: Maybe<Shop>;
  shopErrors: Array<ShopError>;
}

export interface SingleVendorPayoutReport {
  __typename?: 'SingleVendorPayoutReport';
  payouts: Maybe<Array<SingleVendorReportType>>;
  summary: Maybe<SingleVendorSummaryType>;
}

export interface SingleVendorReportType {
  __typename?: 'SingleVendorReportType';
  adjustments: Maybe<Scalars['Decimal']['output']>;
  /** @deprecated This will be removed on Oct 26, 2024 when affiliate support is removed. */
  affiliateCommission: Maybe<Scalars['Float']['output']>;
  average: Maybe<Scalars['Float']['output']>;
  commission: Maybe<Scalars['Float']['output']>;
  discounts: Maybe<Scalars['Float']['output']>;
  endDate: Maybe<Scalars['String']['output']>;
  fees: Maybe<Scalars['Decimal']['output']>;
  gross: Maybe<Scalars['Float']['output']>;
  net: Maybe<Scalars['Float']['output']>;
  orders: Maybe<Scalars['Int']['output']>;
  payout: Maybe<Scalars['Decimal']['output']>;
  payoutEndDate: Maybe<Scalars['String']['output']>;
  penalties: Maybe<Scalars['Decimal']['output']>;
  refunds: Maybe<Scalars['Decimal']['output']>;
  revenue: Maybe<Scalars['Float']['output']>;
  shipping: Maybe<Scalars['Float']['output']>;
  startDate: Maybe<Scalars['String']['output']>;
  status: Maybe<Scalars['String']['output']>;
  taxes: Maybe<Scalars['Float']['output']>;
  totals: Maybe<Scalars['Int']['output']>;
  vendorPayout: Maybe<VendorPayout>;
  volumeDiscounts: Maybe<Scalars['Float']['output']>;
}

export interface SingleVendorSummaryType {
  __typename?: 'SingleVendorSummaryType';
  adjustments: Maybe<Scalars['Decimal']['output']>;
  /** @deprecated This will be removed on Oct 26, 2024 when affiliate support is removed. */
  affiliateCommission: Maybe<Scalars['Float']['output']>;
  average: Maybe<Scalars['Float']['output']>;
  commission: Maybe<Scalars['Float']['output']>;
  discounts: Maybe<Scalars['Float']['output']>;
  fees: Maybe<Scalars['Decimal']['output']>;
  gross: Maybe<Scalars['Float']['output']>;
  net: Maybe<Scalars['Float']['output']>;
  orders: Maybe<Scalars['Int']['output']>;
  payout: Maybe<Scalars['Float']['output']>;
  penalties: Maybe<Scalars['Decimal']['output']>;
  refunds: Maybe<Scalars['Decimal']['output']>;
  revenue: Maybe<Scalars['Float']['output']>;
  shipping: Maybe<Scalars['Float']['output']>;
  taxes: Maybe<Scalars['Float']['output']>;
  totals: Maybe<Scalars['Int']['output']>;
  volumeDiscounts: Maybe<Scalars['Float']['output']>;
}

export interface SiteDomainInput {
  /** API url for shop. */
  apiUrl?: InputMaybe<Scalars['String']['input']>;
  /** Domain name for shop. */
  domain?: InputMaybe<Scalars['String']['input']>;
  /** Shop site name. */
  name?: InputMaybe<Scalars['String']['input']>;
}

export enum SourceFeeEnum {
  /** Agreement Fees */
  AgreementFees = 'AGREEMENT_FEES',
  /** Manual Order Fee */
  ManualOrderFee = 'MANUAL_ORDER_FEE'
}

/** An enumeration. */
export enum SsoProviderType {
  GitHubOAuth = 'GitHubOAuth',
  GoogleOAuth = 'GoogleOAuth',
  MicrosoftOAuth = 'MicrosoftOAuth'
}

/** Deletes staff users. */
export interface StaffBulkDelete {
  __typename?: 'StaffBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  staffErrors: Array<StaffError>;
}

/** Creates a new staff user. */
export interface StaffCreate {
  __typename?: 'StaffCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  staffErrors: Array<StaffError>;
  user: Maybe<User>;
}

export interface StaffCreateInput {
  /** List of permission group IDs to which user should be assigned. */
  addGroups?: InputMaybe<Array<Scalars['ID']['input']>>;
  businessEntity?: InputMaybe<Scalars['ID']['input']>;
  /** Only filled out if the account is a business account. */
  companyName?: InputMaybe<Scalars['String']['input']>;
  /** List of custom fields. */
  customFields?: InputMaybe<Array<AttributeValueInput>>;
  /** The unique email address of the user. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Given name. */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** User account is active. */
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * User account is affiliate.
   * @deprecated This will be removed on Oct 26, 2024 when affiliate support is removed.
   */
  isAffiliate?: InputMaybe<Scalars['Boolean']['input']>;
  /** User is staff member. */
  isStaff?: InputMaybe<Scalars['Boolean']['input']>;
  /** Family name. */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** A note about the user. */
  note?: InputMaybe<Scalars['String']['input']>;
  /** Password url */
  passwordUrl?: InputMaybe<Scalars['String']['input']>;
  /** Personal phone number. */
  personalPhone?: InputMaybe<Scalars['String']['input']>;
  /** URL of a view where users should be redirected to set the password. URL in RFC 1808 format. */
  redirectUrl?: InputMaybe<Scalars['String']['input']>;
  /** Tax exempt code */
  taxExemptCode?: InputMaybe<Scalars['String']['input']>;
}

/** Deletes a staff user. */
export interface StaffDelete {
  __typename?: 'StaffDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  staffErrors: Array<StaffError>;
  user: Maybe<User>;
}

export interface StaffError {
  __typename?: 'StaffError';
  /** The error code. */
  code: AccountErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']['output']>;
  /** List of permission group IDs which cause the error. */
  groups: Maybe<Array<Scalars['ID']['output']>>;
  /** The error message. */
  message: Scalars['String']['output'];
  /** List of permissions which causes the error. */
  permissions: Maybe<Array<PermissionEnum>>;
  /** List of user IDs which causes the error. */
  users: Maybe<Array<Scalars['ID']['output']>>;
}

export enum StaffMemberStatus {
  Active = 'ACTIVE',
  Deactivated = 'DEACTIVATED'
}

/** Updates an existing staff user. */
export interface StaffUpdate {
  __typename?: 'StaffUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  staffErrors: Array<StaffError>;
  user: Maybe<User>;
}

export interface StaffUpdateInput {
  /** List of permission group IDs to which user should be assigned. */
  addGroups?: InputMaybe<Array<Scalars['ID']['input']>>;
  businessEntity?: InputMaybe<Scalars['ID']['input']>;
  /** Only filled out if the account is a business account. */
  companyName?: InputMaybe<Scalars['String']['input']>;
  /** List of custom fields. */
  customFields?: InputMaybe<Array<AttributeValueInput>>;
  /** The unique email address of the user. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Given name. */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** User account is active. */
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * User account is affiliate.
   * @deprecated This will be removed on Oct 26, 2024 when affiliate support is removed.
   */
  isAffiliate?: InputMaybe<Scalars['Boolean']['input']>;
  /** User is staff member. */
  isStaff?: InputMaybe<Scalars['Boolean']['input']>;
  /** Family name. */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** A note about the user. */
  note?: InputMaybe<Scalars['String']['input']>;
  /** Password url */
  passwordUrl?: InputMaybe<Scalars['String']['input']>;
  /** Personal phone number. */
  personalPhone?: InputMaybe<Scalars['String']['input']>;
  /** List of permission group IDs from which user should be unassigned. */
  removeGroups?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Tax exempt code */
  taxExemptCode?: InputMaybe<Scalars['String']['input']>;
}

export interface StaffUserInput {
  customFields?: InputMaybe<Array<AttributeInput>>;
  isUserActive?: InputMaybe<Scalars['Boolean']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<StaffMemberStatus>;
}

/** Represents stock. */
export interface Stock extends Node {
  __typename?: 'Stock';
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** If backorders are enabled for the marketplace and variant, this is the number of backordered items permitted before the variant is marked as out of stock. This is a negative number or zero. quantity available is not permitted to go below this number. */
  outOfStockThreshold: Maybe<Scalars['Int']['output']>;
  productVariant: ProductVariant;
  /** Total amount of variant stock located at the warehouse. */
  quantity: Scalars['Int']['output'];
  /** Amount of variant stock at the warehouse that has been allocated to an order. */
  quantityAllocated: Scalars['Int']['output'];
  /** Amount of variant stock at the warehouse that is available for purchase and is not allocated to an order. This is equal to the difference between quantity and quantity_allocated. */
  quantityAvailable: Scalars['Int']['output'];
  warehouse: Warehouse;
}

export enum StockAvailability {
  InStock = 'IN_STOCK',
  OutOfStock = 'OUT_OF_STOCK'
}

export interface StockCountableConnection {
  __typename?: 'StockCountableConnection';
  edges: Array<StockCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface StockCountableEdge {
  __typename?: 'StockCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Stock;
}

export interface StockError {
  __typename?: 'StockError';
  /** The error code. */
  code: StockErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message: Scalars['String']['output'];
}

/** An enumeration. */
export enum StockErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

/** History log of the variant stock. */
export interface StockEvent extends Node {
  __typename?: 'StockEvent';
  date: Scalars['DateTime']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  parameters: Scalars['JSONString']['output'];
  stock: Maybe<Stock>;
  type: StockEventType;
  /** Returns a user who created this event. */
  user: Maybe<User>;
}

/** An enumeration. */
export enum StockEventType {
  /** Stock was allocated */
  StockAllocated = 'STOCK_ALLOCATED',
  /** Stock was created */
  StockCreated = 'STOCK_CREATED',
  /** Stock was deallocated */
  StockDeallocated = 'STOCK_DEALLOCATED',
  /** Stock was deleted */
  StockDeleted = 'STOCK_DELETED',
  /** Stock was updated */
  StockUpdated = 'STOCK_UPDATED'
}

export interface StockFilterInput {
  quantity?: InputMaybe<Scalars['Decimal']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
}

export interface StockInput {
  /** Determines whether 'quantityAllocated' is added to the 'quantity' input or is ignored when updating the stock levels. When true, the 'quantity' input is added to 'quantityAllocated', resulting in the new stock quantity. When false (default), the 'quantity' input directly replaces the stock quantity, ignoring 'quantityAllocated'. */
  includeAllocations?: InputMaybe<Scalars['Boolean']['input']>;
  /** Threshold of available quantity to allow backorders. Should be zero or negative. */
  outOfStockThreshold?: InputMaybe<Scalars['Int']['input']>;
  /** Quantity of items in the warehouse. */
  quantity?: InputMaybe<Scalars['Int']['input']>;
  /** Warehouse in which the stock is located. */
  warehouse: Scalars['ID']['input'];
}

/** Represents a storefront's theme options. */
export interface StorefrontTheme extends Node {
  __typename?: 'StorefrontTheme';
  /** Accent color in hex. */
  accentColor: Maybe<Scalars['String']['output']>;
  /** URL of the favicon. */
  faviconUrl: Maybe<Scalars['String']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  logo: Maybe<Image>;
  /** Primary color in hex. */
  primaryColor: Maybe<Scalars['String']['output']>;
  /** Secondary color in hex. */
  secondaryColor: Maybe<Scalars['String']['output']>;
}

/** Create a new storefront theme. */
export interface StorefrontThemeCreate {
  __typename?: 'StorefrontThemeCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Updated shop. */
  shop: Maybe<Shop>;
  shopErrors: Array<ShopError>;
}

export interface StorefrontThemeInput {
  /** Secondary color in hex. */
  accentColor?: InputMaybe<Scalars['String']['input']>;
  /** URL of the favicon. */
  faviconUrl?: InputMaybe<Scalars['String']['input']>;
  /** Logo file. */
  logo?: InputMaybe<Scalars['Upload']['input']>;
  /** Primary color in hex. */
  primaryColor?: InputMaybe<Scalars['String']['input']>;
  /** Secondary color in hex. */
  secondaryColor?: InputMaybe<Scalars['String']['input']>;
}

/** Update a storefront theme. */
export interface StorefrontThemeUpdate {
  __typename?: 'StorefrontThemeUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Updated shop. */
  shop: Maybe<Shop>;
  shopErrors: Array<ShopError>;
}

export interface StripeClientPaymentData {
  amount?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  billing?: InputMaybe<AddressInput>;
  /** The ID of the checkout this payment token will be used for */
  checkoutId?: InputMaybe<Scalars['ID']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  customerEmail?: InputMaybe<Scalars['String']['input']>;
  customerId?: InputMaybe<Scalars['String']['input']>;
  /** The ID of the NauticalOrder this payment token will be used for */
  nauticalOrderId?: InputMaybe<Scalars['ID']['input']>;
  paymentMethodToken?: InputMaybe<Scalars['String']['input']>;
  /** If the gateway requires it, the URL to redirect to after payment is complete. */
  returnUrl?: InputMaybe<Scalars['String']['input']>;
  shipping?: InputMaybe<AddressInput>;
  token?: InputMaybe<Scalars['String']['input']>;
}

/** Customer Tax Certificate information. */
export interface TaxCertificate {
  __typename?: 'TaxCertificate';
  businessNumberType: Maybe<Scalars['String']['output']>;
  companyId: Maybe<Scalars['String']['output']>;
  createdDate: Maybe<Scalars['String']['output']>;
  documentExists: Maybe<Scalars['Boolean']['output']>;
  downloadUrl: Maybe<Scalars['String']['output']>;
  exemptPercentage: Maybe<Scalars['String']['output']>;
  exemptionNumber: Maybe<Scalars['String']['output']>;
  exemptionReasonId: Maybe<Scalars['Int']['output']>;
  exemptionReasonName: Maybe<Scalars['String']['output']>;
  expirationDate: Maybe<Scalars['String']['output']>;
  exposureZoneName: Maybe<Scalars['String']['output']>;
  filename: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['Int']['output']>;
  isSingleCertificate: Maybe<Scalars['Boolean']['output']>;
  modifiedDate: Maybe<Scalars['String']['output']>;
  signedDate: Maybe<Scalars['String']['output']>;
  status: Maybe<Scalars['String']['output']>;
  taxNumberType: Maybe<Scalars['String']['output']>;
  valid: Maybe<Scalars['Boolean']['output']>;
  verified: Maybe<Scalars['Boolean']['output']>;
}

/** Avalara support tax exemption. */
export interface TaxExemptCode {
  __typename?: 'TaxExemptCode';
  /** Tax exempt code. */
  code: Scalars['String']['output'];
  /** Tax exempt code description. */
  description: Scalars['String']['output'];
  /** Tax exempt codename. */
  name: Scalars['String']['output'];
  /** List of available countries for tax exempt code. */
  validCountries: Maybe<Array<Scalars['String']['output']>>;
}

/** Representation of tax types fetched from tax gateway. */
export interface TaxType {
  __typename?: 'TaxType';
  /** Description of the tax type. */
  description: Maybe<Scalars['String']['output']>;
  /** External tax code used to identify given tax group. */
  taxCode: Maybe<Scalars['String']['output']>;
}

/** Represents a monetary value with taxes. In cases where taxes were not applied, net and gross values will be equal. */
export interface TaxedMoney {
  __typename?: 'TaxedMoney';
  /** Currency code. */
  currency: Scalars['String']['output'];
  /** Amount of money including taxes. */
  gross: Money;
  /** Amount of money without taxes. */
  net: Money;
  /** Amount of taxes. */
  tax: Money;
}

/** Represents a range of monetary values. */
export interface TaxedMoneyRange {
  __typename?: 'TaxedMoneyRange';
  /** Lower bound of a price range. */
  start: Maybe<TaxedMoney>;
  /** Upper bound of a price range. */
  stop: Maybe<TaxedMoney>;
}

/** Create JWT token (Also creates a user if not previously signed up) */
export interface TokenCreateSso {
  __typename?: 'TokenCreateSSO';
  accountErrors: Array<AccountError>;
  /** CSRF token required to re-generate access token. */
  csrfToken: Maybe<Scalars['String']['output']>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** JWT refresh token, required to re-generate access token. */
  refreshToken: Maybe<Scalars['String']['output']>;
  /** JWT token, required to authenticate. */
  token: Maybe<Scalars['String']['output']>;
  /** A user instance. */
  user: Maybe<User>;
}

/** An object representing a single payment. */
export interface Transaction extends Node {
  __typename?: 'Transaction';
  /** Total amount of the transaction. */
  amount: Maybe<Money>;
  created: Scalars['DateTime']['output'];
  error: Maybe<Scalars['String']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  isSuccess: Scalars['Boolean']['output'];
  kind: TransactionKind;
  payment: Payment;
  token: Scalars['String']['output'];
}

/** An enumeration. */
export enum TransactionKind {
  /** Action to confirm */
  ActionToConfirm = 'ACTION_TO_CONFIRM',
  /** Authorization */
  Auth = 'AUTH',
  /** Cancel */
  Cancel = 'CANCEL',
  /** Capture */
  Capture = 'CAPTURE',
  /** Capture failed */
  CaptureFailed = 'CAPTURE_FAILED',
  /** Confirm */
  Confirm = 'CONFIRM',
  /** Created */
  Created = 'CREATED',
  /** Pending */
  Pending = 'PENDING',
  /** Refund */
  Refund = 'REFUND',
  /** Refund failed */
  RefundFailed = 'REFUND_FAILED',
  /** Refund in progress */
  RefundOngoing = 'REFUND_ONGOING',
  /** Refund reversed */
  RefundReversed = 'REFUND_REVERSED',
  /** Void */
  Void = 'VOID'
}

export interface TypeformForm {
  __typename?: 'TypeformForm';
  fields: Maybe<Array<TypeformFormFields>>;
  hidden: Maybe<Array<Scalars['String']['output']>>;
  id: Maybe<Scalars['String']['output']>;
  language: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
}

export interface TypeformFormAttachment {
  __typename?: 'TypeformFormAttachment';
  href: Maybe<Scalars['String']['output']>;
  properties: Maybe<TypeformFormProperties>;
  type: Maybe<Scalars['String']['output']>;
}

export interface TypeformFormFields {
  __typename?: 'TypeformFormFields';
  attachment: Maybe<TypeformFormAttachment>;
  fieldType: Maybe<Scalars['String']['output']>;
  id: Maybe<Scalars['String']['output']>;
  layout: Maybe<TypeformFormLayout>;
  name: Maybe<Scalars['String']['output']>;
  options: Maybe<Array<TypeformFormOption>>;
  properties: Maybe<TypeformFormProperties>;
  ref: Maybe<Scalars['String']['output']>;
  required: Maybe<Scalars['Boolean']['output']>;
  title: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
}

export interface TypeformFormLayout {
  __typename?: 'TypeformFormLayout';
  attachment: Maybe<TypeformFormAttachment>;
  placement: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
}

export interface TypeformFormOption {
  __typename?: 'TypeformFormOption';
  label: Maybe<Scalars['String']['output']>;
}

export interface TypeformFormProperties {
  __typename?: 'TypeformFormProperties';
  description: Maybe<Scalars['String']['output']>;
  fields: Maybe<Array<TypeformGroupProperties>>;
}

/** Information about all forms from Typeform. */
export interface TypeformForms {
  __typename?: 'TypeformForms';
  /** Type of the field. */
  items: Maybe<Array<TypeformFormsItem>>;
  /** Number of pages */
  pageCount: Maybe<Scalars['Int']['output']>;
  /** Total number of items. */
  totalItems: Maybe<Scalars['Int']['output']>;
}

export interface TypeformFormsItem {
  __typename?: 'TypeformFormsItem';
  Links: Maybe<TypeformFormsItemLink>;
  id: Maybe<Scalars['String']['output']>;
  lastUpdatedAt: Maybe<Scalars['String']['output']>;
  self: Maybe<TypeformFormsItemSelf>;
  theme: Maybe<TypeformFormsItemSelf>;
  title: Maybe<Scalars['String']['output']>;
}

export interface TypeformFormsItemLink {
  __typename?: 'TypeformFormsItemLink';
  display: Maybe<Scalars['String']['output']>;
}

export interface TypeformFormsItemSelf {
  __typename?: 'TypeformFormsItemSelf';
  href: Maybe<Scalars['String']['output']>;
}

export interface TypeformGroupProperties {
  __typename?: 'TypeformGroupProperties';
  id: Maybe<Scalars['String']['output']>;
  ref: Maybe<Scalars['String']['output']>;
  title: Maybe<Scalars['String']['output']>;
  type: Maybe<Scalars['String']['output']>;
}

export interface UpdateInvoiceInput {
  /** Invoice number */
  number?: InputMaybe<Scalars['String']['input']>;
  /** URL of an invoice to download. */
  url?: InputMaybe<Scalars['String']['input']>;
}

/** Represents user data. */
export interface User extends Node, ObjectWithMetadata {
  __typename?: 'User';
  /** List of all user's addresses. */
  addresses: Maybe<Array<Address>>;
  /** @deprecated This will be removed on Oct 26, 2024 when affiliate support is removed. */
  affiliateEarnings: Maybe<Money>;
  /** @deprecated This will be removed on Oct 26, 2024 when affiliate support is removed. */
  affiliateOrders: Maybe<Scalars['Int']['output']>;
  /** @deprecated This will be removed on Oct 26, 2024 when affiliate support is removed. */
  affiliateReferrals: Maybe<Scalars['Int']['output']>;
  agreement: Maybe<Agreement>;
  avatar: Maybe<Image>;
  /** Returns the last open checkout of this user. */
  checkout: Maybe<Checkout>;
  companyName: Scalars['String']['output'];
  /** List of custom fields assigned to this product. */
  customFields: Array<SelectedAttribute>;
  /** If null, then the environment isn't set and they don't have dashboard reporting enabled */
  dashboardEmbeddingToken: Maybe<Scalars['String']['output']>;
  dateJoined: Scalars['DateTime']['output'];
  defaultBillingAddress: Maybe<Address>;
  defaultShippingAddress: Maybe<Address>;
  /** List of documents associated with the user. */
  documents: Maybe<Array<Document>>;
  /** List of user's permission groups which user can manage. */
  editableGroups: Maybe<Array<Group>>;
  email: Scalars['String']['output'];
  /** List of events associated with the user. */
  events: Maybe<Array<CustomerEvent>>;
  externalId: Maybe<Scalars['String']['output']>;
  externalPayoutAccountId: Maybe<Scalars['String']['output']>;
  externalPayoutOnboardingUrl: Maybe<Scalars['String']['output']>;
  externalPayoutSource: Maybe<UserExternalPayoutSource>;
  firstName: Scalars['String']['output'];
  /** @deprecated This will be removed on Oct 26, 2024 when affiliate support is removed. */
  hasMicrosite: Maybe<Scalars['Boolean']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  /** @deprecated This will be removed on Oct 26, 2024 when affiliate support is removed. */
  isAffiliate: Maybe<Scalars['Boolean']['output']>;
  isAssignable: Maybe<Scalars['Boolean']['output']>;
  isMarketplaceAdmin: Maybe<Scalars['Boolean']['output']>;
  isStaff: Scalars['Boolean']['output'];
  lastLogin: Maybe<Scalars['DateTime']['output']>;
  lastName: Scalars['String']['output'];
  /**
   * Date of last affiliate confirmed order.
   * @deprecated This will be removed on Oct 26, 2024 when affiliate support is removed.
   */
  lastOrder: Maybe<Scalars['DateTime']['output']>;
  /**
   * Date of last affiliate referral.
   * @deprecated This will be removed on Oct 26, 2024 when affiliate support is removed.
   */
  lastReferral: Maybe<Scalars['DateTime']['output']>;
  lastStatusChangedAt: Maybe<Scalars['DateTime']['output']>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /** @deprecated This will be removed on Oct 26, 2024 when affiliate support is removed. */
  micrositeId: Maybe<Scalars['ID']['output']>;
  /** List of user's nautical offer orders. */
  nauticalOfferOrders: Maybe<NauticalOrderCountableConnection>;
  /** List of user's nautical orders. */
  nauticalOrders: Maybe<NauticalOrderCountableConnection>;
  /** List of user's nautical quote orders. */
  nauticalQuoteOrders: Maybe<NauticalOrderCountableConnection>;
  /** A note about the customer. */
  note: Maybe<Scalars['String']['output']>;
  numOrders: Maybe<Scalars['Int']['output']>;
  /** List of user's offer seller orders. */
  offerOrders: Maybe<OrderCountableConnection>;
  /** List of user's orders. */
  orders: Maybe<OrderCountableConnection>;
  /** List of user's permission groups. */
  permissionGroups: Maybe<Array<Group>>;
  personalPhone: Maybe<Scalars['String']['output']>;
  /** Returns values of price book the user is added to */
  priceBook: Maybe<PriceBook>;
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  /** List of user's quote seller orders. */
  quoteOrders: Maybe<OrderCountableConnection>;
  seller: Maybe<Seller>;
  /** List of stored payment sources. */
  storedPaymentSources: Maybe<Array<PaymentSource>>;
  taxExemptCode: Maybe<Scalars['String']['output']>;
  /** List of user's permissions. */
  userPermissions: Maybe<Array<UserPermission>>;
  vatIdentificationNumber: Maybe<Scalars['String']['output']>;
  /** Wishlist items of the user default wishlist */
  wishlist: Maybe<WishlistItemCountableConnection>;
  /** Wishlists of the user */
  wishlists: Maybe<WishlistCountableConnection>;
}


/** Represents user data. */
export interface UserAvatarArgs {
  size: InputMaybe<Scalars['Int']['input']>;
}


/** Represents user data. */
export interface UserNauticalOfferOrdersArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<CustomerNauticalOrderFilterInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  sortBy: InputMaybe<OrderSortingInput>;
}


/** Represents user data. */
export interface UserNauticalOrdersArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<CustomerNauticalOrderFilterInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  sortBy: InputMaybe<OrderSortingInput>;
}


/** Represents user data. */
export interface UserNauticalQuoteOrdersArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<CustomerNauticalOrderFilterInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  sortBy: InputMaybe<OrderSortingInput>;
}


/** Represents user data. */
export interface UserOfferOrdersArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<CustomerOrderFilterInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  sortBy: InputMaybe<OrderSortingInput>;
}


/** Represents user data. */
export interface UserOrdersArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<CustomerOrderFilterInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  sortBy: InputMaybe<OrderSortingInput>;
}


/** Represents user data. */
export interface UserQuoteOrdersArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  filter: InputMaybe<CustomerOrderFilterInput>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  sortBy: InputMaybe<OrderSortingInput>;
}


/** Represents user data. */
export interface UserWishlistArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
}


/** Represents user data. */
export interface UserWishlistsArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
}

/** Add a user to price book. */
export interface UserAddToPriceBook {
  __typename?: 'UserAddToPriceBook';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  priceBookErrors: Array<PriceBookError>;
  /** An updated user instance. */
  user: Maybe<User>;
}

export interface UserAddToPriceBookInput {
  /** ID of price book that user needs to be added to. */
  priceBook: Scalars['ID']['input'];
  /** ID of user that is to be mapped to the price book. */
  user: Scalars['ID']['input'];
}

/** Deletes a user avatar. Only for staff members. */
export interface UserAvatarDelete {
  __typename?: 'UserAvatarDelete';
  accountErrors: Array<AccountError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** An updated user instance. */
  user: Maybe<User>;
}

/** Create a user avatar. Only for staff members. This mutation must be sent as a `multipart` request. More detailed specs of the upload format can be found here: https://github.com/jaydenseric/graphql-multipart-request-spec */
export interface UserAvatarUpdate {
  __typename?: 'UserAvatarUpdate';
  accountErrors: Array<AccountError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** An updated user instance. */
  user: Maybe<User>;
}

/** Activate or deactivate users. */
export interface UserBulkSetActive {
  __typename?: 'UserBulkSetActive';
  accountErrors: Array<AccountError>;
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

export interface UserCountableConnection {
  __typename?: 'UserCountableConnection';
  edges: Array<UserCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface UserCountableEdge {
  __typename?: 'UserCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: User;
}

export interface UserCreateInput {
  /** Only filled out if the account is a business account. */
  companyName?: InputMaybe<Scalars['String']['input']>;
  /** List of custom fields. */
  customFields?: InputMaybe<Array<AttributeValueInput>>;
  /** Billing address of the customer. */
  defaultBillingAddress?: InputMaybe<AddressInput>;
  /** Shipping address of the customer. */
  defaultShippingAddress?: InputMaybe<AddressInput>;
  /** The unique email address of the user. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Given name. */
  firstName?: InputMaybe<Scalars['String']['input']>;
  /** User account is active. */
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /**
   * User account is affiliate.
   * @deprecated This will be removed on Oct 26, 2024 when affiliate support is removed.
   */
  isAffiliate?: InputMaybe<Scalars['Boolean']['input']>;
  /** User is staff member. */
  isStaff?: InputMaybe<Scalars['Boolean']['input']>;
  /** Family name. */
  lastName?: InputMaybe<Scalars['String']['input']>;
  /** A note about the user. */
  note?: InputMaybe<Scalars['String']['input']>;
  /** Password url */
  passwordUrl?: InputMaybe<Scalars['String']['input']>;
  /** Personal phone number. */
  personalPhone?: InputMaybe<Scalars['String']['input']>;
  /** URL of a view where users should be redirected to set the password. URL in RFC 1808 format. */
  redirectUrl?: InputMaybe<Scalars['String']['input']>;
  /** Tax exempt code */
  taxExemptCode?: InputMaybe<Scalars['String']['input']>;
  /** Marketplace VAT identification number */
  vatIdentificationNumber?: InputMaybe<Scalars['String']['input']>;
}

/** An enumeration. */
export enum UserExternalPayoutSource {
  /** nautical.payments.paypal */
  NauticalPaymentsPaypal = 'NAUTICAL_PAYMENTS_PAYPAL',
  /** nautical.payments.stripe */
  NauticalPaymentsStripe = 'NAUTICAL_PAYMENTS_STRIPE',
  /** nautical.payments.trolley */
  NauticalPaymentsTrolley = 'NAUTICAL_PAYMENTS_TROLLEY'
}

export interface UserPermission {
  __typename?: 'UserPermission';
  /** Internal code for permission. */
  code: PermissionEnum;
  /** Describe action(s) allowed to do by permission. */
  name: Scalars['String']['output'];
  /** List of user permission groups which contains this permission. */
  sourcePermissionGroups: Maybe<Array<Group>>;
}


export interface UserPermissionSourcePermissionGroupsArgs {
  userId: InputMaybe<Scalars['ID']['input']>;
}

/** Removes a user from price book. */
export interface UserRemoveFromPriceBook {
  __typename?: 'UserRemoveFromPriceBook';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  priceBookErrors: Array<PriceBookError>;
  /** An updated user instance. */
  user: Maybe<User>;
}

export enum UserSortField {
  /** Sort users by company name. */
  CompanyName = 'COMPANY_NAME',
  /** Sort users by email. */
  Email = 'EMAIL',
  /** Sort users by first name. */
  FirstName = 'FIRST_NAME',
  /** Sort users by is active. */
  IsActive = 'IS_ACTIVE',
  /** Sort users by last name. */
  LastName = 'LAST_NAME',
  /** Sort users by order count. */
  OrderCount = 'ORDER_COUNT',
  /** Sort users by vendor. */
  Vendor = 'VENDOR'
}

export interface UserSortingInput {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort users by the selected field. */
  field: UserSortField;
}

export interface UserType extends Node, ObjectWithMetadata {
  __typename?: 'UserType';
  defaultShippingAddress: Maybe<AddressType>;
  email: Maybe<Scalars['String']['output']>;
  firstName: Maybe<Scalars['String']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  lastName: Maybe<Scalars['String']['output']>;
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
}

export interface ValidationStatus {
  __typename?: 'ValidationStatus';
  code: Maybe<Scalars['String']['output']>;
  message: Maybe<Scalars['String']['output']>;
  variant: Maybe<Scalars['ID']['output']>;
}

/** Represents a single variant feature. */
export interface VariantFeature extends Node {
  __typename?: 'VariantFeature';
  description: Scalars['String']['output'];
  /** The type that we expect to render the feature's values as. */
  featureType: FeatureTypeEnum;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  /** Available options for this variant feature */
  options: Maybe<Array<Scalars['String']['output']>>;
  productTypeFeature: Maybe<ProductTypeVariantFeature>;
  sortOrder: Maybe<Scalars['Int']['output']>;
  variant: ProductVariant;
}

export interface VariantFeatureCountableConnection {
  __typename?: 'VariantFeatureCountableConnection';
  edges: Array<VariantFeatureCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface VariantFeatureCountableEdge {
  __typename?: 'VariantFeatureCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: VariantFeature;
}

/** Represents availability of a variant in the storefront. */
export interface VariantPricingInfo {
  __typename?: 'VariantPricingInfo';
  /** The discount amount if in sale (null otherwise). */
  discount: TaxedMoney;
  /** The discount amount in the local currency. */
  discountLocalCurrency: TaxedMoney;
  /** Whether it is in sale or not. */
  onSale: Scalars['Boolean']['output'];
  /** The price, with any discount subtracted. */
  price: TaxedMoney;
  /** The discounted price in the local currency. */
  priceLocalCurrency: TaxedMoney;
  /** The price without any discount. */
  priceUndiscounted: TaxedMoney;
  /** The price without any discounts in the local currency. */
  priceUndiscountedLocalCurrency: TaxedMoney;
}

/** Represents a size info. */
export interface VariantSize {
  __typename?: 'VariantSize';
  height: Maybe<Scalars['Decimal']['output']>;
  length: Maybe<Scalars['Decimal']['output']>;
  /** Size units for length, width and height. */
  sizeUnits: Maybe<DistanceUnitsEnum>;
  width: Maybe<Scalars['Decimal']['output']>;
}

/** Represents size of a specific variant. */
export interface VariantSizeInput {
  height?: InputMaybe<Scalars['Decimal']['input']>;
  length?: InputMaybe<Scalars['Decimal']['input']>;
  /** Size units for length, width and height. */
  sizeUnits?: InputMaybe<DistanceUnitsEnum>;
  width?: InputMaybe<Scalars['Decimal']['input']>;
}

export enum VariantSortField {
  /** Sort variants by brand. */
  Brand = 'BRAND',
  /** Sort variants by category. */
  Category = 'CATEGORY',
  /** Sort variants by create date. */
  Created = 'CREATED',
  /** Sort variants by manufacturer. */
  Manufacturer = 'MANUFACTURER',
  /** Sort variants by name. */
  Name = 'NAME',
  /** Sort variants by price. */
  Price = 'PRICE',
  /** Sort variants by seller. */
  Seller = 'SELLER',
  /** Sort variants by sku. */
  Sku = 'SKU',
  /** Sort variants by sub status. */
  SubStatus = 'SUB_STATUS',
  /** Sort variants by type. */
  Type = 'TYPE',
  /** Sort variants by update date. */
  Updated = 'UPDATED',
  /**
   * Sort variants by variant id using rules for "int" values.
   *             In the database, ID is an integer. In the API, it's converted
   *             to a base64 encoded string. By sorting by ID (by the integer ID values),
   *             and returning the queryset back to the API consumer in such order,
   *             this allows the API consumer to convert the base64 encoded string back
   *             into an integer and view the list in sorted order by integer ID values.
   *             E.g. This is useful for the `Variant ID` column in the Variants List Page
   *             of the Dashboard, which shows the base64 decoded values (the integer values)
   *             of the variant IDs.
   *             .
   */
  VariantId = 'VARIANT_ID'
}

export interface VariantSortingInput {
  /**
   * Sort variant by the selected parent product's attribute's values.
   * Note: this doesn't take translations into account yet.
   */
  attributeId?: InputMaybe<Scalars['ID']['input']>;
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort variants by the selected field. */
  field?: InputMaybe<VariantSortField>;
}

export enum VariantUniquenessEnum {
  /** Disable any uniqueness check for variant attribute sets */
  DisabledUniqueChecking = 'DISABLED_UNIQUE_CHECKING',
  /** Check for duplicated variant attribute sets globally (per-product), duplicated variants may not exist in the system */
  UniquePerMarketplace = 'UNIQUE_PER_MARKETPLACE',
  /** Check for duplicated variant attribute sets within a seller, duplicated variants may still exist globally (pre-product) */
  UniquePerSeller = 'UNIQUE_PER_SELLER'
}

export type Vendor = Seller | User;

/** Adds return notification note to the order. */
export interface VendorOrderReturnFromStorefrontNotification {
  __typename?: 'VendorOrderReturnFromStorefrontNotification';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Order return notification created. */
  event: Maybe<Array<OrderEvent>>;
  /** Order with return notification note added. */
  order: Maybe<Order>;
  orderErrors: Array<OrderError>;
}

export interface VendorPayout extends Node, ObjectWithMetadata {
  __typename?: 'VendorPayout';
  adjustment: Money;
  adjustmentAmount: Scalars['Decimal']['output'];
  affiliate: Maybe<User>;
  /** @deprecated This field will be removed after 2024-07-01. */
  average: Scalars['Decimal']['output'];
  commission: Scalars['Decimal']['output'];
  commissionMoney: Money;
  created: Scalars['DateTime']['output'];
  currency: Scalars['String']['output'];
  discounts: Scalars['Decimal']['output'];
  discountsMoney: Money;
  /** List of events associated with the vendor payout (sorted from newest to latest) */
  events: Array<VendorPayoutEvent>;
  feeAmount: Scalars['Decimal']['output'];
  fees: Money;
  gateway: Scalars['String']['output'];
  /** @deprecated This field will be removed after 2024-07-01. */
  gross: Scalars['Decimal']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  included: Scalars['Boolean']['output'];
  ledgerVersion: Scalars['BigInt']['output'];
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  net: Scalars['Decimal']['output'];
  netSales: Money;
  orders: OrderCountableConnection;
  payable: Money;
  payout: Payout;
  payoutAmount: Scalars['Decimal']['output'];
  /** @deprecated A negative adjustment should be used instead of a penalty. This field will be removed after 2024-07-01. */
  penalty: Money;
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  refund: Money;
  refundAmount: Scalars['Decimal']['output'];
  refundLines: RefundLineCountableConnection;
  seller: Maybe<Seller>;
  shipping: Scalars['Decimal']['output'];
  shippingMoney: Money;
  status: VendorPayoutStatus;
  statusMessage: Maybe<Scalars['String']['output']>;
  subtotal: Money;
  /** @deprecated This field will be removed after 2024-07-01. */
  taxes: Scalars['Decimal']['output'];
  total: Money;
  updated: Scalars['DateTime']['output'];
  /** @deprecated This field will be removed after 2024-07-01. */
  volumeDiscounts: Scalars['Decimal']['output'];
}


export interface VendorPayoutEventsArgs {
  eventTypes: InputMaybe<Array<VendorPayoutEventsEnum>>;
}


export interface VendorPayoutOrdersArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
}


export interface VendorPayoutRefundLinesArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
}

export interface VendorPayoutAddNoteInput {
  /** Note message. */
  message: Scalars['String']['input'];
}

export interface VendorPayoutCountableConnection {
  __typename?: 'VendorPayoutCountableConnection';
  edges: Array<VendorPayoutCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface VendorPayoutCountableEdge {
  __typename?: 'VendorPayoutCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: VendorPayout;
}

/** Creates a VendorPayout for the specified seller in the payout if it does not already exist. */
export interface VendorPayoutCreate {
  __typename?: 'VendorPayoutCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  payoutErrors: Array<PayoutError>;
  /** Vendor Payout that was created. */
  vendorPayout: Maybe<VendorPayout>;
}

export interface VendorPayoutDetails {
  payout?: InputMaybe<Scalars['String']['input']>;
  vendor?: InputMaybe<Scalars['String']['input']>;
}

/** History log of the vendor payout. */
export interface VendorPayoutEvent extends Node {
  __typename?: 'VendorPayoutEvent';
  /** Date when event happened at in ISO 8601 format. */
  createdAt: Scalars['DateTime']['output'];
  /** Date when event happened at in ISO 8601 format. */
  date: Scalars['DateTime']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** Content of the event. */
  message: Maybe<Scalars['String']['output']>;
  parameters: Scalars['JSONString']['output'];
  /** Vendor payout event type. */
  type: VendorPayoutEventsEnum;
  /** Date when event was update at in ISO 8601 format(in case, if event supports updates, for example, NOTE_ADDED). */
  updatedAt: Scalars['DateTime']['output'];
  /** User who performed the action. */
  user: Maybe<User>;
}

export enum VendorPayoutEventsEnum {
  /** A note was added to the vendor payout */
  NoteAdded = 'NOTE_ADDED',
  /** The vendor payout was created. */
  VendorPayoutCreated = 'VENDOR_PAYOUT_CREATED',
  /** The vendor payout email was sent. */
  VendorPayoutEmailSent = 'VENDOR_PAYOUT_EMAIL_SENT',
  /** Vendor payout status was updated. */
  VendorPayoutStatusUpdated = 'VENDOR_PAYOUT_STATUS_UPDATED',
  /** The vendor payout was updated. */
  VendorPayoutUpdated = 'VENDOR_PAYOUT_UPDATED'
}

/** Adds note to the vendor payout. */
export interface VendorPayoutNoteAdd {
  __typename?: 'VendorPayoutNoteAdd';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Created vendor payout event. */
  event: Maybe<VendorPayoutEvent>;
  payoutErrors: Array<PayoutError>;
  /** Vendor Payout that was updated. */
  vendorPayout: Maybe<VendorPayout>;
}

/** Edit a message in even from the vendor payout. */
export interface VendorPayoutNoteUpdate {
  __typename?: 'VendorPayoutNoteUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Updated vendor payout event. */
  event: Maybe<VendorPayoutEvent>;
  payoutErrors: Array<PayoutError>;
  /** Vendor Payout that was updated. */
  vendorPayout: Maybe<VendorPayout>;
}

/** Retrieves an onboarding link for the given vendor from the given gateway if available. */
export interface VendorPayoutOnboardingLinkRequest {
  __typename?: 'VendorPayoutOnboardingLinkRequest';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Onboarding link for the given vendor from the given gateway if available. */
  link: Maybe<Scalars['String']['output']>;
  pluginsErrors: Array<PluginError>;
  /** Vendor that was updated with onboarding link. */
  vendor: Maybe<Vendor>;
}

export interface VendorPayoutReport {
  __typename?: 'VendorPayoutReport';
  excluded: Maybe<VendorPayoutReportSubset>;
  included: Maybe<VendorPayoutReportSubset>;
}

export interface VendorPayoutReportSubset {
  __typename?: 'VendorPayoutReportSubset';
  category: Maybe<Scalars['String']['output']>;
  columns: Maybe<Array<ColumnObjectType>>;
  filters: Maybe<Array<FilterObjectType>>;
  report: Maybe<Array<OrderVendorReportType>>;
  summary: Maybe<OrderVendorSummaryType>;
  title: Maybe<Scalars['String']['output']>;
}

/** An enumeration. */
export enum VendorPayoutStatus {
  /** Error */
  Error = 'ERROR',
  /** Paid */
  Paid = 'PAID',
  /** Unpaid */
  Unpaid = 'UNPAID'
}

export interface VendorPayoutStatusInput {
  payoutAmount: Scalars['String']['input'];
  status: Scalars['String']['input'];
}

/** Modifies the status of a vendor payout */
export interface VendorPayoutStatusUpdate {
  __typename?: 'VendorPayoutStatusUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  payoutErrors: Array<PayoutError>;
  /** Vendor Payout that was updated. */
  vendorPayout: Maybe<VendorPayout>;
}

export interface VendorPayoutUpdateInput {
  adjustmentDirection?: InputMaybe<Scalars['String']['input']>;
  /** Adjustment amount for the vendor payout */
  adjustments?: InputMaybe<Scalars['Decimal']['input']>;
  /** DEPRECATED: Penalty amount for the vendor payout */
  penalties?: InputMaybe<Scalars['Decimal']['input']>;
  /** The ID of the order line. */
  vendorId?: InputMaybe<Scalars['ID']['input']>;
}

export interface VendorPayoutUpdateNoteInput {
  /** Note message. */
  message: Scalars['String']['input'];
}

/** Exclude vendor payouts. */
export interface VendorPayoutsBulkExclude {
  __typename?: 'VendorPayoutsBulkExclude';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  payoutErrors: Array<PayoutError>;
}

/** Include vendor payouts. */
export interface VendorPayoutsBulkInclude {
  __typename?: 'VendorPayoutsBulkInclude';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  payoutErrors: Array<PayoutError>;
}

/** Process vendor payouts. */
export interface VendorPayoutsBulkProcess {
  __typename?: 'VendorPayoutsBulkProcess';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  payoutErrors: Array<PayoutError>;
}

export enum VendorTypeEnum {
  /** Affiliate */
  Affiliate = 'AFFILIATE',
  /** Seller */
  Seller = 'SELLER'
}

/** Verify JWT token. */
export interface VerifyToken {
  __typename?: 'VerifyToken';
  accountErrors: Array<AccountError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Determine if token is valid or not. */
  isValid: Scalars['Boolean']['output'];
  /** JWT payload. */
  payload: Maybe<Scalars['GenericScalar']['output']>;
  /** User assigned to token. */
  user: Maybe<User>;
}

/** Vouchers allow giving discounts to particular customers on categories, collections, or specific products or variants. They can be used during checkout by providing valid voucher codes. */
export interface Voucher extends Node {
  __typename?: 'Voucher';
  applyOncePerCustomer: Scalars['Boolean']['output'];
  applyOncePerOrder: Scalars['Boolean']['output'];
  /** List of categories this voucher applies to. */
  categories: Maybe<CategoryCountableConnection>;
  code: Scalars['String']['output'];
  /** List of collections this voucher applies to. */
  collections: Maybe<CollectionCountableConnection>;
  /** List of countries available for the shipping voucher. */
  countries: Maybe<Array<CountryDisplay>>;
  currency: Scalars['String']['output'];
  discountValue: Scalars['Decimal']['output'];
  /** Determines a type of discount for voucher - value or percentage */
  discountValueType: DiscountValueTypeEnum;
  endDate: Maybe<Scalars['DateTime']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  minCheckoutItemsQuantity: Maybe<Scalars['Int']['output']>;
  minSpent: Maybe<Money>;
  name: Maybe<Scalars['String']['output']>;
  /** List of products this voucher applies to. */
  products: Maybe<ProductCountableConnection>;
  startDate: Scalars['DateTime']['output'];
  /** Determines a type of voucher. */
  type: VoucherTypeEnum;
  usageLimit: Maybe<Scalars['Int']['output']>;
  used: Scalars['Int']['output'];
  /** List of variants this voucher applies to. */
  variants: Maybe<ProductVariantCountableConnection>;
}


/** Vouchers allow giving discounts to particular customers on categories, collections, or specific products or variants. They can be used during checkout by providing valid voucher codes. */
export interface VoucherCategoriesArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
}


/** Vouchers allow giving discounts to particular customers on categories, collections, or specific products or variants. They can be used during checkout by providing valid voucher codes. */
export interface VoucherCollectionsArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
}


/** Vouchers allow giving discounts to particular customers on categories, collections, or specific products or variants. They can be used during checkout by providing valid voucher codes. */
export interface VoucherProductsArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
}


/** Vouchers allow giving discounts to particular customers on categories, collections, or specific products or variants. They can be used during checkout by providing valid voucher codes. */
export interface VoucherVariantsArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
}

/** Adds products, variants, categories, or collections to a voucher. */
export interface VoucherAddCatalogues {
  __typename?: 'VoucherAddCatalogues';
  discountErrors: Array<DiscountError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Voucher of which catalogue IDs will be modified. */
  voucher: Maybe<Voucher>;
}

/** Deletes vouchers. */
export interface VoucherBulkDelete {
  __typename?: 'VoucherBulkDelete';
  /** Returns how many objects were affected. */
  count: Scalars['Int']['output'];
  discountErrors: Array<DiscountError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
}

export interface VoucherCountableConnection {
  __typename?: 'VoucherCountableConnection';
  edges: Array<VoucherCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface VoucherCountableEdge {
  __typename?: 'VoucherCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Voucher;
}

/** Creates a new voucher. */
export interface VoucherCreate {
  __typename?: 'VoucherCreate';
  discountErrors: Array<DiscountError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  voucher: Maybe<Voucher>;
}

/** Deletes a voucher. */
export interface VoucherDelete {
  __typename?: 'VoucherDelete';
  discountErrors: Array<DiscountError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  voucher: Maybe<Voucher>;
}

export enum VoucherDiscountType {
  Fixed = 'FIXED',
  Percentage = 'PERCENTAGE',
  Shipping = 'SHIPPING'
}

export interface VoucherFilterInput {
  discountType?: InputMaybe<Array<VoucherDiscountType>>;
  search?: InputMaybe<Scalars['String']['input']>;
  started?: InputMaybe<DateTimeRangeInput>;
  status?: InputMaybe<Array<DiscountStatusEnum>>;
  timesUsed?: InputMaybe<IntRangeInput>;
}

export interface VoucherInput {
  /** Voucher should be applied once per customer. */
  applyOncePerCustomer?: InputMaybe<Scalars['Boolean']['input']>;
  /** Voucher should be applied to the cheapest item or entire order. */
  applyOncePerOrder?: InputMaybe<Scalars['Boolean']['input']>;
  /** Categories discounted by the voucher. */
  categories?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Code to use the voucher. */
  code?: InputMaybe<Scalars['String']['input']>;
  /** Collections discounted by the voucher. */
  collections?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Country codes that can be used with the shipping voucher. */
  countries?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Value of the voucher. */
  discountValue?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** Choices: fixed or percentage. */
  discountValueType?: InputMaybe<DiscountValueTypeEnum>;
  /** End date of the voucher in ISO 8601 format. */
  endDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Min purchase amount required to apply the voucher. */
  minAmountSpent?: InputMaybe<Scalars['PositiveDecimal']['input']>;
  /** Minimal quantity of checkout items required to apply the voucher. */
  minCheckoutItemsQuantity?: InputMaybe<Scalars['Int']['input']>;
  /** Voucher name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Products discounted by the voucher. */
  products?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Start date of the voucher in ISO 8601 format. */
  startDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Voucher type: PRODUCT, CATEGORY SHIPPING or ENTIRE_ORDER. */
  type?: InputMaybe<VoucherTypeEnum>;
  /** Limit number of times this voucher can be used in total. */
  usageLimit?: InputMaybe<Scalars['Int']['input']>;
  /** Variants discounted by the voucher. */
  variants?: InputMaybe<Array<Scalars['ID']['input']>>;
}

/** Removes products, variants, categories, or collections from a voucher. */
export interface VoucherRemoveCatalogues {
  __typename?: 'VoucherRemoveCatalogues';
  discountErrors: Array<DiscountError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** Voucher of which catalogue IDs will be modified. */
  voucher: Maybe<Voucher>;
}

export enum VoucherSortField {
  /** Sort vouchers by code. */
  Code = 'CODE',
  /** Sort vouchers by end date. */
  EndDate = 'END_DATE',
  /** Sort vouchers by minimum spent amount. */
  MinimumSpentAmount = 'MINIMUM_SPENT_AMOUNT',
  /** Sort vouchers by start date. */
  StartDate = 'START_DATE',
  /** Sort vouchers by type. */
  Type = 'TYPE',
  /** Sort vouchers by usage limit. */
  UsageLimit = 'USAGE_LIMIT',
  /** Sort vouchers by value. */
  Value = 'VALUE'
}

export interface VoucherSortingInput {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort vouchers by the selected field. */
  field: VoucherSortField;
}

/** An enumeration. */
export enum VoucherTypeEnum {
  EntireOrder = 'ENTIRE_ORDER',
  Shipping = 'SHIPPING',
  SpecificProduct = 'SPECIFIC_PRODUCT'
}

/** Updates a voucher. */
export interface VoucherUpdate {
  __typename?: 'VoucherUpdate';
  discountErrors: Array<DiscountError>;
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  voucher: Maybe<Voucher>;
}

/** Represents warehouse. */
export interface Warehouse extends Node, ObjectWithMetadata {
  __typename?: 'Warehouse';
  address: Address;
  companyName: Scalars['String']['output'];
  email: Scalars['String']['output'];
  externalId: Maybe<Scalars['String']['output']>;
  externalSource: Maybe<Scalars['String']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** List of public metadata items. Can be accessed without permissions. */
  metadata: Array<MetadataItem>;
  name: Scalars['String']['output'];
  /** List of private metadata items.Requires proper staff permissions to access. */
  privateMetadata: Array<MetadataItem>;
  seller: Maybe<Seller>;
  shippingZones: ShippingZoneCountableConnection;
  slug: Scalars['String']['output'];
}


/** Represents warehouse. */
export interface WarehouseShippingZonesArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
  offset: InputMaybe<Scalars['Int']['input']>;
}

export interface WarehouseAddressInput {
  /** City. */
  city: Scalars['String']['input'];
  /** District. */
  cityArea?: InputMaybe<Scalars['String']['input']>;
  /** Country. */
  country: CountryCode;
  /** State or province. */
  countryArea?: InputMaybe<Scalars['String']['input']>;
  /** Phone number. */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** Postal code. */
  postalCode?: InputMaybe<Scalars['String']['input']>;
  /** Address. */
  streetAddress1: Scalars['String']['input'];
  /** Address. */
  streetAddress2?: InputMaybe<Scalars['String']['input']>;
}

export interface WarehouseCountableConnection {
  __typename?: 'WarehouseCountableConnection';
  edges: Array<WarehouseCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface WarehouseCountableEdge {
  __typename?: 'WarehouseCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Warehouse;
}

/** Creates new warehouse. */
export interface WarehouseCreate {
  __typename?: 'WarehouseCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  warehouse: Maybe<Warehouse>;
  warehouseErrors: Array<WarehouseError>;
}

export interface WarehouseCreateInput {
  /** Shipping zones to assign to the warehouse. */
  addShippingZones?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Address of the warehouse. */
  address: WarehouseAddressInput;
  /** Company name. */
  companyName?: InputMaybe<Scalars['String']['input']>;
  /** The email address of the warehouse. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** External ID of a warehouse if originating outside of the system. */
  externalId?: InputMaybe<Scalars['String']['input']>;
  /** External source of a warehouse if originating outside of the system. */
  externalSource?: InputMaybe<Scalars['String']['input']>;
  /** Warehouse name. */
  name: Scalars['String']['input'];
  /** Seller ID */
  seller?: InputMaybe<Scalars['ID']['input']>;
  /** Warehouse slug. */
  slug?: InputMaybe<Scalars['String']['input']>;
}

/** Deletes selected warehouse. */
export interface WarehouseDelete {
  __typename?: 'WarehouseDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  warehouse: Maybe<Warehouse>;
  warehouseErrors: Array<WarehouseError>;
}

export interface WarehouseError {
  __typename?: 'WarehouseError';
  /** The error code. */
  code: WarehouseErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message: Scalars['String']['output'];
}

/** An enumeration. */
export enum WarehouseErrorCode {
  AlreadyExists = 'ALREADY_EXISTS',
  DuplicatedInputItem = 'DUPLICATED_INPUT_ITEM',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export interface WarehouseFilterInput {
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
}

export enum WarehouseSortField {
  /** Sort warehouses by name. */
  Name = 'NAME'
}

export interface WarehouseSortingInput {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort warehouses by the selected field. */
  field: WarehouseSortField;
}

/** Product stock stats for a specific warehouse including all variants */
export interface WarehouseStats {
  __typename?: 'WarehouseStats';
  /** Total quantity of variants stocks associated with the warehouse (including allocated). */
  quantity: Scalars['Int']['output'];
  /** Quantity of variants stocks at the warehouse that has been allocated to orders. */
  quantityAllocated: Scalars['Int']['output'];
  /** Quantity of variants stocks at the warehouse that is available for purchase. */
  quantityAvailable: Scalars['Int']['output'];
  /** Warehouse ID */
  warehouseId: Scalars['ID']['output'];
}

/** Updates given warehouse. */
export interface WarehouseUpdate {
  __typename?: 'WarehouseUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  warehouse: Maybe<Warehouse>;
  warehouseErrors: Array<WarehouseError>;
}

export interface WarehouseUpdateInput {
  /** Shipping zones to assign to the warehouse. */
  addShippingZones?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Address of the warehouse. */
  address?: InputMaybe<WarehouseAddressInput>;
  /** Company name. */
  companyName?: InputMaybe<Scalars['String']['input']>;
  /** The email address of the warehouse. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** External ID of a warehouse if originating outside of the system. */
  externalId?: InputMaybe<Scalars['String']['input']>;
  /** External source of a warehouse if originating outside of the system. */
  externalSource?: InputMaybe<Scalars['String']['input']>;
  /** Warehouse name. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Shipping zones to unassign from the warehouse. */
  removeShippingZones?: InputMaybe<Array<Scalars['ID']['input']>>;
  /** Seller ID */
  seller?: InputMaybe<Scalars['ID']['input']>;
  /** Warehouse slug. */
  slug?: InputMaybe<Scalars['String']['input']>;
}

/** Webhook. */
export interface Webhook extends Node {
  __typename?: 'Webhook';
  app: App;
  connectionString: Maybe<Scalars['String']['output']>;
  /** List of webhook events. */
  events: Array<WebhookEvent>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  isActive: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  queueName: Maybe<Scalars['String']['output']>;
  secretKey: Maybe<Scalars['String']['output']>;
  targetUrl: Scalars['String']['output'];
}

/** Creates a new webhook subscription. */
export interface WebhookCreate {
  __typename?: 'WebhookCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  webhook: Maybe<Webhook>;
  webhookErrors: Array<WebhookError>;
}

export interface WebhookCreateInput {
  /** ID of the app to which webhook belongs. */
  app?: InputMaybe<Scalars['ID']['input']>;
  /** The connection string or service key json string for third party queue services. */
  connectionString?: InputMaybe<Scalars['String']['input']>;
  /** The events that webhook wants to subscribe. The CHECKOUT_QUANTITY_CHANGED is depreacted. It will be removed in Nautical 3.0 */
  events?: InputMaybe<Array<WebhookEventTypeEnum>>;
  /** Determine if webhook will be set active or not. */
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** The name of the webhook. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The queue name for Microsoft Azure ServiceBus connection */
  queueName?: InputMaybe<Scalars['String']['input']>;
  /** The secret key used to create a hash signature with each payload. */
  secretKey?: InputMaybe<Scalars['String']['input']>;
  /**
   * DEPRECATED: Use the `app` field instead. This field will be removed after 2020-07-31.
   * @deprecated Use the `app` field instead.
   */
  serviceAccount?: InputMaybe<Scalars['ID']['input']>;
  /** The url to receive the payload. */
  targetUrl?: InputMaybe<Scalars['String']['input']>;
}

/** Deletes a webhook subscription. */
export interface WebhookDelete {
  __typename?: 'WebhookDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  webhook: Maybe<Webhook>;
  webhookErrors: Array<WebhookError>;
}

export enum WebhookDirectionEnum {
  /** Webhook has been sent */
  Emitted = 'EMITTED',
  /** Webhook has been received */
  Received = 'RECEIVED'
}

export interface WebhookError {
  __typename?: 'WebhookError';
  /** The error code. */
  code: WebhookErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message: Scalars['String']['output'];
}

/** An enumeration. */
export enum WebhookErrorCode {
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

/** Webhook event. */
export interface WebhookEvent {
  __typename?: 'WebhookEvent';
  /** Internal name of the event type. */
  eventType: WebhookEventTypeEnum;
  /** Display name of the event. */
  name: Scalars['String']['output'];
}

/** History log of all webhook events. */
export interface WebhookEventLog extends Node {
  __typename?: 'WebhookEventLog';
  appId: Maybe<Scalars['String']['output']>;
  /** Created event time. Naming is used to keep consistent with OrderEvent/SellerEvent naming */
  date: Scalars['DateTime']['output'];
  /** Describes the direction of the logged webhook (RECEIVED or EMITTED) */
  direction: Maybe<WebhookDirectionEnum>;
  error: Maybe<Scalars['String']['output']>;
  eventType: Scalars['String']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  payload: Scalars['JSONString']['output'];
  pluginId: Maybe<Scalars['String']['output']>;
  targetUrl: Maybe<Scalars['String']['output']>;
  /** Expect a generic webhook transaction id only if direction is EMITTED */
  transactionId: Maybe<Scalars['String']['output']>;
  /** Expect a webhook_id only if direction is EMITTED */
  webhookId: Maybe<Scalars['String']['output']>;
}

export interface WebhookEventLogCountableConnection {
  __typename?: 'WebhookEventLogCountableConnection';
  edges: Array<WebhookEventLogCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface WebhookEventLogCountableEdge {
  __typename?: 'WebhookEventLogCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: WebhookEventLog;
}

/** An enumeration. */
export enum WebhookEventTypeEnum {
  AgreementCreated = 'AGREEMENT_CREATED',
  AgreementDeleted = 'AGREEMENT_DELETED',
  AgreementUpdated = 'AGREEMENT_UPDATED',
  AnyEvents = 'ANY_EVENTS',
  CategoryCreated = 'CATEGORY_CREATED',
  CategoryDeleted = 'CATEGORY_DELETED',
  CategoryUpdated = 'CATEGORY_UPDATED',
  CheckoutCreated = 'CHECKOUT_CREATED',
  CheckoutUpdated = 'CHECKOUT_UPDATED',
  CollectionCreated = 'COLLECTION_CREATED',
  CollectionDeleted = 'COLLECTION_DELETED',
  CollectionUpdated = 'COLLECTION_UPDATED',
  CustomerCreated = 'CUSTOMER_CREATED',
  CustomerDeleted = 'CUSTOMER_DELETED',
  CustomerUpdated = 'CUSTOMER_UPDATED',
  FulfillmentCreated = 'FULFILLMENT_CREATED',
  InvoiceDeleted = 'INVOICE_DELETED',
  InvoiceRequested = 'INVOICE_REQUESTED',
  InvoiceSent = 'INVOICE_SENT',
  MicrositeCreated = 'MICROSITE_CREATED',
  MicrositeUpdated = 'MICROSITE_UPDATED',
  NauticalOrderCancelled = 'NAUTICAL_ORDER_CANCELLED',
  NauticalOrderCreated = 'NAUTICAL_ORDER_CREATED',
  NauticalOrderFulfilled = 'NAUTICAL_ORDER_FULFILLED',
  NauticalOrderFullyPaid = 'NAUTICAL_ORDER_FULLY_PAID',
  NauticalOrderUpdated = 'NAUTICAL_ORDER_UPDATED',
  OrderCancelled = 'ORDER_CANCELLED',
  OrderCreated = 'ORDER_CREATED',
  OrderFulfilled = 'ORDER_FULFILLED',
  OrderFullyPaid = 'ORDER_FULLY_PAID',
  OrderUpdated = 'ORDER_UPDATED',
  PaymentCreated = 'PAYMENT_CREATED',
  PaymentUpdated = 'PAYMENT_UPDATED',
  PayoutCreated = 'PAYOUT_CREATED',
  PayoutDeleted = 'PAYOUT_DELETED',
  PayoutUpdated = 'PAYOUT_UPDATED',
  PriceBookCreated = 'PRICE_BOOK_CREATED',
  PriceBookUpdated = 'PRICE_BOOK_UPDATED',
  ProductCreated = 'PRODUCT_CREATED',
  ProductDeleted = 'PRODUCT_DELETED',
  ProductUpdated = 'PRODUCT_UPDATED',
  RefundCreated = 'REFUND_CREATED',
  RefundDeleted = 'REFUND_DELETED',
  RefundUpdated = 'REFUND_UPDATED',
  SellerAgreementAcknowledged = 'SELLER_AGREEMENT_ACKNOWLEDGED',
  SellerCreated = 'SELLER_CREATED',
  SellerUpdated = 'SELLER_UPDATED',
  StockAllocated = 'STOCK_ALLOCATED',
  StockCreated = 'STOCK_CREATED',
  StockDeallocated = 'STOCK_DEALLOCATED',
  StockDeleted = 'STOCK_DELETED',
  StockUpdated = 'STOCK_UPDATED',
  VariantCreated = 'VARIANT_CREATED',
  VariantDeleted = 'VARIANT_DELETED',
  VariantUpdated = 'VARIANT_UPDATED',
  VendorPayoutCreated = 'VENDOR_PAYOUT_CREATED',
  VendorPayoutUpdated = 'VENDOR_PAYOUT_UPDATED',
  WarehouseCreated = 'WAREHOUSE_CREATED',
  WarehouseDeleted = 'WAREHOUSE_DELETED',
  WarehouseUpdated = 'WAREHOUSE_UPDATED'
}

/** Represents job data of incoming webhook. */
export interface WebhookJob extends Job, Node {
  __typename?: 'WebhookJob';
  body: Maybe<Scalars['JSONString']['output']>;
  /** Created date time of job in ISO 8601 format. */
  createdAt: Scalars['DateTime']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  marketplaceEntityLink: Maybe<Scalars['String']['output']>;
  /** Job message. */
  message: Maybe<Scalars['String']['output']>;
  requestMeta: Maybe<Scalars['JSONString']['output']>;
  seller: Maybe<Seller>;
  source: Maybe<Scalars['String']['output']>;
  /** Job status. */
  status: JobStatusEnum;
  type: Maybe<GenericWebhookTransactionType>;
  /** Date time of job last update in ISO 8601 format. */
  updatedAt: Scalars['DateTime']['output'];
  vendorEntityLink: Maybe<Scalars['String']['output']>;
}

export interface WebhookJobCountableConnection {
  __typename?: 'WebhookJobCountableConnection';
  edges: Array<WebhookJobCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface WebhookJobCountableEdge {
  __typename?: 'WebhookJobCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: WebhookJob;
}

export interface WebhookJobFilterInput {
  created?: InputMaybe<DateRangeInput>;
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  source?: InputMaybe<Array<WebhookJobSource>>;
  status?: InputMaybe<Array<WebhookJobStatus>>;
  type?: InputMaybe<Array<WebhookJobType>>;
}

export enum WebhookJobSortField {
  /** Sort webhook jobs by created at. */
  CreatedAt = 'CREATED_AT',
  /** Sort webhook jobs by source. */
  Source = 'SOURCE',
  /** Sort webhook jobs by status. */
  Status = 'STATUS',
  /** Sort webhook jobs by type. */
  Type = 'TYPE'
}

export interface WebhookJobSortingInput {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort webhook_jobs by the selected field. */
  field: WebhookJobSortField;
}

export enum WebhookJobSource {
  Default = 'DEFAULT',
  Shopify = 'SHOPIFY'
}

export enum WebhookJobStatus {
  Deleted = 'DELETED',
  Failed = 'FAILED',
  Pending = 'PENDING',
  Success = 'SUCCESS'
}

export enum WebhookJobType {
  OrderCreate = 'ORDER_CREATE',
  OrderUpdate = 'ORDER_UPDATE'
}

/** Represents a periodic task run by django celery beat */
export interface WebhookPeriodicTask extends Node {
  __typename?: 'WebhookPeriodicTask';
  /** JSON encoded positional arguments (Example: ["arg1", "arg2"]) */
  args: Scalars['String']['output'];
  /** Datetime that this PeriodicTask was last modified */
  dateChanged: Scalars['DateTime']['output'];
  /** Detailed description about the details of this Periodic Task */
  description: Scalars['String']['output'];
  /** Set to False to disable the schedule */
  enabled: Scalars['Boolean']['output'];
  /** Override Exchange for low-level AMQP routing */
  exchange: Maybe<Scalars['String']['output']>;
  /** Timedelta with seconds which the schedule will no longer trigger the task to run */
  expireSeconds: Maybe<Scalars['Int']['output']>;
  /** Datetime after which the schedule will no longer trigger the task to run */
  expires: Maybe<Scalars['DateTime']['output']>;
  /** JSON encoded message headers for the AMQP message. */
  headers: Scalars['String']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  /** JSON encoded keyword arguments (Example: {"argument": "value"}) */
  kwargs: Scalars['String']['output'];
  /** Datetime that the schedule last triggered the task to run. Reset to None if enabled is set to False. */
  lastRunAt: Maybe<Scalars['DateTime']['output']>;
  /** Short Description For This Task */
  name: Scalars['String']['output'];
  /** If True, the schedule will only run the task a single time */
  oneOff: Scalars['Boolean']['output'];
  /** Priority Number between 0 and 255. Supported by: RabbitMQ, Redis (priority reversed, 0 is highest). */
  priority: Maybe<Scalars['Int']['output']>;
  /** Queue defined in CELERY_TASK_QUEUES. Leave None for default queuing. */
  queue: Maybe<Scalars['String']['output']>;
  /** Override Routing Key for low-level AMQP routing */
  routingKey: Maybe<Scalars['String']['output']>;
  /** Datetime when the schedule should begin triggering the task to run */
  startTime: Maybe<Scalars['DateTime']['output']>;
  /** The Name of the Celery Task that Should be Run.  (Example: "proj.tasks.import_contacts") */
  task: Scalars['String']['output'];
  /** Running count of how many times the schedule has triggered the task */
  totalRunCount: Scalars['Int']['output'];
}

/** An enumeration. */
export enum WebhookSampleEventTypeEnum {
  AgreementCreated = 'AGREEMENT_CREATED',
  AgreementDeleted = 'AGREEMENT_DELETED',
  AgreementUpdated = 'AGREEMENT_UPDATED',
  CategoryCreated = 'CATEGORY_CREATED',
  CategoryDeleted = 'CATEGORY_DELETED',
  CategoryUpdated = 'CATEGORY_UPDATED',
  CheckoutCreated = 'CHECKOUT_CREATED',
  CheckoutUpdated = 'CHECKOUT_UPDATED',
  CollectionCreated = 'COLLECTION_CREATED',
  CollectionDeleted = 'COLLECTION_DELETED',
  CollectionUpdated = 'COLLECTION_UPDATED',
  CustomerCreated = 'CUSTOMER_CREATED',
  CustomerDeleted = 'CUSTOMER_DELETED',
  CustomerUpdated = 'CUSTOMER_UPDATED',
  FulfillmentCreated = 'FULFILLMENT_CREATED',
  InvoiceDeleted = 'INVOICE_DELETED',
  InvoiceRequested = 'INVOICE_REQUESTED',
  InvoiceSent = 'INVOICE_SENT',
  MicrositeCreated = 'MICROSITE_CREATED',
  MicrositeUpdated = 'MICROSITE_UPDATED',
  NauticalOrderCancelled = 'NAUTICAL_ORDER_CANCELLED',
  NauticalOrderCreated = 'NAUTICAL_ORDER_CREATED',
  NauticalOrderFulfilled = 'NAUTICAL_ORDER_FULFILLED',
  NauticalOrderFullyPaid = 'NAUTICAL_ORDER_FULLY_PAID',
  NauticalOrderUpdated = 'NAUTICAL_ORDER_UPDATED',
  OrderCancelled = 'ORDER_CANCELLED',
  OrderCreated = 'ORDER_CREATED',
  OrderFulfilled = 'ORDER_FULFILLED',
  OrderFullyPaid = 'ORDER_FULLY_PAID',
  OrderUpdated = 'ORDER_UPDATED',
  PaymentCreated = 'PAYMENT_CREATED',
  PaymentUpdated = 'PAYMENT_UPDATED',
  PayoutCreated = 'PAYOUT_CREATED',
  PayoutDeleted = 'PAYOUT_DELETED',
  PayoutUpdated = 'PAYOUT_UPDATED',
  PriceBookCreated = 'PRICE_BOOK_CREATED',
  PriceBookUpdated = 'PRICE_BOOK_UPDATED',
  ProductCreated = 'PRODUCT_CREATED',
  ProductDeleted = 'PRODUCT_DELETED',
  ProductUpdated = 'PRODUCT_UPDATED',
  RefundCreated = 'REFUND_CREATED',
  RefundDeleted = 'REFUND_DELETED',
  RefundUpdated = 'REFUND_UPDATED',
  SellerAgreementAcknowledged = 'SELLER_AGREEMENT_ACKNOWLEDGED',
  SellerCreated = 'SELLER_CREATED',
  SellerUpdated = 'SELLER_UPDATED',
  StockAllocated = 'STOCK_ALLOCATED',
  StockCreated = 'STOCK_CREATED',
  StockDeallocated = 'STOCK_DEALLOCATED',
  StockDeleted = 'STOCK_DELETED',
  StockUpdated = 'STOCK_UPDATED',
  VariantCreated = 'VARIANT_CREATED',
  VariantDeleted = 'VARIANT_DELETED',
  VariantUpdated = 'VARIANT_UPDATED',
  VendorPayoutCreated = 'VENDOR_PAYOUT_CREATED',
  VendorPayoutUpdated = 'VENDOR_PAYOUT_UPDATED',
  WarehouseCreated = 'WAREHOUSE_CREATED',
  WarehouseDeleted = 'WAREHOUSE_DELETED',
  WarehouseUpdated = 'WAREHOUSE_UPDATED'
}

/** Updates a webhook subscription. */
export interface WebhookUpdate {
  __typename?: 'WebhookUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  webhook: Maybe<Webhook>;
  webhookErrors: Array<WebhookError>;
}

export interface WebhookUpdateInput {
  /** ID of the app to which webhook belongs. */
  app?: InputMaybe<Scalars['ID']['input']>;
  /** The connection string or service key json string for third party queue services. */
  connectionString?: InputMaybe<Scalars['String']['input']>;
  /** The events that webhook wants to subscribe. The CHECKOUT_QUANTITY_CHANGED is depreacted. It will be removed in Nautical 3.0 */
  events?: InputMaybe<Array<WebhookEventTypeEnum>>;
  /** Determine if webhook will be set active or not. */
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  /** The new name of the webhook. */
  name?: InputMaybe<Scalars['String']['input']>;
  /** The queue name for Microsoft Azure ServiceBus connection */
  queueName?: InputMaybe<Scalars['String']['input']>;
  /** Use to create a hash signature with each payload. */
  secretKey?: InputMaybe<Scalars['String']['input']>;
  /**
   * DEPRECATED: Use the `app` field instead. This field will be removed after 2020-07-31.
   * @deprecated Use the `app` field instead.
   */
  serviceAccount?: InputMaybe<Scalars['ID']['input']>;
  /** The url to receive the payload. */
  targetUrl?: InputMaybe<Scalars['String']['input']>;
}

/** Represents weight value in a specific weight unit. */
export interface Weight {
  __typename?: 'Weight';
  /** Weight unit. */
  unit: WeightUnitsEnum;
  /** Weight value. */
  value: Scalars['Float']['output'];
}

/** An enumeration. */
export enum WeightUnitsEnum {
  G = 'G',
  Kg = 'KG',
  Lb = 'LB',
  Oz = 'OZ'
}

/** Wishlist item. */
export interface Wishlist extends Node {
  __typename?: 'Wishlist';
  createdAt: Scalars['DateTime']['output'];
  /** The ID of the object */
  id: Scalars['ID']['output'];
  isDefault: Scalars['Boolean']['output'];
  /** List of the wishlist's items. */
  items: Maybe<WishlistItemCountableConnection>;
  name: Scalars['String']['output'];
  user: Maybe<User>;
}


/** Wishlist item. */
export interface WishlistItemsArgs {
  after: InputMaybe<Scalars['String']['input']>;
  before: InputMaybe<Scalars['String']['input']>;
  first: InputMaybe<Scalars['Int']['input']>;
  last: InputMaybe<Scalars['Int']['input']>;
}

/** Add product to the current user's or target user's wishlist. */
export interface WishlistAddProductMutation {
  __typename?: 'WishlistAddProductMutation';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** The wishlist of the current user. */
  wishlist: Maybe<Array<WishlistItem>>;
  wishlistErrors: Array<WishlistError>;
}

/** Add product variant to the current user's wishlist. */
export interface WishlistAddProductVariantMutation {
  __typename?: 'WishlistAddProductVariantMutation';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** The wishlist of the current user. */
  wishlist: Maybe<Array<WishlistItem>>;
  wishlistErrors: Array<WishlistError>;
}

export interface WishlistBuyerInput {
  /** Name for the new wishlist. */
  name: Scalars['String']['input'];
  /** user id of the buyer the wishlist is being created for */
  user: Scalars['ID']['input'];
}

export interface WishlistCountableConnection {
  __typename?: 'WishlistCountableConnection';
  edges: Array<WishlistCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface WishlistCountableEdge {
  __typename?: 'WishlistCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: Wishlist;
}

/** Creates a new wishlist */
export interface WishlistCreate {
  __typename?: 'WishlistCreate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  wishlist: Maybe<Wishlist>;
  wishlistErrors: Array<WishlistError>;
}

/** Creates a new wishlist for any buyer if requestor is MPO */
export interface WishlistCreateForBuyer {
  __typename?: 'WishlistCreateForBuyer';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  wishlist: Maybe<Wishlist>;
  wishlistErrors: Array<WishlistError>;
}

/** Update a wishlist */
export interface WishlistDelete {
  __typename?: 'WishlistDelete';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  wishlist: Maybe<Wishlist>;
  wishlistErrors: Array<WishlistError>;
}

export interface WishlistError {
  __typename?: 'WishlistError';
  /** The error code. */
  code: WishlistErrorCode;
  /** Name of a field that caused the error. A value of `null` indicates that the error isn't associated with a particular field. */
  field: Maybe<Scalars['String']['output']>;
  /** The error message. */
  message: Scalars['String']['output'];
}

/** An enumeration. */
export enum WishlistErrorCode {
  Forbidden = 'FORBIDDEN',
  GraphqlError = 'GRAPHQL_ERROR',
  Invalid = 'INVALID',
  NotFound = 'NOT_FOUND',
  Required = 'REQUIRED',
  Unique = 'UNIQUE'
}

export interface WishlistInput {
  /** Name for the new wishlist. */
  name: Scalars['String']['input'];
}

/** Wishlist item. */
export interface WishlistItem extends Node {
  __typename?: 'WishlistItem';
  expiryDate: Maybe<Scalars['DateTime']['output']>;
  /** The ID of the object */
  id: Scalars['ID']['output'];
  note: Maybe<Scalars['String']['output']>;
  product: Maybe<Product>;
  quantity: Scalars['Int']['output'];
  /** Requested price for the WishlistItem. */
  requestedPrice: Maybe<Money>;
  variant: Maybe<ProductVariant>;
  wishlist: Wishlist;
}

export interface WishlistItemCountableConnection {
  __typename?: 'WishlistItemCountableConnection';
  edges: Array<WishlistItemCountableEdge>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
  /** A total count of items in the collection. */
  totalCount: Maybe<Scalars['Int']['output']>;
}

export interface WishlistItemCountableEdge {
  __typename?: 'WishlistItemCountableEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node: WishlistItem;
}

export interface WishlistItemInputFilter {
  expiry?: InputMaybe<DateRangeInput>;
}

export enum WishlistItemSortField {
  /** Sort wishlist items by created at. */
  CreatedAt = 'CREATED_AT'
}

export interface WishlistItemSortingInput {
  /** Specifies the direction in which to sort products. */
  direction: OrderDirection;
  /** Sort wishlist items by the selected field. */
  field: WishlistItemSortField;
}

/** Update a wishlist item */
export interface WishlistItemUpdate {
  __typename?: 'WishlistItemUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  wishlistErrors: Array<WishlistError>;
  wishlistItem: Maybe<WishlistItem>;
}

export interface WishlistItemUpdateInput {
  /** Date when this item in the wishlist will expire. */
  expiryDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Note for the item in the wishlist. */
  note?: InputMaybe<Scalars['String']['input']>;
  /** The number of items. */
  quantity?: InputMaybe<Scalars['Int']['input']>;
  /** The requested price for this item in latest transaction currency. */
  requestedPriceAmount?: InputMaybe<Scalars['PositiveDecimal']['input']>;
}

/** Remove product from the current user's wishlist. */
export interface WishlistRemoveProductMutation {
  __typename?: 'WishlistRemoveProductMutation';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** The wishlist of the current user. */
  wishlist: Maybe<Array<WishlistItem>>;
  wishlistErrors: Array<WishlistError>;
}

/** Remove product variant from the current user's wishlist. */
export interface WishlistRemoveProductVariantMutation {
  __typename?: 'WishlistRemoveProductVariantMutation';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** The wishlist of the current user. */
  wishlist: Maybe<Array<WishlistItem>>;
  wishlistErrors: Array<WishlistError>;
}

/** Set default wishlist for the user. */
export interface WishlistSetDefault {
  __typename?: 'WishlistSetDefault';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  /** The update wishlist. */
  wishlist: Maybe<Wishlist>;
  wishlistErrors: Array<WishlistError>;
}

/** Update a wishlist */
export interface WishlistUpdate {
  __typename?: 'WishlistUpdate';
  /**
   * List of errors that occurred executing the mutation.
   * @deprecated Use typed errors with error codes. This field will be removed after 2023-12-16.
   */
  errors: Array<Error>;
  wishlist: Maybe<Wishlist>;
  wishlistErrors: Array<WishlistError>;
}

export type _Entity = Address | App | Bid | CatalogImportProcess | CatalogImportProcessLogRecord | Category | Collection | Group | Location | Microsite | Product | ProductImage | ProductType | ProductVariant | User | Wishlist | WishlistItem;

export interface _Service {
  __typename?: '_Service';
  sdl: Maybe<Scalars['String']['output']>;
}

export type PageByIdQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type PageByIdQuery = { __typename?: 'Query', page: { __typename?: 'Page', id: string, content: string } | null };

export type PagensPagenWorpressQueryVariables = Exact<{ [key: string]: never; }>;


export type PagensPagenWorpressQuery = { __typename?: 'Query', pages: { __typename?: 'PageCountableConnection', edges: Array<{ __typename?: 'PageCountableEdge', node: { __typename?: 'Page', id: string, content: string } }> } | null };
