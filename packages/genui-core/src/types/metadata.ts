import type { PlatformSchemaVersion } from "../schema-version";
import type { ISODateString, NonEmptyString, PageId } from "./common";

export interface Metadata {
  id: PageId;
  title: NonEmptyString;
  description: NonEmptyString;
  version: PlatformSchemaVersion;
  generatedAt: ISODateString;
}
