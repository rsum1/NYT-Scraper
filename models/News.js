module.exports = (model, Schema) => {
  const News = new Schema({
    headline: String,
    summary: String,
    url: String
  })
  return model('News', News)
}