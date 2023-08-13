export default async function getNew(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get the news from the API
    const fetchApi = await fetch(
      `https://newsapi.org/v2/everything?q=${req.body.slug}&apiKey=493b70361fb64dc18a06f30b8251490a`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await fetchApi.json();
    return res.status(200).json({ new: data, message: 'success' });
  } catch (error) {
    console.log(error);
    return res.status(405).json({ error: error, message: 'Error' });
  }
}
