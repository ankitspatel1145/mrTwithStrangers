export const fetchAllEvents = () => (
  $.ajax({
    method: 'get',
    url: 'api/events'
  })
)

export const fetchSingleEvent = (id) => (
  $.ajax({
    method: 'get',
    url: `api/events/${id}`
  })
)

export const createEvent = (event) => (
  $.ajax({
    method: 'post',
    url: `api/events/`,
    data: {event}
  })
)