export const host =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000/api/v1"
    : "https://sketchlada.herokuapp.com/api/v1"; //TODO: needs to modify
