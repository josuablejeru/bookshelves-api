const booksConfig = {
  USER_ID: BigInt(process.env.USER_ID || 0),
  BOOKSHELVE_ID: Number(process.env.BOOKSHELVE_ID || 0)
}

export const getBooksConfig = () => {
  if ((booksConfig.USER_ID && booksConfig.BOOKSHELVE_ID) === 0) {
    throw new Error(`Configs for bookshelve are wrong...`);
  }

  return booksConfig
}