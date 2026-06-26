// nominal (Branded) type to prevent accidental assignment
// between different string identifiers.

export type Brand<T, Name extends string> = T & {
  readonly __brand: Name;
};

export type NodeId = Brand<string, "NodeId">;
export type PageId = Brand<string, "PageId">;
export type SectionId = Brand<string, "SectionId">;
export type ComponentId = Brand<string, "ComponentId">;
export type FieldId = Brand<string, "FieldId">;
export type ActionId = Brand<string, "ActionId">;

export type NonEmptyString = Brand<string, "NonEmptyString">;

export type ISODateString = Brand<string, "ISODateString">;

export type JSONPrimitive = string | number | boolean | null;

export type JSONValue = JSONPrimitive | JSONObject | JSONArray;

export type JSONObject = {
  [key: string]: JSONValue;
};

export type JSONArray = ReadonlyArray<JSONValue>;

export type SerializableObject = JSONObject;
