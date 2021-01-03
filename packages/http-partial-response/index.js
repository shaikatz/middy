import mask from 'json-mask'

const defaults = {
  filteringKeyName: 'fields'
}

export default (opts = {}) => {
  const options = Object.assign({}, defaults, opts)
  const { filteringKeyName } = options

  const httpPartialResponseMiddlewareAfter = async (handler) => {
    let body = handler.response?.body
    if (!body) return

    const fields = handler.event?.queryStringParameters?.[filteringKeyName]
    if (!fields) return

    let isBodyStringified
    try {
      body = JSON.parse(body)
      isBodyStringified = true
    } catch (e) {
      if (typeof body !== 'object') return
    }

    const filteredBody = mask(body, fields)

    handler.response.body = isBodyStringified
      ? JSON.stringify(filteredBody)
      : filteredBody
  }
  return {
    after: httpPartialResponseMiddlewareAfter
  }
}