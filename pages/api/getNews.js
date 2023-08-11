export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get the news from the API
    const request = async () => {
      const res = await fetch(
        'https://newsapi.org/v2/top-headlines?country=us&apiKey=493b70361fb64dc18a06f30b8251490a'
      );
      const data = await res.json();
      return data;
    };
    const news = request();
    res.status(200).json({ news: news });
  } catch (error) {
    console.log(error);
    return res.status(405).json({ error: error });
  }
}
