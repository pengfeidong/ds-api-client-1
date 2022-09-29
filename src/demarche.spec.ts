import { dsApiClient } from "./__helpers";

describe("Demarche (unit)", () => {
  it("Has to retrieve demarche number 1", async () => {
    const response = await dsApiClient.demarche(1);
    expect(response?.demarche?.number).toBe(1);
  });
});
// test
