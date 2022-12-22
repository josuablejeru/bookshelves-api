const booksConfig = {
  USER_ID: BigInt(process.env.USER_ID || 0),
  BOOKSHELF_ID: Number(process.env.BOOKSHELF_ID || 0)
}

export const getBooksConfig = () => {
  if (booksConfig.USER_ID && booksConfig.BOOKSHELF_ID === 0) {
    throw new Error(`Configs for bookshelf are wrong...`);
  }

  return booksConfig
}