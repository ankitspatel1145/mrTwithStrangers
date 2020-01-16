export const getAllEvents = () => (
  $.ajax({
    method: 'get',
    url: 'api/events'
  })
)

export const getEvent = (id) => (
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