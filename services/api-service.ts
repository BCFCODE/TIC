import { Volume } from "@/app/(dashboard)/components/utils/convertToGbps";

class ApiService {
  private endpoint = "https://api-ddos.tic.ir/api";

  getCountChart = async (): Promise<{ count: number } | { error: string }> =>
    await fetch(`${this.endpoint}/count-chart`, {
      cache: "no-store",
    })
      .then((res) => res.json())
      .catch(() => ({ error: `Failed to fetch count chart` }));

  getPPSsum = async (): Promise<
    { count: number; sum: number } | { error: string }
  > =>
    await fetch(`${this.endpoint}/sum-pps`, {
      cache: "no-store",
    })
      .then((res) => res.json())
      .catch(() => ({ error: `Failed to fetch sum pps` }));

  getPetaBytes = async (): Promise<
    { count: number; sum: number } | { error: string }
  > =>
    await fetch(`${this.endpoint}/sum-lrl`, {
      cache: "no-store",
    })
      .then((res) => res.json())
      .catch(() => ({ error: `Failed to fetch peta bytes (sum-lrl)` }));

  getAttackVolumes = async (): Promise<Volume[] | { error: string }> =>
    await fetch(`${this.endpoint}/top-five-lrl`, {
      cache: "no-store",
    })
      .then((res) => res.json())
      .catch(() => ({
        error: `Failed to fetch attack volumes (top-five-lrl)`,
      }));

  getDuration = async (): Promise<{ duration: number } | { error: string }> =>
    await fetch(`${this.endpoint}/duration`, {
      cache: "no-store",
    })
      .then((res) => res.json())
      .catch(() => ({
        error: `Failed to fetch duration`,
      }));
}

export default ApiService;
