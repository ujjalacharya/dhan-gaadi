import jwt from "jsonwebtoken";

export const enc = info => {
  const token = jwt.sign(
    info,
    "hawa"
    // {expiresIn:"1h"}
  );

  return token;
};

export const dec = info => {
  let data = false;
  jwt.verify(info, "hawa", async (err, decoded) => {
    if (err) {
      data = false;
    } else {
      data = decoded;
    }
  });
  return data;
};
