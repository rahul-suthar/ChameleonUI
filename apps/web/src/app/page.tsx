import { PLATFORM_SCHEMA_VERSION } from "@genui/core";

export default function Home() {
  return (
    <main className="p-10">
      <h1>GenUI Health Check</h1>
      <p>{PLATFORM_SCHEMA_VERSION}</p>
    </main>
  )
}
