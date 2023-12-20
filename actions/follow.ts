"use server";

export const onFollow = async (id: string) => {
  try {
    console.log("onFollow", id);
  } catch (error) {
    throw new Error("Internal Error");
  }
};
