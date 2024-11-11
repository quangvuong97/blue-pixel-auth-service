// import { Partitioners } from 'kafkajs';
import { utilities as nestWinstonModuleUtilities } from 'nest-winston';
import * as winston from 'winston';

export function createLoggerOption(appName: string) {
  return {
    transports: [
      new winston.transports.Console({
        format: winston.format.combine(
          winston.format.timestamp(),
          winston.format.ms(),
          nestWinstonModuleUtilities.format.nestLike(appName, {
            colors: true,
            prettyPrint: true,
          }),
        ),
      }),
    ],
  };
}

// export function microserviceKafkaOptions(
//   url: string,
//   kafkaCommonGroupId: string,
// ): MicroserviceOptions {
//   return {
//     transport: Transport.KAFKA,
//     options: {
//       client: {
//         clientId: kafkaCommonGroupId,
//         brokers: [url],
//       },
//       consumer: {
//         groupId: kafkaCommonGroupId,
//         heartbeatInterval: 3000,
//         sessionTimeout: 45000,
//       },
//       producer: {
//         createPartitioner: Partitioners.LegacyPartitioner,
//       },
//       run: {
//         autoCommit: true,
//       },
//       subscribe: {
//         fromBeginning: false,
//       },
//     },
//   };
// }

// export function createKafkaClientModule(
//   nameClient: string,
// ): ClientsProviderAsyncOptions {
//   return {
//     imports: undefined,
//     name: nameClient,
//     inject: [ConfigService],
//     useFactory: async (configService: ConfigService) =>
//       ({
//         transport: Transport.KAFKA,
//         options: {
//           client: {
//             clientId: configService.get<string>(
//               `x360-review-service-${configService.get(EEnvConfig.PROJECT_ENV)}`,
//             ),
//             brokers: [configService.get<string>(EEnvConfig.KAFKA_BROKER_URL)],
//           },
//           consumer: {
//             groupId: configService.get<string>(
//               `x360-review-service-${configService.get(EEnvConfig.PROJECT_ENV)}`,
//             ),
//             heartbeatInterval: 3000,
//             sessionTimeout: 45000,
//           },
//         },
//       }) as ClientProvider,
//   };
// }

export async function batchingPromise<T>(
  callback: (page: number, batchSize: number, i: number) => Promise<T[]>,
  count: number | (() => Promise<number>),
): Promise<T[]> {
  const totalElements = typeof count === 'number' ? count : await count();
  const batchSize = 500;
  const totalPages = Math.ceil(totalElements / batchSize);
  const allAssessment: T[] = [];

  for (let page = 0; page < totalPages / 5; page += 1) {
    const promises: Promise<T[]>[] = [];
    for (let i = 0; i < 5 && page * 5 + i < totalPages; i += 1) {
      promises.push(callback(page, batchSize, i));
    }

    // eslint-disable-next-line no-await-in-loop
    const results = await Promise.all(promises);
    allAssessment.push(...results.flat());
  }
  return allAssessment;
}

// export interface KafkaPayload<T> {
//   before: T;
//   after: T;
//   source: T;
//   op: string;
//   ts_ms: number;
//   ts_us: number;
//   ts_ns: number;
//   transaction: unknown | null;
// }

// export interface KafkaMessage<T> {
//   schema: object;
//   payload: KafkaPayload<T>;
// }
