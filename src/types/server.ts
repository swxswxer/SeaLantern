export interface ServerInstance {
  id: string;
  name: string;
  core_type: string;
  core_version: string;
  mc_version: string;
  path: string;
  jar_path: string;
  java_path: string;
  max_memory: number;
  min_memory: number;
  jvm_args: string[];
  port: number;
  created_at: number;
  last_started_at: number | null;
}

export type ServerStatus = "Stopped" | "Starting" | "Running" | "Stopping" | "Error";
