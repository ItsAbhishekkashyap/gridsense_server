
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Panel
 * 
 */
export type Panel = $Result.DefaultSelection<Prisma.$PanelPayload>
/**
 * Model PanelReading
 * 
 */
export type PanelReading = $Result.DefaultSelection<Prisma.$PanelReadingPayload>
/**
 * Model Alert
 * 
 */
export type Alert = $Result.DefaultSelection<Prisma.$AlertPayload>
/**
 * Model DailySummary
 * 
 */
export type DailySummary = $Result.DefaultSelection<Prisma.$DailySummaryPayload>
/**
 * Model SystemConfig
 * 
 */
export type SystemConfig = $Result.DefaultSelection<Prisma.$SystemConfigPayload>
/**
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>
/**
 * Model PaymentHistory
 * 
 */
export type PaymentHistory = $Result.DefaultSelection<Prisma.$PaymentHistoryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Plan: {
  FREE: 'FREE',
  STARTER: 'STARTER',
  PRO: 'PRO',
  ENTERPRISE: 'ENTERPRISE'
};

export type Plan = (typeof Plan)[keyof typeof Plan]


export const FaultType: {
  NONE: 'NONE',
  DUST: 'DUST',
  TEMPERATURE_SPIKE: 'TEMPERATURE_SPIKE',
  PARTIAL_SHADING: 'PARTIAL_SHADING',
  INVERTER_FAULT: 'INVERTER_FAULT',
  WIRING_ISSUE: 'WIRING_ISSUE'
};

export type FaultType = (typeof FaultType)[keyof typeof FaultType]


export const AlertSeverity: {
  CRITICAL: 'CRITICAL',
  WARNING: 'WARNING',
  INFO: 'INFO'
};

export type AlertSeverity = (typeof AlertSeverity)[keyof typeof AlertSeverity]


export const AlertCategory: {
  DUST: 'DUST',
  TEMPERATURE: 'TEMPERATURE',
  SHADING: 'SHADING',
  INVERTER: 'INVERTER',
  WIRING: 'WIRING',
  NORMAL: 'NORMAL'
};

export type AlertCategory = (typeof AlertCategory)[keyof typeof AlertCategory]


export const SubscriptionStatus: {
  ACTIVE: 'ACTIVE',
  EXPIRED: 'EXPIRED',
  CANCELLED: 'CANCELLED',
  PENDING: 'PENDING'
};

export type SubscriptionStatus = (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus]


export const PaymentStatus: {
  PENDING: 'PENDING',
  CAPTURED: 'CAPTURED',
  FAILED: 'FAILED',
  REFUNDED: 'REFUNDED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]

}

export type Plan = $Enums.Plan

export const Plan: typeof $Enums.Plan

export type FaultType = $Enums.FaultType

export const FaultType: typeof $Enums.FaultType

export type AlertSeverity = $Enums.AlertSeverity

export const AlertSeverity: typeof $Enums.AlertSeverity

export type AlertCategory = $Enums.AlertCategory

export const AlertCategory: typeof $Enums.AlertCategory

export type SubscriptionStatus = $Enums.SubscriptionStatus

