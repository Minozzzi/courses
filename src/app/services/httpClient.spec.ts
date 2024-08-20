import { vi } from 'vitest';
import { httpClient } from './httpClient';

vi.mock('@/app/config/envs', () => ({
  envs: { apiUrl: "http://example.com" }
}));

describe("httpClient", () => {
  it("should be created with the correct baseURL", async () => {
    expect(httpClient.defaults.baseURL).toBe("http://example.com");
  });
});
