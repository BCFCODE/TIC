class ApiService {
  private endpoint = "https://api-ddos.tic.ir/api";

  getCountChart = async (): Promise<{ count: number } | { error: string }> =>
    await fetch(`${this.endpoint}/count-chart`, {
      cache: "no-store",
    })
      .then((res) => res.json())
      .catch(() => ({ error: `Failed to fetch count chart` }));
}

export default ApiService;