export const SubscriptionStatus: typeof $Enums.SubscriptionStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs>;

  /**
   * `prisma.panel`: Exposes CRUD operations for the **Panel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Panels
    * const panels = await prisma.panel.findMany()
    * ```
    */
  get panel(): Prisma.PanelDelegate<ExtArgs>;

  /**
   * `prisma.panelReading`: Exposes CRUD operations for the **PanelReading** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PanelReadings
    * const panelReadings = await prisma.panelReading.findMany()
    * ```
    */
  get panelReading(): Prisma.PanelReadingDelegate<ExtArgs>;

  /**
   * `prisma.alert`: Exposes CRUD operations for the **Alert** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alerts
    * const alerts = await prisma.alert.findMany()
    * ```
    */
  get alert(): Prisma.AlertDelegate<ExtArgs>;

  /**
   * `prisma.dailySummary`: Exposes CRUD operations for the **DailySummary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailySummaries
    * const dailySummaries = await prisma.dailySummary.findMany()
    * ```
    */
  get dailySummary(): Prisma.DailySummaryDelegate<ExtArgs>;

  /**
   * `prisma.systemConfig`: Exposes CRUD operations for the **SystemConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SystemConfigs
    * const systemConfigs = await prisma.systemConfig.findMany()
    * ```
    */
  get systemConfig(): Prisma.SystemConfigDelegate<ExtArgs>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs>;

  /**
   * `prisma.paymentHistory`: Exposes CRUD operations for the **PaymentHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentHistories
    * const paymentHistories = await prisma.paymentHistory.findMany()
    * ```
    */
  get paymentHistory(): Prisma.PaymentHistoryDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Session: 'Session',
    Panel: 'Panel',
    PanelReading: 'PanelReading',
    Alert: 'Alert',
    DailySummary: 'DailySummary',
    SystemConfig: 'SystemConfig',
    Subscription: 'Subscription',
    PaymentHistory: 'PaymentHistory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "session" | "panel" | "panelReading" | "alert" | "dailySummary" | "systemConfig" | "subscription" | "paymentHistory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Panel: {
        payload: Prisma.$PanelPayload<ExtArgs>
        fields: Prisma.PanelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PanelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PanelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanelPayload>
          }
          findFirst: {
            args: Prisma.PanelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PanelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanelPayload>
          }
          findMany: {
            args: Prisma.PanelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanelPayload>[]
          }
          create: {
            args: Prisma.PanelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanelPayload>
          }
          createMany: {
            args: Prisma.PanelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PanelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanelPayload>
          }
          update: {
            args: Prisma.PanelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanelPayload>
          }
          deleteMany: {
            args: Prisma.PanelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PanelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PanelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanelPayload>
          }
          aggregate: {
            args: Prisma.PanelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePanel>
          }
          groupBy: {
            args: Prisma.PanelGroupByArgs<ExtArgs>
            result: $Utils.Optional<PanelGroupByOutputType>[]
          }
          count: {
            args: Prisma.PanelCountArgs<ExtArgs>
            result: $Utils.Optional<PanelCountAggregateOutputType> | number
          }
        }
      }
      PanelReading: {
        payload: Prisma.$PanelReadingPayload<ExtArgs>
        fields: Prisma.PanelReadingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PanelReadingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanelReadingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PanelReadingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanelReadingPayload>
          }
          findFirst: {
            args: Prisma.PanelReadingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanelReadingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PanelReadingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanelReadingPayload>
          }
          findMany: {
            args: Prisma.PanelReadingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanelReadingPayload>[]
          }
          create: {
            args: Prisma.PanelReadingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanelReadingPayload>
          }
          createMany: {
            args: Prisma.PanelReadingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PanelReadingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanelReadingPayload>
          }
          update: {
            args: Prisma.PanelReadingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanelReadingPayload>
          }
          deleteMany: {
            args: Prisma.PanelReadingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PanelReadingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PanelReadingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PanelReadingPayload>
          }
          aggregate: {
            args: Prisma.PanelReadingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePanelReading>
          }
          groupBy: {
            args: Prisma.PanelReadingGroupByArgs<ExtArgs>
            result: $Utils.Optional<PanelReadingGroupByOutputType>[]
          }
          count: {
            args: Prisma.PanelReadingCountArgs<ExtArgs>
            result: $Utils.Optional<PanelReadingCountAggregateOutputType> | number
          }
        }
      }
      Alert: {
        payload: Prisma.$AlertPayload<ExtArgs>
        fields: Prisma.AlertFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlertFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlertFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          findFirst: {
            args: Prisma.AlertFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlertFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          findMany: {
            args: Prisma.AlertFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>[]
          }
          create: {
            args: Prisma.AlertCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          createMany: {
            args: Prisma.AlertCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AlertDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          update: {
            args: Prisma.AlertUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          deleteMany: {
            args: Prisma.AlertDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlertUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AlertUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          aggregate: {
            args: Prisma.AlertAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlert>
          }
          groupBy: {
            args: Prisma.AlertGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlertGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlertCountArgs<ExtArgs>
            result: $Utils.Optional<AlertCountAggregateOutputType> | number
          }
        }
      }
      DailySummary: {
        payload: Prisma.$DailySummaryPayload<ExtArgs>
        fields: Prisma.DailySummaryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailySummaryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailySummaryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailySummaryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailySummaryPayload>
          }
          findFirst: {
            args: Prisma.DailySummaryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailySummaryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailySummaryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailySummaryPayload>
          }
          findMany: {
            args: Prisma.DailySummaryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailySummaryPayload>[]
          }
          create: {
            args: Prisma.DailySummaryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailySummaryPayload>
          }
          createMany: {
            args: Prisma.DailySummaryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DailySummaryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailySummaryPayload>
          }
          update: {
            args: Prisma.DailySummaryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailySummaryPayload>
          }
          deleteMany: {
            args: Prisma.DailySummaryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailySummaryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DailySummaryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailySummaryPayload>
          }
          aggregate: {
            args: Prisma.DailySummaryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailySummary>
          }
          groupBy: {
            args: Prisma.DailySummaryGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailySummaryGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailySummaryCountArgs<ExtArgs>
            result: $Utils.Optional<DailySummaryCountAggregateOutputType> | number
          }
        }
      }
      SystemConfig: {
        payload: Prisma.$SystemConfigPayload<ExtArgs>
        fields: Prisma.SystemConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SystemConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SystemConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>
          }
          findFirst: {
            args: Prisma.SystemConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SystemConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>
          }
          findMany: {
            args: Prisma.SystemConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>[]
          }
          create: {
            args: Prisma.SystemConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>
          }
          createMany: {
            args: Prisma.SystemConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SystemConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>
          }
          update: {
            args: Prisma.SystemConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>
          }
          deleteMany: {
            args: Prisma.SystemConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SystemConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SystemConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SystemConfigPayload>
          }
          aggregate: {
            args: Prisma.SystemConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSystemConfig>
          }
          groupBy: {
            args: Prisma.SystemConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<SystemConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.SystemConfigCountArgs<ExtArgs>
            result: $Utils.Optional<SystemConfigCountAggregateOutputType> | number
          }
        }
      }
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
          }
        }
      }
      PaymentHistory: {
        payload: Prisma.$PaymentHistoryPayload<ExtArgs>
        fields: Prisma.PaymentHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentHistoryPayload>
          }
          findFirst: {
            args: Prisma.PaymentHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentHistoryPayload>
          }
          findMany: {
            args: Prisma.PaymentHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentHistoryPayload>[]
          }
          create: {
            args: Prisma.PaymentHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentHistoryPayload>
          }
          createMany: {
            args: Prisma.PaymentHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PaymentHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentHistoryPayload>
          }
          update: {
            args: Prisma.PaymentHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentHistoryPayload>
          }
          deleteMany: {
            args: Prisma.PaymentHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentHistoryPayload>
          }
          aggregate: {
            args: Prisma.PaymentHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentHistory>
          }
          groupBy: {
            args: Prisma.PaymentHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentHistoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    panels: number
    sessions: number
    subscriptions: number
    paymentHistory: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    panels?: boolean | UserCountOutputTypeCountPanelsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    subscriptions?: boolean | UserCountOutputTypeCountSubscriptionsArgs
    paymentHistory?: boolean | UserCountOutputTypeCountPaymentHistoryArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPanelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PanelWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentHistoryWhereInput
  }


  /**
   * Count Type PanelCountOutputType
   */

  export type PanelCountOutputType = {
    readings: number
    alerts: number
    dailySummary: number
  }

  export type PanelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    readings?: boolean | PanelCountOutputTypeCountReadingsArgs
    alerts?: boolean | PanelCountOutputTypeCountAlertsArgs
    dailySummary?: boolean | PanelCountOutputTypeCountDailySummaryArgs
  }

  // Custom InputTypes
  /**
   * PanelCountOutputType without action
   */
  export type PanelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PanelCountOutputType
     */
    select?: PanelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PanelCountOutputType without action
   */
  export type PanelCountOutputTypeCountReadingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PanelReadingWhereInput
  }

  /**
   * PanelCountOutputType without action
   */
  export type PanelCountOutputTypeCountAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertWhereInput
  }

  /**
   * PanelCountOutputType without action
   */
  export type PanelCountOutputTypeCountDailySummaryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailySummaryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    plan: $Enums.Plan | null
    currentPlan: $Enums.Plan | null
    planExpiresAt: Date | null
    isVerified: boolean | null
    isActive: boolean | null
    lastLoginAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    plan: $Enums.Plan | null
    currentPlan: $Enums.Plan | null
    planExpiresAt: Date | null
    isVerified: boolean | null
    isActive: boolean | null
    lastLoginAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    passwordHash: number
    plan: number
    currentPlan: number
    planExpiresAt: number
    isVerified: number
    isActive: number
    lastLoginAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    plan?: true
    currentPlan?: true
    planExpiresAt?: true
    isVerified?: true
    isActive?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    plan?: true
    currentPlan?: true
    planExpiresAt?: true
    isVerified?: true
    isActive?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    plan?: true
    currentPlan?: true
    planExpiresAt?: true
    isVerified?: true
    isActive?: true
    lastLoginAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    passwordHash: string
    plan: $Enums.Plan
    currentPlan: $Enums.Plan
    planExpiresAt: Date | null
    isVerified: boolean
    isActive: boolean
    lastLoginAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    plan?: boolean
    currentPlan?: boolean
    planExpiresAt?: boolean
    isVerified?: boolean
    isActive?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    panels?: boolean | User$panelsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    systemConfig?: boolean | User$systemConfigArgs<ExtArgs>
    subscriptions?: boolean | User$subscriptionsArgs<ExtArgs>
    paymentHistory?: boolean | User$paymentHistoryArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>


  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    plan?: boolean
    currentPlan?: boolean
    planExpiresAt?: boolean
    isVerified?: boolean
    isActive?: boolean
    lastLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    panels?: boolean | User$panelsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    systemConfig?: boolean | User$systemConfigArgs<ExtArgs>
    subscriptions?: boolean | User$subscriptionsArgs<ExtArgs>
    paymentHistory?: boolean | User$paymentHistoryArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      panels: Prisma.$PanelPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      systemConfig: Prisma.$SystemConfigPayload<ExtArgs> | null
      subscriptions: Prisma.$SubscriptionPayload<ExtArgs>[]
      paymentHistory: Prisma.$PaymentHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      passwordHash: string
      plan: $Enums.Plan
      currentPlan: $Enums.Plan
      planExpiresAt: Date | null
      isVerified: boolean
      isActive: boolean
      lastLoginAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    panels<T extends User$panelsArgs<ExtArgs> = {}>(args?: Subset<T, User$panelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PanelPayload<ExtArgs>, T, "findMany"> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany"> | Null>
    systemConfig<T extends User$systemConfigArgs<ExtArgs> = {}>(args?: Subset<T, User$systemConfigArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    subscriptions<T extends User$subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, User$subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany"> | Null>
    paymentHistory<T extends User$paymentHistoryArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly plan: FieldRef<"User", 'Plan'>
    readonly currentPlan: FieldRef<"User", 'Plan'>
    readonly planExpiresAt: FieldRef<"User", 'DateTime'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly lastLoginAt: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.panels
   */
  export type User$panelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Panel
     */
    select?: PanelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanelInclude<ExtArgs> | null
    where?: PanelWhereInput
    orderBy?: PanelOrderByWithRelationInput | PanelOrderByWithRelationInput[]
    cursor?: PanelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PanelScalarFieldEnum | PanelScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.systemConfig
   */
  export type User$systemConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemConfigInclude<ExtArgs> | null
    where?: SystemConfigWhereInput
  }

  /**
   * User.subscriptions
   */
  export type User$subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    cursor?: SubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * User.paymentHistory
   */
  export type User$paymentHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryInclude<ExtArgs> | null
    where?: PaymentHistoryWhereInput
    orderBy?: PaymentHistoryOrderByWithRelationInput | PaymentHistoryOrderByWithRelationInput[]
    cursor?: PaymentHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentHistoryScalarFieldEnum | PaymentHistoryScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    ipAddress: string | null
    userAgent: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    ipAddress: string | null
    userAgent: string | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    userId: number
    token: number
    ipAddress: number
    userAgent: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    ipAddress?: true
    userAgent?: true
    expiresAt?: true
    createdAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    ipAddress?: true
    userAgent?: true
    expiresAt?: true
    createdAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    ipAddress?: true
    userAgent?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    userId: string
    token: string
    ipAddress: string | null
    userAgent: string | null
    expiresAt: Date
    createdAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>


  export type SessionSelectScalar = {
    id?: boolean
    userId?: boolean
    token?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      token: string
      ipAddress: string | null
      userAgent: string | null
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */ 
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly token: FieldRef<"Session", 'String'>
    readonly ipAddress: FieldRef<"Session", 'String'>
    readonly userAgent: FieldRef<"Session", 'String'>
    readonly expiresAt: FieldRef<"Session", 'DateTime'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Panel
   */

  export type AggregatePanel = {
    _count: PanelCountAggregateOutputType | null
    _avg: PanelAvgAggregateOutputType | null
    _sum: PanelSumAggregateOutputType | null
    _min: PanelMinAggregateOutputType | null
    _max: PanelMaxAggregateOutputType | null
  }

  export type PanelAvgAggregateOutputType = {
    ratedPower: number | null
    warrantyYears: number | null
  }

  export type PanelSumAggregateOutputType = {
    ratedPower: number | null
    warrantyYears: number | null
  }

  export type PanelMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    location: string | null
    ratedPower: number | null
    installDate: Date | null
    warrantyYears: number | null
    isActive: boolean | null
    currentFault: $Enums.FaultType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PanelMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    location: string | null
    ratedPower: number | null
    installDate: Date | null
    warrantyYears: number | null
    isActive: boolean | null
    currentFault: $Enums.FaultType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PanelCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    location: number
    ratedPower: number
    installDate: number
    warrantyYears: number
    isActive: number
    currentFault: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PanelAvgAggregateInputType = {
    ratedPower?: true
    warrantyYears?: true
  }

  export type PanelSumAggregateInputType = {
    ratedPower?: true
    warrantyYears?: true
  }

  export type PanelMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    location?: true
    ratedPower?: true
    installDate?: true
    warrantyYears?: true
    isActive?: true
    currentFault?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PanelMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    location?: true
    ratedPower?: true
    installDate?: true
    warrantyYears?: true
    isActive?: true
    currentFault?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PanelCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    location?: true
    ratedPower?: true
    installDate?: true
    warrantyYears?: true
    isActive?: true
    currentFault?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PanelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Panel to aggregate.
     */
    where?: PanelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Panels to fetch.
     */
    orderBy?: PanelOrderByWithRelationInput | PanelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PanelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Panels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Panels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Panels
    **/
    _count?: true | PanelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PanelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PanelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PanelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PanelMaxAggregateInputType
  }

  export type GetPanelAggregateType<T extends PanelAggregateArgs> = {
        [P in keyof T & keyof AggregatePanel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePanel[P]>
      : GetScalarType<T[P], AggregatePanel[P]>
  }




  export type PanelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PanelWhereInput
    orderBy?: PanelOrderByWithAggregationInput | PanelOrderByWithAggregationInput[]
    by: PanelScalarFieldEnum[] | PanelScalarFieldEnum
    having?: PanelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PanelCountAggregateInputType | true
    _avg?: PanelAvgAggregateInputType
    _sum?: PanelSumAggregateInputType
    _min?: PanelMinAggregateInputType
    _max?: PanelMaxAggregateInputType
  }

  export type PanelGroupByOutputType = {
    id: string
    userId: string
    name: string
    location: string
    ratedPower: number
    installDate: Date
    warrantyYears: number
    isActive: boolean
    currentFault: $Enums.FaultType
    createdAt: Date
    updatedAt: Date
    _count: PanelCountAggregateOutputType | null
    _avg: PanelAvgAggregateOutputType | null
    _sum: PanelSumAggregateOutputType | null
    _min: PanelMinAggregateOutputType | null
    _max: PanelMaxAggregateOutputType | null
  }

  type GetPanelGroupByPayload<T extends PanelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PanelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PanelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PanelGroupByOutputType[P]>
            : GetScalarType<T[P], PanelGroupByOutputType[P]>
        }
      >
    >


  export type PanelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    location?: boolean
    ratedPower?: boolean
    installDate?: boolean
    warrantyYears?: boolean
    isActive?: boolean
    currentFault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    readings?: boolean | Panel$readingsArgs<ExtArgs>
    alerts?: boolean | Panel$alertsArgs<ExtArgs>
    dailySummary?: boolean | Panel$dailySummaryArgs<ExtArgs>
    _count?: boolean | PanelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["panel"]>


  export type PanelSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    location?: boolean
    ratedPower?: boolean
    installDate?: boolean
    warrantyYears?: boolean
    isActive?: boolean
    currentFault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PanelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    readings?: boolean | Panel$readingsArgs<ExtArgs>
    alerts?: boolean | Panel$alertsArgs<ExtArgs>
    dailySummary?: boolean | Panel$dailySummaryArgs<ExtArgs>
    _count?: boolean | PanelCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PanelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Panel"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      readings: Prisma.$PanelReadingPayload<ExtArgs>[]
      alerts: Prisma.$AlertPayload<ExtArgs>[]
      dailySummary: Prisma.$DailySummaryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      location: string
      ratedPower: number
      installDate: Date
      warrantyYears: number
      isActive: boolean
      currentFault: $Enums.FaultType
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["panel"]>
    composites: {}
  }

  type PanelGetPayload<S extends boolean | null | undefined | PanelDefaultArgs> = $Result.GetResult<Prisma.$PanelPayload, S>

  type PanelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PanelFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PanelCountAggregateInputType | true
    }

  export interface PanelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Panel'], meta: { name: 'Panel' } }
    /**
     * Find zero or one Panel that matches the filter.
     * @param {PanelFindUniqueArgs} args - Arguments to find a Panel
     * @example
     * // Get one Panel
     * const panel = await prisma.panel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PanelFindUniqueArgs>(args: SelectSubset<T, PanelFindUniqueArgs<ExtArgs>>): Prisma__PanelClient<$Result.GetResult<Prisma.$PanelPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Panel that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PanelFindUniqueOrThrowArgs} args - Arguments to find a Panel
     * @example
     * // Get one Panel
     * const panel = await prisma.panel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PanelFindUniqueOrThrowArgs>(args: SelectSubset<T, PanelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PanelClient<$Result.GetResult<Prisma.$PanelPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Panel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanelFindFirstArgs} args - Arguments to find a Panel
     * @example
     * // Get one Panel
     * const panel = await prisma.panel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PanelFindFirstArgs>(args?: SelectSubset<T, PanelFindFirstArgs<ExtArgs>>): Prisma__PanelClient<$Result.GetResult<Prisma.$PanelPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Panel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanelFindFirstOrThrowArgs} args - Arguments to find a Panel
     * @example
     * // Get one Panel
     * const panel = await prisma.panel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PanelFindFirstOrThrowArgs>(args?: SelectSubset<T, PanelFindFirstOrThrowArgs<ExtArgs>>): Prisma__PanelClient<$Result.GetResult<Prisma.$PanelPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Panels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Panels
     * const panels = await prisma.panel.findMany()
     * 
     * // Get first 10 Panels
     * const panels = await prisma.panel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const panelWithIdOnly = await prisma.panel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PanelFindManyArgs>(args?: SelectSubset<T, PanelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PanelPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Panel.
     * @param {PanelCreateArgs} args - Arguments to create a Panel.
     * @example
     * // Create one Panel
     * const Panel = await prisma.panel.create({
     *   data: {
     *     // ... data to create a Panel
     *   }
     * })
     * 
     */
    create<T extends PanelCreateArgs>(args: SelectSubset<T, PanelCreateArgs<ExtArgs>>): Prisma__PanelClient<$Result.GetResult<Prisma.$PanelPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Panels.
     * @param {PanelCreateManyArgs} args - Arguments to create many Panels.
     * @example
     * // Create many Panels
     * const panel = await prisma.panel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PanelCreateManyArgs>(args?: SelectSubset<T, PanelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Panel.
     * @param {PanelDeleteArgs} args - Arguments to delete one Panel.
     * @example
     * // Delete one Panel
     * const Panel = await prisma.panel.delete({
     *   where: {
     *     // ... filter to delete one Panel
     *   }
     * })
     * 
     */
    delete<T extends PanelDeleteArgs>(args: SelectSubset<T, PanelDeleteArgs<ExtArgs>>): Prisma__PanelClient<$Result.GetResult<Prisma.$PanelPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Panel.
     * @param {PanelUpdateArgs} args - Arguments to update one Panel.
     * @example
     * // Update one Panel
     * const panel = await prisma.panel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PanelUpdateArgs>(args: SelectSubset<T, PanelUpdateArgs<ExtArgs>>): Prisma__PanelClient<$Result.GetResult<Prisma.$PanelPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Panels.
     * @param {PanelDeleteManyArgs} args - Arguments to filter Panels to delete.
     * @example
     * // Delete a few Panels
     * const { count } = await prisma.panel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PanelDeleteManyArgs>(args?: SelectSubset<T, PanelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Panels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Panels
     * const panel = await prisma.panel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PanelUpdateManyArgs>(args: SelectSubset<T, PanelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Panel.
     * @param {PanelUpsertArgs} args - Arguments to update or create a Panel.
     * @example
     * // Update or create a Panel
     * const panel = await prisma.panel.upsert({
     *   create: {
     *     // ... data to create a Panel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Panel we want to update
     *   }
     * })
     */
    upsert<T extends PanelUpsertArgs>(args: SelectSubset<T, PanelUpsertArgs<ExtArgs>>): Prisma__PanelClient<$Result.GetResult<Prisma.$PanelPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Panels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanelCountArgs} args - Arguments to filter Panels to count.
     * @example
     * // Count the number of Panels
     * const count = await prisma.panel.count({
     *   where: {
     *     // ... the filter for the Panels we want to count
     *   }
     * })
    **/
    count<T extends PanelCountArgs>(
      args?: Subset<T, PanelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PanelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Panel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PanelAggregateArgs>(args: Subset<T, PanelAggregateArgs>): Prisma.PrismaPromise<GetPanelAggregateType<T>>

    /**
     * Group by Panel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PanelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PanelGroupByArgs['orderBy'] }
        : { orderBy?: PanelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PanelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPanelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Panel model
   */
  readonly fields: PanelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Panel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PanelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    readings<T extends Panel$readingsArgs<ExtArgs> = {}>(args?: Subset<T, Panel$readingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PanelReadingPayload<ExtArgs>, T, "findMany"> | Null>
    alerts<T extends Panel$alertsArgs<ExtArgs> = {}>(args?: Subset<T, Panel$alertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findMany"> | Null>
    dailySummary<T extends Panel$dailySummaryArgs<ExtArgs> = {}>(args?: Subset<T, Panel$dailySummaryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailySummaryPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Panel model
   */ 
  interface PanelFieldRefs {
    readonly id: FieldRef<"Panel", 'String'>
    readonly userId: FieldRef<"Panel", 'String'>
    readonly name: FieldRef<"Panel", 'String'>
    readonly location: FieldRef<"Panel", 'String'>
    readonly ratedPower: FieldRef<"Panel", 'Float'>
    readonly installDate: FieldRef<"Panel", 'DateTime'>
    readonly warrantyYears: FieldRef<"Panel", 'Int'>
    readonly isActive: FieldRef<"Panel", 'Boolean'>
    readonly currentFault: FieldRef<"Panel", 'FaultType'>
    readonly createdAt: FieldRef<"Panel", 'DateTime'>
    readonly updatedAt: FieldRef<"Panel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Panel findUnique
   */
  export type PanelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Panel
     */
    select?: PanelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanelInclude<ExtArgs> | null
    /**
     * Filter, which Panel to fetch.
     */
    where: PanelWhereUniqueInput
  }

  /**
   * Panel findUniqueOrThrow
   */
  export type PanelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Panel
     */
    select?: PanelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanelInclude<ExtArgs> | null
    /**
     * Filter, which Panel to fetch.
     */
    where: PanelWhereUniqueInput
  }

  /**
   * Panel findFirst
   */
  export type PanelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Panel
     */
    select?: PanelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanelInclude<ExtArgs> | null
    /**
     * Filter, which Panel to fetch.
     */
    where?: PanelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Panels to fetch.
     */
    orderBy?: PanelOrderByWithRelationInput | PanelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Panels.
     */
    cursor?: PanelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Panels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Panels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Panels.
     */
    distinct?: PanelScalarFieldEnum | PanelScalarFieldEnum[]
  }

  /**
   * Panel findFirstOrThrow
   */
  export type PanelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Panel
     */
    select?: PanelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanelInclude<ExtArgs> | null
    /**
     * Filter, which Panel to fetch.
     */
    where?: PanelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Panels to fetch.
     */
    orderBy?: PanelOrderByWithRelationInput | PanelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Panels.
     */
    cursor?: PanelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Panels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Panels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Panels.
     */
    distinct?: PanelScalarFieldEnum | PanelScalarFieldEnum[]
  }

  /**
   * Panel findMany
   */
  export type PanelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Panel
     */
    select?: PanelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanelInclude<ExtArgs> | null
    /**
     * Filter, which Panels to fetch.
     */
    where?: PanelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Panels to fetch.
     */
    orderBy?: PanelOrderByWithRelationInput | PanelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Panels.
     */
    cursor?: PanelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Panels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Panels.
     */
    skip?: number
    distinct?: PanelScalarFieldEnum | PanelScalarFieldEnum[]
  }

  /**
   * Panel create
   */
  export type PanelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Panel
     */
    select?: PanelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanelInclude<ExtArgs> | null
    /**
     * The data needed to create a Panel.
     */
    data: XOR<PanelCreateInput, PanelUncheckedCreateInput>
  }

  /**
   * Panel createMany
   */
  export type PanelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Panels.
     */
    data: PanelCreateManyInput | PanelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Panel update
   */
  export type PanelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Panel
     */
    select?: PanelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanelInclude<ExtArgs> | null
    /**
     * The data needed to update a Panel.
     */
    data: XOR<PanelUpdateInput, PanelUncheckedUpdateInput>
    /**
     * Choose, which Panel to update.
     */
    where: PanelWhereUniqueInput
  }

  /**
   * Panel updateMany
   */
  export type PanelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Panels.
     */
    data: XOR<PanelUpdateManyMutationInput, PanelUncheckedUpdateManyInput>
    /**
     * Filter which Panels to update
     */
    where?: PanelWhereInput
  }

  /**
   * Panel upsert
   */
  export type PanelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Panel
     */
    select?: PanelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanelInclude<ExtArgs> | null
    /**
     * The filter to search for the Panel to update in case it exists.
     */
    where: PanelWhereUniqueInput
    /**
     * In case the Panel found by the `where` argument doesn't exist, create a new Panel with this data.
     */
    create: XOR<PanelCreateInput, PanelUncheckedCreateInput>
    /**
     * In case the Panel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PanelUpdateInput, PanelUncheckedUpdateInput>
  }

  /**
   * Panel delete
   */
  export type PanelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Panel
     */
    select?: PanelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanelInclude<ExtArgs> | null
    /**
     * Filter which Panel to delete.
     */
    where: PanelWhereUniqueInput
  }

  /**
   * Panel deleteMany
   */
  export type PanelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Panels to delete
     */
    where?: PanelWhereInput
  }

  /**
   * Panel.readings
   */
  export type Panel$readingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PanelReading
     */
    select?: PanelReadingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanelReadingInclude<ExtArgs> | null
    where?: PanelReadingWhereInput
    orderBy?: PanelReadingOrderByWithRelationInput | PanelReadingOrderByWithRelationInput[]
    cursor?: PanelReadingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PanelReadingScalarFieldEnum | PanelReadingScalarFieldEnum[]
  }

  /**
   * Panel.alerts
   */
  export type Panel$alertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    where?: AlertWhereInput
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    cursor?: AlertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Panel.dailySummary
   */
  export type Panel$dailySummaryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySummary
     */
    select?: DailySummarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailySummaryInclude<ExtArgs> | null
    where?: DailySummaryWhereInput
    orderBy?: DailySummaryOrderByWithRelationInput | DailySummaryOrderByWithRelationInput[]
    cursor?: DailySummaryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailySummaryScalarFieldEnum | DailySummaryScalarFieldEnum[]
  }

  /**
   * Panel without action
   */
  export type PanelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Panel
     */
    select?: PanelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanelInclude<ExtArgs> | null
  }


  /**
   * Model PanelReading
   */

  export type AggregatePanelReading = {
    _count: PanelReadingCountAggregateOutputType | null
    _avg: PanelReadingAvgAggregateOutputType | null
    _sum: PanelReadingSumAggregateOutputType | null
    _min: PanelReadingMinAggregateOutputType | null
    _max: PanelReadingMaxAggregateOutputType | null
  }

  export type PanelReadingAvgAggregateOutputType = {
    voltage: number | null
    current: number | null
    power: number | null
    temperature: number | null
    irradiance: number | null
    humidity: number | null
    efficiency: number | null
  }

  export type PanelReadingSumAggregateOutputType = {
    voltage: number | null
    current: number | null
    power: number | null
    temperature: number | null
    irradiance: number | null
    humidity: number | null
    efficiency: number | null
  }

  export type PanelReadingMinAggregateOutputType = {
    id: string | null
    panelId: string | null
    timestamp: Date | null
    voltage: number | null
    current: number | null
    power: number | null
    temperature: number | null
    irradiance: number | null
    humidity: number | null
    efficiency: number | null
  }

  export type PanelReadingMaxAggregateOutputType = {
    id: string | null
    panelId: string | null
    timestamp: Date | null
    voltage: number | null
    current: number | null
    power: number | null
    temperature: number | null
    irradiance: number | null
    humidity: number | null
    efficiency: number | null
  }

  export type PanelReadingCountAggregateOutputType = {
    id: number
    panelId: number
    timestamp: number
    voltage: number
    current: number
    power: number
    temperature: number
    irradiance: number
    humidity: number
    efficiency: number
    _all: number
  }


  export type PanelReadingAvgAggregateInputType = {
    voltage?: true
    current?: true
    power?: true
    temperature?: true
    irradiance?: true
    humidity?: true
    efficiency?: true
  }

  export type PanelReadingSumAggregateInputType = {
    voltage?: true
    current?: true
    power?: true
    temperature?: true
    irradiance?: true
    humidity?: true
    efficiency?: true
  }

  export type PanelReadingMinAggregateInputType = {
    id?: true
    panelId?: true
    timestamp?: true
    voltage?: true
    current?: true
    power?: true
    temperature?: true
    irradiance?: true
    humidity?: true
    efficiency?: true
  }

  export type PanelReadingMaxAggregateInputType = {
    id?: true
    panelId?: true
    timestamp?: true
    voltage?: true
    current?: true
    power?: true
    temperature?: true
    irradiance?: true
    humidity?: true
    efficiency?: true
  }

  export type PanelReadingCountAggregateInputType = {
    id?: true
    panelId?: true
    timestamp?: true
    voltage?: true
    current?: true
    power?: true
    temperature?: true
    irradiance?: true
    humidity?: true
    efficiency?: true
    _all?: true
  }

  export type PanelReadingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PanelReading to aggregate.
     */
    where?: PanelReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PanelReadings to fetch.
     */
    orderBy?: PanelReadingOrderByWithRelationInput | PanelReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PanelReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PanelReadings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PanelReadings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PanelReadings
    **/
    _count?: true | PanelReadingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PanelReadingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PanelReadingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PanelReadingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PanelReadingMaxAggregateInputType
  }

  export type GetPanelReadingAggregateType<T extends PanelReadingAggregateArgs> = {
        [P in keyof T & keyof AggregatePanelReading]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePanelReading[P]>
      : GetScalarType<T[P], AggregatePanelReading[P]>
  }




  export type PanelReadingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PanelReadingWhereInput
    orderBy?: PanelReadingOrderByWithAggregationInput | PanelReadingOrderByWithAggregationInput[]
    by: PanelReadingScalarFieldEnum[] | PanelReadingScalarFieldEnum
    having?: PanelReadingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PanelReadingCountAggregateInputType | true
    _avg?: PanelReadingAvgAggregateInputType
    _sum?: PanelReadingSumAggregateInputType
    _min?: PanelReadingMinAggregateInputType
    _max?: PanelReadingMaxAggregateInputType
  }

  export type PanelReadingGroupByOutputType = {
    id: string
    panelId: string
    timestamp: Date
    voltage: number
    current: number
    power: number
    temperature: number
    irradiance: number
    humidity: number
    efficiency: number
    _count: PanelReadingCountAggregateOutputType | null
    _avg: PanelReadingAvgAggregateOutputType | null
    _sum: PanelReadingSumAggregateOutputType | null
    _min: PanelReadingMinAggregateOutputType | null
    _max: PanelReadingMaxAggregateOutputType | null
  }

  type GetPanelReadingGroupByPayload<T extends PanelReadingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PanelReadingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PanelReadingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PanelReadingGroupByOutputType[P]>
            : GetScalarType<T[P], PanelReadingGroupByOutputType[P]>
        }
      >
    >


  export type PanelReadingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    panelId?: boolean
    timestamp?: boolean
    voltage?: boolean
    current?: boolean
    power?: boolean
    temperature?: boolean
    irradiance?: boolean
    humidity?: boolean
    efficiency?: boolean
    panel?: boolean | PanelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["panelReading"]>


  export type PanelReadingSelectScalar = {
    id?: boolean
    panelId?: boolean
    timestamp?: boolean
    voltage?: boolean
    current?: boolean
    power?: boolean
    temperature?: boolean
    irradiance?: boolean
    humidity?: boolean
    efficiency?: boolean
  }

  export type PanelReadingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    panel?: boolean | PanelDefaultArgs<ExtArgs>
  }

  export type $PanelReadingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PanelReading"
    objects: {
      panel: Prisma.$PanelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      panelId: string
      timestamp: Date
      voltage: number
      current: number
      power: number
      temperature: number
      irradiance: number
      humidity: number
      efficiency: number
    }, ExtArgs["result"]["panelReading"]>
    composites: {}
  }

  type PanelReadingGetPayload<S extends boolean | null | undefined | PanelReadingDefaultArgs> = $Result.GetResult<Prisma.$PanelReadingPayload, S>

  type PanelReadingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PanelReadingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PanelReadingCountAggregateInputType | true
    }

  export interface PanelReadingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PanelReading'], meta: { name: 'PanelReading' } }
    /**
     * Find zero or one PanelReading that matches the filter.
     * @param {PanelReadingFindUniqueArgs} args - Arguments to find a PanelReading
     * @example
     * // Get one PanelReading
     * const panelReading = await prisma.panelReading.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PanelReadingFindUniqueArgs>(args: SelectSubset<T, PanelReadingFindUniqueArgs<ExtArgs>>): Prisma__PanelReadingClient<$Result.GetResult<Prisma.$PanelReadingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PanelReading that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PanelReadingFindUniqueOrThrowArgs} args - Arguments to find a PanelReading
     * @example
     * // Get one PanelReading
     * const panelReading = await prisma.panelReading.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PanelReadingFindUniqueOrThrowArgs>(args: SelectSubset<T, PanelReadingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PanelReadingClient<$Result.GetResult<Prisma.$PanelReadingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PanelReading that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanelReadingFindFirstArgs} args - Arguments to find a PanelReading
     * @example
     * // Get one PanelReading
     * const panelReading = await prisma.panelReading.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PanelReadingFindFirstArgs>(args?: SelectSubset<T, PanelReadingFindFirstArgs<ExtArgs>>): Prisma__PanelReadingClient<$Result.GetResult<Prisma.$PanelReadingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PanelReading that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanelReadingFindFirstOrThrowArgs} args - Arguments to find a PanelReading
     * @example
     * // Get one PanelReading
     * const panelReading = await prisma.panelReading.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PanelReadingFindFirstOrThrowArgs>(args?: SelectSubset<T, PanelReadingFindFirstOrThrowArgs<ExtArgs>>): Prisma__PanelReadingClient<$Result.GetResult<Prisma.$PanelReadingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PanelReadings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanelReadingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PanelReadings
     * const panelReadings = await prisma.panelReading.findMany()
     * 
     * // Get first 10 PanelReadings
     * const panelReadings = await prisma.panelReading.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const panelReadingWithIdOnly = await prisma.panelReading.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PanelReadingFindManyArgs>(args?: SelectSubset<T, PanelReadingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PanelReadingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PanelReading.
     * @param {PanelReadingCreateArgs} args - Arguments to create a PanelReading.
     * @example
     * // Create one PanelReading
     * const PanelReading = await prisma.panelReading.create({
     *   data: {
     *     // ... data to create a PanelReading
     *   }
     * })
     * 
     */
    create<T extends PanelReadingCreateArgs>(args: SelectSubset<T, PanelReadingCreateArgs<ExtArgs>>): Prisma__PanelReadingClient<$Result.GetResult<Prisma.$PanelReadingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PanelReadings.
     * @param {PanelReadingCreateManyArgs} args - Arguments to create many PanelReadings.
     * @example
     * // Create many PanelReadings
     * const panelReading = await prisma.panelReading.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PanelReadingCreateManyArgs>(args?: SelectSubset<T, PanelReadingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PanelReading.
     * @param {PanelReadingDeleteArgs} args - Arguments to delete one PanelReading.
     * @example
     * // Delete one PanelReading
     * const PanelReading = await prisma.panelReading.delete({
     *   where: {
     *     // ... filter to delete one PanelReading
     *   }
     * })
     * 
     */
    delete<T extends PanelReadingDeleteArgs>(args: SelectSubset<T, PanelReadingDeleteArgs<ExtArgs>>): Prisma__PanelReadingClient<$Result.GetResult<Prisma.$PanelReadingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PanelReading.
     * @param {PanelReadingUpdateArgs} args - Arguments to update one PanelReading.
     * @example
     * // Update one PanelReading
     * const panelReading = await prisma.panelReading.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PanelReadingUpdateArgs>(args: SelectSubset<T, PanelReadingUpdateArgs<ExtArgs>>): Prisma__PanelReadingClient<$Result.GetResult<Prisma.$PanelReadingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PanelReadings.
     * @param {PanelReadingDeleteManyArgs} args - Arguments to filter PanelReadings to delete.
     * @example
     * // Delete a few PanelReadings
     * const { count } = await prisma.panelReading.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PanelReadingDeleteManyArgs>(args?: SelectSubset<T, PanelReadingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PanelReadings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanelReadingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PanelReadings
     * const panelReading = await prisma.panelReading.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PanelReadingUpdateManyArgs>(args: SelectSubset<T, PanelReadingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PanelReading.
     * @param {PanelReadingUpsertArgs} args - Arguments to update or create a PanelReading.
     * @example
     * // Update or create a PanelReading
     * const panelReading = await prisma.panelReading.upsert({
     *   create: {
     *     // ... data to create a PanelReading
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PanelReading we want to update
     *   }
     * })
     */
    upsert<T extends PanelReadingUpsertArgs>(args: SelectSubset<T, PanelReadingUpsertArgs<ExtArgs>>): Prisma__PanelReadingClient<$Result.GetResult<Prisma.$PanelReadingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PanelReadings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanelReadingCountArgs} args - Arguments to filter PanelReadings to count.
     * @example
     * // Count the number of PanelReadings
     * const count = await prisma.panelReading.count({
     *   where: {
     *     // ... the filter for the PanelReadings we want to count
     *   }
     * })
    **/
    count<T extends PanelReadingCountArgs>(
      args?: Subset<T, PanelReadingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PanelReadingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PanelReading.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanelReadingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PanelReadingAggregateArgs>(args: Subset<T, PanelReadingAggregateArgs>): Prisma.PrismaPromise<GetPanelReadingAggregateType<T>>

    /**
     * Group by PanelReading.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PanelReadingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PanelReadingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PanelReadingGroupByArgs['orderBy'] }
        : { orderBy?: PanelReadingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PanelReadingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPanelReadingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PanelReading model
   */
  readonly fields: PanelReadingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PanelReading.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PanelReadingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    panel<T extends PanelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PanelDefaultArgs<ExtArgs>>): Prisma__PanelClient<$Result.GetResult<Prisma.$PanelPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PanelReading model
   */ 
  interface PanelReadingFieldRefs {
    readonly id: FieldRef<"PanelReading", 'String'>
    readonly panelId: FieldRef<"PanelReading", 'String'>
    readonly timestamp: FieldRef<"PanelReading", 'DateTime'>
    readonly voltage: FieldRef<"PanelReading", 'Float'>
    readonly current: FieldRef<"PanelReading", 'Float'>
    readonly power: FieldRef<"PanelReading", 'Float'>
    readonly temperature: FieldRef<"PanelReading", 'Float'>
    readonly irradiance: FieldRef<"PanelReading", 'Float'>
    readonly humidity: FieldRef<"PanelReading", 'Float'>
    readonly efficiency: FieldRef<"PanelReading", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * PanelReading findUnique
   */
  export type PanelReadingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PanelReading
     */
    select?: PanelReadingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanelReadingInclude<ExtArgs> | null
    /**
     * Filter, which PanelReading to fetch.
     */
    where: PanelReadingWhereUniqueInput
  }

  /**
   * PanelReading findUniqueOrThrow
   */
  export type PanelReadingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PanelReading
     */
    select?: PanelReadingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanelReadingInclude<ExtArgs> | null
    /**
     * Filter, which PanelReading to fetch.
     */
    where: PanelReadingWhereUniqueInput
  }

  /**
   * PanelReading findFirst
   */
  export type PanelReadingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PanelReading
     */
    select?: PanelReadingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanelReadingInclude<ExtArgs> | null
    /**
     * Filter, which PanelReading to fetch.
     */
    where?: PanelReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PanelReadings to fetch.
     */
    orderBy?: PanelReadingOrderByWithRelationInput | PanelReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PanelReadings.
     */
    cursor?: PanelReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PanelReadings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PanelReadings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PanelReadings.
     */
    distinct?: PanelReadingScalarFieldEnum | PanelReadingScalarFieldEnum[]
  }

  /**
   * PanelReading findFirstOrThrow
   */
  export type PanelReadingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PanelReading
     */
    select?: PanelReadingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanelReadingInclude<ExtArgs> | null
    /**
     * Filter, which PanelReading to fetch.
     */
    where?: PanelReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PanelReadings to fetch.
     */
    orderBy?: PanelReadingOrderByWithRelationInput | PanelReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PanelReadings.
     */
    cursor?: PanelReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PanelReadings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PanelReadings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PanelReadings.
     */
    distinct?: PanelReadingScalarFieldEnum | PanelReadingScalarFieldEnum[]
  }

  /**
   * PanelReading findMany
   */
  export type PanelReadingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PanelReading
     */
    select?: PanelReadingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanelReadingInclude<ExtArgs> | null
    /**
     * Filter, which PanelReadings to fetch.
     */
    where?: PanelReadingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PanelReadings to fetch.
     */
    orderBy?: PanelReadingOrderByWithRelationInput | PanelReadingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PanelReadings.
     */
    cursor?: PanelReadingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PanelReadings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PanelReadings.
     */
    skip?: number
    distinct?: PanelReadingScalarFieldEnum | PanelReadingScalarFieldEnum[]
  }

  /**
   * PanelReading create
   */
  export type PanelReadingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PanelReading
     */
    select?: PanelReadingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanelReadingInclude<ExtArgs> | null
    /**
     * The data needed to create a PanelReading.
     */
    data: XOR<PanelReadingCreateInput, PanelReadingUncheckedCreateInput>
  }

  /**
   * PanelReading createMany
   */
  export type PanelReadingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PanelReadings.
     */
    data: PanelReadingCreateManyInput | PanelReadingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PanelReading update
   */
  export type PanelReadingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PanelReading
     */
    select?: PanelReadingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanelReadingInclude<ExtArgs> | null
    /**
     * The data needed to update a PanelReading.
     */
    data: XOR<PanelReadingUpdateInput, PanelReadingUncheckedUpdateInput>
    /**
     * Choose, which PanelReading to update.
     */
    where: PanelReadingWhereUniqueInput
  }

  /**
   * PanelReading updateMany
   */
  export type PanelReadingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PanelReadings.
     */
    data: XOR<PanelReadingUpdateManyMutationInput, PanelReadingUncheckedUpdateManyInput>
    /**
     * Filter which PanelReadings to update
     */
    where?: PanelReadingWhereInput
  }

  /**
   * PanelReading upsert
   */
  export type PanelReadingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PanelReading
     */
    select?: PanelReadingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanelReadingInclude<ExtArgs> | null
    /**
     * The filter to search for the PanelReading to update in case it exists.
     */
    where: PanelReadingWhereUniqueInput
    /**
     * In case the PanelReading found by the `where` argument doesn't exist, create a new PanelReading with this data.
     */
    create: XOR<PanelReadingCreateInput, PanelReadingUncheckedCreateInput>
    /**
     * In case the PanelReading was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PanelReadingUpdateInput, PanelReadingUncheckedUpdateInput>
  }

  /**
   * PanelReading delete
   */
  export type PanelReadingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PanelReading
     */
    select?: PanelReadingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanelReadingInclude<ExtArgs> | null
    /**
     * Filter which PanelReading to delete.
     */
    where: PanelReadingWhereUniqueInput
  }

  /**
   * PanelReading deleteMany
   */
  export type PanelReadingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PanelReadings to delete
     */
    where?: PanelReadingWhereInput
  }

  /**
   * PanelReading without action
   */
  export type PanelReadingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PanelReading
     */
    select?: PanelReadingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PanelReadingInclude<ExtArgs> | null
  }


  /**
   * Model Alert
   */

  export type AggregateAlert = {
    _count: AlertCountAggregateOutputType | null
    _avg: AlertAvgAggregateOutputType | null
    _sum: AlertSumAggregateOutputType | null
    _min: AlertMinAggregateOutputType | null
    _max: AlertMaxAggregateOutputType | null
  }

  export type AlertAvgAggregateOutputType = {
    estimatedLoss: number | null
  }

  export type AlertSumAggregateOutputType = {
    estimatedLoss: number | null
  }

  export type AlertMinAggregateOutputType = {
    id: string | null
    panelId: string | null
    severity: $Enums.AlertSeverity | null
    category: $Enums.AlertCategory | null
    title: string | null
    message: string | null
    actionRequired: string | null
    estimatedLoss: number | null
    resolved: boolean | null
    resolvedAt: Date | null
    createdAt: Date | null
  }

  export type AlertMaxAggregateOutputType = {
    id: string | null
    panelId: string | null
    severity: $Enums.AlertSeverity | null
    category: $Enums.AlertCategory | null
    title: string | null
    message: string | null
    actionRequired: string | null
    estimatedLoss: number | null
    resolved: boolean | null
    resolvedAt: Date | null
    createdAt: Date | null
  }

  export type AlertCountAggregateOutputType = {
    id: number
    panelId: number
    severity: number
    category: number
    title: number
    message: number
    actionRequired: number
    estimatedLoss: number
    resolved: number
    resolvedAt: number
    createdAt: number
    _all: number
  }


  export type AlertAvgAggregateInputType = {
    estimatedLoss?: true
  }

  export type AlertSumAggregateInputType = {
    estimatedLoss?: true
  }

  export type AlertMinAggregateInputType = {
    id?: true
    panelId?: true
    severity?: true
    category?: true
    title?: true
    message?: true
    actionRequired?: true
    estimatedLoss?: true
    resolved?: true
    resolvedAt?: true
    createdAt?: true
  }

  export type AlertMaxAggregateInputType = {
    id?: true
    panelId?: true
    severity?: true
    category?: true
    title?: true
    message?: true
    actionRequired?: true
    estimatedLoss?: true
    resolved?: true
    resolvedAt?: true
    createdAt?: true
  }

  export type AlertCountAggregateInputType = {
    id?: true
    panelId?: true
    severity?: true
    category?: true
    title?: true
    message?: true
    actionRequired?: true
    estimatedLoss?: true
    resolved?: true
    resolvedAt?: true
    createdAt?: true
    _all?: true
  }

  export type AlertAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alert to aggregate.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alerts
    **/
    _count?: true | AlertCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlertAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlertSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlertMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlertMaxAggregateInputType
  }

  export type GetAlertAggregateType<T extends AlertAggregateArgs> = {
        [P in keyof T & keyof AggregateAlert]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlert[P]>
      : GetScalarType<T[P], AggregateAlert[P]>
  }




  export type AlertGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertWhereInput
    orderBy?: AlertOrderByWithAggregationInput | AlertOrderByWithAggregationInput[]
    by: AlertScalarFieldEnum[] | AlertScalarFieldEnum
    having?: AlertScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlertCountAggregateInputType | true
    _avg?: AlertAvgAggregateInputType
    _sum?: AlertSumAggregateInputType
    _min?: AlertMinAggregateInputType
    _max?: AlertMaxAggregateInputType
  }

  export type AlertGroupByOutputType = {
    id: string
    panelId: string
    severity: $Enums.AlertSeverity
    category: $Enums.AlertCategory
    title: string
    message: string
    actionRequired: string
    estimatedLoss: number | null
    resolved: boolean
    resolvedAt: Date | null
    createdAt: Date
    _count: AlertCountAggregateOutputType | null
    _avg: AlertAvgAggregateOutputType | null
    _sum: AlertSumAggregateOutputType | null
    _min: AlertMinAggregateOutputType | null
    _max: AlertMaxAggregateOutputType | null
  }

  type GetAlertGroupByPayload<T extends AlertGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlertGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlertGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlertGroupByOutputType[P]>
            : GetScalarType<T[P], AlertGroupByOutputType[P]>
        }
      >
    >


  export type AlertSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    panelId?: boolean
    severity?: boolean
    category?: boolean
    title?: boolean
    message?: boolean
    actionRequired?: boolean
    estimatedLoss?: boolean
    resolved?: boolean
    resolvedAt?: boolean
    createdAt?: boolean
    panel?: boolean | PanelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alert"]>


  export type AlertSelectScalar = {
    id?: boolean
    panelId?: boolean
    severity?: boolean
    category?: boolean
    title?: boolean
    message?: boolean
    actionRequired?: boolean
    estimatedLoss?: boolean
    resolved?: boolean
    resolvedAt?: boolean
    createdAt?: boolean
  }

  export type AlertInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    panel?: boolean | PanelDefaultArgs<ExtArgs>
  }

  export type $AlertPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Alert"
    objects: {
      panel: Prisma.$PanelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      panelId: string
      severity: $Enums.AlertSeverity
      category: $Enums.AlertCategory
      title: string
      message: string
      actionRequired: string
      estimatedLoss: number | null
      resolved: boolean
      resolvedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["alert"]>
    composites: {}
  }

  type AlertGetPayload<S extends boolean | null | undefined | AlertDefaultArgs> = $Result.GetResult<Prisma.$AlertPayload, S>

  type AlertCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AlertFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AlertCountAggregateInputType | true
    }

  export interface AlertDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Alert'], meta: { name: 'Alert' } }
    /**
     * Find zero or one Alert that matches the filter.
     * @param {AlertFindUniqueArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlertFindUniqueArgs>(args: SelectSubset<T, AlertFindUniqueArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Alert that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AlertFindUniqueOrThrowArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlertFindUniqueOrThrowArgs>(args: SelectSubset<T, AlertFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Alert that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindFirstArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlertFindFirstArgs>(args?: SelectSubset<T, AlertFindFirstArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Alert that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindFirstOrThrowArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlertFindFirstOrThrowArgs>(args?: SelectSubset<T, AlertFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Alerts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alerts
     * const alerts = await prisma.alert.findMany()
     * 
     * // Get first 10 Alerts
     * const alerts = await prisma.alert.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alertWithIdOnly = await prisma.alert.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlertFindManyArgs>(args?: SelectSubset<T, AlertFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Alert.
     * @param {AlertCreateArgs} args - Arguments to create a Alert.
     * @example
     * // Create one Alert
     * const Alert = await prisma.alert.create({
     *   data: {
     *     // ... data to create a Alert
     *   }
     * })
     * 
     */
    create<T extends AlertCreateArgs>(args: SelectSubset<T, AlertCreateArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Alerts.
     * @param {AlertCreateManyArgs} args - Arguments to create many Alerts.
     * @example
     * // Create many Alerts
     * const alert = await prisma.alert.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlertCreateManyArgs>(args?: SelectSubset<T, AlertCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Alert.
     * @param {AlertDeleteArgs} args - Arguments to delete one Alert.
     * @example
     * // Delete one Alert
     * const Alert = await prisma.alert.delete({
     *   where: {
     *     // ... filter to delete one Alert
     *   }
     * })
     * 
     */
    delete<T extends AlertDeleteArgs>(args: SelectSubset<T, AlertDeleteArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Alert.
     * @param {AlertUpdateArgs} args - Arguments to update one Alert.
     * @example
     * // Update one Alert
     * const alert = await prisma.alert.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlertUpdateArgs>(args: SelectSubset<T, AlertUpdateArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Alerts.
     * @param {AlertDeleteManyArgs} args - Arguments to filter Alerts to delete.
     * @example
     * // Delete a few Alerts
     * const { count } = await prisma.alert.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlertDeleteManyArgs>(args?: SelectSubset<T, AlertDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alerts
     * const alert = await prisma.alert.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlertUpdateManyArgs>(args: SelectSubset<T, AlertUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Alert.
     * @param {AlertUpsertArgs} args - Arguments to update or create a Alert.
     * @example
     * // Update or create a Alert
     * const alert = await prisma.alert.upsert({
     *   create: {
     *     // ... data to create a Alert
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alert we want to update
     *   }
     * })
     */
    upsert<T extends AlertUpsertArgs>(args: SelectSubset<T, AlertUpsertArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Alerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertCountArgs} args - Arguments to filter Alerts to count.
     * @example
     * // Count the number of Alerts
     * const count = await prisma.alert.count({
     *   where: {
     *     // ... the filter for the Alerts we want to count
     *   }
     * })
    **/
    count<T extends AlertCountArgs>(
      args?: Subset<T, AlertCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlertCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlertAggregateArgs>(args: Subset<T, AlertAggregateArgs>): Prisma.PrismaPromise<GetAlertAggregateType<T>>

    /**
     * Group by Alert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AlertGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlertGroupByArgs['orderBy'] }
        : { orderBy?: AlertGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AlertGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlertGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Alert model
   */
  readonly fields: AlertFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Alert.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlertClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    panel<T extends PanelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PanelDefaultArgs<ExtArgs>>): Prisma__PanelClient<$Result.GetResult<Prisma.$PanelPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Alert model
   */ 
  interface AlertFieldRefs {
    readonly id: FieldRef<"Alert", 'String'>
    readonly panelId: FieldRef<"Alert", 'String'>
    readonly severity: FieldRef<"Alert", 'AlertSeverity'>
    readonly category: FieldRef<"Alert", 'AlertCategory'>
    readonly title: FieldRef<"Alert", 'String'>
    readonly message: FieldRef<"Alert", 'String'>
    readonly actionRequired: FieldRef<"Alert", 'String'>
    readonly estimatedLoss: FieldRef<"Alert", 'Float'>
    readonly resolved: FieldRef<"Alert", 'Boolean'>
    readonly resolvedAt: FieldRef<"Alert", 'DateTime'>
    readonly createdAt: FieldRef<"Alert", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Alert findUnique
   */
  export type AlertFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert findUniqueOrThrow
   */
  export type AlertFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert findFirst
   */
  export type AlertFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alerts.
     */
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert findFirstOrThrow
   */
  export type AlertFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alerts.
     */
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert findMany
   */
  export type AlertFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alerts to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert create
   */
  export type AlertCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * The data needed to create a Alert.
     */
    data: XOR<AlertCreateInput, AlertUncheckedCreateInput>
  }

  /**
   * Alert createMany
   */
  export type AlertCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alerts.
     */
    data: AlertCreateManyInput | AlertCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Alert update
   */
  export type AlertUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * The data needed to update a Alert.
     */
    data: XOR<AlertUpdateInput, AlertUncheckedUpdateInput>
    /**
     * Choose, which Alert to update.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert updateMany
   */
  export type AlertUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alerts.
     */
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyInput>
    /**
     * Filter which Alerts to update
     */
    where?: AlertWhereInput
  }

  /**
   * Alert upsert
   */
  export type AlertUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * The filter to search for the Alert to update in case it exists.
     */
    where: AlertWhereUniqueInput
    /**
     * In case the Alert found by the `where` argument doesn't exist, create a new Alert with this data.
     */
    create: XOR<AlertCreateInput, AlertUncheckedCreateInput>
    /**
     * In case the Alert was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlertUpdateInput, AlertUncheckedUpdateInput>
  }

  /**
   * Alert delete
   */
  export type AlertDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter which Alert to delete.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert deleteMany
   */
  export type AlertDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alerts to delete
     */
    where?: AlertWhereInput
  }

  /**
   * Alert without action
   */
  export type AlertDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
  }


  /**
   * Model DailySummary
   */

  export type AggregateDailySummary = {
    _count: DailySummaryCountAggregateOutputType | null
    _avg: DailySummaryAvgAggregateOutputType | null
    _sum: DailySummarySumAggregateOutputType | null
    _min: DailySummaryMinAggregateOutputType | null
    _max: DailySummaryMaxAggregateOutputType | null
  }

  export type DailySummaryAvgAggregateOutputType = {
    totalEnergy: number | null
    avgEfficiency: number | null
    moneySaved: number | null
    co2Offset: number | null
    peakPower: number | null
  }

  export type DailySummarySumAggregateOutputType = {
    totalEnergy: number | null
    avgEfficiency: number | null
    moneySaved: number | null
    co2Offset: number | null
    peakPower: number | null
  }

  export type DailySummaryMinAggregateOutputType = {
    id: string | null
    panelId: string | null
    date: Date | null
    totalEnergy: number | null
    avgEfficiency: number | null
    moneySaved: number | null
    co2Offset: number | null
    peakPower: number | null
    peakTime: Date | null
  }

  export type DailySummaryMaxAggregateOutputType = {
    id: string | null
    panelId: string | null
    date: Date | null
    totalEnergy: number | null
    avgEfficiency: number | null
    moneySaved: number | null
    co2Offset: number | null
    peakPower: number | null
    peakTime: Date | null
  }

  export type DailySummaryCountAggregateOutputType = {
    id: number
    panelId: number
    date: number
    totalEnergy: number
    avgEfficiency: number
    moneySaved: number
    co2Offset: number
    peakPower: number
    peakTime: number
    _all: number
  }


  export type DailySummaryAvgAggregateInputType = {
    totalEnergy?: true
    avgEfficiency?: true
    moneySaved?: true
    co2Offset?: true
    peakPower?: true
  }

  export type DailySummarySumAggregateInputType = {
    totalEnergy?: true
    avgEfficiency?: true
    moneySaved?: true
    co2Offset?: true
    peakPower?: true
  }

  export type DailySummaryMinAggregateInputType = {
    id?: true
    panelId?: true
    date?: true
    totalEnergy?: true
    avgEfficiency?: true
    moneySaved?: true
    co2Offset?: true
    peakPower?: true
    peakTime?: true
  }

  export type DailySummaryMaxAggregateInputType = {
    id?: true
    panelId?: true
    date?: true
    totalEnergy?: true
    avgEfficiency?: true
    moneySaved?: true
    co2Offset?: true
    peakPower?: true
    peakTime?: true
  }

  export type DailySummaryCountAggregateInputType = {
    id?: true
    panelId?: true
    date?: true
    totalEnergy?: true
    avgEfficiency?: true
    moneySaved?: true
    co2Offset?: true
    peakPower?: true
    peakTime?: true
    _all?: true
  }

  export type DailySummaryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailySummary to aggregate.
     */
    where?: DailySummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailySummaries to fetch.
     */
    orderBy?: DailySummaryOrderByWithRelationInput | DailySummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailySummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailySummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailySummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailySummaries
    **/
    _count?: true | DailySummaryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailySummaryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailySummarySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailySummaryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailySummaryMaxAggregateInputType
  }

  export type GetDailySummaryAggregateType<T extends DailySummaryAggregateArgs> = {
        [P in keyof T & keyof AggregateDailySummary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailySummary[P]>
      : GetScalarType<T[P], AggregateDailySummary[P]>
  }




  export type DailySummaryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailySummaryWhereInput
    orderBy?: DailySummaryOrderByWithAggregationInput | DailySummaryOrderByWithAggregationInput[]
    by: DailySummaryScalarFieldEnum[] | DailySummaryScalarFieldEnum
    having?: DailySummaryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailySummaryCountAggregateInputType | true
    _avg?: DailySummaryAvgAggregateInputType
    _sum?: DailySummarySumAggregateInputType
    _min?: DailySummaryMinAggregateInputType
    _max?: DailySummaryMaxAggregateInputType
  }

  export type DailySummaryGroupByOutputType = {
    id: string
    panelId: string
    date: Date
    totalEnergy: number
    avgEfficiency: number
    moneySaved: number
    co2Offset: number
    peakPower: number
    peakTime: Date
    _count: DailySummaryCountAggregateOutputType | null
    _avg: DailySummaryAvgAggregateOutputType | null
    _sum: DailySummarySumAggregateOutputType | null
    _min: DailySummaryMinAggregateOutputType | null
    _max: DailySummaryMaxAggregateOutputType | null
  }

  type GetDailySummaryGroupByPayload<T extends DailySummaryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailySummaryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailySummaryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailySummaryGroupByOutputType[P]>
            : GetScalarType<T[P], DailySummaryGroupByOutputType[P]>
        }
      >
    >


  export type DailySummarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    panelId?: boolean
    date?: boolean
    totalEnergy?: boolean
    avgEfficiency?: boolean
    moneySaved?: boolean
    co2Offset?: boolean
    peakPower?: boolean
    peakTime?: boolean
    panel?: boolean | PanelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailySummary"]>


  export type DailySummarySelectScalar = {
    id?: boolean
    panelId?: boolean
    date?: boolean
    totalEnergy?: boolean
    avgEfficiency?: boolean
    moneySaved?: boolean
    co2Offset?: boolean
    peakPower?: boolean
    peakTime?: boolean
  }

  export type DailySummaryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    panel?: boolean | PanelDefaultArgs<ExtArgs>
  }

  export type $DailySummaryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailySummary"
    objects: {
      panel: Prisma.$PanelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      panelId: string
      date: Date
      totalEnergy: number
      avgEfficiency: number
      moneySaved: number
      co2Offset: number
      peakPower: number
      peakTime: Date
    }, ExtArgs["result"]["dailySummary"]>
    composites: {}
  }

  type DailySummaryGetPayload<S extends boolean | null | undefined | DailySummaryDefaultArgs> = $Result.GetResult<Prisma.$DailySummaryPayload, S>

  type DailySummaryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DailySummaryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DailySummaryCountAggregateInputType | true
    }

  export interface DailySummaryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailySummary'], meta: { name: 'DailySummary' } }
    /**
     * Find zero or one DailySummary that matches the filter.
     * @param {DailySummaryFindUniqueArgs} args - Arguments to find a DailySummary
     * @example
     * // Get one DailySummary
     * const dailySummary = await prisma.dailySummary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailySummaryFindUniqueArgs>(args: SelectSubset<T, DailySummaryFindUniqueArgs<ExtArgs>>): Prisma__DailySummaryClient<$Result.GetResult<Prisma.$DailySummaryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one DailySummary that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DailySummaryFindUniqueOrThrowArgs} args - Arguments to find a DailySummary
     * @example
     * // Get one DailySummary
     * const dailySummary = await prisma.dailySummary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailySummaryFindUniqueOrThrowArgs>(args: SelectSubset<T, DailySummaryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailySummaryClient<$Result.GetResult<Prisma.$DailySummaryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first DailySummary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailySummaryFindFirstArgs} args - Arguments to find a DailySummary
     * @example
     * // Get one DailySummary
     * const dailySummary = await prisma.dailySummary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailySummaryFindFirstArgs>(args?: SelectSubset<T, DailySummaryFindFirstArgs<ExtArgs>>): Prisma__DailySummaryClient<$Result.GetResult<Prisma.$DailySummaryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first DailySummary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailySummaryFindFirstOrThrowArgs} args - Arguments to find a DailySummary
     * @example
     * // Get one DailySummary
     * const dailySummary = await prisma.dailySummary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailySummaryFindFirstOrThrowArgs>(args?: SelectSubset<T, DailySummaryFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailySummaryClient<$Result.GetResult<Prisma.$DailySummaryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more DailySummaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailySummaryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailySummaries
     * const dailySummaries = await prisma.dailySummary.findMany()
     * 
     * // Get first 10 DailySummaries
     * const dailySummaries = await prisma.dailySummary.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailySummaryWithIdOnly = await prisma.dailySummary.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailySummaryFindManyArgs>(args?: SelectSubset<T, DailySummaryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailySummaryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a DailySummary.
     * @param {DailySummaryCreateArgs} args - Arguments to create a DailySummary.
     * @example
     * // Create one DailySummary
     * const DailySummary = await prisma.dailySummary.create({
     *   data: {
     *     // ... data to create a DailySummary
     *   }
     * })
     * 
     */
    create<T extends DailySummaryCreateArgs>(args: SelectSubset<T, DailySummaryCreateArgs<ExtArgs>>): Prisma__DailySummaryClient<$Result.GetResult<Prisma.$DailySummaryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many DailySummaries.
     * @param {DailySummaryCreateManyArgs} args - Arguments to create many DailySummaries.
     * @example
     * // Create many DailySummaries
     * const dailySummary = await prisma.dailySummary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailySummaryCreateManyArgs>(args?: SelectSubset<T, DailySummaryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DailySummary.
     * @param {DailySummaryDeleteArgs} args - Arguments to delete one DailySummary.
     * @example
     * // Delete one DailySummary
     * const DailySummary = await prisma.dailySummary.delete({
     *   where: {
     *     // ... filter to delete one DailySummary
     *   }
     * })
     * 
     */
    delete<T extends DailySummaryDeleteArgs>(args: SelectSubset<T, DailySummaryDeleteArgs<ExtArgs>>): Prisma__DailySummaryClient<$Result.GetResult<Prisma.$DailySummaryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one DailySummary.
     * @param {DailySummaryUpdateArgs} args - Arguments to update one DailySummary.
     * @example
     * // Update one DailySummary
     * const dailySummary = await prisma.dailySummary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailySummaryUpdateArgs>(args: SelectSubset<T, DailySummaryUpdateArgs<ExtArgs>>): Prisma__DailySummaryClient<$Result.GetResult<Prisma.$DailySummaryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more DailySummaries.
     * @param {DailySummaryDeleteManyArgs} args - Arguments to filter DailySummaries to delete.
     * @example
     * // Delete a few DailySummaries
     * const { count } = await prisma.dailySummary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailySummaryDeleteManyArgs>(args?: SelectSubset<T, DailySummaryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailySummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailySummaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailySummaries
     * const dailySummary = await prisma.dailySummary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailySummaryUpdateManyArgs>(args: SelectSubset<T, DailySummaryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DailySummary.
     * @param {DailySummaryUpsertArgs} args - Arguments to update or create a DailySummary.
     * @example
     * // Update or create a DailySummary
     * const dailySummary = await prisma.dailySummary.upsert({
     *   create: {
     *     // ... data to create a DailySummary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailySummary we want to update
     *   }
     * })
     */
    upsert<T extends DailySummaryUpsertArgs>(args: SelectSubset<T, DailySummaryUpsertArgs<ExtArgs>>): Prisma__DailySummaryClient<$Result.GetResult<Prisma.$DailySummaryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of DailySummaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailySummaryCountArgs} args - Arguments to filter DailySummaries to count.
     * @example
     * // Count the number of DailySummaries
     * const count = await prisma.dailySummary.count({
     *   where: {
     *     // ... the filter for the DailySummaries we want to count
     *   }
     * })
    **/
    count<T extends DailySummaryCountArgs>(
      args?: Subset<T, DailySummaryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailySummaryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailySummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailySummaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DailySummaryAggregateArgs>(args: Subset<T, DailySummaryAggregateArgs>): Prisma.PrismaPromise<GetDailySummaryAggregateType<T>>

    /**
     * Group by DailySummary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailySummaryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DailySummaryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailySummaryGroupByArgs['orderBy'] }
        : { orderBy?: DailySummaryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DailySummaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailySummaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailySummary model
   */
  readonly fields: DailySummaryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailySummary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailySummaryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    panel<T extends PanelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PanelDefaultArgs<ExtArgs>>): Prisma__PanelClient<$Result.GetResult<Prisma.$PanelPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DailySummary model
   */ 
  interface DailySummaryFieldRefs {
    readonly id: FieldRef<"DailySummary", 'String'>
    readonly panelId: FieldRef<"DailySummary", 'String'>
    readonly date: FieldRef<"DailySummary", 'DateTime'>
    readonly totalEnergy: FieldRef<"DailySummary", 'Float'>
    readonly avgEfficiency: FieldRef<"DailySummary", 'Float'>
    readonly moneySaved: FieldRef<"DailySummary", 'Float'>
    readonly co2Offset: FieldRef<"DailySummary", 'Float'>
    readonly peakPower: FieldRef<"DailySummary", 'Float'>
    readonly peakTime: FieldRef<"DailySummary", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DailySummary findUnique
   */
  export type DailySummaryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySummary
     */
    select?: DailySummarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailySummaryInclude<ExtArgs> | null
    /**
     * Filter, which DailySummary to fetch.
     */
    where: DailySummaryWhereUniqueInput
  }

  /**
   * DailySummary findUniqueOrThrow
   */
  export type DailySummaryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySummary
     */
    select?: DailySummarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailySummaryInclude<ExtArgs> | null
    /**
     * Filter, which DailySummary to fetch.
     */
    where: DailySummaryWhereUniqueInput
  }

  /**
   * DailySummary findFirst
   */
  export type DailySummaryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySummary
     */
    select?: DailySummarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailySummaryInclude<ExtArgs> | null
    /**
     * Filter, which DailySummary to fetch.
     */
    where?: DailySummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailySummaries to fetch.
     */
    orderBy?: DailySummaryOrderByWithRelationInput | DailySummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailySummaries.
     */
    cursor?: DailySummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailySummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailySummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailySummaries.
     */
    distinct?: DailySummaryScalarFieldEnum | DailySummaryScalarFieldEnum[]
  }

  /**
   * DailySummary findFirstOrThrow
   */
  export type DailySummaryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySummary
     */
    select?: DailySummarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailySummaryInclude<ExtArgs> | null
    /**
     * Filter, which DailySummary to fetch.
     */
    where?: DailySummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailySummaries to fetch.
     */
    orderBy?: DailySummaryOrderByWithRelationInput | DailySummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailySummaries.
     */
    cursor?: DailySummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailySummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailySummaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailySummaries.
     */
    distinct?: DailySummaryScalarFieldEnum | DailySummaryScalarFieldEnum[]
  }

  /**
   * DailySummary findMany
   */
  export type DailySummaryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySummary
     */
    select?: DailySummarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailySummaryInclude<ExtArgs> | null
    /**
     * Filter, which DailySummaries to fetch.
     */
    where?: DailySummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailySummaries to fetch.
     */
    orderBy?: DailySummaryOrderByWithRelationInput | DailySummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailySummaries.
     */
    cursor?: DailySummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailySummaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailySummaries.
     */
    skip?: number
    distinct?: DailySummaryScalarFieldEnum | DailySummaryScalarFieldEnum[]
  }

  /**
   * DailySummary create
   */
  export type DailySummaryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySummary
     */
    select?: DailySummarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailySummaryInclude<ExtArgs> | null
    /**
     * The data needed to create a DailySummary.
     */
    data: XOR<DailySummaryCreateInput, DailySummaryUncheckedCreateInput>
  }

  /**
   * DailySummary createMany
   */
  export type DailySummaryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailySummaries.
     */
    data: DailySummaryCreateManyInput | DailySummaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailySummary update
   */
  export type DailySummaryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySummary
     */
    select?: DailySummarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailySummaryInclude<ExtArgs> | null
    /**
     * The data needed to update a DailySummary.
     */
    data: XOR<DailySummaryUpdateInput, DailySummaryUncheckedUpdateInput>
    /**
     * Choose, which DailySummary to update.
     */
    where: DailySummaryWhereUniqueInput
  }

  /**
   * DailySummary updateMany
   */
  export type DailySummaryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailySummaries.
     */
    data: XOR<DailySummaryUpdateManyMutationInput, DailySummaryUncheckedUpdateManyInput>
    /**
     * Filter which DailySummaries to update
     */
    where?: DailySummaryWhereInput
  }

  /**
   * DailySummary upsert
   */
  export type DailySummaryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySummary
     */
    select?: DailySummarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailySummaryInclude<ExtArgs> | null
    /**
     * The filter to search for the DailySummary to update in case it exists.
     */
    where: DailySummaryWhereUniqueInput
    /**
     * In case the DailySummary found by the `where` argument doesn't exist, create a new DailySummary with this data.
     */
    create: XOR<DailySummaryCreateInput, DailySummaryUncheckedCreateInput>
    /**
     * In case the DailySummary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailySummaryUpdateInput, DailySummaryUncheckedUpdateInput>
  }

  /**
   * DailySummary delete
   */
  export type DailySummaryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySummary
     */
    select?: DailySummarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailySummaryInclude<ExtArgs> | null
    /**
     * Filter which DailySummary to delete.
     */
    where: DailySummaryWhereUniqueInput
  }

  /**
   * DailySummary deleteMany
   */
  export type DailySummaryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailySummaries to delete
     */
    where?: DailySummaryWhereInput
  }

  /**
   * DailySummary without action
   */
  export type DailySummaryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailySummary
     */
    select?: DailySummarySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailySummaryInclude<ExtArgs> | null
  }


  /**
   * Model SystemConfig
   */

  export type AggregateSystemConfig = {
    _count: SystemConfigCountAggregateOutputType | null
    _avg: SystemConfigAvgAggregateOutputType | null
    _sum: SystemConfigSumAggregateOutputType | null
    _min: SystemConfigMinAggregateOutputType | null
    _max: SystemConfigMaxAggregateOutputType | null
  }

  export type SystemConfigAvgAggregateOutputType = {
    totalCapacity: number | null
    tariffRate: number | null
  }

  export type SystemConfigSumAggregateOutputType = {
    totalCapacity: number | null
    tariffRate: number | null
  }

  export type SystemConfigMinAggregateOutputType = {
    id: string | null
    userId: string | null
    systemName: string | null
    totalCapacity: number | null
    location: string | null
    tariffRate: number | null
    installDate: Date | null
  }

  export type SystemConfigMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    systemName: string | null
    totalCapacity: number | null
    location: string | null
    tariffRate: number | null
    installDate: Date | null
  }

  export type SystemConfigCountAggregateOutputType = {
    id: number
    userId: number
    systemName: number
    totalCapacity: number
    location: number
    tariffRate: number
    installDate: number
    _all: number
  }


  export type SystemConfigAvgAggregateInputType = {
    totalCapacity?: true
    tariffRate?: true
  }

  export type SystemConfigSumAggregateInputType = {
    totalCapacity?: true
    tariffRate?: true
  }

  export type SystemConfigMinAggregateInputType = {
    id?: true
    userId?: true
    systemName?: true
    totalCapacity?: true
    location?: true
    tariffRate?: true
    installDate?: true
  }

  export type SystemConfigMaxAggregateInputType = {
    id?: true
    userId?: true
    systemName?: true
    totalCapacity?: true
    location?: true
    tariffRate?: true
    installDate?: true
  }

  export type SystemConfigCountAggregateInputType = {
    id?: true
    userId?: true
    systemName?: true
    totalCapacity?: true
    location?: true
    tariffRate?: true
    installDate?: true
    _all?: true
  }

  export type SystemConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemConfig to aggregate.
     */
    where?: SystemConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemConfigs to fetch.
     */
    orderBy?: SystemConfigOrderByWithRelationInput | SystemConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SystemConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SystemConfigs
    **/
    _count?: true | SystemConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SystemConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SystemConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SystemConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SystemConfigMaxAggregateInputType
  }

  export type GetSystemConfigAggregateType<T extends SystemConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateSystemConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystemConfig[P]>
      : GetScalarType<T[P], AggregateSystemConfig[P]>
  }




  export type SystemConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SystemConfigWhereInput
    orderBy?: SystemConfigOrderByWithAggregationInput | SystemConfigOrderByWithAggregationInput[]
    by: SystemConfigScalarFieldEnum[] | SystemConfigScalarFieldEnum
    having?: SystemConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SystemConfigCountAggregateInputType | true
    _avg?: SystemConfigAvgAggregateInputType
    _sum?: SystemConfigSumAggregateInputType
    _min?: SystemConfigMinAggregateInputType
    _max?: SystemConfigMaxAggregateInputType
  }

  export type SystemConfigGroupByOutputType = {
    id: string
    userId: string
    systemName: string
    totalCapacity: number
    location: string
    tariffRate: number
    installDate: Date
    _count: SystemConfigCountAggregateOutputType | null
    _avg: SystemConfigAvgAggregateOutputType | null
    _sum: SystemConfigSumAggregateOutputType | null
    _min: SystemConfigMinAggregateOutputType | null
    _max: SystemConfigMaxAggregateOutputType | null
  }

  type GetSystemConfigGroupByPayload<T extends SystemConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SystemConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SystemConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SystemConfigGroupByOutputType[P]>
            : GetScalarType<T[P], SystemConfigGroupByOutputType[P]>
        }
      >
    >


  export type SystemConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    systemName?: boolean
    totalCapacity?: boolean
    location?: boolean
    tariffRate?: boolean
    installDate?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["systemConfig"]>


  export type SystemConfigSelectScalar = {
    id?: boolean
    userId?: boolean
    systemName?: boolean
    totalCapacity?: boolean
    location?: boolean
    tariffRate?: boolean
    installDate?: boolean
  }

  export type SystemConfigInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SystemConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SystemConfig"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      systemName: string
      totalCapacity: number
      location: string
      tariffRate: number
      installDate: Date
    }, ExtArgs["result"]["systemConfig"]>
    composites: {}
  }

  type SystemConfigGetPayload<S extends boolean | null | undefined | SystemConfigDefaultArgs> = $Result.GetResult<Prisma.$SystemConfigPayload, S>

  type SystemConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SystemConfigFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SystemConfigCountAggregateInputType | true
    }

  export interface SystemConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SystemConfig'], meta: { name: 'SystemConfig' } }
    /**
     * Find zero or one SystemConfig that matches the filter.
     * @param {SystemConfigFindUniqueArgs} args - Arguments to find a SystemConfig
     * @example
     * // Get one SystemConfig
     * const systemConfig = await prisma.systemConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SystemConfigFindUniqueArgs>(args: SelectSubset<T, SystemConfigFindUniqueArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SystemConfig that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SystemConfigFindUniqueOrThrowArgs} args - Arguments to find a SystemConfig
     * @example
     * // Get one SystemConfig
     * const systemConfig = await prisma.systemConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SystemConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, SystemConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SystemConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigFindFirstArgs} args - Arguments to find a SystemConfig
     * @example
     * // Get one SystemConfig
     * const systemConfig = await prisma.systemConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SystemConfigFindFirstArgs>(args?: SelectSubset<T, SystemConfigFindFirstArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SystemConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigFindFirstOrThrowArgs} args - Arguments to find a SystemConfig
     * @example
     * // Get one SystemConfig
     * const systemConfig = await prisma.systemConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SystemConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, SystemConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SystemConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SystemConfigs
     * const systemConfigs = await prisma.systemConfig.findMany()
     * 
     * // Get first 10 SystemConfigs
     * const systemConfigs = await prisma.systemConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const systemConfigWithIdOnly = await prisma.systemConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SystemConfigFindManyArgs>(args?: SelectSubset<T, SystemConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SystemConfig.
     * @param {SystemConfigCreateArgs} args - Arguments to create a SystemConfig.
     * @example
     * // Create one SystemConfig
     * const SystemConfig = await prisma.systemConfig.create({
     *   data: {
     *     // ... data to create a SystemConfig
     *   }
     * })
     * 
     */
    create<T extends SystemConfigCreateArgs>(args: SelectSubset<T, SystemConfigCreateArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SystemConfigs.
     * @param {SystemConfigCreateManyArgs} args - Arguments to create many SystemConfigs.
     * @example
     * // Create many SystemConfigs
     * const systemConfig = await prisma.systemConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SystemConfigCreateManyArgs>(args?: SelectSubset<T, SystemConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SystemConfig.
     * @param {SystemConfigDeleteArgs} args - Arguments to delete one SystemConfig.
     * @example
     * // Delete one SystemConfig
     * const SystemConfig = await prisma.systemConfig.delete({
     *   where: {
     *     // ... filter to delete one SystemConfig
     *   }
     * })
     * 
     */
    delete<T extends SystemConfigDeleteArgs>(args: SelectSubset<T, SystemConfigDeleteArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SystemConfig.
     * @param {SystemConfigUpdateArgs} args - Arguments to update one SystemConfig.
     * @example
     * // Update one SystemConfig
     * const systemConfig = await prisma.systemConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SystemConfigUpdateArgs>(args: SelectSubset<T, SystemConfigUpdateArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SystemConfigs.
     * @param {SystemConfigDeleteManyArgs} args - Arguments to filter SystemConfigs to delete.
     * @example
     * // Delete a few SystemConfigs
     * const { count } = await prisma.systemConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SystemConfigDeleteManyArgs>(args?: SelectSubset<T, SystemConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SystemConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SystemConfigs
     * const systemConfig = await prisma.systemConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SystemConfigUpdateManyArgs>(args: SelectSubset<T, SystemConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SystemConfig.
     * @param {SystemConfigUpsertArgs} args - Arguments to update or create a SystemConfig.
     * @example
     * // Update or create a SystemConfig
     * const systemConfig = await prisma.systemConfig.upsert({
     *   create: {
     *     // ... data to create a SystemConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SystemConfig we want to update
     *   }
     * })
     */
    upsert<T extends SystemConfigUpsertArgs>(args: SelectSubset<T, SystemConfigUpsertArgs<ExtArgs>>): Prisma__SystemConfigClient<$Result.GetResult<Prisma.$SystemConfigPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SystemConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigCountArgs} args - Arguments to filter SystemConfigs to count.
     * @example
     * // Count the number of SystemConfigs
     * const count = await prisma.systemConfig.count({
     *   where: {
     *     // ... the filter for the SystemConfigs we want to count
     *   }
     * })
    **/
    count<T extends SystemConfigCountArgs>(
      args?: Subset<T, SystemConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SystemConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SystemConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SystemConfigAggregateArgs>(args: Subset<T, SystemConfigAggregateArgs>): Prisma.PrismaPromise<GetSystemConfigAggregateType<T>>

    /**
     * Group by SystemConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SystemConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SystemConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SystemConfigGroupByArgs['orderBy'] }
        : { orderBy?: SystemConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SystemConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystemConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SystemConfig model
   */
  readonly fields: SystemConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SystemConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SystemConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SystemConfig model
   */ 
  interface SystemConfigFieldRefs {
    readonly id: FieldRef<"SystemConfig", 'String'>
    readonly userId: FieldRef<"SystemConfig", 'String'>
    readonly systemName: FieldRef<"SystemConfig", 'String'>
    readonly totalCapacity: FieldRef<"SystemConfig", 'Float'>
    readonly location: FieldRef<"SystemConfig", 'String'>
    readonly tariffRate: FieldRef<"SystemConfig", 'Float'>
    readonly installDate: FieldRef<"SystemConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SystemConfig findUnique
   */
  export type SystemConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemConfigInclude<ExtArgs> | null
    /**
     * Filter, which SystemConfig to fetch.
     */
    where: SystemConfigWhereUniqueInput
  }

  /**
   * SystemConfig findUniqueOrThrow
   */
  export type SystemConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemConfigInclude<ExtArgs> | null
    /**
     * Filter, which SystemConfig to fetch.
     */
    where: SystemConfigWhereUniqueInput
  }

  /**
   * SystemConfig findFirst
   */
  export type SystemConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemConfigInclude<ExtArgs> | null
    /**
     * Filter, which SystemConfig to fetch.
     */
    where?: SystemConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemConfigs to fetch.
     */
    orderBy?: SystemConfigOrderByWithRelationInput | SystemConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemConfigs.
     */
    cursor?: SystemConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemConfigs.
     */
    distinct?: SystemConfigScalarFieldEnum | SystemConfigScalarFieldEnum[]
  }

  /**
   * SystemConfig findFirstOrThrow
   */
  export type SystemConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemConfigInclude<ExtArgs> | null
    /**
     * Filter, which SystemConfig to fetch.
     */
    where?: SystemConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemConfigs to fetch.
     */
    orderBy?: SystemConfigOrderByWithRelationInput | SystemConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SystemConfigs.
     */
    cursor?: SystemConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SystemConfigs.
     */
    distinct?: SystemConfigScalarFieldEnum | SystemConfigScalarFieldEnum[]
  }

  /**
   * SystemConfig findMany
   */
  export type SystemConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemConfigInclude<ExtArgs> | null
    /**
     * Filter, which SystemConfigs to fetch.
     */
    where?: SystemConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SystemConfigs to fetch.
     */
    orderBy?: SystemConfigOrderByWithRelationInput | SystemConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SystemConfigs.
     */
    cursor?: SystemConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SystemConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SystemConfigs.
     */
    skip?: number
    distinct?: SystemConfigScalarFieldEnum | SystemConfigScalarFieldEnum[]
  }

  /**
   * SystemConfig create
   */
  export type SystemConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemConfigInclude<ExtArgs> | null
    /**
     * The data needed to create a SystemConfig.
     */
    data: XOR<SystemConfigCreateInput, SystemConfigUncheckedCreateInput>
  }

  /**
   * SystemConfig createMany
   */
  export type SystemConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SystemConfigs.
     */
    data: SystemConfigCreateManyInput | SystemConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SystemConfig update
   */
  export type SystemConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemConfigInclude<ExtArgs> | null
    /**
     * The data needed to update a SystemConfig.
     */
    data: XOR<SystemConfigUpdateInput, SystemConfigUncheckedUpdateInput>
    /**
     * Choose, which SystemConfig to update.
     */
    where: SystemConfigWhereUniqueInput
  }

  /**
   * SystemConfig updateMany
   */
  export type SystemConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SystemConfigs.
     */
    data: XOR<SystemConfigUpdateManyMutationInput, SystemConfigUncheckedUpdateManyInput>
    /**
     * Filter which SystemConfigs to update
     */
    where?: SystemConfigWhereInput
  }

  /**
   * SystemConfig upsert
   */
  export type SystemConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemConfigInclude<ExtArgs> | null
    /**
     * The filter to search for the SystemConfig to update in case it exists.
     */
    where: SystemConfigWhereUniqueInput
    /**
     * In case the SystemConfig found by the `where` argument doesn't exist, create a new SystemConfig with this data.
     */
    create: XOR<SystemConfigCreateInput, SystemConfigUncheckedCreateInput>
    /**
     * In case the SystemConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SystemConfigUpdateInput, SystemConfigUncheckedUpdateInput>
  }

  /**
   * SystemConfig delete
   */
  export type SystemConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemConfigInclude<ExtArgs> | null
    /**
     * Filter which SystemConfig to delete.
     */
    where: SystemConfigWhereUniqueInput
  }

  /**
   * SystemConfig deleteMany
   */
  export type SystemConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SystemConfigs to delete
     */
    where?: SystemConfigWhereInput
  }

  /**
   * SystemConfig without action
   */
  export type SystemConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SystemConfig
     */
    select?: SystemConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SystemConfigInclude<ExtArgs> | null
  }


  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _avg: SubscriptionAvgAggregateOutputType | null
    _sum: SubscriptionSumAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionAvgAggregateOutputType = {
    amountPaid: number | null
  }

  export type SubscriptionSumAggregateOutputType = {
    amountPaid: number | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    plan: $Enums.Plan | null
    status: $Enums.SubscriptionStatus | null
    startDate: Date | null
    endDate: Date | null
    razorpayOrderId: string | null
    razorpayPaymentId: string | null
    razorpaySignature: string | null
    amountPaid: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    plan: $Enums.Plan | null
    status: $Enums.SubscriptionStatus | null
    startDate: Date | null
    endDate: Date | null
    razorpayOrderId: string | null
    razorpayPaymentId: string | null
    razorpaySignature: string | null
    amountPaid: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    userId: number
    plan: number
    status: number
    startDate: number
    endDate: number
    razorpayOrderId: number
    razorpayPaymentId: number
    razorpaySignature: number
    amountPaid: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubscriptionAvgAggregateInputType = {
    amountPaid?: true
  }

  export type SubscriptionSumAggregateInputType = {
    amountPaid?: true
  }

  export type SubscriptionMinAggregateInputType = {
    id?: true
    userId?: true
    plan?: true
    status?: true
    startDate?: true
    endDate?: true
    razorpayOrderId?: true
    razorpayPaymentId?: true
    razorpaySignature?: true
    amountPaid?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    userId?: true
    plan?: true
    status?: true
    startDate?: true
    endDate?: true
    razorpayOrderId?: true
    razorpayPaymentId?: true
    razorpaySignature?: true
    amountPaid?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    userId?: true
    plan?: true
    status?: true
    startDate?: true
    endDate?: true
    razorpayOrderId?: true
    razorpayPaymentId?: true
    razorpaySignature?: true
    amountPaid?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubscriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubscriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _avg?: SubscriptionAvgAggregateInputType
    _sum?: SubscriptionSumAggregateInputType
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    id: string
    userId: string
    plan: $Enums.Plan
    status: $Enums.SubscriptionStatus
    startDate: Date
    endDate: Date
    razorpayOrderId: string | null
    razorpayPaymentId: string | null
    razorpaySignature: string | null
    amountPaid: number
    createdAt: Date
    updatedAt: Date
    _count: SubscriptionCountAggregateOutputType | null
    _avg: SubscriptionAvgAggregateOutputType | null
    _sum: SubscriptionSumAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    plan?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    razorpaySignature?: boolean
    amountPaid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>


  export type SubscriptionSelectScalar = {
    id?: boolean
    userId?: boolean
    plan?: boolean
    status?: boolean
    startDate?: boolean
    endDate?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    razorpaySignature?: boolean
    amountPaid?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      plan: $Enums.Plan
      status: $Enums.SubscriptionStatus
      startDate: Date
      endDate: Date
      razorpayOrderId: string | null
      razorpayPaymentId: string | null
      razorpaySignature: string | null
      amountPaid: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionFindManyArgs>(args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
     */
    create<T extends SubscriptionCreateArgs>(args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionCreateManyArgs>(args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionDeleteArgs>(args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionUpdateArgs>(args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subscription model
   */ 
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<"Subscription", 'String'>
    readonly userId: FieldRef<"Subscription", 'String'>
    readonly plan: FieldRef<"Subscription", 'Plan'>
    readonly status: FieldRef<"Subscription", 'SubscriptionStatus'>
    readonly startDate: FieldRef<"Subscription", 'DateTime'>
    readonly endDate: FieldRef<"Subscription", 'DateTime'>
    readonly razorpayOrderId: FieldRef<"Subscription", 'String'>
    readonly razorpayPaymentId: FieldRef<"Subscription", 'String'>
    readonly razorpaySignature: FieldRef<"Subscription", 'String'>
    readonly amountPaid: FieldRef<"Subscription", 'Float'>
    readonly createdAt: FieldRef<"Subscription", 'DateTime'>
    readonly updatedAt: FieldRef<"Subscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
  }

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model PaymentHistory
   */

  export type AggregatePaymentHistory = {
    _count: PaymentHistoryCountAggregateOutputType | null
    _avg: PaymentHistoryAvgAggregateOutputType | null
    _sum: PaymentHistorySumAggregateOutputType | null
    _min: PaymentHistoryMinAggregateOutputType | null
    _max: PaymentHistoryMaxAggregateOutputType | null
  }

  export type PaymentHistoryAvgAggregateOutputType = {
    amount: number | null
  }

  export type PaymentHistorySumAggregateOutputType = {
    amount: number | null
  }

  export type PaymentHistoryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    subscriptionId: string | null
    razorpayOrderId: string | null
    razorpayPaymentId: string | null
    amount: number | null
    currency: string | null
    plan: $Enums.Plan | null
    status: $Enums.PaymentStatus | null
    failureReason: string | null
    createdAt: Date | null
  }

  export type PaymentHistoryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    subscriptionId: string | null
    razorpayOrderId: string | null
    razorpayPaymentId: string | null
    amount: number | null
    currency: string | null
    plan: $Enums.Plan | null
    status: $Enums.PaymentStatus | null
    failureReason: string | null
    createdAt: Date | null
  }

  export type PaymentHistoryCountAggregateOutputType = {
    id: number
    userId: number
    subscriptionId: number
    razorpayOrderId: number
    razorpayPaymentId: number
    amount: number
    currency: number
    plan: number
    status: number
    failureReason: number
    createdAt: number
    _all: number
  }


  export type PaymentHistoryAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentHistorySumAggregateInputType = {
    amount?: true
  }

  export type PaymentHistoryMinAggregateInputType = {
    id?: true
    userId?: true
    subscriptionId?: true
    razorpayOrderId?: true
    razorpayPaymentId?: true
    amount?: true
    currency?: true
    plan?: true
    status?: true
    failureReason?: true
    createdAt?: true
  }

  export type PaymentHistoryMaxAggregateInputType = {
    id?: true
    userId?: true
    subscriptionId?: true
    razorpayOrderId?: true
    razorpayPaymentId?: true
    amount?: true
    currency?: true
    plan?: true
    status?: true
    failureReason?: true
    createdAt?: true
  }

  export type PaymentHistoryCountAggregateInputType = {
    id?: true
    userId?: true
    subscriptionId?: true
    razorpayOrderId?: true
    razorpayPaymentId?: true
    amount?: true
    currency?: true
    plan?: true
    status?: true
    failureReason?: true
    createdAt?: true
    _all?: true
  }

  export type PaymentHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentHistory to aggregate.
     */
    where?: PaymentHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentHistories to fetch.
     */
    orderBy?: PaymentHistoryOrderByWithRelationInput | PaymentHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentHistories
    **/
    _count?: true | PaymentHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentHistoryMaxAggregateInputType
  }

  export type GetPaymentHistoryAggregateType<T extends PaymentHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentHistory[P]>
      : GetScalarType<T[P], AggregatePaymentHistory[P]>
  }




  export type PaymentHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentHistoryWhereInput
    orderBy?: PaymentHistoryOrderByWithAggregationInput | PaymentHistoryOrderByWithAggregationInput[]
    by: PaymentHistoryScalarFieldEnum[] | PaymentHistoryScalarFieldEnum
    having?: PaymentHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentHistoryCountAggregateInputType | true
    _avg?: PaymentHistoryAvgAggregateInputType
    _sum?: PaymentHistorySumAggregateInputType
    _min?: PaymentHistoryMinAggregateInputType
    _max?: PaymentHistoryMaxAggregateInputType
  }

  export type PaymentHistoryGroupByOutputType = {
    id: string
    userId: string
    subscriptionId: string | null
    razorpayOrderId: string
    razorpayPaymentId: string | null
    amount: number
    currency: string
    plan: $Enums.Plan
    status: $Enums.PaymentStatus
    failureReason: string | null
    createdAt: Date
    _count: PaymentHistoryCountAggregateOutputType | null
    _avg: PaymentHistoryAvgAggregateOutputType | null
    _sum: PaymentHistorySumAggregateOutputType | null
    _min: PaymentHistoryMinAggregateOutputType | null
    _max: PaymentHistoryMaxAggregateOutputType | null
  }

  type GetPaymentHistoryGroupByPayload<T extends PaymentHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentHistoryGroupByOutputType[P]>
        }
      >
    >


  export type PaymentHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    subscriptionId?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    amount?: boolean
    currency?: boolean
    plan?: boolean
    status?: boolean
    failureReason?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentHistory"]>


  export type PaymentHistorySelectScalar = {
    id?: boolean
    userId?: boolean
    subscriptionId?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    amount?: boolean
    currency?: boolean
    plan?: boolean
    status?: boolean
    failureReason?: boolean
    createdAt?: boolean
  }

  export type PaymentHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PaymentHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentHistory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      subscriptionId: string | null
      razorpayOrderId: string
      razorpayPaymentId: string | null
      amount: number
      currency: string
      plan: $Enums.Plan
      status: $Enums.PaymentStatus
      failureReason: string | null
      createdAt: Date
    }, ExtArgs["result"]["paymentHistory"]>
    composites: {}
  }

  type PaymentHistoryGetPayload<S extends boolean | null | undefined | PaymentHistoryDefaultArgs> = $Result.GetResult<Prisma.$PaymentHistoryPayload, S>

  type PaymentHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PaymentHistoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PaymentHistoryCountAggregateInputType | true
    }

  export interface PaymentHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentHistory'], meta: { name: 'PaymentHistory' } }
    /**
     * Find zero or one PaymentHistory that matches the filter.
     * @param {PaymentHistoryFindUniqueArgs} args - Arguments to find a PaymentHistory
     * @example
     * // Get one PaymentHistory
     * const paymentHistory = await prisma.paymentHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentHistoryFindUniqueArgs>(args: SelectSubset<T, PaymentHistoryFindUniqueArgs<ExtArgs>>): Prisma__PaymentHistoryClient<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PaymentHistory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PaymentHistoryFindUniqueOrThrowArgs} args - Arguments to find a PaymentHistory
     * @example
     * // Get one PaymentHistory
     * const paymentHistory = await prisma.paymentHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentHistoryClient<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PaymentHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentHistoryFindFirstArgs} args - Arguments to find a PaymentHistory
     * @example
     * // Get one PaymentHistory
     * const paymentHistory = await prisma.paymentHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentHistoryFindFirstArgs>(args?: SelectSubset<T, PaymentHistoryFindFirstArgs<ExtArgs>>): Prisma__PaymentHistoryClient<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PaymentHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentHistoryFindFirstOrThrowArgs} args - Arguments to find a PaymentHistory
     * @example
     * // Get one PaymentHistory
     * const paymentHistory = await prisma.paymentHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentHistoryClient<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PaymentHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentHistories
     * const paymentHistories = await prisma.paymentHistory.findMany()
     * 
     * // Get first 10 PaymentHistories
     * const paymentHistories = await prisma.paymentHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentHistoryWithIdOnly = await prisma.paymentHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentHistoryFindManyArgs>(args?: SelectSubset<T, PaymentHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PaymentHistory.
     * @param {PaymentHistoryCreateArgs} args - Arguments to create a PaymentHistory.
     * @example
     * // Create one PaymentHistory
     * const PaymentHistory = await prisma.paymentHistory.create({
     *   data: {
     *     // ... data to create a PaymentHistory
     *   }
     * })
     * 
     */
    create<T extends PaymentHistoryCreateArgs>(args: SelectSubset<T, PaymentHistoryCreateArgs<ExtArgs>>): Prisma__PaymentHistoryClient<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PaymentHistories.
     * @param {PaymentHistoryCreateManyArgs} args - Arguments to create many PaymentHistories.
     * @example
     * // Create many PaymentHistories
     * const paymentHistory = await prisma.paymentHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentHistoryCreateManyArgs>(args?: SelectSubset<T, PaymentHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PaymentHistory.
     * @param {PaymentHistoryDeleteArgs} args - Arguments to delete one PaymentHistory.
     * @example
     * // Delete one PaymentHistory
     * const PaymentHistory = await prisma.paymentHistory.delete({
     *   where: {
     *     // ... filter to delete one PaymentHistory
     *   }
     * })
     * 
     */
    delete<T extends PaymentHistoryDeleteArgs>(args: SelectSubset<T, PaymentHistoryDeleteArgs<ExtArgs>>): Prisma__PaymentHistoryClient<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PaymentHistory.
     * @param {PaymentHistoryUpdateArgs} args - Arguments to update one PaymentHistory.
     * @example
     * // Update one PaymentHistory
     * const paymentHistory = await prisma.paymentHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentHistoryUpdateArgs>(args: SelectSubset<T, PaymentHistoryUpdateArgs<ExtArgs>>): Prisma__PaymentHistoryClient<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PaymentHistories.
     * @param {PaymentHistoryDeleteManyArgs} args - Arguments to filter PaymentHistories to delete.
     * @example
     * // Delete a few PaymentHistories
     * const { count } = await prisma.paymentHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentHistoryDeleteManyArgs>(args?: SelectSubset<T, PaymentHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentHistories
     * const paymentHistory = await prisma.paymentHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentHistoryUpdateManyArgs>(args: SelectSubset<T, PaymentHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PaymentHistory.
     * @param {PaymentHistoryUpsertArgs} args - Arguments to update or create a PaymentHistory.
     * @example
     * // Update or create a PaymentHistory
     * const paymentHistory = await prisma.paymentHistory.upsert({
     *   create: {
     *     // ... data to create a PaymentHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentHistory we want to update
     *   }
     * })
     */
    upsert<T extends PaymentHistoryUpsertArgs>(args: SelectSubset<T, PaymentHistoryUpsertArgs<ExtArgs>>): Prisma__PaymentHistoryClient<$Result.GetResult<Prisma.$PaymentHistoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PaymentHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentHistoryCountArgs} args - Arguments to filter PaymentHistories to count.
     * @example
     * // Count the number of PaymentHistories
     * const count = await prisma.paymentHistory.count({
     *   where: {
     *     // ... the filter for the PaymentHistories we want to count
     *   }
     * })
    **/
    count<T extends PaymentHistoryCountArgs>(
      args?: Subset<T, PaymentHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentHistoryAggregateArgs>(args: Subset<T, PaymentHistoryAggregateArgs>): Prisma.PrismaPromise<GetPaymentHistoryAggregateType<T>>

    /**
     * Group by PaymentHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentHistoryGroupByArgs['orderBy'] }
        : { orderBy?: PaymentHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentHistory model
   */
  readonly fields: PaymentHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PaymentHistory model
   */ 
  interface PaymentHistoryFieldRefs {
    readonly id: FieldRef<"PaymentHistory", 'String'>
    readonly userId: FieldRef<"PaymentHistory", 'String'>
    readonly subscriptionId: FieldRef<"PaymentHistory", 'String'>
    readonly razorpayOrderId: FieldRef<"PaymentHistory", 'String'>
    readonly razorpayPaymentId: FieldRef<"PaymentHistory", 'String'>
    readonly amount: FieldRef<"PaymentHistory", 'Float'>
    readonly currency: FieldRef<"PaymentHistory", 'String'>
    readonly plan: FieldRef<"PaymentHistory", 'Plan'>
    readonly status: FieldRef<"PaymentHistory", 'PaymentStatus'>
    readonly failureReason: FieldRef<"PaymentHistory", 'String'>
    readonly createdAt: FieldRef<"PaymentHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PaymentHistory findUnique
   */
  export type PaymentHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PaymentHistory to fetch.
     */
    where: PaymentHistoryWhereUniqueInput
  }

  /**
   * PaymentHistory findUniqueOrThrow
   */
  export type PaymentHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PaymentHistory to fetch.
     */
    where: PaymentHistoryWhereUniqueInput
  }

  /**
   * PaymentHistory findFirst
   */
  export type PaymentHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PaymentHistory to fetch.
     */
    where?: PaymentHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentHistories to fetch.
     */
    orderBy?: PaymentHistoryOrderByWithRelationInput | PaymentHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentHistories.
     */
    cursor?: PaymentHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentHistories.
     */
    distinct?: PaymentHistoryScalarFieldEnum | PaymentHistoryScalarFieldEnum[]
  }

  /**
   * PaymentHistory findFirstOrThrow
   */
  export type PaymentHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PaymentHistory to fetch.
     */
    where?: PaymentHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentHistories to fetch.
     */
    orderBy?: PaymentHistoryOrderByWithRelationInput | PaymentHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentHistories.
     */
    cursor?: PaymentHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentHistories.
     */
    distinct?: PaymentHistoryScalarFieldEnum | PaymentHistoryScalarFieldEnum[]
  }

  /**
   * PaymentHistory findMany
   */
  export type PaymentHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryInclude<ExtArgs> | null
    /**
     * Filter, which PaymentHistories to fetch.
     */
    where?: PaymentHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentHistories to fetch.
     */
    orderBy?: PaymentHistoryOrderByWithRelationInput | PaymentHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentHistories.
     */
    cursor?: PaymentHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentHistories.
     */
    skip?: number
    distinct?: PaymentHistoryScalarFieldEnum | PaymentHistoryScalarFieldEnum[]
  }

  /**
   * PaymentHistory create
   */
  export type PaymentHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentHistory.
     */
    data: XOR<PaymentHistoryCreateInput, PaymentHistoryUncheckedCreateInput>
  }

  /**
   * PaymentHistory createMany
   */
  export type PaymentHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentHistories.
     */
    data: PaymentHistoryCreateManyInput | PaymentHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentHistory update
   */
  export type PaymentHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentHistory.
     */
    data: XOR<PaymentHistoryUpdateInput, PaymentHistoryUncheckedUpdateInput>
    /**
     * Choose, which PaymentHistory to update.
     */
    where: PaymentHistoryWhereUniqueInput
  }

  /**
   * PaymentHistory updateMany
   */
  export type PaymentHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentHistories.
     */
    data: XOR<PaymentHistoryUpdateManyMutationInput, PaymentHistoryUncheckedUpdateManyInput>
    /**
     * Filter which PaymentHistories to update
     */
    where?: PaymentHistoryWhereInput
  }

  /**
   * PaymentHistory upsert
   */
  export type PaymentHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentHistory to update in case it exists.
     */
    where: PaymentHistoryWhereUniqueInput
    /**
     * In case the PaymentHistory found by the `where` argument doesn't exist, create a new PaymentHistory with this data.
     */
    create: XOR<PaymentHistoryCreateInput, PaymentHistoryUncheckedCreateInput>
    /**
     * In case the PaymentHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentHistoryUpdateInput, PaymentHistoryUncheckedUpdateInput>
  }

  /**
   * PaymentHistory delete
   */
  export type PaymentHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryInclude<ExtArgs> | null
    /**
     * Filter which PaymentHistory to delete.
     */
    where: PaymentHistoryWhereUniqueInput
  }

  /**
   * PaymentHistory deleteMany
   */
  export type PaymentHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentHistories to delete
     */
    where?: PaymentHistoryWhereInput
  }

  /**
   * PaymentHistory without action
   */
  export type PaymentHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentHistory
     */
    select?: PaymentHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentHistoryInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    plan: 'plan',
    currentPlan: 'currentPlan',
    planExpiresAt: 'planExpiresAt',
    isVerified: 'isVerified',
    isActive: 'isActive',
    lastLoginAt: 'lastLoginAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    token: 'token',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const PanelScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    location: 'location',
    ratedPower: 'ratedPower',
    installDate: 'installDate',
    warrantyYears: 'warrantyYears',
    isActive: 'isActive',
    currentFault: 'currentFault',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PanelScalarFieldEnum = (typeof PanelScalarFieldEnum)[keyof typeof PanelScalarFieldEnum]


  export const PanelReadingScalarFieldEnum: {
    id: 'id',
    panelId: 'panelId',
    timestamp: 'timestamp',
    voltage: 'voltage',
    current: 'current',
    power: 'power',
    temperature: 'temperature',
    irradiance: 'irradiance',
    humidity: 'humidity',
    efficiency: 'efficiency'
  };

  export type PanelReadingScalarFieldEnum = (typeof PanelReadingScalarFieldEnum)[keyof typeof PanelReadingScalarFieldEnum]


  export const AlertScalarFieldEnum: {
    id: 'id',
    panelId: 'panelId',
    severity: 'severity',
    category: 'category',
    title: 'title',
    message: 'message',
    actionRequired: 'actionRequired',
    estimatedLoss: 'estimatedLoss',
    resolved: 'resolved',
    resolvedAt: 'resolvedAt',
    createdAt: 'createdAt'
  };

  export type AlertScalarFieldEnum = (typeof AlertScalarFieldEnum)[keyof typeof AlertScalarFieldEnum]


  export const DailySummaryScalarFieldEnum: {
    id: 'id',
    panelId: 'panelId',
    date: 'date',
    totalEnergy: 'totalEnergy',
    avgEfficiency: 'avgEfficiency',
    moneySaved: 'moneySaved',
    co2Offset: 'co2Offset',
    peakPower: 'peakPower',
    peakTime: 'peakTime'
  };

  export type DailySummaryScalarFieldEnum = (typeof DailySummaryScalarFieldEnum)[keyof typeof DailySummaryScalarFieldEnum]


  export const SystemConfigScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    systemName: 'systemName',
    totalCapacity: 'totalCapacity',
    location: 'location',
    tariffRate: 'tariffRate',
    installDate: 'installDate'
  };

  export type SystemConfigScalarFieldEnum = (typeof SystemConfigScalarFieldEnum)[keyof typeof SystemConfigScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    plan: 'plan',
    status: 'status',
    startDate: 'startDate',
    endDate: 'endDate',
    razorpayOrderId: 'razorpayOrderId',
    razorpayPaymentId: 'razorpayPaymentId',
    razorpaySignature: 'razorpaySignature',
    amountPaid: 'amountPaid',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const PaymentHistoryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    subscriptionId: 'subscriptionId',
    razorpayOrderId: 'razorpayOrderId',
    razorpayPaymentId: 'razorpayPaymentId',
    amount: 'amount',
    currency: 'currency',
    plan: 'plan',
    status: 'status',
    failureReason: 'failureReason',
    createdAt: 'createdAt'
  };

  export type PaymentHistoryScalarFieldEnum = (typeof PaymentHistoryScalarFieldEnum)[keyof typeof PaymentHistoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Plan'
   */
  export type EnumPlanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Plan'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'FaultType'
   */
  export type EnumFaultTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FaultType'>
    


  /**
   * Reference to a field of type 'AlertSeverity'
   */
  export type EnumAlertSeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AlertSeverity'>
    


  /**
   * Reference to a field of type 'AlertCategory'
   */
  export type EnumAlertCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AlertCategory'>
    


  /**
   * Reference to a field of type 'SubscriptionStatus'
   */
  export type EnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    plan?: EnumPlanFilter<"User"> | $Enums.Plan
    currentPlan?: EnumPlanFilter<"User"> | $Enums.Plan
    planExpiresAt?: DateTimeNullableFilter<"User"> | Date | string | null
    isVerified?: BoolFilter<"User"> | boolean
    isActive?: BoolFilter<"User"> | boolean
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    panels?: PanelListRelationFilter
    sessions?: SessionListRelationFilter
    systemConfig?: XOR<SystemConfigNullableRelationFilter, SystemConfigWhereInput> | null
    subscriptions?: SubscriptionListRelationFilter
    paymentHistory?: PaymentHistoryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    plan?: SortOrder
    currentPlan?: SortOrder
    planExpiresAt?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    isActive?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    panels?: PanelOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    systemConfig?: SystemConfigOrderByWithRelationInput
    subscriptions?: SubscriptionOrderByRelationAggregateInput
    paymentHistory?: PaymentHistoryOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    plan?: EnumPlanFilter<"User"> | $Enums.Plan
    currentPlan?: EnumPlanFilter<"User"> | $Enums.Plan
    planExpiresAt?: DateTimeNullableFilter<"User"> | Date | string | null
    isVerified?: BoolFilter<"User"> | boolean
    isActive?: BoolFilter<"User"> | boolean
    lastLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    panels?: PanelListRelationFilter
    sessions?: SessionListRelationFilter
    systemConfig?: XOR<SystemConfigNullableRelationFilter, SystemConfigWhereInput> | null
    subscriptions?: SubscriptionListRelationFilter
    paymentHistory?: PaymentHistoryListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    plan?: SortOrder
    currentPlan?: SortOrder
    planExpiresAt?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    isActive?: SortOrder
    lastLoginAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    plan?: EnumPlanWithAggregatesFilter<"User"> | $Enums.Plan
    currentPlan?: EnumPlanWithAggregatesFilter<"User"> | $Enums.Plan
    planExpiresAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    lastLoginAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    token?: StringFilter<"Session"> | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    token?: StringWithAggregatesFilter<"Session"> | string
    ipAddress?: StringNullableWithAggregatesFilter<"Session"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Session"> | string | null
    expiresAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type PanelWhereInput = {
    AND?: PanelWhereInput | PanelWhereInput[]
    OR?: PanelWhereInput[]
    NOT?: PanelWhereInput | PanelWhereInput[]
    id?: StringFilter<"Panel"> | string
    userId?: StringFilter<"Panel"> | string
    name?: StringFilter<"Panel"> | string
    location?: StringFilter<"Panel"> | string
    ratedPower?: FloatFilter<"Panel"> | number
    installDate?: DateTimeFilter<"Panel"> | Date | string
    warrantyYears?: IntFilter<"Panel"> | number
    isActive?: BoolFilter<"Panel"> | boolean
    currentFault?: EnumFaultTypeFilter<"Panel"> | $Enums.FaultType
    createdAt?: DateTimeFilter<"Panel"> | Date | string
    updatedAt?: DateTimeFilter<"Panel"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    readings?: PanelReadingListRelationFilter
    alerts?: AlertListRelationFilter
    dailySummary?: DailySummaryListRelationFilter
  }

  export type PanelOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    location?: SortOrder
    ratedPower?: SortOrder
    installDate?: SortOrder
    warrantyYears?: SortOrder
    isActive?: SortOrder
    currentFault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    readings?: PanelReadingOrderByRelationAggregateInput
    alerts?: AlertOrderByRelationAggregateInput
    dailySummary?: DailySummaryOrderByRelationAggregateInput
  }

  export type PanelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PanelWhereInput | PanelWhereInput[]
    OR?: PanelWhereInput[]
    NOT?: PanelWhereInput | PanelWhereInput[]
    userId?: StringFilter<"Panel"> | string
    name?: StringFilter<"Panel"> | string
    location?: StringFilter<"Panel"> | string
    ratedPower?: FloatFilter<"Panel"> | number
    installDate?: DateTimeFilter<"Panel"> | Date | string
    warrantyYears?: IntFilter<"Panel"> | number
    isActive?: BoolFilter<"Panel"> | boolean
    currentFault?: EnumFaultTypeFilter<"Panel"> | $Enums.FaultType
    createdAt?: DateTimeFilter<"Panel"> | Date | string
    updatedAt?: DateTimeFilter<"Panel"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    readings?: PanelReadingListRelationFilter
    alerts?: AlertListRelationFilter
    dailySummary?: DailySummaryListRelationFilter
  }, "id">

  export type PanelOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    location?: SortOrder
    ratedPower?: SortOrder
    installDate?: SortOrder
    warrantyYears?: SortOrder
    isActive?: SortOrder
    currentFault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PanelCountOrderByAggregateInput
    _avg?: PanelAvgOrderByAggregateInput
    _max?: PanelMaxOrderByAggregateInput
    _min?: PanelMinOrderByAggregateInput
    _sum?: PanelSumOrderByAggregateInput
  }

  export type PanelScalarWhereWithAggregatesInput = {
    AND?: PanelScalarWhereWithAggregatesInput | PanelScalarWhereWithAggregatesInput[]
    OR?: PanelScalarWhereWithAggregatesInput[]
    NOT?: PanelScalarWhereWithAggregatesInput | PanelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Panel"> | string
    userId?: StringWithAggregatesFilter<"Panel"> | string
    name?: StringWithAggregatesFilter<"Panel"> | string
    location?: StringWithAggregatesFilter<"Panel"> | string
    ratedPower?: FloatWithAggregatesFilter<"Panel"> | number
    installDate?: DateTimeWithAggregatesFilter<"Panel"> | Date | string
    warrantyYears?: IntWithAggregatesFilter<"Panel"> | number
    isActive?: BoolWithAggregatesFilter<"Panel"> | boolean
    currentFault?: EnumFaultTypeWithAggregatesFilter<"Panel"> | $Enums.FaultType
    createdAt?: DateTimeWithAggregatesFilter<"Panel"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Panel"> | Date | string
  }

  export type PanelReadingWhereInput = {
    AND?: PanelReadingWhereInput | PanelReadingWhereInput[]
    OR?: PanelReadingWhereInput[]
    NOT?: PanelReadingWhereInput | PanelReadingWhereInput[]
    id?: StringFilter<"PanelReading"> | string
    panelId?: StringFilter<"PanelReading"> | string
    timestamp?: DateTimeFilter<"PanelReading"> | Date | string
    voltage?: FloatFilter<"PanelReading"> | number
    current?: FloatFilter<"PanelReading"> | number
    power?: FloatFilter<"PanelReading"> | number
    temperature?: FloatFilter<"PanelReading"> | number
    irradiance?: FloatFilter<"PanelReading"> | number
    humidity?: FloatFilter<"PanelReading"> | number
    efficiency?: FloatFilter<"PanelReading"> | number
    panel?: XOR<PanelRelationFilter, PanelWhereInput>
  }

  export type PanelReadingOrderByWithRelationInput = {
    id?: SortOrder
    panelId?: SortOrder
    timestamp?: SortOrder
    voltage?: SortOrder
    current?: SortOrder
    power?: SortOrder
    temperature?: SortOrder
    irradiance?: SortOrder
    humidity?: SortOrder
    efficiency?: SortOrder
    panel?: PanelOrderByWithRelationInput
  }

  export type PanelReadingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PanelReadingWhereInput | PanelReadingWhereInput[]
    OR?: PanelReadingWhereInput[]
    NOT?: PanelReadingWhereInput | PanelReadingWhereInput[]
    panelId?: StringFilter<"PanelReading"> | string
    timestamp?: DateTimeFilter<"PanelReading"> | Date | string
    voltage?: FloatFilter<"PanelReading"> | number
    current?: FloatFilter<"PanelReading"> | number
    power?: FloatFilter<"PanelReading"> | number
    temperature?: FloatFilter<"PanelReading"> | number
    irradiance?: FloatFilter<"PanelReading"> | number
    humidity?: FloatFilter<"PanelReading"> | number
    efficiency?: FloatFilter<"PanelReading"> | number
    panel?: XOR<PanelRelationFilter, PanelWhereInput>
  }, "id">

  export type PanelReadingOrderByWithAggregationInput = {
    id?: SortOrder
    panelId?: SortOrder
    timestamp?: SortOrder
    voltage?: SortOrder
    current?: SortOrder
    power?: SortOrder
    temperature?: SortOrder
    irradiance?: SortOrder
    humidity?: SortOrder
    efficiency?: SortOrder
    _count?: PanelReadingCountOrderByAggregateInput
    _avg?: PanelReadingAvgOrderByAggregateInput
    _max?: PanelReadingMaxOrderByAggregateInput
    _min?: PanelReadingMinOrderByAggregateInput
    _sum?: PanelReadingSumOrderByAggregateInput
  }

  export type PanelReadingScalarWhereWithAggregatesInput = {
    AND?: PanelReadingScalarWhereWithAggregatesInput | PanelReadingScalarWhereWithAggregatesInput[]
    OR?: PanelReadingScalarWhereWithAggregatesInput[]
    NOT?: PanelReadingScalarWhereWithAggregatesInput | PanelReadingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PanelReading"> | string
    panelId?: StringWithAggregatesFilter<"PanelReading"> | string
    timestamp?: DateTimeWithAggregatesFilter<"PanelReading"> | Date | string
    voltage?: FloatWithAggregatesFilter<"PanelReading"> | number
    current?: FloatWithAggregatesFilter<"PanelReading"> | number
    power?: FloatWithAggregatesFilter<"PanelReading"> | number
    temperature?: FloatWithAggregatesFilter<"PanelReading"> | number
    irradiance?: FloatWithAggregatesFilter<"PanelReading"> | number
    humidity?: FloatWithAggregatesFilter<"PanelReading"> | number
    efficiency?: FloatWithAggregatesFilter<"PanelReading"> | number
  }

  export type AlertWhereInput = {
    AND?: AlertWhereInput | AlertWhereInput[]
    OR?: AlertWhereInput[]
    NOT?: AlertWhereInput | AlertWhereInput[]
    id?: StringFilter<"Alert"> | string
    panelId?: StringFilter<"Alert"> | string
    severity?: EnumAlertSeverityFilter<"Alert"> | $Enums.AlertSeverity
    category?: EnumAlertCategoryFilter<"Alert"> | $Enums.AlertCategory
    title?: StringFilter<"Alert"> | string
    message?: StringFilter<"Alert"> | string
    actionRequired?: StringFilter<"Alert"> | string
    estimatedLoss?: FloatNullableFilter<"Alert"> | number | null
    resolved?: BoolFilter<"Alert"> | boolean
    resolvedAt?: DateTimeNullableFilter<"Alert"> | Date | string | null
    createdAt?: DateTimeFilter<"Alert"> | Date | string
    panel?: XOR<PanelRelationFilter, PanelWhereInput>
  }

  export type AlertOrderByWithRelationInput = {
    id?: SortOrder
    panelId?: SortOrder
    severity?: SortOrder
    category?: SortOrder
    title?: SortOrder
    message?: SortOrder
    actionRequired?: SortOrder
    estimatedLoss?: SortOrderInput | SortOrder
    resolved?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    panel?: PanelOrderByWithRelationInput
  }

  export type AlertWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AlertWhereInput | AlertWhereInput[]
    OR?: AlertWhereInput[]
    NOT?: AlertWhereInput | AlertWhereInput[]
    panelId?: StringFilter<"Alert"> | string
    severity?: EnumAlertSeverityFilter<"Alert"> | $Enums.AlertSeverity
    category?: EnumAlertCategoryFilter<"Alert"> | $Enums.AlertCategory
    title?: StringFilter<"Alert"> | string
    message?: StringFilter<"Alert"> | string
    actionRequired?: StringFilter<"Alert"> | string
    estimatedLoss?: FloatNullableFilter<"Alert"> | number | null
    resolved?: BoolFilter<"Alert"> | boolean
    resolvedAt?: DateTimeNullableFilter<"Alert"> | Date | string | null
    createdAt?: DateTimeFilter<"Alert"> | Date | string
    panel?: XOR<PanelRelationFilter, PanelWhereInput>
  }, "id">

  export type AlertOrderByWithAggregationInput = {
    id?: SortOrder
    panelId?: SortOrder
    severity?: SortOrder
    category?: SortOrder
    title?: SortOrder
    message?: SortOrder
    actionRequired?: SortOrder
    estimatedLoss?: SortOrderInput | SortOrder
    resolved?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AlertCountOrderByAggregateInput
    _avg?: AlertAvgOrderByAggregateInput
    _max?: AlertMaxOrderByAggregateInput
    _min?: AlertMinOrderByAggregateInput
    _sum?: AlertSumOrderByAggregateInput
  }

  export type AlertScalarWhereWithAggregatesInput = {
    AND?: AlertScalarWhereWithAggregatesInput | AlertScalarWhereWithAggregatesInput[]
    OR?: AlertScalarWhereWithAggregatesInput[]
    NOT?: AlertScalarWhereWithAggregatesInput | AlertScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Alert"> | string
    panelId?: StringWithAggregatesFilter<"Alert"> | string
    severity?: EnumAlertSeverityWithAggregatesFilter<"Alert"> | $Enums.AlertSeverity
    category?: EnumAlertCategoryWithAggregatesFilter<"Alert"> | $Enums.AlertCategory
    title?: StringWithAggregatesFilter<"Alert"> | string
    message?: StringWithAggregatesFilter<"Alert"> | string
    actionRequired?: StringWithAggregatesFilter<"Alert"> | string
    estimatedLoss?: FloatNullableWithAggregatesFilter<"Alert"> | number | null
    resolved?: BoolWithAggregatesFilter<"Alert"> | boolean
    resolvedAt?: DateTimeNullableWithAggregatesFilter<"Alert"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Alert"> | Date | string
  }

  export type DailySummaryWhereInput = {
    AND?: DailySummaryWhereInput | DailySummaryWhereInput[]
    OR?: DailySummaryWhereInput[]
    NOT?: DailySummaryWhereInput | DailySummaryWhereInput[]
    id?: StringFilter<"DailySummary"> | string
    panelId?: StringFilter<"DailySummary"> | string
    date?: DateTimeFilter<"DailySummary"> | Date | string
    totalEnergy?: FloatFilter<"DailySummary"> | number
    avgEfficiency?: FloatFilter<"DailySummary"> | number
    moneySaved?: FloatFilter<"DailySummary"> | number
    co2Offset?: FloatFilter<"DailySummary"> | number
    peakPower?: FloatFilter<"DailySummary"> | number
    peakTime?: DateTimeFilter<"DailySummary"> | Date | string
    panel?: XOR<PanelRelationFilter, PanelWhereInput>
  }

  export type DailySummaryOrderByWithRelationInput = {
    id?: SortOrder
    panelId?: SortOrder
    date?: SortOrder
    totalEnergy?: SortOrder
    avgEfficiency?: SortOrder
    moneySaved?: SortOrder
    co2Offset?: SortOrder
    peakPower?: SortOrder
    peakTime?: SortOrder
    panel?: PanelOrderByWithRelationInput
  }

  export type DailySummaryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    panelId_date?: DailySummaryPanelIdDateCompoundUniqueInput
    AND?: DailySummaryWhereInput | DailySummaryWhereInput[]
    OR?: DailySummaryWhereInput[]
    NOT?: DailySummaryWhereInput | DailySummaryWhereInput[]
    panelId?: StringFilter<"DailySummary"> | string
    date?: DateTimeFilter<"DailySummary"> | Date | string
    totalEnergy?: FloatFilter<"DailySummary"> | number
    avgEfficiency?: FloatFilter<"DailySummary"> | number
    moneySaved?: FloatFilter<"DailySummary"> | number
    co2Offset?: FloatFilter<"DailySummary"> | number
    peakPower?: FloatFilter<"DailySummary"> | number
    peakTime?: DateTimeFilter<"DailySummary"> | Date | string
    panel?: XOR<PanelRelationFilter, PanelWhereInput>
  }, "id" | "panelId_date">

  export type DailySummaryOrderByWithAggregationInput = {
    id?: SortOrder
    panelId?: SortOrder
    date?: SortOrder
    totalEnergy?: SortOrder
    avgEfficiency?: SortOrder
    moneySaved?: SortOrder
    co2Offset?: SortOrder
    peakPower?: SortOrder
    peakTime?: SortOrder
    _count?: DailySummaryCountOrderByAggregateInput
    _avg?: DailySummaryAvgOrderByAggregateInput
    _max?: DailySummaryMaxOrderByAggregateInput
    _min?: DailySummaryMinOrderByAggregateInput
    _sum?: DailySummarySumOrderByAggregateInput
  }

  export type DailySummaryScalarWhereWithAggregatesInput = {
    AND?: DailySummaryScalarWhereWithAggregatesInput | DailySummaryScalarWhereWithAggregatesInput[]
    OR?: DailySummaryScalarWhereWithAggregatesInput[]
    NOT?: DailySummaryScalarWhereWithAggregatesInput | DailySummaryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DailySummary"> | string
    panelId?: StringWithAggregatesFilter<"DailySummary"> | string
    date?: DateTimeWithAggregatesFilter<"DailySummary"> | Date | string
    totalEnergy?: FloatWithAggregatesFilter<"DailySummary"> | number
    avgEfficiency?: FloatWithAggregatesFilter<"DailySummary"> | number
    moneySaved?: FloatWithAggregatesFilter<"DailySummary"> | number
    co2Offset?: FloatWithAggregatesFilter<"DailySummary"> | number
    peakPower?: FloatWithAggregatesFilter<"DailySummary"> | number
    peakTime?: DateTimeWithAggregatesFilter<"DailySummary"> | Date | string
  }

  export type SystemConfigWhereInput = {
    AND?: SystemConfigWhereInput | SystemConfigWhereInput[]
    OR?: SystemConfigWhereInput[]
    NOT?: SystemConfigWhereInput | SystemConfigWhereInput[]
    id?: StringFilter<"SystemConfig"> | string
    userId?: StringFilter<"SystemConfig"> | string
    systemName?: StringFilter<"SystemConfig"> | string
    totalCapacity?: FloatFilter<"SystemConfig"> | number
    location?: StringFilter<"SystemConfig"> | string
    tariffRate?: FloatFilter<"SystemConfig"> | number
    installDate?: DateTimeFilter<"SystemConfig"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SystemConfigOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    systemName?: SortOrder
    totalCapacity?: SortOrder
    location?: SortOrder
    tariffRate?: SortOrder
    installDate?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SystemConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: SystemConfigWhereInput | SystemConfigWhereInput[]
    OR?: SystemConfigWhereInput[]
    NOT?: SystemConfigWhereInput | SystemConfigWhereInput[]
    systemName?: StringFilter<"SystemConfig"> | string
    totalCapacity?: FloatFilter<"SystemConfig"> | number
    location?: StringFilter<"SystemConfig"> | string
    tariffRate?: FloatFilter<"SystemConfig"> | number
    installDate?: DateTimeFilter<"SystemConfig"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type SystemConfigOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    systemName?: SortOrder
    totalCapacity?: SortOrder
    location?: SortOrder
    tariffRate?: SortOrder
    installDate?: SortOrder
    _count?: SystemConfigCountOrderByAggregateInput
    _avg?: SystemConfigAvgOrderByAggregateInput
    _max?: SystemConfigMaxOrderByAggregateInput
    _min?: SystemConfigMinOrderByAggregateInput
    _sum?: SystemConfigSumOrderByAggregateInput
  }

  export type SystemConfigScalarWhereWithAggregatesInput = {
    AND?: SystemConfigScalarWhereWithAggregatesInput | SystemConfigScalarWhereWithAggregatesInput[]
    OR?: SystemConfigScalarWhereWithAggregatesInput[]
    NOT?: SystemConfigScalarWhereWithAggregatesInput | SystemConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SystemConfig"> | string
    userId?: StringWithAggregatesFilter<"SystemConfig"> | string
    systemName?: StringWithAggregatesFilter<"SystemConfig"> | string
    totalCapacity?: FloatWithAggregatesFilter<"SystemConfig"> | number
    location?: StringWithAggregatesFilter<"SystemConfig"> | string
    tariffRate?: FloatWithAggregatesFilter<"SystemConfig"> | number
    installDate?: DateTimeWithAggregatesFilter<"SystemConfig"> | Date | string
  }

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    id?: StringFilter<"Subscription"> | string
    userId?: StringFilter<"Subscription"> | string
    plan?: EnumPlanFilter<"Subscription"> | $Enums.Plan
    status?: EnumSubscriptionStatusFilter<"Subscription"> | $Enums.SubscriptionStatus
    startDate?: DateTimeFilter<"Subscription"> | Date | string
    endDate?: DateTimeFilter<"Subscription"> | Date | string
    razorpayOrderId?: StringNullableFilter<"Subscription"> | string | null
    razorpayPaymentId?: StringNullableFilter<"Subscription"> | string | null
    razorpaySignature?: StringNullableFilter<"Subscription"> | string | null
    amountPaid?: FloatFilter<"Subscription"> | number
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    razorpayOrderId?: SortOrderInput | SortOrder
    razorpayPaymentId?: SortOrderInput | SortOrder
    razorpaySignature?: SortOrderInput | SortOrder
    amountPaid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    razorpayOrderId?: string
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    userId?: StringFilter<"Subscription"> | string
    plan?: EnumPlanFilter<"Subscription"> | $Enums.Plan
    status?: EnumSubscriptionStatusFilter<"Subscription"> | $Enums.SubscriptionStatus
    startDate?: DateTimeFilter<"Subscription"> | Date | string
    endDate?: DateTimeFilter<"Subscription"> | Date | string
    razorpayPaymentId?: StringNullableFilter<"Subscription"> | string | null
    razorpaySignature?: StringNullableFilter<"Subscription"> | string | null
    amountPaid?: FloatFilter<"Subscription"> | number
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "razorpayOrderId">

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    razorpayOrderId?: SortOrderInput | SortOrder
    razorpayPaymentId?: SortOrderInput | SortOrder
    razorpaySignature?: SortOrderInput | SortOrder
    amountPaid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _avg?: SubscriptionAvgOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
    _sum?: SubscriptionSumOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subscription"> | string
    userId?: StringWithAggregatesFilter<"Subscription"> | string
    plan?: EnumPlanWithAggregatesFilter<"Subscription"> | $Enums.Plan
    status?: EnumSubscriptionStatusWithAggregatesFilter<"Subscription"> | $Enums.SubscriptionStatus
    startDate?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    razorpayOrderId?: StringNullableWithAggregatesFilter<"Subscription"> | string | null
    razorpayPaymentId?: StringNullableWithAggregatesFilter<"Subscription"> | string | null
    razorpaySignature?: StringNullableWithAggregatesFilter<"Subscription"> | string | null
    amountPaid?: FloatWithAggregatesFilter<"Subscription"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
  }

  export type PaymentHistoryWhereInput = {
    AND?: PaymentHistoryWhereInput | PaymentHistoryWhereInput[]
    OR?: PaymentHistoryWhereInput[]
    NOT?: PaymentHistoryWhereInput | PaymentHistoryWhereInput[]
    id?: StringFilter<"PaymentHistory"> | string
    userId?: StringFilter<"PaymentHistory"> | string
    subscriptionId?: StringNullableFilter<"PaymentHistory"> | string | null
    razorpayOrderId?: StringFilter<"PaymentHistory"> | string
    razorpayPaymentId?: StringNullableFilter<"PaymentHistory"> | string | null
    amount?: FloatFilter<"PaymentHistory"> | number
    currency?: StringFilter<"PaymentHistory"> | string
    plan?: EnumPlanFilter<"PaymentHistory"> | $Enums.Plan
    status?: EnumPaymentStatusFilter<"PaymentHistory"> | $Enums.PaymentStatus
    failureReason?: StringNullableFilter<"PaymentHistory"> | string | null
    createdAt?: DateTimeFilter<"PaymentHistory"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type PaymentHistoryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    subscriptionId?: SortOrderInput | SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrderInput | SortOrder
    amount?: SortOrder
    currency?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    failureReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PaymentHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    razorpayOrderId?: string
    AND?: PaymentHistoryWhereInput | PaymentHistoryWhereInput[]
    OR?: PaymentHistoryWhereInput[]
    NOT?: PaymentHistoryWhereInput | PaymentHistoryWhereInput[]
    userId?: StringFilter<"PaymentHistory"> | string
    subscriptionId?: StringNullableFilter<"PaymentHistory"> | string | null
    razorpayPaymentId?: StringNullableFilter<"PaymentHistory"> | string | null
    amount?: FloatFilter<"PaymentHistory"> | number
    currency?: StringFilter<"PaymentHistory"> | string
    plan?: EnumPlanFilter<"PaymentHistory"> | $Enums.Plan
    status?: EnumPaymentStatusFilter<"PaymentHistory"> | $Enums.PaymentStatus
    failureReason?: StringNullableFilter<"PaymentHistory"> | string | null
    createdAt?: DateTimeFilter<"PaymentHistory"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "razorpayOrderId">

  export type PaymentHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    subscriptionId?: SortOrderInput | SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrderInput | SortOrder
    amount?: SortOrder
    currency?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    failureReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: PaymentHistoryCountOrderByAggregateInput
    _avg?: PaymentHistoryAvgOrderByAggregateInput
    _max?: PaymentHistoryMaxOrderByAggregateInput
    _min?: PaymentHistoryMinOrderByAggregateInput
    _sum?: PaymentHistorySumOrderByAggregateInput
  }

  export type PaymentHistoryScalarWhereWithAggregatesInput = {
    AND?: PaymentHistoryScalarWhereWithAggregatesInput | PaymentHistoryScalarWhereWithAggregatesInput[]
    OR?: PaymentHistoryScalarWhereWithAggregatesInput[]
    NOT?: PaymentHistoryScalarWhereWithAggregatesInput | PaymentHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PaymentHistory"> | string
    userId?: StringWithAggregatesFilter<"PaymentHistory"> | string
    subscriptionId?: StringNullableWithAggregatesFilter<"PaymentHistory"> | string | null
    razorpayOrderId?: StringWithAggregatesFilter<"PaymentHistory"> | string
    razorpayPaymentId?: StringNullableWithAggregatesFilter<"PaymentHistory"> | string | null
    amount?: FloatWithAggregatesFilter<"PaymentHistory"> | number
    currency?: StringWithAggregatesFilter<"PaymentHistory"> | string
    plan?: EnumPlanWithAggregatesFilter<"PaymentHistory"> | $Enums.Plan
    status?: EnumPaymentStatusWithAggregatesFilter<"PaymentHistory"> | $Enums.PaymentStatus
    failureReason?: StringNullableWithAggregatesFilter<"PaymentHistory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PaymentHistory"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    plan?: $Enums.Plan
    currentPlan?: $Enums.Plan
    planExpiresAt?: Date | string | null
    isVerified?: boolean
    isActive?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    panels?: PanelCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    systemConfig?: SystemConfigCreateNestedOneWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    paymentHistory?: PaymentHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    plan?: $Enums.Plan
    currentPlan?: $Enums.Plan
    planExpiresAt?: Date | string | null
    isVerified?: boolean
    isActive?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    panels?: PanelUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    systemConfig?: SystemConfigUncheckedCreateNestedOneWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    paymentHistory?: PaymentHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    currentPlan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    planExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    panels?: PanelUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    systemConfig?: SystemConfigUpdateOneWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    paymentHistory?: PaymentHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    currentPlan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    planExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    panels?: PanelUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    systemConfig?: SystemConfigUncheckedUpdateOneWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    paymentHistory?: PaymentHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    plan?: $Enums.Plan
    currentPlan?: $Enums.Plan
    planExpiresAt?: Date | string | null
    isVerified?: boolean
    isActive?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    currentPlan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    planExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    currentPlan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    planExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    token: string
    ipAddress?: string | null
    userAgent?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    userId: string
    token: string
    ipAddress?: string | null
    userAgent?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    userId: string
    token: string
    ipAddress?: string | null
    userAgent?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PanelCreateInput = {
    id?: string
    name: string
    location: string
    ratedPower: number
    installDate: Date | string
    warrantyYears?: number
    isActive?: boolean
    currentFault?: $Enums.FaultType
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPanelsInput
    readings?: PanelReadingCreateNestedManyWithoutPanelInput
    alerts?: AlertCreateNestedManyWithoutPanelInput
    dailySummary?: DailySummaryCreateNestedManyWithoutPanelInput
  }

  export type PanelUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    location: string
    ratedPower: number
    installDate: Date | string
    warrantyYears?: number
    isActive?: boolean
    currentFault?: $Enums.FaultType
    createdAt?: Date | string
    updatedAt?: Date | string
    readings?: PanelReadingUncheckedCreateNestedManyWithoutPanelInput
    alerts?: AlertUncheckedCreateNestedManyWithoutPanelInput
    dailySummary?: DailySummaryUncheckedCreateNestedManyWithoutPanelInput
  }

  export type PanelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    ratedPower?: FloatFieldUpdateOperationsInput | number
    installDate?: DateTimeFieldUpdateOperationsInput | Date | string
    warrantyYears?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    currentFault?: EnumFaultTypeFieldUpdateOperationsInput | $Enums.FaultType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPanelsNestedInput
    readings?: PanelReadingUpdateManyWithoutPanelNestedInput
    alerts?: AlertUpdateManyWithoutPanelNestedInput
    dailySummary?: DailySummaryUpdateManyWithoutPanelNestedInput
  }

  export type PanelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    ratedPower?: FloatFieldUpdateOperationsInput | number
    installDate?: DateTimeFieldUpdateOperationsInput | Date | string
    warrantyYears?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    currentFault?: EnumFaultTypeFieldUpdateOperationsInput | $Enums.FaultType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readings?: PanelReadingUncheckedUpdateManyWithoutPanelNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutPanelNestedInput
    dailySummary?: DailySummaryUncheckedUpdateManyWithoutPanelNestedInput
  }

  export type PanelCreateManyInput = {
    id?: string
    userId: string
    name: string
    location: string
    ratedPower: number
    installDate: Date | string
    warrantyYears?: number
    isActive?: boolean
    currentFault?: $Enums.FaultType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PanelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    ratedPower?: FloatFieldUpdateOperationsInput | number
    installDate?: DateTimeFieldUpdateOperationsInput | Date | string
    warrantyYears?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    currentFault?: EnumFaultTypeFieldUpdateOperationsInput | $Enums.FaultType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PanelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    ratedPower?: FloatFieldUpdateOperationsInput | number
    installDate?: DateTimeFieldUpdateOperationsInput | Date | string
    warrantyYears?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    currentFault?: EnumFaultTypeFieldUpdateOperationsInput | $Enums.FaultType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PanelReadingCreateInput = {
    id?: string
    timestamp?: Date | string
    voltage: number
    current: number
    power: number
    temperature: number
    irradiance: number
    humidity: number
    efficiency: number
    panel: PanelCreateNestedOneWithoutReadingsInput
  }

  export type PanelReadingUncheckedCreateInput = {
    id?: string
    panelId: string
    timestamp?: Date | string
    voltage: number
    current: number
    power: number
    temperature: number
    irradiance: number
    humidity: number
    efficiency: number
  }

  export type PanelReadingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    voltage?: FloatFieldUpdateOperationsInput | number
    current?: FloatFieldUpdateOperationsInput | number
    power?: FloatFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    irradiance?: FloatFieldUpdateOperationsInput | number
    humidity?: FloatFieldUpdateOperationsInput | number
    efficiency?: FloatFieldUpdateOperationsInput | number
    panel?: PanelUpdateOneRequiredWithoutReadingsNestedInput
  }

  export type PanelReadingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    panelId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    voltage?: FloatFieldUpdateOperationsInput | number
    current?: FloatFieldUpdateOperationsInput | number
    power?: FloatFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    irradiance?: FloatFieldUpdateOperationsInput | number
    humidity?: FloatFieldUpdateOperationsInput | number
    efficiency?: FloatFieldUpdateOperationsInput | number
  }

  export type PanelReadingCreateManyInput = {
    id?: string
    panelId: string
    timestamp?: Date | string
    voltage: number
    current: number
    power: number
    temperature: number
    irradiance: number
    humidity: number
    efficiency: number
  }

  export type PanelReadingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    voltage?: FloatFieldUpdateOperationsInput | number
    current?: FloatFieldUpdateOperationsInput | number
    power?: FloatFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    irradiance?: FloatFieldUpdateOperationsInput | number
    humidity?: FloatFieldUpdateOperationsInput | number
    efficiency?: FloatFieldUpdateOperationsInput | number
  }

  export type PanelReadingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    panelId?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    voltage?: FloatFieldUpdateOperationsInput | number
    current?: FloatFieldUpdateOperationsInput | number
    power?: FloatFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    irradiance?: FloatFieldUpdateOperationsInput | number
    humidity?: FloatFieldUpdateOperationsInput | number
    efficiency?: FloatFieldUpdateOperationsInput | number
  }

  export type AlertCreateInput = {
    id?: string
    severity: $Enums.AlertSeverity
    category: $Enums.AlertCategory
    title: string
    message: string
    actionRequired: string
    estimatedLoss?: number | null
    resolved?: boolean
    resolvedAt?: Date | string | null
    createdAt?: Date | string
    panel: PanelCreateNestedOneWithoutAlertsInput
  }

  export type AlertUncheckedCreateInput = {
    id?: string
    panelId: string
    severity: $Enums.AlertSeverity
    category: $Enums.AlertCategory
    title: string
    message: string
    actionRequired: string
    estimatedLoss?: number | null
    resolved?: boolean
    resolvedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type AlertUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    severity?: EnumAlertSeverityFieldUpdateOperationsInput | $Enums.AlertSeverity
    category?: EnumAlertCategoryFieldUpdateOperationsInput | $Enums.AlertCategory
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    actionRequired?: StringFieldUpdateOperationsInput | string
    estimatedLoss?: NullableFloatFieldUpdateOperationsInput | number | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    panel?: PanelUpdateOneRequiredWithoutAlertsNestedInput
  }

  export type AlertUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    panelId?: StringFieldUpdateOperationsInput | string
    severity?: EnumAlertSeverityFieldUpdateOperationsInput | $Enums.AlertSeverity
    category?: EnumAlertCategoryFieldUpdateOperationsInput | $Enums.AlertCategory
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    actionRequired?: StringFieldUpdateOperationsInput | string
    estimatedLoss?: NullableFloatFieldUpdateOperationsInput | number | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertCreateManyInput = {
    id?: string
    panelId: string
    severity: $Enums.AlertSeverity
    category: $Enums.AlertCategory
    title: string
    message: string
    actionRequired: string
    estimatedLoss?: number | null
    resolved?: boolean
    resolvedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type AlertUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    severity?: EnumAlertSeverityFieldUpdateOperationsInput | $Enums.AlertSeverity
    category?: EnumAlertCategoryFieldUpdateOperationsInput | $Enums.AlertCategory
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    actionRequired?: StringFieldUpdateOperationsInput | string
    estimatedLoss?: NullableFloatFieldUpdateOperationsInput | number | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    panelId?: StringFieldUpdateOperationsInput | string
    severity?: EnumAlertSeverityFieldUpdateOperationsInput | $Enums.AlertSeverity
    category?: EnumAlertCategoryFieldUpdateOperationsInput | $Enums.AlertCategory
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    actionRequired?: StringFieldUpdateOperationsInput | string
    estimatedLoss?: NullableFloatFieldUpdateOperationsInput | number | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailySummaryCreateInput = {
    id?: string
    date: Date | string
    totalEnergy: number
    avgEfficiency: number
    moneySaved: number
    co2Offset: number
    peakPower: number
    peakTime: Date | string
    panel: PanelCreateNestedOneWithoutDailySummaryInput
  }

  export type DailySummaryUncheckedCreateInput = {
    id?: string
    panelId: string
    date: Date | string
    totalEnergy: number
    avgEfficiency: number
    moneySaved: number
    co2Offset: number
    peakPower: number
    peakTime: Date | string
  }

  export type DailySummaryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalEnergy?: FloatFieldUpdateOperationsInput | number
    avgEfficiency?: FloatFieldUpdateOperationsInput | number
    moneySaved?: FloatFieldUpdateOperationsInput | number
    co2Offset?: FloatFieldUpdateOperationsInput | number
    peakPower?: FloatFieldUpdateOperationsInput | number
    peakTime?: DateTimeFieldUpdateOperationsInput | Date | string
    panel?: PanelUpdateOneRequiredWithoutDailySummaryNestedInput
  }

  export type DailySummaryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    panelId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalEnergy?: FloatFieldUpdateOperationsInput | number
    avgEfficiency?: FloatFieldUpdateOperationsInput | number
    moneySaved?: FloatFieldUpdateOperationsInput | number
    co2Offset?: FloatFieldUpdateOperationsInput | number
    peakPower?: FloatFieldUpdateOperationsInput | number
    peakTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailySummaryCreateManyInput = {
    id?: string
    panelId: string
    date: Date | string
    totalEnergy: number
    avgEfficiency: number
    moneySaved: number
    co2Offset: number
    peakPower: number
    peakTime: Date | string
  }

  export type DailySummaryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalEnergy?: FloatFieldUpdateOperationsInput | number
    avgEfficiency?: FloatFieldUpdateOperationsInput | number
    moneySaved?: FloatFieldUpdateOperationsInput | number
    co2Offset?: FloatFieldUpdateOperationsInput | number
    peakPower?: FloatFieldUpdateOperationsInput | number
    peakTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailySummaryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    panelId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalEnergy?: FloatFieldUpdateOperationsInput | number
    avgEfficiency?: FloatFieldUpdateOperationsInput | number
    moneySaved?: FloatFieldUpdateOperationsInput | number
    co2Offset?: FloatFieldUpdateOperationsInput | number
    peakPower?: FloatFieldUpdateOperationsInput | number
    peakTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemConfigCreateInput = {
    id?: string
    systemName?: string
    totalCapacity?: number
    location?: string
    tariffRate?: number
    installDate?: Date | string
    user: UserCreateNestedOneWithoutSystemConfigInput
  }

  export type SystemConfigUncheckedCreateInput = {
    id?: string
    userId: string
    systemName?: string
    totalCapacity?: number
    location?: string
    tariffRate?: number
    installDate?: Date | string
  }

  export type SystemConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    systemName?: StringFieldUpdateOperationsInput | string
    totalCapacity?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    tariffRate?: FloatFieldUpdateOperationsInput | number
    installDate?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSystemConfigNestedInput
  }

  export type SystemConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    systemName?: StringFieldUpdateOperationsInput | string
    totalCapacity?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    tariffRate?: FloatFieldUpdateOperationsInput | number
    installDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemConfigCreateManyInput = {
    id?: string
    userId: string
    systemName?: string
    totalCapacity?: number
    location?: string
    tariffRate?: number
    installDate?: Date | string
  }

  export type SystemConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    systemName?: StringFieldUpdateOperationsInput | string
    totalCapacity?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    tariffRate?: FloatFieldUpdateOperationsInput | number
    installDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    systemName?: StringFieldUpdateOperationsInput | string
    totalCapacity?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    tariffRate?: FloatFieldUpdateOperationsInput | number
    installDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateInput = {
    id?: string
    plan: $Enums.Plan
    status?: $Enums.SubscriptionStatus
    startDate: Date | string
    endDate: Date | string
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    amountPaid: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubscriptionsInput
  }

  export type SubscriptionUncheckedCreateInput = {
    id?: string
    userId: string
    plan: $Enums.Plan
    status?: $Enums.SubscriptionStatus
    startDate: Date | string
    endDate: Date | string
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    amountPaid: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    amountPaid?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubscriptionsNestedInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    amountPaid?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateManyInput = {
    id?: string
    userId: string
    plan: $Enums.Plan
    status?: $Enums.SubscriptionStatus
    startDate: Date | string
    endDate: Date | string
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    amountPaid: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    amountPaid?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    amountPaid?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentHistoryCreateInput = {
    id?: string
    subscriptionId?: string | null
    razorpayOrderId: string
    razorpayPaymentId?: string | null
    amount: number
    currency?: string
    plan: $Enums.Plan
    status?: $Enums.PaymentStatus
    failureReason?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPaymentHistoryInput
  }

  export type PaymentHistoryUncheckedCreateInput = {
    id?: string
    userId: string
    subscriptionId?: string | null
    razorpayOrderId: string
    razorpayPaymentId?: string | null
    amount: number
    currency?: string
    plan: $Enums.Plan
    status?: $Enums.PaymentStatus
    failureReason?: string | null
    createdAt?: Date | string
  }

  export type PaymentHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPaymentHistoryNestedInput
  }

  export type PaymentHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentHistoryCreateManyInput = {
    id?: string
    userId: string
    subscriptionId?: string | null
    razorpayOrderId: string
    razorpayPaymentId?: string | null
    amount: number
    currency?: string
    plan: $Enums.Plan
    status?: $Enums.PaymentStatus
    failureReason?: string | null
    createdAt?: Date | string
  }

  export type PaymentHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumPlanFilter<$PrismaModel = never> = {
    equals?: $Enums.Plan | EnumPlanFieldRefInput<$PrismaModel>
    in?: $Enums.Plan[]
    notIn?: $Enums.Plan[]
    not?: NestedEnumPlanFilter<$PrismaModel> | $Enums.Plan
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PanelListRelationFilter = {
    every?: PanelWhereInput
    some?: PanelWhereInput
    none?: PanelWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type SystemConfigNullableRelationFilter = {
    is?: SystemConfigWhereInput | null
    isNot?: SystemConfigWhereInput | null
  }

  export type SubscriptionListRelationFilter = {
    every?: SubscriptionWhereInput
    some?: SubscriptionWhereInput
    none?: SubscriptionWhereInput
  }

  export type PaymentHistoryListRelationFilter = {
    every?: PaymentHistoryWhereInput
    some?: PaymentHistoryWhereInput
    none?: PaymentHistoryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PanelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    plan?: SortOrder
    currentPlan?: SortOrder
    planExpiresAt?: SortOrder
    isVerified?: SortOrder
    isActive?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    plan?: SortOrder
    currentPlan?: SortOrder
    planExpiresAt?: SortOrder
    isVerified?: SortOrder
    isActive?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    plan?: SortOrder
    currentPlan?: SortOrder
    planExpiresAt?: SortOrder
    isVerified?: SortOrder
    isActive?: SortOrder
    lastLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumPlanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Plan | EnumPlanFieldRefInput<$PrismaModel>
    in?: $Enums.Plan[]
    notIn?: $Enums.Plan[]
    not?: NestedEnumPlanWithAggregatesFilter<$PrismaModel> | $Enums.Plan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanFilter<$PrismaModel>
    _max?: NestedEnumPlanFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumFaultTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FaultType | EnumFaultTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FaultType[]
    notIn?: $Enums.FaultType[]
    not?: NestedEnumFaultTypeFilter<$PrismaModel> | $Enums.FaultType
  }

  export type PanelReadingListRelationFilter = {
    every?: PanelReadingWhereInput
    some?: PanelReadingWhereInput
    none?: PanelReadingWhereInput
  }

  export type AlertListRelationFilter = {
    every?: AlertWhereInput
    some?: AlertWhereInput
    none?: AlertWhereInput
  }

  export type DailySummaryListRelationFilter = {
    every?: DailySummaryWhereInput
    some?: DailySummaryWhereInput
    none?: DailySummaryWhereInput
  }

  export type PanelReadingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlertOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DailySummaryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PanelCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    location?: SortOrder
    ratedPower?: SortOrder
    installDate?: SortOrder
    warrantyYears?: SortOrder
    isActive?: SortOrder
    currentFault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PanelAvgOrderByAggregateInput = {
    ratedPower?: SortOrder
    warrantyYears?: SortOrder
  }

  export type PanelMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    location?: SortOrder
    ratedPower?: SortOrder
    installDate?: SortOrder
    warrantyYears?: SortOrder
    isActive?: SortOrder
    currentFault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PanelMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    location?: SortOrder
    ratedPower?: SortOrder
    installDate?: SortOrder
    warrantyYears?: SortOrder
    isActive?: SortOrder
    currentFault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PanelSumOrderByAggregateInput = {
    ratedPower?: SortOrder
    warrantyYears?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumFaultTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FaultType | EnumFaultTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FaultType[]
    notIn?: $Enums.FaultType[]
    not?: NestedEnumFaultTypeWithAggregatesFilter<$PrismaModel> | $Enums.FaultType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFaultTypeFilter<$PrismaModel>
    _max?: NestedEnumFaultTypeFilter<$PrismaModel>
  }

  export type PanelRelationFilter = {
    is?: PanelWhereInput
    isNot?: PanelWhereInput
  }

  export type PanelReadingCountOrderByAggregateInput = {
    id?: SortOrder
    panelId?: SortOrder
    timestamp?: SortOrder
    voltage?: SortOrder
    current?: SortOrder
    power?: SortOrder
    temperature?: SortOrder
    irradiance?: SortOrder
    humidity?: SortOrder
    efficiency?: SortOrder
  }

  export type PanelReadingAvgOrderByAggregateInput = {
    voltage?: SortOrder
    current?: SortOrder
    power?: SortOrder
    temperature?: SortOrder
    irradiance?: SortOrder
    humidity?: SortOrder
    efficiency?: SortOrder
  }

  export type PanelReadingMaxOrderByAggregateInput = {
    id?: SortOrder
    panelId?: SortOrder
    timestamp?: SortOrder
    voltage?: SortOrder
    current?: SortOrder
    power?: SortOrder
    temperature?: SortOrder
    irradiance?: SortOrder
    humidity?: SortOrder
    efficiency?: SortOrder
  }

  export type PanelReadingMinOrderByAggregateInput = {
    id?: SortOrder
    panelId?: SortOrder
    timestamp?: SortOrder
    voltage?: SortOrder
    current?: SortOrder
    power?: SortOrder
    temperature?: SortOrder
    irradiance?: SortOrder
    humidity?: SortOrder
    efficiency?: SortOrder
  }

  export type PanelReadingSumOrderByAggregateInput = {
    voltage?: SortOrder
    current?: SortOrder
    power?: SortOrder
    temperature?: SortOrder
    irradiance?: SortOrder
    humidity?: SortOrder
    efficiency?: SortOrder
  }

  export type EnumAlertSeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertSeverity | EnumAlertSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.AlertSeverity[]
    notIn?: $Enums.AlertSeverity[]
    not?: NestedEnumAlertSeverityFilter<$PrismaModel> | $Enums.AlertSeverity
  }

  export type EnumAlertCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertCategory | EnumAlertCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.AlertCategory[]
    notIn?: $Enums.AlertCategory[]
    not?: NestedEnumAlertCategoryFilter<$PrismaModel> | $Enums.AlertCategory
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type AlertCountOrderByAggregateInput = {
    id?: SortOrder
    panelId?: SortOrder
    severity?: SortOrder
    category?: SortOrder
    title?: SortOrder
    message?: SortOrder
    actionRequired?: SortOrder
    estimatedLoss?: SortOrder
    resolved?: SortOrder
    resolvedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type AlertAvgOrderByAggregateInput = {
    estimatedLoss?: SortOrder
  }

  export type AlertMaxOrderByAggregateInput = {
    id?: SortOrder
    panelId?: SortOrder
    severity?: SortOrder
    category?: SortOrder
    title?: SortOrder
    message?: SortOrder
    actionRequired?: SortOrder
    estimatedLoss?: SortOrder
    resolved?: SortOrder
    resolvedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type AlertMinOrderByAggregateInput = {
    id?: SortOrder
    panelId?: SortOrder
    severity?: SortOrder
    category?: SortOrder
    title?: SortOrder
    message?: SortOrder
    actionRequired?: SortOrder
    estimatedLoss?: SortOrder
    resolved?: SortOrder
    resolvedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type AlertSumOrderByAggregateInput = {
    estimatedLoss?: SortOrder
  }

  export type EnumAlertSeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertSeverity | EnumAlertSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.AlertSeverity[]
    notIn?: $Enums.AlertSeverity[]
    not?: NestedEnumAlertSeverityWithAggregatesFilter<$PrismaModel> | $Enums.AlertSeverity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAlertSeverityFilter<$PrismaModel>
    _max?: NestedEnumAlertSeverityFilter<$PrismaModel>
  }

  export type EnumAlertCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertCategory | EnumAlertCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.AlertCategory[]
    notIn?: $Enums.AlertCategory[]
    not?: NestedEnumAlertCategoryWithAggregatesFilter<$PrismaModel> | $Enums.AlertCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAlertCategoryFilter<$PrismaModel>
    _max?: NestedEnumAlertCategoryFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DailySummaryPanelIdDateCompoundUniqueInput = {
    panelId: string
    date: Date | string
  }

  export type DailySummaryCountOrderByAggregateInput = {
    id?: SortOrder
    panelId?: SortOrder
    date?: SortOrder
    totalEnergy?: SortOrder
    avgEfficiency?: SortOrder
    moneySaved?: SortOrder
    co2Offset?: SortOrder
    peakPower?: SortOrder
    peakTime?: SortOrder
  }

  export type DailySummaryAvgOrderByAggregateInput = {
    totalEnergy?: SortOrder
    avgEfficiency?: SortOrder
    moneySaved?: SortOrder
    co2Offset?: SortOrder
    peakPower?: SortOrder
  }

  export type DailySummaryMaxOrderByAggregateInput = {
    id?: SortOrder
    panelId?: SortOrder
    date?: SortOrder
    totalEnergy?: SortOrder
    avgEfficiency?: SortOrder
    moneySaved?: SortOrder
    co2Offset?: SortOrder
    peakPower?: SortOrder
    peakTime?: SortOrder
  }

  export type DailySummaryMinOrderByAggregateInput = {
    id?: SortOrder
    panelId?: SortOrder
    date?: SortOrder
    totalEnergy?: SortOrder
    avgEfficiency?: SortOrder
    moneySaved?: SortOrder
    co2Offset?: SortOrder
    peakPower?: SortOrder
    peakTime?: SortOrder
  }

  export type DailySummarySumOrderByAggregateInput = {
    totalEnergy?: SortOrder
    avgEfficiency?: SortOrder
    moneySaved?: SortOrder
    co2Offset?: SortOrder
    peakPower?: SortOrder
  }

  export type SystemConfigCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    systemName?: SortOrder
    totalCapacity?: SortOrder
    location?: SortOrder
    tariffRate?: SortOrder
    installDate?: SortOrder
  }

  export type SystemConfigAvgOrderByAggregateInput = {
    totalCapacity?: SortOrder
    tariffRate?: SortOrder
  }

  export type SystemConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    systemName?: SortOrder
    totalCapacity?: SortOrder
    location?: SortOrder
    tariffRate?: SortOrder
    installDate?: SortOrder
  }

  export type SystemConfigMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    systemName?: SortOrder
    totalCapacity?: SortOrder
    location?: SortOrder
    tariffRate?: SortOrder
    installDate?: SortOrder
  }

  export type SystemConfigSumOrderByAggregateInput = {
    totalCapacity?: SortOrder
    tariffRate?: SortOrder
  }

  export type EnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[]
    notIn?: $Enums.SubscriptionStatus[]
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
  }

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrder
    razorpaySignature?: SortOrder
    amountPaid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionAvgOrderByAggregateInput = {
    amountPaid?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrder
    razorpaySignature?: SortOrder
    amountPaid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrder
    razorpaySignature?: SortOrder
    amountPaid?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionSumOrderByAggregateInput = {
    amountPaid?: SortOrder
  }

  export type EnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[]
    notIn?: $Enums.SubscriptionStatus[]
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type PaymentHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subscriptionId?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    failureReason?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentHistoryAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subscriptionId?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    failureReason?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subscriptionId?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    plan?: SortOrder
    status?: SortOrder
    failureReason?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentHistorySumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type PanelCreateNestedManyWithoutUserInput = {
    create?: XOR<PanelCreateWithoutUserInput, PanelUncheckedCreateWithoutUserInput> | PanelCreateWithoutUserInput[] | PanelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PanelCreateOrConnectWithoutUserInput | PanelCreateOrConnectWithoutUserInput[]
    createMany?: PanelCreateManyUserInputEnvelope
    connect?: PanelWhereUniqueInput | PanelWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type SystemConfigCreateNestedOneWithoutUserInput = {
    create?: XOR<SystemConfigCreateWithoutUserInput, SystemConfigUncheckedCreateWithoutUserInput>
    connectOrCreate?: SystemConfigCreateOrConnectWithoutUserInput
    connect?: SystemConfigWhereUniqueInput
  }

  export type SubscriptionCreateNestedManyWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type PaymentHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentHistoryCreateWithoutUserInput, PaymentHistoryUncheckedCreateWithoutUserInput> | PaymentHistoryCreateWithoutUserInput[] | PaymentHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentHistoryCreateOrConnectWithoutUserInput | PaymentHistoryCreateOrConnectWithoutUserInput[]
    createMany?: PaymentHistoryCreateManyUserInputEnvelope
    connect?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
  }

  export type PanelUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PanelCreateWithoutUserInput, PanelUncheckedCreateWithoutUserInput> | PanelCreateWithoutUserInput[] | PanelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PanelCreateOrConnectWithoutUserInput | PanelCreateOrConnectWithoutUserInput[]
    createMany?: PanelCreateManyUserInputEnvelope
    connect?: PanelWhereUniqueInput | PanelWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type SystemConfigUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<SystemConfigCreateWithoutUserInput, SystemConfigUncheckedCreateWithoutUserInput>
    connectOrCreate?: SystemConfigCreateOrConnectWithoutUserInput
    connect?: SystemConfigWhereUniqueInput
  }

  export type SubscriptionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type PaymentHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentHistoryCreateWithoutUserInput, PaymentHistoryUncheckedCreateWithoutUserInput> | PaymentHistoryCreateWithoutUserInput[] | PaymentHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentHistoryCreateOrConnectWithoutUserInput | PaymentHistoryCreateOrConnectWithoutUserInput[]
    createMany?: PaymentHistoryCreateManyUserInputEnvelope
    connect?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumPlanFieldUpdateOperationsInput = {
    set?: $Enums.Plan
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PanelUpdateManyWithoutUserNestedInput = {
    create?: XOR<PanelCreateWithoutUserInput, PanelUncheckedCreateWithoutUserInput> | PanelCreateWithoutUserInput[] | PanelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PanelCreateOrConnectWithoutUserInput | PanelCreateOrConnectWithoutUserInput[]
    upsert?: PanelUpsertWithWhereUniqueWithoutUserInput | PanelUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PanelCreateManyUserInputEnvelope
    set?: PanelWhereUniqueInput | PanelWhereUniqueInput[]
    disconnect?: PanelWhereUniqueInput | PanelWhereUniqueInput[]
    delete?: PanelWhereUniqueInput | PanelWhereUniqueInput[]
    connect?: PanelWhereUniqueInput | PanelWhereUniqueInput[]
    update?: PanelUpdateWithWhereUniqueWithoutUserInput | PanelUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PanelUpdateManyWithWhereWithoutUserInput | PanelUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PanelScalarWhereInput | PanelScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type SystemConfigUpdateOneWithoutUserNestedInput = {
    create?: XOR<SystemConfigCreateWithoutUserInput, SystemConfigUncheckedCreateWithoutUserInput>
    connectOrCreate?: SystemConfigCreateOrConnectWithoutUserInput
    upsert?: SystemConfigUpsertWithoutUserInput
    disconnect?: SystemConfigWhereInput | boolean
    delete?: SystemConfigWhereInput | boolean
    connect?: SystemConfigWhereUniqueInput
    update?: XOR<XOR<SystemConfigUpdateToOneWithWhereWithoutUserInput, SystemConfigUpdateWithoutUserInput>, SystemConfigUncheckedUpdateWithoutUserInput>
  }

  export type SubscriptionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutUserInput | SubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutUserInput | SubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutUserInput | SubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type PaymentHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentHistoryCreateWithoutUserInput, PaymentHistoryUncheckedCreateWithoutUserInput> | PaymentHistoryCreateWithoutUserInput[] | PaymentHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentHistoryCreateOrConnectWithoutUserInput | PaymentHistoryCreateOrConnectWithoutUserInput[]
    upsert?: PaymentHistoryUpsertWithWhereUniqueWithoutUserInput | PaymentHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentHistoryCreateManyUserInputEnvelope
    set?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    disconnect?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    delete?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    connect?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    update?: PaymentHistoryUpdateWithWhereUniqueWithoutUserInput | PaymentHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentHistoryUpdateManyWithWhereWithoutUserInput | PaymentHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentHistoryScalarWhereInput | PaymentHistoryScalarWhereInput[]
  }

  export type PanelUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PanelCreateWithoutUserInput, PanelUncheckedCreateWithoutUserInput> | PanelCreateWithoutUserInput[] | PanelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PanelCreateOrConnectWithoutUserInput | PanelCreateOrConnectWithoutUserInput[]
    upsert?: PanelUpsertWithWhereUniqueWithoutUserInput | PanelUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PanelCreateManyUserInputEnvelope
    set?: PanelWhereUniqueInput | PanelWhereUniqueInput[]
    disconnect?: PanelWhereUniqueInput | PanelWhereUniqueInput[]
    delete?: PanelWhereUniqueInput | PanelWhereUniqueInput[]
    connect?: PanelWhereUniqueInput | PanelWhereUniqueInput[]
    update?: PanelUpdateWithWhereUniqueWithoutUserInput | PanelUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PanelUpdateManyWithWhereWithoutUserInput | PanelUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PanelScalarWhereInput | PanelScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type SystemConfigUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<SystemConfigCreateWithoutUserInput, SystemConfigUncheckedCreateWithoutUserInput>
    connectOrCreate?: SystemConfigCreateOrConnectWithoutUserInput
    upsert?: SystemConfigUpsertWithoutUserInput
    disconnect?: SystemConfigWhereInput | boolean
    delete?: SystemConfigWhereInput | boolean
    connect?: SystemConfigWhereUniqueInput
    update?: XOR<XOR<SystemConfigUpdateToOneWithWhereWithoutUserInput, SystemConfigUpdateWithoutUserInput>, SystemConfigUncheckedUpdateWithoutUserInput>
  }

  export type SubscriptionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutUserInput | SubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutUserInput | SubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutUserInput | SubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type PaymentHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentHistoryCreateWithoutUserInput, PaymentHistoryUncheckedCreateWithoutUserInput> | PaymentHistoryCreateWithoutUserInput[] | PaymentHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentHistoryCreateOrConnectWithoutUserInput | PaymentHistoryCreateOrConnectWithoutUserInput[]
    upsert?: PaymentHistoryUpsertWithWhereUniqueWithoutUserInput | PaymentHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentHistoryCreateManyUserInputEnvelope
    set?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    disconnect?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    delete?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    connect?: PaymentHistoryWhereUniqueInput | PaymentHistoryWhereUniqueInput[]
    update?: PaymentHistoryUpdateWithWhereUniqueWithoutUserInput | PaymentHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentHistoryUpdateManyWithWhereWithoutUserInput | PaymentHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentHistoryScalarWhereInput | PaymentHistoryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutPanelsInput = {
    create?: XOR<UserCreateWithoutPanelsInput, UserUncheckedCreateWithoutPanelsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPanelsInput
    connect?: UserWhereUniqueInput
  }

  export type PanelReadingCreateNestedManyWithoutPanelInput = {
    create?: XOR<PanelReadingCreateWithoutPanelInput, PanelReadingUncheckedCreateWithoutPanelInput> | PanelReadingCreateWithoutPanelInput[] | PanelReadingUncheckedCreateWithoutPanelInput[]
    connectOrCreate?: PanelReadingCreateOrConnectWithoutPanelInput | PanelReadingCreateOrConnectWithoutPanelInput[]
    createMany?: PanelReadingCreateManyPanelInputEnvelope
    connect?: PanelReadingWhereUniqueInput | PanelReadingWhereUniqueInput[]
  }

  export type AlertCreateNestedManyWithoutPanelInput = {
    create?: XOR<AlertCreateWithoutPanelInput, AlertUncheckedCreateWithoutPanelInput> | AlertCreateWithoutPanelInput[] | AlertUncheckedCreateWithoutPanelInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutPanelInput | AlertCreateOrConnectWithoutPanelInput[]
    createMany?: AlertCreateManyPanelInputEnvelope
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
  }

  export type DailySummaryCreateNestedManyWithoutPanelInput = {
    create?: XOR<DailySummaryCreateWithoutPanelInput, DailySummaryUncheckedCreateWithoutPanelInput> | DailySummaryCreateWithoutPanelInput[] | DailySummaryUncheckedCreateWithoutPanelInput[]
    connectOrCreate?: DailySummaryCreateOrConnectWithoutPanelInput | DailySummaryCreateOrConnectWithoutPanelInput[]
    createMany?: DailySummaryCreateManyPanelInputEnvelope
    connect?: DailySummaryWhereUniqueInput | DailySummaryWhereUniqueInput[]
  }

  export type PanelReadingUncheckedCreateNestedManyWithoutPanelInput = {
    create?: XOR<PanelReadingCreateWithoutPanelInput, PanelReadingUncheckedCreateWithoutPanelInput> | PanelReadingCreateWithoutPanelInput[] | PanelReadingUncheckedCreateWithoutPanelInput[]
    connectOrCreate?: PanelReadingCreateOrConnectWithoutPanelInput | PanelReadingCreateOrConnectWithoutPanelInput[]
    createMany?: PanelReadingCreateManyPanelInputEnvelope
    connect?: PanelReadingWhereUniqueInput | PanelReadingWhereUniqueInput[]
  }

  export type AlertUncheckedCreateNestedManyWithoutPanelInput = {
    create?: XOR<AlertCreateWithoutPanelInput, AlertUncheckedCreateWithoutPanelInput> | AlertCreateWithoutPanelInput[] | AlertUncheckedCreateWithoutPanelInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutPanelInput | AlertCreateOrConnectWithoutPanelInput[]
    createMany?: AlertCreateManyPanelInputEnvelope
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
  }

  export type DailySummaryUncheckedCreateNestedManyWithoutPanelInput = {
    create?: XOR<DailySummaryCreateWithoutPanelInput, DailySummaryUncheckedCreateWithoutPanelInput> | DailySummaryCreateWithoutPanelInput[] | DailySummaryUncheckedCreateWithoutPanelInput[]
    connectOrCreate?: DailySummaryCreateOrConnectWithoutPanelInput | DailySummaryCreateOrConnectWithoutPanelInput[]
    createMany?: DailySummaryCreateManyPanelInputEnvelope
    connect?: DailySummaryWhereUniqueInput | DailySummaryWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumFaultTypeFieldUpdateOperationsInput = {
    set?: $Enums.FaultType
  }

  export type UserUpdateOneRequiredWithoutPanelsNestedInput = {
    create?: XOR<UserCreateWithoutPanelsInput, UserUncheckedCreateWithoutPanelsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPanelsInput
    upsert?: UserUpsertWithoutPanelsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPanelsInput, UserUpdateWithoutPanelsInput>, UserUncheckedUpdateWithoutPanelsInput>
  }

  export type PanelReadingUpdateManyWithoutPanelNestedInput = {
    create?: XOR<PanelReadingCreateWithoutPanelInput, PanelReadingUncheckedCreateWithoutPanelInput> | PanelReadingCreateWithoutPanelInput[] | PanelReadingUncheckedCreateWithoutPanelInput[]
    connectOrCreate?: PanelReadingCreateOrConnectWithoutPanelInput | PanelReadingCreateOrConnectWithoutPanelInput[]
    upsert?: PanelReadingUpsertWithWhereUniqueWithoutPanelInput | PanelReadingUpsertWithWhereUniqueWithoutPanelInput[]
    createMany?: PanelReadingCreateManyPanelInputEnvelope
    set?: PanelReadingWhereUniqueInput | PanelReadingWhereUniqueInput[]
    disconnect?: PanelReadingWhereUniqueInput | PanelReadingWhereUniqueInput[]
    delete?: PanelReadingWhereUniqueInput | PanelReadingWhereUniqueInput[]
    connect?: PanelReadingWhereUniqueInput | PanelReadingWhereUniqueInput[]
    update?: PanelReadingUpdateWithWhereUniqueWithoutPanelInput | PanelReadingUpdateWithWhereUniqueWithoutPanelInput[]
    updateMany?: PanelReadingUpdateManyWithWhereWithoutPanelInput | PanelReadingUpdateManyWithWhereWithoutPanelInput[]
    deleteMany?: PanelReadingScalarWhereInput | PanelReadingScalarWhereInput[]
  }

  export type AlertUpdateManyWithoutPanelNestedInput = {
    create?: XOR<AlertCreateWithoutPanelInput, AlertUncheckedCreateWithoutPanelInput> | AlertCreateWithoutPanelInput[] | AlertUncheckedCreateWithoutPanelInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutPanelInput | AlertCreateOrConnectWithoutPanelInput[]
    upsert?: AlertUpsertWithWhereUniqueWithoutPanelInput | AlertUpsertWithWhereUniqueWithoutPanelInput[]
    createMany?: AlertCreateManyPanelInputEnvelope
    set?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    disconnect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    delete?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    update?: AlertUpdateWithWhereUniqueWithoutPanelInput | AlertUpdateWithWhereUniqueWithoutPanelInput[]
    updateMany?: AlertUpdateManyWithWhereWithoutPanelInput | AlertUpdateManyWithWhereWithoutPanelInput[]
    deleteMany?: AlertScalarWhereInput | AlertScalarWhereInput[]
  }

  export type DailySummaryUpdateManyWithoutPanelNestedInput = {
    create?: XOR<DailySummaryCreateWithoutPanelInput, DailySummaryUncheckedCreateWithoutPanelInput> | DailySummaryCreateWithoutPanelInput[] | DailySummaryUncheckedCreateWithoutPanelInput[]
    connectOrCreate?: DailySummaryCreateOrConnectWithoutPanelInput | DailySummaryCreateOrConnectWithoutPanelInput[]
    upsert?: DailySummaryUpsertWithWhereUniqueWithoutPanelInput | DailySummaryUpsertWithWhereUniqueWithoutPanelInput[]
    createMany?: DailySummaryCreateManyPanelInputEnvelope
    set?: DailySummaryWhereUniqueInput | DailySummaryWhereUniqueInput[]
    disconnect?: DailySummaryWhereUniqueInput | DailySummaryWhereUniqueInput[]
    delete?: DailySummaryWhereUniqueInput | DailySummaryWhereUniqueInput[]
    connect?: DailySummaryWhereUniqueInput | DailySummaryWhereUniqueInput[]
    update?: DailySummaryUpdateWithWhereUniqueWithoutPanelInput | DailySummaryUpdateWithWhereUniqueWithoutPanelInput[]
    updateMany?: DailySummaryUpdateManyWithWhereWithoutPanelInput | DailySummaryUpdateManyWithWhereWithoutPanelInput[]
    deleteMany?: DailySummaryScalarWhereInput | DailySummaryScalarWhereInput[]
  }

  export type PanelReadingUncheckedUpdateManyWithoutPanelNestedInput = {
    create?: XOR<PanelReadingCreateWithoutPanelInput, PanelReadingUncheckedCreateWithoutPanelInput> | PanelReadingCreateWithoutPanelInput[] | PanelReadingUncheckedCreateWithoutPanelInput[]
    connectOrCreate?: PanelReadingCreateOrConnectWithoutPanelInput | PanelReadingCreateOrConnectWithoutPanelInput[]
    upsert?: PanelReadingUpsertWithWhereUniqueWithoutPanelInput | PanelReadingUpsertWithWhereUniqueWithoutPanelInput[]
    createMany?: PanelReadingCreateManyPanelInputEnvelope
    set?: PanelReadingWhereUniqueInput | PanelReadingWhereUniqueInput[]
    disconnect?: PanelReadingWhereUniqueInput | PanelReadingWhereUniqueInput[]
    delete?: PanelReadingWhereUniqueInput | PanelReadingWhereUniqueInput[]
    connect?: PanelReadingWhereUniqueInput | PanelReadingWhereUniqueInput[]
    update?: PanelReadingUpdateWithWhereUniqueWithoutPanelInput | PanelReadingUpdateWithWhereUniqueWithoutPanelInput[]
    updateMany?: PanelReadingUpdateManyWithWhereWithoutPanelInput | PanelReadingUpdateManyWithWhereWithoutPanelInput[]
    deleteMany?: PanelReadingScalarWhereInput | PanelReadingScalarWhereInput[]
  }

  export type AlertUncheckedUpdateManyWithoutPanelNestedInput = {
    create?: XOR<AlertCreateWithoutPanelInput, AlertUncheckedCreateWithoutPanelInput> | AlertCreateWithoutPanelInput[] | AlertUncheckedCreateWithoutPanelInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutPanelInput | AlertCreateOrConnectWithoutPanelInput[]
    upsert?: AlertUpsertWithWhereUniqueWithoutPanelInput | AlertUpsertWithWhereUniqueWithoutPanelInput[]
    createMany?: AlertCreateManyPanelInputEnvelope
    set?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    disconnect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    delete?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    update?: AlertUpdateWithWhereUniqueWithoutPanelInput | AlertUpdateWithWhereUniqueWithoutPanelInput[]
    updateMany?: AlertUpdateManyWithWhereWithoutPanelInput | AlertUpdateManyWithWhereWithoutPanelInput[]
    deleteMany?: AlertScalarWhereInput | AlertScalarWhereInput[]
  }

  export type DailySummaryUncheckedUpdateManyWithoutPanelNestedInput = {
    create?: XOR<DailySummaryCreateWithoutPanelInput, DailySummaryUncheckedCreateWithoutPanelInput> | DailySummaryCreateWithoutPanelInput[] | DailySummaryUncheckedCreateWithoutPanelInput[]
    connectOrCreate?: DailySummaryCreateOrConnectWithoutPanelInput | DailySummaryCreateOrConnectWithoutPanelInput[]
    upsert?: DailySummaryUpsertWithWhereUniqueWithoutPanelInput | DailySummaryUpsertWithWhereUniqueWithoutPanelInput[]
    createMany?: DailySummaryCreateManyPanelInputEnvelope
    set?: DailySummaryWhereUniqueInput | DailySummaryWhereUniqueInput[]
    disconnect?: DailySummaryWhereUniqueInput | DailySummaryWhereUniqueInput[]
    delete?: DailySummaryWhereUniqueInput | DailySummaryWhereUniqueInput[]
    connect?: DailySummaryWhereUniqueInput | DailySummaryWhereUniqueInput[]
    update?: DailySummaryUpdateWithWhereUniqueWithoutPanelInput | DailySummaryUpdateWithWhereUniqueWithoutPanelInput[]
    updateMany?: DailySummaryUpdateManyWithWhereWithoutPanelInput | DailySummaryUpdateManyWithWhereWithoutPanelInput[]
    deleteMany?: DailySummaryScalarWhereInput | DailySummaryScalarWhereInput[]
  }

  export type PanelCreateNestedOneWithoutReadingsInput = {
    create?: XOR<PanelCreateWithoutReadingsInput, PanelUncheckedCreateWithoutReadingsInput>
    connectOrCreate?: PanelCreateOrConnectWithoutReadingsInput
    connect?: PanelWhereUniqueInput
  }

  export type PanelUpdateOneRequiredWithoutReadingsNestedInput = {
    create?: XOR<PanelCreateWithoutReadingsInput, PanelUncheckedCreateWithoutReadingsInput>
    connectOrCreate?: PanelCreateOrConnectWithoutReadingsInput
    upsert?: PanelUpsertWithoutReadingsInput
    connect?: PanelWhereUniqueInput
    update?: XOR<XOR<PanelUpdateToOneWithWhereWithoutReadingsInput, PanelUpdateWithoutReadingsInput>, PanelUncheckedUpdateWithoutReadingsInput>
  }

  export type PanelCreateNestedOneWithoutAlertsInput = {
    create?: XOR<PanelCreateWithoutAlertsInput, PanelUncheckedCreateWithoutAlertsInput>
    connectOrCreate?: PanelCreateOrConnectWithoutAlertsInput
    connect?: PanelWhereUniqueInput
  }

  export type EnumAlertSeverityFieldUpdateOperationsInput = {
    set?: $Enums.AlertSeverity
  }

  export type EnumAlertCategoryFieldUpdateOperationsInput = {
    set?: $Enums.AlertCategory
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PanelUpdateOneRequiredWithoutAlertsNestedInput = {
    create?: XOR<PanelCreateWithoutAlertsInput, PanelUncheckedCreateWithoutAlertsInput>
    connectOrCreate?: PanelCreateOrConnectWithoutAlertsInput
    upsert?: PanelUpsertWithoutAlertsInput
    connect?: PanelWhereUniqueInput
    update?: XOR<XOR<PanelUpdateToOneWithWhereWithoutAlertsInput, PanelUpdateWithoutAlertsInput>, PanelUncheckedUpdateWithoutAlertsInput>
  }

  export type PanelCreateNestedOneWithoutDailySummaryInput = {
    create?: XOR<PanelCreateWithoutDailySummaryInput, PanelUncheckedCreateWithoutDailySummaryInput>
    connectOrCreate?: PanelCreateOrConnectWithoutDailySummaryInput
    connect?: PanelWhereUniqueInput
  }

  export type PanelUpdateOneRequiredWithoutDailySummaryNestedInput = {
    create?: XOR<PanelCreateWithoutDailySummaryInput, PanelUncheckedCreateWithoutDailySummaryInput>
    connectOrCreate?: PanelCreateOrConnectWithoutDailySummaryInput
    upsert?: PanelUpsertWithoutDailySummaryInput
    connect?: PanelWhereUniqueInput
    update?: XOR<XOR<PanelUpdateToOneWithWhereWithoutDailySummaryInput, PanelUpdateWithoutDailySummaryInput>, PanelUncheckedUpdateWithoutDailySummaryInput>
  }

  export type UserCreateNestedOneWithoutSystemConfigInput = {
    create?: XOR<UserCreateWithoutSystemConfigInput, UserUncheckedCreateWithoutSystemConfigInput>
    connectOrCreate?: UserCreateOrConnectWithoutSystemConfigInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSystemConfigNestedInput = {
    create?: XOR<UserCreateWithoutSystemConfigInput, UserUncheckedCreateWithoutSystemConfigInput>
    connectOrCreate?: UserCreateOrConnectWithoutSystemConfigInput
    upsert?: UserUpsertWithoutSystemConfigInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSystemConfigInput, UserUpdateWithoutSystemConfigInput>, UserUncheckedUpdateWithoutSystemConfigInput>
  }

  export type UserCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumSubscriptionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionStatus
  }

  export type UserUpdateOneRequiredWithoutSubscriptionsNestedInput = {
    create?: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionsInput
    upsert?: UserUpsertWithoutSubscriptionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubscriptionsInput, UserUpdateWithoutSubscriptionsInput>, UserUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type UserCreateNestedOneWithoutPaymentHistoryInput = {
    create?: XOR<UserCreateWithoutPaymentHistoryInput, UserUncheckedCreateWithoutPaymentHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type UserUpdateOneRequiredWithoutPaymentHistoryNestedInput = {
    create?: XOR<UserCreateWithoutPaymentHistoryInput, UserUncheckedCreateWithoutPaymentHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentHistoryInput
    upsert?: UserUpsertWithoutPaymentHistoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentHistoryInput, UserUpdateWithoutPaymentHistoryInput>, UserUncheckedUpdateWithoutPaymentHistoryInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumPlanFilter<$PrismaModel = never> = {
    equals?: $Enums.Plan | EnumPlanFieldRefInput<$PrismaModel>
    in?: $Enums.Plan[]
    notIn?: $Enums.Plan[]
    not?: NestedEnumPlanFilter<$PrismaModel> | $Enums.Plan
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumPlanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Plan | EnumPlanFieldRefInput<$PrismaModel>
    in?: $Enums.Plan[]
    notIn?: $Enums.Plan[]
    not?: NestedEnumPlanWithAggregatesFilter<$PrismaModel> | $Enums.Plan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanFilter<$PrismaModel>
    _max?: NestedEnumPlanFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumFaultTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FaultType | EnumFaultTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FaultType[]
    notIn?: $Enums.FaultType[]
    not?: NestedEnumFaultTypeFilter<$PrismaModel> | $Enums.FaultType
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedEnumFaultTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FaultType | EnumFaultTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FaultType[]
    notIn?: $Enums.FaultType[]
    not?: NestedEnumFaultTypeWithAggregatesFilter<$PrismaModel> | $Enums.FaultType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFaultTypeFilter<$PrismaModel>
    _max?: NestedEnumFaultTypeFilter<$PrismaModel>
  }

  export type NestedEnumAlertSeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertSeverity | EnumAlertSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.AlertSeverity[]
    notIn?: $Enums.AlertSeverity[]
    not?: NestedEnumAlertSeverityFilter<$PrismaModel> | $Enums.AlertSeverity
  }

  export type NestedEnumAlertCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertCategory | EnumAlertCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.AlertCategory[]
    notIn?: $Enums.AlertCategory[]
    not?: NestedEnumAlertCategoryFilter<$PrismaModel> | $Enums.AlertCategory
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumAlertSeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertSeverity | EnumAlertSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.AlertSeverity[]
    notIn?: $Enums.AlertSeverity[]
    not?: NestedEnumAlertSeverityWithAggregatesFilter<$PrismaModel> | $Enums.AlertSeverity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAlertSeverityFilter<$PrismaModel>
    _max?: NestedEnumAlertSeverityFilter<$PrismaModel>
  }

  export type NestedEnumAlertCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertCategory | EnumAlertCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.AlertCategory[]
    notIn?: $Enums.AlertCategory[]
    not?: NestedEnumAlertCategoryWithAggregatesFilter<$PrismaModel> | $Enums.AlertCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAlertCategoryFilter<$PrismaModel>
    _max?: NestedEnumAlertCategoryFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[]
    notIn?: $Enums.SubscriptionStatus[]
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
  }

  export type NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[]
    notIn?: $Enums.SubscriptionStatus[]
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type PanelCreateWithoutUserInput = {
    id?: string
    name: string
    location: string
    ratedPower: number
    installDate: Date | string
    warrantyYears?: number
    isActive?: boolean
    currentFault?: $Enums.FaultType
    createdAt?: Date | string
    updatedAt?: Date | string
    readings?: PanelReadingCreateNestedManyWithoutPanelInput
    alerts?: AlertCreateNestedManyWithoutPanelInput
    dailySummary?: DailySummaryCreateNestedManyWithoutPanelInput
  }

  export type PanelUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    location: string
    ratedPower: number
    installDate: Date | string
    warrantyYears?: number
    isActive?: boolean
    currentFault?: $Enums.FaultType
    createdAt?: Date | string
    updatedAt?: Date | string
    readings?: PanelReadingUncheckedCreateNestedManyWithoutPanelInput
    alerts?: AlertUncheckedCreateNestedManyWithoutPanelInput
    dailySummary?: DailySummaryUncheckedCreateNestedManyWithoutPanelInput
  }

  export type PanelCreateOrConnectWithoutUserInput = {
    where: PanelWhereUniqueInput
    create: XOR<PanelCreateWithoutUserInput, PanelUncheckedCreateWithoutUserInput>
  }

  export type PanelCreateManyUserInputEnvelope = {
    data: PanelCreateManyUserInput | PanelCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    token: string
    ipAddress?: string | null
    userAgent?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    ipAddress?: string | null
    userAgent?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SystemConfigCreateWithoutUserInput = {
    id?: string
    systemName?: string
    totalCapacity?: number
    location?: string
    tariffRate?: number
    installDate?: Date | string
  }

  export type SystemConfigUncheckedCreateWithoutUserInput = {
    id?: string
    systemName?: string
    totalCapacity?: number
    location?: string
    tariffRate?: number
    installDate?: Date | string
  }

  export type SystemConfigCreateOrConnectWithoutUserInput = {
    where: SystemConfigWhereUniqueInput
    create: XOR<SystemConfigCreateWithoutUserInput, SystemConfigUncheckedCreateWithoutUserInput>
  }

  export type SubscriptionCreateWithoutUserInput = {
    id?: string
    plan: $Enums.Plan
    status?: $Enums.SubscriptionStatus
    startDate: Date | string
    endDate: Date | string
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    amountPaid: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUncheckedCreateWithoutUserInput = {
    id?: string
    plan: $Enums.Plan
    status?: $Enums.SubscriptionStatus
    startDate: Date | string
    endDate: Date | string
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    amountPaid: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionCreateOrConnectWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
  }

  export type SubscriptionCreateManyUserInputEnvelope = {
    data: SubscriptionCreateManyUserInput | SubscriptionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PaymentHistoryCreateWithoutUserInput = {
    id?: string
    subscriptionId?: string | null
    razorpayOrderId: string
    razorpayPaymentId?: string | null
    amount: number
    currency?: string
    plan: $Enums.Plan
    status?: $Enums.PaymentStatus
    failureReason?: string | null
    createdAt?: Date | string
  }

  export type PaymentHistoryUncheckedCreateWithoutUserInput = {
    id?: string
    subscriptionId?: string | null
    razorpayOrderId: string
    razorpayPaymentId?: string | null
    amount: number
    currency?: string
    plan: $Enums.Plan
    status?: $Enums.PaymentStatus
    failureReason?: string | null
    createdAt?: Date | string
  }

  export type PaymentHistoryCreateOrConnectWithoutUserInput = {
    where: PaymentHistoryWhereUniqueInput
    create: XOR<PaymentHistoryCreateWithoutUserInput, PaymentHistoryUncheckedCreateWithoutUserInput>
  }

  export type PaymentHistoryCreateManyUserInputEnvelope = {
    data: PaymentHistoryCreateManyUserInput | PaymentHistoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PanelUpsertWithWhereUniqueWithoutUserInput = {
    where: PanelWhereUniqueInput
    update: XOR<PanelUpdateWithoutUserInput, PanelUncheckedUpdateWithoutUserInput>
    create: XOR<PanelCreateWithoutUserInput, PanelUncheckedCreateWithoutUserInput>
  }

  export type PanelUpdateWithWhereUniqueWithoutUserInput = {
    where: PanelWhereUniqueInput
    data: XOR<PanelUpdateWithoutUserInput, PanelUncheckedUpdateWithoutUserInput>
  }

  export type PanelUpdateManyWithWhereWithoutUserInput = {
    where: PanelScalarWhereInput
    data: XOR<PanelUpdateManyMutationInput, PanelUncheckedUpdateManyWithoutUserInput>
  }

  export type PanelScalarWhereInput = {
    AND?: PanelScalarWhereInput | PanelScalarWhereInput[]
    OR?: PanelScalarWhereInput[]
    NOT?: PanelScalarWhereInput | PanelScalarWhereInput[]
    id?: StringFilter<"Panel"> | string
    userId?: StringFilter<"Panel"> | string
    name?: StringFilter<"Panel"> | string
    location?: StringFilter<"Panel"> | string
    ratedPower?: FloatFilter<"Panel"> | number
    installDate?: DateTimeFilter<"Panel"> | Date | string
    warrantyYears?: IntFilter<"Panel"> | number
    isActive?: BoolFilter<"Panel"> | boolean
    currentFault?: EnumFaultTypeFilter<"Panel"> | $Enums.FaultType
    createdAt?: DateTimeFilter<"Panel"> | Date | string
    updatedAt?: DateTimeFilter<"Panel"> | Date | string
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    token?: StringFilter<"Session"> | string
    ipAddress?: StringNullableFilter<"Session"> | string | null
    userAgent?: StringNullableFilter<"Session"> | string | null
    expiresAt?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type SystemConfigUpsertWithoutUserInput = {
    update: XOR<SystemConfigUpdateWithoutUserInput, SystemConfigUncheckedUpdateWithoutUserInput>
    create: XOR<SystemConfigCreateWithoutUserInput, SystemConfigUncheckedCreateWithoutUserInput>
    where?: SystemConfigWhereInput
  }

  export type SystemConfigUpdateToOneWithWhereWithoutUserInput = {
    where?: SystemConfigWhereInput
    data: XOR<SystemConfigUpdateWithoutUserInput, SystemConfigUncheckedUpdateWithoutUserInput>
  }

  export type SystemConfigUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    systemName?: StringFieldUpdateOperationsInput | string
    totalCapacity?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    tariffRate?: FloatFieldUpdateOperationsInput | number
    installDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SystemConfigUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    systemName?: StringFieldUpdateOperationsInput | string
    totalCapacity?: FloatFieldUpdateOperationsInput | number
    location?: StringFieldUpdateOperationsInput | string
    tariffRate?: FloatFieldUpdateOperationsInput | number
    installDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUpsertWithWhereUniqueWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    update: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
  }

  export type SubscriptionUpdateWithWhereUniqueWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    data: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type SubscriptionUpdateManyWithWhereWithoutUserInput = {
    where: SubscriptionScalarWhereInput
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyWithoutUserInput>
  }

  export type SubscriptionScalarWhereInput = {
    AND?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    OR?: SubscriptionScalarWhereInput[]
    NOT?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    id?: StringFilter<"Subscription"> | string
    userId?: StringFilter<"Subscription"> | string
    plan?: EnumPlanFilter<"Subscription"> | $Enums.Plan
    status?: EnumSubscriptionStatusFilter<"Subscription"> | $Enums.SubscriptionStatus
    startDate?: DateTimeFilter<"Subscription"> | Date | string
    endDate?: DateTimeFilter<"Subscription"> | Date | string
    razorpayOrderId?: StringNullableFilter<"Subscription"> | string | null
    razorpayPaymentId?: StringNullableFilter<"Subscription"> | string | null
    razorpaySignature?: StringNullableFilter<"Subscription"> | string | null
    amountPaid?: FloatFilter<"Subscription"> | number
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
  }

  export type PaymentHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentHistoryWhereUniqueInput
    update: XOR<PaymentHistoryUpdateWithoutUserInput, PaymentHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentHistoryCreateWithoutUserInput, PaymentHistoryUncheckedCreateWithoutUserInput>
  }

  export type PaymentHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentHistoryWhereUniqueInput
    data: XOR<PaymentHistoryUpdateWithoutUserInput, PaymentHistoryUncheckedUpdateWithoutUserInput>
  }

  export type PaymentHistoryUpdateManyWithWhereWithoutUserInput = {
    where: PaymentHistoryScalarWhereInput
    data: XOR<PaymentHistoryUpdateManyMutationInput, PaymentHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type PaymentHistoryScalarWhereInput = {
    AND?: PaymentHistoryScalarWhereInput | PaymentHistoryScalarWhereInput[]
    OR?: PaymentHistoryScalarWhereInput[]
    NOT?: PaymentHistoryScalarWhereInput | PaymentHistoryScalarWhereInput[]
    id?: StringFilter<"PaymentHistory"> | string
    userId?: StringFilter<"PaymentHistory"> | string
    subscriptionId?: StringNullableFilter<"PaymentHistory"> | string | null
    razorpayOrderId?: StringFilter<"PaymentHistory"> | string
    razorpayPaymentId?: StringNullableFilter<"PaymentHistory"> | string | null
    amount?: FloatFilter<"PaymentHistory"> | number
    currency?: StringFilter<"PaymentHistory"> | string
    plan?: EnumPlanFilter<"PaymentHistory"> | $Enums.Plan
    status?: EnumPaymentStatusFilter<"PaymentHistory"> | $Enums.PaymentStatus
    failureReason?: StringNullableFilter<"PaymentHistory"> | string | null
    createdAt?: DateTimeFilter<"PaymentHistory"> | Date | string
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    plan?: $Enums.Plan
    currentPlan?: $Enums.Plan
    planExpiresAt?: Date | string | null
    isVerified?: boolean
    isActive?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    panels?: PanelCreateNestedManyWithoutUserInput
    systemConfig?: SystemConfigCreateNestedOneWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    paymentHistory?: PaymentHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    plan?: $Enums.Plan
    currentPlan?: $Enums.Plan
    planExpiresAt?: Date | string | null
    isVerified?: boolean
    isActive?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    panels?: PanelUncheckedCreateNestedManyWithoutUserInput
    systemConfig?: SystemConfigUncheckedCreateNestedOneWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    paymentHistory?: PaymentHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    currentPlan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    planExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    panels?: PanelUpdateManyWithoutUserNestedInput
    systemConfig?: SystemConfigUpdateOneWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    paymentHistory?: PaymentHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    currentPlan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    planExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    panels?: PanelUncheckedUpdateManyWithoutUserNestedInput
    systemConfig?: SystemConfigUncheckedUpdateOneWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    paymentHistory?: PaymentHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPanelsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    plan?: $Enums.Plan
    currentPlan?: $Enums.Plan
    planExpiresAt?: Date | string | null
    isVerified?: boolean
    isActive?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    systemConfig?: SystemConfigCreateNestedOneWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    paymentHistory?: PaymentHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPanelsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    plan?: $Enums.Plan
    currentPlan?: $Enums.Plan
    planExpiresAt?: Date | string | null
    isVerified?: boolean
    isActive?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    systemConfig?: SystemConfigUncheckedCreateNestedOneWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    paymentHistory?: PaymentHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPanelsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPanelsInput, UserUncheckedCreateWithoutPanelsInput>
  }

  export type PanelReadingCreateWithoutPanelInput = {
    id?: string
    timestamp?: Date | string
    voltage: number
    current: number
    power: number
    temperature: number
    irradiance: number
    humidity: number
    efficiency: number
  }

  export type PanelReadingUncheckedCreateWithoutPanelInput = {
    id?: string
    timestamp?: Date | string
    voltage: number
    current: number
    power: number
    temperature: number
    irradiance: number
    humidity: number
    efficiency: number
  }

  export type PanelReadingCreateOrConnectWithoutPanelInput = {
    where: PanelReadingWhereUniqueInput
    create: XOR<PanelReadingCreateWithoutPanelInput, PanelReadingUncheckedCreateWithoutPanelInput>
  }

  export type PanelReadingCreateManyPanelInputEnvelope = {
    data: PanelReadingCreateManyPanelInput | PanelReadingCreateManyPanelInput[]
    skipDuplicates?: boolean
  }

  export type AlertCreateWithoutPanelInput = {
    id?: string
    severity: $Enums.AlertSeverity
    category: $Enums.AlertCategory
    title: string
    message: string
    actionRequired: string
    estimatedLoss?: number | null
    resolved?: boolean
    resolvedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type AlertUncheckedCreateWithoutPanelInput = {
    id?: string
    severity: $Enums.AlertSeverity
    category: $Enums.AlertCategory
    title: string
    message: string
    actionRequired: string
    estimatedLoss?: number | null
    resolved?: boolean
    resolvedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type AlertCreateOrConnectWithoutPanelInput = {
    where: AlertWhereUniqueInput
    create: XOR<AlertCreateWithoutPanelInput, AlertUncheckedCreateWithoutPanelInput>
  }

  export type AlertCreateManyPanelInputEnvelope = {
    data: AlertCreateManyPanelInput | AlertCreateManyPanelInput[]
    skipDuplicates?: boolean
  }

  export type DailySummaryCreateWithoutPanelInput = {
    id?: string
    date: Date | string
    totalEnergy: number
    avgEfficiency: number
    moneySaved: number
    co2Offset: number
    peakPower: number
    peakTime: Date | string
  }

  export type DailySummaryUncheckedCreateWithoutPanelInput = {
    id?: string
    date: Date | string
    totalEnergy: number
    avgEfficiency: number
    moneySaved: number
    co2Offset: number
    peakPower: number
    peakTime: Date | string
  }

  export type DailySummaryCreateOrConnectWithoutPanelInput = {
    where: DailySummaryWhereUniqueInput
    create: XOR<DailySummaryCreateWithoutPanelInput, DailySummaryUncheckedCreateWithoutPanelInput>
  }

  export type DailySummaryCreateManyPanelInputEnvelope = {
    data: DailySummaryCreateManyPanelInput | DailySummaryCreateManyPanelInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPanelsInput = {
    update: XOR<UserUpdateWithoutPanelsInput, UserUncheckedUpdateWithoutPanelsInput>
    create: XOR<UserCreateWithoutPanelsInput, UserUncheckedCreateWithoutPanelsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPanelsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPanelsInput, UserUncheckedUpdateWithoutPanelsInput>
  }

  export type UserUpdateWithoutPanelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    currentPlan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    planExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    systemConfig?: SystemConfigUpdateOneWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    paymentHistory?: PaymentHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPanelsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    currentPlan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    planExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    systemConfig?: SystemConfigUncheckedUpdateOneWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    paymentHistory?: PaymentHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PanelReadingUpsertWithWhereUniqueWithoutPanelInput = {
    where: PanelReadingWhereUniqueInput
    update: XOR<PanelReadingUpdateWithoutPanelInput, PanelReadingUncheckedUpdateWithoutPanelInput>
    create: XOR<PanelReadingCreateWithoutPanelInput, PanelReadingUncheckedCreateWithoutPanelInput>
  }

  export type PanelReadingUpdateWithWhereUniqueWithoutPanelInput = {
    where: PanelReadingWhereUniqueInput
    data: XOR<PanelReadingUpdateWithoutPanelInput, PanelReadingUncheckedUpdateWithoutPanelInput>
  }

  export type PanelReadingUpdateManyWithWhereWithoutPanelInput = {
    where: PanelReadingScalarWhereInput
    data: XOR<PanelReadingUpdateManyMutationInput, PanelReadingUncheckedUpdateManyWithoutPanelInput>
  }

  export type PanelReadingScalarWhereInput = {
    AND?: PanelReadingScalarWhereInput | PanelReadingScalarWhereInput[]
    OR?: PanelReadingScalarWhereInput[]
    NOT?: PanelReadingScalarWhereInput | PanelReadingScalarWhereInput[]
    id?: StringFilter<"PanelReading"> | string
    panelId?: StringFilter<"PanelReading"> | string
    timestamp?: DateTimeFilter<"PanelReading"> | Date | string
    voltage?: FloatFilter<"PanelReading"> | number
    current?: FloatFilter<"PanelReading"> | number
    power?: FloatFilter<"PanelReading"> | number
    temperature?: FloatFilter<"PanelReading"> | number
    irradiance?: FloatFilter<"PanelReading"> | number
    humidity?: FloatFilter<"PanelReading"> | number
    efficiency?: FloatFilter<"PanelReading"> | number
  }

  export type AlertUpsertWithWhereUniqueWithoutPanelInput = {
    where: AlertWhereUniqueInput
    update: XOR<AlertUpdateWithoutPanelInput, AlertUncheckedUpdateWithoutPanelInput>
    create: XOR<AlertCreateWithoutPanelInput, AlertUncheckedCreateWithoutPanelInput>
  }

  export type AlertUpdateWithWhereUniqueWithoutPanelInput = {
    where: AlertWhereUniqueInput
    data: XOR<AlertUpdateWithoutPanelInput, AlertUncheckedUpdateWithoutPanelInput>
  }

  export type AlertUpdateManyWithWhereWithoutPanelInput = {
    where: AlertScalarWhereInput
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyWithoutPanelInput>
  }

  export type AlertScalarWhereInput = {
    AND?: AlertScalarWhereInput | AlertScalarWhereInput[]
    OR?: AlertScalarWhereInput[]
    NOT?: AlertScalarWhereInput | AlertScalarWhereInput[]
    id?: StringFilter<"Alert"> | string
    panelId?: StringFilter<"Alert"> | string
    severity?: EnumAlertSeverityFilter<"Alert"> | $Enums.AlertSeverity
    category?: EnumAlertCategoryFilter<"Alert"> | $Enums.AlertCategory
    title?: StringFilter<"Alert"> | string
    message?: StringFilter<"Alert"> | string
    actionRequired?: StringFilter<"Alert"> | string
    estimatedLoss?: FloatNullableFilter<"Alert"> | number | null
    resolved?: BoolFilter<"Alert"> | boolean
    resolvedAt?: DateTimeNullableFilter<"Alert"> | Date | string | null
    createdAt?: DateTimeFilter<"Alert"> | Date | string
  }

  export type DailySummaryUpsertWithWhereUniqueWithoutPanelInput = {
    where: DailySummaryWhereUniqueInput
    update: XOR<DailySummaryUpdateWithoutPanelInput, DailySummaryUncheckedUpdateWithoutPanelInput>
    create: XOR<DailySummaryCreateWithoutPanelInput, DailySummaryUncheckedCreateWithoutPanelInput>
  }

  export type DailySummaryUpdateWithWhereUniqueWithoutPanelInput = {
    where: DailySummaryWhereUniqueInput
    data: XOR<DailySummaryUpdateWithoutPanelInput, DailySummaryUncheckedUpdateWithoutPanelInput>
  }

  export type DailySummaryUpdateManyWithWhereWithoutPanelInput = {
    where: DailySummaryScalarWhereInput
    data: XOR<DailySummaryUpdateManyMutationInput, DailySummaryUncheckedUpdateManyWithoutPanelInput>
  }

  export type DailySummaryScalarWhereInput = {
    AND?: DailySummaryScalarWhereInput | DailySummaryScalarWhereInput[]
    OR?: DailySummaryScalarWhereInput[]
    NOT?: DailySummaryScalarWhereInput | DailySummaryScalarWhereInput[]
    id?: StringFilter<"DailySummary"> | string
    panelId?: StringFilter<"DailySummary"> | string
    date?: DateTimeFilter<"DailySummary"> | Date | string
    totalEnergy?: FloatFilter<"DailySummary"> | number
    avgEfficiency?: FloatFilter<"DailySummary"> | number
    moneySaved?: FloatFilter<"DailySummary"> | number
    co2Offset?: FloatFilter<"DailySummary"> | number
    peakPower?: FloatFilter<"DailySummary"> | number
    peakTime?: DateTimeFilter<"DailySummary"> | Date | string
  }

  export type PanelCreateWithoutReadingsInput = {
    id?: string
    name: string
    location: string
    ratedPower: number
    installDate: Date | string
    warrantyYears?: number
    isActive?: boolean
    currentFault?: $Enums.FaultType
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPanelsInput
    alerts?: AlertCreateNestedManyWithoutPanelInput
    dailySummary?: DailySummaryCreateNestedManyWithoutPanelInput
  }

  export type PanelUncheckedCreateWithoutReadingsInput = {
    id?: string
    userId: string
    name: string
    location: string
    ratedPower: number
    installDate: Date | string
    warrantyYears?: number
    isActive?: boolean
    currentFault?: $Enums.FaultType
    createdAt?: Date | string
    updatedAt?: Date | string
    alerts?: AlertUncheckedCreateNestedManyWithoutPanelInput
    dailySummary?: DailySummaryUncheckedCreateNestedManyWithoutPanelInput
  }

  export type PanelCreateOrConnectWithoutReadingsInput = {
    where: PanelWhereUniqueInput
    create: XOR<PanelCreateWithoutReadingsInput, PanelUncheckedCreateWithoutReadingsInput>
  }

  export type PanelUpsertWithoutReadingsInput = {
    update: XOR<PanelUpdateWithoutReadingsInput, PanelUncheckedUpdateWithoutReadingsInput>
    create: XOR<PanelCreateWithoutReadingsInput, PanelUncheckedCreateWithoutReadingsInput>
    where?: PanelWhereInput
  }

  export type PanelUpdateToOneWithWhereWithoutReadingsInput = {
    where?: PanelWhereInput
    data: XOR<PanelUpdateWithoutReadingsInput, PanelUncheckedUpdateWithoutReadingsInput>
  }

  export type PanelUpdateWithoutReadingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    ratedPower?: FloatFieldUpdateOperationsInput | number
    installDate?: DateTimeFieldUpdateOperationsInput | Date | string
    warrantyYears?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    currentFault?: EnumFaultTypeFieldUpdateOperationsInput | $Enums.FaultType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPanelsNestedInput
    alerts?: AlertUpdateManyWithoutPanelNestedInput
    dailySummary?: DailySummaryUpdateManyWithoutPanelNestedInput
  }

  export type PanelUncheckedUpdateWithoutReadingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    ratedPower?: FloatFieldUpdateOperationsInput | number
    installDate?: DateTimeFieldUpdateOperationsInput | Date | string
    warrantyYears?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    currentFault?: EnumFaultTypeFieldUpdateOperationsInput | $Enums.FaultType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    alerts?: AlertUncheckedUpdateManyWithoutPanelNestedInput
    dailySummary?: DailySummaryUncheckedUpdateManyWithoutPanelNestedInput
  }

  export type PanelCreateWithoutAlertsInput = {
    id?: string
    name: string
    location: string
    ratedPower: number
    installDate: Date | string
    warrantyYears?: number
    isActive?: boolean
    currentFault?: $Enums.FaultType
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPanelsInput
    readings?: PanelReadingCreateNestedManyWithoutPanelInput
    dailySummary?: DailySummaryCreateNestedManyWithoutPanelInput
  }

  export type PanelUncheckedCreateWithoutAlertsInput = {
    id?: string
    userId: string
    name: string
    location: string
    ratedPower: number
    installDate: Date | string
    warrantyYears?: number
    isActive?: boolean
    currentFault?: $Enums.FaultType
    createdAt?: Date | string
    updatedAt?: Date | string
    readings?: PanelReadingUncheckedCreateNestedManyWithoutPanelInput
    dailySummary?: DailySummaryUncheckedCreateNestedManyWithoutPanelInput
  }

  export type PanelCreateOrConnectWithoutAlertsInput = {
    where: PanelWhereUniqueInput
    create: XOR<PanelCreateWithoutAlertsInput, PanelUncheckedCreateWithoutAlertsInput>
  }

  export type PanelUpsertWithoutAlertsInput = {
    update: XOR<PanelUpdateWithoutAlertsInput, PanelUncheckedUpdateWithoutAlertsInput>
    create: XOR<PanelCreateWithoutAlertsInput, PanelUncheckedCreateWithoutAlertsInput>
    where?: PanelWhereInput
  }

  export type PanelUpdateToOneWithWhereWithoutAlertsInput = {
    where?: PanelWhereInput
    data: XOR<PanelUpdateWithoutAlertsInput, PanelUncheckedUpdateWithoutAlertsInput>
  }

  export type PanelUpdateWithoutAlertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    ratedPower?: FloatFieldUpdateOperationsInput | number
    installDate?: DateTimeFieldUpdateOperationsInput | Date | string
    warrantyYears?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    currentFault?: EnumFaultTypeFieldUpdateOperationsInput | $Enums.FaultType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPanelsNestedInput
    readings?: PanelReadingUpdateManyWithoutPanelNestedInput
    dailySummary?: DailySummaryUpdateManyWithoutPanelNestedInput
  }

  export type PanelUncheckedUpdateWithoutAlertsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    ratedPower?: FloatFieldUpdateOperationsInput | number
    installDate?: DateTimeFieldUpdateOperationsInput | Date | string
    warrantyYears?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    currentFault?: EnumFaultTypeFieldUpdateOperationsInput | $Enums.FaultType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readings?: PanelReadingUncheckedUpdateManyWithoutPanelNestedInput
    dailySummary?: DailySummaryUncheckedUpdateManyWithoutPanelNestedInput
  }

  export type PanelCreateWithoutDailySummaryInput = {
    id?: string
    name: string
    location: string
    ratedPower: number
    installDate: Date | string
    warrantyYears?: number
    isActive?: boolean
    currentFault?: $Enums.FaultType
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPanelsInput
    readings?: PanelReadingCreateNestedManyWithoutPanelInput
    alerts?: AlertCreateNestedManyWithoutPanelInput
  }

  export type PanelUncheckedCreateWithoutDailySummaryInput = {
    id?: string
    userId: string
    name: string
    location: string
    ratedPower: number
    installDate: Date | string
    warrantyYears?: number
    isActive?: boolean
    currentFault?: $Enums.FaultType
    createdAt?: Date | string
    updatedAt?: Date | string
    readings?: PanelReadingUncheckedCreateNestedManyWithoutPanelInput
    alerts?: AlertUncheckedCreateNestedManyWithoutPanelInput
  }

  export type PanelCreateOrConnectWithoutDailySummaryInput = {
    where: PanelWhereUniqueInput
    create: XOR<PanelCreateWithoutDailySummaryInput, PanelUncheckedCreateWithoutDailySummaryInput>
  }

  export type PanelUpsertWithoutDailySummaryInput = {
    update: XOR<PanelUpdateWithoutDailySummaryInput, PanelUncheckedUpdateWithoutDailySummaryInput>
    create: XOR<PanelCreateWithoutDailySummaryInput, PanelUncheckedCreateWithoutDailySummaryInput>
    where?: PanelWhereInput
  }

  export type PanelUpdateToOneWithWhereWithoutDailySummaryInput = {
    where?: PanelWhereInput
    data: XOR<PanelUpdateWithoutDailySummaryInput, PanelUncheckedUpdateWithoutDailySummaryInput>
  }

  export type PanelUpdateWithoutDailySummaryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    ratedPower?: FloatFieldUpdateOperationsInput | number
    installDate?: DateTimeFieldUpdateOperationsInput | Date | string
    warrantyYears?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    currentFault?: EnumFaultTypeFieldUpdateOperationsInput | $Enums.FaultType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPanelsNestedInput
    readings?: PanelReadingUpdateManyWithoutPanelNestedInput
    alerts?: AlertUpdateManyWithoutPanelNestedInput
  }

  export type PanelUncheckedUpdateWithoutDailySummaryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    ratedPower?: FloatFieldUpdateOperationsInput | number
    installDate?: DateTimeFieldUpdateOperationsInput | Date | string
    warrantyYears?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    currentFault?: EnumFaultTypeFieldUpdateOperationsInput | $Enums.FaultType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readings?: PanelReadingUncheckedUpdateManyWithoutPanelNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutPanelNestedInput
  }

  export type UserCreateWithoutSystemConfigInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    plan?: $Enums.Plan
    currentPlan?: $Enums.Plan
    planExpiresAt?: Date | string | null
    isVerified?: boolean
    isActive?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    panels?: PanelCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    paymentHistory?: PaymentHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSystemConfigInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    plan?: $Enums.Plan
    currentPlan?: $Enums.Plan
    planExpiresAt?: Date | string | null
    isVerified?: boolean
    isActive?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    panels?: PanelUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    paymentHistory?: PaymentHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSystemConfigInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSystemConfigInput, UserUncheckedCreateWithoutSystemConfigInput>
  }

  export type UserUpsertWithoutSystemConfigInput = {
    update: XOR<UserUpdateWithoutSystemConfigInput, UserUncheckedUpdateWithoutSystemConfigInput>
    create: XOR<UserCreateWithoutSystemConfigInput, UserUncheckedCreateWithoutSystemConfigInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSystemConfigInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSystemConfigInput, UserUncheckedUpdateWithoutSystemConfigInput>
  }

  export type UserUpdateWithoutSystemConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    currentPlan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    planExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    panels?: PanelUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    paymentHistory?: PaymentHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSystemConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    currentPlan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    planExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    panels?: PanelUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    paymentHistory?: PaymentHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSubscriptionsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    plan?: $Enums.Plan
    currentPlan?: $Enums.Plan
    planExpiresAt?: Date | string | null
    isVerified?: boolean
    isActive?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    panels?: PanelCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    systemConfig?: SystemConfigCreateNestedOneWithoutUserInput
    paymentHistory?: PaymentHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubscriptionsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    plan?: $Enums.Plan
    currentPlan?: $Enums.Plan
    planExpiresAt?: Date | string | null
    isVerified?: boolean
    isActive?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    panels?: PanelUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    systemConfig?: SystemConfigUncheckedCreateNestedOneWithoutUserInput
    paymentHistory?: PaymentHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubscriptionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
  }

  export type UserUpsertWithoutSubscriptionsInput = {
    update: XOR<UserUpdateWithoutSubscriptionsInput, UserUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubscriptionsInput, UserUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type UserUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    currentPlan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    planExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    panels?: PanelUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    systemConfig?: SystemConfigUpdateOneWithoutUserNestedInput
    paymentHistory?: PaymentHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubscriptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    currentPlan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    planExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    panels?: PanelUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    systemConfig?: SystemConfigUncheckedUpdateOneWithoutUserNestedInput
    paymentHistory?: PaymentHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPaymentHistoryInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    plan?: $Enums.Plan
    currentPlan?: $Enums.Plan
    planExpiresAt?: Date | string | null
    isVerified?: boolean
    isActive?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    panels?: PanelCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    systemConfig?: SystemConfigCreateNestedOneWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPaymentHistoryInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    plan?: $Enums.Plan
    currentPlan?: $Enums.Plan
    planExpiresAt?: Date | string | null
    isVerified?: boolean
    isActive?: boolean
    lastLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    panels?: PanelUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    systemConfig?: SystemConfigUncheckedCreateNestedOneWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPaymentHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentHistoryInput, UserUncheckedCreateWithoutPaymentHistoryInput>
  }

  export type UserUpsertWithoutPaymentHistoryInput = {
    update: XOR<UserUpdateWithoutPaymentHistoryInput, UserUncheckedUpdateWithoutPaymentHistoryInput>
    create: XOR<UserCreateWithoutPaymentHistoryInput, UserUncheckedCreateWithoutPaymentHistoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentHistoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentHistoryInput, UserUncheckedUpdateWithoutPaymentHistoryInput>
  }

  export type UserUpdateWithoutPaymentHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    currentPlan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    planExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    panels?: PanelUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    systemConfig?: SystemConfigUpdateOneWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    currentPlan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    planExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    panels?: PanelUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    systemConfig?: SystemConfigUncheckedUpdateOneWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PanelCreateManyUserInput = {
    id?: string
    name: string
    location: string
    ratedPower: number
    installDate: Date | string
    warrantyYears?: number
    isActive?: boolean
    currentFault?: $Enums.FaultType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateManyUserInput = {
    id?: string
    token: string
    ipAddress?: string | null
    userAgent?: string | null
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type SubscriptionCreateManyUserInput = {
    id?: string
    plan: $Enums.Plan
    status?: $Enums.SubscriptionStatus
    startDate: Date | string
    endDate: Date | string
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    amountPaid: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentHistoryCreateManyUserInput = {
    id?: string
    subscriptionId?: string | null
    razorpayOrderId: string
    razorpayPaymentId?: string | null
    amount: number
    currency?: string
    plan: $Enums.Plan
    status?: $Enums.PaymentStatus
    failureReason?: string | null
    createdAt?: Date | string
  }

  export type PanelUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    ratedPower?: FloatFieldUpdateOperationsInput | number
    installDate?: DateTimeFieldUpdateOperationsInput | Date | string
    warrantyYears?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    currentFault?: EnumFaultTypeFieldUpdateOperationsInput | $Enums.FaultType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readings?: PanelReadingUpdateManyWithoutPanelNestedInput
    alerts?: AlertUpdateManyWithoutPanelNestedInput
    dailySummary?: DailySummaryUpdateManyWithoutPanelNestedInput
  }

  export type PanelUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    ratedPower?: FloatFieldUpdateOperationsInput | number
    installDate?: DateTimeFieldUpdateOperationsInput | Date | string
    warrantyYears?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    currentFault?: EnumFaultTypeFieldUpdateOperationsInput | $Enums.FaultType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    readings?: PanelReadingUncheckedUpdateManyWithoutPanelNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutPanelNestedInput
    dailySummary?: DailySummaryUncheckedUpdateManyWithoutPanelNestedInput
  }

  export type PanelUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    ratedPower?: FloatFieldUpdateOperationsInput | number
    installDate?: DateTimeFieldUpdateOperationsInput | Date | string
    warrantyYears?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    currentFault?: EnumFaultTypeFieldUpdateOperationsInput | $Enums.FaultType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    amountPaid?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    amountPaid?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    amountPaid?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentHistoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentHistoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentHistoryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PanelReadingCreateManyPanelInput = {
    id?: string
    timestamp?: Date | string
    voltage: number
    current: number
    power: number
    temperature: number
    irradiance: number
    humidity: number
    efficiency: number
  }

  export type AlertCreateManyPanelInput = {
    id?: string
    severity: $Enums.AlertSeverity
    category: $Enums.AlertCategory
    title: string
    message: string
    actionRequired: string
    estimatedLoss?: number | null
    resolved?: boolean
    resolvedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type DailySummaryCreateManyPanelInput = {
    id?: string
    date: Date | string
    totalEnergy: number
    avgEfficiency: number
    moneySaved: number
    co2Offset: number
    peakPower: number
    peakTime: Date | string
  }

  export type PanelReadingUpdateWithoutPanelInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    voltage?: FloatFieldUpdateOperationsInput | number
    current?: FloatFieldUpdateOperationsInput | number
    power?: FloatFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    irradiance?: FloatFieldUpdateOperationsInput | number
    humidity?: FloatFieldUpdateOperationsInput | number
    efficiency?: FloatFieldUpdateOperationsInput | number
  }

  export type PanelReadingUncheckedUpdateWithoutPanelInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    voltage?: FloatFieldUpdateOperationsInput | number
    current?: FloatFieldUpdateOperationsInput | number
    power?: FloatFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    irradiance?: FloatFieldUpdateOperationsInput | number
    humidity?: FloatFieldUpdateOperationsInput | number
    efficiency?: FloatFieldUpdateOperationsInput | number
  }

  export type PanelReadingUncheckedUpdateManyWithoutPanelInput = {
    id?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    voltage?: FloatFieldUpdateOperationsInput | number
    current?: FloatFieldUpdateOperationsInput | number
    power?: FloatFieldUpdateOperationsInput | number
    temperature?: FloatFieldUpdateOperationsInput | number
    irradiance?: FloatFieldUpdateOperationsInput | number
    humidity?: FloatFieldUpdateOperationsInput | number
    efficiency?: FloatFieldUpdateOperationsInput | number
  }

  export type AlertUpdateWithoutPanelInput = {
    id?: StringFieldUpdateOperationsInput | string
    severity?: EnumAlertSeverityFieldUpdateOperationsInput | $Enums.AlertSeverity
    category?: EnumAlertCategoryFieldUpdateOperationsInput | $Enums.AlertCategory
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    actionRequired?: StringFieldUpdateOperationsInput | string
    estimatedLoss?: NullableFloatFieldUpdateOperationsInput | number | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertUncheckedUpdateWithoutPanelInput = {
    id?: StringFieldUpdateOperationsInput | string
    severity?: EnumAlertSeverityFieldUpdateOperationsInput | $Enums.AlertSeverity
    category?: EnumAlertCategoryFieldUpdateOperationsInput | $Enums.AlertCategory
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    actionRequired?: StringFieldUpdateOperationsInput | string
    estimatedLoss?: NullableFloatFieldUpdateOperationsInput | number | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertUncheckedUpdateManyWithoutPanelInput = {
    id?: StringFieldUpdateOperationsInput | string
    severity?: EnumAlertSeverityFieldUpdateOperationsInput | $Enums.AlertSeverity
    category?: EnumAlertCategoryFieldUpdateOperationsInput | $Enums.AlertCategory
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    actionRequired?: StringFieldUpdateOperationsInput | string
    estimatedLoss?: NullableFloatFieldUpdateOperationsInput | number | null
    resolved?: BoolFieldUpdateOperationsInput | boolean
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailySummaryUpdateWithoutPanelInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalEnergy?: FloatFieldUpdateOperationsInput | number
    avgEfficiency?: FloatFieldUpdateOperationsInput | number
    moneySaved?: FloatFieldUpdateOperationsInput | number
    co2Offset?: FloatFieldUpdateOperationsInput | number
    peakPower?: FloatFieldUpdateOperationsInput | number
    peakTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailySummaryUncheckedUpdateWithoutPanelInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalEnergy?: FloatFieldUpdateOperationsInput | number
    avgEfficiency?: FloatFieldUpdateOperationsInput | number
    moneySaved?: FloatFieldUpdateOperationsInput | number
    co2Offset?: FloatFieldUpdateOperationsInput | number
    peakPower?: FloatFieldUpdateOperationsInput | number
    peakTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailySummaryUncheckedUpdateManyWithoutPanelInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    totalEnergy?: FloatFieldUpdateOperationsInput | number
    avgEfficiency?: FloatFieldUpdateOperationsInput | number
    moneySaved?: FloatFieldUpdateOperationsInput | number
    co2Offset?: FloatFieldUpdateOperationsInput | number
    peakPower?: FloatFieldUpdateOperationsInput | number
    peakTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PanelCountOutputTypeDefaultArgs instead
     */
    export type PanelCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PanelCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SessionDefaultArgs instead
     */
    export type SessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PanelDefaultArgs instead
     */
    export type PanelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PanelDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PanelReadingDefaultArgs instead
     */
    export type PanelReadingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PanelReadingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AlertDefaultArgs instead
     */
    export type AlertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AlertDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DailySummaryDefaultArgs instead
     */
    export type DailySummaryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DailySummaryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SystemConfigDefaultArgs instead
     */
    export type SystemConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SystemConfigDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubscriptionDefaultArgs instead
     */
    export type SubscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SubscriptionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PaymentHistoryDefaultArgs instead
     */
    export type PaymentHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PaymentHistoryDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}