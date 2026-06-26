/**
 * Current platform schema version.
 *
 * Increment whenever the serialized UI document
 * structure changes.
 */

export const PLATFORM_SCHEMA_VERSION = "1.0.0" as const;

export type PlatformSchemaVersion = typeof PLATFORM_SCHEMA_VERSION;
