import axios from "axios";

const api = axios.create({
  baseURL: "http://ec2-100-25-136-128.compute-1.amazonaws.com/api/",
});

export function createEvent(name: string, date: Date, prize: number, winnerId: number) {
  return api.post("/invoke/createAsset", {
    asset: [
      {
        "@assetType": "event",
        name: name,
        date: date,
        prize: prize,
        winner: {
          id: winnerId,
        },
      },
    ],
  });
}

export function createTeam(name: string, id: number) {
  return api.post("/invoke/createAsset", {
    asset: [
      {
        "@assetType": "team",
        name: name,
        id: id,
      },
    ],
  });
}

export function createDriver(name: string, id: number, teamId: number) {
  return api.post("/invoke/createAsset", {
    asset: [
      {
        "@assetType": "driver",
        name: name,
        id: id,
        team: {
          id: teamId,
        },
      },
    ],
  });
}

export function createCar(model: string, id: number, driverId: number) {
  return api.post("/invoke/createAsset", {
    asset: [
      {
        "@assetType": "car",
        id: id,
        model: model,
        driver: {
          id: driverId,
        },
      },
    ],
  });
}

export function readEvent(name: string, date: Date) {
  return api.post("/query/readAsset", {
    key: {
      "@assetType": "event",
      name: name,
      date: date,
    },
  });
}

export function readTeam(id: number) {
  return api.post("/query/readAsset", {
    key: {
      "@assetType": "team",
      id: id,
    },
  });
}

export function readDriver(id: number) {
  return api.post("/query/readAsset", {
    key: {
      "@assetType": "driver",
      id: id,
    },
  });
}

export function readCar(id: number) {
  return api.post("/query/readAsset", {
    key: {
      "@assetType": "car",
      id: id,
    },
  });
}

export function readAll(type: string) {
  return api.post("query/search", {
    query: {
      selector: {
        "@assetType": type,
      },
    },
  });
}

export function deleteCar(id: number) {
  return api.delete("/invoke/deleteAsset", {
    data: {
      key: {
        "@assetType": "car",
        id: id,
      },
    },
  });
}

export function deleteDriver(id: number) {
  return api.delete("/invoke/deleteAsset", {
    data: {
      key: {
        "@assetType": "driver",
        id: id,
      },
    },
  });
}

export function deleteTeam(id: number) {
  return api.delete("/invoke/deleteAsset", {
    data: {
      key: {
        "@assetType": "team",
        id: id,
      },
    },
  });
}

export function deleteEvent(name: string, date: Date) {
  return api.delete("/invoke/deleteAsset", {
    data: {
      key: {
        "@assetType": "event",
        name: name,
        date: date,
      },
    },
  });
}

export function updateEvent(name: string, date: Date, payload: { prize: number; winnerKey: string }) {
  return api.put("/invoke/updateAsset", {
    update: {
      "@assetType": "event",
      name: name,
      date: date,
      prize: payload.prize,
      winner: {
        "@assetType": "driver",
        "@key": payload.winnerKey,
      },
    },
  });
}

export function updateTeam(id: number, payload: { name: string }) {
  return api.put("/invoke/updateAsset", {
    update: {
      "@assetType": "team",
      id: id,
      name: payload.name,
    },
  });
}

export function updateDriver(id: number, payload: { name: string; teamKey: string }) {
  return api.put("/invoke/updateAsset", {
    update: {
      "@assetType": "driver",
      id: id,
      name: payload.name,
      team: {
        "@assetType": "team",
        "@key": payload.teamKey,
      },
    },
  });
}

export function updateCar(id: number, payload: { model: string; driverKey: string }) {
  return api.put("/invoke/updateAsset", {
    update: {
      "@assetType": "car",
      id: id,
      model: payload.model,
      driver: {
        "@assetType": "driver",
        "@key": payload.driverKey,
      },
    },
  });
}

export default api;
