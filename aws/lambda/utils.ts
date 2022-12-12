
export const toApiResult = (statusCode: number, obj: Record<string, any>) => {
  return {
    statusCode,
    body: JSON.stringify({
      ...obj
    }),
  };
}