

export const handler = async (event: any, context: any, callback: any) => {

  console.log("test")

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'hello world',
    }),
  };
}
