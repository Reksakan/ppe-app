export const getBls = async (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      blsTrends: "BLS Trends",
    })
  } catch(error) {
    res.status(404).json({message: error.message})
  }
};