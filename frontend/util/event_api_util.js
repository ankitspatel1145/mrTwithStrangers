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

export const updateEvent = (event) => (
  $.ajax({
    url:`/api/events/${event.id}`,
    method: 'patch',
    data: {event: event}
  })
)
export const deleteEvent = (id) => (
  $.ajax({
    url:`api/events/${id}`,
    method: 'delete'
  })
)