import axios from "axios";

const API_URL = "http://localhost:5000/scores";

export const getScores = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Erreur GET /scores :", error);
    return [];
  }
};

export const postScore = async (pseudo, coups) => {
  try {
    const response = await axios.post(API_URL, { pseudo, coups });
    return response.data;
  } catch (error) {
    console.error("Erreur POST /scores :", error);
    return { success: false, message: "Impossible d’enregistrer le score" };
  }
};
